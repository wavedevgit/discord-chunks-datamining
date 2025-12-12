import fs from "fs/promises";
import jsBeautify from "js-beautify";
import cssbueatify from "cssbeautify";
import getModules from "./utils/getModules.js";
import { getChunks, formatCode } from "./utils/getChunks.js";
import determineType from "./utils/getChunkType.js";
import * as acorn from "acorn";
import * as walk from "acorn-walk";
import { readAbleCode } from "./utils/toreadAbleCode.js";
import { reverseJsxFromString } from "./utils/reverseJsx.js";
import { generators } from "./utils/makeChunkName.js";

const { js: beautify } = jsBeautify;

const base = "https://canary.discord.com";
async function getText(url) {
  return await (await fetch(url)).text();
}
async function save(name, content) {
  await fs.writeFile(name, content, "utf-8");
}
function asset(path) {
  return path.startsWith("assets")
    ? base + "/" + path
    : base + "/assets/" + path;
}
async function perf(func, name) {
  const start = Date.now();
  console.log("! " + name);
  await func();
  const end = Date.now();
  console.log(
    "* Done, " + name,
    "Time Taken " + Math.abs(start - end) / 1000 + "s"
  );
  return Math.abs(start - end) / 1000;
}

async function main() {
  console.log("WaveDev Discord Client Dataminer - V1.0.0");
  console.log("Downloading latest canary client web.js file");
  const html = await getText(base + "/app");
  const webjs = asset(html.match(/assets\/web\.[\d\w_]+\.js/)?.[0]);
  if (!webjs) {
    console.log("Error - No webjs file, discord fucked up something....");
    process.exit(1);
  }
  console.log("Web.js - Got url - " + webjs);
  console.log("Scraping list of modules");
  const web = await getText(webjs);
  const modules = getModules(web);

  await save("modules.json", JSON.stringify(modules, null, 4));
  console.log("! Done scraping list of modules");
  const everyChunks = {};
  const timeTaken1 = await perf(async () => {
    return;
    for (let cssFile in modules.css) {
      const stylesheet = await getText(asset(modules.css[cssFile] + ".css"));
      await fs.writeFile(
        "./build/css/" + cssFile + ".css",
        cssbueatify(
          `/**\n  Module ID: ${cssFile}\n  Original File Name: ${modules.css[cssFile]}\n**/\n` +
            stylesheet
        )
      );
    }
  }, "Saving every css file");
  const jsxChunks = [];
  let reactExportsChunk;
  let reactChunk;
  let name = "";
  const timeTaken2 = await perf(async () => {
    async function processInBatches(items, batchSize) {
      let results = [];
      for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        const chunkResults = await Promise.all(
          batch.map(async ([jsFile, path]) => {
            const js = await getText(asset(path + ".js"));
            return getChunks(js, jsFile, path);
          })
        );
        results.push(...chunkResults);
      }
      return results;
    }
    const chunkArray = await processInBatches(Object.entries(modules.js), 5); // 5 at a time

    let chunks = Object.assign({}, ...chunkArray);

    console.log("done chunks from other modules, at web.js now");
    // handle web.js differently as it does not with acorn
    const chunkStart = web.indexOf("var __webpack_modules__=");
    const chunkEnd = web.indexOf(",__webpack_module_cache__={};");
    const chunk = web.slice(chunkStart, chunkEnd);
    const ast = acorn.parse(chunk, { ecmaVersion: "latest", locations: true });
    walk.simple(ast, {
      VariableDeclaration(node) {
        if (node.declarations[0].id.name !== "__webpack_modules__") return;
        for (let prop of node.declarations[0].init.properties) {
          const key = prop.key?.value;
          const chunkNode = prop.value.body;
          const chunkCode = chunk.slice(chunkNode.start, chunkNode.end);
          const codeFormatted = formatCode(chunkCode);
          chunks[key] =
            `/** Chunk was on web.js **/\n` +
            `/** chunk id: ${key}, original params: ${prop.value.params
              .map((p) => p.name || p.value)
              .join(",")} (module,exports,re quire) **/\n` +
            readAbleCode(
              prop.value.params.map((p) => p.name || p.value),
              codeFormatted,
              key
            );
        }
      },
    });
    console.log("web.js done");
    for (let chunk in chunks) {
      everyChunks[chunk] = chunks[chunk];
    }
  }, "Scraping chunks from every module");
  const names = {};
  const timeTaken3 = await perf(async () => {
    console.log("Chunks amount", everyChunks.length);
    const languagesChunks = {};
    const all = {};
    let remaining = everyChunks.length;

    for (let chunk in everyChunks) {
      // check if chunk is component
      if (
        everyChunks[chunk].includes(".jsx)(") ||
        everyChunks[chunk].includes(".jsxs)(")
      ) {
        jsxChunks.push(chunk);
      }
      remaining -= 1;
      const [type, chunkData] = determineType(
        everyChunks[chunk],
        chunk,
        languagesChunks,
        jsxChunks
      );
      const data = {
        id: chunk,
        type,
        data: chunkData,
        fromModule: {
          id: everyChunks[chunk]
            .split("/** Chunk was on")[1]
            .split(" **/")[0]
            .split(" ")[1],
        },
      };
      if (data.type === "intl-loader") {
        for (let language in data.data.languages) {
          languagesChunks[data.data.languages[language].chunkId] = language;
        }
      }
      if (!all[data.type]) all[data.type] = [];
      all[data.type].push({ id: data.id, data: data.data });
      await fs.writeFile(
        "./build/chunks_api/" + data.id + ".json",
        JSON.stringify(data),
        "utf-8"
      );
      if (data.type === "experiment") {
        names[chunk] =
          generators.experiment(
            data.data.id || data.data.name,
            data.data.kind,
            !!data.data.variations ? "apex" : "normal"
          ) || chunk;
      }

      if (data.type === "buildInfo") {
        console.log(data);
        names[chunk] = "buildInfo";
      }
      if (data.type === "component") {
        names[chunk] = `Component${chunk}`;
      }
      if (data.type === "store") {
        names[chunk] = data.data.name.replaceAll(" ", "");
      }
      if (data.type === "intl-messages-definitions") {
        names[chunk] = `IntlMessagesDefinitions${data.data.language}_${chunk}`;
      }
    }
    const stats = {};
    const ids = {};
    for (let [type,chunks] of Object.entries(all)) {
      if (!stats[type]) stats[type] = 0
      if (!ids[type]) ids[type] = []
      for (let i = 0; i< chunks.length; i++) {
          stats[type] += 1
          ids[type].push(chunks[i].id)
      }
    }
    for (let chunk of all["unknown"]) {
      try {
        const [type, chunkData] = determineType(
          everyChunks[chunk.id],
          chunk.id,
          languagesChunks
        );
        const data = {
          id: chunk,
          type,
          data: chunkData,
          fromModule: {
            id: everyChunks[chunk.id]
              .split("/** Chunk was on")[1]
              .split(" **/")[0]
              .split(" ")[1],
          },
        };
        all[data.type].push({ id: data.id, data: data.data });
      } catch {}
    }
    delete all["unknown"];
    await fs.writeFile(
      "./build/chunks_api/all.json",
      JSON.stringify(all),
      "utf-8"
    );

    await fs.writeFile(
      "./build/stats.json",
      JSON.stringify(stats),
      "utf-8"
    );
    await fs.writeFile(
      "./build/names.json",
      JSON.stringify(names),
      "utf-8"
    );
    await fs.writeFile(
      "./build/ids.json",
      JSON.stringify(ids),
      "utf-8"
    );
  }, "Generating json list of chunks");
  const timeTaken4 = await perf(async () => {
    for (let [chunk, name] of Object.entries(names)) {
      if (everyChunks[chunk].includes(`require("./${chunk}.js")`)) {
        if (name === "react_exports") {
          names[chunk] = "react";
        }
        console.log(chunk, name);
        everyChunks[chunk] = everyChunks[chunk]
          .replaceAll(`${chunk}.js`, `${name}.js`)
          .replaceAll(`Chunk${chunk}`, name);
      }
    }
    for (let chunk in everyChunks) {
      let code = beautify(everyChunks[chunk], {
        indent_size: 2,
        space_in_empty_paren: true,
      });

      for (let chunk of jsxChunks) {
        if (code.includes(`"./${chunk}.js"`)) {
          code = code.replaceAll(`"./${chunk}.js"`, `"./${chunk}.jsx"`);
        }
      }
      await fs.writeFile(
        "./build/chunks/" +
          (names[chunk] || chunk) +
          "." +
          (jsxChunks.includes(chunk) ? "jsx" : "js"),
        code
      );
    }
  }, "Saving chunks and renaming with readable names");
  await fs.writeFile("./build/modules.json", JSON.stringify(modules), "utf-8");
  console.log(
    "* Done, scraping build!, Estimated Time taken " +
      (timeTaken1 + timeTaken2 + timeTaken3 + timeTaken4) +
      "s"
  );
}
main();

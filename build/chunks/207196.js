/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
function t(e) {
  return {
    name: "Dockerfile",
    aliases: ["docker"],
    case_insensitive: !0,
    keywords: ["from", "maintainer", "expose", "env", "arg", "user", "onbuild", "stopsignal"],
    contains: [e.HASH_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
      beginKeywords: "run cmd entrypoint volume add copy workdir label healthcheck shell",
      starts: {
        end: /[^\\]$/,
        subLanguage: "bash"
      }
    }],
    illegal: "</"
  }
}
e.exports = t
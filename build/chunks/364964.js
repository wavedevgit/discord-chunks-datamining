/** Chunk was on web.js **/
/** chunk id: 364964, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => p
}), require("./388685.js"), require("./35282.js"), require("./415506.js"), require("./704826.js");
var Chunk466332 = require("./466332.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk462176 = require("./462176.js");
Chunk466332.Z.registerLanguage("ansi", Chunk462176.Z);
let s = /(<script\/?\\?>)|(html\\?`)/g,
  l = new Set(["html", "xml", "javascript", "typescript", "handlebars"]),
  c = /^[a-z0-9_+\-.#]+$/,
  u = Chunk466332.Z.listLanguages(),
  d = new Map;
for (let e of u) {
  e = module.toLowerCase();
  let t = Chunk466332.Z.getLanguage(module);
  if (null == exports) continue;
  let n = exports.aliases;
  if (d.set(module, module), null != require)
    for (let t of require) d.set(exports.toLowerCase(), module)
}
for (let [e, t] of d)
  if (null == module.match(c)) throw Error("Language name does not match regex: ".concat(module));

function f(e) {
  return d.get(e.toLowerCase())
}
let p = {
    highlight(e, t, n) {
      if (!h(t, e)) return null;
      Date.now();
      let i = r.Z.highlight(t, {
        ignoreIllegals: n,
        language: e
      });
      return Date.now(), i
    },
    hasLanguage: e => null != r.Z.getLanguage(e),
    isKnownLanguage: e => d.has(e.toLowerCase()),
    resolveLanguageName: f
  },
  _ = a().repeat("/", 15);

function h(e, t) {
  if (e.indexOf(_) >= 0) returnfalse;
  let n = 0;
  for (let t of e.split("\n")) {
    if (t.length > 1e3) returnfalse;
    null == t.match(/^\s*[/][/]/) && null != t.match(/[^/]/) && (n = 0);
    let e = t.match(/[/]/g);
    if (null != e && (n += e.length) > 30) returnfalse
  }
  let r = f(t);
  if (null != r && l.has(r)) {
    var i;
    let t = e.replace(/\s*/g, "").match(s);
    if ((null != (i = null == t ? true : t.length) ? i : 0) > 10) returnfalse
  }
  returntrue
}
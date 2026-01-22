/** Chunk was on web.js **/
/** chunk id: 752238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => p
}), require("./896048.js"), require("./747238.js"), require("./65821.js"), require("./812715.js");
var Chunk28728 = require("./28728.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk319888 = require("./319888.js");
Chunk28728.A.registerLanguage("ansi", Chunk319888.A);
let o = /(<script\/?\\?>)|(html\\?`)/g,
  l = new Set(["html", "xml", "javascript", "typescript", "handlebars"]),
  c = /^[a-z0-9_+\-.#]+$/,
  u = Chunk28728.A.listLanguages(),
  d = new Map;
for (let e of u) {
  e = module.toLowerCase();
  let t = Chunk28728.A.getLanguage(module);
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
      let i = r.A.highlight(t, {
        ignoreIllegals: n,
        language: e
      });
      return Date.now(), i
    },
    hasLanguage: e => null != r.A.getLanguage(e),
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
    let t = e.replace(/\s*/g, "").match(o);
    if ((null != (i = null == t ? true : t.length) ? i : 0) > 10) returnfalse
  }
  returntrue
}
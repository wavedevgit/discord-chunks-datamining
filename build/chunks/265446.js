/** Chunk was on web.js **/
/** chunk id: 265446, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./35282.js"), require("./388685.js");
var Chunk53529 = require("./53529.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js");
let a = ["applicationCommand"];

function s(e) {
  let {
    insertBreak: t,
    insertText: n
  } = e;
  return e.insertBreak = () => {
    l(e) && t()
  }, e.insertSoftBreak = () => {
    e.insertBreak()
  }, e.insertText = t => {
    if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void n(t);
    let o = t.split(/\r\n|\r|\n/);
    if (!l(e)) return void n(o.join(" "));
    r.T.withSingleEntry(e, () => {
      let t = false;
      for (let r of o) t && i.Q.splitNodes(e, {
        always: true
      }), n(r), t = true
    })
  }, e
}

function l(e) {
  let t = o.bN.getCurrentBlock(e);
  return null != t && !a.includes(t[0].type)
}
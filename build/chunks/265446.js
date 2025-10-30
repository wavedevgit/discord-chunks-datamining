/** Chunk was on web.js **/
/** chunk id: 265446, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./35282.js"), require("./388685.js");
var Chunk53529 = require("./53529.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js");
let o = ["applicationCommand"],
  s = ["gameMentionInput", "timestampMentionInput"];

function l(e) {
  let {
    insertBreak: t,
    insertText: n
  } = e;
  return e.insertBreak = () => {
    c(e) && t()
  }, e.insertSoftBreak = () => {
    e.insertBreak()
  }, e.insertText = t => {
    if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void n(t);
    let a = t.split(/\r\n|\r|\n/);
    if (!c(e)) return void n(a.join(" "));
    r.T.withSingleEntry(e, () => {
      let t = false;
      for (let r of a) t && i.Q.splitNodes(e, {
        always: true
      }), n(r), t = true
    })
  }, e
}

function c(e) {
  var t;
  let n = a.bN.getCurrentBlock(e),
    r = a.bN.getCurrentInline(e);
  return null != n && !o.includes(n[0].type) && !s.includes(null == r || null == (t = r[0]) ? true : t.type)
}
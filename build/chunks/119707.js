/** Chunk was on web.js **/
/** chunk id: 119707, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./747238.js"), require("./896048.js");
var Chunk186306 = require("./186306.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js");
let s = ["applicationCommand"],
  o = ["gameMentionInput", "timestampMentionInput"];

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
    c(e) ? r.o.withSingleEntry(e, () => {
      let t = false;
      for (let r of a) t && i.b.splitNodes(e, {
        always: true
      }), n(r), t = true
    }) : n(a.join(" "))
  }, e
}

function c(e) {
  var t;
  let n = a.VW.getCurrentBlock(e),
    r = a.VW.getCurrentInline(e);
  return null != n && !s.includes(n[0].type) && !o.includes(null == r || null == (t = r[0]) ? true : t.type)
}
/** Chunk was on web.js **/
/** chunk id: 236576, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk551483 = require("./551483.js");

function o(e) {
  let {
    apply: t,
    onChange: n
  } = e;
  return e.apply = n => {
    t(n), i.Ot.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
  }, e.onChange = () => {
    if (i.Ot.isValid(e, e.selection) || (e.selection = s(e)), null != e.selection) {
      let t, n, [o, s] = i.ZF.edges(e.selection),
        l = false;
      for (; null != o && null != (t = i.VW.getParentVoid(e, o)) && !a.XR.includes(t[0].type);) o = i.VW.before(e, o, {
        unit: "offset"
      }), l = true;
      for (; null != s && null != (n = i.VW.getParentVoid(e, s)) && !a.XR.includes(n[0].type);) s = i.VW.after(e, s, {
        unit: "offset"
      }), l = true;
      l && null != o && null != s && (i.ZF.isForward(e.selection) ? r.b.select(e, {
        anchor: o,
        focus: s
      }) : r.b.select(e, {
        anchor: s,
        focus: o
      }))
    }
    n()
  }, e
}

function s(e) {
  let t;
  if (i.Ot.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
  else {
    let n = i.VW.end(e, []);
    t = {
      anchor: n,
      focus: n
    }
  }
  return t
}
/** Chunk was on web.js **/
/** chunk id: 618136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk42530 = require("./42530.js");

function o(e) {
  let {
    apply: t,
    onChange: n
  } = e;
  return e.apply = n => {
    t(n), i.Ew.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
  }, e.onChange = () => {
    if (i.Ew.isValid(e, e.selection) || (e.selection = s(e)), null != e.selection) {
      let t, n, [o, s] = i.M8.edges(e.selection),
        l = false;
      for (; null != o && null != (t = i.bN.getParentVoid(e, o)) && !a.On.includes(t[0].type);) o = i.bN.before(e, o, {
        unit: "offset"
      }), l = true;
      for (; null != s && null != (n = i.bN.getParentVoid(e, s)) && !a.On.includes(n[0].type);) s = i.bN.after(e, s, {
        unit: "offset"
      }), l = true;
      l && null != o && null != s && (i.M8.isForward(e.selection) ? r.Q.select(e, {
        anchor: o,
        focus: s
      }) : r.Q.select(e, {
        anchor: s,
        focus: o
      }))
    }
    n()
  }, e
}

function s(e) {
  let t;
  if (i.Ew.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
  else {
    let n = i.bN.end(e, []);
    t = {
      anchor: n,
      focus: n
    }
  }
  return t
}
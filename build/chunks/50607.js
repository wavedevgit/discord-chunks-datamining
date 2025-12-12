/** Chunk was on web.js **/
/** chunk id: 50607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => a
});
var Chunk685578 = require("./685578.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js");
let a = (e, t) => {
  let {
    addMark: n,
    removeMark: a,
    deleteBackward: s,
    deleteForward: l,
    setFragmentData: c,
    insertData: u,
    insertFragmentData: d,
    insertTextData: f
  } = e;
  return (e = (0, r.BU)(e)).addMark = n, e.removeMark = a, e.setFragmentData = c, e.insertData = u, e.insertFragmentData = d, e.insertTextData = f, e.deleteBackward = n => {
    if ("line" !== n || t) s(n);
    else {
      let t = o.lP.getLineActionRange(e, true);
      null != t && i.Q.delete(e, {
        at: t
      })
    }
  }, e.deleteForward = n => {
    if ("line" !== n || t) l(n);
    else {
      let t = o.lP.getLineActionRange(e, false);
      null != t && i.Q.delete(e, {
        at: t
      })
    }
  }, e
}
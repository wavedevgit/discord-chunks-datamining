/** Chunk was on web.js **/
/** chunk id: 50607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => o
});
var Chunk685578 = require("./685578.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js");
let o = (e, t) => {
  let {
    addMark: n,
    removeMark: o,
    deleteBackward: s,
    deleteForward: l,
    setFragmentData: c,
    insertData: u,
    insertFragmentData: d,
    insertTextData: f
  } = e;
  return (e = (0, r.BU)(e)).addMark = n, e.removeMark = o, e.setFragmentData = c, e.insertData = u, e.insertFragmentData = d, e.insertTextData = f, e.deleteBackward = n => {
    if ("line" === n && !t) {
      let t = a.M8.toPoint(e.selection);
      if (null != t) {
        let r = a.bN.before(e, t, {
          unit: n
        });
        if (null != r) {
          let n = a.lP.getLineStart(e, t, false);
          null != n && a.Jz.isAfter(n, r) ? i.Q.delete(e, {
            at: {
              anchor: n,
              focus: t
            }
          }) : i.Q.delete(e, {
            at: {
              anchor: r,
              focus: t
            }
          });
          return
        }
      }
    }
    s(n)
  }, e.deleteForward = n => {
    if ("line" === n && !t) {
      let t = a.M8.toPoint(e.selection);
      if (null != t) {
        let r = a.bN.after(e, t, {
          unit: n
        });
        if (null != r) {
          let n = a.lP.getLineEnd(e, t, false);
          null != n && a.Jz.isBefore(n, r) ? i.Q.delete(e, {
            at: {
              anchor: n,
              focus: t
            }
          }) : i.Q.delete(e, {
            at: {
              anchor: r,
              focus: t
            }
          });
          return
        }
      }
    }
    l(n)
  }, e
}
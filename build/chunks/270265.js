/** Chunk was on web.js **/
/** chunk id: 270265, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => o
});
var Chunk253018 = require("./253018.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js");
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
  return (e = (0, r.o$)(e)).addMark = n, e.removeMark = o, e.setFragmentData = c, e.insertData = u, e.insertFragmentData = d, e.insertTextData = f, e.deleteBackward = n => {
    if ("line" === n && !t) {
      let t = a.ZF.toPoint(e.selection);
      if (null != t) {
        let r = a.VW.before(e, t, {
          unit: n
        });
        if (null != r) {
          let n = a.e0.getLineStart(e, t, false);
          null != n && a.Kh.isAfter(n, r) ? i.b.delete(e, {
            at: {
              anchor: n,
              focus: t
            }
          }) : i.b.delete(e, {
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
      let t = a.ZF.toPoint(e.selection);
      if (null != t) {
        let r = a.VW.after(e, t, {
          unit: n
        });
        if (null != r) {
          let n = a.e0.getLineEnd(e, t, false);
          null != n && a.Kh.isBefore(n, r) ? i.b.delete(e, {
            at: {
              anchor: n,
              focus: t
            }
          }) : i.b.delete(e, {
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
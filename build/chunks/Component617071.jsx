/** Chunk was on 58652 **/
/** chunk id: 617071, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk857250 = require("./857250.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk899847 = require("./899847.js"),
  Chunk662502 = require("./662502.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk985018 = require("./985018.jsx");
let u = e => {
  var t, n;
  let {
    parents: u
  } = e, [m, b] = r.useState(false), p = r.useCallback(() => {
    (0, s.Xz)().then(() => {
      var e, t;
      (0, i.showToast)((0, a.o)(d.intl.formatToPlainString(d.t.wr4IT5, {
        count: u.length,
        parent1: u[0].username,
        parent2: null == (e = u[1]) ? true : e.username,
        parent3: null == (t = u[2]) ? true : t.username
      }), i.ToastType.SUCCESS)), b(true)
    }).catch(() => {
      o.A.showFailedToast()
    })
  }, [u]);
  if (0 === u.length) return null;
  let x = d.intl.formatToPlainString(d.t.HqyWeO, {
    count: u.length,
    parent1: u[0].username,
    parent2: null == (t = u[1]) ? true : t.username,
    parent3: null == (n = u[2]) ? true : n.username
  });
  return (0, l.jsx)(c.PQ, {
    title: x,
    description: d.intl.string(d.t["5l/hlt"]),
    buttonText: m ? d.intl.string(d.t.ntuuk7) : d.intl.string(d.t["sYdX/H"]),
    buttonDisabled: m,
    onButtonPress: p
  })
}
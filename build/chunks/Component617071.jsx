/** Chunk was on 12236 **/
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
  } = e, [m, p] = r.useState(false), b = r.useCallback(() => {
    (0, s.Xz)().then(() => {
      var e, t;
      (0, a.showToast)((0, i.o)(c.intl.formatToPlainString(c.t.wr4IT5, {
        count: u.length,
        parent1: u[0].username,
        parent2: null == (e = u[1]) ? true : e.username,
        parent3: null == (t = u[2]) ? true : t.username
      }), a.ToastType.SUCCESS)), p(true)
    }).catch(() => {
      o.A.showFailedToast()
    })
  }, [u]);
  if (0 === u.length) return null;
  let _ = c.intl.formatToPlainString(c.t.HqyWeO, {
    count: u.length,
    parent1: u[0].username,
    parent2: null == (t = u[1]) ? true : t.username,
    parent3: null == (n = u[2]) ? true : n.username
  });
  return (0, l.jsx)(d.PQ, {
    title: _,
    description: c.intl.string(c.t["5l/hlt"]),
    buttonText: m ? c.intl.string(c.t.ntuuk7) : c.intl.string(c.t["sYdX/H"]),
    buttonDisabled: m,
    onButtonPress: b
  })
}
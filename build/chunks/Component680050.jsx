/** Chunk was on 54844 **/
/** chunk id: 680050, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345332 = require("./345332.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk260722 = require("./260722.js"),
  Chunk681678 = require("./681678.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk388032 = require("./388032.jsx");
let u = e => {
  var t, n;
  let {
    parents: u
  } = e, [m, b] = l.useState(false), p = l.useCallback(() => {
    (0, s.ty)().then(() => {
      var e, t;
      (0, a.showToast)((0, i.Y)(c.intl.formatToPlainString(c.t.wr4IT5, {
        count: u.length,
        parent1: u[0].username,
        parent2: null == (e = u[1]) ? true : e.username,
        parent3: null == (t = u[2]) ? true : t.username
      }), a.ToastType.SUCCESS)), b(true)
    }).catch(() => {
      o.Z.showFailedToast()
    })
  }, [u]);
  if (0 === u.length) return null;
  let g = c.intl.formatToPlainString(c.t.HqyWeO, {
    count: u.length,
    parent1: u[0].username,
    parent2: null == (t = u[1]) ? true : t.username,
    parent3: null == (n = u[2]) ? true : n.username
  });
  return (0, r.jsx)(d.JZ, {
    title: g,
    description: c.intl.string(c.t["5l/hlt"]),
    buttonText: m ? c.intl.string(c.t.ntuuk7) : c.intl.string(c.t["sYdX/H"]),
    buttonDisabled: m,
    onButtonPress: p
  })
}
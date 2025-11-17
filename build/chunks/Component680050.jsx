/** Chunk was on 54844 **/
/** chunk id: 680050, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk345332 = require("./345332.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk260722 = require("./260722.js"),
  Chunk277537 = require("./277537.js"),
  Chunk681678 = require("./681678.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk388032 = require("./388032.jsx");
let m = e => {
  var t, n;
  let {
    parents: m
  } = e, p = (0, o.PO)("share_with_parent_element"), [g, _] = i.useState(false), h = i.useCallback(() => {
    (0, s.ty)().then(() => {
      var e, t;
      (0, a.showToast)((0, l.Y)(u.intl.formatToPlainString(u.t.wr4IT5, {
        count: m.length,
        parent1: m[0].username,
        parent2: null == (e = m[1]) ? true : e.username,
        parent3: null == (t = m[2]) ? true : t.username
      }), a.ToastType.SUCCESS)), _(true)
    }).catch(() => {
      c.Z.showFailedToast()
    })
  }, [m]);
  if (0 === m.length || !p) return null;
  let b = u.intl.formatToPlainString(u.t.HqyWeO, {
    count: m.length,
    parent1: m[0].username,
    parent2: null == (t = m[1]) ? true : t.username,
    parent3: null == (n = m[2]) ? true : n.username
  });
  return (0, r.jsx)(d.JZ, {
    title: b,
    description: u.intl.string(u.t["5l/hlt"]),
    buttonText: g ? u.intl.string(u.t.ntuuk7) : u.intl.string(u.t["sYdX/H"]),
    buttonDisabled: g,
    onButtonPress: h
  })
}
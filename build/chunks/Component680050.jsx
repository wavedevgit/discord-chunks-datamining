/** Chunk was on 15926 **/
/** chunk id: 680050, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk345332 = require("./345332.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk260722 = require("./260722.js"),
  Chunk277537 = require("./277537.js"),
  Chunk681678 = require("./681678.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk388032 = require("./388032.jsx");
let _ = e => {
  var t, n;
  let {
    parents: _
  } = e, m = (0, s.PO)("share_with_parent_element"), [p, g] = i.useState(false), f = i.useCallback(() => {
    (0, o.ty)().then(() => {
      var e, t;
      (0, a.showToast)((0, l.Y)(u.intl.formatToPlainString(u.t.wr4IT0, {
        count: _.length,
        parent1: _[0].username,
        parent2: null == (e = _[1]) ? true : e.username,
        parent3: null == (t = _[2]) ? true : t.username
      }), a.ToastType.SUCCESS)), g(true)
    }).catch(() => {
      c.Z.showFailedToast()
    })
  }, [_]);
  if (0 === _.length || !m) return null;
  let b = u.intl.formatToPlainString(u.t.HqyWeH, {
    count: _.length,
    parent1: _[0].username,
    parent2: null == (t = _[1]) ? true : t.username,
    parent3: null == (n = _[2]) ? true : n.username
  });
  return (0, r.jsx)(d.JZ, {
    title: b,
    description: u.intl.string(u.t["5l/hlp"]),
    buttonText: p ? u.intl.string(u.t.ntuuk5) : u.intl.string(u.t["sYdX/P"]),
    buttonDisabled: p,
    onButtonPress: f
  })
}
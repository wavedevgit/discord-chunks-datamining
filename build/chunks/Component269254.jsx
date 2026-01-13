/** Chunk was on 39010 **/
/** chunk id: 269254, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828214 = require("./828214.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk519110 = require("./519110.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk176354 = require("./176354.js"),
  Chunk691251 = require("./691251.js"),
  Chunk388032 = require("./388032.jsx");

function f(t) {
  let {
    target: e,
    onSelect: n
  } = t, f = e.getAttribute("data-type"), y = e.getAttribute("data-id"), O = e.getAttribute("data-name"), S = e.getAttribute("data-surrogates"), j = "true" === e.getAttribute("data-animated"), v = s.Sb.useSetting(), E = (0, u.Z)({
    type: f,
    id: y,
    name: O,
    isInExpressionPicker: true
  }), P = null != S ? (0, i.jsx)(r.sN, {
    id: "copy",
    label: g.intl.string(g.t.ad58UB),
    action: () => (0, b.JG)(S)
  }) : null, h = (0, c.Z)({
    id: y,
    shiftId: f === p.S.EMOJI ? "<".concat(j ? "a" : "", ":").concat(null == O ? true : O.split("~")[0], ":").concat(y, ">") : true,
    label: f === p.S.STICKER ? g.intl.string(g.t.SJ3249) : g.intl.string(g.t.Ap2oVy)
  }), m = l.useCallback(() => {
    null != y && null != O && (0, b.JG)((0, d.qc)({
      id: y,
      name: O,
      animated: j
    }))
  }, [y, O, j]), I = null != y && null != O && null == S && f === p.S.EMOJI ? (0, i.jsx)(r.sN, {
    id: "copy-image-link",
    label: g.intl.string(g.t["8xHmxo"]),
    action: m,
    icon: o.xPt
  }) : null;
  return (0, i.jsx)(o.v2r, {
    navId: "expression-picker",
    onClose: a.Zy,
    "aria-label": g.intl.string(g.t.XoasSC),
    onSelect: n,
    className: "context-menu",
    children: (0, i.jsxs)(o.kSQ, {
      children: [E, b.wS && v ? null != P ? P : h : null, b.wS && v ? I : null]
    })
  })
}
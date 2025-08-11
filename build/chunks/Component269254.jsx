/** Chunk was on 39010 **/
/** chunk id: 269254, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk828214 = require("./828214.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk519110 = require("./519110.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk691251 = require("./691251.js"),
  Chunk388032 = require("./388032.jsx");

function b(t) {
  let {
    target: e,
    onSelect: i
  } = t, b = e.getAttribute("data-type"), g = e.getAttribute("data-id"), S = e.getAttribute("data-name"), h = e.getAttribute("data-surrogates"), k = "true" === e.getAttribute("data-animated"), v = u.Sb.useSetting(), x = (0, c.Z)({
    type: b,
    id: g,
    name: S,
    isInExpressionPicker: true
  }), A = null != h ? (0, n.jsx)(a.sN, {
    id: "copy",
    label: p.intl.string(p.t.ad58UF),
    action: () => (0, d.JG)(h)
  }) : null, I = (0, r.Z)({
    id: g,
    shiftId: b === o.S.EMOJI ? "<".concat(k ? "a" : "", ":").concat(null == S ? true : S.split("~")[0], ":").concat(g, ">") : true,
    label: b === o.S.STICKER ? p.intl.string(p.t["SJ324+"]) : p.intl.string(p.t.Ap2oV1)
  });
  return (0, n.jsx)(s.v2r, {
    navId: "expression-picker",
    onClose: l.Zy,
    "aria-label": p.intl.string(p.t.XoasSE),
    onSelect: i,
    className: "context-menu",
    children: (0, n.jsxs)(s.kSQ, {
      children: [x, d.wS && v ? null != A ? A : I : null]
    })
  })
}
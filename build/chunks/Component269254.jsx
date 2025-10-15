/** Chunk was on 39010 **/
/** chunk id: 269254, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk828214 = require("./828214.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk519110 = require("./519110.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk691251 = require("./691251.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let {
    target: e,
    onSelect: n
  } = t, p = e.getAttribute("data-type"), g = e.getAttribute("data-id"), f = e.getAttribute("data-name"), O = e.getAttribute("data-surrogates"), y = "true" === e.getAttribute("data-animated"), j = u.Sb.useSetting(), S = (0, c.Z)({
    type: p,
    id: g,
    name: f,
    isInExpressionPicker: true
  }), v = null != O ? (0, r.jsx)(i.sN, {
    id: "copy",
    label: d.intl.string(d.t.ad58UF),
    action: () => (0, s.JG)(O)
  }) : null, E = (0, a.Z)({
    id: g,
    shiftId: p === b.S.EMOJI ? "<".concat(y ? "a" : "", ":").concat(null == f ? true : f.split("~")[0], ":").concat(g, ">") : true,
    label: p === b.S.STICKER ? d.intl.string(d.t["SJ324+"]) : d.intl.string(d.t.Ap2oV1)
  });
  return (0, r.jsx)(l.v2r, {
    navId: "expression-picker",
    onClose: o.Zy,
    "aria-label": d.intl.string(d.t.XoasSE),
    onSelect: n,
    className: "context-menu",
    children: (0, r.jsxs)(l.kSQ, {
      children: [S, s.wS && j ? null != v ? v : E : null]
    })
  })
}
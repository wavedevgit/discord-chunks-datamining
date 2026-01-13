/** Chunk was on 39010 **/
/** chunk id: 269254, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk828214 = require("./828214.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk519110 = require("./519110.jsx"),
  Chunk378233 = require("./378233.js"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk176354 = require("./176354.js"),
  Chunk691251 = require("./691251.js"),
  Chunk388032 = require("./388032.jsx");

function y(t) {
  let {
    target: e,
    onSelect: n
  } = t, y = e.getAttribute("data-type"), O = e.getAttribute("data-id"), S = e.getAttribute("data-name"), j = e.getAttribute("data-surrogates"), m = "true" === e.getAttribute("data-animated"), E = e.getAttribute("data-format-type"), v = y === f.S.EMOJI, P = y === f.S.STICKER, h = b.Sb.useSetting(), I = (0, c.Z)({
    type: y,
    id: O,
    name: S,
    isInExpressionPicker: true
  }), x = null != j ? (0, l.jsx)(r.sN, {
    id: "copy",
    label: g.intl.string(g.t.ad58UB),
    action: () => (0, d.JG)(j)
  }) : null, C = (0, u.Z)({
    id: O,
    shiftId: y === f.S.EMOJI ? "<".concat(m ? "a" : "", ":").concat(null == S ? true : S.split("~")[0], ":").concat(O, ">") : true,
    label: y === f.S.STICKER ? g.intl.string(g.t.SJ3249) : g.intl.string(g.t.Ap2oVy)
  }), N = i.useCallback(() => {
    if (null != O && null != S) {
      if (v)(0, d.JG)((0, p.qc)({
        id: O,
        name: S,
        animated: m
      }));
      else if (P && null != E) {
        let t = (0, s.Q6)({
          id: O,
          name: S,
          format_type: Number(E)
        });
        null != t && (0, d.JG)(t)
      }
    }
  }, [O, S, m, v, P, E]), k = null != O && null != S && (v && null == j || P && null != E) ? (0, l.jsx)(r.sN, {
    id: "copy-image-link",
    label: g.intl.string(g.t["8xHmxo"]),
    action: N,
    icon: o.xPt
  }) : null;
  return (0, l.jsx)(o.v2r, {
    navId: "expression-picker",
    onClose: a.Zy,
    "aria-label": g.intl.string(g.t.XoasSC),
    onSelect: n,
    className: "context-menu",
    children: (0, l.jsxs)(o.kSQ, {
      children: [I, d.wS && h ? null != x ? x : C : null, d.wS && h ? k : null]
    })
  })
}
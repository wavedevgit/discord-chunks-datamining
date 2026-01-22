/** Chunk was on 46132 **/
/** chunk id: 233503, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk477782 = require("./477782.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk253925 = require("./253925.jsx"),
  Chunk378058 = require("./378058.js"),
  Chunk253932 = require("./253932.js"),
  Chunk957565 = require("./957565.js"),
  Chunk690521 = require("./690521.js"),
  Chunk60587 = require("./60587.js"),
  Chunk985018 = require("./985018.jsx");

function f(t) {
  let {
    target: e,
    onSelect: n
  } = t, f = e.getAttribute("data-type"), O = e.getAttribute("data-id"), j = e.getAttribute("data-name"), m = e.getAttribute("data-surrogates"), v = "true" === e.getAttribute("data-animated"), E = e.getAttribute("data-format-type"), S = f === d.g.EMOJI, A = f === d.g.STICKER, C = b.Q_.useSetting(), I = (0, c.A)({
    type: f,
    id: O,
    name: j,
    isInExpressionPicker: true
  }), P = null != m ? (0, l.jsx)(i.Dr, {
    id: "copy",
    label: y.intl.string(y.t.ad58UB),
    action: () => (0, g.C)(m)
  }) : null, x = (0, u.A)({
    id: O,
    shiftId: f === d.g.EMOJI ? "<".concat(v ? "a" : "", ":").concat(null == j ? true : j.split("~")[0], ":").concat(O, ">") : true,
    label: f === d.g.STICKER ? y.intl.string(y.t.SJ3249) : y.intl.string(y.t.Ap2oVy)
  }), h = r.useCallback(() => {
    if (null != O && null != j) {
      if (S)(0, g.C)((0, p.Ez)({
        id: O,
        name: j,
        animated: v
      }));
      else if (A && null != E) {
        let t = (0, s.zg)({
          id: O,
          name: j,
          format_type: Number(E)
        });
        null != t && (0, g.C)(t)
      }
    }
  }, [O, j, v, S, A, E]), w = null != O && null != j && (S && null == m || A && null != E) ? (0, l.jsx)(i.Dr, {
    id: "copy-image-link",
    label: y.intl.string(y.t["8xHmxo"]),
    action: h,
    icon: o.qYV
  }) : null;
  return (0, l.jsx)(o.W1t, {
    navId: "expression-picker",
    onClose: a.Z_,
    "aria-label": y.intl.string(y.t.XoasSC),
    onSelect: n,
    className: "context-menu",
    children: (0, l.jsxs)(o.rXV, {
      children: [I, g.p5 && C ? null != P ? P : x : null, g.p5 && C ? w : null]
    })
  })
}
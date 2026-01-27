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
  } = t, f = e.getAttribute("data-type"), O = e.getAttribute("data-id"), j = e.getAttribute("data-name"), A = e.getAttribute("data-surrogates"), m = "true" === e.getAttribute("data-animated"), v = e.getAttribute("data-format-type"), E = f === y.g.EMOJI, S = f === y.g.STICKER, C = g.Q_.useSetting(), I = (0, u.A)({
    type: f,
    id: O,
    name: j,
    isInExpressionPicker: true
  }), P = null != A ? (0, i.jsx)(r.Dr, {
    id: "copy",
    label: b.intl.string(b.t.ad58UB),
    action: () => (0, p.C)(A)
  }) : null, x = (0, a.A)({
    id: O,
    shiftId: f === y.g.EMOJI ? "<".concat(m ? "a" : "", ":").concat(null == j ? true : j.split("~")[0], ":").concat(O, ">") : true,
    label: f === y.g.STICKER ? b.intl.string(b.t.SJ3249) : b.intl.string(b.t.Ap2oVy)
  }), h = l.useCallback(() => {
    if (null != O && null != j) {
      if (E)(0, p.C)((0, d.Ez)({
        id: O,
        name: j,
        animated: m
      }));
      else if (S && null != v) {
        let t = (0, s.zg)({
          id: O,
          name: j,
          format_type: Number(v)
        });
        null != t && (0, p.C)(t)
      }
    }
  }, [O, j, m, E, S, v]), w = null != O && null != j && (E && null == A || S && null != v) ? (0, i.jsx)(r.Dr, {
    id: "copy-image-link",
    label: b.intl.string(b.t["8xHmxo"]),
    action: h,
    icon: o.qYV,
    leadingAccessory: {
      type: "icon",
      icon: o.qYV
    }
  }) : null;
  return (0, i.jsx)(o.W1t, {
    "data-menu-migrated": true,
    navId: "expression-picker",
    onClose: c.Z_,
    "aria-label": b.intl.string(b.t.XoasSC),
    onSelect: n,
    className: "context-menu",
    children: (0, i.jsxs)(o.rXV, {
      children: [I, p.p5 && C ? null != P ? P : x : null, p.p5 && C ? w : null]
    })
  })
}
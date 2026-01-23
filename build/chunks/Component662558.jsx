/** Chunk was on 24947 **/
/** chunk id: 662558, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk393033 = require("./393033.js"),
  Chunk36149 = require("./36149.js"),
  Chunk40449 = require("./40449.js"),
  Chunk536242 = require("./536242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk138596 = require("./138596.js"),
  Chunk831498 = require("./831498.js");
let m = function(e) {
  let {
    onClose: t,
    onComplete: a,
    transitionState: l,
    webviewUrl: m
  } = e, _ = (0, o.W$)(), [x, b] = i.useState(0), g = i.useCallback(() => {
    a(), t()
  }, [a, t]), C = i.useCallback(() => {
    (0, r.kBI)(d.SW) && g()
  }, [g]);
  (0, c.dZ)(C);
  let k = i.useCallback(e => {
      if (_ && "" !== m) {
        var t;
        (null == e || null == (t = e.data) ? true : t.eventType) === "Verification.Result" && g()
      }
    }, [m, g, _]),
    v = i.useCallback(() => {
      b(x + 1)
    }, [x]);
  return i.useEffect(() => (window.addEventListener("message", k), () => {
    window.removeEventListener("message", k)
  }), [k]), (0, n.jsxs)(r.EOs, {
    "data-migration-pending": true,
    transitionState: l,
    className: s()(h.zr, f.rh),
    parentComponent: "AgeVerificationExpressiveModal",
    size: r.rIJ.MEDIUM,
    children: [(0, n.jsx)(r.$mQ, {
      "data-migration-pending": true,
      className: s()(h.Qs, h.WM),
      scrollbarType: "none",
      children: (0, n.jsx)("iframe", {
        id: "frame",
        src: m,
        className: h.pU,
        allow: "camera; microphone"
      }, x)
    }), (0, n.jsx)(r.jlY, {
      "data-migration-pending": true,
      children: (0, n.jsxs)(r.ButtonGroup, {
        fullWidth: true,
        children: [(0, n.jsx)(r.Button, {
          fullWidth: true,
          variant: "secondary",
          icon: r.Zge,
          text: p.intl.string(u.default.b7Oqdu),
          onClick: t
        }), (0, n.jsx)(r.Button, {
          fullWidth: true,
          variant: "secondary",
          icon: r.fNY,
          text: p.intl.string(u.default["0vTx7j"]),
          onClick: v
        })]
      })
    })]
  })
}
/** Chunk was on 24947 **/
/** chunk id: 662558, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk393033 = require("./393033.js"),
  Chunk36149 = require("./36149.js"),
  Chunk40449 = require("./40449.js"),
  Chunk536242 = require("./536242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk138596 = require("./138596.js"),
  Chunk831498 = require("./831498.js");
let h = function(e) {
  let {
    onClose: a,
    onComplete: t,
    transitionState: s,
    webviewUrl: h
  } = e, m = (0, d.W$)(), [x, g] = i.useState(0), k = i.useCallback(() => {
    t(), a()
  }, [t, a]), v = i.useCallback(() => {
    (0, l.kBI)(o.SW) && k()
  }, [k]);
  (0, c.dZ)(v);
  let C = i.useCallback(e => {
      if (m && "" !== h) {
        var a;
        (null == e || null == (a = e.data) ? true : a.eventType) === "Verification.Result" && k()
      }
    }, [h, k, m]),
    j = i.useCallback(() => {
      g(x + 1)
    }, [x]);
  return i.useEffect(() => (window.addEventListener("message", C), () => {
    window.removeEventListener("message", C)
  }), [C]), (0, n.jsxs)(l.EOs, {
    "data-migration-pending": true,
    transitionState: s,
    className: r()(b.zr, f.rh),
    parentComponent: "AgeVerificationExpressiveModal",
    size: l.rIJ.MEDIUM,
    children: [(0, n.jsx)(l.$mQ, {
      "data-migration-pending": true,
      className: r()(b.Qs, b.WM),
      scrollbarType: "none",
      children: (0, n.jsx)("iframe", {
        id: "frame",
        src: h,
        className: b.pU,
        allow: "camera; microphone"
      }, x)
    }), (0, n.jsx)(l.jlY, {
      "data-migration-pending": true,
      children: (0, n.jsxs)(l.ButtonGroup, {
        fullWidth: true,
        children: [(0, n.jsx)(l.Button, {
          fullWidth: true,
          variant: "secondary",
          icon: l.Zge,
          text: p.intl.string(u.default.b7Oqdu),
          onClick: a
        }), (0, n.jsx)(l.Button, {
          fullWidth: true,
          variant: "secondary",
          icon: l.fNY,
          text: p.intl.string(u.default["0vTx7j"]),
          onClick: j
        })]
      })
    })]
  })
}
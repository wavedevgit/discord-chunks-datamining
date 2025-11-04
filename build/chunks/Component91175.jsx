/** Chunk was on 67749 **/
/** chunk id: 91175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk788080 = require("./788080.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk153177 = require("./153177.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179835 = require("./179835.js");
let m = function(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: i,
    webviewUrl: m
  } = e, p = (0, r.GE)(), [h, C] = a.useState(0), g = a.useCallback(() => {
    n(), t()
  }, [n, t]), x = a.useCallback(() => {
    (0, s.nfh)(c.zJ) && g()
  }, [g]);
  (0, d.F5)(x);
  let _ = a.useCallback(e => {
      if (p && "" !== m) {
        var t;
        (null == e || null == (t = e.data) ? true : t.eventType) === "Verification.Result" && g()
      }
    }, [m, g, p]),
    k = a.useCallback(() => {
      C(h + 1)
    }, [h]);
  return a.useEffect(() => (window.addEventListener("message", _), () => {
    window.removeEventListener("message", _)
  }), [_]), (0, l.jsxs)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: i,
    className: o()(b.root, b.fullbleedContent),
    parentComponent: "AgeVerificationExpressiveModal",
    size: s.CgR.MEDIUM,
    children: [(0, l.jsx)(s.hzk, {
      "data-migration-pending": true,
      className: o()(b.content, b.fullbleed),
      scrollbarType: "none",
      children: (0, l.jsx)("iframe", {
        id: "frame",
        src: m,
        className: b.iframe,
        allow: "camera; microphone"
      }, h)
    }), (0, l.jsx)(s.mzw, {
      "data-migration-pending": true,
      children: (0, l.jsxs)(s.ButtonGroup, {
        fullWidth: true,
        children: [(0, l.jsx)(s.Button, {
          fullWidth: true,
          variant: "secondary",
          icon: s.j9r,
          text: f.intl.string(u.default.b7Oqdu),
          onClick: t
        }), (0, l.jsx)(s.Button, {
          fullWidth: true,
          variant: "secondary",
          icon: s.DuK,
          text: f.intl.string(u.default["0vTx7j"]),
          onClick: k
        })]
      })
    })]
  })
}
/** Chunk was on 67749 **/
/** chunk id: 91175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
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
  Chunk179835 = require("./179835.js"),
  Chunk248319 = require("./248319.js");
let b = function(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: i,
    webviewUrl: b
  } = e, C = (0, r.GE)(), [_, h] = a.useState(0), x = a.useCallback(() => {
    n(), t()
  }, [n, t]), g = a.useCallback(() => {
    (0, s.nfh)(d.zJ) && x()
  }, [x]);
  (0, c.F5)(g);
  let k = a.useCallback(e => {
      if (C && "" !== b) {
        var t;
        (null == e || null == (t = e.data) ? true : t.eventType) === "Verification.Result" && x()
      }
    }, [b, x, C]),
    v = a.useCallback(() => {
      h(_ + 1)
    }, [_]);
  return a.useEffect(() => (window.addEventListener("message", k), () => {
    window.removeEventListener("message", k)
  }), [k]), (0, l.jsxs)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: i,
    className: o()(m.root, p.fullbleedContent),
    parentComponent: "AgeVerificationExpressiveModal",
    size: s.CgR.MEDIUM,
    children: [(0, l.jsx)(s.hzk, {
      "data-migration-pending": true,
      className: o()(m.content, m.fullbleed),
      scrollbarType: "none",
      children: (0, l.jsx)("iframe", {
        id: "frame",
        src: b,
        className: m.iframe,
        allow: "camera; microphone"
      }, _)
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
          onClick: v
        })]
      })
    })]
  })
}
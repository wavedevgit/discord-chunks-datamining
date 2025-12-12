/** Chunk was on 67749 **/
/** chunk id: 91175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk788080 = require("./788080.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk144287 = require("./144287.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk139941 = require("./139941.js"),
  Chunk975401 = require("./975401.js");
let m = function(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: i,
    webviewUrl: m
  } = e, C = (0, s.GE)(), [h, x] = l.useState(0), g = l.useCallback(() => {
    n(), t()
  }, [n, t]), k = l.useCallback(() => {
    (0, c.nfh)(d.zJ) && g()
  }, [g]);
  (0, r.F5)(k);
  let v = l.useCallback(e => {
      if (C && "" !== m) {
        var t;
        (null == e || null == (t = e.data) ? true : t.eventType) === "Verification.Result" && g()
      }
    }, [m, g, C]),
    j = l.useCallback(() => {
      x(h + 1)
    }, [h]);
  return l.useEffect(() => (window.addEventListener("message", v), () => {
    window.removeEventListener("message", v)
  }), [v]), (0, a.jsxs)(c.Y0X, {
    "data-migration-pending": true,
    transitionState: i,
    className: o()(b.root, p.fullbleedContent),
    parentComponent: "AgeVerificationExpressiveModal",
    size: c.CgR.MEDIUM,
    children: [(0, a.jsx)(c.hzk, {
      "data-migration-pending": true,
      className: o()(b.content, b.fullbleed),
      scrollbarType: "none",
      children: (0, a.jsx)("iframe", {
        id: "frame",
        src: m,
        className: b.iframe,
        allow: "camera; microphone"
      }, h)
    }), (0, a.jsx)(c.mzw, {
      "data-migration-pending": true,
      children: (0, a.jsxs)(c.ButtonGroup, {
        fullWidth: true,
        children: [(0, a.jsx)(c.Button, {
          fullWidth: true,
          variant: "secondary",
          icon: c.j9r,
          text: f.intl.string(u.default.b7Oqdu),
          onClick: t
        }), (0, a.jsx)(c.Button, {
          fullWidth: true,
          variant: "secondary",
          icon: c.DuK,
          text: f.intl.string(u.default["0vTx7j"]),
          onClick: j
        })]
      })
    })]
  })
}
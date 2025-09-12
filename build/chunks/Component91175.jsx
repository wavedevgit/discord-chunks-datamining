/** Chunk was on 67749 **/
/** chunk id: 91175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk788080 = require("./788080.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk398158 = require("./398158.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179835 = require("./179835.js"),
  Chunk248319 = require("./248319.js");
let h = function(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: i,
    webviewUrl: h
  } = e, b = (0, r.GE)(), [x, C] = l.useState(0), _ = l.useCallback(() => {
    n(), t()
  }, [n, t]), k = l.useCallback(() => {
    (0, s.nfh)(d.zJ) && _()
  }, [_]);
  (0, c.F5)(k);
  let v = l.useCallback(e => {
      if (b && "" !== h) {
        var t;
        (null == e || null == (t = e.data) ? true : t.eventType) === "Verification.Result" && _()
      }
    }, [h, _, b]),
    g = l.useCallback(() => {
      C(x + 1)
    }, [x]);
  return l.useEffect(() => (window.addEventListener("message", v), () => {
    window.removeEventListener("message", v)
  }), [v]), (0, a.jsxs)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: i,
    className: o()(p.root, m.fullbleedContent),
    parentComponent: "AgeVerificationExpressiveModal",
    size: s.CgR.MEDIUM,
    children: [(0, a.jsx)(s.hzk, {
      "data-migration-pending": true,
      className: o()(p.content, p.fullbleed),
      scrollbarType: "none",
      children: (0, a.jsx)("iframe", {
        id: "frame",
        src: h,
        className: p.iframe,
        allow: "camera; microphone"
      }, x)
    }), (0, a.jsx)(s.mzw, {
      children: (0, a.jsxs)(s.hE2, {
        fullWidth: true,
        children: [(0, a.jsx)(s.zxk, {
          fullWidth: true,
          variant: "secondary",
          icon: s.j9r,
          text: f.intl.string(u.default.b7Oqdn),
          onClick: t
        }), (0, a.jsx)(s.zxk, {
          fullWidth: true,
          variant: "secondary",
          icon: s.DuK,
          text: f.intl.string(u.default["0vTx7u"]),
          onClick: g
        })]
      })
    })]
  })
}
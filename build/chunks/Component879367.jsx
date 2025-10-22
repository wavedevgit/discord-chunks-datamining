/** Chunk was on 12014 **/
/** chunk id: 879367, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk788080 = require("./788080.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk513358 = require("./513358.js");
let m = function(e) {
  let {
    onClose: n,
    onComplete: t,
    onCancel: i,
    transitionState: m,
    webviewUrl: p
  } = e, h = (0, s.GE)(), C = l.useCallback(() => {
    t(), n()
  }, [t, n]), _ = l.useCallback(() => {
    (0, r.nfh)(d.zJ) && C()
  }, [C]);
  (0, c.F5)(_);
  let b = l.useCallback(e => {
    if (h && "" !== p) {
      var n;
      (null == e || null == (n = e.data) ? true : n.eventType) === "Verification.Result" && C()
    }
  }, [p, C, h]);
  return l.useEffect(() => (window.addEventListener("message", b), () => {
    window.removeEventListener("message", b)
  }), [b]), (0, a.jsxs)(r.Y0X, {
    "data-migration-pending": true,
    transitionState: m,
    className: o()(u.root, u.fullbleedContent),
    parentComponent: "AgeVerificationModal",
    size: r.CgR.MEDIUM,
    children: [(0, a.jsx)(r.hzk, {
      "data-migration-pending": true,
      className: o()(u.content, u.fullbleed),
      scrollbarType: "none",
      children: (0, a.jsx)("iframe", {
        id: "frame",
        src: p,
        className: u.iframe,
        allow: "camera; microphone"
      })
    }), (0, a.jsx)(r.mzw, {
      "data-migration-pending": true,
      children: (0, a.jsx)("div", {
        className: u.footer,
        children: (0, a.jsxs)(r.ButtonGroup, {
          justify: "space-between",
          fullWidthContainer: true,
          children: [(0, a.jsx)(r.Avr, {
            variant: "secondary",
            text: f.intl.string(f.t.fjKFae),
            onClick: n
          }), null != i && (0, a.jsx)(r.Avr, {
            variant: "secondary",
            text: f.intl.string(f.t["4gTnU0"]),
            onClick: i
          })]
        })
      })
    })]
  })
}
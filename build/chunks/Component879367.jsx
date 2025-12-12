/** Chunk was on 12014 **/
/** chunk id: 879367, original params: e,n,a (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk788080 = require("./788080.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975401 = require("./975401.js");
let m = function(e) {
  let {
    onClose: n,
    onComplete: a,
    onCancel: i,
    transitionState: m,
    webviewUrl: p
  } = e, h = (0, r.GE)(), C = l.useCallback(() => {
    a(), n()
  }, [a, n]), b = l.useCallback(() => {
    (0, o.nfh)(d.zJ) && C()
  }, [C]);
  (0, s.F5)(b);
  let g = l.useCallback(e => {
    if (h && "" !== p) {
      var n;
      (null == e || null == (n = e.data) ? true : n.eventType) === "Verification.Result" && C()
    }
  }, [p, C, h]);
  return l.useEffect(() => (window.addEventListener("message", g), () => {
    window.removeEventListener("message", g)
  }), [g]), (0, t.jsxs)(o.Y0X, {
    "data-migration-pending": true,
    transitionState: m,
    className: c()(u.root, u.fullbleedContent),
    parentComponent: "AgeVerificationModal",
    size: o.CgR.MEDIUM,
    children: [(0, t.jsx)(o.hzk, {
      "data-migration-pending": true,
      className: c()(u.content, u.fullbleed),
      scrollbarType: "none",
      children: (0, t.jsx)("iframe", {
        id: "frame",
        src: p,
        className: u.iframe,
        allow: "camera; microphone"
      })
    }), (0, t.jsx)(o.mzw, {
      "data-migration-pending": true,
      children: (0, t.jsx)("div", {
        className: u.footer,
        children: (0, t.jsxs)(o.ButtonGroup, {
          justify: "space-between",
          fullWidthContainer: true,
          children: [(0, t.jsx)(o.Avr, {
            variant: "secondary",
            text: f.intl.string(f.t.fjKFae),
            onClick: n
          }), null != i && (0, t.jsx)(o.Avr, {
            variant: "secondary",
            text: f.intl.string(f.t["4gTnU0"]),
            onClick: i
          })]
        })
      })
    })]
  })
}
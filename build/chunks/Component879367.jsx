/** Chunk was on 12014 **/
/** chunk id: 879367, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk788080 = require("./788080.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk248319 = require("./248319.js");
let m = function(e) {
  let {
    onClose: n,
    onComplete: t,
    onCancel: s,
    transitionState: m,
    webviewUrl: g,
    useV1: p = false
  } = e, h = (0, o.GE)(), x = i.useCallback(() => {
    t(), n()
  }, [t, n]), v = i.useCallback(() => {
    (0, l.nfh)(d.zJ) && x()
  }, [x]);
  (0, c.F5)(v);
  let j = i.useCallback(e => {
    if (h && "" !== g) {
      var n;
      (null == e || null == (n = e.data) ? true : n.eventType) === "Verification.Result" && x()
    }
  }, [g, x, h]);
  return i.useEffect(() => (window.addEventListener("message", j), () => {
    window.removeEventListener("message", j)
  }), [j]), (0, a.jsxs)(l.Y0X, {
    "data-migration-pending": true,
    transitionState: m,
    className: u.root,
    parentComponent: "AgeVerificationModal",
    size: l.CgR.MEDIUM,
    children: [(0, a.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: r()(u.content, {
        [u.fullbleed]: !p
      }),
      scrollbarType: "none",
      children: [p && (0, a.jsx)(l.X6q, {
        variant: "heading-xl/bold",
        children: f.intl.string(f.t.tYNaXF)
      }), (0, a.jsx)("iframe", {
        id: "frame",
        src: g,
        className: u.iframe,
        allow: "camera; microphone"
      })]
    }), (0, a.jsx)(l.mzw, {
      "data-migration-pending": true,
      children: p ? (0, a.jsx)(l.Avr, {
        text: f.intl.string(f.t["4gTnU1"]),
        onClick: n
      }) : (0, a.jsx)("div", {
        className: u.footer,
        children: (0, a.jsxs)(l.hE2, {
          justify: "space-between",
          children: [(0, a.jsx)(l.Avr, {
            variant: "secondary",
            text: f.intl.string(f.t.fjKFaW),
            onClick: n
          }), (0, a.jsx)(l.Avr, {
            variant: "secondary",
            text: f.intl.string(f.t["4gTnU1"]),
            onClick: s
          })]
        })
      })
    })]
  })
}
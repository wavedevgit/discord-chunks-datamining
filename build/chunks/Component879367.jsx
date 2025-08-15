/** Chunk was on 12014 **/
/** chunk id: 879367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk788080 = require("./788080.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk248319 = require("./248319.js");
let S = function(e) {
  let {
    onClose: t,
    onComplete: n,
    onCancel: l,
    transitionState: S,
    webviewUrl: A,
    useV1: N = false
  } = e, L = (0, a.GE)(), u = E.useCallback(() => {
    n(), t()
  }, [n, t]), T = E.useCallback(() => {
    (0, r.nfh)(_.zJ) && u()
  }, [u]);
  (0, I.F5)(T);
  let d = E.useCallback(e => {
    if (L && "" !== A) {
      var t;
      (null == e || null == (t = e.data) ? true : t.eventType) === "Verification.Result" && u()
    }
  }, [A, u, L]);
  return E.useEffect(() => (window.addEventListener("message", d), () => {
    window.removeEventListener("message", d)
  }), [d]), (0, i.jsxs)(r.Y0X, {
    "data-migration-pending": true,
    transitionState: S,
    className: c.root,
    parentComponent: "AgeVerificationModal",
    size: r.CgR.MEDIUM,
    children: [(0, i.jsxs)(r.hzk, {
      "data-migration-pending": true,
      className: s()(c.content, {
        [c.fullbleed]: !N
      }),
      scrollbarType: "none",
      children: [N && (0, i.jsx)(r.X6q, {
        variant: "heading-xl/bold",
        children: o.intl.string(o.t.tYNaXF)
      }), (0, i.jsx)("iframe", {
        id: "frame",
        src: A,
        className: c.iframe,
        allow: "camera; microphone"
      })]
    }), (0, i.jsx)(r.mzw, {
      "data-migration-pending": true,
      children: N ? (0, i.jsx)(r.Avr, {
        text: o.intl.string(o.t["4gTnU1"]),
        onClick: t
      }) : (0, i.jsx)("div", {
        className: c.footer,
        children: (0, i.jsxs)(r.hE2, {
          justify: "space-between",
          children: [(0, i.jsx)(r.Avr, {
            variant: "secondary",
            text: o.intl.string(o.t.fjKFaW),
            onClick: t
          }), (0, i.jsx)(r.Avr, {
            variant: "secondary",
            text: o.intl.string(o.t["4gTnU1"]),
            onClick: l
          })]
        })
      })
    })]
  })
}
/** Chunk was on 23425 **/
/** chunk id: 745336, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk393033 = require("./393033.js"),
  Chunk36149 = require("./36149.js"),
  Chunk40449 = require("./40449.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk831498 = require("./831498.js");
let f = function(e) {
  let {
    onClose: a,
    onComplete: n,
    onCancel: i,
    transitionState: f,
    webviewUrl: b
  } = e, m = (0, l.W$)(), h = t.useCallback(() => {
    n(), a()
  }, [n, a]), g = t.useCallback(() => {
    (0, c.kBI)(o.SW) && h()
  }, [h]);
  (0, d.dZ)(g);
  let j = t.useCallback(e => {
    if (m && "" !== b) {
      var a;
      (null == e || null == (a = e.data) ? true : a.eventType) === "Verification.Result" && h()
    }
  }, [b, h, m]);
  return t.useEffect(() => (window.addEventListener("message", j), () => {
    window.removeEventListener("message", j)
  }), [j]), (0, s.jsxs)(c.EOs, {
    "data-migration-pending": true,
    transitionState: f,
    className: r()(u.zr, u.rh),
    parentComponent: "AgeVerificationModal",
    size: c.rIJ.MEDIUM,
    children: [(0, s.jsx)(c.$mQ, {
      "data-migration-pending": true,
      className: r()(u.Qs, u.WM),
      scrollbarType: "none",
      children: (0, s.jsx)("iframe", {
        id: "frame",
        src: b,
        className: u.pU,
        allow: "camera; microphone"
      })
    }), (0, s.jsx)(c.jlY, {
      "data-migration-pending": true,
      children: (0, s.jsx)("div", {
        className: u.qr,
        children: (0, s.jsxs)(c.ButtonGroup, {
          justify: "space-between",
          fullWidthContainer: true,
          children: [(0, s.jsx)(c.QWc, {
            variant: "secondary",
            text: p.intl.string(p.t.fjKFae),
            onClick: a
          }), null != i && (0, s.jsx)(c.QWc, {
            variant: "secondary",
            text: p.intl.string(p.t["4gTnU0"]),
            onClick: i
          })]
        })
      })
    })]
  })
}
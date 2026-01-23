/** Chunk was on 23425 **/
/** chunk id: 745336, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  default: () => m
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
let m = function(e) {
  let {
    onClose: a,
    onComplete: n,
    onCancel: s,
    transitionState: m,
    webviewUrl: f
  } = e, h = (0, c.W$)(), _ = i.useCallback(() => {
    n(), a()
  }, [n, a]), g = i.useCallback(() => {
    (0, l.kBI)(d.SW) && _()
  }, [_]);
  (0, o.dZ)(g);
  let j = i.useCallback(e => {
    if (h && "" !== f) {
      var a;
      (null == e || null == (a = e.data) ? true : a.eventType) === "Verification.Result" && _()
    }
  }, [f, _, h]);
  return i.useEffect(() => (window.addEventListener("message", j), () => {
    window.removeEventListener("message", j)
  }), [j]), (0, t.jsxs)(l.EOs, {
    "data-migration-pending": true,
    transitionState: m,
    className: r()(p.zr, p.rh),
    parentComponent: "AgeVerificationModal",
    size: l.rIJ.MEDIUM,
    children: [(0, t.jsx)(l.$mQ, {
      "data-migration-pending": true,
      className: r()(p.Qs, p.WM),
      scrollbarType: "none",
      children: (0, t.jsx)("iframe", {
        id: "frame",
        src: f,
        className: p.pU,
        allow: "camera; microphone"
      })
    }), (0, t.jsx)(l.jlY, {
      "data-migration-pending": true,
      children: (0, t.jsx)("div", {
        className: p.qr,
        children: (0, t.jsxs)(l.ButtonGroup, {
          justify: "space-between",
          fullWidthContainer: true,
          children: [(0, t.jsx)(l.QWc, {
            variant: "secondary",
            text: u.intl.string(u.t.fjKFae),
            onClick: a
          }), null != s && (0, t.jsx)(l.QWc, {
            variant: "secondary",
            text: u.intl.string(u.t["4gTnU0"]),
            onClick: s
          })]
        })
      })
    })]
  })
}
/** Chunk was on 67749 **/
/** chunk id: 91175, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk435935 = require("./435935.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk788080 = require("./788080.js"),
  Chunk81643 = require("./81643.js"),
  Chunk469775 = require("./469775.js"),
  Chunk398158 = require("./398158.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179835 = require("./179835.js"),
  Chunk248319 = require("./248319.js");
let m = function(e) {
  let {
    onClose: t,
    onComplete: n,
    onCancel: m,
    transitionState: p,
    webviewUrl: h
  } = e, g = (0, r.GE)(), [k, v] = i.useState(0), j = i.useCallback(() => {
    n(), t()
  }, [n, t]), C = i.useCallback(() => {
    (0, o.nfh)(c.zJ) && j()
  }, [j]);
  (0, l.F5)(C);
  let _ = i.useCallback(e => {
      if (g && "" !== h) {
        var t;
        (null == e || null == (t = e.data) ? true : t.eventType) === "Verification.Result" && j()
      }
    }, [h, j, g]),
    b = i.useCallback(() => {
      v(k + 1)
    }, [k]);
  return i.useEffect(() => (window.addEventListener("message", _), () => {
    window.removeEventListener("message", _)
  }), [_]), (0, a.jsxs)(o.Y0X, {
    "data-migration-pending": true,
    transitionState: p,
    className: x.root,
    parentComponent: "AgeVerificationExpressiveModal",
    size: o.CgR.MEDIUM,
    children: [(0, a.jsxs)(o.xBx, {
      justify: s.k.Justify.BETWEEN,
      children: [(0, a.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: u.intl.string(u.t.JHNunp)
      }), (0, a.jsx)(o.olH, {
        onClick: m
      })]
    }), (0, a.jsx)(o.hzk, {
      "data-migration-pending": true,
      className: x.content,
      scrollbarType: "none",
      children: (0, a.jsx)("iframe", {
        id: "frame",
        src: h,
        className: x.iframe,
        allow: "camera; microphone"
      }, k)
    }), (0, a.jsx)("div", {
      className: f.floatingFooter,
      children: (0, a.jsx)("div", {
        className: f.footerButtons,
        children: (0, a.jsxs)(o.hE2, {
          children: [(0, a.jsx)(o.zxk, {
            variant: "secondary",
            icon: o.j9r,
            text: u.intl.string(d.default.b7Oqdn),
            onClick: t
          }), (0, a.jsx)(o.zxk, {
            variant: "secondary",
            icon: o.DuK,
            text: u.intl.string(d.default["0vTx7u"]),
            onClick: b
          })]
        })
      })
    })]
  })
}
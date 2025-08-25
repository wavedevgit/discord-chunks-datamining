/** Chunk was on web.js **/
/** chunk id: 36129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => b
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk974674 = require("./974674.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550385 = require("./550385.js"),
  Chunk781391 = require("./781391.js"),
  Chunk575196 = require("./575196.js"),
  Chunk233398 = require("./233398.js"),
  Chunk629452 = require("./629452.js"),
  Chunk874893 = require("./874893.js"),
  Chunk119475 = require("./119475.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306518 = require("./306518.js");
let E = e => e.map(e => "#".concat(e)),
  b = e => {
    let {
      sharedClientTheme: t,
      from: n
    } = e, {
      setAll: i
    } = (0, f.Ig)();
    return (0, _.b)("Share Client Theme Widget") ? (0, r.jsxs)("div", {
      className: g.container,
      children: [(0, r.jsx)(v, {
        from: n,
        sharedClientTheme: t
      }), (0, r.jsx)(s.zx, {
        text: m.intl.string(m.t.SKNnqq),
        variant: "primary",
        onClick: () => {
          (0, c.XO)(c.wh.CUSTOM_THEME, {
            from: c.tE.SHARE_MESSAGE
          }), i({
            colors: E(t.colors),
            chassisMixAmount: t.base_mix,
            gradientAngle: t.gradient_angle
          }), (0, u.y)(y(t.base_theme))
        }
      })]
    }) : null
  },
  y = e => p.yW[e],
  O = (e, t) => e.split(" ").map((e, n) => "__USERNAME__" !== e ? (0, r.jsxs)(i.Fragment, {
    children: [e, " "]
  }, n) : (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)(a.qE, {
      "aria-label": t.username,
      src: t.getAvatarURL(null, 20),
      size: l.EFr.SIZE_20
    }), " ", t.username]
  }, n)),
  v = e => {
    let {
      sharedClientTheme: t,
      from: n
    } = e, a = i.useMemo(() => {
      var e;
      return (0, d.yz)(E(t.colors), null != (e = t.gradient_angle) ? e : 0)
    }, [t.colors, t.gradient_angle]);
    return (0, r.jsxs)("div", {
      className: g.themePreviewContainer,
      children: [(0, r.jsx)("div", {
        className: g.colorPreview,
        style: {
          background: "".concat(a)
        }
      }), (0, r.jsxs)("div", {
        className: g.sharedByContainer,
        children: [(0, r.jsxs)(l.X6q, {
          variant: "heading-md/semibold",
          className: g.sharedTitle,
          children: [m.intl.string(h.default.KSBBpK), " ", (0, r.jsx)(o.SrA, {})]
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          className: g.sharedBy,
          children: O("".concat(m.intl.format(h.default.fQPSER, {
            username: "__USERNAME__"
          })), n)
        })]
      })]
    })
  }
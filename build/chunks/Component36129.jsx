/** Chunk was on web.js **/
/** chunk id: 36129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => y
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk657707 = require("./657707.js"),
  Chunk974674 = require("./974674.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550385 = require("./550385.js"),
  Chunk739566 = require("./739566.js"),
  Chunk781391 = require("./781391.js"),
  Chunk575196 = require("./575196.js"),
  Chunk233398 = require("./233398.js"),
  Chunk47760 = require("./47760.js"),
  Chunk629452 = require("./629452.js"),
  Chunk119475 = require("./119475.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306518 = require("./306518.js");
let b = e => e.map(e => "#".concat(e)),
  y = e => {
    let {
      message: t
    } = e, {
      sharedClientTheme: n
    } = t, {
      setAll: i
    } = (0, _.Ig)();
    return (0, h.b)("Share Client Theme Widget") && true !== n ? (0, r.jsxs)("div", {
      className: E.container,
      children: [(0, r.jsx)(v, {
        message: t
      }), (0, r.jsx)(s.zx, {
        text: g.intl.string(g.t.SKNnqq),
        fullWidth: true,
        variant: "primary",
        onClick: () => {
          (0, c.XO)(c.wh.CUSTOM_THEME, {
            from: c.tE.SHARE_MESSAGE
          }), i({
            colors: b(n.colors),
            chassisMixAmount: n.base_mix,
            gradientAngle: n.gradient_angle
          }), (0, d.y)((0, p.e)(n.base_theme))
        }
      })]
    }) : null
  },
  O = (e, t, n) => e.split(" ").map((e, a) => "__USERNAME__" !== e ? (0, r.jsxs)(i.Fragment, {
    children: [e, " "]
  }, a) : (0, r.jsxs)("span", {
    className: E.avatarContainer,
    children: [(0, r.jsx)(o.qE, {
      "aria-label": n,
      src: t.getAvatarURL(null, 20),
      size: l.EFr.SIZE_20
    }), " ", n, " "]
  }, a)),
  v = e => {
    let {
      message: t
    } = e, {
      sharedClientTheme: n
    } = t, o = (0, u.ZP)(t), s = i.useMemo(() => {
      var e;
      return true === n ? "" : (0, f.yz)(b(n.colors), null != (e = n.gradient_angle) ? e : 0)
    }, [n]);
    return true === n ? null : (0, r.jsxs)("div", {
      className: E.themePreviewContainer,
      children: [(0, r.jsx)("div", {
        className: E.colorPreview,
        style: {
          background: "".concat(s)
        }
      }), (0, r.jsxs)("div", {
        className: E.sharedByContainer,
        children: [(0, r.jsxs)(l.X6q, {
          variant: "heading-md/semibold",
          className: E.sharedTitle,
          children: [g.intl.string(m.default.KSBBpK), " ", (0, r.jsx)(a.SrA, {})]
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          className: E.sharedBy,
          children: O("".concat(g.intl.format(m.default.fQPSER, {
            username: "__USERNAME__"
          })), t.author, o.nick)
        })]
      })]
    })
  }
/** Chunk was on web.js **/
/** chunk id: 36129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => C
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk990547 = require("./990547.js"),
  Chunk525769 = require("./525769.js"),
  Chunk657707 = require("./657707.js"),
  Chunk974674 = require("./974674.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk312871 = require("./312871.js"),
  Chunk550385 = require("./550385.js"),
  Chunk739566 = require("./739566.js"),
  Chunk781391 = require("./781391.js"),
  Chunk626135 = require("./626135.js"),
  Chunk575196 = require("./575196.js"),
  Chunk233398 = require("./233398.js"),
  Chunk47760 = require("./47760.js"),
  Chunk629452 = require("./629452.js"),
  Chunk981631 = require("./981631.js"),
  Chunk422129 = require("./422129.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306518 = require("./306518.js");
let A = e => e.map(e => "#".concat(e)),
  C = e => {
    let {
      message: t
    } = e, {
      sharedClientTheme: n
    } = t, {
      setAll: i
    } = (0, b.Ig)();
    return (0, O.b)("Share Client Theme Widget") && true !== n ? (0, r.jsxs)("div", {
      className: S.container,
      children: [(0, r.jsx)(R, {
        message: t
      }), (0, r.jsx)(u.zxk, {
        text: T.intl.string(T.t.SKNnqq),
        fullWidth: true,
        variant: "primary",
        onClick: () => {
          g.default.track(v.rMx.CUSTOM_THEME_SHARE_PREVIEWED, {}), (0, p.XO)(p.wh.CUSTOM_THEME, {
            from: p.tE.SHARE_MESSAGE
          }), i({
            colors: A(n.colors),
            chassisMixAmount: n.base_mix,
            gradientAngle: n.gradient_angle
          }), (0, m.y)((0, y.e)(n.base_theme))
        }
      })]
    }) : null
  },
  N = (e, t, n) => e.split(" ").map((e, a) => "__USERNAME__" !== e ? (0, r.jsxs)(i.Fragment, {
    children: [e, " "]
  }, a) : (0, r.jsxs)("span", {
    className: S.avatarContainer,
    children: [(0, r.jsx)(c.qE, {
      "aria-label": n,
      src: t.getAvatarURL(null, 20),
      size: d.EFr.SIZE_20
    }), " ", n, " "]
  }, a)),
  R = e => {
    let {
      message: t
    } = e, {
      sharedClientTheme: n
    } = t, c = (0, h.ZP)(t), u = i.useMemo(() => (0, a.once)(() => {
      (0, f.h)({
        type: o.ImpressionTypes.VIEW,
        name: s.z.CUSTOM_THEME_SHARE,
        properties: {}
      })
    }), []), p = (0, _.Z)({
      onVisible: () => {
        u()
      },
      threshold: 1,
      minTimeVisibleMs: 200
    }), m = i.useMemo(() => {
      var e;
      return true === n ? "" : (0, E.yz)(A(n.colors), null != (e = n.gradient_angle) ? e : 0)
    }, [n]);
    return true === n ? null : (0, r.jsxs)("div", {
      className: S.themePreviewContainer,
      ref: p,
      children: [(0, r.jsx)("div", {
        className: S.colorPreview,
        style: {
          background: "".concat(m)
        }
      }), (0, r.jsxs)("div", {
        className: S.sharedByContainer,
        children: [(0, r.jsxs)(d.Heading, {
          variant: "heading-md/semibold",
          className: S.sharedTitle,
          children: [T.intl.string(I.default.KSBBpC), " ", (0, r.jsx)(l.SrA, {})]
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          className: S.sharedBy,
          children: N("".concat(T.intl.format(I.default.fQPSEf, {
            username: "__USERNAME__"
          })), t.author, c.nick)
        })]
      })]
    })
  }
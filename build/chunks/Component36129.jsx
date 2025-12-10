/** Chunk was on web.js **/
/** chunk id: 36129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => A
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk233398 = require("./233398.js"),
  Chunk47760 = require("./47760.js"),
  Chunk629452 = require("./629452.js"),
  Chunk639745 = require("./639745.js"),
  Chunk981631 = require("./981631.js"),
  Chunk202283 = require("./202283.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306518 = require("./306518.js");
let C = e => e.map(e => "#".concat(e)),
  A = e => {
    let {
      message: t
    } = e, {
      sharedClientTheme: n
    } = t, {
      setAll: i
    } = (0, E.Ig)();
    return (0, y.b)("Share Client Theme Widget") && true !== n ? (0, r.jsxs)("div", {
      className: T.container,
      children: [(0, r.jsx)(P, {
        message: t
      }), (0, r.jsx)(u.zxk, {
        text: I.intl.string(I.t.SKNnqq),
        fullWidth: true,
        variant: "primary",
        onClick: () => {
          g.default.track(v.rMx.CUSTOM_THEME_SHARE_PREVIEWED, {}), (0, _.XO)(_.wh.CUSTOM_THEME, {
            from: _.tE.SHARE_MESSAGE
          }), i({
            colors: C(n.colors),
            chassisMixAmount: n.base_mix,
            gradientAngle: n.gradient_angle
          }), (0, h.y)((0, b.e)(n.base_theme))
        }
      })]
    }) : null
  },
  N = (e, t, n) => e.split(" ").map((e, a) => "__USERNAME__" !== e ? (0, r.jsxs)(i.Fragment, {
    children: [e, " "]
  }, a) : (0, r.jsxs)("span", {
    className: T.avatarContainer,
    children: [(0, r.jsx)(c.qE, {
      "aria-label": n,
      src: t.getAvatarURL(null, 20),
      size: d.EFr.SIZE_20
    }), " ", n, " "]
  }, a)),
  P = e => {
    let {
      message: t
    } = e, {
      sharedClientTheme: n
    } = t, c = (0, m.ZP)(t), u = i.useMemo(() => (0, a.once)(() => {
      (0, f.h)({
        type: o.ImpressionTypes.VIEW,
        name: s.z.CUSTOM_THEME_SHARE,
        properties: {}
      })
    }), []), _ = (0, p.Z)({
      onVisible: () => {
        u()
      },
      threshold: 1,
      minTimeVisibleMs: 200
    }), h = i.useMemo(() => {
      var e;
      return true === n ? "" : (0, O.yz)(C(n.colors), null != (e = n.gradient_angle) ? e : 0)
    }, [n]);
    return true === n ? null : (0, r.jsxs)("div", {
      className: T.themePreviewContainer,
      ref: _,
      children: [(0, r.jsx)("div", {
        className: T.colorPreview,
        style: {
          background: "".concat(h)
        }
      }), (0, r.jsxs)("div", {
        className: T.sharedByContainer,
        children: [(0, r.jsxs)(d.Heading, {
          variant: "heading-md/semibold",
          className: T.sharedTitle,
          children: [I.intl.string(S.default.KSBBpC), " ", (0, r.jsx)(l.SrA, {})]
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          className: T.sharedBy,
          children: N("".concat(I.intl.format(S.default.fQPSEf, {
            username: "__USERNAME__"
          })), t.author, c.nick)
        })]
      })]
    })
  }
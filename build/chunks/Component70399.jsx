/** Chunk was on 55827 **/
/** chunk id: 70399, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  T: () => x,
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524995 = require("./524995.js"),
  Chunk835473 = require("./835473.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk890302 = require("./890302.js");

function h(e) {
  let {
    applicationId: a,
    size: l = "default"
  } = e, t = (0, c.e7)([v.Z], () => v.Z.getApplicationWidgetConfig(a));
  return (0, i.jsxs)("div", {
    className: s()(f.container, {
      [f.sizeSmall]: "small" === l
    }),
    children: [(0, i.jsxs)("div", {
      className: f.content,
      children: [(0, i.jsx)("div", {
        className: f.header
      }), (0, i.jsx)("div", {
        className: f.divider
      }), (0, i.jsxs)("div", {
        className: f.stats,
        children: [(0, i.jsx)("div", {
          className: f.stat
        }), (0, i.jsx)("div", {
          className: f.stat
        }), (0, i.jsx)("div", {
          className: f.stat
        }), (0, i.jsx)("div", {
          className: f.stat
        }), (0, i.jsx)("div", {
          className: f.stat
        }), (0, i.jsx)("div", {
          className: f.stat
        })]
      })]
    }), (0, i.jsx)("div", {
      className: f.imageContainer,
      children: (null == t ? true : t.miniPreviewImage) != null ? (0, i.jsx)("img", {
        src: t.miniPreviewImage,
        alt: "",
        className: f.previewImage
      }) : (0, i.jsx)("div", {
        className: f.previewImagePlaceholder
      })
    })]
  })
}

function x(e) {
  let {
    applicationId: a,
    size: l = "default"
  } = e, {
    trackUserProfileAction: n
  } = (0, p.KZ)(), s = (0, m.q)(a), {
    hasAlreadyLinked: c,
    canStartAuthorization: v,
    startAuthorization: h,
    fetched: x
  } = (0, u.FG)(s), {
    analyticsLocations: j
  } = (0, d.ZP)(o.Z.USER_PROFILE_APPLICATION_WIDGET), I = t.useCallback(() => {
    v && (n({
      action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
      applicationId: a
    }), h({
      analyticsLocations: j
    }))
  }, [v, n, a, h, j]);
  return "default" !== l || null == s ? null : (0, i.jsxs)("div", {
    className: f.footer,
    children: [(0, i.jsx)(r.uIJ, {
      size: "xs"
    }), (0, i.jsx)(r.xvT, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: x ? c ? g.intl.format(g.t.wiyuG9, {
        applicationName: s.name
      }) : v ? g.intl.format(g.t.RNWFOQ, {
        onConnect: I
      }) : g.intl.string(g.t["9TX4UT"]) : (0, i.jsx)("div", {
        className: f.footerPlaceholder
      })
    })]
  })
}
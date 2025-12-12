/** Chunk was on 39380 **/
/** chunk id: 70399, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  T: () => j,
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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

function g(e) {
  let {
    applicationId: a,
    size: l = "default"
  } = e, t = (0, c.e7)([v.Z], () => v.Z.getApplicationWidgetApplicationConfig(a));
  return (0, i.jsxs)("div", {
    className: r()(x.container, {
      [x.sizeSmall]: "small" === l
    }),
    children: [(0, i.jsxs)("div", {
      className: x.content,
      children: [(0, i.jsx)("div", {
        className: x.header
      }), (0, i.jsx)("div", {
        className: x.divider
      }), (0, i.jsxs)("div", {
        className: x.stats,
        children: [(0, i.jsx)("div", {
          className: x.stat
        }), (0, i.jsx)("div", {
          className: x.stat
        }), (0, i.jsx)("div", {
          className: x.stat
        }), (0, i.jsx)("div", {
          className: x.stat
        }), (0, i.jsx)("div", {
          className: x.stat
        }), (0, i.jsx)("div", {
          className: x.stat
        })]
      })]
    }), (0, i.jsx)("div", {
      className: x.imageContainer,
      children: (null == t ? true : t.mini_preview_image) != null ? (0, i.jsx)("img", {
        src: t.mini_preview_image,
        alt: "",
        className: x.previewImage
      }) : (0, i.jsx)("div", {
        className: x.previewImagePlaceholder
      })
    })]
  })
}

function j(e) {
  let {
    applicationId: a,
    size: l = "default"
  } = e, {
    trackUserProfileAction: n
  } = (0, m.KZ)(), r = (0, p.q)(a), {
    hasAlreadyLinked: c,
    canStartAuthorization: v,
    startAuthorization: g,
    fetched: j
  } = (0, u.F)(r), {
    analyticsLocations: h
  } = (0, d.ZP)(o.Z.USER_PROFILE_APPLICATION_WIDGET), N = t.useCallback(() => {
    v && (n({
      action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
      applicationId: a
    }), g({
      analyticsLocations: h
    }))
  }, [v, n, a, g, h]);
  return "default" !== l || null == r ? null : (0, i.jsxs)("div", {
    className: x.footer,
    children: [(0, i.jsx)(s.uIJ, {
      size: "xs"
    }), (0, i.jsx)(s.xvT, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: j ? c ? f.intl.format(f.t.wiyuG9, {
        applicationName: r.name
      }) : v ? f.intl.format(f.t.RNWFOQ, {
        onConnect: N
      }) : f.intl.string(f.t["9TX4UT"]) : (0, i.jsx)("div", {
        className: x.footerPlaceholder
      })
    })]
  })
}
/** Chunk was on 33131 **/
/** chunk id: 70399, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  T: () => j,
  Z: () => x
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

function x(e) {
  let {
    applicationId: a,
    size: l = "default"
  } = e, i = (0, c.e7)([v.Z], () => v.Z.getApplicationWidgetConfig(a));
  return (0, t.jsxs)("div", {
    className: r()(g.container, {
      [g.sizeSmall]: "small" === l
    }),
    children: [(0, t.jsxs)("div", {
      className: g.content,
      children: [(0, t.jsx)("div", {
        className: g.header
      }), (0, t.jsx)("div", {
        className: g.divider
      }), (0, t.jsxs)("div", {
        className: g.stats,
        children: [(0, t.jsx)("div", {
          className: g.stat
        }), (0, t.jsx)("div", {
          className: g.stat
        }), (0, t.jsx)("div", {
          className: g.stat
        }), (0, t.jsx)("div", {
          className: g.stat
        }), (0, t.jsx)("div", {
          className: g.stat
        }), (0, t.jsx)("div", {
          className: g.stat
        })]
      })]
    }), (0, t.jsx)("div", {
      className: g.imageContainer,
      children: (null == i ? true : i.miniPreviewImage) != null ? (0, t.jsx)("img", {
        src: i.miniPreviewImage,
        alt: "",
        className: g.previewImage
      }) : (0, t.jsx)("div", {
        className: g.previewImagePlaceholder
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
  } = (0, p.KZ)(), r = (0, m.q)(a), {
    hasAlreadyLinked: c,
    canStartAuthorization: v,
    startAuthorization: x,
    fetched: j
  } = (0, u.FG)(r), {
    analyticsLocations: h
  } = (0, d.ZP)(o.Z.USER_PROFILE_APPLICATION_WIDGET), N = i.useCallback(() => {
    v && (n({
      action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
      applicationId: a
    }), x({
      analyticsLocations: h
    }))
  }, [v, n, a, x, h]);
  return "default" !== l || null == r ? null : (0, t.jsxs)("div", {
    className: g.footer,
    children: [(0, t.jsx)(s.uIJ, {
      size: "xs"
    }), (0, t.jsx)(s.xvT, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: j ? c ? f.intl.format(f.t.wiyuG9, {
        applicationName: r.name
      }) : v ? f.intl.format(f.t.RNWFOQ, {
        onConnect: N
      }) : f.intl.string(f.t["9TX4UT"]) : (0, t.jsx)("div", {
        className: g.footerPlaceholder
      })
    })]
  })
}
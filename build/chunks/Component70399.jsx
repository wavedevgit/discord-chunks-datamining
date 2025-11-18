/** Chunk was on 39380 **/
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
  Chunk535139 = require("./535139.js"),
  Chunk835473 = require("./835473.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk373942 = require("./373942.js");

function x(e) {
  let {
    applicationId: a,
    size: l = "default"
  } = e, t = (0, c.e7)([p.Z], () => p.Z.getApplicationWidgetApplicationConfig(a));
  return (0, i.jsxs)("div", {
    className: r()(v.container, {
      [v.sizeSmall]: "small" === l
    }),
    children: [(0, i.jsxs)("div", {
      className: v.content,
      children: [(0, i.jsx)("div", {
        className: v.header
      }), (0, i.jsx)("div", {
        className: v.divider
      }), (0, i.jsxs)("div", {
        className: v.stats,
        children: [(0, i.jsx)("div", {
          className: v.stat
        }), (0, i.jsx)("div", {
          className: v.stat
        }), (0, i.jsx)("div", {
          className: v.stat
        }), (0, i.jsx)("div", {
          className: v.stat
        }), (0, i.jsx)("div", {
          className: v.stat
        }), (0, i.jsx)("div", {
          className: v.stat
        })]
      })]
    }), (0, i.jsx)("div", {
      className: v.imageContainer,
      children: (null == t ? true : t.mini_preview_image) != null ? (0, i.jsx)("img", {
        src: t.mini_preview_image,
        alt: "",
        className: v.previewImage
      }) : (0, i.jsx)("div", {
        className: v.previewImagePlaceholder
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
  } = (0, u.KZ)(), r = (0, o.q)(a), {
    hasAlreadyLinked: c,
    canStartAuthorization: p,
    startAuthorization: x,
    fetched: j
  } = (0, d.F)(r), f = t.useCallback(() => {
    p && (n({
      action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
      applicationId: a
    }), x())
  }, [p, n, a, x]);
  return "default" !== l || null == r ? null : (0, i.jsxs)("div", {
    className: v.footer,
    children: [(0, i.jsx)(s.uIJ, {
      size: "xs"
    }), (0, i.jsx)(s.xvT, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: j ? c ? m.intl.format(m.t.wiyuG9, {
        applicationName: r.name
      }) : p ? m.intl.format(m.t.RNWFOQ, {
        onConnect: f
      }) : m.intl.string(m.t["9TX4UT"]) : (0, i.jsx)("div", {
        className: v.footerPlaceholder
      })
    })]
  })
}
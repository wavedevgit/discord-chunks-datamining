/** Chunk was on 39380 **/
/** chunk id: 70399, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  T: () => v,
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk535139 = require("./535139.js"),
  Chunk835473 = require("./835473.js"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685009 = require("./685009.js");

function p(e) {
  let {
    applicationId: a,
    size: l = "default"
  } = e, t = (0, s.e7)([o.Z], () => o.Z.getApplicationWidgetApplicationConfig(a));
  return (0, i.jsxs)("div", {
    className: n()(m.container, {
      [m.sizeSmall]: "small" === l
    }),
    children: [(0, i.jsxs)("div", {
      className: m.content,
      children: [(0, i.jsx)("div", {
        className: m.header
      }), (0, i.jsx)("div", {
        className: m.divider
      }), (0, i.jsxs)("div", {
        className: m.stats,
        children: [(0, i.jsx)("div", {
          className: m.stat
        }), (0, i.jsx)("div", {
          className: m.stat
        }), (0, i.jsx)("div", {
          className: m.stat
        }), (0, i.jsx)("div", {
          className: m.stat
        }), (0, i.jsx)("div", {
          className: m.stat
        }), (0, i.jsx)("div", {
          className: m.stat
        })]
      })]
    }), (0, i.jsx)("div", {
      className: m.imageContainer,
      children: (null == t ? true : t.mini_preview_image) != null ? (0, i.jsx)("img", {
        src: t.mini_preview_image,
        alt: "",
        className: m.previewImage
      }) : (0, i.jsx)("div", {
        className: m.previewImagePlaceholder
      })
    })]
  })
}

function v(e) {
  let {
    applicationId: a,
    size: l = "default"
  } = e, t = (0, d.q)(a), {
    hasAlreadyLinked: n,
    canStartAuthorization: s,
    startAuthorization: o,
    fetched: p
  } = (0, c.F)(t);
  return "default" !== l || null == t ? null : (0, i.jsxs)("div", {
    className: m.footer,
    children: [(0, i.jsx)(r.uIJ, {
      size: "xs"
    }), (0, i.jsx)(r.xvT, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: p ? n ? u.intl.format(u.t.wiyuG9, {
        applicationName: t.name
      }) : s ? u.intl.format(u.t.RNWFOQ, {
        onConnect: o
      }) : u.intl.string(u.t["9TX4UT"]) : (0, i.jsx)("div", {
        className: m.footerPlaceholder
      })
    })]
  })
}
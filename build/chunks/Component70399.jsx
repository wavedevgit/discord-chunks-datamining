/** Chunk was on 39380 **/
/** chunk id: 70399, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  T: () => v,
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  t = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk535139 = require("./535139.js"),
  Chunk835473 = require("./835473.js"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685009 = require("./685009.js");

function m(e) {
  let {
    applicationId: l,
    size: a = "default"
  } = e, n = (0, s.e7)([d.Z], () => d.Z.getApplicationWidgetApplicationConfig(l));
  return (0, i.jsxs)("div", {
    className: t()(p.container, {
      [p.sizeSmall]: "small" === a
    }),
    children: [(0, i.jsxs)("div", {
      className: p.content,
      children: [(0, i.jsx)("div", {
        className: p.header
      }), (0, i.jsx)("div", {
        className: p.divider
      }), (0, i.jsxs)("div", {
        className: p.stats,
        children: [(0, i.jsx)("div", {
          className: p.stat
        }), (0, i.jsx)("div", {
          className: p.stat
        }), (0, i.jsx)("div", {
          className: p.stat
        }), (0, i.jsx)("div", {
          className: p.stat
        }), (0, i.jsx)("div", {
          className: p.stat
        }), (0, i.jsx)("div", {
          className: p.stat
        })]
      })]
    }), (0, i.jsx)("div", {
      className: p.imageContainer,
      children: (null == n ? true : n.mini_preview_image) != null ? (0, i.jsx)("img", {
        src: n.mini_preview_image,
        alt: "",
        className: p.previewImage
      }) : (0, i.jsx)("div", {
        className: p.previewImagePlaceholder
      })
    })]
  })
}

function v(e) {
  let {
    applicationId: l,
    size: a = "default"
  } = e, n = (0, o.q)(l), {
    hasAlreadyLinked: t,
    canStartAuthorization: s,
    startAuthorization: d,
    fetched: m
  } = (0, c.F)(n);
  return "default" !== a || null == n ? null : (0, i.jsxs)("div", {
    className: p.footer,
    children: [(0, i.jsx)(r.uIJ, {
      size: "xs"
    }), (0, i.jsx)(r.xvT, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: m ? t ? u.intl.format(u.t.wiyuG9, {
        applicationName: n.name
      }) : s ? u.intl.format(u.t.RNWFOQ, {
        onConnect: d
      }) : u.intl.string(u.t["9TX4UT"]) : (0, i.jsx)("div", {
        className: p.footerPlaceholder
      })
    })]
  })
}
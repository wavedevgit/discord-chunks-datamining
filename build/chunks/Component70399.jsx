/** Chunk was on 22325 **/
/** chunk id: 70399, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => p,
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk20471 = require("./20471.js"),
  Chunk835473 = require("./835473.js"),
  Chunk621853 = require("./621853.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685009 = require("./685009.js");

function g(e) {
  let {
    applicationId: t,
    size: n = "default"
  } = e, i = (0, o.e7)([u.Z], () => u.Z.getApplicationWidgetApplicationConfig(t));
  return (0, r.jsxs)("div", {
    className: a()(f.container, {
      [f.sizeSmall]: "small" === n
    }),
    children: [(0, r.jsxs)("div", {
      className: f.content,
      children: [(0, r.jsx)("div", {
        className: f.header
      }), (0, r.jsx)("div", {
        className: f.divider
      }), (0, r.jsxs)("div", {
        className: f.stats,
        children: [(0, r.jsx)("div", {
          className: f.stat
        }), (0, r.jsx)("div", {
          className: f.stat
        }), (0, r.jsx)("div", {
          className: f.stat
        }), (0, r.jsx)("div", {
          className: f.stat
        }), (0, r.jsx)("div", {
          className: f.stat
        }), (0, r.jsx)("div", {
          className: f.stat
        })]
      })]
    }), (0, r.jsx)("div", {
      className: f.imageContainer,
      children: (null == i ? true : i.mini_preview_image) != null ? (0, r.jsx)("img", {
        src: i.mini_preview_image,
        alt: "",
        className: f.previewImage
      }) : (0, r.jsx)("div", {
        className: f.previewImagePlaceholder
      })
    })]
  })
}

function p(e) {
  let {
    applicationId: t,
    size: n = "default"
  } = e, i = (0, c.q)(t), {
    hasAlreadyLinked: a,
    canStartAuthorization: o,
    startAuthorization: u,
    fetched: g
  } = (0, s.FG)(i);
  return "default" !== n || null == i ? null : (0, r.jsxs)("div", {
    className: f.footer,
    children: [(0, r.jsx)(l.uIJ, {
      size: "xs"
    }), (0, r.jsx)(l.xvT, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: g ? a ? d.intl.format(d.t.wiyuGx, {
        applicationName: i.name
      }) : o ? d.intl.format(d.t.RNWFOT, {
        onConnect: u
      }) : d.intl.string(d.t["9TX4UV"]) : (0, r.jsx)("div", {
        className: f.footerPlaceholder
      })
    })]
  })
}
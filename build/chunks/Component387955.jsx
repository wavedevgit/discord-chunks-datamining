/** Chunk was on 85342 **/
/** chunk id: 387955, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk773446 = require("./773446.jsx"),
  Chunk572264 = require("./572264.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk769268 = require("./769268.js"),
  Chunk849399 = require("./849399.js");

function f(e) {
  let {
    user: t
  } = e;
  return (0, n.jsxs)("div", {
    className: m.infoContainer,
    children: [(0, n.jsx)("img", {
      className: m.infoPicture,
      alt: "",
      src: g
    }), (0, n.jsx)(o.X6q, {
      className: m.title,
      color: "header-primary",
      variant: "heading-xl/bold",
      children: d.intl.format(d.t["au+lPj"], {
        n: t.tag
      })
    }), (0, n.jsx)(o.Text, {
      className: m.subtitleInfo,
      color: "header-secondary",
      variant: "text-md/medium",
      children: d.intl.format(d.t["5fwX5+"], {})
    }), (0, n.jsx)(o.Text, {
      className: m.prompt,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: d.intl.format(d.t["i2vB8/"], {
        helpdeskArticle: s.Z.getArticleURL(u.BhN.POMELO_FAQ)
      })
    }), (0, n.jsxs)("div", {
      className: a()([m.infoItem, m.infoItemSpacing]),
      children: [(0, n.jsx)("div", {
        className: m.infoIcon,
        children: (0, n.jsx)(o.iFz, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20
        })
      }), (0, n.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: d.intl.format(d.t.SzUaZ2, {})
      })]
    }), (0, n.jsxs)("div", {
      className: a()([m.infoItem, m.infoItemSpacing]),
      children: [(0, n.jsx)("div", {
        className: m.infoIcon,
        children: (0, n.jsx)(l.Z, {
          width: 20,
          height: 20
        })
      }), (0, n.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: d.intl.format(d.t["UwPc+P"], {})
      })]
    }), (0, n.jsxs)("div", {
      className: m.infoItem,
      children: [(0, n.jsx)("div", {
        className: m.infoIcon,
        children: (0, n.jsx)(c.Z, {
          width: 20,
          height: 20
        })
      }), (0, n.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/medium",
        children: d.intl.format(d.t.okLjjo, {
          username: t.tag
        })
      })]
    })]
  })
}
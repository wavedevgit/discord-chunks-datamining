/** Chunk was on 54844 **/
/** chunk id: 778231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk522289 = require("./522289.jsx"),
  Chunk359993 = require("./359993.js"),
  Chunk146078 = require("./146078.js"),
  Chunk881998 = require("./881998.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk711845 = require("./711845.js"),
  Chunk970952 = require("./970952.js");
let b = e => {
  var t, n;
  let {
    entry: b
  } = e, {
    name: h
  } = b, f = (0, i.e7)([m.Z], () => m.Z.getNewestTokenForApplication(b.id)), v = null != (n = b.getIconURL(40)) ? n : _, j = (0, d.Z)({
    application: b
  }), y = l.useRef(false);
  l.useEffect(() => {
    y.current || (s.Z.fetch(), y.current = true)
  }, []);
  let O = null != f ? p.default.extractTimestamp(f.id) : true;
  return (0, r.jsxs)("div", {
    className: x.container,
    children: [(0, r.jsx)(a.X6q, {
      className: x.header,
      variant: "heading-sm/semibold",
      children: g.intl.string(g.t["aYfK//"])
    }), (0, r.jsx)("div", {
      className: x.appContainer,
      children: (0, r.jsxs)("div", {
        className: x.appInfo,
        children: [(0, r.jsx)(o.ZP, {
          mask: o.ZP.Masks.AVATAR_DEFAULT,
          width: 40,
          height: 40,
          className: x.appIconMask,
          children: (0, r.jsx)("img", {
            src: v,
            alt: "",
            className: x.appIcon
          })
        }), (0, r.jsxs)("div", {
          className: x.textContainer,
          children: [(0, r.jsx)(a.Text, {
            color: "header-primary",
            variant: "text-md/medium",
            children: h
          }), j.length > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: (0, u.Z)(j.length)
            }), (0, r.jsx)(c.Z, {
              className: x.guildStack,
              guilds: j,
              maxGuilds: 6
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: null == (t = b.bot) ? true : t.tag
            }), null != O && (0, r.jsx)(a.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: g.intl.formatToPlainString(g.t.C9rUOz, {
                authorizedAt: O
              })
            })]
          })]
        })]
      })
    })]
  })
}
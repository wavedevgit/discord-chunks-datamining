/** Chunk was on 54844 **/
/** chunk id: 778231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
let h = e => {
  var t, n;
  let {
    entry: h
  } = e, {
    name: x
  } = h, f = (0, l.e7)([m.Z], () => m.Z.getNewestTokenForApplication(h.id)), v = null != (n = h.getIconURL(40)) ? n : b, j = (0, d.Z)({
    application: h
  }), y = i.useRef(false);
  i.useEffect(() => {
    y.current || (s.Z.fetch(), y.current = true)
  }, []);
  let O = null != f ? p.default.extractTimestamp(f.id) : true;
  return (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsx)(a.X6q, {
      className: _.header,
      variant: "heading-sm/semibold",
      children: g.intl.string(g.t["aYfK//"])
    }), (0, r.jsx)("div", {
      className: _.appContainer,
      children: (0, r.jsxs)("div", {
        className: _.appInfo,
        children: [(0, r.jsx)(o.ZP, {
          mask: o.ZP.Masks.AVATAR_DEFAULT,
          width: 40,
          height: 40,
          className: _.appIconMask,
          children: (0, r.jsx)("img", {
            src: v,
            alt: "",
            className: _.appIcon
          })
        }), (0, r.jsxs)("div", {
          className: _.textContainer,
          children: [(0, r.jsx)(a.Text, {
            color: "header-primary",
            variant: "text-md/medium",
            children: x
          }), j.length > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: (0, u.Z)(j.length)
            }), (0, r.jsx)(c.Z, {
              className: _.guildStack,
              guilds: j,
              maxGuilds: 6
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: null == (t = h.bot) ? true : t.tag
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
/** Chunk was on 59727 **/
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
  Chunk719706 = require("./719706.js"),
  Chunk970952 = require("./970952.js");
let h = e => {
  var t, n;
  let {
    entry: h
  } = e, {
    name: x
  } = h, f = (0, i.e7)([m.Z], () => m.Z.getNewestTokenForApplication(h.id)), v = null != (n = h.getIconURL(40)) ? n : b, j = (0, d.Z)({
    application: h
  }), y = a.useRef(false);
  a.useEffect(() => {
    y.current || (o.Z.fetch(), y.current = true)
  }, []);
  let C = null != f ? p.default.extractTimestamp(f.id) : true;
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(l.X6q, {
      className: g.header,
      variant: "heading-sm/semibold",
      children: _.intl.string(_.t["aYfK//"])
    }), (0, r.jsx)("div", {
      className: g.appContainer,
      children: (0, r.jsxs)("div", {
        className: g.appInfo,
        children: [(0, r.jsx)(s.ZP, {
          mask: s.ZP.Masks.AVATAR_DEFAULT,
          width: 40,
          height: 40,
          className: g.appIconMask,
          children: (0, r.jsx)("img", {
            src: v,
            alt: "",
            className: g.appIcon
          })
        }), (0, r.jsxs)("div", {
          className: g.textContainer,
          children: [(0, r.jsx)(l.Text, {
            color: "header-primary",
            variant: "text-md/medium",
            children: x
          }), j.length > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: (0, u.Z)(j.length)
            }), (0, r.jsx)(c.Z, {
              className: g.guildStack,
              guilds: j,
              maxGuilds: 6
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: null == (t = h.bot) ? true : t.tag
            }), null != C && (0, r.jsx)(l.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: _.intl.formatToPlainString(_.t.C9rUOz, {
                authorizedAt: C
              })
            })]
          })]
        })]
      })
    })]
  })
}
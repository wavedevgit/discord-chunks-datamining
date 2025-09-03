/** Chunk was on 42944 **/
/** chunk id: 778231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let b = e => {
  var t, n;
  let {
    entry: b
  } = e, {
    name: x
  } = b, h = (0, a.e7)([_.Z], () => _.Z.getNewestTokenForApplication(b.id)), v = null != (n = b.getIconURL(40)) ? n : g, j = (0, d.Z)({
    application: b
  }), y = i.useRef(false);
  i.useEffect(() => {
    y.current || (o.Z.fetch(), y.current = true)
  }, []);
  let O = null != h ? m.default.extractTimestamp(h.id) : true;
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(l.X6q, {
      className: f.header,
      variant: "heading-sm/semibold",
      children: p.intl.string(p.t["aYfK//"])
    }), (0, r.jsx)("div", {
      className: f.appContainer,
      children: (0, r.jsxs)("div", {
        className: f.appInfo,
        children: [(0, r.jsx)(s.ZP, {
          mask: s.ZP.Masks.AVATAR_DEFAULT,
          width: 40,
          height: 40,
          className: f.appIconMask,
          children: (0, r.jsx)("img", {
            src: v,
            alt: "",
            className: f.appIcon
          })
        }), (0, r.jsxs)("div", {
          className: f.textContainer,
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
              className: f.guildStack,
              guilds: j,
              maxGuilds: 6
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(l.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: null == (t = b.bot) ? true : t.tag
            }), null != O && (0, r.jsx)(l.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: p.intl.formatToPlainString(p.t.C9rUOz, {
                authorizedAt: O
              })
            })]
          })]
        })]
      })
    })]
  })
}
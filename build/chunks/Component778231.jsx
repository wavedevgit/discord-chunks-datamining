/** Chunk was on 54844 **/
/** chunk id: 778231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk139117 = require("./139117.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk359993 = require("./359993.js"),
  Chunk146078 = require("./146078.js"),
  Chunk881998 = require("./881998.js"),
  Chunk709054 = require("./709054.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk900399 = require("./900399.js"),
  Chunk970952 = require("./970952.js");
let b = e => {
  var t, n;
  let {
    entry: b
  } = e, {
    name: x
  } = b, f = (0, l.e7)([m.default], () => m.default.getNewestTokenForApplication(b.id)), v = null != (n = b.getIconURL(40)) ? n : h, j = (0, d.Z)({
    application: b
  }), y = i.useRef(false);
  i.useEffect(() => {
    y.current || (o.Z.fetch(), y.current = true)
  }, []);
  let O = null != f ? p.default.extractTimestamp(f.id) : true;
  return (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsx)(s.Heading, {
      className: _.header,
      variant: "heading-sm/semibold",
      children: g.intl.string(g.t["aYfK/w"])
    }), (0, r.jsx)("div", {
      className: _.appContainer,
      children: (0, r.jsxs)("div", {
        className: _.appInfo,
        children: [(0, r.jsx)(c.ZP, {
          mask: c.ZP.Masks.AVATAR_DEFAULT,
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
          children: [(0, r.jsx)(s.Text, {
            color: "header-primary",
            variant: "text-md/medium",
            children: x
          }), j.length > 0 ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: (0, u.Z)(j.length)
            }), (0, r.jsx)(a.Z, {
              className: _.guildStack,
              guilds: j,
              maxGuilds: 6
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: null == (t = b.bot) ? true : t.tag
            }), null != O && (0, r.jsx)(s.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: g.intl.formatToPlainString(g.t.C9rUO8, {
                authorizedAt: O
              })
            })]
          })]
        })]
      })
    })]
  })
}
/** Chunk was on 54844 **/
/** chunk id: 778231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk501859 = require("./501859.js"),
  Chunk970952 = require("./970952.js");
let h = e => {
  var t, n;
  let {
    entry: h
  } = e, {
    name: x
  } = h, v = (0, i.e7)([m.default], () => m.default.getNewestTokenForApplication(h.id)), _ = null != (n = h.getIconURL(40)) ? n : f, j = (0, c.Z)({
    application: h
  }), y = l.useRef(false);
  l.useEffect(() => {
    y.current || (o.Z.fetch(), y.current = true)
  }, []);
  let O = null != v ? b.default.extractTimestamp(v.id) : true;
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(s.Heading, {
      className: g.header,
      variant: "heading-sm/semibold",
      children: p.intl.string(p.t["aYfK/w"])
    }), (0, r.jsx)("div", {
      className: g.appContainer,
      children: (0, r.jsxs)("div", {
        className: g.appInfo,
        children: [(0, r.jsx)(d.ZP, {
          mask: d.ZP.Masks.AVATAR_DEFAULT,
          width: 40,
          height: 40,
          className: g.appIconMask,
          children: (0, r.jsx)("img", {
            src: _,
            alt: "",
            className: g.appIcon
          })
        }), (0, r.jsxs)("div", {
          className: g.textContainer,
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
              className: g.guildStack,
              guilds: j,
              maxGuilds: 6
            })]
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: null == (t = h.bot) ? true : t.tag
            }), null != O && (0, r.jsx)(s.Text, {
              color: "text-default",
              variant: "text-md/normal",
              children: p.intl.formatToPlainString(p.t.C9rUO8, {
                authorizedAt: O
              })
            })]
          })]
        })]
      })
    })]
  })
}
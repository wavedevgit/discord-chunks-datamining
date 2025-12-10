/** Chunk was on web.js **/
/** chunk id: 840720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk305347 = require("./305347.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk741666 = require("./741666.js");

function f(e) {
  let {
    className: t,
    guildTag: n,
    guildBadge: a,
    guildId: f,
    guildName: p,
    guildIcon: _,
    guildIconSize: m
  } = e, h = i.useRef(null), [g, E] = i.useState(false);
  return i.useEffect(() => {
    let e = h.current;
    null != e && null != e.offsetWidth && null != e.scrollWidth && E(e.offsetWidth < e.scrollWidth)
  }, []), (0, r.jsxs)("div", {
    className: o()(d.container, t),
    children: [(0, r.jsxs)("div", {
      className: d.guildPrefixContainer,
      children: [(0, r.jsx)(l.Ft, {
        guildId: f,
        guildName: p,
        guildIcon: _,
        iconSize: m,
        className: d.guildPrefixIcon,
        animate: false
      }), (0, r.jsx)("div", {
        className: d.details,
        children: (0, r.jsx)(s.u, {
          __unsupportedReactNodeAsText: p,
          shouldShow: g,
          children: (0, r.jsx)("span", {
            ref: h,
            className: d.guildName,
            children: p
          })
        })
      })]
    }), (0, r.jsx)("div", {
      className: d.tagContainer,
      children: (0, r.jsx)(c.m0, {
        guildId: f,
        className: d.tag,
        guildTag: n,
        guildBadge: a,
        badgeSize: u.Gg.SIZE_16,
        textColor: "interactive-text-default",
        textVariant: "text-sm/semibold",
        badgeClassName: d.badge
      })
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 423252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk305347 = require("./305347.jsx"),
  Chunk220250 = require("./220250.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk413953 = require("./413953.js");

function u(e) {
  let {
    guildId: t,
    name: n
  } = e, u = (0, s.nv)(), d = (0, s.dG)(u.hex());
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)("div", {
      className: c.banner,
      style: {
        background: d
      }
    }), (0, r.jsx)("div", {
      className: c.avatarContainer,
      children: (0, r.jsx)(a.ZP, {
        mask: a.QS.CLAN_ICON,
        width: 70,
        height: 70,
        children: (0, r.jsx)("div", {
          className: c.avatarWrapper,
          children: (0, r.jsx)(o.Ft, {
            guildId: t,
            guildName: null != n ? n : "?",
            guildIcon: null,
            iconSize: 64,
            acronymClassName: c.acronymText
          })
        })
      })
    }), (0, r.jsx)("div", {
      className: c.header,
      children: (0, r.jsx)(i.Heading, {
        variant: "heading-lg/medium",
        color: "header-primary",
        children: null != n ? n : l.intl.string(l.t.wZmueu)
      })
    }), (0, r.jsx)("div", {
      className: c.body,
      children: (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: l.intl.string(l.t["8mfCqY"])
      })
    })]
  })
}
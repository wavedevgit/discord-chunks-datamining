/** Chunk was on web.js **/
/** chunk id: 448524, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk914788 = require("./914788.js"),
  Chunk546791 = require("./546791.js"),
  Chunk322192 = require("./322192.jsx"),
  Chunk792258 = require("./792258.jsx"),
  Chunk657825 = require("./657825.jsx"),
  Chunk872608 = require("./872608.jsx"),
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk949285 = require("./949285.js");
let m = () => {
  let e = (0, i.e7)([s.Z], () => s.Z.getTopUserActivities()),
    t = (0, i.e7)([s.Z], () => s.Z.getTopGuildActivities());
  return 0 === e.length && 0 === t.length ? null : (0, r.jsxs)("div", {
    className: h.container,
    children: [e.length > 0 && (0, r.jsxs)("div", {
      className: h.actionSection,
      children: [(0, r.jsx)(o.Heading, {
        variant: "text-md/medium",
        className: h.sectionHeader,
        children: _.intl.string(p.default.BxbvS7)
      }), (0, r.jsx)("div", {
        className: h.avatarList,
        children: 1 === e.length ? (0, r.jsx)(d.Z, {
          userId: e[0].user_id,
          subText: (0, l.Kp)(e[0].dms_sent, e[0].call_count),
          className: h.userRow
        }) : e.map(e => (0, r.jsx)(f.Z, {
          userId: e.user_id,
          dmsSent: e.dms_sent,
          callCount: e.call_count
        }, e.user_id))
      })]
    }), t.length > 0 && (0, r.jsxs)("div", {
      className: h.actionSection,
      children: [(0, r.jsx)(o.Heading, {
        variant: "text-md/medium",
        className: h.sectionHeader,
        children: _.intl.string(p.default.Lq9Set)
      }), 1 === t.length ? (0, r.jsx)(u.Z, {
        guildId: t[0].guild_id,
        customSubtext: (0, l.Kp)(t[0].messages_sent, t[0].call_count),
        className: h.guildRow
      }) : (0, r.jsx)("div", {
        className: h.avatarList,
        children: t.map(e => {
          var t, n;
          let i = s.Z.getGuild(e.guild_id),
            o = null != (t = null == i ? true : i.name) ? t : "Unknown Server";
          return (0, r.jsx)(a.i_, {
            title: o,
            body: null != (n = (0, l.Kp)(e.messages_sent, e.call_count)) ? n : null,
            asContainer: true,
            children: (0, r.jsx)(c.Z, {
              guildId: null == e ? true : e.guild_id
            })
          }, e.guild_id)
        })
      })]
    })]
  })
}
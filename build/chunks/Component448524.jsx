/** Chunk was on web.js **/
/** chunk id: 448524, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
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
  Chunk148806 = require("./148806.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk336888 = require("./336888.js");
let h = () => {
  let e = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getTopUserActivities()),
    t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getTopGuildActivities());
  return 0 === module.length && 0 === exports.length ? null : (0, Chunk54381.jsxs)("div", {
    className: Chunk336888.container,
    children: [module.length > 0 && (0, Chunk54381.jsxs)("div", {
      className: Chunk336888.actionSection,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "text-md/medium",
        className: Chunk336888.sectionHeader,
        children: Chunk388032.intl.string(Chunk148806.default.BxbvS7)
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk336888.avatarList,
        children: 1 === module.length ? (0, Chunk54381.jsx)(Chunk657825.Z, {
          userId: module[0].user_id,
          subText: (0, Chunk546791.Kp)(module[0].dms_sent, module[0].call_count),
          className: Chunk336888.userRow
        }) : module.map(e => (0, r.jsx)(f.Z, {
          userId: e.user_id,
          dmsSent: e.dms_sent,
          callCount: e.call_count
        }, e.user_id))
      })]
    }), exports.length > 0 && (0, Chunk54381.jsxs)("div", {
      className: Chunk336888.actionSection,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "text-md/medium",
        className: Chunk336888.sectionHeader,
        children: Chunk388032.intl.string(Chunk148806.default.Lq9Set)
      }), 1 === exports.length ? (0, Chunk54381.jsx)(Chunk792258.Z, {
        guildId: exports[0].guild_id,
        customSubtext: (0, Chunk546791.Kp)(exports[0].messages_sent, exports[0].call_count),
        className: Chunk336888.guildRow
      }) : (0, Chunk54381.jsx)("div", {
        className: Chunk336888.avatarList,
        children: exports.map(e => {
          var t, n;
          let i = s.Z.getGuild(e.guild_id),
            a = null != (t = null == i ? true : i.name) ? t : "Unknown Server";
          return (0, r.jsx)(o.i_, {
            title: a,
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
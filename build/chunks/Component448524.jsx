/** Chunk was on web.js **/
/** chunk id: 448524, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk914788 = require("./914788.js"),
  Chunk322192 = require("./322192.jsx"),
  Chunk792258 = require("./792258.jsx"),
  Chunk657825 = require("./657825.jsx"),
  Chunk872608 = require("./872608.jsx"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk336888 = require("./336888.js");
let h = () => {
  let e = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getTopUserActivities()),
    t = (0, Chunk399606.e7)([Chunk914788.Z], () => Chunk914788.Z.getTopGuildActivities());
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk336888.container,
    children: [module.length > 0 && (0, Chunk951288.jsxs)("div", {
      className: Chunk336888.actionSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "text-md/medium",
        className: Chunk336888.sectionHeader,
        children: Chunk388032.intl.string(Chunk345909.default.BxbvS0)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk336888.avatarList,
        children: 1 === module.length ? (0, Chunk951288.jsx)(Chunk657825.Z, {
          userId: module[0].user_id,
          subText: Chunk388032.intl.formatToPlainString(Chunk345909.default.Fjwpen, {
            dmsSent: module[0].dms_sent,
            callCount: module[0].call_count
          }),
          className: Chunk336888.userRow
        }) : module.map(e => (0, r.jsx)(d.Z, {
          userId: e.user_id,
          dmsSent: e.dms_sent,
          callCount: e.call_count
        }, e.user_id))
      })]
    }), exports.length > 0 && (0, Chunk951288.jsxs)("div", {
      className: Chunk336888.actionSection,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "text-md/medium",
        className: Chunk336888.sectionHeader,
        children: Chunk388032.intl.string(Chunk345909.default.Lq9Sen)
      }), 1 === exports.length ? (0, Chunk951288.jsx)(Chunk792258.Z, {
        guildId: exports[0].guild_id,
        customSubtext: Chunk388032.intl.formatToPlainString(Chunk345909.default.pzKKoK, {
          messageCount: exports[0].messages_sent
        }),
        className: Chunk336888.guildRow
      }) : (0, Chunk951288.jsx)("div", {
        className: Chunk336888.avatarList,
        children: exports.map(e => {
          var t;
          let n = s.Z.getGuild(e.guild_id),
            i = null != (t = null == n ? true : n.name) ? t : "Unknown Server";
          return (0, r.jsx)(a.i_, {
            title: i,
            body: _.intl.formatToPlainString(f.default.pzKKoK, {
              messageCount: e.messages_sent
            }),
            asContainer: true,
            children: (0, r.jsx)(l.Z, {
              guildId: null == e ? true : e.guild_id
            })
          }, e.guild_id)
        })
      })]
    })]
  })
}
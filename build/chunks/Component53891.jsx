/** Chunk was on web.js **/
/** chunk id: 53891, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk198168 = require("./198168.jsx"),
  Chunk907862 = require("./907862.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk645041 = require("./645041.js"),
  Chunk430824 = require("./430824.js"),
  Chunk562511 = require("./562511.js"),
  Chunk731722 = require("./731722.js"),
  Chunk446094 = require("./446094.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let g = new Chunk710845.Z("GuildTagCoachmark");

function E(e) {
  function t(t) {
    var n;
    l.Z.dispatch({
      type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
      guildId: e.guild.id,
      lastSeenInfo: {
        tag: e.guild.profile.tag
      }
    }), null == (n = e.onDismiss) || n.call(e, t)
  }
  let {
    isAdopting: n,
    onAdoptTag: i,
    onEditProfile: o
  } = (0, p.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)), c = [{
    text: m.intl.string(m.t.jwEaiY),
    loading: n,
    onClick: i,
    variant: "primary"
  }, {
    text: m.intl.string(m.t.s5vZlZ),
    onClick: o,
    variant: "secondary"
  }];
  return (0, r.jsxs)(r.Fragment, {
    children: [e.children, (0, r.jsx)(s.J2, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      graphic: {
        type: "dynamic",
        component: a.P3.GUILD_TAG_COACHMARK_ASSET,
        props: {
          guildId: e.guild.id,
          guildProfile: e.guild.profile
        }
      },
      title: m.intl.formatToPlainString(m.t["m/Tc3t"], {
        guildName: e.guild.name
      }),
      body: m.intl.string(m.t.DrAXIi),
      actions: c,
      size: "md",
      onRequestClose: () => t(h.L.USER_DISMISS)
    })]
  })
}

function b(e) {
  function t(t) {
    var n;
    l.Z.dispatch({
      type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
      guildId: e.guild.id,
      lastSeenInfo: {
        tag: e.guild.profile.tag
      }
    }), (0, u.Qd)(o.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guild.id, true, h.L.DISMISS), null == (n = e.onDismiss) || n.call(e, t)
  }
  let {
    isAdopting: n,
    onAdoptTag: i,
    onEditProfile: c
  } = (0, p.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)), d = [{
    text: m.intl.string(m.t.jwEaiY),
    loading: n,
    onClick: i,
    variant: "primary"
  }, {
    text: m.intl.string(m.t.s5vZlZ),
    onClick: c,
    variant: "secondary"
  }];
  return (0, r.jsxs)(r.Fragment, {
    children: [e.children, (0, r.jsx)(s.J2, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      graphic: {
        type: "dynamic",
        component: a.P3.GUILD_TAG_COACHMARK_ASSET,
        props: {
          guildId: e.guild.id,
          guildProfile: e.guild.profile
        }
      },
      title: m.intl.formatToPlainString(m.t.VFqnyc, {
        guildName: e.guild.name
      }),
      body: m.intl.string(m.t.DrAXIi),
      actions: d,
      size: "md",
      onRequestClose: () => t(h.L.USER_DISMISS)
    })]
  })
}

function y(e) {
  let t = (0, i.e7)([d.Z], () => d.Z.getGuild(e.guildId)),
    n = (0, f.S3)(e.guildId);
  return null != t && (0, _.jq)(t) && null !== n ? "changed" === n ? (0, r.jsx)(E, {
    guild: t,
    onDismiss: e.onDismiss,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : (0, r.jsx)(b, {
    guild: t,
    onDismiss: e.onDismiss,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : (g.error("GuildTagCoachmark rendered without guildId or coachmark type."), e.children)
}
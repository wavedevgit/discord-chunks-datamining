/** Chunk was on 23736 **/
/** chunk id: 53891, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => j
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk198168 = require("./198168.js"),
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
let b = new Chunk710845.Z("GuildTagCoachmark");

function g(e) {
  function t(t) {
    var n;
    o.Z.dispatch({
      type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
      guildId: e.guild.id,
      lastSeenInfo: {
        tag: e.guild.profile.tag
      }
    }), null == (n = e.onDismiss) || n.call(e, t)
  }
  let {
    isAdopting: n,
    onAdoptTag: r,
    onEditProfile: i
  } = (0, h.Z)(e.guild.id, () => t(f.L.TAKE_ACTION)), c = [{
    text: x.intl.string(x.t.jwEaiX),
    loading: n,
    onClick: r,
    variant: "primary"
  }, {
    text: x.intl.string(x.t.s5vZlQ),
    onClick: i,
    variant: "secondary"
  }];
  return (0, a.jsxs)(a.Fragment, {
    children: [e.children, (0, a.jsx)(s.J2, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      graphic: {
        type: "dynamic",
        component: l.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
        props: {
          guildId: e.guild.id,
          guildProfile: e.guild.profile
        }
      },
      title: x.intl.formatToPlainString(x.t["m/Tc3n"], {
        guildName: e.guild.name
      }),
      body: x.intl.string(x.t.DrAXIr),
      actions: c,
      size: "md",
      onRequestClose: () => t(f.L.USER_DISMISS)
    })]
  })
}

function v(e) {
  function t(t) {
    var n;
    o.Z.dispatch({
      type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
      guildId: e.guild.id,
      lastSeenInfo: {
        tag: e.guild.profile.tag
      }
    }), (0, d.Qd)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guild.id, true, f.L.DISMISS), null == (n = e.onDismiss) || n.call(e, t)
  }
  let {
    isAdopting: n,
    onAdoptTag: r,
    onEditProfile: c
  } = (0, h.Z)(e.guild.id, () => t(f.L.TAKE_ACTION)), u = [{
    text: x.intl.string(x.t.jwEaiX),
    loading: n,
    onClick: r,
    variant: "primary"
  }, {
    text: x.intl.string(x.t.s5vZlQ),
    onClick: c,
    variant: "secondary"
  }];
  return (0, a.jsxs)(a.Fragment, {
    children: [e.children, (0, a.jsx)(s.J2, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      graphic: {
        type: "dynamic",
        component: l.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
        props: {
          guildId: e.guild.id,
          guildProfile: e.guild.profile
        }
      },
      title: x.intl.formatToPlainString(x.t.VFqnyU, {
        guildName: e.guild.name
      }),
      body: x.intl.string(x.t.DrAXIr),
      actions: u,
      size: "md",
      onRequestClose: () => t(f.L.USER_DISMISS)
    })]
  })
}

function j(e) {
  let t = (0, r.e7)([u.Z], () => u.Z.getGuild(e.guildId)),
    n = (0, m.S3)(e.guildId);
  return null != t && (0, p.jq)(t) && null !== n ? "changed" === n ? (0, a.jsx)(g, {
    guild: t,
    onDismiss: e.onDismiss,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : (0, a.jsx)(v, {
    guild: t,
    onDismiss: e.onDismiss,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : (b.error("GuildTagCoachmark rendered without guildId or coachmark type."), e.children)
}
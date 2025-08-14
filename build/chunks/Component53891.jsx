/** Chunk was on 7384 **/
/** chunk id: 53891, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk645041 = require("./645041.js"),
  Chunk430824 = require("./430824.js"),
  Chunk562511 = require("./562511.js"),
  Chunk731722 = require("./731722.js"),
  Chunk413915 = require("./413915.jsx"),
  Chunk446094 = require("./446094.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let b = new Chunk710845.Z("GuildTagCoachmark");

function x(e) {
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
    onAdoptTag: r,
    onEditProfile: s
  } = (0, g.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)), o = [{
    text: f.intl.string(f.t.jwEaiY),
    loading: n,
    onClick: r,
    variant: "primary"
  }, {
    text: f.intl.string(f.t.s5vZlZ),
    onClick: s,
    variant: "secondary"
  }];
  return (0, i.jsxs)(i.Fragment, {
    children: [e.children, (0, i.jsx)(a.J2, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      asset: (0, i.jsx)(p.Z, {
        guildId: e.guild.id,
        guildProfile: e.guild.profile
      }),
      title: f.intl.formatToPlainString(f.t["m/Tc3t"], {
        guildName: e.guild.name
      }),
      body: f.intl.string(f.t.DrAXIi),
      actions: o,
      size: "md",
      onRequestClose: () => t(h.L.USER_DISMISS)
    })]
  })
}

function _(e) {
  function t(t) {
    var n;
    l.Z.dispatch({
      type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
      guildId: e.guild.id,
      lastSeenInfo: {
        tag: e.guild.profile.tag
      }
    }), (0, c.Qd)(s.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guild.id, true, h.L.DISMISS), null == (n = e.onDismiss) || n.call(e, t)
  }
  let {
    isAdopting: n,
    onAdoptTag: r,
    onEditProfile: o
  } = (0, g.Z)(e.guild.id, () => t(h.L.TAKE_ACTION)), d = [{
    text: f.intl.string(f.t.jwEaiY),
    loading: n,
    onClick: r,
    variant: "primary"
  }, {
    text: f.intl.string(f.t.s5vZlZ),
    onClick: o,
    variant: "secondary"
  }];
  return (0, i.jsxs)(i.Fragment, {
    children: [e.children, (0, i.jsx)(a.J2, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      asset: (0, i.jsx)(p.Z, {
        guildId: e.guild.id,
        guildProfile: e.guild.profile
      }),
      title: f.intl.formatToPlainString(f.t.VFqnyc, {
        guildName: e.guild.name
      }),
      body: f.intl.string(f.t.DrAXIi),
      actions: d,
      size: "md",
      onRequestClose: () => t(h.L.USER_DISMISS)
    })]
  })
}

function j(e) {
  let t = (0, r.e7)([d.Z], () => d.Z.getGuild(e.guildId)),
    n = (0, u.S3)(e.guildId);
  return null != t && (0, m.jq)(t) && null !== n ? "changed" === n ? (0, i.jsx)(x, {
    guild: t,
    onDismiss: e.onDismiss,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : (0, i.jsx)(_, {
    guild: t,
    onDismiss: e.onDismiss,
    targetElementRef: e.targetElementRef,
    children: e.children
  }) : (b.error("GuildTagCoachmark rendered without guildId or coachmark type."), e.children)
}
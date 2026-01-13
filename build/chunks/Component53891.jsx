/** Chunk was on 22979 **/
/** chunk id: 53891, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => x,
  f: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk198168 = require("./198168.js"),
  Chunk907862 = require("./907862.js"),
  Chunk570140 = require("./570140.js"),
  Chunk710845 = require("./710845.js"),
  Chunk430824 = require("./430824.js"),
  Chunk731722 = require("./731722.js"),
  Chunk446094 = require("./446094.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");
let h = new Chunk710845.Z("GuildTagAvailableCoachmark");

function f(e) {
  var t;
  let n = (0, r.e7)([c.Z], () => c.Z.getGuild(e.guildId));

  function o(t) {
    var a, r;
    (null == n || null == (a = n.profile) ? true : a.tag) != null && s.Z.dispatch({
      type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
      guildId: n.id,
      lastSeenInfo: {
        tag: n.profile.tag
      }
    }), null == (r = e.onDismiss) || r.call(e, t)
  }
  let {
    isAdopting: f,
    onAdoptTag: x,
    onEditProfile: b
  } = (0, u.Z)(null != (t = null == n ? true : n.id) ? t : null, () => o(m.L.TAKE_ACTION));
  if (null == n || !(0, d.jq)(n)) return h.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
  let g = [{
    text: p.intl.string(p.t.jwEaiX),
    loading: f,
    onClick: x,
    variant: "primary"
  }, {
    text: p.intl.string(p.t.s5vZlQ),
    onClick: b,
    variant: "secondary"
  }];
  return (0, a.jsxs)(a.Fragment, {
    children: [e.children, (0, a.jsx)(l.J2, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      graphic: {
        type: "dynamic",
        component: i.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
        props: {
          guildId: n.id,
          guildProfile: n.profile
        }
      },
      title: p.intl.formatToPlainString(p.t["m/Tc3n"], {
        guildName: n.name
      }),
      body: p.intl.string(p.t.DrAXIr),
      actions: g,
      size: "md",
      onRequestClose: () => o(m.L.USER_DISMISS)
    })]
  })
}

function x(e) {
  var t;
  let n = (0, r.e7)([c.Z], () => c.Z.getGuild(e.guildId));

  function s(t) {
    var n;
    null == (n = e.onDismiss) || n.call(e, t)
  }
  let {
    isAdopting: o,
    onAdoptTag: f,
    onEditProfile: x
  } = (0, u.Z)(null != (t = null == n ? true : n.id) ? t : null, () => s(m.L.TAKE_ACTION));
  if (null == n || !(0, d.jq)(n)) return h.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
  let b = [{
    text: p.intl.string(p.t.jwEaiX),
    loading: o,
    onClick: f,
    variant: "primary"
  }, {
    text: p.intl.string(p.t.s5vZlQ),
    onClick: x,
    variant: "secondary"
  }];
  return (0, a.jsxs)(a.Fragment, {
    children: [e.children, (0, a.jsx)(l.J2, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      graphic: {
        type: "dynamic",
        component: i.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
        props: {
          guildId: n.id,
          guildProfile: n.profile
        }
      },
      title: p.intl.formatToPlainString(p.t.VFqnyU, {
        guildName: n.name
      }),
      body: p.intl.string(p.t.DrAXIr),
      actions: b,
      size: "md",
      onRequestClose: () => s(m.L.USER_DISMISS)
    })]
  })
}
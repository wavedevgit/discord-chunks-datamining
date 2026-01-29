/** Chunk was on 87557 **/
/** chunk id: 693240, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => x,
  w: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk116833 = require("./116833.js"),
  Chunk342494 = require("./342494.js"),
  Chunk73153 = require("./73153.js"),
  Chunk626584 = require("./626584.js"),
  Chunk71393 = require("./71393.js"),
  Chunk685073 = require("./685073.js"),
  Chunk514661 = require("./514661.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");
let h = new Chunk626584.A("GuildTagAvailableCoachmark");

function x(e) {
  var t;
  let n = (0, l.bG)([c.A], () => c.A.getGuild(e.guildId));

  function o(t) {
    var a, l;
    (null == n || null == (a = n.profile) ? true : a.tag) != null && s.h.dispatch({
      type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
      guildId: n.id,
      lastSeenInfo: {
        tag: n.profile.tag
      }
    }), null == (l = e.onDismiss) || l.call(e, t)
  }
  let {
    isAdopting: x,
    onAdoptTag: g,
    onEditProfile: f
  } = (0, u.A)(null != (t = null == n ? true : n.id) ? t : null, () => o(m.i.TAKE_ACTION));
  if (null == n || !(0, d.q0)(n)) return h.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
  let b = [{
    text: p.intl.string(p.t.jwEaiX),
    loading: x,
    onClick: g,
    variant: "primary"
  }, {
    text: p.intl.string(p.t.s5vZlQ),
    onClick: f,
    variant: "secondary"
  }];
  return (0, a.jsxs)(a.Fragment, {
    children: [e.children, (0, a.jsx)(i.AM, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      graphic: {
        type: "dynamic",
        component: r.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
        props: {
          guildId: n.id,
          guildProfile: n.profile
        }
      },
      title: p.intl.formatToPlainString(p.t["m/Tc3n"], {
        guildName: n.name
      }),
      body: p.intl.string(p.t.DrAXIr),
      actions: b,
      size: "md",
      onRequestClose: () => o(m.i.USER_DISMISS)
    })]
  })
}

function g(e) {
  var t;
  let n = (0, l.bG)([c.A], () => c.A.getGuild(e.guildId));

  function s(t) {
    var n;
    null == (n = e.onDismiss) || n.call(e, t)
  }
  let {
    isAdopting: o,
    onAdoptTag: x,
    onEditProfile: g
  } = (0, u.A)(null != (t = null == n ? true : n.id) ? t : null, () => s(m.i.TAKE_ACTION));
  if (null == n || !(0, d.q0)(n)) return h.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
  let f = [{
    text: p.intl.string(p.t.jwEaiX),
    loading: o,
    onClick: x,
    variant: "primary"
  }, {
    text: p.intl.string(p.t.s5vZlQ),
    onClick: g,
    variant: "secondary"
  }];
  return (0, a.jsxs)(a.Fragment, {
    children: [e.children, (0, a.jsx)(i.AM, {
      targetElementRef: e.targetElementRef,
      shouldShow: true,
      position: "top",
      graphic: {
        type: "dynamic",
        component: r.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
        props: {
          guildId: n.id,
          guildProfile: n.profile
        }
      },
      title: p.intl.formatToPlainString(p.t.VFqnyU, {
        guildName: n.name
      }),
      body: p.intl.string(p.t.DrAXIr),
      actions: f,
      size: "md",
      onRequestClose: () => s(m.i.USER_DISMISS)
    })]
  })
}
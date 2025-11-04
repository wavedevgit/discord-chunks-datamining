/** Chunk was on 98783 **/
/** chunk id: 558924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => I,
  Z: () => E
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk26151 = require("./26151.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk358221 = require("./358221.js"),
  Chunk985588 = require("./985588.js"),
  Chunk933557 = require("./933557.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk163612 = require("./163612.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk354459 = require("./354459.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk604570 = require("./604570.js");

function I(e, t) {
  let n = (0, s.e7)([_.Z], () => _.Z.getVoiceChannelId()),
    i = (0, s.e7)([h.Z], () => {
      var e, t;
      return null != (t = null == (e = h.Z.getChannel(n)) ? true : e.getGuildId()) ? t : true
    }),
    {
      enabled: l
    } = O.Z.useExperiment({
      guildId: i,
      location: t
    });
  return l ? n : e
}

function E(e, t) {
  let [n, l] = (0, s.Wu)([b.Z], () => [null != t ? b.Z.getParticipants(t) : null, null != t ? b.Z.getParticipant(t, e.id) : null], [t, e.id]), o = (0, s.e7)([h.Z], () => h.Z.getChannel(t)), m = (0, Z.s)(e, "context_menu", t), {
    enabled: _
  } = O.Z.useExperiment({
    guildId: null == o ? true : o.guild_id,
    location: "useRingHangupItem"
  }), I = !m || (null == n ? true : n.length) === 0 || null == t, E = _ && (null == o ? true : o.guild_id) != null, S = null == l, C = null != l && l.type === j.fO.USER && l.ringing, U = [];
  E && !I && (S || C) && U.push(u.z.RING_USER_TO_VC_NEW_BADGE);
  let [D, L] = (0, v.US)(U), T = D === u.z.RING_USER_TO_VC_NEW_BADGE, {
    analyticsLocations: w
  } = (0, g.ZP)();
  return ((0, f.Z)({
    type: a.ImpressionTypes.MENU,
    name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
    properties: {
      voice_channel_id: t,
      voice_guild_id: null == o ? true : o.guild_id,
      location_stack: w
    }
  }, {
    disableTrack: I || !E
  }, [e.id]), I) ? null : S ? (0, i.jsx)(d.sNh, {
    id: "ring",
    label: E ? (0, i.jsxs)("div", {
      className: y.label,
      children: [N.intl.string(N.t["3Hv9qQ"]), T && (0, i.jsx)(A, {})]
    }) : N.intl.string(N.t.bHa9kN),
    subtext: E ? (0, i.jsx)(P, {
      channel: o
    }) : null,
    action: () => {
      T && L(x.L.TAKE_ACTION), c.Z.ring(t, [e.id], "user_context_menu"), E && null != t && (0, p.Kh)(t)
    },
    className: y.menuItem
  }) : C ? (0, i.jsx)(d.sNh, {
    id: "stop-ringing",
    label: (0, i.jsxs)("div", {
      className: y.label,
      children: [N.intl.string(N.t.ygslb0), T && (0, i.jsx)(A, {})]
    }),
    subtext: E ? (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      className: r()(y.subtext, y.ringing),
      children: N.intl.format(N.t.dwfzZi, {
        channelName: (0, i.jsx)(P, {
          channel: o
        })
      })
    }) : null,
    action: () => {
      T && L(x.L.TAKE_ACTION), c.Z.stopRinging(t, [e.id])
    },
    className: y.menuItem
  }) : null
}
let P = e => {
    let {
      channel: t
    } = e, n = (0, m.ZP)(t);
    return (0, i.jsxs)("div", {
      className: y.subtext,
      children: [(0, i.jsx)(d.gj8, {
        size: "xs"
      }), (0, i.jsx)(d.Text, {
        variant: "text-xs/medium",
        className: y.channelName,
        children: n
      })]
    })
  },
  A = () => (0, Chunk951288.jsx)(Chunk481060.IGR, {
    color: Chunk831209.Z.BG_BRAND,
    text: Chunk388032.intl.string(Chunk388032.t.y2b7CA)
  })
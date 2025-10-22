/** Chunk was on 98783 **/
/** chunk id: 558924, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => N,
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
  Chunk808050 = require("./808050.js");

function N(e, t) {
  let n = (0, s.e7)([j.Z], () => j.Z.getVoiceChannelId()),
    l = (0, s.e7)([h.Z], () => {
      var e, t;
      return null != (t = null == (e = h.Z.getChannel(n)) ? true : e.getGuildId()) ? t : true
    }),
    {
      enabled: i
    } = O.Z.useExperiment({
      guildId: l,
      location: t
    });
  return i ? n : e
}

function E(e, t) {
  let [n, i] = (0, s.Wu)([b.Z], () => [null != t ? b.Z.getParticipants(t) : null, null != t ? b.Z.getParticipant(t, e.id) : null], [t, e.id]), o = (0, s.e7)([h.Z], () => h.Z.getChannel(t)), m = (0, Z.s)(e, "context_menu", t), {
    enabled: j
  } = O.Z.useExperiment({
    guildId: null == o ? true : o.guild_id,
    location: "useRingHangupItem"
  }), N = !m || (null == n ? true : n.length) === 0 || null == t, E = j && (null == o ? true : o.guild_id) != null, S = null == i, A = null != i && i.type === x.fO.USER && i.ringing, U = [];
  E && !N && (S || A) && U.push(u.z.RING_USER_TO_VC_NEW_BADGE);
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
    disableTrack: N || !E
  }, [e.id]), N) ? null : S ? (0, l.jsx)(d.sNh, {
    id: "ring",
    label: E ? (0, l.jsxs)("div", {
      className: I.label,
      children: [y.intl.string(y.t["3Hv9qQ"]), T && (0, l.jsx)(C, {})]
    }) : y.intl.string(y.t.bHa9kN),
    subtext: E ? (0, l.jsx)(P, {
      channel: o
    }) : null,
    action: () => {
      T && L(_.L.TAKE_ACTION), c.Z.ring(t, [e.id], "user_context_menu"), E && null != t && (0, p.Kh)(t)
    },
    className: I.menuItem
  }) : A ? (0, l.jsx)(d.sNh, {
    id: "stop-ringing",
    label: (0, l.jsxs)("div", {
      className: I.label,
      children: [y.intl.string(y.t.ygslb0), T && (0, l.jsx)(C, {})]
    }),
    subtext: E ? (0, l.jsx)(d.Text, {
      variant: "text-xs/medium",
      className: r()(I.subtext, I.ringing),
      children: y.intl.format(y.t.dwfzZi, {
        channelName: (0, l.jsx)(P, {
          channel: o
        })
      })
    }) : null,
    action: () => {
      T && L(_.L.TAKE_ACTION), c.Z.stopRinging(t, [e.id])
    },
    className: I.menuItem
  }) : null
}
let P = e => {
    let {
      channel: t
    } = e, n = (0, m.ZP)(t);
    return (0, l.jsxs)("div", {
      className: I.subtext,
      children: [(0, l.jsx)(d.gj8, {
        size: "xs"
      }), (0, l.jsx)(d.Text, {
        variant: "text-xs/medium",
        className: I.channelName,
        children: n
      })]
    })
  },
  C = () => (0, Chunk951288.jsx)(Chunk481060.IGR, {
    color: Chunk831209.Z.BG_BRAND,
    text: Chunk388032.intl.string(Chunk388032.t.y2b7CA)
  })
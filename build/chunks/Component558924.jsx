/** Chunk was on 4040 **/
/** chunk id: 558924, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  O: () => P,
  Z: () => y
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
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
  Chunk59110 = require("./59110.js");

function P(n, e) {
  let t = (0, u.e7)([x.Z], () => x.Z.getVoiceChannelId()),
    l = (0, u.e7)([h.Z], () => {
      var n, e;
      return null != (e = null == (n = h.Z.getChannel(t)) ? true : n.getGuildId()) ? e : true
    }),
    {
      enabled: i
    } = _.Z.useExperiment({
      guildId: l,
      location: e
    });
  return i ? t : n
}

function y(n, e) {
  let [t, i] = (0, u.Wu)([Z.Z], () => [null != e ? Z.Z.getParticipants(e) : null, null != e ? Z.Z.getParticipant(e, n.id) : null], [e, n.id]), o = (0, u.e7)([h.Z], () => h.Z.getChannel(e)), p = (0, b.s)(n, "context_menu", e), {
    enabled: x
  } = _.Z.useExperiment({
    guildId: null == o ? true : o.guild_id,
    location: "useRingHangupItem"
  }), P = !p || (null == t ? true : t.length) === 0 || null == e, y = x && (null == o ? true : o.guild_id) != null, A = null == i, T = null != i && i.type === O.fO.USER && i.ringing, U = [];
  y && !P && (A || T) && U.push(s.z.RING_USER_TO_VC_NEW_BADGE);
  let [S, k] = (0, v.US)(U), R = S === s.z.RING_USER_TO_VC_NEW_BADGE, {
    analyticsLocations: w
  } = (0, g.ZP)();
  return ((0, f.Z)({
    type: a.ImpressionTypes.MENU,
    name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
    properties: {
      voice_channel_id: e,
      voice_guild_id: null == o ? true : o.guild_id,
      location_stack: w
    }
  }, {
    disableTrack: P || !y
  }, [n.id]), P) ? null : A ? (0, l.jsx)(d.sNh, {
    id: "ring",
    label: y ? (0, l.jsxs)("div", {
      className: j.label,
      children: [I.intl.string(I.t["3Hv9qQ"]), R && (0, l.jsx)(C, {})]
    }) : I.intl.string(I.t.bHa9kN),
    subtext: y ? (0, l.jsx)(E, {
      channel: o
    }) : null,
    action: () => {
      R && k(N.L.TAKE_ACTION), c.Z.ring(e, [n.id], "user_context_menu"), y && null != e && (0, m.Kh)(e)
    },
    className: j.menuItem
  }) : T ? (0, l.jsx)(d.sNh, {
    id: "stop-ringing",
    label: (0, l.jsxs)("div", {
      className: j.label,
      children: [I.intl.string(I.t.ygslb0), R && (0, l.jsx)(C, {})]
    }),
    subtext: y ? (0, l.jsx)(d.Text, {
      variant: "text-xs/medium",
      className: r()(j.subtext, j.ringing),
      children: I.intl.format(I.t.dwfzZi, {
        channelName: (0, l.jsx)(E, {
          channel: o
        })
      })
    }) : null,
    action: () => {
      R && k(N.L.TAKE_ACTION), c.Z.stopRinging(e, [n.id])
    },
    className: j.menuItem
  }) : null
}
let E = n => {
    let {
      channel: e
    } = n, t = (0, p.ZP)(e);
    return (0, l.jsxs)("div", {
      className: j.subtext,
      children: [(0, l.jsx)(d.gj8, {
        size: "xs"
      }), (0, l.jsx)(d.Text, {
        variant: "text-xs/medium",
        className: j.channelName,
        children: t
      })]
    })
  },
  C = () => (0, l.jsx)(d.IGR, {
    color: o.Z.colors.BACKGROUND_BRAND.css,
    text: I.intl.string(I.t.y2b7CA)
  })
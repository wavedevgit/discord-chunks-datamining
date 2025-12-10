/** Chunk was on 70675 **/
/** chunk id: 558924, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  O: () => E,
  Z: () => _
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
  Chunk604570 = require("./604570.js");

function E(e, n) {
  let t = (0, u.e7)([j.Z], () => j.Z.getVoiceChannelId()),
    l = (0, u.e7)([P.Z], () => {
      var e, n;
      return null != (n = null == (e = P.Z.getChannel(t)) ? true : e.getGuildId()) ? n : true
    }),
    {
      enabled: i
    } = p.Z.useExperiment({
      guildId: l,
      location: n
    });
  return i ? t : e
}

function _(e, n) {
  let [t, i] = (0, u.Wu)([f.Z], () => [null != n ? f.Z.getParticipants(n) : null, null != n ? f.Z.getParticipant(n, e.id) : null], [n, e.id]), s = (0, u.e7)([P.Z], () => P.Z.getChannel(n)), O = (0, b.s)(e, "context_menu", n), {
    enabled: j
  } = p.Z.useExperiment({
    guildId: null == s ? true : s.guild_id,
    location: "useRingHangupItem"
  }), E = !O || (null == t ? true : t.length) === 0 || null == n, _ = j && (null == s ? true : s.guild_id) != null, S = null == i, T = null != i && i.type === v.fO.USER && i.ringing, A = [];
  _ && !E && (S || T) && A.push(o.z.RING_USER_TO_VC_NEW_BADGE);
  let [U, M] = (0, m.US)(A), k = U === o.z.RING_USER_TO_VC_NEW_BADGE, {
    analyticsLocations: w
  } = (0, g.ZP)();
  return ((0, Z.Z)({
    type: a.ImpressionTypes.MENU,
    name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
    properties: {
      voice_channel_id: n,
      voice_guild_id: null == s ? true : s.guild_id,
      location_stack: w
    }
  }, {
    disableTrack: E || !_
  }, [e.id]), E) ? null : S ? (0, l.jsx)(d.sNh, {
    id: "ring",
    label: _ ? (0, l.jsxs)("div", {
      className: x.label,
      children: [y.intl.string(y.t["3Hv9qQ"]), k && (0, l.jsx)(I, {})]
    }) : y.intl.string(y.t.bHa9kN),
    subtext: _ ? (0, l.jsx)(C, {
      channel: s
    }) : null,
    action: () => {
      k && M(N.L.TAKE_ACTION), c.Z.ring(n, [e.id], "user_context_menu"), _ && null != n && (0, h.Kh)(n)
    },
    className: x.menuItem
  }) : T ? (0, l.jsx)(d.sNh, {
    id: "stop-ringing",
    label: (0, l.jsxs)("div", {
      className: x.label,
      children: [y.intl.string(y.t.ygslb0), k && (0, l.jsx)(I, {})]
    }),
    subtext: _ ? (0, l.jsx)(d.Text, {
      variant: "text-xs/medium",
      className: r()(x.subtext, x.ringing),
      children: y.intl.format(y.t.dwfzZi, {
        channelName: (0, l.jsx)(C, {
          channel: s
        })
      })
    }) : null,
    action: () => {
      k && M(N.L.TAKE_ACTION), c.Z.stopRinging(n, [e.id])
    },
    className: x.menuItem
  }) : null
}
let C = e => {
    let {
      channel: n
    } = e, t = (0, O.ZP)(n);
    return (0, l.jsxs)("div", {
      className: x.subtext,
      children: [(0, l.jsx)(d.gj8, {
        size: "xs"
      }), (0, l.jsx)(d.Text, {
        variant: "text-xs/medium",
        className: x.channelName,
        children: t
      })]
    })
  },
  I = () => (0, Chunk54381.jsx)(Chunk481060.IGR, {
    color: Chunk692547.Z.colors.BACKGROUND_BRAND.css,
    text: Chunk388032.intl.string(Chunk388032.t.y2b7CA)
  })
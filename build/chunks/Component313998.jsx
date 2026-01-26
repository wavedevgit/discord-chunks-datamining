/** Chunk was on 29534 **/
/** chunk id: 313998, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  A: () => C,
  g: () => E
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk387755 = require("./387755.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk313961 = require("./313961.js"),
  Chunk313369 = require("./313369.js"),
  Chunk325909 = require("./325909.js"),
  Chunk47167 = require("./47167.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk378570 = require("./378570.js"),
  Chunk164891 = require("./164891.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk806931 = require("./806931.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk951808 = require("./951808.js");

function E(n, e) {
  let t = (0, o.bG)([O.A], () => O.A.getVoiceChannelId()),
    i = (0, o.bG)([y.A], () => {
      var n, e;
      return null != (n = null == (e = y.A.getChannel(t)) ? true : e.getGuildId()) ? n : true
    }),
    {
      enabled: l
    } = _.A.useExperiment({
      guildId: i,
      location: e
    });
  return l ? t : n
}

function C(n, e) {
  let [t, l] = (0, o.yK)([A.A], () => [null != e ? A.A.getParticipants(e) : null, null != e ? A.A.getParticipant(e, n.id) : null], [e, n.id]), f = (0, o.bG)([y.A], () => y.A.getChannel(e)), O = (0, b.o)(n, "context_menu", e), {
    enabled: E
  } = _.A.useExperiment({
    guildId: null == f ? true : f.guild_id,
    location: "useRingHangupItem"
  }), {
    copyVariant: C
  } = p.o.useConfig({
    location: "useRingHangupItem"
  }), G = !O || (null == t ? true : t.length) === 0 || null == e, P = E && (null == f ? true : f.guild_id) != null, T = null == l, k = null != l && l.type === x.lp.USER && l.ringing, S = [];
  P && !G && (T || k) && S.push(u.M.RING_USER_TO_VC_NEW_BADGE);
  let [U, w] = (0, v.kn)(S), D = U === u.M.RING_USER_TO_VC_NEW_BADGE, {
    analyticsLocations: R
  } = (0, c.Ay)();
  if ((0, g.A)({
      type: a.ImpressionTypes.MENU,
      name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
      properties: {
        voice_channel_id: e,
        voice_guild_id: null == f ? true : f.guild_id,
        location_stack: R
      }
    }, {
      disableTrack: G || !P
    }, [n.id]), G) return null;
  if (T) {
    let t = P ? j.intl.string(j.t["3Hv9qQ"]) : "add" === C ? j.intl.string(j.t.xlwRY6) : j.intl.string(j.t.bHa9kN);
    return (0, i.jsx)(d.Drp, {
      id: "ring",
      label: t,
      badge: D ? "new" : true,
      subtext: P || "control" !== C ? (0, i.jsx)(N, {
        channel: f
      }) : null,
      action: () => {
        D && w(h.i.TAKE_ACTION), s.A.ring(e, [n.id], "user_context_menu"), P && null != e && (0, m.iN)(e)
      }
    })
  }
  return k ? (0, i.jsx)(d.Drp, {
    id: "stop-ringing",
    label: j.intl.string(j.t.ygslb0),
    badge: D ? "new" : true,
    subtext: P ? (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      className: r()(I.W$, I.DF),
      children: j.intl.format(j.t.dwfzZi, {
        channelName: (0, i.jsx)(N, {
          channel: f
        })
      })
    }) : null,
    action: () => {
      D && w(h.i.TAKE_ACTION), s.A.stopRinging(e, [n.id])
    }
  }) : null
}
let N = n => {
  let {
    channel: e
  } = n, t = (0, f.Ay)(e);
  return (0, i.jsxs)("div", {
    className: I.W$,
    children: [(0, i.jsx)(d.HKD, {
      size: "xs"
    }), (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      className: I.HA,
      children: t
    })]
  })
}
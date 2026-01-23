/** Chunk was on 29534 **/
/** chunk id: 313998, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  A: () => E,
  g: () => C
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
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

function C(n, t) {
  let e = (0, o.bG)([O.A], () => O.A.getVoiceChannelId()),
    i = (0, o.bG)([y.A], () => {
      var n, t;
      return null != (n = null == (t = y.A.getChannel(e)) ? true : t.getGuildId()) ? n : true
    }),
    {
      enabled: l
    } = x.A.useExperiment({
      guildId: i,
      location: t
    });
  return l ? e : n
}

function E(n, t) {
  let [e, l] = (0, o.yK)([p.A], () => [null != t ? p.A.getParticipants(t) : null, null != t ? p.A.getParticipant(t, n.id) : null], [t, n.id]), u = (0, o.bG)([y.A], () => y.A.getChannel(t)), v = (0, f.o)(n, "context_menu", t), {
    enabled: O
  } = x.A.useExperiment({
    guildId: null == u ? true : u.guild_id,
    location: "useRingHangupItem"
  }), {
    copyVariant: C
  } = b.o.useConfig({
    location: "useRingHangupItem"
  }), E = !v || (null == e ? true : e.length) === 0 || null == t, T = O && (null == u ? true : u.guild_id) != null, k = null == l, D = null != l && l.type === j.lp.USER && l.ringing, R = [];
  T && !E && (k || D) && R.push(s.M.RING_USER_TO_VC_NEW_BADGE);
  let [S, U] = (0, m.kn)(R), w = S === s.M.RING_USER_TO_VC_NEW_BADGE, {
    analyticsLocations: V
  } = (0, A.Ay)();
  return ((0, g.A)({
    type: a.ImpressionTypes.MENU,
    name: a.ImpressionNames.RING_TO_GUILD_VC_MENU_ITEM_SHOWN,
    properties: {
      voice_channel_id: t,
      voice_guild_id: null == u ? true : u.guild_id,
      location_stack: V
    }
  }, {
    disableTrack: E || !T
  }, [n.id]), E) ? null : k ? (0, i.jsx)(d.Drp, {
    id: "ring",
    void_label: T ? (0, i.jsxs)("div", {
      className: I.Pf,
      children: [N.intl.string(N.t["3Hv9qQ"]), w && (0, i.jsx)(G, {})]
    }) : "add" === C ? N.intl.string(N.t.xlwRY6) : N.intl.string(N.t.bHa9kN),
    subtext: T || "control" !== C ? (0, i.jsx)(P, {
      channel: u
    }) : null,
    action: () => {
      w && U(h.i.TAKE_ACTION), c.A.ring(t, [n.id], "user_context_menu"), T && null != t && (0, _.iN)(t)
    },
    className: I.j$
  }) : D ? (0, i.jsx)(d.Drp, {
    id: "stop-ringing",
    void_label: (0, i.jsxs)("div", {
      className: I.Pf,
      children: [N.intl.string(N.t.ygslb0), w && (0, i.jsx)(G, {})]
    }),
    subtext: T ? (0, i.jsx)(d.Text, {
      variant: "text-xs/medium",
      className: r()(I.W$, I.DF),
      children: N.intl.format(N.t.dwfzZi, {
        channelName: (0, i.jsx)(P, {
          channel: u
        })
      })
    }) : null,
    action: () => {
      w && U(h.i.TAKE_ACTION), c.A.stopRinging(t, [n.id])
    },
    className: I.j$
  }) : null
}
let P = n => {
    let {
      channel: t
    } = n, e = (0, v.Ay)(t);
    return (0, i.jsxs)("div", {
      className: I.W$,
      children: [(0, i.jsx)(d.HKD, {
        size: "xs"
      }), (0, i.jsx)(d.Text, {
        variant: "text-xs/medium",
        className: I.HA,
        children: e
      })]
    })
  },
  G = () => (0, i.jsx)(d.LpS, {
    color: u.A.colors.BACKGROUND_BRAND.css,
    text: N.intl.string(N.t.y2b7CA)
  })
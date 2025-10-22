/** Chunk was on 99474 **/
/** chunk id: 776568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => E,
  k: () => h,
  u9: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211739 = require("./211739.js"),
  Chunk87051 = require("./87051.js"),
  Chunk496729 = require("./496729.jsx"),
  Chunk777861 = require("./777861.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk933557 = require("./933557.js"),
  Chunk981631 = require("./981631.js"),
  Chunk969943 = require("./969943.js"),
  Chunk388032 = require("./388032.jsx");
let h = () => [{
    value: Chunk969943.Oe.MINUTES_15,
    label: Chunk388032.intl.string(Chunk388032.t["8ot6gv"])
  }, {
    value: Chunk969943.Oe.HOURS_1,
    label: Chunk388032.intl.string(Chunk388032.t.UMWBZr)
  }, {
    value: Chunk969943.Oe.HOURS_3,
    label: Chunk388032.intl.string(Chunk388032.t.QmYWtu)
  }, {
    value: Chunk969943.Oe.HOURS_8,
    label: Chunk388032.intl.string(Chunk388032.t.EpAXPC)
  }, {
    value: Chunk969943.Oe.HOURS_24,
    label: Chunk388032.intl.string(Chunk388032.t["755t4q"])
  }, {
    value: Chunk969943.Oe.ALWAYS,
    label: Chunk388032.intl.string(Chunk388032.t.r3LawO)
  }],
  R = e => {
    let t = e > 0 ? l()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function E(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [a, l] = (0, r.Wu)([c.ZP], () => [c.ZP.isChannelMuted(e.guild_id, e.id), c.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    C = (0, f.U)(l),
    E = (0, v.ZP)(e, true);

  function A(t) {
    t && e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, _.UE.muted(t))
  }
  let I = g.intl.string(g.t.tbeRRJ),
    O = g.intl.string(g.t.OYefme);
  switch (e.type) {
    case p.d4z.GUILD_CATEGORY:
      I = g.intl.string(g.t.pNMCg2), O = g.intl.string(g.t.olaBeG);
      break;
    case p.d4z.GROUP_DM:
      I = g.intl.string(g.t.LO3kaK), O = g.intl.string(g.t["s5/5fm"]);
      break;
    case p.d4z.DM:
      I = n ? g.intl.format(g.t.byjuJm, {
        name: E
      }) : g.intl.string(g.t.LO3kaK), O = n ? g.intl.format(g.t["eC+9rj"], {
        name: E
      }) : g.intl.string(g.t["s5/5fm"]);
      break;
    default:
      I = g.intl.string(g.t.tbeRRJ), O = g.intl.string(g.t.OYefme)
  }
  return a ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: O,
    subtext: C,
    action: () => A(false)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: I,
    action: () => {
      A(true), (0, s.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: h().map(n => {
      let {
        value: a,
        label: l
      } = n;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(a),
        label: l,
        action: () => (function(n) {
          e.type === p.d4z.GUILD_CATEGORY && (0, u.c4)(e.id);
          let i = R(n);
          d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, t)
        })(a)
      }, a)
    })
  })
}
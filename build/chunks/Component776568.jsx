/** Chunk was on 97418 **/
/** chunk id: 776568, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => A,
  k: () => R,
  u9: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
let R = () => [{
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
  m = e => {
    let n = e > 0 ? l()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: n
      }
    }
  };

function A(e, n) {
  let t = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [a, l] = (0, r.Wu)([c.ZP], () => [c.ZP.isChannelMuted(e.guild_id, e.id), c.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    h = (0, f.U)(l),
    A = (0, v.ZP)(e, true);

  function C(n) {
    n && e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: n
    }, _.UE.muted(n))
  }
  let E = g.intl.string(g.t.tbeRRJ),
    I = g.intl.string(g.t.OYefme);
  switch (e.type) {
    case p.d4z.GUILD_CATEGORY:
      E = g.intl.string(g.t.pNMCg2), I = g.intl.string(g.t.olaBeG);
      break;
    case p.d4z.GROUP_DM:
      E = g.intl.string(g.t.LO3kaK), I = g.intl.string(g.t["s5/5fm"]);
      break;
    case p.d4z.DM:
      E = t ? g.intl.format(g.t.byjuJm, {
        name: A
      }) : g.intl.string(g.t.LO3kaK), I = t ? g.intl.format(g.t["eC+9rj"], {
        name: A
      }) : g.intl.string(g.t["s5/5fm"]);
      break;
    default:
      E = g.intl.string(g.t.tbeRRJ), I = g.intl.string(g.t.OYefme)
  }
  return a ? (0, i.jsx)(u.sNh, {
    id: "unmute-channel",
    label: I,
    subtext: h,
    action: () => C(false)
  }) : (0, i.jsx)(u.sNh, {
    id: "mute-channel",
    label: E,
    action: () => {
      C(true), (0, s.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: R().map(t => {
      let {
        value: a,
        label: l
      } = t;
      return (0, i.jsx)(u.sNh, {
        id: "".concat(a),
        label: l,
        action: () => (function(t) {
          e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
          let i = m(t);
          d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, n)
        })(a)
      }, a)
    })
  })
}
/** Chunk was on 98350 **/
/** chunk id: 776568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => b,
  k: () => _,
  u9: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
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
let _ = () => [{
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
  E = e => {
    let t = e > 0 ? a()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function b(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [l, a] = (0, r.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    p = (0, d.U)(a),
    b = (0, O.ZP)(e, true);

  function C(t) {
    t && e.type === v.d4z.GUILD_CATEGORY && (0, s.c4)(e.id), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, g.UE.muted(t))
  }
  let y = h.intl.string(h.t.tbeRRJ),
    N = h.intl.string(h.t.OYefme);
  switch (e.type) {
    case v.d4z.GUILD_CATEGORY:
      y = h.intl.string(h.t.pNMCg2), N = h.intl.string(h.t.olaBeG);
      break;
    case v.d4z.GROUP_DM:
      y = h.intl.string(h.t.LO3kaK), N = h.intl.string(h.t["s5/5fm"]);
      break;
    case v.d4z.DM:
      y = n ? h.intl.format(h.t.byjuJm, {
        name: b
      }) : h.intl.string(h.t.LO3kaK), N = n ? h.intl.format(h.t["eC+9rj"], {
        name: b
      }) : h.intl.string(h.t["s5/5fm"]);
      break;
    default:
      y = h.intl.string(h.t.tbeRRJ), N = h.intl.string(h.t.OYefme)
  }
  return l ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: N,
    subtext: p,
    action: () => C(false)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: y,
    action: () => {
      C(true), (0, c.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: _().map(n => {
      let {
        value: l,
        label: a
      } = n;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(l),
        label: a,
        action: () => (function(n) {
          e.type === v.d4z.GUILD_CATEGORY && (0, s.c4)(e.id);
          let i = E(n);
          u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, t)
        })(l)
      }, l)
    })
  })
}
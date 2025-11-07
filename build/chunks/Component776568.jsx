/** Chunk was on 89250 **/
/** chunk id: 776568, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  ZP: () => C,
  k: () => b,
  u9: () => p
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
let b = () => [{
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
  p = t => {
    let n = t > 0 ? l()().add(t, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: t,
        end_time: n
      }
    }
  };

function C(t, n) {
  let e = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [a, l] = (0, r.Wu)([h.ZP], () => [h.ZP.isChannelMuted(t.guild_id, t.id), h.ZP.getChannelMuteConfig(t.guild_id, t.id)]),
    Z = (0, c.U)(l),
    C = (0, g.ZP)(t, true);

  function _(n) {
    n && t.type === v.d4z.GUILD_CATEGORY && (0, o.c4)(t.id), d.Z.updateChannelOverrideSettings(t.guild_id, t.id, {
      muted: n
    }, f.UE.muted(n))
  }
  let O = m.intl.string(m.t.tbeRRJ),
    N = m.intl.string(m.t.OYefme);
  switch (t.type) {
    case v.d4z.GUILD_CATEGORY:
      O = m.intl.string(m.t.pNMCg2), N = m.intl.string(m.t.olaBeG);
      break;
    case v.d4z.GROUP_DM:
      O = m.intl.string(m.t.LO3kaK), N = m.intl.string(m.t["s5/5fm"]);
      break;
    case v.d4z.DM:
      O = e ? m.intl.format(m.t.byjuJm, {
        name: C
      }) : m.intl.string(m.t.LO3kaK), N = e ? m.intl.format(m.t["eC+9rj"], {
        name: C
      }) : m.intl.string(m.t["s5/5fm"]);
      break;
    default:
      O = m.intl.string(m.t.tbeRRJ), N = m.intl.string(m.t.OYefme)
  }
  return a ? (0, i.jsx)(s.sNh, {
    id: "unmute-channel",
    label: N,
    subtext: Z,
    action: () => _(false)
  }) : (0, i.jsx)(s.sNh, {
    id: "mute-channel",
    label: O,
    action: () => {
      _(true), (0, u.sT)({
        channelId: t.id,
        location: "channel_context_menu"
      })
    },
    children: b().map(e => {
      let {
        value: a,
        label: l
      } = e;
      return (0, i.jsx)(s.sNh, {
        id: "".concat(a),
        label: l,
        action: () => (function(e) {
          t.type === v.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
          let i = p(e);
          d.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, f.ZB.Muted, n)
        })(a)
      }, a)
    })
  })
}
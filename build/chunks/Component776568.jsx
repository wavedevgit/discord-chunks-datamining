/** Chunk was on 89250 **/
/** chunk id: 776568, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  ZP: () => p,
  k: () => m,
  u9: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk211739 = require("./211739.js"),
  Chunk87051 = require("./87051.js"),
  Chunk777861 = require("./777861.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk933557 = require("./933557.js"),
  Chunk981631 = require("./981631.js"),
  Chunk969943 = require("./969943.js"),
  Chunk388032 = require("./388032.jsx");
let m = () => [{
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
  b = t => {
    let n = t > 0 ? l()().add(t, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: t,
        end_time: n
      }
    }
  };

function p(t, n) {
  let e = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [a, l] = (0, r.Wu)([c.ZP], () => [c.ZP.isChannelMuted(t.guild_id, t.id), c.ZP.getChannelMuteConfig(t.guild_id, t.id)]),
    v = (0, u.U)(l),
    p = (0, f.ZP)(t, true);

  function C(n) {
    n && t.type === g.d4z.GUILD_CATEGORY && (0, o.c4)(t.id), d.Z.updateChannelOverrideSettings(t.guild_id, t.id, {
      muted: n
    }, h.UE.muted(n))
  }
  let _ = Z.intl.string(Z.t.tbeRRJ),
    O = Z.intl.string(Z.t.OYefme);
  switch (t.type) {
    case g.d4z.GUILD_CATEGORY:
      _ = Z.intl.string(Z.t.pNMCg2), O = Z.intl.string(Z.t.olaBeG);
      break;
    case g.d4z.GROUP_DM:
      _ = Z.intl.string(Z.t.LO3kaK), O = Z.intl.string(Z.t["s5/5fm"]);
      break;
    case g.d4z.DM:
      _ = e ? Z.intl.format(Z.t.byjuJm, {
        name: p
      }) : Z.intl.string(Z.t.LO3kaK), O = e ? Z.intl.format(Z.t["eC+9rj"], {
        name: p
      }) : Z.intl.string(Z.t["s5/5fm"]);
      break;
    default:
      _ = Z.intl.string(Z.t.tbeRRJ), O = Z.intl.string(Z.t.OYefme)
  }
  return a ? (0, i.jsx)(s.sNh, {
    id: "unmute-channel",
    label: O,
    subtext: v,
    action: () => C(false)
  }) : (0, i.jsx)(s.sNh, {
    id: "mute-channel",
    label: _,
    action: () => {
      C(true)
    },
    children: m().map(e => {
      let {
        value: a,
        label: l
      } = e;
      return (0, i.jsx)(s.sNh, {
        id: "".concat(a),
        label: l,
        action: () => (function(e) {
          t.type === g.d4z.GUILD_CATEGORY && (0, o.c4)(t.id);
          let i = b(e);
          d.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, h.ZB.Muted, n)
        })(a)
      }, a)
    })
  })
}
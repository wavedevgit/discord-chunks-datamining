/** Chunk was on 97418 **/
/** chunk id: 776568, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => E,
  k: () => g,
  u9: () => C
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
let g = () => [{
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
  C = e => {
    let n = e > 0 ? l()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: n
      }
    }
  };

function E(e, n) {
  let t = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [a, l] = (0, r.Wu)([c.ZP], () => [c.ZP.isChannelMuted(e.guild_id, e.id), c.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    h = (0, f.U)(l),
    E = (0, v.ZP)(e, true);

  function A(n) {
    n && e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: n
    }, _.UE.muted(n))
  }
  let I = R.intl.string(R.t.tbeRRJ),
    O = R.intl.string(R.t.OYefme);
  switch (e.type) {
    case p.d4z.GUILD_CATEGORY:
      I = R.intl.string(R.t.pNMCg2), O = R.intl.string(R.t.olaBeG);
      break;
    case p.d4z.GROUP_DM:
      I = R.intl.string(R.t.LO3kaK), O = R.intl.string(R.t["s5/5fm"]);
      break;
    case p.d4z.DM:
      I = t ? R.intl.format(R.t.byjuJm, {
        name: E
      }) : R.intl.string(R.t.LO3kaK), O = t ? R.intl.format(R.t["eC+9rj"], {
        name: E
      }) : R.intl.string(R.t["s5/5fm"]);
      break;
    default:
      I = R.intl.string(R.t.tbeRRJ), O = R.intl.string(R.t.OYefme)
  }
  return a ? (0, i.jsx)(u.sNh, {
    id: "unmute-channel",
    label: O,
    subtext: h,
    action: () => A(false)
  }) : (0, i.jsx)(u.sNh, {
    id: "mute-channel",
    label: I,
    action: () => {
      A(true), (0, s.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: g().map(t => {
      let {
        value: a,
        label: l
      } = t;
      return (0, i.jsx)(u.sNh, {
        id: "".concat(a),
        label: l,
        action: () => (function(t) {
          e.type === p.d4z.GUILD_CATEGORY && (0, o.c4)(e.id);
          let i = C(t);
          d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, n)
        })(a)
      }, a)
    })
  })
}
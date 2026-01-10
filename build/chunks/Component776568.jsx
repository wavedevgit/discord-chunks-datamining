/** Chunk was on 91736 **/
/** chunk id: 776568, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  ZP: () => v,
  k: () => h,
  u9: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
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
let h = () => [{
    value: b.Oe.MINUTES_15,
    label: m.intl.string(m.t["8ot6gv"])
  }, {
    value: b.Oe.HOURS_1,
    label: m.intl.string(m.t.UMWBZr)
  }, {
    value: b.Oe.HOURS_3,
    label: m.intl.string(m.t.QmYWtu)
  }, {
    value: b.Oe.HOURS_8,
    label: m.intl.string(m.t.EpAXPC)
  }, {
    value: b.Oe.HOURS_24,
    label: m.intl.string(m.t["755t4q"])
  }, {
    value: b.Oe.ALWAYS,
    label: m.intl.string(m.t.r3LawO)
  }],
  p = t => {
    let e = t > 0 ? r()().add(t, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: t,
        end_time: e
      }
    }
  };

function v(t, e) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [l, r] = (0, a.Wu)([d.ZP], () => [d.ZP.isChannelMuted(t.guild_id, t.id), d.ZP.getChannelMuteConfig(t.guild_id, t.id)]),
    b = (0, o.U)(r),
    v = (0, O.ZP)(t, true);

  function y(e) {
    e && t.type === f.d4z.GUILD_CATEGORY && (0, u.c4)(t.id), c.Z.updateChannelOverrideSettings(t.guild_id, t.id, {
      muted: e
    }, g.UE.muted(e))
  }
  let j = m.intl.string(m.t.tbeRRJ),
    P = m.intl.string(m.t.OYefme);
  switch (t.type) {
    case f.d4z.GUILD_CATEGORY:
      j = m.intl.string(m.t.pNMCg2), P = m.intl.string(m.t.olaBeG);
      break;
    case f.d4z.GROUP_DM:
      j = m.intl.string(m.t.LO3kaK), P = m.intl.string(m.t["s5/5fm"]);
      break;
    case f.d4z.DM:
      j = n ? m.intl.format(m.t.byjuJm, {
        name: v
      }) : m.intl.string(m.t.LO3kaK), P = n ? m.intl.format(m.t["eC+9rj"], {
        name: v
      }) : m.intl.string(m.t["s5/5fm"]);
      break;
    default:
      j = m.intl.string(m.t.tbeRRJ), P = m.intl.string(m.t.OYefme)
  }
  return l ? (0, i.jsx)(s.sNh, {
    id: "unmute-channel",
    label: P,
    subtext: b,
    action: () => y(false)
  }) : (0, i.jsx)(s.sNh, {
    id: "mute-channel",
    label: j,
    action: () => {
      y(true)
    },
    children: h().map(n => {
      let {
        value: l,
        label: r
      } = n;
      return (0, i.jsx)(s.sNh, {
        id: "".concat(l),
        label: r,
        action: () => (function(n) {
          t.type === f.d4z.GUILD_CATEGORY && (0, u.c4)(t.id);
          let i = p(n);
          c.Z.updateChannelOverrideSettings(t.guild_id, t.id, i, g.ZB.Muted, e)
        })(l)
      }, l)
    })
  })
}
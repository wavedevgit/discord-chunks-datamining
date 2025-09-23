/** Chunk was on 98350 **/
/** chunk id: 776568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => b,
  k: () => E,
  u9: () => _
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
let E = () => [{
    value: Chunk969943.Oe.MINUTES_15,
    label: Chunk388032.intl.string(Chunk388032.t["8ot6go"])
  }, {
    value: Chunk969943.Oe.HOURS_1,
    label: Chunk388032.intl.string(Chunk388032.t.UMWBZm)
  }, {
    value: Chunk969943.Oe.HOURS_3,
    label: Chunk388032.intl.string(Chunk388032.t.QmYWtr)
  }, {
    value: Chunk969943.Oe.HOURS_8,
    label: Chunk388032.intl.string(Chunk388032.t.EpAXPD)
  }, {
    value: Chunk969943.Oe.HOURS_24,
    label: Chunk388032.intl.string(Chunk388032.t["755t4u"])
  }, {
    value: Chunk969943.Oe.ALWAYS,
    label: Chunk388032.intl.string(Chunk388032.t.r3LawM)
  }],
  _ = e => {
    let t = e > 0 ? l()().add(e, "second").toISOString() : null;
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
    [a, l] = (0, r.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    v = (0, d.U)(l),
    b = (0, O.ZP)(e, true);

  function C(t) {
    t && e.type === p.d4z.GUILD_CATEGORY && (0, s.c4)(e.id), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, g.UE.muted(t))
  }
  let y = h.intl.string(h.t.tbeRRE),
    N = h.intl.string(h.t.OYefmZ);
  switch (e.type) {
    case p.d4z.GUILD_CATEGORY:
      y = h.intl.string(h.t.pNMCg4), N = h.intl.string(h.t.olaBeH);
      break;
    case p.d4z.GROUP_DM:
      y = h.intl.string(h.t.LO3kaG), N = h.intl.string(h.t["s5/5fn"]);
      break;
    case p.d4z.DM:
      y = n ? h.intl.format(h.t.byjuJi, {
        name: b
      }) : h.intl.string(h.t.LO3kaG), N = n ? h.intl.format(h.t["eC+9rq"], {
        name: b
      }) : h.intl.string(h.t["s5/5fn"]);
      break;
    default:
      y = h.intl.string(h.t.tbeRRE), N = h.intl.string(h.t.OYefmZ)
  }
  return a ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: N,
    subtext: v,
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
    children: E().map(n => {
      let {
        value: a,
        label: l
      } = n;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(a),
        label: l,
        action: () => (function(n) {
          e.type === p.d4z.GUILD_CATEGORY && (0, s.c4)(e.id);
          let i = _(n);
          u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, g.ZB.Muted, t)
        })(a)
      }, a)
    })
  })
}
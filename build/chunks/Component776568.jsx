/** Chunk was on 85328 **/
/** chunk id: 776568, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  ZP: () => Z,
  k: () => v,
  u9: () => y
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
let v = () => [{
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
  y = e => {
    let n = e > 0 ? l()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: n
      }
    }
  };

function Z(e, n) {
  let t = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [r, l] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    O = (0, d.U)(l),
    Z = (0, p.ZP)(e, true);

  function m(n) {
    n && e.type === g.d4z.GUILD_CATEGORY && (0, s.c4)(e.id), c.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: n
    }, h.UE.muted(n))
  }
  let _ = b.intl.string(b.t.tbeRRE),
    j = b.intl.string(b.t.OYefmZ);
  switch (e.type) {
    case g.d4z.GUILD_CATEGORY:
      _ = b.intl.string(b.t.pNMCg4), j = b.intl.string(b.t.olaBeH);
      break;
    case g.d4z.GROUP_DM:
      _ = b.intl.string(b.t.LO3kaG), j = b.intl.string(b.t["s5/5fn"]);
      break;
    case g.d4z.DM:
      _ = t ? b.intl.format(b.t.byjuJi, {
        name: Z
      }) : b.intl.string(b.t.LO3kaG), j = t ? b.intl.format(b.t["eC+9rq"], {
        name: Z
      }) : b.intl.string(b.t["s5/5fn"]);
      break;
    default:
      _ = b.intl.string(b.t.tbeRRE), j = b.intl.string(b.t.OYefmZ)
  }
  return r ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: j,
    subtext: O,
    action: () => m(false)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: _,
    action: () => {
      m(true), (0, u.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: v().map(t => {
      let {
        value: r,
        label: l
      } = t;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(r),
        label: l,
        action: () => (function(t) {
          e.type === g.d4z.GUILD_CATEGORY && (0, s.c4)(e.id);
          let i = y(t);
          c.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, h.ZB.Muted, n)
        })(r)
      }, r)
    })
  })
}
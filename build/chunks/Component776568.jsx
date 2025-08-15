/** Chunk was on 78650 **/
/** chunk id: 776568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => O,
  k: () => p,
  u9: () => m
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
let p = () => [{
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
  m = e => {
    let t = e > 0 ? l()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function O(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [r, l] = (0, a.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    b = (0, c.U)(l),
    O = (0, g.ZP)(e, true);

  function _(t) {
    t && e.type === v.d4z.GUILD_CATEGORY && (0, s.c4)(e.id), d.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, h.UE.muted(t))
  }
  let j = Z.intl.string(Z.t.tbeRRE),
    E = Z.intl.string(Z.t.OYefmZ);
  switch (e.type) {
    case v.d4z.GUILD_CATEGORY:
      j = Z.intl.string(Z.t.pNMCg4), E = Z.intl.string(Z.t.olaBeH);
      break;
    case v.d4z.GROUP_DM:
      j = Z.intl.string(Z.t.LO3kaG), E = Z.intl.string(Z.t["s5/5fn"]);
      break;
    case v.d4z.DM:
      j = n ? Z.intl.format(Z.t.byjuJi, {
        name: O
      }) : Z.intl.string(Z.t.LO3kaG), E = n ? Z.intl.format(Z.t["eC+9rq"], {
        name: O
      }) : Z.intl.string(Z.t["s5/5fn"]);
      break;
    default:
      j = Z.intl.string(Z.t.tbeRRE), E = Z.intl.string(Z.t.OYefmZ)
  }
  return r ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: E,
    subtext: b,
    action: () => _(false)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: j,
    action: () => {
      _(true), (0, u.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: p().map(n => {
      let {
        value: r,
        label: l
      } = n;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(r),
        label: l,
        action: () => (function(n) {
          e.type === v.d4z.GUILD_CATEGORY && (0, s.c4)(e.id);
          let i = m(n);
          d.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, h.ZB.Muted, t)
        })(r)
      }, r)
    })
  })
}
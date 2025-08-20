/** Chunk was on 91499 **/
/** chunk id: 776568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => v,
  k: () => p,
  u9: () => m
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
    let t = e > 0 ? a()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function v(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [l, a] = (0, r.Wu)([f.ZP], () => [f.ZP.isChannelMuted(e.guild_id, e.id), f.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    h = (0, s.U)(a),
    v = (0, _.ZP)(e, true);

  function C(t) {
    t && e.type === g.d4z.GUILD_CATEGORY && (0, c.c4)(e.id), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, b.UE.muted(t))
  }
  let S = O.intl.string(O.t.tbeRRE),
    Z = O.intl.string(O.t.OYefmZ);
  switch (e.type) {
    case g.d4z.GUILD_CATEGORY:
      S = O.intl.string(O.t.pNMCg4), Z = O.intl.string(O.t.olaBeH);
      break;
    case g.d4z.GROUP_DM:
      S = O.intl.string(O.t.LO3kaG), Z = O.intl.string(O.t["s5/5fn"]);
      break;
    case g.d4z.DM:
      S = n ? O.intl.format(O.t.byjuJi, {
        name: v
      }) : O.intl.string(O.t.LO3kaG), Z = n ? O.intl.format(O.t["eC+9rq"], {
        name: v
      }) : O.intl.string(O.t["s5/5fn"]);
      break;
    default:
      S = O.intl.string(O.t.tbeRRE), Z = O.intl.string(O.t.OYefmZ)
  }
  return l ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: Z,
    subtext: h,
    action: () => C(false)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: S,
    action: () => {
      C(true), (0, d.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: p().map(n => {
      let {
        value: l,
        label: a
      } = n;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(l),
        label: a,
        action: () => (function(n) {
          e.type === g.d4z.GUILD_CATEGORY && (0, c.c4)(e.id);
          let i = m(n);
          u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, b.ZB.Muted, t)
        })(l)
      }, l)
    })
  })
}
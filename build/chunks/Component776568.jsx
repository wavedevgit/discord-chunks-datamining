/** Chunk was on 88333 **/
/** chunk id: 776568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => O,
  k: () => g,
  u9: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
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
  C = e => {
    let t = e > 0 ? r()().add(e, "second").toISOString() : null;
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
    [a, r] = (0, l.Wu)([c.ZP], () => [c.ZP.isChannelMuted(e.guild_id, e.id), c.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    b = (0, s.U)(r),
    O = (0, v.ZP)(e, true);

  function m(t) {
    t && e.type === p.d4z.GUILD_CATEGORY && (0, d.c4)(e.id), u.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, _.UE.muted(t))
  }
  let E = h.intl.string(h.t.tbeRRE),
    y = h.intl.string(h.t.OYefmZ);
  switch (e.type) {
    case p.d4z.GUILD_CATEGORY:
      E = h.intl.string(h.t.pNMCg4), y = h.intl.string(h.t.olaBeH);
      break;
    case p.d4z.GROUP_DM:
      E = h.intl.string(h.t.LO3kaG), y = h.intl.string(h.t["s5/5fn"]);
      break;
    case p.d4z.DM:
      E = n ? h.intl.format(h.t.byjuJi, {
        name: O
      }) : h.intl.string(h.t.LO3kaG), y = n ? h.intl.format(h.t["eC+9rq"], {
        name: O
      }) : h.intl.string(h.t["s5/5fn"]);
      break;
    default:
      E = h.intl.string(h.t.tbeRRE), y = h.intl.string(h.t.OYefmZ)
  }
  return a ? (0, i.jsx)(o.sNh, {
    id: "unmute-channel",
    label: y,
    subtext: b,
    action: () => m(false)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-channel",
    label: E,
    action: () => {
      m(true), (0, f.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: g().map(n => {
      let {
        value: a,
        label: r
      } = n;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(a),
        label: r,
        action: () => (function(n) {
          e.type === p.d4z.GUILD_CATEGORY && (0, d.c4)(e.id);
          let i = C(n);
          u.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, _.ZB.Muted, t)
        })(a)
      }, a)
    })
  })
}
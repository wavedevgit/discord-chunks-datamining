/** Chunk was on 94512 **/
/** chunk id: 776568, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => S,
  k: () => m,
  u9: () => C
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
  C = e => {
    let t = e > 0 ? l()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function S(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [a, l] = (0, o.Wu)([_.ZP], () => [_.ZP.isChannelMuted(e.guild_id, e.id), _.ZP.getChannelMuteConfig(e.guild_id, e.id)]),
    b = (0, d.U)(l),
    S = (0, g.ZP)(e, true);

  function I(t) {
    t && e.type === f.d4z.GUILD_CATEGORY && (0, r.c4)(e.id), s.Z.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, h.UE.muted(t))
  }
  let v = p.intl.string(p.t.tbeRRJ),
    E = p.intl.string(p.t.OYefme);
  switch (e.type) {
    case f.d4z.GUILD_CATEGORY:
      v = p.intl.string(p.t.pNMCg2), E = p.intl.string(p.t.olaBeG);
      break;
    case f.d4z.GROUP_DM:
      v = p.intl.string(p.t.LO3kaK), E = p.intl.string(p.t["s5/5fm"]);
      break;
    case f.d4z.DM:
      v = n ? p.intl.format(p.t.byjuJm, {
        name: S
      }) : p.intl.string(p.t.LO3kaK), E = n ? p.intl.format(p.t["eC+9rj"], {
        name: S
      }) : p.intl.string(p.t["s5/5fm"]);
      break;
    default:
      v = p.intl.string(p.t.tbeRRJ), E = p.intl.string(p.t.OYefme)
  }
  return a ? (0, i.jsx)(c.sNh, {
    id: "unmute-channel",
    label: E,
    subtext: b,
    action: () => I(false)
  }) : (0, i.jsx)(c.sNh, {
    id: "mute-channel",
    label: v,
    action: () => {
      I(true), (0, u.sT)({
        channelId: e.id,
        location: "channel_context_menu"
      })
    },
    children: m().map(n => {
      let {
        value: a,
        label: l
      } = n;
      return (0, i.jsx)(c.sNh, {
        id: "".concat(a),
        label: l,
        action: () => (function(n) {
          e.type === f.d4z.GUILD_CATEGORY && (0, r.c4)(e.id);
          let i = C(n);
          s.Z.updateChannelOverrideSettings(e.guild_id, e.id, i, h.ZB.Muted, t)
        })(a)
      }, a)
    })
  })
}
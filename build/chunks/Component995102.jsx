/** Chunk was on 88962 **/
/** chunk id: 995102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => g,
  gv: () => C,
  pB: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk914430 = require("./914430.js"),
  Chunk832712 = require("./832712.js"),
  Chunk392567 = require("./392567.jsx"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk47167 = require("./47167.js"),
  Chunk652215 = require("./652215.js"),
  Chunk815968 = require("./815968.js"),
  Chunk985018 = require("./985018.jsx");
let C = () => [{
    value: _.Xx.MINUTES_15,
    label: p.intl.string(p.t["8ot6gv"])
  }, {
    value: _.Xx.HOURS_1,
    label: p.intl.string(p.t.UMWBZr)
  }, {
    value: _.Xx.HOURS_3,
    label: p.intl.string(p.t.QmYWtu)
  }, {
    value: _.Xx.HOURS_8,
    label: p.intl.string(p.t.EpAXPC)
  }, {
    value: _.Xx.HOURS_24,
    label: p.intl.string(p.t["755t4q"])
  }, {
    value: _.Xx.ALWAYS,
    label: p.intl.string(p.t.r3LawO)
  }],
  b = e => {
    let t = e > 0 ? l()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function g(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [a, l] = (0, r.yK)([c.Ay], () => [c.Ay.isChannelMuted(e.guild_id, e.id), c.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
    _ = (0, s.M)(l),
    g = (0, v.Ay)(e, true);

  function m(t) {
    t && e.type === A.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id), u.A.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, f.G_.muted(t))
  }
  let h = p.intl.string(p.t.tbeRRJ),
    E = p.intl.string(p.t.OYefme);
  switch (e.type) {
    case A.rbe.GUILD_CATEGORY:
      h = p.intl.string(p.t.pNMCg2), E = p.intl.string(p.t.olaBeG);
      break;
    case A.rbe.GROUP_DM:
      h = p.intl.string(p.t.LO3kaK), E = p.intl.string(p.t["s5/5fm"]);
      break;
    case A.rbe.DM:
      h = n ? p.intl.format(p.t.byjuJm, {
        name: g
      }) : p.intl.string(p.t.LO3kaK), E = n ? p.intl.format(p.t["eC+9rj"], {
        name: g
      }) : p.intl.string(p.t["s5/5fm"]);
      break;
    default:
      h = p.intl.string(p.t.tbeRRJ), E = p.intl.string(p.t.OYefme)
  }
  return a ? (0, i.jsx)(d.Drp, {
    id: "unmute-channel",
    label: E,
    subtext: _,
    action: () => m(false)
  }) : (0, i.jsx)(d.Drp, {
    id: "mute-channel",
    label: h,
    action: () => {
      m(true)
    },
    children: C().map(n => {
      let {
        value: a,
        label: l
      } = n;
      return (0, i.jsx)(d.Drp, {
        id: "".concat(a),
        label: l,
        action: () => {
          let n;
          return e.type === A.rbe.GUILD_CATEGORY && (0, o.Gv)(e.id), n = b(a), void u.A.updateChannelOverrideSettings(e.guild_id, e.id, n, f.fd.Muted, t)
        }
      }, a)
    })
  })
}
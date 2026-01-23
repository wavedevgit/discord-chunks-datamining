/** Chunk was on 98865 **/
/** chunk id: 995102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => O,
  gv: () => g,
  pB: () => h
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
let g = () => [{
    value: p.Xx.MINUTES_15,
    label: v.intl.string(v.t["8ot6gv"])
  }, {
    value: p.Xx.HOURS_1,
    label: v.intl.string(v.t.UMWBZr)
  }, {
    value: p.Xx.HOURS_3,
    label: v.intl.string(v.t.QmYWtu)
  }, {
    value: p.Xx.HOURS_8,
    label: v.intl.string(v.t.EpAXPC)
  }, {
    value: p.Xx.HOURS_24,
    label: v.intl.string(v.t["755t4q"])
  }, {
    value: p.Xx.ALWAYS,
    label: v.intl.string(v.t.r3LawO)
  }],
  h = e => {
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
    [i, l] = (0, a.yK)([d.Ay], () => [d.Ay.isChannelMuted(e.guild_id, e.id), d.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
    p = (0, u.M)(l),
    O = (0, A.Ay)(e, true);

  function m(t) {
    t && e.type === b.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id), c.A.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, f.G_.muted(t))
  }
  let y = v.intl.string(v.t.tbeRRJ),
    _ = v.intl.string(v.t.OYefme);
  switch (e.type) {
    case b.rbe.GUILD_CATEGORY:
      y = v.intl.string(v.t.pNMCg2), _ = v.intl.string(v.t.olaBeG);
      break;
    case b.rbe.GROUP_DM:
      y = v.intl.string(v.t.LO3kaK), _ = v.intl.string(v.t["s5/5fm"]);
      break;
    case b.rbe.DM:
      y = n ? v.intl.format(v.t.byjuJm, {
        name: O
      }) : v.intl.string(v.t.LO3kaK), _ = n ? v.intl.format(v.t["eC+9rj"], {
        name: O
      }) : v.intl.string(v.t["s5/5fm"]);
      break;
    default:
      y = v.intl.string(v.t.tbeRRJ), _ = v.intl.string(v.t.OYefme)
  }
  return i ? (0, r.jsx)(o.Drp, {
    id: "unmute-channel",
    label: _,
    subtext: p,
    action: () => m(false)
  }) : (0, r.jsx)(o.Drp, {
    id: "mute-channel",
    label: y,
    action: () => {
      m(true)
    },
    children: g().map(n => {
      let {
        value: i,
        label: l
      } = n;
      return (0, r.jsx)(o.Drp, {
        id: "".concat(i),
        label: l,
        action: () => {
          let n;
          return e.type === b.rbe.GUILD_CATEGORY && (0, s.Gv)(e.id), n = h(i), void c.A.updateChannelOverrideSettings(e.guild_id, e.id, n, f.fd.Muted, t)
        }
      }, i)
    })
  })
}
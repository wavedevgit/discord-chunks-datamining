/** Chunk was on 92617 **/
/** chunk id: 995102, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => y,
  gv: () => g,
  pB: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
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
    value: v.Xx.MINUTES_15,
    label: A.intl.string(A.t["8ot6gv"])
  }, {
    value: v.Xx.HOURS_1,
    label: A.intl.string(A.t.UMWBZr)
  }, {
    value: v.Xx.HOURS_3,
    label: A.intl.string(A.t.QmYWtu)
  }, {
    value: v.Xx.HOURS_8,
    label: A.intl.string(A.t.EpAXPC)
  }, {
    value: v.Xx.HOURS_24,
    label: A.intl.string(A.t["755t4q"])
  }, {
    value: v.Xx.ALWAYS,
    label: A.intl.string(A.t.r3LawO)
  }],
  O = e => {
    let t = e > 0 ? a()().add(e, "second").toISOString() : null;
    return {
      muted: true,
      mute_config: {
        selected_time_window: e,
        end_time: t
      }
    }
  };

function y(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [i, a] = (0, l.yK)([s.Ay], () => [s.Ay.isChannelMuted(e.guild_id, e.id), s.Ay.getChannelMuteConfig(e.guild_id, e.id)]),
    v = (0, u.M)(a),
    y = (0, p.Ay)(e, true);

  function m(t) {
    t && e.type === b.rbe.GUILD_CATEGORY && (0, d.Gv)(e.id), c.A.updateChannelOverrideSettings(e.guild_id, e.id, {
      muted: t
    }, f.G_.muted(t))
  }
  let _ = A.intl.string(A.t.tbeRRJ),
    E = A.intl.string(A.t.OYefme);
  switch (e.type) {
    case b.rbe.GUILD_CATEGORY:
      _ = A.intl.string(A.t.pNMCg2), E = A.intl.string(A.t.olaBeG);
      break;
    case b.rbe.GROUP_DM:
      _ = A.intl.string(A.t.LO3kaK), E = A.intl.string(A.t["s5/5fm"]);
      break;
    case b.rbe.DM:
      _ = n ? A.intl.format(A.t.byjuJm, {
        name: y
      }) : A.intl.string(A.t.LO3kaK), E = n ? A.intl.format(A.t["eC+9rj"], {
        name: y
      }) : A.intl.string(A.t["s5/5fm"]);
      break;
    default:
      _ = A.intl.string(A.t.tbeRRJ), E = A.intl.string(A.t.OYefme)
  }
  return i ? (0, r.jsx)(o.Drp, {
    id: "unmute-channel",
    label: E,
    subtext: v,
    action: () => m(false)
  }) : (0, r.jsx)(o.Drp, {
    id: "mute-channel",
    label: _,
    action: () => {
      m(true)
    },
    children: g().map(n => {
      let {
        value: i,
        label: a
      } = n;
      return (0, r.jsx)(o.Drp, {
        id: "".concat(i),
        label: a,
        action: () => {
          let n;
          return e.type === b.rbe.GUILD_CATEGORY && (0, d.Gv)(e.id), n = O(i), void c.A.updateChannelOverrideSettings(e.guild_id, e.id, n, f.fd.Muted, t)
        }
      }, i)
    })
  })
}
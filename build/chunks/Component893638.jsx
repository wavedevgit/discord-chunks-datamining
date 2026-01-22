/** Chunk was on 21738 **/
/** chunk id: 893638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk481859 = require("./481859.jsx"),
  Chunk186975 = require("./186975.jsx"),
  Chunk204160 = require("./204160.jsx"),
  Chunk787523 = require("./787523.jsx"),
  Chunk69175 = require("./69175.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk388756 = require("./388756.js");
let A = [{
    feature: Chunk652215.x0t.SINGLE_PLAYER,
    getText: () => f.intl.string(f.t["V+/FjO"]),
    getTooltip: () => f.intl.string(f.t["w+X9sT"]),
    IconComponent: Chunk397927.nys
  }, {
    feature: Chunk652215.x0t.LOCAL_MULTIPLAYER,
    getText: () => f.intl.string(f.t.srnWru),
    getTooltip: () => f.intl.string(f.t.sDdLWA),
    IconComponent: Chunk397927.nFg
  }, {
    feature: Chunk652215.x0t.ONLINE_MULTIPLAYER,
    getText: () => f.intl.string(f.t.xPHbgA),
    getTooltip: () => f.intl.string(f.t.g6kR4D),
    IconComponent: Chunk397927.nFg
  }, {
    feature: Chunk652215.x0t.PVP,
    getText: () => f.intl.string(f.t.qhgwxx),
    getTooltip: () => f.intl.string(f.t["5jGrhN"]),
    IconComponent: Chunk397927.quN
  }, {
    feature: Chunk652215.x0t.LOCAL_COOP,
    getText: () => f.intl.string(f.t.FqbalJ),
    getTooltip: () => f.intl.string(f.t.vIgDgd),
    IconComponent: Chunk397927.nFg
  }, {
    feature: Chunk652215.x0t.ONLINE_COOP,
    getText: () => f.intl.string(f.t.lDHO4Y),
    getTooltip: () => f.intl.string(f.t.VXDphs),
    IconComponent: Chunk397927.nFg
  }, {
    feature: Chunk652215.x0t.CROSS_PLATFORM,
    getText: () => f.intl.string(f.t.SWo2Hf),
    getTooltip: () => f.intl.string(f.t.ll2wzY),
    IconComponent: Chunk397927.fNY
  }, {
    feature: Chunk652215.x0t.RICH_PRESENCE,
    getText: () => f.intl.string(f.t.PVSVtI),
    getTooltip: () => f.intl.string(f.t.O6Yp4d),
    IconComponent: Chunk787523.A
  }, {
    feature: Chunk652215.x0t.DISCORD_GAME_INVITES,
    getText: () => f.intl.string(f.t.agm68P),
    getTooltip: () => f.intl.string(f.t.kS2vFN),
    IconComponent: Chunk204160.A
  }, {
    feature: Chunk652215.x0t.SPECTATOR_MODE,
    getText: () => f.intl.string(f.t.ZtiU7w),
    getTooltip: () => f.intl.string(f.t.kUtiKa),
    IconComponent: Chunk397927.npA
  }, {
    feature: Chunk652215.x0t.CONTROLLER_SUPPORT,
    getText: () => f.intl.string(f.t.UlBQ8P),
    getTooltip: () => f.intl.string(f.t.iG00jA),
    IconComponent: Chunk397927.LVO
  }, {
    feature: Chunk652215.x0t.CLOUD_SAVES,
    getText: () => f.intl.string(f.t.rOcNrD),
    getTooltip: () => f.intl.string(f.t.kvw18E),
    IconComponent: Chunk186975.A
  }, {
    feature: Chunk652215.x0t.SECURE_NETWORKING,
    getText: () => f.intl.string(f.t.GKFWL3),
    getTooltip: () => f.intl.string(f.t.VudViJ),
    IconComponent: Chunk69175.A
  }],
  g = e => {
    let {
      IconComponent: t,
      text: n,
      tooltip: i
    } = e;
    return (0, r.jsxs)("div", {
      className: h.nM,
      children: [(0, r.jsx)(l.m, {
        text: i,
        children: (0, r.jsx)(t, {
          className: h.AD
        })
      }), (0, r.jsx)("span", {
        className: h.oo,
        children: n
      }), (0, r.jsx)(a.A9s, {
        size: "md",
        color: "currentColor",
        className: h.$8
      })]
    })
  };
class m extends Chunk64700.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, t = A.filter(t => {
      let {
        feature: n
      } = t;
      return e.features.has(n)
    }).map(e => {
      let {
        feature: t,
        IconComponent: n,
        getText: i,
        getTooltip: l
      } = e;
      return (0, r.jsx)(g, {
        IconComponent: n,
        text: i(),
        tooltip: l()
      }, t)
    });
    return 0 === t.length ? null : (0, r.jsxs)("div", {
      className: h.qT,
      children: [(0, r.jsx)(s.A, {
        children: f.intl.string(f.t.XXENra)
      }), t]
    })
  }
}
let b = m
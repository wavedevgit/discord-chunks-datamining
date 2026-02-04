/** Chunk was on 21738 **/
/** chunk id: 893638, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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
let g = [{
    feature: Chunk652215.x0t.SINGLE_PLAYER,
    getText: () => h.intl.string(h.t["V+/FjO"]),
    getTooltip: () => h.intl.string(h.t["w+X9sT"]),
    IconComponent: Chunk397927.nys
  }, {
    feature: Chunk652215.x0t.LOCAL_MULTIPLAYER,
    getText: () => h.intl.string(h.t.srnWru),
    getTooltip: () => h.intl.string(h.t.sDdLWA),
    IconComponent: Chunk397927.nFg
  }, {
    feature: Chunk652215.x0t.ONLINE_MULTIPLAYER,
    getText: () => h.intl.string(h.t.xPHbgA),
    getTooltip: () => h.intl.string(h.t.g6kR4D),
    IconComponent: Chunk397927.nFg
  }, {
    feature: Chunk652215.x0t.PVP,
    getText: () => h.intl.string(h.t.qhgwxx),
    getTooltip: () => h.intl.string(h.t["5jGrhN"]),
    IconComponent: Chunk397927.quN
  }, {
    feature: Chunk652215.x0t.LOCAL_COOP,
    getText: () => h.intl.string(h.t.FqbalJ),
    getTooltip: () => h.intl.string(h.t.vIgDgd),
    IconComponent: Chunk397927.nFg
  }, {
    feature: Chunk652215.x0t.ONLINE_COOP,
    getText: () => h.intl.string(h.t.lDHO4Y),
    getTooltip: () => h.intl.string(h.t.VXDphs),
    IconComponent: Chunk397927.nFg
  }, {
    feature: Chunk652215.x0t.CROSS_PLATFORM,
    getText: () => h.intl.string(h.t.SWo2Hf),
    getTooltip: () => h.intl.string(h.t.ll2wzY),
    IconComponent: Chunk397927.fNY
  }, {
    feature: Chunk652215.x0t.RICH_PRESENCE,
    getText: () => h.intl.string(h.t.PVSVtI),
    getTooltip: () => h.intl.string(h.t.O6Yp4d),
    IconComponent: Chunk787523.A
  }, {
    feature: Chunk652215.x0t.DISCORD_GAME_INVITES,
    getText: () => h.intl.string(h.t.agm68P),
    getTooltip: () => h.intl.string(h.t.kS2vFN),
    IconComponent: Chunk204160.A
  }, {
    feature: Chunk652215.x0t.SPECTATOR_MODE,
    getText: () => h.intl.string(h.t.ZtiU7w),
    getTooltip: () => h.intl.string(h.t.kUtiKa),
    IconComponent: Chunk397927.npA
  }, {
    feature: Chunk652215.x0t.CONTROLLER_SUPPORT,
    getText: () => h.intl.string(h.t.UlBQ8P),
    getTooltip: () => h.intl.string(h.t.iG00jA),
    IconComponent: Chunk397927.LVO
  }, {
    feature: Chunk652215.x0t.CLOUD_SAVES,
    getText: () => h.intl.string(h.t.rOcNrD),
    getTooltip: () => h.intl.string(h.t.kvw18E),
    IconComponent: Chunk186975.A
  }, {
    feature: Chunk652215.x0t.SECURE_NETWORKING,
    getText: () => h.intl.string(h.t.GKFWL3),
    getTooltip: () => h.intl.string(h.t.VudViJ),
    IconComponent: Chunk69175.A
  }],
  m = e => {
    let {
      IconComponent: t,
      text: n,
      tooltip: i
    } = e;
    return (0, r.jsxs)("div", {
      className: f.nM,
      children: [(0, r.jsx)(l.m, {
        text: i,
        children: (0, r.jsx)(t, {
          className: f.AD
        })
      }), (0, r.jsx)("span", {
        className: f.oo,
        children: n
      }), (0, r.jsx)(a.A9s, {
        size: "md",
        color: "currentColor",
        className: f.$8
      })]
    })
  };
class A extends Chunk64700.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, t = g.filter(t => {
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
      return (0, r.jsx)(m, {
        IconComponent: n,
        text: i(),
        tooltip: l()
      }, t)
    });
    return 0 === t.length ? null : (0, r.jsxs)("div", {
      className: f.qT,
      children: [(0, r.jsx)(s.A, {
        children: h.intl.string(h.t.XXENra)
      }), t]
    })
  }
}
let _ = A
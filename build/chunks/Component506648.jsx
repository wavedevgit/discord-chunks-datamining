/** Chunk was on 1272 **/
/** chunk id: 506648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk770146 = require("./770146.jsx"),
  Chunk863969 = require("./863969.jsx"),
  Chunk38761 = require("./38761.jsx"),
  Chunk6074 = require("./6074.jsx"),
  Chunk39377 = require("./39377.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk126373 = require("./126373.js");
let h = [{
    feature: Chunk981631.Qa3.SINGLE_PLAYER,
    getText: () => Chunk388032.intl.string(Chunk388032.t["V+/FjI"]),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t["w+X9sb"]),
    IconComponent: Chunk481060.tBG
  }, {
    feature: Chunk981631.Qa3.LOCAL_MULTIPLAYER,
    getText: () => Chunk388032.intl.string(Chunk388032.t.srnWrq),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.sDdLWF),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.ONLINE_MULTIPLAYER,
    getText: () => Chunk388032.intl.string(Chunk388032.t.xPHbgI),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.g6kR4O),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.PVP,
    getText: () => Chunk388032.intl.string(Chunk388032.t.qhgwx8),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t["5jGrhI"]),
    IconComponent: Chunk481060.HI3
  }, {
    feature: Chunk981631.Qa3.LOCAL_COOP,
    getText: () => Chunk388032.intl.string(Chunk388032.t.FqbalJ),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.vIgDgY),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.ONLINE_COOP,
    getText: () => Chunk388032.intl.string(Chunk388032.t.lDHO4e),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.VXDpho),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.CROSS_PLATFORM,
    getText: () => Chunk388032.intl.string(Chunk388032.t.SWo2HR),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.ll2wzc),
    IconComponent: Chunk481060.DuK
  }, {
    feature: Chunk981631.Qa3.RICH_PRESENCE,
    getText: () => Chunk388032.intl.string(Chunk388032.t.PVSVtL),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.O6Yp4e),
    IconComponent: Chunk6074.Z
  }, {
    feature: Chunk981631.Qa3.DISCORD_GAME_INVITES,
    getText: () => Chunk388032.intl.string(Chunk388032.t.agm68P),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.kS2vFB),
    IconComponent: Chunk38761.Z
  }, {
    feature: Chunk981631.Qa3.SPECTATOR_MODE,
    getText: () => Chunk388032.intl.string(Chunk388032.t["ZtiU7+"]),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.kUtiKS),
    IconComponent: Chunk481060.Odl
  }, {
    feature: Chunk981631.Qa3.CONTROLLER_SUPPORT,
    getText: () => Chunk388032.intl.string(Chunk388032.t.UlBQ8P),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.iG00jI),
    IconComponent: Chunk481060.xoD
  }, {
    feature: Chunk981631.Qa3.CLOUD_SAVES,
    getText: () => Chunk388032.intl.string(Chunk388032.t.rOcNrK),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.kvw18P),
    IconComponent: Chunk863969.Z
  }, {
    feature: Chunk981631.Qa3.SECURE_NETWORKING,
    getText: () => Chunk388032.intl.string(Chunk388032.t.GKFWLy),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.VudViI),
    IconComponent: Chunk39377.Z
  }],
  g = e => {
    let {
      IconComponent: t,
      text: n,
      tooltip: i
    } = e;
    return (0, r.jsxs)("div", {
      className: f.row,
      children: [(0, r.jsx)(l.ua7, {
        text: i,
        children: e => (0, r.jsx)(t, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          className: f.featureIcon
        }, e))
      }), (0, r.jsx)("span", {
        className: f.featureText,
        children: n
      }), (0, r.jsx)(l.dz2, {
        size: "md",
        color: "currentColor",
        className: f.checkmarkIcon
      })]
    })
  };
class m extends Chunk647438.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, t = h.filter(t => {
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
    return 0 === exports.length ? null : (0, Chunk951288.jsxs)("div", {
      className: Chunk126373.features,
      children: [(0, Chunk951288.jsx)(Chunk770146.Z, {
        children: Chunk388032.intl.string(Chunk388032.t.XXENra)
      }), exports]
    })
  }
}
let b = m
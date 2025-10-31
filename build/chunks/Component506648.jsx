/** Chunk was on 1272 **/
/** chunk id: 506648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk28664 = require("./28664.jsx"),
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
    getText: () => Chunk388032.intl.string(Chunk388032.t["V+/FjO"]),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t["w+X9sT"]),
    IconComponent: Chunk481060.tBG
  }, {
    feature: Chunk981631.Qa3.LOCAL_MULTIPLAYER,
    getText: () => Chunk388032.intl.string(Chunk388032.t.srnWru),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.sDdLWA),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.ONLINE_MULTIPLAYER,
    getText: () => Chunk388032.intl.string(Chunk388032.t.xPHbgA),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.g6kR4D),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.PVP,
    getText: () => Chunk388032.intl.string(Chunk388032.t.qhgwxx),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t["5jGrhN"]),
    IconComponent: Chunk481060.HI3
  }, {
    feature: Chunk981631.Qa3.LOCAL_COOP,
    getText: () => Chunk388032.intl.string(Chunk388032.t.FqbalJ),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.vIgDgd),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.ONLINE_COOP,
    getText: () => Chunk388032.intl.string(Chunk388032.t.lDHO4Y),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.VXDphs),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.CROSS_PLATFORM,
    getText: () => Chunk388032.intl.string(Chunk388032.t.SWo2Hf),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.ll2wzY),
    IconComponent: Chunk481060.DuK
  }, {
    feature: Chunk981631.Qa3.RICH_PRESENCE,
    getText: () => Chunk388032.intl.string(Chunk388032.t.PVSVtI),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.O6Yp4d),
    IconComponent: Chunk6074.Z
  }, {
    feature: Chunk981631.Qa3.DISCORD_GAME_INVITES,
    getText: () => Chunk388032.intl.string(Chunk388032.t.agm68P),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.kS2vFN),
    IconComponent: Chunk38761.Z
  }, {
    feature: Chunk981631.Qa3.SPECTATOR_MODE,
    getText: () => Chunk388032.intl.string(Chunk388032.t.ZtiU7w),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.kUtiKa),
    IconComponent: Chunk481060.Odl
  }, {
    feature: Chunk981631.Qa3.CONTROLLER_SUPPORT,
    getText: () => Chunk388032.intl.string(Chunk388032.t.UlBQ8P),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.iG00jA),
    IconComponent: Chunk481060.xoD
  }, {
    feature: Chunk981631.Qa3.CLOUD_SAVES,
    getText: () => Chunk388032.intl.string(Chunk388032.t.rOcNrD),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.kvw18E),
    IconComponent: Chunk863969.Z
  }, {
    feature: Chunk981631.Qa3.SECURE_NETWORKING,
    getText: () => Chunk388032.intl.string(Chunk388032.t.GKFWL3),
    getTooltip: () => Chunk388032.intl.string(Chunk388032.t.VudViJ),
    IconComponent: Chunk39377.Z
  }],
  g = e => {
    let {
      IconComponent: t,
      text: n,
      tooltip: i
    } = e;
    return (0, r.jsxs)("div", {
      className: m.row,
      children: [(0, r.jsx)(l.u, {
        text: i,
        children: (0, r.jsx)(t, {
          className: m.featureIcon
        })
      }), (0, r.jsx)("span", {
        className: m.featureText,
        children: n
      }), (0, r.jsx)(a.dz2, {
        size: "md",
        color: "currentColor",
        className: m.checkmarkIcon
      })]
    })
  };
class _ extends Chunk647438.PureComponent {
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
let b = _
/** Chunk was on 1272 **/
/** chunk id: 506648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk770146 = require("./770146.jsx"),
  Chunk863969 = require("./863969.jsx"),
  Chunk38761 = require("./38761.jsx"),
  Chunk6074 = require("./6074.jsx"),
  Chunk39377 = require("./39377.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk322349 = require("./322349.js");
let m = [{
    feature: Chunk981631.Qa3.SINGLE_PLAYER,
    getText: () => f.intl.string(f.t["V+/FjO"]),
    getTooltip: () => f.intl.string(f.t["w+X9sT"]),
    IconComponent: Chunk481060.tBG
  }, {
    feature: Chunk981631.Qa3.LOCAL_MULTIPLAYER,
    getText: () => f.intl.string(f.t.srnWru),
    getTooltip: () => f.intl.string(f.t.sDdLWA),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.ONLINE_MULTIPLAYER,
    getText: () => f.intl.string(f.t.xPHbgA),
    getTooltip: () => f.intl.string(f.t.g6kR4D),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.PVP,
    getText: () => f.intl.string(f.t.qhgwxx),
    getTooltip: () => f.intl.string(f.t["5jGrhN"]),
    IconComponent: Chunk481060.HI3
  }, {
    feature: Chunk981631.Qa3.LOCAL_COOP,
    getText: () => f.intl.string(f.t.FqbalJ),
    getTooltip: () => f.intl.string(f.t.vIgDgd),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.ONLINE_COOP,
    getText: () => f.intl.string(f.t.lDHO4Y),
    getTooltip: () => f.intl.string(f.t.VXDphs),
    IconComponent: Chunk481060.BFJ
  }, {
    feature: Chunk981631.Qa3.CROSS_PLATFORM,
    getText: () => f.intl.string(f.t.SWo2Hf),
    getTooltip: () => f.intl.string(f.t.ll2wzY),
    IconComponent: Chunk481060.DuK
  }, {
    feature: Chunk981631.Qa3.RICH_PRESENCE,
    getText: () => f.intl.string(f.t.PVSVtI),
    getTooltip: () => f.intl.string(f.t.O6Yp4d),
    IconComponent: Chunk6074.Z
  }, {
    feature: Chunk981631.Qa3.DISCORD_GAME_INVITES,
    getText: () => f.intl.string(f.t.agm68P),
    getTooltip: () => f.intl.string(f.t.kS2vFN),
    IconComponent: Chunk38761.Z
  }, {
    feature: Chunk981631.Qa3.SPECTATOR_MODE,
    getText: () => f.intl.string(f.t.ZtiU7w),
    getTooltip: () => f.intl.string(f.t.kUtiKa),
    IconComponent: Chunk481060.Odl
  }, {
    feature: Chunk981631.Qa3.CONTROLLER_SUPPORT,
    getText: () => f.intl.string(f.t.UlBQ8P),
    getTooltip: () => f.intl.string(f.t.iG00jA),
    IconComponent: Chunk481060.xoD
  }, {
    feature: Chunk981631.Qa3.CLOUD_SAVES,
    getText: () => f.intl.string(f.t.rOcNrD),
    getTooltip: () => f.intl.string(f.t.kvw18E),
    IconComponent: Chunk863969.Z
  }, {
    feature: Chunk981631.Qa3.SECURE_NETWORKING,
    getText: () => f.intl.string(f.t.GKFWL3),
    getTooltip: () => f.intl.string(f.t.VudViJ),
    IconComponent: Chunk39377.Z
  }],
  h = e => {
    let {
      IconComponent: t,
      text: n,
      tooltip: i
    } = e;
    return (0, r.jsxs)("div", {
      className: g.row,
      children: [(0, r.jsx)(l.u, {
        text: i,
        children: (0, r.jsx)(t, {
          className: g.featureIcon
        })
      }), (0, r.jsx)("span", {
        className: g.featureText,
        children: n
      }), (0, r.jsx)(a.dz2, {
        size: "md",
        color: "currentColor",
        className: g.checkmarkIcon
      })]
    })
  };
class b extends Chunk473749.PureComponent {
  render() {
    let {
      sku: e
    } = this.props, t = m.filter(t => {
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
      return (0, r.jsx)(h, {
        IconComponent: n,
        text: i(),
        tooltip: l()
      }, t)
    });
    return 0 === t.length ? null : (0, r.jsxs)("div", {
      className: g.features,
      children: [(0, r.jsx)(o.Z, {
        children: f.intl.string(f.t.XXENra)
      }), t]
    })
  }
}
let _ = b
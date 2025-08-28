/** Chunk was on 83789 **/
/** chunk id: 778414, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => T,
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk981312 = require("./981312.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351402 = require("./351402.js"),
  Chunk206599 = require("./206599.js"),
  Chunk5136 = require("./5136.js"),
  Chunk747101 = require("./747101.js"),
  Chunk517157 = require("./517157.js"),
  Chunk985748 = require("./985748.jsx"),
  Chunk566007 = require("./566007.jsx"),
  Chunk173951 = require("./173951.jsx"),
  Chunk455731 = require("./455731.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk640078 = require("./640078.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830202 = require("./830202.js");

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function I(e) {
  var {
    widget: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, i = function(e, t) {
      if (null == e) return {};
      var r, n, i = {},
        l = Object.keys(e);
      for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
    }
    return i
  }(e, ["widget"]);
  switch (t.type) {
    case l.l.FAVORITE_GAMES:
      return (0, n.jsx)(O.Z, P({
        widget: t
      }, r));
    case l.l.CURRENT_GAMES:
      return (0, n.jsx)(m.Z, P({
        widget: t
      }, r));
    case l.l.WANT_TO_PLAY_GAMES:
      return (0, n.jsx)(y.Z, P({
        widget: t
      }, r));
    case l.l.PLAYED_GAMES:
      return (0, n.jsx)(j.Z, P({
        widget: t
      }, r));
    default:
      return null
  }
}

function S() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk830202.ukTeenDisclaimer,
    children: [(0, Chunk951288.jsx)(Chunk481060.d3s, {
      size: "xs"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t["7blcz8"]),
      variant: "text-xs/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t["7blcz8"])
    })]
  })
}

function E(e) {
  let {
    user: t,
    guildId: r,
    channelId: l
  } = e, o = (0, b.Z)(t.id), {
    widgets: g,
    isGameFetching: m
  } = (0, p.Z)(o), O = (0, a.e7)([u.default], () => u.default.getId() === t.id), j = (() => {
    let [e, t] = (0, a.Wu)([d.Z], () => [d.Z.ipCountryCode, d.Z.ipCountryCodeRequest]), r = (0, s.U)();
    return i.useEffect(() => {
      null == e && null == t && r && (0, c.GE)()
    }, [e, t, r]), "GB" === e && r
  })(), y = 0 === g.length && O;
  return ((0, f.J)(O, g), y) ? (0, n.jsx)(h.Z, {}) : (0, n.jsxs)("div", {
    className: w.widgets,
    children: [O && j && (0, n.jsx)(S, {}), g.map((e, i) => (0, n.jsx)(I, {
      widget: e,
      user: t,
      guildId: r,
      channelId: l,
      isGameFetching: m,
      index: i
    }, e.id)), O && (0, n.jsx)(x.Z, {})]
  })
}

function T(e) {
  let t = i.useRef(null);
  return (0, g.r)({
    container: t.current
  }), (0, n.jsxs)(o.Ttm, {
    "data-scroller": true,
    ref: t,
    className: w.scroller,
    fade: true,
    children: [(0, n.jsx)(v.Z, {
      scrollerRef: t
    }), (0, n.jsx)(E, P({}, e))]
  })
}
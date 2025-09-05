/** Chunk was on 30355 **/
/** chunk id: 778414, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => E,
  Z: () => S
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
  Chunk836197 = require("./836197.js"),
  Chunk206599 = require("./206599.js"),
  Chunk5136 = require("./5136.js"),
  Chunk747101 = require("./747101.js"),
  Chunk517157 = require("./517157.js"),
  Chunk860717 = require("./860717.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk640078 = require("./640078.jsx"),
  Chunk190862 = require("./190862.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830202 = require("./830202.js");

function I(e) {
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

function S(e) {
  var {
    widget: t
  } = e, r = function(e, t) {
    if (null == e) return {};
    var r, n, l = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        i = Object.keys(e);
      for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
    }
    return l
  }(e, ["widget"]);
  switch (t.type) {
    case i.l.FAVORITE_GAMES:
    case i.l.CURRENT_GAMES:
    case i.l.WANT_TO_PLAY_GAMES:
    case i.l.PLAYED_GAMES:
      return (0, n.jsx)(y.Z, I({
        widget: t
      }, r));
    case i.l.APPLICATION:
      return (0, n.jsx)(j.Z, I({
        widget: t
      }, r));
    default:
      return null
  }
}

function w() {
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

function N(e) {
  let {
    user: t,
    guildId: r,
    channelId: i
  } = e, s = (0, b.Z)(t.id), p = (0, a.e7)([u.default], () => u.default.getId() === t.id), j = (() => {
    let [e, t] = (0, a.Wu)([d.Z], () => [d.Z.ipCountryCode, d.Z.ipCountryCodeRequest]), r = (0, c.U)();
    return l.useEffect(() => {
      null == e && null == t && r && (0, o.GE)()
    }, [e, t, r]), "GB" === e && r
  })(), x = 0 === s.length && p;
  return ((0, g.ZP)(s.filter(f.W)), (0, m.J)(p, s), x) ? (0, n.jsx)(v.Z, {}) : (0, n.jsxs)(n.Fragment, {
    children: [p && j && (0, n.jsx)(w, {}), s.map((e, l) => (0, n.jsx)(S, {
      widget: e,
      user: t,
      guildId: r,
      channelId: i,
      index: l
    }, e.id)), p && (0, n.jsx)(O.Z, {})]
  })
}

function E(e) {
  let t = l.useRef(null);
  return (0, p.r)({
    container: t.current
  }), (0, n.jsxs)(h.F, {
    "data-scroller": true,
    scrollerRef: t,
    className: A.scroller,
    fade: true,
    children: [(0, n.jsx)(x.Z, {
      scrollerRef: t
    }), (0, n.jsx)(N, I({}, e)), (0, n.jsx)(s.c43, {})]
  })
}
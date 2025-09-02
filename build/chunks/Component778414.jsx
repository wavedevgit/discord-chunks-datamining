/** Chunk was on 8188 **/
/** chunk id: 778414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => N,
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
  Chunk661462 = require("./661462.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830202 = require("./830202.js");

function I(e) {
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
}

function S(e) {
  var {
    widget: t
  } = e, n = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["widget"]);
  switch (t.type) {
    case l.l.FAVORITE_GAMES:
      return (0, r.jsx)(O.Z, I({
        widget: t
      }, n));
    case l.l.CURRENT_GAMES:
      return (0, r.jsx)(m.Z, I({
        widget: t
      }, n));
    case l.l.WANT_TO_PLAY_GAMES:
      return (0, r.jsx)(y.Z, I({
        widget: t
      }, n));
    case l.l.PLAYED_GAMES:
      return (0, r.jsx)(j.Z, I({
        widget: t
      }, n));
    default:
      return null
  }
}

function E() {
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

function T(e) {
  let {
    user: t,
    guildId: n,
    channelId: l
  } = e, o = (0, p.Z)(t.id), {
    widgets: g,
    isGameFetching: m
  } = (0, b.Z)(o), O = (0, a.e7)([u.default], () => u.default.getId() === t.id), j = (() => {
    let [e, t] = (0, a.Wu)([d.Z], () => [d.Z.ipCountryCode, d.Z.ipCountryCodeRequest]), n = (0, s.U)();
    return i.useEffect(() => {
      null == e && null == t && n && (0, c.GE)()
    }, [e, t, n]), "GB" === e && n
  })(), y = 0 === g.length && O;
  return ((0, f.J)(O, g), y) ? (0, r.jsx)(_.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [O && j && (0, r.jsx)(E, {}), g.map((e, i) => (0, r.jsx)(S, {
      widget: e,
      user: t,
      guildId: n,
      channelId: l,
      isGameFetching: m,
      index: i
    }, e.id)), O && (0, r.jsx)(x.Z, {})]
  })
}

function N(e) {
  let t = i.useRef(null);
  return (0, g.r)({
    container: t.current
  }), (0, r.jsxs)(h.F, {
    "data-scroller": true,
    scrollerRef: t,
    className: w.scroller,
    fade: true,
    children: [(0, r.jsx)(v.Z, {
      scrollerRef: t
    }), (0, r.jsx)(T, I({}, e)), (0, r.jsx)(o.c43, {})]
  })
}
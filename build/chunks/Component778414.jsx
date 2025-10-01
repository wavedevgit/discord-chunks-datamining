/** Chunk was on 56848 **/
/** chunk id: 778414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => R,
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk981312 = require("./981312.js"),
  Chunk929677 = require("./929677.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351402 = require("./351402.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk206599 = require("./206599.js"),
  Chunk5136 = require("./5136.js"),
  Chunk690760 = require("./690760.js"),
  Chunk747101 = require("./747101.js"),
  Chunk517157 = require("./517157.js"),
  Chunk860717 = require("./860717.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk640078 = require("./640078.jsx"),
  Chunk190862 = require("./190862.jsx"),
  Chunk996921 = require("./996921.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk479283 = require("./479283.js");

function N(e) {
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

function T(e, t) {
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
}

function Z(e) {
  var {
    widget: t
  } = e, n = T(e, ["widget"]);
  return t instanceof h.q ? (0, r.jsx)(j.Z, N({
    widget: t
  }, n)) : t instanceof p.zy ? (0, r.jsx)(S.Z, N({
    widget: t
  }, n)) : null
}

function D() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk479283.ukTeenDisclaimer,
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

function _(e) {
  let {
    user: t,
    guildId: n,
    channelId: l
  } = e, a = (0, O.Z)(t.id), o = (0, s.e7)([f.default], () => f.default.getId() === t.id), v = (() => {
    let [e, t] = (0, s.Wu)([g.Z], () => [g.Z.ipCountryCode, g.Z.ipCountryCodeRequest]), n = (0, u.U)();
    return i.useEffect(() => {
      null == e && null == t && n && (0, c.GE)()
    }, [e, t, n]), "GB" === e && n
  })(), j = 0 === a.length && o, x = i.useMemo(() => a.filter(p.Wc), [a]), S = i.useMemo(() => a.filter(e => e instanceof h.q), [a]);
  (0, y.ZP)(x), (0, m.J)(o, x);
  var I = t.id;
  (0, b.s)(S);
  let {
    data: w
  } = (0, d.O)(I), A = i.useRef(w);
  return (A.current = w, i.useEffect(() => {
    null !== A.current && (0, s.Xf)(C.McO.USER_APPLICATION_IDENTITIES(I))
  }, [I]), j) ? (0, r.jsx)(E.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [o && v && (0, r.jsx)(D, {}), a.map((e, i) => (0, r.jsx)(Z, {
      widget: e,
      user: t,
      guildId: n,
      channelId: l,
      index: i
    }, e.type)), o && (0, r.jsx)(P.Z, {})]
  })
}

function R(e) {
  var {
    user: t
  } = e, n = T(e, ["user"]);
  let l = i.useRef(null);
  (0, v.r)({
    container: l.current
  });
  let s = (0, I.h)(t.id);
  return (0, r.jsxs)(w.F, {
    "data-scroller": true,
    scrollerRef: l,
    className: a()(k.scroller, {
      [k.hasToolbar]: s
    }),
    fade: true,
    children: [(0, r.jsx)(x.Z, {
      scrollerRef: l
    }), (0, r.jsx)(_, N({
      user: t
    }, n))]
  })
}
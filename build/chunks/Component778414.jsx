/** Chunk was on 74477 **/
/** chunk id: 778414, original params: e,t,r (module,exports,require) **/
"use strict";
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
  Chunk830202 = require("./830202.js");

function k(e) {
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

function T(e, t) {
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
}

function Z(e) {
  var {
    widget: t
  } = e, r = T(e, ["widget"]);
  return t instanceof h.q ? (0, n.jsx)(O.Z, k({
    widget: t
  }, r)) : t instanceof p.zy ? (0, n.jsx)(S.Z, k({
    widget: t
  }, r)) : null
}

function D() {
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

function _(e) {
  let {
    user: t,
    guildId: r,
    channelId: l
  } = e, a = (0, j.Z)(t.id), o = (0, s.e7)([f.default], () => f.default.getId() === t.id), v = (() => {
    let [e, t] = (0, s.Wu)([g.Z], () => [g.Z.ipCountryCode, g.Z.ipCountryCodeRequest]), r = (0, u.U)();
    return i.useEffect(() => {
      null == e && null == t && r && (0, c.GE)()
    }, [e, t, r]), "GB" === e && r
  })(), O = 0 === a.length && o, P = i.useMemo(() => a.filter(p.Wc), [a]), S = i.useMemo(() => a.filter(e => e instanceof h.q), [a]);
  (0, y.ZP)(P), (0, m.J)(o, P);
  var w = t.id;
  (0, b.s)(S);
  let {
    data: I
  } = (0, d.O)(w), N = i.useRef(I);
  return (N.current = I, i.useEffect(() => {
    null !== N.current && (0, s.Xf)(C.McO.USER_APPLICATION_IDENTITIES(w))
  }, [w]), O) ? (0, n.jsx)(E.Z, {}) : (0, n.jsxs)(n.Fragment, {
    children: [o && v && (0, n.jsx)(D, {}), a.map((e, i) => (0, n.jsx)(Z, {
      widget: e,
      user: t,
      guildId: r,
      channelId: l,
      index: i
    }, e.type)), o && (0, n.jsx)(x.Z, {})]
  })
}

function R(e) {
  var {
    user: t
  } = e, r = T(e, ["user"]);
  let l = i.useRef(null);
  (0, v.r)({
    container: l.current
  });
  let s = (0, w.h)(t.id);
  return (0, n.jsxs)(I.F, {
    "data-scroller": true,
    scrollerRef: l,
    className: a()(A.scroller, {
      [A.hasToolbar]: s
    }),
    fade: true,
    children: [(0, n.jsx)(P.Z, {
      scrollerRef: l
    }), (0, n.jsx)(_, k({
      user: t
    }, r))]
  })
}
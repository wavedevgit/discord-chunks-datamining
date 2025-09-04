/** Chunk was on web.js **/
/** chunk id: 74869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk481060 = require("./481060.js"),
  Chunk492435 = require("./492435.js"),
  Chunk667344 = require("./667344.js"),
  Chunk493075 = require("./493075.js"),
  Chunk438159 = require("./438159.js"),
  Chunk878209 = require("./878209.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    id: t,
    experiment: n,
    currentBucket: i,
    system: a
  } = e, o = (0, d.v)(n);
  return (0, r.jsxs)(s.sNh, {
    id: t.replaceAll("--", "__"),
    label: n.title,
    action: () => (0, l.rX)(a, t, null),
    children: [o.map(e => (0, r.jsx)(s.S89, {
      id: "".concat(e.id),
      label: e.shortLabel,
      checked: e.id === (null == i ? true : i.variantId),
      action: () => (0, l.rX)(a, t, e.id)
    }, "".concat(e.id))), (0, r.jsx)(s.kSQ, {
      children: null != i && (0, r.jsx)(s.sNh, {
        id: "clear-override",
        label: "Clear Override",
        color: "danger",
        icon: s.XHJ,
        action: () => (0, l.rX)(a, t, null)
      })
    })]
  }, t)
}

function b() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, Chunk493075.s)(), {
    experiments: n,
    overridesInfo: a
  } = (0, Chunk667344.Q)(), l = Chunk647438.useMemo(() => {
    let r = h({}, module, require),
      i = h({}, exports, Chunk658722);
    return (0, Chunk878209.Tc)((0, Chunk878209.Cg)(Chunk951288), Chunk647438).map(e => {
      let {
        id: t,
        experiment: n
      } = e;
      return {
        id: t,
        experiment: n,
        currentBucket: i[t],
        system: n.system
      }
    })
  }, [module, exports, require, Chunk658722]), [d, p] = Chunk647438.useState(""), [m, b] = Chunk647438.useState([]);
  Chunk647438.useEffect(() => {
    if (0 === Chunk438159.trim().length) return void b(Chunk492435);
    b(Chunk492435.filter(e => o()(d, e.experiment.title.toLowerCase())))
  }, [Chunk492435, Chunk438159]);
  let y = Chunk647438.useMemo(() => Chunk492435.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null != t
    }), [Chunk492435]),
    O = Chunk647438.useMemo(() => m.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null == t
    }), [m]),
    v = Chunk647438.useMemo(() => y.map(E), [y]),
    I = Chunk647438.useMemo(() => O.map(E), [O]),
    T = (0, Chunk951288.jsx)(Chunk481060.II_, {
      id: "experiments-search",
      control: (e, t) => (0, r.jsx)(s.ne, g(h({}, e), {
        query: d,
        onChange: p,
        ref: t,
        placeholder: _.intl.string(_.t["5h0QOD"])
      }))
    }, "experiments-search");
  return v.length > 0 ? [(0, Chunk951288.jsx)(Chunk481060.kSQ, {
    label: "Overridden Experiments",
    children: v
  }, "overridden-group"), (0, Chunk951288.jsx)(Chunk481060.Clw, {}, "separator-2"), (0, Chunk951288.jsxs)(Chunk481060.sNh, {
    id: "other-experiments",
    label: "Other Experiments",
    children: [T, I]
  }, "other-experiments")] : [T, ...I]
}
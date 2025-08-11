/** Chunk was on web.js **/
/** chunk id: 74869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk481060 = require("./481060.js"),
  Chunk492435 = require("./492435.js"),
  Chunk667344 = require("./667344.js"),
  Chunk493075 = require("./493075.js"),
  Chunk878209 = require("./878209.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    id: t,
    experiment: n,
    currentBucket: i,
    system: o
  } = e;
  return (0, r.jsxs)(s.sNh, {
    id: t.replaceAll("--", "__"),
    label: n.title,
    action: () => (0, l.rX)(o, t, null),
    children: [n.variants.map(e => (0, r.jsx)(s.S89, {
      id: "".concat(e.id),
      label: e.shortLabel,
      checked: e.id === (null == i ? true : i.variantId),
      action: () => (0, l.rX)(o, t, e.id)
    }, "".concat(e.id))), (0, r.jsx)(s.kSQ, {
      children: null != i && (0, r.jsx)(s.sNh, {
        id: "clear-override",
        label: "Clear Override",
        color: "danger",
        icon: s.XHJ,
        action: () => (0, l.rX)(o, t, null)
      })
    })]
  }, t)
}

function E() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, Chunk493075.s)(), {
    experiments: n,
    overridesInfo: o
  } = (0, Chunk667344.Q)(), l = Chunk73800.useMemo(() => {
    let r = p({}, module, require),
      i = p({}, exports, Chunk658722);
    return (0, Chunk878209.Tc)((0, Chunk878209.Cg)(Chunk255367), Chunk73800).map(e => {
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
  }, [module, exports, require, Chunk658722]), [_, h] = Chunk73800.useState(""), [E, b] = Chunk73800.useState([]);
  Chunk73800.useEffect(() => {
    if (0 === _.trim().length) return void b(Chunk492435);
    b(Chunk492435.filter(e => a()(_, e.experiment.title.toLowerCase())))
  }, [Chunk492435, _]);
  let y = Chunk73800.useMemo(() => Chunk492435.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null != t
    }), [Chunk492435]),
    O = Chunk73800.useMemo(() => E.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null == t
    }), [E]),
    v = Chunk73800.useMemo(() => y.map(g), [y]),
    I = Chunk73800.useMemo(() => O.map(g), [O]),
    T = (0, Chunk255367.jsx)(Chunk481060.II_, {
      id: "experiments-search",
      control: (e, t) => (0, r.jsx)(s.ne, m(p({}, e), {
        query: _,
        onChange: h,
        ref: t,
        placeholder: f.intl.string(f.t["5h0QOD"])
      }))
    }, "experiments-search");
  return v.length > 0 ? [(0, Chunk255367.jsx)(Chunk481060.kSQ, {
    label: "Overridden Experiments",
    children: v
  }, "overridden-group"), (0, Chunk255367.jsx)(Chunk481060.Clw, {}, "separator-2"), (0, Chunk255367.jsxs)(Chunk481060.sNh, {
    id: "other-experiments",
    label: "Other Experiments",
    children: [T, I]
  }, "other-experiments")] : [T, ...I]
}
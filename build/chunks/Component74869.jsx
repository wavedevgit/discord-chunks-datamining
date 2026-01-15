/** Chunk was on web.js **/
/** chunk id: 74869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk481060 = require("./481060.js"),
  Chunk922699 = require("./922699.js"),
  Chunk492435 = require("./492435.js"),
  Chunk667344 = require("./667344.js"),
  Chunk493075 = require("./493075.js"),
  Chunk438159 = require("./438159.js"),
  Chunk572004 = require("./572004.js"),
  Chunk878209 = require("./878209.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    id: t,
    experiment: n,
    currentBucket: i,
    system: a
  } = e, o = (0, f.v)(n);
  return (0, r.jsxs)(s.sNh, {
    id: t.replaceAll("--", "__"),
    label: n.title,
    action: () => (0, c.rX)(a, t, null),
    children: [o.map(e => (0, r.jsx)(s.S89, {
      id: "".concat(e.id),
      label: e.shortLabel,
      checked: e.id === (null == i ? true : i.variantId),
      action: () => (0, c.rX)(a, t, e.id)
    }, "".concat(e.id))), (0, r.jsxs)(s.kSQ, {
      children: [p.wS && (0, r.jsx)(s.sNh, {
        id: "copy-link",
        label: "Copy Link",
        action: () => {
          let e = (0, l.sZ)(t);
          (0, p.JG)(e, () => {
            (0, s.showToast)({
              id: "experiment-link-copied",
              message: "Copied experiment link",
              type: s.ToastType.SUCCESS
            })
          })
        }
      }), null != i && (0, r.jsx)(s.sNh, {
        id: "clear-override",
        label: "Clear Override",
        color: "danger",
        icon: s.XHJ,
        action: () => (0, c.rX)(a, t, null)
      })]
    })]
  }, t)
}

function O() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, d.sI)(), {
    experiments: n,
    overridesInfo: a
  } = (0, u.Qb)(), l = i.useMemo(() => {
    let r = g({}, e, n),
      i = g({}, t, a);
    return (0, _.Tc)((0, _.Cg)(r), i).map(e => {
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
  }, [e, t, n, a]), [c, f] = i.useState(""), [p, m] = i.useState([]);
  i.useEffect(() => {
    if (0 === c.trim().length) return void m(l);
    m(l.filter(e => o()(c, e.experiment.title.toLowerCase())))
  }, [l, c]);
  let E = i.useMemo(() => l.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null != t
    }), [l]),
    O = i.useMemo(() => p.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null == t
    }), [p]),
    v = i.useMemo(() => E.map(y), [E]),
    S = i.useMemo(() => O.map(y), [O]),
    I = (0, r.jsx)(s.II_, {
      id: "experiments-search",
      control: (e, t) => (0, r.jsx)(s.ne, b(g({}, e), {
        query: c,
        onChange: f,
        ref: t,
        placeholder: h.intl.string(h.t["5h0QOP"])
      }))
    }, "experiments-search");
  return v.length > 0 ? [(0, r.jsx)(s.kSQ, {
    label: "Overridden Experiments",
    children: v
  }, "overridden-group"), (0, r.jsx)(s.Clw, {}, "separator-2"), (0, r.jsxs)(s.sNh, {
    id: "other-experiments",
    label: "Other Experiments",
    children: [I, S]
  }, "other-experiments")] : [I, ...S]
}
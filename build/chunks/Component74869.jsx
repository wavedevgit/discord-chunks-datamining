/** Chunk was on 27325 **/
/** chunk id: 74869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./804061.js"), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk481060 = require("./481060.js"),
  Chunk887580 = require("./887580.jsx"),
  Chunk492435 = require("./492435.js"),
  Chunk667344 = require("./667344.js"),
  Chunk493075 = require("./493075.js"),
  Chunk438159 = require("./438159.js"),
  Chunk572004 = require("./572004.js"),
  Chunk878209 = require("./878209.js"),
  Chunk388032 = require("./388032.jsx");

function y(e) {
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

function m(e) {
  let {
    id: t,
    experiment: n,
    currentBucket: i,
    system: o
  } = e, l = (0, p.v)(n);
  return (0, r.jsxs)(s.sNh, {
    id: t.replaceAll("--", "__"),
    label: n.title,
    action: () => (0, a.rX)(o, t, null),
    children: [l.map(e => (0, r.jsx)(s.S89, {
      id: "".concat(e.id),
      label: e.shortLabel,
      checked: e.id === (null == i ? true : i.variantId),
      action: () => (0, a.rX)(o, t, e.id)
    }, "".concat(e.id))), (0, r.jsxs)(s.kSQ, {
      children: [b.wS && (0, r.jsx)(s.sNh, {
        id: "copy-link",
        label: "Copy Link",
        action: () => {
          let e = (0, c.sZ)(t);
          (0, b.JG)(e, () => {
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
        action: () => (0, a.rX)(o, t, null)
      })]
    })]
  }, t)
}

function g() {
  let {
    experiments: e,
    overridesInfo: t
  } = (0, Chunk493075.s)(), {
    experiments: n,
    overridesInfo: o
  } = (0, Chunk667344.Q)(), c = Chunk647438.useMemo(() => {
    let r = y({}, module, require),
      i = y({}, exports, Chunk658722);
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
  }, [module, exports, require, Chunk658722]), [a, p] = Chunk647438.useState(""), [b, g] = Chunk647438.useState([]);
  Chunk647438.useEffect(() => {
    if (0 === Chunk492435.trim().length) return void g(Chunk887580);
    g(Chunk887580.filter(e => l()(a, e.experiment.title.toLowerCase())))
  }, [Chunk887580, Chunk492435]);
  let f = Chunk647438.useMemo(() => Chunk887580.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null != t
    }), [Chunk887580]),
    O = Chunk647438.useMemo(() => Chunk572004.filter(e => {
      let {
        currentBucket: t
      } = e;
      return null == t
    }), [Chunk572004]),
    x = Chunk647438.useMemo(() => f.map(m), [f]),
    S = Chunk647438.useMemo(() => O.map(m), [O]),
    P = (0, Chunk951288.jsx)(Chunk481060.II_, {
      id: "experiments-search",
      control: (e, t) => {
        var n, i;
        return (0, r.jsx)(s.ne, (n = y({}, e), i = i = {
          query: a,
          onChange: p,
          ref: t,
          placeholder: j.intl.string(j.t["5h0QOP"])
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    }, "experiments-search");
  return x.length > 0 ? [(0, Chunk951288.jsx)(Chunk481060.kSQ, {
    label: "Overridden Experiments",
    children: x
  }, "overridden-group"), (0, Chunk951288.jsx)(Chunk481060.Clw, {}, "separator-2"), (0, Chunk951288.jsxs)(Chunk481060.sNh, {
    id: "other-experiments",
    label: "Other Experiments",
    children: [P, S]
  }, "other-experiments")] : [P, ...S]
}
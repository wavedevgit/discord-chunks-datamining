/** Chunk was on 95468 **/
/** chunk id: 390885, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk97519 = require("./97519.js"),
  Chunk296574 = require("./296574.js"),
  Chunk731965 = require("./731965.js"),
  Chunk433517 = require("./433517.js"),
  Chunk710845 = require("./710845.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630724 = require("./630724.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}

function x(e) {
  var t = function(e, t) {
    if ("object" !== p(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (true !== n) {
      var r = n.call(e, t || "default");
      if ("object" !== p(r)) return r;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === p(t) ? t : String(t)
}

function p(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let f = "UserFlowAnalyticsStore_current",
  g = "UserFlowAnalyticsStore";

function _(e) {
  if (e === c.MK.UNKNOWN) return null;
  let t = a.K.get("".concat(g, "-").concat(e));
  if (null == t) return null;
  let {
    version: n
  } = t, r = h(t, ["version"]);
  return 1 !== n ? null : r
}
new Chunk710845.Z("UserFlowAnalytics");
let v = (0, Chunk97519.U)()((0, Chunk296574.XR)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
    var e;
    let n = null != (e = t().currentFlow) ? e : a.K.get(f);
    if (null == n) return null;
    let {
      [n]: r
    } = t().flows, l = null != r ? r : _(n);
    return (null == l ? true : l.currentStep) != null ? n : null
  }
})));

function N(e, t) {
  let n = v.getState().flows,
    {
      [e]: r
    } = n,
    l = h(n, [e].map(x)),
    a = null != r ? r : _(e);
  ((null == a ? true : a.currentStep) == null || a.currentStep !== t) && (0, i.j)(() => {
    v.setState({
      flows: m(u({}, l), {
        [e]: {
          type: e,
          lastStep: null,
          lastTimestamp: null,
          currentStep: t,
          currentTimestamp: new Date,
          skipped: false
        }
      }),
      currentFlow: e
    })
  })
}

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = e;
  if (e === c.MK.ANY) {
    var l;
    r = null != (l = v.getState().activeFlow()) ? l : c.MK.UNKNOWN
  }
  let a = v.getState().flows,
    {
      [r]: s
    } = a,
    o = h(a, [r].map(x)),
    d = null != s ? s : _(r);
  null != d && null != d.currentStep && d.currentStep !== t && (0, i.j)(() => {
    v.setState({
      flows: m(u({}, o), {
        [r]: m(u({}, d), {
          lastStep: d.currentStep,
          lastTimestamp: d.currentTimestamp,
          currentStep: t,
          currentTimestamp: new Date,
          ended: n
        })
      }),
      currentFlow: r
    })
  })
}

function S() {
  return null != v.getState().activeFlow()
}
v.subscribe(e => null != e.currentFlow ? e.flows[e.currentFlow] : true, e => {
  var t;
  if (null != e && (! function(e) {
      if (e.type === c.MK.UNKNOWN) return;
      let t = "".concat(g, "-").concat(e.type);
      e.ended ? (a.K.remove(t), a.K.remove(f)) : (a.K.set("".concat(g, "-").concat(e.type), m(u({}, e), {
        version: 1
      })), a.K.set(f, e.type))
    }(e), o.default.track(d.rMx.NUO_TRANSITION, {
      flow_type: e.type,
      from_step: e.lastStep,
      to_step: e.currentStep,
      seconds_on_from_step: "function" != typeof(null == (t = e.lastTimestamp) ? true : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
    }, {
      flush: true
    }), e.ended)) {
    let t = u({}, v.getState().flows);
    delete t[e.type], (0, i.j)(() => {
      v.setState({
        flows: t,
        currentFlow: null
      })
    })
  }
});
let y = {
  flowStart: N,
  flowStepOrStart: function(e, t) {
    S() ? E(e, t) : N(e, t)
  },
  flowStep: E,
  hasActiveFlow: S
}
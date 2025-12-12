/** Chunk was on 92241 **/
/** chunk id: 390885, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk663042 = require("./663042.js"),
  Chunk690775 = require("./690775.js"),
  Chunk731965 = require("./731965.js"),
  Chunk433517 = require("./433517.js"),
  Chunk710845 = require("./710845.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630724 = require("./630724.js"),
  Chunk981631 = require("./981631.js");

function d(e) {
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

function f(e, t) {
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

function p(e, t) {
  if (null == e) return {};
  var n, r, o = function(e, t) {
    if (null == e) return {};
    var n, r, o = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
    return o
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
  }
  return o
}

function m(e) {
  var t = function(e, t) {
    if ("object" !== _(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (true !== n) {
      var r = n.call(e, t || "default");
      if ("object" !== _(r)) return r;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === _(t) ? t : String(t)
}

function _(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let b = "UserFlowAnalyticsStore_current",
  I = "UserFlowAnalyticsStore";

function N(e) {
  if (e === s.MK.UNKNOWN) return null;
  let t = i.K.get("".concat(I, "-").concat(e));
  if (null == t) return null;
  let {
    version: n
  } = t, r = p(t, ["version"]);
  return 1 !== n ? null : r
}
new Chunk710845.Z("UserFlowAnalytics");
let T = (0, Chunk663042.U)()((0, Chunk690775.XR)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
    var e;
    let n = null != (e = t().currentFlow) ? e : i.K.get(b);
    if (null == n) return null;
    let {
      [n]: r
    } = t().flows, o = null != r ? r : N(n);
    return (null == o ? true : o.currentStep) != null ? n : null
  }
})));

function O(e, t) {
  let n = T.getState().flows,
    {
      [e]: r
    } = n,
    o = p(n, [e].map(m)),
    i = null != r ? r : N(e);
  ((null == i ? true : i.currentStep) == null || i.currentStep !== t) && (0, a.j)(() => {
    T.setState({
      flows: f(d({}, o), {
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

function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = e;
  if (e === s.MK.ANY) {
    var o;
    r = null != (o = T.getState().activeFlow()) ? o : s.MK.UNKNOWN
  }
  let i = T.getState().flows,
    {
      [r]: l
    } = i,
    c = p(i, [r].map(m)),
    u = null != l ? l : N(r);
  null != u && null != u.currentStep && u.currentStep !== t && (0, a.j)(() => {
    T.setState({
      flows: f(d({}, c), {
        [r]: f(d({}, u), {
          lastStep: u.currentStep,
          lastTimestamp: u.currentTimestamp,
          currentStep: t,
          currentTimestamp: new Date,
          ended: n
        })
      }),
      currentFlow: r
    })
  })
}

function E() {
  return null != T.getState().activeFlow()
}
T.subscribe(e => null != e.currentFlow ? e.flows[e.currentFlow] : true, e => {
  var t;
  if (null != e && (! function(e) {
      if (e.type === s.MK.UNKNOWN) return;
      let t = "".concat(I, "-").concat(e.type);
      e.ended ? (i.K.remove(t), i.K.remove(b)) : (i.K.set("".concat(I, "-").concat(e.type), f(d({}, e), {
        version: 1
      })), i.K.set(b, e.type))
    }(e), c.default.track(u.rMx.NUO_TRANSITION, {
      flow_type: e.type,
      from_step: e.lastStep,
      to_step: e.currentStep,
      seconds_on_from_step: "function" != typeof(null == (t = e.lastTimestamp) ? true : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
    }, {
      flush: true
    }), e.ended)) {
    let t = d({}, T.getState().flows);
    delete t[e.type], (0, a.j)(() => {
      T.setState({
        flows: t,
        currentFlow: null
      })
    })
  }
});
let g = {
  flowStart: O,
  flowStepOrStart: function(e, t) {
    E() ? S(e, t) : O(e, t)
  },
  flowStep: S,
  hasActiveFlow: E
}
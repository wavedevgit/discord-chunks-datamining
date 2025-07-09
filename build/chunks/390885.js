/** Chunk was on 95468 **/
n.d(t, {
  Z: () => I
});
var l = n(97519),
  i = n(296574),
  r = n(731965),
  a = n(433517),
  s = n(710845),
  o = n(626135),
  c = n(630724),
  d = n(981631);

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, l, i = function(e, t) {
    if (null == e) return {};
    var n, l, i = {},
      r = Object.keys(e);
    for (l = 0; l < r.length; l++) n = r[l], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function x(e) {
  var t = function(e, t) {
    if ("object" !== _(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
      var l = n.call(e, t || "default");
      if ("object" !== _(l)) return l;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === _(t) ? t : String(t)
}

function _(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let g = "UserFlowAnalyticsStore_current",
  f = "UserFlowAnalyticsStore";

function p(e) {
  if (e === c.MK.UNKNOWN) return null;
  let t = a.K.get("".concat(f, "-").concat(e));
  if (null == t) return null;
  let {
    version: n
  } = t, l = h(t, ["version"]);
  return 1 !== n ? null : l
}
new s.Z("UserFlowAnalytics");
let v = (0, l.U)()((0, i.XR)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
    var e;
    let n = null != (e = t().currentFlow) ? e : a.K.get(g);
    if (null == n) return null;
    let {
      [n]: l
    } = t().flows, i = null != l ? l : p(n);
    return (null == i ? void 0 : i.currentStep) != null ? n : null
  }
})));

function N(e, t) {
  let n = v.getState().flows,
    {
      [e]: l
    } = n,
    i = h(n, [e].map(x)),
    a = null != l ? l : p(e);
  ((null == a ? void 0 : a.currentStep) == null || a.currentStep !== t) && (0, r.j)(() => {
    v.setState({
      flows: m(u({}, i), {
        [e]: {
          type: e,
          lastStep: null,
          lastTimestamp: null,
          currentStep: t,
          currentTimestamp: new Date,
          skipped: !1
        }
      }),
      currentFlow: e
    })
  })
}

function E(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = e;
  if (e === c.MK.ANY) {
    var i;
    l = null != (i = v.getState().activeFlow()) ? i : c.MK.UNKNOWN
  }
  let a = v.getState().flows,
    {
      [l]: s
    } = a,
    o = h(a, [l].map(x)),
    d = null != s ? s : p(l);
  null != d && null != d.currentStep && d.currentStep !== t && (0, r.j)(() => {
    v.setState({
      flows: m(u({}, o), {
        [l]: m(u({}, d), {
          lastStep: d.currentStep,
          lastTimestamp: d.currentTimestamp,
          currentStep: t,
          currentTimestamp: new Date,
          ended: n
        })
      }),
      currentFlow: l
    })
  })
}

function S() {
  return null != v.getState().activeFlow()
}
v.subscribe(e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0, e => {
  var t;
  if (null != e && (! function(e) {
      if (e.type === c.MK.UNKNOWN) return;
      let t = "".concat(f, "-").concat(e.type);
      e.ended ? (a.K.remove(t), a.K.remove(g)) : (a.K.set("".concat(f, "-").concat(e.type), m(u({}, e), {
        version: 1
      })), a.K.set(g, e.type))
    }(e), o.default.track(d.rMx.NUO_TRANSITION, {
      flow_type: e.type,
      from_step: e.lastStep,
      to_step: e.currentStep,
      seconds_on_from_step: "function" != typeof(null == (t = e.lastTimestamp) ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
    }, {
      flush: !0
    }), e.ended)) {
    let t = u({}, v.getState().flows);
    delete t[e.type], (0, r.j)(() => {
      v.setState({
        flows: t,
        currentFlow: null
      })
    })
  }
});
let I = {
  flowStart: N,
  flowStepOrStart: function(e, t) {
    S() ? E(e, t) : N(e, t)
  },
  flowStep: E,
  hasActiveFlow: S
}
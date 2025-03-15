/** Chunk was on 97885 **/
r.d(t, {
  Z: () => E
});
var n = r(15729),
  l = r(877124),
  o = r(731965),
  i = r(433517),
  a = r(710845),
  c = r(626135),
  u = r(630724),
  s = r(981631);

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function d(e, t) {
  if (null == e) return {};
  var r, n, l = function(e, t) {
    if (null == e) return {};
    var r, n, l = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
  }
  return l
}

function m(e) {
  var t = function(e, t) {
    if ("object" !== _(e) || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
      var n = r.call(e, t || "default");
      if ("object" !== _(n)) return n;
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
  g = "UserFlowAnalyticsStore";

function y(e) {
  if (e === u.MK.UNKNOWN) return null;
  let t = i.K.get("".concat(g, "-").concat(e));
  if (null == t) return null;
  let {
    version: r
  } = t, n = d(t, ["version"]);
  return 1 !== r ? null : n
}
new a.Z("UserFlowAnalytics");
let N = (0, n.U)()((0, l.XR)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
    var e;
    let r = null !== (e = t().currentFlow) && void 0 !== e ? e : i.K.get(b);
    if (null == r) return null;
    let {
      [r]: n
    } = t().flows, l = null != n ? n : y(r);
    return (null == l ? void 0 : l.currentStep) != null ? r : null
  }
})));

function S(e, t) {
  let r = N.getState().flows,
    {
      [e]: n
    } = r,
    l = d(r, [e].map(m)),
    i = null != n ? n : y(e);
  ((null == i ? void 0 : i.currentStep) == null || i.currentStep !== t) && (0, o.j)(() => {
    N.setState({
      flows: p(f({}, l), {
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

function v(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = e;
  if (e === u.MK.ANY) {
    var l;
    n = null !== (l = N.getState().activeFlow()) && void 0 !== l ? l : u.MK.UNKNOWN
  }
  let i = N.getState().flows,
    {
      [n]: a
    } = i,
    c = d(i, [n].map(m)),
    s = null != a ? a : y(n);
  null != s && null != s.currentStep && s.currentStep !== t && (0, o.j)(() => {
    N.setState({
      flows: p(f({}, c), {
        [n]: p(f({}, s), {
          lastStep: s.currentStep,
          lastTimestamp: s.currentTimestamp,
          currentStep: t,
          currentTimestamp: new Date,
          ended: r
        })
      }),
      currentFlow: n
    })
  })
}

function A() {
  return null != N.getState().activeFlow()
}
N.subscribe(e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0, e => {
  var t;
  if (null != e && (! function(e) {
      if (e.type === u.MK.UNKNOWN) return;
      let t = "".concat(g, "-").concat(e.type);
      e.ended ? (i.K.remove(t), i.K.remove(b)) : (i.K.set("".concat(g, "-").concat(e.type), p(f({}, e), {
        version: 1
      })), i.K.set(b, e.type))
    }(e), c.default.track(s.rMx.NUO_TRANSITION, {
      flow_type: e.type,
      from_step: e.lastStep,
      to_step: e.currentStep,
      seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
    }, {
      flush: !0
    }), e.ended)) {
    let t = f({}, N.getState().flows);
    delete t[e.type], (0, o.j)(() => {
      N.setState({
        flows: t,
        currentFlow: null
      })
    })
  }
});
let E = {
  flowStart: S,
  flowStepOrStart: function(e, t) {
    A() ? v(e, t) : S(e, t)
  },
  flowStep: v,
  hasActiveFlow: A
}
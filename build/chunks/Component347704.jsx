/** Chunk was on web.js **/
/** chunk id: 347704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  t: () => y
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk123292 = require("./123292.jsx"),
  Chunk460890 = require("./460890.jsx"),
  Chunk224640 = require("./224640.jsx"),
  Chunk696208 = require("./696208.jsx"),
  Chunk430993 = require("./430993.jsx"),
  Chunk20742 = require("./20742.jsx"),
  Chunk655053 = require("./655053.jsx");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let E = Chunk64700.createContext(null);

function y(e) {
  var t, n, f;
  let {
    steps: _,
    currentStepKey: g,
    numberedSteps: y,
    onStepChange: b,
    onComplete: O
  } = e, v = m(e, ["steps", "currentStepKey", "numberedSteps", "onStepChange", "onComplete"]), {
    i18n: A
  } = (0, o.G9)(), I = v.onClose, [S, T] = i.useState(false), [C, N] = i.useState(null), w = _.find(e => e.stepKey === g);
  if (null == w) throw Error("Step with key ".concat(g, " not found"));
  let R = _.findIndex(e => e.stepKey === g),
    P = R === _.length - 1,
    D = 0 === R,
    L = null == (t = w.nextEnabled) || t,
    x = i.useCallback(e => {
      N(null), null == b || b(e, g)
    }, [b, g]),
    M = i.useCallback(async () => {
      await (null == O ? true : O()), I()
    }, [O, I]),
    j = i.useCallback(async () => {
      T(true), N(null);
      try {
        if (null != w.onNext && !await w.onNext()) return void T(false);
        P ? await M() : x(_[R + 1].stepKey)
      } catch (e) {
        N(A.INLINE_NOTICE_GENERIC_ERROR)
      } finally {
        T(false)
      }
    }, [x, R, _, P, M, w, A]),
    k = i.useCallback(() => {
      D || x(_[R - 1].stepKey)
    }, [x, R, _, D]),
    U = i.useMemo(() => ({
      currentStepKey: g,
      goToStep: x,
      goToNextStep: j,
      goToPreviousStep: k,
      complete: M
    }), [g, x, j, k, M]),
    G = {
      variant: "secondary",
      text: A.BACK
    },
    F = {
      variant: "primary",
      text: P ? A.SUBMIT : A.NEXT,
      disabled: !L,
      loading: S,
      onClick: () => {
        L && !S && j()
      }
    },
    V = {
      text: A.CANCEL,
      variant: "secondary",
      onClick: I
    },
    B = w.hideBackButton || D ? true : (0, r.jsx)(a.Q, h(p({}, G, w.backButtonProps), {
      onClick: k
    })),
    H = w.modalProps,
    Y = "graphic" in H ? H : null;
  return (0, r.jsx)(E.Provider, {
    value: U,
    children: (0, r.jsxs)(s.d, h(p({}, v), {
      paddingSize: null != Y ? "lg" : "sm",
      children: [null != Y ? (0, r.jsx)(u.V6, p({}, Y)) : (0, r.jsx)(u.rQ, {
        title: H.title,
        subtitle: H.subtitle,
        stepNumber: (null == y ? true : y.includes(g)) ? y.indexOf(g) + 1 : true,
        stepCount: null == y ? true : y.length
      }), (0, r.jsx)(d.i, {
        message: null != C ? C : "notice" in H ? null == (n = H.notice) ? true : n.message : true,
        type: null != C ? "critical" : "notice" in H ? null == (f = H.notice) ? true : f.type : true
      }, g), _.map(e => {
        let t = "graphic" in e.modalProps ? null : e.modalProps;
        return (null != e.body || (null == t ? true : t.input) != null || (null == t ? true : t.listProps) != null) && (0, r.jsx)("div", {
          style: {
            display: e.stepKey === g ? true : "none"
          },
          children: (0, r.jsx)(c.c, {
            controls: null == t ? true : t.input,
            listProps: null == t ? true : t.listProps,
            children: e.body
          })
        }, e.stepKey)
      }), (0, r.jsx)(l.H, {
        leading: B,
        actionsFullWidth: D,
        actions: [...D ? [V] : [], p({}, F, w.nextButtonProps)]
      })]
    }))
  })
}
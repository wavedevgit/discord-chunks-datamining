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
  let _, {
      steps: g,
      currentStepKey: y,
      numberedSteps: b,
      onStepChange: O,
      onComplete: v
    } = e,
    A = m(e, ["steps", "currentStepKey", "numberedSteps", "onStepChange", "onComplete"]),
    {
      i18n: I
    } = (0, o.G9)(),
    S = A.onClose,
    [T, C] = i.useState(false),
    [N, w] = i.useState(null),
    R = g.find(e => e.stepKey === y);
  if (null == R) throw Error("Step with key ".concat(y, " not found"));
  let P = g.findIndex(e => e.stepKey === y),
    D = P === g.length - 1,
    L = 0 === P,
    [x, M] = i.useState(false),
    j = null == (t = R.nextEnabled) || t,
    k = i.useCallback(e => {
      w(null), null == O || O(e, y)
    }, [O, y]),
    U = i.useCallback(async () => {
      await (null == v ? true : v()), M(true), S()
    }, [v, S]),
    G = i.useCallback(async () => {
      C(true), w(null);
      try {
        if (null != R.onNext && !await R.onNext()) return void C(false);
        D ? await U() : k(g[P + 1].stepKey)
      } catch (e) {
        w(I.INLINE_NOTICE_GENERIC_ERROR)
      } finally {
        C(false)
      }
    }, [k, P, g, D, U, R, I]),
    F = i.useCallback(() => {
      L || k(g[P - 1].stepKey)
    }, [k, P, g, L]),
    V = i.useMemo(() => ({
      currentStepKey: y,
      goToStep: k,
      goToNextStep: G,
      goToPreviousStep: F,
      complete: U
    }), [y, k, G, F, U]),
    B = {
      variant: "secondary",
      text: I.BACK
    },
    H = {
      variant: "primary",
      text: D ? I.SUBMIT : I.NEXT,
      disabled: !j,
      loading: T,
      onClick: () => {
        j && !T && G()
      }
    },
    Y = {
      text: I.CANCEL,
      variant: "secondary",
      onClick: S
    },
    W = R.hideBackButton || L ? true : (0, r.jsx)(a.Q, h(p({}, B, R.backButtonProps), {
      onClick: F
    })),
    K = R.modalProps,
    z = "graphic" in K ? K : null,
    q = null != b && b.length > 0 && b.includes(y),
    Z = q && !x ? b.indexOf(y) + 1 : true;
  return q && (_ = x ? {
    percent: 100
  } : {
    stepCount: b.length,
    stepNumber: Z
  }), (0, r.jsx)(E.Provider, {
    value: V,
    children: (0, r.jsxs)(s.d, h(p({}, A), {
      paddingSize: null != z ? "lg" : "sm",
      children: [null != z ? (0, r.jsx)(u.V6, p({}, z)) : (0, r.jsx)(u.rQ, {
        title: K.title,
        subtitle: K.subtitle,
        progressBarProps: _
      }), (0, r.jsx)(d.i, {
        message: null != N ? N : "notice" in K ? null == (n = K.notice) ? true : n.message : true,
        type: null != N ? "critical" : "notice" in K ? null == (f = K.notice) ? true : f.type : true
      }, y), g.map(e => {
        let t = "graphic" in e.modalProps ? null : e.modalProps;
        return (null != e.body || (null == t ? true : t.input) != null || (null == t ? true : t.listProps) != null) && (0, r.jsx)("div", {
          style: {
            display: e.stepKey === y ? true : "none"
          },
          children: (0, r.jsx)(c.c, {
            controls: null == t ? true : t.input,
            listProps: null == t ? true : t.listProps,
            children: e.body
          })
        }, e.stepKey)
      }), (0, r.jsx)(l.H, {
        leading: W,
        actionsFullWidth: L,
        actions: [...L ? [Y] : [], p({}, H, R.nextButtonProps)]
      })]
    }))
  })
}
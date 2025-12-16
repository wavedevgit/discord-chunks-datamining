/** Chunk was on web.js **/
/** chunk id: 741118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => b
}), require("./415506.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk293706 = require("./293706.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk987153 = require("./987153.jsx"),
  Chunk144771 = require("./144771.jsx"),
  Chunk166935 = require("./166935.jsx"),
  Chunk575118 = require("./575118.jsx"),
  Chunk880521 = require("./880521.jsx");

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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = Chunk473749.createContext(null);

function b(e) {
  var t, n, f, {
      steps: _,
      currentStepKey: g,
      numberedSteps: b,
      onStepChange: y,
      onComplete: O
    } = e,
    v = h(e, ["steps", "currentStepKey", "numberedSteps", "onStepChange", "onComplete"]);
  let {
    i18n: S
  } = (0, o.ZF)(), I = v.onClose, T = _.find(e => e.stepKey === g);
  if (null == T) throw Error("Step with key ".concat(g, " not found"));
  let C = _.findIndex(e => e.stepKey === g),
    A = C === _.length - 1,
    N = 0 === C,
    P = null == (f = T.nextEnabled) || f,
    R = i.useCallback(e => {
      null == y || y(e, g)
    }, [y, g]),
    w = i.useCallback(async () => {
      await (null == O ? true : O()), I()
    }, [O, I]),
    D = i.useCallback(async () => {
      (null == T.onNext || await T.onNext()) && (A ? await w() : R(_[C + 1].stepKey))
    }, [R, C, _, A, w, T]),
    x = i.useCallback(() => {
      N || R(_[C - 1].stepKey)
    }, [R, C, _, N]),
    L = i.useMemo(() => ({
      currentStepKey: g,
      goToStep: R,
      goToNextStep: D,
      goToPreviousStep: x,
      complete: w
    }), [g, R, D, x, w]),
    j = {
      variant: "secondary",
      text: S.BACK
    },
    M = {
      variant: "primary",
      text: S.NEXT,
      disabled: !P,
      onClick: () => {
        P && D()
      }
    },
    k = {
      text: S.CANCEL,
      variant: "secondary",
      onClick: I
    },
    U = T.hideBackButton || N ? true : (0, r.jsx)(a.A, m(p({}, j, T.backButtonProps), {
      onClick: x
    }));
  return (0, r.jsx)(E.Provider, {
    value: L,
    children: (0, r.jsxs)(s.I, m(p({}, v), {
      children: [(0, r.jsx)(u.x, {
        title: T.title,
        subtitle: T.subtitle,
        stepNumber: (null == b ? true : b.includes(g)) ? b.indexOf(g) + 1 : true,
        stepCount: null == b ? true : b.length
      }), (0, r.jsx)(d.Y, {
        message: null == (t = T.notice) ? true : t.message,
        type: null == (n = T.notice) ? true : n.type
      }), _.map(e => null != e.body || null != e.input || null != e.listProps ? (0, r.jsx)("div", {
        style: {
          display: e.stepKey === g ? true : "none"
        },
        children: (0, r.jsx)(c.f, {
          controls: e.input,
          listProps: e.listProps,
          children: e.body
        })
      }, e.stepKey) : true), (0, r.jsx)(l.G, {
        leading: U,
        actionsFullWidth: N,
        actions: [...N ? [k] : [], p({}, M, T.nextButtonProps)]
      })]
    }))
  })
}
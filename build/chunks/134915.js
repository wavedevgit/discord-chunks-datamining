/** Chunk was on web.js **/
/** chunk id: 134915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PS: () => a,
  Q3: () => c,
  W0: () => m,
  tL: () => l
});
var Chunk473749 = require("./473749.js");
let i = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valueMissing: false,
    valid: true
  },
  o = {
    ...i,
    customError: true,
    valid: false
  },
  a = {
    isInvalid: false,
    validationDetails: i,
    validationErrors: []
  },
  s = (0, Chunk473749.createContext)({}),
  l = "__formValidationState" + Date.now();

function c(e) {
  if (e[l]) {
    let {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: i,
      commitValidation: o
    } = e[l];
    return {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: i,
      commitValidation: o
    }
  }
  return u(e)
}

function u(e) {
  let {
    isInvalid: t,
    validationState: n,
    name: i,
    value: l,
    builtinValidation: c,
    validate: u,
    validationBehavior: m = "aria"
  } = e;
  n && (t || (t = "invalid" === n));
  let h = true !== t ? {
      isInvalid: t,
      validationErrors: [],
      validationDetails: o
    } : null,
    g = (0, r.useMemo)(() => u && null != l ? p(f(u, l)) : null, [u, l]);
  (null == c ? true : c.validationDetails.valid) && (c = true);
  let E = (0, r.useContext)(s),
    b = (0, r.useMemo)(() => i ? Array.isArray(i) ? i.flatMap(e => d(E[e])) : d(E[i]) : [], [E, i]),
    [y, O] = (0, r.useState)(E),
    [v, S] = (0, r.useState)(false);
  E !== y && (O(E), S(false));
  let I = (0, r.useMemo)(() => p(v ? [] : b), [v, b]),
    T = (0, r.useRef)(a),
    [C, A] = (0, r.useState)(a),
    N = (0, r.useRef)(a),
    P = () => {
      if (!R) return;
      w(false);
      let e = g || c || T.current;
      _(e, N.current) || (N.current = e, A(e))
    },
    [R, w] = (0, r.useState)(false);
  return (0, r.useEffect)(P), {
    realtimeValidation: h || I || g || c || a,
    displayValidation: "native" === m ? h || I || C : h || I || g || c || C,
    updateValidation(e) {
      "aria" !== m || _(C, e) ? T.current = e : A(e)
    },
    resetValidation() {
      let e = a;
      _(e, N.current) || (N.current = e, A(e)), "native" === m && w(false), S(true)
    },
    commitValidation() {
      "native" === m && w(true), S(true)
    }
  }
}

function d(e) {
  return e ? Array.isArray(e) ? e : [e] : []
}

function f(e, t) {
  if ("function" == typeof e) {
    let n = e(t);
    if (n && "boolean" != typeof n) return d(n)
  }
  return []
}

function p(e) {
  return e.length ? {
    isInvalid: true,
    validationErrors: e,
    validationDetails: o
  } : null
}

function _(e, t) {
  return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, n) => e === t.validationErrors[n]) && Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n)
}

function m(...e) {
  let t = new Set,
    n = false,
    r = {
      ...i
    };
  for (let i of e) {
    var o, a;
    for (let e of i.validationErrors) t.add(e);
    for (let e in n || (n = i.isInvalid), r)(o = r)[a = e] || (o[a] = i.validationDetails[e])
  }
  return r.valid = !n, {
    isInvalid: n,
    validationErrors: [...t],
    validationDetails: r
  }
}
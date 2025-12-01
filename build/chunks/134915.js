/** Chunk was on web.js **/
/** chunk id: 134915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PS: () => o,
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
  a = {
    ...i,
    customError: true,
    valid: false
  },
  o = {
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
      commitValidation: a
    } = e[l];
    return {
      realtimeValidation: t,
      displayValidation: n,
      updateValidation: r,
      resetValidation: i,
      commitValidation: a
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
      validationDetails: a
    } : null,
    g = (0, r.useMemo)(() => u && null != l ? p(f(u, l)) : null, [u, l]);
  (null == c ? true : c.validationDetails.valid) && (c = true);
  let E = (0, r.useContext)(s),
    b = (0, r.useMemo)(() => i ? Array.isArray(i) ? i.flatMap(e => d(E[e])) : d(E[i]) : [], [E, i]),
    [y, O] = (0, r.useState)(E),
    [v, S] = (0, r.useState)(false);
  E !== y && (O(E), S(false));
  let I = (0, r.useMemo)(() => p(v ? [] : b), [v, b]),
    T = (0, r.useRef)(o),
    [A, C] = (0, r.useState)(o),
    N = (0, r.useRef)(o),
    P = () => {
      if (!R) return;
      w(false);
      let e = g || c || T.current;
      _(e, N.current) || (N.current = e, C(e))
    },
    [R, w] = (0, r.useState)(false);
  return (0, r.useEffect)(P), {
    realtimeValidation: h || I || g || c || o,
    displayValidation: "native" === m ? h || I || A : h || I || g || c || A,
    updateValidation(e) {
      "aria" !== m || _(A, e) ? T.current = e : C(e)
    },
    resetValidation() {
      let e = o;
      _(e, N.current) || (N.current = e, C(e)), "native" === m && w(false), S(true)
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
    validationDetails: a
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
    var a, o;
    for (let e of i.validationErrors) t.add(e);
    for (let e in n || (n = i.isInvalid), r)(a = r)[o = e] || (a[o] = i.validationDetails[e])
  }
  return r.valid = !n, {
    isInvalid: n,
    validationErrors: [...t],
    validationDetails: r
  }
}
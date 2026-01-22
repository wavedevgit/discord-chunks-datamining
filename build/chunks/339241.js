/** Chunk was on web.js **/
/** chunk id: 339241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KZ: () => c,
  Lf: () => l,
  YD: () => s,
  cX: () => h
});
var Chunk64700 = require("./64700.js");
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
  s = {
    isInvalid: false,
    validationDetails: i,
    validationErrors: []
  },
  o = (0, Chunk64700.createContext)({}),
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
    validationBehavior: h = "aria"
  } = e;
  n && (t || (t = "invalid" === n));
  let m = true !== t ? {
      isInvalid: t,
      validationErrors: [],
      validationDetails: a
    } : null,
    g = (0, r.useMemo)(() => u && null != l ? p(f(u, l)) : null, [u, l]);
  (null == c ? true : c.validationDetails.valid) && (c = true);
  let E = (0, r.useContext)(o),
    b = (0, r.useMemo)(() => i ? Array.isArray(i) ? i.flatMap(e => d(E[e])) : d(E[i]) : [], [E, i]),
    [y, O] = (0, r.useState)(E),
    [A, v] = (0, r.useState)(false);
  E !== y && (O(E), v(false));
  let S = (0, r.useMemo)(() => p(A ? [] : b), [A, b]),
    I = (0, r.useRef)(s),
    [T, C] = (0, r.useState)(s),
    N = (0, r.useRef)(s),
    R = () => {
      if (!w) return;
      P(false);
      let e = g || c || I.current;
      _(e, N.current) || (N.current = e, C(e))
    },
    [w, P] = (0, r.useState)(false);
  return (0, r.useEffect)(R), {
    realtimeValidation: m || S || g || c || s,
    displayValidation: "native" === h ? m || S || T : m || S || g || c || T,
    updateValidation(e) {
      "aria" !== h || _(T, e) ? I.current = e : C(e)
    },
    resetValidation() {
      let e = s;
      _(e, N.current) || (N.current = e, C(e)), "native" === h && P(false), v(true)
    },
    commitValidation() {
      "native" === h && P(true), v(true)
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

function h(...e) {
  let t = new Set,
    n = false,
    r = {
      ...i
    };
  for (let i of e) {
    var a, s;
    for (let e of i.validationErrors) t.add(e);
    for (let e in n || (n = i.isInvalid), r)(a = r)[s = e] || (a[s] = i.validationDetails[e])
  }
  return r.valid = !n, {
    isInvalid: n,
    validationErrors: [...t],
    validationDetails: r
  }
}
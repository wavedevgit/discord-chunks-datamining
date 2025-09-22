/** Chunk was on web.js **/
/** chunk id: 836070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
var Chunk998925 = require("./998925.js"),
  Chunk647438 = require("./647438.js"),
  Chunk436283 = require("./436283.js"),
  Chunk101741 = require("./101741.js");

function s(e, t, n) {
  let {
    validationBehavior: s,
    focus: l
  } = e;
  (0, a.b)(() => {
    if ("native" === s && (null == n ? true : n.current) && !n.current.disabled) {
      let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(e), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(c(n.current))
    }
  });
  let d = (0, o.i)(() => {
      t.resetValidation()
    }),
    f = (0, o.i)(e => {
      var i, a;
      t.displayValidation.isInvalid || t.commitValidation();
      let o = null == n || null == (i = n.current) ? true : i.form;
      !e.defaultPrevented && n && o && u(o) === n.current && (l ? l() : null == (a = n.current) || a.focus(), (0, r._w)("keyboard")), e.preventDefault()
    }),
    _ = (0, o.i)(() => {
      t.commitValidation()
    });
  (0, i.useEffect)(() => {
    let e = null == n ? true : n.current;
    if (!e) return;
    let t = e.form;
    return e.addEventListener("invalid", f), e.addEventListener("change", _), null == t || t.addEventListener("reset", d), () => {
      e.removeEventListener("invalid", f), e.removeEventListener("change", _), null == t || t.removeEventListener("reset", d)
    }
  }, [n, f, _, d, s])
}

function l(e) {
  let t = e.validity;
  return {
    badInput: t.badInput,
    customError: t.customError,
    patternMismatch: t.patternMismatch,
    rangeOverflow: t.rangeOverflow,
    rangeUnderflow: t.rangeUnderflow,
    stepMismatch: t.stepMismatch,
    tooLong: t.tooLong,
    tooShort: t.tooShort,
    typeMismatch: t.typeMismatch,
    valueMissing: t.valueMissing,
    valid: t.valid
  }
}

function c(e) {
  return {
    isInvalid: !e.validity.valid,
    validationDetails: l(e),
    validationErrors: e.validationMessage ? [e.validationMessage] : []
  }
}

function u(e) {
  for (let t = 0; t < e.elements.length; t++) {
    let n = e.elements[t];
    if (!n.validity.valid) return n
  }
  return null
}
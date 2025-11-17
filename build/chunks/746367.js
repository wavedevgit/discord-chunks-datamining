/** Chunk was on web.js **/
/** chunk id: 746367, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => s
});
var Chunk981166 = require("./981166.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159447 = require("./159447.js"),
  Chunk484948 = require("./484948.js");

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
  let d = (0, i.useRef)(false),
    f = (0, o.i)(() => {
      d.current || t.resetValidation()
    }),
    _ = (0, o.i)(e => {
      var i, a;
      t.displayValidation.isInvalid || t.commitValidation();
      let o = null == n || null == (i = n.current) ? true : i.form;
      !e.defaultPrevented && n && o && u(o) === n.current && (l ? l() : null == (a = n.current) || a.focus(), (0, r._w)("keyboard")), e.preventDefault()
    }),
    p = (0, o.i)(() => {
      t.commitValidation()
    });
  (0, i.useEffect)(() => {
    let e = null == n ? true : n.current;
    if (!e) return;
    let t = e.form,
      r = null == t ? true : t.reset;
    return t && (t.reset = () => {
      d.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == r || r.call(t), d.current = false
    }), e.addEventListener("invalid", _), e.addEventListener("change", p), null == t || t.addEventListener("reset", f), () => {
      e.removeEventListener("invalid", _), e.removeEventListener("change", p), null == t || t.removeEventListener("reset", f), t && (t.reset = r)
    }
  }, [n, _, p, f, s])
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
/** Chunk was on web.js **/
/** chunk id: 96441, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => s
});
var Chunk885714 = require("./885714.js"),
  Chunk64700 = require("./64700.js"),
  Chunk3388 = require("./3388.js"),
  Chunk959462 = require("./959462.js");

function s(e, t, n) {
  let {
    validationBehavior: s,
    focus: l
  } = e;
  (0, a.N)(() => {
    if ("native" === s && (null == n ? true : n.current) && !n.current.disabled) {
      let e = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      n.current.setCustomValidity(e), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation(c(n.current))
    }
  });
  let d = (0, i.useRef)(false),
    f = (0, o.J)(() => {
      d.current || t.resetValidation()
    }),
    p = (0, o.J)(e => {
      var i, a;
      t.displayValidation.isInvalid || t.commitValidation();
      let o = null == n || null == (i = n.current) ? true : i.form;
      !e.defaultPrevented && n && o && u(o) === n.current && (l ? l() : null == (a = n.current) || a.focus(), (0, r.Cl)("keyboard")), e.preventDefault()
    }),
    _ = (0, o.J)(() => {
      t.commitValidation()
    });
  (0, i.useEffect)(() => {
    let e = null == n ? true : n.current;
    if (!e) return;
    let t = e.form,
      r = null == t ? true : t.reset;
    return t && (t.reset = () => {
      d.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort, null == r || r.call(t), d.current = false
    }), e.addEventListener("invalid", p), e.addEventListener("change", _), null == t || t.addEventListener("reset", f), () => {
      e.removeEventListener("invalid", p), e.removeEventListener("change", _), null == t || t.removeEventListener("reset", f), t && (t.reset = r)
    }
  }, [n, p, _, f, s])
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
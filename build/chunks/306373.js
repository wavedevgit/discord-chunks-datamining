/** Chunk was on web.js **/
/** chunk id: 306373, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => f
});
var Chunk195620 = require("./195620.js"),
  Chunk880016 = require("./880016.js"),
  Chunk477232 = require("./477232.js"),
  Chunk752689 = require("./752689.js"),
  Chunk158821 = require("./158821.js"),
  Chunk605294 = require("./605294.js"),
  Chunk426902 = require("./426902.js"),
  Chunk921448 = require("./921448.js"),
  Chunk227399 = require("./227399.js");

function f(e, t) {
  let {
    name: n,
    form: f,
    isReadOnly: p,
    isRequired: _,
    isDisabled: m,
    orientation: h = "vertical",
    validationBehavior: g = "aria"
  } = e, {
    direction: E
  } = (0, d.j)(), {
    isInvalid: b,
    validationErrors: y,
    validationDetails: O
  } = t.displayValidation, {
    labelProps: v,
    fieldProps: S,
    descriptionProps: I,
    errorMessageProps: T
  } = (0, c.U)({
    ...e,
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || y
  }), C = (0, i.z)(e, {
    labelable: true
  }), {
    focusWithinProps: A
  } = (0, u.L)({
    onBlurWithin(n) {
      var r;
      null == (r = e.onBlur) || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null)
    },
    onFocusWithin: e.onFocus,
    onFocusWithinChange: e.onFocusChange
  }), N = e => {
    let n, r;
    switch (e.key) {
      case "ArrowRight":
        n = "rtl" === E && "vertical" !== h ? "prev" : "next";
        break;
      case "ArrowLeft":
        n = "rtl" === E && "vertical" !== h ? "next" : "prev";
        break;
      case "ArrowDown":
        n = "next";
        break;
      case "ArrowUp":
        n = "prev";
        break;
      default:
        return
    }
    e.preventDefault();
    let i = (0, l.QL)(e.currentTarget, {
      from: e.target,
      accept: e => e instanceof(0, a.kR)(e).HTMLInputElement && "radio" === e.type
    });
    "next" === n ? (r = i.nextNode()) || (i.currentNode = e.currentTarget, r = i.firstChild()) : (r = i.previousNode()) || (i.currentNode = e.currentTarget, r = i.lastChild()), r && (r.focus(), t.setSelectedValue(r.value))
  }, P = (0, o.Me)(n);
  return r.H.set(t, {
    name: P,
    form: f,
    descriptionId: I.id,
    errorMessageId: T.id,
    validationBehavior: g
  }), {
    radioGroupProps: (0, s.d)(C, {
      role: "radiogroup",
      onKeyDown: N,
      "aria-invalid": t.isInvalid || true,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": p || true,
      "aria-required": _ || true,
      "aria-disabled": m || true,
      "aria-orientation": h,
      ...S,
      ...A
    }),
    labelProps: v,
    descriptionProps: I,
    errorMessageProps: T,
    isInvalid: b,
    validationErrors: y,
    validationDetails: O
  }
}
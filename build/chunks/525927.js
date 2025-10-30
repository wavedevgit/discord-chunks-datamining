/** Chunk was on web.js **/
/** chunk id: 525927, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => f
});
var Chunk46465 = require("./46465.js"),
  Chunk735437 = require("./735437.js"),
  Chunk743581 = require("./743581.js"),
  Chunk677061 = require("./677061.js"),
  Chunk43341 = require("./43341.js"),
  Chunk750528 = require("./750528.js"),
  Chunk923108 = require("./923108.js"),
  Chunk576173 = require("./576173.js"),
  Chunk594886 = require("./594886.js");

function f(e, t) {
  let {
    name: n,
    form: f,
    isReadOnly: _,
    isRequired: p,
    isDisabled: h,
    orientation: m = "vertical",
    validationBehavior: g = "aria"
  } = e, {
    direction: E
  } = (0, d.j)(), {
    isInvalid: b,
    validationErrors: y,
    validationDetails: O
  } = t.displayValidation, {
    labelProps: v,
    fieldProps: I,
    descriptionProps: S,
    errorMessageProps: T
  } = (0, c.U)({
    ...e,
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || y
  }), A = (0, i.z)(e, {
    labelable: true
  }), {
    focusWithinProps: C
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
        n = "rtl" === E && "vertical" !== m ? "prev" : "next";
        break;
      case "ArrowLeft":
        n = "rtl" === E && "vertical" !== m ? "next" : "prev";
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
  }, R = (0, o.Me)(n);
  return r.H.set(t, {
    name: R,
    form: f,
    descriptionId: S.id,
    errorMessageId: T.id,
    validationBehavior: g
  }), {
    radioGroupProps: (0, s.d)(A, {
      role: "radiogroup",
      onKeyDown: N,
      "aria-invalid": t.isInvalid || true,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": _ || true,
      "aria-required": p || true,
      "aria-disabled": h || true,
      "aria-orientation": m,
      ...I,
      ...C
    }),
    labelProps: v,
    descriptionProps: S,
    errorMessageProps: T,
    isInvalid: b,
    validationErrors: y,
    validationDetails: O
  }
}
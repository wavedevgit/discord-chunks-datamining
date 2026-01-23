/** Chunk was on web.js **/
/** chunk id: 158496, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => f
});
var Chunk146968 = require("./146968.js"),
  Chunk290424 = require("./290424.js"),
  Chunk297987 = require("./297987.js"),
  Chunk723906 = require("./723906.js"),
  Chunk803082 = require("./803082.js"),
  Chunk13163 = require("./13163.js"),
  Chunk447432 = require("./447432.js"),
  Chunk744493 = require("./744493.js"),
  Chunk853590 = require("./853590.js");

function f(e, t) {
  let {
    name: n,
    form: f,
    isReadOnly: p,
    isRequired: _,
    isDisabled: h,
    orientation: m = "vertical",
    validationBehavior: g = "aria"
  } = e, {
    direction: E
  } = (0, d.Y)(), {
    isInvalid: y,
    validationErrors: b,
    validationDetails: O
  } = t.displayValidation, {
    labelProps: v,
    fieldProps: A,
    descriptionProps: I,
    errorMessageProps: S
  } = (0, c.M)({
    ...e,
    labelElementType: "span",
    isInvalid: t.isInvalid,
    errorMessage: e.errorMessage || b
  }), T = (0, i.$)(e, {
    labelable: true
  }), {
    focusWithinProps: C
  } = (0, u.R)({
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
    let i = (0, l.N$)(e.currentTarget, {
      from: e.target,
      accept: e => e instanceof(0, a.mD)(e).HTMLInputElement && "radio" === e.type
    });
    "next" === n ? (r = i.nextNode()) || (i.currentNode = e.currentTarget, r = i.firstChild()) : (r = i.previousNode()) || (i.currentNode = e.currentTarget, r = i.lastChild()), r && (r.focus(), t.setSelectedValue(r.value))
  }, w = (0, s.Bi)(n);
  return r.V.set(t, {
    name: w,
    form: f,
    descriptionId: I.id,
    errorMessageId: S.id,
    validationBehavior: g
  }), {
    radioGroupProps: (0, o.v)(T, {
      role: "radiogroup",
      onKeyDown: N,
      "aria-invalid": t.isInvalid || true,
      "aria-errormessage": e["aria-errormessage"],
      "aria-readonly": p || true,
      "aria-required": _ || true,
      "aria-disabled": h || true,
      "aria-orientation": m,
      ...A,
      ...C
    }),
    labelProps: v,
    descriptionProps: I,
    errorMessageProps: S,
    isInvalid: y,
    validationErrors: b,
    validationDetails: O
  }
}
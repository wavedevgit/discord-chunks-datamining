/** Chunk was on web.js **/
/** chunk id: 67979, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk547800 = require("./547800.jsx"),
  Chunk507274 = require("./507274.jsx"),
  Chunk235874 = require("./235874.jsx"),
  Chunk74655 = require("./74655.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk428980 = require("./428980.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
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
let E = "ll";

function b(e) {
  var {
    value: t,
    onSelect: n,
    dateFormat: f = E,
    minDate: p,
    maxDate: g,
    disabled: b = false
  } = e, y = m(e, ["value", "onSelect", "dateFormat", "minDate", "maxDate", "disabled"]);
  let O = i.useRef(null);

  function v(e) {
    let {
      closePopout: i
    } = e;
    return (0, r.jsx)(s.V, {
      children: (0, r.jsx)(o.CalendarPicker, {
        minDate: p,
        maxDate: g,
        value: t,
        onSelect: e => {
          n(e), i()
        },
        calendarClassName: d.calendarContainer,
        onClickOutside: i,
        autoFocus: true
      })
    })
  }
  return (0, r.jsx)(l.y, {
    targetElementRef: O,
    renderPopout: v,
    position: "bottom",
    children: e => {
      var {
        onClick: n
      } = e, i = m(e, ["onClick"]);
      return (0, r.jsx)(a.NIc, h(_({}, y), {
        children: e => (0, r.jsxs)(c.U, h(_({
          as: u.P3F,
          tag: "div",
          innerRef: O,
          disabled: b,
          "aria-disabled": b
        }, i), {
          id: null == e ? true : e.controlId,
          "aria-describedby": null == e ? true : e.describedById,
          "aria-errormessage": null == e ? true : e.errorMessageId,
          "aria-invalid": (null == e ? true : e.errorMessageId) != null,
          className: d.container,
          onClick: b ? true : n,
          children: [(0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            children: null == t ? true : t.format(f)
          }), (0, r.jsx)(u.Que, {
            size: "sm"
          })]
        }))
      }))
    }
  })
}
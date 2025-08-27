/** Chunk was on web.js **/
/** chunk id: 67979, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk547800 = require("./547800.jsx"),
  Chunk1561 = require("./1561.jsx"),
  Chunk507274 = require("./507274.jsx"),
  Chunk235874 = require("./235874.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk74655 = require("./74655.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk495912 = require("./495912.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = "ll";

function y(e) {
  let {
    value: t,
    onSelect: n,
    dateFormat: _ = b,
    minDate: h,
    maxDate: E,
    disabled: y = false
  } = e, O = i.useRef(null);

  function v(e) {
    let {
      closePopout: i
    } = e;
    return (0, r.jsx)(s.V, {
      children: (0, r.jsx)(a.CalendarPicker, {
        minDate: h,
        maxDate: E,
        value: t,
        onSelect: e => {
          n(e), i()
        },
        calendarClassName: f.calendarContainer,
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
      } = e, i = g(e, ["onClick"]);
      return (0, r.jsxs)(u.U, m(p({
        as: o.P,
        tag: "div",
        innerRef: O,
        disabled: y,
        "aria-disabled": y
      }, i), {
        className: f.container,
        onClick: y ? true : n,
        children: [(0, r.jsx)(c.x, {
          variant: "text-md/normal",
          children: null == t ? true : t.format(_)
        }), (0, r.jsx)(d.Que, {
          size: "sm"
        })]
      }))
    }
  })
}
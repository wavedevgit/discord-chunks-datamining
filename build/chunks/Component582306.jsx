/** Chunk was on web.js **/
/** chunk id: 582306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk939538 = require("./939538.jsx"),
  Chunk305866 = require("./305866.jsx"),
  Chunk265872 = require("./265872.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk821584 = require("./821584.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let g = "ll";

function E(e) {
  let {
    value: t,
    onSelect: n,
    dateFormat: d = g,
    minDate: p,
    maxDate: m,
    disabled: E = false
  } = e, y = h(e, ["value", "onSelect", "dateFormat", "minDate", "maxDate", "disabled"]), b = i.useRef(null);

  function O(e) {
    let {
      closePopout: i
    } = e;
    return (0, r.jsx)(s.l, {
      children: (0, r.jsx)(o.CalendarPicker, {
        minDate: p,
        maxDate: m,
        value: t,
        onSelect: e => {
          n(e), i()
        },
        calendarClassName: u.a,
        onClickOutside: i,
        autoFocus: true
      })
    })
  }
  return (0, r.jsx)(l.Y, {
    targetElementRef: b,
    renderPopout: O,
    position: "bottom",
    children: e => {
      let {
        onClick: n
      } = e, i = h(e, ["onClick"]);
      return (0, r.jsx)(a.D0$, _(f({}, y), {
        children: e => (0, r.jsxs)(a.FON, _(f({
          as: c.DUT,
          tag: "div",
          innerRef: b,
          disabled: E,
          "aria-disabled": E
        }, i), {
          id: null == e ? true : e.controlId,
          "aria-describedby": null == e ? true : e.describedById,
          "aria-errormessage": null == e ? true : e.errorMessageId,
          "aria-invalid": (null == e ? true : e.errorMessageId) != null,
          className: u.k,
          onClick: E ? true : n,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            children: null == t ? true : t.format(d)
          }), (0, r.jsx)(c.CTc, {
            size: "sm"
          })]
        }))
      }))
    }
  })
}
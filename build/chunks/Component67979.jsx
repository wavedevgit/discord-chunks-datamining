/** Chunk was on web.js **/
/** chunk id: 67979, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk547800 = require("./547800.jsx"),
  Chunk1561 = require("./1561.jsx"),
  Chunk507274 = require("./507274.jsx"),
  Chunk235874 = require("./235874.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk495912 = require("./495912.js"),
  Chunk979712 = require("./979712.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let y = "ll";

function O(e) {
  let {
    value: t,
    onSelect: n,
    dateFormat: o = y,
    minDate: p,
    maxDate: m,
    disabled: b = false
  } = e, O = i.useRef(null);

  function v(e) {
    let {
      closePopout: i
    } = e;
    return (0, r.jsx)(c.V, {
      children: (0, r.jsx)(s.CalendarPicker, {
        minDate: p,
        maxDate: m,
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
  return (0, r.jsx)(u.y, {
    targetElementRef: O,
    renderPopout: v,
    position: "bottom",
    children: e => {
      var {
        onClick: n
      } = e, i = E(e, ["onClick"]);
      return (0, r.jsx)(l.P, g(h({
        innerRef: O
      }, i), {
        className: a()(_.input, f.container, {
          [_.disabled]: b,
          [f.disabled]: b
        }),
        onClick: b ? true : n,
        "aria-disabled": b,
        children: (0, r.jsxs)("div", {
          className: f.content,
          children: [(0, r.jsx)("div", {
            className: f.text,
            children: null == t ? true : t.format(o)
          }), (0, r.jsx)(d.Que, {
            size: "sm",
            color: "currentColor",
            className: f.icon
          })]
        })
      }))
    }
  })
}
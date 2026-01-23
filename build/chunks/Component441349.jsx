/** Chunk was on web.js **/
/** chunk id: 441349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk60628 = require("./60628.js"),
  Chunk521767 = require("./521767.js"),
  Chunk450902 = require("./450902.js"),
  Chunk650682 = require("./650682.js"),
  Chunk248062 = require("./248062.js"),
  Chunk561392 = require("./561392.js"),
  Chunk720341 = require("./720341.jsx"),
  Chunk452027 = require("./452027.jsx"),
  Chunk934551 = require("./934551.js"),
  Chunk862301 = require("./862301.jsx"),
  Chunk460890 = require("./460890.jsx"),
  Chunk25181 = require("./25181.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function I(e) {
  let {
    value: t,
    onChange: n,
    minValue: i,
    maxValue: E,
    placeholderValue: b,
    granularity: A = "day",
    hourCycle: I,
    hideTimeZone: S = false
  } = e, T = v(e, ["value", "onChange", "minValue", "maxValue", "placeholderValue", "granularity", "hourCycle", "hideTimeZone"]), {
    i18n: C
  } = (0, m.G9)(), {
    fieldProps: N
  } = (0, p.n)(T), {
    disabled: R,
    errorMessage: w,
    required: P = false
  } = N, D = {
    hasError: null != w && "" !== w
  }, {
    refs: x,
    floatingStyles: L,
    isOpen: j,
    setIsOpen: M,
    context: k,
    getFloatingProps: U,
    getReferenceProps: G
  } = (0, d.u)({
    matchReferenceWidth: false,
    placement: "bottom-start"
  }), {
    isMounted: V,
    styles: F
  } = (0, d.D)(k, {
    common: e => {
      let {
        side: t
      } = e;
      return {
        transformOrigin: "".concat("top" === t ? "bottom" : "top", " center")
      }
    },
    initial: {
      opacity: .5,
      transform: "scaleY(0.96)"
    },
    duration: 100
  }), B = e => {
    null == n || n(e), M(false)
  };
  return (0, r.jsx)(p.D, O(y({}, N), {
    children: e => (0, r.jsx)(h.F, O(y({
      className: g.LF,
      validation: D,
      ref: x.setReference
    }, G()), {
      children: (0, r.jsxs)(s.lr, {
        id: e.controlId,
        "aria-labelledby": e.labelId,
        "aria-describedby": e.describedById,
        "aria-invalid": null != e.errorMessageId,
        "aria-errormessage": e.errorMessageId,
        value: t,
        onChange: B,
        isDisabled: R,
        isRequired: P,
        minValue: i,
        maxValue: E,
        placeholderValue: b,
        granularity: A,
        hourCycle: I,
        hideTimeZone: S,
        "data-mana-component": "date-picker",
        className: g.dn,
        children: [(0, r.jsxs)(o.Y, {
          className: g.wO,
          children: [(0, r.jsx)(l.J3, {
            children: e => (0, r.jsx)(l.Eu, {
              segment: e,
              className: a()(g.mX, e.isPlaceholder && g.qf)
            })
          }), (0, r.jsx)(c.$, {
            className: g.B7,
            onClick: () => M(!j),
            "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
            children: (0, r.jsx)(_.CalendarIcon, {
              size: "sm",
              color: "currentColor"
            })
          })]
        }), j && V && (0, r.jsx)("div", O(y({}, U()), {
          ref: x.setFloating,
          style: L,
          className: g.oO,
          children: (0, r.jsx)(u.lG, {
            style: F,
            className: g.r3,
            children: (0, r.jsx)(f.V, {
              value: t,
              onChange: B,
              minValue: i,
              maxValue: E,
              disabled: R
            })
          })
        }))]
      })
    }))
  }))
}
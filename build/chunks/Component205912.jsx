/** Chunk was on 66548 **/
/** chunk id: 205912, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  M: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk228865 = require("./228865.js"),
  Chunk276820 = require("./276820.js"),
  Chunk167111 = require("./167111.js"),
  Chunk188366 = require("./188366.js"),
  Chunk989189 = require("./989189.js"),
  Chunk407558 = require("./407558.js"),
  Chunk787304 = require("./787304.jsx"),
  Chunk483566 = require("./483566.jsx"),
  Chunk657707 = require("./657707.js"),
  Chunk454389 = require("./454389.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk170382 = require("./170382.js");

function h(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = null != arguments[l] ? arguments[l] : {},
      a = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), a.forEach(function(l) {
      var a;
      a = t[l], l in e ? Object.defineProperty(e, l, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[l] = a
    })
  }
  return e
}

function x(e, l) {
  return l = null != l ? l : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(l)) : (function(e, l) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      t.push.apply(t, a)
    }
    return t
  })(Object(l)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(l, t))
  }), e
}

function g(e) {
  var {
    value: l,
    onChange: t,
    minValue: n,
    maxValue: g,
    placeholderValue: O,
    granularity: j = "day",
    hourCycle: V,
    hideTimeZone: w = false
  } = e, S = function(e, l) {
    if (null == e) return {};
    var t, a, n = function(e, l) {
      if (null == e) return {};
      var t, a, n = {},
        o = Object.keys(e);
      for (a = 0; a < o.length; a++) t = o[a], l.indexOf(t) >= 0 || (n[t] = e[t]);
      return n
    }(e, l);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (a = 0; a < o.length; a++) t = o[a], !(l.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
    }
    return n
  }(e, ["value", "onChange", "minValue", "maxValue", "placeholderValue", "granularity", "hourCycle", "hideTimeZone"]);
  let {
    i18n: C
  } = (0, f.ZF)(), {
    fieldProps: P
  } = (0, p.X)(S), {
    disabled: k,
    errorMessage: T,
    required: D = false
  } = P, M = {
    hasError: null != T && "" !== T
  }, {
    refs: E,
    floatingStyles: L,
    isOpen: A,
    setIsOpen: N,
    context: R,
    getFloatingProps: z,
    getReferenceProps: I
  } = (0, c.O)({
    matchReferenceWidth: false,
    placement: "bottom-start"
  }), {
    isMounted: B,
    styles: q
  } = (0, c.Y)(R, {
    common: e => {
      let {
        side: l
      } = e;
      return {
        transformOrigin: "".concat("top" === l ? "bottom" : "top", " center")
      }
    },
    initial: {
      opacity: .5,
      transform: "scaleY(0.96)"
    },
    duration: 100
  }), G = e => {
    null == t || t(e), N(false)
  };
  return (0, a.jsx)(p.g, x(h({}, P), {
    children: e => (0, a.jsx)(m.U, x(h({
      className: v.inputField,
      validation: M,
      ref: E.setReference
    }, I()), {
      children: (0, a.jsxs)(i.Mt, {
        id: e.controlId,
        "aria-labelledby": e.labelId,
        "aria-describedby": e.describedById,
        "aria-invalid": null != e.errorMessageId,
        "aria-errormessage": e.errorMessageId,
        value: l,
        onChange: G,
        isDisabled: k,
        isRequired: D,
        minValue: n,
        maxValue: g,
        placeholderValue: O,
        granularity: j,
        hourCycle: V,
        hideTimeZone: w,
        "data-mana-component": "date-picker",
        className: v.datePicker,
        children: [(0, a.jsxs)(r.Z, {
          className: v.inputGroup,
          children: [(0, a.jsx)(s.Wr, {
            children: e => (0, a.jsx)(s.kE, {
              segment: e,
              className: o()(v.segment, e.isPlaceholder && v.placeholder)
            })
          }), (0, a.jsx)(u.z, {
            className: v.calendarButton,
            onClick: () => N(!A),
            "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
            children: (0, a.jsx)(y.Que, {
              size: "sm",
              color: "currentColor"
            })
          })]
        }), A && B && (0, a.jsx)("div", x(h({}, z()), {
          ref: E.setFloating,
          style: L,
          className: v.popover,
          children: (0, a.jsx)(d.Vq, {
            style: q,
            className: v.dialog,
            children: (0, a.jsx)(b.f, {
              value: l,
              onChange: G,
              minValue: n,
              maxValue: g,
              disabled: k
            })
          })
        }))]
      })
    }))
  }))
}
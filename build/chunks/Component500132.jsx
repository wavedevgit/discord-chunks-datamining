/** Chunk was on web.js **/
/** chunk id: 500132, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk168545 = require("./168545.js"),
  Chunk499339 = require("./499339.js"),
  Chunk793030 = require("./793030.js"),
  Chunk507349 = require("./507349.js");

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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g() {
  return (0, Chunk951288.jsxs)("svg", {
    className: Chunk507349.radioIndicator,
    width: 20,
    height: 20,
    viewBox: "0 0 40 40",
    fill: "none",
    shapeRendering: "geometricPrecision",
    children: [(0, Chunk951288.jsx)("circle", {
      cx: 20,
      cy: 20,
      r: 20,
      className: Chunk507349.outerRadioBase
    }), (0, Chunk951288.jsx)("circle", {
      cx: 20,
      cy: 20,
      r: 20,
      className: Chunk507349.outerRadioFill
    }), (0, Chunk951288.jsx)("circle", {
      cx: 20,
      cy: 20,
      r: 8,
      className: Chunk507349.innerDotRadio
    })]
  })
}

function E(e) {
  let {
    desc: t,
    disabled: n,
    leadingIcon: a,
    name: d,
    value: f,
    isSelected: _
  } = e, p = (0, i.useRef)(null), h = (0, i.useRef)(null), [m, E] = (0, i.useState)(true), b = (0, i.useRef)(false);
  return (0, i.useEffect)(() => {
    if (!b.current) {
      b.current = true;
      return
    }
    E(_ ? "animateIn" : "animateOut")
  }, [_]), (0, r.jsx)(c.tEY, {
    focusTarget: p,
    ringTarget: p,
    within: true,
    children: (0, r.jsxs)(s.Y8, {
      className: o()([u.radioGroupOption, "string" == typeof m && u[m]]),
      value: f,
      isDisabled: n,
      inputRef: h,
      ref: p,
      children: [(0, r.jsx)(g, {}), (0, r.jsxs)(c.Kqy, {
        gap: 4,
        children: [(0, r.jsxs)(l._, {
          className: u.label,
          children: [null != a && (0, r.jsx)(a, {
            className: u.radioItemIcon,
            size: "sm",
            color: "currentColor",
            "aria-hidden": true,
            focusable: false
          }), (0, r.jsx)(c.xvT, {
            variant: "text-md/normal",
            children: d
          })]
        }), null != t && "" !== t ? (0, r.jsx)(c.xvT, {
          variant: "text-sm/normal",
          color: "text-secondary",
          children: t
        }) : null]
      })]
    })
  })
}

function b(e) {
  var {
    onChange: t,
    options: n,
    value: i,
    disabled: a = false,
    "aria-labelledby": o
  } = e, l = h(e, ["onChange", "options", "value", "disabled", "aria-labelledby"]);
  let d = null != t ? e => t(e) : true;
  return (0, r.jsx)(c.gNt, p(f({}, l), {
    children: e => (0, r.jsx)(s.Ee, {
      id: e.controlId,
      className: u.group,
      isDisabled: a,
      onChange: d,
      "aria-labelledby": null != o ? o : e.labelId,
      "aria-describedby": e.describedById,
      "aria-errormessage": e.errorMessageId,
      "data-mana-component": "BaseRadioGroup",
      value: i,
      children: n.map((e, t) => (0, r.jsx)(E, p(f({
        index: t
      }, e), {
        isSelected: i === e.value
      }), e.value))
    })
  }))
}
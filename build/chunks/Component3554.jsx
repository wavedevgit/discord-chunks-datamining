/** Chunk was on web.js **/
/** chunk id: 3554, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => g
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk735048 = require("./735048.js"),
  Chunk982125 = require("./982125.jsx"),
  Chunk595824 = require("./595824.jsx"),
  Chunk483566 = require("./483566.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk415957 = require("./415957.js");

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

function g(e) {
  var t, n, {
      onChange: d,
      options: _,
      selectedValues: m,
      disabled: g = false
    } = e,
    E = h(e, ["onChange", "options", "selectedValues", "disabled"]);
  let b = i.useContext(c.KJ),
    y = null == b || null == (n = b.experiments) || null == (t = n.enabledExperiments) ? true : t.includes("mana-toggle-inputs"),
    O = e => {
      null == d || d(e)
    },
    v = (e, t) => {
      let n = t ? [...m, e] : m.filter(t => t !== e);
      null == d || d(n)
    };
  return (0, r.jsx)(l.g, p(f({}, E), {
    role: "group",
    children: y ? (0, r.jsx)(a.cO, {
      className: u.group,
      value: m.map(String),
      onChange: O,
      "data-mana-component": "checkbox-group",
      isDisabled: g,
      children: _.map(e => (0, r.jsx)(o.C, {
        disabled: g || e.disabled,
        checked: m.includes(e.value),
        label: e.label,
        value: e.value,
        description: e.description,
        leadingIcon: e.leadingIcon
      }, String(e.value)))
    }) : (0, r.jsx)("div", {
      className: u.group,
      children: _.map(e => (0, r.jsx)("div", {
        className: u.backwardsCompatibleCheckbox,
        children: (0, r.jsx)(s.h, {
          disabled: g || e.disabled,
          checked: m.includes(e.value),
          label: e.label,
          description: e.description,
          leadingIcon: e.leadingIcon,
          onChange: t => v(e.value, t)
        })
      }, String(e.value)))
    })
  }))
}
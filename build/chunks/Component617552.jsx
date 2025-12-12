/** Chunk was on web.js **/
/** chunk id: 617552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk740492 = require("./740492.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
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

function h(e) {
  var {
    onConfirm: t,
    onCancel: n
  } = e, l = _(e, ["onConfirm", "onCancel"]);
  let [u, f] = i.useState(false);
  i.useEffect(() => {
    s.ZP.updatedUnsyncedSettings({
      disableEmbeddedActivityPopOutAlert: u
    })
  }, [u]);
  let m = () => {
      null == n || n(), l.onClose()
    },
    h = () => {
      t(), l.onClose()
    };
  return (0, r.jsx)(a.Modal, p(d({}, l), {
    size: "md",
    title: c.intl.string(c.t.ye21jI),
    subtitle: c.intl.string(c.t.hbagWD),
    actions: [{
      text: c.intl.string(c.t.B8pz37),
      onClick: m,
      variant: "secondary"
    }, {
      text: c.intl.string(c.t.makWn9),
      onClick: h,
      variant: "primary"
    }],
    actionBarInput: (0, r.jsx)(o.Checkbox, {
      checked: u,
      onChange: e => f(e),
      label: c.intl.string(c.t.wGAwOS)
    })
  }))
}

function g(e) {
  let {
    onConfirm: t,
    onCancel: n,
    usesPopoutContext: i = false
  } = e;
  l.ZP.disableEmbeddedActivityPopOutAlert ? t() : (0, o.h7j)(e => (0, r.jsx)(h, p(d({}, e), {
    onConfirm: t,
    onCancel: n
  })), {}, i ? o.u1M : true)
}
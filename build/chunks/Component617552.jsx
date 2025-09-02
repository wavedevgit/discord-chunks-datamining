/** Chunk was on web.js **/
/** chunk id: 617552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk740492 = require("./740492.js"),
  Chunk388032 = require("./388032.jsx");

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
  var {
    onConfirm: t,
    onCancel: n
  } = e, c = h(e, ["onConfirm", "onCancel"]);
  let [d, _] = i.useState(false);
  i.useEffect(() => () => {
    d && l.ZP.updatedUnsyncedSettings({
      disableEmbeddedActivityPopOutAlert: true
    })
  }, [d]);
  let m = () => {
      null == n || n(), c.onClose()
    },
    g = () => {
      t(), c.onClose()
    };
  return (0, r.jsx)(a.Modal, p(f({}, c), {
    size: "md",
    title: u.intl.string(u.t.ye21jI),
    subtitle: u.intl.string(u.t.hbagWF),
    actions: [{
      text: u.intl.string(u.t.B8pz39),
      onClick: m,
      variant: "secondary"
    }, {
      text: u.intl.string(u.t.makWn5),
      onClick: g,
      variant: "primary"
    }],
    actionBarInput: (0, r.jsx)(o.$q, {
      value: d,
      onChange: (e, t) => _(t),
      type: o.M0.DEFAULT,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: u.intl.string(u.t.wGAwOT)
      })
    })
  }))
}

function E(e) {
  let {
    onConfirm: t,
    onCancel: n,
    usesPopoutContext: i = false
  } = e;
  c.ZP.disableEmbeddedActivityPopOutAlert ? t() : (0, s.h7j)(e => (0, r.jsx)(g, p(f({}, e), {
    onConfirm: t,
    onCancel: n
  })), {}, i ? s.u1M : true)
}
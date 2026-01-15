/** Chunk was on web.js **/
/** chunk id: 139712, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk482241 = require("./482241.js"),
  Chunk124165 = require("./124165.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk529532 = require("./529532.js");

function f(e, t, n) {
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
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
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

function E(e) {
  var {
    event: t,
    recurrenceId: n,
    guildId: f,
    onRsvp: _
  } = e, g = m(e, ["event", "recurrenceId", "guildId", "onRsvp"]);
  let [E, b] = i.useState(l.KX.SERIES), y = (0, l.X2)(t.id, null), O = (null == y ? true : y.response) === c.gv.INTERESTED ? c.gv.UNINTERESTED : c.gv.INTERESTED, v = O === c.gv.INTERESTED ? u.intl.string(u.t.WtORed) : u.intl.string(u.t["8MPCVr"]), S = () => {
    E === l.KX.SERIES ? s.Z.updateRsvp(t.id, null, f, O) : s.Z.updateRsvp(t.id, n, f, O), null == _ || _(), g.onClose()
  };
  return (0, r.jsx)(o.VoidConfirmModal, h(p({}, g), {
    header: v,
    confirmText: u.intl.string(u.t.TyCVIq),
    cancelText: u.intl.string(u.t["ETE/oC"]),
    onConfirm: S,
    confirmButtonColor: a.zx.Colors.BRAND,
    children: (0, r.jsx)("div", {
      className: d.responseOptions,
      children: (0, r.jsx)(o.FXm, {
        value: E,
        options: (0, l.pF)(),
        onChange: e => b(e)
      })
    })
  }))
}

function b(e, t, n, i) {
  let a = (e, t) => {
    (0, o.ZDy)(() => Promise.resolve(a => (0, r.jsx)(E, h(p({}, a), {
      event: e,
      recurrenceId: t,
      guildId: n,
      onRsvp: i
    }))))
  };
  (0, l.cg)({
    eventId: e,
    recurrenceId: t,
    guildId: n,
    updateRsvp: (t, r, i, a) => s.Z.updateRsvp(e, r, n, a),
    openRsvpPicker: a,
    onRsvp: i
  })
}
/** Chunk was on web.js **/
/** chunk id: 666394, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk496092 = require("./496092.js"),
  Chunk929267 = require("./929267.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk217528 = require("./217528.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function E(e) {
  let {
    event: t,
    recurrenceId: n,
    guildId: f,
    onRsvp: _
  } = e, g = m(e, ["event", "recurrenceId", "guildId", "onRsvp"]), [E, y] = i.useState(l.yS.SERIES), b = (0, l.TS)(t.id, null), O = (null == b ? true : b.response) === c.Qi.INTERESTED ? c.Qi.UNINTERESTED : c.Qi.INTERESTED, v = O === c.Qi.INTERESTED ? u.intl.string(u.t.WtORed) : u.intl.string(u.t["8MPCVr"]), A = () => {
    E === l.yS.SERIES ? o.A.updateRsvp(t.id, null, f, O) : o.A.updateRsvp(t.id, n, f, O), null == _ || _(), g.onClose()
  };
  return (0, r.jsx)(s.VoidConfirmModal, h(p({}, g), {
    header: v,
    confirmText: u.intl.string(u.t.TyCVIq),
    cancelText: u.intl.string(u.t["ETE/oC"]),
    onConfirm: A,
    confirmButtonColor: a.$n.Colors.BRAND,
    children: (0, r.jsx)("div", {
      className: d.E,
      children: (0, r.jsx)(s.z6M, {
        value: E,
        options: (0, l.ko)(),
        onChange: e => y(e)
      })
    })
  }))
}

function y(e, t, n, i) {
  let a = (e, t) => {
    (0, s.mMO)(() => Promise.resolve(a => (0, r.jsx)(E, h(p({}, a), {
      event: e,
      recurrenceId: t,
      guildId: n,
      onRsvp: i
    }))))
  };
  (0, l.QC)({
    eventId: e,
    recurrenceId: t,
    guildId: n,
    updateRsvp: (t, r, i, a) => o.A.updateRsvp(e, r, n, a),
    openRsvpPicker: a,
    onRsvp: i
  })
}
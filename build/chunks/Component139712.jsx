/** Chunk was on 34082 **/
/** chunk id: 139712, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk482241 = require("./482241.js"),
  Chunk124165 = require("./124165.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk994397 = require("./994397.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  var {
    event: t,
    recurrenceId: n,
    guildId: v,
    onRsvp: f
  } = e, g = function(e, t) {
    if (null == e) return {};
    var n, r, l = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.keys(e);
      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
    }
    return l
  }(e, ["event", "recurrenceId", "guildId", "onRsvp"]);
  let [b, j] = l.useState(o.KX.SERIES), x = (0, o.X2)(t.id, null), h = (null == x ? true : x.response) === c.gv.INTERESTED ? c.gv.UNINTERESTED : c.gv.INTERESTED, N = h === c.gv.INTERESTED ? u.intl.string(u.t.WtOReX) : u.intl.string(u.t["8MPCVl"]);
  return (0, r.jsx)(s.ConfirmModal, p(m({}, g), {
    header: N,
    confirmText: u.intl.string(u.t.TyCVIi),
    cancelText: u.intl.string(u.t["ETE/oK"]),
    onConfirm: () => {
      b === o.KX.SERIES ? a.Z.updateRsvp(t.id, null, v, h) : a.Z.updateRsvp(t.id, n, v, h), null == f || f(), g.onClose()
    },
    confirmButtonColor: i.zx.Colors.BRAND,
    children: (0, r.jsx)(s.FXm, {
      className: d.responseOptions,
      value: b,
      options: (0, o.pF)(),
      onChange: e => j(e.value)
    })
  }))
}

function f(e, t, n, l) {
  (0, o.cg)({
    eventId: e,
    recurrenceId: t,
    guildId: n,
    updateRsvp: (t, r, l, i) => a.Z.updateRsvp(e, r, n, i),
    openRsvpPicker: (e, t) => {
      (0, s.ZDy)(() => Promise.resolve(i => (0, r.jsx)(v, p(m({}, i), {
        event: e,
        recurrenceId: t,
        guildId: n,
        onRsvp: l
      }))))
    },
    onRsvp: l
  })
}
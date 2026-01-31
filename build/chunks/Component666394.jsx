/** Chunk was on 48330 **/
/** chunk id: 666394, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk496092 = require("./496092.js"),
  Chunk929267 = require("./929267.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk217528 = require("./217528.js");

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    event: t,
    recurrenceId: n,
    guildId: p,
    onRsvp: x
  } = e, g = function(e, t) {
    if (null == e) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, l, r = {},
          i = Object.getOwnPropertyNames(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
    return i
  }(e, ["event", "recurrenceId", "guildId", "onRsvp"]), [j, h] = r.useState(c.yS.SERIES), N = (0, c.TS)(t.id, null), f = (null == N ? true : N.response) === o.Qi.INTERESTED ? o.Qi.UNINTERESTED : o.Qi.INTERESTED, y = f === o.Qi.INTERESTED ? u.intl.string(u.t.WtORed) : u.intl.string(u.t["8MPCVr"]);
  return (0, l.jsx)(i.ConfirmModal, v(m({}, g), {
    title: y,
    confirmText: u.intl.string(u.t.TyCVIq),
    cancelText: u.intl.string(u.t["ETE/oC"]),
    onConfirm: () => {
      j === c.yS.SERIES ? a.A.updateRsvp(t.id, null, p, f) : a.A.updateRsvp(t.id, n, p, f), null == x || x(), g.onClose()
    },
    variant: "primary",
    children: (0, l.jsx)("div", {
      className: d.E,
      children: (0, l.jsx)(s.z6M, {
        value: j,
        options: (0, c.ko)(),
        onChange: e => h(e)
      })
    })
  }))
}

function x(e, t, n, r) {
  (0, c.QC)({
    eventId: e,
    recurrenceId: t,
    guildId: n,
    updateRsvp: (t, l, r, i) => a.A.updateRsvp(e, l, n, i),
    openRsvpPicker: (e, t) => {
      (0, s.mMO)(() => Promise.resolve(i => (0, l.jsx)(p, v(m({}, i), {
        event: e,
        recurrenceId: t,
        guildId: n,
        onRsvp: r
      }))))
    },
    onRsvp: r
  })
}
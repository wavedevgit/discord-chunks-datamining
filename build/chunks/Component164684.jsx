/** Chunk was on 52199 **/
/** chunk id: 164684, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => f,
  x: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk793574 = require("./793574.js"),
  Chunk203982 = require("./203982.js"),
  Chunk216623 = require("./216623.js"),
  Chunk85109 = require("./85109.js"),
  Chunk226017 = require("./226017.js"),
  Chunk652215 = require("./652215.js");
require("./811233.js");
var Chunk985018 = require("./985018.jsx");

function p(e, t) {
  if (null == e) return {};
  var r, n, l, s = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
    return s
  }
  if (s = function(e, t) {
      if (null == e) return {};
      var r, n, l = {},
        s = Object.getOwnPropertyNames(e);
      for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
  return s
}
async function f(e) {
  let {
    displayToast: t = false
  } = e, f = p(e, ["displayToast"]);
  if (null == c.A.getSavedMessage(f.channelId, f.messageId) && !(0, u.A)()) return void(0, l.mMO)(async () => {
    let {
      default: e
    } = await r.e("159").then(r.bind(r, 530951));
    return t => (0, n.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      source: a.A.FOR_LATER_HELPERS
    }, t))
  });
  if (null != await (0, o.oN)(f).catch(e => {
      var t, r, n;
      return (null == e || null == (r = e.body) ? true : r.code) === d.t02.TOO_MANY_SAVED_MESSAGES ? s.A.show({
        title: h.intl.string(h.t.mlbiZW),
        body: h.intl.formatToPlainString(h.t["1zVbEG"], {
          max: 200
        }),
        cancelText: h.intl.string(h.t.BddRzS),
        confirmText: h.intl.string(h.t.ZGbTcy),
        onConfirm: () => i._.dispatch(d.jej.TOGGLE_FOR_LATER)
      }) : (0, l.showToast)((0, l.createToast)(null != (t = null == e || null == (n = e.body) ? true : n.message) ? t : h.intl.string(h.t.R0RpRX), l.ToastType.FAILURE)), null
    }) && t) {
    let e = null != f.dueAt ? h.intl.string(h.t.i1IsOy) : h.intl.string(h.t["WQdL/6"]),
      t = null != f.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
    (0, l.showToast)((0, l.createToast)(e, t))
  }
}
async function g(e) {
  let {
    displayToast: t = false
  } = e, r = p(e, ["displayToast"]);
  if (null != await (0, o.cf)(r).catch(e => {
      var t, r;
      return (0, l.showToast)((0, l.createToast)(null != (t = null == e || null == (r = e.body) ? true : r.message) ? t : h.intl.string(h.t.R0RpRX), l.ToastType.FAILURE)), null
    }) && t) {
    let e = null != r.dueAt ? h.intl.string(h.t.D0tS02) : h.intl.string(h.t["5KOMiV"]),
      t = null != r.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
    (0, l.showToast)((0, l.createToast)(e, t))
  }
}
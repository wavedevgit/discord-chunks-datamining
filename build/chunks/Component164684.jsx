/** Chunk was on 84127 **/
/** chunk id: 164684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => A,
  x: () => h
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

function f(e, t) {
  if (null == e) return {};
  var n, r, l, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        a = Object.getOwnPropertyNames(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}
async function A(e) {
  let {
    displayToast: t = false
  } = e, A = f(e, ["displayToast"]);
  if (null == c.A.getSavedMessage(A.channelId, A.messageId) && !(0, u.A)()) return void(0, l.mMO)(async () => {
    let {
      default: e
    } = await n.e("159").then(n.bind(n, 530951));
    return t => (0, r.jsx)(e, function(e) {
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
    }({
      source: s.A.FOR_LATER_HELPERS
    }, t))
  });
  if (null != await (0, o.oN)(A).catch(e => {
      var t, n, r;
      return (null == e || null == (n = e.body) ? true : n.code) === p.t02.TOO_MANY_SAVED_MESSAGES ? a.A.show({
        title: d.intl.string(d.t.mlbiZW),
        body: d.intl.formatToPlainString(d.t["1zVbEG"], {
          max: 200
        }),
        cancelText: d.intl.string(d.t.BddRzS),
        confirmText: d.intl.string(d.t.ZGbTcy),
        onConfirm: () => i._.dispatch(p.jej.TOGGLE_FOR_LATER)
      }) : (0, l.showToast)((0, l.createToast)(null != (t = null == e || null == (r = e.body) ? true : r.message) ? t : d.intl.string(d.t.R0RpRX), l.ToastType.FAILURE)), null
    }) && t) {
    let e = null != A.dueAt ? d.intl.string(d.t.i1IsOy) : d.intl.string(d.t["WQdL/6"]),
      t = null != A.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
    (0, l.showToast)((0, l.createToast)(e, t))
  }
}
async function h(e) {
  let {
    displayToast: t = false
  } = e, n = f(e, ["displayToast"]);
  if (null != await (0, o.cf)(n).catch(e => {
      var t, n;
      return (0, l.showToast)((0, l.createToast)(null != (t = null == e || null == (n = e.body) ? true : n.message) ? t : d.intl.string(d.t.R0RpRX), l.ToastType.FAILURE)), null
    }) && t) {
    let e = null != n.dueAt ? d.intl.string(d.t.D0tS02) : d.intl.string(d.t["5KOMiV"]),
      t = null != n.dueAt ? l.ToastType.CLOCK : l.ToastType.BOOKMARK;
    (0, l.showToast)((0, l.createToast)(e, t))
  }
}
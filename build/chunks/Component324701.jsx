/** Chunk was on 54157 **/
/** chunk id: 324701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  x: () => g,
  z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk100527 = require("./100527.js"),
  Chunk585483 = require("./585483.js"),
  Chunk192720 = require("./192720.js"),
  Chunk768943 = require("./768943.js"),
  Chunk175006 = require("./175006.js"),
  Chunk981631 = require("./981631.js"),
  Chunk989925 = require("./989925.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t) {
  if (null == e) return {};
  var n, r, s = function(e, t) {
    if (null == e) return {};
    var n, r, s = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
    return s
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
  }
  return s
}
async function _(e) {
  var {
    displayToast: t = false
  } = e, _ = f(e, ["displayToast"]);
  if (null == c.Z.getSavedMessage(_.channelId, _.messageId) && !(0, u.Z)()) return void(0, s.ZDy)(async () => {
    let {
      default: e
    } = await n.e("34906").then(n.bind(n, 639565));
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
      source: a.Z.FOR_LATER_HELPERS
    }, t))
  });
  if (null != await (0, o.XA)(_).catch(e => {
      var t, n, r;
      return (null == e || null == (t = e.body) ? true : t.code) === d.evJ.TOO_MANY_SAVED_MESSAGES ? l.Z.show({
        title: p.intl.string(p.t.mlbiZW),
        body: p.intl.formatToPlainString(p.t["1zVbEB"], {
          max: h.D
        }),
        cancelText: p.intl.string(p.t.BddRzc),
        confirmText: p.intl.string(p.t.ZGbTc3),
        onConfirm: () => i.S.dispatch(d.CkL.TOGGLE_FOR_LATER)
      }) : (0, s.showToast)((0, s.createToast)(null != (r = null == e || null == (n = e.body) ? true : n.message) ? r : p.intl.string(p.t.R0RpRU), s.ToastType.FAILURE)), null
    }) && t) {
    let e = null != _.dueAt ? p.intl.string(p.t.i1IsOz) : p.intl.string(p.t["WQdL//"]),
      t = null != _.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
    (0, s.showToast)((0, s.createToast)(e, t))
  }
}
async function g(e) {
  var {
    displayToast: t = false
  } = e, n = f(e, ["displayToast"]);
  if (null != await (0, o.ep)(n).catch(e => {
      var t, n;
      return (0, s.showToast)((0, s.createToast)(null != (n = null == e || null == (t = e.body) ? true : t.message) ? n : p.intl.string(p.t.R0RpRU), s.ToastType.FAILURE)), null
    }) && t) {
    let e = null != n.dueAt ? p.intl.string(p.t.D0tS09) : p.intl.string(p.t["5KOMiY"]),
      t = null != n.dueAt ? s.ToastType.CLOCK : s.ToastType.BOOKMARK;
    (0, s.showToast)((0, s.createToast)(e, t))
  }
}
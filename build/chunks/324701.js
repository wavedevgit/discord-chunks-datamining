/** Chunk was on 41629 **/
"use strict";
n.d(t, {
  x: () => h,
  z: () => b
});
var s = n(255367),
  r = n(481060),
  i = n(668781),
  c = n(100527),
  a = n(585483),
  o = n(192720),
  u = n(768943),
  l = n(175006),
  p = n(981631),
  f = n(989925),
  d = n(388032);

function g(e, t) {
  if (null == e) return {};
  var n, s, r = function(e, t) {
    if (null == e) return {};
    var n, s, r = {},
      i = Object.keys(e);
    for (s = 0; s < i.length; s++) n = i[s], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++) n = i[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
async function b(e) {
  var {
    displayToast: t = !1
  } = e, b = g(e, ["displayToast"]);
  if (null == u.Z.getSavedMessage(b.channelId, b.messageId) && !(0, l.Z)()) return void(0, r.ZDy)(async () => {
    let {
      default: e
    } = await n.e("34906").then(n.bind(n, 639565));
    return t => (0, s.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), s.forEach(function(t) {
          var s;
          s = n[t], t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = s
        })
      }
      return e
    }({
      source: c.Z.FOR_LATER_HELPERS
    }, t))
  });
  if (null != await (0, o.XA)(b).catch(e => {
      var t, n, s;
      return (null == e || null == (t = e.body) ? void 0 : t.code) === p.evJ.TOO_MANY_SAVED_MESSAGES ? i.Z.show({
        title: d.intl.string(d.t.mlbiZW),
        body: d.intl.formatToPlainString(d.t["1zVbEB"], {
          max: f.D
        }),
        cancelText: d.intl.string(d.t.BddRzc),
        confirmText: d.intl.string(d.t.ZGbTc3),
        onConfirm: () => a.S.dispatch(p.CkL.TOGGLE_FOR_LATER)
      }) : (0, r.showToast)((0, r.createToast)(null != (s = null == e || null == (n = e.body) ? void 0 : n.message) ? s : d.intl.string(d.t.R0RpRU), r.ToastType.FAILURE)), null
    }) && t) {
    let e = null != b.dueAt ? d.intl.string(d.t.i1IsOz) : d.intl.string(d.t["WQdL//"]),
      t = null != b.dueAt ? r.ToastType.CLOCK : r.ToastType.BOOKMARK;
    (0, r.showToast)((0, r.createToast)(e, t))
  }
}
async function h(e) {
  var {
    displayToast: t = !1
  } = e, n = g(e, ["displayToast"]);
  if (null != await (0, o.ep)(n).catch(e => {
      var t, n;
      return (0, r.showToast)((0, r.createToast)(null != (n = null == e || null == (t = e.body) ? void 0 : t.message) ? n : d.intl.string(d.t.R0RpRU), r.ToastType.FAILURE)), null
    }) && t) {
    let e = null != n.dueAt ? d.intl.string(d.t.D0tS09) : d.intl.string(d.t["5KOMiY"]),
      t = null != n.dueAt ? r.ToastType.CLOCK : r.ToastType.BOOKMARK;
    (0, r.showToast)((0, r.createToast)(e, t))
  }
}
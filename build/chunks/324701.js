/** Chunk was on 52272 **/
n.d(t, {
  x: () => g,
  z: () => h
});
var r = n(200651),
  i = n(481060),
  o = n(668781),
  a = n(100527),
  l = n(585483),
  s = n(192720),
  c = n(768943),
  u = n(175006),
  d = n(981631),
  p = n(989925),
  m = n(388032);

function f(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
async function h(e) {
  var {
    displayToast: t = !1
  } = e, h = f(e, ["displayToast"]);
  if (null == c.Z.getSavedMessage(h.channelId, h.messageId) && !(0, u.Z)()) {
    (0, i.ZDy)(async () => {
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
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r
          })
        }
        return e
      }({
        source: a.Z.FOR_LATER_HELPERS
      }, t))
    });
    return
  }
  if (null != await (0, s.XA)(h).catch(e => {
      var t, n, r;
      return (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === d.evJ.TOO_MANY_SAVED_MESSAGES ? o.Z.show({
        title: m.NW.string(m.t.mlbiZW),
        body: m.NW.formatToPlainString(m.t["1zVbEB"], {
          max: p.D
        }),
        cancelText: m.NW.string(m.t.BddRzc),
        confirmText: m.NW.string(m.t.ZGbTc3),
        onConfirm: () => l.S.dispatch(d.CkL.TOGGLE_FOR_LATER)
      }) : (0, i.showToast)((0, i.createToast)(null !== (r = null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : m.NW.string(m.t.R0RpRU), i.ToastType.FAILURE)), null
    }) && t) {
    let e = null != h.dueAt ? m.NW.string(m.t.i1IsOz) : m.NW.string(m.t["WQdL//"]),
      t = null != h.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
    (0, i.showToast)((0, i.createToast)(e, t))
  }
}
async function g(e) {
  var {
    displayToast: t = !1
  } = e, n = f(e, ["displayToast"]);
  if (null != await (0, s.ep)(n).catch(e => {
      var t, n;
      return (0, i.showToast)((0, i.createToast)(null !== (n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : m.NW.string(m.t.R0RpRU), i.ToastType.FAILURE)), null
    }) && t) {
    let e = null != n.dueAt ? m.NW.string(m.t.D0tS09) : m.NW.string(m.t["5KOMiY"]),
      t = null != n.dueAt ? i.ToastType.CLOCK : i.ToastType.BOOKMARK;
    (0, i.showToast)((0, i.createToast)(e, t))
  }
}
/** Chunk was on 76282 **/
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(570140),
  l = n(317770),
  a = n(175281),
  s = n(285371);
class c extends l.Z {
  _initialize() {
    o.Z.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), o.Z.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  _terminate() {
    o.Z.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), o.Z.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  showKeyboardShortcuts() {
    (0, i.h7j)(e => (0, r.jsx)(a.Z, function(e) {
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
    }({}, e)), {
      modalKey: s.J
    })
  }
  hideKeyboardShortcuts() {
    (0, i.Mr3)(s.J)
  }
}
let u = new c
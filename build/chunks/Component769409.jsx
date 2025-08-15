/** Chunk was on 66866 **/
/** chunk id: 769409, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");
let s = (e, t) => {
  let s = "group-dm-edit-modal-".concat(e),
    c = false,
    u = e => {
      c = e
    },
    d = () => {
      c ? l.Z.show({
        title: o.intl.string(o.t.pvRCSk),
        body: o.intl.string(o.t.DRi46e),
        confirmText: o.intl.string(o.t["6GQDFh"]),
        confirmVariant: "critical-primary",
        cancelText: o.intl.string(o.t.DmDzZG),
        onConfirm: () => (0, i.Mr3)(s),
        onCancel: a.dG
      }) : (0, i.Mr3)(s)
    };
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await n.e("41259").then(n.bind(n, 912114));
    return n => (0, r.jsx)(i, function(e) {
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
      closeOrShowDiscardChangesAlert: d,
      setHasPendingChanges: u,
      channelId: e,
      location: t
    }, n))
  }, {
    modalKey: s,
    onCloseRequest: d
  })
}
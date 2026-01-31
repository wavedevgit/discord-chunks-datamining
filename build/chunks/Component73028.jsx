/** Chunk was on 61222 **/
/** chunk id: 73028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx");
let s = (e, t) => {
  let s = "group-dm-edit-modal-".concat(e),
    c = false,
    u = e => {
      c = e
    },
    E = () => {
      c ? l.A.show({
        title: a.intl.string(a.t.pvRCSu),
        body: a.intl.string(a.t.DRi46S),
        confirmText: a.intl.string(a.t["6GQDFu"]),
        confirmVariant: "critical-primary",
        cancelText: a.intl.string(a.t.DmDzZB),
        onConfirm: () => (0, i.OoC)(s),
        onCancel: o.tE
      }) : (0, i.OoC)(s)
    };
  (0, i.mMO)(async () => {
    let {
      default: i
    } = await n.e("42455").then(n.bind(n, 66442));
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
      closeOrShowDiscardChangesAlert: E,
      setHasPendingChanges: u,
      channelId: e,
      location: t
    }, n))
  }, {
    modalKey: s,
    onCloseRequest: E
  })
}
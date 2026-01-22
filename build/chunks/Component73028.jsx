/** Chunk was on web.js **/
/** chunk id: 73028, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = (e, t) => {
  let l = "group-dm-edit-modal-".concat(e),
    u = false,
    d = e => {
      u = e
    },
    f = () => {
      u ? a.A.show({
        title: o.intl.string(o.t.pvRCSu),
        body: o.intl.string(o.t.DRi46S),
        confirmText: o.intl.string(o.t["6GQDFu"]),
        confirmVariant: "critical-primary",
        cancelText: o.intl.string(o.t.DmDzZB),
        onConfirm: () => (0, i.OoC)(l),
        onCancel: s.tE
      }) : (0, i.OoC)(l)
    };
  (0, i.mMO)(async () => {
    let {
      default: i
    } = await n.e("42455").then(n.bind(n, 66442));
    return n => (0, r.jsx)(i, c({
      closeOrShowDiscardChangesAlert: f,
      setHasPendingChanges: d,
      channelId: e,
      location: t
    }, n))
  }, {
    modalKey: l,
    onCloseRequest: f
  })
}
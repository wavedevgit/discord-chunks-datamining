/** Chunk was on web.js **/
/** chunk id: 769409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx");

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
      u ? a.Z.show({
        title: s.intl.string(s.t.pvRCSu),
        body: s.intl.string(s.t.DRi46S),
        confirmText: s.intl.string(s.t["6GQDFu"]),
        confirmVariant: "critical-primary",
        cancelText: s.intl.string(s.t.DmDzZB),
        onConfirm: () => (0, i.Mr3)(l),
        onCancel: o.dG
      }) : (0, i.Mr3)(l)
    };
  (0, i.ZDy)(async () => {
    let {
      default: i
    } = await n.e("41259").then(n.bind(n, 912114));
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
/** Chunk was on web.js **/
/** chunk id: 952306, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk723359 = require("./723359.js"),
  Chunk231338 = require("./231338.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let c = {
  openNewUserAgeGateModal: e => {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("76323").then(n.bind(n, 298237));
      return t => (0, r.jsx)(e, l({}, t))
    }, {
      modalKey: a.$$,
      onCloseRequest: o.dG,
      onCloseCallback: e
    })
  },
  openClaimAccountModal: function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      t = arguments.length > 1 ? arguments[1] : true;
    (0, i.ZDy)(async () => {
      let {
        default: t
      } = await n.e("60827").then(n.bind(n, 324239));
      return n => (0, r.jsx)(t, l({
        claimRequired: e
      }, n))
    }, {
      onCloseRequest: e ? o.dG : null,
      onCloseCallback: t
    })
  }
}
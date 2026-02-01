/** Chunk was on 9207 **/
/** chunk id: 521933, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk204925 = require("./204925.js"),
  Chunk818348 = require("./818348.js");

function a(e) {
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
}
let o = {
  openNewUserAgeGateModal: e => {
    (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("1143").then(n.bind(n, 284778));
      return t => (0, r.jsx)(e, a({}, t))
    }, {
      modalKey: l.jc,
      onCloseRequest: s.tE,
      onCloseCallback: e
    })
  },
  openClaimAccountModal: function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      t = arguments.length > 1 ? arguments[1] : true;
    (0, i.mMO)(async () => {
      let {
        default: t
      } = await n.e("27672").then(n.bind(n, 888363));
      return n => (0, r.jsx)(t, a({
        claimRequired: e
      }, n))
    }, {
      onCloseRequest: e ? s.tE : null,
      onCloseCallback: t
    })
  }
}
/** Chunk was on 75708 **/
/** chunk id: 952306, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk723359 = require("./723359.js"),
  Chunk231338 = require("./231338.js");

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
let o = {
  openNewUserAgeGateModal: e => {
    (0, r.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("6583"), n.e("1337"), n.e("89865")]).then(n.bind(n, 298237));
      return t => <e{...l({}, t)} />
    }, {
      modalKey: s.$$,
      onCloseRequest: a.dG,
      onCloseCallback: e
    })
  },
  openClaimAccountModal: function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      t = arguments.length > 1 ? arguments[1] : true;
    (0, Chunk481060.ZDy)(async () => {
      let {
        default: t
      } = await require.e("60827").then(require.bind(require, 324239));
      return n => <t{...l({
        claimRequired: e
      }, n)} />
    }, {
      onCloseRequest: module ? Chunk231338.dG : null,
      onCloseCallback: exports
    })
  }
}
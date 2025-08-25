/** Chunk was on 1272 **/
/** chunk id: 518596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk37234 = require("./37234.js"),
  Chunk526665 = require("./526665.js"),
  Chunk981631 = require("./981631.js");

function c() {
  var e;
  arguments.length > 0 && true !== arguments[0] && arguments[0];
  let t = arguments.length > 1 ? arguments[1] : true;
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_MODAL_OPEN",
    section: null != (e = null == exports ? true : exports.section) ? module : null,
    subsection: null == exports ? true : exports.subsection,
    openWithoutBackstack: false
  }), (0, Chunk526665.yP)("openUserSettings") ? (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([require.e("76210"), require.e("94827")]).then(require.bind(require, 245286));
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
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, t))
  }, {
    modalKey: "USER_SETTINGS_MODAL_MODAL_KEY"
  }) : (0, Chunk37234.jN)(Chunk981631.S9g.USER_SETTINGS)
}
/** Chunk was on 1272 **/
/** chunk id: 838195, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk531826 = require("./531826.js");

function s(e) {
  let {
    applicationId: t,
    channelId: s,
    mediaUrl: o
  } = e, c = l.Z.getApplication(t), u = null != (0, a.ZP)({
    application: c,
    channelId: s
  }) ? i.u1M : i.z1l;
  (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("4530"), n.e("79678")]).then(n.bind(n, 899201));
    return n => (0, r.jsx)(e, function(e) {
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
      applicationId: t,
      mediaUrl: o
    }, n))
  }, {
    modalKey: "activity-share-moment-modal",
    contextKey: u
  })
}
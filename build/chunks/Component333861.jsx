/** Chunk was on 1272 **/
/** chunk id: 333861, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => a,
  s: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js");
let l = "command-share-modal";

function a(e) {
  let {
    applicationId: t,
    channel: a,
    command: o,
    previewMessage: s,
    requireLaunchChannel: c,
    contextKey: u,
    onShareResult: d
  } = e;
  (0, i.ZDy)(async () => {
    let {
      ApplicationCommandShareModal: e
    } = await n.e("53682").then(n.bind(n, 683958));
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
      channel: a,
      command: o,
      previewMessage: s,
      onShareResult: d,
      requireLaunchChannel: c
    }, n))
  }, {
    modalKey: l,
    contextKey: u,
    onCloseCallback: () => {
      d(false)
    }
  })
}
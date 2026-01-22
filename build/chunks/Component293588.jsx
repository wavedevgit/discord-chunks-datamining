/** Chunk was on 21738 **/
/** chunk id: 293588, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => l,
  m: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js");
let l = "command-share-modal";

function a(e) {
  let {
    applicationId: t,
    channel: a,
    command: s,
    previewMessage: o,
    requireLaunchChannel: c,
    contextKey: u,
    onShareResult: d
  } = e;
  (0, i.mMO)(async () => {
    let {
      ApplicationCommandShareModal: e
    } = await n.e("33885").then(n.bind(n, 962156));
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
      command: s,
      previewMessage: o,
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
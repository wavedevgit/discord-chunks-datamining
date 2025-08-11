/** Chunk was on 1272 **/
/** chunk id: 840074, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk531826 = require("./531826.js");

function o(e) {
  let {
    applicationId: t,
    customId: o,
    linkId: s,
    message: c,
    onShare: u
  } = e, d = l.Z.getApplication(t);
  if (null == d) return void u(false, false);
  let p = null != (0, a.jA)({
      applicationId: d.id
    }) ? i.u1M : i.z1l,
    h = false;

  function f(e) {
    u(e, h)
  }

  function g() {
    h = true
  }(0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("83098").then(n.bind(n, 137021));
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
      customId: o,
      linkId: s,
      message: c,
      onCopyLink: g,
      onShare: f
    }, n))
  }, {
    modalKey: "activity-share-moment-modal",
    contextKey: p,
    onCloseCallback: () => {
      u(false, h)
    }
  })
}
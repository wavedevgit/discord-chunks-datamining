/** Chunk was on 21738 **/
/** chunk id: 700475, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk851907 = require("./851907.js");

function s(e) {
  let {
    applicationId: t,
    customId: s,
    linkId: o,
    message: c,
    onShare: u
  } = e, d = l.A.getApplication(t);
  if (null == d) return void u(false, false);
  let p = null != (0, a.LU)({
      applicationId: d.id
    }) ? i.KX8 : i.SYi,
    h = false;

  function f(e) {
    u(e, h)
  }

  function g() {
    h = true
  }(0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("48587").then(n.bind(n, 824774));
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
      customId: s,
      linkId: o,
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
/** Chunk was on 47841 **/
/** chunk id: 615900, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js");

function l(e) {
  let {
    demonetized: t = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.e("46529").then(n.bind(n, 633400));
    return n => (0, r.jsx)(i, function(e) {
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
      guildId: e,
      demonetized: t
    }, n))
  }, {
    onCloseRequest: () => {}
  })
}
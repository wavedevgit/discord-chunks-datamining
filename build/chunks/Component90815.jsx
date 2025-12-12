/** Chunk was on 384 **/
/** chunk id: 90815, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk952265 = require("./952265.js");

function l(e) {
  let {
    demonetized: t = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.e("90220").then(n.bind(n, 418225));
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
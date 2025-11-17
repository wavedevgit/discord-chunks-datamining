/** Chunk was on web.js **/
/** chunk id: 314384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NW: () => a,
  tf: () => i,
  zH: () => o
});
var Chunk473749 = require("./473749.js"),
  i = function(e) {
    return (0, r.useEffect)(e, [])
  },
  a = function() {
    var e = (0, Chunk473749.useState)(0)[1],
      t = (0, Chunk473749.useRef)(false);
    return i(function() {
        return function() {
          exports.current = true
        }
      }),
      function() {
        exports.current || module({})
      }
  };

function o(e) {
  var t = (0, r.useRef)(true);
  return (0, r.useEffect)(function() {
    t.current = e
  }), t.current
}
/** Chunk was on web.js **/
/** chunk id: 314384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NW: () => o,
  tf: () => i,
  zH: () => a
});
var Chunk73800 = require("./73800.js"),
  i = function(e) {
    return (0, r.useEffect)(e, [])
  },
  o = function() {
    var e = (0, Chunk73800.useState)(0)[1],
      t = (0, Chunk73800.useRef)(false);
    return i(function() {
        return function() {
          exports.current = true
        }
      }),
      function() {
        exports.current || module({})
      }
  };

function a(e) {
  var t = (0, r.useRef)(true);
  return (0, r.useEffect)(function() {
    t.current = e
  }), t.current
}
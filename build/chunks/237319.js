/** Chunk was on web.js **/
/** chunk id: 237319, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CH: () => a,
  H5: () => i,
  NQ: () => s
});
var Chunk64700 = require("./64700.js"),
  i = function(e) {
    return (0, r.useEffect)(e, [])
  },
  a = function() {
    var e = (0, r.useState)(0)[1],
      t = (0, r.useRef)(false);
    return i(function() {
        return function() {
          t.current = true
        }
      }),
      function() {
        t.current || e({})
      }
  };

function s(e) {
  var t = (0, r.useRef)(true);
  return (0, r.useEffect)(function() {
    t.current = e
  }), t.current
}
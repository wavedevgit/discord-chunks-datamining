/** Chunk was on web.js **/
/** chunk id: 709943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var r = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};

function i(e) {
  return e.replace(/left|right|bottom|top/g, function(e) {
    return r[e]
  })
}
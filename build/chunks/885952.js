/** Chunk was on web.js **/
/** chunk id: 885952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var r = {
  start: "end",
  end: "start"
};

function i(e) {
  return e.replace(/start|end/g, function(e) {
    return r[e]
  })
}
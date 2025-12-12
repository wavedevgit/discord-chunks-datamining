/** Chunk was on web.js **/
/** chunk id: 636449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => l,
  R: () => s
});
var Chunk570140 = require("./570140.js"),
  Chunk522474 = require("./522474.js"),
  Chunk788983 = require("./788983.js"),
  Chunk981631 = require("./981631.js");

function s() {
  returnfalse
}
async function l(e, t) {
  let n, s = i.Z.getWindowOpen(a.KJ3.ACTIVITY_POPOUT);
  e && !s && r.Z.wait(() => {
    r.Z.dispatch({
      type: "ACTIVITY_POPOUT_WINDOW_OPEN"
    })
  });
  try {
    n = await t()
  } catch (e) {
    n = false
  }
  return !n && e && o.close(a.KJ3.ACTIVITY_POPOUT), n
}
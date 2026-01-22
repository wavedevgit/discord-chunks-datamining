/** Chunk was on web.js **/
/** chunk id: 646865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o,
  w: () => l
});
var Chunk73153 = require("./73153.js"),
  Chunk87001 = require("./87001.js"),
  Chunk574172 = require("./574172.js"),
  Chunk652215 = require("./652215.js");

function o() {
  returnfalse
}
async function l(e, t) {
  let n, o = i.A.getWindowOpen(s.MLl.ACTIVITY_POPOUT);
  e && !o && r.h.wait(() => {
    r.h.dispatch({
      type: "ACTIVITY_POPOUT_WINDOW_OPEN"
    })
  });
  try {
    n = await t()
  } catch (e) {
    n = false
  }
  return !n && e && a.close(s.MLl.ACTIVITY_POPOUT), n
}
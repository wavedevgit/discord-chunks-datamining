/** Chunk was on web.js **/
/** chunk id: 646865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => s,
  w: () => l
});
var Chunk73153 = require("./73153.js"),
  Chunk87001 = require("./87001.js"),
  Chunk574172 = require("./574172.js"),
  Chunk652215 = require("./652215.js");

function s() {
  returnfalse
}
async function l(e, t) {
  let n, s = i.A.getWindowOpen(o.MLl.ACTIVITY_POPOUT);
  e && !s && r.h.wait(() => {
    r.h.dispatch({
      type: "ACTIVITY_POPOUT_WINDOW_OPEN"
    })
  });
  try {
    n = await t()
  } catch (e) {
    n = false
  }
  return !n && e && a.close(o.MLl.ACTIVITY_POPOUT), n
}
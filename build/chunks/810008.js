/** Chunk was on web.js **/
/** chunk id: 810008, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => a
});
var Chunk994339 = require("./994339.js"),
  Chunk981631 = require("./981631.js");
let o = 25;

function a(e, t, n, a) {
  return !t.hasAnyAfter(e, e => {
    var t;
    return null != e.activity && (null == (t = e.application) ? true : t.id) === n && e.activity.type === i.mFx.JOIN && !(0, r.Z)(a, e, n)
  }, o)
}
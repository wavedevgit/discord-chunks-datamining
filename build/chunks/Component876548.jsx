/** Chunk was on 26628 **/
/** chunk id: 876548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk829750 = require("./829750.js"),
  Chunk280102 = require("./280102.jsx");

function o(e) {
  let {
    channel: t,
    video: n,
    userCount: o
  } = e, {
    limit: s
  } = (0, i.Z)(t), a = false, c = false;
  return t.userLimit > 0 && (a = t.userLimit), n && s > 0 && (c = a < 0 || s < a, a = a > 0 ? Math.min(a, s) : s), (0, r.jsx)(l.Z, {
    users: o,
    total: a,
    videoLimit: c
  })
}
/** Chunk was on 97492 **/
/** chunk id: 884415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk405018 = require("./405018.js"),
  Chunk697415 = require("./697415.jsx");

function a(e) {
  let {
    channel: t,
    video: n,
    userCount: a
  } = e, {
    limit: s
  } = (0, l.A)(t), o = false, c = false;
  return t.userLimit > 0 && (o = t.userLimit), n && s > 0 && (c = o < 0 || s < o, o = o > 0 ? Math.min(o, s) : s), (0, r.jsx)(i.A, {
    users: a,
    total: o,
    videoLimit: c
  })
}
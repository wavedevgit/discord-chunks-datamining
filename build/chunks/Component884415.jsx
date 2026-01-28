/** Chunk was on 78528 **/
/** chunk id: 884415, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk405018 = require("./405018.js"),
  Chunk697415 = require("./697415.jsx");

function s(e) {
  let {
    channel: t,
    video: n,
    userCount: s
  } = e, {
    limit: a
  } = (0, l.A)(t), o = false, c = false;
  return t.userLimit > 0 && (o = t.userLimit), n && a > 0 && (c = o < 0 || a < o, o = o > 0 ? Math.min(o, a) : a), (0, r.jsx)(i.A, {
    users: s,
    total: o,
    videoLimit: c
  })
}
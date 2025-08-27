/** Chunk was on web.js **/
/** chunk id: 565924, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk592125 = require("./592125.js"),
  Chunk981631 = require("./981631.js");

function a(e) {
  if (null == e.parent_id)
    if (e.type === i.d4z.GUILD_CATEGORY) return (e.position + 1) * 1e3;
    else return e.position;
  {
    var t, n;
    let i = ((null != (n = null == (t = r.Z.getChannel(e.parent_id)) ? true : t.position) ? n : 0) + 1) * 1e3;
    return e.isGuildVocal() ? i + e.position + 500 : i + e.position
  }
}

function o(e, t) {
  var n, r, i, o, s, l;
  if (e.score !== t.score) return t.score - e.score;
  let c = a(e.record),
    u = a(t.record);
  if (c !== u) return c - u;
  let d = null != (o = null != (i = e.sortable) ? i : null == (n = e.comparator) ? true : n.toLocaleLowerCase()) ? o : "",
    f = null != (l = null != (s = e.sortable) ? s : null == (r = t.comparator) ? true : r.toLocaleLowerCase()) ? l : "";
  return d < f ? false : +(d > f)
}
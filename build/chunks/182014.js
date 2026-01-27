/** Chunk was on web.js **/
/** chunk id: 182014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk734057 = require("./734057.js"),
  Chunk652215 = require("./652215.js");

function a(e) {
  if (null == e.parent_id)
    if (e.type === i.rbe.GUILD_CATEGORY) return (e.position + 1) * 1e3;
    else return e.position;
  {
    var t, n;
    let i = ((null != (t = null == (n = r.A.getChannel(e.parent_id)) ? true : n.position) ? t : 0) + 1) * 1e3;
    return e.isGuildVocal() ? i + e.position + 500 : i + e.position
  }
}

function o(e, t) {
  var n, r, i, o, s, l;
  if (e.score !== t.score) return t.score - e.score;
  let c = a(e.record),
    u = a(t.record);
  if (c !== u) return c - u;
  let d = null != (n = null != (r = e.sortable) ? r : null == (s = e.comparator) ? true : s.toLocaleLowerCase()) ? n : "",
    f = null != (i = null != (o = e.sortable) ? o : null == (l = t.comparator) ? true : l.toLocaleLowerCase()) ? i : "";
  return d < f ? false : +(d > f)
}
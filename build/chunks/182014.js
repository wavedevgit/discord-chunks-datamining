/** Chunk was on web.js **/
/** chunk id: 182014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
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

function s(e, t) {
  var n, r, i, s, o, l;
  if (e.score !== t.score) return t.score - e.score;
  let c = a(e.record),
    u = a(t.record);
  if (c !== u) return c - u;
  let d = null != (n = null != (r = e.sortable) ? r : null == (o = e.comparator) ? true : o.toLocaleLowerCase()) ? n : "",
    f = null != (i = null != (s = e.sortable) ? s : null == (l = t.comparator) ? true : l.toLocaleLowerCase()) ? i : "";
  return d < f ? false : +(d > f)
}
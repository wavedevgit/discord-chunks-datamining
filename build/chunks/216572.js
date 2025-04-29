/** Chunk was on 49131 **/
"use strict";
n.d(t, {
  Q_: () => a,
  wL: () => s
});
var r = n(442837),
  i = n(592125),
  l = n(430824);

function a(e) {
  return (0, r.e7)([l.Z], () => {
    let t = l.Z.getGuild(e);
    return null != t && t.getModeratorReportingEnabled() && null != t.getModeratorReportChannelId()
  })
}

function s(e) {
  var t;
  let n = (t = e.guild_id, (0, r.e7)([l.Z], () => {
      var e;
      let n = null != t ? l.Z.getGuild(t) : null;
      return null == n ? null : null != (e = n.getModeratorReportChannelId()) ? e : null
    })),
    a = (0, r.e7)([i.Z], () => i.Z.getChannel(null == e ? void 0 : e.parent_id));
  return ((null == e ? void 0 : e.id) != null || (null == a ? void 0 : a.id) != null) && ((null == e ? void 0 : e.id) === n || (null == a ? void 0 : a.id) === n)
}
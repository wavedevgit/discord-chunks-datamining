/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => d
});
var r = n(201895),
  i = n(933557),
  s = n(592125),
  a = n(699516),
  l = n(594174),
  o = n(293810),
  c = n(981631),
  A = n(388032);

function d(e) {
  switch (e.ref_type) {
    case o.Qs.CHANNEL: {
      let t = s.Z.getChannel(e.ref_id);
      return null != t ? function(e) {
        let t = (0, i.F6)(e, l.default, a.Z);
        switch (e.type) {
          case c.d4z.GUILD_VOICE:
            return A.NW.formatToPlainString(A.t.bkpadH, {
              channelName: t
            });
          case c.d4z.GUILD_STAGE_VOICE:
            return A.NW.formatToPlainString(A.t.TPPk2d, {
              channelName: t
            });
          default:
            return (0, r.ZP)({
              channel: e
            })
        }
      }(t) : ""
    }
    case o.Qs.INTANGIBLE:
      var t;
      return null !== (t = e.name) && void 0 !== t ? t : ""
  }
}
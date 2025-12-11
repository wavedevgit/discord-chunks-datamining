/** Chunk was on 41700 **/
/** chunk id: 296797, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk473749 = require("./473749.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk89425 = require("./89425.js"),
  Chunk197386 = require("./197386.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let {
    onTransition: t
  } = e;
  r.useEffect(() => {
    async function e(e) {
      let {
        location: n
      } = e, r = (0, s.p)(n);
      if (null == r || !(0, o.Z)(r)) return;
      l.Z.getVoiceChannelId() !== r && await (0, c.Z)({
        channelId: r
      });
      let a = i.Z.getChannel(r),
        u = null == a ? true : a.guild_id;
      setTimeout(() => {
        (0, d.Z)(u, n), null == t || t()
      }, 0)
    }
    return a.S.subscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e), () => {
      a.S.unsubscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e)
    }
  }, [t])
}
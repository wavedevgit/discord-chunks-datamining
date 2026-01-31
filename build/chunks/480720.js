/** Chunk was on 17534 **/
/** chunk id: 480720, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk64700 = require("./64700.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk969151 = require("./969151.js"),
  Chunk108959 = require("./108959.js"),
  Chunk90804 = require("./90804.js"),
  Chunk748975 = require("./748975.js"),
  Chunk652215 = require("./652215.js");

function h(e) {
  let {
    onTransition: t
  } = e;
  r.useEffect(() => {
    async function e(e) {
      let {
        location: n
      } = e, r = (0, a.H)(n);
      if (null == r || !(0, o.A)(r)) return;
      i.A.getVoiceChannelId() !== r && await (0, c.A)({
        channelId: r
      });
      let s = l.A.getChannel(r),
        d = null == s ? true : s.guild_id;
      setTimeout(() => {
        (0, u.A)(d, n), null == t || t()
      }, 0)
    }
    return s._.subscribe(d.jej.OPEN_EMBEDDED_ACTIVITY, e), () => {
      s._.unsubscribe(d.jej.OPEN_EMBEDDED_ACTIVITY, e)
    }
  }, [t])
}
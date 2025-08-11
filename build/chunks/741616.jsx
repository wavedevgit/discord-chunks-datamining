/** Chunk was on 34779 **/
/** chunk id: 741616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk358652 = require("./358652.js"),
  Chunk19780 = require("./19780.js"),
  Chunk919436 = require("./919436.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  (0, Chunk442837.e7)([Chunk592125.Z], () => Chunk592125.Z.getPrivateChannelsVersion());
  let e = Chunk592125.Z.getMutablePrivateChannels(),
    t = (0, Chunk442837.Wu)([Chunk358652.Z], () => Chunk358652.Z.getUnreadPrivateChannelIds()),
    {
      selectedVoiceGuildId: n,
      selectedVoiceChannelId: p
    } = (0, Chunk442837.cj)([Chunk19780.Z], () => ({
      selectedVoiceGuildId: Chunk19780.Z.getGuildId(),
      selectedVoiceChannelId: Chunk19780.Z.getChannelId()
    })),
    f = exports.map(t => {
      let n = e[t];
      return null == n || n.id === p ? null : <d.Z channel={n} />
    }),
    g = null == require && null != p ? module[p] : null;
  return null != g && f.unshift(<Chunk919436.Z channel={g} />), <Chunk481060.Kqy id={"guild-list-unread-dms"} role={"group"} aria-label={Chunk388032.intl.string(Chunk388032.t.YUU0RE)} gap={"xs"} hidden={f.length < 1}><Chunk215569.W component={Chunk73800.Fragment}>{f}</Chunk215569.W></Chunk481060.Kqy>
}
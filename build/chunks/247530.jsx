/** Chunk was on 1272 **/
/** chunk id: 247530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk872810 = require("./872810.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.js");

function c(e) {
  let {
    applicationStreams: t
  } = e;
  return t.map(e => {
    let {
      stream: t,
      streamUser: n
    } = e;
    return <i.sNh id={"spectate-".concat(t.ownerId)} action={() => {
        l.default.selectVoiceChannel(t.channelId), (0, a.iV)(t)
      }} label={s.intl.formatToPlainString(s.t.m09d0d, {
        streamerName: o.ZP.getName(n)
      })} />
  })
}
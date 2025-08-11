/** Chunk was on 34779 **/
/** chunk id: 561788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk430824 = require("./430824.js"),
  Chunk73566 = require("./73566.js");

function c(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([s.Z], () => s.Z.getGuild(t.guild_id)), c = (0, o.KS)(t, n);
  return null == c ? null : <div className={a.popoutHeader}>{<c className={a.channelIcon} />}{<l.Text variant={"text-md/semibold"} color={"interactive-normal"} className={a.channelName}>{t.name}</l.Text>}</div>
}
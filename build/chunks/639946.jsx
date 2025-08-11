/** Chunk was on 27978 **/
/** chunk id: 639946, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => c
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk742593 = require("./742593.js"),
  Chunk944072 = require("./944072.js");

function a(e) {
  let {
    channel: t
  } = e, n = (0, l.Th)(t.type);
  return <div className={s.channelInfoContainer}>{null != n ? <n color={"currentColor"} size={"custom"} width={20} height={20} /> : null}{<i.Text className={s.channelInfoText} color={"none"} variant={"text-sm/semibold"}>{t.name}</i.Text>}</div>
}

function c(e) {
  let {
    channel: t,
    guildScheduledEvent: n
  } = e;
  return <div className={s.container}>{<o.HZ className={s.statusContainer} guildId={n.guild_id} guildEvent={n} eventPreview={n} />}{<o.Rf name={n.name} description={n.description} guildId={n.guild_id} />}{null != t && n.channel_id === t.id ? <a channel={t} /> : null}</div>
}
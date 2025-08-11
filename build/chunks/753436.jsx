/** Chunk was on 11776 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk971082 = require("./971082.js"),
  Chunk817053 = require("./817053.js"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk467514 = require("./467514.js"),
  Chunk987278 = require("./987278.js");

function d(e) {
  let {
    game: t,
    userId: n,
    guildId: d,
    channelId: u,
    loading: f = false,
    disableInteraction: m = false
  } = e, p = (0, o.Z)(t.applicationId), g = p.length > 0;
  return f ? <div className={c.loadingCover} /> : <div className={s.container}>{<i.Z imageSrc={t.imageSrc} gameName={t.gameName} applicationId={t.applicationId} userId={n} disableInteraction={m} className={g ? s.socialProofBackdrop : true} />}{g && <l.Z label={a.intl.formatToPlainString(a.t.ujhJdH, {
        numFriends: p.length
      })} className={s.socialProof} users={p} guildId={d} channelId={u} visuallyHideLabel={true} />}</div>
}
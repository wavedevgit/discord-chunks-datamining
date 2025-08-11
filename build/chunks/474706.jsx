/** Chunk was on 75708 **/
/** chunk id: 474706, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk987209 = require("./987209.js"),
  Chunk286961 = require("./286961.js"),
  Chunk897942 = require("./897942.js"),
  Chunk263562 = require("./263562.js");

function u() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    {
      claimableRewards: t
    } = (0, Chunk987209.wD)(),
    n = (0, Chunk286961.Z)(),
    u = null == require ? true : require.planSelection;
  return null == u || null == exports || 0 === exports.length ? null : <div className={Chunk263562.container}>{<div className={Chunk263562.avatar}><Chunk897942.Z maxRewardImageSrc={u.getImageUrl(true, module)} claimableRewards={exports} size={Chunk481060.EFr.SIZE_48} /></div>}{<div className={Chunk263562.textSection}>{<Chunk481060.Text variant={"text-md/medium"} color={"text-primary"}>{u.heading()}</Chunk481060.Text>}{null != u.subheading && exports.length > 1 && <Chunk481060.Text variant={"text-md/medium"} className={Chunk263562.subheading}>{u.subheading(exports.length)}</Chunk481060.Text>}</div>}</div>
}
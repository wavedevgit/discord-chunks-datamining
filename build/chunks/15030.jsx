/** Chunk was on 22988 **/
/** chunk id: 15030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk725803 = require("./725803.js"),
  Chunk266454 = require("./266454.js"),
  Chunk999382 = require("./999382.js"),
  Chunk614342 = require("./614342.js"),
  Chunk303737 = require("./303737.js"),
  Chunk618748 = require("./618748.js"),
  Chunk500395 = require("./500395.js"),
  Chunk975464 = require("./975464.js"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk94072 = require("./94072.js");

function j() {
  let e, t = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    {
      application: n,
      loading: j
    } = (0, Chunk725803.Z)(null == exports ? true : exports.id, Chunk674563.wW.GUILD_ROLE_SUBSCRIPTIONS),
    v = Chunk73800.useRef(null),
    _ = (0, Chunk614342.Z)(null != exports ? exports : true);
  Chunk73800.useEffect(() => {
    null != exports && (0, Chunk303737.sO)(exports) && (0, Chunk266454.Q3)(Chunk704215.z.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
  }, [exports]);
  let O = (null == exports ? true : exports.features.has(Chunk981631.oNc.CREATOR_MONETIZABLE)) === false && (null == exports ? true : exports.features.has(Chunk981631.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) === false;
  return e = null == exports || j ? <Chunk481060.$jN /> : null != _ ? <Chunk500395.Z guild={exports} config={_} /> : O ? <Chunk975464.Z guild={exports} /> : <Chunk618748.Z guild={exports} application={require} />, <div className={Chunk94072.settingsColumn}><div className={Chunk94072.settingsContainer}><Chunk481060.w0Z className={Chunk94072.settingsScroller}><main ref={v} className={Chunk94072.settingsContent}><Chunk481060.JcV containerRef={v}>{module}</Chunk481060.JcV></main></Chunk481060.w0Z></div></div>
}
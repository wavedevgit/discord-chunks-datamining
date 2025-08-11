/** Chunk was on 75708 **/
/** chunk id: 954756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk809206 = require("./809206.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk321114 = require("./321114.js"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk330055 = require("./330055.js"),
  Chunk25990 = require("./25990.js"),
  Chunk695346 = require("./695346.js"),
  Chunk647699 = require("./647699.js"),
  Chunk155433 = require("./155433.js"),
  Chunk388032 = require("./388032.jsx");

function b() {
  let e = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.getIsSubmitDisabled()),
    t = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.getErrors()),
    [n, b] = Chunk73800.useState(false),
    x = Chunk73800.useMemo(() => (null == exports ? true : exports.message) != null ? null == exports ? true : exports.message : Object.keys(null != exports ? exports : {}).length > 0 ? Chunk388032.intl.string(Chunk388032.t["84MExs"]) : null, [exports]),
    _ = Chunk73800.useCallback(async () => {
      var e, t, n, i, r;
      b(true);
      let s = Chunk25990.Z.getAllPending(),
        l = (0, Chunk164946.ED)(Chunk442837),
        f = (0, Chunk164946.g9)(Chunk442837),
        x = (0, Chunk164946.jE)(Chunk442837),
        _ = true;
      if (Object.keys(Chunk852860).length > 0) {
        let i = await (0, Chunk809206.Mn)(Chunk852860);
        if (_ = _ && null != (t = null == Chunk255367 ? true : Chunk255367.ok) && exports, null == Chunk255367 ? true : Chunk255367.ok) {
          let e = Chunk255367.body;
          true !== Chunk442837.pendingAvatar && (0, Chunk330055.Z)({
            avatarHash: module.avatar,
            avatarId: Chunk852860.avatarId,
            avatarAssetOrigin: null == (n = Chunk442837.pendingAvatar) ? true : require.assetOrigin
          }), (0, Chunk809206.si)()
        } else(null == Chunk255367 || null == (e = Chunk255367.body) ? true : module.username) != null && (0, Chunk155433.P)()
      }
      if (Object.keys(Chunk388032).length > 0) {
        let e = await (0, Chunk350327.Z)(Chunk388032);
        _ = _ && null != (i = null == module ? true : module.ok) && Chunk255367, (null == module ? true : module.ok) ? (0, Chunk350327.pG)() : (0, Chunk647699.r)()
      }
      if (true !== Chunk442837.pendingLegacyUsernameDisabled) try {
        await Chunk695346.R_.updateSetting(Chunk442837.pendingLegacyUsernameDisabled), (0, Chunk809206.iR)()
      } catch (e) {
        (0, Chunk647699.r)(), _ = false
      }
      if (Object.keys(x).length > 0) {
        let {
          primaryGuildId: e
        } = x;
        if (true !== module) {
          let t = await (0, Chunk321114.c)(module, null !== module);
          _ = _ && null != (r = null == exports ? true : exports.ok) && Chunk73800, (null == exports ? true : exports.ok) ? (0, Chunk809206.OU)() : (0, Chunk647699.r)()
        }
      }
      _ && (0, Chunk809206.b9)(), b(false)
    }, []),
    j = Chunk73800.useCallback(() => {
      (0, Chunk809206.W3)()
    }, []);
  return (0, Chunk255367.jsx)(Chunk852860.Z, {
    submitting: require,
    onSave: _,
    onReset: j,
    disabled: module,
    errorMessage: null != x ? x : true
  })
}
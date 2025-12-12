/** Chunk was on web.js **/
/** chunk id: 954756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk809206 = require("./809206.js"),
  Chunk321114 = require("./321114.js"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk330055 = require("./330055.js"),
  Chunk25990 = require("./25990.js"),
  Chunk695346 = require("./695346.js"),
  Chunk647699 = require("./647699.js"),
  Chunk155433 = require("./155433.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  let e = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.getIsSubmitDisabled()),
    t = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.getErrors()),
    [n, g] = Chunk473749.useState(false),
    E = Chunk473749.useMemo(() => (null == exports ? true : exports.message) != null ? null == exports ? true : exports.message : Object.keys(null != exports ? exports : {}).length > 0 ? Chunk388032.intl.string(Chunk388032.t["84MExs"]) : null, [exports]),
    b = Chunk473749.useCallback(async () => {
      var e, t, n, r, i;
      g(true);
      let o = Chunk25990.Z.getAllPending(),
        a = (0, Chunk164946.ED)(Chunk442837),
        h = (0, Chunk164946.g9)(Chunk442837),
        E = (0, Chunk164946.jE)(Chunk442837),
        b = true;
      if (Object.keys(Chunk796027).length > 0) {
        let r = await (0, Chunk809206.Mn)(Chunk796027);
        if (b = b && null != (t = null == Chunk54381 ? true : Chunk54381.ok) && exports, null == Chunk54381 ? true : Chunk54381.ok) {
          let e = Chunk54381.body;
          true !== Chunk442837.pendingAvatar && (0, Chunk330055.Z)({
            avatarHash: module.avatar,
            avatarId: Chunk796027.avatarId,
            avatarAssetOrigin: null == (n = Chunk442837.pendingAvatar) ? true : require.assetOrigin
          }), (0, Chunk809206.si)()
        } else(null == Chunk54381 || null == (e = Chunk54381.body) ? true : module.username) != null && (0, Chunk155433.P)()
      }
      if (Object.keys(Chunk388032).length > 0) {
        let e = await (0, Chunk350327.Z)(Chunk388032);
        b = b && null != (r = null == module ? true : module.ok) && Chunk54381, (null == module ? true : module.ok) ? (0, Chunk350327.pG)() : (0, Chunk647699.r)()
      }
      if (true !== Chunk442837.pendingLegacyUsernameDisabled) try {
        await Chunk695346.R_.updateSetting(Chunk442837.pendingLegacyUsernameDisabled), (0, Chunk809206.iR)()
      } catch (e) {
        (0, Chunk647699.r)(), b = false
      }
      if (Object.keys(E).length > 0) {
        let {
          primaryGuildId: e
        } = E;
        if (true !== module) {
          let t = await (0, Chunk321114.c)(module, null !== module);
          b = b && null != (i = null == exports ? true : exports.ok) && Chunk473749, (null == exports ? true : exports.ok) ? (0, Chunk809206.OU)() : (0, Chunk647699.r)()
        }
      }
      b && (0, Chunk809206.b9)(), g(false)
    }, []),
    y = Chunk473749.useCallback(() => {
      (0, Chunk809206.W3)()
    }, []);
  return (0, Chunk54381.jsx)(Chunk796027.Z, {
    submitting: require,
    onSave: b,
    onReset: y,
    disabled: module,
    errorMessage: null != E ? E : true
  })
}
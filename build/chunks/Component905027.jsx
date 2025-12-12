/** Chunk was on web.js **/
/** chunk id: 905027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk330055 = require("./330055.js"),
  Chunk647699 = require("./647699.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk388032 = require("./388032.jsx");

function _() {
  let e = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getIsSubmitDisabled()),
    t = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getGuild()),
    n = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getErrors()),
    [_, m] = Chunk473749.useState(false),
    h = Chunk473749.useMemo(() => (null == require ? true : require.message) != null ? null == require ? true : require.message : (null == require ? true : require.guild_tag) !== true && require.guild_tag.length > 0 ? require.guild_tag[0] : Object.keys(null != require ? require : {}).length > 0 ? Chunk388032.intl.string(Chunk388032.t.s35OuK) : null, [require]),
    g = Chunk473749.useCallback(async () => {
      var e, n, r;
      m(true);
      let i = Chunk778825.Z.getAllPending(),
        o = (0, Chunk164946.Jo)(Chunk473749),
        a = (0, Chunk164946.g9)(Chunk473749),
        p = true;
      if (Object.keys(Chunk442837).length > 0) {
        let r = await (0, Chunk18438.iq)(null == exports ? true : exports.id, Chunk442837);
        if (p = Chunk388032 && null != (e = null == Chunk54381 ? true : Chunk54381.ok) && module, null == Chunk54381 ? true : Chunk54381.ok) {
          let e = Chunk54381.body;
          true !== Chunk473749.pendingAvatar && (0, Chunk330055.Z)({
            isGuildProfile: true,
            avatarHash: module.avatar,
            avatarId: Chunk442837.avatarId,
            avatarAssetOrigin: null == (n = Chunk473749.pendingAvatar) ? true : require.assetOrigin
          }), (0, Chunk18438.IO)()
        }
      }
      if (Object.keys(Chunk796027).length > 0) {
        let e = await (0, Chunk350327.Z)(Chunk796027, null == exports ? true : exports.id);
        p = Chunk388032 && null != (r = null == module ? true : module.ok) && Chunk54381, (null == module ? true : module.ok) ? (0, Chunk18438.pG)() : (0, Chunk647699.v)()
      }
      Chunk388032 && (0, Chunk18438.b9)(), m(false)
    }, [null == exports ? true : exports.id]),
    E = Chunk473749.useCallback(() => {
      (0, Chunk18438.W3)()
    }, []);
  return (0, Chunk54381.jsx)(Chunk796027.Z, {
    submitting: _,
    onSave: g,
    onReset: E,
    disabled: module,
    errorMessage: null != h ? h : true
  })
}
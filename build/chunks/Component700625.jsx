/** Chunk was on web.js **/
/** chunk id: 700625, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk164946 = require("./164946.js"),
  Chunk350327 = require("./350327.js"),
  Chunk330055 = require("./330055.js"),
  Chunk647699 = require("./647699.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk388032 = require("./388032.jsx");

function p() {
  let e = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getIsSubmitDisabled()),
    t = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getGuild()),
    n = (0, Chunk442837.e7)([Chunk778825.Z], () => Chunk778825.Z.getErrors()),
    [p, h] = Chunk647438.useState(false),
    m = Chunk647438.useMemo(() => (null == require ? true : require.message) != null ? null == require ? true : require.message : (null == require ? true : require.guild_tag) !== true && require.guild_tag.length > 0 ? require.guild_tag[0] : Object.keys(null != require ? require : {}).length > 0 ? Chunk388032.intl.string(Chunk388032.t.s35OuK) : null, [require]),
    g = Chunk647438.useCallback(async () => {
      var e, n, r;
      h(true);
      let i = Chunk778825.Z.getAllPending(),
        a = (0, Chunk164946.Jo)(Chunk647438),
        o = (0, Chunk164946.g9)(Chunk647438),
        _ = true;
      if (Object.keys(Chunk442837).length > 0) {
        let r = await (0, Chunk18438.iq)(null == exports ? true : exports.id, Chunk442837);
        if (_ = Chunk388032 && null != (e = null == Chunk951288 ? true : Chunk951288.ok) && module, null == Chunk951288 ? true : Chunk951288.ok) {
          let e = Chunk951288.body;
          true !== Chunk647438.pendingAvatar && (0, Chunk330055.Z)({
            isGuildProfile: true,
            avatarHash: module.avatar,
            avatarId: Chunk442837.avatarId,
            avatarAssetOrigin: null == (n = Chunk647438.pendingAvatar) ? true : require.assetOrigin
          }), (0, Chunk18438.IO)()
        }
      }
      if (Object.keys(Chunk852860).length > 0) {
        let e = await (0, Chunk350327.Z)(Chunk852860, null == exports ? true : exports.id);
        _ = Chunk388032 && null != (r = null == module ? true : module.ok) && Chunk951288, (null == module ? true : module.ok) ? (0, Chunk18438.pG)() : (0, Chunk647699.v)()
      }
      Chunk388032 && (0, Chunk18438.b9)(), h(false)
    }, [null == exports ? true : exports.id]),
    E = Chunk647438.useCallback(() => {
      (0, Chunk18438.W3)()
    }, []);
  return (0, Chunk951288.jsx)(Chunk852860.Z, {
    submitting: p,
    onSave: g,
    onReset: E,
    disabled: module,
    errorMessage: null != m ? m : true
  })
}
/** Chunk was on web.js **/
/** chunk id: 915009, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LN: () => v,
  T3: () => b,
  aR: () => S,
  q1: () => y,
  rD: () => O,
  xf: () => E
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk925513 = require("./925513.js"),
  Chunk681678 = require("./681678.js"),
  Chunk722687 = require("./722687.js"),
  Chunk594174 = require("./594174.js"),
  Chunk88658 = require("./88658.js"),
  Chunk260722 = require("./260722.js"),
  Chunk473007 = require("./473007.js"),
  Chunk800651 = require("./800651.js"),
  Chunk277537 = require("./277537.js"),
  Chunk652262 = require("./652262.js"),
  Chunk631885 = require("./631885.js"),
  Chunk484710 = require("./484710.js");
let E = () => {
    let e = (0, Chunk652262.F)(),
      t = Chunk722687.sx.useControlledSetting(null == module ? true : module.id);
    return null == module ? null : {
      explicitContentNonFriendDm: (0, Chunk800651.bE)({
        teenId: null == module ? true : module.id,
        setting: null == exports ? true : exports.explicitContentNonFriendDm
      }),
      explicitContentFriendDm: (0, Chunk800651.bE)({
        teenId: null == module ? true : module.id,
        setting: null == exports ? true : exports.explicitContentFriendDm,
        isFriend: true
      }),
      explicitContentGuilds: Chunk524437.Q4.BLUR
    }
  },
  b = () => {
    let e = (0, Chunk652262.F)(),
      t = Chunk722687.up.useControlledSetting(null == module ? true : module.id);
    if (null == module) return null;
    let {
      goreContentNonFriendDm: n,
      goreContentFriendDm: r
    } = null != exports ? exports : {};
    return {
      goreContentNonFriendDm: (0, Chunk800651.n6)(require) ? require : (0, Chunk925513.zR)({
        isDm: true
      }),
      goreContentFriendDm: (0, Chunk800651.n6)(Chunk473749) ? Chunk473749 : (0, Chunk925513.zR)({
        isDm: true,
        isFriend: true
      }),
      goreContentGuilds: Chunk524437.Q4.BLUR
    }
  },
  y = () => {
    let e = (0, Chunk652262.F)(),
      t = Chunk722687.Ov.useControlledSetting(null == module ? true : module.id),
      n = Chunk722687.vV.useControlledSetting(null == module ? true : module.id);
    return null != require ? require : !!exports || exports
  };

function O() {
  let e = (0, Chunk652262.F)(),
    t = Chunk722687.vB.useControlledSetting(null == module ? true : module.id),
    n = Chunk473749.useMemo(() => (0, Chunk88658.bL)(exports), [exports]);
  return require.mutualGuilds && !require.all
}

function v() {
  let e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    t = (0, Chunk631885.AZ)(),
    n = (0, Chunk277537.PO)("settings-controls");
  return (null == module ? true : module.nsfwAllowed) === false && exports && require
}

function I(e) {
  let t = (0, h.M)();
  return (0, i.e7)([f.Z], () => f.Z.hasConsented(t, e))
}

function T(e) {
  let t = (0, h.M)();
  return r.useCallback(async n => {
    if (null == t) return;
    let r = n ? [e] : [],
      i = n ? [] : [e];
    try {
      await d.ZP.updateTeenConsents(t, r, i)
    } catch (e) {
      s.Z.showFailedToast(g.wQ.GENERIC_ERROR)
    }
  }, [t, e])
}

function S(e) {
  return {
    hasConsented: I(e),
    updateConsent: T(e)
  }
}
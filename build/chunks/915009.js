/** Chunk was on web.js **/
/** chunk id: 915009, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T3: () => d,
  q1: () => f,
  rD: () => _,
  xf: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk524437 = require("./524437.js"),
  Chunk925513 = require("./925513.js"),
  Chunk722687 = require("./722687.js"),
  Chunk88658 = require("./88658.js"),
  Chunk800651 = require("./800651.js"),
  Chunk652262 = require("./652262.js");
let u = () => {
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
  d = () => {
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
      goreContentFriendDm: (0, Chunk800651.n6)(Chunk647438) ? Chunk647438 : (0, Chunk925513.zR)({
        isDm: true,
        isFriend: true
      }),
      goreContentGuilds: Chunk524437.Q4.BLUR
    }
  },
  f = () => {
    let e = (0, Chunk652262.F)(),
      t = Chunk722687.Ov.useControlledSetting(null == module ? true : module.id),
      n = Chunk722687.vV.useControlledSetting(null == module ? true : module.id);
    return null != require ? require : !!exports || exports
  };

function _() {
  let e = (0, Chunk652262.F)(),
    t = Chunk722687.vB.useControlledSetting(null == module ? true : module.id),
    n = Chunk647438.useMemo(() => (0, Chunk88658.bL)(exports), [exports]);
  return require.mutualGuilds && !require.all
}
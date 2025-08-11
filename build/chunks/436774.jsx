/** Chunk was on web.js **/
/** chunk id: 436774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JX: () => l,
  Rj: () => s,
  ZP: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk692547 = require("./692547.js");
let s = Object.freeze({
    PREMIUM_TIER_0: (0, Chunk772848.Z)(),
    PREMIUM_TIER_1: (0, Chunk772848.Z)(),
    PREMIUM_TIER_2: (0, Chunk772848.Z)(),
    PREMIUM_GUILD: (0, Chunk772848.Z)(),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, Chunk772848.Z)()
  }),
  l = {
    PREMIUM_TIER_0: "url(#".concat(s.PREMIUM_TIER_0, ")"),
    PREMIUM_TIER_1: "url(#".concat(s.PREMIUM_TIER_1, ")"),
    PREMIUM_TIER_2: "url(#".concat(s.PREMIUM_TIER_2, ")"),
    PREMIUM_GUILD: "url(#".concat(s.PREMIUM_GUILD, ")"),
    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(s.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
  },
  c = () => <linearGradient id={s.PREMIUM_TIER_0}>{<stop offset={".1762"} stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css} />}{<stop offset={"0.5351"} stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css} />}{<stop offset={"1"} stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css} />}</linearGradient>,
  u = () => <linearGradient id={s.PREMIUM_TIER_1}>{<stop stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css} />}{<stop offset={"1"} stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css} />}</linearGradient>,
  d = () => <linearGradient id={s.PREMIUM_TIER_2}>{<stop stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css} />}{<stop offset={"0.502368"} stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css} />}{<stop offset={"1"} stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css} />}</linearGradient>,
  f = () => <linearGradient id={s.PREMIUM_GUILD}>{<stop stopColor={Chunk692547.Z.unsafe_rawColors.GUILD_BOOSTING_BLUE.css} />}{<stop offset={"1"} stopColor={Chunk692547.Z.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css} />}</linearGradient>,
  _ = () => <linearGradient id={s.PREMIUM_GUILD_BADGE_V2_BACKGROUND} gradientTransform={"rotate(45)"}>{<stop offset={"0"} stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css} />}{<stop offset={"1"} stopColor={Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK.css} />}</linearGradient>,
  p = Chunk73800.memo(function() {
    return <svg viewBox={"0 0 1 1"} style={{
        position: "absolute",
        pointerEvents: "none",
        top: false,
        left: false,
        width: 1,
        height: 1
      }} aria-hidden={true}>{c()}{u()}{d()}{f()}{_()}</svg>
  }, () => true)
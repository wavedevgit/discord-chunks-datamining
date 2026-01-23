/** Chunk was on 96914 **/
/** chunk id: 337322, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => l
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk403362 = require("./403362.js"),
  Chunk473145 = require("./473145.js"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let {
    includeEmojis: t,
    includeStickers: r,
    includeSoundboards: l
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    includeEmojis: true,
    includeStickers: true,
    includeSoundboards: true
  };
  return n.useMemo(() => {
    let n = [],
      d = (0, s.w$)();
    return t && n.push({
      perkIcon: a.TP.EMOJI,
      description: i.intl.formatToPlainString(c.default["NXvV0+"], {
        totalEmojis: e.features.total_emoji_slots,
        additionalEmojis: e.features.additional_emoji_slots
      })
    }), r && n.push({
      perkIcon: a.TP.STICKER,
      description: i.intl.formatToPlainString(c.default.ZEvvPz, {
        totalStickers: e.features.total_sticker_slots,
        additionalStickers: e.features.additional_sticker_slots
      })
    }), l && n.push({
      perkIcon: a.TP.SOUNDBOARD,
      description: i.intl.formatToPlainString(c.default["s9u/E7"], {
        totalSoundboards: e.features.total_sound_slots,
        additionalSoundboards: e.features.additional_sound_slots
      })
    }), n.concat(e.features.features.map(e => d[e]).filter(o.Vq))
  }, [e, t, r, l])
}
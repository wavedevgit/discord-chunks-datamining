/** Chunk was on 96914 **/
/** chunk id: 337322, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk403362 = require("./403362.js"),
  Chunk473145 = require("./473145.js"),
  Chunk568065 = require("./568065.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx");

function i(e) {
  let {
    includeEmojis: t,
    includeStickers: r,
    includeSoundboards: i
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    includeEmojis: true,
    includeStickers: true,
    includeSoundboards: true
  };
  return a.useMemo(() => {
    let a = [],
      d = (0, c.w$)();
    return t && a.push({
      perkIcon: s.TP.EMOJI,
      description: l.intl.formatToPlainString(o.default["NXvV0+"], {
        totalEmojis: e.features.total_emoji_slots,
        additionalEmojis: e.features.additional_emoji_slots
      })
    }), r && a.push({
      perkIcon: s.TP.STICKER,
      description: l.intl.formatToPlainString(o.default.ZEvvPz, {
        totalStickers: e.features.total_sticker_slots,
        additionalStickers: e.features.additional_sticker_slots
      })
    }), i && a.push({
      perkIcon: s.TP.SOUNDBOARD,
      description: l.intl.formatToPlainString(o.default["s9u/E7"], {
        totalSoundboards: e.features.total_sound_slots,
        additionalSoundboards: e.features.additional_sound_slots
      })
    }), a.concat(e.features.features.map(e => d[e]).filter(n.Vq))
  }, [e, t, r, i])
}
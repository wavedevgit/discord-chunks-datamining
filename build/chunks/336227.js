/** Chunk was on 99014 **/
/** chunk id: 336227, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk823379 = require("./823379.js"),
  Chunk267642 = require("./267642.js"),
  Chunk535396 = require("./535396.js"),
  Chunk18853 = require("./18853.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    includeEmojis: t,
    includeStickers: o,
    includeSoundboards: l
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    includeEmojis: true,
    includeStickers: true,
    includeSoundboards: true
  };
  return n.useMemo(() => {
    let n = [],
      d = (0, c.d5)();
    return t && n.push({
      perkIcon: a.Ro.EMOJI,
      description: i.intl.formatToPlainString(s.default["NXvV0+"], {
        totalEmojis: e.features.total_emoji_slots,
        additionalEmojis: e.features.additional_emoji_slots
      })
    }), o && n.push({
      perkIcon: a.Ro.STICKER,
      description: i.intl.formatToPlainString(s.default.ZEvvPz, {
        totalStickers: e.features.total_sticker_slots,
        additionalStickers: e.features.additional_sticker_slots
      })
    }), l && n.push({
      perkIcon: a.Ro.SOUNDBOARD,
      description: i.intl.formatToPlainString(s.default["s9u/E7"], {
        totalSoundboards: e.features.total_sound_slots,
        additionalSoundboards: e.features.additional_sound_slots
      })
    }), n.concat(e.features.features.map(e => d[e]).filter(r.lm))
  }, [e, t, o, l])
}
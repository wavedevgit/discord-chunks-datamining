/** Chunk was on 99014 **/
/** chunk id: 336227, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk823379 = require("./823379.js"),
  Chunk267642 = require("./267642.js"),
  Chunk535396 = require("./535396.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.js");

function l(e) {
  let {
    includeEmojis: t,
    includeStickers: n,
    includeSoundboards: l
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
    includeEmojis: true,
    includeStickers: true,
    includeSoundboards: true
  };
  return r.useMemo(() => {
    let r = [],
      u = (0, a.d5)();
    return t && r.push({
      perkIcon: i.Ro.EMOJI,
      description: c.intl.formatToPlainString(s.default.NXvV09, {
        totalEmojis: e.features.total_emoji_slots,
        additionalEmojis: e.features.additional_emoji_slots
      })
    }), n && r.push({
      perkIcon: i.Ro.STICKER,
      description: c.intl.formatToPlainString(s.default.ZEvvPz, {
        totalStickers: e.features.total_sticker_slots,
        additionalStickers: e.features.additional_sticker_slots
      })
    }), l && r.push({
      perkIcon: i.Ro.SOUNDBOARD,
      description: c.intl.formatToPlainString(s.default["s9u/Ex"], {
        totalSoundboards: e.features.total_sound_slots,
        additionalSoundboards: e.features.additional_sound_slots
      })
    }), r.concat(e.features.features.map(e => u[e]).filter(o.lm))
  }, [e, t, n, l])
}
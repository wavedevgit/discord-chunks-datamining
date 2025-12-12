/** Chunk was on web.js **/
/** chunk id: 341561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk588468 = require("./588468.jsx"),
  Chunk125900 = require("./125900.js"),
  Chunk12327 = require("./12327.js"),
  Chunk285651 = require("./285651.js"),
  Chunk268350 = require("./268350.js"),
  Chunk926491 = require("./926491.js"),
  Chunk373228 = require("./373228.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk483360 = require("./483360.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk761652 = require("./761652.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk913235 = require("./913235.js");
let O = 8,
  v = 4,
  S = 4,
  I = 40,
  T = 6;

function C(e, t) {
  return (0, r.jsx)(d.Z, {
    sticker: e,
    isInteracting: t,
    size: 40
  })
}

function A(e) {
  return "".concat(g.Iv).concat(e.name).concat(g.Iv)
}

function N(e) {
  var t;
  let n = e.animated ? "a" : "";
  return e.managed || null == e.id ? "".concat(g.Iv).concat(e.name).concat(g.Iv) : "<".concat(n, ":").concat(null != (t = e.originalName) ? t : e.name, ":").concat(e.id, ">")
}
let P = {
  sentinel: Chunk761652.Iv,
  stores: [Chunk926491.Z],
  matches: (e, t, n, r, i) => n.length > 1,
  queryResults(e, t, n, r, i) {
    let a = r.allowSoundmoji && (0, o.dX)({
        location: "queryResults"
      }),
      c = r.allowStickers || a ? 0 : I,
      u = E.rnv + c,
      {
        emojis: {
          unlocked: d
        }
      } = _.ZP.queryEmojiResults({
        query: n,
        channel: e,
        intention: r.emojiIntention,
        maxCount: u
      });
    if ("-" === n[0]) {
      let e = e => {
        var t;
        return null == (t = e.names) ? true : t.includes(n)
      };
      d = d.filter(e)
    }
    let f = [];
    if (r.allowStickers) {
      (0, l.$p)();
      let t = _.ZP.queryStickers([n], true, [e, (e, t) => t === s.eb.SENDABLE]),
        r = Math.max(v, O - d.length);
      f = t.slice(0, r), "-" === n[0] && (f = t.filter(e => e.sticker.name === n))
    }
    let p = [];
    a && (p = _.ZP.querySoundmoji(n, e).map(e => ({
      sound: e
    })).slice(0, S), "-" === n[0] && (p = p.filter(e => e.sound.name === n)));
    let m = d.slice(0, Math.max(T, u - f.length - p.length));
    return {
      results: {
        emojis: m,
        stickers: f,
        soundmoji: p
      },
      metadata: {
        numEmojiResults: m.length,
        numStickerResults: f.length,
        numSoundmojiResults: p.length
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t,
        stickers: n,
        soundmoji: o
      },
      selectedIndex: a,
      query: s,
      onHover: l,
      onClick: c
    } = e, u = t.length > 0, d = n.length > 0;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, m.HI)({
        query: s,
        selectedIndex: a,
        autocompletes: t,
        onHover: l,
        onClick: c,
        titleWithQuery: b.t.ksAVYt,
        titleWithoutQuery: b.intl.string(b.t.sMOuuS),
        Component: i.ZP.Emoji,
        getProps: e => ({
          emoji: e,
          key: e.id || e.uniqueName || e.name,
          sentinel: g.Iv,
          guild: null != e.guildId ? f.Z.getGuild(e.guildId) : null
        }),
        getQuery: e => "".concat(g.Iv).concat(e),
        key: "emoji"
      }), u && d && (0, r.jsx)(i.ZP.Divider, {
        className: y.divider
      }), (0, m.HI)({
        query: s,
        selectedIndex: a,
        autocompletes: n,
        onHover: l,
        onClick: c,
        titleWithQuery: b.t.uferGG,
        titleWithoutQuery: b.intl.string(b.t["fT+Yjp"]),
        Component: i.ZP.Sticker,
        getProps: e => {
          let {
            comparator: t,
            sticker: n
          } = e;
          return {
            renderSticker: C,
            queryMatch: t !== n.name.toLocaleLowerCase() ? t : true,
            sticker: n,
            key: n.id
          }
        },
        getQuery: e => e,
        key: "stickers",
        indexOffset: t.length,
        headerClassName: u ? y.secondarySection : true
      }), (u || d) && o.length > 0 && (0, r.jsx)(i.ZP.Divider, {
        className: y.divider
      }), (0, m.HI)({
        query: s,
        selectedIndex: a,
        autocompletes: o,
        onHover: l,
        onClick: c,
        titleWithQuery: b.t["0cKBGM"],
        titleWithoutQuery: b.intl.string(b.t.EHlAMc),
        Component: i.ZP.Soundmoji,
        getProps: e => {
          let {
            sound: t
          } = e;
          return {
            sound: t,
            key: t.soundId
          }
        },
        getQuery: e => e,
        key: "soundmoji",
        indexOffset: t.length + n.length,
        headerClassName: u || d ? y.secondarySection : true
      })]
    })
  },
  onSelect(e) {
    let {
      results: {
        emojis: t,
        soundmoji: n,
        stickers: r
      },
      index: i,
      options: o,
      channel: s
    } = e;
    if (i < t.length) {
      let e = t[i];
      return o.insertText(A(e), N(e)), {
        type: h.z2.EMOJI,
        metadata: {
          emojiId: e.id,
          numEmojiResults: t.length,
          numStickerResults: r.length,
          expressionName: e.name,
          isCustom: null != e.id,
          isAnimated: e.animated
        }
      }
    }
    if ((i -= t.length) < r.length) {
      let e = r[i];
      return o.insertText(""), o.sendSticker(e.sticker, u.V0.AUTOCOMPLETE), {
        type: h.z2.STICKER,
        metadata: {
          numEmojiResults: t.length,
          numStickerResults: r.length,
          stickerId: e.sticker.id
        }
      }
    }
    if ((i -= r.length) < n.length) {
      let e = n[i];
      return o.insertText((0, a.Z)(e.sound.guildId, e.sound.soundId)), p.default.track(E.rMx.SOUNDMOJI_SELECT, {
        channel_id: s.id,
        guild_id: s.guild_id,
        sound_guild_id: e.sound.guildId,
        sound_id: e.sound.soundId,
        source: "autocomplete"
      }), {
        type: h.z2.SOUNDMOJI,
        metadata: {
          numEmojiResults: t.length,
          numStickerResults: r.length
        }
      }
    }
    return {
      type: null
    }
  }
}
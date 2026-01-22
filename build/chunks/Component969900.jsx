/** Chunk was on web.js **/
/** chunk id: 969900, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk580424 = require("./580424.jsx"),
  Chunk704591 = require("./704591.js"),
  Chunk937862 = require("./937862.js"),
  Chunk361670 = require("./361670.js"),
  Chunk631576 = require("./631576.js"),
  Chunk679382 = require("./679382.js"),
  Chunk842086 = require("./842086.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk248465 = require("./248465.js"),
  Chunk634788 = require("./634788.jsx"),
  Chunk374803 = require("./374803.js");
require("./827669.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk440874 = require("./440874.js");
let y = 8,
  O = 4,
  A = 4,
  v = 40,
  S = 6;

function I(e, t) {
  return (0, r.jsx)(d.A, {
    sticker: e,
    isInteracting: t,
    size: 40
  })
}

function T(e) {
  return "".concat(":").concat(e.name).concat(":")
}

function C(e) {
  var t;
  let n = e.animated ? "a" : "";
  return e.managed || null == e.id ? "".concat(":").concat(e.name).concat(":") : "<".concat(n, ":").concat(null != (t = e.originalName) ? t : e.name, ":").concat(e.id, ">")
}
let N = {
  sentinel: ":",
  stores: [Chunk679382.A],
  matches: (e, t, n, r, i) => n.length > 1,
  queryResults(e, t, n, r, i) {
    let s = r.allowSoundmoji && (0, a.AA)({
        location: "queryResults"
      }),
      c = r.allowStickers || s ? 0 : v,
      u = g.rs7 + c,
      {
        emojis: {
          unlocked: d
        }
      } = _.Ay.queryEmojiResults({
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
      (0, l.YB)();
      let t = _.Ay.queryStickers([n], true, [e, (e, t) => t === o.Ux.SENDABLE]),
        r = Math.max(O, y - d.length);
      f = t.slice(0, r), "-" === n[0] && (f = t.filter(e => e.sticker.name === n))
    }
    let p = [];
    s && (p = _.Ay.querySoundmoji(n, e).map(e => ({
      sound: e
    })).slice(0, A), "-" === n[0] && (p = p.filter(e => e.sound.name === n)));
    let h = d.slice(0, Math.max(S, u - f.length - p.length));
    return {
      results: {
        emojis: h,
        stickers: f,
        soundmoji: p
      },
      metadata: {
        numEmojiResults: h.length,
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
        soundmoji: a
      },
      selectedIndex: s,
      query: o,
      onHover: l,
      onClick: c
    } = e, u = t.length > 0, d = n.length > 0;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, h.GM)({
        query: o,
        selectedIndex: s,
        autocompletes: t,
        onHover: l,
        onClick: c,
        titleWithQuery: E.t.ksAVYt,
        titleWithoutQuery: E.intl.string(E.t.sMOuuS),
        Component: i.Ay.Emoji,
        getProps: e => ({
          emoji: e,
          key: e.id || e.uniqueName || e.name,
          sentinel: ":",
          guild: null != e.guildId ? f.A.getGuild(e.guildId) : null
        }),
        getQuery: e => "".concat(":").concat(e),
        key: "emoji"
      }), u && d && (0, r.jsx)(i.Ay.Divider, {
        className: b.y
      }), (0, h.GM)({
        query: o,
        selectedIndex: s,
        autocompletes: n,
        onHover: l,
        onClick: c,
        titleWithQuery: E.t.uferGG,
        titleWithoutQuery: E.intl.string(E.t["fT+Yjp"]),
        Component: i.Ay.Sticker,
        getProps: e => {
          let {
            comparator: t,
            sticker: n
          } = e;
          return {
            renderSticker: I,
            queryMatch: t !== n.name.toLocaleLowerCase() ? t : true,
            sticker: n,
            key: n.id
          }
        },
        getQuery: e => e,
        key: "stickers",
        indexOffset: t.length,
        headerClassName: u ? b._ : true
      }), (u || d) && a.length > 0 && (0, r.jsx)(i.Ay.Divider, {
        className: b.y
      }), (0, h.GM)({
        query: o,
        selectedIndex: s,
        autocompletes: a,
        onHover: l,
        onClick: c,
        titleWithQuery: E.t["0cKBGM"],
        titleWithoutQuery: E.intl.string(E.t.EHlAMc),
        Component: i.Ay.Soundmoji,
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
        headerClassName: u || d ? b._ : true
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
      options: a,
      channel: o
    } = e;
    if (i < t.length) {
      let e = t[i];
      return a.insertText(T(e), C(e)), {
        type: m.kc.EMOJI,
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
      return a.insertText(""), a.sendSticker(e.sticker, u.D6.AUTOCOMPLETE), {
        type: m.kc.STICKER,
        metadata: {
          numEmojiResults: t.length,
          numStickerResults: r.length,
          stickerId: e.sticker.id
        }
      }
    }
    if ((i -= r.length) < n.length) {
      let e = n[i];
      return a.insertText((0, s.A)(e.sound.guildId, e.sound.soundId)), p.default.track(g.HAw.SOUNDMOJI_SELECT, {
        channel_id: o.id,
        guild_id: o.guild_id,
        sound_guild_id: e.sound.guildId,
        sound_id: e.sound.soundId,
        source: "autocomplete"
      }), {
        type: m.kc.SOUNDMOJI,
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
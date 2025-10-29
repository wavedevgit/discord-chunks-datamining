/** Chunk was on web.js **/
/** chunk id: 341561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk952265 = require("./952265.js"),
  Chunk588468 = require("./588468.jsx"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}
let T = 8,
  S = 4,
  A = 4,
  C = 40,
  N = 6;

function R(e, t) {
  return (0, r.jsx)(f.Z, {
    sticker: e,
    isInteracting: t,
    size: 40
  })
}

function P(e) {
  return "".concat(E.Iv).concat(e.name).concat(E.Iv)
}

function w(e) {
  var t;
  let n = e.animated ? "a" : "";
  return e.managed || null == e.id ? "".concat(E.Iv).concat(e.name).concat(E.Iv) : "<".concat(n, ":").concat(null != (t = e.originalName) ? t : e.name, ":").concat(e.id, ">")
}
let D = {
  sentinel: Chunk761652.Iv,
  stores: [Chunk926491.Z],
  matches: (e, t, n, r, i) => n.length > 1,
  queryResults(e, t, n, r, i) {
    let a = r.allowSoundmoji && (0, o.dX)({
        location: "queryResults"
      }),
      s = r.allowStickers || a ? 0 : C,
      u = b.rnv + s,
      {
        emojis: {
          unlocked: d
        }
      } = h.ZP.queryEmojiResults({
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
      (0, c.$p)();
      let t = h.ZP.queryStickers([n], true, [e, (e, t) => t === l.eb.SENDABLE]),
        r = Math.max(S, T - d.length);
      f = t.slice(0, r), "-" === n[0] && (f = t.filter(e => e.sticker.name === n))
    }
    let _ = [];
    a && (_ = h.ZP.querySoundmoji(n, e).map(e => ({
      sound: e
    })).slice(0, A), "-" === n[0] && (_ = _.filter(e => e.sound.name === n)));
    let p = d.slice(0, Math.max(N, u - f.length - _.length));
    return {
      results: {
        emojis: p,
        emojisLocked: [],
        stickers: f,
        soundmoji: _
      },
      metadata: {
        numEmojiResults: p.length,
        numLockedEmojiResults: 0,
        numStickerResults: f.length,
        numSoundmojiResults: _.length
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t,
        stickers: o,
        soundmoji: s,
        emojisLocked: l
      },
      selectedIndex: c,
      query: u,
      onHover: d,
      onClick: f
    } = e, p = () => {
      (0, i.ZD)(async () => {
        let {
          default: e
        } = await n.e("63227").then(n.bind(n, 428263));
        return t => (0, r.jsx)(e, I({}, t))
      })
    }, h = t.length > 0 || l.length > 0, g = o.length > 0;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, m.HI)({
        query: u,
        selectedIndex: c,
        autocompletes: t,
        onHover: d,
        onClick: f,
        titleWithQuery: y.t.ksAVYt,
        titleWithoutQuery: y.intl.string(y.t.sMOuuS),
        Component: a.ZP.Emoji,
        getProps: e => ({
          emoji: e,
          key: e.id || e.uniqueName || e.name,
          sentinel: E.Iv,
          guild: null != e.guildId ? _.Z.getGuild(e.guildId) : null
        }),
        getQuery: e => "".concat(E.Iv).concat(e),
        key: "emoji"
      }), l.length > 0 ? (0, m.HI)({
        query: u,
        selectedIndex: c,
        autocompletes: l,
        onHover: d,
        onClick: p,
        titleWithQuery: 0 === t.length ? y.t.ksAVYt : null,
        titleWithoutQuery: 0 === t.length ? y.intl.string(y.t.sMOuuS) : null,
        Component: a.ZP.EmojiUpsell,
        getProps: e => {
          let {
            emojis: t
          } = e;
          return {
            key: "emoji-upsell",
            emojis: t
          }
        },
        getQuery: e => "".concat(E.Iv).concat(e),
        key: "emoji-upsell",
        indexOffset: t.length
      }) : null, h && g && (0, r.jsx)(a.ZP.Divider, {
        className: O.divider
      }), (0, m.HI)({
        query: u,
        selectedIndex: c,
        autocompletes: o,
        onHover: d,
        onClick: f,
        titleWithQuery: y.t.uferGG,
        titleWithoutQuery: y.intl.string(y.t["fT+Yjp"]),
        Component: a.ZP.Sticker,
        getProps: e => {
          let {
            comparator: t,
            sticker: n
          } = e;
          return {
            renderSticker: R,
            queryMatch: t !== n.name.toLocaleLowerCase() ? t : true,
            sticker: n,
            key: n.id
          }
        },
        getQuery: e => e,
        key: "stickers",
        indexOffset: t.length + l.length,
        headerClassName: h ? O.secondarySection : true
      }), (h || g) && s.length > 0 && (0, r.jsx)(a.ZP.Divider, {
        className: O.divider
      }), (0, m.HI)({
        query: u,
        selectedIndex: c,
        autocompletes: s,
        onHover: d,
        onClick: f,
        titleWithQuery: y.t["0cKBGM"],
        titleWithoutQuery: y.intl.string(y.t.EHlAMc),
        Component: a.ZP.Soundmoji,
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
        indexOffset: t.length + l.length + o.length,
        headerClassName: h || g ? O.secondarySection : true
      })]
    })
  },
  onSelect(e) {
    let {
      results: {
        emojis: t,
        emojisLocked: n,
        soundmoji: r,
        stickers: i
      },
      index: a,
      options: o,
      channel: l
    } = e;
    if (a < t.length) {
      let e = t[a];
      return o.insertText(P(e), w(e)), {
        type: g.z2.EMOJI,
        metadata: {
          emojiId: e.id,
          numEmojiResults: t.length,
          numStickerResults: i.length,
          expressionName: e.name,
          isCustom: null != e.id,
          isAnimated: e.animated
        }
      }
    }
    if ((a -= t.length) < n.length) return {
      type: null
    };
    if ((a -= n.length) < i.length) {
      let e = i[a];
      return o.insertText(""), o.sendSticker(e.sticker, d.V0.AUTOCOMPLETE), {
        type: g.z2.STICKER,
        metadata: {
          numEmojiResults: t.length,
          numStickerResults: i.length,
          stickerId: e.sticker.id
        }
      }
    }
    if ((a -= i.length) < r.length) {
      let e = r[a];
      return o.insertText((0, s.Z)(e.sound.guildId, e.sound.soundId)), p.default.track(b.rMx.SOUNDMOJI_SELECT, {
        channel_id: l.id,
        guild_id: l.guild_id,
        sound_guild_id: e.sound.guildId,
        sound_id: e.sound.soundId,
        source: "autocomplete"
      }), {
        type: g.z2.SOUNDMOJI,
        metadata: {
          numEmojiResults: t.length,
          numStickerResults: i.length
        }
      }
    }
    return {
      type: null
    }
  }
}
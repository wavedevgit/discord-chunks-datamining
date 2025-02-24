/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => D
});
var r = n(200651);
n(192379);
var i = n(952265),
  o = n(588468),
  a = n(125900),
  s = n(12327),
  l = n(285651),
  c = n(268350),
  u = n(926491),
  d = n(373228),
  f = n(419922),
  p = n(430824),
  _ = n(626135),
  h = n(483360),
  m = n(877565),
  g = n(590921),
  E = n(665692),
  v = n(981631),
  b = n(388032),
  y = n(752553);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}
let I = 8,
  T = 4,
  N = 4,
  A = 40,
  C = 6;

function R(e, t) {
  return (0, r.jsx)(f.ZP, {
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
  return e.managed || null == e.id ? "".concat(E.Iv).concat(e.name).concat(E.Iv) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
}
let D = {
  sentinel: E.Iv,
  stores: [u.Z],
  matches: (e, t, n, r, i) => n.length > 1,
  queryResults(e, t, n, r, i) {
    let o = r.allowSoundmoji && (0, a.dX)({
        location: "queryResults"
      }),
      s = r.allowStickers || o ? 0 : A,
      u = v.rnv + s,
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
        return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
      };
      d = d.filter(e)
    }
    let f = [];
    if (r.allowStickers) {
      (0, c.$p)();
      let t = h.ZP.queryStickers([n], !0, [e, (e, t) => t === l.eb.SENDABLE]),
        r = Math.max(T, I - d.length);
      f = t.slice(0, r), "-" === n[0] && (f = t.filter(e => e.sticker.name === n))
    }
    let p = [];
    o && (p = h.ZP.querySoundmoji(n, e).map(e => ({
      sound: e
    })).slice(0, N), "-" === n[0] && (p = p.filter(e => e.sound.name === n)));
    let _ = d.slice(0, Math.max(C, u - f.length - p.length));
    return {
      results: {
        emojis: _,
        emojisLocked: [],
        stickers: f,
        soundmoji: p
      },
      metadata: {
        numEmojiResults: _.length,
        numLockedEmojiResults: 0,
        numStickerResults: f.length,
        numSoundmojiResults: p.length
      }
    }
  },
  renderResults(e) {
    let {
      results: {
        emojis: t,
        stickers: a,
        soundmoji: s,
        emojisLocked: l
      },
      selectedIndex: c,
      query: u,
      onHover: d,
      onClick: f
    } = e, _ = () => {
      (0, i.ZD)(async () => {
        let {
          default: e
        } = await n.e("9766").then(n.bind(n, 889684));
        return t => (0, r.jsx)(e, S({}, t))
      })
    }, h = t.length > 0 || l.length > 0, g = a.length > 0;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, m.HI)({
        query: u,
        selectedIndex: c,
        autocompletes: t,
        onHover: d,
        onClick: f,
        titleWithQuery: b.t.ksAVYm,
        titleWithoutQuery: b.NW.string(b.t.sMOuub),
        Component: o.ZP.Emoji,
        getProps: e => ({
          emoji: e,
          key: e.id || e.uniqueName || e.name,
          sentinel: E.Iv,
          guild: null != e.guildId ? p.Z.getGuild(e.guildId) : null
        }),
        getQuery: e => "".concat(E.Iv).concat(e),
        key: "emoji"
      }), l.length > 0 ? (0, m.HI)({
        query: u,
        selectedIndex: c,
        autocompletes: l,
        onHover: d,
        onClick: _,
        titleWithQuery: 0 === t.length ? b.t.ksAVYm : null,
        titleWithoutQuery: 0 === t.length ? b.NW.string(b.t.sMOuub) : null,
        Component: o.ZP.EmojiUpsell,
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
      }) : null, h && g && (0, r.jsx)(o.ZP.Divider, {
        className: y.divider
      }), (0, m.HI)({
        query: u,
        selectedIndex: c,
        autocompletes: a,
        onHover: d,
        onClick: f,
        titleWithQuery: b.t.uferGB,
        titleWithoutQuery: b.NW.string(b.t["fT+Yjo"]),
        Component: o.ZP.Sticker,
        getProps: e => {
          let {
            comparator: t,
            sticker: n
          } = e;
          return {
            renderSticker: R,
            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
            sticker: n,
            key: n.id
          }
        },
        getQuery: e => e,
        key: "stickers",
        indexOffset: t.length + l.length,
        headerClassName: h ? y.secondarySection : void 0
      }), (h || g) && s.length > 0 && (0, r.jsx)(o.ZP.Divider, {
        className: y.divider
      }), (0, m.HI)({
        query: u,
        selectedIndex: c,
        autocompletes: s,
        onHover: d,
        onClick: f,
        titleWithQuery: b.t["0cKBGB"],
        titleWithoutQuery: b.NW.string(b.t.EHlAMT),
        Component: o.ZP.Soundmoji,
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
        indexOffset: t.length + l.length + a.length,
        headerClassName: h || g ? y.secondarySection : void 0
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
      index: o,
      options: a,
      channel: l
    } = e;
    if (o < t.length) {
      let e = t[o];
      return a.insertText(P(e), w(e)), {
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
    if ((o -= t.length) < n.length) return {
      type: null
    };
    if ((o -= n.length) < i.length) {
      let e = i[o];
      return a.insertText(""), a.sendSticker(e.sticker, d.V0.AUTOCOMPLETE), {
        type: g.z2.STICKER,
        metadata: {
          numEmojiResults: t.length,
          numStickerResults: i.length,
          stickerId: e.sticker.id
        }
      }
    }
    if ((o -= i.length) < r.length) {
      let e = r[o];
      return a.insertText((0, s.Z)(e.sound.guildId, e.sound.soundId)), _.default.track(v.rMx.SOUNDMOJI_SELECT, {
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
/** Chunk was on web.js **/
/** chunk id: 484333, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mq: () => j,
  a2: () => M,
  bm: () => D,
  cr: () => k,
  wu: () => x
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk835245 = require("./835245.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554375 = require("./554375.js"),
  Chunk508675 = require("./508675.js"),
  Chunk770335 = require("./770335.js"),
  Chunk7584 = require("./7584.js"),
  Chunk850992 = require("./850992.js"),
  Chunk151271 = require("./151271.js"),
  Chunk526292 = require("./526292.js"),
  Chunk704591 = require("./704591.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js"),
  Chunk690521 = require("./690521.js"),
  Chunk474090 = require("./474090.js"),
  Chunk822123 = require("./822123.js"),
  Chunk818645 = require("./818645.js"),
  Chunk316884 = require("./316884.js"),
  Chunk732139 = require("./732139.js"),
  Chunk307731 = require("./307731.js"),
  Chunk985018 = require("./985018.jsx");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var D = function(e) {
  return e[e.EMOJI = 0] = "EMOJI", e[e.EXPAND_OR_COLLAPSE_EMOJIS = 1] = "EXPAND_OR_COLLAPSE_EMOJIS", e[e.SOUNDMOJI = 2] = "SOUNDMOJI", e
}({});
let L = [Chunk307731.Am.DISALLOW_EXTERNAL, Chunk307731.Am.DISALLOW_CUSTOM],
  x = e => {
    var t;
    let {
      channel: n,
      fallbackGuildId: i,
      collapsedSections: l,
      pickerIntention: f,
      emojiSearchResults: p,
      gridWidth: N,
      emojiPaddingHorizontal: R,
      emojiSpriteSize: D,
      shouldShowSoundmojiInEmojiPicker: x,
      showOnlyUnicode: M
    } = e, j = (0, s.bG)([c.Ay], () => c.Ay.categories), k = r.useMemo(() => M ? d.Ay.getCategories() : j, [j, M]), U = (0, s.bG)([g.A], () => g.A.getGuild(null == n ? true : n.getGuildId()), [n]), G = null != (t = null == n ? true : n.getGuildId()) ? t : i, V = (0, s.bG)([c.Ay], () => c.Ay.getDisambiguatedEmojiContext(G), [G]), F = (0, v.XI)(G), B = (0, v.Fj)(G), H = (0, v.QZ)(G), {
      topEmojis: Y,
      newlyAddedEmojis: W
    } = (0, I.A)(G, f), K = (0, s.yK)([E.Ay], () => E.Ay.getFlattenedGuildIds(), []), z = (0, s.bG)([c.Ay], () => c.Ay.expandedSectionsByGuildIds), q = (0, s.bG)([y.default], () => y.default.getCurrentUser()), Z = (0, O.ki)(q), Q = (0, _.k0)(), X = V.getCustomEmoji(), J = e => {
      if (e.type === u.i.GUILD) return e.guildId
    }, $ = r.useMemo(() => a().groupBy(X, J), [X]), ee = (0, h.Ym)({
      location: "useEmojiGrid"
    });
    return r.useMemo(() => {
      let e = [],
        t = [],
        r = [],
        i = [],
        s = 0,
        c = 0;
      if (null != V && null != N) {
        let u = Math.floor(N / (D + 2 * R)),
          _ = 3 * u,
          h = (o, d) => {
            let p = new Map,
              h = l.has(d.sectionId),
              [m, g] = a().partition(o, e => {
                let t = b.Ay.isEmojiDisabled({
                  emoji: e,
                  channel: n,
                  intention: f
                });
                return p.set(e, t), !t
              }),
              E = m.concat(g),
              y = d.guild,
              O = E.length > _ && null != y && d.isNitroLocked,
              A = O && !z.has(y.id);
            A && E.splice(_ - 1);
            let I = Math.ceil((O ? E.length + 1 : E.length) / u),
              T = [];
            for (let e = 0; e < I; e++) {
              let t = e * u,
                n = t + u,
                a = E.slice(t, n).map((e, t) => {
                  var n, r;
                  return {
                    type: 0,
                    emoji: e,
                    size: D,
                    isDisabled: p.get(e),
                    rowIndex: c,
                    columnIndex: t,
                    visibleRowIndex: s,
                    category: d.type,
                    subCategory: d.sectionId === S.s.TOP_GUILD_EMOJI ? (0, v.DA)(Y, W, null != (n = null != (r = e.id) ? r : e.uniqueName) ? n : e.name) : S.tm.NONE
                  }
                });
              if (T.push(a), !h) {
                if (O && e === I - 1) {
                  let t = T[e];
                  t.push({
                    type: 1,
                    guildId: y.id,
                    name: C.intl.string(C.t.NZI2Zk),
                    size: D,
                    rowIndex: e,
                    columnIndex: t.length,
                    visibleRowIndex: s,
                    sectionCollapsedToThreeRows: A
                  })
                }
                i.push(a.length), r.push(a), s++
              }
              c++
            }
            let N = h ? 0 : I,
              R = P(w({}, d), {
                count: o.length
              });
            t.push(R), e.push(N)
          };
        if (null != p) 0 !== p.unlocked.length && h(p.unlocked, {
          type: S.s.SEARCH_RESULTS,
          sectionId: S.s.SEARCH_RESULTS,
          count: p.unlocked.length,
          isNitroLocked: false
        }), 0 !== p.locked.length && h(p.locked, {
          type: S.s.PREMIUM_UPSELL,
          categoryId: S.R2.PREMIUM_UPSELL,
          sectionId: S.s.PREMIUM_UPSELL,
          count: p.locked.length,
          isNitroLocked: !Z
        });
        else {
          if (ee && x) {
            let n = [{
              type: 2,
              rowIndex: c,
              columnIndex: 0,
              visibleRowIndex: s
            }];
            t.push({
              type: S.s.SOUNDMOJI,
              categoryId: S.R2.SOUNDMOJI,
              sectionId: "soundmoji",
              count: n.length,
              isNitroLocked: false
            });
            let a = l.has(S.R2.SOUNDMOJI);
            !a && (i.push(n.length), r.push(n), s++), e.push(+!a), c++
          }
          for (let e of k)
            if (e === S.R2.CUSTOM) {
              let t = t => {
                let r = $[t];
                if (null == r) return;
                let i = r.filter(e => !L.includes(b.Ay.getEmojiUnavailableReason({
                  emoji: e,
                  channel: null != n ? n : m.Ay.getDefaultChannel(t),
                  intention: f
                })));
                if (0 === i.length) return;
                let a = g.A.getGuild(t),
                  s = Q || !Z && b.Ay.isEmojiCategoryNitroLocked({
                    categoryEmojis: i,
                    channel: n,
                    intention: f
                  });
                h(i, {
                  categoryId: e,
                  guild: a,
                  type: S.s.GUILD,
                  sectionId: null != a ? a.id : (0, o.A)(),
                  count: i.length,
                  isNitroLocked: s
                })
              };
              if (null != U && t(U.id), (0, T.Re)(f))
                for (let e of K)(null == U || U.id !== e) && t(e)
            } else if (e === S.R2.TOP_GUILD_EMOJI) {
            if (null != U) {
              let {
                allEmojis: t
              } = (0, A.W)({
                topEmojis: Y,
                newlyAddedEmojis: W
              });
              t.length > 0 && h(t, {
                categoryId: e,
                guild: g.A.getGuild(U.id),
                type: S.s.TOP_GUILD_EMOJI,
                sectionId: S.s.TOP_GUILD_EMOJI,
                count: t.length,
                isNitroLocked: false
              })
            }
          } else if (e === S.R2.RECENT) {
            let t = (f === T.b_.REACTION ? H : B).filter(e => !b.Ay.isEmojiFiltered({
              emoji: e,
              channel: n,
              intention: f
            }));
            h(t, {
              categoryId: e,
              type: S.s.RECENT,
              sectionId: S.s.RECENT,
              count: t.length,
              isNitroLocked: false
            })
          } else if (e === S.R2.FAVORITES) {
            let t = F.filter(e => !b.Ay.isEmojiFiltered({
              emoji: e,
              channel: n,
              intention: f
            }));
            0 !== t.length && h(t, {
              categoryId: e,
              type: S.s.FAVORITES,
              sectionId: S.s.FAVORITES,
              count: t.length,
              isNitroLocked: false
            })
          } else {
            let t = d.Ay.getByCategory(e);
            null != t && h(t, {
              categoryId: e,
              type: S.s.UNICODE,
              sectionId: e,
              count: t.length,
              isNitroLocked: false
            })
          }
        }
      }
      return {
        columnCounts: i,
        emojiGrid: r,
        rowCountBySection: e,
        sectionDescriptors: t
      }
    }, [V, N, D, R, p, l, $, z, n, f, Y, W, Z, k, U, K, H, B, F, Q, ee, x])
  };
var M = function(e) {
  return e[e.PREMIUM = 0] = "PREMIUM", e[e.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION", e
}({});
let j = e => {
    let {
      pickerIntention: t,
      selectedChannel: n,
      fallbackGuildId: i,
      onSelectEmoji: a,
      setUpsellConfigs: o,
      emojiSelectAnalytics: d,
      trackEmojiFavorited: f
    } = e, p = (0, s.bG)([c.Ay], () => {
      var e;
      return c.Ay.getDisambiguatedEmojiContext(null != (e = null == n ? true : n.getGuildId()) ? e : i)
    }, [i, n]);
    return r.useCallback((e, r) => {
      if (0 === e.type) {
        let {
          emoji: i
        } = e;
        if (null == i) return;
        let s = b.Ay.getEmojiUnavailableReason({
          emoji: i,
          channel: n,
          intention: t
        });
        if (r.toggleFavorite) return void(p.isFavoriteEmojiWithoutFetchingLatest(i) || null != s ? (0, l.Sw)(i) : (null == f || f(e), (0, l.V4)(i)));
        if (s !== T.Am.GUILD_SUBSCRIPTION_UNAVAILABLE) {
          if (s === T.Am.PREMIUM_LOCKED) return void o({
            type: 0,
            emojiDescriptor: e
          });
          if (s === T.Am.ROLE_SUBSCRIPTION_LOCKED && i.type === u.i.GUILD) return void o({
            type: 1,
            guildId: i.guildId,
            emojiId: i.id
          });
          s !== T.Am.ROLE_SUBSCRIPTION_UNAVAILABLE && (null == d || d(e), a({
            emoji: i,
            willClose: r.isFinalSelection,
            isBurst: r.isBurst
          }))
        }
      }
    }, [n, t, a, o, p, d, f])
  },
  k = e => {
    let {
      emojiListRef: t
    } = e, n = (0, p.RQ)(e => e.searchQuery), i = r.useCallback(e => {
      var n;
      return null == (n = t.current) ? true : n.scrollToSectionTop(e)
    }, [t]);
    return r.useCallback(e => {
      "" !== n ? ((0, p.Ri)(""), f.Om.setActiveCategoryIndex(e)) : i(e)
    }, [i, n])
  }
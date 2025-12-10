/** Chunk was on web.js **/
/** chunk id: 543241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => R,
  C1: () => H,
  DV: () => Z,
  Gn: () => j,
  IP: () => W,
  J1: () => k,
  MZ: () => Y,
  NJ: () => V,
  Nf: () => U,
  PC: () => D,
  Y1: () => G,
  ZF: () => P,
  fe: () => M,
  jA: () => w,
  kI: () => N,
  nV: () => K,
  q5: () => F,
  to: () => L,
  wC: () => B,
  y$: () => x
}), require("./290780.js"), require("./539854.js"), require("./388685.js"), require("./314940.js"), require("./704826.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk367907 = require("./367907.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk558217 = require("./558217.js"),
  Chunk125900 = require("./125900.js"),
  Chunk675478 = require("./675478.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk70956 = require("./70956.js"),
  Chunk176354 = require("./176354.js"),
  Chunk111361 = require("./111361.js"),
  Chunk304852 = require("./304852.js"),
  Chunk199257 = require("./199257.js"),
  Chunk149203 = require("./149203.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk957825 = require("./957825.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");
let N = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null == t ? true : t.getGuildId(),
      i = arguments.length > 3 && true !== arguments[3] && arguments[3];
    (0, u.O)(n);
    let a = (0, I.Gt)(e),
      s = B(n),
      c = F(n),
      f = V(n),
      {
        topEmojis: h,
        newlyAddedEmojis: g
      } = (0, O.Z)(n, e),
      {
        allEmojis: S
      } = (0, y.Z)({
        topEmojis: h,
        newlyAddedEmojis: g
      }),
      T = (0, o.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
      C = (0, o.e7)([p.Z], () => {
        var e;
        return null == (e = p.Z.getGuild(n)) ? true : e.name
      }),
      N = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
      P = (0, b.I5)(N),
      R = (0, d.g2)({
        location: "useEmojiCategories"
      });
    return r.useMemo(() => {
      let r = T.getGroupedCustomEmoji(),
        o = _.ZP.getFlattenedGuildIds(),
        u = [],
        d = {
          type: v.En.SOUNDMOJI,
          name: A.intl.string(A.t.f0Ezmv),
          id: v.UX.SOUNDMOJI,
          isNitroLocked: false
        },
        m = r => E.ZP.getEmojiUnavailableReasons({
          categoryEmojis: r,
          channel: t,
          guildId: n,
          intention: e
        });
      return ((e, t) => {
        for (let i of e) {
          let e;
          if (t === v.En.GUILD && (e = p.Z.getGuild(i)), null == e) continue;
          let a = null == r ? true : r[e.id];
          if (null == a || 0 === a.length) continue;
          let {
            emojisDisabled: o,
            emojisUnfiltered: s,
            emojisPremiumLockedCount: l,
            emojiNitroLocked: c
          } = m(a);
          if (0 === s.length) continue;
          let d = null;
          t === v.En.GUILD && (d = {
            type: v.En.GUILD,
            guild: e,
            isNitroLocked: !P && c && l === a.length,
            emojis: a,
            emojisDisabled: o
          }), null != d && (e.id === n ? u.unshift(d) : u.push(d))
        }
      })(o, v.En.GUILD), l.ZP.categories.reduce((t, r) => {
        if (r === v.UX.TOP_GUILD_EMOJI) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = m(S);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: v.En.TOP_GUILD_EMOJI,
            id: r,
            name: A.intl.formatToPlainString(A.t.W6Wi1X, {
              guildName: C
            }),
            isNitroLocked: false,
            emojis: n,
            emojisDisabled: e
          })
        } else if (r === v.UX.RECENT) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = m([I.Hz.REACTION, I.Hz.DEFAULT_REACT_EMOJI].includes(e) ? c : s);
          if (null == i || 0 === i.length) return t;
          t.push({
            type: v.En.RECENT,
            id: r,
            name: A.intl.string(A.t["5TvaSm"]),
            isNitroLocked: false,
            emojis: i,
            emojisDisabled: n
          })
        } else if (r === v.UX.FAVORITES) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = m(f);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: v.En.FAVORITES,
            id: r,
            name: A.intl.string(A.t.y3LQCG),
            isNitroLocked: false,
            emojis: n,
            emojisDisabled: e
          })
        } else if (r === v.UX.CUSTOM) {
          let e = u;
          a || (e = u.filter(e => e.type === v.En.GUILD && e.guild.id === n)), t.push(...e)
        } else t.push({
          type: v.En.UNICODE,
          id: r,
          name: r,
          isNitroLocked: false
        });
        return t
      }, R && i ? [d] : [])
    }, [T, t, n, e, P, S, C, c, s, f, a, R, i])
  },
  P = () => Chunk633302.ZP.getCategories().map(e => ({
    type: v.En.UNICODE,
    id: e,
    name: e,
    isNitroLocked: false
  })),
  R = e => {
    let t = (null == e ? true : e.getGuildId()) != null;
    h.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? S.ZY5.GUILD_CHANNEL : S.ZY5.DM_CHANNEL,
      location_section: null != e ? S.jXE.EMOJI_PICKER_POPOUT : S.jXE.CUSTOM_STATUS_MODAL
    })
  },
  D = (e, t) => {
    s.ZP.trackWithMetadata(S.rMx.SEARCH_STARTED, {
      search_type: null != t && t === I.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
      location: e
    })
  },
  w = (e, t, n, r, i) => {
    s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_VIEWED, {
      search_type: null != i && i === I.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
      total_results: e,
      num_results_locked: t,
      query: r,
      location: n
    })
  },
  x = e => {
    var t, n, r;
    let {
      emoji: i,
      emojiSuggestions: o,
      searchQuery: l,
      isLocked: c,
      location: u,
      intention: d,
      index: f
    } = e, p = null != (r = i.uniqueName) ? r : i.name, _ = (0, a.EQ)(d).with(I.Hz.REACTION, () => S.aib.EMOJI_REACTION).with(I.Hz.AUTO_SUGGESTION, () => S.aib.EMOJI_AUTO_SUGGESTION).otherwise(() => S.aib.EMOJI);
    s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SELECTED, {
      search_type: _,
      location: u,
      expression_guild_id: i.guildId,
      emoji_id: i.id,
      emoji_name: p,
      is_custom: null != i.id,
      is_animated: i.animated,
      is_locked: c,
      query: l,
      index_num: f,
      load_id: null == o ? true : o.loadId,
      total_results: null == o || null == (t = o.results) ? true : t.length,
      emoji_suggestion_ids: null == o || null == (n = o.results) ? true : n.map(e => {
        let {
          emoji: t
        } = e;
        return t.id
      }).filter(e => null != e)
    })
  },
  L = (e, t) => {
    s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_EMPTY, {
      search_type: S.aib.EMOJI,
      query: t,
      location: e
    })
  },
  j = e => {
    let {
      emoji: t,
      subCategory: n,
      position: r,
      newlyAddedHighlight: i
    } = e;
    s.ZP.trackWithMetadata(S.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
      expression_section: null == n ? true : n.toString(),
      newly_added_highlight: i,
      emoji_id: t.id,
      emoji_name: t.name,
      emoji_animated: t.animated,
      emoji_position: r
    })
  },
  M = e => {
    var t;
    let n, {
      emoji: r,
      location: i,
      pickerIntention: a,
      category: o,
      subCategory: l = v.t0.NONE,
      position: c,
      newlyAddedHighlight: u,
      isBurstReaction: d
    } = e;
    switch (a) {
      case I.Hz.REACTION:
        n = d ? C.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : C.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case I.Hz.STATUS:
        n = C.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        n = C.cd.EMOJI_PICKER_EMOJI_CLICKED
    }
    let f = null != (t = r.uniqueName) ? t : r.name;
    s.ZP.trackWithMetadata(S.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: n,
      location: i,
      expression_id: r.id,
      expression_name: f,
      expression_guild_id: r.guildId,
      is_custom: null != r.id,
      is_animated: r.animated,
      expression_picker_section: o,
      expression_section: null == l ? true : l.toString(),
      emoji_position: c,
      newly_added_highlight: u,
      is_burst: d
    })
  },
  k = e => {
    var t;
    let {
      emoji: n,
      location: r
    } = e, i = null != (t = n.uniqueName) ? t : n.name;
    s.ZP.trackWithMetadata(S.rMx.EXPRESSION_FAVORITED, {
      location: r,
      expression_type: T.X1.EMOJI,
      expression_id: n.id,
      expression_name: i,
      expression_guild_id: n.guildId,
      is_custom: null != n.id,
      is_animated: n.animated
    })
  };
(0, Chunk392711.throttle)(e => {
  let {
    emojiSuggestions: t,
    analyticsLocation: n
  } = e;
  s.ZP.trackWithMetadata(S.rMx.AUTO_SUGGEST_DISPLAYED, {
    suggestion_type: S.Z9p.EMOJI,
    suggestion_quantity: t.results.length,
    custom_quantity: t.results.filter(e => {
      let {
        emoji: t
      } = e;
      return null != t.id
    }).length,
    load_id: t.loadId,
    location: n
  })
}, Chunk70956.Z.Millis.HALF_SECOND, {
  leading: false,
  trailing: true
});
let U = (e, t) => e.type !== v.En.GUILD ? e.id : null != t ? t.name : "",
  G = (e, t) => {
    switch (e) {
      case v.UX.TOP_GUILD_EMOJI:
        return A.intl.formatToPlainString(A.t.W6Wi1X, {
          guildName: t
        });
      case v.UX.RECENT:
        return A.intl.string(A.t["5TvaSm"]);
      case v.UX.FAVORITES:
        return A.intl.string(A.t.y3LQCG);
      case v.UX.ACTIVITY:
        return A.intl.string(A.t.O783tR);
      case v.UX.FLAGS:
        return A.intl.string(A.t.vvaizu);
      case v.UX.FOOD:
        return A.intl.string(A.t.ldm9aY);
      case v.UX.NATURE:
        return A.intl.string(A.t.egIBDH);
      case v.UX.OBJECTS:
        return A.intl.string(A.t.gWm7Mk);
      case v.UX.PEOPLE:
        return A.intl.string(A.t.GX594D);
      case v.UX.SYMBOLS:
        return A.intl.string(A.t.QXMYAb);
      case v.UX.TRAVEL:
        return A.intl.string(A.t.w33hIP);
      case v.UX.PREMIUM_UPSELL:
        return A.intl.string(A.t.pAF6xE);
      case v.UX.SOUNDMOJI:
        return A.intl.string(A.t.f0Ezmv);
      default:
        return null != t ? t : e
    }
  };

function Z(e, t, n, i) {
  r.useEffect(() => {
    f.DZ.loadIfNecessary()
  }, []);
  let a = (0, I.Gt)(n);
  return (0, o.e7)([l.ZP], () => {
    let r = e.replace(/^:/, "").replace(/:$/, "");
    return "" === r ? null : l.ZP.searchWithoutFetchingLatest({
      channel: t,
      query: r,
      count: 0,
      intention: n,
      includeExternalGuilds: a,
      showOnlyUnicode: i
    })
  }, [e, t, n, a, i], o.pF)
}

function B(e) {
  return r.useEffect(() => {
    f.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
}

function F(e) {
  return r.useEffect(() => {
    f.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
}

function V(e) {
  return r.useEffect(() => {
    f.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
}

function H(e, t) {
  return r.useEffect(() => {
    f.DZ.loadIfNecessary()
  }, []), (0, o.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
}

function Y(e) {
  return r.useEffect(() => {
    f.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
}

function W(e, t, n) {
  if (null == n) return v.t0.NONE;
  let r = e.map(e => {
      var t, n;
      return null != (n = null != (t = e.id) ? t : e.uniqueName) ? n : e.name
    }),
    i = t.map(e => e.id);
  return r.includes(n) ? v.t0.TOP_GUILD_EMOJI : i.includes(n) ? v.t0.NEWLY_ADDED_EMOJI : v.t0.NONE
}

function K(e, t) {
  return e === I.Hz.REACTION ? t ? A.intl.string(A.t["h7ES+n"]) : A.intl.string(A.t["6any2A"]) : A.intl.string(A.t.KgK5qg)
}
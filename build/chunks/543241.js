/** Chunk was on web.js **/
/** chunk id: 543241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => P,
  C1: () => H,
  DV: () => B,
  Gn: () => M,
  IP: () => W,
  J1: () => k,
  MZ: () => Y,
  NJ: () => V,
  Nf: () => U,
  PC: () => w,
  Y1: () => G,
  ZF: () => R,
  fe: () => j,
  jA: () => D,
  kI: () => N,
  nV: () => K,
  q5: () => F,
  to: () => L,
  wC: () => Z,
  y$: () => x
}), require("./290780.js"), require("./539854.js"), require("./388685.js"), require("./314940.js"), require("./704826.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
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
    let a = (0, S.Gt)(e),
      s = Z(n),
      c = F(n),
      f = V(n),
      {
        topEmojis: m,
        newlyAddedEmojis: g
      } = (0, O.Z)(n, e),
      {
        allEmojis: I
      } = (0, y.Z)({
        topEmojis: m,
        newlyAddedEmojis: g
      }),
      T = (0, o.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
      A = (0, o.e7)([_.Z], () => {
        var e;
        return null == (e = _.Z.getGuild(n)) ? true : e.name
      }),
      N = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
      R = (0, b.I5)(N),
      P = (0, d.g2)({
        location: "useEmojiCategories"
      });
    return r.useMemo(() => {
      let r = T.getGroupedCustomEmoji(),
        o = p.ZP.getFlattenedGuildIds(),
        u = [],
        d = {
          type: v.En.SOUNDMOJI,
          name: C.intl.string(C.t.f0Ezmv),
          id: v.UX.SOUNDMOJI,
          isNitroLocked: false
        },
        h = r => E.ZP.getEmojiUnavailableReasons({
          categoryEmojis: r,
          channel: t,
          guildId: n,
          intention: e
        });
      return ((e, t) => {
        for (let i of e) {
          let e;
          if (t === v.En.GUILD && (e = _.Z.getGuild(i)), null == e) continue;
          let a = null == r ? true : r[e.id];
          if (null == a || 0 === a.length) continue;
          let {
            emojisDisabled: o,
            emojisUnfiltered: s,
            emojisPremiumLockedCount: l,
            emojiNitroLocked: c
          } = h(a);
          if (0 === s.length) continue;
          let d = null;
          t === v.En.GUILD && (d = {
            type: v.En.GUILD,
            guild: e,
            isNitroLocked: !R && c && l === a.length,
            emojis: a,
            emojisDisabled: o
          }), null != d && (e.id === n ? u.unshift(d) : u.push(d))
        }
      })(o, v.En.GUILD), l.ZP.categories.reduce((t, r) => {
        if (r === v.UX.TOP_GUILD_EMOJI) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = h(I);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: v.En.TOP_GUILD_EMOJI,
            id: r,
            name: C.intl.formatToPlainString(C.t.W6Wi1X, {
              guildName: A
            }),
            isNitroLocked: false,
            emojis: n,
            emojisDisabled: e
          })
        } else if (r === v.UX.RECENT) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = h([S.Hz.REACTION, S.Hz.DEFAULT_REACT_EMOJI].includes(e) ? c : s);
          if (null == i || 0 === i.length) return t;
          t.push({
            type: v.En.RECENT,
            id: r,
            name: C.intl.string(C.t["5TvaSm"]),
            isNitroLocked: false,
            emojis: i,
            emojisDisabled: n
          })
        } else if (r === v.UX.FAVORITES) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = h(f);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: v.En.FAVORITES,
            id: r,
            name: C.intl.string(C.t.y3LQCG),
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
      }, P && i ? [d] : [])
    }, [T, t, n, e, R, I, A, c, s, f, a, P, i])
  },
  R = () => Chunk633302.ZP.getCategories().map(e => ({
    type: v.En.UNICODE,
    id: e,
    name: e,
    isNitroLocked: false
  })),
  P = e => {
    let t = (null == e ? true : e.getGuildId()) != null;
    m.default.track(I.rMx.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? I.ZY5.GUILD_CHANNEL : I.ZY5.DM_CHANNEL,
      location_section: null != e ? I.jXE.EMOJI_PICKER_POPOUT : I.jXE.CUSTOM_STATUS_MODAL
    })
  },
  w = (e, t) => {
    s.ZP.trackWithMetadata(I.rMx.SEARCH_STARTED, {
      search_type: null != t && t === S.Hz.REACTION ? I.aib.EMOJI_REACTION : I.aib.EMOJI,
      location: e
    })
  },
  D = (e, t, n, r, i) => {
    s.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_VIEWED, {
      search_type: null != i && i === S.Hz.REACTION ? I.aib.EMOJI_REACTION : I.aib.EMOJI,
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
    } = e, _ = null != (r = i.uniqueName) ? r : i.name, p = (0, a.EQ)(d).with(S.Hz.REACTION, () => I.aib.EMOJI_REACTION).with(S.Hz.AUTO_SUGGESTION, () => I.aib.EMOJI_AUTO_SUGGESTION).otherwise(() => I.aib.EMOJI);
    s.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_SELECTED, {
      search_type: p,
      location: u,
      expression_guild_id: i.guildId,
      emoji_id: i.id,
      emoji_name: _,
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
    s.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_EMPTY, {
      search_type: I.aib.EMOJI,
      query: t,
      location: e
    })
  },
  M = e => {
    let {
      emoji: t,
      subCategory: n,
      position: r,
      newlyAddedHighlight: i
    } = e;
    s.ZP.trackWithMetadata(I.rMx.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
      expression_section: null == n ? true : n.toString(),
      newly_added_highlight: i,
      emoji_id: t.id,
      emoji_name: t.name,
      emoji_animated: t.animated,
      emoji_position: r
    })
  },
  j = e => {
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
      case S.Hz.REACTION:
        n = d ? A.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : A.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case S.Hz.STATUS:
        n = A.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        n = A.cd.EMOJI_PICKER_EMOJI_CLICKED
    }
    let f = null != (t = r.uniqueName) ? t : r.name;
    s.ZP.trackWithMetadata(I.rMx.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
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
    s.ZP.trackWithMetadata(I.rMx.EXPRESSION_FAVORITED, {
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
  s.ZP.trackWithMetadata(I.rMx.AUTO_SUGGEST_DISPLAYED, {
    suggestion_type: I.Z9p.EMOJI,
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
        return C.intl.formatToPlainString(C.t.W6Wi1X, {
          guildName: t
        });
      case v.UX.RECENT:
        return C.intl.string(C.t["5TvaSm"]);
      case v.UX.FAVORITES:
        return C.intl.string(C.t.y3LQCG);
      case v.UX.ACTIVITY:
        return C.intl.string(C.t.O783tR);
      case v.UX.FLAGS:
        return C.intl.string(C.t.vvaizu);
      case v.UX.FOOD:
        return C.intl.string(C.t.ldm9aY);
      case v.UX.NATURE:
        return C.intl.string(C.t.egIBDH);
      case v.UX.OBJECTS:
        return C.intl.string(C.t.gWm7Mk);
      case v.UX.PEOPLE:
        return C.intl.string(C.t.GX594D);
      case v.UX.SYMBOLS:
        return C.intl.string(C.t.QXMYAb);
      case v.UX.TRAVEL:
        return C.intl.string(C.t.w33hIP);
      case v.UX.PREMIUM_UPSELL:
        return C.intl.string(C.t.pAF6xE);
      case v.UX.SOUNDMOJI:
        return C.intl.string(C.t.f0Ezmv);
      default:
        return null != t ? t : e
    }
  };

function B(e, t, n, i) {
  r.useEffect(() => {
    f.DZ.loadIfNecessary()
  }, []);
  let a = (0, S.Gt)(n);
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

function Z(e) {
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
  return e === S.Hz.REACTION ? t ? C.intl.string(C.t["h7ES+n"]) : C.intl.string(C.t["6any2A"]) : C.intl.string(C.t.KgK5qg)
}
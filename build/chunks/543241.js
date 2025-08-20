/** Chunk was on web.js **/
/** chunk id: 543241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => D,
  C1: () => W,
  DV: () => V,
  Gn: () => k,
  IP: () => z,
  J1: () => G,
  MZ: () => K,
  NJ: () => Y,
  Nf: () => B,
  PC: () => x,
  Y1: () => Z,
  ZF: () => w,
  fe: () => U,
  jA: () => L,
  kI: () => P,
  nV: () => q,
  q5: () => H,
  to: () => M,
  wC: () => F,
  y$: () => j
}), require("./290780.js"), require("./539854.js"), require("./388685.js"), require("./314940.js"), require("./704826.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk278074 = require("./278074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk367907 = require("./367907.js"),
  Chunk339085 = require("./339085.js"),
  Chunk689789 = require("./689789.js"),
  Chunk407477 = require("./407477.js"),
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
let P = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null == t ? true : t.getGuildId(),
      i = arguments.length > 3 && true !== arguments[3] && arguments[3];
    (0, f.O)(n);
    let a = (0, A.Gt)(e),
      s = F(n),
      d = H(n),
      {
        canSplitFrecencyList: p
      } = (0, c.S)({
        location: "useEmojiCategories",
        autoTrackExposure: true
      }),
      E = (0, u.p3)({
        location: "useEmojiCategories",
        autoTrackExposure: true
      });
    u.Xb.useExperiment({
      location: "useEmojiCategories"
    }, {
      autoTrackExposure: true
    });
    let b = Y(n),
      {
        topEmojis: S,
        newlyAddedEmojis: C
      } = (0, I.Z)(n, e),
      {
        allEmojis: N
      } = (0, v.Z)({
        topEmojis: S,
        newlyAddedEmojis: C
      }),
      P = (0, o.e7)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(n), [n]),
      w = (0, o.e7)([h.Z], () => {
        var e;
        return null == (e = h.Z.getGuild(n)) ? true : e.name
      }),
      D = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
      x = (0, O.I5)(D),
      L = (0, _.g2)({
        location: "useEmojiCategories"
      });
    return r.useMemo(() => {
      let r = P.getGroupedCustomEmoji(),
        o = m.ZP.getFlattenedGuildIds(),
        c = [],
        u = {
          type: T.En.SOUNDMOJI,
          name: R.intl.string(R.t.f0Ezmp),
          id: T.UX.SOUNDMOJI,
          isNitroLocked: false
        },
        f = r => y.ZP.getEmojiUnavailableReasons({
          categoryEmojis: r,
          channel: t,
          guildId: n,
          intention: e
        });
      return ((e, t) => {
        for (let i of e) {
          let e;
          if (t === T.En.GUILD && (e = h.Z.getGuild(i)), null == e) continue;
          let a = null == r ? true : r[e.id];
          if (null == a || 0 === a.length) continue;
          let {
            emojisDisabled: o,
            emojisUnfiltered: s,
            emojisPremiumLockedCount: l,
            emojiNitroLocked: u
          } = f(a);
          if (0 === s.length) continue;
          let d = null;
          t === T.En.GUILD && (d = {
            type: T.En.GUILD,
            guild: e,
            isNitroLocked: !x && u && l === a.length,
            emojis: a,
            emojisDisabled: o
          }), null != d && (e.id === n ? c.unshift(d) : c.push(d))
        }
      })(o, T.En.GUILD), l.ZP.categories.reduce((t, r) => {
        if (r === T.UX.TOP_GUILD_EMOJI) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = f(N);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: T.En.TOP_GUILD_EMOJI,
            id: r,
            name: R.intl.formatToPlainString(R.t.W6Wi1d, {
              guildName: w
            }),
            isNitroLocked: false,
            emojis: n,
            emojisDisabled: e
          })
        } else if (r === T.UX.RECENT) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = f(e === A.Hz.REACTION && (p || E) ? d : s);
          if (null == i || 0 === i.length) return t;
          t.push({
            type: T.En.RECENT,
            id: r,
            name: R.intl.string(R.t["5TvaSk"]),
            isNitroLocked: false,
            emojis: i,
            emojisDisabled: n
          })
        } else if (r === T.UX.FAVORITES) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = f(b);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: T.En.FAVORITES,
            id: r,
            name: R.intl.string(R.t.y3LQCA),
            isNitroLocked: false,
            emojis: n,
            emojisDisabled: e
          })
        } else if (r === T.UX.CUSTOM) {
          let e = c;
          a || (e = c.filter(e => e.type === T.En.GUILD && e.guild.id === n)), t.push(...e)
        } else t.push({
          type: T.En.UNICODE,
          id: r,
          name: r,
          isNitroLocked: false
        });
        return t
      }, L && i ? [u] : [])
    }, [P, t, n, e, x, N, w, p, E, d, s, b, a, L, i])
  },
  w = () => Chunk633302.ZP.getCategories().map(e => ({
    type: T.En.UNICODE,
    id: e,
    name: e,
    isNitroLocked: false
  })),
  D = e => {
    let t = (null == e ? true : e.getGuildId()) != null;
    E.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? S.ZY5.GUILD_CHANNEL : S.ZY5.DM_CHANNEL,
      location_section: null != e ? S.jXE.EMOJI_PICKER_POPOUT : S.jXE.CUSTOM_STATUS_MODAL
    })
  },
  x = (e, t) => {
    s.ZP.trackWithMetadata(S.rMx.SEARCH_STARTED, {
      search_type: null != t && t === A.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
      location: e
    })
  },
  L = (e, t, n, r, i) => {
    s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_VIEWED, {
      search_type: null != i && i === A.Hz.REACTION ? S.aib.EMOJI_REACTION : S.aib.EMOJI,
      total_results: e,
      num_results_locked: t,
      query: r,
      location: n
    })
  },
  j = e => {
    var t, n, r;
    let {
      emoji: i,
      emojiSuggestions: o,
      searchQuery: l,
      isLocked: c,
      location: u,
      intention: d,
      index: f
    } = e, _ = null != (r = i.uniqueName) ? r : i.name, p = (0, a.EQ)(d).with(A.Hz.REACTION, () => S.aib.EMOJI_REACTION).with(A.Hz.AUTO_SUGGESTION, () => S.aib.EMOJI_AUTO_SUGGESTION).otherwise(() => S.aib.EMOJI);
    s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SELECTED, {
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
  M = (e, t) => {
    s.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_EMPTY, {
      search_type: S.aib.EMOJI,
      query: t,
      location: e
    })
  },
  k = e => {
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
  U = e => {
    var t;
    let n, {
      emoji: r,
      location: i,
      pickerIntention: a,
      category: o,
      subCategory: l = T.t0.NONE,
      position: c,
      newlyAddedHighlight: u,
      isBurstReaction: d
    } = e;
    switch (a) {
      case A.Hz.REACTION:
        n = d ? N.cd.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : N.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case A.Hz.STATUS:
        n = N.cd.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        n = N.cd.EMOJI_PICKER_EMOJI_CLICKED
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
  G = e => {
    var t;
    let {
      emoji: n,
      location: r
    } = e, i = null != (t = n.uniqueName) ? t : n.name;
    s.ZP.trackWithMetadata(S.rMx.EXPRESSION_FAVORITED, {
      location: r,
      expression_type: C.X1.EMOJI,
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
let B = (e, t) => e.type !== T.En.GUILD ? e.id : null != t ? t.name : "",
  Z = (e, t) => {
    switch (e) {
      case T.UX.TOP_GUILD_EMOJI:
        return R.intl.formatToPlainString(R.t.W6Wi1d, {
          guildName: t
        });
      case T.UX.RECENT:
        return R.intl.string(R.t["5TvaSk"]);
      case T.UX.FAVORITES:
        return R.intl.string(R.t.y3LQCA);
      case T.UX.ACTIVITY:
        return R.intl.string(R.t.O783tb);
      case T.UX.FLAGS:
        return R.intl.string(R.t.vvaizs);
      case T.UX.FOOD:
        return R.intl.string(R.t.ldm9aW);
      case T.UX.NATURE:
        return R.intl.string(R.t.egIBDA);
      case T.UX.OBJECTS:
        return R.intl.string(R.t.gWm7Mj);
      case T.UX.PEOPLE:
        return R.intl.string(R.t.GX594O);
      case T.UX.SYMBOLS:
        return R.intl.string(R.t.QXMYAQ);
      case T.UX.TRAVEL:
        return R.intl.string(R.t.w33hIC);
      case T.UX.PREMIUM_UPSELL:
        return R.intl.string(R.t.pAF6xM);
      case T.UX.SOUNDMOJI:
        return R.intl.string(R.t.f0Ezmp);
      default:
        return null != t ? t : e
    }
  };

function V(e, t, n, i) {
  r.useEffect(() => {
    p.DZ.loadIfNecessary()
  }, []);
  let a = (0, A.Gt)(n);
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

function F(e) {
  return r.useEffect(() => {
    p.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
}

function H(e) {
  return r.useEffect(() => {
    p.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
}

function Y(e) {
  return r.useEffect(() => {
    p.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
}

function W(e, t) {
  return r.useEffect(() => {
    p.DZ.loadIfNecessary()
  }, []), (0, o.e7)([l.ZP], () => null != t && l.ZP.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
}

function K(e) {
  return r.useEffect(() => {
    p.DZ.loadIfNecessary()
  }, []), (0, o.Wu)([l.ZP], () => l.ZP.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
}

function z(e, t, n) {
  if (null == n) return T.t0.NONE;
  let r = e.map(e => {
      var t, n;
      return null != (n = null != (t = e.id) ? t : e.uniqueName) ? n : e.name
    }),
    i = t.map(e => e.id);
  return r.includes(n) ? T.t0.TOP_GUILD_EMOJI : i.includes(n) ? T.t0.NEWLY_ADDED_EMOJI : T.t0.NONE
}

function q(e, t) {
  return e === A.Hz.REACTION ? t ? R.intl.string(R.t["h7ES+v"]) : R.intl.string(R.t["6any2N"]) : R.intl.string(R.t.KgK5qq)
}
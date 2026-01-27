/** Chunk was on web.js **/
/** chunk id: 822123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C5: () => k,
  CQ: () => w,
  D6: () => W,
  DA: () => K,
  EG: () => P,
  Fj: () => V,
  Nu: () => G,
  O7: () => Y,
  QZ: () => B,
  Wf: () => L,
  Wi: () => D,
  XI: () => H,
  _7: () => j,
  bo: () => x,
  sL: () => F,
  ss: () => N,
  wT: () => z,
  wt: () => U,
  xf: () => R,
  yB: () => M
}), require("./667532.js"), require("./321073.js"), require("./896048.js"), require("./801541.js"), require("./747238.js"), require("./812715.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk889137 = require("./889137.js"),
  Chunk311907 = require("./311907.js"),
  Chunk58149 = require("./58149.js"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk17591 = require("./17591.js"),
  Chunk704591 = require("./704591.js"),
  Chunk594061 = require("./594061.js"),
  Chunk71393 = require("./71393.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927813 = require("./927813.js"),
  Chunk690521 = require("./690521.js"),
  Chunk474090 = require("./474090.js"),
  Chunk818645 = require("./818645.js"),
  Chunk316884 = require("./316884.js"),
  Chunk732139 = require("./732139.js"),
  Chunk652215 = require("./652215.js"),
  Chunk307731 = require("./307731.js"),
  Chunk698279 = require("./698279.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx");
let N = function(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null == t ? true : t.getGuildId(),
      i = arguments.length > 3 && true !== arguments[3] && arguments[3];
    (0, u.V)(n);
    let a = (0, I.Re)(e),
      s = V(n),
      c = B(n),
      f = H(n),
      {
        topEmojis: m,
        newlyAddedEmojis: g
      } = (0, O.A)(n, e),
      {
        allEmojis: A
      } = (0, b.A)({
        topEmojis: m,
        newlyAddedEmojis: g
      }),
      S = (0, o.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
      T = (0, o.bG)([p.A], () => {
        var e;
        return null == (e = p.A.getGuild(n)) ? true : e.name
      }),
      N = (0, o.bG)([h.default], () => h.default.getCurrentUser()),
      w = (0, y.ki)(N),
      R = (0, d.Ym)({
        location: "useEmojiCategories"
      });
    return r.useMemo(() => {
      let r = S.getGroupedCustomEmoji(),
        o = _.Ay.getFlattenedGuildIds(),
        u = [],
        d = {
          type: v.s.SOUNDMOJI,
          name: C.intl.string(C.t.f0Ezmv),
          id: v.R2.SOUNDMOJI,
          isNitroLocked: false
        },
        h = r => E.Ay.getEmojiUnavailableReasons({
          categoryEmojis: r,
          channel: t,
          guildId: n,
          intention: e
        });
      return ((e, t) => {
        for (let i of e) {
          let e;
          if (t === v.s.GUILD && (e = p.A.getGuild(i)), null == e) continue;
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
          t === v.s.GUILD && (d = {
            type: v.s.GUILD,
            guild: e,
            isNitroLocked: !w && c && l === a.length,
            emojis: a,
            emojisDisabled: o
          }), null != d && (e.id === n ? u.unshift(d) : u.push(d))
        }
      })(o, v.s.GUILD), l.Ay.categories.reduce((t, r) => {
        if (r === v.R2.TOP_GUILD_EMOJI) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = h(A);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: v.s.TOP_GUILD_EMOJI,
            id: r,
            name: C.intl.formatToPlainString(C.t.W6Wi1X, {
              guildName: T
            }),
            isNitroLocked: false,
            emojis: n,
            emojisDisabled: e
          })
        } else if (r === v.R2.RECENT) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = h([I.b_.REACTION, I.b_.DEFAULT_REACT_EMOJI].includes(e) ? c : s);
          if (null == i || 0 === i.length) return t;
          t.push({
            type: v.s.RECENT,
            id: r,
            name: C.intl.string(C.t["5TvaSm"]),
            isNitroLocked: false,
            emojis: i,
            emojisDisabled: n
          })
        } else if (r === v.R2.FAVORITES) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = h(f);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: v.s.FAVORITES,
            id: r,
            name: C.intl.string(C.t.y3LQCG),
            isNitroLocked: false,
            emojis: n,
            emojisDisabled: e
          })
        } else if (r === v.R2.CUSTOM) {
          let e = u;
          a || (e = u.filter(e => e.type === v.s.GUILD && e.guild.id === n)), t.push(...e)
        } else t.push({
          type: v.s.UNICODE,
          id: r,
          name: r,
          isNitroLocked: false
        });
        return t
      }, R && i ? [d] : [])
    }, [S, t, n, e, w, A, T, c, s, f, a, R, i])
  },
  w = () => c.Ay.getCategories().map(e => ({
    type: v.s.UNICODE,
    id: e,
    name: e,
    isNitroLocked: false
  })),
  R = e => {
    let t = (null == e ? true : e.getGuildId()) != null;
    m.default.track(A.HAw.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? A.liQ.GUILD_CHANNEL : A.liQ.DM_CHANNEL,
      location_section: null != e ? A.JJy.EMOJI_PICKER_POPOUT : A.JJy.CUSTOM_STATUS_MODAL
    })
  },
  P = (e, t) => {
    s.Ay.trackWithMetadata(A.HAw.SEARCH_STARTED, {
      search_type: null != t && t === I.b_.REACTION ? A.I4_.EMOJI_REACTION : A.I4_.EMOJI,
      location: e
    })
  },
  D = (e, t, n, r, i) => {
    s.Ay.trackWithMetadata(A.HAw.SEARCH_RESULT_VIEWED, {
      search_type: null != i && i === I.b_.REACTION ? A.I4_.EMOJI_REACTION : A.I4_.EMOJI,
      total_results: e,
      num_results_locked: t,
      query: r,
      location: n
    })
  },
  L = e => {
    var t, n, r;
    let {
      emoji: i,
      emojiSuggestions: o,
      searchQuery: l,
      isLocked: c,
      location: u,
      intention: d,
      index: f
    } = e, p = null != (t = i.uniqueName) ? t : i.name, _ = (0, a.YW)(d).with(I.b_.REACTION, () => A.I4_.EMOJI_REACTION).with(I.b_.AUTO_SUGGESTION, () => A.I4_.EMOJI_AUTO_SUGGESTION).otherwise(() => A.I4_.EMOJI);
    s.Ay.trackWithMetadata(A.HAw.SEARCH_RESULT_SELECTED, {
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
      total_results: null == o || null == (n = o.results) ? true : n.length,
      emoji_suggestion_ids: null == o || null == (r = o.results) ? true : r.map(e => {
        let {
          emoji: t
        } = e;
        return t.id
      }).filter(e => null != e)
    })
  },
  x = (e, t) => {
    s.Ay.trackWithMetadata(A.HAw.SEARCH_RESULT_EMPTY, {
      search_type: A.I4_.EMOJI,
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
    s.Ay.trackWithMetadata(A.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
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
      subCategory: l = v.tm.NONE,
      position: c,
      newlyAddedHighlight: u,
      isBurstReaction: d
    } = e;
    switch (a) {
      case I.b_.REACTION:
        n = d ? T.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : T.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case I.b_.STATUS:
        n = T.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        n = T.e.EMOJI_PICKER_EMOJI_CLICKED
    }
    let f = null != (t = r.uniqueName) ? t : r.name;
    s.Ay.trackWithMetadata(A.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
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
    s.Ay.trackWithMetadata(A.HAw.EXPRESSION_FAVORITED, {
      location: r,
      expression_type: S.kx.EMOJI,
      expression_id: n.id,
      expression_name: i,
      expression_guild_id: n.guildId,
      is_custom: null != n.id,
      is_animated: n.animated
    })
  };
(0, Chunk735438.throttle)(e => {
  let {
    emojiSuggestions: t,
    analyticsLocation: n
  } = e;
  s.Ay.trackWithMetadata(A.HAw.AUTO_SUGGEST_DISPLAYED, {
    suggestion_type: A.ndy.EMOJI,
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
}, Chunk927813.A.Millis.HALF_SECOND, {
  leading: false,
  trailing: true
});
let U = (e, t) => e.type !== v.s.GUILD ? e.id : null != t ? t.name : "",
  G = (e, t) => {
    switch (e) {
      case v.R2.TOP_GUILD_EMOJI:
        return C.intl.formatToPlainString(C.t.W6Wi1X, {
          guildName: t
        });
      case v.R2.RECENT:
        return C.intl.string(C.t["5TvaSm"]);
      case v.R2.FAVORITES:
        return C.intl.string(C.t.y3LQCG);
      case v.R2.ACTIVITY:
        return C.intl.string(C.t.O783tR);
      case v.R2.FLAGS:
        return C.intl.string(C.t.vvaizu);
      case v.R2.FOOD:
        return C.intl.string(C.t.ldm9aY);
      case v.R2.NATURE:
        return C.intl.string(C.t.egIBDH);
      case v.R2.OBJECTS:
        return C.intl.string(C.t.gWm7Mk);
      case v.R2.PEOPLE:
        return C.intl.string(C.t.GX594D);
      case v.R2.SYMBOLS:
        return C.intl.string(C.t.QXMYAb);
      case v.R2.TRAVEL:
        return C.intl.string(C.t.w33hIP);
      case v.R2.PREMIUM_UPSELL:
        return C.intl.string(C.t.pAF6xE);
      case v.R2.SOUNDMOJI:
        return C.intl.string(C.t.f0Ezmv);
      default:
        return null != t ? t : e
    }
  };

function F(e, t, n, i) {
  r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []);
  let a = (0, I.Re)(n);
  return (0, o.bG)([l.Ay], () => {
    let r = e.replace(/^:/, "").replace(/:$/, "");
    return "" === r ? null : l.Ay.searchWithoutFetchingLatest({
      channel: t,
      query: r,
      count: 0,
      intention: n,
      includeExternalGuilds: a,
      showOnlyUnicode: i
    })
  }, [e, t, n, a, i], o.My)
}

function V(e) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, o.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
}

function B(e) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, o.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
}

function H(e) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, o.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
}

function Y(e, t) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, o.bG)([l.Ay], () => null != t && l.Ay.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
}

function W(e) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, o.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
}

function K(e, t, n) {
  if (null == n) return v.tm.NONE;
  let r = e.map(e => {
      var t, n;
      return null != (t = null != (n = e.id) ? n : e.uniqueName) ? t : e.name
    }),
    i = t.map(e => e.id);
  return r.includes(n) ? v.tm.TOP_GUILD_EMOJI : i.includes(n) ? v.tm.NEWLY_ADDED_EMOJI : v.tm.NONE
}

function z(e, t) {
  return e === I.b_.REACTION ? t ? C.intl.string(C.t["h7ES+n"]) : C.intl.string(C.t["6any2A"]) : C.intl.string(C.t.KgK5qg)
}
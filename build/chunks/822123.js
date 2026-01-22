/** Chunk was on web.js **/
/** chunk id: 822123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C5: () => k,
  CQ: () => R,
  D6: () => W,
  DA: () => K,
  EG: () => P,
  Fj: () => F,
  Nu: () => G,
  O7: () => Y,
  QZ: () => B,
  Wf: () => x,
  Wi: () => D,
  XI: () => H,
  _7: () => M,
  bo: () => L,
  sL: () => V,
  ss: () => N,
  wT: () => z,
  wt: () => U,
  xf: () => w,
  yB: () => j
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
    let a = (0, S.Re)(e),
      o = F(n),
      c = B(n),
      f = H(n),
      {
        topEmojis: m,
        newlyAddedEmojis: g
      } = (0, O.A)(n, e),
      {
        allEmojis: v
      } = (0, y.A)({
        topEmojis: m,
        newlyAddedEmojis: g
      }),
      I = (0, s.bG)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(n), [n]),
      T = (0, s.bG)([p.A], () => {
        var e;
        return null == (e = p.A.getGuild(n)) ? true : e.name
      }),
      N = (0, s.bG)([h.default], () => h.default.getCurrentUser()),
      R = (0, b.ki)(N),
      w = (0, d.Ym)({
        location: "useEmojiCategories"
      });
    return r.useMemo(() => {
      let r = I.getGroupedCustomEmoji(),
        s = _.Ay.getFlattenedGuildIds(),
        u = [],
        d = {
          type: A.s.SOUNDMOJI,
          name: C.intl.string(C.t.f0Ezmv),
          id: A.R2.SOUNDMOJI,
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
          if (t === A.s.GUILD && (e = p.A.getGuild(i)), null == e) continue;
          let a = null == r ? true : r[e.id];
          if (null == a || 0 === a.length) continue;
          let {
            emojisDisabled: s,
            emojisUnfiltered: o,
            emojisPremiumLockedCount: l,
            emojiNitroLocked: c
          } = h(a);
          if (0 === o.length) continue;
          let d = null;
          t === A.s.GUILD && (d = {
            type: A.s.GUILD,
            guild: e,
            isNitroLocked: !R && c && l === a.length,
            emojis: a,
            emojisDisabled: s
          }), null != d && (e.id === n ? u.unshift(d) : u.push(d))
        }
      })(s, A.s.GUILD), l.Ay.categories.reduce((t, r) => {
        if (r === A.R2.TOP_GUILD_EMOJI) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = h(v);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: A.s.TOP_GUILD_EMOJI,
            id: r,
            name: C.intl.formatToPlainString(C.t.W6Wi1X, {
              guildName: T
            }),
            isNitroLocked: false,
            emojis: n,
            emojisDisabled: e
          })
        } else if (r === A.R2.RECENT) {
          let {
            emojisDisabled: n,
            emojisUnfiltered: i
          } = h([S.b_.REACTION, S.b_.DEFAULT_REACT_EMOJI].includes(e) ? c : o);
          if (null == i || 0 === i.length) return t;
          t.push({
            type: A.s.RECENT,
            id: r,
            name: C.intl.string(C.t["5TvaSm"]),
            isNitroLocked: false,
            emojis: i,
            emojisDisabled: n
          })
        } else if (r === A.R2.FAVORITES) {
          let {
            emojisDisabled: e,
            emojisUnfiltered: n
          } = h(f);
          if (null == n || 0 === n.length) return t;
          t.push({
            type: A.s.FAVORITES,
            id: r,
            name: C.intl.string(C.t.y3LQCG),
            isNitroLocked: false,
            emojis: n,
            emojisDisabled: e
          })
        } else if (r === A.R2.CUSTOM) {
          let e = u;
          a || (e = u.filter(e => e.type === A.s.GUILD && e.guild.id === n)), t.push(...e)
        } else t.push({
          type: A.s.UNICODE,
          id: r,
          name: r,
          isNitroLocked: false
        });
        return t
      }, w && i ? [d] : [])
    }, [I, t, n, e, R, v, T, c, o, f, a, w, i])
  },
  R = () => c.Ay.getCategories().map(e => ({
    type: A.s.UNICODE,
    id: e,
    name: e,
    isNitroLocked: false
  })),
  w = e => {
    let t = (null == e ? true : e.getGuildId()) != null;
    m.default.track(v.HAw.PREMIUM_PROMOTION_OPENED, {
      location_page: t ? v.liQ.GUILD_CHANNEL : v.liQ.DM_CHANNEL,
      location_section: null != e ? v.JJy.EMOJI_PICKER_POPOUT : v.JJy.CUSTOM_STATUS_MODAL
    })
  },
  P = (e, t) => {
    o.Ay.trackWithMetadata(v.HAw.SEARCH_STARTED, {
      search_type: null != t && t === S.b_.REACTION ? v.I4_.EMOJI_REACTION : v.I4_.EMOJI,
      location: e
    })
  },
  D = (e, t, n, r, i) => {
    o.Ay.trackWithMetadata(v.HAw.SEARCH_RESULT_VIEWED, {
      search_type: null != i && i === S.b_.REACTION ? v.I4_.EMOJI_REACTION : v.I4_.EMOJI,
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
      emojiSuggestions: s,
      searchQuery: l,
      isLocked: c,
      location: u,
      intention: d,
      index: f
    } = e, p = null != (t = i.uniqueName) ? t : i.name, _ = (0, a.YW)(d).with(S.b_.REACTION, () => v.I4_.EMOJI_REACTION).with(S.b_.AUTO_SUGGESTION, () => v.I4_.EMOJI_AUTO_SUGGESTION).otherwise(() => v.I4_.EMOJI);
    o.Ay.trackWithMetadata(v.HAw.SEARCH_RESULT_SELECTED, {
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
      load_id: null == s ? true : s.loadId,
      total_results: null == s || null == (n = s.results) ? true : n.length,
      emoji_suggestion_ids: null == s || null == (r = s.results) ? true : r.map(e => {
        let {
          emoji: t
        } = e;
        return t.id
      }).filter(e => null != e)
    })
  },
  L = (e, t) => {
    o.Ay.trackWithMetadata(v.HAw.SEARCH_RESULT_EMPTY, {
      search_type: v.I4_.EMOJI,
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
    o.Ay.trackWithMetadata(v.HAw.EXPRESSION_PICKER_EXPRESSION_FOCUS, {
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
      category: s,
      subCategory: l = A.tm.NONE,
      position: c,
      newlyAddedHighlight: u,
      isBurstReaction: d
    } = e;
    switch (a) {
      case S.b_.REACTION:
        n = d ? T.e.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : T.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
        break;
      case S.b_.STATUS:
        n = T.e.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
        break;
      default:
        n = T.e.EMOJI_PICKER_EMOJI_CLICKED
    }
    let f = null != (t = r.uniqueName) ? t : r.name;
    o.Ay.trackWithMetadata(v.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
      type: n,
      location: i,
      expression_id: r.id,
      expression_name: f,
      expression_guild_id: r.guildId,
      is_custom: null != r.id,
      is_animated: r.animated,
      expression_picker_section: s,
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
    o.Ay.trackWithMetadata(v.HAw.EXPRESSION_FAVORITED, {
      location: r,
      expression_type: I.kx.EMOJI,
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
  o.Ay.trackWithMetadata(v.HAw.AUTO_SUGGEST_DISPLAYED, {
    suggestion_type: v.ndy.EMOJI,
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
let U = (e, t) => e.type !== A.s.GUILD ? e.id : null != t ? t.name : "",
  G = (e, t) => {
    switch (e) {
      case A.R2.TOP_GUILD_EMOJI:
        return C.intl.formatToPlainString(C.t.W6Wi1X, {
          guildName: t
        });
      case A.R2.RECENT:
        return C.intl.string(C.t["5TvaSm"]);
      case A.R2.FAVORITES:
        return C.intl.string(C.t.y3LQCG);
      case A.R2.ACTIVITY:
        return C.intl.string(C.t.O783tR);
      case A.R2.FLAGS:
        return C.intl.string(C.t.vvaizu);
      case A.R2.FOOD:
        return C.intl.string(C.t.ldm9aY);
      case A.R2.NATURE:
        return C.intl.string(C.t.egIBDH);
      case A.R2.OBJECTS:
        return C.intl.string(C.t.gWm7Mk);
      case A.R2.PEOPLE:
        return C.intl.string(C.t.GX594D);
      case A.R2.SYMBOLS:
        return C.intl.string(C.t.QXMYAb);
      case A.R2.TRAVEL:
        return C.intl.string(C.t.w33hIP);
      case A.R2.PREMIUM_UPSELL:
        return C.intl.string(C.t.pAF6xE);
      case A.R2.SOUNDMOJI:
        return C.intl.string(C.t.f0Ezmv);
      default:
        return null != t ? t : e
    }
  };

function V(e, t, n, i) {
  r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []);
  let a = (0, S.Re)(n);
  return (0, s.bG)([l.Ay], () => {
    let r = e.replace(/^:/, "").replace(/:$/, "");
    return "" === r ? null : l.Ay.searchWithoutFetchingLatest({
      channel: t,
      query: r,
      count: 0,
      intention: n,
      includeExternalGuilds: a,
      showOnlyUnicode: i
    })
  }, [e, t, n, a, i], s.My)
}

function F(e) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedEmojisWithoutFetchingLatest())
}

function B(e) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getFrequentlyUsedReactionEmojisWithoutFetchingLatest())
}

function H(e) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).favoriteEmojisWithoutFetchingLatest)
}

function Y(e, t) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, s.bG)([l.Ay], () => null != t && l.Ay.getDisambiguatedEmojiContext(e).isFavoriteEmojiWithoutFetchingLatest(t))
}

function W(e) {
  return r.useEffect(() => {
    f.bW.loadIfNecessary()
  }, []), (0, s.yK)([l.Ay], () => l.Ay.getDisambiguatedEmojiContext(e).getEmojiInPriorityOrderWithoutFetchingLatest())
}

function K(e, t, n) {
  if (null == n) return A.tm.NONE;
  let r = e.map(e => {
      var t, n;
      return null != (t = null != (n = e.id) ? n : e.uniqueName) ? t : e.name
    }),
    i = t.map(e => e.id);
  return r.includes(n) ? A.tm.TOP_GUILD_EMOJI : i.includes(n) ? A.tm.NEWLY_ADDED_EMOJI : A.tm.NONE
}

function z(e, t) {
  return e === S.b_.REACTION ? t ? C.intl.string(C.t["h7ES+n"]) : C.intl.string(C.t["6any2A"]) : C.intl.string(C.t.KgK5qg)
}
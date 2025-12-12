/** Chunk was on web.js **/
/** chunk id: 453070, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Go: () => P,
  LZ: () => D,
  Pq: () => v,
  RJ: () => R,
  Sd: () => j,
  XW: () => L,
  el: () => I,
  fP: () => C,
  fQ: () => T,
  t$: () => S
}), require("./539854.js"), require("./388685.js"), require("./290780.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk357156 = require("./357156.js"),
  Chunk695346 = require("./695346.js"),
  Chunk516373 = require("./516373.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk771845 = require("./771845.js"),
  Chunk594174 = require("./594174.js"),
  Chunk267642 = require("./267642.js"),
  Chunk700785 = require("./700785.js"),
  Chunk285651 = require("./285651.js"),
  Chunk268350 = require("./268350.js"),
  Chunk822179 = require("./822179.js"),
  Chunk926491 = require("./926491.js"),
  Chunk373228 = require("./373228.js"),
  Chunk378233 = require("./378233.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let v = e => {
    C();
    let t = (0, i.e7)([g.Z], () => g.Z.hasLoadedStickerPacks);
    r.useEffect(() => {
      t && null == g.Z.getStickerPack(e) && (0, m.FQ)(e)
    }, [e, t])
  },
  S = e => {
    let t = a.Wp.useSetting();
    return (0, b.WD)(t, e)
  },
  I = e => {
    let {
      collapsedStickersCategories: t,
      filteredStickers: n,
      listPaddingRight: i = 0,
      listWidth: a = 0,
      stickerNodeMargin: s = 0,
      stickerNodeWidth: u,
      stickersCategories: d
    } = e;
    return r.useMemo(() => {
      let e = Math.floor((a - i + s) / (u + s)),
        r = Math.floor(Math.max(s, (a - i - u * e) / (e - 1))),
        p = [],
        _ = [],
        m = [],
        h = 0,
        g = 0,
        y = 0;
      if (0 !== a) {
        let r = function(t, n) {
          let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
            i = (0, b.J8)(t[0]) ? l.Z.getGuild(t[0].guild_id) : true,
            {
              canCreateExpressions: a
            } = (0, o.Gw)(i),
            s = c.Z.getGuildId(),
            u = d.findIndex(e => e.type === E.Ih.FAVORITE),
            v = d.findIndex(e => e.type === E.Ih.RECENT),
            S = t.length;
          null != i && s === i.id && a && t.length < (0, f.A3)(i.premiumTier) && S++;
          let I = Math.ceil(S / e);
          _[g] = r ? 0 : I;
          for (let o = 0; o < I; o++) {
            let a = o * e,
              s = a + e,
              l = t.slice(a, s).map((e, t) => ({
                type: E.al.STICKER,
                sticker: e,
                packId: (0, b.jl)(e) ? e.pack_id : "TODO - fix",
                gridSectionIndex: g,
                rowIndex: h,
                columnIndex: t,
                visibleRowIndex: y,
                category: n
              }));
            g > v && g > u && null != i && S > t.length && l.push({
              type: E.al.CREATE_STICKER,
              guild_id: i.id,
              name: O.intl.string(O.t["UwF+Cw"]),
              gridSectionIndex: g,
              rowIndex: h,
              columnIndex: l.length,
              visibleRowIndex: y
            }), r || (y++, m.push(l), p.push(l.length)), h++
          }
          g++
        };
        if (null == n)
          for (let e of d) e.stickers.length > 0 ? (h++, r(e.stickers, e.type, (null == t ? true : t.has(e.id)) === true)) : e.type === E.Ih.EMPTY_GUILD_UPSELL && (_[g] = 0, g++);
        else n.sendable.length > 0 && r(n.sendable, E.Ih.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && r(n.sendableWithPremium, E.Ih.SEARCH_RESULTS)
      }
      return {
        rowCount: h,
        rowCountBySection: _,
        stickersGrid: m,
        gutterWidth: r,
        columnCounts: p
      }
    }, [t, n, i, a, s, u, d])
  },
  T = e => true,
  C = () => {
    Chunk473749.useEffect(() => {
      (0, Chunk268350.$p)()
    }, [])
  },
  A = e => {
    let t = (0, i.e7)([g.Z], () => g.Z.getAllGuildStickers()),
      n = (0, i.Wu)([u.ZP, l.Z], () => {
        let e = u.ZP.getFlattenedGuildIds(),
          t = [];
        return e.forEach(e => {
          let n = l.Z.getGuild(e);
          null != n && t.push(n)
        }), t
      }, []),
      a = (0, i.e7)([d.default], () => d.default.getCurrentUser());
    return r.useMemo(() => {
      let r = [];
      for (let {
          name: e,
          id: i
        }
        of n) {
        let n = t.get(i);
        null != n && 0 !== n.length && r.push({
          type: E.Ih.GUILD,
          id: i,
          name: e,
          stickers: n
        })
      }
      if ((null == e ? true : e.getGuildId()) != null) {
        let t = l.Z.getGuild(e.getGuildId()),
          {
            canManageAllExpressions: n
          } = (0, o.Gw)(t),
          i = r.findIndex(t => t.id === e.getGuildId());
        i >= 1 ? r.unshift(r.splice(i, 1)[0]) : false === i && null != t && n && r.unshift({
          type: E.Ih.EMPTY_GUILD_UPSELL,
          id: t.id,
          name: t.name,
          stickers: []
        }), null == a || p.BT({
          permission: y.Plq.USE_EXTERNAL_EMOJIS,
          user: a,
          context: e
        }) || (r = r.filter(t => t.id === e.getGuildId()))
      }
      return r
    }, [t, n, a, e])
  },
  N = [];

function P() {
  var e, t;
  return null != (t = null == (e = (0, Chunk516373.D)().favoriteStickers) ? true : module.stickerIds) ? exports : N
}

function R() {
  let e = P();
  return (0, Chunk442837.Wu)([Chunk926491.Z], () => module.map(e => g.Z.getStickerById(e)).filter(e => null != e && (!(0, b.J8)(e) || (0, b.V9)(e))), [module])
}

function w() {
  var e, t;
  let n = (0, Chunk516373.D)(),
    r = N;
  return (null == require || null == (e = require.stickerFrecency) ? true : module.stickers) != null && (r = Object.keys(null == require || null == (t = require.stickerFrecency) ? true : exports.stickers)), Chunk473749
}

function D() {
  let e = w();
  return (0, Chunk442837.Wu)([Chunk926491.Z], () => module.map(e => g.Z.getStickerById(e)).filter(e => true !== e), [module])
}
let x = e => {
    let t = R(),
      {
        packs: n,
        frequentlyUsedStickers: o
      } = (0, i.cj)([g.Z, h.Z], () => ({
        packs: g.Z.getPremiumPacks(),
        frequentlyUsedStickers: h.Z.stickerFrecencyWithoutFetchingLatest.frequently
      }), []),
      a = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
      s = A(e);
    return r.useMemo(() => {
      var r;
      let i = n.map(b.z);
      return [{
        type: E.Ih.FAVORITE,
        id: E.Ih.FAVORITE,
        name: O.intl.string(O.t.y3LQCG),
        stickers: t
      }, {
        type: E.Ih.RECENT,
        id: E.Ih.RECENT,
        name: O.intl.string(O.t["6hjpXW"]),
        stickers: null != (r = null == o ? true : o.filter(t => {
          if ((0, b.J8)(t)) {
            var r, i;
            return null != (i = null == (r = g.Z.getStickersByGuildId(t.guild_id)) ? true : r.some(e => e.id === t.id)) && i && (0, _.cO)(t, a, e) !== _.eb.NONSENDABLE
          }
          if ((0, b.jl)(t)) return n.some(e => e.id === t.pack_id)
        })) ? r : []
      }, ...s, ...i]
    }, [n, t, o, s, a, e])
  },
  L = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = (0, i.e7)([g.Z], () => g.Z.getStickerById(e.id)),
      [o, a] = r.useState(true),
      [s, l] = r.useState(false),
      c = (0, b.J8)(e) || (0, b.jl)(e),
      u = {
        hasFetched: s,
        isReturnable: c,
        renderableSticker: e,
        shouldFetch: o,
        stickersStoreDefinition: n
      },
      d = r.useRef(u);
    return (r.useEffect(() => {
      d.current = u
    }), r.useEffect(() => {
      (async () => {
        let {
          hasFetched: e,
          isReturnable: n,
          renderableSticker: r,
          shouldFetch: i,
          stickersStoreDefinition: o
        } = d.current;
        if (t && !n && null == o && i && !e) {
          a(false);
          try {
            await (0, m.Il)(r.id)
          } catch (e) {}
          l(true)
        }
      })()
    }, [t]), c) ? [e, s] : [null != n ? n : null, s]
  },
  j = e => {
    let t = x(e);
    return r.useMemo(() => t.filter(e => e.type === E.Ih.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
  }
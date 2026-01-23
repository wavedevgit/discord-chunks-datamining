/** Chunk was on web.js **/
/** chunk id: 256449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gc: () => R,
  Sr: () => v,
  Th: () => A,
  UT: () => D,
  XQ: () => T,
  ZO: () => S,
  Zq: () => L,
  _c: () => I,
  ln: () => w,
  pD: () => j
}), require("./321073.js"), require("./896048.js"), require("./667532.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk931991 = require("./931991.js"),
  Chunk253932 = require("./253932.js"),
  Chunk999886 = require("./999886.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk711014 = require("./711014.js"),
  Chunk287809 = require("./287809.js"),
  Chunk473145 = require("./473145.js"),
  Chunk488926 = require("./488926.js"),
  Chunk361670 = require("./361670.js"),
  Chunk631576 = require("./631576.js"),
  Chunk931959 = require("./931959.js"),
  Chunk679382 = require("./679382.js"),
  Chunk842086 = require("./842086.js"),
  Chunk378058 = require("./378058.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let v = e => {
    T();
    let t = (0, i.bG)([g.A], () => g.A.hasLoadedStickerPacks);
    r.useEffect(() => {
      t && null == g.A.getStickerPack(e) && (0, h.zk)(e)
    }, [e, t])
  },
  A = e => {
    let t = s.S0.useSetting();
    return (0, y.Qn)(t, e)
  },
  I = e => {
    let {
      collapsedStickersCategories: t,
      filteredStickers: n,
      listPaddingRight: i = 0,
      listWidth: s = 0,
      stickerNodeMargin: o = 0,
      stickerNodeWidth: u,
      stickersCategories: d
    } = e;
    return r.useMemo(() => {
      let e = Math.floor((s - i + o) / (u + o)),
        r = Math.floor(Math.max(o, (s - i - u * e) / (e - 1))),
        p = [],
        _ = [],
        h = [],
        m = 0,
        g = 0,
        b = 0;
      if (0 !== s) {
        let r = function(t, n) {
          let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
            i = (0, y.Xw)(t[0]) ? l.A.getGuild(t[0].guild_id) : true,
            {
              canCreateExpressions: s
            } = (0, a.ie)(i),
            o = c.A.getGuildId(),
            u = d.findIndex(e => e.type === E.Z2.FAVORITE),
            v = d.findIndex(e => e.type === E.Z2.RECENT),
            A = t.length;
          null != i && o === i.id && s && t.length < (0, f.aG)(i.premiumTier) && A++;
          let I = Math.ceil(A / e);
          _[g] = r ? 0 : I;
          for (let a = 0; a < I; a++) {
            let s = a * e,
              o = s + e,
              l = t.slice(s, o).map((e, t) => ({
                type: E.op.STICKER,
                sticker: e,
                packId: (0, y.FD)(e) ? e.pack_id : "TODO - fix",
                gridSectionIndex: g,
                rowIndex: m,
                columnIndex: t,
                visibleRowIndex: b,
                category: n
              }));
            g > v && g > u && null != i && A > t.length && l.push({
              type: E.op.CREATE_STICKER,
              guild_id: i.id,
              name: O.intl.string(O.t["UwF+Cw"]),
              gridSectionIndex: g,
              rowIndex: m,
              columnIndex: l.length,
              visibleRowIndex: b
            }), r || (b++, h.push(l), p.push(l.length)), m++
          }
          g++
        };
        if (null == n)
          for (let e of d) e.stickers.length > 0 ? (m++, r(e.stickers, e.type, (null == t ? true : t.has(e.id)) === true)) : e.type === E.Z2.EMPTY_GUILD_UPSELL && (_[g] = 0, g++);
        else n.sendable.length > 0 && r(n.sendable, E.Z2.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && r(n.sendableWithPremium, E.Z2.SEARCH_RESULTS)
      }
      return {
        rowCount: m,
        rowCountBySection: _,
        stickersGrid: h,
        gutterWidth: r,
        columnCounts: p
      }
    }, [t, n, i, s, o, u, d])
  },
  S = e => true,
  T = () => {
    r.useEffect(() => {
      (0, h.YB)()
    }, [])
  },
  C = e => {
    let t = (0, i.bG)([g.A], () => g.A.getAllGuildStickers()),
      n = (0, i.yK)([u.Ay, l.A], () => {
        let e = u.Ay.getFlattenedGuildIds(),
          t = [];
        return e.forEach(e => {
          let n = l.A.getGuild(e);
          null != n && t.push(n)
        }), t
      }, []),
      s = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return r.useMemo(() => {
      let r = [];
      for (let {
          name: e,
          id: i
        }
        of n) {
        let n = t.get(i);
        null != n && 0 !== n.length && r.push({
          type: E.Z2.GUILD,
          id: i,
          name: e,
          stickers: n
        })
      }
      if ((null == e ? true : e.getGuildId()) != null) {
        let t = l.A.getGuild(e.getGuildId()),
          {
            canManageAllExpressions: n
          } = (0, a.ie)(t),
          i = r.findIndex(t => t.id === e.getGuildId());
        i >= 1 ? r.unshift(r.splice(i, 1)[0]) : false === i && null != t && n && r.unshift({
          type: E.Z2.EMPTY_GUILD_UPSELL,
          id: t.id,
          name: t.name,
          stickers: []
        }), null == s || p.$3({
          permission: b.xBc.USE_EXTERNAL_EMOJIS,
          user: s,
          context: e
        }) || (r = r.filter(t => t.id === e.getGuildId()))
      }
      return r
    }, [t, n, s, e])
  },
  N = [];

function w() {
  var e, t;
  return null != (e = null == (t = (0, o.k)().favoriteStickers) ? true : t.stickerIds) ? e : N
}

function R() {
  let e = w();
  return (0, i.yK)([g.A], () => e.map(e => g.A.getStickerById(e)).filter(e => null != e && (!(0, y.Xw)(e) || (0, y.Y4)(e))), [e])
}

function P() {
  var e, t;
  let n = (0, o.k)(),
    r = N;
  return (null == n || null == (e = n.stickerFrecency) ? true : e.stickers) != null && (r = Object.keys(null == n || null == (t = n.stickerFrecency) ? true : t.stickers)), r
}

function D() {
  let e = P();
  return (0, i.yK)([g.A], () => e.map(e => g.A.getStickerById(e)).filter(e => true !== e), [e])
}
let x = e => {
    let t = R(),
      {
        packs: n,
        frequentlyUsedStickers: a
      } = (0, i.cf)([g.A, m.A], () => ({
        packs: g.A.getPremiumPacks(),
        frequentlyUsedStickers: m.A.stickerFrecencyWithoutFetchingLatest.frequently
      }), []),
      s = (0, i.bG)([d.default], () => d.default.getCurrentUser()),
      o = C(e);
    return r.useMemo(() => {
      var r;
      let i = n.map(y.T5);
      return [{
        type: E.Z2.FAVORITE,
        id: E.Z2.FAVORITE,
        name: O.intl.string(O.t.y3LQCG),
        stickers: t
      }, {
        type: E.Z2.RECENT,
        id: E.Z2.RECENT,
        name: O.intl.string(O.t["6hjpXW"]),
        stickers: null != (r = null == a ? true : a.filter(t => {
          if ((0, y.Xw)(t)) {
            var r, i;
            return null != (r = null == (i = g.A.getStickersByGuildId(t.guild_id)) ? true : i.some(e => e.id === t.id)) && r && (0, _.W$)(t, s, e) !== _.Ux.NONSENDABLE
          }
          if ((0, y.FD)(t)) return n.some(e => e.id === t.pack_id)
        })) ? r : []
      }, ...o, ...i]
    }, [n, t, a, o, s, e])
  },
  L = function(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = (0, i.bG)([g.A], () => g.A.getStickerById(e.id)),
      [a, s] = r.useState(true),
      [o, l] = r.useState(false),
      c = (0, y.Xw)(e) || (0, y.FD)(e),
      u = {
        hasFetched: o,
        isReturnable: c,
        renderableSticker: e,
        shouldFetch: a,
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
          stickersStoreDefinition: a
        } = d.current;
        if (t && !n && null == a && i && !e) {
          s(false);
          try {
            await (0, h.AO)(r.id)
          } catch (e) {}
          l(true)
        }
      })()
    }, [t]), c) ? [e, o] : [null != n ? n : null, o]
  },
  j = e => {
    let t = x(e);
    return r.useMemo(() => t.filter(e => e.type === E.Z2.EMPTY_GUILD_UPSELL || e.stickers.length > 0, []), [t])
  }
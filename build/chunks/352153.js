/** Chunk was on 1272 **/
/** chunk id: 352153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => h
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk699682 = require("./699682.js"),
  Chunk948053 = require("./948053.js"),
  Chunk944596 = require("./944596.js"),
  Chunk940893 = require("./940893.js"),
  Chunk144725 = require("./144725.js"),
  Chunk797394 = require("./797394.js"),
  Chunk613928 = require("./613928.js"),
  Chunk769102 = require("./769102.js"),
  Chunk390536 = require("./390536.js"),
  Chunk11543 = require("./11543.js");

function h(e) {
  let {
    showDot: t,
    notificationItem: n
  } = e, [h, m] = r.useState(false), {
    unreadItems: b,
    readItems: _,
    allUnreadItemsHydrated: E
  } = (0, p.Z)(), O = (0, i.e7)([c.Z], () => c.Z.getVersion(), []), v = (0, i.e7)([c.Z], () => !(c.Z.isFirstPageHydrated() && O > 0));
  r.useEffect(() => {
    null != c.Z.getLoadId() && o.m.trackFeedShown({
      homeSessionId: "gravity"
    })
  }, [O]);
  let y = (0, i.e7)([c.Z], () => c.Z.isRefreshing(), []),
    I = (0, i.e7)([c.Z], () => c.Z.isHydrating(), []),
    [C, S] = r.useState([]),
    {
      loadId: T,
      lastScrollEventTimestamp: N
    } = (0, i.cj)([c.Z], () => ({
      loadId: c.Z.getLoadId(),
      lastScrollEventTimestamp: c.Z.lastScrollEvent()
    })),
    j = C.filter(e => {
      let {
        item: t
      } = e;
      return !s.X.has(t.data.kind)
    }).map(e => {
      let {
        item: t
      } = e;
      return t.id
    }).pop(),
    P = (0, l.Z)(j);
  r.useEffect(() => {
    if (y || v || null == P || null == j || j === P) return;
    let e = Date.now();
    e - N > g.C && (a.Z.gravityScrollEvent(e), o.m.trackFeedFirstScrollStarted())
  }, [y, N, P, j, T, v]);
  let x = r.useCallback(e => {
      let {
        viewableItems: t
      } = e;
      if (t.some(e => "end" === e.item.data.kind) && m(true), 0 === t.length) return;
      S(t);
      let n = [],
        r = (0, d.FJ)(t),
        i = Date.now();
      for (let e = r.length - 1; e >= 0; e--) {
        let t = r[e];
        null != t && n.push({
          id: t.id,
          type: (0, u.v$)(t),
          timestamp: i++
        })
      }
      n.length > 0 && a.Z.ackGravityItems(n, true), o.m.trackItemShortImpression(t, r.map(e => ({
        id: e.id,
        type: (0, u.v$)(e)
      })), O)
    }, [O, m]),
    A = r.useCallback(e => {
      let {
        viewableItems: t
      } = e;
      if (0 === t.length) return;
      let n = (0, d.FJ)(t);
      o.m.trackItemLongImpression(t, n.map(e => ({
        id: e.id,
        type: (0, u.v$)(e)
      })), O), a.Z.triggerItemsLongImpression(t.filter(e => {
        let {
          item: t
        } = e;
        return !s.X.has(t.data.kind)
      }).map(e => {
        var t, n;
        let {
          item: r,
          index: i
        } = e;
        return {
          itemId: r.id,
          itemType: (0, d.HG)(r),
          triggerType: "list",
          itemFeedIndex: i,
          itemScore: null != (t = r.score) ? t : null,
          itemChannelType: null != (n = r.channelType) ? n : null,
          isInitiallyVisible: false
        }
      }))
    }, [O]),
    Z = r.useCallback(e => {
      let {
        viewableItems: t
      } = e;
      a.Z.startItemsDwell(t.filter(e => {
        let {
          item: t
        } = e;
        return !s.X.has(t.data.kind)
      }).map(e => {
        var t, n;
        let {
          item: r,
          index: i
        } = e;
        return {
          itemId: r.id,
          itemType: (0, d.HG)(r),
          triggerType: "list",
          itemFeedIndex: i,
          itemScore: null != (t = r.score) ? t : null,
          itemChannelType: null != (n = r.channelType) ? n : null,
          isInitiallyVisible: false
        }
      }))
    }, []),
    w = r.useMemo(() => [{
      viewabilityConfig: {
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 100,
        minimumViewTime: 50
      },
      onViewableItemsChanged: x
    }, {
      viewabilityConfig: {
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 50,
        minimumViewTime: 1e3
      },
      onViewableItemsChanged: A
    }, {
      viewabilityConfig: {
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 50,
        minimumViewTime: 50
      },
      onViewableItemsChanged: Z
    }], [x, A, Z]);
  r.useEffect(() => {
    a.Z.openICYMITab()
  }, []);
  let L = (0, f.G)(t),
    {
      data: R,
      stickyHeaderIndices: D
    } = r.useMemo(() => {
      let e = [];
      return v && null != n && n.type === u.Ni.CUSTOM_STATUS && e.push({
        id: n.id,
        timestamp: Date.now(),
        data: {
          kind: "contentInventory",
          content: (0, d.mV)(n).activity
        },
        score: n.score,
        unread: true
      }), v ? e.push({
        id: "loading",
        timestamp: 0,
        unread: false,
        data: {
          kind: "loading"
        }
      }) : (b.forEach(t => {
        (0, d.eO)(t) || e.push(t)
      }), E && e.push({
        id: "end",
        timestamp: 0,
        unread: false,
        data: {
          kind: "end"
        }
      }), _.length > 0 && _.forEach(t => {
        (0, d.eO)(t) || e.push(t)
      }), I && e.push({
        id: "bottomLoading",
        timestamp: 0,
        unread: false,
        data: {
          kind: "bottomLoading"
        }
      })), {
        data: e,
        stickyHeaderIndices: []
      }
    }, [v, n, b, E, _, I]);
  return {
    data: R,
    loading: v,
    version: O,
    visibleItemIds: C,
    endVisible: h,
    isRefreshing: y,
    handleOnRefresh: L,
    stickyHeaderIndices: D,
    viewabilityConfigCallbackPairs: w
  }
}
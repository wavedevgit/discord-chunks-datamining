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
    notificationItem: n,
    setScrollState: h
  } = e, [m, b] = r.useState(false), {
    unreadItems: _,
    readItems: E,
    allUnreadItemsHydrated: O
  } = (0, p.Z)(), v = (0, i.e7)([c.Z], () => c.Z.getVersion(), []), y = (0, i.e7)([c.Z], () => !(c.Z.isFirstPageHydrated() && v > 0));
  r.useEffect(() => {
    null != c.Z.getLoadId() && o.m.trackFeedShown({
      homeSessionId: "gravity"
    })
  }, [v]);
  let I = (0, i.e7)([c.Z], () => c.Z.isRefreshing(), []),
    C = (0, i.e7)([c.Z], () => c.Z.isHydrating(), []),
    [S, T] = r.useState([]),
    {
      loadId: N,
      lastScrollEventTimestamp: j
    } = (0, i.cj)([c.Z], () => ({
      loadId: c.Z.getLoadId(),
      lastScrollEventTimestamp: c.Z.lastScrollEvent()
    })),
    P = S.filter(e => {
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
    x = (0, l.Z)(P);
  r.useEffect(() => {
    if (I || y || null == x || null == P || P === x) return;
    let e = Date.now();
    e - j > g.C && (a.Z.gravityScrollEvent(e), o.m.trackFeedFirstScrollStarted())
  }, [I, j, x, P, N, y]);
  let A = r.useCallback(e => {
      var t, n;
      let {
        viewableItems: r
      } = e;
      if (r.some(e => "end" === e.item.data.kind) && b(true), 0 === r.length) return;
      T(r), (null != (n = null == (t = r[r.length - 1]) ? true : t.index) ? n : 0) > 10 && (null == h || h());
      let i = [],
        l = (0, d.FJ)(r),
        s = Date.now();
      for (let e = l.length - 1; e >= 0; e--) {
        let t = l[e];
        null != t && i.push({
          id: t.id,
          type: (0, u.v$)(t),
          timestamp: s++
        })
      }
      i.length > 0 && a.Z.ackGravityItems(i, true), o.m.trackItemShortImpression(r, l.map(e => ({
        id: e.id,
        type: (0, u.v$)(e)
      })), v)
    }, [v, b, h]),
    Z = r.useCallback(e => {
      let {
        viewableItems: t
      } = e;
      if (0 === t.length) return;
      let n = (0, d.FJ)(t);
      o.m.trackItemLongImpression(t, n.map(e => ({
        id: e.id,
        type: (0, u.v$)(e)
      })), v), a.Z.triggerItemsLongImpression(t.filter(e => {
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
    }, [v]),
    w = r.useCallback(e => {
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
    L = r.useMemo(() => [{
      viewabilityConfig: {
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 100,
        minimumViewTime: 50
      },
      onViewableItemsChanged: A
    }, {
      viewabilityConfig: {
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 50,
        minimumViewTime: 1e3
      },
      onViewableItemsChanged: Z
    }, {
      viewabilityConfig: {
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 50,
        minimumViewTime: 50
      },
      onViewableItemsChanged: w
    }], [A, Z, w]);
  r.useEffect(() => {
    a.Z.openICYMITab()
  }, []);
  let R = (0, f.G)(t),
    {
      data: D,
      stickyHeaderIndices: M
    } = r.useMemo(() => {
      let e = [];
      return y && null != n && n.type === u.Ni.CUSTOM_STATUS && e.push({
        id: n.id,
        timestamp: Date.now(),
        data: {
          kind: "contentInventory",
          content: (0, d.mV)(n).activity
        },
        score: n.score,
        unread: true
      }), y ? e.push({
        id: "loading",
        timestamp: 0,
        unread: false,
        data: {
          kind: "loading"
        }
      }) : (_.forEach(t => {
        (0, d.eO)(t) || e.push(t)
      }), O && e.push({
        id: "end",
        timestamp: 0,
        unread: false,
        data: {
          kind: "end"
        }
      }), E.length > 0 && E.forEach(t => {
        (0, d.eO)(t) || e.push(t)
      }), C && e.push({
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
    }, [y, n, _, O, E, C]);
  return {
    data: D,
    loading: y,
    version: v,
    visibleItemIds: S,
    endVisible: m,
    isRefreshing: I,
    handleOnRefresh: R,
    stickyHeaderIndices: M,
    viewabilityConfigCallbackPairs: L
  }
}
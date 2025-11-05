/** Chunk was on 1272 **/
/** chunk id: 352153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => g
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
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

function g(e) {
  let {
    showDot: t,
    notificationItem: n,
    setScrollState: g
  } = e, [m, _] = r.useState(false), {
    unreadItems: b,
    readItems: E,
    allUnreadItemsHydrated: O
  } = (0, p.Z)(), y = (0, i.e7)([c.Z], () => c.Z.getVersion(), []), v = (0, i.e7)([c.Z], () => !(c.Z.isFirstPageHydrated() && y > 0));
  r.useEffect(() => {
    null != c.Z.getLoadId() && s.m.trackFeedShown({
      homeSessionId: "gravity"
    })
  }, [y]);
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
      return !o.X.has(t.data.kind)
    }).map(e => {
      let {
        item: t
      } = e;
      return t.id
    }).pop(),
    x = (0, l.Z)(P);
  r.useEffect(() => {
    if (I || v || null == x || null == P || P === x) return;
    let e = Date.now();
    e - j > h.C && (a.Z.gravityScrollEvent(e), s.m.trackFeedFirstScrollStarted())
  }, [I, j, x, P, N, v]);
  let A = r.useCallback(e => {
      var t, n;
      let {
        viewableItems: r
      } = e;
      if (r.some(e => "end" === e.item.data.kind) && _(true), 0 === r.length) return;
      T(r), (null != (n = null == (t = r[r.length - 1]) ? true : t.index) ? n : 0) > 10 && (null == g || g());
      let i = [];
      r.forEach(e => {
        let {
          item: t
        } = e;
        "channelSummary" === t.data.kind && i.push({
          id: t.id,
          type: "summary",
          timestamp: Date.now()
        })
      });
      let l = (0, d.FJ)(r),
        o = Date.now();
      for (let e = l.length - 1; e >= 0; e--) {
        let t = l[e];
        null != t && i.push({
          id: t.id,
          type: (0, u.v$)(t),
          timestamp: o++
        })
      }
      i.length > 0 && a.Z.ackGravityItems(i, true), s.m.trackItemShortImpression(r, l.map(e => ({
        id: e.id,
        type: (0, u.v$)(e)
      })), y)
    }, [y, _, g]),
    Z = r.useCallback(e => {
      let {
        viewableItems: t
      } = e;
      if (0 === t.length) return;
      let n = (0, d.FJ)(t);
      s.m.trackItemLongImpression(t, n.map(e => ({
        id: e.id,
        type: (0, u.v$)(e)
      })), y), a.Z.triggerItemsLongImpression(t.filter(e => {
        let {
          item: t
        } = e;
        return !o.X.has(t.data.kind)
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
    }, [y]),
    w = r.useCallback(e => {
      let {
        viewableItems: t
      } = e;
      a.Z.startItemsDwell(t.filter(e => {
        let {
          item: t
        } = e;
        return !o.X.has(t.data.kind)
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
    }, [v, n, b, O, E, C]);
  return {
    data: D,
    loading: v,
    version: y,
    visibleItemIds: S,
    endVisible: m,
    isRefreshing: I,
    handleOnRefresh: R,
    stickyHeaderIndices: M,
    viewabilityConfigCallbackPairs: L
  }
}
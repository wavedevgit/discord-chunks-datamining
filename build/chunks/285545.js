/** Chunk was on 21738 **/
/** chunk id: 285545, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => m
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk919796 = require("./919796.js"),
  Chunk4106 = require("./4106.js"),
  Chunk105971 = require("./105971.js"),
  Chunk800319 = require("./800319.js"),
  Chunk883344 = require("./883344.js"),
  Chunk596720 = require("./596720.js"),
  Chunk859524 = require("./859524.js"),
  Chunk639040 = require("./639040.js"),
  Chunk567061 = require("./567061.js"),
  Chunk118972 = require("./118972.js");

function m(e) {
  let {
    showDot: t,
    notificationItem: n
  } = e, [m, f] = r.useState(false), {
    unreadItems: A,
    readItems: _,
    allUnreadItemsHydrated: b
  } = (0, p.A)(), E = (0, i.bG)([c.A], () => c.A.getVersion(), []), O = (0, i.bG)([c.A], () => !(c.A.isFirstPageHydrated() && E > 0));
  r.useEffect(() => {
    null != c.A.getLoadId() && s.k.trackFeedShown({
      homeSessionId: "gravity"
    })
  }, [E]);
  let y = (0, i.bG)([c.A], () => c.A.isRefreshing(), []),
    I = (0, i.bG)([c.A], () => c.A.isHydrating(), []),
    [v, S] = r.useState([]),
    {
      loadId: C,
      lastScrollEventTimestamp: N
    } = (0, i.cf)([c.A], () => ({
      loadId: c.A.getLoadId(),
      lastScrollEventTimestamp: c.A.lastScrollEvent()
    })),
    T = v.filter(e => {
      let {
        item: t
      } = e;
      return !o.P.has(t.data.kind)
    }).map(e => {
      let {
        item: t
      } = e;
      return t.id
    }).pop(),
    j = (0, l.A)(T);
  r.useEffect(() => {
    if (y || O || null == j || null == T || T === j) return;
    let e = Date.now();
    e - N > g.N && (a.A.gravityScrollEvent(e), s.k.trackFeedFirstScrollStarted())
  }, [y, N, j, T, C, O]);
  let x = r.useCallback(e => {
      let {
        viewableItems: t
      } = e;
      if (t.some(e => "end" === e.item.data.kind) && f(true), 0 === t.length) return;
      S(t);
      let n = [],
        r = (0, d.P0)(t),
        i = Date.now();
      for (let e = r.length - 1; e >= 0; e--) {
        let t = r[e];
        null != t && n.push({
          id: t.id,
          type: (0, u.xG)(t),
          timestamp: i++
        })
      }
      n.length > 0 && a.A.ackGravityItems(n, true), s.k.trackItemShortImpression(t, r.map(e => ({
        id: e.id,
        type: (0, u.xG)(e)
      })), E)
    }, [E, f]),
    P = r.useCallback(e => {
      let {
        viewableItems: t
      } = e;
      if (0 === t.length) return;
      let n = (0, d.P0)(t);
      s.k.trackItemLongImpression(t, n.map(e => ({
        id: e.id,
        type: (0, u.xG)(e)
      })), E), a.A.triggerItemsLongImpression(t.filter(e => {
        let {
          item: t
        } = e;
        return !o.P.has(t.data.kind)
      }).map(e => {
        var t, n;
        let {
          item: r,
          index: i
        } = e;
        return {
          itemId: r.id,
          itemType: (0, d.px)(r),
          triggerType: "list",
          itemFeedIndex: i,
          itemScore: null != (t = r.score) ? t : null,
          itemChannelType: null != (n = r.channelType) ? n : null,
          isInitiallyVisible: false
        }
      }))
    }, [E]),
    w = r.useCallback(e => {
      let {
        viewableItems: t
      } = e;
      a.A.startItemsDwell(t.filter(e => {
        let {
          item: t
        } = e;
        return !o.P.has(t.data.kind)
      }).map(e => {
        var t, n;
        let {
          item: r,
          index: i
        } = e;
        return {
          itemId: r.id,
          itemType: (0, d.px)(r),
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
      onViewableItemsChanged: x
    }, {
      viewabilityConfig: {
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 50,
        minimumViewTime: 1e3
      },
      onViewableItemsChanged: P
    }, {
      viewabilityConfig: {
        waitForInteraction: false,
        viewAreaCoveragePercentThreshold: 50,
        minimumViewTime: 50
      },
      onViewableItemsChanged: w
    }], [x, P, w]);
  r.useEffect(() => {
    a.A.openICYMITab()
  }, []);
  let R = (0, h.E)(t),
    {
      data: D,
      stickyHeaderIndices: M
    } = r.useMemo(() => {
      let e = [];
      return O && null != n && n.type === u.Mm.CUSTOM_STATUS && e.push({
        id: n.id,
        timestamp: Date.now(),
        data: {
          kind: "contentInventory",
          content: (0, d.YM)(n).activity
        },
        score: n.score,
        unread: true
      }), O ? e.push({
        id: "loading",
        timestamp: 0,
        unread: false,
        data: {
          kind: "loading"
        }
      }) : (A.forEach(t => {
        (0, d.yx)(t) || e.push(t)
      }), b && e.push({
        id: "end",
        timestamp: 0,
        unread: false,
        data: {
          kind: "end"
        }
      }), _.length > 0 && _.forEach(t => {
        (0, d.yx)(t) || e.push(t)
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
    }, [O, n, A, b, _, I]);
  return {
    data: D,
    loading: O,
    version: E,
    visibleItemIds: v,
    endVisible: m,
    isRefreshing: y,
    handleOnRefresh: R,
    stickyHeaderIndices: M,
    viewabilityConfigCallbackPairs: L
  }
}
/** Chunk was on 1113 **/
/** chunk id: 467627, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk960488 = require("./960488.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk621466 = require("./621466.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk451988 = require("./451988.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk951001 = require("./951001.js"),
  Chunk964486 = require("./964486.js"),
  Chunk260762 = require("./260762.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk832275 = require("./832275.js"),
  Chunk730253 = require("./730253.jsx"),
  Chunk633965 = require("./633965.js"),
  Chunk857071 = require("./857071.js"),
  Chunk851109 = require("./851109.js"),
  Chunk397938 = require("./397938.jsx"),
  Chunk366811 = require("./366811.js"),
  Chunk72314 = require("./72314.js"),
  Chunk543897 = require("./543897.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk711014 = require("./711014.js"),
  Chunk723702 = require("./723702.js"),
  Chunk757780 = require("./757780.js"),
  Chunk263715 = require("./263715.js"),
  Chunk987344 = require("./987344.js"),
  Chunk750448 = require("./750448.jsx"),
  Chunk845211 = require("./845211.jsx"),
  Chunk941604 = require("./941604.jsx"),
  Chunk246884 = require("./246884.jsx"),
  Chunk497140 = require("./497140.jsx"),
  Chunk34247 = require("./34247.jsx"),
  Chunk850729 = require("./850729.jsx"),
  Chunk521872 = require("./521872.jsx"),
  Chunk827975 = require("./827975.jsx"),
  Chunk369915 = require("./369915.jsx"),
  Chunk232879 = require("./232879.jsx"),
  Chunk181800 = require("./181800.jsx"),
  Chunk343170 = require("./343170.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk216788 = require("./216788.js");

function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function en(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      et(e, t, n[t])
    })
  }
  return e
}
let er = (0, Chunk723702.isWindows)() ? 4 : 12 * !(0, Chunk723702.isMac)();

function el(e) {
  return e.startsWith(Z.BVt.GUILD_DISCOVERY) || e.startsWith(Z.BVt.GLOBAL_DISCOVERY)
}
class ei {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n, r, i) {
    et(this, "guildsTree", true), et(this, "setScrolling", true), et(this, "setIsScrolledToBottom", true), et(this, "onScroll", true), et(this, "sizes", true), et(this, "scrollerRef", true), et(this, "nodeRefs", true), et(this, "timeout", true), et(this, "observer", true), et(this, "setResizeObserver", true), et(this, "clearResizeObserver", true), et(this, "scrollToGuild", true), et(this, "handleJumpToGuild", true), et(this, "scrollTo", true), et(this, "scrollToBottom", true), et(this, "isItemVisible", true), et(this, "getVisibleGuildIds", true), et(this, "handleScroll", true), et(this, "_handleScrollDebounced", true), et(this, "_handleScrollThrottled", true), et(this, "setNodeRef", true), this.guildsTree = e, this.setScrolling = t, this.setIsScrolledToBottom = n, this.onScroll = r, this.sizes = i, this.scrollerRef = l.createRef(), this.nodeRefs = {}, this.timeout = new g.Ep, this.setResizeObserver = () => {
      var e;
      let t = null == (e = this.scrollerRef.current) ? true : e.getScrollerNode();
      null != t && (this.observer = new ResizeObserver(this.handleScroll), this.observer.observe(t))
    }, this.clearResizeObserver = () => {
      var e;
      null == (e = this.observer) || e.disconnect(), this.observer = true
    }, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n || null == e && el(window.location.pathname) || e === Z.sFm.SERVER_DISCOVERY_BADGE || e === Z.sFm.E3_SERVER_DISCOVERY_BADGE) return;
      if (null == e) return void n.scrollTo({
        to: 0,
        animate: t
      });
      let r = this.nodeRefs[e];
      for (; null == r;) {
        let t = this.guildsTree.getNode(e);
        if ((null == t ? true : t.parentId) == null) break;
        r = this.nodeRefs[t.parentId]
      }
      null != r && (0, d.vq)(r) ? n.scrollIntoViewNode({
        node: r,
        animate: t,
        padding: 24
      }) : n.scrollTo({
        to: 0,
        animate: t
      })
    }, this.handleJumpToGuild = e => {
      this.scrollToGuild(e, true)
    }, this.scrollTo = e => {
      var t;
      null == (t = this.scrollerRef.current) || t.scrollTo(e)
    }, this.scrollToBottom = () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollToBottom()
    }, this.isItemVisible = (e, t, n) => {
      let {
        iconTotalSize: r,
        badgeVisibleBuffer: l,
        heightBeforeGuilds: i,
        bottomInset: s
      } = this.sizes, a = this.scrollerRef.current;
      if (null == a) returnfalse;
      let o = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
      if (o < 0) returnfalse;
      let c = r * o + i,
        u = a.getScrollerState();
      return !t && !!(c >= u.scrollTop) || !!t && !!(c + r + l <= u.scrollTop + u.offsetHeight - s)
    }, this.getVisibleGuildIds = () => {
      var e;
      let t = this.scrollerRef.current;
      if (null == t) return [];
      let n = t.getScrollerState().offsetHeight,
        r = null == (e = t.getScrollerNode()) ? true : e.getBoundingClientRect().top;
      return true === r ? [] : this.guildsTree.sortedGuildNodes().filter(e => {
        var t;
        let l = null != (t = e.parentId) ? t : e.id,
          i = this.nodeRefs[l];
        if (null == i) returnfalse;
        let s = i.getBoundingClientRect(),
          a = s.top - r;
        return a + s.height > 0 && a < n
      }).map(e => {
        let {
          id: t
        } = e;
        return t
      })
    }, this.handleScroll = () => {
      this.setScrolling(true), this.timeout.start(200, () => this.setScrolling(false)), this._handleScrollDebounced(), this._handleScrollThrottled()
    }, this._handleScrollDebounced = o().debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      b.A.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this._handleScrollThrottled = o().throttle(() => {
      let e = this.scrollerRef.current;
      null != e && this.setIsScrolledToBottom(e.isScrolledToBottom())
    }, 100), this.setNodeRef = (e, t) => {
      this.nodeRefs[e] = t
    }, (0, E.u9)(this.getVisibleGuildIds)
  }
}

function es(e) {
  let {
    hideDms: t,
    scrollToTop: n,
    lurkingGuildIds: l
  } = e, i = (0, j.A)(), s = (0, h.yK)([R.A, w.Ay], () => R.A.getGuildIds().filter(e => w.Ay.isCurrentUserGuest(e))), a = l.concat(s), {
    entrypoint: o
  } = (0, S.X8)({
    location: "GuildsBar"
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(Y.C, {}), o === S.RK.SERVER_RAIL_TOP && (0, r.jsx)(I.A, {}), i ? (0, r.jsx)(v.A, {}) : null, !t && (0, r.jsx)(V.A, {}), a.map(e => (0, r.jsx)(Q.A, {
      guildId: e
    }, e)), (0, r.jsx)(J.A, {
      onActivate: n
    })]
  })
}

function ea(e) {
  let {
    guildDiscoveryButton: t,
    disableAppDownload: n,
    isOverlay: l,
    renderTreeNode: i,
    lurkingGuildIds: s
  } = e, [a] = (0, h.yK)([D.Ay], () => {
    let e = D.Ay.getGuildsTree();
    return [e, e.version]
  }), o = a.getRoots(), c = (0, h.yK)([P.A], () => P.A.getGeoRestrictedGuilds()).map(e => (0, r.jsx)(F.A, {
    id: e.id,
    name: e.name,
    icon: e.icon
  }, e.id));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.BJc, {
      role: "group",
      "aria-label": $.intl.string($.t["7hB4kg"]),
      gap: "xs",
      children: o.map((e, t) => i(e, t, o.length))
    }), c, (0, r.jsx)(z.A, {}), l ? null : (0, r.jsx)(H.A, {
      disableTooltip: s.length > 0,
      lastTargetNode: o[o.length - 1]
    }), l ? null : t, n ? null : (0, r.jsx)(B.A, {})]
  })
}

function eo(e) {
  let {
    disableAppDownload: t = L.isPlatformEmbedded,
    isOverlay: n = false,
    className: i,
    themeOverride: a
  } = e, [o] = (0, h.yK)([D.Ay], () => {
    let e = D.Ay.getGuildsTree();
    return [e, e.version]
  }), d = (0, h.bG)([C.A], () => C.A.lurkingGuildIds()), p = l.useMemo(() => n ? [] : d, [d, n]), b = (0, h.bG)([x.A], () => x.A.isFullscreenInContext()), {
    isSorting: y,
    startSorting: v,
    stopSorting: E
  } = (0, M.A)(), P = l.useRef(false), [w] = l.useState(() => new g.Ep), R = l.useRef(null), V = l.useRef(null), B = (0, u.$y)(), {
    ref: H
  } = B, F = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(B, ["ref"]), Y = (0, m.R7z)(), [z, J] = l.useState(false), Q = (0, m.rdh)(f.A.modules.guildbar.AVATAR_SIZE), et = (0, m.rdh)(f.A.space.SPACE_XS), eo = (0, j.A)(), {
    pathname: ec
  } = (0, c.zy)(), {
    entrypoint: eu
  } = (0, S.X8)({
    location: "GuildsBar"
  }), ed = +!!eo + +(eu === S.RK.SERVER_RAIL_TOP), eh = l.useMemo(() => {
    let e, t, n = (e = Q + et, {
      iconSize: Q,
      iconTotalSize: e,
      badgeVisibleBuffer: e - 16,
      separatorSize: t = 2 + et,
      heightBeforeGuilds: er + t + ed * e,
      bottomInset: 16
    });
    return new ei(o, J, Z.tEg, () => {
      var e, t;
      null == (e = R.current) || e.calculateState(), null == (t = V.current) || t.calculateState()
    }, n)
  }, [Q, et, o, ed]);
  l.useEffect(() => (eh.setResizeObserver(), () => {
    eh.clearResizeObserver()
  }), [eh]);
  let {
    analyticsLocations: ep
  } = (0, _.Ay)(O.A.GUILDS_LIST), eg = el(ec);
  (0, A.u5)(() => {
    if (!P.current && 0 !== o.size) {
      if (!eg) {
        let {
          scrollTop: e
        } = T.A.getGuildListDimensions();
        eh.scrollTo({
          to: e,
          animate: false
        })
      }
      return P.current = true, () => w.stop()
    }
  }), l.useEffect(() => {
    if (eh.setGuildsTree(o), P.current || 0 === o.size) return;
    let e = N.A.getState().guildId;
    eh.scrollToGuild(e, false);
    let t = null;
    return N.A.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, eh.scrollToGuild(t, false))
    })
  }, [o, eh]);
  let ef = l.useCallback(() => {
    eh.scrollTo({
      to: 0,
      animate: false
    })
  }, [eh]);
  (0, G.A)(eh.scrollToGuild);
  let em = l.useCallback(function e(t, n, l) {
      switch (t.type) {
        case k.PJ.FOLDER:
          return (0, r.jsx)(q.A, {
            folderNode: t,
            setNodeRef: eh.setNodeRef,
            draggable: true,
            sorting: y,
            onDragStart: v,
            onDragEnd: E,
            renderChildNode: e,
            "aria-setsize": l,
            "aria-posinset": true !== n ? n + 1 : true
          }, t.id);
        case k.PJ.GUILD:
          return (0, r.jsx)(X.A, {
            guildNode: t,
            setRef: eh.setNodeRef,
            draggable: true,
            sorting: y,
            onDragStart: v,
            onDragEnd: E,
            "aria-setsize": l,
            "aria-posinset": true !== n ? n + 1 : true
          }, t.id);
        default:
          return null
      }
    }, [v, E, y, eh.setNodeRef]),
    eb = (0, r.jsx)(K.A, {
      selected: eg,
      className: ee.ai
    }),
    eA = eu === S.RK.SERVER_RAIL_BOTTOM;
  return (0, r.jsx)(_.f5, {
    value: ep,
    children: (0, r.jsx)(m.NPJ, {
      theme: a,
      children: e => {
        var l, a;
        return (0, r.jsxs)("nav", {
          className: s()(ee.iE, i, e, {
            [ee.R]: b
          }),
          "aria-label": $.intl.string($.t.PjnF2t),
          children: [(0, r.jsx)(U.A, {
            ref: R,
            isVisible: eh.isItemVisible,
            onJumpTo: eh.handleJumpToGuild,
            className: ee.Xl,
            barClassName: ee.Sh
          }), (0, r.jsx)("ul", (l = en({
            ref: H
          }, F, Y), a = a = {
            role: "tree",
            className: ee.B2,
            children: (0, r.jsxs)("div", {
              className: ee.qD,
              children: [(0, r.jsxs)(m.zCo, {
                className: s()({
                  [ee.XG]: true,
                  [ee.qw]: z
                }),
                experimental_useStack: true,
                gap: "xs",
                ref: eh.scrollerRef,
                onScroll: eh.handleScroll,
                children: [(0, r.jsx)(es, {
                  scrollToTop: ef,
                  lurkingGuildIds: p
                }), (0, r.jsx)(W.A, {}), (0, r.jsx)(ea, {
                  guildDiscoveryButton: eb,
                  disableAppDownload: t,
                  isOverlay: n,
                  renderTreeNode: em,
                  lurkingGuildIds: p
                })]
              }), eA && (0, r.jsxs)("div", {
                children: [(0, r.jsx)(W.A, {
                  fullWidth: true
                }), (0, r.jsx)("div", {
                  className: ee.JU,
                  children: (0, r.jsx)(I.A, {})
                })]
              })]
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
          }), l)), (0, r.jsx)(U.A, {
            reverse: true,
            ref: V,
            isVisible: eh.isItemVisible,
            onJumpTo: eh.handleJumpToGuild,
            className: s()(ee.LZ, {
              [ee.CH]: !n && !eA,
              [ee.c0]: !n && eA
            }),
            barClassName: ee.Sh
          })]
        })
      }
    })
  })
}
let ec = Chunk64700.memo(function(e) {
  let t = (0, y.A)("guildsnav");
  return (0, r.jsx)(u.hD, {
    navigator: t,
    children: (0, r.jsx)(eo, en({}, e))
  })
}, (e, t) => false === t.isVisible || (0, p.A)(e, t))
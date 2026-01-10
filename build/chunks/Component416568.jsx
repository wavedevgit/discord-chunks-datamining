/** Chunk was on 81985 **/
/** chunk id: 416568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ec
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk828700 = require("./828700.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk846519 = require("./846519.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk925549 = require("./925549.js"),
  Chunk493773 = require("./493773.js"),
  Chunk209613 = require("./209613.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk706590 = require("./706590.js"),
  Chunk940777 = require("./940777.jsx"),
  Chunk113544 = require("./113544.js"),
  Chunk41776 = require("./41776.js"),
  Chunk821020 = require("./821020.js"),
  Chunk770858 = require("./770858.jsx"),
  Chunk905423 = require("./905423.js"),
  Chunk796974 = require("./796974.js"),
  Chunk478738 = require("./478738.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk358085 = require("./358085.js"),
  Chunk316243 = require("./316243.js"),
  Chunk727258 = require("./727258.js"),
  Chunk605951 = require("./605951.js"),
  Chunk474109 = require("./474109.jsx"),
  Chunk741616 = require("./741616.jsx"),
  Chunk187835 = require("./187835.jsx"),
  Chunk118122 = require("./118122.jsx"),
  Chunk193154 = require("./193154.jsx"),
  Chunk602147 = require("./602147.jsx"),
  Chunk222059 = require("./222059.jsx"),
  Chunk65721 = require("./65721.jsx"),
  Chunk843343 = require("./843343.jsx"),
  Chunk654142 = require("./654142.jsx"),
  Chunk695301 = require("./695301.jsx"),
  Chunk836697 = require("./836697.jsx"),
  Chunk921230 = require("./921230.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk958383 = require("./958383.js");

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
let er = (0, Chunk358085.isWindows)() ? 4 : 12 * !(0, Chunk358085.isMac)();

function ei(e) {
  return e.startsWith(J.Z5c.GUILD_DISCOVERY) || e.startsWith(J.Z5c.GLOBAL_DISCOVERY)
}
class el {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n, r, l) {
    et(this, "guildsTree", true), et(this, "setScrolling", true), et(this, "setIsScrolledToBottom", true), et(this, "onScroll", true), et(this, "sizes", true), et(this, "scrollerRef", true), et(this, "nodeRefs", true), et(this, "timeout", true), et(this, "observer", true), et(this, "setResizeObserver", true), et(this, "clearResizeObserver", true), et(this, "scrollToGuild", true), et(this, "handleJumpToGuild", true), et(this, "scrollTo", true), et(this, "scrollToBottom", true), et(this, "isItemVisible", true), et(this, "getVisibleGuildIds", true), et(this, "handleScroll", true), et(this, "_handleScrollDebounced", true), et(this, "_handleScrollThrottled", true), et(this, "setNodeRef", true), this.guildsTree = e, this.setScrolling = t, this.setIsScrolledToBottom = n, this.onScroll = r, this.sizes = l, this.scrollerRef = i.createRef(), this.nodeRefs = {}, this.timeout = new h.V7, this.setResizeObserver = () => {
      var e;
      let t = null == (e = this.scrollerRef.current) ? true : e.getScrollerNode();
      null != t && (this.observer = new ResizeObserver(this.handleScroll), this.observer.observe(t))
    }, this.clearResizeObserver = () => {
      var e;
      null == (e = this.observer) || e.disconnect(), this.observer = true
    }, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n || null == e && ei(window.location.pathname) || e === J.x8Z.SERVER_DISCOVERY_BADGE || e === J.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
      null != r && (0, d.kK)(r) ? n.scrollIntoViewNode({
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
        badgeVisibleBuffer: i,
        heightBeforeGuilds: l,
        bottomInset: a
      } = this.sizes, o = this.scrollerRef.current;
      if (null == o) returnfalse;
      let s = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
      if (s < 0) returnfalse;
      let c = r * s + l,
        u = o.getScrollerState();
      return !t && !!(c >= u.scrollTop) || !!t && !!(c + r + i <= u.scrollTop + u.offsetHeight - a)
    }, this.getVisibleGuildIds = () => {
      var e;
      let t = this.scrollerRef.current;
      if (null == t) return [];
      let n = t.getScrollerState().offsetHeight,
        r = null == (e = t.getScrollerNode()) ? true : e.getBoundingClientRect().top;
      return true === r ? [] : this.guildsTree.sortedGuildNodes().filter(e => {
        var t;
        let i = null != (t = e.parentId) ? t : e.id,
          l = this.nodeRefs[i];
        if (null == l) returnfalse;
        let a = l.getBoundingClientRect(),
          o = a.top - r;
        return o + a.height > 0 && o < n
      }).map(e => {
        let {
          id: t
        } = e;
        return t
      })
    }, this.handleScroll = () => {
      this.setScrolling(true), this.timeout.start(200, () => this.setScrolling(false)), this._handleScrollDebounced(), this._handleScrollThrottled()
    }, this._handleScrollDebounced = s().debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      b.Z.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this._handleScrollThrottled = s().throttle(() => {
      let e = this.scrollerRef.current;
      null != e && this.setIsScrolledToBottom(e.isScrolledToBottom())
    }, 100), this.setNodeRef = (e, t) => {
      this.nodeRefs[e] = t
    }, (0, S.zb)(this.getVisibleGuildIds)
  }
}

function ea(e) {
  let {
    hideDms: t,
    scrollToTop: n,
    lurkingGuildIds: i
  } = e, l = (0, C.Z)(), a = (0, p.Wu)([w.Z, A.ZP], () => w.Z.getGuildIds().filter(e => A.ZP.isCurrentUserGuest(e))), o = i.concat(a), {
    entrypoint: s
  } = (0, I.pN)({
    location: "GuildsBar"
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(z.u, {}), s === I.u3.SERVER_RAIL_TOP && (0, r.jsx)(P.Z, {}), l ? (0, r.jsx)(E.Z, {}) : null, !t && (0, r.jsx)(G.Z, {}), o.map(e => (0, r.jsx)(Q.Z, {
      guildId: e
    }, e)), (0, r.jsx)(X.Z, {
      onActivate: n
    })]
  })
}

function eo(e) {
  let {
    guildDiscoveryButton: t,
    disableAppDownload: n,
    isOverlay: i,
    renderTreeNode: l,
    lurkingGuildIds: a
  } = e, [o] = (0, p.Wu)([R.ZP], () => {
    let e = R.ZP.getGuildsTree();
    return [e, e.version]
  }), s = o.getRoots(), c = (0, p.Wu)([T.Z], () => T.Z.getGeoRestrictedGuilds()).map(e => (0, r.jsx)(H.Z, {
    id: e.id,
    name: e.name,
    icon: e.icon
  }, e.id));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Kqy, {
      role: "group",
      "aria-label": $.intl.string($.t["7hB4kg"]),
      gap: "xs",
      children: s.map((e, t) => l(e, t, s.length))
    }), c, (0, r.jsx)(K.Z, {}), i ? null : (0, r.jsx)(F.Z, {
      disableTooltip: a.length > 0,
      lastTargetNode: s[s.length - 1]
    }), i ? null : t, n ? null : (0, r.jsx)(B.Z, {})]
  })
}

function es(e) {
  let {
    disableAppDownload: t = D.isPlatformEmbedded,
    isOverlay: n = false,
    className: l,
    themeOverride: o
  } = e, [s] = (0, p.Wu)([R.ZP], () => {
    let e = R.ZP.getGuildsTree();
    return [e, e.version]
  }), d = (0, p.e7)([_.Z], () => _.Z.lurkingGuildIds()), f = i.useMemo(() => n ? [] : d, [d, n]), b = (0, p.e7)([x.Z], () => x.Z.isFullscreenInContext()), {
    isSorting: v,
    startSorting: E,
    stopSorting: S
  } = (0, M.Z)(), T = i.useRef(false), [A] = i.useState(() => new h.V7), w = i.useRef(null), G = i.useRef(null), B = (0, u.OP)(), {
    ref: F
  } = B, H = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(B, ["ref"]), z = (0, m.mFp)(), [K, X] = i.useState(false), Q = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE), et = (0, m.dQu)(g.Z.space.SPACE_XS), es = (0, C.Z)(), {
    pathname: ec
  } = (0, c.TH)(), {
    entrypoint: eu
  } = (0, I.pN)({
    location: "GuildsBar"
  }), ed = +!!es + +(eu === I.u3.SERVER_RAIL_TOP), ep = i.useMemo(() => {
    let e = function(e, t, n) {
      let r = e + t,
        i = 2 + t;
      return {
        iconSize: e,
        iconTotalSize: r,
        badgeVisibleBuffer: r - 16,
        separatorSize: i,
        heightBeforeGuilds: er + i + n * r,
        bottomInset: 16
      }
    }(Q, et, ed);
    return new el(s, X, J.dG4, () => {
      var e, t;
      null == (e = w.current) || e.calculateState(), null == (t = G.current) || t.calculateState()
    }, e)
  }, [Q, et, s, ed]);
  i.useEffect(() => (ep.setResizeObserver(), () => {
    ep.clearResizeObserver()
  }), [ep]);
  let {
    analyticsLocations: ef
  } = (0, j.ZP)(O.Z.GUILDS_LIST), eh = ei(ec);
  (0, y.Ng)(() => {
    if (!T.current && 0 !== s.size) {
      if (!eh) {
        let {
          scrollTop: e
        } = N.Z.getGuildListDimensions();
        ep.scrollTo({
          to: e,
          animate: false
        })
      }
      return T.current = true, () => A.stop()
    }
  }), i.useEffect(() => {
    if (ep.setGuildsTree(s), T.current || 0 === s.size) return;
    let e = Z.Z.getState().guildId;
    ep.scrollToGuild(e, false);
    let t = null;
    return Z.Z.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, ep.scrollToGuild(t, false))
    })
  }, [s, ep]);
  let eg = i.useCallback(() => {
    ep.scrollTo({
      to: 0,
      animate: false
    })
  }, [ep]);
  (0, L.Z)(ep.scrollToGuild);
  let em = i.useCallback(function e(t, n, i) {
      switch (t.type) {
        case k.eD.FOLDER:
          return (0, r.jsx)(Y.Z, {
            folderNode: t,
            setNodeRef: ep.setNodeRef,
            draggable: true,
            sorting: v,
            onDragStart: E,
            onDragEnd: S,
            renderChildNode: e,
            "aria-setsize": i,
            "aria-posinset": true !== n ? n + 1 : true
          }, t.id);
        case k.eD.GUILD:
          return (0, r.jsx)(q.Z, {
            guildNode: t,
            setRef: ep.setNodeRef,
            draggable: true,
            sorting: v,
            onDragStart: E,
            onDragEnd: S,
            "aria-setsize": i,
            "aria-posinset": true !== n ? n + 1 : true
          }, t.id);
        default:
          return null
      }
    }, [E, S, v, ep.setNodeRef]),
    eb = (0, r.jsx)(V.Z, {
      selected: eh,
      className: ee.discoveryIcon
    }),
    ey = eu === I.u3.SERVER_RAIL_BOTTOM;
  return (0, r.jsx)(j.Gt, {
    value: ef,
    children: (0, r.jsx)(m.f6W, {
      theme: o,
      children: e => {
        var i, o;
        return (0, r.jsxs)("nav", {
          className: a()(ee.wrapper, l, e, {
            [ee.hidden]: b
          }),
          "aria-label": $.intl.string($.t.PjnF2t),
          children: [(0, r.jsx)(U.Z, {
            ref: w,
            isVisible: ep.isItemVisible,
            onJumpTo: ep.handleJumpToGuild,
            className: ee.unreadMentionsIndicatorTop,
            barClassName: ee.unreadMentionsBar
          }), (0, r.jsx)("ul", (i = en({
            ref: F
          }, H, z), o = o = {
            role: "tree",
            className: ee.tree,
            children: (0, r.jsxs)("div", {
              className: ee.itemsContainer,
              children: [(0, r.jsxs)(m.xVE, {
                className: a()({
                  [ee.scroller]: true,
                  [ee.scrolling]: K
                }),
                experimental_useStack: true,
                gap: "xs",
                ref: ep.scrollerRef,
                onScroll: ep.handleScroll,
                children: [(0, r.jsx)(ea, {
                  scrollToTop: eg,
                  lurkingGuildIds: f
                }), (0, r.jsx)(W.Z, {}), (0, r.jsx)(eo, {
                  guildDiscoveryButton: eb,
                  disableAppDownload: t,
                  isOverlay: n,
                  renderTreeNode: em,
                  lurkingGuildIds: f
                })]
              }), ey && (0, r.jsxs)("div", {
                children: [(0, r.jsx)(W.Z, {
                  fullWidth: true
                }), (0, r.jsx)("div", {
                  className: ee.bottomRailNotifCenterButton,
                  children: (0, r.jsx)(P.Z, {})
                })]
              })]
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
          }), i)), (0, r.jsx)(U.Z, {
            reverse: true,
            ref: G,
            isVisible: ep.isItemVisible,
            onJumpTo: ep.handleJumpToGuild,
            className: a()(ee.unreadMentionsIndicatorBottom, {
              [ee.unreadMentionsFixedFooter]: !n && !ey,
              [ee.unreadMentionsFixedFooterBottomNotifCenterEntrypoint]: !n && ey
            }),
            barClassName: ee.unreadMentionsBar
          })]
        })
      }
    })
  })
}
let ec = Chunk473749.memo(function(e) {
  let t = (0, v.Z)("guildsnav");
  return (0, r.jsx)(u.bG, {
    navigator: t,
    children: (0, r.jsx)(es, en({}, e))
  })
}, (e, t) => false === t.isVisible || (0, f.Z)(e, t))
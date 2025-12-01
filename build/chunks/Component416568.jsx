/** Chunk was on 64271 **/
/** chunk id: 416568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ed
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk365113 = require("./365113.js"),
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
  Chunk780367 = require("./780367.jsx"),
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
  Chunk933774 = require("./933774.js");

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      er(e, t, n[t])
    })
  }
  return e
}
let el = (0, Chunk358085.isWindows)() ? 4 : 12 * !(0, Chunk358085.isMac)();

function eo(e) {
  return e.startsWith(ee.Z5c.GUILD_DISCOVERY) || e.startsWith(ee.Z5c.GLOBAL_DISCOVERY)
}
class ea {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n, r, l) {
    er(this, "guildsTree", true), er(this, "setScrolling", true), er(this, "setIsScrolledToBottom", true), er(this, "onScroll", true), er(this, "sizes", true), er(this, "scrollerRef", true), er(this, "nodeRefs", true), er(this, "timeout", true), er(this, "observer", true), er(this, "setResizeObserver", true), er(this, "clearResizeObserver", true), er(this, "scrollToGuild", true), er(this, "handleJumpToGuild", true), er(this, "scrollTo", true), er(this, "scrollToBottom", true), er(this, "isItemVisible", true), er(this, "getVisibleGuildIds", true), er(this, "handleScroll", true), er(this, "_handleScrollDebounced", true), er(this, "_handleScrollThrottled", true), er(this, "setNodeRef", true), this.guildsTree = e, this.setScrolling = t, this.setIsScrolledToBottom = n, this.onScroll = r, this.sizes = l, this.scrollerRef = i.createRef(), this.nodeRefs = {}, this.timeout = new h.V7, this.setResizeObserver = () => {
      var e;
      let t = null == (e = this.scrollerRef.current) ? true : e.getScrollerNode();
      null != t && (this.observer = new ResizeObserver(this.handleScroll), this.observer.observe(t))
    }, this.clearResizeObserver = () => {
      var e;
      null == (e = this.observer) || e.disconnect(), this.observer = true
    }, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n || null == e && eo(window.location.pathname) || e === ee.x8Z.SERVER_DISCOVERY_BADGE || e === ee.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
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
        bottomInset: o
      } = this.sizes, a = this.scrollerRef.current;
      if (null == a) returnfalse;
      let s = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
      if (s < 0) returnfalse;
      let c = r * s + l,
        u = a.getScrollerState();
      return !t && !!(c >= u.scrollTop) || !!t && !!(c + r + i <= u.scrollTop + u.offsetHeight - o)
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
        let o = l.getBoundingClientRect(),
          a = o.top - r;
        return a + o.height > 0 && a < n
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
    }, (0, E.zb)(this.getVisibleGuildIds)
  }
}

function es(e) {
  let {
    hideDms: t,
    scrollToTop: n,
    lurkingGuildIds: i
  } = e, l = (0, x.Z)(), o = (0, f.Wu)([R.Z, A.ZP], () => R.Z.getGuildIds().filter(e => A.ZP.isCurrentUserGuest(e))), a = i.concat(o), {
    entrypoint: s
  } = (0, I.pN)({
    location: "GuildsBar"
  }), c = N.o.useConfig({
    location: "guildsbar"
  }).dmsTab;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(K.u, {}), c && (0, r.jsx)(H.Z, {}), s === I.u3.SERVER_RAIL_TOP && (0, r.jsx)(P.Z, {}), l ? (0, r.jsx)(C.Z, {}) : null, !t && (0, r.jsx)(B.Z, {}), a.map(e => (0, r.jsx)($.Z, {
      guildId: e
    }, e)), (0, r.jsx)(J.Z, {
      onActivate: n
    })]
  })
}

function ec(e) {
  let {
    guildDiscoveryButton: t,
    disableAppDownload: n,
    isOverlay: i,
    renderTreeNode: l,
    lurkingGuildIds: o
  } = e, [a] = (0, f.Wu)([D.ZP], () => {
    let e = D.ZP.getGuildsTree();
    return [e, e.version]
  }), s = a.getRoots(), c = (0, f.Wu)([T.Z], () => T.Z.getGeoRestrictedGuilds()).map(e => (0, r.jsx)(W.Z, {
    id: e.id,
    name: e.name,
    icon: e.icon
  }, e.id));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Kqy, {
      role: "group",
      "aria-label": et.intl.string(et.t["7hB4kg"]),
      gap: "xs",
      children: s.map((e, t) => l(e, t, s.length))
    }), c, (0, r.jsx)(q.Z, {}), i ? null : (0, r.jsx)(V.Z, {
      disableTooltip: o.length > 0,
      lastTargetNode: s[s.length - 1]
    }), i ? null : t, n ? null : (0, r.jsx)(F.Z, {})]
  })
}

function eu(e) {
  let {
    disableAppDownload: t = L.isPlatformEmbedded,
    isOverlay: n = false,
    className: l,
    themeOverride: a
  } = e, [s] = (0, f.Wu)([D.ZP], () => {
    let e = D.ZP.getGuildsTree();
    return [e, e.version]
  }), d = (0, f.e7)([S.Z], () => S.Z.lurkingGuildIds()), p = i.useMemo(() => n ? [] : d, [d, n]), b = (0, f.e7)([j.Z], () => j.Z.isFullscreenInContext()), {
    isSorting: y,
    startSorting: C,
    stopSorting: E
  } = (0, M.Z)(), N = i.useRef(false), [T] = i.useState(() => new h.V7), A = i.useRef(null), R = i.useRef(null), B = (0, u.OP)(), {
    ref: F
  } = B, V = function(e, t) {
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
  }(B, ["ref"]), H = (0, m.mFp)(), [W, K] = i.useState(false), q = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE), J = (0, m.dQu)(g.Z.space.SPACE_XS), $ = (0, x.Z)(), {
    pathname: er
  } = (0, c.TH)(), {
    entrypoint: eu
  } = (0, I.pN)({
    location: "GuildsBar"
  }), ed = +!!$ + +(eu === I.u3.SERVER_RAIL_TOP), ef = i.useMemo(() => {
    let e = function(e, t, n) {
      let r = e + t,
        i = 2 + t;
      return {
        iconSize: e,
        iconTotalSize: r,
        badgeVisibleBuffer: r - 16,
        separatorSize: i,
        heightBeforeGuilds: el + i + n * r,
        bottomInset: 16
      }
    }(q, J, ed);
    return new ea(s, K, ee.dG4, () => {
      var e, t;
      null == (e = A.current) || e.calculateState(), null == (t = R.current) || t.calculateState()
    }, e)
  }, [q, J, s, ed]);
  i.useEffect(() => (ef.setResizeObserver(), () => {
    ef.clearResizeObserver()
  }), [ef]);
  let {
    analyticsLocations: ep
  } = (0, v.ZP)(O.Z.GUILDS_LIST), eh = eo(er);
  (0, _.Ng)(() => {
    if (!N.current && 0 !== s.size) {
      if (!eh) {
        let {
          scrollTop: e
        } = w.Z.getGuildListDimensions();
        ef.scrollTo({
          to: e,
          animate: false
        })
      }
      return N.current = true, () => T.stop()
    }
  }), i.useEffect(() => {
    if (ef.setGuildsTree(s), N.current || 0 === s.size) return;
    let e = Z.Z.getState().guildId;
    ef.scrollToGuild(e, false);
    let t = null;
    return Z.Z.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, ef.scrollToGuild(t, false))
    })
  }, [s, ef]);
  let eg = i.useCallback(() => {
    ef.scrollTo({
      to: 0,
      animate: false
    })
  }, [ef]);
  (0, G.Z)(ef.scrollToGuild);
  let em = i.useCallback(function e(t, n, i) {
      switch (t.type) {
        case k.eD.FOLDER:
          return (0, r.jsx)(Q.Z, {
            folderNode: t,
            setNodeRef: ef.setNodeRef,
            draggable: true,
            sorting: y,
            onDragStart: C,
            onDragEnd: E,
            renderChildNode: e,
            "aria-setsize": i,
            "aria-posinset": true !== n ? n + 1 : true
          }, t.id);
        case k.eD.GUILD:
          return (0, r.jsx)(X.Z, {
            guildNode: t,
            setRef: ef.setNodeRef,
            draggable: true,
            sorting: y,
            onDragStart: C,
            onDragEnd: E,
            "aria-setsize": i,
            "aria-posinset": true !== n ? n + 1 : true
          }, t.id);
        default:
          return null
      }
    }, [C, E, y, ef.setNodeRef]),
    eb = (0, r.jsx)(z.Z, {
      selected: eh,
      className: en.discoveryIcon
    }),
    e_ = eu === I.u3.SERVER_RAIL_BOTTOM;
  return (0, r.jsx)(v.Gt, {
    value: ep,
    children: (0, r.jsx)(m.f6W, {
      theme: a,
      children: e => {
        var i, a;
        return (0, r.jsxs)("nav", {
          className: o()(en.wrapper, l, e, {
            [en.hidden]: b
          }),
          "aria-label": et.intl.string(et.t.PjnF2t),
          children: [(0, r.jsx)(U.Z, {
            ref: A,
            isVisible: ef.isItemVisible,
            onJumpTo: ef.handleJumpToGuild,
            className: en.unreadMentionsIndicatorTop,
            barClassName: en.unreadMentionsBar
          }), (0, r.jsx)("ul", (i = ei({
            ref: F
          }, V, H), a = a = {
            role: "tree",
            className: en.tree,
            children: (0, r.jsxs)("div", {
              className: en.itemsContainer,
              children: [(0, r.jsxs)(m.xVE, {
                className: o()({
                  [en.scroller]: true,
                  [en.scrolling]: W
                }),
                experimental_useStack: true,
                gap: "xs",
                ref: ef.scrollerRef,
                onScroll: ef.handleScroll,
                children: [(0, r.jsx)(es, {
                  scrollToTop: eg,
                  lurkingGuildIds: p
                }), (0, r.jsx)(Y.Z, {}), (0, r.jsx)(ec, {
                  guildDiscoveryButton: eb,
                  disableAppDownload: t,
                  isOverlay: n,
                  renderTreeNode: em,
                  lurkingGuildIds: p
                })]
              }), e_ && (0, r.jsxs)("div", {
                children: [(0, r.jsx)(Y.Z, {
                  fullWidth: true
                }), (0, r.jsx)("div", {
                  className: en.bottomRailNotifCenterButton,
                  children: (0, r.jsx)(P.Z, {})
                })]
              })]
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
          }), i)), (0, r.jsx)(U.Z, {
            reverse: true,
            ref: R,
            isVisible: ef.isItemVisible,
            onJumpTo: ef.handleJumpToGuild,
            className: o()(en.unreadMentionsIndicatorBottom, {
              [en.unreadMentionsFixedFooter]: !n && !e_,
              [en.unreadMentionsFixedFooterBottomNotifCenterEntrypoint]: !n && e_
            }),
            barClassName: en.unreadMentionsBar
          })]
        })
      }
    })
  })
}
let ed = Chunk473749.memo(function(e) {
  let t = (0, y.Z)("guildsnav");
  return (0, r.jsx)(u.bG, {
    navigator: t,
    children: (0, r.jsx)(eu, ei({}, e))
  })
}, (e, t) => false === t.isVisible || (0, p.Z)(e, t))
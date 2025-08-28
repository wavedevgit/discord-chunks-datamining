/** Chunk was on 91488 **/
/** chunk id: 416568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ec
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk843611 = require("./843611.js"),
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
  Chunk727258 = require("./727258.js"),
  Chunk605951 = require("./605951.js"),
  Chunk474109 = require("./474109.jsx"),
  Chunk741616 = require("./741616.jsx"),
  Chunk187835 = require("./187835.jsx"),
  Chunk118122 = require("./118122.jsx"),
  Chunk193154 = require("./193154.jsx"),
  Chunk602147 = require("./602147.jsx"),
  Chunk222059 = require("./222059.jsx"),
  Chunk751277 = require("./751277.jsx"),
  Chunk65721 = require("./65721.jsx"),
  Chunk843343 = require("./843343.jsx"),
  Chunk654142 = require("./654142.jsx"),
  Chunk695301 = require("./695301.jsx"),
  Chunk836697 = require("./836697.jsx"),
  Chunk921230 = require("./921230.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk933774 = require("./933774.js");

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
    et(this, "guildsTree", true), et(this, "setScrolling", true), et(this, "setIsScrolledToBottom", true), et(this, "onScroll", true), et(this, "sizes", true), et(this, "scrollerRef", true), et(this, "nodeRefs", true), et(this, "timeout", true), et(this, "observer", true), et(this, "setResizeObserver", true), et(this, "clearResizeObserver", true), et(this, "scrollToGuild", true), et(this, "handleJumpToGuild", true), et(this, "scrollTo", true), et(this, "scrollToBottom", true), et(this, "isItemVisible", true), et(this, "getVisibleGuildIds", true), et(this, "handleScroll", true), et(this, "_handleScrollDebounced", true), et(this, "_handleScrollThrottled", true), et(this, "setNodeRef", true), this.guildsTree = e, this.setScrolling = t, this.setIsScrolledToBottom = n, this.onScroll = r, this.sizes = l, this.scrollerRef = i.createRef(), this.nodeRefs = {}, this.timeout = new f.V7, this.setResizeObserver = () => {
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
      null != r && (0, d.k)(r) ? n.scrollIntoViewNode({
        node: r,
        animate: t,
        padding: 8
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
        heightBeforeIcons: l
      } = this.sizes, o = this.scrollerRef.current;
      if (null == o) returnfalse;
      let a = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
      if (a < 0) returnfalse;
      let s = r * a + l;
      t || (s += i);
      let c = o.getScrollerState();
      return !t && !!(s >= c.scrollTop) || !!t && !!(s + r <= c.scrollTop + c.offsetHeight)
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

function eo(e) {
  let {
    hideDms: t,
    scrollToTop: n,
    lurkingGuildIds: i
  } = e, l = (0, x.Z)(), {
    pathname: o
  } = (0, c.TH)(), a = o.startsWith(J.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")), s = (0, p.Wu)([A.Z, T.ZP], () => A.Z.getGuildIds().filter(e => T.ZP.isCurrentUserGuest(e))), u = i.concat(s), {
    entrypoint: d
  } = (0, P.pN)({
    location: "GuildsBar"
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(H.u, {}), d === P.u3.SERVER_RAIL_TOP && (0, r.jsx)(I.Z, {}), l ? (0, r.jsx)(C.Z, {}) : null, (0, r.jsx)(z.Z, {
      isOnHubVerificationRoute: a
    }), !t && (0, r.jsx)(U.Z, {}), u.map(e => (0, r.jsx)(Q.Z, {
      guildId: e
    }, e)), (0, r.jsx)(X.Z, {
      onActivate: n
    })]
  })
}

function ea(e) {
  let {
    guildDiscoveryButton: t,
    disableAppDownload: n,
    isOverlay: i,
    renderTreeNode: l,
    lurkingGuildIds: o
  } = e, [a] = (0, p.Wu)([R.ZP], () => {
    let e = R.ZP.getGuildsTree();
    return [e, e.version]
  }), s = a.getRoots(), c = (0, p.Wu)([w.Z], () => w.Z.getGeoRestrictedGuilds()).map(e => (0, r.jsx)(F.Z, {
    id: e.id,
    name: e.name,
    icon: e.icon
  }, e.id));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Kqy, {
      role: "group",
      "aria-label": $.intl.string($.t["7hB4kp"]),
      gap: "xs",
      children: s.map((e, t) => l(e, t, s.length))
    }), c, (0, r.jsx)(K.Z, {}), i ? null : (0, r.jsx)(B.Z, {
      disableTooltip: o.length > 0,
      lastTargetNode: s[s.length - 1]
    }), i ? null : t, n ? null : (0, r.jsx)(G.Z, {})]
  })
}

function es(e) {
  let {
    disableAppDownload: t = D.isPlatformEmbedded,
    isOverlay: n = false,
    className: l,
    themeOverride: a
  } = e, [s] = (0, p.Wu)([R.ZP], () => {
    let e = R.ZP.getGuildsTree();
    return [e, e.version]
  }), d = (0, p.e7)([S.Z], () => S.Z.lurkingGuildIds()), h = i.useMemo(() => n ? [] : d, [d, n]), b = (0, p.e7)([j.Z], () => j.Z.isFullscreenInContext()), [y, x] = i.useState(false), C = i.useCallback(() => x(true), []), E = i.useCallback(() => x(false), []), w = i.useRef(false), [T] = i.useState(() => new f.V7), A = i.useRef(null), U = i.useRef(null), G = (0, u.OP)(), {
    ref: B
  } = G, F = function(e, t) {
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
  }(G, ["ref"]), H = (0, m.mFp)(), [z, K] = i.useState(false), X = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE), Q = (0, m.dQu)(g.Z.space.SPACE_XS), et = i.useMemo(() => {
    let e = function(e, t) {
      let n = e + t,
        r = 2 + t;
      return {
        iconSize: e,
        iconTotalSize: n,
        badgeVisibleBuffer: n - 16,
        separatorSize: r,
        heightBeforeIcons: er + r
      }
    }(X, Q);
    return new el(s, K, J.dG4, () => {
      var e, t;
      null == (e = A.current) || e.calculateState(), null == (t = U.current) || t.calculateState()
    }, e)
  }, [X, Q, s]);
  i.useEffect(() => (et.setResizeObserver(), () => {
    et.clearResizeObserver()
  }), [et]);
  let {
    analyticsLocations: es
  } = (0, v.ZP)(_.Z.GUILDS_LIST), {
    pathname: ec
  } = (0, c.TH)(), eu = ei(ec);
  (0, O.Ng)(() => {
    if (!w.current && 0 !== s.size) {
      if (!eu) {
        let {
          scrollTop: e
        } = Z.Z.getGuildListDimensions();
        et.scrollTo({
          to: e,
          animate: false
        })
      }
      return w.current = true, () => T.stop()
    }
  }), i.useEffect(() => {
    if (et.setGuildsTree(s), w.current || 0 === s.size) return;
    let e = N.Z.getState().guildId;
    et.scrollToGuild(e, false);
    let t = null;
    return N.Z.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, et.scrollToGuild(t, false))
    })
  }, [s, et]);
  let ed = i.useCallback(() => {
    et.scrollTo({
      to: 0,
      animate: false
    })
  }, [et]);
  (0, L.Z)(et.scrollToGuild);
  let ep = i.useCallback(function e(t, n, i) {
      switch (t.type) {
        case M.eD.FOLDER:
          return (0, r.jsx)(Y.Z, {
            folderNode: t,
            setNodeRef: et.setNodeRef,
            draggable: true,
            sorting: y,
            onDragStart: C,
            onDragEnd: E,
            renderChildNode: e,
            "aria-setsize": i,
            "aria-posinset": true !== n ? n + 1 : true
          }, t.id);
        case M.eD.GUILD:
          return (0, r.jsx)(q.Z, {
            guildNode: t,
            setRef: et.setNodeRef,
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
    }, [C, E, y, et.setNodeRef]),
    eh = (0, r.jsx)(V.Z, {
      selected: eu,
      className: ee.discoveryIcon
    }),
    {
      entrypoint: ef
    } = (0, P.pN)({
      location: "GuildsBar"
    }),
    eg = ef === P.u3.SERVER_RAIL_BOTTOM;
  return (0, r.jsx)(v.Gt, {
    value: es,
    children: (0, r.jsx)(m.f6W, {
      theme: a,
      children: e => {
        var i, a;
        return (0, r.jsxs)("nav", {
          className: o()(ee.wrapper, l, e, {
            [ee.hidden]: b
          }),
          "aria-label": $.intl.string($.t.PjnF2t),
          children: [(0, r.jsx)(k.Z, {
            ref: A,
            isVisible: et.isItemVisible,
            onJumpTo: et.handleJumpToGuild,
            className: ee.unreadMentionsIndicatorTop,
            barClassName: ee.unreadMentionsBar
          }), (0, r.jsx)("ul", (i = en({
            ref: B
          }, F, H), a = a = {
            role: "tree",
            className: ee.tree,
            children: (0, r.jsxs)("div", {
              className: ee.itemsContainer,
              children: [(0, r.jsxs)(m.xVE, {
                className: o()({
                  [ee.scroller]: true,
                  [ee.scrolling]: z
                }),
                experimental_useStack: true,
                gap: "xs",
                ref: et.scrollerRef,
                onScroll: et.handleScroll,
                children: [(0, r.jsx)(eo, {
                  scrollToTop: ed,
                  lurkingGuildIds: h
                }), (0, r.jsx)(W.Z, {}), (0, r.jsx)(ea, {
                  guildDiscoveryButton: eh,
                  disableAppDownload: t,
                  isOverlay: n,
                  renderTreeNode: ep,
                  lurkingGuildIds: h
                })]
              }), eg && (0, r.jsxs)("div", {
                children: [(0, r.jsx)(W.Z, {
                  fullWidth: true
                }), (0, r.jsx)("div", {
                  className: ee.bottomRailNotifCenterButton,
                  children: (0, r.jsx)(I.Z, {})
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
          }), i)), (0, r.jsx)(k.Z, {
            reverse: true,
            ref: U,
            isVisible: et.isItemVisible,
            onJumpTo: et.handleJumpToGuild,
            className: o()(ee.unreadMentionsIndicatorBottom, {
              [ee.unreadMentionsFixedFooter]: !n && !eg,
              [ee.unreadMentionsFixedFooterBottomNotifCenterEntrypoint]: !n && eg
            }),
            barClassName: ee.unreadMentionsBar
          })]
        })
      }
    })
  })
}
let ec = Chunk647438.memo(function(e) {
  let t = (0, y.Z)("guildsnav");
  return (0, r.jsx)(u.bG, {
    navigator: t,
    children: (0, r.jsx)(es, en({}, e))
  })
}, (e, t) => false === t.isVisible || (0, h.Z)(e, t))
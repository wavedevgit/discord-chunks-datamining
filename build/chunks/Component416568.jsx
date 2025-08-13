/** Chunk was on 41753 **/
/** chunk id: 416568, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ed
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk114858 = require("./114858.js"),
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
  Chunk346356 = require("./346356.jsx"),
  Chunk431286 = require("./431286.jsx"),
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
  Chunk265543 = require("./265543.js");

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
class es {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n, r, l) {
    er(this, "guildsTree", true), er(this, "setScrolling", true), er(this, "setIsScrolledToBottom", true), er(this, "onScroll", true), er(this, "sizes", true), er(this, "scrollerRef", true), er(this, "nodeRefs", true), er(this, "timeout", true), er(this, "observer", true), er(this, "setResizeObserver", true), er(this, "clearResizeObserver", true), er(this, "scrollToGuild", true), er(this, "handleJumpToGuild", true), er(this, "scrollTo", true), er(this, "scrollToBottom", true), er(this, "isItemVisible", true), er(this, "getVisibleGuildIds", true), er(this, "handleScroll", true), er(this, "_handleScrollDebounced", true), er(this, "_handleScrollThrottled", true), er(this, "setNodeRef", true), this.guildsTree = e, this.setScrolling = t, this.setIsScrolledToBottom = n, this.onScroll = r, this.sizes = l, this.scrollerRef = i.createRef(), this.nodeRefs = {}, this.timeout = new f.V7, this.setResizeObserver = () => {
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
      let s = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
      if (s < 0) returnfalse;
      let a = r * s + l;
      t || (a += i);
      let c = o.getScrollerState();
      return !t && !!(a >= c.scrollTop) || !!t && !!(a + r <= c.scrollTop + c.offsetHeight)
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
          s = o.top - r;
        return s + o.height > 0 && s < n
      }).map(e => {
        let {
          id: t
        } = e;
        return t
      })
    }, this.handleScroll = () => {
      this.setScrolling(true), this.timeout.start(200, () => this.setScrolling(false)), this._handleScrollDebounced(), this._handleScrollThrottled()
    }, this._handleScrollDebounced = a().debounce(() => {
      let e = this.scrollerRef.current;
      if (null == e) return;
      let {
        scrollTop: t
      } = e.getScrollerState();
      b.Z.updateGuildListScrollTo(t), this.onScroll()
    }, 200), this._handleScrollThrottled = a().throttle(() => {
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
  } = e, l = (0, j.Z)(), {
    pathname: o
  } = (0, c.TH)(), s = o.startsWith(ee.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB("")), a = (0, h.Wu)([D.Z, R.ZP], () => D.Z.getGuildIds().filter(e => R.ZP.isCurrentUserGuest(e))), u = i.concat(a), {
    entrypoint: d
  } = (0, I.pN)({
    location: "GuildsBar"
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(W.u, {}), d === I.u3.SERVER_RAIL_TOP && (0, r.jsx)(P.Z, {}), l ? (0, r.jsx)(E.Z, {}) : null, (0, r.jsx)(K.Z, {
      isOnHubVerificationRoute: s
    }), !t && (0, r.jsx)(B.Z, {}), u.map(e => (0, r.jsx)($.Z, {
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
  } = e, [s] = (0, h.Wu)([L.ZP], () => {
    let e = L.ZP.getGuildsTree();
    return [e, e.version]
  }), a = s.getRoots(), c = (0, h.Wu)([A.Z], () => A.Z.getGeoRestrictedGuilds()).map(e => (0, r.jsx)(H.Z, {
    id: e.id,
    name: e.name,
    icon: e.icon
  }, e.id));
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Kqy, {
      role: "group",
      "aria-label": et.intl.string(et.t["7hB4kp"]),
      gap: "xs",
      children: a.map((e, t) => l(e, t, a.length))
    }), c, (0, r.jsx)(q.Z, {}), i ? null : (0, r.jsx)(F.Z, {
      disableTooltip: o.length > 0,
      lastTargetNode: a[a.length - 1]
    }), i ? null : t, n ? null : (0, r.jsx)(V.Z, {})]
  })
}

function eu(e) {
  let {
    disableAppDownload: t = M.isPlatformEmbedded,
    isOverlay: n = false,
    className: l,
    themeOverride: s
  } = e, [a] = (0, h.Wu)([L.ZP], () => {
    let e = L.ZP.getGuildsTree();
    return [e, e.version]
  }), d = (0, h.e7)([x.Z], () => x.Z.lurkingGuildIds()), p = i.useMemo(() => n ? [] : d, [d, n]), b = (0, h.e7)([v.Z], () => v.Z.isFullscreenInContext()), [_, j] = i.useState(false), E = i.useCallback(() => j(true), []), S = i.useCallback(() => j(false), []), A = i.useRef(false), [R] = i.useState(() => new f.V7), D = i.useRef(null), B = i.useRef(null), V = (0, u.OP)(), {
    ref: F
  } = V, H = function(e, t) {
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
  }(V, ["ref"]), W = (0, m.mFp)(), [K, q] = i.useState(false), J = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE), $ = (0, m.dQu)(g.Z.space.SPACE_XS), er = i.useMemo(() => {
    let e = function(e, t) {
      let n = e + t,
        r = 2 + t;
      return {
        iconSize: e,
        iconTotalSize: n,
        badgeVisibleBuffer: n - 16,
        separatorSize: r,
        heightBeforeIcons: el + r
      }
    }(J, $);
    return new es(a, q, ee.dG4, () => {
      var e, t;
      null == (e = D.current) || e.calculateState(), null == (t = B.current) || t.calculateState()
    }, e)
  }, [J, $, a]);
  i.useEffect(() => (er.setResizeObserver(), () => {
    er.clearResizeObserver()
  }), [er]);
  let {
    analyticsLocations: eu
  } = (0, C.ZP)(y.Z.GUILDS_LIST), {
    pathname: ed
  } = (0, c.TH)(), eh = eo(ed);
  (0, O.Ng)(() => {
    if (!A.current && 0 !== a.size) {
      if (!eh) {
        let {
          scrollTop: e
        } = T.Z.getGuildListDimensions();
        er.scrollTo({
          to: e,
          animate: false
        })
      }
      return A.current = true, () => R.stop()
    }
  }), i.useEffect(() => {
    if (er.setGuildsTree(a), A.current || 0 === a.size) return;
    let e = N.Z.getState().guildId;
    er.scrollToGuild(e, false);
    let t = null;
    return N.Z.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, er.scrollToGuild(t, false))
    })
  }, [a, er]);
  let ep = i.useCallback(() => {
    er.scrollTo({
      to: 0,
      animate: false
    })
  }, [er]);
  (0, U.Z)(er.scrollToGuild);
  let ef = i.useCallback(function e(t, n, i) {
    switch (t.type) {
      case k.eD.FOLDER:
        return (0, r.jsx)(X.Z, {
          folderNode: t,
          setNodeRef: er.setNodeRef,
          draggable: true,
          sorting: _,
          onDragStart: E,
          onDragEnd: S,
          renderChildNode: e,
          "aria-setsize": i,
          "aria-posinset": true !== n ? n + 1 : true
        }, t.id);
      case k.eD.GUILD:
        return (0, r.jsx)(Q.Z, {
          guildNode: t,
          setRef: er.setNodeRef,
          draggable: true,
          sorting: _,
          onDragStart: E,
          onDragEnd: S,
          "aria-setsize": i,
          "aria-posinset": true !== n ? n + 1 : true
        }, t.id);
      default:
        return null
    }
  }, [E, S, _, er.setNodeRef]);
  (0, Z.t)();
  let eg = i.useRef(null),
    em = i.useCallback(e => (0, r.jsx)(z.Z, ei({
      ref: eg,
      selected: eh,
      className: en.discoveryIcon
    }, e)), [eh]),
    eb = (0, r.jsx)(w.H, {
      targetElementRef: eg,
      scrollToBottom: er.scrollToBottom,
      isGuildBarScrolling: K,
      renderDiscoveryButton: em
    }),
    {
      entrypoint: eO
    } = (0, I.pN)({
      location: "GuildsBar"
    }),
    e_ = eO === I.u3.SERVER_RAIL_BOTTOM;
  return (0, r.jsx)(C.Gt, {
    value: eu,
    children: (0, r.jsx)(m.f6W, {
      theme: s,
      children: e => {
        var i, s;
        return (0, r.jsxs)("nav", {
          className: o()(en.wrapper, l, e, {
            [en.hidden]: b
          }),
          "aria-label": et.intl.string(et.t.PjnF2t),
          children: [(0, r.jsx)(G.Z, {
            ref: D,
            isVisible: er.isItemVisible,
            onJumpTo: er.handleJumpToGuild,
            className: en.unreadMentionsIndicatorTop,
            barClassName: en.unreadMentionsBar
          }), (0, r.jsx)("ul", (i = ei({
            ref: F
          }, H, W), s = s = {
            role: "tree",
            className: en.tree,
            children: (0, r.jsxs)("div", {
              className: en.itemsContainer,
              children: [(0, r.jsxs)(m.xVE, {
                className: o()({
                  [en.scroller]: true,
                  [en.scrolling]: K
                }),
                experimental_useStack: true,
                gap: "xs",
                ref: er.scrollerRef,
                onScroll: er.handleScroll,
                children: [(0, r.jsx)(ea, {
                  scrollToTop: ep,
                  lurkingGuildIds: p
                }), (0, r.jsx)(Y.Z, {}), (0, r.jsx)(ec, {
                  guildDiscoveryButton: eb,
                  disableAppDownload: t,
                  isOverlay: n,
                  renderTreeNode: ef,
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
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
          }), i)), (0, r.jsx)(G.Z, {
            reverse: true,
            ref: B,
            isVisible: er.isItemVisible,
            onJumpTo: er.handleJumpToGuild,
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
let ed = Chunk73800.memo(function(e) {
  let t = (0, _.Z)("guildsnav");
  return (0, r.jsx)(u.bG, {
    navigator: t,
    children: (0, r.jsx)(eu, ei({}, e))
  })
}, (e, t) => false === t.isVisible || (0, p.Z)(e, t))
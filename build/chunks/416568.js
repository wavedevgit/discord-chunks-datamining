/** Chunk was on 86029 **/
n.d(t, {
  Z: () => ec
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(392711),
  s = n.n(a),
  c = n(512969),
  u = n(91192),
  d = n(374470),
  p = n(442837),
  h = n(902704),
  f = n(846519),
  g = n(692547),
  m = n(481060),
  b = n(925549),
  y = n(493773),
  v = n(209613),
  O = n(100527),
  j = n(906732),
  _ = n(358221),
  C = n(540059),
  x = n(706590),
  P = n(940777),
  N = n(41776),
  S = n(905423),
  I = n(802718),
  Z = n(822857),
  w = n(931928),
  E = n(431286),
  T = n(796974),
  A = n(271383),
  D = n(430824),
  R = n(771845),
  L = n(358085),
  M = n(709054),
  k = n(727258),
  G = n(605951),
  U = n(474109),
  B = n(741616),
  W = n(187835),
  V = n(118122),
  F = n(193154),
  H = n(602147),
  z = n(416637),
  Y = n(222059),
  q = n(751277),
  Q = n(65721),
  K = n(843343),
  J = n(654142),
  X = n(695301),
  $ = n(836697),
  ee = n(921230),
  et = n(981631),
  en = n(388032),
  er = n(273801);

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ei(e, t, n[t])
    })
  }
  return e
}
let eo = (0, L.isWindows)() ? 4 : 12 * !(0, L.isMac)();
class ea {
  setGuildsTree(e) {
    this.guildsTree = e
  }
  constructor(e, t, n, r, l) {
    ei(this, "guildsTree", void 0), ei(this, "setScrolling", void 0), ei(this, "setIsScrolledToBottom", void 0), ei(this, "onScroll", void 0), ei(this, "sizes", void 0), ei(this, "scrollerRef", void 0), ei(this, "nodeRefs", void 0), ei(this, "timeout", void 0), ei(this, "observer", void 0), ei(this, "setResizeObserver", void 0), ei(this, "clearResizeObserver", void 0), ei(this, "scrollToGuild", void 0), ei(this, "handleJumpToGuild", void 0), ei(this, "scrollTo", void 0), ei(this, "scrollToBottom", void 0), ei(this, "isItemVisible", void 0), ei(this, "handleScroll", void 0), ei(this, "_handleScrollDebounced", void 0), ei(this, "_handleScrollThrottled", void 0), ei(this, "setNodeRef", void 0), this.guildsTree = e, this.setScrolling = t, this.setIsScrolledToBottom = n, this.onScroll = r, this.sizes = l, this.scrollerRef = i.createRef(), this.nodeRefs = {}, this.timeout = new f.V7, this.setResizeObserver = () => {
      var e;
      let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerNode();
      null != t && (this.observer = new ResizeObserver(this.handleScroll), this.observer.observe(t))
    }, this.clearResizeObserver = () => {
      var e;
      null === (e = this.observer) || void 0 === e || e.disconnect(), this.observer = void 0
    }, this.scrollToGuild = (e, t) => {
      let n = this.scrollerRef.current;
      if (null == n || null == e && window.location.pathname.startsWith(et.Z5c.GUILD_DISCOVERY) || e === et.x8Z.SERVER_DISCOVERY_BADGE || e === et.x8Z.E3_SERVER_DISCOVERY_BADGE) return;
      if (null == e) {
        n.scrollTo({
          to: 0,
          animate: t
        });
        return
      }
      let r = this.nodeRefs[e];
      for (; null == r;) {
        let t = this.guildsTree.getNode(e);
        if ((null == t ? void 0 : t.parentId) == null) break;
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
      this.scrollToGuild(e, !0)
    }, this.scrollTo = e => {
      var t;
      null === (t = this.scrollerRef.current) || void 0 === t || t.scrollTo(e)
    }, this.scrollToBottom = () => {
      var e;
      null === (e = this.scrollerRef.current) || void 0 === e || e.scrollToBottom()
    }, this.isItemVisible = (e, t, n) => {
      let {
        iconTotalSize: r,
        badgeVisibleBuffer: i,
        heightBeforeIcons: l
      } = this.sizes, o = this.scrollerRef.current;
      if (null == o) return !1;
      let a = n.findIndex(t => "string" == typeof t || null == t ? t === e : t.includes(e));
      if (a < 0) return !1;
      let s = r * a + l;
      t || (s += i);
      let c = o.getScrollerState();
      return !t && !!(s >= c.scrollTop) || !!t && !!(s + r <= c.scrollTop + c.offsetHeight)
    }, this.handleScroll = () => {
      this.setScrolling(!0), this.timeout.start(200, () => this.setScrolling(!1)), this._handleScrollDebounced(), this._handleScrollThrottled()
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
    }
  }
}

function es(e) {
  let {
    disableAppDownload: t = L.isPlatformEmbedded,
    isOverlay: n = !1,
    className: l,
    themeOverride: a
  } = e, s = (0, C.Q3)("GuildsBar"), {
    density: d
  } = (0, m.TCT)(), [h] = (0, p.Wu)([R.ZP], () => {
    let e = R.ZP.getGuildsTree();
    return [e, e.version]
  }), b = (0, p.e7)([N.Z], () => N.Z.lurkingGuildIds()), v = i.useMemo(() => n ? [] : b, [b, n]), ei = (0, p.Wu)([D.Z, A.ZP], () => M.default.keys(D.Z.getGuilds()).filter(e => A.ZP.isCurrentUserGuest(e))), es = v.concat(ei), ec = (0, p.e7)([_.Z], () => _.Z.isFullscreenInContext()), eu = (0, p.e7)([D.Z], () => D.Z.getGeoRestrictedGuilds()), [ed, ep] = i.useState(!1), eh = i.useCallback(() => ep(!0), []), ef = i.useCallback(() => ep(!1), []), eg = i.useRef(!1), [em] = i.useState(() => new f.V7), eb = i.useRef(null), ey = i.useRef(null), ev = (0, u.OP)(), {
    ref: eO
  } = ev, ej = function(e, t) {
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
  }(ev, ["ref"]), e_ = (0, m.mFp)(), [eC, ex] = i.useState(!1), [eP, eN] = i.useState(!1), eS = (0, m.dQu)(g.Z.modules.guildbar.AVATAR_SIZE), eI = i.useMemo(() => new ea(h, ex, eN, () => {
    var e, t;
    null === (e = eb.current) || void 0 === e || e.calculateState(), null === (t = ey.current) || void 0 === t || t.calculateState()
  }, function(e, t, n) {
    let r = 2 + (t ? 4 : 8);
    return {
      iconSize: e,
      iconTotalSize: e,
      badgeVisibleBuffer: e - 16,
      separatorSize: r,
      heightBeforeIcons: eo + r
    }
  }(eS, s, 0)), [eS, d, h, s]);
  i.useEffect(() => (eI.setResizeObserver(), () => {
    eI.clearResizeObserver()
  }), [eI]);
  let {
    analyticsLocations: eZ
  } = (0, j.ZP)(O.Z.GUILDS_LIST), {
    pathname: ew
  } = (0, c.TH)(), eE = ew.startsWith(et.Z5c.GUILD_DISCOVERY) || ew.startsWith(et.Z5c.GLOBAL_DISCOVERY), eT = ew.startsWith(et.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
  (0, y.Ng)(() => {
    if (!eg.current && 0 !== h.size) {
      if (eE) eI.scrollToGuild(null, !1);
      else {
        let {
          scrollTop: e
        } = T.Z.getGuildListDimensions();
        eI.scrollTo({
          to: e,
          animate: !1
        })
      }
      return eg.current = !0, () => em.stop()
    }
  }), i.useEffect(() => {
    if (eI.setGuildsTree(h), eg.current || 0 === h.size) return;
    let e = S.Z.getState().guildId;
    eI.scrollToGuild(e, !1);
    let t = null;
    return S.Z.subscribe(e => {
      let {
        guildId: n
      } = e;
      n !== t && (t = n, eI.scrollToGuild(t, !1))
    })
  }, [h, eI]);
  let eA = i.useCallback(() => {
    eI.scrollTo({
      to: 0,
      animate: !1
    })
  }, [eI]);
  (0, G.Z)(eI.scrollToGuild);
  let eD = i.useCallback(function e(t) {
      switch (t.type) {
        case k.eD.FOLDER:
          return (0, r.jsx)(J.Z, {
            folderNode: t,
            setNodeRef: eI.setNodeRef,
            draggable: !0,
            sorting: ed,
            onDragStart: eh,
            onDragEnd: ef,
            renderChildNode: e
          }, t.id);
        case k.eD.GUILD:
          return (0, r.jsx)(X.Z, {
            guildNode: t,
            setRef: eI.setNodeRef,
            draggable: !0,
            sorting: ed,
            onDragStart: eh,
            onDragEnd: ef
          }, t.id);
        default:
          return null
      }
    }, [eh, ef, ed, eI.setNodeRef]),
    eR = h.getRoots(),
    eL = (0, x.Z)(),
    eM = (0, I.U)(),
    {
      enabled: ek
    } = (0, Z.W)({
      location: "GuildsBar"
    });
  (0, E.i)();
  let eG = i.useRef(null),
    {
      shouldShow: eU,
      closeCoachmarkIfOpen: eB,
      questId: eW
    } = (0, w.qp)({
      isVirtualCurrencyEnabled: ek,
      discoveryButtonRef: eG,
      scrollToBottom: eI.scrollToBottom
    }),
    eV = ek && eU,
    eF = eV ? eW : void 0,
    eH = eu.map(e => (0, r.jsx)(F.Z, {
      id: e.id,
      name: e.name,
      icon: e.icon
    }, e.id));
  return (0, r.jsxs)(j.Gt, {
    value: eZ,
    children: [eV && (0, r.jsx)(w.fO, {
      backgroundElementRef: eG,
      onClose: eB,
      renderTail: !0
    }), (0, r.jsx)(m.f6W, {
      theme: a,
      children: e => {
        var i, a;
        return (0, r.jsx)("nav", {
          className: o()(er.wrapper, l, e, {
            [er.hidden]: ec
          }),
          "aria-label": en.NW.string(en.t.PjnF2t),
          children: (0, r.jsxs)("ul", (i = el({
            ref: eO
          }, ej, e_), a = a = {
            role: "tree",
            className: er.tree,
            children: [(0, r.jsx)(U.Z, {
              ref: eb,
              isVisible: eI.isItemVisible,
              onJumpTo: eI.handleJumpToGuild,
              className: er.unreadMentionsIndicatorTop,
              barClassName: er.unreadMentionsBar
            }), (0, r.jsxs)("div", {
              className: er.itemsContainer,
              children: [(0, r.jsxs)(m.xVE, {
                className: o()({
                  [er.scroller]: !0,
                  [er.scrolling]: eC
                }),
                experimental_useStack: s,
                gap: "xs",
                ref: eI.scrollerRef,
                onScroll: eI.handleScroll,
                children: [(0, r.jsx)(Y.u, {}), eL ? (0, r.jsx)(P.Z, {}) : null, (0, r.jsx)(q.Z, {
                  isOnHubVerificationRoute: eT
                }), (0, r.jsx)(B.Z, {}), eM, es.map(e => (0, r.jsx)(ee.Z, {
                  guildId: e
                }, e)), (0, r.jsx)($.Z, {
                  onActivate: eA
                }), (0, r.jsx)(Q.Z, {}), s ? (0, r.jsx)(m.Kqy, {
                  gap: "xs",
                  "aria-label": en.NW.string(en.t["7hB4kp"]),
                  children: eR.map(eD)
                }) : (0, r.jsx)("div", {
                  "aria-label": en.NW.string(en.t["7hB4kp"]),
                  children: eR.map(eD)
                }), eH, n ? null : (0, r.jsx)(V.Z, {
                  disableTooltip: v.length > 0,
                  lastTargetNode: eR[eR.length - 1]
                }), (0, r.jsx)(K.Z, {}), !n && s ? (0, r.jsx)(H.Z, {
                  ref: eG,
                  questId: eF,
                  onClick: eB,
                  selected: eE,
                  className: er.discoveryIcon
                }) : null, t ? null : (0, r.jsx)(W.Z, {})]
              }), n || s ? null : (0, r.jsx)(z.g, {
                hideGradient: eP,
                children: (0, r.jsx)(H.Z, {
                  ref: eG,
                  questId: eF,
                  onClick: eB,
                  selected: eE,
                  className: er.discoveryIcon
                })
              })]
            }), (0, r.jsx)(U.Z, {
              reverse: !0,
              ref: ey,
              isVisible: eI.isItemVisible,
              onJumpTo: eI.handleJumpToGuild,
              className: o()(er.unreadMentionsIndicatorBottom, {
                [er.unreadMentionsFixedFooter]: !n
              }),
              barClassName: er.unreadMentionsBar
            })]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
          }), i))
        })
      }
    })]
  })
}
let ec = i.memo(function(e) {
  let t = (0, v.Z)("guildsnav");
  return (0, r.jsx)(u.bG, {
    navigator: t,
    children: (0, r.jsx)(es, el({}, e))
  })
}, (e, t) => !1 === t.isVisible || (0, h.Z)(e, t))
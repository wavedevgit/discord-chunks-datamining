/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => G
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(995295),
  o = n(91192),
  c = n(374470),
  A = n(442837),
  d = n(481060),
  u = n(480137),
  g = n(239091),
  f = n(497321),
  m = n(724757),
  p = n(210887),
  h = n(387667),
  C = n(598077),
  b = n(592125),
  v = n(430824),
  x = n(246946),
  N = n(594174),
  j = n(823379),
  E = n(51144),
  I = n(987707),
  O = n(999382),
  y = n(909746),
  w = n(501801),
  P = n(603784),
  B = n(981631),
  D = n(388032),
  T = n(140091),
  S = n(599662),
  L = n(423308);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function W(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      s = Object.keys(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
class k extends i.PureComponent {
  render() {
    let e = this.props,
      {
        onHeaderClick: t,
        guildId: n,
        guild: i
      } = e,
      s = W(e, ["onHeaderClick", "guildId", "guild"]);
    return null == n ? null : (0, r.jsx)(P.Z, Z(Q({}, s), {
      guildId: n,
      guild: i,
      onHeaderClick: this.handleHeaderClick,
      onUserContextMenu: this.handleUserContextMenu,
      onChannelContextMenu: this.handleChannelContextMenu,
      onTargetContextMenu: this.handleTargetContextMenu
    }))
  }
  constructor(...e) {
    super(...e), R(this, "handleHeaderClick", () => {
      let {
        onHeaderClick: e,
        log: t
      } = this.props;
      null == e || e(t)
    }), R(this, "handleUserContextMenu", e => {
      let {
        log: t,
        guildId: i
      } = this.props, {
        user: s
      } = t;
      null != s && null != i && (0, g.jW)(e, async () => {
        let {
          default: e
        } = await n.e("50929").then(n.bind(n, 595011));
        return t => (0, r.jsx)(e, Z(Q({}, t), {
          guildId: i,
          user: s
        }))
      })
    }), R(this, "handleChannelContextMenu", e => {
      let {
        log: t,
        guildId: i
      } = this.props, s = v.Z.getGuild(i);
      null != t.options.channel && "string" != typeof t.options.channel && null != s && (0, g.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("38902"), n.e("51529")]).then(n.bind(n, 228620));
        return n => null != t.options.channel ? (0, r.jsx)(e, Z(Q({}, n), {
          channel: t.options.channel
        })) : null
      })
    }), R(this, "handleTargetContextMenu", e => {
      let {
        log: t,
        guildId: i
      } = this.props;
      switch (t.targetType) {
        case B.KFR.CHANNEL:
        case B.KFR.CHANNEL_OVERWRITE:
          let s = b.Z.getChannel(t.targetId),
            a = v.Z.getGuild(i);
          if (null != s && null != a) return (0, g.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("38902"), n.e("51529")]).then(n.bind(n, 228620));
            return t => (0, r.jsx)(e, Z(Q({}, t), {
              channel: s
            }))
          });
          return (0, g.jW)(e, async () => {
            let {
              default: e
            } = await n.e("5396").then(n.bind(n, 731646));
            return n => (0, r.jsx)(e, Z(Q({}, n), {
              id: t.targetId,
              label: D.NW.string(D.t.rCaznZ)
            }))
          });
        case B.KFR.USER:
          let l = N.default.getUser(t.targetId);
          if (null != l && null != i) return (0, g.jW)(e, async () => {
            let {
              default: e
            } = await n.e("50929").then(n.bind(n, 595011));
            return t => (0, r.jsx)(e, Z(Q({}, t), {
              guildId: i,
              user: l
            }))
          })
      }
      return null
    })
  }
}

function M(e) {
  let {
    logs: t,
    guildId: n,
    guild: s,
    expandedId: a,
    lastExpandedId: l,
    scroller: c,
    setExpandedRef: A,
    setLastExpandedRef: d,
    onHeaderClick: u,
    onContentClick: g
  } = e, f = i.useRef(c);
  i.useEffect(() => {
    f.current = c
  }, [c]);
  let p = (0, m.Z)("audit-log", f);
  return (0, r.jsx)(o.bG, {
    navigator: p,
    children: (0, r.jsx)(o.SJ, {
      children: e => {
        var {
          ref: i
        } = e, o = W(e, ["ref"]);
        return (0, r.jsx)("div", Z(Q({
          ref: i
        }, o), {
          className: T.list,
          children: t.map(e => {
            let t = a === e.id,
              i = l === e.id;
            return (0, r.jsx)(k, {
              guildId: n,
              guild: s,
              ref: t ? A : i ? d : null,
              className: T.row,
              onHeaderClick: u,
              onContentClick: g,
              log: e,
              expanded: t
            }, e.id)
          })
        }))
      }
    })
  })
}
class _ extends i.PureComponent {
  componentDidMount() {
    (0, u.bY)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick)
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick)
  }
  componentDidUpdate(e, t) {
    this.state.expandedId !== t.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, u.OY)(this.props.guildId, !0)
  }
  isScrollerAtBottom() {
    var e;
    return (null === (e = this._scrollerRef) || void 0 === e ? void 0 : e.isScrolledToBottom()) || !1
  }
  fixScroll() {
    let e = this._scrollerRef;
    if (null == e) return;
    let t = this.getRects(),
      n = this._prevRects;
    if (null == t.expanded || null == t.lastExpanded || null == n.expanded || t.expanded.top < t.lastExpanded.top) return;
    let r = n.expanded.height - t.lastExpanded.height,
      i = e.getScrollerState().scrollTop - r;
    e.scrollTo({
      to: i
    })
  }
  getRects() {
    let e = {
      lastExpanded: null,
      expanded: null
    };
    if (null != this._lastExpandedRef) {
      let t = l.findDOMNode(this._lastExpandedRef);
      (0, c.k)(t) && (e.lastExpanded = t.getBoundingClientRect())
    }
    if (null != this._expandedRef) {
      let t = l.findDOMNode(this._expandedRef);
      (0, c.k)(t) && (e.expanded = t.getBoundingClientRect())
    }
    return e
  }
  renderUserQuickSelectValue(e) {
    var t;
    return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label
  }
  renderActionQuickSelectValue(e) {
    var t;
    return null !== (t = e.valueLabel) && void 0 !== t ? t : e.label
  }
  renderHeader() {
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: T.customHeader,
        children: [(0, r.jsx)(d.vwX, {
          tag: d.RB0.H1,
          className: T.formTitle,
          children: D.NW.string(D.t.SPWLyc)
        }), this.renderHeaderDropdowns()]
      }), (0, r.jsx)(d.$i$, {
        className: T.divider
      })]
    })
  }
  renderSpinner() {
    return (0, r.jsx)(d.$jN, {
      type: d.$jN.Type.SPINNING_CIRCLE
    })
  }
  renderContent() {
    let {
      expandedId: e,
      lastExpandedId: t
    } = this.state, {
      logs: i,
      theme: s,
      hide: a,
      isInitialLoading: l,
      isLoading: o,
      hasError: c,
      guildId: A,
      guild: u
    } = this.props;
    if (a) return (0, r.jsx)(f.Z, {});
    if (o || l) return this.renderSpinner();
    if (0 === i.length) {
      let e = c ? D.NW.string(D.t.tzkaDw) : D.NW.string(D.t.lNuYho),
        t = c ? D.NW.string(D.t.Ww5Tj4) : D.NW.string(D.t["RHhk+P"]);
      return (0, r.jsxs)(d.ubH, {
        theme: s,
        className: T.empty,
        children: [(0, r.jsx)(d.oxh, {
          darkSrc: n(28269),
          lightSrc: n(357115),
          width: 272,
          height: 130
        }), (0, r.jsx)(d.OZU, {
          note: e,
          style: {
            maxWidth: 300
          },
          children: t
        })]
      })
    }
    return (0, r.jsx)(M, {
      logs: i,
      guildId: A,
      guild: u,
      expandedId: e,
      lastExpandedId: t,
      setExpandedRef: this.handleSetExpandedRef,
      setLastExpandedRef: this.handleSetLastExpandedRef,
      onHeaderClick: this.handleHeaderClick,
      onContentClick: this.handleContentClick,
      scroller: this._scrollerRef
    })
  }
  render() {
    let {
      isLoadingNextPage: e,
      hide: t,
      isLoading: n
    } = this.props;
    return (0, r.jsx)("div", {
      className: S.customColumn,
      children: (0, r.jsx)("div", {
        className: S.customContainer,
        children: (0, r.jsx)(d.yWw, {
          className: a()(S.customScroller, T.scroller),
          onScroll: this.handleOnScroll,
          ref: this.handleSetScrollerRef,
          children: (0, r.jsx)("div", {
            className: T.content,
            ref: this._contentRef,
            children: (0, r.jsxs)(d.JcV, {
              containerRef: this._contentRef,
              children: [this.renderHeader(), this.renderContent(), this.renderLoadMore(), !e || t || n ? null : this.renderSpinner()]
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "_clickedInside", !1), R(this, "_scrollerRef", null), R(this, "_expandedRef", void 0), R(this, "_lastExpandedRef", void 0), R(this, "_prevRects", this.getRects()), R(this, "_contentRef", i.createRef()), R(this, "state", {
      expandedId: null,
      lastExpandedId: null,
      actionFilterQuery: ""
    }), R(this, "renderActionQuickSelectItem", (e, t) => {
      var n;
      let {
        actionFilter: i
      } = this.props, s = (0, h.Pw)(e.value), a = (0, h.p5)(e.value), l = e.value === i;
      return (0, r.jsxs)(d.lo1, {
        value: e.value,
        selectedColor: d.lo1.Colors.BRAND,
        children: [(0, r.jsx)(d.lo1.Icon, {
          children: (0, r.jsx)(w.mp, {
            themeOverride: l ? B.BRd.DARK : null,
            actionType: s,
            targetType: a,
            action: e.value
          })
        }), (0, r.jsx)(d.lo1.Label, {
          children: e.label
        }), (0, r.jsx)(d.lo1.Checkmark, {})]
      }, null !== (n = e.key) && void 0 !== n ? n : t)
    }), R(this, "renderUserQuickSelectItem", (e, t) => {
      var n;
      if (e.user instanceof C.Z) {
        let t = e.user;
        return (0, r.jsxs)(d.lo1, {
          value: t.id,
          selectedColor: d.lo1.Colors.BRAND,
          children: [(0, r.jsx)(d.lo1.Icon, {
            children: (0, r.jsx)(d.qEK, {
              size: d.EFr.SIZE_32,
              src: t.getAvatarURL(this.props.guildId, 32),
              "aria-label": t.username,
              className: T.avatar
            })
          }), (0, r.jsxs)(d.lo1.Label, {
            children: [(0, r.jsx)(d.Text, {
              variant: "text-sm/normal",
              children: E.ZP.getUserTag(t, {
                mode: "username"
              })
            }), !t.isPomelo() && (0, r.jsxs)(d.Text, {
              variant: "text-xs/normal",
              className: T.discriminator,
              children: ["#", t.discriminator]
            })]
          }), (0, r.jsx)(d.lo1.Checkmark, {})]
        }, t.id)
      }
      return (0, r.jsxs)(d.lo1, {
        value: e.value,
        selectedColor: d.lo1.Colors.BRAND,
        children: [(0, r.jsx)(d.lo1.Icon, {
          children: (0, r.jsx)(d.BFJ, {
            size: "custom",
            color: "currentColor",
            width: 30,
            height: 30
          })
        }), (0, r.jsx)(d.lo1.Label, {
          children: e.label
        }), (0, r.jsx)(d.lo1.Checkmark, {})]
      }, null !== (n = e.key) && void 0 !== n ? n : t)
    }), R(this, "renderHeaderDropdowns", () => {
      var e, t;
      let {
        actionFilter: n,
        hide: i,
        userIdFilter: s,
        moderators: l
      } = this.props;
      if (i) return null;
      let o = y.Iv(),
        c = null !== (e = o.find(e => {
          let {
            value: t
          } = e;
          return n === t
        })) && void 0 !== e ? e : o[0],
        A = {
          label: D.NW.string(D.t.ZRFdsL),
          valueLabel: D.NW.string(D.t.an9Ry8),
          value: null
        },
        u = [A, ...l].map(e => e instanceof C.Z ? {
          label: e.username,
          value: e.id,
          user: e
        } : e),
        g = null !== (t = u.find(e => {
          let {
            value: t
          } = e;
          return t === s
        })) && void 0 !== t ? t : A;
      return (0, r.jsxs)("div", {
        className: T.quickSelect,
        children: [(0, r.jsx)(d.EFH, {
          popoutClassName: a()(T.selectFilterPopout, L.elevationBorderHigh),
          items: u,
          renderItem: this.renderUserQuickSelectItem,
          renderValue: this.renderUserQuickSelectValue,
          value: g,
          onChange: this.handleFilterUserChange,
          label: D.NW.string(D.t["hxnY/v"]),
          placeholder: D.NW.string(D.t.pYHobG),
          popoutProps: {
            autoInvert: !1,
            position: "bottom"
          }
        }), (0, r.jsx)(d.EFH, {
          placeholder: D.NW.string(D.t.I288Z2),
          label: D.NW.string(D.t.rautdn),
          popoutClassName: a()(T.selectFilterPopout, L.elevationBorderLow),
          items: o,
          renderItem: this.renderActionQuickSelectItem,
          renderValue: this.renderActionQuickSelectValue,
          value: c,
          onChange: this.handleFilterActionChange,
          popoutProps: {
            autoInvert: !1,
            position: "bottom"
          }
        })]
      })
    }), R(this, "renderLoadMore", () => {
      let {
        showLoadMore: e,
        hasOlderLogs: t,
        hide: n
      } = this.props;
      if (e && t && !n) return (0, r.jsx)(d.zxk, {
        color: d.zxk.Colors.PRIMARY,
        className: T.loadMore,
        onClick: this.handleFetchNextPage,
        children: D.NW.string(D.t["Q/LSXl"])
      })
    }), R(this, "handleFilterActionChange", e => {
      (0, u.ZX)(e, this.props.guildId)
    }), R(this, "handleFilterUserChange", e => {
      (0, u.uo)(e, this.props.guildId)
    }), R(this, "handleHeaderClick", e => {
      let {
        expandedId: t
      } = this.state;
      t !== e.id ? (this._clickedInside = !0, this.setState({
        expandedId: e.id,
        lastExpandedId: t
      }), this._prevRects = this.getRects()) : (this._expandedRef = null, this._lastExpandedRef = null, null != t && (this._prevRects = this.getRects()), this.setState({
        expandedId: null,
        lastExpandedId: null
      }))
    }), R(this, "handleOutsideClick", () => {
      null == this.state.expandedId || this._clickedInside ? null != this.state.expandedId && (this._clickedInside = !1) : (this._expandedRef = null, this._lastExpandedRef = null, this.setState({
        expandedId: null,
        lastExpandedId: null
      }), this._prevRects = this.getRects())
    }), R(this, "handleContentClick", e => {
      this._clickedInside = !0, e.stopPropagation()
    }), R(this, "handleSetScrollerRef", e => {
      this._scrollerRef = e
    }), R(this, "handleOnScroll", () => {
      this.isScrollerAtBottom() && this.handleFetchNextPage()
    }), R(this, "handleFetchNextPage", () => {
      (0, u.OY)(this.props.guildId)
    }), R(this, "handleActionFilterQueryChange", e => {
      this.setState({
        actionFilterQuery: e
      })
    }), R(this, "handleActionFilterQueryClear", () => {
      this.setState({
        actionFilterQuery: ""
      })
    }), R(this, "handleSetExpandedRef", e => {
      this._expandedRef = e
    }), R(this, "handleSetLastExpandedRef", e => {
      this._lastExpandedRef = e
    })
  }
}
let G = A.ZP.connectStores([I.Z, O.Z, v.Z, p.Z, x.Z, N.default], () => {
  let e = O.Z.getGuildId(),
    t = v.Z.getGuild(e),
    n = I.Z.logs;
  return {
    guildId: e,
    guild: t,
    moderators: I.Z.userIds.map(e => N.default.getUser(e)).filter(j.lm),
    isInitialLoading: I.Z.isInitialLoading,
    isLoading: I.Z.isLoading,
    isLoadingNextPage: I.Z.isLoadingNextPage,
    showLoadMore: I.Z.groupedFetchCount > 2,
    hasError: I.Z.hasError,
    hasOlderLogs: I.Z.hasOlderLogs,
    logs: null != n && null != t ? y._$(n, t) : [],
    actionFilter: I.Z.actionFilter,
    userIdFilter: I.Z.userIdFilter,
    theme: p.Z.theme,
    hide: x.Z.enabled
  }
})(_)
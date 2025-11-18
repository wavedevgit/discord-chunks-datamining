/** Chunk was on 32923 **/
/** chunk id: 853714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk333200 = require("./333200.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk480137 = require("./480137.js"),
  Chunk239091 = require("./239091.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk724757 = require("./724757.js"),
  Chunk210887 = require("./210887.js"),
  Chunk387667 = require("./387667.js"),
  Chunk598077 = require("./598077.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk999382 = require("./999382.js"),
  Chunk909746 = require("./909746.js"),
  Chunk233857 = require("./233857.js"),
  Chunk501801 = require("./501801.jsx"),
  Chunk603784 = require("./603784.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk736050 = require("./736050.js"),
  Chunk551955 = require("./551955.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
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

function k(e, t) {
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
}
let G = Chunk473749.forwardRef((e, t) => {
  var {
    onHeaderClick: i,
    guildId: l,
    guild: a
  } = e, s = k(e, ["onHeaderClick", "guildId", "guild"]);
  return null == l ? null : (0, r.jsx)(T.Z, L(A({
    ref: t
  }, s), {
    guildId: l,
    guild: a,
    onHeaderClick: () => {
      let {
        log: e
      } = s;
      null == i || i(e)
    },
    onUserContextMenu: e => {
      let {
        log: t
      } = s, {
        user: i
      } = t;
      null != i && null != l && (0, m.jW)(e, async () => {
        let {
          default: e
        } = await n.e("50929").then(n.bind(n, 595011));
        return t => (0, r.jsx)(e, L(A({}, t), {
          guildId: l,
          user: i
        }))
      })
    },
    onChannelContextMenu: e => {
      let {
        log: t
      } = s, i = _.Z.getGuild(l);
      null != t.options.channel && "string" != typeof t.options.channel && null != i && (0, m.jW)(e, async () => {
        let {
          default: e
        } = await n.e("51529").then(n.bind(n, 228620));
        return n => null != t.options.channel ? (0, r.jsx)(e, L(A({}, n), {
          channel: t.options.channel
        })) : null
      })
    },
    onTargetContextMenu: e => {
      let {
        log: t
      } = s;
      switch (t.targetType) {
        case P.KFR.CHANNEL:
        case P.KFR.CHANNEL_OVERWRITE:
          let i = j.Z.getChannel(t.targetId),
            a = _.Z.getGuild(l);
          if (null != i && null != a) return (0, m.jW)(e, async () => {
            let {
              default: e
            } = await n.e("51529").then(n.bind(n, 228620));
            return t => (0, r.jsx)(e, L(A({}, t), {
              channel: i
            }))
          });
          return (0, m.jW)(e, async () => {
            let {
              default: e
            } = await n.e("5396").then(n.bind(n, 731646));
            return n => (0, r.jsx)(e, L(A({}, n), {
              id: t.targetId,
              label: w.intl.string(w.t.rCazna)
            }))
          });
        case P.KFR.USER:
          let o = O.default.getUser(t.targetId);
          if (null != o && null != l) return (0, m.jW)(e, async () => {
            let {
              default: e
            } = await n.e("50929").then(n.bind(n, 595011));
            return t => (0, r.jsx)(e, L(A({}, t), {
              guildId: l,
              user: o
            }))
          })
      }
      return null
    }
  }))
});

function M(e) {
  let {
    logs: t,
    guildId: n,
    guild: l,
    expandedId: a,
    lastExpandedId: o,
    scroller: c,
    setExpandedRef: d,
    setLastExpandedRef: u,
    onHeaderClick: g,
    onContentClick: m
  } = e, p = i.useRef(c);
  i.useEffect(() => {
    p.current = c
  }, [c]);
  let h = (0, f.Z)("audit-log", p);
  return (0, r.jsx)(s.bG, {
    navigator: h,
    children: (0, r.jsx)(s.SJ, {
      children: e => {
        var {
          ref: i
        } = e, s = k(e, ["ref"]);
        return (0, r.jsx)("div", L(A({
          ref: i
        }, s), {
          className: Z.list,
          children: t.map(e => {
            let t = a === e.id,
              i = o === e.id,
              s = t ? d : i ? u : null;
            return (0, r.jsx)(G, {
              guildId: n,
              guild: l,
              ref: e => {
                null == s || s(e)
              },
              className: Z.row,
              onHeaderClick: g,
              onContentClick: m,
              log: e,
              expanded: t
            }, e.id)
          })
        }))
      }
    })
  })
}
G.displayName = "AuditLogClickWrap";
class U extends Chunk473749.PureComponent {
  componentDidMount() {
    (0, Chunk480137.bY)(this.props.guildId), document.addEventListener("click", this.handleOutsideClick)
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick)
  }
  componentDidUpdate(e, t) {
    this.state.expandedId !== t.expandedId && this.fixScroll(), !this.props.showLoadMore && this.props.logs.length !== e.logs.length && null != this._scrollerRef && this.isScrollerAtBottom() && (0, g.OY)(this.props.guildId, true)
  }
  isScrollerAtBottom() {
    var e;
    return (null == (e = this._scrollerRef) ? true : module.isScrolledToBottom()) || false
  }
  fixScroll() {
    let e = this._scrollerRef;
    if (null == module) return;
    let t = this.getRects(),
      n = this._prevRects;
    if (null == exports.expanded || null == exports.lastExpanded || null == require.expanded || exports.expanded.top < exports.lastExpanded.top) return;
    let r = require.expanded.height - exports.lastExpanded.height,
      i = module.getScrollerState().scrollTop - Chunk54381;
    module.scrollTo({
      to: Chunk473749
    })
  }
  getRects() {
    let e = {
      lastExpanded: null,
      expanded: null
    };
    if (null != this._lastExpandedRef) {
      let t = this._lastExpandedRef;
      (0, Chunk374470.kK)(exports) && (module.lastExpanded = exports.getBoundingClientRect())
    }
    if (null != this._expandedRef) {
      let t = this._expandedRef;
      (0, Chunk374470.kK)(exports) && (module.expanded = exports.getBoundingClientRect())
    }
    return module
  }
  renderHeader() {
    return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk736050.customHeader,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-lg/semibold",
          children: Chunk388032.intl.string(Chunk388032.t.SPWLyT)
        }), this.renderHeaderDropdowns()]
      }), (0, Chunk54381.jsx)(Chunk481060.izJ, {
        className: Chunk736050.divider
      })]
    })
  }
  renderSpinner() {
    return (0, Chunk54381.jsx)(Chunk481060.$jN, {
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE
    })
  }
  renderContent() {
    let {
      expandedId: e,
      lastExpandedId: t
    } = this.state, {
      logs: i,
      theme: l,
      hide: a,
      isInitialLoading: s,
      isLoading: o,
      hasError: c,
      guildId: d,
      guild: g
    } = this.props;
    if (a) return (0, Chunk54381.jsx)(Chunk497321.Z, {});
    if (Chunk374470 || Chunk91192) return this.renderSpinner();
    if (0 === Chunk473749.length) {
      let e = Chunk442837 ? Chunk388032.intl.string(Chunk388032.t.tzkaD7) : Chunk388032.intl.string(Chunk388032.t.lNuYhh),
        t = Chunk442837 ? Chunk388032.intl.string(Chunk388032.t.Ww5Tjy) : Chunk388032.intl.string(Chunk388032.t["RHhk+P"]);
      return (0, Chunk54381.jsxs)(Chunk481060.ubH, {
        theme: Chunk120356,
        className: Chunk736050.empty,
        children: [(0, Chunk54381.jsx)(Chunk481060.oxh, {
          darkSrc: require("./28269.js"),
          lightSrc: require("./357115.js"),
          width: 272,
          height: 130
        }), (0, Chunk54381.jsx)(Chunk481060.OZU, {
          note: module,
          style: {
            maxWidth: 300
          },
          children: exports
        })]
      })
    }
    return (0, Chunk54381.jsx)(M, {
      logs: Chunk473749,
      guildId: Chunk333200,
      guild: Chunk480137,
      expandedId: module,
      lastExpandedId: exports,
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
    return (0, Chunk54381.jsx)("div", {
      className: Chunk551955.customColumn,
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk551955.customContainer,
        children: (0, Chunk54381.jsx)(Chunk481060.yWw, {
          className: a()(Chunk551955.customScroller, Chunk736050.scroller),
          onScroll: this.handleOnScroll,
          ref: this.handleSetScrollerRef,
          children: (0, Chunk54381.jsx)("div", {
            className: Chunk736050.content,
            ref: this._contentRef,
            children: (0, Chunk54381.jsxs)(Chunk481060.JcV, {
              containerRef: this._contentRef,
              children: [this.renderHeader(), this.renderContent(), this.renderLoadMore(), !module || exports || require ? null : this.renderSpinner()]
            })
          })
        })
      })
    })
  }
  constructor(...e) {
    super(...e), D(this, "_clickedInside", false), D(this, "_scrollerRef", null), D(this, "_expandedRef", null), D(this, "_lastExpandedRef", null), D(this, "_prevRects", this.getRects()), D(this, "_contentRef", i.createRef()), D(this, "state", {
      expandedId: null,
      lastExpandedId: null,
      actionFilterQuery: ""
    }), D(this, "formatActionOption", e => {
      let t = (0, b.Pw)(e.value),
        n = (0, b.p5)(e.value);
      return {
        id: e.value,
        value: e.value,
        label: e.label,
        leading: (0, r.jsx)(S.mp, {
          themeOverride: null,
          actionType: t,
          targetType: n,
          action: e.value
        })
      }
    }), D(this, "formatUserOption", e => {
      if (!(e.user instanceof x.Z)) return {
        id: e.value,
        value: e.value,
        label: e.label,
        leading: (0, r.jsx)(u.BFJ, {
          size: "custom",
          color: "currentColor",
          width: 30,
          height: 30
        })
      };
      {
        let t = e.user;
        return {
          id: t.id,
          value: t.id,
          label: y.ZP.getUserTag(t, {
            mode: "username"
          }),
          leading: (0, r.jsx)(u.qEK, {
            size: u.EFr.SIZE_24,
            src: t.getAvatarURL(this.props.guildId, 32),
            "aria-label": t.username,
            className: Z.avatar
          }),
          trailing: t.hasUniqueUsername() ? true : (0, r.jsxs)(u.Text, {
            variant: "text-xs/normal",
            className: Z.discriminator,
            children: ["#", t.discriminator]
          })
        }
      }
    }), D(this, "renderHeaderDropdowns", () => {
      var e, t;
      let {
        actionFilter: n,
        hide: i,
        userIdFilter: l,
        moderators: a
      } = this.props;
      if (i) return null;
      let s = E.Iv(),
        o = null != (e = s.find(e => {
          let {
            value: t
          } = e;
          return n === t
        })) ? e : s[0],
        c = {
          label: w.intl.string(w.t.ZRFdsL),
          valueLabel: w.intl.string(w.t.an9Ry3),
          value: null
        },
        u = [c, ...a].map(e => e instanceof x.Z ? function(e) {
          return {
            label: e.username,
            value: e.id,
            user: e
          }
        }(e) : e),
        g = null != (t = u.find(e => {
          let {
            value: t
          } = e;
          return t === l
        })) ? t : c;
      return (0, r.jsxs)("div", {
        className: Z.quickSelect,
        children: [(0, r.jsx)(d.V, {
          options: u,
          formatOption: this.formatUserOption,
          value: g.value,
          onSelectionChange: this.handleFilterUserChange,
          label: w.intl.string(w.t["hxnY/q"]),
          placeholder: w.intl.string(w.t.pYHobK),
          selectionMode: "single"
        }), (0, r.jsx)(d.V, {
          placeholder: w.intl.string(w.t.I288Zx),
          label: w.intl.string(w.t.rautds),
          options: s,
          formatOption: this.formatActionOption,
          value: o.value,
          onSelectionChange: this.handleFilterActionChange,
          selectionMode: "single"
        })]
      })
    }), D(this, "renderLoadMore", () => {
      let {
        showLoadMore: e,
        hasOlderLogs: t,
        hide: n
      } = this.props;
      if (e && t && !n) return (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Z.loadMore,
        children: (0, r.jsx)(u.Button, {
          variant: "secondary",
          text: w.intl.string(w.t["Q/LSXp"]),
          onClick: this.handleFetchNextPage
        })
      })
    }), D(this, "handleFilterActionChange", e => {
      (0, g.ZX)(e, this.props.guildId)
    }), D(this, "handleFilterUserChange", e => {
      (0, g.uo)(e, this.props.guildId)
    }), D(this, "handleHeaderClick", e => {
      let {
        expandedId: t
      } = this.state;
      t !== e.id ? (this._clickedInside = true, this.setState({
        expandedId: e.id,
        lastExpandedId: t
      }), this._prevRects = this.getRects()) : (this._expandedRef = null, this._lastExpandedRef = null, null != t && (this._prevRects = this.getRects()), this.setState({
        expandedId: null,
        lastExpandedId: null
      }))
    }), D(this, "handleOutsideClick", () => {
      null == this.state.expandedId || this._clickedInside ? null != this.state.expandedId && (this._clickedInside = false) : (this._expandedRef = null, this._lastExpandedRef = null, this.setState({
        expandedId: null,
        lastExpandedId: null
      }), this._prevRects = this.getRects())
    }), D(this, "handleContentClick", e => {
      this._clickedInside = true, e.stopPropagation()
    }), D(this, "handleSetScrollerRef", e => {
      this._scrollerRef = e
    }), D(this, "handleOnScroll", () => {
      this.isScrollerAtBottom() && this.handleFetchNextPage()
    }), D(this, "handleFetchNextPage", () => {
      (0, g.OY)(this.props.guildId)
    }), D(this, "handleActionFilterQueryChange", e => {
      this.setState({
        actionFilterQuery: e
      })
    }), D(this, "handleActionFilterQueryClear", () => {
      this.setState({
        actionFilterQuery: ""
      })
    }), D(this, "handleSetExpandedRef", e => {
      this._expandedRef = e
    }), D(this, "handleSetLastExpandedRef", e => {
      this._lastExpandedRef = e
    })
  }
}
let B = Chunk442837.ZP.connectStores([Chunk233857.Z, Chunk999382.Z, Chunk430824.Z, Chunk210887.Z, Chunk246946.Z, Chunk594174.default], () => {
  let e = Chunk999382.Z.getGuildId(),
    t = Chunk430824.Z.getGuild(module),
    n = Chunk233857.Z.logs;
  return {
    guildId: module,
    guild: exports,
    moderators: Chunk233857.Z.userIds.map(e => O.default.getUser(e)).filter(Chunk823379.lm),
    isInitialLoading: Chunk233857.Z.isInitialLoading,
    isLoading: Chunk233857.Z.isLoading,
    isLoadingNextPage: Chunk233857.Z.isLoadingNextPage,
    showLoadMore: Chunk233857.Z.groupedFetchCount > 2,
    hasError: Chunk233857.Z.hasError,
    hasOlderLogs: Chunk233857.Z.hasOlderLogs,
    logs: null != require && null != exports ? Chunk909746._$(require, exports) : [],
    actionFilter: Chunk233857.Z.actionFilter,
    userIdFilter: Chunk233857.Z.userIdFilter,
    theme: Chunk210887.Z.theme,
    hide: Chunk246946.Z.enabled
  }
})(U)
/** Chunk was on 44669 **/
/** chunk id: 814340, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Z
}), require("./65821.js"), require("./896048.js"), require("./747238.js"), require("./667532.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk390435 = require("./390435.js"),
  Chunk775121 = require("./775121.js"),
  Chunk629357 = require("./629357.js"),
  Chunk329308 = require("./329308.js"),
  Chunk599677 = require("./599677.js"),
  Chunk12351 = require("./12351.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk360619 = require("./360619.js"),
  Chunk734057 = require("./734057.js"),
  Chunk458294 = require("./458294.js"),
  Chunk71393 = require("./71393.js"),
  Chunk290863 = require("./290863.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk607567 = require("./607567.js"),
  Chunk248465 = require("./248465.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk975571 = require("./975571.js"),
  Chunk793322 = require("./793322.js"),
  Chunk174768 = require("./174768.js"),
  Chunk586068 = require("./586068.jsx"),
  Chunk826050 = require("./826050.jsx"),
  Chunk818039 = require("./818039.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk171814 = require("./171814.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
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
let F = () => (0, l.jsxs)("div", {
  className: U.p$,
  children: [(0, l.jsx)("div", {
    className: U.lv,
    children: k.intl.string(k.t.bpbATE)
  }), (0, l.jsx)("div", {
    className: U.PA,
    children: (0, l.jsx)(d.MzZ, {
      href: P.A.getArticleURL(G.MVz.QUICK_SWITCHER_TUTORIAL),
      children: k.intl.string(k.t["4iPfEO"])
    })
  })]
});
class Y extends(r = Chunk64700.Component) {
  render() {
    let e = x.A.getGuild(this.props.channel.guild_id);
    return (0, l.jsx)(D.c3, H(B({}, this.props), {
      children: (0, l.jsx)("div", {
        className: U.MD,
        children: null != e ? e.name : null
      })
    }))
  }
}
V(Y, "defaultProps", {
  unread: false
});
let K = Chunk311907.Ay.connectStores([Chunk222823.Ay, Chunk734057.A], e => {
    let {
      channel: t
    } = e;
    return {
      unread: E.Ay.hasUnread(t.id),
      mentions: E.Ay.getMentionCount(t.id),
      isMentionLowImportance: E.Ay.getIsMentionLowImportance(t.id),
      category: j.A.getChannel(t.parent_id)
    }
  })(Y),
  W = Chunk311907.Ay.connectStores([Chunk607567.Ay], e => {
    let {
      channel: t
    } = e;
    if (null == t.guild_id) throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
    return {
      voiceStates: S.Ay.getVoiceStates(t.guild_id)[t.id]
    }
  })(Y),
  z = Chunk311907.Ay.connectStores([Chunk458294.default], e => {
    let {
      guild: t
    } = e;
    return {
      unread: _.default.hasUnread(t.id)
    }
  })(Chunk586068.OS),
  q = Chunk311907.Ay.connectStores([Chunk222823.Ay, Chunk290863.A], e => {
    var t;
    let {
      channel: n
    } = e, r = null, l = v.A.getState().statuses;
    return (null == (t = n.recipients) ? true : t.some(e => l[e] === G.clD.ONLINE)) && (r = G.clD.ONLINE), {
      mentions: E.Ay.getMentionCount(n.id),
      status: r
    }
  })(Chunk586068.nG),
  X = Chunk311907.Ay.connectStores([Chunk734057.A, Chunk222823.Ay, Chunk290863.A], e => {
    let {
      user: t
    } = e, n = j.A.getDMFromUserId(t.id);
    return {
      mentions: null != n ? E.Ay.getMentionCount(n) : 0,
      status: v.A.getStatus(t.id),
      isMobile: v.A.isMobileOnline(t.id)
    }
  })(Chunk586068.KJ);

function J(e, t, n) {
  return (0, l.jsx)(u.m, {
    __unsupportedReactNodeAsText: n,
    children: (0, l.jsx)("span", {
      className: U.ZT,
      children: t
    })
  }, e)
}
class Q extends Chunk64700.PureComponent {
  componentDidMount() {
    g.A.disable(), g.A.enableTemp(h.w)
  }
  componentWillUnmount() {
    g.A.disableTemp(), g.A.enable()
  }
  componentDidUpdate(e, t) {
    let {
      mouseFocusDisabled: n,
      query: r
    } = this.state, {
      selectedIndex: l
    } = this.props, {
      current: i
    } = this.scrollerRef;
    null != i && (r !== t.query ? i.scrollTo({
      to: 0
    }) : n && l >= 0 && i.scrollToIndex({
      section: 0,
      row: l,
      padding: 10
    }))
  }
  close() {
    (0, w.jD)()
  }
  search(e) {
    this.setState({
      query: e
    }), (0, w.$P)(e)
  }
  renderInput() {
    let {
      selectedIndex: e,
      results: t
    } = this.props, {
      query: n
    } = this.state, r = t.length > 0 && "" !== n;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(N.EG, {
        event: G.jej.GLOBAL_CLIPBOARD_PASTE,
        handler: this.handleGlobalPaste
      }), (0, l.jsx)(d.vN3, {
        children: (0, l.jsx)("input", {
          className: U.hF,
          "aria-label": k.intl.string(k.t.ZvKwYa),
          ref: this.inputRef,
          type: "text",
          role: "combobox",
          "aria-controls": this._listId,
          "aria-expanded": r,
          "aria-activedescendant": r ? this.getRowId(e) : true,
          "aria-autocomplete": "list",
          placeholder: k.intl.string(k.t.VtvewW),
          onChange: this.handleInputChange,
          onKeyDown: this.handleKeyDown,
          value: this.state.query,
          spellCheck: false,
          autoFocus: true
        })
      })]
    })
  }
  renderSection() {
    return null
  }
  renderResults() {
    let e = () => {
      let {
        query: e
      } = this.state, {
        results: t
      } = this.props;
      return 0 === t.length && e.length > 0 ? (0, l.jsx)(F, {}) : 0 === t.length ? null : (0, l.jsx)(d.Eie, {
        innerId: this._listId,
        innerRole: "listbox",
        "aria-label": k.intl.string(k.t.Wef5Do),
        ref: this.scrollerRef,
        sectionHeight: 0,
        rowHeight: 34,
        paddingBottom: 10,
        sections: [t.length],
        className: U.XG,
        renderRow: this.renderRow,
        renderSection: this.renderSection
      })
    };
    return (0, l.jsx)("div", {
      className: U.sN,
      children: e()
    })
  }
  focusNode(e) {
    T._.dispatch(G.jej.QUICKSWITCHER_RESULT_FOCUS, {
      node: e
    })
  }
  getRowId(e) {
    return "quick-switcher-".concat(this._listId, "-item-").concat(e)
  }
  renderProtip() {
    return (0, l.jsx)(A.A, {
      className: a()(U.PP, {
        [U.ov]: this.state.query.length > 0
      }),
      type: A.A.Types.INLINE,
      children: k.intl.format(k.t.wukqXQ, {
        userSymbolHook: (e, t) => J(t, f.AT.USER, k.intl.string(k.t.GQRCGn)),
        textChannelSymbolHook: (e, t) => J(t, f.AT.TEXT_CHANNEL, k.intl.string(k.t.wrwhuZ)),
        voiceChannelSymbolHook: (e, t) => J(t, f.AT.VOICE_CHANNEL, k.intl.string(k.t["jz+hJp"])),
        guildSymbolHook: (e, t) => J(t, f.AT.GUILD, k.intl.string(k.t.WuwCWi)),
        helpdeskArticle: P.A.getArticleURL(G.MVz.QUICK_SWITCHER_TUTORIAL)
      })
    })
  }
  renderTutorial() {
    let {
      query: e
    } = this.state, {
      seenTutorial: t,
      results: n
    } = this.props;
    return t ? null : (0, l.jsx)(L.A, {
      hasQuery: e.length > 0 && n.length > 0
    })
  }
  render() {
    return (0, l.jsx)(o.dWK, {
      "aria-label": k.intl.string(k.t.ZvKwYa),
      size: "lg",
      transitionState: this.props.transitionState,
      onClose: this.props.onClose,
      children: (0, l.jsxs)("div", {
        className: U.rs,
        onMouseMove: this.handleMouseMove,
        children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
      })
    })
  }
  constructor(...e) {
    super(...e), V(this, "scrollerRef", i.createRef()), V(this, "inputRef", i.createRef()), V(this, "_listId", (0, y.Ld)()), V(this, "state", {
      query: this.props.query,
      mouseFocusDisabled: true
    }), V(this, "handleInputChange", () => {
      let {
        current: e
      } = this.inputRef;
      null != e && this.search(e.value)
    }), V(this, "handleMouseMove", () => {
      let {
        mouseFocusDisabled: e
      } = this.state;
      false !== e && this.setState({
        mouseFocusDisabled: false
      })
    }), V(this, "focusResult", e => {
      this.state.mouseFocusDisabled || (0, w.wf)(this.props.results.indexOf(e))
    }), V(this, "selectResult", e => {
      (0, w.F6)(e, this.props.queryMode === f.rD.TEXT_CHANNEL)
    }), V(this, "handleContextMenu", e => {
      let t = this.props.results[this.props.selectedIndex];
      switch (t.type) {
        case f.rD.GUILD:
          return (0, p.L3)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("68587"), n.e("43600"), n.e("63379"), n.e("56026"), n.e("16301"), n.e("22191"), n.e("25961"), n.e("21968"), n.e("35894"), n.e("50796"), n.e("11810"), n.e("8458"), n.e("39048"), n.e("36290"), n.e("59735"), n.e("54469"), n.e("70084")]).then(n.bind(n, 544676));
            return n => (0, l.jsx)(e, H(B({}, n), {
              guild: t.record,
              onSelect: w.jD,
              hideSettings: true
            }))
          });
        case f.rD.TEXT_CHANNEL:
        case f.rD.VOICE_CHANNEL:
          let r = t.record,
            i = x.A.getGuild(r.getGuildId());
          if (null == i) return;
          switch (r.type) {
            case G.rbe.GUILD_TEXT:
            case G.rbe.GUILD_ANNOUNCEMENT:
            case G.rbe.GUILD_FORUM:
            case G.rbe.GUILD_MEDIA:
              return (0, p.L3)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("97262"), n.e("57287"), n.e("77666")]).then(n.bind(n, 370372));
                return t => (0, l.jsx)(e, H(B({}, t), {
                  channel: r,
                  guild: i,
                  onSelect: w.jD
                }))
              });
            case G.rbe.GUILD_VOICE:
            case G.rbe.GUILD_STAGE_VOICE:
              return (0, p.L3)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("97262"), n.e("57287"), n.e("40394"), n.e("30997")]).then(n.bind(n, 698193));
                return t => (0, l.jsx)(e, H(B({}, t), {
                  channel: r,
                  guild: i,
                  onSelect: w.jD
                }))
              });
            case G.rbe.ANNOUNCEMENT_THREAD:
            case G.rbe.PUBLIC_THREAD:
            case G.rbe.PRIVATE_THREAD:
              return (0, p.L3)(e, async () => {
                let {
                  default: e
                } = await n.e("33").then(n.bind(n, 44536));
                return t => (0, l.jsx)(e, H(B({}, t), {
                  channel: r,
                  onSelect: w.jD
                }))
              });
            case G.rbe.GUILD_STORE:
              return (0, p.L3)(e, async () => {
                let {
                  default: e
                } = await n.e("15669").then(n.bind(n, 313140));
                return t => (0, l.jsx)(e, H(B({}, t), {
                  channel: r,
                  guild: i,
                  onSelect: w.jD
                }))
              });
            case G.rbe.GUILD_DIRECTORY:
              return (0, p.L3)(e, async () => {
                let {
                  default: e
                } = await n.e("29559").then(n.bind(n, 994058));
                return t => (0, l.jsx)(e, H(B({}, t), {
                  channel: r
                }))
              })
          }
          break;
        case f.rD.GROUP_DM:
          return (0, p.L3)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("97262"), n.e("60200")]).then(n.bind(n, 4027));
            return n => (0, l.jsx)(e, H(B({}, n), {
              channel: t.record,
              selected: C.A.getChannelId() === t.record.id,
              onSelect: w.jD
            }))
          });
        case f.rD.USER:
          return (0, p.L3)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(n.bind(n, 668569));
            return n => (0, l.jsx)(e, H(B({}, n), {
              user: t.record,
              onSelect: w.jD
            }))
          })
      }
    }), V(this, "handleKeyDown", e => {
      let {
        mouseFocusDisabled: t,
        query: n
      } = this.state, {
        results: r
      } = this.props;
      false === t && this.setState({
        mouseFocusDisabled: true
      });
      let l = e.key.toLowerCase(),
        {
          selectedIndex: i
        } = this.props;
      switch (l) {
        case "escape":
          e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, w.jD)();
          return;
        case "k":
          (true === e.ctrlKey || true === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, w.jD)());
          return;
        case "enter": {
          if (false === i) return;
          if (e.preventDefault(), e.altKey) return this.handleContextMenu(e);
          let t = r[i];
          null != t && this.selectResult(t);
          return
        }
        case "arrowup":
          i = (0, f.Vv)(f.vB.UP, i, r);
          break;
        case "arrowdown":
          i = (0, f.Vv)(f.vB.DOWN, i, r);
          break;
        case "n":
          if (!e.ctrlKey) return;
          i = (0, f.Vv)(f.vB.DOWN, i, r);
          break;
        case "p":
          if (!e.ctrlKey) return;
          i = (0, f.Vv)(f.vB.UP, i, r);
          break;
        default:
          return
      }
      e.preventDefault(), (0, w.wf)(i)
    }), V(this, "handleGlobalPaste", e => {
      var t, n;
      let {
        event: r
      } = e, l = null == (t = r.clipboardData) ? true : t.getData("text");
      null != l && (r.preventDefault(), r.stopPropagation(), this.search(this.state.query + l), null == (n = this.inputRef.current) || n.focus())
    }), V(this, "renderRow", e => {
      let {
        row: t
      } = e, n = this.props.results[t], {
        selectedIndex: r
      } = this.props, {
        showScores: i
      } = b.A.getCurrentConfig({
        location: "62f4be_1"
      }, {
        autoTrackExposure: false
      });
      switch (n.type) {
        case f.rD.HEADER:
          return (0, l.jsx)(D.Y9, {
            children: n.record.text
          }, "".concat(n.type, "-").concat(n.record.id));
        case f.rD.TEXT_CHANNEL:
          return (0, l.jsx)(K, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: i ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case f.rD.VOICE_CHANNEL:
          return (0, l.jsx)(W, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: i ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case f.rD.GUILD:
          return (0, l.jsx)(z, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            guild: n.record,
            score: i ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case f.rD.USER:
          return (0, l.jsx)(X, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            user: n.record,
            comparator: n.comparator,
            score: i ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case f.rD.GROUP_DM:
          return (0, l.jsx)(q, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: i ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case f.rD.APPLICATION:
          return (0, l.jsx)(D.lg, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            application: n.record
          }, "".concat(n.type, "-").concat(n.record.id));
        case f.rD.LINK:
          return (0, l.jsx)(D.N_, {
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            link: n.record,
            score: i ? n.score : true,
            id: this.getRowId(t)
          }, "".concat(n.type, "-").concat(n.record.id));
        case f.rD.IN_APP_NAVIGATION:
          return (0, l.jsx)(D.vw, {
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            navigationRecord: n.record,
            score: i ? n.score : true,
            id: this.getRowId(t),
            children: n.record.type === m.t1.SETTINGS && (0, l.jsx)("div", {
              className: U.MD,
              children: k.intl.string(k.t["3D5yo/"])
            })
          }, "".concat(n.type, "-").concat(n.record.id));
        default:
          return null
      }
    })
  }
}

function Z(e) {
  let t = (0, c.cf)([R.A], () => R.A.getProps()),
    n = (0, O.PH)(),
    r = M.A.useExperiment({
      location: "QuickSwitcher"
    }).enabled,
    s = i.useMemo(() => r ? Object.values(n).filter(e => null != e.url).filter(e => null == e.predicate || e.predicate()) : [], [n, r]);
  return i.useLayoutEffect(() => {
    if (!r) return;
    let e = s.map(e => {
      var t;
      return {
        title: "string" == typeof e.label ? e.label : "",
        searchableTitles: null != (t = e.searchableTitles) ? t : [],
        path: e.url
      }
    }).filter(e => "" !== e.title && null != e.path);
    e.unshift({
      title: k.intl.string(k.t["3D5yo/"]),
      searchableTitles: [k.intl.string(k.t["3D5yo/"])],
      path: G.BVt.SETTINGS("account")
    }), (0, I.FR)(e)
  }, [s, r]), (0, l.jsx)(Q, B({}, t, e))
}
/** Chunk was on 11663 (1fbf2d00710df90a.js) **/
n.d(t, {
  Z: () => X
}), n(411104), n(47120), n(301563), n(733860);
var r, i = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(873546),
  c = n(442837),
  u = n(481060),
  d = n(239091),
  _ = n(134616),
  E = n(714338),
  p = n(212819),
  h = n(815372),
  m = n(14429),
  f = n(576855),
  O = n(313201),
  g = n(991346),
  N = n(592125),
  I = n(888369),
  b = n(430824),
  C = n(306680),
  T = n(944486),
  S = n(938475),
  y = n(483360),
  R = n(585483),
  A = n(63063),
  P = n(51596),
  v = n(823385),
  L = n(415795),
  D = n(670512),
  k = n(558631),
  x = n(981631),
  M = n(388032),
  j = n(438767);

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
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
let V = () => (0, i.jsxs)("div", {
  className: j.emptyState,
  children: [(0, i.jsx)("div", {
    className: j.emptyStateNote,
    children: M.NW.string(M.t.bpbATE)
  }), (0, i.jsx)("div", {
    className: j.emptyStateCTA,
    children: (0, i.jsx)(u.eee, {
      href: A.Z.getArticleURL(x.BhN.QUICK_SWITCHER_TUTORIAL),
      children: M.NW.string(M.t["4iPfEB"])
    })
  })]
});
class F extends(r = l.Component) {
  render() {
    let e = b.Z.getGuild(this.props.channel.guild_id);
    return (0, i.jsx)(L.$W, w(Z({}, this.props), {
      children: (0, i.jsx)("div", {
        className: j.miscContainer,
        children: null != e ? e.name : null
      })
    }))
  }
}
U(F, "defaultProps", {
  unread: !1
});
let G = c.ZP.connectStores([C.ZP, N.Z], e => {
    let {
      channel: t
    } = e;
    return {
      unread: C.ZP.hasUnread(t.id),
      mentions: C.ZP.getMentionCount(t.id),
      isMentionLowImportance: C.ZP.getIsMentionLowImportance(t.id),
      category: N.Z.getChannel(t.parent_id)
    }
  })(F),
  W = c.ZP.connectStores([S.ZP], e => {
    let {
      channel: t
    } = e;
    if (null == t.guild_id) throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
    return {
      voiceStates: S.ZP.getVoiceStates(t.guild_id)[t.id]
    }
  })(F),
  B = c.ZP.connectStores([I.default], e => {
    let {
      guild: t
    } = e;
    return {
      unread: I.default.hasUnread(t.id)
    }
  })(L.ic),
  H = c.ZP.connectStores([C.ZP], e => {
    let {
      channel: t
    } = e;
    return {
      mentions: C.ZP.getMentionCount(t.id)
    }
  })(L.PZ),
  z = c.ZP.connectStores([N.Z, C.ZP], e => {
    let {
      user: t
    } = e, n = N.Z.getDMFromUserId(t.id);
    return {
      mentions: null != n ? C.ZP.getMentionCount(n) : 0
    }
  })(L.n5);

function Y(e, t, n) {
  return (0, i.jsx)(u.ua7, {
    text: n,
    children: e => (0, i.jsx)("span", w(Z({}, e), {
      className: j.autocompleteQuerySymbol,
      children: t
    }))
  }, e)
}
class K extends l.PureComponent {
  componentDidMount() {
    E.Z.disable(), E.Z.enableTemp(_.u)
  }
  componentWillUnmount() {
    E.Z.disableTemp(), E.Z.enable()
  }
  componentDidUpdate(e, t) {
    let {
      mouseFocusDisabled: n,
      query: r
    } = this.state, {
      selectedIndex: i
    } = this.props, {
      current: l
    } = this.scrollerRef;
    null != l && (r !== t.query ? l.scrollTo({
      to: 0
    }) : n && i >= 0 && l.scrollToIndex({
      section: 0,
      row: i,
      padding: 10
    }))
  }
  close() {
    (0, P.Cp)()
  }
  search(e) {
    this.setState({
      query: e
    }), (0, P.yC)(e)
  }
  renderInput() {
    let {
      selectedIndex: e,
      results: t
    } = this.props, {
      query: n
    } = this.state, r = t.length > 0 && "" !== n;
    return (0, i.jsx)(u.tEY, {
      children: (0, i.jsx)("input", {
        className: j.input,
        "aria-label": M.NW.string(M.t.ZvKwYW),
        ref: this.inputRef,
        type: "text",
        role: "combobox",
        "aria-controls": this._listId,
        "aria-expanded": r,
        "aria-activedescendant": r ? this.getRowId(e) : void 0,
        "aria-autocomplete": "list",
        placeholder: M.NW.string(M.t.Vtvewc),
        onChange: this.handleInputChange,
        onKeyDown: this.handleKeyDown,
        value: this.state.query,
        spellCheck: !1,
        autoFocus: !0
      })
    })
  }
  renderSection() {
    return null
  }
  renderResults() {
    let {
      query: e
    } = this.state, {
      results: t
    } = this.props;
    return 0 === t.length && e.length > 0 ? (0, i.jsx)(V, {}) : 0 === t.length ? null : (0, i.jsx)(u._2F, {
      innerId: this._listId,
      innerRole: "listbox",
      "aria-label": M.NW.string(M.t.Wef5Dg),
      ref: this.scrollerRef,
      sectionHeight: 0,
      rowHeight: 34,
      paddingBottom: 10,
      sections: [t.length],
      className: j.scroller,
      renderRow: this.renderRow,
      renderSection: this.renderSection
    })
  }
  focusNode(e) {
    R.S.dispatch(x.CkL.QUICKSWITCHER_RESULT_FOCUS, {
      node: e
    })
  }
  getRowId(e) {
    return "quick-switcher-".concat(this._listId, "-item-").concat(e)
  }
  renderProtip() {
    return (0, i.jsx)(f.Z, {
      className: a()(j.protip, {
        [j.hasContent]: this.state.query.length > 0
      }),
      type: f.Z.Types.INLINE,
      children: M.NW.format(M.t.wukqXV, {
        userSymbolHook: (e, t) => Y(t, p.xQ.USER, M.NW.string(M.t.GQRCGh)),
        textChannelSymbolHook: (e, t) => Y(t, p.xQ.TEXT_CHANNEL, M.NW.string(M.t.wrwhub)),
        voiceChannelSymbolHook: (e, t) => Y(t, p.xQ.VOICE_CHANNEL, M.NW.string(M.t["jz+hJi"])),
        guildSymbolHook: (e, t) => Y(t, p.xQ.GUILD, M.NW.string(M.t.WuwCWl)),
        helpdeskArticle: A.Z.getArticleURL(x.BhN.QUICK_SWITCHER_TUTORIAL)
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
    return t ? null : (0, i.jsx)(D.Z, {
      hasQuery: e.length > 0 && n.length > 0
    })
  }
  render() {
    return (0, i.jsx)(u.Y0X, {
      "aria-label": M.NW.string(M.t.ZvKwYW),
      size: u.CgR.DYNAMIC,
      transitionState: this.props.transitionState,
      className: a()(j.container, s.tq && j.mobileContainer),
      fullscreenOnMobile: !1,
      children: (0, i.jsxs)("div", {
        className: a()(j.quickswitcher, s.tq && j.mobileQuickswitcher),
        onMouseMove: this.handleMouseMove,
        children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
      })
    })
  }
  constructor(...e) {
    super(...e), U(this, "scrollerRef", l.createRef()), U(this, "inputRef", l.createRef()), U(this, "_listId", (0, O.hQ)()), U(this, "state", {
      query: this.props.query,
      mouseFocusDisabled: !0
    }), U(this, "handleInputChange", () => {
      let {
        current: e
      } = this.inputRef;
      null != e && this.search(e.value)
    }), U(this, "handleMouseMove", () => {
      let {
        mouseFocusDisabled: e
      } = this.state;
      !1 !== e && this.setState({
        mouseFocusDisabled: !1
      })
    }), U(this, "focusResult", e => {
      !this.state.mouseFocusDisabled && (0, P.tF)(this.props.results.indexOf(e))
    }), U(this, "selectResult", e => {
      (0, P.Se)(e, this.props.queryMode === p.h8.TEXT_CHANNEL)
    }), U(this, "handleContextMenu", e => {
      let t = this.props.results[this.props.selectedIndex];
      switch (t.type) {
        case p.h8.GUILD:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("7654"), n.e("44156"), n.e("79783"), n.e("6850"), n.e("16114"), n.e("58227"), n.e("54408"), n.e("71567"), n.e("21881"), n.e("69760"), n.e("33213"), n.e("17513")]).then(n.bind(n, 545135));
            return n => (0, i.jsx)(e, w(Z({}, n), {
              guild: t.record,
              onSelect: P.Cp,
              hideSettings: !0
            }))
          });
        case p.h8.TEXT_CHANNEL:
        case p.h8.VOICE_CHANNEL:
          let r = t.record,
            l = b.Z.getGuild(r.getGuildId());
          if (null == l) return;
          switch (r.type) {
            case x.d4z.GUILD_TEXT:
            case x.d4z.GUILD_ANNOUNCEMENT:
            case x.d4z.GUILD_FORUM:
            case x.d4z.GUILD_MEDIA:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(n.bind(n, 373651));
                return t => (0, i.jsx)(e, w(Z({}, t), {
                  channel: r,
                  guild: l,
                  onSelect: P.Cp
                }))
              });
            case x.d4z.GUILD_VOICE:
            case x.d4z.GUILD_STAGE_VOICE:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
                return t => (0, i.jsx)(e, w(Z({}, t), {
                  channel: r,
                  guild: l,
                  onSelect: P.Cp
                }))
              });
            case x.d4z.ANNOUNCEMENT_THREAD:
            case x.d4z.PUBLIC_THREAD:
            case x.d4z.PRIVATE_THREAD:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("40157").then(n.bind(n, 422200));
                return t => (0, i.jsx)(e, w(Z({}, t), {
                  channel: r,
                  onSelect: P.Cp
                }))
              });
            case x.d4z.GUILD_STORE:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("99905").then(n.bind(n, 649400));
                return t => (0, i.jsx)(e, w(Z({}, t), {
                  channel: r,
                  guild: l,
                  onSelect: P.Cp
                }))
              });
            case x.d4z.GUILD_DIRECTORY:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("70623").then(n.bind(n, 99334));
                return t => (0, i.jsx)(e, w(Z({}, t), {
                  channel: r
                }))
              })
          }
          break;
        case p.h8.GROUP_DM:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("79695"), n.e("25421"), n.e("71582")]).then(n.bind(n, 354741));
            return n => (0, i.jsx)(e, w(Z({}, n), {
              channel: t.record,
              selected: T.Z.getChannelId() === t.record.id,
              onSelect: P.Cp
            }))
          });
        case p.h8.USER:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("79695"), n.e("69220"), n.e("31923")]).then(n.bind(n, 881351));
            return n => (0, i.jsx)(e, w(Z({}, n), {
              user: t.record,
              onSelect: P.Cp
            }))
          })
      }
    }), U(this, "handleKeyDown", e => {
      let {
        mouseFocusDisabled: t,
        query: n
      } = this.state, {
        results: r
      } = this.props;
      !1 === t && this.setState({
        mouseFocusDisabled: !0
      });
      let i = e.key.toLowerCase(),
        {
          selectedIndex: l
        } = this.props;
      switch (i) {
        case "escape":
          e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, P.Cp)();
          return;
        case "k":
          (!0 === e.ctrlKey || !0 === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, P.Cp)());
          return;
        case "enter": {
          if (-1 === l) return;
          if (e.preventDefault(), e.altKey) return this.handleContextMenu(e);
          let t = r[l];
          null != t && this.selectResult(t);
          return
        }
        case "arrowup":
          l = (0, p.gJ)(p.a8.UP, l, r);
          break;
        case "arrowdown":
          l = (0, p.gJ)(p.a8.DOWN, l, r);
          break;
        case "n":
          if (!e.ctrlKey) return;
          l = (0, p.gJ)(p.a8.DOWN, l, r);
          break;
        case "p":
          if (!e.ctrlKey) return;
          l = (0, p.gJ)(p.a8.UP, l, r);
          break;
        default:
          return
      }
      e.preventDefault(), (0, P.tF)(l)
    }), U(this, "renderRow", e => {
      let {
        row: t
      } = e, n = this.props.results[t], {
        selectedIndex: r
      } = this.props, {
        showScores: l
      } = m.Z.getCurrentConfig({
        location: "62f4be_1"
      }, {
        autoTrackExposure: !1
      });
      switch (n.type) {
        case p.h8.HEADER:
          return (0, i.jsx)(L.h4, {
            children: n.record.text
          }, "".concat(n.type, "-").concat(n.record.id));
        case p.h8.TEXT_CHANNEL:
          return (0, i.jsx)(G, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: l ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case p.h8.VOICE_CHANNEL:
          return (0, i.jsx)(W, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: l ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case p.h8.GUILD:
          return (0, i.jsx)(B, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            guild: n.record,
            score: l ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case p.h8.USER:
          return (0, i.jsx)(z, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            user: n.record,
            comparator: n.comparator,
            score: l ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case p.h8.GROUP_DM:
          return (0, i.jsx)(H, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: l ? n.score : void 0
          }, "".concat(n.type, "-").concat(n.record.id));
        case p.h8.APPLICATION:
          return (0, i.jsx)(L.Mx, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            application: n.record
          }, "".concat(n.type, "-").concat(n.record.id));
        case p.h8.LINK:
          return (0, i.jsx)(L.rU, {
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            link: n.record,
            score: l ? n.score : void 0,
            id: this.getRowId(t)
          }, "".concat(n.type, "-").concat(n.record.id));
        case p.h8.IN_APP_NAVIGATION:
          return (0, i.jsx)(L.s8, {
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            navigationRecord: n.record,
            score: l ? n.score : void 0,
            id: this.getRowId(t),
            children: n.record.type === h.Ky.SETTINGS && (0, i.jsx)("div", {
              className: j.miscContainer,
              children: M.NW.string(M.t["3D5yo6"])
            })
          }, "".concat(n.type, "-").concat(n.record.id));
        default:
          return null
      }
    })
  }
}

function X(e) {
  let t = (0, c.cj)([v.Z], () => v.Z.getProps()),
    n = (0, g.Pt)(),
    r = k.Z.useExperiment({
      location: "QuickSwitcher"
    }).enabled,
    o = l.useMemo(() => r ? Object.values(n).filter(e => null != e.url).filter(e => null == e.predicate || e.predicate()) : [], [n, r]);
  return l.useLayoutEffect(() => {
    if (!r) return;
    let e = o.map(e => {
      var t;
      return {
        title: "string" == typeof e.label ? e.label : "",
        searchableTitles: null !== (t = e.searchableTitles) && void 0 !== t ? t : [],
        path: e.url
      }
    }).filter(e => "" !== e.title && null != e.path);
    e.unshift({
      title: M.NW.string(M.t["3D5yo6"]),
      searchableTitles: [M.NW.string(M.t["3D5yo6"])],
      path: x.Z5c.SETTINGS("account")
    }), (0, y.gF)(e)
  }, [o, r]), (0, i.jsx)(K, Z({}, t, e))
}
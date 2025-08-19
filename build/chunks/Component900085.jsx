/** Chunk was on 49882 **/
/** chunk id: 900085, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
}), require("./415506.js"), require("./388685.js"), require("./35282.js"), require("./290780.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk134616 = require("./134616.js"),
  Chunk714338 = require("./714338.js"),
  Chunk212819 = require("./212819.js"),
  Chunk815372 = require("./815372.js"),
  Chunk14429 = require("./14429.js"),
  Chunk576855 = require("./576855.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk991346 = require("./991346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk888369 = require("./888369.js"),
  Chunk430824 = require("./430824.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk938475 = require("./938475.js"),
  Chunk483360 = require("./483360.js"),
  Chunk585483 = require("./585483.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51596 = require("./51596.js"),
  Chunk823385 = require("./823385.js"),
  Chunk415795 = require("./415795.jsx"),
  Chunk670512 = require("./670512.jsx"),
  Chunk558631 = require("./558631.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk712198 = require("./712198.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
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
let G = () => (0, Chunk951288.jsxs)("div", {
  className: Chunk712198.emptyState,
  children: [(0, Chunk951288.jsx)("div", {
    className: Chunk712198.emptyStateNote,
    children: Chunk388032.intl.string(Chunk388032.t.bpbATE)
  }), (0, Chunk951288.jsx)("div", {
    className: Chunk712198.emptyStateCTA,
    children: (0, Chunk951288.jsx)(Chunk481060.eee, {
      href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUICK_SWITCHER_TUTORIAL),
      children: Chunk388032.intl.string(Chunk388032.t["4iPfEB"])
    })
  })]
});
class B extends(r = Chunk647438.Component) {
  render() {
    let e = Chunk430824.Z.getGuild(this.props.channel.guild_id);
    return (0, Chunk951288.jsx)(Chunk415795.$W, U(k({}, this.props), {
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk712198.miscContainer,
        children: null != module ? module.name : null
      })
    }))
  }
}
M(B, "defaultProps", {
  unread: false
});
let V = Chunk442837.ZP.connectStores([Chunk306680.ZP, Chunk592125.Z], e => {
    let {
      channel: t
    } = e;
    return {
      unread: C.ZP.hasUnread(t.id),
      mentions: C.ZP.getMentionCount(t.id),
      isMentionLowImportance: C.ZP.getIsMentionLowImportance(t.id),
      category: y.Z.getChannel(t.parent_id)
    }
  })(B),
  H = Chunk442837.ZP.connectStores([Chunk938475.ZP], e => {
    let {
      channel: t
    } = e;
    if (null == t.guild_id) throw Error("ConnectedVoiceChannel - somehow we got a voice channel with no guild_id...");
    return {
      voiceStates: x.ZP.getVoiceStates(t.guild_id)[t.id]
    }
  })(B),
  F = Chunk442837.ZP.connectStores([Chunk888369.default], e => {
    let {
      guild: t
    } = e;
    return {
      unread: v.default.hasUnread(t.id)
    }
  })(Chunk415795.ic),
  z = Chunk442837.ZP.connectStores([Chunk306680.ZP], e => {
    let {
      channel: t
    } = e;
    return {
      mentions: C.ZP.getMentionCount(t.id)
    }
  })(Chunk415795.PZ),
  W = Chunk442837.ZP.connectStores([Chunk592125.Z, Chunk306680.ZP], e => {
    let {
      user: t
    } = e, n = y.Z.getDMFromUserId(t.id);
    return {
      mentions: null != n ? C.ZP.getMentionCount(n) : 0
    }
  })(Chunk415795.n5);

function K(e, t, n) {
  return (0, i.jsx)(u.ua7, {
    text: n,
    children: e => (0, i.jsx)("span", U(k({}, e), {
      className: L.autocompleteQuerySymbol,
      children: t
    }))
  }, e)
}
class Y extends Chunk647438.PureComponent {
  componentDidMount() {
    Chunk714338.Z.disable(), Chunk714338.Z.enableTemp(Chunk134616.u)
  }
  componentWillUnmount() {
    Chunk714338.Z.disableTemp(), Chunk714338.Z.enable()
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
    (0, Chunk51596.Cp)()
  }
  search(e) {
    this.setState({
      query: e
    }), (0, N.yC)(e)
  }
  renderInput() {
    let {
      selectedIndex: e,
      results: t
    } = this.props, {
      query: n
    } = this.state, r = exports.length > 0 && "" !== require;
    return (0, Chunk951288.jsx)(Chunk481060.tEY, {
      children: (0, Chunk951288.jsx)("input", {
        className: Chunk712198.input,
        "aria-label": Chunk388032.intl.string(Chunk388032.t.ZvKwYW),
        ref: this.inputRef,
        type: "text",
        role: "combobox",
        "aria-controls": this._listId,
        "aria-expanded": r,
        "aria-activedescendant": r ? this.getRowId(module) : true,
        "aria-autocomplete": "list",
        placeholder: Chunk388032.intl.string(Chunk388032.t.Vtvewc),
        onChange: this.handleInputChange,
        onKeyDown: this.handleKeyDown,
        value: this.state.query,
        spellCheck: false,
        autoFocus: true
      })
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
      return 0 === exports.length && module.length > 0 ? (0, Chunk951288.jsx)(G, {}) : 0 === exports.length ? null : (0, Chunk951288.jsx)(Chunk481060._2F, {
        innerId: this._listId,
        innerRole: "listbox",
        "aria-label": Chunk388032.intl.string(Chunk388032.t.Wef5Dg),
        ref: this.scrollerRef,
        sectionHeight: 0,
        rowHeight: 34,
        paddingBottom: 10,
        sections: [exports.length],
        className: Chunk712198.scroller,
        renderRow: this.renderRow,
        renderSection: this.renderSection
      })
    };
    return (0, Chunk951288.jsx)("div", {
      className: Chunk712198.resultsArea,
      children: module()
    })
  }
  focusNode(e) {
    I.S.dispatch(R.CkL.QUICKSWITCHER_RESULT_FOCUS, {
      node: e
    })
  }
  getRowId(e) {
    return "quick-switcher-".concat(this._listId, "-item-").concat(e)
  }
  renderProtip() {
    return (0, Chunk951288.jsx)(Chunk576855.Z, {
      className: a()(Chunk712198.protip, {
        [Chunk712198.hasContent]: this.state.query.length > 0
      }),
      type: Chunk576855.Z.Types.INLINE,
      children: Chunk388032.intl.format(Chunk388032.t.wukqXV, {
        userSymbolHook: (e, t) => K(t, h.xQ.USER, D.intl.string(D.t.GQRCGh)),
        textChannelSymbolHook: (e, t) => K(t, h.xQ.TEXT_CHANNEL, D.intl.string(D.t.wrwhub)),
        voiceChannelSymbolHook: (e, t) => K(t, h.xQ.VOICE_CHANNEL, D.intl.string(D.t["jz+hJi"])),
        guildSymbolHook: (e, t) => K(t, h.xQ.GUILD, D.intl.string(D.t.WuwCWl)),
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.QUICK_SWITCHER_TUTORIAL)
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
    return exports ? null : (0, Chunk951288.jsx)(Chunk670512.Z, {
      hasQuery: module.length > 0 && require.length > 0
    })
  }
  render() {
    return (0, Chunk951288.jsx)(Chunk257465.I, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t.ZvKwYW),
      size: "lg",
      transitionState: this.props.transitionState,
      onClose: this.props.onClose,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk712198.quickswitcher,
        onMouseMove: this.handleMouseMove,
        children: [this.renderInput(), this.renderResults(), this.renderProtip(), this.renderTutorial()]
      })
    })
  }
  constructor(...e) {
    super(...e), M(this, "scrollerRef", l.createRef()), M(this, "inputRef", l.createRef()), M(this, "_listId", (0, _.hQ)()), M(this, "state", {
      query: this.props.query,
      mouseFocusDisabled: true
    }), M(this, "handleInputChange", () => {
      let {
        current: e
      } = this.inputRef;
      null != e && this.search(e.value)
    }), M(this, "handleMouseMove", () => {
      let {
        mouseFocusDisabled: e
      } = this.state;
      false !== e && this.setState({
        mouseFocusDisabled: false
      })
    }), M(this, "focusResult", e => {
      this.state.mouseFocusDisabled || (0, N.tF)(this.props.results.indexOf(e))
    }), M(this, "selectResult", e => {
      (0, N.Se)(e, this.props.queryMode === h.h8.TEXT_CHANNEL)
    }), M(this, "handleContextMenu", e => {
      let t = this.props.results[this.props.selectedIndex];
      switch (t.type) {
        case h.h8.GUILD:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("1806"), n.e("36599"), n.e("60962"), n.e("58175"), n.e("7654"), n.e("44156"), n.e("47463"), n.e("6850"), n.e("58227"), n.e("54408"), n.e("42926"), n.e("20087"), n.e("6049"), n.e("56534"), n.e("87154"), n.e("33213"), n.e("35237")]).then(n.bind(n, 545135));
            return n => (0, i.jsx)(e, U(k({}, n), {
              guild: t.record,
              onSelect: N.Cp,
              hideSettings: true
            }))
          });
        case h.h8.TEXT_CHANNEL:
        case h.h8.VOICE_CHANNEL:
          let r = t.record,
            l = j.Z.getGuild(r.getGuildId());
          if (null == l) return;
          switch (r.type) {
            case R.d4z.GUILD_TEXT:
            case R.d4z.GUILD_ANNOUNCEMENT:
            case R.d4z.GUILD_FORUM:
            case R.d4z.GUILD_MEDIA:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("79695"), n.e("18320"), n.e("44011")]).then(n.bind(n, 373651));
                return t => (0, i.jsx)(e, U(k({}, t), {
                  channel: r,
                  guild: l,
                  onSelect: N.Cp
                }))
              });
            case R.d4z.GUILD_VOICE:
            case R.d4z.GUILD_STAGE_VOICE:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await Promise.all([n.e("79695"), n.e("18320"), n.e("83331"), n.e("81070")]).then(n.bind(n, 213202));
                return t => (0, i.jsx)(e, U(k({}, t), {
                  channel: r,
                  guild: l,
                  onSelect: N.Cp
                }))
              });
            case R.d4z.ANNOUNCEMENT_THREAD:
            case R.d4z.PUBLIC_THREAD:
            case R.d4z.PRIVATE_THREAD:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("40157").then(n.bind(n, 422200));
                return t => (0, i.jsx)(e, U(k({}, t), {
                  channel: r,
                  onSelect: N.Cp
                }))
              });
            case R.d4z.GUILD_STORE:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("99905").then(n.bind(n, 649400));
                return t => (0, i.jsx)(e, U(k({}, t), {
                  channel: r,
                  guild: l,
                  onSelect: N.Cp
                }))
              });
            case R.d4z.GUILD_DIRECTORY:
              return (0, d.jW)(e, async () => {
                let {
                  default: e
                } = await n.e("70623").then(n.bind(n, 99334));
                return t => (0, i.jsx)(e, U(k({}, t), {
                  channel: r
                }))
              })
          }
          break;
        case h.h8.GROUP_DM:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("79695"), n.e("57789"), n.e("81239")]).then(n.bind(n, 354741));
            return n => (0, i.jsx)(e, U(k({}, n), {
              channel: t.record,
              selected: E.Z.getChannelId() === t.record.id,
              onSelect: N.Cp
            }))
          });
        case h.h8.USER:
          return (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([n.e("79695"), n.e("69220"), n.e("74820")]).then(n.bind(n, 881351));
            return n => (0, i.jsx)(e, U(k({}, n), {
              user: t.record,
              onSelect: N.Cp
            }))
          })
      }
    }), M(this, "handleKeyDown", e => {
      let {
        mouseFocusDisabled: t,
        query: n
      } = this.state, {
        results: r
      } = this.props;
      false === t && this.setState({
        mouseFocusDisabled: true
      });
      let i = e.key.toLowerCase(),
        {
          selectedIndex: l
        } = this.props;
      switch (i) {
        case "escape":
          e.preventDefault(), e.stopPropagation(), n.length > 0 ? this.search("") : (0, N.Cp)();
          return;
        case "k":
          (true === e.ctrlKey || true === e.metaKey) && (e.preventDefault(), e.stopPropagation(), (0, N.Cp)());
          return;
        case "enter": {
          if (false === l) return;
          if (e.preventDefault(), e.altKey) return this.handleContextMenu(e);
          let t = r[l];
          null != t && this.selectResult(t);
          return
        }
        case "arrowup":
          l = (0, h.gJ)(h.a8.UP, l, r);
          break;
        case "arrowdown":
          l = (0, h.gJ)(h.a8.DOWN, l, r);
          break;
        case "n":
          if (!e.ctrlKey) return;
          l = (0, h.gJ)(h.a8.DOWN, l, r);
          break;
        case "p":
          if (!e.ctrlKey) return;
          l = (0, h.gJ)(h.a8.UP, l, r);
          break;
        default:
          return
      }
      e.preventDefault(), (0, N.tF)(l)
    }), M(this, "renderRow", e => {
      let {
        row: t
      } = e, n = this.props.results[t], {
        selectedIndex: r
      } = this.props, {
        showScores: l
      } = m.Z.getCurrentConfig({
        location: "62f4be_1"
      }, {
        autoTrackExposure: false
      });
      switch (n.type) {
        case h.h8.HEADER:
          return (0, i.jsx)(Z.h4, {
            children: n.record.text
          }, "".concat(n.type, "-").concat(n.record.id));
        case h.h8.TEXT_CHANNEL:
          return (0, i.jsx)(V, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: l ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case h.h8.VOICE_CHANNEL:
          return (0, i.jsx)(H, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: l ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case h.h8.GUILD:
          return (0, i.jsx)(F, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            guild: n.record,
            score: l ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case h.h8.USER:
          return (0, i.jsx)(W, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            user: n.record,
            comparator: n.comparator,
            score: l ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case h.h8.GROUP_DM:
          return (0, i.jsx)(z, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            channel: n.record,
            score: l ? n.score : true
          }, "".concat(n.type, "-").concat(n.record.id));
        case h.h8.APPLICATION:
          return (0, i.jsx)(Z.Mx, {
            id: this.getRowId(t),
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            application: n.record
          }, "".concat(n.type, "-").concat(n.record.id));
        case h.h8.LINK:
          return (0, i.jsx)(Z.rU, {
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            link: n.record,
            score: l ? n.score : true,
            id: this.getRowId(t)
          }, "".concat(n.type, "-").concat(n.record.id));
        case h.h8.IN_APP_NAVIGATION:
          return (0, i.jsx)(Z.s8, {
            focused: r >= 0 && t === r,
            onClick: () => this.selectResult(n),
            onMouseEnter: () => this.focusResult(n),
            onFocus: this.focusNode,
            onContextMenu: this.handleContextMenu,
            navigationRecord: n.record,
            score: l ? n.score : true,
            id: this.getRowId(t),
            children: n.record.type === g.Ky.SETTINGS && (0, i.jsx)("div", {
              className: L.miscContainer,
              children: D.intl.string(D.t["3D5yo6"])
            })
          }, "".concat(n.type, "-").concat(n.record.id));
        default:
          return null
      }
    })
  }
}

function q(e) {
  let t = (0, s.cj)([w.Z], () => w.Z.getProps()),
    n = (0, O.Pt)(),
    r = A.Z.useExperiment({
      location: "QuickSwitcher"
    }).enabled,
    o = l.useMemo(() => r ? Object.values(n).filter(e => null != e.url).filter(e => null == e.predicate || e.predicate()) : [], [n, r]);
  return l.useLayoutEffect(() => {
    if (!r) return;
    let e = o.map(e => {
      var t;
      return {
        title: "string" == typeof e.label ? e.label : "",
        searchableTitles: null != (t = e.searchableTitles) ? t : [],
        path: e.url
      }
    }).filter(e => "" !== e.title && null != e.path);
    e.unshift({
      title: D.intl.string(D.t["3D5yo6"]),
      searchableTitles: [D.intl.string(D.t["3D5yo6"])],
      path: R.Z5c.SETTINGS("account")
    }), (0, S.gF)(e)
  }, [o, r]), (0, i.jsx)(Y, k({}, t, e))
}
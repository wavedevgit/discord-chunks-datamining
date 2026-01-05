/** Chunk was on web.js **/
/** chunk id: 329790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => q,
  uh: () => H
}), require("./35282.js"), require("./704826.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk923010 = require("./923010.js"),
  Chunk299608 = require("./299608.js"),
  c = require.n(Chunk299608),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk349033 = require("./349033.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313201 = require("./313201.js"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk72006 = require("./72006.js"),
  Chunk181389 = require("./181389.js"),
  Chunk748610 = require("./748610.js"),
  Chunk171900 = require("./171900.js"),
  Chunk607802 = require("./607802.js"),
  Chunk612806 = require("./612806.js"),
  Chunk28964 = require("./28964.js"),
  Chunk423880 = require("./423880.js"),
  Chunk532428 = require("./532428.js"),
  Chunk991896 = require("./991896.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk522204 = require("./522204.jsx"),
  Chunk763439 = require("./763439.jsx"),
  Chunk723642 = require("./723642.js"),
  Chunk125085 = require("./125085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk435288 = require("./435288.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./948648.js");
let H = 512,
  Y = (0, Chunk313201.hQ)(),
  W = c()(Chunk611004.Z.fetchMessages, 500);
class K extends Chunk473749.PureComponent {
  componentDidMount() {
    var e, t;
    Chunk585483.S.subscribe(Chunk981631.CkL.PERFORM_SEARCH, this.search), Chunk585483.S.subscribe(Chunk981631.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), Chunk585483.S.subscribe(Chunk981631.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = exports.editor) || module.setAttribute("aria-haspopup", "listbox")
  }
  componentDidUpdate(e) {
    let {
      editorState: t,
      searchContext: n
    } = this.props;
    if (n !== e.searchContext && I.Z.initializeAutocomplete(n), t !== e.editorState) {
      let e = v.Sq(t),
        r = (0, C.kG)(v.Sq(t)),
        i = S.g9(r, t);
      I.Z.updateAutocompleteQuery({
        searchContext: n,
        tokens: r,
        cursorScope: i,
        queryString: e
      }), null != this._editorRef && v.iE(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.PERFORM_SEARCH, this.search), Chunk585483.S.unsubscribe(Chunk981631.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), Chunk585483.S.unsubscribe(Chunk981631.CkL.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = (0, C.kG)(v.Sq(e)).filter(e => e.type !== f.ZP.NON_TOKEN_TYPE);
    return v.lv(t, e, R.ZP)
  }
  clearSearch() {
    let {
      searchContext: e
    } = this.props;
    Chunk611004.Z.cleanUpSearchState(module)
  }
  handlePastedFiles() {
    return "handled"
  }
  handleDroppedFiles() {
    return "handled"
  }
  handleDrop() {
    return "handled"
  }
  renderInput(e) {
    let {
      editorState: t,
      placeholder: n
    } = this.props;
    return (0, r.jsx)(s.Editor, {
      autoCorrect: "off",
      ref: this.setEditorRef,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      handleReturn: this.handleReturn,
      handleBeforeInput: this.handleBeforeInput,
      handleKeyCommand: this.handleKeyCommand,
      handlePastedText: this.handlePastedText,
      handlePastedFiles: this.handlePastedFiles,
      handleDroppedFiles: this.handleDroppedFiles,
      handleDrop: this.handleDrop,
      keyBindingFn: this.handleKeyBind,
      placeholder: null != n ? n : F.intl.string(F.t["5h0QOP"]),
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? Y : true,
      ariaLabel: F.intl.string(F.t["5h0QOP"]),
      ariaAutoComplete: "list"
    })
  }
  render() {
    let {
      searchContext: e,
      editorState: t,
      hasResults: n,
      className: i
    } = this.props, {
      focused: a
    } = this.state, s = Chunk72006.Sq(exports).length > 0;
    return (0, Chunk54381.jsx)(Chunk481060.yRy, {
      targetElementRef: this._containerRef,
      renderPopout: this.renderPopout,
      position: "bottom",
      animation: Chunk481060.yRy.Animation.NONE,
      shouldShow: Chunk120356,
      autoInvert: false,
      children: (t, l) => {
        var c;
        let {
          isShown: u
        } = l;
        return (0, r.jsx)("div", {
          className: i,
          ref: this._containerRef,
          children: (0, r.jsx)("div", {
            className: o()(B.search, {
              [B.open]: s || a,
              [B.focused]: a
            }),
            children: (0, r.jsx)(d.tEY, {
              focusTarget: {
                current: null == (c = this._editorRef) ? true : c.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, r.jsxs)("div", {
                className: B.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(u), (0, r.jsx)(d.BK9, {
                  onClear: this.handleClearSearch,
                  hasContent: s || n,
                  className: B.icon,
                  isLoading: false
                })]
              }, (0, C.Tm)(e))
            })
          })
        })
      }
    })
  }
  constructor(e) {
    super(e), V(this, "state", {
      focused: false,
      selectedIndex: true
    }), V(this, "_editorRef", true), V(this, "_containerRef", i.createRef()), V(this, "_searchBarRef", i.createRef()), V(this, "_searchPopoutRef", i.createRef()), V(this, "_searchFiltersRedesignPopoutRef", i.createRef()), V(this, "handleSetSearchQuery", e => {
      let {
        query: t,
        anchor: n,
        focus: r,
        performSearch: i,
        replace: a,
        searchQuerySource: o
      } = e, {
        editorState: s
      } = this.props, l = v.Sq(s);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== l.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), a ? (s = v.c2(t, s), n = 0) : s = v.x0(t, s, n, r), s = v.Hl(s, H), s = this.tokenize(s);
      let c = Number(n) + t.length;
      s = v.iK(c, s), this.setEditorState(s), i && this.search({
        queryString: v.Sq(s),
        searchQuerySource: o
      })
    }), V(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute("aria-activedescendant", null != e ? "".concat(Y, "-").concat(e) : true), this.setState({
        selectedIndex: e
      })
    }), V(this, "renderPopout", () => {
      let {
        isSearchFiltersRedesignEnabled: e
      } = this.props;
      return e ? (0, r.jsx)(M.Z, {
        ref: this._searchFiltersRedesignPopoutRef,
        searchContext: this.props.searchContext,
        navId: Y,
        onSelectedIndexChanged: this.handleSelectedIndexChanged
      }) : (0, r.jsx)(k.ZP, {
        ref: this._searchPopoutRef,
        searchContext: this.props.searchContext,
        navId: Y,
        onSelectedIndexChanged: this.handleSelectedIndexChanged
      })
    }), V(this, "search", e => {
      let {
        isSearching: t
      } = this.props, {
        queryString: n,
        searchEverywhere: r,
        searchQuerySource: i
      } = null != e ? e : {};
      if (null == n || "" === n) {
        let {
          editorState: e
        } = this.props;
        n = v.Sq(e)
      }
      if (!t) {
        let e = (0, C.kG)(n),
          t = (0, C.$G)(e);
        for (let t = 0; t < e.length; t++)(0, C.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(t).length) returnfalse;
        this.props.onSearch({
          queryString: n,
          query: t,
          searchEverywhere: null != r && r,
          searchQuerySource: i
        }), d.uvj.announce(F.intl.string(F.t.pKCxWP)), this.handleBlur()
      }
      returntrue
    }), V(this, "handleClearSearch", e => {
      let {
        editorState: t,
        searchContext: n
      } = this.props, {
        focused: r
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === v.Sq(t)) return void this.focusEditor();
      t = v.Hl(t, 0), this.setEditorState(t), (0, j.cy)({
        searchContext: n
      }), r || Promise.resolve().then(() => this.blurEditor())
    }), V(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) return void this.focusEditor();
      let n = y.Z.getChannelId(),
        r = E.Z.getChannel(n),
        i = A.Z.getCurrentConfig({
          location: "handleFocusSearch"
        }).enabled;
      if ((null == r ? true : r.isThread()) && !i && (r = E.Z.getChannel(null == r ? true : r.parent_id)), null == r) return void this.focusEditor();
      let {
        searchContext: a
      } = this.props;
      if (r.isPrivate() && a.type !== Z.aib.DMS) return void this.focusEditor();
      let o = (0, C.X3)(r);
      if (null == o) return void this.focusEditor();
      (0, j.PJ)({
        searchContext: a
      }), Promise.resolve().then(() => {
        let {
          _editorRef: e
        } = this;
        null == e || e.focus(), this.handleSetSearchQuery({
          query: R.ZP[Z.dCx.FILTER_IN].key + "".concat(o, " "),
          replace: true,
          searchQuerySource: U.w7.SEARCH_TEXT_INPUT
        })
      })
    }), V(this, "focusEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }), V(this, "blurEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.blur())
    }), V(this, "setEditorRef", e => {
      this._editorRef = e
    }), V(this, "onFocus", () => {
      let {
        searchContext: e
      } = this.props;
      this.setState({
        focused: true
      }), P.Z.setFocused(e, true)
    }), V(this, "handleBlur", () => {
      let {
        searchContext: e
      } = this.props;
      this.setState({
        focused: false
      }, () => {
        P.Z.setFocused(e, false), v.xb(this.props.editorState) && this.clearSearch()
      })
    }), V(this, "onBlur", e => {
      this.handleBlur()
    }), V(this, "handleOption", () => {
      let {
        current: e
      } = this._searchPopoutRef;
      return null != e && (false === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({
        searchAutocompleteSelectAction: U.ZW.KEY_PRESS
      }) : e.selectOption({
        searchAutocompleteSelectAction: U.ZW.KEY_PRESS
      }))
    }), V(this, "handleRedesignOption", () => {
      let {
        current: e
      } = this._searchFiltersRedesignPopoutRef;
      return null != e && e.selectOption({
        searchAutocompleteSelectAction: U.ZW.KEY_PRESS
      })
    }), V(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      return e.preventDefault(), (this.props.isSearchFiltersRedesignEnabled ? this.handleRedesignOption() : this.handleOption()) || ((0, C.X$)() && t ? this.search({
        searchEverywhere: true,
        searchQuerySource: U.w7.SEARCH_TEXT_INPUT
      }) : this.search({
        searchQuerySource: U.w7.SEARCH_TEXT_INPUT
      })), "handled"
    }), V(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return v.Sq(t).length >= H || (t = v.x0(e, t), t = v.Hl(t, H), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
        focused: true
      })), "handled"
    }), V(this, "handleKeyCommand", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      switch (e) {
        case "backspace":
        case "backspace-word":
        case "backspace-to-start-of-line":
        case "delete":
        case "delete-word":
          return t = v.yd(e, t), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
            focused: true
          }), "handled";
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = v.Zn(e, t), t = this.tokenize(t), this.setEditorState(t), "handled";
        case "split-block":
        case "underline":
        case "bold":
        case "italic":
          return "handled"
      }
      return "not-handled"
    }), V(this, "handlePastedText", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = v.x0(e, t), t = v.Hl(t, H), t = this.tokenize(t), n || this.setState({
        focused: true
      }), this.setEditorState(t), "handled"
    }), V(this, "setEditorState", e => {
      let {
        searchContext: t
      } = this.props;
      w.Z.updateSearchEditorState(t, e)
    }), V(this, "getPopoutRef", () => {
      let {
        current: e
      } = this._searchFiltersRedesignPopoutRef, {
        current: t
      } = this._searchPopoutRef;
      return this.props.isSearchFiltersRedesignEnabled ? e : t
    }), V(this, "handleKeyBind", e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: r,
        ctrlKey: i
      } = e, {
        editorState: a,
        searchContext: o,
        keyboardModeEnabled: s
      } = this.props;
      if (e.stopPropagation(), (n || i) && "a" === t.toLowerCase()) {
        e.preventDefault();
        let t = v.m1(a);
        return this.setEditorState(t), this.setState({
          focused: true
        }), true
      }
      if ("Escape" === t) {
        if (e.preventDefault(), v.xb(a)) this.blurEditor();
        else {
          let e = v.FZ(a);
          w.Z.updateSearchEditorState(o, e), this.setState({
            focused: true
          })
        }
        returntrue
      }
      if ("ArrowUp" === t) {
        e.preventDefault();
        let t = this.getPopoutRef();
        return null != t && t.focusPreviousOption(), true
      }
      if ("ArrowDown" === t) {
        e.preventDefault();
        let t = this.getPopoutRef();
        return null != t && t.focusNextOption(), true
      }
      if ("Tab" === t) {
        if (s) return;
        return (0, p.Qj)(), true
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), a = r ? v.R8(a) : v.eE(a), this.setEditorState(a), true;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), a = r ? v.Wg(a) : v.NJ(a), this.setEditorState(a), true;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = v.FZ(a);
        return this.setEditorState(e), true
      }
      return v.q0(e)
    }), (0, C.WU)()
  }
}

function z(e) {
  let {
    searchContext: t,
    className: n
  } = e, a = (0, C.Tm)(t), o = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled), s = (0, u.e7)([L.Z], () => L.Z.getEditorState(a));
  i.useEffect(() => (h.Z.setSelectedSearchContext(a), () => {
    h.Z.setSelectedSearchContext(null)
  }), [a]);
  let l = (0, u.e7)([L.Z], () => L.Z.getIsSearchTokensInitialized()),
    c = i.useRef(l);
  i.useEffect(() => {
    l && c.current !== l && (c.current = l, D.Z.ensureSearchInputDecorators(t))
  }, [l, t]);
  let f = i.useMemo(() => null != s ? s : v.nR(S.Jl(R.ZP)), [s]),
    {
      isSearching: p,
      hasResults: m
    } = (0, u.cj)([T.Z], () => {
      let e = T.Z.getTotalCount(a);
      return {
        hasResults: null != e && e > 0,
        isSearching: T.Z.getIsFetching(a)
      }
    }),
    O = (0, u.e7)([g.ZP, y.Z, E.Z], () => {
      let e = y.Z.getCurrentlySelectedChannelId(),
        t = E.Z.getChannel(e);
      return g.ZP.getSection(e, null == t ? true : t.isDM()) === Z.ULH.SEARCH
    });
  i.useEffect(() => {
    P.Z.setSidebarOpen(t, O)
  }, [t, O]);
  let I = (0, d.VXO)(G.L);
  i.useEffect(() => {
    P.Z.setFiltersModalOpen(t, I)
  }, [t, I]);
  let A = i.useCallback(e => {
      let {
        queryString: n,
        query: r,
        searchEverywhere: i,
        searchQuerySource: a
      } = e;
      P.Z.refreshQueryId(t), (0, j.tI)({
        searchContext: t,
        query: r,
        queryString: n,
        searchQuerySource: a
      }), w.Z.updateSearchMode(t, Z.QIO.NEWEST), W({
        searchContext: t,
        searchQueryString: n,
        searchEverywhere: i,
        offset: 0
      })
    }, [t]),
    x = (0, u.e7)([b.Z, E.Z], () => {
      let e = (0, C.b7)(t) ? t.guildId : null;
      if (null != e) {
        let t = b.Z.getGuild(e);
        return null == t ? null : t.name
      }
      let n = (0, C.AH)(t);
      if (null != n) {
        let e = E.Z.getChannel(n);
        return null == e ? null : (0, C.nl)(e)
      }
      return null
    }),
    M = (0, N.kU)({
      location: "Search"
    }),
    k = i.useMemo(() => {
      switch (t.type) {
        case Z.aib.DMS:
          return F.intl.string(F.t.m7OrlR);
        case Z.aib.FAVORITES:
          return F.intl.string(F.t["5h0QOP"]);
        default:
          return F.intl.formatToPlainString(F.t.LDZtFO, {
            name: x
          })
      }
    }, [t.type, x]);
  return (0, r.jsx)(K, {
    className: n,
    searchContext: t,
    isSearching: p,
    editorState: f,
    hasResults: m,
    keyboardModeEnabled: o,
    onSearch: A,
    placeholder: k,
    isSearchFiltersRedesignEnabled: M
  })
}

function q(e) {
  let {
    className: t,
    guildId: n,
    channelId: i
  } = e, a = (0, x.H)({
    guildId: n,
    channelId: i
  });
  return null == a ? null : (0, r.jsx)(z, {
    className: t,
    searchContext: a
  })
}
/** Chunk was on web.js **/
/** chunk id: 208450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => Q,
  uh: () => Y
}), require("./35282.js"), require("./704826.js"), require("./388685.js");
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
  Chunk945577 = require("./945577.js"),
  Chunk28964 = require("./28964.js"),
  Chunk971128 = require("./971128.js"),
  Chunk532428 = require("./532428.js"),
  Chunk583642 = require("./583642.jsx"),
  Chunk991896 = require("./991896.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk778177 = require("./778177.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk723642 = require("./723642.js"),
  Chunk125085 = require("./125085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk557818 = require("./557818.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./478691.js");
let Y = 512,
  W = (0, Chunk313201.hQ)(),
  K = c()(Chunk611004.Z.fetchMessages, 500);
class z extends Chunk473749.PureComponent {
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
    return v.lv(t, e, D.ZP)
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
      ariaControls: e ? W : true,
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
            className: o()(V.search, {
              [V.open]: s || a,
              [V.focused]: a
            }),
            children: (0, r.jsx)(d.tEY, {
              focusTarget: {
                current: null == (c = this._editorRef) ? true : c.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, r.jsxs)("div", {
                className: V.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(u), (0, r.jsx)(d.BK9, {
                  onClear: this.handleClearSearch,
                  hasContent: s || n,
                  className: V.icon,
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
    super(e), H(this, "state", {
      focused: false,
      selectedIndex: true
    }), H(this, "_editorRef", true), H(this, "_containerRef", i.createRef()), H(this, "_searchBarRef", i.createRef()), H(this, "_searchPopoutRef", i.createRef()), H(this, "_searchFiltersRedesignPopoutRef", i.createRef()), H(this, "handleSetSearchQuery", e => {
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
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== l.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), a ? (s = v.c2(t, s), n = 0) : s = v.x0(t, s, n, r), s = v.Hl(s, Y), s = this.tokenize(s);
      let c = Number(n) + t.length;
      s = v.iK(c, s), this.setEditorState(s), i && this.search({
        queryString: v.Sq(s),
        searchQuerySource: o
      })
    }), H(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute("aria-activedescendant", null != e ? "".concat(W, "-").concat(e) : true), this.setState({
        selectedIndex: e
      })
    }), H(this, "renderPopout", () => {
      let {
        isSearchFiltersRedesignEnabled: e
      } = this.props;
      return e ? (0, r.jsx)(w.Z, {
        ref: this._searchFiltersRedesignPopoutRef,
        searchContext: this.props.searchContext,
        navId: W,
        onSelectedIndexChanged: this.handleSelectedIndexChanged
      }) : (0, r.jsx)(j.ZP, {
        ref: this._searchPopoutRef,
        searchContext: this.props.searchContext,
        navId: W,
        onSelectedIndexChanged: this.handleSelectedIndexChanged
      })
    }), H(this, "search", e => {
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
        }), d.uvj.announce(F.intl.string(F.t.pKCxWP)), this.handleBlur(true)
      }
      returntrue
    }), H(this, "handleClearSearch", e => {
      let {
        editorState: t,
        searchContext: n
      } = this.props, {
        focused: r
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === v.Sq(t)) return void this.focusEditor();
      t = v.Hl(t, 0), this.setEditorState(t), (0, U.cy)({
        searchContext: n
      }), r || Promise.resolve().then(() => this.blurEditor())
    }), H(this, "handleFocusSearch", e => {
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
      if (r.isPrivate() && a.type !== B.aib.DMS) return void this.focusEditor();
      let o = (0, C.X3)(r);
      if (null == o) return void this.focusEditor();
      (0, U.PJ)({
        searchContext: a
      }), Promise.resolve().then(() => {
        let {
          _editorRef: e
        } = this;
        null == e || e.focus(), this.handleSetSearchQuery({
          query: D.ZP[B.dCx.FILTER_IN].key + "".concat(o, " "),
          replace: true,
          searchQuerySource: G.w7.SEARCH_TEXT_INPUT
        })
      })
    }), H(this, "focusEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }), H(this, "blurEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.blur())
    }), H(this, "setEditorRef", e => {
      this._editorRef = e
    }), H(this, "onFocus", () => {
      let {
        searchContext: e,
        isSearchSidebarOrModalOpen: t
      } = this.props;
      this.setState({
        focused: true
      }), t || (0, U.I1)({
        searchContext: e
      })
    }), H(this, "handleBlur", e => {
      let {
        searchContext: t,
        isSearchSidebarOrModalOpen: n
      } = this.props;
      this.setState({
        focused: false
      }, () => {
        n || e || (0, U.IZ)({
          searchContext: t
        }), v.xb(this.props.editorState) && this.clearSearch()
      })
    }), H(this, "onBlur", e => {
      this.handleBlur()
    }), H(this, "handleOption", () => {
      let {
        current: e
      } = this._searchPopoutRef;
      return null != e && (false === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({
        searchAutocompleteSelectAction: G.ZW.KEY_PRESS
      }) : e.selectOption({
        searchAutocompleteSelectAction: G.ZW.KEY_PRESS
      }))
    }), H(this, "handleRedesignOption", () => {
      let {
        current: e
      } = this._searchFiltersRedesignPopoutRef;
      return null != e && e.selectOption({
        searchAutocompleteSelectAction: G.ZW.KEY_PRESS
      })
    }), H(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      return e.preventDefault(), (this.props.isSearchFiltersRedesignEnabled ? this.handleRedesignOption() : this.handleOption()) || ((0, C.X$)() && t ? this.search({
        searchEverywhere: true,
        searchQuerySource: G.w7.SEARCH_TEXT_INPUT
      }) : this.search({
        searchQuerySource: G.w7.SEARCH_TEXT_INPUT
      })), "handled"
    }), H(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return v.Sq(t).length >= Y || (t = v.x0(e, t), t = v.Hl(t, Y), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
        focused: true
      })), "handled"
    }), H(this, "handleKeyCommand", e => {
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
    }), H(this, "handlePastedText", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = v.x0(e, t), t = v.Hl(t, Y), t = this.tokenize(t), n || this.setState({
        focused: true
      }), this.setEditorState(t), "handled"
    }), H(this, "setEditorState", e => {
      let {
        searchContext: t
      } = this.props;
      x.Z.updateSearchEditorState(t, e)
    }), H(this, "getPopoutRef", () => {
      let {
        current: e
      } = this._searchFiltersRedesignPopoutRef, {
        current: t
      } = this._searchPopoutRef;
      return this.props.isSearchFiltersRedesignEnabled ? e : t
    }), H(this, "handleKeyBind", e => {
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
          x.Z.updateSearchEditorState(o, e), this.setState({
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

function q(e) {
  let {
    searchContext: t,
    className: n
  } = e, a = (0, C.Tm)(t), o = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled), s = (0, u.e7)([k.Z], () => k.Z.getEditorState(a));
  i.useEffect(() => (h.Z.setSelectedSearchContext(a), () => {
    h.Z.setSelectedSearchContext(null)
  }), [a]);
  let l = (0, u.e7)([k.Z], () => k.Z.getIsSearchTokensInitialized()),
    c = i.useRef(l);
  i.useEffect(() => {
    l && c.current !== l && (c.current = l, L.Z.ensureSearchInputDecorators(t))
  }, [l, t]);
  let f = i.useMemo(() => null != s ? s : v.nR(S.Jl(D.ZP)), [s]),
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
    O = (0, u.e7)([g.ZP], () => g.ZP.getCurrentSearchContextId()),
    [I, A] = i.useState(false),
    w = i.useRef(I),
    j = (0, u.e7)([g.ZP, y.Z, E.Z], () => {
      let e = y.Z.getCurrentlySelectedChannelId(),
        t = E.Z.getChannel(e);
      return g.ZP.getSection(e, null == t ? true : t.isDM()) === B.ULH.SEARCH
    }),
    M = j || I;
  i.useEffect(() => {
    O === (0, C.Tm)(t) && A(j)
  }, [O, j, t]);
  let G = (0, d.VXO)(Z.L),
    V = M || G;
  i.useEffect(() => {
    w.current && !I && (w.current = false, (0, U.IZ)({
      searchContext: t
    })), !w.current && I && (w.current = true)
  }, [t, I]);
  let H = i.useCallback(e => {
      let {
        queryString: n,
        query: r,
        searchEverywhere: i,
        searchQuerySource: a
      } = e;
      R.Z.refreshSearchQueryAnalyticsId(t), (0, U.tI)({
        searchContext: t,
        query: r,
        queryString: n,
        searchQuerySource: a
      }), x.Z.updateSearchMode(t, B.QIO.NEWEST), K({
        searchContext: t,
        searchQueryString: n,
        searchEverywhere: i,
        offset: 0
      })
    }, [t]),
    Y = (0, u.e7)([b.Z, E.Z], () => {
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
    W = (0, P.kU)({
      location: "Search"
    }),
    q = (0, N.U)({
      location: "Search"
    }),
    Q = i.useMemo(() => t.type === B.aib.DMS ? F.intl.string(F.t.m7OrlR) : W || q ? F.intl.formatToPlainString(F.t.LDZtFO, {
      name: Y
    }) : F.intl.string(F.t["5h0QOP"]), [t.type, q, W, Y]);
  return (0, r.jsx)(z, {
    className: n,
    searchContext: t,
    isSearching: p,
    editorState: f,
    hasResults: m,
    keyboardModeEnabled: o,
    onSearch: H,
    isSearchSidebarOrModalOpen: V,
    placeholder: Q,
    isSearchFiltersRedesignEnabled: W
  })
}

function Q(e) {
  let {
    className: t,
    guildId: n,
    channelId: i
  } = e, a = (0, M.H)({
    guildId: n,
    channelId: i
  });
  return null == a ? null : (0, r.jsx)(q, {
    className: t,
    searchContext: a
  })
}
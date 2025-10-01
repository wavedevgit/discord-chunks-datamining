/** Chunk was on web.js **/
/** chunk id: 208450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => q,
  ol: () => z,
  uh: () => H
}), require("./35282.js"), require("./704826.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk258863 = require("./258863.js"),
  Chunk299608 = require("./299608.js"),
  c = require.n(Chunk299608),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk349033 = require("./349033.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313201 = require("./313201.js"),
  Chunk728285 = require("./728285.jsx"),
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
  Chunk819439 = require("./819439.js"),
  Chunk945577 = require("./945577.js"),
  Chunk28964 = require("./28964.js"),
  Chunk971128 = require("./971128.js"),
  Chunk532428 = require("./532428.js"),
  Chunk583642 = require("./583642.jsx"),
  Chunk991896 = require("./991896.js"),
  Chunk611004 = require("./611004.js"),
  Chunk778177 = require("./778177.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk339450 = require("./339450.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./614346.js");
let H = 512,
  Y = (0, Chunk313201.hQ)(),
  W = c()(Chunk611004.Z.fetchMessages, 500);
class K extends Chunk647438.PureComponent {
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
      let e = O.Sq(t),
        r = (0, S.kG)(O.Sq(t)),
        i = v.g9(r, t);
      I.Z.updateAutocompleteQuery({
        searchContext: n,
        tokens: r,
        cursorScope: i,
        queryString: e
      }), null != this._editorRef && O.iE(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.PERFORM_SEARCH, this.search), Chunk585483.S.unsubscribe(Chunk981631.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), Chunk585483.S.unsubscribe(Chunk981631.CkL.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = (0, S.kG)(O.Sq(e)).filter(e => e.type !== f.ZP.NON_TOKEN_TYPE);
    return O.lv(t, e, w.ZP)
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
      placeholder: null != n ? n : Z.intl.string(Z.t["5h0QOD"]),
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? Y : true,
      ariaLabel: Z.intl.string(Z.t["5h0QOD"]),
      ariaAutoComplete: "list"
    })
  }
  render() {
    let {
      searchContext: e,
      editorState: t,
      hasResults: n,
      className: i,
      searchBarContainerClassName: a,
      searchBarClassName: s,
      popoutAlignment: l
    } = this.props, {
      focused: c
    } = this.state, u = Chunk72006.Sq(exports).length > 0;
    return (0, Chunk951288.jsx)(Chunk481060.yRy, {
      targetElementRef: this._containerRef,
      renderPopout: this.renderPopout,
      position: "bottom",
      align: Chunk299608,
      animation: Chunk481060.yRy.Animation.NONE,
      shouldShow: c,
      autoInvert: false,
      children: (t, l) => {
        var f;
        let {
          isShown: _
        } = l;
        return (0, r.jsx)("div", {
          className: i,
          ref: this._containerRef,
          children: (0, r.jsx)("div", {
            className: o()(F.search, a, {
              [F.open]: u || c,
              [F.focused]: c
            }),
            children: (0, r.jsx)(d.tEY, {
              focusTarget: {
                current: null == (f = this._editorRef) ? true : f.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, r.jsxs)("div", {
                className: o()(F.searchBar, s),
                ref: this._searchBarRef,
                children: [this.renderInput(_), (0, r.jsx)(d.BK9, {
                  onClear: this.handleClearSearch,
                  hasContent: u || n,
                  className: F.icon,
                  isLoading: false
                })]
              }, (0, S.Tm)(e))
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
        replace: a
      } = e, {
        editorState: o
      } = this.props, s = O.Sq(o);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== s.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), a ? (o = O.c2(t, o), n = 0) : o = O.x0(t, o, n, r), o = O.Hl(o, H), o = this.tokenize(o);
      let l = Number(n) + t.length;
      o = O.iK(l, o), this.setEditorState(o), i && this.search({
        queryString: O.Sq(o)
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
      return e ? (0, r.jsx)(D.Z, {
        ref: this._searchFiltersRedesignPopoutRef,
        searchContext: this.props.searchContext,
        navId: Y,
        onSelectedIndexChanged: this.handleSelectedIndexChanged,
        className: this.props.searchPopoutClassName
      }) : (0, r.jsx)(j.ZP, {
        ref: this._searchPopoutRef,
        searchContext: this.props.searchContext,
        navId: Y,
        onSelectedIndexChanged: this.handleSelectedIndexChanged,
        className: this.props.searchPopoutClassName
      })
    }), V(this, "search", e => {
      let {
        isSearching: t
      } = this.props, {
        queryString: n,
        searchEverywhere: r
      } = null != e ? e : {};
      if (null == n || "" === n) {
        let {
          editorState: e
        } = this.props;
        n = O.Sq(e)
      }
      if (!t) {
        let e = (0, S.kG)(n),
          t = (0, S.$G)(e);
        for (let t = 0; t < e.length; t++)(0, S.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(t).length) returnfalse;
        this.props.onSearch({
          queryString: n,
          query: t,
          searchEverywhere: null != r && r
        }), d.uvj.announce(Z.intl.string(Z.t.pKCxWF)), this.handleBlur(true)
      }
      returntrue
    }), V(this, "handleClearSearch", e => {
      let {
        editorState: t,
        searchContext: n
      } = this.props, {
        focused: r
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === O.Sq(t)) return void this.focusEditor();
      t = O.Hl(t, 0), this.setEditorState(t), (0, U.cy)({
        searchContext: n
      }), r || Promise.resolve().then(() => this.blurEditor())
    }), V(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) return void this.focusEditor();
      let n = b.Z.getChannelId(),
        r = g.Z.getChannel(n),
        i = A.Z.getCurrentConfig({
          location: "handleFocusSearch"
        }).enabled;
      if ((null == r ? true : r.isThread()) && !i && (r = g.Z.getChannel(null == r ? true : r.parent_id)), null == r) return void this.focusEditor();
      let {
        searchContext: a
      } = this.props, o = (0, N.ad)({
        location: "SearchBar_handleFocusSearch"
      }), s = a.type === B.aib.DMS && o;
      if (r.isPrivate() && !s) return void this.focusEditor();
      let l = (0, S.X3)(r);
      if (null == l) return void this.focusEditor();
      (0, U.PJ)({
        searchContext: a
      }), Promise.resolve().then(() => {
        let {
          _editorRef: e
        } = this;
        null == e || e.focus(), this.handleSetSearchQuery({
          query: w.ZP[B.dCx.FILTER_IN].key + "".concat(l, " "),
          replace: true
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
        searchContext: e,
        isSearchActive: t
      } = this.props;
      this.setState({
        focused: true
      }), t || (0, U.I1)({
        searchContext: e
      })
    }), V(this, "handleBlur", e => {
      let {
        searchContext: t,
        isSearchActive: n
      } = this.props;
      this.setState({
        focused: false
      }, () => {
        n || e || (0, U.IZ)({
          searchContext: t
        }), O.xb(this.props.editorState) && this.clearSearch()
      })
    }), V(this, "onBlur", e => {
      this.handleBlur()
    }), V(this, "handleOption", () => {
      let {
        current: e
      } = this._searchPopoutRef;
      return null != e && (false === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({
        searchAutocompleteSelectAction: G.ZW.KEY_PRESS
      }) : e.selectOption({
        searchAutocompleteSelectAction: G.ZW.KEY_PRESS
      }))
    }), V(this, "handleRedesignOption", () => {
      let {
        current: e
      } = this._searchFiltersRedesignPopoutRef;
      return null != e && e.selectOption({
        searchAutocompleteSelectAction: G.ZW.KEY_PRESS
      })
    }), V(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      return e.preventDefault(), (this.props.isSearchFiltersRedesignEnabled ? this.handleRedesignOption() : this.handleOption()) || ((0, S.X$)() && t ? this.search({
        searchEverywhere: true
      }) : this.search()), "handled"
    }), V(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return O.Sq(t).length >= H || (t = O.x0(e, t), t = O.Hl(t, H), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
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
          return t = O.yd(e, t), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
            focused: true
          }), "handled";
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = O.Zn(e, t), t = this.tokenize(t), this.setEditorState(t), "handled";
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
      return e = null != e ? e.replace(/\n/g, "") : "", t = O.x0(e, t), t = O.Hl(t, H), t = this.tokenize(t), n || this.setState({
        focused: true
      }), this.setEditorState(t), "handled"
    }), V(this, "setEditorState", e => {
      let {
        searchContext: t
      } = this.props;
      L.Z.updateSearchEditorState(t, e)
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
        let t = O.m1(a);
        return this.setEditorState(t), this.setState({
          focused: true
        }), true
      }
      if ("Escape" === t) {
        if (e.preventDefault(), O.xb(a)) this.blurEditor();
        else {
          let e = O.FZ(a);
          L.Z.updateSearchEditorState(o, e), this.setState({
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
        return (0, _.Qj)(), true
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), a = r ? O.R8(a) : O.eE(a), this.setEditorState(a), true;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), a = r ? O.Wg(a) : O.NJ(a), this.setEditorState(a), true;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = O.FZ(a);
        return this.setEditorState(e), true
      }
      return O.q0(e)
    }), (0, S.WU)()
  }
}

function z(e) {
  let {
    searchContext: t,
    className: n,
    searchBarContainerClassName: a,
    searchBarClassName: o,
    searchPopoutClassName: s,
    popoutAlignment: l
  } = e, c = (0, S.Tm)(t), d = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), f = (0, u.e7)([k.Z], () => null != c ? k.Z.getEditorState(c) : null), _ = (0, u.e7)([k.Z], () => k.Z.getIsSearchTokensInitialized()), h = i.useRef(_);
  i.useEffect(() => {
    _ && h.current !== _ && (h.current = _, x.Z.ensureSearchInputDecorators(t))
  }, [_, t]);
  let b = i.useMemo(() => null != f ? f : O.nR(v.Jl(w.ZP)), [f]),
    {
      isSearching: y,
      isSearchActive: I,
      hasResults: A
    } = (0, u.cj)([T.Z], () => {
      let e = T.Z.getTotalCount(c);
      return {
        hasResults: null != e && e > 0,
        isSearching: T.Z.getIsFetching(c),
        isSearchActive: T.Z.hasSearchState(c)
      }
    }),
    N = i.useRef(I);
  i.useEffect(() => {
    N.current && !I && (N.current = false, (0, U.IZ)({
      searchContext: t
    })), !N.current && I && (N.current = true)
  }, [I, t]);
  let D = i.useCallback(e => {
      let {
        queryString: n,
        query: r,
        searchEverywhere: i
      } = e;
      P.ZP.refreshSearchQueryAnalyticsId(t), (0, U.tI)({
        searchContext: t,
        query: r,
        queryString: n
      }), t.type === B.aib.DMS ? x.Z.fetchCrossDMMessages({
        searchContext: t,
        selectedPageIndex: 0,
        queryString: n
      }) : W({
        searchContext: t,
        searchQuery: r,
        queryString: n,
        searchEverywhere: i,
        offset: 0,
        searchMode: B.QIO.NEWEST
      })
    }, [t]),
    L = (0, u.e7)([E.Z, g.Z], () => {
      let e = (0, S.b7)(t) ? t.guildId : null;
      if (null != e) {
        let t = E.Z.getGuild(e);
        return null == t ? null : t.name
      }
      let n = (0, S.AH)(t);
      if (null != n) {
        let e = g.Z.getChannel(n);
        return null == e ? null : (0, S.nl)(e)
      }
      return null
    }),
    j = (0, R.nP)({
      location: "Search"
    }),
    M = (0, R.KS)({
      location: "Search"
    }),
    G = j || M,
    F = (0, C.$)({
      location: "Search"
    }),
    V = i.useMemo(() => t.type === B.aib.DMS ? Z.intl.string(Z.t.m7OrlZ) : G || F ? Z.intl.formatToPlainString(Z.t.LDZtFB, {
      name: L
    }) : Z.intl.string(Z.t["5h0QOD"]), [t.type, G, L, F]),
    H = (0, m.bp)(),
    Y = i.useRef(H);
  return i.useEffect(() => {
    Y.current = H
  }, [H]), i.useEffect(() => {
    (0, U.O2)({
      searchContext: t,
      appContext: Y.current
    })
  }, [t]), (0, r.jsx)(K, {
    className: n,
    searchPopoutClassName: s,
    searchBarContainerClassName: a,
    searchBarClassName: o,
    searchContext: t,
    isSearching: y,
    editorState: b,
    hasResults: A,
    keyboardModeEnabled: d,
    onSearch: D,
    isSearchActive: I,
    placeholder: V,
    popoutAlignment: l,
    isSearchFiltersRedesignEnabled: G
  })
}

function q(e) {
  let {
    className: t,
    guildId: n,
    channelId: i
  } = e, a = (0, M.H)({
    guildId: n,
    channelId: i
  });
  return null == a ? null : (0, r.jsx)(z, {
    className: t,
    searchContext: a
  })
}
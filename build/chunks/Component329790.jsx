/** Chunk was on web.js **/
/** chunk id: 329790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => K,
  uh: () => B
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
  Chunk423880 = require("./423880.js"),
  Chunk532428 = require("./532428.js"),
  Chunk991896 = require("./991896.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk763439 = require("./763439.jsx"),
  Chunk723642 = require("./723642.js"),
  Chunk125085 = require("./125085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk435288 = require("./435288.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./948648.js");
let B = 512,
  V = (0, Chunk313201.hQ)(),
  H = c()(Chunk611004.Z.fetchMessages, 500);
class Y extends Chunk473749.PureComponent {
  componentDidMount() {
    O.S.subscribe(U.CkL.PERFORM_SEARCH, this.search), O.S.subscribe(U.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), O.S.subscribe(U.CkL.FOCUS_SEARCH, this.handleFocusSearch)
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
    var e, t, n;
    O.S.unsubscribe(U.CkL.PERFORM_SEARCH, this.search), O.S.unsubscribe(U.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), O.S.unsubscribe(U.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (n = this._editorRef) || null == (t = n.editor) || null == (e = t.removeEventListener) || e.call(t, "cut", this.handleCutEvent)
  }
  tokenize(e) {
    let t = (0, C.kG)(v.Sq(e)).filter(e => e.type !== f.ZP.NON_TOKEN_TYPE);
    return v.lv(t, e, P.ZP)
  }
  clearSearch() {
    let {
      searchContext: e
    } = this.props;
    R.Z.cleanUpSearchState(e)
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
      placeholder: null != n ? n : G.intl.string(G.t["5h0QOP"]),
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? V : true,
      ariaLabel: G.intl.string(G.t["5h0QOP"]),
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
    } = this.state, s = v.Sq(t).length > 0;
    return (0, r.jsx)(d.yRy, {
      targetElementRef: this._containerRef,
      renderPopout: this.renderPopout,
      position: "bottom",
      animation: d.yRy.Animation.NONE,
      shouldShow: a,
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
            className: o()(Z.search, {
              [Z.open]: s || a,
              [Z.focused]: a
            }),
            children: (0, r.jsx)(d.tEY, {
              focusTarget: {
                current: null == (c = this._editorRef) ? true : c.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, r.jsxs)("div", {
                className: Z.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(u), (0, r.jsx)(d.BK9, {
                  onClear: this.handleClearSearch,
                  hasContent: s || n,
                  className: Z.icon,
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
    super(e), F(this, "state", {
      focused: false,
      selectedIndex: true
    }), F(this, "_editorRef", true), F(this, "_containerRef", i.createRef()), F(this, "_searchBarRef", i.createRef()), F(this, "_searchPopoutRef", i.createRef()), F(this, "handleCutEvent", e => {
      if (e.preventDefault(), null == e.clipboardData) return;
      let {
        editorState: t
      } = this.props, n = t.getSelection();
      if (n.isCollapsed()) return;
      let r = v.Sq(t),
        i = n.getStartOffset(),
        a = n.getEndOffset(),
        o = r.substring(i, a);
      e.clipboardData.setData("text/plain", o);
      let s = v.yd("delete", t);
      s = this.tokenize(s), this.setEditorState(s)
    }), F(this, "handleSetSearchQuery", e => {
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
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== l.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), a ? (s = v.c2(t, s), n = 0) : s = v.x0(t, s, n, r), s = v.Hl(s, B), s = this.tokenize(s);
      let c = Number(n) + t.length;
      s = v.iK(c, s), this.setEditorState(s), i && this.search({
        queryString: v.Sq(s),
        searchQuerySource: o
      })
    }), F(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute("aria-activedescendant", null != e ? "".concat(V, "-").concat(e) : true), this.setState({
        selectedIndex: e
      })
    }), F(this, "renderPopout", () => (0, r.jsx)(j.Z, {
      ref: this._searchPopoutRef,
      searchContext: this.props.searchContext,
      navId: V,
      onSelectedIndexChanged: this.handleSelectedIndexChanged
    })), F(this, "search", e => {
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
        }), d.uvj.announce(G.intl.string(G.t.pKCxWP)), this.handleBlur()
      }
      returntrue
    }), F(this, "handleClearSearch", e => {
      let {
        editorState: t,
        searchContext: n
      } = this.props, {
        focused: r
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === v.Sq(t)) return void this.focusEditor();
      t = v.Hl(t, 0), this.setEditorState(t), (0, L.cy)({
        searchContext: n
      }), r || Promise.resolve().then(() => this.blurEditor())
    }), F(this, "handleFocusSearch", e => {
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
      if (r.isPrivate() && a.type !== U.aib.DMS) return void this.focusEditor();
      let o = (0, C.X3)(r);
      if (null == o) return void this.focusEditor();
      (0, L.PJ)({
        searchContext: a
      }), Promise.resolve().then(() => {
        let {
          _editorRef: e
        } = this;
        null == e || e.focus(), this.handleSetSearchQuery({
          query: P.ZP[U.dCx.FILTER_IN].key + "".concat(o, " "),
          replace: true,
          searchQuerySource: M.w7.SEARCH_TEXT_INPUT
        })
      })
    }), F(this, "focusEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }), F(this, "blurEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.blur())
    }), F(this, "setEditorRef", e => {
      var t, n, r, i, a, o;
      null == (n = this._editorRef) || null == (t = n.editor) || t.removeEventListener("cut", this.handleCutEvent), this._editorRef = e, null == (i = this._editorRef) || null == (r = i.editor) || r.setAttribute("aria-haspopup", "listbox"), null == (o = this._editorRef) || null == (a = o.editor) || a.addEventListener("cut", this.handleCutEvent)
    }), F(this, "onFocus", () => {
      let {
        searchContext: e
      } = this.props;
      this.setState({
        focused: true
      }), N.Z.setFocused(e, true)
    }), F(this, "handleBlur", () => {
      let {
        searchContext: e
      } = this.props;
      N.Z.setFocused(e, false), this.setState({
        focused: false
      }, () => {
        v.xb(this.props.editorState) && this.clearSearch()
      })
    }), F(this, "onBlur", e => {
      this.handleBlur()
    }), F(this, "handleOption", () => {
      let {
        current: e
      } = this._searchPopoutRef;
      return null != e && e.selectOption({
        searchAutocompleteSelectAction: M.ZW.KEY_PRESS
      })
    }), F(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      return e.preventDefault(), this.handleOption() || ((0, C.X$)() && t ? this.search({
        searchEverywhere: true,
        searchQuerySource: M.w7.SEARCH_TEXT_INPUT
      }) : this.search({
        searchQuerySource: M.w7.SEARCH_TEXT_INPUT
      })), "handled"
    }), F(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return v.Sq(t).length >= B || (t = v.x0(e, t), t = v.Hl(t, B), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
        focused: true
      })), "handled"
    }), F(this, "handleKeyCommand", e => {
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
    }), F(this, "handlePastedText", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = v.x0(e, t), t = v.Hl(t, B), t = this.tokenize(t), n || this.setState({
        focused: true
      }), this.setEditorState(t), "handled"
    }), F(this, "setEditorState", e => {
      let {
        searchContext: t
      } = this.props;
      w.Z.updateSearchEditorState(t, e)
    }), F(this, "getPopoutRef", () => {
      let {
        current: e
      } = this._searchPopoutRef;
      return e
    }), F(this, "handleKeyBind", e => {
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

function W(e) {
  let {
    searchContext: t,
    className: n
  } = e, a = (0, C.Tm)(t), o = (0, u.e7)([_.Z], () => _.Z.keyboardModeEnabled), s = (0, u.e7)([x.Z], () => x.Z.getEditorState(a));
  i.useEffect(() => (m.Z.setSelectedSearchContext(a), () => {
    m.Z.setSelectedSearchContext(null)
  }), [a]);
  let l = (0, u.e7)([x.Z], () => x.Z.getIsSearchTokensInitialized()),
    c = i.useRef(l);
  i.useEffect(() => {
    l && c.current !== l && (c.current = l, R.Z.ensureSearchInputDecorators(t))
  }, [l, t]);
  let f = i.useMemo(() => null != s ? s : v.nR(S.Jl(P.ZP)), [s]),
    {
      isSearching: p,
      hasResults: h
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
      return g.ZP.getSection(e, null == t ? true : t.isDM()) === U.ULH.SEARCH
    });
  i.useEffect(() => {
    N.Z.setSidebarOpen(t, O)
  }, [t, O]);
  let I = (0, d.VXO)(k.L);
  i.useEffect(() => {
    N.Z.setFiltersModalOpen(t, I)
  }, [t, I]);
  let A = i.useCallback(e => {
      let {
        queryString: n,
        query: r,
        searchEverywhere: i,
        searchQuerySource: a
      } = e;
      N.Z.refreshQueryId(t), (0, L.tI)({
        searchContext: t,
        query: r,
        queryString: n,
        searchQuerySource: a
      }), w.Z.updateSearchMode(t, U.QIO.NEWEST), H({
        searchContext: t,
        searchQueryString: n,
        searchEverywhere: i,
        offset: 0
      })
    }, [t]),
    D = (0, u.e7)([b.Z, E.Z], () => {
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
    j = i.useMemo(() => {
      switch (t.type) {
        case U.aib.DMS:
          return G.intl.string(G.t.m7OrlR);
        case U.aib.FAVORITES:
          return G.intl.string(G.t["5h0QOP"]);
        default:
          return G.intl.formatToPlainString(G.t.LDZtFO, {
            name: D
          })
      }
    }, [t.type, D]);
  return (0, r.jsx)(Y, {
    className: n,
    searchContext: t,
    isSearching: p,
    editorState: f,
    hasResults: h,
    keyboardModeEnabled: o,
    onSearch: A,
    placeholder: j
  })
}

function K(e) {
  let {
    className: t,
    guildId: n,
    channelId: i
  } = e, a = (0, D.H)({
    guildId: n,
    channelId: i
  });
  return null == a ? null : (0, r.jsx)(W, {
    className: t,
    searchContext: a
  })
}
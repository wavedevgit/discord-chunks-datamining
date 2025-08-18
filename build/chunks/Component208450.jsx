/** Chunk was on 54157 **/
/** chunk id: 208450, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G,
  o: () => Q
}), require("./35282.js"), require("./704826.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk258863 = require("./258863.js"),
  Chunk299608 = require("./299608.js"),
  c = require.n(Chunk299608),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk349033 = require("./349033.js"),
  Chunk857595 = require("./857595.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313201 = require("./313201.js"),
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
  Chunk611004 = require("./611004.js"),
  Chunk778177 = require("./778177.jsx"),
  Chunk165017 = require("./165017.js"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk448402 = require("./448402.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./571654.js");
let U = (0, Chunk313201.hQ)(),
  B = c()(Chunk611004.Z.fetchMessages, 500);
class W extends Chunk647438.PureComponent {
  componentDidMount() {
    var e, t;
    Chunk585483.S.subscribe(Chunk981631.CkL.PERFORM_SEARCH, this.search), Chunk585483.S.subscribe(Chunk981631.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), Chunk585483.S.subscribe(Chunk981631.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = exports.editor) || module.setAttribute("aria-haspopup", "listbox")
  }
  componentDidUpdate(e) {
    let {
      editorState: t,
      searchContext: n
    } = this.props;
    if (t !== e.editorState) {
      let e = (0, O.kG)(b.Sq(t)),
        r = E.g9(e, t);
      x.Z.updateAutocompleteQuery(n, e, r), null != this._editorRef && b.iE(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.PERFORM_SEARCH, this.search), Chunk585483.S.unsubscribe(Chunk981631.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), Chunk585483.S.unsubscribe(Chunk981631.CkL.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = (0, O.kG)(b.Sq(e)).filter(e => e.type !== h.ZP.NON_TOKEN_TYPE);
    return b.lv(t, e, I.ZP)
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
    return (0, r.jsx)(i.Editor, {
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
      placeholder: null != n ? n : L.intl.string(L.t["5h0QOD"]),
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? U : true,
      ariaLabel: L.intl.string(L.t["5h0QOD"]),
      ariaAutoComplete: "list"
    })
  }
  render() {
    let {
      searchContext: e,
      editorState: t,
      hasResults: n,
      className: s,
      searchBarContainerClassName: l,
      searchBarClassName: i,
      popoutAlignment: o
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
      children: (t, o) => {
        var h;
        let {
          isShown: p
        } = o;
        return (0, r.jsx)("div", {
          className: s,
          ref: this._containerRef,
          children: (0, r.jsx)("div", {
            className: a()(F.search, l, {
              [F.open]: u || c,
              [F.focused]: c
            }),
            children: (0, r.jsx)(d.tEY, {
              focusTarget: {
                current: null == (h = this._editorRef) ? true : h.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, r.jsxs)("div", {
                className: a()(F.searchBar, i),
                ref: this._searchBarRef,
                children: [this.renderInput(p), (0, r.jsx)(d.BK9, {
                  onClear: this.handleClearSearch,
                  hasContent: u || n,
                  className: F.icon,
                  isLoading: false
                })]
              }, (0, O.Tm)(e))
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
    }), H(this, "_editorRef", true), H(this, "_containerRef", s.createRef()), H(this, "_searchBarRef", s.createRef()), H(this, "_searchPopoutRef", s.createRef()), H(this, "handleSetSearchQuery", e => {
      let {
        query: t,
        anchor: n,
        focus: r,
        performSearch: s,
        replace: l
      } = e, {
        editorState: a
      } = this.props, i = b.Sq(a);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== i.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), l ? (a = b.c2(t, a), n = 0) : a = b.x0(t, a, n, r), a = b.Hl(a, 512), a = this.tokenize(a);
      let o = Number(n) + t.length;
      a = b.iK(o, a), this.setEditorState(a), s && this.search({
        queryString: b.Sq(a)
      })
    }), H(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute("aria-activedescendant", null != e ? "".concat(U, "-").concat(e) : true), this.setState({
        selectedIndex: e
      })
    }), H(this, "renderPopout", () => (0, r.jsx)(N.ZP, {
      ref: this._searchPopoutRef,
      searchContext: this.props.searchContext,
      navId: U,
      onSelectedIndexChanged: this.handleSelectedIndexChanged,
      className: this.props.searchPopoutClassName
    })), H(this, "search", e => {
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
        n = b.Sq(e)
      }
      if (!t) {
        let e = (0, O.kG)(n),
          t = (0, O.$G)(e);
        for (let t = 0; t < e.length; t++)(0, O.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(t).length) returnfalse;
        this.props.onSearch({
          queryString: n,
          query: t,
          searchEverywhere: null != r && r
        }), d.uvj.announce(L.intl.string(L.t.pKCxWF)), this.handleBlur(true)
      }
      returntrue
    }), H(this, "handleClearSearch", e => {
      let {
        editorState: t,
        searchContext: n
      } = this.props, {
        focused: r
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === b.Sq(t)) return void this.focusEditor();
      t = b.Hl(t, 0), this.setEditorState(t), (0, k.cy)({
        searchContext: n
      }), r || Promise.resolve().then(() => this.blurEditor())
    }), H(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) return void this.focusEditor();
      let n = m.Z.getChannelId(),
        r = g.Z.getChannel(n),
        s = v.Z.getCurrentConfig({
          location: "handleFocusSearch"
        }).enabled;
      if ((null == r ? true : r.isThread()) && !s && (r = g.Z.getChannel(null == r ? true : r.parent_id)), null == r) return void this.focusEditor();
      let {
        searchContext: l
      } = this.props, a = (0, j.ad)({
        location: "SearchBar_handleFocusSearch"
      }), i = l.type === D.aib.DMS && a;
      if (r.isPrivate() && !i) return void this.focusEditor();
      let o = (0, O.X3)(r);
      if (null == o) return void this.focusEditor();
      (0, k.PJ)({
        searchContext: l
      }), Promise.resolve().then(() => {
        let {
          _editorRef: e
        } = this;
        null == e || e.focus(), this.handleSetSearchQuery({
          query: I.ZP[D.dCx.FILTER_IN].key + "".concat(o, " "),
          replace: true
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
        isSearchActive: t
      } = this.props;
      this.setState({
        focused: true
      }), t || (0, k.I1)({
        searchContext: e
      })
    }), H(this, "handleBlur", e => {
      let {
        searchContext: t,
        isSearchActive: n
      } = this.props;
      this.setState({
        focused: false
      }, () => {
        n || e || (0, k.IZ)({
          searchContext: t
        }), b.xb(this.props.editorState) && this.clearSearch()
      })
    }), H(this, "onBlur", e => {
      this.handleBlur()
    }), H(this, "handleOption", e => null != e && (false === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({
      searchAutocompleteSelectAction: M.ZW.KEY_PRESS
    }) : e.selectOption({
      searchAutocompleteSelectAction: M.ZW.KEY_PRESS
    }))), H(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      e.preventDefault();
      let {
        current: n
      } = this._searchPopoutRef;
      return this.handleOption(n) || ((0, O.X$)() && t ? this.search({
        searchEverywhere: true
      }) : this.search()), "handled"
    }), H(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return b.Sq(t).length >= 512 || (t = b.x0(e, t), t = b.Hl(t, 512), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
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
          return t = b.yd(e, t), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
            focused: true
          }), "handled";
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = b.Zn(e, t), t = this.tokenize(t), this.setEditorState(t), "handled";
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
      return e = null != e ? e.replace(/\n/g, "") : "", t = b.x0(e, t), t = b.Hl(t, 512), t = this.tokenize(t), n || this.setState({
        focused: true
      }), this.setEditorState(t), "handled"
    }), H(this, "setEditorState", e => {
      let {
        searchContext: t
      } = this.props;
      x.Z.setSearchState(t, e)
    }), H(this, "handleKeyBind", e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: r
      } = e, {
        editorState: s,
        searchContext: l,
        keyboardModeEnabled: a
      } = this.props;
      if (e.stopPropagation(), "Escape" === t) {
        if (e.preventDefault(), b.xb(s)) this.blurEditor();
        else {
          let e = b.FZ(s);
          x.Z.setSearchState(l, e), this.setState({
            focused: true
          })
        }
        returntrue
      }
      if ("ArrowUp" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusPreviousOption(), true
      }
      if ("ArrowDown" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusNextOption(), true
      }
      if ("Tab" === t) {
        if (a) return;
        return (0, p.Qj)(), true
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), s = r ? b.R8(s) : b.eE(s), this.setEditorState(s), true;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), s = r ? b.Wg(s) : b.NJ(s), this.setEditorState(s), true;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = b.FZ(s);
        return this.setEditorState(e), true
      }
      return b.q0(e)
    }), (0, O.WU)()
  }
}

function Q(e) {
  let {
    searchContext: t,
    className: n,
    searchBarContainerClassName: l,
    searchBarClassName: a,
    searchPopoutClassName: i,
    popoutAlignment: o
  } = e, c = (0, O.Tm)(t), h = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled), p = (0, u.e7)([w.Z], () => null != c ? w.Z.getEditorState(c) : null), _ = s.useMemo(() => null != p ? p : b.nR(E.Jl(I.ZP)), [p]), {
    isSearching: m,
    isSearchActive: y,
    hasResults: x
  } = (0, u.cj)([C.Z], () => {
    let e = C.Z.getTotalCount(c);
    return {
      hasResults: null != e && e > 0,
      isSearching: C.Z.getIsFetching(c),
      isSearchActive: C.Z.hasSearchState(c)
    }
  }), v = s.useRef(y);
  s.useEffect(() => {
    v.current && !y && (v.current = false, (0, k.IZ)({
      searchContext: t
    })), !v.current && y && (v.current = true)
  }, [y, t]);
  let j = s.useCallback(e => {
      let {
        queryString: n,
        query: r,
        searchEverywhere: s
      } = e;
      T.ZP.refreshSearchQueryAnalyticsId(t), (0, k.tI)({
        searchContext: t,
        query: r,
        queryString: n
      }), t.type === D.aib.DMS ? A.Z.fetchCrossDMMessages({
        searchContext: t,
        selectedPageIndex: 0,
        queryString: n
      }) : B({
        searchContext: t,
        searchQuery: r,
        queryString: n,
        searchEverywhere: s,
        offset: 0,
        searchMode: D.QIO.NEWEST
      })
    }, [t]),
    N = (0, u.e7)([S.Z, g.Z], () => {
      let e = (0, O.b7)(t) ? t.guildId : null;
      if (null != e) {
        let t = S.Z.getGuild(e);
        return null == t ? null : t.name
      }
      let n = (0, O.AH)(t);
      if (null != n) {
        let e = g.Z.getChannel(n);
        return null == e ? null : (0, O.nl)(e)
      }
      return null
    }),
    Z = (0, P.xd)({
      isXDMSearch: t.type === D.aib.DMS,
      location: "Search"
    }),
    M = (0, P.dB)({
      isXDMSearch: t.type === D.aib.DMS,
      location: "Search"
    }),
    H = Z || M,
    U = (0, R.$)({
      location: "Search"
    }),
    Q = s.useMemo(() => t.type === D.aib.DMS ? L.intl.string(L.t.m7OrlZ) : U ? L.intl.formatToPlainString(L.t.LDZtFB, {
      name: N
    }) : H ? (0, r.jsxs)(r.Fragment, {
      children: [L.intl.formatToPlainString(L.t.LDZtFB, {
        name: N
      }), (0, r.jsx)("span", {
        className: F.keybind,
        children: (0, r.jsx)(d.M2$, {
          shortcut: ["mod", "f"],
          className: F.shortcut
        })
      })]
    }) : L.intl.string(L.t["5h0QOD"]), [t.type, H, N, U]);
  return (0, r.jsx)(W, {
    className: n,
    searchPopoutClassName: i,
    searchBarContainerClassName: l,
    searchBarClassName: a,
    searchContext: t,
    isSearching: m,
    editorState: _,
    hasResults: x,
    keyboardModeEnabled: h,
    onSearch: j,
    isSearchActive: y,
    placeholder: Q,
    popoutAlignment: o
  })
}

function G(e) {
  let {
    className: t,
    guildId: n,
    channelId: s
  } = e, l = (0, Z.H)({
    guildId: n,
    channelId: s
  });
  return null == l ? null : (0, r.jsx)(Q, {
    className: t,
    searchContext: l
  })
}
/** Chunk was on web.js **/
/** chunk id: 208450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => W,
  o: () => Y
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

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./571654.js");
let Z = 512,
  V = (0, Chunk313201.hQ)(),
  F = c()(Chunk611004.Z.fetchMessages, 500);
class H extends Chunk647438.PureComponent {
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
      let e = (0, T.kG)(y.Sq(t)),
        r = O.g9(e, t);
      v.Z.updateAutocompleteQuery(n, e, r), null != this._editorRef && y.iE(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.PERFORM_SEARCH, this.search), Chunk585483.S.unsubscribe(Chunk981631.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), Chunk585483.S.unsubscribe(Chunk981631.CkL.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = (0, T.kG)(y.Sq(e)).filter(e => e.type !== f.ZP.NON_TOKEN_TYPE);
    return y.lv(t, e, P.ZP)
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
      placeholder: null != n ? n : U.intl.string(U.t["5h0QOD"]),
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? V : true,
      ariaLabel: U.intl.string(U.t["5h0QOD"]),
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
            className: o()(G.search, a, {
              [G.open]: u || c,
              [G.focused]: c
            }),
            children: (0, r.jsx)(d.tEY, {
              focusTarget: {
                current: null == (f = this._editorRef) ? true : f.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, r.jsxs)("div", {
                className: o()(G.searchBar, s),
                ref: this._searchBarRef,
                children: [this.renderInput(_), (0, r.jsx)(d.BK9, {
                  onClear: this.handleClearSearch,
                  hasContent: u || n,
                  className: G.icon,
                  isLoading: false
                })]
              }, (0, T.Tm)(e))
            })
          })
        })
      }
    })
  }
  constructor(e) {
    super(e), B(this, "state", {
      focused: false,
      selectedIndex: true
    }), B(this, "_editorRef", true), B(this, "_containerRef", i.createRef()), B(this, "_searchBarRef", i.createRef()), B(this, "_searchPopoutRef", i.createRef()), B(this, "handleSetSearchQuery", e => {
      let {
        query: t,
        anchor: n,
        focus: r,
        performSearch: i,
        replace: a
      } = e, {
        editorState: o
      } = this.props, s = y.Sq(o);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== s.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), a ? (o = y.c2(t, o), n = 0) : o = y.x0(t, o, n, r), o = y.Hl(o, Z), o = this.tokenize(o);
      let l = Number(n) + t.length;
      o = y.iK(l, o), this.setEditorState(o), i && this.search({
        queryString: y.Sq(o)
      })
    }), B(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute("aria-activedescendant", null != e ? "".concat(V, "-").concat(e) : true), this.setState({
        selectedIndex: e
      })
    }), B(this, "renderPopout", () => (0, r.jsx)(D.ZP, {
      ref: this._searchPopoutRef,
      searchContext: this.props.searchContext,
      navId: V,
      onSelectedIndexChanged: this.handleSelectedIndexChanged,
      className: this.props.searchPopoutClassName
    })), B(this, "search", e => {
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
        n = y.Sq(e)
      }
      if (!t) {
        let e = (0, T.kG)(n),
          t = (0, T.$G)(e);
        for (let t = 0; t < e.length; t++)(0, T.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(t).length) returnfalse;
        this.props.onSearch({
          queryString: n,
          query: t,
          searchEverywhere: null != r && r
        }), d.uvj.announce(U.intl.string(U.t.pKCxWF)), this.handleBlur(true)
      }
      returntrue
    }), B(this, "handleClearSearch", e => {
      let {
        editorState: t,
        searchContext: n
      } = this.props, {
        focused: r
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === y.Sq(t)) return void this.focusEditor();
      t = y.Hl(t, 0), this.setEditorState(t), (0, j.cy)({
        searchContext: n
      }), r || Promise.resolve().then(() => this.blurEditor())
    }), B(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) return void this.focusEditor();
      let n = E.Z.getChannelId(),
        r = m.Z.getChannel(n),
        i = S.Z.getCurrentConfig({
          location: "handleFocusSearch"
        }).enabled;
      if ((null == r ? true : r.isThread()) && !i && (r = m.Z.getChannel(null == r ? true : r.parent_id)), null == r) return void this.focusEditor();
      let {
        searchContext: a
      } = this.props, o = (0, C.ad)({
        location: "SearchBar_handleFocusSearch"
      }), s = a.type === k.aib.DMS && o;
      if (r.isPrivate() && !s) return void this.focusEditor();
      let l = (0, T.X3)(r);
      if (null == l) return void this.focusEditor();
      (0, j.PJ)({
        searchContext: a
      }), Promise.resolve().then(() => {
        let {
          _editorRef: e
        } = this;
        null == e || e.focus(), this.handleSetSearchQuery({
          query: P.ZP[k.dCx.FILTER_IN].key + "".concat(l, " "),
          replace: true
        })
      })
    }), B(this, "focusEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }), B(this, "blurEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.blur())
    }), B(this, "setEditorRef", e => {
      this._editorRef = e
    }), B(this, "onFocus", () => {
      let {
        searchContext: e,
        isSearchActive: t
      } = this.props;
      this.setState({
        focused: true
      }), t || (0, j.I1)({
        searchContext: e
      })
    }), B(this, "handleBlur", e => {
      let {
        searchContext: t,
        isSearchActive: n
      } = this.props;
      this.setState({
        focused: false
      }, () => {
        n || e || (0, j.IZ)({
          searchContext: t
        }), y.xb(this.props.editorState) && this.clearSearch()
      })
    }), B(this, "onBlur", e => {
      this.handleBlur()
    }), B(this, "handleOption", e => null != e && (false === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({
      searchAutocompleteSelectAction: M.ZW.KEY_PRESS
    }) : e.selectOption({
      searchAutocompleteSelectAction: M.ZW.KEY_PRESS
    }))), B(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      e.preventDefault();
      let {
        current: n
      } = this._searchPopoutRef;
      return this.handleOption(n) || ((0, T.X$)() && t ? this.search({
        searchEverywhere: true
      }) : this.search()), "handled"
    }), B(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return y.Sq(t).length >= Z || (t = y.x0(e, t), t = y.Hl(t, Z), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
        focused: true
      })), "handled"
    }), B(this, "handleKeyCommand", e => {
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
          return t = y.yd(e, t), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
            focused: true
          }), "handled";
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = y.Zn(e, t), t = this.tokenize(t), this.setEditorState(t), "handled";
        case "split-block":
        case "underline":
        case "bold":
        case "italic":
          return "handled"
      }
      return "not-handled"
    }), B(this, "handlePastedText", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = y.x0(e, t), t = y.Hl(t, Z), t = this.tokenize(t), n || this.setState({
        focused: true
      }), this.setEditorState(t), "handled"
    }), B(this, "setEditorState", e => {
      let {
        searchContext: t
      } = this.props;
      v.Z.setSearchState(t, e)
    }), B(this, "handleKeyBind", e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: r
      } = e, {
        editorState: i,
        searchContext: a,
        keyboardModeEnabled: o
      } = this.props;
      if (e.stopPropagation(), "Escape" === t) {
        if (e.preventDefault(), y.xb(i)) this.blurEditor();
        else {
          let e = y.FZ(i);
          v.Z.setSearchState(a, e), this.setState({
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
        if (o) return;
        return (0, _.Qj)(), true
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), i = r ? y.R8(i) : y.eE(i), this.setEditorState(i), true;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), i = r ? y.Wg(i) : y.NJ(i), this.setEditorState(i), true;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = y.FZ(i);
        return this.setEditorState(e), true
      }
      return y.q0(e)
    }), (0, T.WU)()
  }
}

function Y(e) {
  let {
    searchContext: t,
    className: n,
    searchBarContainerClassName: a,
    searchBarClassName: o,
    searchPopoutClassName: s,
    popoutAlignment: l
  } = e, c = (0, T.Tm)(t), f = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), _ = (0, u.e7)([L.Z], () => null != c ? L.Z.getEditorState(c) : null), h = i.useMemo(() => null != _ ? _ : y.nR(O.Jl(P.ZP)), [_]), {
    isSearching: E,
    isSearchActive: b,
    hasResults: v
  } = (0, u.cj)([I.Z], () => {
    let e = I.Z.getTotalCount(c);
    return {
      hasResults: null != e && e > 0,
      isSearching: I.Z.getIsFetching(c),
      isSearchActive: I.Z.hasSearchState(c)
    }
  }), S = i.useRef(b);
  i.useEffect(() => {
    S.current && !b && (S.current = false, (0, j.IZ)({
      searchContext: t
    })), !S.current && b && (S.current = true)
  }, [b, t]);
  let C = i.useCallback(e => {
      let {
        queryString: n,
        query: r,
        searchEverywhere: i
      } = e;
      R.ZP.refreshSearchQueryAnalyticsId(t), (0, j.tI)({
        searchContext: t,
        query: r,
        queryString: n
      }), t.type === k.aib.DMS ? w.Z.fetchCrossDMMessages({
        searchContext: t,
        selectedPageIndex: 0,
        queryString: n
      }) : F({
        searchContext: t,
        searchQuery: r,
        queryString: n,
        searchEverywhere: i,
        offset: 0,
        searchMode: k.QIO.NEWEST
      })
    }, [t]),
    D = (0, u.e7)([g.Z, m.Z], () => {
      let e = (0, T.b7)(t) ? t.guildId : null;
      if (null != e) {
        let t = g.Z.getGuild(e);
        return null == t ? null : t.name
      }
      let n = (0, T.AH)(t);
      if (null != n) {
        let e = m.Z.getChannel(n);
        return null == e ? null : (0, T.nl)(e)
      }
      return null
    }),
    x = (0, N.xd)({
      isXDMSearch: t.type === k.aib.DMS,
      location: "Search"
    }),
    M = (0, N.dB)({
      isXDMSearch: t.type === k.aib.DMS,
      location: "Search"
    }),
    B = x || M,
    Z = (0, A.$)({
      location: "Search"
    }),
    V = i.useMemo(() => t.type === k.aib.DMS ? U.intl.string(U.t.m7OrlZ) : Z ? U.intl.formatToPlainString(U.t.LDZtFB, {
      name: D
    }) : B ? (0, r.jsxs)(r.Fragment, {
      children: [U.intl.formatToPlainString(U.t.LDZtFB, {
        name: D
      }), (0, r.jsx)("span", {
        className: G.keybind,
        children: (0, r.jsx)(d.M2$, {
          shortcut: ["mod", "f"],
          className: G.shortcut
        })
      })]
    }) : U.intl.string(U.t["5h0QOD"]), [t.type, B, D, Z]);
  return (0, r.jsx)(H, {
    className: n,
    searchPopoutClassName: s,
    searchBarContainerClassName: a,
    searchBarClassName: o,
    searchContext: t,
    isSearching: E,
    editorState: h,
    hasResults: v,
    keyboardModeEnabled: f,
    onSearch: C,
    isSearchActive: b,
    placeholder: V,
    popoutAlignment: l
  })
}

function W(e) {
  let {
    className: t,
    guildId: n,
    channelId: i
  } = e, a = (0, x.H)({
    guildId: n,
    channelId: i
  });
  return null == a ? null : (0, r.jsx)(Y, {
    className: t,
    searchContext: a
  })
}
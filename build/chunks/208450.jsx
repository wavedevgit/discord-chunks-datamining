/** Chunk was on web.js **/
/** chunk id: 208450, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Y
}), require("./35282.js"), require("./704826.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399834 = require("./399834.js"),
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
  Chunk518944 = require("./518944.js"),
  Chunk607802 = require("./607802.js"),
  Chunk612806 = require("./612806.js"),
  Chunk945577 = require("./945577.js"),
  Chunk28964 = require("./28964.js"),
  Chunk971128 = require("./971128.js"),
  Chunk532428 = require("./532428.js"),
  Chunk611004 = require("./611004.js"),
  Chunk778177 = require("./778177.js"),
  Chunk165017 = require("./165017.js"),
  Chunk315322 = require("./315322.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk665333 = require("./665333.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require("./539658.js");
let B = 512,
  Z = (0, Chunk313201.hQ)(),
  F = c()(Chunk611004.Z.fetchMessages, 500);
class V extends Chunk73800.PureComponent {
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
      let e = (0, S.kG)(y.Sq(t)),
        r = O.g9(e, t);
      v.Z.updateAutocompleteQuery(n, e, r), null != this._editorRef && y.iE(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.PERFORM_SEARCH, this.search), Chunk585483.S.unsubscribe(Chunk981631.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), Chunk585483.S.unsubscribe(Chunk981631.CkL.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = (0, S.kG)(y.Sq(e)).filter(e => e.type !== f.ZP.NON_TOKEN_TYPE);
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
    return <s.Editor autoCorrect={"off"} ref={this.setEditorRef} onBlur={this.onBlur} onFocus={this.onFocus} handleReturn={this.handleReturn} handleBeforeInput={this.handleBeforeInput} handleKeyCommand={this.handleKeyCommand} handlePastedText={this.handlePastedText} handlePastedFiles={this.handlePastedFiles} handleDroppedFiles={this.handleDroppedFiles} handleDrop={this.handleDrop} keyBindingFn={this.handleKeyBind} placeholder={null != n ? n : j.intl.string(j.t["5h0QOD"])} editorState={t} onChange={this.setEditorState} role={"combobox"} ariaExpanded={e} ariaControls={e ? Z : true} ariaLabel={j.intl.string(j.t["5h0QOD"])} ariaAutoComplete={"list"} />
  }
  render() {
    let {
      searchContext: e,
      editorState: t,
      hasResults: n,
      className: i
    } = this.props, {
      focused: o
    } = this.state, s = Chunk72006.Sq(exports).length > 0;
    return <Chunk481060.yRy targetElementRef={this._containerRef} renderPopout={this.renderPopout} position={"bottom"} animation={Chunk481060.yRy.Animation.NONE} shouldShow={Chunk120356} autoInvert={false}>{(t, l) => {
        var c;
        let {
          isShown: u
        } = l;
        return (0, r.jsx)("div", {
          className: i,
          ref: this._containerRef,
          children: (0, r.jsx)("div", {
            className: a()(U.search, {
              [U.open]: s || o,
              [U.focused]: o
            }),
            children: (0, r.jsx)(d.tEY, {
              focusTarget: {
                current: null == (c = this._editorRef) ? true : c.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, r.jsxs)("div", {
                className: U.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(u), (0, r.jsx)(d.BK9, {
                  onClear: this.handleClearSearch,
                  hasContent: s || n,
                  className: U.icon,
                  isLoading: false
                })]
              }, (0, S.Tm)(e))
            })
          })
        })
      }}</Chunk481060.yRy>
  }
  constructor(e) {
    super(e), G(this, "state", {
      focused: false,
      selectedIndex: true
    }), G(this, "_editorRef", true), G(this, "_containerRef", i.createRef()), G(this, "_searchBarRef", i.createRef()), G(this, "_searchPopoutRef", i.createRef()), G(this, "handleSetSearchQuery", e => {
      let {
        query: t,
        anchor: n,
        focus: r,
        performSearch: i,
        replace: o
      } = e, {
        editorState: a
      } = this.props, s = y.Sq(a);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== s.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), o ? (a = y.c2(t, a), n = 0) : a = y.x0(t, a, n, r), a = y.Hl(a, B), a = this.tokenize(a);
      let l = Number(n) + t.length;
      a = y.iK(l, a), this.setEditorState(a), i && this.search({
        queryString: y.Sq(a)
      })
    }), G(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute("aria-activedescendant", null != e ? "".concat(Z, "-").concat(e) : true), this.setState({
        selectedIndex: e
      })
    }), G(this, "renderPopout", () => <D.ZP ref={this._searchPopoutRef} searchContext={this.props.searchContext} navId={Z} onSelectedIndexChanged={this.handleSelectedIndexChanged} />), G(this, "search", e => {
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
        let e = (0, S.kG)(n),
          t = (0, S.$G)(e);
        for (let t = 0; t < e.length; t++)(0, S.Fr)(e[t], e[t + 1]) || (n = n.substring(0, e[t].start) + n.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(t).length) returnfalse;
        this.props.onSearch({
          queryString: n,
          query: t,
          searchEverywhere: null != r && r
        }), d.uvj.announce(j.intl.string(j.t.pKCxWF)), this.handleBlur(true)
      }
      returntrue
    }), G(this, "handleClearSearch", e => {
      let {
        editorState: t,
        searchContext: n
      } = this.props, {
        focused: r
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === y.Sq(t)) return void this.focusEditor();
      t = y.Hl(t, 0), this.setEditorState(t), (0, x.cy)({
        searchContext: n
      }), r || Promise.resolve().then(() => this.blurEditor())
    }), G(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) return void this.focusEditor();
      let n = E.Z.getChannelId(),
        r = m.Z.getChannel(n),
        i = A.Z.getCurrentConfig({
          location: "handleFocusSearch"
        }).enabled;
      if ((null == r ? true : r.isThread()) && !i && (r = m.Z.getChannel(null == r ? true : r.parent_id)), null == r) return void this.focusEditor();
      let {
        searchContext: o
      } = this.props, a = (0, N.ad)({
        location: "SearchBar_handleFocusSearch"
      }), s = o.type === k.aib.DMS && a;
      if (r.isPrivate() && !s) return void this.focusEditor();
      let l = (0, S.X3)(r);
      if (null == l) return void this.focusEditor();
      (0, x.PJ)({
        searchContext: o
      }), Promise.resolve().then(() => {
        let {
          _editorRef: e
        } = this;
        null == e || e.focus(), this.handleSetSearchQuery({
          query: P.ZP[k.dCx.FILTER_IN].key + "".concat(l, " "),
          replace: true
        })
      })
    }), G(this, "focusEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }), G(this, "blurEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.blur())
    }), G(this, "setEditorRef", e => {
      this._editorRef = e
    }), G(this, "onFocus", () => {
      let {
        searchContext: e,
        isSearchActive: t
      } = this.props;
      this.setState({
        focused: true
      }), t || (0, x.I1)({
        searchContext: e
      })
    }), G(this, "handleBlur", e => {
      let {
        searchContext: t,
        isSearchActive: n
      } = this.props;
      this.setState({
        focused: false
      }, () => {
        n || e || (0, x.IZ)({
          searchContext: t
        }), y.xb(this.props.editorState) && this.clearSearch()
      })
    }), G(this, "onBlur", e => {
      this.handleBlur()
    }), G(this, "handleOption", e => null != e && (false === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel({
      searchAutocompleteSelectAction: M.ZW.KEY_PRESS
    }) : e.selectOption({
      searchAutocompleteSelectAction: M.ZW.KEY_PRESS
    }))), G(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      e.preventDefault();
      let {
        current: n
      } = this._searchPopoutRef;
      return this.handleOption(n) || ((0, S.X$)() && t ? this.search({
        searchEverywhere: true
      }) : this.search()), "handled"
    }), G(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return y.Sq(t).length >= B || (t = y.x0(e, t), t = y.Hl(t, B), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
        focused: true
      })), "handled"
    }), G(this, "handleKeyCommand", e => {
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
    }), G(this, "handlePastedText", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = y.x0(e, t), t = y.Hl(t, B), t = this.tokenize(t), n || this.setState({
        focused: true
      }), this.setEditorState(t), "handled"
    }), G(this, "setEditorState", e => {
      let {
        searchContext: t
      } = this.props;
      v.Z.setSearchState(t, e)
    }), G(this, "handleKeyBind", e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: r
      } = e, {
        editorState: i,
        searchContext: o,
        keyboardModeEnabled: a
      } = this.props;
      if (e.stopPropagation(), "Escape" === t) {
        if (e.preventDefault(), y.xb(i)) this.blurEditor();
        else {
          let e = y.FZ(i);
          v.Z.setSearchState(o, e), this.setState({
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
        return (0, _.Qj)(), true
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), i = r ? y.R8(i) : y.eE(i), this.setEditorState(i), true;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), i = r ? y.Wg(i) : y.NJ(i), this.setEditorState(i), true;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = y.FZ(i);
        return this.setEditorState(e), true
      }
      return y.q0(e)
    }), (0, S.WU)()
  }
}

function H(e) {
  let {
    className: t,
    searchContext: n
  } = e, o = (0, S.Tm)(n), a = (0, u.e7)([p.Z], () => p.Z.keyboardModeEnabled), s = (0, u.e7)([T.Z], () => null != o ? T.Z.getEditorState(o) : null), l = i.useMemo(() => null != s ? s : y.nR(O.Jl(P.ZP)), [s]), {
    isSearching: c,
    isSearchActive: f,
    hasResults: _
  } = (0, u.cj)([I.Z], () => {
    let e = I.Z.getTotalCount(o);
    return {
      hasResults: null != e && e > 0,
      isSearching: I.Z.getIsFetching(o),
      isSearchActive: I.Z.hasSearchState(o)
    }
  }), h = i.useRef(f);
  i.useEffect(() => {
    h.current && !f && (h.current = false, (0, x.IZ)({
      searchContext: n
    })), !h.current && f && (h.current = true)
  }, [f, n]);
  let E = i.useCallback(e => {
      let {
        queryString: t,
        query: r,
        searchEverywhere: i
      } = e;
      R.ZP.refreshSearchQueryAnalyticsId(n), (0, x.tI)({
        searchContext: n,
        query: r,
        queryString: t
      }), n.type === k.aib.DMS ? w.Z.fetchCrossDMMessages({
        searchContext: n,
        selectedPageIndex: 0,
        queryString: t
      }) : F({
        searchContext: n,
        searchQuery: r,
        queryString: t,
        searchEverywhere: i,
        offset: 0,
        searchMode: k.QIO.NEWEST
      })
    }, [n]),
    b = (0, u.e7)([g.Z, m.Z], () => {
      let e = (0, S.b7)(n) ? n.guildId : null;
      if (null != e) {
        let t = g.Z.getGuild(e);
        return null == t ? null : t.name
      }
      let t = (0, S.AH)(n);
      if (null != t) {
        let e = m.Z.getChannel(t);
        return null == e ? null : (0, S.nl)(e)
      }
      return null
    }),
    v = (0, C.xd)({
      isXDMSearch: false,
      location: "Search"
    }),
    A = (0, C.dB)({
      isXDMSearch: false,
      location: "Search"
    }),
    N = v || A,
    D = i.useMemo(() => n.type === k.aib.DMS ? j.intl.string(j.t.m7OrlZ) : N ? <r.Fragment>{j.intl.formatToPlainString(j.t.LDZtFB, {
        name: b
      })}{<span className={U.keybind}><d.M2$ shortcut={["mod", "f"]} className={U.shortcut} /></span>}</r.Fragment> : j.intl.string(j.t["5h0QOD"]), [n.type, N, b]);
  return <V className={t} searchContext={n} isSearching={c} editorState={l} hasResults={_} keyboardModeEnabled={a} onSearch={E} isSearchActive={f} placeholder={D} />
}

function Y(e) {
  let {
    className: t,
    guildId: n,
    channelId: i
  } = e, o = (0, L.H)({
    guildId: n,
    channelId: i
  });
  return null == o ? null : <H className={t} searchContext={o} />
}
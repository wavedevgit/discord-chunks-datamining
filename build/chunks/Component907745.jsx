/** Chunk was on 52199 **/
/** chunk id: 907745, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => Q,
  E2: () => G
}), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk271830 = require("./271830.js"),
  Chunk985623 = require("./985623.js"),
  c = require.n(Chunk985623),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk988665 = require("./988665.js"),
  Chunk955572 = require("./955572.js"),
  Chunk775602 = require("./775602.js"),
  Chunk915089 = require("./915089.js"),
  Chunk138298 = require("./138298.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk203982 = require("./203982.js"),
  Chunk504531 = require("./504531.js"),
  Chunk614690 = require("./614690.js"),
  Chunk256796 = require("./256796.js"),
  Chunk517381 = require("./517381.js"),
  Chunk822382 = require("./822382.js"),
  Chunk768278 = require("./768278.js"),
  Chunk408730 = require("./408730.js"),
  Chunk771650 = require("./771650.js"),
  Chunk616252 = require("./616252.js"),
  Chunk753806 = require("./753806.jsx"),
  Chunk775427 = require("./775427.js"),
  Chunk65600 = require("./65600.js"),
  Chunk145331 = require("./145331.js"),
  Chunk19801 = require("./19801.jsx"),
  Chunk768570 = require("./768570.js"),
  Chunk921242 = require("./921242.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk607205 = require("./607205.js");

function U(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
let G = 512,
  K = (0, Chunk915089.Ld)(),
  z = c()(Chunk753806.A.fetchMessages, 500);
class q extends Chunk64700.PureComponent {
  componentDidMount() {
    b._.subscribe(W.jej.PERFORM_SEARCH, this.search), b._.subscribe(W.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery), b._.subscribe(W.jej.FOCUS_SEARCH, this.handleFocusSearch)
  }
  componentDidUpdate(e) {
    let {
      editorState: t,
      searchContext: r
    } = this.props;
    if (r !== e.searchContext && I.A.initializeAutocomplete(r), t !== e.editorState) {
      let e = m.pe(t),
        n = (0, v._o)(m.pe(t)),
        l = O.zZ(n, t);
      I.A.updateAutocompleteQuery({
        searchContext: r,
        tokens: n,
        cursorScope: l,
        queryString: e
      }), null != this._editorRef && m.L9(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    var e, t, r;
    b._.unsubscribe(W.jej.PERFORM_SEARCH, this.search), b._.unsubscribe(W.jej.SET_SEARCH_QUERY, this.handleSetSearchQuery), b._.unsubscribe(W.jej.FOCUS_SEARCH, this.handleFocusSearch), null == (r = this._editorRef) || null == (t = r.editor) || null == (e = t.removeEventListener) || e.call(t, "cut", this.handleCutEvent)
  }
  tokenize(e) {
    let t = (0, v._o)(m.pe(e)).filter(e => e.type !== h.Ay.NON_TOKEN_TYPE);
    return m.uD(t, e, j.Ay)
  }
  clearSearch() {
    let {
      searchContext: e
    } = this.props;
    N.A.cleanUpSearchState(e)
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
      placeholder: r
    } = this.props;
    return (0, n.jsx)(i.Editor, {
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
      placeholder: null != r ? r : M.intl.string(M.t["5h0QOP"]),
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? K : true,
      ariaLabel: M.intl.string(M.t["5h0QOP"]),
      ariaAutoComplete: "list"
    })
  }
  render() {
    let {
      searchContext: e,
      editorState: t,
      hasResults: r,
      className: l
    } = this.props, {
      focused: s
    } = this.state, i = m.pe(t).length > 0;
    return (0, n.jsx)(d.YNO, {
      targetElementRef: this._containerRef,
      renderPopout: this.renderPopout,
      position: "bottom",
      animation: d.YNO.Animation.NONE,
      shouldShow: s,
      autoInvert: false,
      children: (t, o) => {
        var c;
        let {
          isShown: u
        } = o;
        return (0, n.jsx)("div", {
          className: l,
          ref: this._containerRef,
          children: (0, n.jsx)("div", {
            className: a()(H.$P, {
              [H.ho]: i || s,
              [H.in]: s
            }),
            children: (0, n.jsx)(d.vN3, {
              focusTarget: {
                current: null == (c = this._editorRef) ? true : c.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, n.jsxs)("div", {
                className: H.ON,
                ref: this._searchBarRef,
                children: [this.renderInput(u), (0, n.jsx)(d.BT5, {
                  onClear: this.handleClearSearch,
                  hasContent: i || r,
                  className: H.Kk,
                  isLoading: false
                })]
              }, (0, v.bS)(e))
            })
          })
        })
      }
    })
  }
  constructor(e) {
    super(e), U(this, "state", {
      focused: false,
      selectedIndex: true
    }), U(this, "_editorRef", true), U(this, "_containerRef", l.createRef()), U(this, "_searchBarRef", l.createRef()), U(this, "_searchPopoutRef", l.createRef()), U(this, "handleCutEvent", e => {
      if (e.preventDefault(), null == e.clipboardData) return;
      let {
        editorState: t
      } = this.props, r = t.getSelection();
      if (r.isCollapsed()) return;
      let n = m.pe(t),
        l = r.getStartOffset(),
        s = r.getEndOffset(),
        a = n.substring(l, s);
      e.clipboardData.setData("text/plain", a);
      let i = m.vE("delete", t);
      i = this.tokenize(i), this.setEditorState(i)
    }), U(this, "handleSetSearchQuery", e => {
      let {
        query: t,
        anchor: r,
        focus: n,
        performSearch: l,
        replace: s,
        searchQuerySource: a
      } = e, {
        editorState: i
      } = this.props, o = m.pe(i);
      " " !== t.charAt(t.length - 1) && (t += " "), null != r && 0 !== r && " " !== o.charAt(r - 1) && " " !== t.charAt(0) && (t = " " + t), s ? (i = m.t7(t, i), r = 0) : i = m.le(t, i, r, n), i = m.a4(i, G), i = this.tokenize(i);
      let c = Number(r) + t.length;
      i = m.UO(c, i), this.setEditorState(i), l && this.search({
        queryString: m.pe(i),
        searchQuerySource: a
      })
    }), U(this, "handleSelectedIndexChanged", e => {
      var t, r;
      null == (r = this._editorRef) || null == (t = r.editor) || t.setAttribute("aria-activedescendant", null != e ? "".concat(K, "-").concat(e) : true), this.setState({
        selectedIndex: e
      })
    }), U(this, "renderPopout", () => (0, n.jsx)(F.A, {
      ref: this._searchPopoutRef,
      searchContext: this.props.searchContext,
      navId: K,
      onSelectedIndexChanged: this.handleSelectedIndexChanged
    })), U(this, "search", e => {
      let {
        isSearching: t
      } = this.props, {
        queryString: r,
        searchEverywhere: n,
        searchQuerySource: l
      } = null != e ? e : {};
      if (null == r || "" === r) {
        let {
          editorState: e
        } = this.props;
        r = m.pe(e)
      }
      if (!t) {
        let e = (0, v._o)(r),
          t = (0, v.Zf)(e);
        for (let t = 0; t < e.length; t++)(0, v.Zh)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(t).length) returnfalse;
        this.props.onSearch({
          queryString: r,
          query: t,
          searchEverywhere: null != n && n,
          searchQuerySource: l
        }), d.ORC.announce(M.intl.string(M.t.pKCxWP)), this.handleBlur()
      }
      returntrue
    }), U(this, "handleClearSearch", e => {
      let {
        editorState: t,
        searchContext: r
      } = this.props, {
        focused: n
      } = this.state;
      (e.preventDefault(), e.stopPropagation(), "" === m.pe(t)) ? this.focusEditor(): (t = m.a4(t, 0), this.setEditorState(t), (0, w.iK)({
        searchContext: r
      }), n || Promise.resolve().then(() => this.blurEditor()))
    }), U(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) return void this.focusEditor();
      let r = S.A.getChannelId(),
        n = A.A.getChannel(r),
        l = T.A.getCurrentConfig({
          location: "handleFocusSearch"
        }).enabled;
      if ((null == n ? true : n.isThread()) && !l && (n = A.A.getChannel(null == n ? true : n.parent_id)), null == n) return void this.focusEditor();
      let {
        searchContext: s
      } = this.props;
      if (n.isPrivate() && s.type !== W.I4_.DMS) return void this.focusEditor();
      let a = (0, v.Rt)(n);
      null == a ? this.focusEditor() : ((0, w.Tf)({
        searchContext: s
      }), Promise.resolve().then(() => {
        let {
          _editorRef: e
        } = this;
        null == e || e.focus(), this.handleSetSearchQuery({
          query: j.Ay[W.LWr.FILTER_IN].key + "".concat(a, " "),
          replace: true,
          searchQuerySource: k.Q_.SEARCH_TEXT_INPUT
        })
      }))
    }), U(this, "focusEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.focus())
    }), U(this, "blurEditor", () => {
      let {
        _editorRef: e
      } = this;
      null != e && Promise.resolve().then(() => e.blur())
    }), U(this, "setEditorRef", e => {
      var t, r, n, l, s, a;
      null == (r = this._editorRef) || null == (t = r.editor) || t.removeEventListener("cut", this.handleCutEvent), this._editorRef = e, null == (l = this._editorRef) || null == (n = l.editor) || n.setAttribute("aria-haspopup", "listbox"), null == (a = this._editorRef) || null == (s = a.editor) || s.addEventListener("cut", this.handleCutEvent)
    }), U(this, "onFocus", () => {
      let {
        searchContext: e
      } = this.props;
      this.setState({
        focused: true
      }), x.A.setFocused(e, true)
    }), U(this, "handleBlur", () => {
      let {
        searchContext: e
      } = this.props;
      x.A.setFocused(e, false), this.setState({
        focused: false
      }, () => {
        m.Im(this.props.editorState) && this.clearSearch()
      })
    }), U(this, "onBlur", e => {
      this.handleBlur()
    }), U(this, "handleOption", () => {
      let {
        current: e
      } = this._searchPopoutRef;
      return null != e && e.selectOption({
        searchAutocompleteSelectAction: k.oi.KEY_PRESS
      })
    }), U(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      return e.preventDefault(), this.handleOption() || ((0, v.Eq)() && t ? this.search({
        searchEverywhere: true,
        searchQuerySource: k.Q_.SEARCH_TEXT_INPUT
      }) : this.search({
        searchQuerySource: k.Q_.SEARCH_TEXT_INPUT
      })), "handled"
    }), U(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: r
      } = this.state;
      return m.pe(t).length >= G || (t = m.le(e, t), t = m.a4(t, G), t = this.tokenize(t), this.setEditorState(t), r || this.setState({
        focused: true
      })), "handled"
    }), U(this, "handleKeyCommand", e => {
      let {
        editorState: t
      } = this.props, {
        focused: r
      } = this.state;
      switch (e) {
        case "backspace":
        case "backspace-word":
        case "backspace-to-start-of-line":
        case "delete":
        case "delete-word":
          return t = m.vE(e, t), t = this.tokenize(t), this.setEditorState(t), r || this.setState({
            focused: true
          }), "handled";
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = m.ON(e, t), t = this.tokenize(t), this.setEditorState(t), "handled";
        case "split-block":
        case "underline":
        case "bold":
        case "italic":
          return "handled"
      }
      return "not-handled"
    }), U(this, "handlePastedText", e => {
      let {
        editorState: t
      } = this.props, {
        focused: r
      } = this.state;
      return e = null != e ? e.replace(/\n/g, "") : "", t = m.le(e, t), t = m.a4(t, G), t = this.tokenize(t), r || this.setState({
        focused: true
      }), this.setEditorState(t), "handled"
    }), U(this, "setEditorState", e => {
      let {
        searchContext: t
      } = this.props;
      L.A.updateSearchEditorState(t, e)
    }), U(this, "getPopoutRef", () => {
      let {
        current: e
      } = this._searchPopoutRef;
      return e
    }), U(this, "handleKeyBind", e => {
      let {
        key: t,
        metaKey: r,
        shiftKey: n,
        ctrlKey: l
      } = e, {
        editorState: s,
        searchContext: a,
        keyboardModeEnabled: i
      } = this.props;
      if (e.stopPropagation(), (r || l) && "a" === t.toLowerCase()) {
        e.preventDefault();
        let t = m.y8(s);
        return this.setEditorState(t), this.setState({
          focused: true
        }), true
      }
      if ("Escape" === t) {
        if (e.preventDefault(), m.Im(s)) this.blurEditor();
        else {
          let e = m.Xq(s);
          L.A.updateSearchEditorState(a, e), this.setState({
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
        if (i) return;
        return (0, p.uS)(), true
      }
      if ("Home" === t || "ArrowLeft" === t && r) return e.preventDefault(), s = n ? m.mQ(s) : m.aB(s), this.setEditorState(s), true;
      if ("End" === t || "ArrowRight" === t && r) return e.preventDefault(), s = n ? m.Le(s) : m.Tj(s), this.setEditorState(s), true;
      if (("Delete" === t || "Backspace" === t) && r) {
        let e = m.Xq(s);
        return this.setEditorState(e), true
      }
      return m.K6(e)
    }), (0, v.Pe)()
  }
}

function B(e) {
  let {
    searchContext: t,
    className: r
  } = e, s = (0, v.bS)(t), a = (0, u.bG)([f.A], () => f.A.keyboardModeEnabled), i = (0, u.bG)([P.A], () => P.A.getEditorState(s));
  l.useEffect(() => (_.A.setSelectedSearchContext(s), () => {
    _.A.setSelectedSearchContext(null)
  }), [s]);
  let o = (0, u.bG)([P.A], () => P.A.getIsSearchTokensInitialized()),
    c = l.useRef(o);
  l.useEffect(() => {
    o && c.current !== o && (c.current = o, N.A.ensureSearchInputDecorators(t))
  }, [o, t]);
  let h = l.useMemo(() => null != i ? i : m.e_(O.ys(j.Ay)), [i]),
    {
      isSearching: p,
      hasResults: g
    } = (0, u.cf)([R.A], () => {
      let e = R.A.getTotalCount(s);
      return {
        hasResults: null != e && e > 0,
        isSearching: R.A.getIsFetching(s)
      }
    }),
    b = (0, u.bG)([E.Ay, S.A, A.A], () => {
      let e = S.A.getCurrentlySelectedChannelId(),
        t = A.A.getChannel(e);
      return E.Ay.getSection(e, null == t ? true : t.isDM()) === W.YvQ.SEARCH
    });
  l.useEffect(() => {
    x.A.setSidebarOpen(t, b)
  }, [t, b]);
  let I = (0, d.Ry6)(D.b);
  l.useEffect(() => {
    x.A.setFiltersModalOpen(t, I)
  }, [t, I]);
  let T = l.useCallback(e => {
      let {
        queryString: r,
        query: n,
        searchEverywhere: l,
        searchQuerySource: s
      } = e;
      x.A.refreshQueryId(t), (0, w.fd)({
        searchContext: t,
        query: n,
        queryString: r,
        searchQuerySource: s
      }), L.A.updateSearchMode(t, W.BBH.NEWEST), z({
        searchContext: t,
        searchQueryString: r,
        searchEverywhere: l,
        offset: 0
      })
    }, [t]),
    C = (0, u.bG)([y.A, A.A], () => {
      let e = (0, v._B)(t) ? t.guildId : null;
      if (null != e) {
        let t = y.A.getGuild(e);
        return null == t ? null : t.name
      }
      let r = (0, v._b)(t);
      if (null != r) {
        let e = A.A.getChannel(r);
        return null == e ? null : (0, v.E3)(e)
      }
      return null
    }),
    F = l.useMemo(() => {
      switch (t.type) {
        case W.I4_.DMS:
          return M.intl.string(M.t.m7OrlR);
        case W.I4_.FAVORITES:
          return M.intl.string(M.t["5h0QOP"]);
        default:
          return M.intl.formatToPlainString(M.t.LDZtFO, {
            name: C
          })
      }
    }, [t.type, C]);
  return (0, n.jsx)(q, {
    className: r,
    searchContext: t,
    isSearching: p,
    editorState: h,
    hasResults: g,
    keyboardModeEnabled: a,
    onSearch: T,
    placeholder: F
  })
}

function Q(e) {
  let {
    className: t,
    guildId: r,
    channelId: l
  } = e, s = (0, C.J)({
    guildId: r,
    channelId: l
  });
  return null == s ? null : (0, n.jsx)(B, {
    className: t,
    searchContext: s
  })
}
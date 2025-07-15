/** Chunk was on 36512 **/
n.d(t, {
  Z: () => G
}), n(35282), n(704826);
var r = n(255367),
  l = n(73800),
  s = n(120356),
  a = n.n(s),
  i = n(399834),
  o = n(299608),
  c = n.n(o),
  u = n(442837),
  d = n(481060),
  h = n(603263),
  p = n(349033),
  f = n(999650),
  g = n(857595),
  m = n(607070),
  S = n(313201),
  y = n(977885),
  b = n(778877),
  x = n(903488),
  _ = n(592125),
  v = n(768119),
  O = n(944486),
  E = n(585483),
  j = n(72006),
  C = n(405656),
  I = n(181389),
  P = n(854709),
  R = n(652399),
  T = n(861262),
  N = n(611004),
  w = n(778177),
  k = n(981631),
  A = n(388032),
  Z = n(665333);

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n(539658);
let M = (0, S.hQ)(),
  L = c()(h.yC, 500);
class D extends l.PureComponent {
  componentDidMount() {
    var e, t;
    E.S.subscribe(k.CkL.PERFORM_SEARCH, this.search), E.S.subscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), E.S.subscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch), null == (t = this._editorRef) || null == (e = t.editor) || e.setAttribute("aria-haspopup", "listbox")
  }
  componentDidUpdate(e) {
    let {
      editorState: t,
      searchId: n
    } = this.props;
    if (t !== e.editorState) {
      let e = (0, C.kG)(j.Sq(t)),
        r = I.g9(e, t);
      h.u$(n, e, r), null != this._editorRef && j.iE(this._editorRef.editor)
    }
  }
  componentWillUnmount() {
    E.S.unsubscribe(k.CkL.PERFORM_SEARCH, this.search), E.S.unsubscribe(k.CkL.SET_SEARCH_QUERY, this.handleSetSearchQuery), E.S.unsubscribe(k.CkL.FOCUS_SEARCH, this.handleFocusSearch)
  }
  tokenize(e) {
    let t = (0, C.kG)(j.Sq(e)).filter(e => e.type !== p.ZP.NON_TOKEN_TYPE);
    return j.lv(t, e, f.ZP)
  }
  clearSearch() {
    let {
      searchId: e
    } = this.props;
    null != e && (h.qt(e), y.Z.clearSearchState(e))
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
      placeholder: null != n ? n : A.intl.string(A.t["5h0QOD"]),
      editorState: t,
      onChange: this.setEditorState,
      role: "combobox",
      ariaExpanded: e,
      ariaControls: e ? M : void 0,
      ariaLabel: A.intl.string(A.t["5h0QOD"]),
      ariaAutoComplete: "list"
    })
  }
  render() {
    let {
      searchId: e,
      editorState: t,
      hasResults: n,
      className: l
    } = this.props, {
      focused: s
    } = this.state, i = j.Sq(t).length > 0;
    return null == e ? null : (0, r.jsx)(d.yRy, {
      targetElementRef: this._containerRef,
      renderPopout: this.renderPopout,
      position: "bottom",
      animation: d.yRy.Animation.NONE,
      shouldShow: s,
      autoInvert: !1,
      children: (t, o) => {
        var c;
        let {
          isShown: u
        } = o;
        return (0, r.jsx)("div", {
          className: l,
          ref: this._containerRef,
          children: (0, r.jsx)("div", {
            className: a()(Z.search, {
              [Z.open]: i || s,
              [Z.focused]: s
            }),
            children: (0, r.jsx)(d.tEY, {
              focusTarget: {
                current: null == (c = this._editorRef) ? void 0 : c.editor
              },
              ringTarget: this._searchBarRef,
              children: (0, r.jsxs)("div", {
                className: Z.searchBar,
                ref: this._searchBarRef,
                children: [this.renderInput(u), (0, r.jsx)(d.BK9, {
                  onClear: this.handleClearSearch,
                  hasContent: i || n,
                  className: Z.icon,
                  isLoading: !1
                })]
              }, e)
            })
          })
        })
      }
    })
  }
  constructor(e) {
    super(e), F(this, "state", {
      focused: !1,
      selectedIndex: void 0
    }), F(this, "_editorRef", void 0), F(this, "_containerRef", l.createRef()), F(this, "_searchBarRef", l.createRef()), F(this, "_searchPopoutRef", l.createRef()), F(this, "handleSetSearchQuery", e => {
      let {
        query: t,
        anchor: n,
        focus: r,
        performSearch: l,
        replace: s
      } = e, {
        editorState: a
      } = this.props, i = j.Sq(a);
      " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== i.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), s ? (a = j.c2(t, a), n = 0) : a = j.x0(t, a, n, r), a = j.Hl(a, 512), a = this.tokenize(a);
      let o = Number(n) + t.length;
      a = j.iK(o, a), this.setEditorState(a), l && this.search({
        queryString: j.Sq(a)
      })
    }), F(this, "handleSelectedIndexChanged", e => {
      var t, n;
      null == (n = this._editorRef) || null == (t = n.editor) || t.setAttribute("aria-activedescendant", null != e ? "".concat(M, "-").concat(e) : void 0), this.setState({
        selectedIndex: e
      })
    }), F(this, "renderPopout", () => (0, r.jsx)(w.ZP, {
      ref: this._searchPopoutRef,
      navId: M,
      onSelectedIndexChanged: this.handleSelectedIndexChanged
    })), F(this, "search", e => {
      let {
        searchId: t,
        isSearching: n
      } = this.props, {
        queryString: r,
        searchEverywhere: l
      } = null != e ? e : {};
      if (null == r || "" === r) {
        let {
          editorState: e
        } = this.props;
        r = j.Sq(e)
      }
      if (null != t && !n) {
        let e = (0, C.kG)(r),
          t = (0, C.$G)(e);
        for (let t = 0; t < e.length; t++)(0, C.Fr)(e[t], e[t + 1]) || (r = r.substring(0, e[t].start) + r.substring(e[t].end));
        if (0 === e.length || 0 === Object.keys(t).length) return !1;
        this.props.onSearch({
          queryString: r,
          query: t,
          searchEverywhere: null != l && l
        }), d.uvj.announce(A.intl.string(A.t.pKCxWF)), this.handleBlur(!0)
      }
      return !0
    }), F(this, "handleClearSearch", e => {
      let {
        editorState: t,
        searchId: n,
        searchType: r
      } = this.props, {
        focused: l
      } = this.state;
      if (e.preventDefault(), e.stopPropagation(), "" === j.Sq(t)) return void this.focusEditor();
      t = j.Hl(t, 0), this.setEditorState(t), null != n && (0, R.cy)({
        searchType: r,
        searchId: n
      }), l || Promise.resolve().then(() => this.blurEditor())
    }), F(this, "handleFocusSearch", e => {
      let {
        prefillCurrentChannel: t
      } = e;
      if (!t) return void this.focusEditor();
      let n = O.Z.getChannelId(),
        r = _.Z.getChannel(n);
      if ((null == r ? void 0 : r.isThread()) && (r = _.Z.getChannel(null == r ? void 0 : r.parent_id)), null == r) return void this.focusEditor();
      let {
        searchId: l,
        searchType: s
      } = this.props, a = (0, b.a)({
        location: "SearchBar_handleFocusSearch"
      }), i = this.props.searchId === k.aib.DMS && a;
      if (r.isPrivate() && !i) return void this.focusEditor();
      let o = (0, C.X3)(r);
      if (null == o) return void this.focusEditor();
      (0, R.PJ)({
        searchType: s,
        searchId: l
      }), Promise.resolve().then(() => {
        let {
          _editorRef: e
        } = this;
        null == e || e.focus(), this.handleSetSearchQuery({
          query: f.ZP[k.dCx.FILTER_IN].key + "".concat(o, " "),
          replace: !0
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
      this._editorRef = e
    }), F(this, "onFocus", () => {
      let {
        searchId: e,
        searchType: t,
        isSearchActive: n
      } = this.props;
      this.setState({
        focused: !0
      }), null == e || n || (0, R.I1)({
        searchId: e,
        searchType: t
      })
    }), F(this, "handleBlur", e => {
      let {
        searchId: t,
        searchType: n,
        isSearchActive: r
      } = this.props;
      this.setState({
        focused: !1
      }, () => {
        null == t || r || e || (0, R.IZ)({
          searchId: t,
          searchType: n
        }), j.xb(this.props.editorState) && this.clearSearch()
      })
    }), F(this, "onBlur", e => {
      this.handleBlur()
    }), F(this, "handleOption", e => null != e && (-1 === e.state.selectedIndex && e.shouldShowSearchInSelectedChannel() ? e.handleSearchInChannel() : e.selectOption())), F(this, "handleReturn", e => {
      let {
        shiftKey: t
      } = e;
      e.preventDefault();
      let {
        current: n
      } = this._searchPopoutRef;
      return this.handleOption(n) || ((0, P.X)() && t ? this.search({
        searchEverywhere: !0
      }) : this.search()), "handled"
    }), F(this, "handleBeforeInput", e => {
      let {
        editorState: t
      } = this.props, {
        focused: n
      } = this.state;
      return j.Sq(t).length >= 512 || (t = j.x0(e, t), t = j.Hl(t, 512), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
        focused: !0
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
          return t = j.yd(e, t), t = this.tokenize(t), this.setEditorState(t), n || this.setState({
            focused: !0
          }), "handled";
        case "transpose-characters":
        case "move-selection-to-start-of-block":
        case "move-selection-to-end-of-block":
          return t = j.Zn(e, t), t = this.tokenize(t), this.setEditorState(t), "handled";
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
      return e = null != e ? e.replace(/\n/g, "") : "", t = j.x0(e, t), t = j.Hl(t, 512), t = this.tokenize(t), n || this.setState({
        focused: !0
      }), this.setEditorState(t), "handled"
    }), F(this, "setEditorState", e => {
      let {
        searchId: t
      } = this.props;
      h.j8(t, e)
    }), F(this, "handleKeyBind", e => {
      let {
        key: t,
        metaKey: n,
        shiftKey: r
      } = e, {
        editorState: l,
        searchId: s,
        keyboardModeEnabled: a
      } = this.props;
      if (e.stopPropagation(), "Escape" === t) {
        if (e.preventDefault(), j.xb(l)) this.blurEditor();
        else {
          let e = j.FZ(l);
          h.j8(s, e), this.setState({
            focused: !0
          })
        }
        return !0
      }
      if ("ArrowUp" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusPreviousOption(), !0
      }
      if ("ArrowDown" === t) {
        e.preventDefault();
        let {
          current: t
        } = this._searchPopoutRef;
        return null != t && t.focusNextOption(), !0
      }
      if ("Tab" === t) {
        if (a) return;
        return (0, g.Qj)(), !0
      }
      if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), l = r ? j.R8(l) : j.eE(l), this.setEditorState(l), !0;
      if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), l = r ? j.Wg(l) : j.NJ(l), this.setEditorState(l), !0;
      if (("Delete" === t || "Backspace" === t) && n) {
        let e = j.FZ(l);
        return this.setEditorState(e), !0
      }
      return j.q0(e)
    }), (0, C.WU)()
  }
}

function H(e) {
  let {
    isSearchActive: t,
    searchId: n,
    searchType: r
  } = e, s = l.useRef(t);
  l.useEffect(() => {
    s.current && !t && (s.current = !1, (0, R.IZ)({
      searchId: n,
      searchType: r
    })), !s.current && t && (s.current = !0)
  }, [t, n, r])
}

function B(e) {
  let {
    className: t,
    keyboardModeEnabled: n,
    editorState: s
  } = e, a = l.useMemo(() => ({
    type: k.aib.DMS
  }), []), i = (0, u.e7)([x.Z], () => {
    let e = x.Z.getTotalCount(k.aib.DMS);
    return null != e && e > 0
  }), o = (0, u.e7)([x.Z], () => x.Z.getIsFetching(k.aib.DMS)), c = o || i;
  H({
    isSearchActive: c,
    searchId: k.aib.DMS,
    searchType: k.aib.DMS
  });
  let d = l.useCallback(e => {
    let {
      queryString: t
    } = e;
    N.Z.fetchCrossDMMessages({
      searchContext: a,
      selectedPageIndex: 0,
      queryString: t
    })
  }, [a]);
  return (0, r.jsx)(D, {
    className: t,
    searchId: k.aib.DMS,
    searchType: k.aib.DMS,
    isSearching: o,
    editorState: s,
    hasResults: i,
    keyboardModeEnabled: n,
    onSearch: d,
    isSearchActive: c,
    placeholder: A.intl.string(A.t["1sHpLC"])
  })
}

function U(e) {
  let {
    className: t,
    keyboardModeEnabled: n,
    editorState: s
  } = e, a = (0, u.e7)([v.Z], () => v.Z.getCurrentSearchId()), i = (0, T.k)(a), o = (0, u.e7)([v.Z], () => v.Z.isActive(a)), c = (0, u.e7)([v.Z], () => v.Z.hasResults(a)), d = (0, u.e7)([v.Z], () => null != a && v.Z.isSearching(a));
  H({
    isSearchActive: o,
    searchId: a,
    searchType: i
  });
  let h = l.useCallback(e => {
    let {
      queryString: t,
      query: n,
      searchEverywhere: r
    } = e;
    null != a && L(a, n, t, !!r)
  }, [a]);
  return (0, r.jsx)(D, {
    className: t,
    searchId: a,
    searchType: i,
    isSearching: d,
    editorState: s,
    hasResults: c,
    keyboardModeEnabled: n,
    onSearch: h,
    isSearchActive: o
  })
}

function G(e) {
  let {
    className: t
  } = e, n = (0, u.e7)([v.Z], () => v.Z.getCurrentSearchId()), s = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled), a = (0, u.e7)([v.Z], () => null != n ? v.Z.getEditorState(n) : null), i = l.useMemo(() => null != a ? a : j.nR(I.Jl(f.ZP)), [a]), o = (0, b.U)({
    location: "Search"
  });
  return n === k.aib.DMS && o ? (0, r.jsx)(B, {
    className: t,
    keyboardModeEnabled: s,
    editorState: i
  }) : (0, r.jsx)(U, {
    className: t,
    keyboardModeEnabled: s,
    editorState: i
  })
}
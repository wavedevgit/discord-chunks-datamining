/** Chunk was on 95336 **/
r.d(t, {
  ZP: () => $
}), r(781311), r(35282), r(388685);
var n = r(255367),
  s = r(73800),
  l = r(120356),
  a = r.n(l),
  i = r(512722),
  o = r.n(i),
  c = r(392711),
  u = r.n(c),
  h = r(913527),
  d = r.n(h),
  p = r(608787),
  f = r(442837),
  g = r(481060),
  m = r(542051),
  _ = r(349033),
  S = r(592125),
  y = r(271383),
  b = r(699516),
  x = r(944486),
  E = r(914010),
  v = r(246946),
  C = r(594174),
  O = r(585483),
  j = r(63063),
  R = r(51144),
  I = r(748610),
  T = r(738018),
  P = r(518944),
  N = r(607802),
  A = r(945577),
  Z = r(532428),
  k = r(14091),
  M = r(579612),
  w = r(315322),
  L = r(723642),
  D = r(981631),
  F = r(388032),
  H = r(290082);

function B(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      B(e, t, r[t])
    })
  }
  return e
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function Q(e, t) {
  if (null == e) return {};
  var r, n, s = function(e, t) {
    if (null == e) return {};
    var r, n, s = {},
      l = Object.keys(e);
    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
    return s
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
  }
  return s
}
let q = d()("2015-05-15").local(),
  G = (0, p.Un)({
    createPromise: () => Promise.resolve().then(r.bind(r, 547800)),
    webpackId: 547800
  }),
  z = (e, t, r) => {
    var s, l, a;
    let {
      user: i,
      text: o
    } = r;
    if (null == i) return (0, n.jsx)("strong", {
      children: o
    });
    let c = C.default.getUser(i.id),
      u = S.Z.getChannel(e),
      h = (null == u ? void 0 : u.isPrivate()) ? b.Z.getNickname(i.id) : null,
      d = null != (l = null != (s = y.ZP.getNick(e, i.id)) ? s : h) ? l : R.ZP.getName(i),
      p = null != (a = null == c ? void 0 : c.getAvatarURL(e, 20)) ? a : i.getAvatarURL(null == u ? void 0 : u.guild_id, 20);
    return [(0, n.jsx)("img", {
      alt: "",
      className: H.displayAvatar,
      src: p
    }, "avatar-".concat(t, "-").concat(i.id)), (0, n.jsx)("span", {
      className: H.displayedNick,
      children: d
    }, "display-nick-".concat(t, "-").concat(i.id)), (0, n.jsx)("span", {
      className: H.displayUsername,
      children: R.ZP.getUserTag(i, {
        identifiable: v.Z.enabled && v.Z.hidePersonalInformation ? "never" : "always"
      })
    }, "display-username-".concat(t, "-").concat(i.id))]
  },
  K = (e, t, r) => {
    let {
      channel: s,
      text: l
    } = r;
    return null == s ? (0, n.jsx)("strong", {
      children: l
    }) : (0, n.jsxs)("div", {
      className: H.resultChannel,
      children: [(0, n.jsx)(M.MC, {
        channel: s
      }), (0, n.jsx)(M.GQ, {
        channel: s
      }), (0, n.jsx)(M.P, {
        channel: s
      })]
    })
  },
  V = e => {
    let t, r, {
      id: s,
      searchId: l,
      result: i,
      group: o,
      className: c,
      role: u,
      tabIndex: h,
      "aria-selected": d,
      onSelect: p,
      onFocus: f,
      showFilter: m,
      renderResult: _
    } = e;
    if (m) {
      var S, y;
      t = (0, n.jsx)("span", {
        className: H.filter,
        children: null != (y = null == (S = Z.ZP[o]) ? void 0 : S.key) ? y : "addme:"
      })
    }
    return r = null != _ ? _(l, o, i) : (0, n.jsx)("strong", {
      children: i.text
    }), (0, n.jsxs)(g.P3F, {
      tag: "li",
      className: a()(H.option, c),
      onClick: p,
      onFocus: f,
      id: s,
      role: u,
      tabIndex: h,
      "aria-selected": d,
      children: [(0, n.jsxs)("div", {
        className: H.content,
        children: [t, r]
      }), (0, n.jsx)(g.qJs, {
        size: "sm",
        color: "currentColor",
        className: H.plusIcon
      })]
    })
  },
  Y = e => (0, n.jsx)(V, U(W({}, e), {
    className: H.user,
    renderResult: z
  })),
  X = {
    [D.dCx.FILTER_FROM]: {
      titleText: () => F.intl.string(F.t.catERE),
      component: Y
    },
    [D.dCx.FILTER_MENTIONS]: {
      titleText: () => F.intl.string(F.t.l3K4Bw),
      component: Y
    },
    [D.dCx.FILTER_HAS]: {
      titleText: () => F.intl.string(F.t.IC7gHB)
    },
    [D.dCx.FILTER_FILE_TYPE]: {
      titleText: () => F.intl.string(F.t.SXIfV1)
    },
    [D.dCx.FILTER_IN]: {
      titleText: () => F.intl.string(F.t.vHyCgo),
      component: e => (0, n.jsx)(V, U(W({}, e), {
        renderResult: K
      }))
    },
    [D.rtL.DATES]: {
      titleText: () => F.intl.string(F.t.UiL5e3)
    },
    [D.rtL.HISTORY]: {
      titleText: () => F.intl.string(F.t.tSZd5e),
      groupTip(e) {
        let {
          searchId: t
        } = e;
        return (0, n.jsx)(g.ua7, {
          text: F.intl.string(F.t.dwAvX1),
          position: "left",
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: s
            } = e;
            return (0, n.jsx)(g.P3F, {
              onClick: () => I.Z.clearWebSearchHistory(t),
              onMouseEnter: r,
              onMouseLeave: s,
              className: H.searchClearHistory,
              title: F.intl.string(F.t.dwAvX1),
              "aria-label": F.intl.string(F.t.dwAvX1),
              children: (0, n.jsx)(g.XHJ, {
                size: "md",
                color: "currentColor"
              })
            })
          }
        })
      },
      component: function(e) {
        var {
          onSelect: t,
          onFocus: r,
          result: l,
          showFilter: i,
          searchId: o,
          renderResult: c,
          group: u
        } = e, h = Q(e, ["onSelect", "onFocus", "result", "showFilter", "searchId", "renderResult", "group"]);
        let d = "",
          p = s.useMemo(() => {
            var e;
            return e = l.text, (0, N.kG)(e).map((e, t, r) => (0, N.Fr)(e, r[t + 1]) ? e : new _.WU(e.getFullMatch(), _.Xe))
          }, [l.text]).map(e => {
            let t = e.getFullMatch();
            if ("" === t.trim()) return null;
            let r = D.TNx.test(e.type),
              s = D.KA4.test(e.type);
            return d += t, (0, n.jsx)("span", {
              className: a()(H.searchHistoryRow, {
                [H.filter]: r,
                [H.answer]: s,
                [H.nonText]: !r && !s
              }),
              children: t
            }, e.type + t)
          });
        return (0, n.jsxs)(g.P3F, U(W({
          className: H.option,
          onClick: t,
          onFocus: r
        }, h), {
          "aria-label": F.intl.formatToPlainString(F.t.WoiGra, {
            suggestion: d
          }),
          children: [p, (0, n.jsx)(g.qJs, {
            size: "sm",
            color: "currentColor",
            className: H.plusIcon
          })]
        }))
      }
    },
    [D.rtL.SEARCH_OPTIONS]: {
      titleText: () => F.intl.string(F.t["8Zkyw8"]),
      groupTip: () => (0, n.jsx)(g.ua7, {
        text: F.intl.string(F.t.hvVgAQ),
        position: "left",
        children: e => (0, n.jsx)("div", U(W({
          className: H.searchLearnMore
        }, e), {
          children: (0, n.jsx)(g.eee, {
            href: j.Z.getArticleURL(D.BhN.USING_SEARCH),
            title: F.intl.string(F.t.hvVgAQ),
            children: (0, n.jsx)(g.idN, {
              size: "md",
              color: "currentColor"
            })
          })
        }))
      }),
      component: function(e) {
        var t, {
            result: r,
            onSelect: s,
            onFocus: l,
            showFilter: i,
            searchId: o
          } = e,
          c = Q(e, ["result", "onSelect", "onFocus", "showFilter", "searchId"]);
        let u = (0, N.Ko)(null != (t = r.token) ? t : "");
        return (0, n.jsxs)(g.P3F, U(W({
          className: a()(H.option, H.searchOption),
          onClick: s,
          onFocus: l
        }, c), {
          children: [(0, n.jsx)("span", {
            className: H.filter,
            children: r.text
          }), (0, n.jsx)("span", {
            className: a()({
              [H.answer]: u
            }),
            children: u
          }), (0, n.jsx)(g.qJs, {
            size: "sm",
            color: "currentColor",
            className: H.plusIcon
          })]
        }))
      }
    }
  };
class J extends s.PureComponent {
  componentDidUpdate(e, t) {
    let {
      resultsState: r,
      totalResults: n
    } = this.props, {
      mode: s
    } = r, {
      resultsState: l
    } = e;
    null != s.filter && null == l.mode.filter && n > 0 ? this.setSelectedIndex(0) : s.type === D.Sap.FILTER_ALL && l.mode.type !== s.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
  }
  setSelectedIndex(e) {
    this.setState({
      selectedIndex: e
    }, () => this.props.onSelectedIndexChanged(e))
  }
  render() {
    let {
      selectedIndex: e
    } = this.state, {
      navId: t,
      resultsState: r,
      totalResults: s,
      searchId: l,
      channel: a
    } = this.props;
    return (0, n.jsx)(m.Z, {
      numResults: s,
      query: r.query,
      navId: t,
      hideQuery: !this.shouldShowSearchQuery(),
      focusedIndex: e,
      renderCustomResults: this.renderAutocompletes,
      renderInitialState: this.renderAutocompletes,
      onHighlightQuery: () => this.focusOption(-1),
      onSelectQuery: this.performSearch,
      onSelectSearchEverywhere: () => this.performSearch({
        searchEverywhere: !0
      }),
      renderNoResults: () => null,
      searchFavorites: l === D.I_8 && (0, N.X$)(),
      showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
      channel: a,
      onSelectSearchInSelectedChannel: () => this.handleSearchInChannel({
        searchAutocompleteSelectAction: L.ZW.CLICK
      }),
      showDMQueryText: l === D.aib.DMS && (0, N.R6)(l)
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, B(this, "state", {
      dateHint: (0, Z.Pr)(),
      selectedIndex: -1
    }), B(this, "handleDateChange", e => {
      (0, w.bh)({
        searchId: this.props.searchId,
        searchQuery: null != this.props.searchId ? P.Z.getSearchResultsQuery(this.props.searchId) : null,
        searchQueryString: (0, k.$)(this.props.searchId),
        searchTokenType: this.props.resultsState.mode.filter,
        searchAutocompleteGroup: D.rtL.DATES,
        searchAutocompleteMode: this.props.resultsState.mode,
        isSearchFilterPrefix: !1,
        isSearchFilterAnswer: !0,
        isSearchFilterComplete: !1,
        searchAutocompleteSelectAction: L.ZW.CLICK
      }), this.setSearchQuery(e.format(D.b2L) + " ", !0)
    }), B(this, "keepCurrentOptionSelected", (e, t) => {
      let {
        selectedIndex: r
      } = this.state, {
        resultsState: n,
        totalResults: s
      } = this.props, {
        mode: l,
        autocompletes: a
      } = n, {
        resultsState: i
      } = e;
      if (l.type !== i.mode.type) this.setSelectedIndex(-1);
      else if (t.selectedIndex >= 0 && (t.selectedIndex === r || i.autocompletes.length !== a.length)) {
        let e = (0, N.i3)(i.autocompletes, i.mode)[t.selectedIndex],
          r = (0, N.i3)(a, l).findIndex(t => {
            let {
              resultText: r
            } = t;
            return r === (null == e ? void 0 : e.resultText)
          }); - 1 !== r ? this.setSelectedIndex(r) : t.selectedIndex >= s && this.setSelectedIndex(s - 1)
      }
    }), B(this, "focusNextOption", () => {
      this.focusOtherOption(1)
    }), B(this, "focusPreviousOption", () => {
      this.focusOtherOption(-1)
    }), B(this, "focusOtherOption", e => {
      let {
        selectedIndex: t
      } = this.state, {
        resultsState: r
      } = this.props;
      (0, N.Fz)(r.mode.filter) || this.focusOption(t + e)
    }), B(this, "focusOption", e => {
      let t = e,
        {
          autocompletes: r
        } = this.props.resultsState,
        n = this.shouldShowSearchQuery(),
        s = this.shouldShowSearchInSelectedChannel();
      t < -1 || !n && !s && t < 0 ? t = (0, N.BU)(r) - 1 : (n || s) && t >= (0, N.BU)(r) ? t = -1 : !n && t >= (0, N.BU)(r) && (t = 0), this.setSelectedIndex(t)
    }), B(this, "selectOption", e => {
      let {
        selectedIndex: t,
        searchAutocompleteSelectAction: r
      } = e, n = t;
      if (null == n && (n = this.state.selectedIndex), n < 0) return !1;
      let {
        autocompletes: s,
        mode: l
      } = this.props.resultsState;
      if ((0, N.Fz)(l.filter)) return;
      let a = (0, N.i3)(s, l);
      if (n >= a.length) return !1;
      let i = a[n],
        o = a.length;
      if (i.group === D.rtL.HISTORY) {
        let e = s.find(e => (null == e ? void 0 : e.group) === D.rtL.HISTORY);
        if (null != e) {
          let t = n - (o - e.results.length);
          (0, w.$z)({
            searchId: this.props.searchId,
            searchHistoryIndex: t,
            searchHistoryTotalResults: e.results.length
          })
        }
      } else {
        var c, h;
        let e = this.props.resultsState.mode.type,
          t = this.props.resultsState.mode.filter,
          {
            token: s,
            group: l
          } = i.result,
          a = (0, Z._m)(i.group) ? i.group : null != l && (0, Z._m)(l) ? l : null,
          u = null != (c = null != s ? s : t) ? c : a,
          d = i.result.channel,
          p = u === D.dCx.FILTER_IN && null != d && d.id === x.Z.getChannelId();
        (0, w.bh)({
          searchId: this.props.searchId,
          searchQuery: null != this.props.searchId ? P.Z.getSearchResultsQuery(this.props.searchId) : null,
          searchQueryString: (0, k.$)(this.props.searchId),
          searchTokenType: u,
          searchAutocompleteGroup: null != (h = i.group) ? h : l,
          searchAutocompleteMode: this.props.resultsState.mode,
          searchAutocompleteResultIndex: n,
          searchAutocompleteTotalResults: o,
          isSearchFilterPrefix: e === D.Sap.EMPTY,
          isSearchFilterAnswer: e === D.Sap.FILTER,
          isSearchFilterComplete: e === D.Sap.FILTER_ALL,
          isInFilterForSelectedChannel: p,
          searchAutocompleteSelectAction: r
        })
      }
      let d = function(e) {
        let t = !0,
          r = e.trim();
        return u()(Z.ZP).forOwn(e => {
          "" !== e.key && null != e.key && r === e.key && (t = !1)
        }), t
      }(i.resultText);
      return this.setSearchQuery(i.resultText, d), !0
    }), B(this, "setSearchQuery", function(e) {
      let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        {
          mode: n,
          cursorScope: s
        } = t.props.resultsState,
        l = 0;
      null != n.token ? l = n.token.start : (null == s ? void 0 : s.currentToken) != null && (l = s.currentToken.end);
      let a = null != n.token ? n.token.end : l;
      O.S.dispatch(D.CkL.SET_SEARCH_QUERY, {
        query: e,
        anchor: l,
        focus: a,
        performSearch: r
      }), t.setSelectedIndex(-1)
    }), B(this, "shouldShowSearchQuery", () => {
      let {
        mode: e
      } = this.props.resultsState;
      return e.type !== D.Sap.FILTER && e.type !== D.Sap.EMPTY && !(0, N.Fz)(e.filter)
    }), B(this, "shouldShowSearchInSelectedChannel", () => {
      let {
        searchId: e,
        resultsState: {
          mode: t
        }
      } = this.props;
      return e === D.aib.DMS && (0, N.R6)(e) && t.type === D.Sap.EMPTY && !(0, N.Fz)(t.filter)
    }), B(this, "handleSearchInChannel", e => {
      var t;
      let {
        searchAutocompleteSelectAction: r
      } = e, {
        channel: n,
        searchId: s
      } = this.props;
      if (!this.shouldShowSearchInSelectedChannel() || null == n) return !1;
      (0, w.tA)({
        searchId: s,
        searchAutocompleteSelectAction: r
      });
      let l = D.dCx.FILTER_IN,
        a = Z.ZP[l],
        i = (0, N.X3)(n),
        o = "".concat(null != (t = null == a ? void 0 : a.key) ? t : l.toString(), " ").concat(i);
      return this.setSearchQuery(o, !0), !0
    }), B(this, "renderDatePicker", () => (0, n.jsxs)("div", {
      className: H.datePicker,
      children: [(0, n.jsx)(G, {
        onSelect: this.handleDateChange,
        maxDate: d()().local(),
        minDate: q
      }), (0, n.jsxs)("div", {
        className: H.datePickerHint,
        children: [(0, n.jsxs)("span", {
          className: H.hint,
          children: [F.intl.string(F.t.fmtCi4), "\xa0"]
        }), (0, n.jsx)(g.P3F, {
          tag: "span",
          className: H.hintValue,
          onClick: this.handleHintClick,
          children: this.state.dateHint
        })]
      })]
    })), B(this, "handleHintClick", () => {
      this.setSearchQuery(this.state.dateHint, !0)
    }), B(this, "performSearch", e => {
      O.S.dispatch(D.CkL.PERFORM_SEARCH, null != e ? e : {})
    }), B(this, "renderAutocompletes", () => {
      let {
        selectedIndex: e
      } = this.state, {
        navId: t,
        searchId: r
      } = this.props, {
        autocompletes: s,
        mode: l
      } = this.props.resultsState;
      if ((0, N.Fz)(l.filter)) return this.renderDatePicker();
      let a = -1;
      return s.map(s => {
        var i, o, c;
        let u, h;
        if (null == s || 0 === s.results.length) return null;
        let d = null != (i = X[s.group]) ? i : {};
        null != d.titleText && (h = "".concat(s.group, "-header"), u = (0, n.jsx)("div", {
          id: h,
          className: H.header,
          children: d.titleText()
        }));
        let p = null != (o = d.groupTip) ? o : null,
          f = null != p ? (0, n.jsx)(p, {
            searchId: r
          }) : null,
          g = null != (c = d.component) ? c : V,
          _ = l.type === D.Sap.FILTER_ALL;
        return (0, n.jsxs)("ul", {
          role: "group",
          "aria-labelledby": h,
          className: H.resultsGroup,
          children: [u, f, s.results.map(l => {
            var i, o;
            if (null == l || null == s) return null;
            let c = e === (a += 1);
            return (0, n.jsx)(g, W({
              searchId: r,
              group: null != (i = l.group) ? i : s.group,
              result: l,
              showFilter: _,
              onSelect: this.selectOption.bind(null, {
                selectedIndex: a,
                searchAutocompleteSelectAction: L.ZW.CLICK
              }),
              onFocus: this.focusOption.bind(null, a)
            }, (0, m.M)(t, a, c)), "".concat(s.group, "-").concat(l.text, "-").concat(null != (o = l.key) ? o : ""))
          })]
        }, s.group)
      })
    })
  }
}
let $ = s.forwardRef((e, t) => {
  let r = (0, A.U)({
      location: "SearchPopout"
    }),
    [s, l, a, i] = (0, f.Wu)([E.Z, x.Z, T.Z, S.Z], () => {
      let e = E.Z.getGuildId(),
        t = x.Z.getChannelId(),
        n = S.Z.getChannel(t),
        s = null != e ? e : r ? D.aib.DMS : t;
      o()(null != s, "SearchPopout.getStateFromStores - invalid searchId");
      let l = T.Z.getState(s),
        a = (0, N.BU)(l.autocompletes);
      return [s, l, a, n]
    });
  return (0, n.jsx)(J, U(W({}, e), {
    searchId: s,
    resultsState: l,
    totalResults: a,
    ref: t,
    channel: i
  }))
})
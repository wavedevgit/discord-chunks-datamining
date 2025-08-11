/** Chunk was on web.js **/
/** chunk id: 778177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => ei
}), require("./781311.js"), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk608787 = require("./608787.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk542051 = require("./542051.jsx"),
  Chunk349033 = require("./349033.js"),
  Chunk44315 = require("./44315.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk748610 = require("./748610.js"),
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js"),
  Chunk611004 = require("./611004.js"),
  Chunk579612 = require("./579612.jsx"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk290082 = require("./290082.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e, t) {
  if (null == e) return {};
  var n, r, i = Y(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let W = u()("2015-05-15").local(),
  K = (0, Chunk608787.Un)({
    createPromise: () => Promise.resolve().then(require.bind(require, 547800)),
    webpackId: 547800
  });

function z(e) {
  let t = true,
    n = e.trim();
  return l()(w.ZP).forOwn(e => {
    "" !== e.key && null != e.key && n === e.key && (t = false)
  }), t
}
let q = (e, t, n) => {
    var i, o, a;
    let {
      user: s,
      text: l
    } = n;
    if (null == s) return (0, r.jsx)("strong", {
      children: l
    });
    let c = T.default.getUser(s.id),
      u = (0, P.AH)(e),
      d = (0, P.s5)(e),
      f = b.Z.getChannel(u),
      _ = (null == f ? true : f.isPrivate()) ? O.Z.getNickname(s.id) : null,
      p = null != (o = null != (i = y.ZP.getNick(d, s.id)) ? i : _) ? o : N.ZP.getName(s),
      h = null != (a = null == c ? true : c.getAvatarURL(d, 20)) ? a : s.getAvatarURL(null == f ? true : f.guild_id, 20);
    return [(0, r.jsx)("img", {
      alt: "",
      className: G.displayAvatar,
      src: h
    }, "avatar-".concat(t, "-").concat(s.id)), (0, r.jsx)("span", {
      className: G.displayedNick,
      children: p
    }, "display-nick-".concat(t, "-").concat(s.id)), (0, r.jsx)("span", {
      className: G.displayUsername,
      children: N.ZP.getUserTag(s, {
        identifiable: I.Z.enabled && I.Z.hidePersonalInformation ? "never" : "always"
      })
    }, "display-username-".concat(t, "-").concat(s.id))]
  },
  X = (e, t, n) => {
    let {
      channel: i,
      text: o
    } = n;
    return null == i ? (0, r.jsx)("strong", {
      children: o
    }) : (0, r.jsxs)("div", {
      className: G.resultChannel,
      children: [(0, r.jsx)(L.MC, {
        channel: i
      }), (0, r.jsx)(L.GQ, {
        channel: i
      }), (0, r.jsx)(L.P, {
        channel: i
      })]
    })
  },
  Q = e => {
    let t, n, {
      id: i,
      searchContext: o,
      result: s,
      group: l,
      className: c,
      role: u,
      tabIndex: d,
      "aria-selected": f,
      onSelect: _,
      onFocus: h,
      showFilter: m,
      renderResult: g
    } = e;
    if (m) {
      var E, b;
      t = (0, r.jsx)("span", {
        className: G.filter,
        children: null != (b = null == (E = w.ZP[l]) ? true : E.key) ? b : "addme:"
      })
    }
    return n = null != g ? g(o, l, s) : (0, r.jsx)("strong", {
      children: s.text
    }), (0, r.jsxs)(p.P3F, {
      tag: "li",
      className: a()(G.option, c),
      onClick: _,
      onFocus: h,
      id: i,
      role: u,
      tabIndex: d,
      "aria-selected": f,
      children: [(0, r.jsxs)("div", {
        className: G.content,
        children: [t, n]
      }), (0, r.jsx)(p.qJs, {
        size: "sm",
        color: "currentColor",
        className: G.plusIcon
      })]
    })
  },
  J = e => (0, r.jsx)(Q, V(Z({}, e), {
    className: G.user,
    renderResult: q
  })),
  $ = e => (0, r.jsx)(Q, V(Z({}, e), {
    renderResult: X
  }));

function ee(e) {
  return (0, P.kG)(e).map((e, t, n) => (0, P.Fr)(e, n[t + 1]) ? e : new m.WU(e.getFullMatch(), m.Xe))
}

function et(e) {
  var {
    onSelect: t,
    onFocus: n,
    result: o,
    showFilter: s,
    searchContext: l,
    renderResult: c,
    group: u
  } = e, d = H(e, ["onSelect", "onFocus", "result", "showFilter", "searchContext", "renderResult", "group"]);
  let f = "",
    _ = i.useMemo(() => ee(o.text), [o.text]).map(e => {
      let t = e.getFullMatch();
      if ("" === t.trim()) return null;
      let n = j.TNx.test(e.type),
        i = j.KA4.test(e.type),
        o = !n && !i;
      return f += t, (0, r.jsx)("span", {
        className: a()(G.searchHistoryRow, {
          [G.filter]: n,
          [G.answer]: i,
          [G.nonText]: o
        }),
        children: t
      }, e.type + t)
    });
  return (0, r.jsxs)(p.P3F, V(Z({
    className: G.option,
    onClick: t,
    onFocus: n
  }, d), {
    "aria-label": U.intl.formatToPlainString(U.t.WoiGra, {
      suggestion: f
    }),
    children: [_, (0, r.jsx)(p.qJs, {
      size: "sm",
      color: "currentColor",
      className: G.plusIcon
    })]
  }))
}
let en = {
  [Chunk981631.dCx.FILTER_FROM]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.catERE),
    component: J
  },
  [Chunk981631.dCx.FILTER_MENTIONS]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.l3K4Bw),
    component: J
  },
  [Chunk981631.dCx.FILTER_HAS]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.IC7gHB)
  },
  [Chunk981631.dCx.FILTER_FILE_TYPE]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.SXIfV1)
  },
  [Chunk981631.dCx.FILTER_IN]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.vHyCgo),
    component: $
  },
  [Chunk981631.rtL.DATES]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.UiL5e3)
  },
  [Chunk981631.rtL.HISTORY]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.tSZd5e),
    groupTip(e) {
      let {
        searchContext: t
      } = e;
      return (0, r.jsx)(p.ua7, {
        text: U.intl.string(U.t.dwAvX1),
        position: "left",
        children: e => {
          let {
            onMouseEnter: n,
            onMouseLeave: i
          } = e;
          return (0, r.jsx)(p.P3F, {
            onClick: () => C.Z.clearWebSearchHistory(t),
            onMouseEnter: n,
            onMouseLeave: i,
            className: G.searchClearHistory,
            title: U.intl.string(U.t.dwAvX1),
            "aria-label": U.intl.string(U.t.dwAvX1),
            children: (0, r.jsx)(p.XHJ, {
              size: "md",
              color: "currentColor"
            })
          })
        }
      })
    },
    component: et
  },
  [Chunk981631.rtL.SEARCH_OPTIONS]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t["8Zkyw8"]),
    groupTip: () => (0, Chunk255367.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.hvVgAQ),
      position: "left",
      children: e => (0, r.jsx)("div", V(Z({
        className: G.searchLearnMore
      }, e), {
        children: (0, r.jsx)(p.eee, {
          href: A.Z.getArticleURL(j.BhN.USING_SEARCH),
          title: U.intl.string(U.t.hvVgAQ),
          children: (0, r.jsx)(p.idN, {
            size: "md",
            color: "currentColor"
          })
        })
      }))
    }),
    component: function(e) {
      var t, {
          result: n,
          onSelect: i,
          onFocus: o,
          showFilter: s,
          searchContext: l
        } = e,
        c = H(e, ["result", "onSelect", "onFocus", "showFilter", "searchContext"]);
      let u = n.token === j.dCx.FILTER_AUTHOR_TYPE ? [_.z.SEARCH_AUTHOR_TYPE_FILTER_NEW_BADGE] : [],
        [d, f] = (0, E.US)(u),
        h = d === _.z.SEARCH_AUTHOR_TYPE_FILTER_NEW_BADGE,
        m = (0, g.Sl)(j.Ilk.BRAND_500).hex,
        b = (0, P.Ko)(null != (t = n.token) ? t : "");
      return (0, r.jsxs)(p.P3F, V(Z({
        className: a()(G.option, G.searchOption),
        onClick: i,
        onFocus: o
      }, c), {
        children: [(0, r.jsx)("span", {
          className: G.filter,
          children: n.text
        }), (0, r.jsx)("span", {
          className: a()({
            [G.answer]: b
          }),
          children: b
        }), h ? (0, r.jsx)(p.IGR, {
          text: U.intl.string(U.t.y2b7CA),
          color: m
        }) : (0, r.jsx)(p.qJs, {
          size: "sm",
          color: "currentColor",
          className: G.plusIcon
        })]
      }))
    }
  }
};
class er extends Chunk73800.PureComponent {
  componentDidUpdate(e, t) {
    let {
      resultsState: n,
      totalResults: r
    } = this.props, {
      mode: i
    } = n, {
      resultsState: o
    } = e;
    null != i.filter && null == o.mode.filter && r > 0 ? this.setSelectedIndex(0) : i.type === j.Sap.FILTER_ALL && o.mode.type !== i.type ? this.setSelectedIndex(false) : this.keepCurrentOptionSelected(e, t)
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
      resultsState: n,
      totalResults: i,
      searchContext: o,
      channel: a
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk542051.Z, {
      numResults: Chunk73800,
      query: require.query,
      navId: exports,
      hideQuery: !this.shouldShowSearchQuery(),
      focusedIndex: module,
      renderCustomResults: this.renderAutocompletes,
      renderInitialState: this.renderAutocompletes,
      onHighlightQuery: () => this.focusOption(false),
      onSelectQuery: this.performSearch,
      onSelectSearchEverywhere: () => this.performSearch({
        searchEverywhere: true
      }),
      renderNoResults: () => null,
      searchFavorites: Chunk120356.type === Chunk981631.aib.FAVORITES && (0, Chunk607802.X$)(),
      showSearchInSelectedChannel: this.shouldShowSearchInSelectedChannel(),
      channel: a,
      onSelectSearchInSelectedChannel: () => this.handleSearchInChannel({
        searchAutocompleteSelectAction: Chunk723642.ZW.CLICK
      }),
      showDMQueryText: Chunk120356.type === Chunk981631.aib.DMS && (0, Chunk607802.R6)(Chunk120356)
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, B(this, "state", {
      dateHint: (0, w.Pr)(),
      selectedIndex: false
    }), B(this, "handleDateChange", e => {
      let t = (0, P.Tm)(this.props.searchContext);
      (0, M.bh)({
        searchContext: this.props.searchContext,
        searchQuery: x.Z.getSearchResultsQuery(t),
        searchQueryString: D.Z.getSearchInputText(this.props.searchContext),
        searchTokenType: this.props.resultsState.mode.filter,
        searchAutocompleteGroup: j.rtL.DATES,
        searchAutocompleteMode: this.props.resultsState.mode,
        isSearchFilterPrefix: false,
        isSearchFilterAnswer: true,
        isSearchFilterComplete: false,
        searchAutocompleteSelectAction: k.ZW.CLICK
      }), this.setSearchQuery(e.format(j.b2L) + " ", true)
    }), B(this, "keepCurrentOptionSelected", (e, t) => {
      let {
        selectedIndex: n
      } = this.state, {
        resultsState: r,
        totalResults: i
      } = this.props, {
        mode: o,
        autocompletes: a
      } = r, {
        resultsState: s
      } = e;
      if (o.type !== s.mode.type) this.setSelectedIndex(false);
      else if (t.selectedIndex >= 0 && (t.selectedIndex === n || s.autocompletes.length !== a.length)) {
        let e = (0, P.i3)(s.autocompletes, s.mode)[t.selectedIndex],
          n = (0, P.i3)(a, o).findIndex(t => {
            let {
              resultText: n
            } = t;
            return n === (null == e ? true : e.resultText)
          });
        false !== n ? this.setSelectedIndex(n) : t.selectedIndex >= i && this.setSelectedIndex(i - 1)
      }
    }), B(this, "focusNextOption", () => {
      this.focusOtherOption(1)
    }), B(this, "focusPreviousOption", () => {
      this.focusOtherOption(false)
    }), B(this, "focusOtherOption", e => {
      let {
        selectedIndex: t
      } = this.state, {
        resultsState: n
      } = this.props;
      (0, P.Fz)(n.mode.filter) || this.focusOption(t + e)
    }), B(this, "focusOption", e => {
      let t = e,
        {
          autocompletes: n
        } = this.props.resultsState,
        r = this.shouldShowSearchQuery(),
        i = this.shouldShowSearchInSelectedChannel();
      t < false || !r && !i && t < 0 ? t = (0, P.BU)(n) - 1 : (r || i) && t >= (0, P.BU)(n) ? t = false : !r && t >= (0, P.BU)(n) && (t = 0), this.setSelectedIndex(t)
    }), B(this, "selectOption", e => {
      let {
        selectedIndex: t,
        searchAutocompleteSelectAction: n
      } = e, r = t;
      if (null == r && (r = this.state.selectedIndex), r < 0) returnfalse;
      let {
        autocompletes: i,
        mode: o
      } = this.props.resultsState;
      if ((0, P.Fz)(o.filter)) return;
      let a = (0, P.i3)(i, o);
      if (r >= a.length) returnfalse;
      let s = a[r],
        l = a.length;
      if (s.group === j.rtL.HISTORY) {
        let e = i.find(e => (null == e ? true : e.group) === j.rtL.HISTORY);
        if (null != e) {
          let t = r - (l - e.results.length);
          (0, M.$z)({
            searchContext: this.props.searchContext,
            searchHistoryIndex: t,
            searchHistoryTotalResults: e.results.length
          })
        }
      } else {
        var c, u;
        let e = this.props.resultsState.mode.type,
          t = this.props.resultsState.mode.filter,
          {
            token: i,
            group: o
          } = s.result,
          a = (0, w._m)(s.group) ? s.group : null != o && (0, w._m)(o) ? o : null,
          d = null != (c = null != i ? i : t) ? c : a,
          f = s.result.channel,
          _ = d === j.dCx.FILTER_IN && null != f && f.id === v.Z.getChannelId(),
          p = (0, P.Tm)(this.props.searchContext);
        (0, M.bh)({
          searchContext: this.props.searchContext,
          searchQuery: x.Z.getSearchResultsQuery(p),
          searchQueryString: D.Z.getSearchInputText(this.props.searchContext),
          searchTokenType: d,
          searchAutocompleteGroup: null != (u = s.group) ? u : o,
          searchAutocompleteMode: this.props.resultsState.mode,
          searchAutocompleteResultIndex: r,
          searchAutocompleteTotalResults: l,
          isSearchFilterPrefix: e === j.Sap.EMPTY,
          isSearchFilterAnswer: e === j.Sap.FILTER,
          isSearchFilterComplete: e === j.Sap.FILTER_ALL,
          isInFilterForSelectedChannel: _,
          searchAutocompleteSelectAction: n
        })
      }
      let d = z(s.resultText);
      return this.setSearchQuery(s.resultText, d), true
    }), B(this, "setSearchQuery", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
        {
          mode: r,
          cursorScope: i
        } = t.props.resultsState,
        o = 0;
      null != r.token ? o = r.token.start : (null == i ? true : i.currentToken) != null && (o = i.currentToken.end);
      let a = null != r.token ? r.token.end : o;
      S.S.dispatch(j.CkL.SET_SEARCH_QUERY, {
        query: e,
        anchor: o,
        focus: a,
        performSearch: n,
        replace: false
      }), t.setSelectedIndex(false)
    }), B(this, "shouldShowSearchQuery", () => {
      let {
        mode: e
      } = this.props.resultsState;
      return e.type !== j.Sap.FILTER && e.type !== j.Sap.EMPTY && !(0, P.Fz)(e.filter)
    }), B(this, "shouldShowSearchInSelectedChannel", () => {
      let {
        searchContext: e,
        resultsState: {
          mode: t
        }
      } = this.props;
      return e.type === j.aib.DMS && (0, P.R6)(e) && t.type === j.Sap.EMPTY && !(0, P.Fz)(t.filter)
    }), B(this, "handleSearchInChannel", e => {
      var t;
      let {
        searchAutocompleteSelectAction: n
      } = e, {
        channel: r,
        searchContext: i
      } = this.props;
      if (!this.shouldShowSearchInSelectedChannel() || null == r) returnfalse;
      (0, M.tA)({
        searchContext: i,
        searchAutocompleteSelectAction: n
      });
      let o = j.dCx.FILTER_IN,
        a = w.ZP[o],
        s = (0, P.X3)(r),
        l = "".concat(null != (t = null == a ? true : a.key) ? t : o.toString(), " ").concat(s);
      return this.setSearchQuery(l, true), true
    }), B(this, "renderDatePicker", () => (0, r.jsxs)("div", {
      className: G.datePicker,
      children: [(0, r.jsx)(K, {
        onSelect: this.handleDateChange,
        maxDate: u()().local(),
        minDate: W
      }), (0, r.jsxs)("div", {
        className: G.datePickerHint,
        children: [(0, r.jsxs)("span", {
          className: G.hint,
          children: [U.intl.string(U.t.fmtCi4), "\xa0"]
        }), (0, r.jsx)(p.P3F, {
          tag: "span",
          className: G.hintValue,
          onClick: this.handleHintClick,
          children: this.state.dateHint
        })]
      })]
    })), B(this, "handleHintClick", () => {
      this.setSearchQuery(this.state.dateHint, true)
    }), B(this, "performSearch", e => {
      S.S.dispatch(j.CkL.PERFORM_SEARCH, null != e ? e : {})
    }), B(this, "renderAutocompletes", () => {
      let {
        selectedIndex: e
      } = this.state, {
        navId: t,
        searchContext: n
      } = this.props, {
        autocompletes: i,
        mode: o
      } = this.props.resultsState;
      if ((0, P.Fz)(o.filter)) return this.renderDatePicker();
      let a = false;
      return i.map(i => {
        var s, l, c;
        let u, d;
        if (null == i || 0 === i.results.length) return null;
        let f = null != (s = en[i.group]) ? s : {};
        null != f.titleText && (d = "".concat(i.group, "-header"), u = (0, r.jsx)("div", {
          id: d,
          className: G.header,
          children: f.titleText()
        }));
        let _ = null != (l = f.groupTip) ? l : null,
          p = null != _ ? (0, r.jsx)(_, {
            searchContext: n
          }) : null,
          m = null != (c = f.component) ? c : Q,
          g = o.type === j.Sap.FILTER_ALL;
        return (0, r.jsxs)("ul", {
          role: "group",
          "aria-labelledby": d,
          className: G.resultsGroup,
          children: [u, p, i.results.map(o => {
            var s, l;
            if (null == o || null == i) return null;
            let c = e === (a += 1);
            return (0, r.jsx)(m, Z({
              searchContext: n,
              group: null != (s = o.group) ? s : i.group,
              result: o,
              showFilter: g,
              onSelect: this.selectOption.bind(null, {
                selectedIndex: a,
                searchAutocompleteSelectAction: k.ZW.CLICK
              }),
              onFocus: this.focusOption.bind(null, a)
            }, (0, h.M)(t, a, c)), "".concat(i.group, "-").concat(o.text, "-").concat(null != (l = o.key) ? l : ""))
          })]
        }, i.group)
      })
    })
  }
}
let ei = Chunk73800.forwardRef((e, t) => {
  let {
    searchContext: n,
    navId: i,
    onSelectedIndexChanged: o
  } = e, a = (0, f.e7)([v.Z, b.Z], () => {
    let e = v.Z.getChannelId();
    return b.Z.getChannel(e)
  }), [s, l] = (0, f.Wu)([R.Z], () => {
    let e = R.Z.getState(n),
      t = (0, P.BU)(e.autocompletes);
    return [e, t]
  });
  return (0, r.jsx)(er, {
    ref: t,
    navId: i,
    onSelectedIndexChanged: o,
    searchContext: n,
    resultsState: s,
    totalResults: l,
    channel: a
  })
})
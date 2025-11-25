/** Chunk was on web.js **/
/** chunk id: 778177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => ea
}), require("./781311.js"), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk608787 = require("./608787.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk738018 = require("./738018.js"),
  Chunk607802 = require("./607802.js"),
  Chunk532428 = require("./532428.js"),
  Chunk991896 = require("./991896.js"),
  Chunk611004 = require("./611004.jsx"),
  Chunk579612 = require("./579612.jsx"),
  Chunk817190 = require("./817190.js"),
  Chunk315322 = require("./315322.js"),
  Chunk723642 = require("./723642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk495824 = require("./495824.js");

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function W(e, t) {
  if (null == e) return {};
  var n, r, i = Y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function Y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let K = u()("2015-05-15").local(),
  z = (0, Chunk608787.Un)({
    createPromise: () => Promise.resolve().then(require.bind(require, 547800)),
    webpackId: 547800
  });

function q(e) {
  let t = true,
    n = e.trim();
  return l()(D.ZP).forOwn(e => {
    "" !== e.key && null != e.key && n === e.key && (t = false)
  }), t
}
let X = (e, t, n) => {
    var i, a, o;
    let {
      user: s,
      text: l
    } = n;
    if (null == s) return (0, r.jsx)("strong", {
      children: l
    });
    let c = S.default.getUser(s.id),
      u = (0, P.AH)(e),
      d = (0, P.s5)(e),
      f = y.Z.getChannel(u),
      _ = (null == f ? true : f.isPrivate()) ? v.Z.getNickname(s.id) : null,
      p = null != (a = null != (i = O.ZP.getNick(d, s.id)) ? i : _) ? a : N.ZP.getName(s),
      h = null != (o = null == c ? true : c.getAvatarURL(d, 20)) ? o : s.getAvatarURL(null == f ? true : f.guild_id, 20);
    return [(0, r.jsx)("img", {
      alt: "",
      className: B.displayAvatar,
      src: h
    }, "avatar-".concat(t, "-").concat(s.id)), (0, r.jsx)("span", {
      className: B.displayedNick,
      children: p
    }, "display-nick-".concat(t, "-").concat(s.id)), (0, r.jsx)("span", {
      className: B.displayUsername,
      children: N.ZP.getUserTag(s, {
        identifiable: T.Z.enabled && T.Z.hidePersonalInformation ? "never" : "always"
      })
    }, "display-username-".concat(t, "-").concat(s.id))]
  },
  Q = (e, t, n) => {
    let {
      channel: i,
      text: a
    } = n;
    return null == i ? (0, r.jsx)("strong", {
      children: a
    }) : (0, r.jsxs)("div", {
      className: B.resultChannel,
      children: [(0, r.jsx)(x.MC, {
        channel: i,
        className: B.searchResultChannelIcon
      }), (0, r.jsx)(x.GQ, {
        channel: i
      }), (0, r.jsx)(x.P, {
        channel: i
      })]
    })
  },
  J = e => {
    let t, n, {
      id: i,
      searchContext: a,
      result: s,
      group: l,
      className: c,
      role: u,
      tabIndex: d,
      "aria-selected": f,
      onSelect: _,
      onFocus: p,
      showFilter: m,
      renderResult: g
    } = e;
    if (m) {
      var E, b;
      t = (0, r.jsx)("span", {
        className: B.filter,
        children: null != (b = null == (E = D.ZP[l]) ? true : E.key) ? b : "addme:"
      })
    }
    return n = null != g ? g(a, l, s) : (0, r.jsx)("strong", {
      children: s.text
    }), (0, r.jsxs)(h.P3F, {
      tag: "li",
      className: o()(B.option, c),
      onClick: _,
      onFocus: p,
      id: i,
      role: u,
      tabIndex: d,
      "aria-selected": f,
      children: [(0, r.jsxs)("div", {
        className: B.content,
        children: [t, n]
      }), (0, r.jsx)(h.qJs, {
        size: "sm",
        color: "currentColor",
        className: B.plusIcon
      })]
    })
  },
  $ = e => (0, r.jsx)(J, H(F({}, e), {
    className: B.user,
    renderResult: X
  })),
  ee = e => (0, r.jsx)(J, H(F({}, e), {
    renderResult: Q
  }));

function et(e) {
  return (0, P.kG)(e).map((e, t, n) => (0, P.Fr)(e, n[t + 1]) ? e : new g.WU(e.getFullMatch(), g.Xe))
}

function en(e) {
  var {
    onSelect: t,
    onFocus: n,
    result: a,
    showFilter: s,
    searchContext: l,
    renderResult: c,
    group: u
  } = e, d = W(e, ["onSelect", "onFocus", "result", "showFilter", "searchContext", "renderResult", "group"]);
  let f = "",
    _ = i.useMemo(() => et(a.text), [a.text]).map(e => {
      let t = e.getFullMatch();
      if ("" === t.trim()) return null;
      let n = U.TNx.test(e.type),
        i = U.KA4.test(e.type),
        a = !n && !i;
      return f += t, (0, r.jsx)("span", {
        className: o()(B.searchHistoryRow, {
          [B.filter]: n,
          [B.answer]: i,
          [B.nonText]: a
        }),
        children: t
      }, e.type + t)
    });
  return (0, r.jsxs)(h.P3F, H(F({
    className: B.option,
    onClick: t,
    onFocus: n
  }, d), {
    "aria-label": G.intl.formatToPlainString(G.t.WoiGrV, {
      suggestion: f
    }),
    children: [_, (0, r.jsx)(h.qJs, {
      size: "sm",
      color: "currentColor",
      className: B.plusIcon
    })]
  }))
}
let er = {
  [Chunk981631.dCx.FILTER_FROM]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.catERA),
    component: $
  },
  [Chunk981631.dCx.FILTER_MENTIONS]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t["l3K4B/"]),
    component: $
  },
  [Chunk981631.dCx.FILTER_HAS]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.IC7gHM)
  },
  [Chunk981631.dCx.FILTER_FILE_TYPE]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.SXIfVw)
  },
  [Chunk981631.dCx.FILTER_IN]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.vHyCgl),
    component: ee
  },
  [Chunk981631.rtL.DATES]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.UiL5ey)
  },
  [Chunk981631.rtL.HISTORY]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t.tSZd5c),
    groupTip(e) {
      let {
        searchContext: t
      } = e;
      return (0, r.jsx)(p.u, {
        text: G.intl.string(G.t.dwAvX1),
        position: "left",
        children: (0, r.jsx)("div", {
          className: B.searchClearHistory,
          children: (0, r.jsx)(h.P3F, {
            onClick: () => w.Z.clearSearchHistory(t),
            title: G.intl.string(G.t.dwAvX1),
            "aria-label": G.intl.string(G.t.dwAvX1),
            children: (0, r.jsx)(h.XHJ, {
              size: "md",
              color: "currentColor"
            })
          })
        })
      })
    },
    component: en
  },
  [Chunk981631.rtL.SEARCH_OPTIONS]: {
    titleText: () => Chunk388032.intl.string(Chunk388032.t["8Zkyw+"]),
    groupTip: () => (0, Chunk54381.jsx)(Chunk681715.u, {
      text: Chunk388032.intl.string(Chunk388032.t.hvVgAZ),
      position: "left",
      children: (0, Chunk54381.jsx)("div", {
        className: Chunk495824.searchLearnMore,
        children: (0, Chunk54381.jsx)(Chunk481060.Anchor, {
          href: Chunk63063.Z.getArticleURL(Chunk981631.BhN.USING_SEARCH),
          title: Chunk388032.intl.string(Chunk388032.t.hvVgAZ),
          children: (0, Chunk54381.jsx)(Chunk481060.idN, {
            size: "md",
            color: "currentColor"
          })
        })
      })
    }),
    component: function(e) {
      var t, {
          result: n,
          onSelect: i,
          onFocus: a,
          showFilter: s,
          searchContext: l
        } = e,
        c = W(e, ["result", "onSelect", "onFocus", "showFilter", "searchContext"]);
      let u = n.token === U.dCx.FILTER_AUTHOR_TYPE ? [_.z.SEARCH_AUTHOR_TYPE_FILTER_NEW_BADGE] : [],
        [d, f] = (0, b.US)(u),
        p = d === _.z.SEARCH_AUTHOR_TYPE_FILTER_NEW_BADGE,
        m = (0, E.Sl)(U.Ilk.BRAND_500).hex,
        g = (0, P.Ko)(null != (t = n.token) ? t : "");
      return (0, r.jsxs)(h.P3F, H(F({
        className: o()(B.option, B.searchOption),
        onClick: i,
        onFocus: a
      }, c), {
        children: [(0, r.jsx)("span", {
          className: B.filter,
          children: n.text
        }), (0, r.jsx)("span", {
          className: o()({
            [B.answer]: g
          }),
          children: g
        }), p ? (0, r.jsx)(h.IGR, {
          text: G.intl.string(G.t.y2b7CA),
          color: m
        }) : (0, r.jsx)(h.qJs, {
          size: "sm",
          color: "currentColor",
          className: B.plusIcon
        })]
      }))
    }
  }
};
class ei extends Chunk473749.PureComponent {
  componentDidUpdate(e, t) {
    let {
      resultsState: n,
      totalResults: r
    } = this.props, {
      mode: i
    } = n, {
      resultsState: a
    } = e;
    null != i.filter && null == a.mode.filter && r > 0 ? this.setSelectedIndex(0) : i.type === U.Sap.FILTER_ALL && a.mode.type !== i.type ? this.setSelectedIndex(false) : this.keepCurrentOptionSelected(e, t)
  }
  setSelectedIndex(e) {
    this.setState({
      selectedIndex: e
    }, () => {
      this.props.onSelectedIndexChanged(e), this.scrollSelectedIndexIntoView()
    })
  }
  render() {
    let {
      selectedIndex: e
    } = this.state, {
      navId: t,
      resultsState: n,
      totalResults: i,
      searchContext: a,
      channel: o
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk542051.Z, {
      numResults: Chunk473749,
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
      channel: o,
      onSelectSearchInSelectedChannel: () => this.handleSearchInChannel({
        searchAutocompleteSelectAction: Chunk723642.ZW.CLICK
      }),
      showDMQueryText: Chunk120356.type === Chunk981631.aib.DMS && (0, Chunk607802.R6)(Chunk120356)
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, Z(this, "state", {
      dateHint: (0, D.Pr)(),
      selectedIndex: false
    }), Z(this, "scrollSelectedIndexIntoView", () => {
      let {
        navId: e,
        resultsState: t
      } = this.props;
      if ((0, P.Fz)(t.mode.filter)) return;
      let {
        selectedIndex: n
      } = this.state;
      if (null == n) return;
      let r = document.getElementById("".concat(e, "-").concat(n));
      null != r && r.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      })
    }), Z(this, "handleDateChange", e => {
      let t = (0, P.Tm)(this.props.searchContext);
      (0, k.bh)({
        searchContext: this.props.searchContext,
        searchQuery: M.Z.getSearchResultsQuery(t),
        searchQueryString: L.Z.getSearchInputText(this.props.searchContext),
        searchTokenType: this.props.resultsState.mode.filter,
        searchAutocompleteGroup: U.rtL.DATES,
        searchAutocompleteMode: this.props.resultsState.mode,
        isSearchFilterPrefix: false,
        isSearchFilterAnswer: true,
        isSearchFilterComplete: false,
        searchAutocompleteSelectAction: j.ZW.CLICK
      }), this.setSearchQuery(e.format(U.b2L) + " ", true)
    }), Z(this, "keepCurrentOptionSelected", (e, t) => {
      let {
        selectedIndex: n
      } = this.state, {
        resultsState: r,
        totalResults: i
      } = this.props, {
        mode: a,
        autocompletes: o
      } = r, {
        resultsState: s
      } = e;
      if (a.type !== s.mode.type) this.setSelectedIndex(false);
      else if (t.selectedIndex >= 0 && (t.selectedIndex === n || s.autocompletes.length !== o.length)) {
        let e = (0, P.i3)(s.autocompletes, s.mode)[t.selectedIndex],
          n = (0, P.i3)(o, a).findIndex(t => {
            let {
              resultText: n
            } = t;
            return n === (null == e ? true : e.resultText)
          });
        false !== n ? this.setSelectedIndex(n) : t.selectedIndex >= i && this.setSelectedIndex(i - 1)
      }
    }), Z(this, "focusNextOption", () => {
      this.focusOtherOption(1)
    }), Z(this, "focusPreviousOption", () => {
      this.focusOtherOption(false)
    }), Z(this, "focusOtherOption", e => {
      let {
        selectedIndex: t
      } = this.state, {
        resultsState: n
      } = this.props;
      (0, P.Fz)(n.mode.filter) || this.focusOption(t + e)
    }), Z(this, "focusOption", e => {
      let t = e,
        {
          autocompletes: n
        } = this.props.resultsState,
        r = this.shouldShowSearchQuery(),
        i = this.shouldShowSearchInSelectedChannel();
      t < false || !r && !i && t < 0 ? t = (0, P.BU)(n) - 1 : (r || i) && t >= (0, P.BU)(n) ? t = false : !r && t >= (0, P.BU)(n) && (t = 0), this.setSelectedIndex(t)
    }), Z(this, "selectOption", e => {
      let {
        selectedIndex: t,
        searchAutocompleteSelectAction: n
      } = e, r = t;
      if (null == r && (r = this.state.selectedIndex), r < 0) returnfalse;
      let {
        autocompletes: i,
        mode: a
      } = this.props.resultsState;
      if ((0, P.Fz)(a.filter)) return;
      let o = (0, P.i3)(i, a);
      if (r >= o.length) returnfalse;
      let s = o[r],
        l = o.length;
      if (s.group === U.rtL.HISTORY) {
        let e = i.find(e => (null == e ? true : e.group) === U.rtL.HISTORY);
        if (null != e) {
          let t = r - (l - e.results.length);
          (0, k.$z)({
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
            group: a
          } = s.result,
          o = (0, D._m)(s.group) ? s.group : null != a && (0, D._m)(a) ? a : null,
          d = null != (c = null != i ? i : t) ? c : o,
          f = s.result.channel,
          _ = d === U.dCx.FILTER_IN && null != f && f.id === I.Z.getChannelId(),
          p = (0, P.Tm)(this.props.searchContext);
        (0, k.bh)({
          searchContext: this.props.searchContext,
          searchQuery: M.Z.getSearchResultsQuery(p),
          searchQueryString: L.Z.getSearchInputText(this.props.searchContext),
          searchTokenType: d,
          searchAutocompleteGroup: null != (u = s.group) ? u : a,
          searchAutocompleteMode: this.props.resultsState.mode,
          searchAutocompleteResultIndex: r,
          searchAutocompleteTotalResults: l,
          isSearchFilterPrefix: e === U.Sap.EMPTY,
          isSearchFilterAnswer: e === U.Sap.FILTER,
          isSearchFilterComplete: e === U.Sap.FILTER_ALL,
          isInFilterForSelectedChannel: _,
          searchAutocompleteSelectAction: n
        })
      }
      let d = q(s.resultText);
      return this.setSearchQuery(s.resultText, d), true
    }), Z(this, "setSearchQuery", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
        {
          mode: r,
          cursorScope: i
        } = t.props.resultsState,
        a = 0;
      null != r.token ? a = r.token.start : (null == i ? true : i.currentToken) != null && (a = i.currentToken.end);
      let o = null != r.token ? r.token.end : a;
      A.S.dispatch(U.CkL.SET_SEARCH_QUERY, {
        query: e,
        anchor: a,
        focus: o,
        performSearch: n,
        replace: false
      }), t.setSelectedIndex(false)
    }), Z(this, "shouldShowSearchQuery", () => {
      let {
        mode: e
      } = this.props.resultsState;
      return e.type !== U.Sap.FILTER && e.type !== U.Sap.EMPTY && !(0, P.Fz)(e.filter)
    }), Z(this, "shouldShowSearchInSelectedChannel", () => {
      let {
        searchContext: e,
        resultsState: {
          mode: t
        }
      } = this.props;
      return e.type === U.aib.DMS && (0, P.R6)(e) && t.type === U.Sap.EMPTY && !(0, P.Fz)(t.filter)
    }), Z(this, "handleSearchInChannel", e => {
      var t;
      let {
        searchAutocompleteSelectAction: n
      } = e, {
        channel: r,
        searchContext: i
      } = this.props;
      if (!this.shouldShowSearchInSelectedChannel() || null == r) returnfalse;
      (0, k.tA)({
        searchContext: i,
        searchAutocompleteSelectAction: n
      });
      let a = U.dCx.FILTER_IN,
        o = D.ZP[a],
        s = (0, P.X3)(r),
        l = "".concat(null != (t = null == o ? true : o.key) ? t : a.toString(), " ").concat(s);
      return this.setSearchQuery(l, true), true
    }), Z(this, "renderDatePicker", () => (0, r.jsxs)("div", {
      className: B.datePicker,
      children: [(0, r.jsx)(z, {
        onSelect: this.handleDateChange,
        maxDate: u()().local(),
        minDate: K
      }), (0, r.jsxs)("div", {
        className: B.datePickerHint,
        children: [(0, r.jsxs)("span", {
          className: B.hint,
          children: [G.intl.string(G.t.fmtCi3), "\xa0"]
        }), (0, r.jsx)(h.P3F, {
          tag: "span",
          className: B.hintValue,
          onClick: this.handleHintClick,
          children: this.state.dateHint
        })]
      })]
    })), Z(this, "handleHintClick", () => {
      this.setSearchQuery(this.state.dateHint, true)
    }), Z(this, "performSearch", e => {
      A.S.dispatch(U.CkL.PERFORM_SEARCH, null != e ? e : {})
    }), Z(this, "renderAutocompletes", () => {
      let {
        selectedIndex: e
      } = this.state, {
        navId: t,
        searchContext: n
      } = this.props, {
        autocompletes: i,
        mode: a
      } = this.props.resultsState;
      if ((0, P.Fz)(a.filter)) return this.renderDatePicker();
      let o = false;
      return i.map(i => {
        var s, l, c;
        let u, d;
        if (null == i || 0 === i.results.length) return null;
        let f = null != (s = er[i.group]) ? s : {};
        null != f.titleText && (d = "".concat(i.group, "-header"), u = (0, r.jsx)("div", {
          id: d,
          className: B.header,
          children: f.titleText()
        }));
        let _ = null != (l = f.groupTip) ? l : null,
          p = null != _ ? (0, r.jsx)(_, {
            searchContext: n
          }) : null,
          h = null != (c = f.component) ? c : J,
          g = a.type === U.Sap.FILTER_ALL;
        return (0, r.jsxs)("ul", {
          role: "group",
          "aria-labelledby": d,
          className: B.resultsGroup,
          children: [u, p, i.results.map(a => {
            var s, l;
            if (null == a || null == i) return null;
            let c = e === (o += 1);
            return (0, r.jsx)(h, F({
              searchContext: n,
              group: null != (s = a.group) ? s : i.group,
              result: a,
              showFilter: g,
              onSelect: this.selectOption.bind(null, {
                selectedIndex: o,
                searchAutocompleteSelectAction: j.ZW.CLICK
              }),
              onFocus: this.focusOption.bind(null, o)
            }, (0, m.M)(t, o, c)), "".concat(i.group, "-").concat(a.text, "-").concat(null != (l = a.key) ? l : ""))
          })]
        }, i.group)
      })
    })
  }
}
let ea = Chunk473749.forwardRef((e, t) => {
  let {
    searchContext: n,
    navId: i,
    onSelectedIndexChanged: a
  } = e, o = (0, f.e7)([I.Z, y.Z], () => {
    let e = I.Z.getChannelId();
    return y.Z.getChannel(e)
  }), [s, l] = (0, f.Wu)([R.Z], () => {
    let e = R.Z.getState(n),
      t = (0, P.BU)(e.autocompletes);
    return [e, t]
  });
  return (0, r.jsx)(ei, {
    ref: t,
    navId: i,
    onSelectedIndexChanged: a,
    searchContext: n,
    resultsState: s,
    totalResults: l,
    channel: o
  })
})
/** Chunk was on 54157 **/
/** chunk id: 542051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => m,
  Z: () => b
}), require("./415506.js"), require("./781311.js"), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk607802 = require("./607802.js"),
  Chunk579612 = require("./579612.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk575209 = require("./575209.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = e => {
  let {
    query: t,
    searchFavorites: n,
    showDMQueryText: r
  } = e, {
    filterCount: a,
    queryContent: i,
    isQueryEmpty: u
  } = l.useMemo(() => {
    var e, n, r;
    let s = (0, c.kG)(t),
      l = (0, c.$G)(s),
      a = null != (n = (0, c.UP)(l)) ? n : "";
    return {
      filterCount: null != (r = null == (e = l.channel_id) ? true : e.length) ? r : 0,
      isQueryEmpty: 0 === a.length,
      queryContent: a
    }
  }, [t]);
  return n ? (0, s.jsx)("div", {
    className: h.queryText,
    children: d.intl.string(d.t["6RVtLC"])
  }) : r ? a > 0 ? (0, s.jsx)(o.Text, {
    variant: "text-sm/medium",
    color: "text-secondary",
    className: h.searchDMQueryText,
    children: u ? d.intl.format(d.t.iV2ftr, {
      filterCount: a
    }) : d.intl.format(d.t["5CTmUl"], {
      filterCount: a,
      value: i
    })
  }) : (0, s.jsx)(o.Text, {
    variant: "text-sm/medium",
    color: "text-secondary",
    className: h.searchDMQueryText,
    children: u ? d.intl.string(d.t.w39VdH) : d.intl.format(d.t["9gKPv7"], {
      value: i
    })
  }) : (0, s.jsx)("div", {
    className: h.queryText,
    children: d.intl.format(d.t.ub226e, {
      value: t
    })
  })
};

function S(e) {
  e.stopPropagation(), e.preventDefault()
}

function m(e, t, n) {
  return {
    id: "".concat(e, "-").concat(t),
    role: "option",
    tabIndex: false,
    "aria-selected": n
  }
}
class y extends(r = Chunk73800.PureComponent) {
  renderQuery(e) {
    let {
      query: t,
      navId: n,
      focusedIndex: r,
      onSelectQuery: l,
      onSelectSearchEverywhere: a,
      onHighlightQuery: c,
      hideQuery: u,
      searchFavorites: p,
      showDMQueryText: S
    } = this.props;
    if (e || u) return null;
    let y = false === r;
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)(o.P3F, _(f({
        className: i()(h.queryContainer, {
          [h.focused]: y
        })
      }, m(n, false, y)), {
        onMouseEnter: c,
        onClick: l,
        children: [(0, s.jsx)(g, {
          query: t,
          searchFavorites: p,
          showDMQueryText: S
        }), (0, s.jsx)("div", {
          className: h.queryShortcut,
          "aria-hidden": true,
          children: (0, s.jsx)(o.M2$, {
            shortcut: "return",
            dim: true,
            className: h.keyCombo
          })
        })]
      })), p && (0, s.jsxs)(o.P3F, _(f({
        className: i()(h.queryContainer, {
          [h.focused]: y
        })
      }, m(n, false, y)), {
        onMouseEnter: c,
        onClick: a,
        children: [(0, s.jsx)("div", {
          className: h.queryText,
          children: d.intl.string(d.t.FtSUxc)
        }), (0, s.jsx)("div", {
          className: h.queryShortcut,
          "aria-hidden": true,
          children: (0, s.jsx)(o.M2$, {
            shortcut: "shift+return",
            dim: true,
            className: h.keyCombo
          })
        })]
      }))]
    })
  }
  renderResults(e) {
    let {
      numResults: t,
      renderNoResults: n,
      renderInitialState: r,
      renderResult: s,
      renderCustomResults: l
    } = this.props;
    if (e) return r();
    if (0 === t) return n();
    if (null != s) return Array.from({
      length: t
    }).map((e, t) => s(t));
    if (null != l) return l();
    throw Error("SearchResultsPopout.renderResults: Flow should never allow this...")
  }
  render() {
    let {
      query: e,
      focusedIndex: t,
      navId: n,
      className: r
    } = this.props, l = "" === module.trim();
    return (0, Chunk255367.jsxs)("div", {
      className: i()(Chunk575209.container, r),
      onMouseDown: S,
      role: "listbox",
      id: require,
      tabIndex: false,
      "aria-activedescendant": "".concat(require, "-").concat(exports),
      children: [this.renderQuery(Chunk73800), this.renderSearchInSelectedChannelAutocomplete(), this.renderResults(Chunk73800)]
    })
  }
  constructor(...e) {
    super(...e), p(this, "renderSearchInSelectedChannelAutocomplete", () => {
      let {
        navId: e,
        channel: t,
        showSearchInSelectedChannel: n,
        focusedIndex: r,
        onSelectSearchInSelectedChannel: l
      } = this.props;
      if (!n || null == t) return null;
      let a = (0, c.X3)(t),
        i = (0, s.jsx)(u.ZP, {
          channel: t,
          text: d.intl.formatToPlainString(d.t.LDpotL, {
            guildName: a
          }),
          channelContainerClassName: h.channelContainer,
          textContainerClassName: h.searchResultNameContainer
        });
      return (0, s.jsx)(o.P3F, _(f({}, m(e, false, false === r)), {
        className: h.inChannelOptionContainer,
        onClick: l,
        children: (0, s.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "interactive-normal",
          className: h.inChannelOption,
          children: d.intl.format(d.t.LDpotL, {
            guildName: i
          })
        })
      }))
    })
  }
}
p(y, "defaultProps", {
  renderInitialState: () => null,
  hideQuery: false
});
let b = y
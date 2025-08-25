/** Chunk was on web.js **/
/** chunk id: 455708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk524825 = require("./524825.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk68405 = require("./68405.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk656733 = require("./656733.js"),
  Chunk985375 = require("./985375.js"),
  Chunk653235 = require("./653235.jsx"),
  Chunk215016 = require("./215016.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk149203 = require("./149203.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577021 = require("./577021.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = e => e.stopPropagation();
class C extends Chunk647438.PureComponent {
  componentDidMount() {
    Chunk68405.gK(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, Chunk981631.wI2.SEARCH)
  }
  componentWillUnmount() {
    Chunk570140.Z.wait(() => Chunk68405.v2()), document.removeEventListener("keydown", this.backToFrontPage)
  }
  componentDidUpdate() {
    this.state.resultType !== Chunk981631.wI2.SEARCH && "" !== this.props.query && this.search(this.props.query, Chunk981631.wI2.SEARCH)
  }
  search(e, t, n) {
    d.yC(e, t, n), "" === e ? this.setState({
      resultType: null
    }) : this.state.resultType !== E.wI2.SEARCH && this.setState({
      resultType: E.wI2.SEARCH
    })
  }
  renderHeaderContent() {
    let {
      query: e
    } = this.props, {
      resultType: t
    } = this.state;
    switch (exports) {
      case Chunk981631.wI2.FAVORITES:
        return (0, Chunk951288.jsx)(Chunk481060.vwX, {
          tag: "h5",
          className: Chunk577021.searchHeader,
          children: Chunk388032.intl.string(Chunk388032.t.y3LQCA)
        });
      case Chunk981631.wI2.TRENDING_GIFS:
        return (0, Chunk951288.jsx)(Chunk481060.vwX, {
          tag: "h5",
          className: Chunk577021.searchHeader,
          children: Chunk388032.intl.string(Chunk388032.t.H6zNFx)
        });
      default:
        return (0, Chunk951288.jsx)(Chunk481060.E1j, {
          className: Chunk577021.searchBar,
          query: module,
          onChange: this.handleChangeQuery,
          onClear: this.handleClearQuery,
          placeholder: Chunk388032.intl.string(Chunk388032.t.TnYqkZ),
          "aria-label": Chunk388032.intl.string(Chunk388032.t.TnYqkZ),
          ref: this.props.searchBarRef,
          autoFocus: true
        })
    }
  }
  renderHeader() {
    let {
      resultType: e
    } = this.state, t = null;
    return null != module && (t = (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: this.handleClearQuery,
      className: Chunk577021.backButton,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["13/7kZ"]),
      children: (0, Chunk951288.jsx)(Chunk481060.whL, {
        size: "md",
        color: "currentColor"
      })
    })), (0, Chunk951288.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      children: [exports, this.renderHeaderContent()]
    })
  }
  renderContent() {
    let {
      contentClassName: e,
      resultItems: t,
      resultQuery: n,
      query: i,
      favorites: o,
      searchOffset: a,
      searchLimit: s,
      searchTotalResults: l,
      suggestions: c,
      hideFavorites: u
    } = this.props, {
      resultType: d
    } = this.state;
    return null == Chunk68405 ? (0, Chunk951288.jsx)(Chunk653235.Z, {
      className: module,
      hideFavoritesTile: Chunk570140,
      onSelectItem: this.handleSelectItem
    }) : (0, Chunk951288.jsx)(Chunk215016.ZP, {
      className: module,
      data: Chunk68405 === Chunk981631.wI2.FAVORITES ? Chunk120356 : exports,
      onSelectGIF: this.handleSelectGIF,
      resultType: Chunk68405,
      resultQuery: require,
      query: Chunk647438,
      searchOffset: a,
      searchLimit: Chunk524825,
      searchTotalResults: Chunk442837,
      suggestions: Chunk481060,
      onSelectSuggestion: this.handleSelectSuggestion
    })
  }
  render() {
    let {
      className: e,
      forwardedRef: t
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      id: Chunk149203.vO,
      role: "tabpanel",
      "aria-labelledby": Chunk149203._3,
      className: a()(Chunk577021.container, module),
      onClick: A,
      ref: exports,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk577021.header,
        children: this.renderHeader()
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk577021.content,
        children: this.renderContent()
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      resultType: null
    }), v(this, "backToFrontPage", e => {
      let {
        resultType: t
      } = this.state;
      e.keyCode === E.yXg.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
    }), v(this, "handleChangeQuery", e => {
      (0, _.ql)(e), this.search(e, E.wI2.SEARCH)
    }), v(this, "handleSelectSuggestion", e => {
      (0, _.ql)(""), d.v2(), this.search(e, E.wI2.SEARCH_SUGGESTION, true)
    }), v(this, "handleClearQuery", () => {
      let {
        current: e
      } = this.props.searchBarRef;
      (0, _.ql)(""), d.v2(), this.setState({
        resultType: null
      }), null != e && e.focus()
    }), v(this, "handleSelectGIF", e => {
      let {
        onSelectGIF: t
      } = this.props;
      null != t && t(e)
    }), v(this, "handleSelectItem", (e, t) => {
      let {
        current: n
      } = this.props.searchBarRef;
      switch (e) {
        case E.wI2.TRENDING_CATEGORY:
          d.yC(t, E.wI2.TRENDING_CATEGORY, true), null != n && n.focus();
          break;
        case E.wI2.TRENDING_GIFS:
          d.UU()
      }
      this.setState({
        resultType: e
      })
    })
  }
}
let N = Chunk647438.forwardRef((e, t) => {
  e.persistSearch || (0, _.ql)("");
  let {
    query: n,
    resultQuery: o,
    resultItems: a,
    suggestions: c
  } = (0, l.cj)([p.Z], () => ({
    query: p.Z.getQuery(),
    resultQuery: p.Z.getResultQuery(),
    resultItems: p.Z.getResultItems(),
    suggestions: p.Z.getSuggestions()
  })), {
    expressionPickerQuery: u,
    isSearchSuggestion: d
  } = (0, _.Iu)(e => ({
    expressionPickerQuery: e.searchQuery,
    isSearchSuggestion: e.isSearchSuggestion
  }), s.X), f = null != u && "" !== u ? u : n, m = (0, h.HI)(), g = i.useRef(null);
  return i.useLayoutEffect(() => {
    if (d) {
      var e;
      null == (e = g.current) || e.focus()
    }
  }, [d, g]), (0, r.jsx)(C, S(I({}, e), {
    forwardedRef: t,
    query: f,
    resultQuery: o,
    resultItems: a,
    suggestions: c,
    favorites: m,
    searchOffset: 0,
    searchTotalResults: p.Z.getResultItems().length,
    searchLimit: null,
    searchBarRef: g
  }))
})
/** Chunk was on web.js **/
/** chunk id: 455708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./35282.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk574583 = require("./574583.js"),
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
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk709637 = require("./709637.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => e.stopPropagation();
class N extends Chunk647438.PureComponent {
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
      query: e,
      headingColor: t
    } = this.props, {
      resultType: n
    } = this.state;
    switch (require) {
      case Chunk981631.wI2.FAVORITES:
        return (0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          color: exports,
          className: Chunk709637.searchHeader,
          children: Chunk388032.intl.string(Chunk388032.t.y3LQCG)
        });
      case Chunk981631.wI2.TRENDING_GIFS:
        return (0, Chunk951288.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          color: exports,
          className: Chunk709637.searchHeader,
          children: Chunk388032.intl.string(Chunk388032.t.H6zNFz)
        });
      default:
        return (0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: module,
          onChange: this.handleChangeQuery,
          onClear: this.handleClearQuery,
          placeholder: Chunk388032.intl.string(Chunk388032.t.TnYqke),
          "aria-label": Chunk388032.intl.string(Chunk388032.t.TnYqke),
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
      className: Chunk709637.backButton,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["13/7kX"]),
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
      favorites: a,
      searchOffset: o,
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
      searchOffset: o,
      searchLimit: Chunk574583,
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
      className: o()(Chunk709637.container, module),
      onClick: C,
      ref: exports,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk709637.header,
        children: this.renderHeader()
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk709637.content,
        children: this.renderContent()
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "state", {
      resultType: null
    }), I(this, "backToFrontPage", e => {
      let {
        resultType: t
      } = this.state;
      e.key === y.vn.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
    }), I(this, "handleChangeQuery", e => {
      (0, _.ql)(e), this.search(e, E.wI2.SEARCH)
    }), I(this, "handleSelectSuggestion", e => {
      (0, _.ql)(""), d.v2(), this.search(e, E.wI2.SEARCH_SUGGESTION, true)
    }), I(this, "handleClearQuery", () => {
      let {
        current: e
      } = this.props.searchBarRef;
      (0, _.ql)(""), d.v2(), this.setState({
        resultType: null
      }), null != e && e.focus()
    }), I(this, "handleSelectGIF", e => {
      let {
        onSelectGIF: t
      } = this.props;
      null != t && t(e)
    }), I(this, "handleSelectItem", (e, t) => {
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
let R = Chunk647438.forwardRef((e, t) => {
  e.persistSearch || (0, _.ql)("");
  let {
    query: n,
    resultQuery: a,
    resultItems: o,
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
  }, [d, g]), (0, r.jsx)(N, A(T({}, e), {
    forwardedRef: t,
    query: f,
    resultQuery: a,
    resultItems: o,
    suggestions: c,
    favorites: m,
    searchOffset: 0,
    searchTotalResults: p.Z.getResultItems().length,
    searchLimit: null,
    searchBarRef: g
  }))
})
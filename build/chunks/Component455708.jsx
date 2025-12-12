/** Chunk was on web.js **/
/** chunk id: 455708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk577021 = require("./577021.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
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

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = e => e.stopPropagation();
class A extends Chunk473749.PureComponent {
  componentDidMount() {
    Chunk68405.gK(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, Chunk981631.wI2.SEARCH)
  }
  componentDidUpdate(e) {
    "" === e.query && "" !== this.props.query && null == this.state.resultType && this.search(this.props.query, g.wI2.SEARCH)
  }
  componentWillUnmount() {
    Chunk570140.Z.wait(() => Chunk68405.v2()), document.removeEventListener("keydown", this.backToFrontPage)
  }
  search(e, t, n) {
    u.yC(e, t, n), "" === e ? this.setState({
      resultType: null
    }) : this.state.resultType !== g.wI2.SEARCH && this.setState({
      resultType: g.wI2.SEARCH
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
        return (0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          color: exports,
          className: Chunk577021.searchHeader,
          children: Chunk388032.intl.string(Chunk388032.t.y3LQCG)
        });
      case Chunk981631.wI2.TRENDING_GIFS:
        return (0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/semibold",
          color: exports,
          className: Chunk577021.searchHeader,
          children: Chunk388032.intl.string(Chunk388032.t.H6zNFz)
        });
      default:
        return (0, Chunk54381.jsx)(Chunk481060.E1j, {
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
    return null != module && (t = (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: this.handleClearQuery,
      className: Chunk577021.backButton,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["13/7kX"]),
      children: (0, Chunk54381.jsx)(Chunk481060.whL, {
        size: "md",
        color: "currentColor"
      })
    })), (0, Chunk54381.jsxs)(Chunk600164.Z, {
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
    return null == Chunk600164 ? (0, Chunk54381.jsx)(Chunk653235.Z, {
      className: module,
      hideFavoritesTile: Chunk68405,
      onSelectItem: this.handleSelectItem
    }) : (0, Chunk54381.jsx)(Chunk215016.ZP, {
      className: module,
      data: Chunk600164 === Chunk981631.wI2.FAVORITES ? Chunk120356 : exports,
      onSelectGIF: this.handleSelectGIF,
      resultType: Chunk600164,
      resultQuery: require,
      query: Chunk473749,
      searchOffset: a,
      searchLimit: Chunk442837,
      searchTotalResults: Chunk481060,
      suggestions: Chunk570140,
      onSelectSuggestion: this.handleSelectSuggestion,
      selectedGIF: this.props.selectedGIF
    })
  }
  render() {
    let {
      className: e,
      forwardedRef: t
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      id: Chunk149203.vO,
      role: "tabpanel",
      "aria-labelledby": Chunk149203._3,
      className: a()(Chunk577021.container, module),
      onClick: C,
      ref: exports,
      children: [(0, Chunk54381.jsx)("div", {
        className: a()(Chunk577021.header, this.props.headerClassName),
        children: this.renderHeader()
      }), (0, Chunk54381.jsx)("div", {
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
      e.key === b.vn.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
    }), v(this, "handleChangeQuery", e => {
      (0, f.ql)(e), this.search(e, g.wI2.SEARCH)
    }), v(this, "handleSelectSuggestion", e => {
      (0, f.ql)(""), u.v2(), this.search(e, g.wI2.SEARCH_SUGGESTION, true)
    }), v(this, "handleClearQuery", () => {
      let {
        current: e
      } = this.props.searchBarRef;
      (0, f.ql)(""), u.v2(), this.setState({
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
        case g.wI2.TRENDING_CATEGORY:
          u.yC(t, g.wI2.TRENDING_CATEGORY, true), null != n && n.focus();
          break;
        case g.wI2.TRENDING_GIFS:
          u.UU()
      }
      this.setState({
        resultType: e
      })
    })
  }
}
let N = Chunk473749.forwardRef((e, t) => {
  i.useEffect(() => {
    if (!e.persistSearch) {
      var t;
      (0, f.ql)(null != (t = e.initialQuery) ? t : "")
    }
  }, [e.persistSearch, e.initialQuery]);
  let {
    query: n,
    resultQuery: o,
    resultItems: a,
    suggestions: l
  } = (0, s.cj)([p.Z], () => ({
    query: p.Z.getQuery(),
    resultQuery: p.Z.getResultQuery(),
    resultItems: p.Z.getResultItems(),
    suggestions: p.Z.getSuggestions()
  })), c = (0, f.Iu)(e => e.searchQuery), u = null != n && "" !== n ? n : c, d = (0, _.HI)(), m = i.useRef(null);
  return (0, r.jsx)(A, T(S({}, e), {
    forwardedRef: t,
    query: u,
    resultQuery: o,
    resultItems: a,
    suggestions: l,
    favorites: d,
    searchOffset: 0,
    searchTotalResults: p.Z.getResultItems().length,
    searchLimit: null,
    searchBarRef: m,
    selectedGIF: e.selectedGIF
  }))
})
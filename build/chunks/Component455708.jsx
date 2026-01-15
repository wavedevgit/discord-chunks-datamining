/** Chunk was on web.js **/
/** chunk id: 455708, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk68405 = require("./68405.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk656733 = require("./656733.js"),
  Chunk985375 = require("./985375.js"),
  Chunk304704 = require("./304704.js"),
  Chunk690287 = require("./690287.js"),
  Chunk653235 = require("./653235.jsx"),
  Chunk215016 = require("./215016.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk149203 = require("./149203.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk277170 = require("./277170.js");

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

function C(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = e => e.stopPropagation();
class P extends Chunk473749.PureComponent {
  componentDidMount() {
    u.gK(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, b.wI2.SEARCH)
  }
  componentDidUpdate(e) {
    "" === e.query && "" !== this.props.query && null == this.state.resultType && this.search(this.props.query, b.wI2.SEARCH)
  }
  componentWillUnmount() {
    c.Z.wait(() => u.v2()), document.removeEventListener("keydown", this.backToFrontPage)
  }
  search(e, t, n) {
    u.yC(e, t, n), "" === e ? this.setState({
      resultType: null
    }) : this.state.resultType !== b.wI2.SEARCH && this.setState({
      resultType: b.wI2.SEARCH
    })
  }
  renderHeaderContent() {
    let {
      query: e,
      headingColor: t
    } = this.props, {
      resultType: n
    } = this.state;
    switch (n) {
      case b.wI2.FAVORITES:
        return (0, r.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          color: t,
          className: S.searchHeader,
          children: v.intl.string(v.t.y3LQCG)
        });
      case b.wI2.TRENDING_GIFS:
        return (0, r.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          color: t,
          className: S.searchHeader,
          children: v.intl.string(v.t.H6zNFz)
        });
      default: {
        let t = (0, m.eE)(),
          n = (0, h.n)(t);
        return (0, r.jsx)(l.E1j, {
          query: e,
          onChange: this.handleChangeQuery,
          onClear: this.handleClearQuery,
          placeholder: n,
          "aria-label": n,
          ref: this.props.searchBarRef,
          autoFocus: true
        })
      }
    }
  }
  renderHeader() {
    let {
      resultType: e
    } = this.state, t = null;
    return null != e && (t = (0, r.jsx)(l.P3F, {
      onClick: this.handleClearQuery,
      className: S.backButton,
      "aria-label": v.intl.string(v.t["13/7kX"]),
      children: (0, r.jsx)(l.whL, {
        size: "md",
        color: "currentColor"
      })
    })), (0, r.jsxs)(d.Z, {
      align: d.Z.Align.CENTER,
      children: [t, this.renderHeaderContent()]
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
    return null == d ? (0, r.jsx)(g.Z, {
      className: e,
      hideFavoritesTile: u,
      onSelectItem: this.handleSelectItem
    }) : (0, r.jsx)(E.ZP, {
      className: e,
      data: d === b.wI2.FAVORITES ? a : t,
      onSelectGIF: this.handleSelectGIF,
      resultType: d,
      resultQuery: n,
      query: i,
      searchOffset: o,
      searchLimit: s,
      searchTotalResults: l,
      suggestions: c,
      onSelectSuggestion: this.handleSelectSuggestion,
      selectedGIF: this.props.selectedGIF
    })
  }
  render() {
    let {
      className: e,
      forwardedRef: t
    } = this.props;
    return (0, r.jsxs)("div", {
      id: y.vO,
      role: "tabpanel",
      "aria-labelledby": y._3,
      className: o()(S.container, e),
      onClick: N,
      ref: t,
      children: [(0, r.jsx)("div", {
        className: o()(S.header, this.props.headerClassName),
        children: this.renderHeader()
      }), (0, r.jsx)("div", {
        className: S.content,
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
      e.key === O.vn.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
    }), I(this, "handleChangeQuery", e => {
      (0, f.ql)(e), this.search(e, b.wI2.SEARCH)
    }), I(this, "handleSelectSuggestion", e => {
      (0, f.ql)(""), u.v2(), this.search(e, b.wI2.SEARCH_SUGGESTION, true)
    }), I(this, "handleClearQuery", () => {
      let {
        current: e
      } = this.props.searchBarRef;
      (0, f.ql)(""), u.v2(), this.setState({
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
        case b.wI2.TRENDING_CATEGORY:
          u.yC(t, b.wI2.TRENDING_CATEGORY, true), null != n && n.focus();
          break;
        case b.wI2.TRENDING_GIFS:
          u.UU()
      }
      this.setState({
        resultType: e
      })
    })
  }
}
let w = Chunk473749.forwardRef((e, t) => {
  i.useEffect(() => {
    if (!e.persistSearch) {
      var t;
      (0, f.ql)(null != (t = e.initialQuery) ? t : "")
    }
  }, [e.persistSearch, e.initialQuery]);
  let {
    query: n,
    resultQuery: a,
    resultItems: o,
    suggestions: l
  } = (0, s.cj)([p.Z], () => ({
    query: p.Z.getQuery(),
    resultQuery: p.Z.getResultQuery(),
    resultItems: p.Z.getResultItems(),
    suggestions: p.Z.getSuggestions()
  })), c = (0, f.Iu)(e => e.searchQuery), u = null != n && "" !== n ? n : c, d = (0, _.HI)(), h = i.useRef(null);
  return (0, r.jsx)(P, A(T({}, e), {
    forwardedRef: t,
    query: u,
    resultQuery: a,
    resultItems: o,
    suggestions: l,
    favorites: d,
    searchOffset: 0,
    searchTotalResults: p.Z.getResultItems().length,
    searchLimit: null,
    searchBarRef: h,
    selectedGIF: e.selectedGIF
  }))
})
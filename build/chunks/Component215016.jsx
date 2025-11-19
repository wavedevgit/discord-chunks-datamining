/** Chunk was on web.js **/
/** chunk id: 215016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PY: () => B,
  ZP: () => Z,
  iR: () => U
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk944611 = require("./944611.js"),
  Chunk377108 = require("./377108.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk68405 = require("./68405.js"),
  Chunk527429 = require("./527429.js"),
  Chunk788911 = require("./788911.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk198620 = require("./198620.js"),
  Chunk29909 = require("./29909.jsx"),
  Chunk591759 = require("./591759.js"),
  Chunk132748 = require("./132748.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397581 = require("./397581.js");

function T(e, t, n) {
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
      T(e, t, n[t])
    })
  }
  return e
}
let A = [Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
  C = 220,
  N = 1220,
  R = Array.from({
    length: 16
  }).map((e, t) => ({
    id: "".concat(t),
    height: Math.floor(100 * Math.random()) + 120
  }));

function P(e) {
  var t;
  return null != (t = e.id) ? t : e.src
}

function D(e, t) {
  let n = R[t];
  return null == n ? 0 : n.height
}

function w(e, t, n, i) {
  if (!(e > 0)) return null == R[t] ? null : (0, r.jsx)("div", {
    className: I.placeholder,
    style: S({
      animationDelay: "".concat(75 * t, "ms")
    }, n)
  }, i)
}

function L(e, t) {
  var n, r;
  return e > 0 ? "" : null != (r = null == (n = R[t]) ? true : n.id) ? r : ""
}

function x(e) {
  return e === u.EO.VIDEO
}

function M(e) {
  return ((0, g._M)(e) || (0, g.MO)(e)) && (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))
}

function j(e) {
  return ((0, g._M)(e) || (0, g.MO)(e)) && e.pathname.toLowerCase().endsWith(".gif")
}

function k(e) {
  let t = b.Z.toURLSafe(e),
    n = null != t && j(t);
  return null != t && (M(t) || n) ? (n && t.searchParams.set("format", "webp"), t.searchParams.set("animated", "true"), t.toString()) : e
}
class U extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      props: {
        format: e,
        src: t,
        coords: {
          width: n,
          height: r
        },
        videoPool: i
      },
      ref: a
    } = this;
    if (module !== Chunk377108.EO.VIDEO || null == Chunk120356) return;
    let o = Chunk473749.getElement();
    o.oncanplay = this.handleCanPlay, o.src = exports, o.width = require, o.height = Chunk54381, Chunk120356.appendChild(o), this._video = o
  }
  componentDidUpdate(e) {
    let {
      width: t,
      height: n
    } = this.props.coords;
    null != this._video && (e.coords.width !== t || e.coords.height !== n) && (this._video.width = t, this._video.height = n)
  }
  componentWillUnmount() {
    this._mounted = false;
    let {
      _image: e,
      _video: t
    } = this, {
      imagePool: n,
      videoPool: r
    } = this.props;
    null != module && (this._image = null, require.poolElement(module)), null != exports && (this._video = null, Chunk54381.poolElement(exports))
  }
  renderGIF() {
    let {
      src: e,
      coords: {
        width: t,
        height: n
      }
    } = this.props, {
      loaded: i
    } = this.state;
    return Chunk473749 ? (0, Chunk54381.jsx)("img", {
      src: k(module),
      width: exports,
      height: require,
      className: Chunk397581.gif,
      alt: ""
    }) : null
  }
  render() {
    let {
      item: e,
      renderExtras: t,
      format: n,
      coords: i,
      focused: a,
      selected: o
    } = this.props, {
      color: s,
      loaded: l
    } = this.state;
    return (0, Chunk54381.jsxs)(Chunk481060.P3F, {
      tabIndex: false,
      innerRef: e => {
        this.ref = e
      },
      className: Chunk397581.result,
      "data-focused": Chunk120356,
      "data-selected": o,
      onClick: this.handleClick,
      style: S({
        backgroundColor: l ? true : Chunk392711
      }, Chunk473749),
      children: [x(require) ? null : this.renderGIF(), null != exports ? exports(module) : null]
    })
  }
  constructor(e) {
    super(e), T(this, "ref", null), T(this, "_video", null), T(this, "_image", null), T(this, "_mounted", true), T(this, "handleCanPlay", () => {
      this._mounted && this.setState({
        loaded: true
      })
    }), T(this, "handleClick", () => {
      let {
        onClick: e,
        item: t,
        index: n
      } = this.props;
      null != e && e(t, n)
    });
    let {
      format: t,
      color: n,
      imagePool: r
    } = this.props;
    this.state = {
      color: null == n ? l().sample(A) : n,
      loaded: false
    }, x(t) || (this._image = r.getElement(), this._image.onload = () => this.setState({
      loaded: true
    }), this._image.src = e.src)
  }
}
class G extends Chunk473749.PureComponent {
  componentDidMount() {
    let {
      resultType: e,
      data: t
    } = this.props;
    module === Chunk981631.wI2.FAVORITES && ((0, Chunk68405.t1)(Chunk981631.wI2.FAVORITES), (0, Chunk68405.hM)(exports, Chunk981631.wI2.FAVORITES, {
      limit: null
    }))
  }
  selectItem(e, t) {
    let {
      onSelectGIF: n,
      resultType: r,
      data: i,
      resultQuery: a
    } = this.props;
    null != n && n(e), (0, _.R7)({
      type: r,
      index: t,
      offset: this.props.searchOffset,
      limit: this.props.searchLimit,
      results: i.length,
      totalResults: this.props.searchTotalResults,
      query: a,
      gifId: e.id
    })
  }
  getSectionHeight(e) {
    return 1 === e ? C : 0
  }
  renderEmptyFavorite(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return (0, r.jsx)("div", {
      className: I.emptyHint,
      children: null != e ? (0, r.jsxs)("div", {
        className: I.emptyHintCard,
        children: [t ? (0, r.jsx)(f.r7p, {
          size: "xs",
          color: "currentColor",
          className: I.emptyHintFavorite
        }) : null, (0, r.jsx)("div", {
          className: I.emptyHintText,
          children: e
        })]
      }) : (0, r.jsx)("div", {
        className: I.emptyHintSpacer
      })
    })
  }
  renderEmptyFavorites() {
    return (0, Chunk54381.jsx)(Chunk481060.Ttm, {
      className: Chunk397581.results,
      fade: true,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk397581.emptyHints,
        children: [this.renderEmptyFavorite(Chunk388032.intl.string(Chunk388032.t["3gyw4Z"]), true), this.renderEmptyFavorite(Chunk388032.intl.string(Chunk388032.t.yThUi4)), this.renderEmptyFavorite(Chunk388032.intl.string(Chunk388032.t.MeP0SF)), Array.from({
          length: 15
        }).map((e, t) => (0, r.jsx)(i.Fragment, {
          children: this.renderEmptyFavorite()
        }, t)), this.renderEmptyFavorite(Chunk388032.intl.string(Chunk388032.t["5u99Xb"])), Array.from({
          length: 16
        }).map((e, t) => (0, r.jsx)(i.Fragment, {
          children: this.renderEmptyFavorite()
        }, t)), this.renderEmptyFavorite(Chunk388032.intl.string(Chunk388032.t.o6CLL4))]
      })
    })
  }
  render() {
    let {
      data: e,
      resultQuery: t,
      query: n,
      resultType: i
    } = this.props;
    return 0 === module.length && exports === require && Chunk473749 !== Chunk981631.wI2.TRENDING_GIFS ? Chunk473749 === Chunk981631.wI2.FAVORITES ? this.renderEmptyFavorites() : (0, Chunk54381.jsx)(Chunk788911.Z, {
      message: Chunk388032.intl.string(Chunk388032.t["5dX4UM"]),
      className: Chunk397581.noResults
    }) : (0, Chunk54381.jsx)(Chunk527429.Z, {
      getItemGrid: this.getItemGrid,
      getCoordsMap: this.getCoordsMap,
      onFocus: this.handleFocus,
      onSelect: this.handleSelect,
      children: (0, Chunk54381.jsx)(Chunk132748.Z, {
        desiredItemWidth: 200,
        maxColumns: 8,
        children: this.renderContent
      })
    }, exports)
  }
  constructor(...e) {
    super(...e), T(this, "_masonryRef", i.createRef()), T(this, "prevResultQuery", null), T(this, "state", {
      focusedId: null
    }), T(this, "handleFocus", e => {
      let {
        current: t
      } = this._masonryRef;
      if (null == t) return;
      let n = t.getCoordsMap()[e];
      null != n && (t.scrollIntoViewRect({
        start: n.top - 10,
        end: n.top + n.height + 10
      }), this.setState({
        focusedId: e
      }))
    }), T(this, "handleSelect", e => {
      let t, {
          data: n
        } = this.props,
        r = n.findIndex(t => P(t) === e);
      false !== r && (t = n[r]), null != t && this.selectItem(t, r)
    }), T(this, "handleClickItem", (e, t) => {
      this.selectItem(e, t)
    }), T(this, "handleScroll", () => {
      let {
        resultQuery: e
      } = this.props, {
        current: t
      } = this._masonryRef;
      if (null == t) return;
      let {
        scrollTop: n,
        scrollHeight: r
      } = t.getScrollerState();
      r - n <= N && (e !== this.prevResultQuery && (0, _.mO)(e), this.prevResultQuery = e)
    }), T(this, "renderItem", (e, t, n, i) => {
      if (e > 0) return null;
      let {
        focusedId: a
      } = this.state, {
        selectedGIF: o
      } = this.props, s = this.props.data[t];
      if (null == s) return null;
      let l = null != o && P(o) === P(s);
      return (0, r.jsx)(U, {
        item: s,
        index: t,
        format: s.format,
        src: s.src,
        coords: n,
        onClick: this.handleClickItem,
        renderExtras: () => (0, r.jsx)(E.Z, S({
          className: I.favButton
        }, s)),
        focused: P(s) === a,
        imagePool: this.props.imagePool,
        videoPool: this.props.videoPool,
        selected: l
      }, i)
    }), T(this, "getItemHeight", (e, t, n) => {
      if (e > 0) return 0;
      let r = this.props.data[t];
      return null == r ? 0 : n * (r.height / r.width)
    }), T(this, "getItemKey", (e, t) => {
      var n;
      if (e > 0) return null;
      let r = this.props.data[t];
      return null != r ? null != (n = r.id) ? n : r.src : null
    }), T(this, "renderSection", (e, t, n) => {
      let {
        onSelectSuggestion: a,
        suggestions: o
      } = this.props;
      return 1 === e ? (0, r.jsx)("div", {
        className: I.endContainer,
        style: t,
        children: o.length > 0 ? (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)("div", {
            className: I.endText,
            children: v.intl.string(v.t["3JGJo2"])
          }), (0, r.jsx)(f.ButtonGroup, {
            size: "sm",
            className: I.searchSuggestions,
            children: o.map(e => (0, r.jsx)(f.Button, {
              variant: "secondary",
              onClick: () => {
                a(e)
              },
              text: e
            }, e))
          })]
        }) : null
      }, n) : null
    }), T(this, "renderContent", (e, t, n) => {
      let {
        className: i,
        data: a,
        resultQuery: s,
        query: l,
        resultType: c
      } = this.props;
      return 0 === a.length && (s !== l || c === O.wI2.TRENDING_GIFS) ? (0, r.jsx)(f.GMG, {
        fade: true,
        className: o()(I.results, i),
        sections: [R.length],
        columns: e,
        itemGutter: 12,
        getItemKey: L,
        getItemHeight: D,
        renderItem: w,
        chunkSize: 128
      }, s) : (0, r.jsx)(f.GMG, {
        ref: this._masonryRef,
        fade: true,
        itemGutter: 12,
        className: o()(I.results, i),
        columns: e,
        sections: [a.length, 0],
        getItemKey: this.getItemKey,
        getItemHeight: this.getItemHeight,
        renderItem: this.renderItem,
        getSectionHeight: this.getSectionHeight,
        renderSection: this.renderSection,
        onScroll: this.handleScroll,
        chunkSize: 128
      }, "".concat(s, "-").concat(null != c ? c : ""))
    }), T(this, "getItemGrid", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getItemGrid() : []
    }), T(this, "getCoordsMap", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getCoordsMap() : {}
    })
  }
}

function B() {
  let {
    renderWindow: e
  } = Chunk473749.useContext(Chunk728285.ZP), t = module.document, [n] = Chunk473749.useState(() => new Chunk944611.w(() => exports.createElement("img"), e => {
    e.onload = null, e.src = ""
  })), [r] = Chunk473749.useState(() => new Chunk944611.w(() => {
    let e = exports.createElement("video");
    return module.className = Chunk397581.gif, module.autoplay = true, module.loop = true, module.muted = true, module.preload = "auto", module.controls = false, module
  }, e => {
    e.src = "", e.oncanplay = null;
    let {
      parentNode: t
    } = e;
    null != t && t.removeChild(e)
  }));
  return {
    imagePool: require,
    videoPool: Chunk54381
  }
}
let Z = function(e) {
  let t = B();
  return (0, r.jsx)(G, S({}, e, t))
}
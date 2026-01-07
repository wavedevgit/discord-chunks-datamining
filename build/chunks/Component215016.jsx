/** Chunk was on web.js **/
/** chunk id: 215016, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PY: () => Z,
  ZP: () => F,
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
  Chunk990233 = require("./990233.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk83292 = require("./83292.js");

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
let C = [Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
  A = 220,
  N = 1220,
  P = Array.from({
    length: 16
  }).map((e, t) => ({
    id: "".concat(t),
    height: Math.floor(100 * Math.random()) + 120
  }));

function R(e) {
  var t;
  return null != (t = e.id) ? t : e.src
}

function w(e, t) {
  let n = P[t];
  return null == n ? 0 : n.height
}

function D(e, t, n, i) {
  if (!(e > 0)) return null == P[t] ? null : (0, r.jsx)("div", {
    className: S.placeholder,
    style: T({
      animationDelay: "".concat(75 * t, "ms")
    }, n)
  }, i)
}

function x(e, t) {
  var n, r;
  return e > 0 ? "" : null != (r = null == (n = P[t]) ? true : n.id) ? r : ""
}

function L(e) {
  return e === u.EO.VIDEO
}

function j(e) {
  return ((0, g._M)(e) || (0, g.MO)(e)) && (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))
}

function M(e) {
  return ((0, g._M)(e) || (0, g.MO)(e)) && e.pathname.toLowerCase().endsWith(".gif")
}

function k(e) {
  let t = b.Z.toURLSafe(e),
    n = null != t && M(t);
  return null != t && (j(t) || n) ? (n && t.searchParams.set("format", "webp"), t.searchParams.set("animated", "true"), t.toString()) : e
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
    if (e !== u.EO.VIDEO || null == a) return;
    let o = i.getElement();
    o.oncanplay = this.handleCanPlay, o.src = t, o.width = n, o.height = r, a.appendChild(o), this._video = o
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
    null != e && (this._image = null, n.poolElement(e)), null != t && (this._video = null, r.poolElement(t))
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
    return i ? (0, r.jsx)("img", {
      src: k(e),
      width: t,
      height: n,
      className: S.gif,
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
    return (0, r.jsxs)(f.P3F, {
      tabIndex: false,
      innerRef: e => {
        this.ref = e
      },
      className: S.result,
      "data-focused": a,
      "data-selected": o,
      onClick: this.handleClick,
      style: T({
        backgroundColor: l ? true : s
      }, i),
      children: [L(n) ? null : this.renderGIF(), null != t ? t(e) : null]
    })
  }
  constructor(e) {
    super(e), I(this, "ref", null), I(this, "_video", null), I(this, "_image", null), I(this, "_mounted", true), I(this, "handleCanPlay", () => {
      this._mounted && this.setState({
        loaded: true
      })
    }), I(this, "handleClick", () => {
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
      color: null == n ? l().sample(C) : n,
      loaded: false
    }, L(t) || (this._image = r.getElement(), this._image.onload = () => this.setState({
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
    e === O.wI2.FAVORITES && ((0, p.t1)(O.wI2.FAVORITES), (0, p.hM)(t, O.wI2.FAVORITES, {
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
    null != n && n(e), (0, p.R7)({
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
    return 1 === e ? A : 0
  }
  renderEmptyFavorite(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    return (0, r.jsx)("div", {
      className: S.emptyHint,
      children: null != e ? (0, r.jsxs)("div", {
        className: S.emptyHintCard,
        children: [t ? (0, r.jsx)(f.r7p, {
          size: "xs",
          color: "currentColor",
          className: S.emptyHintFavorite
        }) : null, (0, r.jsx)("div", {
          className: S.emptyHintText,
          children: e
        })]
      }) : (0, r.jsx)("div", {
        className: S.emptyHintSpacer
      })
    })
  }
  renderEmptyFavorites() {
    return (0, r.jsx)(f.Ttm, {
      className: S.results,
      fade: true,
      children: (0, r.jsxs)("div", {
        className: S.emptyHints,
        children: [this.renderEmptyFavorite(v.intl.string(v.t["3gyw4Z"]), true), this.renderEmptyFavorite(v.intl.string(v.t.yThUi4)), this.renderEmptyFavorite(v.intl.string(v.t.MeP0SF)), Array.from({
          length: 15
        }).map((e, t) => (0, r.jsx)(i.Fragment, {
          children: this.renderEmptyFavorite()
        }, t)), this.renderEmptyFavorite(v.intl.string(v.t["5u99Xb"])), Array.from({
          length: 16
        }).map((e, t) => (0, r.jsx)(i.Fragment, {
          children: this.renderEmptyFavorite()
        }, t)), this.renderEmptyFavorite(v.intl.string(v.t.o6CLL4))]
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
    return 0 === e.length && t === n && i !== O.wI2.TRENDING_GIFS ? i === O.wI2.FAVORITES ? this.renderEmptyFavorites() : (0, r.jsx)(m.Z, {
      message: v.intl.string(v.t["5dX4UM"]),
      className: S.noResults
    }) : (0, r.jsx)(_.Z, {
      getItemGrid: this.getItemGrid,
      getCoordsMap: this.getCoordsMap,
      onFocus: this.handleFocus,
      onSelect: this.handleSelect,
      children: (0, r.jsx)(y.Z, {
        desiredItemWidth: 200,
        maxColumns: 8,
        children: this.renderContent
      })
    }, t)
  }
  constructor(...e) {
    super(...e), I(this, "_masonryRef", i.createRef()), I(this, "prevResultQuery", null), I(this, "state", {
      focusedId: null
    }), I(this, "handleFocus", e => {
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
    }), I(this, "handleSelect", e => {
      let t, {
          data: n
        } = this.props,
        r = n.findIndex(t => R(t) === e);
      false !== r && (t = n[r]), null != t && this.selectItem(t, r)
    }), I(this, "handleClickItem", (e, t) => {
      this.selectItem(e, t)
    }), I(this, "handleScroll", () => {
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
      r - n <= N && (e !== this.prevResultQuery && (0, p.mO)(e), this.prevResultQuery = e)
    }), I(this, "renderItem", (e, t, n, i) => {
      if (e > 0) return null;
      let {
        focusedId: a
      } = this.state, {
        selectedGIF: o
      } = this.props, s = this.props.data[t];
      if (null == s) return null;
      let l = null != o && R(o) === R(s);
      return (0, r.jsx)(U, {
        item: s,
        index: t,
        format: s.format,
        src: s.src,
        coords: n,
        onClick: this.handleClickItem,
        renderExtras: () => (0, r.jsx)(E.Z, T({
          className: S.favButton
        }, s)),
        focused: R(s) === a,
        imagePool: this.props.imagePool,
        videoPool: this.props.videoPool,
        selected: l
      }, i)
    }), I(this, "getItemHeight", (e, t, n) => {
      if (e > 0) return 0;
      let r = this.props.data[t];
      return null == r ? 0 : n * (r.height / r.width)
    }), I(this, "getItemKey", (e, t) => {
      var n;
      if (e > 0) return null;
      let r = this.props.data[t];
      return null != r ? null != (n = r.id) ? n : r.src : null
    }), I(this, "renderSection", (e, t, n) => {
      let {
        onSelectSuggestion: a,
        suggestions: o
      } = this.props;
      return 1 === e ? (0, r.jsx)("div", {
        className: S.endContainer,
        style: t,
        children: o.length > 0 ? (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)("div", {
            className: S.endText,
            children: v.intl.string(v.t["3JGJo2"])
          }), (0, r.jsx)(f.ButtonGroup, {
            size: "sm",
            className: S.searchSuggestions,
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
    }), I(this, "renderContent", (e, t, n) => {
      let {
        className: i,
        data: a,
        resultQuery: s,
        query: l,
        resultType: c
      } = this.props;
      return 0 === a.length && (s !== l || c === O.wI2.TRENDING_GIFS) ? (0, r.jsx)(f.GMG, {
        fade: true,
        className: o()(S.results, i),
        sections: [P.length],
        columns: e,
        itemGutter: 12,
        getItemKey: x,
        getItemHeight: w,
        renderItem: D,
        chunkSize: 128
      }, s) : (0, r.jsx)(f.GMG, {
        ref: this._masonryRef,
        fade: true,
        itemGutter: 12,
        className: o()(S.results, i),
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
    }), I(this, "getItemGrid", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getItemGrid() : []
    }), I(this, "getCoordsMap", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getCoordsMap() : {}
    })
  }
}

function Z() {
  let {
    renderWindow: e
  } = i.useContext(h.ZP), t = e.document, [n] = i.useState(() => new c.w(() => t.createElement("img"), e => {
    e.onload = null, e.src = ""
  })), [r] = i.useState(() => new c.w(() => {
    let e = t.createElement("video");
    return e.className = S.gif, e.autoplay = true, e.loop = true, e.muted = true, e.preload = "auto", e.controls = false, e
  }, e => {
    e.src = "", e.oncanplay = null;
    let {
      parentNode: t
    } = e;
    null != t && t.removeChild(e)
  }));
  return {
    imagePool: n,
    videoPool: r
  }
}
let F = function(e) {
  let t = Z();
  return (0, r.jsx)(G, T({}, e, t))
}
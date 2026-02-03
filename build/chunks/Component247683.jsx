/** Chunk was on web.js **/
/** chunk id: 247683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => V,
  d5: () => F,
  uG: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk152501 = require("./152501.js"),
  Chunk803805 = require("./803805.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk497685 = require("./497685.js"),
  Chunk25277 = require("./25277.js"),
  Chunk537652 = require("./537652.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk202803 = require("./202803.js"),
  Chunk439401 = require("./439401.jsx"),
  Chunk998218 = require("./998218.js"),
  Chunk327143 = require("./327143.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk432391 = require("./432391.js");

function I(e, t, n) {
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
      I(e, t, n[t])
    })
  }
  return e
}
let T = [Chunk827734.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, Chunk827734.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
  C = 220,
  N = 1220,
  w = Array.from({
    length: 16
  }).map((e, t) => ({
    id: "".concat(t),
    height: Math.floor(100 * Math.random()) + 120
  }));

function R(e) {
  var t;
  return null != (t = e.id) ? t : e.src
}

function P(e, t) {
  let n = w[t];
  return null == n ? 0 : n.height
}

function D(e, t, n, i) {
  if (!(e > 0)) return null == w[t] ? null : (0, r.jsx)("div", {
    className: A.qf,
    style: S({
      animationDelay: "".concat(75 * t, "ms")
    }, n)
  }, i)
}

function L(e, t) {
  var n, r;
  return e > 0 ? "" : null != (n = null == (r = w[t]) ? true : r.id) ? n : ""
}

function x(e) {
  return e === u.TL.VIDEO
}

function M(e) {
  return ((0, g.BX)(e) || (0, g.fr)(e)) && (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))
}

function j(e) {
  return ((0, g.BX)(e) || (0, g.fr)(e)) && e.pathname.toLowerCase().endsWith(".gif")
}

function k(e) {
  let t = y.A.toURLSafe(e),
    n = null != t && j(t);
  return null != t && (M(t) || n) ? (n && t.searchParams.set("format", "webp"), t.searchParams.set("animated", "true"), t.toString()) : e
}
class U extends Chunk64700.PureComponent {
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
    if (e !== u.TL.VIDEO || null == a) return;
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
      className: A.nX,
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
    return (0, r.jsxs)(f.DUT, {
      tabIndex: false,
      innerRef: e => {
        this.ref = e
      },
      className: A.Ke,
      "data-focused": a,
      "data-selected": o,
      onClick: this.handleClick,
      style: S({
        backgroundColor: l ? true : s
      }, i),
      children: [x(n) ? null : this.renderGIF(), null != t ? t(e) : null]
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
    const {
      format: t,
      color: n,
      imagePool: r
    } = this.props;
    this.state = {
      color: null == n ? l().sample(T) : n,
      loaded: false
    }, x(t) || (this._image = r.getElement(), this._image.onload = () => this.setState({
      loaded: true
    }), this._image.src = e.src)
  }
}
class G extends Chunk64700.PureComponent {
  componentDidMount() {
    let {
      resultType: e,
      data: t
    } = this.props;
    e === O.dD.FAVORITES && ((0, p.Qh)(O.dD.FAVORITES), (0, p.H9)(t, O.dD.FAVORITES, {
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
    null != n && n(e), (0, p.g4)({
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
      className: A.LA,
      children: null != e ? (0, r.jsxs)("div", {
        className: A.BA,
        children: [t ? (0, r.jsx)(f.Gg5, {
          size: "xs",
          color: "currentColor",
          className: A.$2
        }) : null, (0, r.jsx)("div", {
          className: A.i6,
          children: e
        })]
      }) : (0, r.jsx)("div", {
        className: A.Hc
      })
    })
  }
  renderEmptyFavorites() {
    return (0, r.jsx)(f.HOs, {
      className: A.Xv,
      fade: true,
      children: (0, r.jsxs)("div", {
        className: A.Ep,
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
    return 0 === e.length && t === n && i !== O.dD.TRENDING_GIFS ? i === O.dD.FAVORITES ? this.renderEmptyFavorites() : (0, r.jsx)(h.A, {
      message: v.intl.string(v.t["5dX4UM"]),
      className: A.wV
    }) : (0, r.jsx)(_.A, {
      getItemGrid: this.getItemGrid,
      getCoordsMap: this.getCoordsMap,
      onFocus: this.handleFocus,
      onSelect: this.handleSelect,
      children: (0, r.jsx)(b.A, {
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
      r - n <= N && (e !== this.prevResultQuery && (0, p._E)(e), this.prevResultQuery = e)
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
        renderExtras: () => (0, r.jsx)(E.A, S({
          className: A.uJ
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
        className: A.jZ,
        style: t,
        children: o.length > 0 ? (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)("div", {
            className: A.Z4,
            children: v.intl.string(v.t["3JGJo2"])
          }), (0, r.jsx)(f.ButtonGroup, {
            size: "sm",
            className: A.yB,
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
      return 0 === a.length && (s !== l || c === O.dD.TRENDING_GIFS) ? (0, r.jsx)(f.a0_, {
        fade: true,
        className: o()(A.Xv, i),
        sections: [w.length],
        columns: e,
        itemGutter: 12,
        getItemKey: L,
        getItemHeight: P,
        renderItem: D,
        chunkSize: 128
      }, s) : (0, r.jsx)(f.a0_, {
        ref: this._masonryRef,
        fade: true,
        itemGutter: 12,
        className: o()(A.Xv, i),
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

function F() {
  let {
    renderWindow: e
  } = i.useContext(m.Ay), t = e.document, [n] = i.useState(() => new c.R(() => t.createElement("img"), e => {
    e.onload = null, e.src = ""
  })), [r] = i.useState(() => new c.R(() => {
    let e = t.createElement("video");
    return e.className = A.nX, e.autoplay = true, e.loop = true, e.muted = true, e.preload = "auto", e.controls = false, e
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
let V = function(e) {
  let t = F();
  return (0, r.jsx)(G, S({}, e, t))
}
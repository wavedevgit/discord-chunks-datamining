/** Chunk was on web.js **/
/** chunk id: 247683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => F,
  d5: () => V,
  uG: () => U
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function S(e, t, n) {
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
      S(e, t, n[t])
    })
  }
  return e
}
let T = [Chunk827734.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, Chunk827734.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
  C = 220,
  N = 1220,
  R = Array.from({
    length: 16
  }).map((e, t) => ({
    id: "".concat(t),
    height: Math.floor(100 * Math.random()) + 120
  }));

function w(e) {
  var t;
  return null != (t = e.id) ? t : e.src
}

function P(e, t) {
  let n = R[t];
  return null == n ? 0 : n.height
}

function D(e, t, n, i) {
  if (!(e > 0)) return null == R[t] ? null : (0, r.jsx)("div", {
    className: v.qf,
    style: I({
      animationDelay: "".concat(75 * t, "ms")
    }, n)
  }, i)
}

function x(e, t) {
  var n, r;
  return e > 0 ? "" : null != (n = null == (r = R[t]) ? true : r.id) ? n : ""
}

function L(e) {
  return e === u.TL.VIDEO
}

function j(e) {
  return ((0, g.BX)(e) || (0, g.fr)(e)) && (e.pathname.toLowerCase().endsWith(".webp") || e.pathname.toLowerCase().endsWith(".avif"))
}

function M(e) {
  return ((0, g.BX)(e) || (0, g.fr)(e)) && e.pathname.toLowerCase().endsWith(".gif")
}

function k(e) {
  let t = b.A.toURLSafe(e),
    n = null != t && M(t);
  return null != t && (j(t) || n) ? (n && t.searchParams.set("format", "webp"), t.searchParams.set("animated", "true"), t.toString()) : e
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
    let s = i.getElement();
    s.oncanplay = this.handleCanPlay, s.src = t, s.width = n, s.height = r, a.appendChild(s), this._video = s
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
      className: v.nX,
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
      selected: s
    } = this.props, {
      color: o,
      loaded: l
    } = this.state;
    return (0, r.jsxs)(f.DUT, {
      tabIndex: false,
      innerRef: e => {
        this.ref = e
      },
      className: v.Ke,
      "data-focused": a,
      "data-selected": s,
      onClick: this.handleClick,
      style: I({
        backgroundColor: l ? true : o
      }, i),
      children: [L(n) ? null : this.renderGIF(), null != t ? t(e) : null]
    })
  }
  constructor(e) {
    super(e), S(this, "ref", null), S(this, "_video", null), S(this, "_image", null), S(this, "_mounted", true), S(this, "handleCanPlay", () => {
      this._mounted && this.setState({
        loaded: true
      })
    }), S(this, "handleClick", () => {
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
    }, L(t) || (this._image = r.getElement(), this._image.onload = () => this.setState({
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
      className: v.LA,
      children: null != e ? (0, r.jsxs)("div", {
        className: v.BA,
        children: [t ? (0, r.jsx)(f.Gg5, {
          size: "xs",
          color: "currentColor",
          className: v.$2
        }) : null, (0, r.jsx)("div", {
          className: v.i6,
          children: e
        })]
      }) : (0, r.jsx)("div", {
        className: v.Hc
      })
    })
  }
  renderEmptyFavorites() {
    return (0, r.jsx)(f.HOs, {
      className: v.Xv,
      fade: true,
      children: (0, r.jsxs)("div", {
        className: v.Ep,
        children: [this.renderEmptyFavorite(A.intl.string(A.t["3gyw4Z"]), true), this.renderEmptyFavorite(A.intl.string(A.t.yThUi4)), this.renderEmptyFavorite(A.intl.string(A.t.MeP0SF)), Array.from({
          length: 15
        }).map((e, t) => (0, r.jsx)(i.Fragment, {
          children: this.renderEmptyFavorite()
        }, t)), this.renderEmptyFavorite(A.intl.string(A.t["5u99Xb"])), Array.from({
          length: 16
        }).map((e, t) => (0, r.jsx)(i.Fragment, {
          children: this.renderEmptyFavorite()
        }, t)), this.renderEmptyFavorite(A.intl.string(A.t.o6CLL4))]
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
      message: A.intl.string(A.t["5dX4UM"]),
      className: v.wV
    }) : (0, r.jsx)(_.A, {
      getItemGrid: this.getItemGrid,
      getCoordsMap: this.getCoordsMap,
      onFocus: this.handleFocus,
      onSelect: this.handleSelect,
      children: (0, r.jsx)(y.A, {
        desiredItemWidth: 200,
        maxColumns: 8,
        children: this.renderContent
      })
    }, t)
  }
  constructor(...e) {
    super(...e), S(this, "_masonryRef", i.createRef()), S(this, "prevResultQuery", null), S(this, "state", {
      focusedId: null
    }), S(this, "handleFocus", e => {
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
    }), S(this, "handleSelect", e => {
      let t, {
          data: n
        } = this.props,
        r = n.findIndex(t => w(t) === e);
      false !== r && (t = n[r]), null != t && this.selectItem(t, r)
    }), S(this, "handleClickItem", (e, t) => {
      this.selectItem(e, t)
    }), S(this, "handleScroll", () => {
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
    }), S(this, "renderItem", (e, t, n, i) => {
      if (e > 0) return null;
      let {
        focusedId: a
      } = this.state, {
        selectedGIF: s
      } = this.props, o = this.props.data[t];
      if (null == o) return null;
      let l = null != s && w(s) === w(o);
      return (0, r.jsx)(U, {
        item: o,
        index: t,
        format: o.format,
        src: o.src,
        coords: n,
        onClick: this.handleClickItem,
        renderExtras: () => (0, r.jsx)(E.A, I({
          className: v.uJ
        }, o)),
        focused: w(o) === a,
        imagePool: this.props.imagePool,
        videoPool: this.props.videoPool,
        selected: l
      }, i)
    }), S(this, "getItemHeight", (e, t, n) => {
      if (e > 0) return 0;
      let r = this.props.data[t];
      return null == r ? 0 : n * (r.height / r.width)
    }), S(this, "getItemKey", (e, t) => {
      var n;
      if (e > 0) return null;
      let r = this.props.data[t];
      return null != r ? null != (n = r.id) ? n : r.src : null
    }), S(this, "renderSection", (e, t, n) => {
      let {
        onSelectSuggestion: a,
        suggestions: s
      } = this.props;
      return 1 === e ? (0, r.jsx)("div", {
        className: v.jZ,
        style: t,
        children: s.length > 0 ? (0, r.jsxs)(i.Fragment, {
          children: [(0, r.jsx)("div", {
            className: v.Z4,
            children: A.intl.string(A.t["3JGJo2"])
          }), (0, r.jsx)(f.ButtonGroup, {
            size: "sm",
            className: v.yB,
            children: s.map(e => (0, r.jsx)(f.Button, {
              variant: "secondary",
              onClick: () => {
                a(e)
              },
              text: e
            }, e))
          })]
        }) : null
      }, n) : null
    }), S(this, "renderContent", (e, t, n) => {
      let {
        className: i,
        data: a,
        resultQuery: o,
        query: l,
        resultType: c
      } = this.props;
      return 0 === a.length && (o !== l || c === O.dD.TRENDING_GIFS) ? (0, r.jsx)(f.a0_, {
        fade: true,
        className: s()(v.Xv, i),
        sections: [R.length],
        columns: e,
        itemGutter: 12,
        getItemKey: x,
        getItemHeight: P,
        renderItem: D,
        chunkSize: 128
      }, o) : (0, r.jsx)(f.a0_, {
        ref: this._masonryRef,
        fade: true,
        itemGutter: 12,
        className: s()(v.Xv, i),
        columns: e,
        sections: [a.length, 0],
        getItemKey: this.getItemKey,
        getItemHeight: this.getItemHeight,
        renderItem: this.renderItem,
        getSectionHeight: this.getSectionHeight,
        renderSection: this.renderSection,
        onScroll: this.handleScroll,
        chunkSize: 128
      }, "".concat(o, "-").concat(null != c ? c : ""))
    }), S(this, "getItemGrid", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getItemGrid() : []
    }), S(this, "getCoordsMap", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getCoordsMap() : {}
    })
  }
}

function V() {
  let {
    renderWindow: e
  } = i.useContext(m.Ay), t = e.document, [n] = i.useState(() => new c.R(() => t.createElement("img"), e => {
    e.onload = null, e.src = ""
  })), [r] = i.useState(() => new c.R(() => {
    let e = t.createElement("video");
    return e.className = v.nX, e.autoplay = true, e.loop = true, e.muted = true, e.preload = "auto", e.controls = false, e
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
  let t = V();
  return (0, r.jsx)(G, I({}, e, t))
}
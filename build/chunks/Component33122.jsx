/** Chunk was on 92504 **/
/** chunk id: 33122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R,
  r: () => S
}), require("./388685.js");
var a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk446411 = require("./446411.jsx"),
  Chunk468846 = require("./468846.jsx"),
  Chunk679056 = require("./679056.jsx"),
  Chunk44488 = require("./44488.jsx"),
  Chunk519160 = require("./519160.jsx"),
  Chunk124347 = require("./124347.jsx"),
  Chunk283756 = require("./283756.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk128792 = require("./128792.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function I() {
  var e, t;
  let n = (e = ["grayscale(", ")"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  })));
  return I = function() {
    return n
  }, n
}
let S = {
    SMALL: {
      width: 640,
      height: 360,
      margin: 15
    },
    MEDIUM: {
      width: 880,
      height: 495,
      margin: 20
    }
  },
  P = {
    width: 1920,
    height: 1080
  },
  O = {
    width: 1280,
    height: 720
  },
  E = e => {
    var t, n;
    return (0, x.lV)((t = y({}, e), n = n = {
      className: j.videoWrapper,
      mediaPlayerClassName: j.mediaPlayer
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        n.push.apply(n, a)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  },
  N = e => (0, r.jsx)(g.ZP, y({}, e)),
  T = e => {
    let t, n, a, {
      item: i,
      size: l,
      onPlay: s,
      onEnded: o,
      onClick: d,
      playable: m,
      volume: h,
      isMuted: f,
      onVolumeChange: g,
      onMute: b
    } = e;
    if (i.type === C.s9s.YOUTUBE_VIDEO) t = y({
      url: (0, C.n8r)(i.youtubeVideoId)
    }, P), n = y({
      url: "".concat((0, C.ivE)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
    }, O), a = p.pn.YOUTUBE;
    else {
      let e = null != i.width ? i.width : 0,
        a = null != i.height ? i.height : 0;
      t = {
        url: i.thumbnailSrc,
        width: e,
        height: a
      }, n = {
        url: i.src,
        proxyURL: i.src,
        width: e,
        height: a
      }
    }
    let v = (0, r.jsx)(u.BC, {
      href: null,
      thumbnail: t,
      video: n,
      provider: a,
      allowFullScreen: true,
      maxHeight: l.height,
      maxWidth: l.width,
      onPlay: s,
      onEnded: o,
      playable: m,
      className: j.video,
      volume: h,
      onVolumeChange: g,
      autoMute: f,
      onMute: b,
      autoPlay: m,
      renderVideoComponent: E,
      renderImageComponent: N,
      renderLinkComponent: x.iT
    });
    return m ? v : (0, r.jsx)(c.P3F, {
      className: j.itemImageWrapper,
      onClick: d,
      children: v
    })
  },
  A = () => (0, r.jsx)("div", {
    className: j.paginationVideoOverlay,
    children: (0, r.jsx)(b.Z, {
      inactive: true,
      className: j.paginationVideoPlayPill,
      renderLinkComponent: x.iT
    })
  });
class L extends(a = Chunk473749.PureComponent) {
  componentDidMount() {
    v.S.subscribe(C.CkL.CAROUSEL_PREV, this.manualPrevious), v.S.subscribe(C.CkL.CAROUSEL_NEXT, this.manualNext)
  }
  componentWillUnmount() {
    v.S.unsubscribe(C.CkL.CAROUSEL_PREV, this.manualPrevious), v.S.unsubscribe(C.CkL.CAROUSEL_NEXT, this.manualNext)
  }
  getStyle(e, t) {
    let n = t.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: o.Z.Extrapolate.CLAMP
    });
    return {
      opacity: t.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: o.Z.Extrapolate.CLAMP
      }),
      filter: o.Z.template(I(), n)
    }
  }
  handleCurrentItemClick(e, t) {
    let {
      onCurrentItemClick: n
    } = this.props;
    null != n && n(e, t), this.setState({
      hasInteracted: true
    })
  }
  handleEdgeItemMouseEnter(e) {
    let {
      currentIndex: t
    } = this.state;
    e < t ? this.setState({
      hoveringPreviousItem: true
    }) : e > t && this.setState({
      hoveringNextItem: true
    })
  }
  renderCarousel() {
    let {
      items: e
    } = this.props, {
      currentIndex: t,
      animate: n,
      hoveringPreviousItem: a,
      hoveringNextItem: i
    } = this.state, l = (0, r.jsx)(f.ZP, {
      items: e,
      itemSize: this.getItemSize(),
      renderItem: this.renderItem,
      currentIndex: t,
      animate: n,
      edgeItems: 2
    });
    return e.length <= 1 ? l : (0, r.jsxs)("div", {
      className: j.carouselButtonsContainer,
      children: [l, (0, r.jsx)(h.am, {
        onClick: this.manualPrevious,
        className: s()(j.arrow, {
          [j.arrowHovered]: a
        })
      }), (0, r.jsx)(h.Pz, {
        onClick: this.manualNext,
        className: s()(j.arrow, {
          [j.arrowHovered]: i
        })
      })]
    })
  }
  getPaginationSrc(e) {
    return e.type === C.s9s.YOUTUBE_VIDEO ? (0, C.n8r)(e.youtubeVideoId) : e.type === C.s9s.IMG ? e.src : e.type === C.s9s.VIDEO ? e.thumbnailSrc : null
  }
  render() {
    let {
      items: e,
      className: t,
      autoplayInterval: n,
      paused: a
    } = this.props, {
      currentIndex: i,
      playingVideo: l,
      hasInteracted: s
    } = this.state;
    return (0, r.jsxs)(m.Z, {
      pauseOnHover: true,
      onInterval: this.autoNext,
      interval: n,
      className: t,
      disable: l || s || a,
      children: [this.renderCarousel(), (0, r.jsx)("div", {
        className: j.pagination,
        children: (0, r.jsx)(h.ZP, {
          renderItem: this.renderPaginationItem,
          scrollToPadding: 85,
          items: e,
          selectedIndex: i,
          onSetItem: e => this.setItem(e, true),
          paginationContainerClass: j.scroller,
          align: e.length < 6 ? h.ZP.Align.LEFT : h.ZP.Align.CENTER
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      currentIndex: 0,
      animate: true,
      playingVideo: false,
      hasInteracted: false,
      hoveringPreviousItem: false,
      hoveringNextItem: false,
      volume: 1,
      isMuted: true
    }), _(this, "getItemSize", () => {
      let {
        width: e
      } = this.props, t = S.MEDIUM;
      return null != e && e < t.width && (t = S.SMALL), t
    }), _(this, "setItem", (e, t) => {
      let {
        props: {
          items: n,
          onIntentionalChange: a
        },
        state: {
          currentIndex: r
        }
      } = this, i = (0, f.gN)(r, n.length), l = (0, f.gN)(e, n.length), s = 1 === Math.abs(e - i) || e === n.length - 1 && 0 === i || 0 === e && i === n.length - 1;
      this.setState({
        playingVideo: false,
        currentIndex: l,
        animate: s,
        hasInteracted: t
      }), t && null != a && a(n[l], i, l)
    }), _(this, "autoNext", () => {
      this.setItem(this.state.currentIndex + 1, false)
    }), _(this, "manualNext", () => {
      this.setItem(this.state.currentIndex + 1, true)
    }), _(this, "manualPrevious", () => {
      this.setItem(this.state.currentIndex - 1, true)
    }), _(this, "handlePlay", e => this.setState({
      playingVideo: true,
      hasInteracted: !e
    })), _(this, "handleEnded", () => {
      this.state.hasInteracted || this.autoNext()
    }), _(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: true
      })
    }), _(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: true
      })
    }), _(this, "handleVideoClick", e => {
      this.setItem(e, true)
    }), _(this, "handleEdgeItemMouseLeave", () => {
      this.setState({
        hoveringPreviousItem: false,
        hoveringNextItem: false
      })
    }), _(this, "renderCarouselImage", (e, t, n) => n ? (0, r.jsx)(c.P3F, {
      onClick: () => this.handleCurrentItemClick(e, t),
      className: j.itemImageWrapper,
      children: (0, r.jsx)("img", {
        src: e.src,
        alt: "",
        className: j.currentImage
      })
    }) : (0, r.jsx)(c.P3F, {
      onClick: () => this.setItem(t, true),
      className: j.itemImageWrapper,
      children: (0, r.jsx)("img", {
        alt: "",
        className: j.itemImage,
        src: e.src,
        draggable: false
      })
    })), _(this, "renderItem", (e, t, n) => {
      let {
        currentIndex: a,
        volume: i,
        isMuted: l
      } = this.state, c = t === (0, f.gN)(a, this.props.items.length);
      return (0, r.jsx)(o.Z.div, {
        className: s()(j.item, {
          [j.currentItem]: c
        }),
        style: null != n ? this.getStyle(t, n) : null,
        onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
        onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
        children: e.type === C.s9s.VIDEO || e.type === C.s9s.YOUTUBE_VIDEO ? (0, r.jsx)(T, {
          item: e,
          size: this.getItemSize(),
          onPlay: this.handlePlay,
          onEnded: this.handleEnded,
          playable: c,
          onClick: () => this.handleVideoClick(t),
          volume: i,
          onVolumeChange: this.handleVolumeChange,
          isMuted: l,
          onMute: this.handleMute
        }) : this.renderCarouselImage(e, t, c)
      })
    }), _(this, "renderPaginationItem", (e, t) => {
      let {
        currentIndex: n
      } = this.state, a = n === t;
      return (0, r.jsxs)("div", {
        className: s()(j.paginationItem, a ? j.selectedStorePaginationItem : j.unselectedStorePaginationItem),
        children: [(0, r.jsx)("img", {
          alt: null == e.alt ? t : e.alt,
          className: j.storePaginationImg,
          src: this.getPaginationSrc(e),
          draggable: false
        }), e.type === C.s9s.YOUTUBE_VIDEO || e.type === C.s9s.VIDEO ? (0, r.jsx)(A, {}) : null, a ? (0, r.jsx)("div", {
          className: j.overlappingBorder
        }) : null]
      }, "page-".concat(t))
    })
  }
}
_(L, "defaultProps", {
  autoplayInterval: 8e3,
  paused: false
});
let R = (0, Chunk112724.Z)(L)
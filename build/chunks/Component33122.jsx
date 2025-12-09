/** Chunk was on 69844 **/
/** chunk id: 33122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R,
  r: () => S
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
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
  Chunk542736 = require("./542736.js");

function j(e, t, n) {
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function I() {
  var e, t;
  let n = (e = ["grayscale(", ")"], exports || (t = module.slice(0)), Object.freeze(Object.defineProperties(module, {
    raw: {
      value: Object.freeze(exports)
    }
  })));
  return I = function() {
    return require
  }, require
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
    return (0, b.lV)((t = y({}, e), n = n = {
      className: C.videoWrapper,
      mediaPlayerClassName: C.mediaPlayer
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  },
  N = e => (0, a.jsx)(f.ZP, y({}, e)),
  T = e => {
    let t, n, r, {
      item: i,
      size: l,
      onPlay: s,
      onEnded: o,
      onClick: d,
      playable: m,
      volume: h,
      isMuted: g,
      onVolumeChange: f,
      onMute: _
    } = e;
    if (i.type === v.s9s.YOUTUBE_VIDEO) t = y({
      url: (0, v.n8r)(i.youtubeVideoId)
    }, P), n = y({
      url: "".concat((0, v.ivE)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
    }, O), r = p.pn.YOUTUBE;
    else {
      let e = null != i.width ? i.width : 0,
        r = null != i.height ? i.height : 0;
      t = {
        url: i.thumbnailSrc,
        width: e,
        height: r
      }, n = {
        url: i.src,
        proxyURL: i.src,
        width: e,
        height: r
      }
    }
    let x = (0, a.jsx)(u.BC, {
      href: null,
      thumbnail: t,
      video: n,
      provider: r,
      allowFullScreen: true,
      maxHeight: l.height,
      maxWidth: l.width,
      onPlay: s,
      onEnded: o,
      playable: m,
      className: C.video,
      volume: h,
      onVolumeChange: f,
      autoMute: g,
      onMute: _,
      autoPlay: m,
      renderVideoComponent: E,
      renderImageComponent: N,
      renderLinkComponent: b.iT
    });
    return m ? x : (0, a.jsx)(c.P3F, {
      className: C.itemImageWrapper,
      onClick: d,
      children: x
    })
  },
  A = () => (0, Chunk54381.jsx)("div", {
    className: Chunk542736.paginationVideoOverlay,
    children: (0, Chunk54381.jsx)(Chunk283756.Z, {
      inactive: true,
      className: Chunk542736.paginationVideoPlayPill,
      renderLinkComponent: Chunk524444.iT
    })
  });
class L extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    Chunk585483.S.subscribe(Chunk981631.CkL.CAROUSEL_PREV, this.manualPrevious), Chunk585483.S.subscribe(Chunk981631.CkL.CAROUSEL_NEXT, this.manualNext)
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.CAROUSEL_PREV, this.manualPrevious), Chunk585483.S.unsubscribe(Chunk981631.CkL.CAROUSEL_NEXT, this.manualNext)
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
      hoveringPreviousItem: r,
      hoveringNextItem: i
    } = this.state, l = (0, Chunk54381.jsx)(Chunk519160.ZP, {
      items: module,
      itemSize: this.getItemSize(),
      renderItem: this.renderItem,
      currentIndex: exports,
      animate: require,
      edgeItems: 2
    });
    return module.length <= 1 ? Chunk120356 : (0, Chunk54381.jsxs)("div", {
      className: Chunk542736.carouselButtonsContainer,
      children: [Chunk120356, (0, Chunk54381.jsx)(Chunk44488.am, {
        onClick: this.manualPrevious,
        className: s()(Chunk542736.arrow, {
          [Chunk542736.arrowHovered]: r
        })
      }), (0, Chunk54381.jsx)(Chunk44488.Pz, {
        onClick: this.manualNext,
        className: s()(Chunk542736.arrow, {
          [Chunk542736.arrowHovered]: Chunk473749
        })
      })]
    })
  }
  getPaginationSrc(e) {
    return e.type === v.s9s.YOUTUBE_VIDEO ? (0, v.n8r)(e.youtubeVideoId) : e.type === v.s9s.IMG ? e.src : e.type === v.s9s.VIDEO ? e.thumbnailSrc : null
  }
  render() {
    let {
      items: e,
      className: t,
      autoplayInterval: n,
      paused: r
    } = this.props, {
      currentIndex: i,
      playingVideo: l,
      hasInteracted: s
    } = this.state;
    return (0, Chunk54381.jsxs)(Chunk679056.Z, {
      pauseOnHover: true,
      onInterval: this.autoNext,
      interval: require,
      className: exports,
      disable: Chunk120356 || s || r,
      children: [this.renderCarousel(), (0, Chunk54381.jsx)("div", {
        className: Chunk542736.pagination,
        children: (0, Chunk54381.jsx)(Chunk44488.ZP, {
          renderItem: this.renderPaginationItem,
          scrollToPadding: 85,
          items: module,
          selectedIndex: Chunk473749,
          onSetItem: e => this.setItem(e, true),
          paginationContainerClass: Chunk542736.scroller,
          align: module.length < 6 ? Chunk44488.ZP.Align.LEFT : Chunk44488.ZP.Align.CENTER
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), j(this, "state", {
      currentIndex: 0,
      animate: true,
      playingVideo: false,
      hasInteracted: false,
      hoveringPreviousItem: false,
      hoveringNextItem: false,
      volume: 1,
      isMuted: true
    }), j(this, "getItemSize", () => {
      let {
        width: e
      } = this.props, t = S.MEDIUM;
      return null != e && e < t.width && (t = S.SMALL), t
    }), j(this, "setItem", (e, t) => {
      let {
        props: {
          items: n,
          onIntentionalChange: r
        },
        state: {
          currentIndex: a
        }
      } = this, i = (0, g.gN)(a, n.length), l = (0, g.gN)(e, n.length), s = 1 === Math.abs(e - i) || e === n.length - 1 && 0 === i || 0 === e && i === n.length - 1;
      this.setState({
        playingVideo: false,
        currentIndex: l,
        animate: s,
        hasInteracted: t
      }), t && null != r && r(n[l], i, l)
    }), j(this, "autoNext", () => {
      this.setItem(this.state.currentIndex + 1, false)
    }), j(this, "manualNext", () => {
      this.setItem(this.state.currentIndex + 1, true)
    }), j(this, "manualPrevious", () => {
      this.setItem(this.state.currentIndex - 1, true)
    }), j(this, "handlePlay", e => this.setState({
      playingVideo: true,
      hasInteracted: !e
    })), j(this, "handleEnded", () => {
      this.state.hasInteracted || this.autoNext()
    }), j(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: true
      })
    }), j(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: true
      })
    }), j(this, "handleVideoClick", e => {
      this.setItem(e, true)
    }), j(this, "handleEdgeItemMouseLeave", () => {
      this.setState({
        hoveringPreviousItem: false,
        hoveringNextItem: false
      })
    }), j(this, "renderCarouselImage", (e, t, n) => n ? (0, a.jsx)(c.P3F, {
      onClick: () => this.handleCurrentItemClick(e, t),
      className: C.itemImageWrapper,
      children: (0, a.jsx)("img", {
        src: e.src,
        alt: "",
        className: C.currentImage
      })
    }) : (0, a.jsx)(c.P3F, {
      onClick: () => this.setItem(t, true),
      className: C.itemImageWrapper,
      children: (0, a.jsx)("img", {
        alt: "",
        className: C.itemImage,
        src: e.src,
        draggable: false
      })
    })), j(this, "renderItem", (e, t, n) => {
      let {
        currentIndex: r,
        volume: i,
        isMuted: l
      } = this.state, c = t === (0, g.gN)(r, this.props.items.length);
      return (0, a.jsx)(o.Z.div, {
        className: s()(C.item, {
          [C.currentItem]: c
        }),
        style: null != n ? this.getStyle(t, n) : null,
        onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
        onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
        children: e.type === v.s9s.VIDEO || e.type === v.s9s.YOUTUBE_VIDEO ? (0, a.jsx)(T, {
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
    }), j(this, "renderPaginationItem", (e, t) => {
      let {
        currentIndex: n
      } = this.state, r = n === t;
      return (0, a.jsxs)("div", {
        className: s()(C.paginationItem, r ? C.selectedStorePaginationItem : C.unselectedStorePaginationItem),
        children: [(0, a.jsx)("img", {
          alt: null == e.alt ? t : e.alt,
          className: C.storePaginationImg,
          src: this.getPaginationSrc(e),
          draggable: false
        }), e.type === v.s9s.YOUTUBE_VIDEO || e.type === v.s9s.VIDEO ? (0, a.jsx)(A, {}) : null, r ? (0, a.jsx)("div", {
          className: C.overlappingBorder
        }) : null]
      }, "page-".concat(t))
    })
  }
}
j(L, "defaultProps", {
  autoplayInterval: 8e3,
  paused: false
});
let R = (0, Chunk112724.Z)(L)
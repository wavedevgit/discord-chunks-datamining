/** Chunk was on 28636 **/
/** chunk id: 503879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L,
  s: () => O
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk456412 = require("./456412.jsx"),
  Chunk871751 = require("./871751.jsx"),
  Chunk259407 = require("./259407.jsx"),
  Chunk133296 = require("./133296.jsx"),
  Chunk848752 = require("./848752.jsx"),
  Chunk452282 = require("./452282.jsx"),
  Chunk619517 = require("./619517.jsx"),
  Chunk893598 = require("./893598.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk709992 = require("./709992.js");

function A(e, t, n) {
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
      A(e, t, n[t])
    })
  }
  return e
}

function C() {
  var e, t;
  let n = (e = ["grayscale(", ")"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  })));
  return C = function() {
    return n
  }, n
}
let O = {
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
  S = {
    width: 1920,
    height: 1080
  },
  I = {
    width: 1280,
    height: 720
  },
  E = e => {
    var t, n;
    return (0, f.$o)((t = y({}, e), n = n = {
      className: j.tN,
      mediaPlayerClassName: j.yf
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
  P = e => (0, l.jsx)(_.Ay, y({}, e)),
  N = e => {
    let t, n, r, {
      item: i,
      size: a,
      onPlay: s,
      onEnded: o,
      onClick: d,
      playable: h,
      volume: m,
      isMuted: g,
      onVolumeChange: _,
      onMute: b
    } = e;
    if (i.type === v.geh.YOUTUBE_VIDEO) t = y({
      url: (0, v.PE$)(i.youtubeVideoId)
    }, S), n = y({
      url: "".concat((0, v.uJ2)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
    }, I), r = p.mt.YOUTUBE;
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
    let x = (0, l.jsx)(u.rr, {
      href: null,
      thumbnail: t,
      video: n,
      provider: r,
      allowFullScreen: true,
      maxHeight: a.height,
      maxWidth: a.width,
      onPlay: s,
      onEnded: o,
      playable: h,
      className: j.Ki,
      volume: m,
      onVolumeChange: _,
      autoMute: g,
      onMute: b,
      autoPlay: h,
      renderVideoComponent: E,
      renderImageComponent: P,
      renderLinkComponent: f.bU
    });
    return h ? x : (0, l.jsx)(c.DUT, {
      className: j.AU,
      onClick: d,
      children: x
    })
  },
  T = () => (0, l.jsx)("div", {
    className: j.eM,
    children: (0, l.jsx)(b.A, {
      inactive: true,
      className: j.J6,
      renderLinkComponent: f.bU
    })
  });
class R extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    x._.subscribe(v.jej.CAROUSEL_PREV, this.manualPrevious), x._.subscribe(v.jej.CAROUSEL_NEXT, this.manualNext)
  }
  componentWillUnmount() {
    x._.unsubscribe(v.jej.CAROUSEL_PREV, this.manualPrevious), x._.unsubscribe(v.jej.CAROUSEL_NEXT, this.manualNext)
  }
  getStyle(e, t) {
    let n = t.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: o.A.Extrapolate.CLAMP
    });
    return {
      opacity: t.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: o.A.Extrapolate.CLAMP
      }),
      filter: o.A.template(C(), n)
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
    } = this.state, a = (0, l.jsx)(g.Ay, {
      items: e,
      itemSize: this.getItemSize(),
      renderItem: this.renderItem,
      currentIndex: t,
      animate: n,
      edgeItems: 2
    });
    return e.length <= 1 ? a : (0, l.jsxs)("div", {
      className: j.HY,
      children: [a, (0, l.jsx)(m.Q8, {
        onClick: this.manualPrevious,
        className: s()(j.UE, {
          [j.h_]: r
        })
      }), (0, l.jsx)(m.Oj, {
        onClick: this.manualNext,
        className: s()(j.UE, {
          [j.h_]: i
        })
      })]
    })
  }
  getPaginationSrc(e) {
    return e.type === v.geh.YOUTUBE_VIDEO ? (0, v.PE$)(e.youtubeVideoId) : e.type === v.geh.IMG ? e.src : e.type === v.geh.VIDEO ? e.thumbnailSrc : null
  }
  render() {
    let {
      items: e,
      className: t,
      autoplayInterval: n,
      paused: r
    } = this.props, {
      currentIndex: i,
      playingVideo: a,
      hasInteracted: s
    } = this.state;
    return (0, l.jsxs)(h.A, {
      pauseOnHover: true,
      onInterval: this.autoNext,
      interval: n,
      className: t,
      disable: a || s || r,
      children: [this.renderCarousel(), (0, l.jsx)("div", {
        className: j.X$,
        children: (0, l.jsx)(m.Ay, {
          renderItem: this.renderPaginationItem,
          scrollToPadding: 85,
          items: e,
          selectedIndex: i,
          onSetItem: e => this.setItem(e, true),
          paginationContainerClass: j.XG,
          align: e.length < 6 ? m.Ay.Align.LEFT : m.Ay.Align.CENTER
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), A(this, "state", {
      currentIndex: 0,
      animate: true,
      playingVideo: false,
      hasInteracted: false,
      hoveringPreviousItem: false,
      hoveringNextItem: false,
      volume: 1,
      isMuted: true
    }), A(this, "getItemSize", () => {
      let {
        width: e
      } = this.props, t = O.MEDIUM;
      return null != e && e < t.width && (t = O.SMALL), t
    }), A(this, "setItem", (e, t) => {
      let {
        props: {
          items: n,
          onIntentionalChange: r
        },
        state: {
          currentIndex: l
        }
      } = this, i = (0, g.U3)(l, n.length), a = (0, g.U3)(e, n.length), s = 1 === Math.abs(e - i) || e === n.length - 1 && 0 === i || 0 === e && i === n.length - 1;
      this.setState({
        playingVideo: false,
        currentIndex: a,
        animate: s,
        hasInteracted: t
      }), t && null != r && r(n[a], i, a)
    }), A(this, "autoNext", () => {
      this.setItem(this.state.currentIndex + 1, false)
    }), A(this, "manualNext", () => {
      this.setItem(this.state.currentIndex + 1, true)
    }), A(this, "manualPrevious", () => {
      this.setItem(this.state.currentIndex - 1, true)
    }), A(this, "handlePlay", e => this.setState({
      playingVideo: true,
      hasInteracted: !e
    })), A(this, "handleEnded", () => {
      this.state.hasInteracted || this.autoNext()
    }), A(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: true
      })
    }), A(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: true
      })
    }), A(this, "handleVideoClick", e => {
      this.setItem(e, true)
    }), A(this, "handleEdgeItemMouseLeave", () => {
      this.setState({
        hoveringPreviousItem: false,
        hoveringNextItem: false
      })
    }), A(this, "renderCarouselImage", (e, t, n) => n ? (0, l.jsx)(c.DUT, {
      onClick: () => this.handleCurrentItemClick(e, t),
      className: j.AU,
      children: (0, l.jsx)("img", {
        src: e.src,
        alt: "",
        className: j.NP
      })
    }) : (0, l.jsx)(c.DUT, {
      onClick: () => this.setItem(t, true),
      className: j.AU,
      children: (0, l.jsx)("img", {
        alt: "",
        className: j.tv,
        src: e.src,
        draggable: false
      })
    })), A(this, "renderItem", (e, t, n) => {
      let {
        currentIndex: r,
        volume: i,
        isMuted: a
      } = this.state, c = t === (0, g.U3)(r, this.props.items.length);
      return (0, l.jsx)(o.A.div, {
        className: s()(j.AS, {
          [j.Xt]: c
        }),
        style: null != n ? this.getStyle(t, n) : null,
        onMouseEnter: c ? null : () => this.handleEdgeItemMouseEnter(t),
        onMouseLeave: c ? null : this.handleEdgeItemMouseLeave,
        children: e.type === v.geh.VIDEO || e.type === v.geh.YOUTUBE_VIDEO ? (0, l.jsx)(N, {
          item: e,
          size: this.getItemSize(),
          onPlay: this.handlePlay,
          onEnded: this.handleEnded,
          playable: c,
          onClick: () => this.handleVideoClick(t),
          volume: i,
          onVolumeChange: this.handleVolumeChange,
          isMuted: a,
          onMute: this.handleMute
        }) : this.renderCarouselImage(e, t, c)
      })
    }), A(this, "renderPaginationItem", (e, t) => {
      let {
        currentIndex: n
      } = this.state, r = n === t;
      return (0, l.jsxs)("div", {
        className: s()(j.Yw, r ? j.sM : j.N7),
        children: [(0, l.jsx)("img", {
          alt: null == e.alt ? t : e.alt,
          className: j.Pr,
          src: this.getPaginationSrc(e),
          draggable: false
        }), e.type === v.geh.YOUTUBE_VIDEO || e.type === v.geh.VIDEO ? (0, l.jsx)(T, {}) : null, r ? (0, l.jsx)("div", {
          className: j.SD
        }) : null]
      }, "page-".concat(t))
    })
  }
}
A(R, "defaultProps", {
  autoplayInterval: 8e3,
  paused: false
});
let L = (0, Chunk456412.A)(R)
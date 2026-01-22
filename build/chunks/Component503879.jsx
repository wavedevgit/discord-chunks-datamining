/** Chunk was on 28636 **/
/** chunk id: 503879, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => L,
  s: () => S
}), require("./896048.js");
var l, Chunk627968 = require("./627968.js"),
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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function O() {
  var e, t;
  let n = (e = ["grayscale(", ")"], t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  })));
  return O = function() {
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
  C = {
    width: 1920,
    height: 1080
  },
  E = {
    width: 1280,
    height: 720
  },
  I = e => {
    var t, n;
    return (0, x.$o)((t = y({}, e), n = n = {
      className: A.tN,
      mediaPlayerClassName: A.yf
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  },
  P = e => (0, a.jsx)(f.Ay, y({}, e)),
  N = e => {
    let t, n, l, {
      item: r,
      size: i,
      onPlay: s,
      onEnded: c,
      onClick: d,
      playable: h,
      volume: m,
      isMuted: b,
      onVolumeChange: f,
      onMute: g
    } = e;
    if (r.type === j.geh.YOUTUBE_VIDEO) t = y({
      url: (0, j.PE$)(r.youtubeVideoId)
    }, C), n = y({
      url: "".concat((0, j.uJ2)(r.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
    }, E), l = p.mt.YOUTUBE;
    else {
      let e = null != r.width ? r.width : 0,
        l = null != r.height ? r.height : 0;
      t = {
        url: r.thumbnailSrc,
        width: e,
        height: l
      }, n = {
        url: r.src,
        proxyURL: r.src,
        width: e,
        height: l
      }
    }
    let v = (0, a.jsx)(u.rr, {
      href: null,
      thumbnail: t,
      video: n,
      provider: l,
      allowFullScreen: true,
      maxHeight: i.height,
      maxWidth: i.width,
      onPlay: s,
      onEnded: c,
      playable: h,
      className: A.Ki,
      volume: m,
      onVolumeChange: f,
      autoMute: b,
      onMute: g,
      autoPlay: h,
      renderVideoComponent: I,
      renderImageComponent: P,
      renderLinkComponent: x.bU
    });
    return h ? v : (0, a.jsx)(o.DUT, {
      className: A.AU,
      onClick: d,
      children: v
    })
  },
  R = () => (0, a.jsx)("div", {
    className: A.eM,
    children: (0, a.jsx)(g.A, {
      inactive: true,
      className: A.J6,
      renderLinkComponent: x.bU
    })
  });
class T extends(l = Chunk64700.PureComponent) {
  componentDidMount() {
    v._.subscribe(j.jej.CAROUSEL_PREV, this.manualPrevious), v._.subscribe(j.jej.CAROUSEL_NEXT, this.manualNext)
  }
  componentWillUnmount() {
    v._.unsubscribe(j.jej.CAROUSEL_PREV, this.manualPrevious), v._.unsubscribe(j.jej.CAROUSEL_NEXT, this.manualNext)
  }
  getStyle(e, t) {
    let n = t.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: c.A.Extrapolate.CLAMP
    });
    return {
      opacity: t.interpolate({
        inputRange: [0, 1],
        outputRange: [.3, 1],
        extrapolate: c.A.Extrapolate.CLAMP
      }),
      filter: c.A.template(O(), n)
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
      hoveringPreviousItem: l,
      hoveringNextItem: r
    } = this.state, i = (0, a.jsx)(b.Ay, {
      items: e,
      itemSize: this.getItemSize(),
      renderItem: this.renderItem,
      currentIndex: t,
      animate: n,
      edgeItems: 2
    });
    return e.length <= 1 ? i : (0, a.jsxs)("div", {
      className: A.HY,
      children: [i, (0, a.jsx)(m.Q8, {
        onClick: this.manualPrevious,
        className: s()(A.UE, {
          [A.h_]: l
        })
      }), (0, a.jsx)(m.Oj, {
        onClick: this.manualNext,
        className: s()(A.UE, {
          [A.h_]: r
        })
      })]
    })
  }
  getPaginationSrc(e) {
    return e.type === j.geh.YOUTUBE_VIDEO ? (0, j.PE$)(e.youtubeVideoId) : e.type === j.geh.IMG ? e.src : e.type === j.geh.VIDEO ? e.thumbnailSrc : null
  }
  render() {
    let {
      items: e,
      className: t,
      autoplayInterval: n,
      paused: l
    } = this.props, {
      currentIndex: r,
      playingVideo: i,
      hasInteracted: s
    } = this.state;
    return (0, a.jsxs)(h.A, {
      pauseOnHover: true,
      onInterval: this.autoNext,
      interval: n,
      className: t,
      disable: i || s || l,
      children: [this.renderCarousel(), (0, a.jsx)("div", {
        className: A.X$,
        children: (0, a.jsx)(m.Ay, {
          renderItem: this.renderPaginationItem,
          scrollToPadding: 85,
          items: e,
          selectedIndex: r,
          onSetItem: e => this.setItem(e, true),
          paginationContainerClass: A.XG,
          align: e.length < 6 ? m.Ay.Align.LEFT : m.Ay.Align.CENTER
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
          onIntentionalChange: l
        },
        state: {
          currentIndex: a
        }
      } = this, r = (0, b.U3)(a, n.length), i = (0, b.U3)(e, n.length), s = 1 === Math.abs(e - r) || e === n.length - 1 && 0 === r || 0 === e && r === n.length - 1;
      this.setState({
        playingVideo: false,
        currentIndex: i,
        animate: s,
        hasInteracted: t
      }), t && null != l && l(n[i], r, i)
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
    }), _(this, "renderCarouselImage", (e, t, n) => n ? (0, a.jsx)(o.DUT, {
      onClick: () => this.handleCurrentItemClick(e, t),
      className: A.AU,
      children: (0, a.jsx)("img", {
        src: e.src,
        alt: "",
        className: A.NP
      })
    }) : (0, a.jsx)(o.DUT, {
      onClick: () => this.setItem(t, true),
      className: A.AU,
      children: (0, a.jsx)("img", {
        alt: "",
        className: A.tv,
        src: e.src,
        draggable: false
      })
    })), _(this, "renderItem", (e, t, n) => {
      let {
        currentIndex: l,
        volume: r,
        isMuted: i
      } = this.state, o = t === (0, b.U3)(l, this.props.items.length);
      return (0, a.jsx)(c.A.div, {
        className: s()(A.AS, {
          [A.Xt]: o
        }),
        style: null != n ? this.getStyle(t, n) : null,
        onMouseEnter: o ? null : () => this.handleEdgeItemMouseEnter(t),
        onMouseLeave: o ? null : this.handleEdgeItemMouseLeave,
        children: e.type === j.geh.VIDEO || e.type === j.geh.YOUTUBE_VIDEO ? (0, a.jsx)(N, {
          item: e,
          size: this.getItemSize(),
          onPlay: this.handlePlay,
          onEnded: this.handleEnded,
          playable: o,
          onClick: () => this.handleVideoClick(t),
          volume: r,
          onVolumeChange: this.handleVolumeChange,
          isMuted: i,
          onMute: this.handleMute
        }) : this.renderCarouselImage(e, t, o)
      })
    }), _(this, "renderPaginationItem", (e, t) => {
      let {
        currentIndex: n
      } = this.state, l = n === t;
      return (0, a.jsxs)("div", {
        className: s()(A.Yw, l ? A.sM : A.N7),
        children: [(0, a.jsx)("img", {
          alt: null == e.alt ? t : e.alt,
          className: A.Pr,
          src: this.getPaginationSrc(e),
          draggable: false
        }), e.type === j.geh.YOUTUBE_VIDEO || e.type === j.geh.VIDEO ? (0, a.jsx)(R, {}) : null, l ? (0, a.jsx)("div", {
          className: A.SD
        }) : null]
      }, "page-".concat(t))
    })
  }
}
_(T, "defaultProps", {
  autoplayInterval: 8e3,
  paused: false
});
let L = (0, Chunk456412.A)(T)
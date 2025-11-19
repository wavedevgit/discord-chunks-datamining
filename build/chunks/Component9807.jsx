/** Chunk was on 69844 **/
/** chunk id: 9807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./415506.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk33122 = require("./33122.jsx"),
  Chunk446411 = require("./446411.jsx"),
  Chunk468846 = require("./468846.jsx"),
  Chunk453499 = require("./453499.jsx"),
  Chunk124347 = require("./124347.jsx"),
  Chunk80966 = require("./80966.jsx"),
  Chunk524444 = require("./524444.jsx"),
  Chunk843445 = require("./843445.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk709532 = require("./709532.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
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

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, a = function(e, t) {
    if (null == e) return {};
    var n, r, a = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
  }
  return a
}
let I = e => {
    var {
      className: t
    } = e, n = y(e, ["className"]);
    return (0, a.jsx)(h.Z, j(C({}, n), {
      className: s()(x.sizedToParent, t),
      mediaPlayerClassName: x.sizedToParent,
      renderLinkComponent: g.iT
    }))
  },
  S = e => {
    var {
      containerClassName: t,
      className: n
    } = e, r = y(e, ["containerClassName", "className"]);
    return (0, a.jsx)(m.ZP, j(C({}, r), {
      className: s()(n, t)
    }))
  },
  P = {
    width: 1280,
    height: 720
  },
  O = {
    width: 640,
    height: 360
  },
  E = e => {
    let t, n, r, {
      item: i,
      onPlay: l,
      volume: s,
      onVolumeChange: o,
      onMute: p,
      isMuted: m,
      autoPlay: h
    } = e;
    if (i.type === f.s9s.YOUTUBE_VIDEO) t = C({
      url: (0, f.n8r)(i.youtubeVideoId)
    }, P), n = C({
      url: "".concat((0, f.ivE)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
    }, O), r = u.pn.YOUTUBE;
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
    return (0, a.jsx)("div", {
      className: x.embedContainer,
      children: (0, a.jsx)(d.BC, {
        className: x.sizedToParent,
        iframeWrapperClassName: x.sizedToParent,
        href: null,
        thumbnail: t,
        video: n,
        provider: r,
        maxHeight: c.r.SMALL.height,
        maxWidth: _.b.SMALL,
        onPlay: l,
        playable: true,
        volume: s,
        onVolumeChange: o,
        autoMute: m,
        onMute: p,
        autoPlay: h,
        renderImageComponent: S,
        renderVideoComponent: I,
        renderLinkComponent: g.iT
      })
    })
  };
class N extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    let {
      items: e
    } = this.props;
    module.length > 0 && module[0].type === Chunk981631.s9s.IMG && this.setState({
      imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(module[0].src, Date.now())
    })
  }
  handleCurrentItemClick(e, t) {
    let {
      onCurrentItemClick: n
    } = this.props;
    null != n && n(e, t), this.setState({
      hasInteracted: true
    })
  }
  render() {
    let {
      items: e,
      autoplayInterval: t,
      className: n,
      paused: r,
      themedPagination: i
    } = this.props, {
      hasInteracted: l
    } = this.state;
    return (0, Chunk54381.jsx)(Chunk453499.Z, {
      items: module.slice(0, 12),
      delay: exports,
      initialPaused: r || Chunk120356,
      renderItem: this.renderItem,
      className: s()(Chunk709532.smallCarousel, require),
      themedPagination: Chunk473749,
      onIntentionalChange: this.handleIntentionalChange,
      onChangeItem: this.handleChangeItem
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      hasInteracted: false,
      isVideoPlaying: false,
      isMuted: true,
      volume: 1,
      status: new Map,
      imageLoadingStartTime: new Map
    }), v(this, "handlePlay", e => {
      this.setState({
        isVideoPlaying: true,
        hasInteracted: !e
      })
    }), v(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: true
      })
    }), v(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: true
      })
    }), v(this, "handleChangeItem", e => {
      this.setState({
        isVideoPlaying: false
      }), e.type === f.s9s.IMG && this.setState({
        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
      })
    }), v(this, "handleIntentionalChange", (e, t, n, r) => {
      this.setState({
        hasInteracted: true
      });
      let {
        onIntentionalChange: a
      } = this.props;
      null != a && a(e, t, n, r)
    }), v(this, "handleOnErrorImg", e => {
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "errored")
      })
    }), v(this, "handleOnLoadImg", e => {
      let {
        onImageLoad: t
      } = this.props;
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "loaded")
      });
      let n = this.state.imageLoadingStartTime.get(e.target.src),
        r = null != n ? Date.now() - n : true;
      null == t || t({
        src: e.target.src,
        loadTimeMs: r
      })
    }), v(this, "renderItem", (e, t) => {
      let n, {
          isMuted: r,
          volume: i
        } = this.state,
        {
          videoAutoPlay: l
        } = this.props;
      switch (e.type) {
        case f.s9s.YOUTUBE_VIDEO:
        case f.s9s.VIDEO:
          n = (0, a.jsx)(E, {
            item: e,
            onPlay: this.handlePlay,
            isMuted: r,
            volume: i,
            onVolumeChange: this.handleVolumeChange,
            onMute: this.handleMute,
            autoPlay: l
          });
          break;
        case f.s9s.IMG:
          if ("errored" === this.state.status.get(e.src)) {
            let e = (0, a.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: b.intl.string(b.t.UvDfMz)
            });
            return (0, a.jsx)("div", {
              className: x.errorContainer,
              children: true !== this.props.errorComponent ? this.props.errorComponent : e
            })
          } {
            var c;
            let t = null != (c = e.alt) ? c : b.intl.string(b.t.X4IxWL);
            n = (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(o.$jN, {
                className: s()(x.spinner, {
                  [x.hidden]: true !== this.state.status.get(e.src)
                }),
                type: o.$jN.Type.SPINNING_CIRCLE
              }), (0, a.jsx)("img", {
                onError: this.handleOnErrorImg,
                onLoad: this.handleOnLoadImg,
                className: s()(x.smallCarouselImage, {
                  [x.hidden]: "loaded" !== this.state.status.get(e.src)
                }),
                src: e.src,
                alt: t
              })]
            })
          }
          break;
        default:
          throw Error("Unexpected MediaType")
      }
      return (0, a.jsx)(o.P3F, {
        className: x.smallCarouselItem,
        onClick: () => this.handleCurrentItemClick(e, t),
        children: n
      })
    })
  }
}
v(N, "defaultProps", {
  paused: false,
  videoAutoPlay: true
});
let T = N
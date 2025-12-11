/** Chunk was on 92504 **/
/** chunk id: 9807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./415506.js");
var a, Chunk54381 = require("./54381.js"),
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
  Chunk410697 = require("./410697.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, a, r = function(e, t) {
    if (null == e) return {};
    var n, a, r = {},
      i = Object.keys(e);
    for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let I = e => {
    var {
      className: t
    } = e, n = y(e, ["className"]);
    return (0, r.jsx)(h.Z, _(j({}, n), {
      className: s()(v.sizedToParent, t),
      mediaPlayerClassName: v.sizedToParent,
      renderLinkComponent: f.iT
    }))
  },
  S = e => {
    var {
      containerClassName: t,
      className: n
    } = e, a = y(e, ["containerClassName", "className"]);
    return (0, r.jsx)(m.ZP, _(j({}, a), {
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
    let t, n, a, {
      item: i,
      onPlay: l,
      volume: s,
      onVolumeChange: o,
      onMute: p,
      isMuted: m,
      autoPlay: h
    } = e;
    if (i.type === b.s9s.YOUTUBE_VIDEO) t = j({
      url: (0, b.n8r)(i.youtubeVideoId)
    }, P), n = j({
      url: "".concat((0, b.ivE)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
    }, O), a = u.pn.YOUTUBE;
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
    return (0, r.jsx)("div", {
      className: v.embedContainer,
      children: (0, r.jsx)(d.BC, {
        className: v.sizedToParent,
        iframeWrapperClassName: v.sizedToParent,
        href: null,
        thumbnail: t,
        video: n,
        provider: a,
        maxHeight: c.r.SMALL.height,
        maxWidth: g.b.SMALL,
        onPlay: l,
        playable: true,
        volume: s,
        onVolumeChange: o,
        autoMute: m,
        onMute: p,
        autoPlay: h,
        renderImageComponent: S,
        renderVideoComponent: I,
        renderLinkComponent: f.iT
      })
    })
  };
class N extends(a = Chunk473749.PureComponent) {
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
      paused: a,
      themedPagination: i
    } = this.props, {
      hasInteracted: l
    } = this.state;
    return (0, Chunk54381.jsx)(Chunk453499.Z, {
      items: module.slice(0, 12),
      delay: exports,
      initialPaused: a || Chunk120356,
      renderItem: this.renderItem,
      className: s()(Chunk410697.smallCarousel, require),
      themedPagination: Chunk473749,
      onIntentionalChange: this.handleIntentionalChange,
      onChangeItem: this.handleChangeItem
    })
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      hasInteracted: false,
      isVideoPlaying: false,
      isMuted: true,
      volume: 1,
      status: new Map,
      imageLoadingStartTime: new Map
    }), C(this, "handlePlay", e => {
      this.setState({
        isVideoPlaying: true,
        hasInteracted: !e
      })
    }), C(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: true
      })
    }), C(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: true
      })
    }), C(this, "handleChangeItem", e => {
      this.setState({
        isVideoPlaying: false
      }), e.type === b.s9s.IMG && this.setState({
        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
      })
    }), C(this, "handleIntentionalChange", (e, t, n, a) => {
      this.setState({
        hasInteracted: true
      });
      let {
        onIntentionalChange: r
      } = this.props;
      null != r && r(e, t, n, a)
    }), C(this, "handleOnErrorImg", e => {
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "errored")
      })
    }), C(this, "handleOnLoadImg", e => {
      let {
        onImageLoad: t
      } = this.props;
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "loaded")
      });
      let n = this.state.imageLoadingStartTime.get(e.target.src),
        a = null != n ? Date.now() - n : true;
      null == t || t({
        src: e.target.src,
        loadTimeMs: a
      })
    }), C(this, "renderItem", (e, t) => {
      let n, {
          isMuted: a,
          volume: i
        } = this.state,
        {
          videoAutoPlay: l
        } = this.props;
      switch (e.type) {
        case b.s9s.YOUTUBE_VIDEO:
        case b.s9s.VIDEO:
          n = (0, r.jsx)(E, {
            item: e,
            onPlay: this.handlePlay,
            isMuted: a,
            volume: i,
            onVolumeChange: this.handleVolumeChange,
            onMute: this.handleMute,
            autoPlay: l
          });
          break;
        case b.s9s.IMG:
          if ("errored" === this.state.status.get(e.src)) {
            let e = (0, r.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: x.intl.string(x.t.UvDfMz)
            });
            return (0, r.jsx)("div", {
              className: v.errorContainer,
              children: true !== this.props.errorComponent ? this.props.errorComponent : e
            })
          } {
            var c;
            let t = null != (c = e.alt) ? c : x.intl.string(x.t.X4IxWL);
            n = (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(o.$jN, {
                className: s()(v.spinner, {
                  [v.hidden]: true !== this.state.status.get(e.src)
                }),
                type: o.$jN.Type.SPINNING_CIRCLE
              }), (0, r.jsx)("img", {
                onError: this.handleOnErrorImg,
                onLoad: this.handleOnLoadImg,
                className: s()(v.smallCarouselImage, {
                  [v.hidden]: "loaded" !== this.state.status.get(e.src)
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
      return (0, r.jsx)(o.P3F, {
        className: v.smallCarouselItem,
        onClick: () => this.handleCurrentItemClick(e, t),
        children: n
      })
    })
  }
}
C(N, "defaultProps", {
  paused: false,
  videoAutoPlay: true
});
let T = N
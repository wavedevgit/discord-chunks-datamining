/** Chunk was on 90728 **/
n.d(t, {
  Z: () => T
}), n(47120), n(411104);
var r, a = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  s = n(481060),
  c = n(33122),
  d = n(446411),
  u = n(468846),
  p = n(453499),
  m = n(124347),
  h = n(80966),
  g = n(524444),
  _ = n(843445),
  f = n(981631),
  v = n(388032),
  b = n(239169);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
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
let O = e => {
    var {
      className: t
    } = e, n = y(e, ["className"]);
    return (0, a.jsx)(h.Z, j(C({}, n), {
      className: o()(b.sizedToParent, t),
      mediaPlayerClassName: b.sizedToParent,
      renderLinkComponent: g.iT
    }))
  },
  I = e => {
    var {
      containerClassName: t,
      className: n
    } = e, r = y(e, ["containerClassName", "className"]);
    return (0, a.jsx)(m.ZP, j(C({}, r), {
      className: o()(n, t)
    }))
  },
  N = {
    width: 1280,
    height: 720
  },
  P = {
    width: 640,
    height: 360
  },
  S = e => {
    let t, n, r, {
      item: i,
      onPlay: l,
      volume: o,
      onVolumeChange: s,
      onMute: p,
      isMuted: m,
      autoPlay: h
    } = e;
    if (i.type === f.s9s.YOUTUBE_VIDEO) t = C({
      url: (0, f.n8r)(i.youtubeVideoId)
    }, N), n = C({
      url: "".concat((0, f.ivE)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
    }, P), r = u.pn.YOUTUBE;
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
      className: b.embedContainer,
      children: (0, a.jsx)(d.BC, {
        className: b.sizedToParent,
        iframeWrapperClassName: b.sizedToParent,
        href: null,
        thumbnail: t,
        video: n,
        provider: r,
        maxHeight: c.r.SMALL.height,
        maxWidth: _.b.SMALL,
        onPlay: l,
        playable: !0,
        volume: o,
        onVolumeChange: s,
        autoMute: m,
        onMute: p,
        autoPlay: h,
        renderImageComponent: I,
        renderVideoComponent: O,
        renderLinkComponent: g.iT
      })
    })
  };
class E extends(r = i.PureComponent) {
  componentDidMount() {
    let {
      items: e
    } = this.props;
    e.length > 0 && e[0].type === f.s9s.IMG && this.setState({
      imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now())
    })
  }
  handleCurrentItemClick(e, t) {
    let {
      onCurrentItemClick: n
    } = this.props;
    null != n && n(e, t), this.setState({
      hasInteracted: !0
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
    return (0, a.jsx)(p.Z, {
      items: e.slice(0, 12),
      delay: t,
      initialPaused: r || l,
      renderItem: this.renderItem,
      className: o()(b.smallCarousel, n),
      themedPagination: i,
      onIntentionalChange: this.handleIntentionalChange,
      onChangeItem: this.handleChangeItem
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      hasInteracted: !1,
      isVideoPlaying: !1,
      isMuted: !0,
      volume: 1,
      status: new Map,
      imageLoadingStartTime: new Map
    }), x(this, "handlePlay", e => {
      this.setState({
        isVideoPlaying: !0,
        hasInteracted: !e
      })
    }), x(this, "handleVolumeChange", e => {
      this.setState({
        volume: e,
        hasInteracted: !0
      })
    }), x(this, "handleMute", e => {
      this.setState({
        isMuted: e,
        hasInteracted: !0
      })
    }), x(this, "handleChangeItem", e => {
      this.setState({
        isVideoPlaying: !1
      }), e.type === f.s9s.IMG && this.setState({
        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
      })
    }), x(this, "handleIntentionalChange", (e, t, n, r) => {
      this.setState({
        hasInteracted: !0
      });
      let {
        onIntentionalChange: a
      } = this.props;
      null != a && a(e, t, n, r)
    }), x(this, "handleOnErrorImg", e => {
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "errored")
      })
    }), x(this, "handleOnLoadImg", e => {
      let {
        onImageLoad: t
      } = this.props;
      this.setState({
        status: new Map(this.state.status).set(e.target.src, "loaded")
      });
      let n = this.state.imageLoadingStartTime.get(e.target.src),
        r = null != n ? Date.now() - n : void 0;
      null == t || t({
        src: e.target.src,
        loadTimeMs: r
      })
    }), x(this, "renderItem", (e, t) => {
      let n;
      let {
        isMuted: r,
        volume: i
      } = this.state, {
        videoAutoPlay: l
      } = this.props;
      switch (e.type) {
        case f.s9s.YOUTUBE_VIDEO:
        case f.s9s.VIDEO:
          n = (0, a.jsx)(S, {
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
            let e = (0, a.jsx)(s.X6q, {
              variant: "heading-xl/semibold",
              children: v.NW.string(v.t.UvDfMz)
            });
            return (0, a.jsx)("div", {
              className: b.errorContainer,
              children: void 0 !== this.props.errorComponent ? this.props.errorComponent : e
            })
          } {
            var c;
            let t = null !== (c = e.alt) && void 0 !== c ? c : v.NW.string(v.t.X4IxWF);
            n = (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(s.$jN, {
                className: o()(b.spinner, {
                  [b.hidden]: void 0 !== this.state.status.get(e.src)
                }),
                type: s.$jN.Type.SPINNING_CIRCLE
              }), (0, a.jsx)("img", {
                onError: this.handleOnErrorImg,
                onLoad: this.handleOnLoadImg,
                className: o()(b.smallCarouselImage, {
                  [b.hidden]: "loaded" !== this.state.status.get(e.src)
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
      return (0, a.jsx)(s.P3F, {
        className: b.smallCarouselItem,
        onClick: () => this.handleCurrentItemClick(e, t),
        children: n
      })
    })
  }
}
x(E, "defaultProps", {
  paused: !1,
  videoAutoPlay: !0
});
let T = E
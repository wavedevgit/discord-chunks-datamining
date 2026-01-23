/** Chunk was on 28636 **/
/** chunk id: 644576, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
}), require("./896048.js"), require("./65821.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk503879 = require("./503879.jsx"),
  Chunk871751 = require("./871751.jsx"),
  Chunk259407 = require("./259407.jsx"),
  Chunk323933 = require("./323933.jsx"),
  Chunk619517 = require("./619517.jsx"),
  Chunk248643 = require("./248643.jsx"),
  Chunk652176 = require("./652176.jsx"),
  Chunk590858 = require("./590858.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk60370 = require("./60370.js");

function v(e, t, n) {
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
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
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}
let C = e => {
    let {
      className: t
    } = e, n = y(e, ["className"]);
    return (0, l.jsx)(m.A, A(j({}, n), {
      className: s()(x.Zy, t),
      mediaPlayerClassName: x.Zy,
      renderLinkComponent: g.bU
    }))
  },
  O = e => {
    let {
      containerClassName: t,
      className: n
    } = e, r = y(e, ["containerClassName", "className"]);
    return (0, l.jsx)(h.Ay, A(j({}, r), {
      className: s()(n, t)
    }))
  },
  S = {
    width: 1280,
    height: 720
  },
  I = {
    width: 640,
    height: 360
  },
  E = e => {
    let t, n, r, {
      item: i,
      onPlay: a,
      volume: s,
      onVolumeChange: o,
      onMute: p,
      isMuted: h,
      autoPlay: m
    } = e;
    if (i.type === b.geh.YOUTUBE_VIDEO) t = j({
      url: (0, b.PE$)(i.youtubeVideoId)
    }, S), n = j({
      url: "".concat((0, b.uJ2)(i.youtubeVideoId), "?").concat("rel=0&iv_load_policy=3&showinfo=0&modestbranding=1")
    }, I), r = u.mt.YOUTUBE;
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
    return (0, l.jsx)("div", {
      className: x.x,
      children: (0, l.jsx)(d.rr, {
        className: x.Zy,
        iframeWrapperClassName: x.Zy,
        href: null,
        thumbnail: t,
        video: n,
        provider: r,
        maxHeight: c.s.SMALL.height,
        maxWidth: _.q.SMALL,
        onPlay: a,
        playable: true,
        volume: s,
        onVolumeChange: o,
        autoMute: h,
        onMute: p,
        autoPlay: m,
        renderImageComponent: O,
        renderVideoComponent: C,
        renderLinkComponent: g.bU
      })
    })
  };
class P extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    let {
      items: e
    } = this.props;
    e.length > 0 && e[0].type === b.geh.IMG && this.setState({
      imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e[0].src, Date.now())
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
      hasInteracted: a
    } = this.state;
    return (0, l.jsx)(p.A, {
      items: e.slice(0, 12),
      delay: t,
      initialPaused: r || a,
      renderItem: this.renderItem,
      className: s()(x.Gt, n),
      themedPagination: i,
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
      }), e.type === b.geh.IMG && this.setState({
        imageLoadingStartTime: new Map(this.state.imageLoadingStartTime).set(e.src, Date.now())
      })
    }), v(this, "handleIntentionalChange", (e, t, n, r) => {
      this.setState({
        hasInteracted: true
      });
      let {
        onIntentionalChange: l
      } = this.props;
      null != l && l(e, t, n, r)
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
          videoAutoPlay: a
        } = this.props;
      switch (e.type) {
        case b.geh.YOUTUBE_VIDEO:
        case b.geh.VIDEO:
          n = (0, l.jsx)(E, {
            item: e,
            onPlay: this.handlePlay,
            isMuted: r,
            volume: i,
            onVolumeChange: this.handleVolumeChange,
            onMute: this.handleMute,
            autoPlay: a
          });
          break;
        case b.geh.IMG:
          if ("errored" === this.state.status.get(e.src)) {
            let e = (0, l.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              children: f.intl.string(f.t.UvDfMz)
            });
            return (0, l.jsx)("div", {
              className: x.Un,
              children: true !== this.props.errorComponent ? this.props.errorComponent : e
            })
          } {
            var c;
            let t = null != (c = e.alt) ? c : f.intl.string(f.t.X4IxWL);
            n = (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(o.y$y, {
                className: s()(x.u1, {
                  [x.R]: true !== this.state.status.get(e.src)
                }),
                type: o.y$y.Type.SPINNING_CIRCLE
              }), (0, l.jsx)("img", {
                onError: this.handleOnErrorImg,
                onLoad: this.handleOnLoadImg,
                className: s()(x.JD, {
                  [x.R]: "loaded" !== this.state.status.get(e.src)
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
      return (0, l.jsx)(o.DUT, {
        className: x.Pj,
        onClick: () => this.handleCurrentItemClick(e, t),
        children: n
      })
    })
  }
}
v(P, "defaultProps", {
  paused: false,
  videoAutoPlay: true
});
let N = P
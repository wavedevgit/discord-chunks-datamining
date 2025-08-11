/** Chunk was on web.js **/
/** chunk id: 669021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk873546 = require("./873546.js"),
  Chunk846519 = require("./846519.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk679056 = require("./679056.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk422461 = require("./422461.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = 2e3,
  g = 400,
  E = .3;
class b extends Chunk73800.Component {
  renderMedia() {
    let {
      src: e,
      className: t,
      title: n
    } = this.props, {
      imageLoading: i
    } = this.state;
    return (0, Chunk255367.jsx)(Chunk748780.Z.img, {
      className: a()({
        [Chunk422461.imageLoading]: Chunk73800
      }, exports),
      src: module,
      alt: require,
      style: this.getImageStyle(),
      onError: this.handleImageError,
      onLoad: this.handleImageLoaded
    })
  }
  render() {
    let {
      className: e,
      title: t,
      src: n
    } = this.props, {
      imageLoadError: i,
      imageLoading: o
    } = this.state;
    return null == require || Chunk73800 ? (0, Chunk255367.jsx)(Chunk748780.Z.div, {
      className: a()(Chunk422461.titleContainer, module),
      style: this.getImageStyle(),
      children: exports
    }) : (0, Chunk255367.jsxs)(Chunk748780.Z.div, {
      className: a()(Chunk120356 ? Chunk422461.loadingContainer : null, module),
      style: this.getImageStyle(),
      children: [Chunk120356 ? (0, Chunk255367.jsx)(Chunk481060.$jN, {
        className: Chunk422461.spinner,
        itemClassName: Chunk422461.spinnerItem,
        type: Chunk481060.$jN.Type.PULSING_ELLIPSIS,
        animated: true
      }) : null, this.renderMedia()]
    })
  }
  constructor(...e) {
    super(...e), h(this, "_animatedValue", new s.Z.Value(1)), h(this, "state", {
      imageLoadError: false,
      imageLoading: true
    }), h(this, "componentWillEnter", e => {
      this._animatedValue.setValue(0), s.Z.timing(this._animatedValue, {
        toValue: 1,
        duration: g
      }).start(e)
    }), h(this, "componentWillLeave", e => {
      s.Z.timing(this._animatedValue, {
        toValue: 0,
        duration: g
      }).start(e)
    }), h(this, "getImageStyle", () => ({
      opacity: this._animatedValue
    })), h(this, "handleImageError", () => {
      this.setState({
        imageLoadError: true,
        imageLoading: false
      })
    }), h(this, "handleImageLoaded", () => {
      this.setState({
        imageLoading: false
      })
    })
  }
}
class y extends Chunk73800.Component {
  componentWillUnmount() {
    this.videoTimeout.stop()
  }
  componentDidUpdate(e) {
    let {
      playing: t
    } = this.props, n = this._video.current;
    if (null != n)
      if (t && !e.playing) {
        this.videoTimeout.stop(), isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0), n.volume = E;
        let e = n.play();
        null != e && e.then(() => {
          this.videoPlaying = true
        })
      } else e.playing && !t && this.videoTimeout.start(g, () => {
        this.videoPlaying && (n.pause(), this.videoPlaying = false)
      })
  }
  renderTypeImage() {
    let {
      playing: e,
      slideImages: t,
      image: n,
      title: i,
      splashClassName: o
    } = this.props;
    return null == exports ? (0, Chunk255367.jsx)(b, {
      className: a()(Chunk422461.splash, Chunk120356),
      src: require,
      title: Chunk73800
    }, "image") : (0, Chunk255367.jsx)(Chunk679056.Z, {
      onInterval: this.nextItem,
      interval: m,
      className: Chunk422461.slideshowWrapper,
      disable: !module,
      children: (0, Chunk255367.jsx)(Chunk215569.W, {
        children: this.renderSlideItem(exports)
      })
    })
  }
  render() {
    let {
      video: e,
      className: t,
      placeholder: n,
      renderMediaOverlay: i,
      playing: o
    } = this.props, {
      videoLoadError: s,
      videoLoaded: l
    } = this.state;
    return require ? (0, Chunk255367.jsx)("div", {
      className: exports
    }) : (0, Chunk255367.jsxs)("figure", {
      className: a()(Chunk422461.__invalid_tileMedia, exports),
      children: [null == module || Chunk748780 ? this.renderTypeImage() : this.renderTypeVideo(), null != Chunk73800 && Chunk73800(Chunk120356 && Chunk873546)]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      currentIndex: 0,
      videoLoadError: false,
      videoLoaded: false
    }), h(this, "_video", i.createRef()), h(this, "videoTimeout", new c.V7), h(this, "videoPlaying", false), h(this, "handleToggleMute", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onToggleMute: t
      } = this.props;
      null == t || t(e)
    }), h(this, "handleVideoError", () => {
      this.setState({
        videoLoadError: true
      })
    }), h(this, "handleVideoLoaded", () => {
      this.setState({
        videoLoaded: true
      })
    }), h(this, "renderTypeVideo", () => {
      let {
        videoLoaded: e
      } = this.state, {
        video: t,
        image: n,
        title: o,
        playing: s,
        muted: c,
        splashClassName: f,
        splashPlaceholderClassName: h,
        renderMediaOverlay: m
      } = this.props, g = c ? d.OyP : d.gj8;
      return (0, r.jsxs)(i.Fragment, {
        children: [l.tq ? null : (0, r.jsx)(_.Z, {
          className: a()(p.splash, f),
          muted: c,
          loop: true,
          preload: "none",
          ref: this._video,
          onLoadedMetadata: this.handleVideoLoaded,
          onError: this.handleVideoError,
          children: (0, r.jsx)("source", {
            src: t,
            type: "video/mp4"
          })
        }), (0, r.jsx)(u.W, {
          children: s && e ? null : (0, r.jsx)(b, {
            className: a()(p.splashPlaceholder, h),
            src: n,
            title: o
          }, 0)
        }), (0, r.jsx)(d.P3F, {
          className: a()(p.muteContainer, {
            [p.muteContainerPlaying]: s && e,
            [p.muteContainerMediaOverlay]: null != m
          }),
          onClick: this.handleToggleMute,
          children: s && e ? (0, r.jsx)(g, {
            className: p.mute
          }) : null
        })]
      })
    }), h(this, "nextItem", () => {
      let {
        slideImages: e
      } = this.props;
      null != e && this.setState({
        currentIndex: (this.state.currentIndex + 1) % e.length
      })
    }), h(this, "renderSlideItem", e => {
      let {
        image: t,
        title: n,
        playing: i,
        splashClassName: o
      } = this.props, {
        currentIndex: s
      } = this.state;
      return i ? (0, r.jsx)(b, {
        className: a()(p.splash, o),
        src: e[s],
        title: n
      }, s) : (0, r.jsx)(b, {
        className: a()(p.splash, o),
        src: t,
        title: n
      }, "image")
    })
  }
}
let O = y
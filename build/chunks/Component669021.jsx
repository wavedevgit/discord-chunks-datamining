/** Chunk was on 66866 **/
/** chunk id: 669021, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
  Chunk548238 = require("./548238.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class g extends Chunk73800.Component {
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
        [Chunk548238.imageLoading]: Chunk73800
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
      imageLoading: l
    } = this.state;
    return null == require || Chunk73800 ? (0, Chunk255367.jsx)(Chunk748780.Z.div, {
      className: a()(Chunk548238.titleContainer, module),
      style: this.getImageStyle(),
      children: exports
    }) : (0, Chunk255367.jsxs)(Chunk748780.Z.div, {
      className: a()(Chunk120356 ? Chunk548238.loadingContainer : null, module),
      style: this.getImageStyle(),
      children: [Chunk120356 ? (0, Chunk255367.jsx)(Chunk481060.$jN, {
        className: Chunk548238.spinner,
        itemClassName: Chunk548238.spinnerItem,
        type: Chunk481060.$jN.Type.PULSING_ELLIPSIS,
        animated: true
      }) : null, this.renderMedia()]
    })
  }
  constructor(...e) {
    super(...e), _(this, "_animatedValue", new o.Z.Value(1)), _(this, "state", {
      imageLoadError: false,
      imageLoading: true
    }), _(this, "componentWillEnter", e => {
      this._animatedValue.setValue(0), o.Z.timing(this._animatedValue, {
        toValue: 1,
        duration: 400
      }).start(e)
    }), _(this, "componentWillLeave", e => {
      o.Z.timing(this._animatedValue, {
        toValue: 0,
        duration: 400
      }).start(e)
    }), _(this, "getImageStyle", () => ({
      opacity: this._animatedValue
    })), _(this, "handleImageError", () => {
      this.setState({
        imageLoadError: true,
        imageLoading: false
      })
    }), _(this, "handleImageLoaded", () => {
      this.setState({
        imageLoading: false
      })
    })
  }
}
class h extends Chunk73800.Component {
  componentWillUnmount() {
    this.videoTimeout.stop()
  }
  componentDidUpdate(e) {
    let {
      playing: t
    } = this.props, n = this._video.current;
    if (null != n)
      if (t && !e.playing) {
        this.videoTimeout.stop(), isFinite(n.duration) && isFinite(n.currentTime) && (n.currentTime = 0), n.volume = .3;
        let e = n.play();
        null != e && e.then(() => {
          this.videoPlaying = true
        })
      } else e.playing && !t && this.videoTimeout.start(400, () => {
        this.videoPlaying && (n.pause(), this.videoPlaying = false)
      })
  }
  renderTypeImage() {
    let {
      playing: e,
      slideImages: t,
      image: n,
      title: i,
      splashClassName: l
    } = this.props;
    return null == exports ? (0, Chunk255367.jsx)(g, {
      className: a()(Chunk548238.splash, Chunk120356),
      src: require,
      title: Chunk73800
    }, "image") : (0, Chunk255367.jsx)(Chunk679056.Z, {
      onInterval: this.nextItem,
      interval: 2e3,
      className: Chunk548238.slideshowWrapper,
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
      playing: l
    } = this.props, {
      videoLoadError: o,
      videoLoaded: s
    } = this.state;
    return require ? (0, Chunk255367.jsx)("div", {
      className: exports
    }) : (0, Chunk255367.jsxs)("figure", {
      className: a()(Chunk548238.__invalid_tileMedia, exports),
      children: [null == module || Chunk748780 ? this.renderTypeImage() : this.renderTypeVideo(), null != Chunk73800 && Chunk73800(Chunk120356 && Chunk873546)]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      currentIndex: 0,
      videoLoadError: false,
      videoLoaded: false
    }), _(this, "_video", i.createRef()), _(this, "videoTimeout", new c.V7), _(this, "videoPlaying", false), _(this, "handleToggleMute", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onToggleMute: t
      } = this.props;
      null == t || t(e)
    }), _(this, "handleVideoError", () => {
      this.setState({
        videoLoadError: true
      })
    }), _(this, "handleVideoLoaded", () => {
      this.setState({
        videoLoaded: true
      })
    }), _(this, "renderTypeVideo", () => {
      let {
        videoLoaded: e
      } = this.state, {
        video: t,
        image: n,
        title: l,
        playing: o,
        muted: c,
        splashClassName: p,
        splashPlaceholderClassName: _,
        renderMediaOverlay: h
      } = this.props, b = c ? d.OyP : d.gj8;
      return (0, r.jsxs)(i.Fragment, {
        children: [s.tq ? null : (0, r.jsx)(m.Z, {
          className: a()(f.splash, p),
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
          children: o && e ? null : (0, r.jsx)(g, {
            className: a()(f.splashPlaceholder, _),
            src: n,
            title: l
          }, 0)
        }), (0, r.jsx)(d.P3F, {
          className: a()(f.muteContainer, {
            [f.muteContainerPlaying]: o && e,
            [f.muteContainerMediaOverlay]: null != h
          }),
          onClick: this.handleToggleMute,
          children: o && e ? (0, r.jsx)(b, {
            className: f.mute
          }) : null
        })]
      })
    }), _(this, "nextItem", () => {
      let {
        slideImages: e
      } = this.props;
      null != e && this.setState({
        currentIndex: (this.state.currentIndex + 1) % e.length
      })
    }), _(this, "renderSlideItem", e => {
      let {
        image: t,
        title: n,
        playing: i,
        splashClassName: l
      } = this.props, {
        currentIndex: o
      } = this.state;
      return i ? (0, r.jsx)(g, {
        className: a()(f.splash, l),
        src: e[o],
        title: n
      }, o) : (0, r.jsx)(g, {
        className: a()(f.splash, l),
        src: t,
        title: n
      }, "image")
    })
  }
}
let b = h
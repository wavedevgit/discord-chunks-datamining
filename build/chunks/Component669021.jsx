/** Chunk was on web.js **/
/** chunk id: 669021, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk873546 = require("./873546.js"),
  Chunk846519 = require("./846519.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk679056 = require("./679056.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk180622 = require("./180622.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 2e3,
  g = 400,
  E = .3;
class b extends Chunk473749.Component {
  renderMedia() {
    let {
      src: e,
      className: t,
      title: n
    } = this.props, {
      imageLoading: i
    } = this.state;
    return (0, r.jsx)(s.Z.img, {
      className: o()({
        [_.imageLoading]: i
      }, t),
      src: e,
      alt: n,
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
      imageLoading: a
    } = this.state;
    return null == n || i ? (0, r.jsx)(s.Z.div, {
      className: o()(_.titleContainer, e),
      style: this.getImageStyle(),
      children: t
    }) : (0, r.jsxs)(s.Z.div, {
      className: o()(a ? _.loadingContainer : null, e),
      style: this.getImageStyle(),
      children: [a ? (0, r.jsx)(d.$jN, {
        className: _.spinner,
        itemClassName: _.spinnerItem,
        type: d.$jN.Type.PULSING_ELLIPSIS,
        animated: true
      }) : null, this.renderMedia()]
    })
  }
  constructor(...e) {
    super(...e), m(this, "_animatedValue", new s.Z.Value(1)), m(this, "state", {
      imageLoadError: false,
      imageLoading: true
    }), m(this, "componentWillEnter", e => {
      this._animatedValue.setValue(0), s.Z.timing(this._animatedValue, {
        toValue: 1,
        duration: g
      }).start(e)
    }), m(this, "componentWillLeave", e => {
      s.Z.timing(this._animatedValue, {
        toValue: 0,
        duration: g
      }).start(e)
    }), m(this, "getImageStyle", () => ({
      opacity: this._animatedValue
    })), m(this, "handleImageError", () => {
      this.setState({
        imageLoadError: true,
        imageLoading: false
      })
    }), m(this, "handleImageLoaded", () => {
      this.setState({
        imageLoading: false
      })
    })
  }
}
class y extends Chunk473749.Component {
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
      splashClassName: a
    } = this.props;
    return null == t ? (0, r.jsx)(b, {
      className: o()(_.splash, a),
      src: n,
      title: i
    }, "image") : (0, r.jsx)(f.Z, {
      onInterval: this.nextItem,
      interval: h,
      className: _.slideshowWrapper,
      disable: !e,
      children: (0, r.jsx)(u.W, {
        children: this.renderSlideItem(t)
      })
    })
  }
  render() {
    let {
      video: e,
      className: t,
      placeholder: n,
      renderMediaOverlay: i,
      playing: a
    } = this.props, {
      videoLoadError: s,
      videoLoaded: l
    } = this.state;
    return n ? (0, r.jsx)("div", {
      className: t
    }) : (0, r.jsxs)("figure", {
      className: o()(_.__invalid_tileMedia, t),
      children: [null == e || s ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(a && l)]
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      currentIndex: 0,
      videoLoadError: false,
      videoLoaded: false
    }), m(this, "_video", i.createRef()), m(this, "videoTimeout", new c.V7), m(this, "videoPlaying", false), m(this, "handleToggleMute", e => {
      e.stopPropagation(), e.preventDefault();
      let {
        onToggleMute: t
      } = this.props;
      null == t || t(e)
    }), m(this, "handleVideoError", () => {
      this.setState({
        videoLoadError: true
      })
    }), m(this, "handleVideoLoaded", () => {
      this.setState({
        videoLoaded: true
      })
    }), m(this, "renderTypeVideo", () => {
      let {
        videoLoaded: e
      } = this.state, {
        video: t,
        image: n,
        title: a,
        playing: s,
        muted: c,
        splashClassName: f,
        splashPlaceholderClassName: m,
        renderMediaOverlay: h
      } = this.props, g = c ? d.OyP : d.gj8;
      return (0, r.jsxs)(i.Fragment, {
        children: [l.tq ? null : (0, r.jsx)(p.Z, {
          className: o()(_.splash, f),
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
            className: o()(_.splashPlaceholder, m),
            src: n,
            title: a
          }, 0)
        }), (0, r.jsx)(d.P3F, {
          className: o()(_.muteContainer, {
            [_.muteContainerPlaying]: s && e,
            [_.muteContainerMediaOverlay]: null != h
          }),
          onClick: this.handleToggleMute,
          children: s && e ? (0, r.jsx)(g, {
            className: _.mute
          }) : null
        })]
      })
    }), m(this, "nextItem", () => {
      let {
        slideImages: e
      } = this.props;
      null != e && this.setState({
        currentIndex: (this.state.currentIndex + 1) % e.length
      })
    }), m(this, "renderSlideItem", e => {
      let {
        image: t,
        title: n,
        playing: i,
        splashClassName: a
      } = this.props, {
        currentIndex: s
      } = this.state;
      return i ? (0, r.jsx)(b, {
        className: o()(_.splash, a),
        src: e[s],
        title: n
      }, s) : (0, r.jsx)(b, {
        className: o()(_.splash, a),
        src: t,
        title: n
      }, "image")
    })
  }
}
let O = y
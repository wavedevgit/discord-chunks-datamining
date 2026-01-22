/** Chunk was on web.js **/
/** chunk id: 132696, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk607399 = require("./607399.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73939 = require("./73939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk133296 = require("./133296.jsx"),
  Chunk607470 = require("./607470.jsx"),
  Chunk112266 = require("./112266.js");

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
class b extends Chunk64700.Component {
  renderMedia() {
    let {
      src: e,
      className: t,
      title: n
    } = this.props, {
      imageLoading: i
    } = this.state;
    return (0, r.jsx)(o.A.img, {
      className: s()({
        [_.YC]: i
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
    return null == n || i ? (0, r.jsx)(o.A.div, {
      className: s()(_.gn, e),
      style: this.getImageStyle(),
      children: t
    }) : (0, r.jsxs)(o.A.div, {
      className: s()(a ? _.g4 : null, e),
      style: this.getImageStyle(),
      children: [a ? (0, r.jsx)(d.y$y, {
        className: _.u1,
        itemClassName: _.$N,
        type: d.y$y.Type.PULSING_ELLIPSIS,
        animated: true
      }) : null, this.renderMedia()]
    })
  }
  constructor(...e) {
    super(...e), h(this, "_animatedValue", new o.A.Value(1)), h(this, "state", {
      imageLoadError: false,
      imageLoading: true
    }), h(this, "componentWillEnter", e => {
      this._animatedValue.setValue(0), o.A.timing(this._animatedValue, {
        toValue: 1,
        duration: g
      }).start(e)
    }), h(this, "componentWillLeave", e => {
      o.A.timing(this._animatedValue, {
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
class y extends Chunk64700.Component {
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
      className: s()(_.Yi, a),
      src: n,
      title: i
    }, "image") : (0, r.jsx)(f.A, {
      onInterval: this.nextItem,
      interval: m,
      className: _.mZ,
      disable: !e,
      children: (0, r.jsx)(u.F, {
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
      videoLoadError: o,
      videoLoaded: l
    } = this.state;
    return n ? (0, r.jsx)("div", {
      className: t
    }) : (0, r.jsxs)("figure", {
      className: s()(_.__invalid_tileMedia, t),
      children: [null == e || o ? this.renderTypeImage() : this.renderTypeVideo(), null != i && i(a && l)]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      currentIndex: 0,
      videoLoadError: false,
      videoLoaded: false
    }), h(this, "_video", i.createRef()), h(this, "videoTimeout", new c.Ep), h(this, "videoPlaying", false), h(this, "handleToggleMute", e => {
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
        title: a,
        playing: o,
        muted: c,
        splashClassName: f,
        splashPlaceholderClassName: h,
        renderMediaOverlay: m
      } = this.props, g = c ? d._RO : d.HKD;
      return (0, r.jsxs)(i.Fragment, {
        children: [l.Fr ? null : (0, r.jsx)(p.A, {
          className: s()(_.Yi, f),
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
        }), (0, r.jsx)(u.F, {
          children: o && e ? null : (0, r.jsx)(b, {
            className: s()(_.NB, h),
            src: n,
            title: a
          }, 0)
        }), (0, r.jsx)(d.DUT, {
          className: s()(_.b4, {
            [_.HY]: o && e,
            [_.Hy]: null != m
          }),
          onClick: this.handleToggleMute,
          children: o && e ? (0, r.jsx)(g, {
            className: _.i2
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
        splashClassName: a
      } = this.props, {
        currentIndex: o
      } = this.state;
      return i ? (0, r.jsx)(b, {
        className: s()(_.Yi, a),
        src: e[o],
        title: n
      }, o) : (0, r.jsx)(b, {
        className: s()(_.Yi, a),
        src: t,
        title: n
      }, "image")
    })
  }
}
let O = y
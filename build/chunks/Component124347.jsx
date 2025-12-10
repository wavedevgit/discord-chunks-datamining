/** Chunk was on web.js **/
/** chunk id: 124347, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FH: () => A,
  YG: () => C,
  ZP: () => D,
  uo: () => T
}), require("./35282.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk286379 = require("./286379.js"),
  Chunk622535 = require("./622535.js"),
  Chunk916616 = require("./916616.jsx"),
  Chunk818083 = require("./818083.js"),
  Chunk279745 = require("./279745.jsx"),
  Chunk134432 = require("./134432.js"),
  Chunk797614 = require("./797614.js"),
  Chunk740492 = require("./740492.js"),
  Chunk866960 = require("./866960.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk956664 = require("./956664.js"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = /\.gif($|\?|#)/i,
  C = /\.webp($|\?|#)/i,
  A = /\.avif($|\?|#)/i,
  N = /\.png($|\?|#)/i,
  P = 400,
  R = 300;
class D extends(r = Chunk473749.Component) {
  static isAnimated(e) {
    let {
      src: t,
      original: n,
      animated: r,
      srcIsAnimated: i
    } = e;
    return r || T.test(null != n && "" !== n ? n : t) || null != i && i && (C.test(null != n && "" !== n ? n : t) || A.test(null != n && "" !== n ? n : t))
  }
  static isSrcPNG(e) {
    let {
      src: t
    } = e;
    return N.test(t)
  }
  static isSrcAVIF(e) {
    let {
      src: t
    } = e;
    return A.test(t)
  }
  static getFormatQuality(e) {
    let {
      src: t,
      original: n,
      animated: r,
      srcIsAnimated: i,
      freeze: a = false
    } = e, o = null, s = null;
    return g.$k && (a || !D.isAnimated({
      src: t,
      original: n,
      animated: r,
      srcIsAnimated: i
    })) ? (o = "webp", (D.isSrcPNG({
      src: t
    }) || D.isSrcAVIF({
      src: t
    })) && (s = "lossless")) : a && (o = "png"), {
      format: o,
      quality: s
    }
  }
  static preloadImage(e) {
    let {
      src: t,
      dimensions: {
        maxWidth: n,
        maxHeight: r,
        imageWidth: i,
        imageHeight: a
      },
      options: {
        srcIsAnimated: o,
        original: s,
        animated: l,
        sourceMetadata: c,
        freeze: u
      },
      callback: d
    } = e;
    if (1 === i && 1 === a) return;
    let {
      format: p,
      quality: _
    } = D.getFormatQuality({
      src: t,
      original: s,
      animated: l,
      srcIsAnimated: o,
      freeze: u
    }), m = (0, f.Q4)({
      src: t,
      width: i,
      height: a,
      maxWidth: n,
      maxHeight: r,
      srcIsAnimated: o,
      format: p,
      quality: _
    }), h = Date.now();
    return (0, f.po)(m, (e, n) => {
      D.trackLoadingCompleted({
        error: e,
        imageData: n,
        trigger: "PRELOAD",
        startLoadingTime: h,
        readyState: b.zo9.READY,
        format: p,
        quality: _,
        imageProps: {
          src: t,
          width: i,
          height: a,
          sourceMetadata: c,
          original: s
        }
      }), null == d || d(e, n)
    })
  }
  static async trackLoadingCompleted(e) {
    var t, n, r;
    let {
      error: i,
      imageData: a,
      trigger: o,
      startLoadingTime: l,
      readyState: c,
      format: u,
      quality: d,
      imageProps: {
        src: f,
        height: g,
        width: E,
        original: y,
        sourceMetadata: O
      }
    } = e;
    if (i && p.Z.increment({
        name: s.V.IMAGE_LOAD_ERROR
      }), !w.getCurrentConfig({
        location: "lazy_image"
      }).enabled) return;
    let v = await fetch(a.url).catch(() => true),
      S = null == v || null == (t = v.headers) ? true : t.get("content-length"),
      I = null != S ? Number(S) : null,
      T = Date.now() - l;
    h.default.track(b.rMx.IMAGE_LOADING_COMPLETED, {
      duration_ms: T,
      requested_height: a.height,
      requested_width: a.width,
      height: g,
      width: E,
      original_url: y,
      url: f,
      requested_url: a.url,
      format: u,
      quality: d,
      state: i ? b.zo9.ERROR : c,
      data_saving_mode: _.ZP.dataSavingMode,
      low_quality_image_mode: _.ZP.dataSavingMode,
      trigger: o,
      size: I,
      message_id: null == O || null == (n = O.message) ? true : n.id,
      message_sent_timestamp: null == O || null == (r = O.message) ? true : r.timestamp.getTime(),
      connection_type: m.Z.getType(),
      effective_connection_speed: m.Z.getEffectiveConnectionSpeed(),
      service_provider: m.Z.getServiceProvider()
    })
  }
  componentDidMount() {
    let {
      readyState: e
    } = this.state;
    module === Chunk981631.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), D.isAnimated(this.props)), this.handleImageLoad), D.isAnimated(this.props) && this.observeVisibility()
  }
  componentDidUpdate(e) {
    let t = D.isAnimated(this.props);
    D.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility())
  }
  componentWillUnmount() {
    D.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
  }
  getSrc(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      {
        src: n,
        width: r,
        height: i,
        maxWidth: a,
        maxHeight: o,
        mediaLayoutType: s
      } = this.props,
      {
        format: l,
        quality: c
      } = D.getFormatQuality(I(v({}, this.props), {
        freeze: t
      }));
    return (0, f.Q4)({
      src: n,
      width: r,
      height: i,
      ratio: e,
      maxWidth: s === y.hV.MOSAIC ? a : true,
      maxHeight: s === y.hV.MOSAIC ? o : true,
      format: l,
      quality: c,
      animated: !t,
      srcIsAnimated: this.props.srcIsAnimated
    })
  }
  getRatio() {
    let {
      width: e,
      height: t,
      maxWidth: n = P,
      maxHeight: r = R,
      mediaLayoutType: i,
      useFullWidth: a
    } = this.props;
    return Chunk54381 === Chunk217702.hV.MOSAIC && Chunk473749 ? (0, Chunk956664.rn)({
      width: module,
      height: exports,
      maxWidth: require,
      maxHeight: r
    }) : (0, Chunk956664.Dc)({
      width: module,
      height: exports,
      maxWidth: require,
      maxHeight: r
    })
  }
  getType() {
    let {
      mediaLayoutType: e,
      responsive: t
    } = this.props;
    return null != module ? module : exports ? Chunk217702.hV.RESPONSIVE : Chunk217702.hV.STATIC
  }
  loadImage(e, t) {
    let {
      width: n,
      height: r
    } = this.props;
    if (this.startLoadingTime = Date.now(), 1 === n && 1 === r) return;
    let i = (0, f.po)(e, (e, n) => {
      null != i && this._cancellers.delete(i), null == t || t(e, n)
    });
    null != i && this._cancellers.add(i)
  }
  render() {
    let {
      alt: e,
      zoomThumbnailPlaceholder: t,
      onZoom: n,
      shouldLink: r,
      onContextMenu: a,
      autoPlay: s,
      original: l,
      className: u,
      imageClassName: d,
      children: f,
      animated: p,
      shouldAnimate: _,
      width: m,
      height: h,
      minWidth: g,
      minHeight: E,
      maxWidth: y,
      maxHeight: O,
      onClick: S,
      renderAccessory: I,
      tabIndex: T,
      limitResponsiveWidth: C,
      useFullWidth: A,
      placeholder: N,
      placeholderVersion: P,
      dataSafeSrc: R,
      srcIsAnimated: w
    } = this.props, {
      readyState: x,
      hasMouseOver: L,
      hasFocus: j
    } = this.state, M = null != require, k = this.getRatio(), U = (0, Chunk392711.clamp)(Math.round(Chunk866960 * k), null != Chunk768581 ? Chunk768581 : 0, null != Chunk217702 ? Chunk217702 : 1 / 0), G = (0, Chunk392711.clamp)(Math.round(Chunk626135 * k), null != Chunk956664 ? Chunk956664 : 0, null != O ? O : 1 / 0), Z = {
      alt: module,
      readyState: x,
      onContextMenu: null != Chunk473749 ? Chunk473749 : true,
      zoomable: M,
      className: Chunk818083,
      imageClassName: Chunk279745,
      minWidth: Chunk768581,
      minHeight: Chunk956664,
      mediaLayoutType: this.getType(),
      limitResponsiveWidth: C,
      useFullWidth: A,
      tabIndex: T,
      width: U,
      height: G,
      src: "",
      placeholder: N,
      placeholderVersion: P,
      dataSafeSrc: R,
      srcIsAnimated: w,
      children: null != Chunk134432 ? e => {
        let {
          src: t,
          size: n,
          alt: r,
          mediaLayoutType: i
        } = e;
        return f({
          src: t,
          size: n,
          alt: r,
          mediaLayoutType: i
        })
      } : true,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };
    if (1 === Z.width && 1 === Z.height) return null;
    switch ((M || null != S) && (Z.onClick = this.onClick), r && (Z.original = null != Chunk622535 && "" !== Chunk622535 ? Chunk622535 : Z.src), x) {
      case Chunk981631.zo9.LOADING:
        null != exports && (Z.src = exports);
        break;
      case Chunk981631.zo9.READY:
        if (D.isAnimated(this.props)) {
          Z.onMouseLeave = this.onMouseLeave;
          let e = (Chunk286379 || L || j) && (null == Chunk740492 || Chunk740492) && D.visibilityObserver.isVisible(this);
          module ? (Z.src = this.getSrc(k), Z.renderAccessory = I) : (Z.src = this.getSrc(k, !Chunk797614 || !Chunk286379), Z.renderAccessory = this.renderAccessory), null != Chunk134432 && (Z.children = t => {
            let {
              src: n,
              size: r,
              alt: i,
              mediaLayoutType: a
            } = t;
            return f({
              src: n,
              size: r,
              animating: e,
              alt: i,
              mediaLayoutType: a
            })
          })
        } else Z.src = this.getSrc(k)
    }
    return (0, Chunk54381.jsx)(Chunk916616.E, v({
      ref: this._imageRef
    }, Z))
  }
  constructor(e) {
    super(e), O(this, "state", {
      readyState: b.zo9.LOADING,
      hasMouseOver: false,
      hasFocus: false
    }), O(this, "startLoadingTime", Date.now()), O(this, "_cancellers", new Set), O(this, "_imageRef", a.createRef()), O(this, "observeVisibility", () => {
      D.visibilityObserver.observe(this, this._imageRef)
    }), O(this, "unobserveVisibility", () => {
      D.visibilityObserver.unobserve(this)
    }), O(this, "handleImageLoad", (e, t) => {
      this.setState({
        readyState: e ? b.zo9.ERROR : b.zo9.READY
      }, () => {
        var n;
        let {
          format: r,
          quality: i
        } = D.getFormatQuality(this.props);
        D.trackLoadingCompleted({
          error: e,
          imageData: t,
          trigger: null != (n = this.props.trigger) ? n : "LOAD",
          startLoadingTime: this.startLoadingTime,
          readyState: this.state.readyState,
          format: r,
          quality: i,
          imageProps: this.props
        })
      })
    }), O(this, "onMouseEnter", e => {
      D.isAnimated(this.props) && this.setState({
        hasMouseOver: true
      });
      let {
        onMouseEnter: t
      } = this.props;
      null == t || t(e)
    }), O(this, "onMouseLeave", e => {
      D.isAnimated(this.props) && this.setState({
        hasMouseOver: false
      });
      let {
        onMouseLeave: t
      } = this.props;
      null == t || t(e)
    }), O(this, "onFocus", e => {
      D.isAnimated(this.props) && this.setState({
        hasFocus: true
      })
    }), O(this, "onBlur", e => {
      let {
        currentTarget: t,
        relatedTarget: n
      } = e;
      t.contains(n) || this.setState({
        hasFocus: false
      })
    }), O(this, "onClick", e => {
      let {
        onZoom: t,
        onClick: n
      } = this.props;
      null != n ? n(e) : null != t && (e.preventDefault(), t(e, {
        zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
        trigger: "CLICK"
      }))
    }), O(this, "renderAccessory", () => {
      let {
        hasMouseOver: e,
        hasFocus: t
      } = this.state, n = e || t, r = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
      return this.props.shouldRenderAccessory ? n ? r : (0, i.jsx)(d.Z, {}) : null
    }), (0, f.Vv)(this.getSrc(this.getRatio(), D.isAnimated(this.props))) && (this.state.readyState = b.zo9.READY)
  }
}
O(D, "visibilityObserver", new Chunk622535.Z({
  threshold: .6
})), O(D, "defaultProps", {
  shouldLink: false,
  autoPlay: false,
  animated: false,
  minWidth: 0,
  minHeight: 0,
  shouldRenderAccessory: true,
  srcIsAnimated: false
});
let w = (0, Chunk818083.B)({
  kind: "user",
  id: "2024-02_image_load_metrics",
  label: "Image load metrics Config User Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Do not send metrics for image load",
    config: {
      enabled: false
    }
  }, {
    id: 2,
    label: "Send metrics for image load",
    config: {
      enabled: true
    }
  }]
})
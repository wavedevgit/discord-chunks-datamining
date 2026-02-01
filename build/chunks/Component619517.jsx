/** Chunk was on web.js **/
/** chunk id: 619517, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => P,
  P8: () => T,
  bp: () => S,
  p4: () => C
}), require("./747238.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk731738 = require("./731738.js"),
  Chunk230109 = require("./230109.js"),
  Chunk673698 = require("./673698.jsx"),
  Chunk600975 = require("./600975.js"),
  Chunk693875 = require("./693875.jsx"),
  Chunk776231 = require("./776231.js"),
  Chunk831062 = require("./831062.js"),
  Chunk964404 = require("./964404.js"),
  Chunk544180 = require("./544180.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk515718 = require("./515718.js"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = /\.gif($|\?|#)/i,
  T = /\.webp($|\?|#)/i,
  C = /\.avif($|\?|#)/i,
  N = /\.png($|\?|#)/i,
  w = 400,
  R = 300;
class P extends(r = Chunk64700.Component) {
  static isAnimated(e) {
    let {
      src: t,
      original: n,
      animated: r,
      srcIsAnimated: i
    } = e;
    return r || S.test(null != n && "" !== n ? n : t) || null != i && i && (T.test(null != n && "" !== n ? n : t) || C.test(null != n && "" !== n ? n : t))
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
    return C.test(t)
  }
  static getFormatQuality(e) {
    let {
      src: t,
      original: n,
      animated: r,
      srcIsAnimated: i,
      freeze: a = false
    } = e, o = null, s = null;
    return g.QB && (a || !P.isAnimated({
      src: t,
      original: n,
      animated: r,
      srcIsAnimated: i
    })) ? (o = "webp", (P.isSrcPNG({
      src: t
    }) || P.isSrcAVIF({
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
    } = P.getFormatQuality({
      src: t,
      original: s,
      animated: l,
      srcIsAnimated: o,
      freeze: u
    }), h = (0, f.AE)({
      src: t,
      width: i,
      height: a,
      maxWidth: n,
      maxHeight: r,
      srcIsAnimated: o,
      format: p,
      quality: _
    }), m = Date.now();
    return (0, f.yt)(h, (e, n) => {
      P.trackLoadingCompleted({
        error: e,
        imageData: n,
        trigger: "PRELOAD",
        startLoadingTime: m,
        readyState: y.Rv1.READY,
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
        original: b,
        sourceMetadata: O
      }
    } = e;
    if (i && p.A.increment({
        name: s.K.IMAGE_LOAD_ERROR
      }), !D.getCurrentConfig({
        location: "lazy_image"
      }).enabled) return;
    let v = await fetch(a.url).catch(() => true),
      A = null == v || null == (t = v.headers) ? true : t.get("content-length"),
      I = null != A ? Number(A) : null,
      S = Date.now() - l;
    m.default.track(y.HAw.IMAGE_LOADING_COMPLETED, {
      duration_ms: S,
      requested_height: a.height,
      requested_width: a.width,
      height: g,
      width: E,
      original_url: b,
      url: f,
      requested_url: a.url,
      format: u,
      quality: d,
      state: i ? y.Rv1.ERROR : c,
      data_saving_mode: _.Ay.dataSavingMode,
      low_quality_image_mode: _.Ay.dataSavingMode,
      trigger: o,
      size: I,
      message_id: null == O || null == (n = O.message) ? true : n.id,
      message_sent_timestamp: null == O || null == (r = O.message) ? true : r.timestamp.getTime(),
      connection_type: h.A.getType(),
      effective_connection_speed: h.A.getEffectiveConnectionSpeed(),
      service_provider: h.A.getServiceProvider()
    })
  }
  componentDidMount() {
    let {
      readyState: e
    } = this.state;
    e === y.Rv1.LOADING && this.loadImage(this.getSrc(this.getRatio(), P.isAnimated(this.props)), this.handleImageLoad), P.isAnimated(this.props) && this.observeVisibility()
  }
  componentDidUpdate(e) {
    let t = P.isAnimated(this.props);
    P.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility())
  }
  componentWillUnmount() {
    P.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
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
      } = P.getFormatQuality(I(v({}, this.props), {
        freeze: t
      }));
    return (0, f.AE)({
      src: n,
      width: r,
      height: i,
      ratio: e,
      maxWidth: s === b.dG.MOSAIC ? a : true,
      maxHeight: s === b.dG.MOSAIC ? o : true,
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
      maxWidth: n = w,
      maxHeight: r = R,
      mediaLayoutType: i,
      useFullWidth: a
    } = this.props;
    return i === b.dG.MOSAIC && a ? (0, E.V)({
      width: e,
      height: t,
      maxWidth: n,
      maxHeight: r
    }) : (0, E.U8)({
      width: e,
      height: t,
      maxWidth: n,
      maxHeight: r
    })
  }
  getType() {
    let {
      mediaLayoutType: e,
      responsive: t
    } = this.props;
    return null != e ? e : t ? b.dG.RESPONSIVE : b.dG.STATIC
  }
  loadImage(e, t) {
    let {
      width: n,
      height: r
    } = this.props;
    if (this.startLoadingTime = Date.now(), 1 === n && 1 === r) return;
    let i = (0, f.yt)(e, (e, n) => {
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
      width: h,
      height: m,
      minWidth: g,
      minHeight: E,
      maxWidth: b,
      maxHeight: O,
      onClick: A,
      renderAccessory: I,
      tabIndex: S,
      limitResponsiveWidth: T,
      useFullWidth: C,
      placeholder: N,
      placeholderVersion: w,
      dataSafeSrc: R,
      srcIsAnimated: D
    } = this.props, {
      readyState: L,
      hasMouseOver: x,
      hasFocus: M
    } = this.state, j = null != n, k = this.getRatio(), U = (0, o.clamp)(Math.round(h * k), null != g ? g : 0, null != b ? b : 1 / 0), G = (0, o.clamp)(Math.round(m * k), null != E ? E : 0, null != O ? O : 1 / 0), V = {
      alt: e,
      readyState: L,
      onContextMenu: null != a ? a : true,
      zoomable: j,
      className: u,
      imageClassName: d,
      minWidth: g,
      minHeight: E,
      mediaLayoutType: this.getType(),
      limitResponsiveWidth: T,
      useFullWidth: C,
      tabIndex: S,
      width: U,
      height: G,
      src: "",
      placeholder: N,
      placeholderVersion: w,
      dataSafeSrc: R,
      srcIsAnimated: D,
      children: null != f ? e => {
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
    if (1 === V.width && 1 === V.height) return null;
    switch ((j || null != A) && (V.onClick = this.onClick), r && (V.original = null != l && "" !== l ? l : V.src), L) {
      case y.Rv1.LOADING:
        null != t && (V.src = t);
        break;
      case y.Rv1.READY:
        if (P.isAnimated(this.props)) {
          V.onMouseLeave = this.onMouseLeave;
          let e = (s || x || M) && (null == _ || _) && P.visibilityObserver.isVisible(this);
          e ? (V.src = this.getSrc(k), V.renderAccessory = I) : (V.src = this.getSrc(k, !p || !s), V.renderAccessory = this.renderAccessory), null != f && (V.children = t => {
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
        } else V.src = this.getSrc(k)
    }
    return (0, i.jsx)(c._, v({
      ref: this._imageRef
    }, V))
  }
  constructor(e) {
    super(e), O(this, "state", {
      readyState: y.Rv1.LOADING,
      hasMouseOver: false,
      hasFocus: false
    }), O(this, "startLoadingTime", Date.now()), O(this, "_cancellers", new Set), O(this, "_imageRef", a.createRef()), O(this, "observeVisibility", () => {
      P.visibilityObserver.observe(this, this._imageRef)
    }), O(this, "unobserveVisibility", () => {
      P.visibilityObserver.unobserve(this)
    }), O(this, "handleImageLoad", (e, t) => {
      this.setState({
        readyState: e ? y.Rv1.ERROR : y.Rv1.READY
      }, () => {
        var n;
        let {
          format: r,
          quality: i
        } = P.getFormatQuality(this.props);
        P.trackLoadingCompleted({
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
      P.isAnimated(this.props) && this.setState({
        hasMouseOver: true
      });
      let {
        onMouseEnter: t
      } = this.props;
      null == t || t(e)
    }), O(this, "onMouseLeave", e => {
      P.isAnimated(this.props) && this.setState({
        hasMouseOver: false
      });
      let {
        onMouseLeave: t
      } = this.props;
      null == t || t(e)
    }), O(this, "onFocus", e => {
      P.isAnimated(this.props) && this.setState({
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
      return this.props.shouldRenderAccessory ? n ? r : (0, i.jsx)(d.A, {}) : null
    }), (0, f.LE)(this.getSrc(this.getRatio(), P.isAnimated(this.props))) && (this.state.readyState = y.Rv1.READY)
  }
}
O(P, "visibilityObserver", new Chunk230109.j({
  threshold: .6
})), O(P, "defaultProps", {
  shouldLink: false,
  autoPlay: false,
  animated: false,
  minWidth: 0,
  minHeight: 0,
  shouldRenderAccessory: true,
  srcIsAnimated: false
});
let D = (0, Chunk600975.C)({
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
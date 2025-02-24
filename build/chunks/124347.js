/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  FH: () => A,
  YG: () => N,
  ZP: () => w,
  uo: () => T
}), n(301563), n(47120);
var r, i = n(200651),
  o = n(192379),
  a = n(392711),
  s = n(286379),
  l = n(622535),
  c = n(916616),
  u = n(818083),
  d = n(279745),
  f = n(134432),
  p = n(797614),
  _ = n(740492),
  h = n(866960),
  m = n(626135),
  g = n(768581),
  E = n(956664),
  v = n(981631),
  b = n(217702);

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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
  N = /\.webp($|\?|#)/i,
  A = /\.avif($|\?|#)/i,
  C = /\.png($|\?|#)/i,
  R = 400,
  P = 300;
class w extends(r = o.Component) {
  static isAnimated(e) {
    let {
      src: t,
      original: n,
      animated: r,
      srcIsAnimated: i
    } = e;
    return r || T.test(null != n && "" !== n ? n : t) || null != i && i && (N.test(null != n && "" !== n ? n : t) || A.test(null != n && "" !== n ? n : t))
  }
  static isSrcPNG(e) {
    let {
      src: t
    } = e;
    return C.test(t)
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
      freeze: o = !1
    } = e, a = null, s = null;
    return g.$k && (o || !w.isAnimated({
      src: t,
      original: n,
      animated: r,
      srcIsAnimated: i
    })) ? (a = "webp", (w.isSrcPNG({
      src: t
    }) || w.isSrcAVIF({
      src: t
    })) && (s = "lossless")) : o && (a = "png"), {
      format: a,
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
        imageHeight: o
      },
      options: {
        srcIsAnimated: a,
        original: s,
        animated: l,
        sourceMetadata: c,
        freeze: u
      },
      callback: d
    } = e;
    if (1 === i && 1 === o) return;
    let {
      format: p,
      quality: _
    } = w.getFormatQuality({
      src: t,
      original: s,
      animated: l,
      srcIsAnimated: a,
      freeze: u
    }), h = (0, f.Q4)({
      src: t,
      width: i,
      height: o,
      maxWidth: n,
      maxHeight: r,
      srcIsAnimated: a,
      format: p,
      quality: _
    }), m = Date.now();
    return (0, f.po)(h, (e, n) => {
      w.trackLoadingCompleted({
        error: e,
        imageData: n,
        trigger: "PRELOAD",
        startLoadingTime: m,
        readyState: v.zo9.READY,
        format: p,
        quality: _,
        imageProps: {
          src: t,
          width: i,
          height: o,
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
      imageData: o,
      trigger: a,
      startLoadingTime: l,
      readyState: c,
      format: u,
      quality: d,
      imageProps: {
        src: f,
        height: g,
        width: E,
        original: b,
        sourceMetadata: y
      }
    } = e;
    if (i && p.Z.increment({
        name: s.V.IMAGE_LOAD_ERROR
      }), !D.getCurrentConfig({
        location: "lazy_image"
      }).enabled) return;
    let O = await fetch(o.url).catch(() => void 0),
      S = null == O ? void 0 : null === (t = O.headers) || void 0 === t ? void 0 : t.get("content-length"),
      I = null != S ? Number(S) : null,
      T = Date.now() - l;
    m.default.track(v.rMx.IMAGE_LOADING_COMPLETED, {
      duration_ms: T,
      requested_height: o.height,
      requested_width: o.width,
      height: g,
      width: E,
      original_url: b,
      url: f,
      requested_url: o.url,
      format: u,
      quality: d,
      state: i ? v.zo9.ERROR : c,
      data_saving_mode: _.ZP.dataSavingMode,
      low_quality_image_mode: _.ZP.dataSavingMode,
      trigger: a,
      size: I,
      message_id: null == y ? void 0 : null === (n = y.message) || void 0 === n ? void 0 : n.id,
      message_sent_timestamp: null == y ? void 0 : null === (r = y.message) || void 0 === r ? void 0 : r.timestamp.getTime(),
      connection_type: h.Z.getType(),
      effective_connection_speed: h.Z.getEffectiveConnectionSpeed(),
      service_provider: h.Z.getServiceProvider()
    })
  }
  componentDidMount() {
    let {
      readyState: e
    } = this.state;
    e === v.zo9.LOADING && this.loadImage(this.getSrc(this.getRatio(), w.isAnimated(this.props)), this.handleImageLoad), w.isAnimated(this.props) && this.observeVisibility()
  }
  componentDidUpdate(e) {
    let t = w.isAnimated(this.props);
    w.isAnimated(e) !== t && (t ? this.observeVisibility() : this.unobserveVisibility())
  }
  componentWillUnmount() {
    w.isAnimated(this.props) && this.unobserveVisibility(), this._cancellers.forEach(e => e()), this._cancellers.clear()
  }
  getSrc(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      {
        src: n,
        width: r,
        height: i,
        maxWidth: o,
        maxHeight: a,
        mediaLayoutType: s
      } = this.props,
      {
        format: l,
        quality: c
      } = w.getFormatQuality(I(O({}, this.props), {
        freeze: t
      }));
    return (0, f.Q4)({
      src: n,
      width: r,
      height: i,
      ratio: e,
      maxWidth: s === b.hV.MOSAIC ? o : void 0,
      maxHeight: s === b.hV.MOSAIC ? a : void 0,
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
      maxWidth: n = R,
      maxHeight: r = P,
      mediaLayoutType: i,
      useFullWidth: o
    } = this.props;
    return i === b.hV.MOSAIC && o ? (0, E.rn)({
      width: e,
      height: t,
      maxWidth: n,
      maxHeight: r
    }) : (0, E.Dc)({
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
    return null != e ? e : t ? b.hV.RESPONSIVE : b.hV.STATIC
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
      onContextMenu: o,
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
      maxHeight: y,
      onClick: S,
      renderAccessory: I,
      tabIndex: T,
      limitResponsiveWidth: N,
      useFullWidth: A,
      placeholder: C,
      placeholderVersion: R,
      dataSafeSrc: P,
      srcIsAnimated: D
    } = this.props, {
      readyState: x,
      hasMouseOver: L,
      hasFocus: M
    } = this.state, k = null != n, j = this.getRatio(), U = (0, a.clamp)(Math.round(h * j), null != g ? g : 0, null != b ? b : 1 / 0), G = (0, a.clamp)(Math.round(m * j), null != E ? E : 0, null != y ? y : 1 / 0), B = {
      alt: e,
      readyState: x,
      onContextMenu: null != o ? o : void 0,
      zoomable: k,
      className: u,
      imageClassName: d,
      minWidth: g,
      minHeight: E,
      mediaLayoutType: this.getType(),
      limitResponsiveWidth: N,
      useFullWidth: A,
      tabIndex: T,
      width: U,
      height: G,
      src: "",
      placeholder: C,
      placeholderVersion: R,
      dataSafeSrc: P,
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
      } : void 0,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };
    if (1 === B.width && 1 === B.height) return null;
    switch ((k || null != S) && (B.onClick = this.onClick), r && (B.original = null != l && "" !== l ? l : B.src), x) {
      case v.zo9.LOADING:
        null != t && (B.src = t);
        break;
      case v.zo9.READY:
        if (w.isAnimated(this.props)) {
          B.onMouseLeave = this.onMouseLeave;
          let e = (s || L || M) && (null == _ || _) && w.visibilityObserver.isVisible(this);
          e ? (B.src = this.getSrc(j), B.renderAccessory = I) : (B.src = this.getSrc(j, !p || !s), B.renderAccessory = this.renderAccessory), null != f && (B.children = t => {
            let {
              src: n,
              size: r,
              alt: i,
              mediaLayoutType: o
            } = t;
            return f({
              src: n,
              size: r,
              animating: e,
              alt: i,
              mediaLayoutType: o
            })
          })
        } else B.src = this.getSrc(j)
    }
    return (0, i.jsx)(c.E, O({}, B))
  }
  constructor(e) {
    super(e), y(this, "state", {
      readyState: v.zo9.LOADING,
      hasMouseOver: !1,
      hasFocus: !1
    }), y(this, "startLoadingTime", Date.now()), y(this, "_cancellers", new Set), y(this, "observeVisibility", () => {
      w.visibilityObserver.observe(this)
    }), y(this, "unobserveVisibility", () => {
      w.visibilityObserver.unobserve(this)
    }), y(this, "handleImageLoad", (e, t) => {
      this.setState({
        readyState: e ? v.zo9.ERROR : v.zo9.READY
      }, () => {
        var n;
        let {
          format: r,
          quality: i
        } = w.getFormatQuality(this.props);
        w.trackLoadingCompleted({
          error: e,
          imageData: t,
          trigger: null !== (n = this.props.trigger) && void 0 !== n ? n : "LOAD",
          startLoadingTime: this.startLoadingTime,
          readyState: this.state.readyState,
          format: r,
          quality: i,
          imageProps: this.props
        })
      })
    }), y(this, "onMouseEnter", e => {
      w.isAnimated(this.props) && this.setState({
        hasMouseOver: !0
      });
      let {
        onMouseEnter: t
      } = this.props;
      null == t || t(e)
    }), y(this, "onMouseLeave", e => {
      w.isAnimated(this.props) && this.setState({
        hasMouseOver: !1
      });
      let {
        onMouseLeave: t
      } = this.props;
      null == t || t(e)
    }), y(this, "onFocus", e => {
      w.isAnimated(this.props) && this.setState({
        hasFocus: !0
      })
    }), y(this, "onBlur", e => {
      let {
        currentTarget: t,
        relatedTarget: n
      } = e;
      t.contains(n) || this.setState({
        hasFocus: !1
      })
    }), y(this, "onClick", e => {
      let {
        onZoom: t,
        onClick: n
      } = this.props;
      null != n ? n(e) : null != t && (e.preventDefault(), t(e, {
        zoomThumbnailPlaceholder: this.getSrc(this.getRatio()),
        trigger: "CLICK"
      }))
    }), y(this, "renderAccessory", () => {
      let {
        hasMouseOver: e,
        hasFocus: t
      } = this.state, n = e || t, r = null != this.props.renderAccessory ? this.props.renderAccessory() : null;
      return this.props.shouldRenderAccessory ? n ? r : (0, i.jsx)(d.Z, {}) : null
    }), (0, f.Vv)(this.getSrc(this.getRatio(), w.isAnimated(this.props))) && (this.state.readyState = v.zo9.READY)
  }
}
y(w, "visibilityObserver", new l.Z({
  threshold: .6
})), y(w, "defaultProps", {
  shouldLink: !1,
  autoPlay: !1,
  animated: !1,
  minWidth: 0,
  minHeight: 0,
  shouldRenderAccessory: !0,
  srcIsAnimated: !1
});
let D = (0, u.B)({
  kind: "user",
  id: "2024-02_image_load_metrics",
  label: "Image load metrics Config User Experiment",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Do not send metrics for image load",
    config: {
      enabled: !1
    }
  }, {
    id: 2,
    label: "Send metrics for image load",
    config: {
      enabled: !0
    }
  }]
})
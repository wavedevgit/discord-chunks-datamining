/** Chunk was on 1272 **/
/** chunk id: 718813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./539854.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk134616 = require("./134616.js"),
  Chunk714338 = require("./714338.js"),
  Chunk663993 = require("./663993.js"),
  Chunk84615 = require("./84615.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk819640 = require("./819640.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk388596 = require("./388596.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
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
let T = (0, Chunk663993.Un)({
    createPromise: () => n.e("69470").then(n.bind(n, 989804)),
    webpackId: 989804,
    name: "UserSettings"
  }),
  N = (0, Chunk663993.Un)({
    createPromise: () => Promise.resolve().then(n.bind(n, 653592)),
    webpackId: 653592,
    name: "ComponentPlayground"
  }),
  j = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("36599"), n.e("7654"), n.e("9414"), n.e("86915")]).then(n.bind(n, 869779)),
    webpackId: 869779,
    name: "ChannelSettings"
  }),
  P = (0, Chunk663993.Un)({
    createPromise: () => n.e("45620").then(n.bind(n, 838819)),
    webpackId: 838819,
    name: "CollectiblesShop"
  }),
  x = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([n.e("36599"), n.e("7654"), n.e("76692"), n.e("8271"), n.e("15851"), n.e("51453"), n.e("845"), n.e("9414"), n.e("6850"), n.e("58227"), n.e("44686"), n.e("9536"), n.e("95140")]).then(n.bind(n, 994763)),
    webpackId: 994763,
    name: "GuildSettings"
  }),
  A = {
    [Chunk981631.S9g.USER_SETTINGS]: () => (0, i.jsx)(T, {}),
    [Chunk981631.S9g.CHANNEL_SETTINGS]: () => (0, i.jsx)(j, {}),
    [Chunk981631.S9g.GUILD_SETTINGS]: () => (0, i.jsx)(x, {}),
    [Chunk981631.S9g.COLLECTIBLES_SHOP]: () => (0, i.jsx)(P, {}),
    [Chunk981631.S9g.COMPONENT_PLAYGROUND]: () => (0, i.jsx)(N, {})
  },
  Z = "SHOWN",
  w = "HIDDEN",
  L = {
    friction: 10,
    tension: 100
  };

function R() {
  return l.useEffect(() => (g.Z.enable(), g.Z.enableTemp(f.u), () => g.Z.disableTemp()), []), null
}
class D extends(r = Chunk473749.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.mode ? {
      animating: true,
      mode: e.mode
    } : null
  }
  componentDidUpdate(e) {
    let {
      mode: t
    } = this.props, {
      mode: n
    } = e;
    if (t !== n) {
      if (t === Z && n === w) return this.animateIn();
      if (t === w && n === Z) return this.animateUnder()
    }
  }
  componentWillEnter(e) {
    let {
      opacity: t,
      scale: n
    } = this.state;
    n.setValue(1.1), t.setValue(0), e(), this.setState({
      animating: true
    }, () => this.animateIn())
  }
  componentWillLeave(e) {
    this.setState({
      animating: true
    }, () => this.animateOut(e))
  }
  animateIn(e) {
    c.ZP.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    s.Z.parallel([s.Z.spring(t, C({
      toValue: 1
    }, L)), s.Z.spring(n, C({
      toValue: 1
    }, L))]).start(() => this.animateComplete(e))
  }
  animateOut(e) {
    c.ZP.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    s.Z.parallel([s.Z.spring(t, C({
      toValue: 0
    }, L)), s.Z.spring(n, C({
      toValue: 1.1
    }, L))]).start(() => {
      e(), E.S.dispatch(O.CkL.LAYER_POP_COMPLETE)
    })
  }
  animateUnder() {
    c.ZP.Emitter.pause(500);
    let {
      opacity: e,
      scale: t
    } = this.state;
    s.Z.parallel([s.Z.spring(e, C({
      toValue: 0
    }, L)), s.Z.spring(t, C({
      toValue: .93
    }, L))]).start(() => this.animateComplete())
  }
  animateComplete(e) {
    this.setState({
      animating: false
    }, e)
  }
  render() {
    let {
      animating: e
    } = this.state, t = this.props, {
      name: n,
      mode: r,
      children: l,
      baseLayer: a
    } = t, c = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(t, ["name", "mode", "children", "baseLayer"]), u = r === w, p = e || u ? this.getAnimatedStyle() : null, f = !u && !a, g = (0, i.jsx)(s.Z.div, S(C({
      ref: e => this.containerRef.current = null != e ? e.componentRef : true,
      "data-layer": null != n ? n : "base",
      "aria-hidden": u,
      "aria-modal": f,
      "aria-label": f ? function(e) {
        switch (e) {
          case O.S9g.USER_SETTINGS:
            return v.intl.string(v.t.cduTBL);
          case O.S9g.CHANNEL_SETTINGS:
            return v.intl.string(v.t.XPDhcc);
          case O.S9g.COLLECTIBLES_SHOP:
            return v.intl.string(v.t.pWG4ze);
          case O.S9g.COMPONENT_PLAYGROUND:
            return "Component Playground";
          default:
            return ""
        }
      }(n) : true,
      role: f ? "dialog" : true,
      className: o()(y.layer, {
        [y.baseLayer]: a,
        [y.animating]: e,
        "stop-animations": r === w
      }),
      style: p
    }, c), {
      children: l
    }));
    return a ? g : (0, i.jsx)(d.EqS, {
      containerRef: this.containerRef,
      children: g
    })
  }
  getAnimatedStyle() {
    let {
      baseLayer: e
    } = this.props, {
      opacity: t,
      scale: n
    } = this.state, {
      reducedMotion: r
    } = this.context;
    return {
      opacity: t,
      transform: r.enabled || e ? true : [{
        scale: n
      }, {
        translateZ: 0
      }]
    }
  }
  constructor(e) {
    super(e), I(this, "containerRef", l.createRef());
    let t = 1,
      n = 1;
    e.mode === w && (t = .93, n = 0), this.state = {
      animating: false,
      scale: new s.Z.Value(t),
      opacity: new s.Z.Value(n),
      mode: e.mode
    }
  }
}
I(D, "defaultProps", {
  baseLayer: false
}), I(D, "contextType", Chunk481060.Sfi);
class M extends Chunk473749.PureComponent {
  componentDidMount() {
    E.S.subscribe(O.CkL.LAYER_POP_ESCAPE_KEY, p.xf)
  }
  componentWillUnmount() {
    E.S.unsubscribe(O.CkL.LAYER_POP_ESCAPE_KEY, p.xf)
  }
  renderLayers() {
    let {
      children: e,
      layers: t,
      hasFullScreenLayer: n
    } = this.props, {
      length: r
    } = t, l = [];
    return l.push((0, i.jsx)(D, {
      mode: 0 !== r || n ? w : Z,
      baseLayer: true,
      children: e
    }, "layer-base")), t.forEach((e, t) => l.push(this.renderComponent(e, t, r))), l
  }
  renderComponent(e, t, n) {
    let r;
    return r = "string" == typeof e ? A[e]() : (0, i.jsx)(e, {}), (0, i.jsxs)(D, {
      name: "string" == typeof e ? e : true,
      mode: t === n - 1 ? Z : w,
      children: [(0, i.jsx)(R, {}), r]
    }, "layer-".concat(t))
  }
  renderArtisanalHack() {
    return (0, i.jsx)(d.f6W, {
      theme: this.props.sidebarTheme,
      children: e => (0, i.jsx)("div", {
        className: o()(y.bg, e)
      })
    })
  }
  render() {
    return (0, i.jsxs)(i.Fragment, {
      children: [this.renderArtisanalHack(), (0, i.jsx)(u.W, {
        component: "div",
        className: o()(y.layers, this.props.className),
        children: this.renderLayers()
      })]
    })
  }
}

function k(e) {
  let t = (0, b.Ll)(),
    n = (0, c.e7)([_.Z], () => _.Z.getLayers()),
    r = (0, h.QP)(e => e.fullScreenLayers.length > 0 && !e.fullScreenLayers.some(e => e.options.showAppUnderLayer));
  return (0, i.jsx)(M, S(C({}, e), {
    sidebarTheme: t,
    layers: n,
    hasFullScreenLayer: r
  }))
}
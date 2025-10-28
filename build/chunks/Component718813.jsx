/** Chunk was on 1272 **/
/** chunk id: 718813, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => G
}), require("./539854.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk506945 = require("./506945.js"),
  Chunk256076 = require("./256076.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
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
let N = (0, Chunk663993.Un)({
    createPromise: () => require.e("69470").then(require.bind(require, 989804)),
    webpackId: 989804,
    name: "UserSettings"
  }),
  j = (0, Chunk663993.Un)({
    createPromise: () => require.e("79835").then(require.bind(require, 72493)),
    webpackId: 72493
  }),
  P = (0, Chunk663993.Un)({
    createPromise: () => require.e("80448").then(require.bind(require, 765457)),
    webpackId: 765457,
    name: "CheckpointSlides"
  }),
  x = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("36599"), require.e("7654"), require.e("86736"), require.e("86915")]).then(require.bind(require, 869779)),
    webpackId: 869779,
    name: "ChannelSettings"
  }),
  A = (0, Chunk663993.Un)({
    createPromise: () => require.e("45620").then(require.bind(require, 838819)),
    webpackId: 838819,
    name: "CollectiblesShop"
  }),
  Z = (0, Chunk663993.Un)({
    createPromise: () => Promise.all([require.e("36599"), require.e("76692"), require.e("8271"), require.e("15851"), require.e("51453"), require.e("7654"), require.e("845"), require.e("86736"), require.e("6850"), require.e("58227"), require.e("44686"), require.e("30378"), require.e("64982"), require.e("95140")]).then(require.bind(require, 994763)),
    webpackId: 994763,
    name: "GuildSettings"
  }),
  w = {
    [Chunk981631.S9g.USER_SETTINGS]: () => (0, Chunk951288.jsx)(N, {}),
    [Chunk981631.S9g.CHANNEL_SETTINGS]: () => (0, Chunk951288.jsx)(x, {}),
    [Chunk981631.S9g.GUILD_SETTINGS]: () => (0, Chunk951288.jsx)(Z, {}),
    [Chunk981631.S9g.COLLECTIBLES_SHOP]: () => (0, Chunk951288.jsx)(A, {}),
    [Chunk981631.S9g.MANA_PLAYGROUND]: () => (0, Chunk951288.jsx)(j, {}),
    [Chunk981631.S9g.CHECKPOINT]: () => (0, Chunk951288.jsx)(P, {})
  },
  L = "SHOWN",
  R = "HIDDEN",
  D = {
    friction: 10,
    tension: 100
  };

function M() {
  return Chunk647438.useEffect(() => (Chunk714338.Z.enable(), Chunk714338.Z.enableTemp(Chunk134616.u), () => Chunk714338.Z.disableTemp()), []), null
}
class k extends(r = Chunk647438.PureComponent) {
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
      if (t === L && n === R) return this.animateIn();
      if (t === R && n === L) return this.animateUnder()
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
    o.Z.parallel([o.Z.spring(t, S({
      toValue: 1
    }, D)), o.Z.spring(n, S({
      toValue: 1
    }, D))]).start(() => this.animateComplete(e))
  }
  animateOut(e) {
    c.ZP.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    E.S.dispatch(O.CkL.LAYER_POP_START), o.Z.parallel([o.Z.spring(t, S({
      toValue: 0
    }, D)), o.Z.spring(n, S({
      toValue: 1.1
    }, D))]).start(() => {
      e(), E.S.dispatch(O.CkL.LAYER_POP_COMPLETE)
    })
  }
  animateUnder() {
    Chunk442837.ZP.Emitter.pause(500);
    let {
      opacity: e,
      scale: t
    } = this.state;
    Chunk748780.Z.parallel([Chunk748780.Z.spring(module, S({
      toValue: 0
    }, D)), Chunk748780.Z.spring(exports, S({
      toValue: .93
    }, D))]).start(() => this.animateComplete())
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
    } = exports, c = function(e, t) {
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
    }(exports, ["name", "mode", "children", "baseLayer"]), u = r === R, p = module || Chunk215569 ? this.getAnimatedStyle() : null, f = !Chunk215569 && !Chunk120356, m = (0, Chunk951288.jsx)(Chunk748780.Z.div, T(S({
      ref: e => this.containerRef.current = null != e ? e.componentRef : true,
      "data-layer": null != require ? require : "base",
      "aria-hidden": Chunk215569,
      "aria-modal": Chunk134616,
      "aria-label": Chunk134616 ? function(e) {
        switch (e) {
          case O.S9g.USER_SETTINGS:
            return I.intl.string(I.t.cduTBL);
          case O.S9g.CHANNEL_SETTINGS:
            return I.intl.string(I.t.XPDhcc);
          case O.S9g.COLLECTIBLES_SHOP:
            return I.intl.string(I.t.pWG4ze);
          case O.S9g.MANA_PLAYGROUND:
            return "Component Playground";
          case O.S9g.CHECKPOINT:
            return I.intl.string(v.default["CdU/PF"]);
          default:
            return ""
        }
      }(require) : true,
      role: Chunk134616 ? "dialog" : true,
      className: s()(Chunk256076.layer, {
        [Chunk256076.baseLayer]: Chunk120356,
        [Chunk256076.animating]: module,
        "stop-animations": r === R
      }),
      style: Chunk37234
    }, Chunk442837), {
      children: Chunk647438
    }));
    return Chunk120356 ? Chunk714338 : (0, Chunk951288.jsx)(Chunk481060.EqS, {
      containerRef: this.containerRef,
      children: Chunk714338
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
      opacity: exports,
      transform: r.enabled || module ? true : [{
        scale: require
      }, {
        translateZ: 0
      }]
    }
  }
  constructor(e) {
    super(e), C(this, "containerRef", l.createRef());
    let t = 1,
      n = 1;
    e.mode === R && (t = .93, n = 0), this.state = {
      animating: false,
      scale: new o.Z.Value(t),
      opacity: new o.Z.Value(n),
      mode: e.mode
    }
  }
}
C(k, "defaultProps", {
  baseLayer: false
}), C(k, "contextType", Chunk481060.Sfi);
class U extends Chunk647438.PureComponent {
  componentDidMount() {
    Chunk585483.S.subscribe(Chunk981631.CkL.LAYER_POP_ESCAPE_KEY, Chunk37234.xf)
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.LAYER_POP_ESCAPE_KEY, Chunk37234.xf)
  }
  renderLayers() {
    let {
      children: e,
      layers: t,
      hasFullScreenLayer: n
    } = this.props, {
      length: r
    } = exports, l = [];
    return Chunk647438.push((0, Chunk951288.jsx)(k, {
      mode: 0 !== r || require ? R : L,
      baseLayer: true,
      children: module
    }, "layer-base")), exports.forEach((e, t) => l.push(this.renderComponent(e, t, r))), Chunk647438
  }
  renderComponent(e, t, n) {
    let r;
    return r = "string" == typeof e ? w[e]() : (0, i.jsx)(e, {}), (0, i.jsxs)(k, {
      name: "string" == typeof e ? e : true,
      mode: t === n - 1 ? L : R,
      children: [(0, i.jsx)(M, {}), r]
    }, "layer-".concat(t))
  }
  renderArtisanalHack() {
    return (0, Chunk951288.jsx)(Chunk481060.f6W, {
      theme: this.props.sidebarTheme,
      children: e => (0, i.jsx)("div", {
        className: s()(y.bg, e)
      })
    })
  }
  render() {
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [this.renderArtisanalHack(), (0, Chunk951288.jsx)(Chunk215569.W, {
        component: "div",
        className: s()(Chunk256076.layers, this.props.className),
        children: this.renderLayers()
      })]
    })
  }
}

function G(e) {
  let t = (0, _.Ll)(),
    n = (0, c.e7)([b.Z], () => b.Z.getLayers()),
    r = (0, g.QP)(e => e.fullScreenLayers.length > 0);
  return (0, i.jsx)(U, T(S({}, e), {
    sidebarTheme: t,
    layers: n,
    hasFullScreenLayer: r
  }))
}
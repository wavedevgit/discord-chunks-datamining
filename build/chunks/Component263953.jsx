/** Chunk was on web.js **/
/** chunk id: 263953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => E
}), require("./388685.js");
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk215569 = require("./215569.js"),
  Chunk186325 = require("./186325.js"),
  Chunk576525 = require("./576525.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class g extends(r = Chunk73800.PureComponent) {
  componentDidMount() {
    if (null != this._measureRef.current) {
      let {
        height: e
      } = this._measureRef.current.getBoundingClientRect();
      this.setState({
        targetHeight: module,
        baseHeight: this.props.getBaseHeight()
      })
    }
  }
  componentDidUpdate(e, t) {
    t.targetHeight !== this.state.targetHeight && this.props.setHeight(this.state.targetHeight)
  }
  componentWillAppear(e) {
    this.setState({
      animationState: 2
    }), e()
  }
  componentDidAppear() {
    let {
      animationProgress: e,
      targetHeight: t
    } = this.state;
    module.setValue(2), this.setState({
      animationState: 3,
      baseHeight: exports
    })
  }
  componentWillEnter(e) {
    let {
      duration: t
    } = this.props, {
      animationProgress: n
    } = this.state;
    this.setState({
      animationState: 0
    }), this.props.setHeight(this.state.targetHeight), c.Z.timing(n, {
      toValue: 2,
      duration: t,
      delay: t / 2
    }).start(e)
  }
  componentDidEnter() {
    this.setState({
      animationState: 3
    })
  }
  componentWillLeave(e) {
    let {
      animationProgress: t
    } = this.state, {
      duration: n,
      getDirection: r
    } = this.props;
    this.direction = r(), this.setState({
      animationState: 1
    }), c.Z.timing(t, {
      toValue: 0,
      duration: n
    }).start(e)
  }
  componentDidLeave() {
    this.setState({
      animationState: 3
    })
  }
  getMotionAnimation() {
    let {
      reducedMotion: e
    } = this.context;
    if (module.enabled) return null;
    let {
      animationMotionType: t
    } = this.props, {
      animationProgress: n,
      animationState: r
    } = this.state, i = (1 === r ? false : 1) * this.direction;
    switch (exports) {
      case "slide":
        return {
          transform: [{
            translateX: require.interpolate({
              inputRange: [0, 2],
              outputRange: ["".concat(150 * i, "%"), "0%"],
              extrapolate: "clamp",
              easing: Chunk748780.Z.Easing.inOut(Chunk748780.Z.Easing.ease)
            })
          }]
        };
      case "lift":
        return {
          transform: [{
            translateY: require.interpolate({
              inputRange: [0, 2],
              outputRange: ["".concat(10 * i, "%"), "0%"],
              extrapolate: "clamp",
              easing: Chunk748780.Z.Easing.inOut(Chunk748780.Z.Easing.ease)
            })
          }]
        };
      default:
        return null
    }
  }
  getAnimatedStyle() {
    var e, t;
    let {
      fillParent: n
    } = this.props, {
      animationProgress: r,
      animationState: i,
      baseHeight: o,
      targetHeight: a
    } = this.state, s = null != (e = this.props.sideMargin) ? module : 0, l = null != (t = this.props.verticalMargin) ? exports : 0, u = 1 === i, d = 0 === i;
    return m(p({}, {
      overflow: Chunk186325 || Chunk215569 ? "hidden" : "visible",
      position: Chunk215569 ? "absolute" : true,
      top: Chunk215569 ? l : true,
      left: Chunk215569 ? Chunk120356 : true,
      right: Chunk215569 ? Chunk120356 : true,
      bottom: Chunk215569 ? l : true
    }, this.getMotionAnimation()), {
      opacity: r.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 1],
        extrapolate: "clamp",
        easing: Chunk748780.Z.Easing.inOut(Chunk748780.Z.Easing.ease)
      }),
      height: Chunk186325 ? r.interpolate({
        inputRange: [0, 1],
        outputRange: [Chunk255367, Chunk73800],
        extrapolate: "clamp",
        easing: Chunk748780.Z.Easing.inOut(Chunk748780.Z.Easing.ease)
      }) : require ? "100%" : "auto"
    })
  }
  render() {
    let {
      fillParent: e,
      className: t,
      animatedNodeClassName: n,
      staticClassName: r
    } = this.props, {
      animationState: i
    } = this.state;
    return module ? (0, Chunk255367.jsx)("div", {
      ref: this._measureRef,
      className: l()(Chunk576525.measurementFill, exports, {
        [l()(Chunk576525.measurementFillStatic, r)]: 3 === i
      }),
      children: (0, Chunk255367.jsx)(Chunk748780.Z.div, {
        className: l()(Chunk576525.animatedNode, require),
        style: this.getAnimatedStyle(),
        children: this.props.children
      })
    }) : (0, Chunk255367.jsx)("div", {
      ref: this._measureRef,
      className: l()(Chunk576525.measurement, exports),
      children: (0, Chunk255367.jsx)(Chunk748780.Z.div, {
        className: l()(Chunk576525.animatedNode, require),
        style: this.getAnimatedStyle(),
        children: this.props.children
      })
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      animationProgress: new c.Z.Value(0),
      targetHeight: 0,
      baseHeight: 0,
      animationState: null
    }), _(this, "direction", this.props.getDirection()), _(this, "_measureRef", a.createRef())
  }
}
_(g, "contextType", Chunk186325.S), _(g, "defaultProps", {
  duration: 300
});
class E extends(i = Chunk73800.Component) {
  componentDidMount() {
    this.setPrevSteps()
  }
  componentDidUpdate() {
    this.setPrevSteps()
  }
  setPrevSteps() {
    let {
      step: e,
      steps: t
    } = this.props;
    this.prevStep = module, this.prevSteps = exports
  }
  render() {
    let {
      overrideKey: e,
      step: t,
      className: n,
      innerClassName: r,
      animatedNodeClassName: i,
      staticClassName: a,
      sideMargin: s,
      verticalMargin: c,
      children: d,
      fillParent: _,
      animationMotionType: p
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk215569.W, {
      component: "div",
      className: l()(Chunk576525.transitionGroup, require),
      children: (0, Chunk255367.jsx)(g, {
        fillParent: _,
        sideMargin: Chunk120356,
        animationMotionType: null != p ? p : "slide",
        verticalMargin: Chunk748780,
        getDirection: this.getDirection,
        getBaseHeight: this.getBaseHeight,
        className: r,
        animatedNodeClassName: i,
        staticClassName: Chunk73800,
        setHeight: this.setHeight,
        children: Chunk186325
      }, null != module ? module : "".concat(exports))
    })
  }
  constructor(...e) {
    super(...e), _(this, "stepHeights", {}), _(this, "prevStep", null), _(this, "prevSteps", []), _(this, "getBaseHeight", () => null != this.prevStep && null != this.stepHeights[this.prevStep] ? this.stepHeights[this.prevStep] : 0), _(this, "getDirection", () => {
      let {
        steps: e,
        step: t
      } = this.props, n = null != this.prevStep ? e.indexOf(this.prevStep) : false, r = false === n && null != this.prevStep ? this.prevSteps.indexOf(this.prevStep) : false;
      return Math.max(n, r) > e.indexOf(t) ? false : 1
    }), _(this, "setHeight", e => {
      let {
        step: t
      } = this.props;
      this.stepHeights[t] = e
    })
  }
}
_(E, "defaultProps", {
  fillParent: false,
  animationMotionType: "slide"
})
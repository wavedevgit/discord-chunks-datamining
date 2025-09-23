/** Chunk was on 3688 **/
/** chunk id: 568154, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => y,
  h: () => w
}), require("./388685.js");
var s, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk477690 = require("./477690.js"),
  Chunk877604 = require("./877604.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk133853 = require("./133853.jsx"),
  Chunk686694 = require("./686694.jsx"),
  Chunk898625 = require("./898625.js"),
  Chunk373566 = require("./373566.js");

function m(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
let v = (0, Chunk624138.Mg)(Chunk477690.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

function g(t, e) {
  let {
    innerWidth: i,
    innerHeight: s
  } = window;
  if (0 === t || 0 === e) return null;
  let n = e / t,
    a = i,
    h = Math.round(i * n);
  return h < s && (h = s, a = Math.round(s * (n = t / e))), {
    naturalWidth: t,
    naturalHeight: e,
    width: a,
    height: h
  }
}

function w(t) {
  let {
    splash: e,
    children: i
  } = t, [{
    width: s,
    height: h
  }, o] = a.useState({
    width: 0,
    height: 0,
    naturalHeight: 0,
    naturalWidth: 0
  });
  return a.useEffect(() => {
    function t() {
      o(t => {
        let {
          naturalWidth: e,
          naturalHeight: i
        } = t, s = g(e, i);
        return null != s ? s : t
      })
    }
    return window.addEventListener("resize", t), () => window.removeEventListener("reslize", t)
  }, []), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.Z, {
      className: f.rightSplit,
      onLoad: function(t) {
        let {
          currentTarget: e
        } = t, {
          naturalWidth: i,
          naturalHeight: s
        } = e, n = g(i, s);
        null != n && o(n)
      },
      src: e,
      width: s,
      height: h
    }), (0, n.jsx)("div", {
      className: r()(f.leftSplit, {
        [f.nonEmbeddedLeftSplit]: true
      }),
      children: i
    })]
  })
}
class b extends(s = Chunk647438.PureComponent) {
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  calculateShowWaveAnimation() {
    return window.innerWidth > v
  }
  renderSplashArt() {
    let {
      splash: t,
      embedded: e
    } = this.props, {
      width: i,
      height: s
    } = this.state;
    return null != module ? (0, Chunk951288.jsx)(Chunk877604.Z, {
      className: r()(Chunk373566.rightSplit, {
        [Chunk373566.embedded]: exports
      }),
      src: module,
      width: require,
      height: s,
      onLoad: this.handleLoad
    }) : null
  }
  renderWave() {
    let {
      waveState: t,
      updateWaveState: e,
      embedded: i
    } = this.props, {
      showWaveAnimation: s,
      splashLoaded: a
    } = this.state;
    return s ? (0, Chunk951288.jsx)(Chunk686694.Z, {
      embedded: require,
      waveState: module,
      updateWaveState: exports,
      hideFallback: !Chunk647438
    }) : (0, Chunk951288.jsx)("div", {
      className: Chunk373566.mobileWave
    })
  }
  renderContent() {
    let {
      children: t,
      waveState: e,
      showLogo: i,
      logoClassName: s,
      embedded: h
    } = this.props, {
      showWaveAnimation: o
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [this.renderWave(), (0, Chunk951288.jsxs)("div", {
        className: r()(Chunk373566.leftSplit, {
          [Chunk373566.nonEmbeddedLeftSplit]: Chunk120356
        }),
        children: [require ? (0, Chunk951288.jsx)(Chunk133853.Z, {
          show: !Chunk477690 || exports === Chunk898625.hO.ENTERED && exports !== Chunk898625.hO.FILLING,
          className: r()(Chunk373566.logo, s)
        }) : null, module]
      })]
    })
  }
  render() {
    let {
      className: t
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: r()(module, Chunk373566.wrapper),
      children: [this.renderSplashArt(), this.renderContent()]
    })
  }
  constructor(...t) {
    super(...t), m(this, "state", {
      naturalWidth: 0,
      naturalHeight: 0,
      width: 0,
      height: 0,
      showWaveAnimation: this.calculateShowWaveAnimation(),
      splashLoaded: false
    }), m(this, "handleResize", () => {
      let {
        naturalWidth: t,
        naturalHeight: e
      } = this.state, i = g(t, e), s = this.calculateShowWaveAnimation();
      null != i ? this.setState(function(t, e) {
        return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
          var i = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(t);
            i.push.apply(i, s)
          }
          return i
        })(Object(e)).forEach(function(i) {
          Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(e, i))
        }), t
      }(function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            s = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), s.forEach(function(e) {
            m(t, e, i[e])
          })
        }
        return t
      }({}, i), {
        showWaveAnimation: s
      })) : this.setState({
        showWaveAnimation: s
      })
    }), m(this, "handleLoad", t => {
      let {
        currentTarget: e
      } = t, {
        naturalWidth: i,
        naturalHeight: s
      } = e, n = g(i, s);
      null != n && this.setState(n), this.setState({
        splashLoaded: true
      }), window.removeEventListener("resize", this.handleResize), window.addEventListener("resize", this.handleResize)
    })
  }
}
m(b, "defaultProps", {
  embedded: false
});
let y = 12633 == require.j ? b : null
/** Chunk was on 51235 **/
/** chunk id: 670512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk139834 = require("./139834.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = {
  friction: 15,
  tension: 100
};
class m extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    this.setState({
      shown: true
    }), Chunk585483.S.subscribe(Chunk981631.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentWillUnmount() {
    this.focusTimeout.stop(), Chunk585483.S.unsubscribe(Chunk981631.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentDidUpdate() {
    let {
      hasQuery: e
    } = this.props;
    module || this.springTo(0)
  }
  springTo(e) {
    let {
      reducedMotion: t
    } = this.context;
    true !== t.enabled && s.Z.spring(this.state.translateY, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          g(e, t, n[t])
        })
      }
      return e
    }({
      toValue: Math.min(e, 250)
    }, b)).start()
  }
  renderArrowGroup(e) {
    return (0, i.jsxs)("div", {
      className: o()(p.arrowGroup, e),
      children: [(0, i.jsx)(s.Z.div, {
        className: o()(p.arrowContainer, p.horizontal),
        style: this.getStyle(),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(403756),
          className: p.arrowIcon
        })
      }), (0, i.jsx)("div", {
        className: o()(p.arrowContainer, p.diag1),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(536404),
          className: p.arrowIcon
        })
      }), (0, i.jsx)("div", {
        className: o()(p.arrowContainer, p.diag2),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(569347),
          className: p.arrowIcon
        })
      })]
    })
  }
  renderContent() {
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk139834.tutorialMessages,
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk139834.searchMessage,
        children: Chunk388032.intl.string(Chunk388032.t.Mp0IGK)
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk139834.selectMessage,
        children: Chunk388032.intl.string(Chunk388032.t["3CbpwH"])
      })]
    })
  }
  render() {
    let {
      hasQuery: e
    } = this.props, {
      shown: t
    } = this.state;
    return (0, Chunk54381.jsxs)("div", {
      ref: this.rootRef,
      className: o()(Chunk139834.tutorial, {
        [Chunk139834.shown]: exports,
        [Chunk139834.hasQuery]: module
      }),
      children: [this.renderContent(), this.renderArrowGroup(Chunk139834.__invalid_left), this.renderArrowGroup(Chunk139834.right)]
    })
  }
  getStyle() {
    let {
      reducedMotion: e
    } = this.context;
    returntrue === module.enabled ? {} : {
      opacity: 1,
      transform: [{
        translateY: this.state.translateY.interpolate({
          inputRange: [0, 250],
          outputRange: ["0px", "".concat(250, "px")]
        })
      }, {
        translateZ: 0
      }]
    }
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      shown: false,
      translateY: new s.Z.Value(0)
    }), g(this, "rootRef", l.createRef()), g(this, "focusTimeout", new c.V7), g(this, "handleResultFocus", e => {
      let {
        node: t
      } = e;
      this.focusTimeout.start(1, () => {
        if (this.props.hasQuery && null != t && null != this.rootRef.current) {
          let {
            top: e
          } = this.rootRef.current.getBoundingClientRect(), {
            top: n
          } = t.getBoundingClientRect(), r = Math.abs(e - n);
          this.springTo(r - 118 + 9)
        } else this.springTo(0)
      })
    })
  }
}
g(m, "contextType", Chunk481060.Sfi);
let y = m
/** Chunk was on 76282 **/
n.d(t, {
  Z: () => g
}), n(47120);
var r, i = n(200651),
  o = n(192379),
  l = n(120356),
  a = n.n(l),
  s = n(748780),
  c = n(846519),
  u = n(481060),
  d = n(585483),
  _ = n(981631),
  p = n(388032),
  E = n(903590);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let m = {
  friction: 15,
  tension: 100
};
class h extends(r = o.PureComponent) {
  componentDidMount() {
    this.setState({
      shown: !0
    }), d.S.subscribe(_.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentWillUnmount() {
    this.focusTimeout.stop(), d.S.unsubscribe(_.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentDidUpdate() {
    let {
      hasQuery: e
    } = this.props;
    e || this.springTo(0)
  }
  springTo(e) {
    let {
      reducedMotion: t
    } = this.context;
    !0 !== t.enabled && s.Z.spring(this.state.translateY, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          f(e, t, n[t])
        })
      }
      return e
    }({
      toValue: Math.min(e, 250)
    }, m)).start()
  }
  renderArrowGroup(e) {
    return (0, i.jsxs)("div", {
      className: a()(E.arrowGroup, e),
      children: [(0, i.jsx)(s.Z.div, {
        className: a()(E.arrowContainer, E.horizontal),
        style: this.getStyle(),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(403756),
          className: E.arrowIcon
        })
      }), (0, i.jsx)("div", {
        className: a()(E.arrowContainer, E.diag1),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(536404),
          className: E.arrowIcon
        })
      }), (0, i.jsx)("div", {
        className: a()(E.arrowContainer, E.diag2),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(569347),
          className: E.arrowIcon
        })
      })]
    })
  }
  renderContent() {
    return (0, i.jsxs)("div", {
      className: E.tutorialMessages,
      children: [(0, i.jsx)("div", {
        className: E.searchMessage,
        children: p.NW.string(p.t.Mp0IGB)
      }), (0, i.jsx)("div", {
        className: E.selectMessage,
        children: p.NW.string(p.t["3CbpwM"])
      })]
    })
  }
  render() {
    let {
      hasQuery: e
    } = this.props, {
      shown: t
    } = this.state;
    return (0, i.jsxs)("div", {
      ref: this.rootRef,
      className: a()(E.tutorial, {
        [E.shown]: t,
        [E.hasQuery]: e
      }),
      children: [this.renderContent(), this.renderArrowGroup(E.__invalid_left), this.renderArrowGroup(E.right)]
    })
  }
  getStyle() {
    let {
      reducedMotion: e
    } = this.context;
    return !0 === e.enabled ? {} : {
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
    super(...e), f(this, "state", {
      shown: !1,
      translateY: new s.Z.Value(0)
    }), f(this, "rootRef", o.createRef()), f(this, "focusTimeout", new c.V7), f(this, "handleResultFocus", e => {
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
f(h, "contextType", u.Sfi);
let g = h
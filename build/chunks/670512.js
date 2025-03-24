/** Chunk was on 48909 **/
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
  p = n(981631),
  f = n(388032),
  h = n(903590);

function _(e, t, n) {
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
class b extends(r = o.PureComponent) {
  componentDidMount() {
    this.setState({
      shown: !0
    }), d.S.subscribe(p.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
  }
  componentWillUnmount() {
    this.focusTimeout.stop(), d.S.unsubscribe(p.CkL.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus)
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
          _(e, t, n[t])
        })
      }
      return e
    }({
      toValue: Math.min(e, 250)
    }, m)).start()
  }
  renderArrowGroup(e) {
    return (0, i.jsxs)("div", {
      className: a()(h.arrowGroup, e),
      children: [(0, i.jsx)(s.Z.div, {
        className: a()(h.arrowContainer, h.horizontal),
        style: this.getStyle(),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(403756),
          className: h.arrowIcon
        })
      }), (0, i.jsx)("div", {
        className: a()(h.arrowContainer, h.diag1),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(536404),
          className: h.arrowIcon
        })
      }), (0, i.jsx)("div", {
        className: a()(h.arrowContainer, h.diag2),
        children: (0, i.jsx)("img", {
          alt: "",
          src: n(569347),
          className: h.arrowIcon
        })
      })]
    })
  }
  renderContent() {
    return (0, i.jsxs)("div", {
      className: h.tutorialMessages,
      children: [(0, i.jsx)("div", {
        className: h.searchMessage,
        children: f.NW.string(f.t.Mp0IGB)
      }), (0, i.jsx)("div", {
        className: h.selectMessage,
        children: f.NW.string(f.t["3CbpwM"])
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
      className: a()(h.tutorial, {
        [h.shown]: t,
        [h.hasQuery]: e
      }),
      children: [this.renderContent(), this.renderArrowGroup(h.__invalid_left), this.renderArrowGroup(h.right)]
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
    super(...e), _(this, "state", {
      shown: !1,
      translateY: new s.Z.Value(0)
    }), _(this, "rootRef", o.createRef()), _(this, "focusTimeout", new c.V7), _(this, "handleResultFocus", e => {
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
_(b, "contextType", u.Sfi);
let g = b
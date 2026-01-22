/** Chunk was on 28636 **/
/** chunk id: 710016, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./321073.js");
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk985623 = require("./985623.js"),
  o = require.n(Chunk985623),
  Chunk615300 = require("./615300.js"),
  Chunk73939 = require("./73939.js"),
  Chunk707685 = require("./707685.js"),
  Chunk775121 = require("./775121.js"),
  Chunk776231 = require("./776231.js"),
  Chunk848752 = require("./848752.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk904482 = require("./904482.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}
let A = {
  friction: 10,
  tension: 100
};
class _ extends Chunk64700.Component {
  componentWillEnter(e) {
    let {
      directionHistory: t
    } = this.props, {
      translate: n,
      opacity: l
    } = this.state;
    n.setValue(t[t.length - 1]), l.setValue(0), e(), d.A.parallel([d.A.timing(l, {
      toValue: 1,
      easing: d.A.Easing.out(d.A.Easing.linear),
      duration: 200
    }), d.A.spring(n, j({
      toValue: 0
    }, A))]).start()
  }
  componentWillLeave(e) {
    let {
      directionHistory: t
    } = this.props, {
      opacity: n,
      translate: l
    } = this.state;
    d.A.parallel([d.A.timing(n, {
      toValue: 0,
      easing: d.A.Easing.in(d.A.Easing.linear),
      duration: 200
    }), d.A.spring(l, j({
      toValue: false * t[t.length - 1]
    }, A))]).start(e)
  }
  getStyle() {
    let {
      translate: e,
      opacity: t
    } = this.state;
    return d.A.accelerate({
      opacity: t,
      transform: [{
        translateX: e.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "300px"]
        })
      }]
    })
  }
  render() {
    let {
      item: e
    } = this.props, {
      className: t
    } = this.props;
    return (0, a.jsx)(d.A.img, {
      src: e.src,
      alt: "",
      className: s()(x.M6, t),
      style: this.getStyle()
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      translate: new d.A.Value(0),
      opacity: new d.A.Value(1)
    })
  }
}
class y extends(l = Chunk64700.Component) {
  componentDidMount() {
    this.preloadNextImages(), h.A.disable(), h.A.enableTemp(p.w), f._.subscribe(g.jej.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), f._.subscribe(g.jej.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  componentWillUnmount() {
    h.A.disableTemp(), f._.unsubscribe(g.jej.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), f._.unsubscribe(g.jej.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  preloadNextImages() {
    var e, t;
    let {
      currentIndex: n
    } = this.state, {
      items: l
    } = this.props, a = ((n + 1) % (e = l.length) + e) % e, r = ((n - 1) % (t = l.length) + t) % t;
    this.preloadImage(l[a]), this.preloadImage(l[r])
  }
  preloadImage(e) {
    (0, m.yt)(e.src)
  }
  componentDidUpdate(e, t) {
    let {
      currentIndex: n
    } = this.state;
    n !== t.currentIndex && this.preloadNextImages()
  }
  navigateTo(e) {
    var t, n, l;
    let {
      directionHistory: a,
      currentIndex: r
    } = this.state;
    a.push(e - r), e = (e % (l = this.props.items.length) + l) % l, this.setState({
      currentIndex: e,
      directionHistory: a
    }), null == (t = (n = this.props).onIndexChange) || t.call(n, e)
  }
  render() {
    var e;
    let {
      className: t
    } = this.props, {
      currentIndex: n,
      directionHistory: l
    } = this.state, {
      modalCarouselItemClassName: r
    } = this.props, i = this.props.items[n], c = this.props.items;
    return (0, a.jsxs)(u.F, {
      component: "div",
      className: s()(x.iE, t),
      children: [c.length > 1 ? (0, a.jsx)(b.Q8, {
        className: x.vi,
        onClick: this.gotoPrev
      }) : null, null != (e = i.component) ? e : (0, a.jsx)(_, {
        item: i,
        directionHistory: l,
        className: r
      }, i.src), c.length > 1 ? (0, a.jsx)(b.Oj, {
        className: x.f8,
        onClick: this.gotoNext
      }) : null]
    })
  }
  constructor(e) {
    super(e), v(this, "gotoNext", () => {
      let {
        currentIndex: e
      } = this.state;
      this.navigateTo(e + 1)
    }), v(this, "gotoPrev", () => {
      let {
        currentIndex: e
      } = this.state;
      this.navigateTo(e - 1)
    }), v(this, "gotoNextThrottled", o()(this.gotoNext, 300)), v(this, "gotoPrevThrottled", o()(this.gotoPrev, 300)), this.state = {
      currentIndex: e.startWith,
      directionHistory: []
    }
  }
}
v(y, "defaultProps", {
  startWith: 0
})
/** Chunk was on 84283 **/
/** chunk id: 761705, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./539854.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk299608 = require("./299608.js"),
  c = require.n(Chunk299608),
  Chunk748780 = require("./748780.js"),
  Chunk215569 = require("./215569.js"),
  Chunk376641 = require("./376641.js"),
  Chunk714338 = require("./714338.js"),
  Chunk134432 = require("./134432.js"),
  Chunk44488 = require("./44488.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk643953 = require("./643953.js");

function x(e, t, n) {
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
      x(e, t, n[t])
    })
  }
  return e
}
let C = {
  friction: 10,
  tension: 100
};
class j extends Chunk473749.Component {
  componentWillEnter(e) {
    let {
      directionHistory: t
    } = this.props, {
      translate: n,
      opacity: r
    } = this.state;
    n.setValue(t[t.length - 1]), r.setValue(0), e(), d.Z.parallel([d.Z.timing(r, {
      toValue: 1,
      easing: d.Z.Easing.out(d.Z.Easing.linear),
      duration: 200
    }), d.Z.spring(n, v({
      toValue: 0
    }, C))]).start()
  }
  componentWillLeave(e) {
    let {
      directionHistory: t
    } = this.props, {
      opacity: n,
      translate: r
    } = this.state;
    d.Z.parallel([d.Z.timing(n, {
      toValue: 0,
      easing: d.Z.Easing.in(d.Z.Easing.linear),
      duration: 200
    }), d.Z.spring(r, v({
      toValue: false * t[t.length - 1]
    }, C))]).start(e)
  }
  getStyle() {
    let {
      translate: e,
      opacity: t
    } = this.state;
    return Chunk748780.Z.accelerate({
      opacity: exports,
      transform: [{
        translateX: module.interpolate({
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
    return (0, Chunk54381.jsx)(Chunk748780.Z.img, {
      src: module.src,
      alt: "",
      className: s()(Chunk643953.slide, exports),
      style: this.getStyle()
    })
  }
  constructor(...e) {
    super(...e), x(this, "state", {
      translate: new d.Z.Value(0),
      opacity: new d.Z.Value(1)
    })
  }
}
class y extends(r = Chunk473749.Component) {
  componentDidMount() {
    this.preloadNextImages(), Chunk714338.Z.disable(), Chunk714338.Z.enableTemp(Chunk376641.P), Chunk585483.S.subscribe(Chunk981631.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), Chunk585483.S.subscribe(Chunk981631.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  componentWillUnmount() {
    Chunk714338.Z.disableTemp(), Chunk585483.S.unsubscribe(Chunk981631.CkL.MODAL_CAROUSEL_NEXT, this.gotoNextThrottled), Chunk585483.S.unsubscribe(Chunk981631.CkL.MODAL_CAROUSEL_PREV, this.gotoPrevThrottled)
  }
  preloadNextImages() {
    var e, t;
    let {
      currentIndex: n
    } = this.state, {
      items: r
    } = this.props, a = ((require + 1) % (e = r.length) + module) % module, i = ((require - 1) % (t = r.length) + exports) % exports;
    this.preloadImage(r[Chunk54381]), this.preloadImage(r[Chunk473749])
  }
  preloadImage(e) {
    (0, h.po)(e.src)
  }
  componentDidUpdate(e, t) {
    let {
      currentIndex: n
    } = this.state;
    n !== t.currentIndex && this.preloadNextImages()
  }
  navigateTo(e) {
    var t, n, r;
    let {
      directionHistory: a,
      currentIndex: i
    } = this.state;
    a.push(e - i), e = (e % (r = this.props.items.length) + r) % r, this.setState({
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
      directionHistory: r
    } = this.state, {
      modalCarouselItemClassName: i
    } = this.props, l = this.props.items[require], o = this.props.items;
    return (0, Chunk54381.jsxs)(Chunk215569.W, {
      component: "div",
      className: s()(Chunk643953.wrapper, exports),
      children: [Chunk299608.length > 1 ? (0, Chunk54381.jsx)(Chunk44488.am, {
        className: Chunk643953.navPrev,
        onClick: this.gotoPrev
      }) : null, null != (e = Chunk120356.component) ? module : (0, Chunk54381.jsx)(j, {
        item: Chunk120356,
        directionHistory: r,
        className: Chunk473749
      }, Chunk120356.src), Chunk299608.length > 1 ? (0, Chunk54381.jsx)(Chunk44488.Pz, {
        className: Chunk643953.navNext,
        onClick: this.gotoNext
      }) : null]
    })
  }
  constructor(e) {
    super(e), x(this, "gotoNext", () => {
      let {
        currentIndex: e
      } = this.state;
      this.navigateTo(e + 1)
    }), x(this, "gotoPrev", () => {
      let {
        currentIndex: e
      } = this.state;
      this.navigateTo(e - 1)
    }), x(this, "gotoNextThrottled", c()(this.gotoNext, 300)), x(this, "gotoPrevThrottled", c()(this.gotoPrev, 300)), this.state = {
      currentIndex: e.startWith,
      directionHistory: []
    }
  }
}
x(y, "defaultProps", {
  startWith: 0
})
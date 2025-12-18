/** Chunk was on 40184 **/
/** chunk id: 5560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => E,
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk260300 = require("./260300.js"),
  Chunk819640 = require("./819640.js"),
  Chunk451478 = require("./451478.js"),
  Chunk350707 = require("./350707.jsx"),
  Chunk21825 = require("./21825.jsx"),
  Chunk232495 = require("./232495.jsx"),
  Chunk10401 = require("./10401.js"),
  Chunk261473 = require("./261473.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class E extends Chunk473749.PureComponent {
  componentDidMount() {
    this.updateCache()
  }
  componentDidUpdate(e) {
    let {
      tutorialId: t,
      origin: {
        x: n,
        y: i
      },
      targetWidth: r,
      targetHeight: l,
      position: a,
      offset: o
    } = e;
    (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== i || this.props.targetWidth !== r || this.props.targetHeight !== l || this.props.position !== a || this.props.offset.x !== o.x || this.props.offset.y !== o.y) && this.updateCache()
  }
  updateCache() {
    var e, t;
    let n = this.contentRef.current;
    if (null == require || !(0, Chunk374470.kK)(require, HTMLElement)) return;
    let {
      offsetWidth: i,
      offsetHeight: r
    } = require, l = {
      offsetX: (this.props.targetWidth - Chunk54381) / 2,
      offsetY: (this.props.targetHeight - Chunk473749) / 2
    };
    switch (this.props.position) {
      case "left":
        Chunk120356.offsetX = -Chunk54381;
        break;
      case "right":
        Chunk120356.offsetX = this.props.targetWidth;
        break;
      case "bottom":
        Chunk120356.offsetY = this.props.targetHeight;
        break;
      default:
        Chunk120356.offsetY = -Chunk473749
    }
    Chunk120356.offsetX += null != (e = this.props.offset.x) ? module : 0, Chunk120356.offsetY += null != (t = this.props.offset.y) ? exports : 0, this.setState(Chunk120356)
  }
  handleSkipTips() {
    Chunk260300.Z.suppressAll()
  }
  getTutorialPopoutText() {
    let {
      tutorialId: e
    } = this.props;
    return (0, Chunk232495.k)(module)
  }
  render() {
    let {
      tutorialId: e,
      autoInvert: t,
      focused: n,
      origin: r
    } = this.props, l = (0, Chunk21825.S)(module);
    if (null == Chunk120356) return null;
    let {
      media: o,
      textAlign: s,
      isLongText: c,
      highPriority: u,
      spacing: p,
      arrowAlignment: f = Chunk350707.cy.TOP,
      popoutPosition: h
    } = Chunk120356, {
      offsetX: b,
      offsetY: y
    } = this.state, v = {
      left: null != Chunk232495 ? Chunk473749.x + Chunk232495 : true,
      top: null != Chunk10401 ? Chunk473749.y + Chunk10401 : true
    }, E = e => {
      let t = n && !e;
      return {
        [C.animating]: t,
        [C.notAnimating]: !t,
        [C.highPriority]: u
      }
    }, j = this.getTutorialPopoutText();
    return (0, Chunk54381.jsx)(Chunk350707.ZP, O(x({
      innerRef: this.contentRef,
      position: Chunk451478,
      renderMedia: Chunk512722,
      textAlign: s,
      spacing: Chunk260300,
      isLongText: Chunk374470,
      uniqueId: module,
      autoInvert: exports,
      arrowAlignment: Chunk819640,
      onSkipAll: this.handleSkipTips,
      onComplete: this.handleDismiss
    }, j), {
      children: (e, t) => {
        let {
          isShown: r
        } = t;
        return (0, i.jsx)(d.P3F, O(x({}, e), {
          className: C.indicator,
          style: v,
          innerRef: this.contentRef,
          children: (0, i.jsxs)("div", {
            className: a()(C.animationContainer, E(r)),
            children: [(e => {
              let t = n && !e;
              returntrue !== u ? null : (0, i.jsxs)("div", {
                children: [(0, i.jsx)("div", {
                  className: a()(C.top, {
                    [C.animating]: t,
                    [C.notAnimating]: !t
                  })
                }), (0, i.jsx)("div", {
                  className: a()(C.bottom, {
                    [C.animating]: t,
                    [C.notAnimating]: !t
                  })
                })]
              })
            })(r), (0, i.jsx)("div", {
              className: a()(C.innerCircle, E(r))
            }), (0, i.jsx)("div", {
              className: a()(C.outerCircle, E(r))
            })]
          })
        }))
      }
    }))
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      offsetX: null,
      offsetY: null
    }), v(this, "contentRef", r.createRef()), v(this, "handleDismiss", () => {
      p.Z.dismiss(this.props.tutorialId)
    })
  }
}
let j = 12633 == require.j ? function() {
  let {
    indicators: e,
    tutorialData: t,
    windowFocused: n,
    shouldShowAny: r
  } = (0, Chunk442837.cj)([Chunk10401.Z, Chunk451478.Z, Chunk819640.Z], () => ({
    indicators: Chunk10401.Z.getIndicators(),
    tutorialData: Chunk10401.Z.getData(),
    shouldShowAny: Chunk10401.Z.shouldShowAnyIndicators() && !Chunk819640.Z.hasLayers(),
    windowFocused: Chunk451478.Z.isFocused()
  }));
  return Chunk473749 ? (0, Chunk54381.jsx)(Chunk54381.Fragment, {
    children: Object.entries(module).map(e => {
      let [r, l] = e, a = t[r];
      return s()(null != a, "Missing tutorial definition for ".concat(r)), (0, i.jsx)(E, x({
        tutorialId: r,
        tutorialDefinition: a,
        focused: n
      }, l), r)
    })
  }) : null
} : null
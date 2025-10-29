/** Chunk was on 73726 **/
/** chunk id: 5560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => O,
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk131257 = require("./131257.js");

function C(e, t, n) {
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
      C(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
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
class O extends Chunk647438.PureComponent {
  componentDidMount() {
    this.updateCache()
  }
  componentDidUpdate(e) {
    let {
      tutorialId: t,
      origin: {
        x: n,
        y: r
      },
      targetWidth: i,
      targetHeight: l,
      position: a,
      offset: o
    } = e;
    (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== r || this.props.targetWidth !== i || this.props.targetHeight !== l || this.props.position !== a || this.props.offset.x !== o.x || this.props.offset.y !== o.y) && this.updateCache()
  }
  updateCache() {
    var e, t;
    let n = this.contentRef.current;
    if (null == require || !(0, Chunk374470.kK)(require, HTMLElement)) return;
    let {
      offsetWidth: r,
      offsetHeight: i
    } = require, l = {
      offsetX: (this.props.targetWidth - Chunk951288) / 2,
      offsetY: (this.props.targetHeight - Chunk647438) / 2
    };
    switch (this.props.position) {
      case "left":
        Chunk120356.offsetX = -Chunk951288;
        break;
      case "right":
        Chunk120356.offsetX = this.props.targetWidth;
        break;
      case "bottom":
        Chunk120356.offsetY = this.props.targetHeight;
        break;
      default:
        Chunk120356.offsetY = -Chunk647438
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
      origin: i
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
      offsetY: _
    } = this.state, C = {
      left: null != Chunk232495 ? Chunk647438.x + Chunk232495 : true,
      top: null != Chunk10401 ? Chunk647438.y + Chunk10401 : true
    }, O = e => {
      let t = n && !e;
      return {
        [y.animating]: t,
        [y.notAnimating]: !t,
        [y.highPriority]: u
      }
    }, E = this.getTutorialPopoutText();
    return (0, Chunk951288.jsx)(Chunk350707.ZP, x(v({
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
    }, E), {
      children: (e, t) => {
        let {
          isShown: i
        } = t;
        return (0, r.jsx)(d.P3F, x(v({}, e), {
          className: y.indicator,
          style: C,
          innerRef: this.contentRef,
          children: (0, r.jsxs)("div", {
            className: a()(y.animationContainer, O(i)),
            children: [(e => {
              let t = n && !e;
              returntrue !== u ? null : (0, r.jsxs)("div", {
                children: [(0, r.jsx)("div", {
                  className: a()(y.top, {
                    [y.animating]: t,
                    [y.notAnimating]: !t
                  })
                }), (0, r.jsx)("div", {
                  className: a()(y.bottom, {
                    [y.animating]: t,
                    [y.notAnimating]: !t
                  })
                })]
              })
            })(i), (0, r.jsx)("div", {
              className: a()(y.innerCircle, O(i))
            }), (0, r.jsx)("div", {
              className: a()(y.outerCircle, O(i))
            })]
          })
        }))
      }
    }))
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      offsetX: null,
      offsetY: null
    }), C(this, "contentRef", i.createRef()), C(this, "handleDismiss", () => {
      p.Z.dismiss(this.props.tutorialId)
    })
  }
}
let E = 12633 == require.j ? function() {
  let {
    indicators: e,
    tutorialData: t,
    windowFocused: n,
    shouldShowAny: i
  } = (0, Chunk442837.cj)([Chunk10401.Z, Chunk451478.Z, Chunk819640.Z], () => ({
    indicators: Chunk10401.Z.getIndicators(),
    tutorialData: Chunk10401.Z.getData(),
    shouldShowAny: Chunk10401.Z.shouldShowAnyIndicators() && !Chunk819640.Z.hasLayers(),
    windowFocused: Chunk451478.Z.isFocused()
  }));
  return Chunk647438 ? (0, Chunk951288.jsx)(Chunk951288.Fragment, {
    children: Object.entries(module).map(e => {
      let [i, l] = e, a = t[i];
      return s()(null != a, "Missing tutorial definition for ".concat(i)), (0, r.jsx)(O, v({
        tutorialId: i,
        tutorialDefinition: a,
        focused: n
      }, l), i)
    })
  }) : null
} : null
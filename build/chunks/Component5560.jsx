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
    if (null == n || !(0, c.kK)(n, HTMLElement)) return;
    let {
      offsetWidth: i,
      offsetHeight: r
    } = n, l = {
      offsetX: (this.props.targetWidth - i) / 2,
      offsetY: (this.props.targetHeight - r) / 2
    };
    switch (this.props.position) {
      case "left":
        l.offsetX = -i;
        break;
      case "right":
        l.offsetX = this.props.targetWidth;
        break;
      case "bottom":
        l.offsetY = this.props.targetHeight;
        break;
      default:
        l.offsetY = -r
    }
    l.offsetX += null != (e = this.props.offset.x) ? e : 0, l.offsetY += null != (t = this.props.offset.y) ? t : 0, this.setState(l)
  }
  handleSkipTips() {
    p.Z.suppressAll()
  }
  getTutorialPopoutText() {
    let {
      tutorialId: e
    } = this.props;
    return (0, b.k)(e)
  }
  render() {
    let {
      tutorialId: e,
      autoInvert: t,
      focused: n,
      origin: r
    } = this.props, l = (0, g.S)(e);
    if (null == l) return null;
    let {
      media: o,
      textAlign: s,
      isLongText: c,
      highPriority: u,
      spacing: p,
      arrowAlignment: f = m.cy.TOP,
      popoutPosition: h
    } = l, {
      offsetX: b,
      offsetY: C
    } = this.state, v = {
      left: null != b ? r.x + b : true,
      top: null != C ? r.y + C : true
    }, E = e => {
      let t = n && !e;
      return {
        [y.animating]: t,
        [y.notAnimating]: !t,
        [y.highPriority]: u
      }
    }, j = this.getTutorialPopoutText();
    return (0, i.jsx)(m.ZP, O(x({
      innerRef: this.contentRef,
      position: h,
      renderMedia: o,
      textAlign: s,
      spacing: p,
      isLongText: c,
      uniqueId: e,
      autoInvert: t,
      arrowAlignment: f,
      onSkipAll: this.handleSkipTips,
      onComplete: this.handleDismiss
    }, j), {
      children: (e, t) => {
        let {
          isShown: r
        } = t;
        return (0, i.jsx)(d.P3F, O(x({}, e), {
          className: y.indicator,
          style: v,
          innerRef: this.contentRef,
          children: (0, i.jsxs)("div", {
            className: a()(y.animationContainer, E(r)),
            children: [(e => {
              let t = n && !e;
              returntrue !== u ? null : (0, i.jsxs)("div", {
                children: [(0, i.jsx)("div", {
                  className: a()(y.top, {
                    [y.animating]: t,
                    [y.notAnimating]: !t
                  })
                }), (0, i.jsx)("div", {
                  className: a()(y.bottom, {
                    [y.animating]: t,
                    [y.notAnimating]: !t
                  })
                })]
              })
            })(r), (0, i.jsx)("div", {
              className: a()(y.innerCircle, E(r))
            }), (0, i.jsx)("div", {
              className: a()(y.outerCircle, E(r))
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
  } = (0, u.cj)([C.Z, h.Z, f.Z], () => ({
    indicators: C.Z.getIndicators(),
    tutorialData: C.Z.getData(),
    shouldShowAny: C.Z.shouldShowAnyIndicators() && !f.Z.hasLayers(),
    windowFocused: h.Z.isFocused()
  }));
  return r ? (0, i.jsx)(i.Fragment, {
    children: Object.entries(e).map(e => {
      let [r, l] = e, a = t[r];
      return s()(null != a, "Missing tutorial definition for ".concat(r)), (0, i.jsx)(E, x({
        tutorialId: r,
        tutorialDefinition: a,
        focused: n
      }, l), r)
    })
  }) : null
} : null
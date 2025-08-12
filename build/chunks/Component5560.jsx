/** Chunk was on web.js **/
/** chunk id: 5560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => T,
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk374470 = require("./374470.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk260300 = require("./260300.js"),
  Chunk997638 = require("./997638.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk451478 = require("./451478.js"),
  Chunk21825 = require("./21825.jsx"),
  Chunk232495 = require("./232495.jsx"),
  Chunk10401 = require("./10401.js"),
  Chunk269034 = require("./269034.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class T extends Chunk73800.PureComponent {
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
      targetHeight: o,
      position: a,
      offset: s
    } = e;
    (this.props.tutorialId !== t || this.props.origin.x !== n || this.props.origin.y !== r || this.props.targetWidth !== i || this.props.targetHeight !== o || this.props.position !== a || this.props.offset.x !== s.x || this.props.offset.y !== s.y) && this.updateCache()
  }
  updateCache() {
    var e, t;
    let n = this.contentRef.current;
    if (null == require || !(0, Chunk374470.k)(require, HTMLElement)) return;
    let {
      offsetWidth: r,
      offsetHeight: i
    } = require, o = {
      offsetX: (this.props.targetWidth - Chunk255367) / 2,
      offsetY: (this.props.targetHeight - Chunk73800) / 2
    };
    switch (this.props.position) {
      case "left":
        Chunk120356.offsetX = -Chunk255367;
        break;
      case "right":
        Chunk120356.offsetX = this.props.targetWidth;
        break;
      case "bottom":
        Chunk120356.offsetY = this.props.targetHeight;
        break;
      default:
        Chunk120356.offsetY = -Chunk73800
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
    } = this.props, o = (0, Chunk21825.S)(module);
    if (null == Chunk120356) return null;
    let {
      media: s,
      textAlign: l,
      isLongText: c,
      highPriority: u,
      spacing: f,
      arrowAlignment: p = Chunk997638.cy.TOP,
      popoutPosition: h
    } = Chunk120356, {
      offsetX: g,
      offsetY: E
    } = this.state, y = {
      left: null != Chunk232495 ? Chunk73800.x + Chunk232495 : true,
      top: null != Chunk10401 ? Chunk73800.y + Chunk10401 : true
    }, v = e => {
      let t = n && !e;
      returntrue !== u ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
          className: a()(b.top, {
            [b.animating]: t,
            [b.notAnimating]: !t
          })
        }), (0, r.jsx)("div", {
          className: a()(b.bottom, {
            [b.animating]: t,
            [b.notAnimating]: !t
          })
        })]
      })
    }, T = e => {
      let t = n && !e;
      return {
        [b.animating]: t,
        [b.notAnimating]: !t,
        [b.highPriority]: u
      }
    }, S = this.getTutorialPopoutText();
    return (0, Chunk255367.jsx)(Chunk997638.ZP, I(O({
      innerRef: this.contentRef,
      position: Chunk451478,
      renderMedia: Chunk512722,
      textAlign: l,
      spacing: Chunk260300,
      isLongText: Chunk374470,
      uniqueId: module,
      autoInvert: exports,
      arrowAlignment: Chunk819640,
      onSkipAll: this.handleSkipTips,
      onComplete: this.handleDismiss
    }, S), {
      children: (e, t) => {
        let {
          isShown: n
        } = t;
        return (0, r.jsx)(d.P3F, I(O({}, e), {
          className: b.indicator,
          style: y,
          innerRef: this.contentRef,
          children: (0, r.jsxs)("div", {
            className: a()(b.animationContainer, T(n)),
            children: [v(n), (0, r.jsx)("div", {
              className: a()(b.innerCircle, T(n))
            }), (0, r.jsx)("div", {
              className: a()(b.outerCircle, T(n))
            })]
          })
        }))
      }
    }))
  }
  constructor(...e) {
    super(...e), y(this, "state", {
      offsetX: null,
      offsetY: null
    }), y(this, "contentRef", i.createRef()), y(this, "handleDismiss", () => {
      f.Z.dismiss(this.props.tutorialId)
    })
  }
}
let S = function() {
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
  return Chunk73800 ? (0, Chunk255367.jsx)(Chunk255367.Fragment, {
    children: Object.entries(module).map(e => {
      let [i, o] = e, a = t[i];
      return l()(null != a, "Missing tutorial definition for ".concat(i)), (0, r.jsx)(T, O({
        tutorialId: i,
        tutorialDefinition: a,
        focused: n
      }, o), i)
    })
  }) : null
}
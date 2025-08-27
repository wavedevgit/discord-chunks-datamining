/** Chunk was on web.js **/
/** chunk id: 501967, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => g
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk846519 = require("./846519.js"),
  Chunk215569 = require("./215569.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk216509 = require("./216509.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 3e3,
  m = {
    [Chunk981631.AEg.NORMAL]: Chunk216509.normal,
    [Chunk981631.AEg.MINIMUM]: Chunk216509.minimum,
    [Chunk981631.AEg.NO_CHAT]: Chunk216509.noChat,
    [Chunk981631.AEg.FULL_SCREEN]: Chunk216509.fullScreen
  };
class g extends Chunk647438.PureComponent {
  componentDidAppear() {
    this.state.animation.setValue(1)
  }
  componentWillEnter(e) {
    let {
      animation: t
    } = this.state;
    t.setValue(0), l.Z.spring(t, {
      toValue: 1,
      overshootClamping: true
    }).start(e)
  }
  componentWillLeave(e) {
    l.Z.spring(this.state.animation, {
      toValue: 0,
      overshootClamping: true
    }).start(e)
  }
  render() {
    return (0, Chunk951288.jsx)(Chunk748780.Z.div, {
      className: s()(Chunk216509.videoBackgroundTransition, this.props.className),
      style: {
        opacity: this.state.animation
      },
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), this.state = {
      animation: new l.Z.Value(0)
    }
  }
}
class E extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    document.addEventListener("mousedown", this.handleMouseEvent, true), document.addEventListener("mousemove", this.handleMouseEvent, true)
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMouseEvent, true), document.removeEventListener("mousemove", this.handleMouseEvent, true), this._timeout.stop()
  }
  static getDerivedStateFromProps(e, t) {
    return e.layout !== t.layoutProp ? t.idle ? {
      idle: false,
      layoutProp: e.layout
    } : {
      layoutProp: e.layout
    } : null
  }
  componentDidUpdate(e) {
    this.props.layout !== e.layout && this._timeout.stop()
  }
  renderBackground() {
    let {
      background: e,
      backgroundKey: t,
      layout: n
    } = this.props, r = "".concat(require, "-").concat(null != exports ? exports : "");
    return (0, Chunk951288.jsx)(Chunk215569.W, {
      className: Chunk216509.videoBackground,
      component: "div",
      children: (0, Chunk951288.jsx)(g, {
        children: module
      }, r)
    })
  }
  renderContents() {
    let {
      top: e,
      center: t,
      bottom: n,
      layout: r,
      focused: a
    } = this.props, {
      idle: o
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk600164.Z, {
      className: s()(Chunk216509.video, m[r], {
        [Chunk216509.idle]: Chunk120356
      }),
      direction: Chunk600164.Z.Direction.VERTICAL,
      justify: Chunk600164.Z.Justify.CENTER,
      children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
        className: Chunk216509.videoWrapper,
        direction: Chunk600164.Z.Direction.VERTICAL,
        children: [this.renderBackground(), (0, Chunk951288.jsxs)(Chunk600164.Z, {
          className: s()(Chunk216509.videoInner, {
            [Chunk216509.focused]: Chunk647438
          }),
          direction: Chunk600164.Z.Direction.VERTICAL,
          justify: Chunk600164.Z.Justify.BETWEEN,
          children: [(0, Chunk951288.jsx)(Chunk600164.Z, {
            className: Chunk216509.videoTop,
            grow: 0,
            children: module
          }), (0, Chunk951288.jsx)(Chunk600164.Z, {
            className: Chunk216509.videoCenter,
            children: exports
          }), (0, Chunk951288.jsx)(Chunk600164.Z, {
            className: Chunk216509.videoBottom,
            grow: 0,
            children: require
          })]
        })]
      })
    })
  }
  render() {
    let {
      layout: e,
      className: t,
      animated: n
    } = this.props;
    return (0, Chunk951288.jsx)("div", {
      className: s()(Chunk216509.videoHeight, m[module], exports, {
        [Chunk216509.animated]: require
      }),
      children: this.renderContents()
    })
  }
  constructor(e) {
    super(e), p(this, "_timeout", new c.V7), p(this, "handleMouseEvent", () => {
      let {
        layout: e
      } = this.props;
      (e === f.AEg.FULL_SCREEN || e === f.AEg.NO_CHAT) && (this._timeout.start(h, () => this.setState({
        idle: true
      })), this.state.idle && this.setState({
        idle: false
      }))
    }), this.state = {
      idle: false,
      backgroundAnimation: new l.Z.Value(0),
      layoutProp: e.layout
    }
  }
}
p(E, "defaultProps", {
  layout: Chunk981631.AEg.MINIMUM,
  animated: true
})
/** Chunk was on web.js **/
/** chunk id: 501967, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => g
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk846519 = require("./846519.js"),
  Chunk215569 = require("./215569.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk609541 = require("./609541.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 3e3,
  m = {
    [Chunk981631.AEg.NORMAL]: Chunk609541.normal,
    [Chunk981631.AEg.MINIMUM]: Chunk609541.minimum,
    [Chunk981631.AEg.NO_CHAT]: Chunk609541.noChat,
    [Chunk981631.AEg.FULL_SCREEN]: Chunk609541.fullScreen,
    [Chunk981631.AEg.HAVEN]: Chunk609541.haven
  };
class g extends Chunk473749.PureComponent {
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
    return (0, i.jsx)(l.Z.div, {
      className: s()(p.videoBackgroundTransition, this.props.className),
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
class E extends(r = Chunk473749.PureComponent) {
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
    } = this.props, r = "".concat(n, "-").concat(null != t ? t : "");
    return (0, i.jsx)(u.W, {
      className: p.videoBackground,
      component: "div",
      children: (0, i.jsx)(g, {
        children: e
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
    return (0, i.jsx)(d.Z, {
      className: s()(p.video, m[r], {
        [p.idle]: o
      }),
      direction: d.Z.Direction.VERTICAL,
      justify: d.Z.Justify.CENTER,
      children: (0, i.jsxs)(d.Z, {
        className: p.videoWrapper,
        direction: d.Z.Direction.VERTICAL,
        children: [this.renderBackground(), (0, i.jsxs)(d.Z, {
          className: s()(p.videoInner, {
            [p.focused]: a
          }),
          direction: d.Z.Direction.VERTICAL,
          justify: d.Z.Justify.BETWEEN,
          children: [(0, i.jsx)(d.Z, {
            className: p.videoTop,
            grow: 0,
            children: e
          }), (0, i.jsx)(d.Z, {
            className: p.videoCenter,
            children: t
          }), (0, i.jsx)(d.Z, {
            className: p.videoBottom,
            grow: 0,
            children: n
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
    return (0, i.jsx)("div", {
      className: s()(p.videoHeight, m[e], t, {
        [p.animated]: n
      }),
      children: this.renderContents()
    })
  }
  constructor(e) {
    super(e), _(this, "_timeout", new c.V7), _(this, "handleMouseEvent", () => {
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
_(E, "defaultProps", {
  layout: Chunk981631.AEg.MINIMUM,
  animated: true
})
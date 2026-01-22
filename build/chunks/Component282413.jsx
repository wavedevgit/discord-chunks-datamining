/** Chunk was on web.js **/
/** chunk id: 282413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => g
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk451988 = require("./451988.js"),
  Chunk73939 = require("./73939.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk712449 = require("./712449.js");

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
    [Chunk652215.DUB.NORMAL]: Chunk712449.qb,
    [Chunk652215.DUB.MINIMUM]: Chunk712449.Bp,
    [Chunk652215.DUB.NO_CHAT]: Chunk712449.Oo,
    [Chunk652215.DUB.FULL_SCREEN]: Chunk712449.iy,
    [Chunk652215.DUB.HAVEN]: Chunk712449.VT
  };
class g extends Chunk64700.PureComponent {
  componentDidAppear() {
    this.state.animation.setValue(1)
  }
  componentWillEnter(e) {
    let {
      animation: t
    } = this.state;
    t.setValue(0), l.A.spring(t, {
      toValue: 1,
      overshootClamping: true
    }).start(e)
  }
  componentWillLeave(e) {
    l.A.spring(this.state.animation, {
      toValue: 0,
      overshootClamping: true
    }).start(e)
  }
  render() {
    return (0, i.jsx)(l.A.div, {
      className: o()(p.$c, this.props.className),
      style: {
        opacity: this.state.animation
      },
      children: this.props.children
    })
  }
  constructor(e) {
    super(e), this.state = {
      animation: new l.A.Value(0)
    }
  }
}
class E extends(r = Chunk64700.PureComponent) {
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
    return (0, i.jsx)(u.F, {
      className: p.yG,
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
      idle: s
    } = this.state;
    return (0, i.jsx)(d.A, {
      className: o()(p.Ki, m[r], {
        [p.N7]: s
      }),
      direction: d.A.Direction.VERTICAL,
      justify: d.A.Justify.CENTER,
      children: (0, i.jsxs)(d.A, {
        className: p.tN,
        direction: d.A.Direction.VERTICAL,
        children: [this.renderBackground(), (0, i.jsxs)(d.A, {
          className: o()(p.IR, {
            [p.in]: a
          }),
          direction: d.A.Direction.VERTICAL,
          justify: d.A.Justify.BETWEEN,
          children: [(0, i.jsx)(d.A, {
            className: p.JV,
            grow: 0,
            children: e
          }), (0, i.jsx)(d.A, {
            className: p.R2,
            children: t
          }), (0, i.jsx)(d.A, {
            className: p.ZJ,
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
      className: o()(p.hP, m[e], t, {
        [p.CS]: n
      }),
      children: this.renderContents()
    })
  }
  constructor(e) {
    super(e), _(this, "_timeout", new c.Ep), _(this, "handleMouseEvent", () => {
      let {
        layout: e
      } = this.props;
      (e === f.DUB.FULL_SCREEN || e === f.DUB.NO_CHAT) && (this._timeout.start(h, () => this.setState({
        idle: true
      })), this.state.idle && this.setState({
        idle: false
      }))
    }), this.state = {
      idle: false,
      backgroundAnimation: new l.A.Value(0),
      layoutProp: e.layout
    }
  }
}
_(E, "defaultProps", {
  layout: Chunk652215.DUB.MINIMUM,
  animated: true
})
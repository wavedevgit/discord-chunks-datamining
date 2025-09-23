/** Chunk was on web.js **/
/** chunk id: 540026, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk6247 = require("./6247.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = {
    friction: 14,
    tension: 200
  },
  _ = {
    DURATION: "DURATION",
    VOLUME: "VOLUME"
  };

function p(e) {
  let t = 0 | e,
    n = t % 60;
  return "".concat((t - n) / 60, ":").concat(String(n).padStart(2, "0"))
}
class h extends(r = Chunk647438.Component) {
  componentDidMount() {
    let {
      previewWidth: e,
      animatedProgress: t
    } = this.state;
    this._previewId = module.addListener(this.handlePreviewChange), this._progressId = exports.addListener(this.handleAnimatedChange)
  }
  componentWillUnmount() {
    let {
      previewWidth: e,
      animatedProgress: t
    } = this.state;
    module.removeListener(this._previewId), exports.removeListener(this._progressId), window.removeEventListener("mouseup", this.handleDragEnd, false), window.removeEventListener("mousemove", this.handleDragMove, false)
  }
  componentDidUpdate(e, t) {
    let {
      dragging: n,
      previewWidth: r,
      animatedProgress: i
    } = this.state;
    !n && t.dragging && r.setValue(i._value)
  }
  setGrabber(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
      {
        animatedProgress: n
      } = this.state;
    t ? l.Z.spring(n, d({
      toValue: e
    }, f)).start() : n.setValue(e)
  }
  calculatePercentage(e, t) {
    let {
      wrapper: n,
      props: {
        type: r
      }
    } = this;
    if (null == n) return 0;
    let {
      left: i,
      width: a,
      bottom: o,
      height: s
    } = n.getBoundingClientRect();
    return Math.min(1, Math.max(0, r === _.VOLUME ? (o - t) / s : (e - i) / a))
  }
  render() {
    let {
      buffers: e,
      type: t,
      className: n,
      sliderClassName: r
    } = this.props, {
      dragging: a,
      previewWidth: o,
      animatedProgress: u
    } = this.state, d = Chunk647438 ? u : Chunk120356;
    return (0, Chunk951288.jsx)("div", {
      className: s()(require, exports === _.VOLUME ? Chunk6247.vertical : Chunk6247.horizontal),
      children: (0, Chunk951288.jsx)("div", {
        className: s()(r, Chunk647438 ? Chunk6247.mediaBarInteractionDragging : Chunk6247.mediaBarInteraction, exports === _.VOLUME ? Chunk6247.mediaBarInteractionVolume : null),
        onMouseDown: this.handleDragStart,
        onMouseMove: this.handleMouseMove,
        ref: e => {
          this.wrapper = e
        },
        children: (0, Chunk951288.jsxs)("div", {
          className: s()(Chunk6247.mediaBarWrapper, exports === _.VOLUME ? Chunk6247.mediaBarWrapperVolume : null),
          children: [null != module ? module.map((e, t) => {
            let [n, r] = e;
            return (0, i.jsx)("div", {
              className: c.buffer,
              style: {
                width: "".concat(100 * r, "%"),
                left: "".concat(100 * n, "%")
              }
            }, t)
          }) : null, exports === _.DURATION ? (0, Chunk951288.jsx)(Chunk748780.Z.div, {
            className: Chunk6247.mediaBarPreview,
            style: {
              width: Chunk120356.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"]
              })
            }
          }) : null, (0, Chunk951288.jsx)(Chunk748780.Z.div, {
            className: Chunk6247.mediaBarProgress,
            style: {
              width: u.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"]
              })
            },
            children: (0, Chunk951288.jsx)("span", {
              className: Chunk6247.mediaBarGrabber
            })
          }), exports === _.DURATION ? (0, Chunk951288.jsx)(Chunk748780.Z.div, {
            ref: this.setBubbleRef,
            className: Chunk6247.bubble,
            style: {
              left: d.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"]
              })
            }
          }) : null]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), u(this, "state", {
      animatedProgress: new l.Z.Value(0),
      dragging: false,
      offsetLeft: 0,
      offsetWidth: 0,
      previewWidth: new l.Z.Value(0)
    }), u(this, "wrapper", true), u(this, "bubble", true), u(this, "_previewId", true), u(this, "_progressId", true), u(this, "handlePreviewChange", () => {
      let {
        bubble: e,
        state: {
          dragging: t,
          previewWidth: n
        },
        props: {
          value: r
        }
      } = this;
      t || null == e || (e.innerText = p(n._value * r))
    }), u(this, "handleAnimatedChange", () => {
      let {
        bubble: e,
        state: {
          dragging: t,
          animatedProgress: n
        },
        props: {
          value: r
        }
      } = this;
      t && null != e && (e.innerText = p(n._value * r))
    }), u(this, "handleMouseMove", e => {
      let {
        dragging: t,
        previewWidth: n
      } = this.state;
      if (t) return;
      let {
        clientX: r,
        clientY: i
      } = e;
      n.setValue(this.calculatePercentage(r, i))
    }), u(this, "handleDragMove", e => {
      let {
        onDrag: t,
        type: n
      } = this.props, {
        clientX: r,
        clientY: i
      } = e;
      t(this.calculatePercentage(r, i), n)
    }), u(this, "handleDragStart", e => {
      let {
        onDragStart: t,
        onDrag: n,
        type: r,
        currentWindow: i
      } = this.props, {
        clientX: a,
        clientY: o
      } = e;
      if (e.preventDefault(), null == this.wrapper) return;
      let {
        left: s,
        width: l
      } = this.wrapper.getBoundingClientRect();
      this.setState({
        dragging: true,
        offsetLeft: s,
        offsetWidth: l
      }, () => {
        t(r), n(this.calculatePercentage(a, o), r), i.removeEventListener("mouseup", this.handleDragEnd, false), i.removeEventListener("mousemove", this.handleDragMove, false), i.addEventListener("mouseup", this.handleDragEnd, false), i.addEventListener("mousemove", this.handleDragMove, false)
      })
    }), u(this, "handleDragEnd", () => {
      let {
        onDragEnd: e,
        currentWindow: t
      } = this.props;
      e(), t.removeEventListener("mouseup", this.handleDragEnd, false), t.removeEventListener("mousemove", this.handleDragMove, false), this.setState({
        dragging: false
      })
    }), u(this, "setBubbleRef", e => {
      null == e ? this.bubble = null : null != e.componentRef ? this.bubble = e.componentRef : null != e.refs && (this.bubble = e.refs.node)
    })
  }
}
u(h, "Types", _), u(h, "defaultProps", {
  currentWindow: window
});
let m = h
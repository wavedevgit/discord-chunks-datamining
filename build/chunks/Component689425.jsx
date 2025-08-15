/** Chunk was on web.js **/
/** chunk id: 689425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk748780 = require("./748780.js"),
  Chunk374470 = require("./374470.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
let d = (e, t) => {
    let {
      x: n,
      y: r
    } = e, {
      x: i,
      y: a
    } = t;
    return Math.pow(n - i, 2) + Math.pow(r - a, 2)
  },
  f = 9;
class _ extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    let {
      initialX: e,
      initialY: t
    } = this.props;
    this.setPosition(module, exports)
  }
  componentWillUnmount() {
    this._removeListeners()
  }
  animateToPosition(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      r = arguments.length > 3 ? arguments[3] : true,
      i = !(arguments.length > 4) || true === arguments[4] || arguments[4];
    i && this.grabDimensions();
    let a = this.translate(e, t);
    o.Z.spring(this.state.position, u({
      toValue: {
        x: a.x,
        y: a.y
      }
    }, n)).start(r)
  }
  setPosition(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    n && this.grabDimensions();
    let r = this.translate(e, t);
    this.state.position.setValue({
      x: r.x,
      y: r.y
    })
  }
  grabDimensions() {
    let e = this._ref.current.refs.node;
    (0, Chunk374470.k)(module) && (this._height = module.clientHeight, this._width = module.clientWidth)
  }
  translate(e, t) {
    let {
      maxX: n,
      maxY: r
    } = this.props;
    return e < 0 ? e = 0 : e > n - this._width && (e = n - this._width), t < 0 ? t = 0 : t > r - this._height && (t = r - this._height), {
      x: e,
      y: t
    }
  }
  render() {
    let {
      dragging: e,
      position: t
    } = this.state, {
      className: n,
      children: r
    } = this.props, a = [0, 1], s = ["0px", "1px"], l = Chunk748780.Z.accelerate(u({
      pointerEvents: module ? "none" : "auto",
      cursor: module ? "grabbing" : "grab",
      transform: [{
        translateX: exports.x.interpolate({
          inputRange: Chunk647438,
          outputRange: Chunk374470
        })
      }, {
        translateY: exports.y.interpolate({
          inputRange: Chunk647438,
          outputRange: Chunk374470
        })
      }]
    }, this.props.style));
    return (0, Chunk951288.jsx)(Chunk748780.Z.div, {
      ref: this._ref,
      className: require,
      onMouseDown: this.handleMouseDown,
      style: Chunk981631,
      onDragStart: this.handleHTMLDragStart,
      children: r
    })
  }
  constructor(e) {
    super(e), c(this, "_ref", a.createRef()), c(this, "_height", 0), c(this, "_width", 0), c(this, "_dragStart", {
      x: 0,
      y: 0
    }), c(this, "_offsetX", 0), c(this, "_offsetY", 0), c(this, "_removeListeners", () => {}), c(this, "handleHTMLDragStart", e => {
      e.preventDefault()
    }), c(this, "handleMouseDown", e => {
      let {
        dragAnywhere: t,
        disabled: n,
        selector: r
      } = this.props;
      if (n) return;
      let {
        position: i
      } = this.state, a = e.target;
      if (e.button === l.AeJ.PRIMARY && (t || null != r && a.matches(r))) {
        this.grabDimensions(), this._dragStart = {
          x: e.clientX,
          y: e.clientY
        }, this._offsetX = e.clientX - i.x._value, this._offsetY = e.clientY - i.y._value;
        let t = e.nativeEvent.view;
        this._removeListeners(), t.addEventListener("mousemove", this.handleMouseMove), t.addEventListener("mouseup", this.handleMouseUp), this._removeListeners = () => {
          t.removeEventListener("mousemove", this.handleMouseMove), t.removeEventListener("mouseup", this.handleMouseUp)
        }
      }
    }), c(this, "handleMouseMove", e => {
      e.preventDefault();
      let {
        onDragStart: t,
        onDrag: n,
        disabled: r
      } = this.props;
      if (r) return;
      let {
        dragging: i,
        dragging: a
      } = this.state;
      !i && d(this._dragStart, {
        x: e.clientX,
        y: e.clientY
      }) > f && (i = true), i && (this.animateToPosition(e.clientX - this._offsetX, e.clientY - this._offsetY, {
        tension: 80,
        friction: 8
      }, null, false), this.setState({
        dragging: i
      }, () => {
        a || null == t || t(e.clientX, e.clientY), null == n || n(e.clientX, e.clientY)
      }))
    }), c(this, "handleMouseUp", e => {
      this._removeListeners(), this.state.dragging && this.setState({
        dragging: false
      }, () => {
        let {
          onDragEnd: t
        } = this.props;
        null == t || t(e.clientX, e.clientY)
      })
    });
    let t = new o.Z.Value(e.initialX),
      n = new o.Z.Value(e.initialY);
    this.state = {
      dragging: false,
      position: new o.Z.ValueXY({
        x: t,
        y: n
      })
    }
  }
}
c(_, "defaultProps", {
  maxX: 0,
  maxY: 0,
  initialX: 0,
  initialY: 0,
  disabled: false,
  dragAnywhere: false
});
let p = _
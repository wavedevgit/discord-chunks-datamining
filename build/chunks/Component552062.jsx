/** Chunk was on 63141 **/
/** chunk id: 552062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => m,
  Z: () => x
}), require("./388685.js"), require("./415506.js");
var i, r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk902704 = require("./902704.js"),
  Chunk434529 = require("./434529.js"),
  Chunk981631 = require("./981631.js"),
  Chunk768666 = require("./768666.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
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
var m = ((r = {}).MOVE = "MOVE", r.RESIZE_NORTH = "RESIZE_NORTH", r.RESIZE_WEST = "RESIZE_WEST", r.RESIZE_EAST = "RESIZE_EAST", r.RESIZE_SOUTH = "RESIZE_SOUTH", r.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", r.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", r.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", r.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST", r);
let _ = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function y(e, t, n) {
  let {
    width: i,
    height: r
  } = e;
  return {
    width: "auto" === i ? "auto" : Math.max(t, i),
    height: "auto" === r ? "auto" : Math.max(n, r)
  }
}

function O(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: r
  } = e;
  return null == n && null == r && (n = 0), null != n && null != r && (r = true), null == t && null == i && (t = 0), null != t && null != i && (i = true), {
    top: t,
    left: n,
    bottom: i,
    right: r
  }
}

function v(e) {
  return "auto" === e || null == e ? "auto" : "".concat(e, "px")
}

function b(e, t) {
  let n = 0;
  return {
    width: n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
    height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
  }
}

function E(e, t) {
  let {
    top: n,
    left: i,
    bottom: r,
    right: o
  } = t;
  switch (e) {
    case "RESIZE_EAST":
    case "RESIZE_NORTH_EAST":
    case "RESIZE_NORTH":
      return {
        bottom: r, left: i, right: true, top: true
      };
    case "RESIZE_WEST":
    case "RESIZE_NORTH_WEST":
      return {
        bottom: r, right: o, left: true, top: true
      };
    case "RESIZE_SOUTH_EAST":
      return {
        top: n, left: i, bottom: true, right: true
      };
    case "RESIZE_SOUTH":
    case "RESIZE_SOUTH_WEST":
      return {
        top: n, right: o, bottom: true, left: true
      };
    default:
      throw Error("getOrientedCoords: Invalid orientation: ".concat(e))
  }
}
class S extends(i = Chunk647438.Component) {
  shouldComponentUpdate(e, t) {
    return !(0, c.Z)(t, this.state) || !(0, c.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, c.Z)(e.anchor, this.props.anchor) || !(0, c.Z)(e.size, this.props.size) || !(0, c.Z)(e.minSize, this.props.minSize) || !(0, c.Z)(e.container, this.props.container)
  }
  componentDidUpdate(e, t) {
    null == t.operation && ((0, c.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(O(this.props.anchor)), (0, c.Z)(this.props.size, e.size) || this.setDOMSize(y(this.props.size, this.props.minSize.width, this.props.minSize.height)))
  }
  componentWillUnmount() {
    this.handleOperationEnd()
  }
  handleResizeMouseDown(e, t) {
    let {
      clientX: n,
      clientY: i
    } = e;
    e.stopPropagation(), this.handleOperationStart(t, n, i)
  }
  handleDragMove(e, t) {
    let {
      ref: {
        current: n
      },
      props: {
        id: i,
        container: {
          maxX: r,
          maxY: o,
          minX: l,
          minY: a
        },
        onDragStart: s,
        onDrag: c,
        snapOrientation: u
      },
      dragState: {
        offsetX: h,
        offsetY: p
      },
      state: {
        operationStarted: f
      }
    } = this;
    if (null == n) return null;
    e = Math.max(Math.min(r, e), l), t = Math.max(Math.min(o, t), a);
    let {
      width: g,
      height: m
    } = b(n, this.size), _ = t - p, y = e - h, O = (0, d.ou)((0, d.PY)({
      top: _,
      left: y,
      bottom: true,
      right: true
    }, r, o, g, m)), v = u ? (0, d.R)(O) : E("RESIZE_SOUTH_EAST", O);
    this.setDOMPositions(v), f || (null != s && s(), this.setState({
      operationStarted: true
    })), null != c && c(i, "MOVE", this.anchor, this.size)
  }
  handleResizeMove(e, t) {
    let {
      props: {
        id: n,
        minSize: i,
        container: {
          maxX: r,
          maxY: o,
          minX: l,
          minY: a
        },
        onDragStart: s,
        onDrag: c
      },
      state: {
        operation: d,
        operationStarted: u
      }
    } = this, {
      startX: h,
      startY: p,
      offsetWidth: f,
      offsetHeight: g
    } = this.dragState, m = 0, _ = 0;
    if (null != d) {
      switch (e = Math.max(Math.min(r, e), l), t = Math.max(Math.min(o, t), a), d) {
        case "RESIZE_EAST":
        case "RESIZE_SOUTH_EAST":
        case "RESIZE_NORTH_EAST":
          m -= h - e;
          break;
        case "RESIZE_WEST":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_NORTH_WEST":
          m += h - e
      }
      switch (d) {
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_SOUTH_EAST":
          _ -= p - t;
          break;
        case "RESIZE_NORTH":
        case "RESIZE_NORTH_WEST":
        case "RESIZE_NORTH_EAST":
          _ += p - t
      }
      f = Math.max(f + m, i.width), g = Math.max(g + _, i.height), this.setDOMSize({
        width: f,
        height: g
      }), u || (null != s && s(), this.setState({
        operationStarted: true
      })), null != c && c(n, d, this.anchor, this.size)
    }
  }
  setDOMPositions(e) {
    let {
      top: t,
      left: n,
      bottom: i,
      right: r
    } = e, {
      current: o
    } = this.ref;
    this.anchor = {
      top: t,
      left: n,
      bottom: i,
      right: r
    }, null != o && (o.style.top = v(t), o.style.bottom = v(i), o.style.left = v(n), o.style.right = v(r))
  }
  setDOMSize(e) {
    let {
      width: t,
      height: n
    } = e, {
      current: i
    } = this.ref;
    t = "auto" === this.size.width ? "auto" : t, n = "auto" === this.size.height ? "auto" : n, this.size = {
      width: t,
      height: n
    }, null != i && (i.style.width = v(t), i.style.height = v(n))
  }
  renderResizeHandles() {
    let {
      resizeY: e,
      resizeX: t,
      active: n
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [module ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: s()(Chunk768666.resizeNorth, {
            [Chunk768666.resizeNSCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
        }), (0, Chunk951288.jsx)("div", {
          className: s()(Chunk768666.resizeSouth, {
            [Chunk768666.resizeNSCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
        })]
      }) : null, exports ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: s()(Chunk768666.resizeEast, {
            [Chunk768666.resizeEWCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
        }), (0, Chunk951288.jsx)("div", {
          className: s()(Chunk768666.resizeWest, {
            [Chunk768666.resizeEWCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
        })]
      }) : null, exports && module ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: s()(Chunk768666.resizeNorthWest, {
            [Chunk768666.resizeNWSECursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
        }), (0, Chunk951288.jsx)("div", {
          className: s()(Chunk768666.resizeNorthEast, {
            [Chunk768666.resizeNESWCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
        }), (0, Chunk951288.jsx)("div", {
          className: s()(Chunk768666.resizeSouthWest, {
            [Chunk768666.resizeNESWCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
        }), (0, Chunk951288.jsx)("div", {
          className: s()(Chunk768666.resizeSouthEast, {
            [Chunk768666.resizeNWSECursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST")
        })]
      }) : null]
    })
  }
  render() {
    let {
      props: {
        children: e,
        hidden: t,
        onClick: n,
        id: i,
        style: r
      },
      size: l,
      anchor: a,
      state: {
        operation: c,
        operationStarted: d
      }
    } = this;
    return (0, Chunk951288.jsxs)("div", {
      ref: this.ref,
      style: f({}, Chunk120356, Chunk647438, r, null != Chunk902704 ? {
        zIndex: 1e3
      } : true, exports ? {
        visibility: "hidden"
      } : true),
      className: s()({
        [Chunk768666.wrapper]: true,
        [Chunk768666.operation]: Chunk434529
      }),
      onMouseDown: this.handleMouseDown,
      onClick: null != require ? () => require(i) : true,
      children: [module(this.handleOperationStart), this.renderResizeHandles()]
    })
  }
  constructor(e) {
    super(e), p(this, "anchor", true), p(this, "size", true), p(this, "ref", l.createRef()), p(this, "dragState", {
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      offsetWidth: 0,
      offsetHeight: 0
    }), p(this, "state", {
      operation: null,
      operationStarted: false
    }), p(this, "handleMouseDown", e => {
      e.stopPropagation();
      let {
        dragAnywhere: t
      } = this.props, {
        current: n
      } = this.ref;
      null != n && e.button === u.AeJ.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
    }), p(this, "handleMouseMove", e => {
      e.preventDefault(), e.stopPropagation();
      let {
        clientX: t,
        clientY: n
      } = e, {
        dragState: {
          startX: i,
          startY: r
        },
        state: {
          operation: o,
          operationStarted: l
        }
      } = this;
      !(null == o || !l && Math.pow(i - t, 2) + Math.pow(r - n, 2) < 3) && ("MOVE" === o ? this.handleDragMove(t, n) : _.has(o) && this.handleResizeMove(t, n))
    }), p(this, "handleOperationStart", (e, t, n) => {
      let {
        ref: {
          current: i
        },
        props: {
          targetWindow: r,
          active: o,
          container: {
            maxX: l,
            maxY: a
          }
        }
      } = this;
      if (null == i || !o) return;
      let {
        width: s,
        height: c
      } = b(i, this.size), u = (0, d.PY)(this.anchor, l, a, s, c);
      if ("MOVE" === e) {
        let {
          x: e,
          y: i
        } = function(e) {
          let {
            top: t,
            left: n
          } = e;
          return {
            x: n,
            y: t
          }
        }(u);
        this.dragState = g(f({}, this.dragState), {
          startX: t,
          startY: n,
          offsetX: t - e,
          offsetY: n - i
        })
      } else {
        let i = E(e, u);
        this.setDOMPositions(i), this.dragState = g(f({}, this.dragState), {
          startX: t,
          startY: n,
          offsetWidth: s,
          offsetHeight: c
        })
      }
      this.setState({
        operation: e,
        operationStarted: false
      }, () => {
        r.addEventListener("mousemove", this.handleMouseMove), r.addEventListener("mouseup", this.handleOperationEnd)
      })
    }), p(this, "handleOperationEnd", () => {
      let {
        operation: e,
        operationStarted: t
      } = this.state, {
        targetWindow: n,
        onDragEnd: i
      } = this.props;
      n.removeEventListener("mousemove", this.handleMouseMove), n.removeEventListener("mouseup", this.handleOperationEnd);
      let r = t ? () => {
        let {
          onUpdate: t,
          id: n
        } = this.props;
        t(e, n, this.anchor, this.size, b(this.ref.current, this.size))
      } : true;
      if (t) {
        let {
          maxX: e,
          maxY: t
        } = this.props.container, {
          width: n,
          height: r
        } = b(this.ref.current, this.size), o = (0, d.PY)(this.anchor, e, t, n, r), l = (0, d.R)(o);
        this.setDOMPositions(l), this.setDOMSize({
          width: n,
          height: r
        }), null != i && i()
      }
      this.setState({
        operation: null,
        operationStarted: false
      }, r)
    }), this.anchor = O(e.anchor), this.size = y(e.size, e.minSize.width, e.minSize.height)
  }
}
p(S, "Operations", m), p(S, "defaultProps", {
  snapOrientation: true,
  minSize: {
    width: 0,
    height: 0
  },
  container: {
    minX: 0,
    minY: 0,
    maxX: 1 / 0,
    maxY: 1 / 0
  },
  resizeX: true,
  resizeY: true,
  hidden: false,
  dragAnywhere: true,
  active: true,
  targetWindow: window
});
let x = S
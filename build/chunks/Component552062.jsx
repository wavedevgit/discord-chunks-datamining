/** Chunk was on 63141 **/
/** chunk id: 552062, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => m,
  Z: () => S
}), require("./388685.js"), require("./415506.js");
var i, r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk902704 = require("./902704.js"),
  Chunk434529 = require("./434529.js"),
  Chunk981631 = require("./981631.js"),
  Chunk768666 = require("./768666.js");

function h(e, t, n) {
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
      h(e, t, n[t])
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
let y = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function O(e, t, n) {
  let {
    width: i,
    height: r
  } = e;
  return {
    width: "auto" === i ? "auto" : Math.max(t, i),
    height: "auto" === r ? "auto" : Math.max(n, r)
  }
}

function _(e) {
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

function b(e) {
  return "auto" === e || null == e ? "auto" : "".concat(e, "px")
}

function v(e, t) {
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
    right: s
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
        bottom: r, right: s, left: true, top: true
      };
    case "RESIZE_SOUTH_EAST":
      return {
        top: n, left: i, bottom: true, right: true
      };
    case "RESIZE_SOUTH":
    case "RESIZE_SOUTH_WEST":
      return {
        top: n, right: s, bottom: true, left: true
      };
    default:
      throw Error("getOrientedCoords: Invalid orientation: ".concat(e))
  }
}
class x extends(i = Chunk647438.Component) {
  shouldComponentUpdate(e, t) {
    return !(0, c.Z)(t, this.state) || !(0, c.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, c.Z)(e.anchor, this.props.anchor) || !(0, c.Z)(e.size, this.props.size) || !(0, c.Z)(e.minSize, this.props.minSize) || !(0, c.Z)(e.container, this.props.container)
  }
  componentDidUpdate(e, t) {
    null == t.operation && ((0, c.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(_(this.props.anchor)), (0, c.Z)(this.props.size, e.size) || this.setDOMSize(O(this.props.size, this.props.minSize.width, this.props.minSize.height)))
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
          maxY: s,
          minX: o,
          minY: l
        },
        onDragStart: a,
        onDrag: c,
        snapOrientation: u
      },
      dragState: {
        offsetX: p,
        offsetY: h
      },
      state: {
        operationStarted: f
      }
    } = this;
    if (null == n) return null;
    e = Math.max(Math.min(r, e), o), t = Math.max(Math.min(s, t), l);
    let {
      width: g,
      height: m
    } = v(n, this.size), y = t - h, O = e - p, _ = (0, d.ou)((0, d.PY)({
      top: y,
      left: O,
      bottom: true,
      right: true
    }, r, s, g, m)), b = u ? (0, d.R)(_) : E("RESIZE_SOUTH_EAST", _);
    this.setDOMPositions(b), f || (null != a && a(), this.setState({
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
          maxY: s,
          minX: o,
          minY: l
        },
        onDragStart: a,
        onDrag: c
      },
      state: {
        operation: d,
        operationStarted: u
      }
    } = this, {
      startX: p,
      startY: h,
      offsetWidth: f,
      offsetHeight: g
    } = this.dragState, m = 0, y = 0;
    if (null != d) {
      switch (e = Math.max(Math.min(r, e), o), t = Math.max(Math.min(s, t), l), d) {
        case "RESIZE_EAST":
        case "RESIZE_SOUTH_EAST":
        case "RESIZE_NORTH_EAST":
          m -= p - e;
          break;
        case "RESIZE_WEST":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_NORTH_WEST":
          m += p - e
      }
      switch (d) {
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_SOUTH_EAST":
          y -= h - t;
          break;
        case "RESIZE_NORTH":
        case "RESIZE_NORTH_WEST":
        case "RESIZE_NORTH_EAST":
          y += h - t
      }
      f = Math.max(f + m, i.width), g = Math.max(g + y, i.height), this.setDOMSize({
        width: f,
        height: g
      }), u || (null != a && a(), this.setState({
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
      current: s
    } = this.ref;
    this.anchor = {
      top: t,
      left: n,
      bottom: i,
      right: r
    }, null != s && (s.style.top = b(t), s.style.bottom = b(i), s.style.left = b(n), s.style.right = b(r))
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
    }, null != i && (i.style.width = b(t), i.style.height = b(n))
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
          className: a()(Chunk768666.resizeNorth, {
            [Chunk768666.resizeNSCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
        }), (0, Chunk951288.jsx)("div", {
          className: a()(Chunk768666.resizeSouth, {
            [Chunk768666.resizeNSCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
        })]
      }) : null, exports ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: a()(Chunk768666.resizeEast, {
            [Chunk768666.resizeEWCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
        }), (0, Chunk951288.jsx)("div", {
          className: a()(Chunk768666.resizeWest, {
            [Chunk768666.resizeEWCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
        })]
      }) : null, exports && module ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: a()(Chunk768666.resizeNorthWest, {
            [Chunk768666.resizeNWSECursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
        }), (0, Chunk951288.jsx)("div", {
          className: a()(Chunk768666.resizeNorthEast, {
            [Chunk768666.resizeNESWCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
        }), (0, Chunk951288.jsx)("div", {
          className: a()(Chunk768666.resizeSouthWest, {
            [Chunk768666.resizeNESWCursor]: require
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
        }), (0, Chunk951288.jsx)("div", {
          className: a()(Chunk768666.resizeSouthEast, {
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
      size: o,
      anchor: l,
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
      className: a()({
        [Chunk768666.wrapper]: true,
        [Chunk768666.operation]: Chunk434529
      }),
      onMouseDown: this.handleMouseDown,
      onClick: null != require ? () => require(i) : true,
      children: [module(this.handleOperationStart), this.renderResizeHandles()]
    })
  }
  constructor(e) {
    super(e), h(this, "anchor", true), h(this, "size", true), h(this, "ref", o.createRef()), h(this, "dragState", {
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      offsetWidth: 0,
      offsetHeight: 0
    }), h(this, "state", {
      operation: null,
      operationStarted: false
    }), h(this, "handleMouseDown", e => {
      e.stopPropagation();
      let {
        dragAnywhere: t
      } = this.props, {
        current: n
      } = this.ref;
      null != n && e.button === u.AeJ.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
    }), h(this, "handleMouseMove", e => {
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
          operation: s,
          operationStarted: o
        }
      } = this;
      !(null == s || !o && Math.pow(i - t, 2) + Math.pow(r - n, 2) < 3) && ("MOVE" === s ? this.handleDragMove(t, n) : y.has(s) && this.handleResizeMove(t, n))
    }), h(this, "handleOperationStart", (e, t, n) => {
      let {
        ref: {
          current: i
        },
        props: {
          targetWindow: r,
          active: s,
          container: {
            maxX: o,
            maxY: l
          }
        }
      } = this;
      if (null == i || !s) return;
      let {
        width: a,
        height: c
      } = v(i, this.size), u = (0, d.PY)(this.anchor, o, l, a, c);
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
          offsetWidth: a,
          offsetHeight: c
        })
      }
      this.setState({
        operation: e,
        operationStarted: false
      }, () => {
        r.addEventListener("mousemove", this.handleMouseMove), r.addEventListener("mouseup", this.handleOperationEnd)
      })
    }), h(this, "handleOperationEnd", () => {
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
        t(e, n, this.anchor, this.size, v(this.ref.current, this.size))
      } : true;
      if (t) {
        let {
          maxX: e,
          maxY: t
        } = this.props.container, {
          width: n,
          height: r
        } = v(this.ref.current, this.size), s = (0, d.PY)(this.anchor, e, t, n, r), o = (0, d.R)(s);
        this.setDOMPositions(o), this.setDOMSize({
          width: n,
          height: r
        }), null != i && i()
      }
      this.setState({
        operation: null,
        operationStarted: false
      }, r)
    }), this.anchor = _(e.anchor), this.size = O(e.size, e.minSize.width, e.minSize.height)
  }
}
h(x, "Operations", m), h(x, "defaultProps", {
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
let S = x
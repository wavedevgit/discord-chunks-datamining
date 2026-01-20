/** Chunk was on 63141 **/
/** chunk id: 552062, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => m,
  Z: () => Z
}), require("./388685.js"), require("./415506.js");
var i, r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk902704 = require("./902704.js"),
  Chunk434529 = require("./434529.js"),
  Chunk981631 = require("./981631.js"),
  Chunk343273 = require("./343273.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      f(e, t, n[t])
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
let b = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

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

function v(e) {
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

function O(e) {
  return "auto" === e || null == e ? "auto" : "".concat(e, "px")
}

function E(e, t) {
  let n = 0;
  return {
    width: n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
    height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
  }
}

function x(e, t) {
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
class S extends(i = Chunk473749.Component) {
  shouldComponentUpdate(e, t) {
    return !(0, c.Z)(t, this.state) || !(0, c.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, c.Z)(e.anchor, this.props.anchor) || !(0, c.Z)(e.size, this.props.size) || !(0, c.Z)(e.minSize, this.props.minSize) || !(0, c.Z)(e.container, this.props.container)
  }
  componentDidUpdate(e, t) {
    null == t.operation && ((0, c.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(v(this.props.anchor)), (0, c.Z)(this.props.size, e.size) || this.setDOMSize(y(this.props.size, this.props.minSize.width, this.props.minSize.height)))
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
          minY: a
        },
        onDragStart: l,
        onDrag: c,
        snapOrientation: u
      },
      dragState: {
        offsetX: h,
        offsetY: f
      },
      state: {
        operationStarted: p
      }
    } = this;
    if (null == n) return null;
    e = Math.max(Math.min(r, e), o), t = Math.max(Math.min(s, t), a);
    let {
      width: g,
      height: m
    } = E(n, this.size), b = t - f, y = e - h, v = (0, d.ou)((0, d.PY)({
      top: b,
      left: y,
      bottom: true,
      right: true
    }, r, s, g, m)), O = u ? (0, d.R)(v) : x("RESIZE_SOUTH_EAST", v);
    this.setDOMPositions(O), p || (null != l && l(), this.setState({
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
          minY: a
        },
        onDragStart: l,
        onDrag: c
      },
      state: {
        operation: d,
        operationStarted: u
      }
    } = this, {
      startX: h,
      startY: f,
      offsetWidth: p,
      offsetHeight: g
    } = this.dragState, m = 0, b = 0;
    if (null != d) {
      switch (e = Math.max(Math.min(r, e), o), t = Math.max(Math.min(s, t), a), d) {
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
          b -= f - t;
          break;
        case "RESIZE_NORTH":
        case "RESIZE_NORTH_WEST":
        case "RESIZE_NORTH_EAST":
          b += f - t
      }
      p = Math.max(p + m, i.width), g = Math.max(g + b, i.height), this.setDOMSize({
        width: p,
        height: g
      }), u || (null != l && l(), this.setState({
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
    }, null != s && (s.style.top = O(t), s.style.bottom = O(i), s.style.left = O(n), s.style.right = O(r))
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
    }, null != i && (i.style.width = O(t), i.style.height = O(n))
  }
  renderResizeHandles() {
    let {
      resizeY: e,
      resizeX: t,
      active: n
    } = this.props;
    return (0, s.jsxs)(o.Fragment, {
      children: [e ? (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)("div", {
          className: l()(h.resizeNorth, {
            [h.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
        }), (0, s.jsx)("div", {
          className: l()(h.resizeSouth, {
            [h.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
        })]
      }) : null, t ? (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)("div", {
          className: l()(h.resizeEast, {
            [h.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
        }), (0, s.jsx)("div", {
          className: l()(h.resizeWest, {
            [h.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
        })]
      }) : null, t && e ? (0, s.jsxs)(o.Fragment, {
        children: [(0, s.jsx)("div", {
          className: l()(h.resizeNorthWest, {
            [h.resizeNWSECursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
        }), (0, s.jsx)("div", {
          className: l()(h.resizeNorthEast, {
            [h.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
        }), (0, s.jsx)("div", {
          className: l()(h.resizeSouthWest, {
            [h.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
        }), (0, s.jsx)("div", {
          className: l()(h.resizeSouthEast, {
            [h.resizeNWSECursor]: n
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
      anchor: a,
      state: {
        operation: c,
        operationStarted: d
      }
    } = this;
    return (0, s.jsxs)("div", {
      ref: this.ref,
      style: p({}, a, o, r, null != c ? {
        zIndex: 1e3
      } : true, t ? {
        visibility: "hidden"
      } : true),
      className: l()({
        [h.wrapper]: true,
        [h.operation]: d
      }),
      onMouseDown: this.handleMouseDown,
      onClick: null != n ? () => n(i) : true,
      children: [e(this.handleOperationStart), this.renderResizeHandles()]
    })
  }
  constructor(e) {
    super(e), f(this, "anchor", true), f(this, "size", true), f(this, "ref", o.createRef()), f(this, "dragState", {
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      offsetWidth: 0,
      offsetHeight: 0
    }), f(this, "state", {
      operation: null,
      operationStarted: false
    }), f(this, "handleMouseDown", e => {
      e.stopPropagation();
      let {
        dragAnywhere: t
      } = this.props, {
        current: n
      } = this.ref;
      null != n && e.button === u.AeJ.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
    }), f(this, "handleMouseMove", e => {
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
      !(null == s || !o && Math.pow(i - t, 2) + Math.pow(r - n, 2) < 3) && ("MOVE" === s ? this.handleDragMove(t, n) : b.has(s) && this.handleResizeMove(t, n))
    }), f(this, "handleOperationStart", (e, t, n) => {
      let {
        ref: {
          current: i
        },
        props: {
          targetWindow: r,
          active: s,
          container: {
            maxX: o,
            maxY: a
          }
        }
      } = this;
      if (null == i || !s) return;
      let {
        width: l,
        height: c
      } = E(i, this.size), u = (0, d.PY)(this.anchor, o, a, l, c);
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
        this.dragState = g(p({}, this.dragState), {
          startX: t,
          startY: n,
          offsetX: t - e,
          offsetY: n - i
        })
      } else {
        let i = x(e, u);
        this.setDOMPositions(i), this.dragState = g(p({}, this.dragState), {
          startX: t,
          startY: n,
          offsetWidth: l,
          offsetHeight: c
        })
      }
      this.setState({
        operation: e,
        operationStarted: false
      }, () => {
        r.addEventListener("mousemove", this.handleMouseMove), r.addEventListener("mouseup", this.handleOperationEnd)
      })
    }), f(this, "handleOperationEnd", () => {
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
        t(e, n, this.anchor, this.size, E(this.ref.current, this.size))
      } : true;
      if (t) {
        let {
          maxX: e,
          maxY: t
        } = this.props.container, {
          width: n,
          height: r
        } = E(this.ref.current, this.size), s = (0, d.PY)(this.anchor, e, t, n, r), o = (0, d.R)(s);
        this.setDOMPositions(o), this.setDOMSize({
          width: n,
          height: r
        }), null != i && i()
      }
      this.setState({
        operation: null,
        operationStarted: false
      }, r)
    }), this.anchor = v(e.anchor), this.size = y(e.size, e.minSize.width, e.minSize.height)
  }
}
f(S, "Operations", m), f(S, "defaultProps", {
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
let Z = S
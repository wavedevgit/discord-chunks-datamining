/** Chunk was on 84018 **/
/** chunk id: 685603, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x,
  P: () => y
}), require("./896048.js"), require("./65821.js");
var i, r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk52133 = require("./52133.js"),
  Chunk5463 = require("./5463.js"),
  Chunk652215 = require("./652215.js"),
  Chunk850103 = require("./850103.js");

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
var y = ((r = {}).MOVE = "MOVE", r.RESIZE_NORTH = "RESIZE_NORTH", r.RESIZE_WEST = "RESIZE_WEST", r.RESIZE_EAST = "RESIZE_EAST", r.RESIZE_SOUTH = "RESIZE_SOUTH", r.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", r.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", r.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", r.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST", r);
let m = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function _(e, t, n) {
  let {
    width: i,
    height: r
  } = e;
  return {
    width: "auto" === i ? "auto" : Math.max(t, i),
    height: "auto" === r ? "auto" : Math.max(n, r)
  }
}

function b(e) {
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

function A(e) {
  return "auto" === e || null == e ? "auto" : "".concat(e, "px")
}

function O(e, t) {
  let n = 0;
  return {
    width: n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
    height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
  }
}

function v(e, t) {
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
class E extends(i = Chunk64700.Component) {
  shouldComponentUpdate(e, t) {
    return !(0, c.A)(t, this.state) || !(0, c.A)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, c.A)(e.anchor, this.props.anchor) || !(0, c.A)(e.size, this.props.size) || !(0, c.A)(e.minSize, this.props.minSize) || !(0, c.A)(e.container, this.props.container)
  }
  componentDidUpdate(e, t) {
    null == t.operation && ((0, c.A)(this.props.anchor, e.anchor) || this.setDOMPositions(b(this.props.anchor)), (0, c.A)(this.props.size, e.size) || this.setDOMSize(_(this.props.size, this.props.minSize.width, this.props.minSize.height)))
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
          minX: l,
          minY: o
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
    e = Math.max(Math.min(r, e), l), t = Math.max(Math.min(s, t), o);
    let {
      width: g,
      height: y
    } = O(n, this.size), m = t - h, _ = e - p, b = (0, d.fh)((0, d.Ly)({
      top: m,
      left: _,
      bottom: true,
      right: true
    }, r, s, g, y)), A = u ? (0, d.h1)(b) : v("RESIZE_SOUTH_EAST", b);
    this.setDOMPositions(A), f || (null != a && a(), this.setState({
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
          minX: l,
          minY: o
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
    } = this.dragState, y = 0, m = 0;
    if (null != d) {
      switch (e = Math.max(Math.min(r, e), l), t = Math.max(Math.min(s, t), o), d) {
        case "RESIZE_EAST":
        case "RESIZE_SOUTH_EAST":
        case "RESIZE_NORTH_EAST":
          y -= p - e;
          break;
        case "RESIZE_WEST":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_NORTH_WEST":
          y += p - e
      }
      switch (d) {
        case "RESIZE_SOUTH":
        case "RESIZE_SOUTH_WEST":
        case "RESIZE_SOUTH_EAST":
          m -= h - t;
          break;
        case "RESIZE_NORTH":
        case "RESIZE_NORTH_WEST":
        case "RESIZE_NORTH_EAST":
          m += h - t
      }
      f = Math.max(f + y, i.width), g = Math.max(g + m, i.height), this.setDOMSize({
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
    }, null != s && (s.style.top = A(t), s.style.bottom = A(i), s.style.left = A(n), s.style.right = A(r))
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
    }, null != i && (i.style.width = A(t), i.style.height = A(n))
  }
  renderResizeHandles() {
    let {
      resizeY: e,
      resizeX: t,
      active: n
    } = this.props;
    return (0, s.jsxs)(l.Fragment, {
      children: [e ? (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsx)("div", {
          className: a()(p.M$, {
            [p.An]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
        }), (0, s.jsx)("div", {
          className: a()(p.Q8, {
            [p.An]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
        })]
      }) : null, t ? (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsx)("div", {
          className: a()(p.cz, {
            [p.zC]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
        }), (0, s.jsx)("div", {
          className: a()(p._J, {
            [p.zC]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
        })]
      }) : null, t && e ? (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsx)("div", {
          className: a()(p.DS, {
            [p.Ke]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
        }), (0, s.jsx)("div", {
          className: a()(p.Bc, {
            [p.UJ]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
        }), (0, s.jsx)("div", {
          className: a()(p.rL, {
            [p.UJ]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
        }), (0, s.jsx)("div", {
          className: a()(p.Rl, {
            [p.Ke]: n
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
      anchor: o,
      state: {
        operation: c,
        operationStarted: d
      }
    } = this;
    return (0, s.jsxs)("div", {
      ref: this.ref,
      style: f({}, o, l, r, null != c ? {
        zIndex: 1e3
      } : true, t ? {
        visibility: "hidden"
      } : true),
      className: a()({
        [p.iE]: true,
        [p.MQ]: d
      }),
      onMouseDown: this.handleMouseDown,
      onClick: null != n ? () => n(i) : true,
      children: [e(this.handleOperationStart), this.renderResizeHandles()]
    })
  }
  constructor(e) {
    super(e), h(this, "anchor", true), h(this, "size", true), h(this, "ref", l.createRef()), h(this, "dragState", {
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
      null != n && e.button === u.hE4.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
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
          operationStarted: l
        }
      } = this;
      !(null == s || !l && Math.pow(i - t, 2) + Math.pow(r - n, 2) < 3) && ("MOVE" === s ? this.handleDragMove(t, n) : m.has(s) && this.handleResizeMove(t, n))
    }), h(this, "handleOperationStart", (e, t, n) => {
      let {
        ref: {
          current: i
        },
        props: {
          targetWindow: r,
          active: s,
          container: {
            maxX: l,
            maxY: o
          }
        }
      } = this;
      if (null == i || !s) return;
      let {
        width: a,
        height: c
      } = O(i, this.size), u = (0, d.Ly)(this.anchor, l, o, a, c);
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
        let i = v(e, u);
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
        t(e, n, this.anchor, this.size, O(this.ref.current, this.size))
      } : true;
      if (t) {
        let {
          maxX: e,
          maxY: t
        } = this.props.container, {
          width: n,
          height: r
        } = O(this.ref.current, this.size), s = (0, d.Ly)(this.anchor, e, t, n, r), l = (0, d.h1)(s);
        this.setDOMPositions(l), this.setDOMSize({
          width: n,
          height: r
        }), null != i && i()
      }
      this.setState({
        operation: null,
        operationStarted: false
      }, r)
    }), this.anchor = b(e.anchor), this.size = _(e.size, e.minSize.width, e.minSize.height)
  }
}
h(E, "Operations", y), h(E, "defaultProps", {
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
let x = E
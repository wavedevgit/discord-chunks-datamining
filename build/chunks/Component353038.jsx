/** Chunk was on 50751 **/
/** chunk id: 353038, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => y,
  Z: () => C
}), require("./388685.js"), require("./415506.js");
var i, r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk853590 = require("./853590.js"),
  Chunk902704 = require("./902704.js"),
  Chunk585483 = require("./585483.js"),
  Chunk434529 = require("./434529.js"),
  Chunk981631 = require("./981631.js"),
  Chunk731292 = require("./731292.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
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
let E = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function v(e, t, n) {
  let {
    width: i,
    height: r,
    fixed: l
  } = e;
  return {
    width: "auto" === i ? "auto" : Math.max(t, i),
    height: "auto" === r ? "auto" : Math.max(n, r),
    fixed: l
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

function S(e) {
  return "auto" === e || null == e ? "auto" : "".concat(e, "px")
}

function x(e, t) {
  let n = 0;
  return {
    width: n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
    height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
  }
}

function j(e, t) {
  let {
    top: n,
    left: i,
    bottom: r,
    right: l
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
        bottom: r, right: l, left: true, top: true
      };
    case "RESIZE_SOUTH_EAST":
      return {
        top: n, left: i, bottom: true, right: true
      };
    case "RESIZE_SOUTH":
    case "RESIZE_SOUTH_WEST":
      return {
        top: n, right: l, bottom: true, left: true
      };
    default:
      throw Error("getOrientedCoords: Invalid orientation: ".concat(e))
  }
}

function I(e) {
  let {
    computedSize: t
  } = e;
  return t
}
class C extends(i = Chunk473749.Component) {
  shouldComponentUpdate(e, t) {
    return !(0, c.Z)(t, this.state) || !(0, c.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, c.Z)(e.anchor, this.props.anchor) || !(0, c.Z)(e.size, this.props.size) || !(0, c.Z)(e.minSize, this.props.minSize) || !(0, c.Z)(e.container, this.props.container)
  }
  componentDidMount() {
    this.setDOMPositions(b(this.props.anchor)), this.setDOMSize(v(this.props.size, this.props.minSize.width, this.props.minSize.height)), d.S.subscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
  }
  componentDidUpdate(e, t) {
    null == t.operation && ((0, c.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(b(this.props.anchor)), (0, c.Z)(this.props.size, e.size) || this.setDOMSize(v(this.props.size, this.props.minSize.width, this.props.minSize.height)))
  }
  componentWillUnmount() {
    this.handleOperationEnd(), d.S.unsubscribe(p.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
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
          maxY: l,
          minX: o,
          minY: a
        },
        onDragStart: s,
        onDrag: u,
        snapOrientation: c = true
      },
      dragState: {
        offsetX: d,
        offsetY: p
      },
      state: {
        operationStarted: f
      }
    } = this;
    if (null == n) return null;
    e = Math.max(Math.min(r, e), o), t = Math.max(Math.min(l, t), a);
    let {
      width: m,
      height: g
    } = x(n, this.size), O = t - p, y = e - d, E = (0, h.ou)((0, h.PY)({
      top: O,
      left: y,
      bottom: true,
      right: true
    }, r, l, m, g)), v = c ? (0, h.R)(E) : j("RESIZE_SOUTH_EAST", E);
    this.setDOMPositions(v), this.setState({
      operationStarted: true,
      anchorTopOverride: null != v.top,
      anchorLeftOverride: null != v.left
    }, () => {
      f || null == s || s(), null != u && u(i, "MOVE", this.anchor, this.size)
    })
  }
  handleResizeMove(e, t) {
    let {
      props: {
        id: n,
        minSize: i,
        container: {
          maxX: r,
          maxY: l,
          minX: o,
          minY: a
        },
        onDragStart: s,
        onDrag: u,
        resizeValidation: d = I
      },
      state: {
        operation: p,
        operationStarted: f
      }
    } = this, {
      startX: m,
      startY: y
    } = this.dragState, E = 0, v = 0;
    if (null == p) return;
    switch (e = Math.max(Math.min(r, e), o), t = Math.max(Math.min(l, t), a), p) {
      case "RESIZE_EAST":
      case "RESIZE_SOUTH_EAST":
      case "RESIZE_NORTH_EAST":
        E -= m - e;
        break;
      case "RESIZE_WEST":
      case "RESIZE_SOUTH_WEST":
      case "RESIZE_NORTH_WEST":
        E += m - e
    }
    switch (p) {
      case "RESIZE_SOUTH":
      case "RESIZE_SOUTH_WEST":
      case "RESIZE_SOUTH_EAST":
        v -= y - t;
        break;
      case "RESIZE_NORTH":
      case "RESIZE_NORTH_WEST":
      case "RESIZE_NORTH_EAST":
        v += y - t
    }
    let b = d({
        padding: 8,
        borderWidth: 2,
        operation: p,
        computedSize: {
          width: Math.max(this.dragState.offsetWidth + E, i.width),
          height: Math.max(this.dragState.offsetHeight + v, i.height)
        },
        originSize: {
          width: this.dragState.offsetWidth,
          height: this.dragState.offsetHeight
        },
        containerSpecs: this.props.container,
        orientedPosition: this.dragState.dragOrientedCoords
      }),
      S = (0, h.BL)((0, h.ou)((0, h.PY)(this.dragState.dragOrientedCoords, r, l, b.width, b.height)), this.dragState.dragOrientedCoords);
    this.setDOMSize(O(g({}, b), {
      fixed: this.size.fixed
    }), true), (0, c.Z)(S, this.dragState.dragOrientedCoords) || (this.dragState.dragOrientedCoords = S, this.setDOMPositions(this.dragState.dragOrientedCoords)), f || (null != s && s(), this.setState({
      operationStarted: true
    })), null != u && u(n, p, this.anchor, this.size)
  }
  setDOMPositions(e) {
    let {
      top: t,
      left: n,
      bottom: i,
      right: r
    } = e, {
      current: l
    } = this.ref;
    this.anchor = {
      top: t,
      left: n,
      bottom: i,
      right: r
    }, null != l && (l.style.top = S(t), l.style.bottom = S(i), l.style.left = S(n), l.style.right = S(r))
  }
  setDOMSize(e) {
    let {
      width: t,
      height: n,
      fixed: i
    } = e, r = arguments.length > 1 && true !== arguments[1] && arguments[1], {
      current: l
    } = this.ref;
    t = "auto" !== this.size.width || r ? t : "auto", n = "auto" !== this.size.height || r ? n : "auto", this.size = {
      width: t,
      height: n,
      fixed: i
    }, null != l && (l.style.width = S(t), l.style.height = S(n))
  }
  renderResizeHandles() {
    let {
      resizeY: e,
      resizeX: t,
      active: n
    } = this.props;
    return (0, l.jsxs)(l.Fragment, {
      children: [e ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: s()(f.resizeNorth, {
            [f.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
        }), (0, l.jsx)("div", {
          className: s()(f.resizeSouth, {
            [f.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
        })]
      }) : null, t ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: s()(f.resizeEast, {
            [f.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
        }), (0, l.jsx)("div", {
          className: s()(f.resizeWest, {
            [f.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
        })]
      }) : null, t && e ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", {
          className: s()(f.resizeNorthWest, {
            [f.resizeNWSECursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
        }), (0, l.jsx)("div", {
          className: s()(f.resizeNorthEast, {
            [f.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
        }), (0, l.jsx)("div", {
          className: s()(f.resizeSouthWest, {
            [f.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
        }), (0, l.jsx)("div", {
          className: s()(f.resizeSouthEast, {
            [f.resizeNWSECursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_EAST")
        })]
      }) : null]
    })
  }
  renderExtras() {
    let {
      props: {
        renderExtras: e,
        anchor: t
      },
      setLockExtras: n
    } = this, i = null == e ? true : e(n);
    return null != i ? (0, l.jsx)("div", {
      className: s()({
        [f.extras]: true,
        [f.extrasBottomOriented]: null != t.bottom,
        [f.extrasRightOriented]: null != t.right
      }),
      children: i
    }) : null
  }
  getInlineStyles() {
    let {
      props: {
        hidden: e,
        style: t,
        minSize: n,
        padding: i = 8,
        borderWidth: r = 2,
        borderRadius: l = 12
      },
      state: {
        operation: o
      }
    } = this;
    return g({}, t, {
      minWidth: n.width,
      minHeight: n.height,
      borderWidth: r,
      padding: i,
      borderRadius: l + r + i,
      zIndex: null != o ? 1e3 : true,
      visibility: e ? "hidden" : true
    })
  }
  renderChildren() {
    let {
      props: {
        children: e,
        hidden: t,
        padding: n = 8,
        borderWidth: i = 2,
        locked: r
      },
      size: l,
      anchor: o,
      setLockExtras: a,
      state: {
        anchorTopOverride: s,
        anchorLeftOverride: u
      }
    } = this;
    return e({
      dragStart: this.handleOperationStart,
      dragOperation: this.state.operation,
      anchorTop: null != s ? s : null != o.top,
      anchorLeft: null != u ? u : null != o.left,
      size: l,
      padding: n,
      borderWidth: i,
      setLockExtras: a,
      locked: r,
      hidden: t,
      showEmpty: this.state.lockExtras
    })
  }
  render() {
    let {
      props: {
        onClick: e,
        id: t,
        locked: n,
        className: i,
        forceShowExtras: r
      },
      state: {
        operationStarted: o,
        lockExtras: a
      }
    } = this;
    return (0, l.jsxs)(u.animated.div, {
      ref: this.ref,
      style: this.getInlineStyles(),
      className: s()({
        [f.wrapper]: true,
        [f.operation]: o,
        [f.unlocked]: !n,
        [f.forceShowExtras]: r && n,
        [f.lockExtras]: a
      }, i),
      onMouseDown: this.handleMouseDown,
      onClick: null != e ? () => e(t) : true,
      children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
    })
  }
  constructor(e) {
    super(e), m(this, "anchor", true), m(this, "size", true), m(this, "ref", o.createRef()), m(this, "dragState", {
      startX: 0,
      startY: 0,
      offsetX: 0,
      offsetY: 0,
      offsetWidth: 0,
      offsetHeight: 0,
      dragOrientedCoords: {
        top: 0,
        left: 0
      }
    }), m(this, "state", {
      lockExtras: true,
      operation: null,
      operationStarted: false,
      anchorTopOverride: true,
      anchorLeftOverride: true
    }), m(this, "handleShowUI", e => {
      let {
        show: t
      } = e;
      this.setLockExtras(t)
    }), m(this, "handleMouseDown", e => {
      e.stopPropagation();
      let {
        dragAnywhere: t
      } = this.props, {
        current: n
      } = this.ref;
      null != n && e.button === p.AeJ.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
    }), m(this, "handleMouseMove", e => {
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
          operation: l,
          operationStarted: o
        }
      } = this;
      !(null == l || !o && Math.pow(i - t, 2) + Math.pow(r - n, 2) < 3) && ("MOVE" === l ? this.handleDragMove(t, n) : E.has(l) && this.handleResizeMove(t, n))
    }), m(this, "handleOperationStart", (e, t, n) => {
      let {
        ref: {
          current: i
        },
        props: {
          targetWindow: r,
          active: l,
          container: {
            maxX: o,
            maxY: a
          }
        }
      } = this;
      if (null == i || !l) return;
      let {
        width: s,
        height: u
      } = x(i, this.size), c = (0, h.PY)(this.anchor, o, a, s, u);
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
        }(c);
        this.dragState = O(g({}, this.dragState), {
          startX: t,
          startY: n,
          offsetX: t - e,
          offsetY: n - i
        })
      } else {
        let i = j(e, c);
        this.setDOMPositions(i), this.dragState = O(g({}, this.dragState), {
          startX: t,
          startY: n,
          offsetWidth: s,
          offsetHeight: u,
          dragOrientedCoords: i
        })
      }
      this.setState({
        operation: e,
        operationStarted: false
      }, () => {
        r.addEventListener("mousemove", this.handleMouseMove), r.addEventListener("mouseup", this.handleOperationEnd)
      })
    }), m(this, "handleOperationEnd", () => {
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
        t(e, n, this.anchor, this.size, x(this.ref.current, this.size))
      } : true;
      if (t) {
        let {
          maxX: e,
          maxY: t
        } = this.props.container, {
          width: n,
          height: r
        } = x(this.ref.current, this.size), l = (0, h.PY)(this.anchor, e, t, n, r), o = (0, h.R)(l);
        this.setDOMPositions(o), this.setDOMSize({
          width: n,
          height: r,
          fixed: this.size.fixed
        }), null != i && i()
      }
      this.setState({
        operation: null,
        operationStarted: false
      }, r)
    }), m(this, "setLockExtras", e => {
      this.setState({
        lockExtras: e
      })
    }), this.anchor = b(e.anchor), this.size = v(e.size, e.minSize.width, e.minSize.height)
  }
}
m(C, "Operations", y)
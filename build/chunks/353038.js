/** Chunk was on 50751 **/
n.d(t, {
  B: () => y,
  Z: () => Z
}), n(47120), n(411104);
var i, r, o = n(200651),
  l = n(192379),
  s = n(120356),
  a = n.n(s),
  u = n(642128),
  c = n(902704),
  d = n(585483),
  p = n(434529),
  h = n(981631),
  f = n(127798);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
let v = (e, t, n, i) => Math.pow(e - n, 2) + Math.pow(t - i, 2);
var y = ((r = {}).MOVE = "MOVE", r.RESIZE_NORTH = "RESIZE_NORTH", r.RESIZE_WEST = "RESIZE_WEST", r.RESIZE_EAST = "RESIZE_EAST", r.RESIZE_SOUTH = "RESIZE_SOUTH", r.RESIZE_NORTH_WEST = "RESIZE_NORTH_WEST", r.RESIZE_NORTH_EAST = "RESIZE_NORTH_EAST", r.RESIZE_SOUTH_WEST = "RESIZE_SOUTH_WEST", r.RESIZE_SOUTH_EAST = "RESIZE_SOUTH_EAST", r);
let E = new Set(["RESIZE_NORTH", "RESIZE_WEST", "RESIZE_EAST", "RESIZE_SOUTH", "RESIZE_NORTH_WEST", "RESIZE_NORTH_EAST", "RESIZE_SOUTH_WEST", "RESIZE_SOUTH_EAST"]);

function b(e, t, n) {
  let {
    width: i,
    height: r
  } = e;
  return {
    width: "auto" === i ? "auto" : Math.max(t, i),
    height: "auto" === r ? "auto" : Math.max(n, r)
  }
}

function x(e) {
  let {
    top: t,
    left: n,
    bottom: i,
    right: r
  } = e;
  return null == n && null == r && (n = 0), null != n && null != r && (r = void 0), null == t && null == i && (t = 0), null != t && null != i && (i = void 0), {
    top: t,
    left: n,
    bottom: i,
    right: r
  }
}

function j(e) {
  return "auto" === e || null == e ? "auto" : "".concat(e, "px")
}

function S(e, t) {
  let n = 0,
    i = 0;
  return {
    width: n = "auto" === t.width ? null != e ? e.clientWidth : 0 : t.width,
    height: "auto" === t.height ? null != e ? e.clientHeight : 0 : t.height
  }
}

function I(e, t) {
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
        bottom: r, left: i, right: void 0, top: void 0
      };
    case "RESIZE_WEST":
    case "RESIZE_NORTH_WEST":
      return {
        bottom: r, right: o, left: void 0, top: void 0
      };
    case "RESIZE_SOUTH_EAST":
      return {
        top: n, left: i, bottom: void 0, right: void 0
      };
    case "RESIZE_SOUTH":
    case "RESIZE_SOUTH_WEST":
      return {
        top: n, right: o, bottom: void 0, left: void 0
      };
    default:
      throw Error("getOrientedCoords: Invalid orientation: ".concat(e))
  }
}

function C(e) {
  let {
    computedSize: t
  } = e;
  return t
}
class Z extends(i = l.Component) {
  shouldComponentUpdate(e, t) {
    return !(0, c.Z)(t, this.state) || !(0, c.Z)(e, this.props, ["anchor", "size", "minSize", "container"]) || !(0, c.Z)(e.anchor, this.props.anchor) || !(0, c.Z)(e.size, this.props.size) || !(0, c.Z)(e.minSize, this.props.minSize) || !(0, c.Z)(e.container, this.props.container)
  }
  componentDidMount() {
    this.setDOMPositions(x(this.props.anchor)), this.setDOMSize(b(this.props.size, this.props.minSize.width, this.props.minSize.height)), d.S.subscribe(h.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
  }
  componentDidUpdate(e, t) {
    null != t.operation || ((0, c.Z)(this.props.anchor, e.anchor) || this.setDOMPositions(x(this.props.anchor)), (0, c.Z)(this.props.size, e.size) || this.setDOMSize(b(this.props.size, this.props.minSize.width, this.props.minSize.height)))
  }
  componentWillUnmount() {
    this.handleOperationEnd(), d.S.unsubscribe(h.CkL.OVERLAY_V3_SHOW_WIDGETS, this.handleShowUI)
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
          minY: s
        },
        onDragStart: a,
        onDrag: u,
        snapOrientation: c = !0
      },
      dragState: {
        offsetX: d,
        offsetY: h
      },
      state: {
        operationStarted: f
      }
    } = this;
    if (null == n) return null;
    e = Math.max(Math.min(r, e), l), t = Math.max(Math.min(o, t), s);
    let {
      width: m,
      height: g
    } = S(n, this.size), O = t - h, v = e - d, y = (0, p.ou)((0, p.PY)({
      top: O,
      left: v,
      bottom: void 0,
      right: void 0
    }, r, o, m, g)), E = c ? (0, p.R)(y) : I("RESIZE_SOUTH_EAST", y);
    this.setDOMPositions(E), this.setState({
      operationStarted: !0,
      anchorTopOverride: null != E.top,
      anchorLeftOverride: null != E.left
    }, () => {
      f || null == a || a(), null != u && u(i, "MOVE", this.anchor, this.size)
    })
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
          minY: s
        },
        onDragStart: a,
        onDrag: u,
        resizeValidation: d = C
      },
      state: {
        operation: h,
        operationStarted: f
      }
    } = this, {
      startX: m,
      startY: g
    } = this.dragState, O = 0, v = 0;
    if (null == h) return;
    switch (e = Math.max(Math.min(r, e), l), t = Math.max(Math.min(o, t), s), h) {
      case "RESIZE_EAST":
      case "RESIZE_SOUTH_EAST":
      case "RESIZE_NORTH_EAST":
        O -= m - e;
        break;
      case "RESIZE_WEST":
      case "RESIZE_SOUTH_WEST":
      case "RESIZE_NORTH_WEST":
        O += m - e
    }
    switch (h) {
      case "RESIZE_SOUTH":
      case "RESIZE_SOUTH_WEST":
      case "RESIZE_SOUTH_EAST":
        v -= g - t;
        break;
      case "RESIZE_NORTH":
      case "RESIZE_NORTH_WEST":
      case "RESIZE_NORTH_EAST":
        v += g - t
    }
    let y = d({
        padding: 8,
        borderWidth: 2,
        operation: h,
        computedSize: {
          width: Math.max(this.dragState.offsetWidth + O, i.width),
          height: Math.max(this.dragState.offsetHeight + v, i.height)
        },
        originSize: {
          width: this.dragState.offsetWidth,
          height: this.dragState.offsetHeight
        },
        containerSpecs: this.props.container,
        orientedPosition: this.dragState.dragOrientedCoords
      }),
      E = (0, p.BL)((0, p.ou)((0, p.PY)(this.dragState.dragOrientedCoords, r, o, y.width, y.height)), this.dragState.dragOrientedCoords);
    this.setDOMSize(y, !0), (0, c.Z)(E, this.dragState.dragOrientedCoords) || (this.dragState.dragOrientedCoords = E, this.setDOMPositions(this.dragState.dragOrientedCoords)), f || (null != a && a(), this.setState({
      operationStarted: !0
    })), null != u && u(n, h, this.anchor, this.size)
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
    }, null != o && (o.style.top = j(t), o.style.bottom = j(i), o.style.left = j(n), o.style.right = j(r))
  }
  setDOMSize(e) {
    let {
      width: t,
      height: n
    } = e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], {
      current: r
    } = this.ref;
    t = "auto" !== this.size.width || i ? t : "auto", n = "auto" !== this.size.height || i ? n : "auto", this.size = {
      width: t,
      height: n
    }, null != r && (r.style.width = j(t), r.style.height = j(n))
  }
  renderResizeHandles() {
    let {
      resizeY: e,
      resizeX: t,
      active: n
    } = this.props;
    return (0, o.jsxs)(o.Fragment, {
      children: [e ? (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)("div", {
          className: a()(f.resizeNorth, {
            [f.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH")
        }), (0, o.jsx)("div", {
          className: a()(f.resizeSouth, {
            [f.resizeNSCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH")
        })]
      }) : null, t ? (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)("div", {
          className: a()(f.resizeEast, {
            [f.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_EAST")
        }), (0, o.jsx)("div", {
          className: a()(f.resizeWest, {
            [f.resizeEWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_WEST")
        })]
      }) : null, t && e ? (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)("div", {
          className: a()(f.resizeNorthWest, {
            [f.resizeNWSECursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_WEST")
        }), (0, o.jsx)("div", {
          className: a()(f.resizeNorthEast, {
            [f.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_NORTH_EAST")
        }), (0, o.jsx)("div", {
          className: a()(f.resizeSouthWest, {
            [f.resizeNESWCursor]: n
          }),
          onMouseDown: e => this.handleResizeMouseDown(e, "RESIZE_SOUTH_WEST")
        }), (0, o.jsx)("div", {
          className: a()(f.resizeSouthEast, {
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
    } = this, i = null == e ? void 0 : e(n);
    return null != i ? (0, o.jsx)("div", {
      className: a()({
        [f.extras]: !0,
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
        borderRadius: o = 12
      },
      state: {
        operation: l
      }
    } = this;
    return g({}, t, {
      minWidth: n.width,
      minHeight: n.height,
      borderWidth: r,
      padding: i,
      borderRadius: o + r + i,
      zIndex: null != l ? 1e3 : void 0,
      visibility: e ? "hidden" : void 0
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
      size: o,
      anchor: l,
      setLockExtras: s,
      state: {
        anchorTopOverride: a,
        anchorLeftOverride: u
      }
    } = this;
    return e({
      dragStart: this.handleOperationStart,
      dragOperation: this.state.operation,
      anchorTop: null != a ? a : null != l.top,
      anchorLeft: null != u ? u : null != l.left,
      size: o,
      padding: n,
      borderWidth: i,
      setLockExtras: s,
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
        className: i
      },
      state: {
        operationStarted: r,
        lockExtras: l
      }
    } = this;
    return (0, o.jsxs)(u.animated.div, {
      ref: this.ref,
      style: this.getInlineStyles(),
      className: a()({
        [f.wrapper]: !0,
        [f.operation]: r,
        [f.unlocked]: !n,
        [f.lockExtras]: l
      }, i),
      onMouseDown: this.handleMouseDown,
      onClick: null != e ? () => e(t) : void 0,
      children: [this.renderChildren(), this.renderResizeHandles(), this.renderExtras()]
    })
  }
  constructor(e) {
    super(e), m(this, "anchor", void 0), m(this, "size", void 0), m(this, "ref", l.createRef()), m(this, "dragState", {
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
      lockExtras: !0,
      operation: null,
      operationStarted: !1,
      anchorTopOverride: void 0,
      anchorLeftOverride: void 0
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
      null != n && e.button === h.AeJ.PRIMARY && t && this.handleOperationStart("MOVE", e.clientX, e.clientY)
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
          operation: o,
          operationStarted: l
        }
      } = this;
      !(null == o || !l && 3 > v(i, r, t, n)) && ("MOVE" === o ? this.handleDragMove(t, n) : E.has(o) && this.handleResizeMove(t, n))
    }), m(this, "handleOperationStart", (e, t, n) => {
      let {
        ref: {
          current: i
        },
        props: {
          targetWindow: r,
          active: o,
          container: {
            maxX: l,
            maxY: s
          }
        }
      } = this;
      if (null == i || !o) return;
      let {
        width: a,
        height: u
      } = S(i, this.size), c = (0, p.PY)(this.anchor, l, s, a, u);
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
        let i = I(e, c);
        this.setDOMPositions(i), this.dragState = O(g({}, this.dragState), {
          startX: t,
          startY: n,
          offsetWidth: a,
          offsetHeight: u,
          dragOrientedCoords: i
        })
      }
      this.setState({
        operation: e,
        operationStarted: !1
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
        t(e, n, this.anchor, this.size, S(this.ref.current, this.size))
      } : void 0;
      if (t) {
        let {
          maxX: e,
          maxY: t
        } = this.props.container, {
          width: n,
          height: r
        } = S(this.ref.current, this.size), o = (0, p.PY)(this.anchor, e, t, n, r), l = (0, p.R)(o);
        this.setDOMPositions(l), this.setDOMSize({
          width: n,
          height: r
        }), null != i && i()
      }
      this.setState({
        operation: null,
        operationStarted: !1
      }, r)
    }), m(this, "setLockExtras", e => {
      this.setState({
        lockExtras: e
      })
    }), this.anchor = x(e.anchor), this.size = b(e.size, e.minSize.width, e.minSize.height)
  }
}
m(Z, "Operations", y)
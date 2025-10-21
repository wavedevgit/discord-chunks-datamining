/** Chunk was on web.js **/
/** chunk id: 241915, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N,
  _: () => A
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk347469 = require("./347469.js"),
  Chunk689425 = require("./689425.jsx"),
  Chunk522501 = require("./522501.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js"),
  Chunk639965 = require("./639965.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
let g = 200,
  E = 40,
  b = 80,
  y = 132,
  O = 80,
  v = {
    [Chunk981631.VD2.TOP_RIGHT]: Chunk639965.resizeHandleTopRight,
    [Chunk981631.VD2.TOP_LEFT]: Chunk639965.resizeHandleTopLeft,
    [Chunk981631.VD2.BOTTOM_LEFT]: Chunk639965.resizeHandleBottomLeft,
    [Chunk981631.VD2.BOTTOM_RIGHT]: Chunk639965.resizeHandleBottomRight
  },
  I = {
    [Chunk981631.VD2.TOP_RIGHT]: Chunk347469.y.HORIZONTAL_LEFT,
    [Chunk981631.VD2.TOP_LEFT]: Chunk347469.y.HORIZONTAL_RIGHT,
    [Chunk981631.VD2.BOTTOM_LEFT]: Chunk347469.y.HORIZONTAL_RIGHT,
    [Chunk981631.VD2.BOTTOM_RIGHT]: Chunk347469.y.HORIZONTAL_LEFT
  };

function T(e, t) {
  let n = Math.round(e / E) * E;
  return (0, l.clamp)(n, t.minWidth, t.maxWidth)
}

function S(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r,
    resizeConfig: o,
    position: l
  } = e, u = (0, c.Z)({
    minDimension: o.minWidth,
    maxDimension: o.maxWidth + E / 2,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: I[l],
    usePointerEvents: true
  }), d = a.useCallback(e => {
    e.stopPropagation(), u(e)
  }, [u]);
  return (0, i.jsx)("div", {
    onMouseDown: d,
    className: s()(p.resizeHandle, v[l])
  })
}
class A extends(r = Chunk647438.PureComponent) {
  componentDidMount() {
    this.setPosition(this.props.position)
  }
  componentDidUpdate(e) {
    if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
      var t, n;
      let r = null != (n = null != (t = this._width) ? t : e.width) ? n : this.props.width;
      this._width = this.props.width, null != this._innerDivRef.current && (Math.abs(r - this._width) > E && (this._innerDivRef.current.style.transition = "none"), this._innerDivRef.current.style.width = "".concat(this.props.width, "px"))
    }(e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && (this.ensureIsInPosition(), this.ensureWidth())
  }
  componentWillUnmount() {
    var e;
    null == (e = this._resizeObserver) || module.disconnect()
  }
  getPosition(e) {
    let t = this._innerDivRef.current;
    if (null != t) {
      let e = t.getBoundingClientRect();
      this._boundWidth = e.width, this._boundHeight = e.height
    }
    let {
      edgeOffsetTop: n,
      edgeOffsetLeft: r,
      edgeOffsetBottom: i,
      edgeOffsetRight: a,
      maxX: o,
      maxY: s,
      dockedRect: l,
      getDockedRectPositionY: c
    } = this.props, u = Math.round(n), d = Math.round(s - i - this._boundHeight), _ = Math.round(r), p = Math.round(o - a - this._boundWidth);
    if (null != l) {
      var h, m, g;
      return {
        y: null != (m = null != (h = null == c ? true : c(l.y)) ? h : l.y) ? m : 0,
        x: null != (g = null == l ? true : l.x) ? g : 0
      }
    }
    switch (e) {
      case f.VD2.TOP_LEFT:
        return {
          y: u, x: _
        };
      case f.VD2.BOTTOM_LEFT:
        return {
          y: d, x: _
        };
      case f.VD2.TOP_RIGHT:
        return {
          y: u, x: p
        };
      default:
        return {
          y: d, x: p
        }
    }
  }
  setPosition(e) {
    var t;
    let {
      x: n,
      y: r
    } = this.getPosition(e);
    null == (t = this._draggable) || t.setPosition(n, r)
  }
  animateToPosition(e, t) {
    var n;
    let {
      x: r,
      y: i
    } = this.getPosition(e);
    null == (n = this._draggable) || n.animateToPosition(r, i, {}, t)
  }
  calculateDecayingPosition(e, t, n, r) {
    return {
      x: e + n * g,
      y: t + r * g
    }
  }
  getXOffset() {
    let {
      position: e,
      edgeOffsetLeft: t,
      edgeOffsetRight: n
    } = this.props;
    switch (module) {
      case Chunk981631.VD2.TOP_LEFT:
      case Chunk981631.VD2.BOTTOM_LEFT:
        return -exports;
      default:
        return require
    }
  }
  getYOffset() {
    let {
      position: e,
      edgeOffsetTop: t,
      edgeOffsetBottom: n
    } = this.props;
    switch (module) {
      case Chunk981631.VD2.TOP_LEFT:
      case Chunk981631.VD2.TOP_RIGHT:
        return -exports;
      default:
        return require
    }
  }
  getWidth() {
    var e, t;
    let {
      width: n
    } = this.props;
    return null != (t = null != (e = this._width) ? module : require) ? exports : Chunk354459.l8[Chunk354459.cL.VIDEO]
  }
  get inPopout() {
    return this.props.appContext === Chunk981631.IlC.POPOUT
  }
  render() {
    let {
      maxX: e,
      maxY: t,
      dockedRect: n,
      hidden: r,
      roundCorners: a,
      className: o,
      position: l,
      resizeConfig: c
    } = this.props, d = this.getWidth(), f = {};
    return null != require ? f = {
      transform: "translate3d(".concat(require.x, ", ").concat(require.y, ", 0)"),
      width: require.width,
      height: require.height
    } : null != Chunk347469 && (f = {
      width: Chunk522501,
      transition: this.state.isResizing ? "none" : "width 0.2s ease-in-out"
    }), (0, Chunk951288.jsxs)(Chunk689425.Z, {
      dragAnywhere: true,
      ref: this.handleSetDraggableRef,
      className: s()(Chunk639965.pictureInPictureWindow, Chunk120356, {
        [Chunk639965.hidden]: r,
        [Chunk639965.borderRadius]: Chunk647438
      }),
      maxX: module,
      maxY: exports,
      disabled: null != require,
      onDragStart: this.handleDragStart,
      onDrag: this.handleDrag,
      onDragEnd: this.handleDragEnd,
      children: [(0, Chunk951288.jsx)("div", {
        ref: this.handleSetInnerDivRef,
        style: Chunk981631,
        children: this.props.children
      }), null != Chunk347469 ? (0, Chunk951288.jsx)(S, {
        onResize: this.handleResize,
        onResizeEnd: this.handleResizeEnd,
        resizableNode: this._innerDivRef,
        resizeConfig: Chunk347469,
        position: Chunk392711
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      isResizing: false
    }), h(this, "_draggable", true), h(this, "_innerDivRef", a.createRef()), h(this, "_resizeObserver", true), h(this, "_width", null), h(this, "_boundWidth", 0), h(this, "_boundHeight", 0), h(this, "_velocityX", 0), h(this, "_velocityY", 0), h(this, "_lastMoveTime", true), h(this, "_lastMoveX", 0), h(this, "_lastMoveY", 0), h(this, "ensureIsInPosition", () => {
      this.setPosition(this.props.position)
    }), h(this, "ensureWidth", () => {
      let {
        onResize: e,
        edgeOffsetLeft: t,
        edgeOffsetRight: n,
        maxX: r,
        resizeConfig: i
      } = this.props;
      if (null == i) return;
      let a = T(r - (t + n), i);
      this.getWidth() > a && (this._width = a, null == e || e(a))
    }), h(this, "handleSetInnerDivRef", e => {
      this._innerDivRef.current = e;
      let t = null == e ? true : e.ownerDocument.defaultView;
      if (null != e && null != t) {
        var n;
        this._resizeObserver = new t.ResizeObserver(this.ensureIsInPosition), null == (n = this._resizeObserver) || n.observe(e)
      }
    }), h(this, "handleSetDraggableRef", e => {
      this._draggable = e
    }), h(this, "handleResize", e => {
      this._width = e, this.state.isResizing || this.setState({
        isResizing: true
      })
    }), h(this, "handleResizeEnd", e => {
      let {
        onResize: t,
        resizeConfig: n
      } = this.props;
      if (null == n) return;
      let r = T(e, n);
      this._width = r, null == t || t(r), this.setState({
        isResizing: false
      }), this.ensureWidth()
    }), h(this, "handleDragStart", (e, t) => {
      var n, r;
      this._velocityX = 0, this._velocityY = 0, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = new Date, null == (n = (r = this.props).onDragStart) || n.call(r, e, t)
    }), h(this, "handleDrag", (e, t) => {
      let n = new Date,
        r = Number(n) - Number(this._lastMoveTime);
      0 !== r && (this._velocityX = (e - this._lastMoveX) / r, this._velocityY = (t - this._lastMoveY) / r, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = n)
    }), h(this, "handleDragEnd", (e, t) => {
      var n, r;
      let i, {
          maxX: a,
          maxY: o
        } = this.props,
        s = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY),
        l = true,
        c = true;
      if (s.x > a / 2 && (c = false), s.y > o / 2 && (l = false), i = l && c ? f.VD2.TOP_LEFT : l && !c ? f.VD2.TOP_RIGHT : !l && c ? f.VD2.BOTTOM_LEFT : f.VD2.BOTTOM_RIGHT, this.animateToPosition(i, this.ensureIsInPosition), i !== this.props.position) {
        let {
          id: e,
          onMove: t
        } = this.props;
        null == t || t(e, i)
      }
      null == (n = (r = this.props).onDragEnd) || n.call(r, e, t)
    })
  }
}
h(A, "defaultProps", {
  hidden: false,
  roundCorners: true
});
let C = e => {
    let {
      selectedPIPWindow: t,
      pipWindows: n,
      pipWidth: r,
      maxX: o,
      maxY: l,
      onWindowMove: c,
      onWindowResize: u,
      dockedRect: _,
      pictureInPictureComponents: h,
      appContext: g,
      roundCorners: E,
      resizeConfig: v,
      className: I,
      getDockedRectPositionY: T
    } = e, [S, C] = a.useState(false), N = a.useMemo(() => null == t ? null : n.map(e => {
      if (e.id !== t.id && e.component !== f.NYg.ACTIVITY && e.component !== f.NYg.FRAME) return null;
      let n = "string" == typeof e.component ? h[e.component] : e.component;
      return (0, i.jsx)(n, m({
        width: r
      }, e.props), e.id)
    }), [n, t, r, h]), R = a.useCallback(() => {
      C(true)
    }, []), P = a.useCallback(() => {
      C(false)
    }, []), w = a.useMemo(() => n.some(e => e.component === f.NYg.ACTIVITY), [n]), D = a.useMemo(() => n.some(e => e.component === f.NYg.FRAME), [n]);
    return null == t ? (0, i.jsx)(d.ZP, {
      children: (0, i.jsx)("div", {
        className: p.pictureInPicture
      })
    }) : (0, i.jsx)(d.ZP, {
      children: (0, i.jsx)("div", {
        className: s()(p.pictureInPicture, {
          [p.dragging]: S
        }, I),
        children: (0, i.jsx)(A, {
          appContext: g,
          position: t.position,
          id: t.id,
          hidden: t.hidden,
          onMove: c,
          onResize: u,
          onDragStart: R,
          onDragEnd: P,
          maxX: o,
          maxY: l,
          width: r,
          dockedRect: _,
          getDockedRectPositionY: T,
          edgeOffsetTop: b,
          edgeOffsetBottom: y,
          edgeOffsetLeft: O,
          edgeOffsetRight: b,
          roundCorners: E,
          resizeConfig: w || D ? true : v,
          children: N
        })
      })
    })
  },
  N = Chunk647438.memo(C)
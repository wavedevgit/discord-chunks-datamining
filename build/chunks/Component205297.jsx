/** Chunk was on web.js **/
/** chunk id: 205297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N,
  S: () => T
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk761929 = require("./761929.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk699426 = require("./699426.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js"),
  Chunk315253 = require("./315253.js");

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
  y = 80,
  b = 132,
  O = 80,
  v = {
    [Chunk652215.CUs.TOP_RIGHT]: Chunk315253.En,
    [Chunk652215.CUs.TOP_LEFT]: Chunk315253.rG,
    [Chunk652215.CUs.BOTTOM_LEFT]: Chunk315253.j$,
    [Chunk652215.CUs.BOTTOM_RIGHT]: Chunk315253.Ue
  },
  A = {
    [Chunk652215.CUs.TOP_RIGHT]: Chunk761929.R.HORIZONTAL_LEFT,
    [Chunk652215.CUs.TOP_LEFT]: Chunk761929.R.HORIZONTAL_RIGHT,
    [Chunk652215.CUs.BOTTOM_LEFT]: Chunk761929.R.HORIZONTAL_RIGHT,
    [Chunk652215.CUs.BOTTOM_RIGHT]: Chunk761929.R.HORIZONTAL_LEFT
  };

function I(e, t) {
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
  } = e, u = (0, c.A)({
    minDimension: o.minWidth,
    maxDimension: o.maxWidth + E / 2,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: A[l],
    usePointerEvents: true
  }), d = a.useCallback(e => {
    e.stopPropagation(), u(e)
  }, [u]);
  return (0, i.jsx)("div", {
    onMouseDown: d,
    className: s()(_.Di, v[l])
  })
}
class T extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    this.setPosition(this.props.position)
  }
  componentDidUpdate(e) {
    if (null != this.props.width && null != this.props.resizeConfig && e.width !== this.props.width) {
      var t, n;
      let r = null != (t = null != (n = this._width) ? n : e.width) ? t : this.props.width;
      this._width = this.props.width, null != this._innerDivRef.current && (Math.abs(r - this._width) > E && (this._innerDivRef.current.style.transition = "none"), this._innerDivRef.current.style.width = "".concat(this.props.width, "px"))
    }(e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && (this.ensureIsInPosition(), this.ensureWidth())
  }
  componentWillUnmount() {
    var e;
    null == (e = this._resizeObserver) || e.disconnect()
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
    } = this.props, u = Math.round(n), d = Math.round(s - i - this._boundHeight), p = Math.round(r), _ = Math.round(o - a - this._boundWidth);
    if (null != l) {
      var h, m, g;
      return {
        y: null != (h = null != (m = null == c ? true : c(l.y)) ? m : l.y) ? h : 0,
        x: null != (g = null == l ? true : l.x) ? g : 0
      }
    }
    switch (e) {
      case f.CUs.TOP_LEFT:
        return {
          y: u, x: p
        };
      case f.CUs.BOTTOM_LEFT:
        return {
          y: d, x: p
        };
      case f.CUs.TOP_RIGHT:
        return {
          y: u, x: _
        };
      default:
        return {
          y: d, x: _
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
    switch (e) {
      case f.CUs.TOP_LEFT:
      case f.CUs.BOTTOM_LEFT:
        return -t;
      default:
        return n
    }
  }
  getYOffset() {
    let {
      position: e,
      edgeOffsetTop: t,
      edgeOffsetBottom: n
    } = this.props;
    switch (e) {
      case f.CUs.TOP_LEFT:
      case f.CUs.TOP_RIGHT:
        return -t;
      default:
        return n
    }
  }
  getWidth() {
    var e, t;
    let {
      width: n
    } = this.props;
    return null != (e = null != (t = this._width) ? t : n) ? e : p.fG[p.R8.VIDEO]
  }
  get inPopout() {
    return this.props.appContext === f.BRT.POPOUT
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
    return null != n ? f = {
      transform: "translate3d(".concat(n.x, ", ").concat(n.y, ", 0)"),
      width: n.width,
      height: n.height
    } : null != c && (f = {
      width: d,
      transition: this.state.isResizing ? "none" : "width 0.2s ease-in-out"
    }), (0, i.jsxs)(u.A, {
      dragAnywhere: true,
      ref: this.handleSetDraggableRef,
      className: s()(_.GE, o, {
        [_.R]: r,
        [_.Vq]: a
      }),
      maxX: e,
      maxY: t,
      disabled: null != n,
      onDragStart: this.handleDragStart,
      onDrag: this.handleDrag,
      onDragEnd: this.handleDragEnd,
      children: [(0, i.jsx)("div", {
        ref: this.handleSetInnerDivRef,
        style: f,
        children: this.props.children
      }), null != c ? (0, i.jsx)(S, {
        onResize: this.handleResize,
        onResizeEnd: this.handleResizeEnd,
        resizableNode: this._innerDivRef,
        resizeConfig: c,
        position: l
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
      let a = I(r - (t + n), i);
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
      let r = I(e, n);
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
      if (s.x > a / 2 && (c = false), s.y > o / 2 && (l = false), i = l && c ? f.CUs.TOP_LEFT : l && !c ? f.CUs.TOP_RIGHT : !l && c ? f.CUs.BOTTOM_LEFT : f.CUs.BOTTOM_RIGHT, this.animateToPosition(i, this.ensureIsInPosition), i !== this.props.position) {
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
h(T, "defaultProps", {
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
      dockedRect: p,
      pictureInPictureComponents: h,
      appContext: g,
      roundCorners: E,
      resizeConfig: v,
      className: A,
      getDockedRectPositionY: I
    } = e, [S, C] = a.useState(false), N = a.useMemo(() => null == t ? null : n.map(e => {
      if (e.id !== t.id && e.component !== f.o1q.ACTIVITY && e.component !== f.o1q.FRAME) return null;
      let n = "string" == typeof e.component ? h[e.component] : e.component;
      return (0, i.jsx)(n, m({
        width: r
      }, e.props), e.id)
    }), [n, t, r, h]), w = a.useCallback(() => {
      C(true)
    }, []), R = a.useCallback(() => {
      C(false)
    }, []), P = a.useMemo(() => n.some(e => e.component === f.o1q.ACTIVITY), [n]), D = a.useMemo(() => n.some(e => e.component === f.o1q.FRAME), [n]);
    return null == t ? (0, i.jsx)(d.Ay, {
      children: (0, i.jsx)("div", {
        className: _._I
      })
    }) : (0, i.jsx)(d.Ay, {
      children: (0, i.jsx)("div", {
        className: s()(_._I, {
          [_.cB]: S
        }, A),
        children: (0, i.jsx)(T, {
          appContext: g,
          position: t.position,
          id: t.id,
          hidden: t.hidden,
          onMove: c,
          onResize: u,
          onDragStart: w,
          onDragEnd: R,
          maxX: o,
          maxY: l,
          width: r,
          dockedRect: p,
          getDockedRectPositionY: I,
          edgeOffsetTop: y,
          edgeOffsetBottom: b,
          edgeOffsetLeft: O,
          edgeOffsetRight: y,
          roundCorners: E,
          resizeConfig: P || D ? true : v,
          children: N
        })
      })
    })
  },
  N = Chunk64700.memo(C)
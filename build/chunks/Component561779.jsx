/** Chunk was on web.js **/
/** chunk id: 561779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => T
}), require("./642613.js"), require("./953529.js"), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk488290 = require("./488290.js"),
  Chunk374470 = require("./374470.js"),
  Chunk793030 = require("./793030.js"),
  Chunk981729 = require("./981729.jsx"),
  Chunk886025 = require("./886025.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk89079 = require("./89079.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (e === i) return r;
    if (e < i) {
      if (0 === n || i - e < n) return r;
      return r - 1
    }
    n = e - i
  }
  return null
}

function v(e) {
  let {
    markers: t,
    initialValue: n,
    minValue: r,
    maxValue: i,
    equidistant: a
  } = e, o = [], s = [];
  if (null == t) return {
    min: r,
    max: i,
    range: i - r,
    sortedMarkers: o,
    markerPositions: s
  };
  let l = O(n, o = t.sort((e, t) => e - t)),
    c = o[0],
    u = o[o.length - 1],
    d = u - c;
  if (a) {
    let e = 100 / (o.length - 1);
    s = o.map((t, n) => n * e)
  } else {
    let e = e => 100 * (e - c) / d;
    s = o.map(t => e(t))
  }
  return {
    min: c,
    max: u,
    range: d,
    sortedMarkers: o,
    markerPositions: s,
    closestMarkerIndex: l
  }
}

function I(e, t) {
  let n = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
  return E({
    value: null != t ? t : n,
    initialValueProp: e.initialValue,
    newClosestIndex: null
  }, v(e))
}
class T extends(r = Chunk647438.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    return e.initialValue !== t.initialValueProp ? y(E({}, I(e, t.value)), {
      active: t.active
    }) : null
  }
  componentWillUnmount() {
    this.reset()
  }
  renderMark(e) {
    let {
      onMarkerRender: t
    } = this.props;
    return null != t ? t(e) : e
  }
  render() {
    var e;
    let {
      value: t,
      active: n,
      focused: r,
      sortedMarkers: a,
      markerPositions: o,
      closestMarkerIndex: l,
      newClosestIndex: c,
      min: d,
      max: g
    } = this.state, {
      disabled: b,
      stickToMarkers: O,
      className: v,
      children: I,
      barStyles: T,
      fillStyles: A,
      mini: C,
      hideBubble: N,
      defaultValue: R,
      orientation: P,
      onValueRender: w,
      renderMarker: D,
      getAriaValueText: L,
      barClassName: x,
      grabberClassName: j,
      grabberStyles: M = {},
      markerPosition: k = 0,
      "aria-hidden": U,
      "aria-label": G,
      "aria-labelledby": B,
      "aria-describedby": Z,
      label: F,
      hideLabel: V,
      description: H,
      helperText: Y,
      errorMessage: W,
      successMessage: K
    } = this.props, z = 0;
    O ? null != Chunk120356 && (null != c ? z = Chunk120356[c] : null != Chunk392711 && (z = Chunk120356[Chunk392711])) : z = this.scaleValue(exports);
    let q = "".concat(z, "%"),
      X = null != Chunk120356 && null != Chunk647438 ? Chunk120356.map((e, t) => {
        let n = a[t],
          r = null != R && R === n,
          o = this.renderMark(n);
        return (0, i.jsx)("div", {
          className: s()(m.mark, {
            [m.defaultValue]: r,
            [m.markAbove]: 0 === k,
            [m.markBelow]: 1 === k
          }),
          style: {
            left: "".concat(e, "%")
          },
          children: null != D ? D(n) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: m.markValue,
              children: o
            }), (0, i.jsx)("div", {
              className: m["markDash".concat(null == o ? "simple" : "")]
            })]
          })
        }, t)
      }) : null,
      Q = null != w ? w(exports) : "".concat(z.toFixed(0), "%"),
      J = null != (e = null == L ? true : L(exports)) ? module : true;
    return (0, Chunk951288.jsx)(Chunk886025.N, {
      label: F,
      hideLabel: V,
      description: H,
      helperText: Y,
      errorMessage: W,
      successMessage: K,
      children: e => (0, i.jsx)(S, {
        active: n,
        keyboardFocused: r && h.Z.keyboardModeEnabled,
        children: a => {
          var o;
          return (0, i.jsx)(f.tEY, {
            focusTarget: this.containerRef,
            ringTarget: this.grabberRef,
            children: (0, i.jsxs)(u.animated.div, {
              className: s()(m.slider, v, {
                [m.hasMarks]: (null != (o = null == X ? true : X.length) ? o : 0) > 0,
                [m.disabled]: b,
                [m.mini]: C
              }),
              style: null == a ? true : a.sliderStyles,
              id: e.controlId,
              "aria-valuemin": d,
              "aria-valuemax": g,
              "aria-valuenow": t,
              "aria-disabled": b,
              "aria-orientation": P,
              "aria-hidden": U,
              "aria-label": G,
              "aria-labelledby": B,
              "aria-describedby": null != Z ? Z : e.describedById,
              "aria-errormessage": e.errorMessageId,
              "aria-invalid": null != e.errorMessageId,
              "aria-valuetext": J,
              role: "slider",
              tabIndex: 0,
              onKeyDown: this.handleKeyDown,
              onMouseDown: this.handleContainerMouseDown,
              onFocus: () => {
                this.onFocus()
              },
              onBlur: () => {
                this.onBlur()
              },
              onMouseEnter: () => null == a ? true : a.setHovered(true),
              onMouseLeave: () => null == a ? true : a.setHovered(false),
              ref: this.containerRef,
              children: [(0, i.jsx)("div", {
                className: m.track,
                children: X
              }), (0, i.jsx)("div", {
                className: s()(m.bar, x),
                style: T,
                children: (0, i.jsx)("div", {
                  className: m.barFill,
                  style: y(E({}, A), {
                    width: q
                  })
                })
              }), I, (0, i.jsx)("div", {
                className: m.track,
                children: (0, i.jsx)(_.u, {
                  color: _.u.Colors.GREY,
                  hideOnClick: false,
                  text: N || O ? null : Q,
                  forceOpen: n || r && h.Z.keyboardModeEnabled,
                  children: e => (0, i.jsx)("div", y(E({}, e), {
                    className: s()(m.grabber, j),
                    style: y(E({}, M), {
                      left: q
                    }),
                    onMouseDown: this.handleMouseDown,
                    ref: this.grabberRef
                  }))
                })
              })]
            })
          })
        }
      })
    })
  }
  reset() {
    var e, t, n, r;
    null == (t = this.containerRef.current) || null == (e = exports.ownerDocument) || module.removeEventListener("mousemove", this.handleMouseMove, true), null == (r = this.containerRef.current) || null == (n = r.ownerDocument) || require.removeEventListener("mouseup", this.handleMouseUp, true)
  }
  scaleValue(e) {
    return 100 * (e - this.state.min) / this.state.range
  }
  unscaleValue(e) {
    return e * this.state.range / 100 + this.state.min
  }
  focus() {
    var e;
    null == (e = this.containerRef.current) || module.focus()
  }
  blur() {
    var e;
    null == (e = this.containerRef.current) || module.blur()
  }
  moveStaggered(e) {
    let t, {
        boundingRect: n,
        x: r = 0,
        closestMarkerIndex: i,
        markerPositions: a,
        sortedMarkers: o
      } = this.state,
      {
        asValueChanges: s
      } = this.props;
    if (null == n) return;
    let {
      left: l,
      right: c
    } = n;
    if (e.clientX <= l || e.clientX >= c) return;
    let u = c - l,
      d = (e.clientX - r) / u,
      f = a[i] + 100 * d;
    null != (t = this.props.equidistant ? O(f, a) : O(this.unscaleValue(f), o)) && (null == s || s(o[t])), this.setState({
      newClosestIndex: t
    })
  }
  constructor(e) {
    super(e), g(this, "containerRef", a.createRef()), g(this, "grabberRef", a.createRef()), g(this, "moveGrabber", e => {
      let {
        sortedMarkers: t,
        value: n,
        min: r,
        max: i
      } = this.state, {
        asValueChanges: a,
        onValueChange: o,
        stickToMarkers: s
      } = this.props, l = {};
      if (s) {
        let r = t.indexOf(n);
        if (r < 0) return;
        let i = r + e,
          a = t[i];
        if (null == a) return;
        l.value = a, l.closestMarkerIndex = i, l.newClosestIndex = i
      } else l.value = c().clamp(n + e, r, i);
      this.setState(l), l.value !== this.state.value && (null == a || a(l.value), null == o || o(l.value))
    }), g(this, "handleContainerMouseDown", e => {
      let t, {
          disabled: n,
          maxValue: r,
          minValue: i,
          asValueChanges: a,
          onValueChange: o,
          stickToMarkers: s
        } = this.props,
        {
          sortedMarkers: l,
          markerPositions: c
        } = this.state;
      if (n) return;
      let {
        clientX: u,
        currentTarget: f
      } = e;
      if (!(0, d.kK)(f)) return;
      let {
        left: _,
        width: p
      } = f.getBoundingClientRect(), h = (u - _) / p;
      if (s) {
        let {
          nextClosestMarkerIndex: e
        } = c.reduce((e, t, n) => {
          let r = Math.abs(t / 100 - h);
          return r <= e.smallestDelta ? {
            smallestDelta: r,
            nextClosestMarkerIndex: n
          } : e
        }, {
          smallestDelta: 1,
          nextClosestMarkerIndex: false
        });
        if (false === e) return;
        this.setState({
          closestMarkerIndex: e
        }), t = l[e]
      } else {
        let n = r - i;
        t = i + n * h, this.setState({
          value: t,
          dragStartValue: t
        }), this.handleMouseDown(e)
      }
      null != o && o(t), null != a && a(t)
    }), g(this, "handleKeyDown", e => {
      let {
        disabled: t,
        orientation: n,
        keyboardStep: r = 1
      } = this.props;
      if (t) return;
      let {
        key: i
      } = e, a = [], o = [];
      switch (n) {
        case "horizontal":
          a = ["ArrowRight"], o = ["ArrowLeft"];
          break;
        case "vertical":
          a = ["ArrowUp"], o = ["ArrowDown"];
          break;
        default:
          a = ["ArrowRight", "ArrowUp"], o = ["ArrowLeft", "ArrowDown"]
      }
      o.includes(i) ? (e.preventDefault(), e.stopPropagation(), this.moveGrabber(-r)) : a.includes(i) && (e.preventDefault(), e.stopPropagation(), this.moveGrabber(r))
    }), g(this, "handleMouseDown", e => {
      var t, n;
      if (this.props.disabled) return;
      e.stopPropagation();
      let {
        current: r
      } = this.containerRef;
      if (null == r || null == (t = r.ownerDocument) || t.addEventListener("mousemove", this.handleMouseMove, true), null == r || null == (n = r.ownerDocument) || n.addEventListener("mouseup", this.handleMouseUp, true), !(0, d.kK)(r)) throw Error("[UIKit]Slider.handleMouseDown(): assert failed: domNode nodeType !== Element");
      this.setState({
        x: e.clientX,
        active: true,
        boundingRect: r.getBoundingClientRect(),
        newClosestIndex: this.state.closestMarkerIndex
      })
    }), g(this, "handleMouseUp", e => {
      e.stopPropagation(), this.reset();
      let {
        onValueChange: t,
        stickToMarkers: n
      } = this.props, {
        newClosestIndex: r
      } = this.state;
      n && null != r ? (null == t || t(this.state.sortedMarkers[r]), this.setState({
        newClosestIndex: null,
        closestMarkerIndex: r
      })) : (null == this.state.dragStartValue || this.state.value !== this.state.dragStartValue) && (null == t || t(this.state.value)), this.setState({
        active: false,
        dragStartValue: true
      })
    }), g(this, "handleMouseMove", e => {
      e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e)
    }), g(this, "onFocus", () => {
      this.setState({
        focused: true
      })
    }), g(this, "onBlur", () => {
      this.setState({
        focused: false
      })
    }), g(this, "moveSmoothly", e => {
      let {
        minValue: t,
        maxValue: n,
        asValueChanges: r
      } = this.props, {
        boundingRect: i
      } = this.state;
      if (null == i) return;
      let {
        left: a,
        right: o
      } = i, s = n - t, l = o - a, c = Math.min(Math.max(t + (e.clientX - a) / l * s, t), n);
      null == r || r(c), this.setState({
        value: c
      })
    }), this.state = E({
      active: false,
      focused: false,
      dragStartValue: true
    }, I(e, e.initialValue))
  }
}

function S(e) {
  let {
    active: t,
    keyboardFocused: n,
    children: r
  } = e, [i, o] = a.useState(false);
  return r({
    sliderStyles: (0, f.q_F)({
      "--grabber-size": n || t || i ? "20px" : "16px",
      "--bar-size": n || t || i ? "6px" : "4px",
      config: y(E({}, u.config.stiff), {
        duration: 100
      })
    }),
    setHovered: o
  })
}
g(T, "defaultProps", {
  initialValue: 10,
  minValue: 0,
  maxValue: 100,
  keyboardStep: 1,
  handleSize: 10,
  disabled: false,
  stickToMarkers: false,
  fillStyles: {}
})
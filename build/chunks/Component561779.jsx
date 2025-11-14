/** Chunk was on web.js **/
/** chunk id: 561779, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => I
}), require("./642613.js"), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk203463 = require("./203463.js"),
  Chunk374470 = require("./374470.js"),
  Chunk793030 = require("./793030.js"),
  Chunk506802 = require("./506802.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk89079 = require("./89079.js");

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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
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

function O(e) {
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
  let l = y(n, o = t.sort((e, t) => e - t)),
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

function v(e, t) {
  let n = Math.min(Math.max(e.initialValue, e.minValue), e.maxValue);
  return g({
    value: null != t ? t : n,
    initialValueProp: e.initialValue,
    newClosestIndex: null
  }, O(e))
}
class I extends(r = Chunk647438.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    return e.initialValue !== t.initialValueProp ? b(g({}, v(e, t.value)), {
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
      max: m
    } = this.state, {
      disabled: E,
      stickToMarkers: y,
      className: O,
      children: v,
      barStyles: I,
      fillStyles: S,
      mini: A,
      hideBubble: C,
      defaultValue: N,
      orientation: R,
      onValueRender: P,
      renderMarker: D,
      getAriaValueText: w,
      barClassName: x,
      grabberClassName: L,
      grabberStyles: M = {},
      markerPosition: k = 0,
      "aria-hidden": j,
      "aria-label": U,
      "aria-labelledby": G,
      "aria-describedby": B
    } = this.props, {
      fieldProps: Z
    } = (0, Chunk793030.XF_)(this.props), F = 0;
    y ? null != Chunk120356 && (null != c ? F = Chunk120356[c] : null != Chunk392711 && (F = Chunk120356[Chunk392711])) : F = this.scaleValue(exports);
    let V = "".concat(F, "%"),
      H = null != Chunk120356 && null != Chunk647438 ? Chunk120356.map((e, t) => {
        let n = a[t],
          r = null != N && N === n,
          o = this.renderMark(n);
        return (0, i.jsx)("div", {
          className: s()(h.mark, {
            [h.defaultValue]: r,
            [h.markAbove]: 0 === k,
            [h.markBelow]: 1 === k
          }),
          style: {
            left: "".concat(e, "%")
          },
          children: null != D ? D(n) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: h.markValue,
              children: o
            }), (0, i.jsx)("div", {
              className: h["markDash".concat(null == o ? "simple" : "")]
            })]
          })
        }, t)
      }) : null,
      Y = null != P ? P(exports) : "".concat(F.toFixed(0), "%"),
      W = null != (e = null == w ? true : w(exports)) ? module : true;
    return (0, Chunk951288.jsx)(Chunk793030.gNt, b(g({}, Z), {
      children: e => (0, i.jsx)(T, {
        active: n,
        keyboardFocused: r && p.Z.keyboardModeEnabled,
        children: a => {
          var o;
          return (0, i.jsx)(f.tEY, {
            focusTarget: this.containerRef,
            ringTarget: this.grabberRef,
            children: (0, i.jsxs)(u.animated.div, {
              className: s()(h.slider, O, {
                [h.hasMarks]: (null != (o = null == H ? true : H.length) ? o : 0) > 0,
                [h.disabled]: E,
                [h.mini]: A
              }),
              style: null == a ? true : a.sliderStyles,
              id: e.controlId,
              "aria-valuemin": d,
              "aria-valuemax": m,
              "aria-valuenow": t,
              "aria-disabled": E,
              "aria-orientation": R,
              "aria-hidden": j,
              "aria-label": U,
              "aria-labelledby": G,
              "aria-describedby": null != B ? B : e.describedById,
              "aria-errormessage": e.errorMessageId,
              "aria-invalid": null != e.errorMessageId,
              "aria-valuetext": W,
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
                className: h.track,
                children: H
              }), (0, i.jsx)("div", {
                className: s()(h.bar, x),
                style: I,
                children: (0, i.jsx)("div", {
                  className: h.barFill,
                  style: b(g({}, S), {
                    width: V
                  })
                })
              }), v, (0, i.jsx)("div", {
                className: h.track,
                children: (0, i.jsx)(_.aM, {
                  "data-migration-pending": true,
                  color: _.aM.Colors.GREY,
                  hideOnClick: false,
                  text: C || y ? null : Y,
                  forceOpen: n || r && p.Z.keyboardModeEnabled,
                  children: e => (0, i.jsx)("div", b(g({}, e), {
                    className: s()(h.grabber, L),
                    style: b(g({}, M), {
                      left: V
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
    }))
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
    null != (t = this.props.equidistant ? y(f, a) : y(this.unscaleValue(f), o)) && (null == s || s(o[t])), this.setState({
      newClosestIndex: t
    })
  }
  constructor(e) {
    super(e), m(this, "containerRef", a.createRef()), m(this, "grabberRef", a.createRef()), m(this, "moveGrabber", e => {
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
    }), m(this, "handleContainerMouseDown", e => {
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
    }), m(this, "handleKeyDown", e => {
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
    }), m(this, "handleMouseDown", e => {
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
    }), m(this, "handleMouseUp", e => {
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
    }), m(this, "handleMouseMove", e => {
      e.preventDefault(), this.props.stickToMarkers ? this.moveStaggered(e) : this.moveSmoothly(e)
    }), m(this, "onFocus", () => {
      this.setState({
        focused: true
      })
    }), m(this, "onBlur", () => {
      this.setState({
        focused: false
      })
    }), m(this, "moveSmoothly", e => {
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
    }), this.state = g({
      active: false,
      focused: false,
      dragStartValue: true
    }, v(e, e.initialValue))
  }
}

function T(e) {
  let {
    active: t,
    keyboardFocused: n,
    children: r
  } = e, [i, o] = a.useState(false);
  return r({
    sliderStyles: (0, f.q_F)({
      "--grabber-size": n || t || i ? "20px" : "16px",
      "--bar-size": n || t || i ? "6px" : "4px",
      config: b(g({}, u.config.stiff), {
        duration: 100
      })
    }),
    setHovered: o
  })
}
m(I, "defaultProps", {
  initialValue: 10,
  minValue: 0,
  maxValue: 100,
  keyboardStep: 1,
  handleSize: 10,
  disabled: false,
  stickToMarkers: false,
  fillStyles: {}
})
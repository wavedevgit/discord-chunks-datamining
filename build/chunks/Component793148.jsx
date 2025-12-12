/** Chunk was on web.js **/
/** chunk id: 793148, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk540026 = require("./540026.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk717255 = require("./717255.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = 150;
class _ extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    this.updateMediaBar()
  }
  componentDidUpdate(e) {
    (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar()
  }
  updateMediaBar() {
    let {
      muted: e,
      value: t,
      maxValue: n
    } = this.props, r = this._mediaBar.current;
    null != r && (module ? r.setGrabber(0) : r.setGrabber(exports / require))
  }
  render() {
    let {
      iconClassName: e,
      iconColor: t,
      className: n,
      sliderWrapperClassName: r,
      sliderClassName: o,
      currentWindow: a,
      muted: f,
      minValue: _,
      maxValue: m,
      value: h,
      onVolumeShow: g,
      onVolumeHide: E
    } = this.props, {
      hovered: b,
      focused: y,
      dragging: O
    } = this.state, v = Chunk481060.gj8;
    return f || h === _ ? v = Chunk481060.OyP : h < m / 2 && (v = Chunk481060.X2j), (0, Chunk54381.jsxs)("div", {
      className: s()(require, Chunk717255.container),
      onMouseEnter: () => {
        clearTimeout(this._hoverTimeout), this.setState({
          hovered: true
        }), null == g || g()
      },
      onMouseLeave: () => {
        clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
          this.setState({
            hovered: false
          }), null == E || E()
        }, p)
      },
      onBlur: () => this.setState({
        focused: false
      }),
      onKeyDown: this.handleKeyDown,
      children: [(0, Chunk54381.jsx)("div", {
        className: s()(Chunk717255.volumeButtonSlider, r, {
          [Chunk717255.sliderVisible]: b || y || O
        }),
        onMouseEnter: () => {
          clearTimeout(this._hoverTimeout), this.setState({
            hovered: true
          })
        },
        onMouseLeave: () => {
          clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => this.setState({
            hovered: false
          }), p)
        },
        children: (0, Chunk54381.jsx)(Chunk540026.Z, {
          sliderClassName: Chunk473749,
          type: Chunk540026.Z.Types.VOLUME,
          value: h / m,
          onDrag: this.handleValueChange,
          onDragStart: this.handleDragStart,
          onDragEnd: this.handleDragEnd,
          currentWindow: Chunk120356,
          ref: this._mediaBar
        })
      }), (0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: Chunk717255.volumeButton,
        "aria-label": Chunk388032.intl.string(Chunk388032.t["19lt24"]),
        onClick: this.handleToggleMute,
        children: (0, Chunk54381.jsx)(v, {
          color: exports,
          className: module
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "_mediaBar", o.createRef()), f(this, "_hoverTimeout", true), f(this, "state", {
      hovered: false,
      focused: false,
      dragging: false
    }), f(this, "handleValueChange", e => {
      let {
        maxValue: t,
        onValueChange: n
      } = this.props, r = e * t;
      null == n || n(r)
    }), f(this, "handleToggleMute", () => {
      let {
        onToggleMute: e
      } = this.props;
      null == e || e()
    }), f(this, "handleKeyDown", e => {
      let {
        minValue: t,
        value: n,
        maxValue: r,
        onValueChange: i
      } = this.props, o = .05 * (r - t);
      switch (e.key) {
        case "ArrowUp":
          if (e.stopPropagation(), e.preventDefault(), !this.state.focused) {
            this.setState({
              focused: true
            });
            break
          }
          null == i || i(Math.min(r, n + o));
          break;
        case "ArrowDown":
          if (e.stopPropagation(), e.preventDefault(), !this.state.focused) {
            this.setState({
              focused: true
            });
            break
          }
          null == i || i(Math.max(t, n - o));
          break;
        case "Escape":
          this.setState({
            focused: false
          }), e.stopPropagation(), e.preventDefault()
      }
    }), f(this, "handleDragStart", () => {
      this.setState({
        dragging: true
      })
    }), f(this, "handleDragEnd", () => {
      this.setState({
        dragging: false
      })
    }), f(this, "blur", () => {
      this.setState({
        focused: false
      })
    })
  }
}
f(_, "defaultProps", {
  minValue: 0,
  maxValue: 100,
  handleSize: 16
});
let m = _
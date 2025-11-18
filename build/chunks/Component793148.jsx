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
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk540026 = require("./540026.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk690819 = require("./690819.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = 150;
class h extends(r = Chunk473749.PureComponent) {
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
      sliderClassName: a,
      currentWindow: o,
      muted: _,
      minValue: h,
      maxValue: m,
      value: g,
      onVolumeShow: E,
      onVolumeHide: b
    } = this.props, {
      hovered: y,
      focused: O,
      dragging: v
    } = this.state, I = Chunk481060.gj8;
    return _ || g === h ? I = Chunk481060.OyP : g < m / 2 && (I = Chunk481060.X2j), (0, Chunk54381.jsxs)("div", {
      className: s()(require, Chunk690819.container),
      onMouseEnter: () => {
        clearTimeout(this._hoverTimeout), this.setState({
          hovered: true
        }), null == E || E()
      },
      onMouseLeave: () => {
        clearTimeout(this._hoverTimeout), this._hoverTimeout = setTimeout(() => {
          this.setState({
            hovered: false
          }), null == b || b()
        }, p)
      },
      onBlur: () => this.setState({
        focused: false
      }),
      onKeyDown: this.handleKeyDown,
      children: [(0, Chunk54381.jsx)("div", {
        className: s()(Chunk690819.volumeButtonSlider, r, {
          [Chunk690819.sliderVisible]: y || O || v
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
          value: g / m,
          onDrag: this.handleValueChange,
          onDragStart: this.handleDragStart,
          onDragEnd: this.handleDragEnd,
          currentWindow: Chunk120356,
          ref: this._mediaBar
        })
      }), (0, Chunk54381.jsx)(Chunk755721.zx, {
        className: Chunk690819.volumeButton,
        "aria-label": Chunk388032.intl.string(Chunk388032.t["19lt24"]),
        size: Chunk755721.zx.Sizes.NONE,
        look: Chunk755721.zx.Looks.BLANK,
        onClick: this.handleToggleMute,
        children: (0, Chunk54381.jsx)(I, {
          color: exports,
          className: module
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "_mediaBar", a.createRef()), _(this, "_hoverTimeout", true), _(this, "state", {
      hovered: false,
      focused: false,
      dragging: false
    }), _(this, "handleValueChange", e => {
      let {
        maxValue: t,
        onValueChange: n
      } = this.props, r = e * t;
      null == n || n(r)
    }), _(this, "handleToggleMute", () => {
      let {
        onToggleMute: e
      } = this.props;
      null == e || e()
    }), _(this, "handleKeyDown", e => {
      let {
        minValue: t,
        value: n,
        maxValue: r,
        onValueChange: i
      } = this.props, a = .05 * (r - t);
      switch (e.key) {
        case "ArrowUp":
          if (e.stopPropagation(), e.preventDefault(), !this.state.focused) {
            this.setState({
              focused: true
            });
            break
          }
          null == i || i(Math.min(r, n + a));
          break;
        case "ArrowDown":
          if (e.stopPropagation(), e.preventDefault(), !this.state.focused) {
            this.setState({
              focused: true
            });
            break
          }
          null == i || i(Math.max(t, n - a));
          break;
        case "Escape":
          this.setState({
            focused: false
          }), e.stopPropagation(), e.preventDefault()
      }
    }), _(this, "handleDragStart", () => {
      this.setState({
        dragging: true
      })
    }), _(this, "handleDragEnd", () => {
      this.setState({
        dragging: false
      })
    }), _(this, "blur", () => {
      this.setState({
        focused: false
      })
    })
  }
}
_(h, "defaultProps", {
  minValue: 0,
  maxValue: 100,
  handleSize: 16
});
let m = h
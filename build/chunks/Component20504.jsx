/** Chunk was on web.js **/
/** chunk id: 20504, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk122641 = require("./122641.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk573810 = require("./573810.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let p = 150;
class _ extends(r = Chunk64700.PureComponent) {
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
    null != r && (e ? r.setGrabber(0) : r.setGrabber(t / n))
  }
  render() {
    let {
      iconClassName: e,
      iconColor: t,
      className: n,
      sliderWrapperClassName: r,
      sliderClassName: a,
      currentWindow: s,
      muted: f,
      minValue: _,
      maxValue: h,
      value: m,
      onVolumeShow: g,
      onVolumeHide: E
    } = this.props, {
      hovered: b,
      focused: y,
      dragging: O
    } = this.state, A = l.HKD;
    return f || m === _ ? A = l._RO : m < h / 2 && (A = l.S24), (0, i.jsxs)("div", {
      className: o()(n, d.kL),
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
      children: [(0, i.jsx)("div", {
        className: o()(d.QS, r, {
          [d.OZ]: b || y || O
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
        children: (0, i.jsx)(c.A, {
          sliderClassName: a,
          type: c.A.Types.VOLUME,
          value: m / h,
          onDrag: this.handleValueChange,
          onDragStart: this.handleDragStart,
          onDragEnd: this.handleDragEnd,
          currentWindow: s,
          ref: this._mediaBar
        })
      }), (0, i.jsx)(l.DUT, {
        className: d.bk,
        "aria-label": u.intl.string(u.t["19lt24"]),
        onClick: this.handleToggleMute,
        children: (0, i.jsx)(A, {
          color: t,
          className: e
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "_mediaBar", a.createRef()), f(this, "_hoverTimeout", true), f(this, "state", {
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
let h = _
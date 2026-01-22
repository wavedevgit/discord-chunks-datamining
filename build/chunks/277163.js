/** Chunk was on 47950 **/
/** chunk id: 277163, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk205662 = require("./205662.js"),
  Chunk717519 = require("./717519.js"),
  Chunk81609 = require("./81609.js"),
  Chunk708005 = require("./708005.js"),
  Chunk717692 = require("./717692.js"),
  u = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t
    }
  }(),
  c = function(e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);

    function t(e) {
      if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
      var r = function(e, t) {
        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && ("object" == typeof t || "function" == typeof t) ? t : e
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return r.toggleViews = function() {
        "hex" === r.state.view ? r.setState({
          view: "rgb"
        }) : "rgb" === r.state.view ? r.setState({
          view: "hsl"
        }) : "hsl" === r.state.view && (1 === r.props.hsl.a ? r.setState({
          view: "hex"
        }) : r.setState({
          view: "rgb"
        }))
      }, r.handleChange = function(e, t) {
        e.hex ? a.qt(e.hex) && r.props.onChange({
          hex: e.hex,
          source: "hex"
        }, t) : e.r || e.g || e.b ? r.props.onChange({
          r: e.r || r.props.rgb.r,
          g: e.g || r.props.rgb.g,
          b: e.b || r.props.rgb.b,
          source: "rgb"
        }, t) : e.a ? (e.a < 0 ? e.a = 0 : e.a > 1 && (e.a = 1), r.props.onChange({
          h: r.props.hsl.h,
          s: r.props.hsl.s,
          l: r.props.hsl.l,
          a: Math.round(100 * e.a) / 100,
          source: "rgb"
        }, t)) : (e.h || e.s || e.l) && ("string" == typeof e.s && e.s.includes("%") && (e.s = e.s.replace("%", "")), "string" == typeof e.l && e.l.includes("%") && (e.l = e.l.replace("%", "")), 1 == e.s ? e.s = .01 : 1 == e.l && (e.l = .01), r.props.onChange({
          h: e.h || r.props.hsl.h,
          s: Number((0, i.A)(e.s) ? r.props.hsl.s : e.s),
          l: Number((0, i.A)(e.l) ? r.props.hsl.l : e.l),
          source: "hsl"
        }, t))
      }, r.showHighlight = function(e) {
        e.currentTarget.style.background = "#eee"
      }, r.hideHighlight = function(e) {
        e.currentTarget.style.background = "transparent"
      }, 1 !== e.hsl.a && "hex" === e.view ? r.state = {
        view: "rgb"
      } : r.state = {
        view: e.view
      }, r
    }
    return t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), u(t, [{
      key: "render",
      value: function() {
        var e = this,
          t = (0, o.default)({
            default: {
              wrap: {
                paddingTop: "16px",
                display: "flex"
              },
              fields: {
                flex: "1",
                display: "flex",
                marginLeft: "-6px"
              },
              field: {
                paddingLeft: "6px",
                width: "100%"
              },
              alpha: {
                paddingLeft: "6px",
                width: "100%"
              },
              toggle: {
                width: "32px",
                textAlign: "right",
                position: "relative"
              },
              icon: {
                marginRight: "-4px",
                marginTop: "12px",
                cursor: "pointer",
                position: "relative"
              },
              iconHighlight: {
                position: "absolute",
                width: "24px",
                height: "28px",
                background: "#eee",
                borderRadius: "4px",
                top: "10px",
                left: "12px",
                display: "none"
              },
              input: {
                fontSize: "11px",
                color: "#333",
                width: "100%",
                borderRadius: "2px",
                border: "none",
                boxShadow: "inset 0 0 0 1px #dadada",
                height: "21px",
                textAlign: "center"
              },
              label: {
                textTransform: "uppercase",
                fontSize: "11px",
                lineHeight: "11px",
                color: "#969696",
                textAlign: "center",
                display: "block",
                marginTop: "12px"
              },
              svg: {
                fill: "#333",
                width: "24px",
                height: "24px",
                border: "1px transparent solid",
                borderRadius: "5px"
              }
            },
            disableAlpha: {
              alpha: {
                display: "none"
              }
            }
          }, this.props, this.state),
          r = true;
        return "hex" === this.state.view ? r = n.createElement("div", {
          style: t.fields,
          className: "flexbox-fix"
        }, n.createElement("div", {
          style: t.field
        }, n.createElement(l.jc, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "hex",
          value: this.props.hex,
          onChange: this.handleChange
        }))) : "rgb" === this.state.view ? r = n.createElement("div", {
          style: t.fields,
          className: "flexbox-fix"
        }, n.createElement("div", {
          style: t.field
        }, n.createElement(l.jc, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "r",
          value: this.props.rgb.r,
          onChange: this.handleChange
        })), n.createElement("div", {
          style: t.field
        }, n.createElement(l.jc, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "g",
          value: this.props.rgb.g,
          onChange: this.handleChange
        })), n.createElement("div", {
          style: t.field
        }, n.createElement(l.jc, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "b",
          value: this.props.rgb.b,
          onChange: this.handleChange
        })), n.createElement("div", {
          style: t.alpha
        }, n.createElement(l.jc, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "a",
          value: this.props.rgb.a,
          arrowOffset: .01,
          onChange: this.handleChange
        }))) : "hsl" === this.state.view && (r = n.createElement("div", {
          style: t.fields,
          className: "flexbox-fix"
        }, n.createElement("div", {
          style: t.field
        }, n.createElement(l.jc, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "h",
          value: Math.round(this.props.hsl.h),
          onChange: this.handleChange
        })), n.createElement("div", {
          style: t.field
        }, n.createElement(l.jc, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "s",
          value: Math.round(100 * this.props.hsl.s) + "%",
          onChange: this.handleChange
        })), n.createElement("div", {
          style: t.field
        }, n.createElement(l.jc, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "l",
          value: Math.round(100 * this.props.hsl.l) + "%",
          onChange: this.handleChange
        })), n.createElement("div", {
          style: t.alpha
        }, n.createElement(l.jc, {
          style: {
            input: t.input,
            label: t.label
          },
          label: "a",
          value: this.props.hsl.a,
          arrowOffset: .01,
          onChange: this.handleChange
        })))), n.createElement("div", {
          style: t.wrap,
          className: "flexbox-fix"
        }, r, n.createElement("div", {
          style: t.toggle
        }, n.createElement("div", {
          style: t.icon,
          onClick: this.toggleViews,
          ref: function(t) {
            return e.icon = t
          }
        }, n.createElement(s.default, {
          style: t.svg,
          onMouseOver: this.showHighlight,
          onMouseEnter: this.showHighlight,
          onMouseOut: this.hideHighlight
        }))))
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(e, t) {
        return 1 !== e.hsl.a && "hex" === t.view ? {
          view: "rgb"
        } : null
      }
    }]), t
  }(Chunk64700.Component);
c.defaultProps = {
  view: "hex"
};
let p = c
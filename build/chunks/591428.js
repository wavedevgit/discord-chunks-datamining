/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(192379),
  i = n(723184),
  o = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function s(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function l(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}

function c(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
var u = 1,
  d = 38,
  f = [38, 40],
  p = function(e) {
    return f.indexOf(e) > -1
  },
  _ = function(e) {
    return Number(String(e).replace(/%/g, ""))
  },
  h = 1;
let m = function(e) {
  function t(e) {
    s(this, t);
    var n = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return n.handleBlur = function() {
      n.state.blurValue && n.setState({
        value: n.state.blurValue,
        blurValue: null
      })
    }, n.handleChange = function(e) {
      n.setUpdatedValue(e.target.value, e)
    }, n.handleKeyDown = function(e) {
      var t = _(e.target.value);
      if (!isNaN(t) && p(e.keyCode)) {
        var r = n.getArrowOffset(),
          i = e.keyCode === d ? t + r : t - r;
        n.setUpdatedValue(i, e)
      }
    }, n.handleDrag = function(e) {
      if (n.props.dragLabel) {
        var t = Math.round(n.props.value + e.movementX);
        t >= 0 && t <= n.props.dragMax && n.props.onChange && n.props.onChange(n.getValueObjectWithLabel(t), e)
      }
    }, n.handleMouseDown = function(e) {
      n.props.dragLabel && (e.preventDefault(), n.handleDrag(e), window.addEventListener("mousemove", n.handleDrag), window.addEventListener("mouseup", n.handleMouseUp))
    }, n.handleMouseUp = function() {
      n.unbindEventListeners()
    }, n.unbindEventListeners = function() {
      window.removeEventListener("mousemove", n.handleDrag), window.removeEventListener("mouseup", n.handleMouseUp)
    }, n.state = {
      value: String(e.value).toUpperCase(),
      blurValue: String(e.value).toUpperCase()
    }, n.inputId = "rc-editable-input-" + h++, n
  }
  return c(t, e), o(t, [{
    key: "componentDidUpdate",
    value: function(e, t) {
      this.props.value !== this.state.value && (e.value !== this.props.value || t.value !== this.state.value) && (this.input === document.activeElement ? this.setState({
        blurValue: String(this.props.value).toUpperCase()
      }) : this.setState({
        value: String(this.props.value).toUpperCase(),
        blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
      }))
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners()
    }
  }, {
    key: "getValueObjectWithLabel",
    value: function(e) {
      return a({}, this.props.label, e)
    }
  }, {
    key: "getArrowOffset",
    value: function() {
      return this.props.arrowOffset || u
    }
  }, {
    key: "setUpdatedValue",
    value: function(e, t) {
      var n = this.props.label ? this.getValueObjectWithLabel(e) : e;
      this.props.onChange && this.props.onChange(n, t), this.setState({
        value: e
      })
    }
  }, {
    key: "render",
    value: function() {
      var e = this,
        t = (0, i.default)({
          default: {
            wrap: {
              position: "relative"
            }
          },
          "user-override": {
            wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
            input: this.props.style && this.props.style.input ? this.props.style.input : {},
            label: this.props.style && this.props.style.label ? this.props.style.label : {}
          },
          "dragLabel-true": {
            label: {
              cursor: "ew-resize"
            }
          }
        }, {
          "user-override": !0
        }, this.props);
      return r.createElement("div", {
        style: t.wrap
      }, r.createElement("input", {
        id: this.inputId,
        style: t.input,
        ref: function(t) {
          return e.input = t
        },
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        placeholder: this.props.placeholder,
        spellCheck: "false"
      }), this.props.label && !this.props.hideLabel ? r.createElement("label", {
        htmlFor: this.inputId,
        style: t.label,
        onMouseDown: this.handleMouseDown
      }, this.props.label) : null)
    }
  }]), t
}(r.PureComponent || r.Component)
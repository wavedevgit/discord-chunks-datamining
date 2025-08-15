/** Chunk was on 3115 **/
/** chunk id: 617378, original params: e,t,r (module,exports,require) **/
"use strict";
var Chunk647438 = require("./647438.js"),
  Chunk476400 = require("./476400.js"),
  a = require.n(Chunk476400),
  Chunk782497 = require("./782497.js"),
  Chunk829307 = require("./829307.js"),
  Chunk962438 = require("./962438.js"),
  Chunk939937 = require("./939937.js"),
  Chunk205372 = require("./205372.js"),
  Chunk192022 = require("./192022.js"),
  Chunk177703 = require("./177703.js"),
  Chunk208543 = require("./208543.js"),
  h = function() {
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
  b = function(e) {
    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);

    function t(e) {
      if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
      var r = function(e, t) {
        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && ("object" == typeof t || "function" == typeof t) ? t : e
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return r.state = {
        currentColor: e.hex
      }, r
    }
    return t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), h(t, [{
      key: "render",
      value: function() {
        var e = this.props,
          t = e.styles,
          r = e.className,
          o = (0, i.default)((0, l.Z)({
            default: {
              picker: {
                background: "#DCDCDC",
                borderRadius: "4px",
                boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                boxSizing: "initial",
                width: "513px"
              },
              head: {
                backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                borderBottom: "1px solid #B1B1B1",
                boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                height: "23px",
                lineHeight: "24px",
                borderRadius: "4px 4px 0 0",
                fontSize: "13px",
                color: "#4D4D4D",
                textAlign: "center"
              },
              body: {
                padding: "15px 15px 0",
                display: "flex"
              },
              saturation: {
                width: "256px",
                height: "256px",
                position: "relative",
                border: "2px solid #B3B3B3",
                borderBottom: "2px solid #F0F0F0",
                overflow: "hidden"
              },
              hue: {
                position: "relative",
                height: "256px",
                width: "19px",
                marginLeft: "10px",
                border: "2px solid #B3B3B3",
                borderBottom: "2px solid #F0F0F0"
              },
              controls: {
                width: "180px",
                marginLeft: "10px"
              },
              top: {
                display: "flex"
              },
              previews: {
                width: "60px"
              },
              actions: {
                flex: "1",
                marginLeft: "20px"
              }
            }
          }, true === t ? {} : t));
        return n.createElement("div", {
          style: o.picker,
          className: "photoshop-picker " + (true === r ? "" : r)
        }, n.createElement("div", {
          style: o.head
        }, this.props.header), n.createElement("div", {
          style: o.body,
          className: "flexbox-fix"
        }, n.createElement("div", {
          style: o.saturation
        }, n.createElement(s.OQ, {
          hsl: this.props.hsl,
          hsv: this.props.hsv,
          pointer: c.Z,
          onChange: this.props.onChange
        })), n.createElement("div", {
          style: o.hue
        }, n.createElement(s.PS, {
          direction: "vertical",
          hsl: this.props.hsl,
          pointer: p.Z,
          onChange: this.props.onChange
        })), n.createElement("div", {
          style: o.controls
        }, n.createElement("div", {
          style: o.top,
          className: "flexbox-fix"
        }, n.createElement("div", {
          style: o.previews
        }, n.createElement(d.Z, {
          rgb: this.props.rgb,
          currentColor: this.state.currentColor
        })), n.createElement("div", {
          style: o.actions
        }, n.createElement(f.C, {
          label: "OK",
          onClick: this.props.onAccept,
          active: true
        }), n.createElement(f.C, {
          label: "Cancel",
          onClick: this.props.onCancel
        }), n.createElement(u.Z, {
          onChange: this.props.onChange,
          rgb: this.props.rgb,
          hsv: this.props.hsv,
          hex: this.props.hex
        }))))))
      }
    }]), t
  }(Chunk647438.Component);
b.propTypes = {
  header: a().string,
  styles: a().object
}, b.defaultProps = {
  header: "Color Picker",
  styles: {}
}, (0, Chunk962438.t1)(b)
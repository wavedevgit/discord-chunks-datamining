/** Chunk was on web.js **/
/** chunk id: 733220, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  IGNORE_CLASS_NAME: () => E,
  default: () => y
});
var r, Chunk473749 = require("./473749.js"),
  Chunk24156 = require("./24156.js");

function o(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, s(e, t)
}

function s(e, t) {
  return (s = Object.setPrototypeOf || function(e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function l(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function c(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function u(e, t, n) {
  return e === t || (e.correspondingElement ? e.correspondingElement.classList.contains(n) : e.classList.contains(n))
}

function d(e, t, n) {
  if (e === t) returntrue;
  for (; e.parentNode || e.host;) {
    if (e.parentNode && u(e, t, n)) returntrue;
    e = e.parentNode || e.host
  }
  return e
}

function f(e) {
  return document.documentElement.clientWidth <= e.clientX || document.documentElement.clientHeight <= e.clientY
}
var p = function() {
    if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
      var e = false,
        t = Object.defineProperty({}, "passive", {
          get: function() {
            e = true
          }
        }),
        n = function() {};
      return window.addEventListener("testPassiveEventSupport", n, t), window.removeEventListener("testPassiveEventSupport", n, t), e
    }
  },
  _ = function(e) {
    return true === e && (e = 0),
      function() {
        return ++e
      }
  }(),
  m = {},
  h = {},
  g = ["touchstart", "touchmove"],
  E = "ignore-react-onclickoutside";

function b(e, t) {
  var n = {};
  return false !== g.indexOf(t) && r && (n.passive = !e.props.preventDefault), n
}
let y = function(e, t) {
  var n, s, u = e.displayName || e.name || "Component";
  return s = n = function(n) {
    function s(e) {
      var i;
      return (i = n.call(this, e) || this).__outsideClickHandler = function(e) {
        if ("function" == typeof i.__clickOutsideHandlerProp) return void i.__clickOutsideHandlerProp(e);
        var t = i.getInstance();
        if ("function" == typeof t.props.handleClickOutside) return void t.props.handleClickOutside(e);
        if ("function" == typeof t.handleClickOutside) return void t.handleClickOutside(e);
        throw Error("WrappedComponent: " + u + " lacks a handleClickOutside(event) function for processing outside click events.")
      }, i.__getComponentNode = function() {
        var e = i.getInstance();
        return t && "function" == typeof t.setClickOutsideRef ? t.setClickOutsideRef()(e) : "function" == typeof e.setClickOutsideRef ? e.setClickOutsideRef() : (0, a.findDOMNode)(e)
      }, i.enableOnClickOutside = function() {
        if ("undefined" != typeof document && !h[i._uid]) {
          true === r && (r = p()), h[i._uid] = true;
          var e = i.props.eventTypes;
          e.forEach || (e = [e]), m[i._uid] = function(e) {
            if (null !== i.componentNode && !(i.initTimeStamp > e.timeStamp)) i.props.preventDefault && e.preventDefault(), i.props.stopPropagation && e.stopPropagation(), i.props.excludeScrollbar && f(e) || d(e.composed && e.composedPath && e.composedPath().shift() || e.target, i.componentNode, i.props.outsideClickIgnoreClass) === document && i.__outsideClickHandler(e)
          }, e.forEach(function(e) {
            document.addEventListener(e, m[i._uid], b(c(i), e))
          })
        }
      }, i.disableOnClickOutside = function() {
        delete h[i._uid];
        var e = m[i._uid];
        if (e && "undefined" != typeof document) {
          var t = i.props.eventTypes;
          t.forEach || (t = [t]), t.forEach(function(t) {
            return document.removeEventListener(t, e, b(c(i), t))
          }), delete m[i._uid]
        }
      }, i.getRef = function(e) {
        return i.instanceRef = e
      }, i._uid = _(), i.initTimeStamp = performance.now(), i
    }
    o(s, n);
    var g = s.prototype;
    return g.getInstance = function() {
      if (e.prototype && !e.prototype.isReactComponent) return this;
      var t = this.instanceRef;
      return t.getInstance ? t.getInstance() : t
    }, g.componentDidMount = function() {
      if ("undefined" != typeof document && document.createElement) {
        var e = this.getInstance();
        if (t && "function" == typeof t.handleClickOutside && (this.__clickOutsideHandlerProp = t.handleClickOutside(e), "function" != typeof this.__clickOutsideHandlerProp)) throw Error("WrappedComponent: " + u + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
        this.componentNode = this.__getComponentNode(), this.props.disableOnClickOutside || this.enableOnClickOutside()
      }
    }, g.componentDidUpdate = function() {
      this.componentNode = this.__getComponentNode()
    }, g.componentWillUnmount = function() {
      this.disableOnClickOutside()
    }, g.render = function() {
      var t = this.props;
      t.excludeScrollbar;
      var n = l(t, ["excludeScrollbar"]);
      return e.prototype && e.prototype.isReactComponent ? n.ref = this.getRef : n.wrappedRef = this.getRef, n.disableOnClickOutside = this.disableOnClickOutside, n.enableOnClickOutside = this.enableOnClickOutside, (0, i.createElement)(e, n)
    }, s
  }(i.Component), n.displayName = "OnClickOutside(" + u + ")", n.defaultProps = {
    eventTypes: ["mousedown", "touchstart"],
    excludeScrollbar: t && t.excludeScrollbar || false,
    outsideClickIgnoreClass: E,
    preventDefault: false,
    stopPropagation: false
  }, n.getClass = function() {
    return e.getClass ? e.getClass() : e
  }, s
}
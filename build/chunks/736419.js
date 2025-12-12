/** Chunk was on web.js **/
/** chunk id: 736419, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk473749 = require("./473749.js"),
  Chunk293258 = require("./293258.js"),
  Chunk476400 = require("./476400.js"),
  o = require.n(Chunk476400),
  s = 0x3fffffff,
  l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : true !== require.g ? require.g : {};

function c() {
  var e = "__global_unique_id__";
  return l[module] = (l[module] || 0) + 1
}

function u(e, t) {
  return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
}

function d(e) {
  var t = [];
  return {
    on: function(e) {
      t.push(e)
    },
    off: function(e) {
      t = t.filter(function(t) {
        return t !== e
      })
    },
    get: function() {
      return e
    },
    set: function(n, r) {
      e = n, t.forEach(function(t) {
        return t(e, r)
      })
    }
  }
}

function f(e) {
  return Array.isArray(e) ? e[0] : e
}

function p(e, t) {
  var n, a, l = "__create-react-context-" + c() + "__",
    p = function(e) {
      function n() {
        var t;
        return t = e.apply(this, arguments) || this, t.emitter = d(t.props.value), t
      }(0, i.Z)(n, e);
      var r = n.prototype;
      return r.getChildContext = function() {
        var e;
        return (e = {})[l] = this.emitter, e
      }, r.componentWillReceiveProps = function(e) {
        if (this.props.value !== e.value) {
          var n, r = this.props.value,
            i = e.value;
          u(r, i) ? n = 0 : 0 != (n = ("function" == typeof t ? t(r, i) : s) | 0) && this.emitter.set(e.value, n)
        }
      }, r.render = function() {
        return this.props.children
      }, n
    }(r.Component);
  (n = {})[l] = o().object.isRequired, p.childContextTypes = n;
  var _ = function(t) {
    function n() {
      var e;
      return e = t.apply(this, arguments) || this, e.state = {
        value: e.getValue()
      }, e.onUpdate = function(t, n) {
        ((0 | e.observedBits) & n) != 0 && e.setState({
          value: e.getValue()
        })
      }, e
    }(0, i.Z)(n, t);
    var r = n.prototype;
    return r.componentWillReceiveProps = function(e) {
      var t = e.observedBits;
      this.observedBits = null == t ? s : t
    }, r.componentDidMount = function() {
      this.context[l] && this.context[l].on(this.onUpdate);
      var e = this.props.observedBits;
      this.observedBits = null == e ? s : e
    }, r.componentWillUnmount = function() {
      this.context[l] && this.context[l].off(this.onUpdate)
    }, r.getValue = function() {
      return this.context[l] ? this.context[l].get() : e
    }, r.render = function() {
      return f(this.props.children)(this.state.value)
    }, n
  }(r.Component);
  return (a = {})[l] = o().object, _.contextTypes = a, {
    Provider: p,
    Consumer: _
  }
}
let _ = Chunk473749.createContext || p
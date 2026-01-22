/** Chunk was on web.js **/
/** chunk id: 89229, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk299146 = require("./299146.js"),
  Chunk1139 = require("./1139.js"),
  Chunk527758 = require("./527758.js"),
  Chunk47312 = require("./47312.js");
require("./655972.js");
var Chunk64700 = require("./64700.js"),
  Chunk167782 = require("./167782.js"),
  Chunk51813 = require("./51813.js"),
  u = Object.values || function(e) {
    return Object.keys(e).map(function(t) {
      return e[t]
    })
  },
  d = {
    component: "div",
    childFactory: function(e) {
      return e
    }
  },
  f = function(e) {
    function t(t, n) {
      var r = e.call(this, t, n) || this,
        i = r.handleExited.bind((0, a.A)(r));
      return r.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: i,
        firstRender: true
      }, r
    }(0, s.A)(t, e);
    var n = t.prototype;
    return n.componentDidMount = function() {
      this.mounted = true, this.setState({
        contextValue: {
          isMounting: false
        }
      })
    }, n.componentWillUnmount = function() {
      this.mounted = false
    }, t.getDerivedStateFromProps = function(e, t) {
      var n = t.children,
        r = t.handleExited;
      return {
        children: t.firstRender ? (0, c.dw)(e, r) : (0, c.qX)(e, n, r),
        firstRender: false
      }
    }, n.handleExited = function(e, t) {
      var n = (0, c.p7)(this.props.children);
      e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
        var n = (0, i.A)({}, t.children);
        return delete n[e.key], {
          children: n
        }
      }))
    }, n.render = function() {
      var e = this.props,
        t = e.component,
        n = e.childFactory,
        i = (0, r.A)(e, ["component", "childFactory"]),
        a = this.state.contextValue,
        s = u(this.state.children).map(n);
      return (delete i.appear, delete i.enter, delete i.exit, null === t) ? o.createElement(l.A.Provider, {
        value: a
      }, s) : o.createElement(l.A.Provider, {
        value: a
      }, o.createElement(t, i, s))
    }, t
  }(Chunk64700.Component);
f.propTypes = {}, f.defaultProps = d;
let p = f
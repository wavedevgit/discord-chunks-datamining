/** Chunk was on web.js **/
/** chunk id: 757275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk791819 = require("./791819.js"),
  Chunk44837 = require("./44837.js"),
  Chunk455412 = require("./455412.js"),
  Chunk282253 = require("./282253.js");
require("./476400.js");
var Chunk473749 = require("./473749.js"),
  Chunk842297 = require("./842297.js"),
  Chunk445941 = require("./445941.js"),
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
        i = r.handleExited.bind((0, a.Z)(r));
      return r.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: i,
        firstRender: true
      }, r
    }(0, o.Z)(t, e);
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
        children: t.firstRender ? (0, c.Kg)(e, r) : (0, c.Rp)(e, n, r),
        firstRender: false
      }
    }, n.handleExited = function(e, t) {
      var n = (0, c.n)(this.props.children);
      e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState(function(t) {
        var n = (0, i.Z)({}, t.children);
        return delete n[e.key], {
          children: n
        }
      }))
    }, n.render = function() {
      var e = this.props,
        t = e.component,
        n = e.childFactory,
        i = (0, r.Z)(e, ["component", "childFactory"]),
        a = this.state.contextValue,
        o = u(this.state.children).map(n);
      return (delete i.appear, delete i.enter, delete i.exit, null === t) ? s.createElement(l.Z.Provider, {
        value: a
      }, o) : s.createElement(l.Z.Provider, {
        value: a
      }, s.createElement(t, i, o))
    }, t
  }(Chunk473749.Component);
f.propTypes = {}, f.defaultProps = d;
let _ = f
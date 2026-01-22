/** Chunk was on 19846 **/
/** chunk id: 134402, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  B6: () => A,
  Ix: () => m,
  W6: () => R,
  XZ: () => d,
  y: () => g
});
var Chunk238710 = require("./238710.js"),
  Chunk64700 = require("./64700.js");
require("./655972.js"), require("./830845.js");
var Chunk777211 = require("./777211.js"),
  Chunk258635 = require("./258635.js"),
  Chunk542113 = require("./542113.js"),
  Chunk353719 = require("./353719.js"),
  s = require.n(Chunk353719);
require("./53635.js");
var Chunk725664 = require("./725664.js"),
  Chunk833871 = require("./833871.js"),
  f = require.n(Chunk833871),
  v = function(t) {
    var n = (0, o.A)();
    return n.displayName = t, n
  },
  h = v("Router-History"),
  d = v("Router"),
  m = function(t) {
    function n(n) {
      var e;
      return (e = t.call(this, n) || this).state = {
        location: n.history.location
      }, e._isMounted = false, e._pendingLocation = null, n.staticContext || (e.unlisten = n.history.listen(function(t) {
        e._pendingLocation = t
      })), e
    }(0, r.A)(n, t), n.computeRootMatch = function(t) {
      return {
        path: "/",
        url: "/",
        params: {},
        isExact: "/" === t
      }
    };
    var e = n.prototype;
    return e.componentDidMount = function() {
      var t = this;
      this._isMounted = true, this.unlisten && this.unlisten(), this.props.staticContext || (this.unlisten = this.props.history.listen(function(n) {
        t._isMounted && t.setState({
          location: n
        })
      })), this._pendingLocation && this.setState({
        location: this._pendingLocation
      })
    }, e.componentWillUnmount = function() {
      this.unlisten && (this.unlisten(), this._isMounted = false, this._pendingLocation = null)
    }, e.render = function() {
      return i.createElement(d.Provider, {
        value: {
          history: this.props.history,
          location: this.state.location,
          match: n.computeRootMatch(this.state.location.pathname),
          staticContext: this.props.staticContext
        }
      }, i.createElement(h.Provider, {
        children: this.props.children || null,
        value: this.props.history
      }))
    }, n
  }(Chunk64700.Component);
Chunk64700.Component, Chunk64700.Component;
var y = {},
  C = 0;

function A(t, n) {
  true === n && (n = {}), ("string" == typeof n || Array.isArray(n)) && (n = {
    path: n
  });
  var e = n,
    r = e.path,
    i = e.exact,
    o = true !== i && i,
    a = e.strict,
    c = true !== a && a,
    u = e.sensitive,
    l = true !== u && u;
  return [].concat(r).reduce(function(n, e) {
    if (!e && "" !== e) return null;
    if (n) return n;
    var r = function(t, n) {
        var e = "" + n.end + n.strict + n.sensitive,
          r = y[e] || (y[e] = {});
        if (r[t]) return r[t];
        var i = [],
          o = {
            regexp: s()(t, i, n),
            keys: i
          };
        return C < 1e4 && (r[t] = o, C++), o
      }(e, {
        end: o,
        strict: c,
        sensitive: l
      }),
      i = r.regexp,
      a = r.keys,
      u = i.exec(t);
    if (!u) return null;
    var p = u[0],
      f = u.slice(1),
      v = t === p;
    return o && !v ? null : {
      path: e,
      url: "/" === e && "" === p ? "/" : p,
      isExact: v,
      params: a.reduce(function(t, n, e) {
        return t[n.name] = f[e], t
      }, {})
    }
  }, null)
}
Chunk64700.Component;

function g(t) {
  var n = "withRouter(" + (t.displayName || t.name) + ")",
    e = function(n) {
      var e = n.wrappedComponentRef,
        r = (0, l.A)(n, ["wrappedComponentRef"]);
      return i.createElement(d.Consumer, null, function(n) {
        return n || (0, a.A)(false), i.createElement(t, (0, c.A)({}, r, n, {
          ref: e
        }))
      })
    };
  return e.displayName = n, e.WrappedComponent = t, f()(e, t)
}
Chunk64700.Component, Chunk64700.Component;
var x = Chunk64700.useContext;

function R() {
  return x(h)
}
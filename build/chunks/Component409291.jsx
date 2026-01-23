/** Chunk was on 41031 **/
/** chunk id: 409291, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");

function n(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
class i extends(r = Chunk64700.PureComponent) {
  render() {
    var e, t;
    let a = this.props,
      {
        tag: r,
        children: l,
        eventName: i,
        data: o,
        track: c,
        trackOutboundLink: d
      } = a,
      u = function(e, t) {
        if (null == e) return {};
        var a, r, s, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (s = 0, a = Reflect.ownKeys(e); s < a.length; s++) r = a[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }
        if (l = function(e, t) {
            if (null == e) return {};
            var a, r, s = {},
              l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++) a = l[r], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (s[a] = e[a]);
            return s
          }(e, t), Object.getOwnPropertySymbols)
          for (s = 0, a = Object.getOwnPropertySymbols(e); s < a.length; s++) r = a[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(a, ["tag", "children", "eventName", "data", "track", "trackOutboundLink"]);
    return null == r ? null : (0, s.jsx)(r, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), r.forEach(function(t) {
          n(e, t, a[t])
        })
      }
      return e
    }({}, u), t = t = {
      onClick: this.handleClick,
      children: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        a.push.apply(a, r)
      }
      return a
    })(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
    }), e))
  }
  constructor(...e) {
    super(...e), n(this, "handleClick", e => {
      let {
        eventName: t,
        data: a,
        href: r,
        onClick: s,
        trackOutboundLink: l,
        track: n
      } = this.props;
      if (a.googleAnalytics && l && (null != r ? l(r) : console.warn("TrackClick.handleClick: No href provided when using data.googleAnalytics")), s && s(e), !t) returnfalse;
      n(t, a)
    })
  }
}
n(i, "defaultProps", {
  tag: "a",
  data: {}
})
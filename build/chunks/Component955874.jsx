/** Chunk was on 41031 **/
/** chunk id: 955874, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Y: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  n = require.n(Chunk503698),
  Chunk409291 = require("./409291.jsx"),
  Chunk829869 = require("./829869.jsx"),
  Chunk280617 = require("./280617.jsx"),
  Chunk855522 = require("./855522.js"),
  Chunk730555 = require("./730555.js");
let N = null;
class A extends Chunk64700.PureComponent {
  render() {
    let {
      token: e,
      className: t,
      onChangeLocale: a,
      mainContentId: r,
      mobileClassName: i,
      avoidRouter: d,
      authRedirectTo: A,
      openNavAriaLabel: p,
      hideNavAriaLabel: h,
      skipToContentLabel: b
    } = this.props;
    return null == N ? null : (0, s.jsxs)(l.Fragment, {
      children: [(0, s.jsx)(o.Q, {
        className: n()(u.q, t),
        TrackClick: N,
        token: e,
        avoidRouter: d,
        authRedirectTo: A,
        onChangeLocale: a,
        mainContentId: r,
        skipToContentLabel: b
      }), (0, s.jsx)(c.i, {
        className: n()(u.O, i),
        token: e,
        avoidRouter: d,
        TrackClick: N,
        onChangeLocale: a,
        openNavAriaLabel: p,
        hideNavAriaLabel: h
      })]
    })
  }
  constructor(e) {
    super(e), null != e.locale && d.A.setLocale(e.locale), N = t => (0, s.jsx)(i.A, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          s = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), s.forEach(function(t) {
          var s;
          s = a[t], t in e ? Object.defineProperty(e, t, {
            value: s,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = s
        })
      }
      return e
    }({
      track: e.track,
      trackOutboundLink: e.trackOutboundLink
    }, t))
  }
}
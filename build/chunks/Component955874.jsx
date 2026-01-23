/** Chunk was on 41031 **/
/** chunk id: 955874, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Y: () => N
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
let _ = null;
class N extends Chunk64700.PureComponent {
  render() {
    let {
      token: e,
      className: t,
      onChangeLocale: a,
      mainContentId: l,
      mobileClassName: i,
      avoidRouter: d,
      authRedirectTo: N,
      openNavAriaLabel: A,
      hideNavAriaLabel: p,
      skipToContentLabel: h
    } = this.props;
    return null == _ ? null : (0, r.jsxs)(s.Fragment, {
      children: [(0, r.jsx)(o.Q, {
        className: n()(u.q, t),
        TrackClick: _,
        token: e,
        avoidRouter: d,
        authRedirectTo: N,
        onChangeLocale: a,
        mainContentId: l,
        skipToContentLabel: h
      }), (0, r.jsx)(c.i, {
        className: n()(u.O, i),
        token: e,
        avoidRouter: d,
        TrackClick: _,
        onChangeLocale: a,
        openNavAriaLabel: A,
        hideNavAriaLabel: p
      })]
    })
  }
  constructor(e) {
    super(e), null != e.locale && d.A.setLocale(e.locale), _ = t => (0, r.jsx)(i.A, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = a[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({
      track: e.track,
      trackOutboundLink: e.trackOutboundLink
    }, t))
  }
}
/** Chunk was on 87626 **/
/** chunk id: 231262, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  h: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk794010 = require("./794010.jsx"),
  Chunk653371 = require("./653371.jsx"),
  Chunk388755 = require("./388755.jsx"),
  Chunk330711 = require("./330711.js"),
  Chunk61450 = require("./61450.js");
let N = null;
class m extends Chunk473749.PureComponent {
  render() {
    let {
      token: e,
      className: t,
      onChangeLocale: a,
      mainContentId: s,
      mobileClassName: i,
      avoidRouter: d,
      authRedirectTo: m,
      openNavAriaLabel: f,
      hideNavAriaLabel: p,
      skipToContentLabel: h
    } = this.props;
    return null == N ? null : (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk653371.a, {
        className: l()(Chunk61450.desktopHeader, exports),
        TrackClick: N,
        token: module,
        avoidRouter: Chunk330711,
        authRedirectTo: m,
        onChangeLocale: require,
        mainContentId: Chunk120356,
        skipToContentLabel: h
      }), (0, Chunk54381.jsx)(Chunk388755.D, {
        className: l()(Chunk61450.mobileHeader, Chunk794010),
        token: module,
        avoidRouter: Chunk330711,
        TrackClick: N,
        onChangeLocale: require,
        openNavAriaLabel: f,
        hideNavAriaLabel: p
      })]
    })
  }
  constructor(e) {
    super(e), null != e.locale && d.Z.setLocale(e.locale), N = t => (0, n.jsx)(i.Z, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = a[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      track: e.track,
      trackOutboundLink: e.trackOutboundLink
    }, t))
  }
}
/** Chunk was on 41031 **/
/** chunk id: 554238, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk341856 = require("./341856.jsx"),
  Chunk955874 = require("./955874.jsx"),
  Chunk560958 = require("./560958.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk817281 = require("./817281.js"),
  Chunk773669 = require("./773669.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk58682 = require("./58682.js");
class p extends Chunk64700.Component {
  shouldScrollToTop(e) {
    let {
      location: t
    } = e;
    return t.pathname.startsWith(_.BVt.APPLICATION_STORE_LISTING_SKU("")) || t.pathname.startsWith(_.BVt.APPLICATION_STORE_LISTING_APPLICATION(""))
  }
  render() {
    let {
      location: e,
      className: t,
      render: a,
      locale: o
    } = this.props;
    return (0, r.jsx)(i.A, {
      className: t,
      shouldScrollToTop: this.shouldScrollToTop,
      render: (t, i) => (0, r.jsxs)(s.Fragment, {
        children: [(0, r.jsx)(n.Y, {
          avoidRouter: true,
          locale: o,
          authRedirectTo: e.pathname,
          track: u.default.track,
          className: A.Kn,
          onChangeLocale: this.handleHeaderLocaleChange,
          mobileClassName: A.Kn,
          openNavAriaLabel: N.intl.string(N.t.Fs9k3K),
          hideNavAriaLabel: N.intl.string(N.t.AbfyHI),
          skipToContentLabel: N.intl.string(N.t["18gavA"])
        }), a(t, i), (0, r.jsx)(l.w, {
          locale: o,
          authRedirectTo: e.pathname,
          avoidRouter: true,
          track: u.default.track,
          className: A.wn
        })]
      })
    })
  }
  constructor(...e) {
    super(...e),
      function(e, t, a) {
        t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      }(this, "handleHeaderLocaleChange", e => {
        e !== this.props.locale && c.Ay.overrideLocale(e)
      })
  }
}
let h = Chunk311907.Ay.connectStores([Chunk773669.default], () => ({
  locale: d.default.locale
}))(p)
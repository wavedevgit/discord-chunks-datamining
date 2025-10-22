/** Chunk was on 87626 **/
/** chunk id: 496691, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk548668 = require("./548668.jsx"),
  Chunk231262 = require("./231262.jsx"),
  Chunk501522 = require("./501522.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk153867 = require("./153867.js"),
  Chunk706454 = require("./706454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk430355 = require("./430355.js");
class p extends Chunk647438.Component {
  shouldScrollToTop(e) {
    let {
      location: t
    } = e;
    return t.pathname.startsWith(_.Z5c.APPLICATION_STORE_LISTING_SKU("")) || t.pathname.startsWith(_.Z5c.APPLICATION_STORE_LISTING_APPLICATION(""))
  }
  render() {
    let {
      location: e,
      className: t,
      render: a,
      locale: o
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk501522.Z, {
      className: exports,
      shouldScrollToTop: this.shouldScrollToTop,
      render: (t, i) => (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)(l.h, {
          avoidRouter: true,
          locale: o,
          authRedirectTo: e.pathname,
          track: u.default.track,
          className: m.marketingHeader,
          onChangeLocale: this.handleHeaderLocaleChange,
          mobileClassName: m.marketingHeader,
          openNavAriaLabel: N.intl.string(N.t.Fs9k3K),
          hideNavAriaLabel: N.intl.string(N.t.AbfyHI),
          skipToContentLabel: N.intl.string(N.t["18gavA"])
        }), a(t, i), (0, n.jsx)(s.$, {
          locale: o,
          authRedirectTo: e.pathname,
          avoidRouter: true,
          track: u.default.track,
          className: m.marketingFooter
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
        e !== this.props.locale && c.ZP.overrideLocale(e)
      })
  }
}
let h = Chunk442837.ZP.connectStores([Chunk706454.default], () => ({
  locale: Chunk706454.default.locale
}))(p)
/** Chunk was on 87626 **/
/** chunk id: 496691, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk548668 = require("./548668.js"),
  Chunk231262 = require("./231262.jsx"),
  Chunk501522 = require("./501522.js"),
  Chunk442837 = require("./442837.js"),
  Chunk153867 = require("./153867.js"),
  Chunk706454 = require("./706454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk681205 = require("./681205.js");
class p extends Chunk73800.Component {
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
    return <Chunk501522.Z className={exports} shouldScrollToTop={this.shouldScrollToTop} render={(t, i) => (0, n.jsxs)(r.Fragment, {
        children: [(0, n.jsx)(l.h, {
          avoidRouter: true,
          locale: o,
          authRedirectTo: e.pathname,
          track: u.default.track,
          className: m.marketingHeader,
          onChangeLocale: this.handleHeaderLocaleChange,
          mobileClassName: m.marketingHeader,
          openNavAriaLabel: N.intl.string(N.t.Fs9k3N),
          hideNavAriaLabel: N.intl.string(N.t.AbfyHB),
          skipToContentLabel: N.intl.string(N.t["18gavL"])
        }), a(t, i), (0, n.jsx)(s.$, {
          locale: o,
          authRedirectTo: e.pathname,
          avoidRouter: true,
          track: u.default.track,
          className: m.marketingFooter
        })]
      })} />
  }
  constructor(...e) {
    var t, a;
    super(...e), t = "handleHeaderLocaleChange", a = e => {
      e !== this.props.locale && c.ZP.overrideLocale(e)
    }, t in this ? Object.defineProperty(this, t, {
      value: a,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = a
  }
}
let h = Chunk442837.ZP.connectStores([Chunk706454.default], () => ({
  locale: Chunk706454.default.locale
}))(p)
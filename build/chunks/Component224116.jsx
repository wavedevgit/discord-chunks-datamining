/** Chunk was on 99681 **/
/** chunk id: 224116, original params: e,r,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk758879 = require("./758879.js"),
  Chunk397927 = require("./397927.js"),
  Chunk626584 = require("./626584.js"),
  Chunk53505 = require("./53505.js"),
  Chunk877062 = require("./877062.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk599098 = require("./599098.js");
let _ = [{
    id: "discord",
    getName: () => m.intl.string(m.t.uON9Ui),
    url: (0, Chunk53505.SU)()
  }, {
    id: "chrome",
    getName: () => m.intl.string(m.t["80Ut6e"]),
    url: "https://www.google.com/chrome/browser/desktop/"
  }, {
    id: "firefox",
    getName: () => m.intl.string(m.t.LVbA5X),
    url: "https://www.mozilla.org/en-US/firefox/new/?scene=2"
  }],
  h = {
    discord: "browserDiscord",
    firefox: "browserFirefox",
    chrome: "browserChrome"
  };
class x extends Chunk64700.Component {
  render() {
    let e, {
      id: r,
      getName: s,
      url: o
    } = this.props.browser;
    return e = null != o ? (0, t.jsx)(c.MzZ, {
      className: p.btn,
      href: o,
      children: m.intl.string(m.t["1WjMbC"])
    }) : (0, t.jsx)(n.N_, {
      className: p.btn,
      to: b.BVt.APPS,
      children: m.intl.string(m.t["1WjMbC"])
    }), (0, t.jsxs)("li", {
      className: p.browserItem,
      children: [(0, t.jsx)("div", {
        className: a()(p.browserItemText, p.browser, p[h[r]])
      }), (0, t.jsx)("div", {
        className: p.browserItemText,
        children: s()
      }), e]
    })
  }
}
class u extends Chunk64700.Component {
  componentDidMount() {
    w.A.launch("discord://" + this.props.location.pathname, e => {
      new l.A("UnsupportedBrowser").log("discord://", e)
    })
  }
  render() {
    let e = _.map(e => (0, t.jsx)(x, {
      browser: e
    }, e.id));
    return (0, t.jsx)("div", {
      className: p.unsupportedBrowser,
      children: (0, t.jsxs)("div", {
        className: p.wrap,
        children: [(0, t.jsx)(c.H, {
          className: p.title,
          children: m.intl.string(m.t["3h+n+8"])
        }), (0, t.jsx)("p", {
          className: p.message,
          children: m.intl.string(m.t.yNDLDL)
        }), (0, t.jsx)("ul", {
          className: p.browserList,
          children: e
        })]
      })
    })
  }
}
let g = u
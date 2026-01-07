/** Chunk was on 47620 **/
/** chunk id: 576184, original params: e,r,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk319498 = require("./319498.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk361207 = require("./361207.js"),
  Chunk954824 = require("./954824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk963557 = require("./963557.js");
let h = [{
    id: "discord",
    getName: () => m.intl.string(m.t.uON9Ui),
    url: (0, Chunk361207.t3)()
  }, {
    id: "chrome",
    getName: () => m.intl.string(m.t["80Ut6e"]),
    url: "https://www.google.com/chrome/browser/desktop/"
  }, {
    id: "firefox",
    getName: () => m.intl.string(m.t.LVbA5X),
    url: "https://www.mozilla.org/en-US/firefox/new/?scene=2"
  }],
  u = {
    discord: "browserDiscord",
    firefox: "browserFirefox",
    chrome: "browserChrome"
  };
class x extends Chunk473749.Component {
  render() {
    let e, {
      id: r,
      getName: s,
      url: o
    } = this.props.browser;
    return e = null != o ? (0, t.jsx)(c.eee, {
      className: p.btn,
      href: o,
      children: m.intl.string(m.t["1WjMbC"])
    }) : (0, t.jsx)(n.rU, {
      className: p.btn,
      to: b.Z5c.APPS,
      children: m.intl.string(m.t["1WjMbC"])
    }), (0, t.jsxs)("li", {
      className: p.browserItem,
      children: [(0, t.jsx)("div", {
        className: i()(p.browserItemText, p.browser, p[u[r]])
      }), (0, t.jsx)("div", {
        className: p.browserItemText,
        children: s()
      }), e]
    })
  }
}
class g extends Chunk473749.Component {
  componentDidMount() {
    w.Z.launch("discord://" + this.props.location.pathname, e => {
      new l.Z("UnsupportedBrowser").log("discord://", e)
    })
  }
  render() {
    let e = h.map(e => (0, t.jsx)(x, {
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
let N = g
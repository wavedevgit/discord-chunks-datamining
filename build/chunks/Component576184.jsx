/** Chunk was on 47620 **/
/** chunk id: 576184, original params: e,r,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk799899 = require("./799899.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk361207 = require("./361207.js"),
  Chunk954824 = require("./954824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk827414 = require("./827414.js");
let h = [{
    id: "discord",
    getName: () => Chunk388032.intl.string(Chunk388032.t.uON9Ui),
    url: (0, Chunk361207.t3)()
  }, {
    id: "chrome",
    getName: () => Chunk388032.intl.string(Chunk388032.t["80Ut6e"]),
    url: "https://www.google.com/chrome/browser/desktop/"
  }, {
    id: "firefox",
    getName: () => Chunk388032.intl.string(Chunk388032.t.LVbA5X),
    url: "https://www.mozilla.org/en-US/firefox/new/?scene=2"
  }],
  _ = {
    discord: "browserDiscord",
    firefox: "browserFirefox",
    chrome: "browserChrome"
  };
class u extends Chunk647438.Component {
  render() {
    let e, {
      id: r,
      getName: s,
      url: o
    } = this.props.browser;
    return e = null != Chunk647438 ? (0, Chunk951288.jsx)(Chunk481060.Anchor, {
      className: Chunk827414.btn,
      href: Chunk647438,
      children: Chunk388032.intl.string(Chunk388032.t["1WjMbC"])
    }) : (0, Chunk951288.jsx)(Chunk799899.rU, {
      className: Chunk827414.btn,
      to: Chunk981631.Z5c.APPS,
      children: Chunk388032.intl.string(Chunk388032.t["1WjMbC"])
    }), (0, Chunk951288.jsxs)("li", {
      className: Chunk827414.browserItem,
      children: [(0, Chunk951288.jsx)("div", {
        className: n()(Chunk827414.browserItemText, Chunk827414.browser, Chunk827414[_[exports]])
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk827414.browserItemText,
        children: require()
      }), module]
    })
  }
}
class x extends Chunk647438.Component {
  componentDidMount() {
    Chunk954824.Z.launch("discord://" + this.props.location.pathname, e => {
      new l.Z("UnsupportedBrowser").log("discord://", e)
    })
  }
  render() {
    let e = h.map(e => (0, t.jsx)(u, {
      browser: e
    }, e.id));
    return (0, Chunk951288.jsx)("div", {
      className: Chunk827414.unsupportedBrowser,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk827414.wrap,
        children: [(0, Chunk951288.jsx)(Chunk481060.H, {
          className: Chunk827414.title,
          children: Chunk388032.intl.string(Chunk388032.t["3h+n+8"])
        }), (0, Chunk951288.jsx)("p", {
          className: Chunk827414.message,
          children: Chunk388032.intl.string(Chunk388032.t.yNDLDL)
        }), (0, Chunk951288.jsx)("ul", {
          className: Chunk827414.browserList,
          children: module
        })]
      })
    })
  }
}
let g = x
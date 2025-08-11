/** Chunk was on 47620 **/
/** chunk id: 576184, original params: e,r,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk688642 = require("./688642.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk361207 = require("./361207.js"),
  Chunk954824 = require("./954824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk764406 = require("./764406.js");
let h = [{
    id: "discord",
    getName: () => Chunk388032.intl.string(Chunk388032.t.uON9Ul),
    url: (0, Chunk361207.t3)()
  }, {
    id: "chrome",
    getName: () => Chunk388032.intl.string(Chunk388032.t["80Ut6e"]),
    url: "https://www.google.com/chrome/browser/desktop/"
  }, {
    id: "firefox",
    getName: () => Chunk388032.intl.string(Chunk388032.t.LVbA5e),
    url: "https://www.mozilla.org/en-US/firefox/new/?scene=2"
  }],
  _ = {
    discord: "browserDiscord",
    firefox: "browserFirefox",
    chrome: "browserChrome"
  };
class u extends Chunk73800.Component {
  render() {
    let e, {
      id: r,
      getName: s,
      url: o
    } = this.props.browser;
    return e = null != Chunk73800 ? <Chunk481060.eee className={Chunk764406.btn} href={Chunk73800}>{Chunk388032.intl.string(Chunk388032.t["1WjMbG"])}</Chunk481060.eee> : <Chunk688642.rU className={Chunk764406.btn} to={Chunk981631.Z5c.APPS}>{Chunk388032.intl.string(Chunk388032.t["1WjMbG"])}</Chunk688642.rU>, <li className={Chunk764406.browserItem}>{<div className={n()(Chunk764406.browserItemText, Chunk764406.browser, Chunk764406[_[exports]])} />}{<div className={Chunk764406.browserItemText}>{require()}</div>}{module}</li>
  }
}
class x extends Chunk73800.Component {
  componentDidMount() {
    Chunk954824.Z.launch("discord://" + this.props.location.pathname, e => {
      new l.Z("UnsupportedBrowser").log("discord://", e)
    })
  }
  render() {
    let e = h.map(e => <u browser={e} />);
    return <div className={Chunk764406.unsupportedBrowser}><div className={Chunk764406.wrap}>{<Chunk481060.H className={Chunk764406.title}>{Chunk388032.intl.string(Chunk388032.t["3h+n+/"])}</Chunk481060.H>}{<p className={Chunk764406.message}>{Chunk388032.intl.string(Chunk388032.t.yNDLDA)}</p>}{<ul className={Chunk764406.browserList}>{module}</ul>}</div></div>
  }
}
let g = x
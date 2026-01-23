/** Chunk was on 41031 **/
/** chunk id: 709808, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  B: () => N
}), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  n = require.n(Chunk503698),
  Chunk946015 = require("./946015.jsx"),
  Chunk489569 = require("./489569.js"),
  Chunk563853 = require("./563853.js"),
  Chunk855522 = require("./855522.js"),
  Chunk128262 = require("./128262.js");

function _(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
class N extends Chunk64700.PureComponent {
  componentDidMount() {
    this.callChangeLocale(d.A.getLocale())
  }
  render() {
    let {
      isOpen: e,
      languages: t,
      current: s
    } = this.state, {
      className: l
    } = this.props, d = null;
    return null != t && (d = t.sort((e, t) => e.code < t.code ? false : +(e.code > t.code)).map(e => {
      let t = function(e) {
          try {
            return a(579832)("./".concat(e, ".png"))
          } catch (e) {
            return null
          }
        }(e.code),
        l = () => this.setLocale(e.code);
      return null == t ? null : (0, r.jsxs)("li", {
        className: (0, o.t)(u, "locale", null != s && e.code === s.code ? "Current" : null),
        onClick: l,
        children: [(0, r.jsx)("img", {
          className: u.localeImage,
          src: t,
          alt: e.name
        }), e.name]
      }, e.code)
    })), (0, r.jsxs)("div", {
      className: n()(u.localePicker, l),
      onMouseEnter: this.open,
      onMouseLeave: this.close,
      onClick: this.toggle,
      children: [(0, r.jsxs)(i.s, {
        align: i.s.Align.CENTER,
        className: (0, o.t)(u, "opener", e ? "Open" : null),
        children: [(0, r.jsx)("span", {
          className: u.line
        }), (0, r.jsx)("img", {
          className: u.localeIcon,
          src: c.T.ICON_TRANSLATE,
          alt: "Choose Locale"
        }), (0, r.jsx)("img", {
          className: u.arrowIcon,
          src: c.T.ICON_ARROW_DOWN,
          alt: "Open Locale"
        })]
      }), (0, r.jsx)("ul", {
        className: (0, o.t)(u, "localeList", e ? "Open" : "Closed"),
        children: d
      })]
    })
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      languages: d.A.getLanguages().filter(e => e.enabled),
      current: d.A.getLocaleInfo(),
      isOpen: false
    }), _(this, "setLocale", e => {
      null != d.A && (d.A.setLocale(e), this.callChangeLocale(e))
    }), _(this, "callChangeLocale", e => {
      let {
        onChange: t
      } = this.props;
      null != t && t(e)
    }), _(this, "open", () => {
      this.setState({
        isOpen: true
      })
    }), _(this, "close", () => {
      this.setState({
        isOpen: false
      })
    }), _(this, "toggle", () => {
      let {
        isOpen: e
      } = this.state;
      this.setState({
        isOpen: !e
      })
    })
  }
}
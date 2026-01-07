/** Chunk was on 87626 **/
/** chunk id: 643103, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  p: () => m
}), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk435935 = require("./435935.jsx"),
  Chunk982905 = require("./982905.js"),
  Chunk431138 = require("./431138.js"),
  Chunk330711 = require("./330711.js"),
  Chunk146371 = require("./146371.js");

function N(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
class m extends Chunk473749.PureComponent {
  componentDidMount() {
    this.callChangeLocale(d.Z.getLocale())
  }
  render() {
    let {
      isOpen: e,
      languages: t,
      current: r
    } = this.state, {
      className: s
    } = this.props, d = null;
    return null != t && (d = t.sort((e, t) => e.code < t.code ? false : +(e.code > t.code)).map(e => {
      let t = function(e) {
          try {
            return a(621287)("./".concat(e, ".png"))
          } catch (e) {
            return null
          }
        }(e.code),
        s = () => this.setLocale(e.code);
      return null == t ? null : (0, n.jsxs)("li", {
        className: (0, o.l)(u, "locale", null != r && e.code === r.code ? "Current" : null),
        onClick: s,
        children: [(0, n.jsx)("img", {
          className: u.localeImage,
          src: t,
          alt: e.name
        }), e.name]
      }, e.code)
    })), (0, n.jsxs)("div", {
      className: l()(u.localePicker, s),
      onMouseEnter: this.open,
      onMouseLeave: this.close,
      onClick: this.toggle,
      children: [(0, n.jsxs)(i.k, {
        align: i.k.Align.CENTER,
        className: (0, o.l)(u, "opener", e ? "Open" : null),
        children: [(0, n.jsx)("span", {
          className: u.line
        }), (0, n.jsx)("img", {
          className: u.localeIcon,
          src: c.r.ICON_TRANSLATE,
          alt: "Choose Locale"
        }), (0, n.jsx)("img", {
          className: u.arrowIcon,
          src: c.r.ICON_ARROW_DOWN,
          alt: "Open Locale"
        })]
      }), (0, n.jsx)("ul", {
        className: (0, o.l)(u, "localeList", e ? "Open" : "Closed"),
        children: d
      })]
    })
  }
  constructor(...e) {
    super(...e), N(this, "state", {
      languages: d.Z.getLanguages().filter(e => e.enabled),
      current: d.Z.getLocaleInfo(),
      isOpen: false
    }), N(this, "setLocale", e => {
      null != d.Z && (d.Z.setLocale(e), this.callChangeLocale(e))
    }), N(this, "callChangeLocale", e => {
      let {
        onChange: t
      } = this.props;
      null != t && t(e)
    }), N(this, "open", () => {
      this.setState({
        isOpen: true
      })
    }), N(this, "close", () => {
      this.setState({
        isOpen: false
      })
    }), N(this, "toggle", () => {
      let {
        isOpen: e
      } = this.state;
      this.setState({
        isOpen: !e
      })
    })
  }
}
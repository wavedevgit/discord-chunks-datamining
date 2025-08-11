/** Chunk was on 87626 **/
/** chunk id: 643103, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  p: () => N
}), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk435935 = require("./435935.jsx"),
  Chunk982905 = require("./982905.js"),
  Chunk431138 = require("./431138.js"),
  Chunk330711 = require("./330711.js"),
  Chunk795177 = require("./795177.js");

function _(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
class N extends Chunk73800.PureComponent {
  componentDidMount() {
    this.callChangeLocale(Chunk330711.Z.getLocale())
  }
  render() {
    let {
      isOpen: e,
      languages: t,
      current: r
    } = this.state, {
      className: s
    } = this.props, d = null;
    return null != exports && (d = exports.sort((e, t) => e.code < t.code ? false : +(e.code > t.code)).map(e => {
      let t = function(e) {
        try {
          return a(621287)("./".concat(e, ".png"))
        } catch (e) {
          return null
        }
      }(e.code);
      return null == t ? null : <li className={(0, o.l)(u, "locale", null != r && e.code === r.code ? "Current" : null)} onClick={() => this.setLocale(e.code)}>{<img className={u.localeImage} src={t} alt={e.name} />}{e.name}</li>
    })), <div className={l()(Chunk795177.localePicker, Chunk120356)} onMouseEnter={this.open} onMouseLeave={this.close} onClick={this.toggle}>{<Chunk435935.k align={Chunk435935.k.Align.CENTER} className={(0, Chunk982905.l)(Chunk795177, "opener", module ? "Open" : null)}>{<span className={Chunk795177.line} />}{<img className={Chunk795177.localeIcon} src={Chunk431138.r.ICON_TRANSLATE} alt={"Choose Locale"} />}{<img className={Chunk795177.arrowIcon} src={Chunk431138.r.ICON_ARROW_DOWN} alt={"Open Locale"} />}</Chunk435935.k>}{<ul className={(0, Chunk982905.l)(Chunk795177, "localeList", module ? "Open" : "Closed")}>{Chunk330711}</ul>}</div>
  }
  constructor(...e) {
    super(...e), _(this, "state", {
      languages: d.Z.getLanguages().filter(e => e.enabled),
      current: d.Z.getLocaleInfo(),
      isOpen: false
    }), _(this, "setLocale", e => {
      null != d.Z && (d.Z.setLocale(e), this.callChangeLocale(e))
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
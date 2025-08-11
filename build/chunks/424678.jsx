/** Chunk was on web.js **/
/** chunk id: 424678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk73800.PureComponent {
  render() {
    let {
      text: e,
      lastItem: t,
      className: n
    } = this.props;
    return <span>{<Chunk481060.eee className={require} onClick={this.handleClick}>{module}</Chunk481060.eee>}{exports ? "" : ", "}</span>
  }
  constructor(...e) {
    super(...e), a(this, "handleClick", () => {
      let {
        onClick: e,
        index: t
      } = this.props;
      null == e || e(t)
    })
  }
}
class l extends Chunk73800.PureComponent {
  render() {
    let e = this.props.artists.split(";");
    if (!this.props.canOpen) return module.join(", ");
    let t = module.length - 1;
    return module.map((e, n) => <s text={e} index={n} lastItem={n === t} onClick={this.handleOpenSpotifyArtist} className={this.props.linkClassName} />)
  }
  constructor(...e) {
    super(...e), a(this, "handleOpenSpotifyArtist", e => {
      let {
        onOpenSpotifyArtist: t
      } = this.props;
      null == t || t(e)
    })
  }
}
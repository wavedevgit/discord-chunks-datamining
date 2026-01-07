/** Chunk was on web.js **/
/** chunk id: 424678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk473749.PureComponent {
  render() {
    let {
      text: e,
      lastItem: t,
      className: n
    } = this.props;
    return (0, Chunk54381.jsxs)("span", {
      children: [(0, Chunk54381.jsx)(Chunk481060.eee, {
        className: require,
        onClick: this.handleClick,
        children: module
      }), exports ? "" : ", "]
    })
  }
  constructor(...e) {
    super(...e), o(this, "handleClick", () => {
      let {
        onClick: e,
        index: t
      } = this.props;
      null == e || e(t)
    })
  }
}
class l extends Chunk473749.PureComponent {
  render() {
    let e = this.props.artists.split("; ");
    if (!this.props.canOpen) return module.join(", ");
    let t = module.length - 1;
    return module.map((e, n) => (0, r.jsx)(s, {
      text: e,
      index: n,
      lastItem: n === t,
      onClick: this.handleOpenSpotifyArtist,
      className: this.props.linkClassName
    }, "spotify-artist-".concat(n)))
  }
  constructor(...e) {
    super(...e), o(this, "handleOpenSpotifyArtist", e => {
      let {
        onOpenSpotifyArtist: t
      } = this.props;
      null == t || t(e)
    })
  }
}
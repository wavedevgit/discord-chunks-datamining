/** Chunk was on web.js **/
/** chunk id: 763758, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends Chunk64700.PureComponent {
  render() {
    let {
      text: e,
      lastItem: t,
      className: n
    } = this.props;
    return (0, r.jsxs)("span", {
      children: [(0, r.jsx)(a.MzZ, {
        className: n,
        onClick: this.handleClick,
        children: e
      }), t ? "" : ", "]
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
class l extends Chunk64700.PureComponent {
  render() {
    let e = this.props.artists.split("; ");
    if (!this.props.canOpen) return e.join(", ");
    let t = e.length - 1;
    return e.map((e, n) => (0, r.jsx)(s, {
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
/** Chunk was on web.js **/
/** chunk id: 497321, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk230711 = require("./230711.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk184744 = require("./184744.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class h extends(r = Chunk73800.Component) {
  render() {
    return <div className={Chunk184744.streamerModeEnabled}>{<div className={Chunk184744.streamerModeEnabledImage} />}{<Chunk481060.P3F className={s()(Chunk184744.streamerModeEnabledBtn, {
          [Chunk184744.disabled]: this.props.disableButton
        })} onClick={this.handleClick}>{Chunk388032.intl.string(Chunk388032.t.Br1ls7)}</Chunk481060.P3F>}</div>
  }
  constructor(...e) {
    super(...e), p(this, "handleClick", () => {
      this.props.disableButton || ((0, c.jN)(d.S9g.USER_SETTINGS), u.Z.setSection(d.oAB.STREAMER_MODE))
    })
  }
}
p(h, "defaultProps", {
  disableButton: false
});
let m = h
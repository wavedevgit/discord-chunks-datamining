/** Chunk was on web.js **/
/** chunk id: 693728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk171076 = require("./171076.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var f = function(e) {
  return e.SINGLE_AVATAR = "1", e.MULTIPLE_AVATAR = "2", e
}(f || {});
let _ = {
  [Chunk481060.EFr.SIZE_32]: Chunk171076.avatarSmall,
  [Chunk481060.EFr.SIZE_40]: Chunk171076.avatarLarge
};
class p extends(r = Chunk73800.Component) {
  render() {
    let {
      type: e,
      avatarSize: t,
      className: n,
      childrenClassName: r,
      doNotAnimate: o
    } = this.props;
    return "2" === module ? <div className={s()(Chunk171076.multiplePlaceholder, Chunk171076.multiplePlaceholderAnimated, require)}>{<Chunk600164.Z>{<div className={s()(Chunk171076.placeholderAvatar, _[exports], Chunk171076.avatarMasked)} />}{<div className={s()(Chunk171076.placeholderAvatar, _[exports], Chunk171076.avatarMasked)} />}{<div className={s()(Chunk171076.placeholderAvatar, _[exports])} />}</Chunk600164.Z>}{<Chunk600164.Z grow={1} className={Chunk171076.mulitplePlaceholderUsername} style={{
          maxWidth: this.placeholderMaxWidth
        }} />}</div> : <Chunk600164.Z className={s()(Chunk171076.placeholder, !Chunk73800 && Chunk171076.placeholderAnimated, require)}>{<div className={s()(Chunk171076.placeholderAvatar, _[exports], r)} />}{<Chunk600164.Z grow={1} className={s()(Chunk171076.placeholderUsername, r)} style={{
          maxWidth: this.placeholderMaxWidth
        }} />}</Chunk600164.Z>
  }
  constructor(...e) {
    super(...e), d(this, "placeholderMaxWidth", "".concat(Math.floor(40 * Math.random()) + 40, "%"))
  }
}
d(p, "defaultProps", {
  type: "1"
}), d(p, "Types", f);
let h = p
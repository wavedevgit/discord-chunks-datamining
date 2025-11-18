/** Chunk was on web.js **/
/** chunk id: 693728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk918746 = require("./918746.js");

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
  [Chunk481060.EFr.SIZE_32]: Chunk918746.avatarSmall,
  [Chunk481060.EFr.SIZE_40]: Chunk918746.avatarLarge
};
class p extends(r = Chunk473749.Component) {
  render() {
    let {
      type: e,
      avatarSize: t,
      className: n,
      childrenClassName: r,
      doNotAnimate: a
    } = this.props;
    return "2" === module ? (0, Chunk54381.jsxs)("div", {
      className: s()(Chunk918746.multiplePlaceholder, Chunk918746.multiplePlaceholderAnimated, require),
      children: [(0, Chunk54381.jsxs)(Chunk600164.Z, {
        children: [(0, Chunk54381.jsx)("div", {
          className: s()(Chunk918746.placeholderAvatar, _[exports], Chunk918746.avatarMasked)
        }), (0, Chunk54381.jsx)("div", {
          className: s()(Chunk918746.placeholderAvatar, _[exports], Chunk918746.avatarMasked)
        }), (0, Chunk54381.jsx)("div", {
          className: s()(Chunk918746.placeholderAvatar, _[exports])
        })]
      }), (0, Chunk54381.jsx)(Chunk600164.Z, {
        grow: 1,
        className: Chunk918746.mulitplePlaceholderUsername,
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    }) : (0, Chunk54381.jsxs)(Chunk600164.Z, {
      className: s()(Chunk918746.placeholder, !Chunk473749 && Chunk918746.placeholderAnimated, require),
      children: [(0, Chunk54381.jsx)("div", {
        className: s()(Chunk918746.placeholderAvatar, _[exports], r)
      }), (0, Chunk54381.jsx)(Chunk600164.Z, {
        grow: 1,
        className: s()(Chunk918746.placeholderUsername, r),
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    })
  }
  constructor(...e) {
    super(...e), d(this, "placeholderMaxWidth", "".concat(Math.floor(40 * Math.random()) + 40, "%"))
  }
}
d(p, "defaultProps", {
  type: "1"
}), d(p, "Types", f);
let h = p
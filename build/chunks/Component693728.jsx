/** Chunk was on web.js **/
/** chunk id: 693728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk173680 = require("./173680.js");

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
let p = {
  [Chunk481060.EFr.SIZE_32]: Chunk173680.avatarSmall,
  [Chunk481060.EFr.SIZE_40]: Chunk173680.avatarLarge
};
class _ extends(r = Chunk473749.Component) {
  render() {
    let {
      type: e,
      avatarSize: t,
      className: n,
      childrenClassName: r,
      doNotAnimate: a
    } = this.props;
    return "2" === module ? (0, Chunk54381.jsxs)("div", {
      className: s()(Chunk173680.multiplePlaceholder, Chunk173680.multiplePlaceholderAnimated, require),
      children: [(0, Chunk54381.jsxs)(Chunk600164.Z, {
        children: [(0, Chunk54381.jsx)("div", {
          className: s()(Chunk173680.placeholderAvatar, p[exports], Chunk173680.avatarMasked)
        }), (0, Chunk54381.jsx)("div", {
          className: s()(Chunk173680.placeholderAvatar, p[exports], Chunk173680.avatarMasked)
        }), (0, Chunk54381.jsx)("div", {
          className: s()(Chunk173680.placeholderAvatar, p[exports])
        })]
      }), (0, Chunk54381.jsx)(Chunk600164.Z, {
        grow: 1,
        className: Chunk173680.mulitplePlaceholderUsername,
        style: {
          maxWidth: this.placeholderMaxWidth
        }
      })]
    }) : (0, Chunk54381.jsxs)(Chunk600164.Z, {
      className: s()(Chunk173680.placeholder, !Chunk473749 && Chunk173680.placeholderAnimated, require),
      children: [(0, Chunk54381.jsx)("div", {
        className: s()(Chunk173680.placeholderAvatar, p[exports], r)
      }), (0, Chunk54381.jsx)(Chunk600164.Z, {
        grow: 1,
        className: s()(Chunk173680.placeholderUsername, r),
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
d(_, "defaultProps", {
  type: "1"
}), d(_, "Types", f);
let m = _
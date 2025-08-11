/** Chunk was on web.js **/
/** chunk id: 237583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./539854.js"), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk598077 = require("./598077.js"),
  Chunk436980 = require("./436980.js"),
  Chunk264589 = require("./264589.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e, t, n) {
  return (0, i.jsx)("div", {
    className: t,
    children: e
  }, n)
}
class p extends(r = Chunk73800.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: r
    } = this.props, i = [], o = module.length === exports ? module.length : exports - 1, a = 0;
    for (; Chunk120356 < Chunk73800 && Chunk120356 < module.length;) {
      let t = Chunk120356 === module.length - 1;
      Chunk255367.push(require(module[Chunk120356] || null, exports ? null : Chunk436980.avatarMasked, "user-".concat(Chunk120356), exports)), Chunk120356++
    }
    if (Chunk120356 < module.length) {
      let t = Math.min(module.length - Chunk120356, 99);
      Chunk255367.push(r("+".concat(exports), Chunk436980.moreUsers, "more-users", exports))
    }
    return Chunk255367
  }
  renderIcon() {
    return this.props.icon ? (0, Chunk255367.jsx)("div", {
      className: Chunk436980.iconContainer,
      children: (0, Chunk255367.jsx)(Chunk481060.gj8, {
        size: "xs",
        color: "currentColor",
        colorClass: Chunk436980.foreground,
        className: Chunk436980.icon
      })
    }) : null
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk255367.jsxs)("div", {
      className: s()(module, Chunk436980.container),
      ref: e => {
        this._ref = e
      },
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), f(this, "_ref", true), f(this, "defaultRenderUser", (e, t, n, r) => {
      let {
        onClick: o,
        size: a,
        guildId: f
      } = this.props, _ = e instanceof c.Z ? e : null != e ? e.user : null;
      return null == _ ? (0, i.jsx)("div", {
        className: s()(u.emptyUser, t)
      }, n) : (0, i.jsx)(l.qEK, {
        tabIndex: 0,
        src: _.getAvatarURL(f, (0, l.pxk)(a)),
        size: a,
        "aria-label": _.username,
        className: s()(t, d.cursorPointer, u.avatarSize),
        onClick: e => null != o ? o(e, _, this._ref) : null
      }, _.id)
    })
  }
}
f(p, "defaultProps", {
  max: 10,
  renderMoreUsers: _,
  size: Chunk481060.EFr.SIZE_24
});
let h = p
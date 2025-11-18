/** Chunk was on web.js **/
/** chunk id: 237583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./539854.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk598077 = require("./598077.js"),
  Chunk231246 = require("./231246.js"),
  Chunk492297 = require("./492297.js");

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
class p extends(r = Chunk473749.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: r
    } = this.props, i = [], a = module.length === exports ? module.length : exports - 1, o = 0;
    for (; Chunk120356 < Chunk473749 && Chunk120356 < module.length;) {
      let t = Chunk120356 === module.length - 1;
      Chunk54381.push(require(module[Chunk120356] || null, exports ? null : Chunk231246.avatarMasked, "user-".concat(Chunk120356), exports)), Chunk120356++
    }
    if (Chunk120356 < module.length) {
      let t = Math.min(module.length - Chunk120356, 99);
      Chunk54381.push(r("+".concat(exports), Chunk231246.moreUsers, "more-users", exports))
    }
    return Chunk54381
  }
  renderIcon() {
    return this.props.icon ? (0, Chunk54381.jsx)("div", {
      className: Chunk231246.iconContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.gj8, {
        size: "xs",
        color: "currentColor",
        colorClass: Chunk231246.foreground,
        className: Chunk231246.icon
      })
    }) : null
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: s()(module, Chunk231246.container),
      ref: e => {
        this._ref = e
      },
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), f(this, "_ref", true), f(this, "defaultRenderUser", (e, t, n, r) => {
      let {
        onClick: a,
        size: o,
        guildId: f
      } = this.props, _ = e instanceof c.Z ? e : null != e ? e.user : null;
      return null == _ ? (0, i.jsx)("div", {
        className: s()(u.emptyUser, t)
      }, n) : (0, i.jsx)(l.qEK, {
        tabIndex: 0,
        src: _.getAvatarURL(f, (0, l.pxk)(o)),
        size: o,
        "aria-label": _.username,
        className: s()(t, d.cursorPointer, u.avatarSize),
        onClick: e => null != a ? a(e, _, this._ref) : null
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
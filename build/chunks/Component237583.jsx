/** Chunk was on web.js **/
/** chunk id: 237583, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./539854.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk598077 = require("./598077.js"),
  Chunk322991 = require("./322991.js"),
  Chunk103126 = require("./103126.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e, t, n) {
  return (0, i.jsx)("div", {
    className: t,
    children: e
  }, n)
}
class _ extends(r = Chunk473749.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: r
    } = this.props, i = [], a = module.length === exports ? module.length : exports - 1, o = 0;
    for (; Chunk120356 < Chunk473749 && Chunk120356 < module.length;) {
      let t = Chunk120356 === module.length - 1;
      Chunk54381.push(require(module[Chunk120356] || null, exports ? null : Chunk322991.avatarMasked, "user-".concat(Chunk120356), exports)), Chunk120356++
    }
    if (Chunk120356 < module.length) {
      let t = Math.min(module.length - Chunk120356, 99);
      Chunk54381.push(r("+".concat(exports), Chunk322991.moreUsers, "more-users", exports))
    }
    return Chunk54381
  }
  renderIcon() {
    return this.props.icon ? (0, Chunk54381.jsx)("div", {
      className: Chunk322991.iconContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.gj8, {
        size: "xs",
        color: "currentColor",
        colorClass: Chunk322991.foreground,
        className: Chunk322991.icon
      })
    }) : null
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, Chunk54381.jsxs)("div", {
      className: s()(module, Chunk322991.container),
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
      } = this.props, p = e instanceof c.Z ? e : null != e ? e.user : null;
      return null == p ? (0, i.jsx)("div", {
        className: s()(u.emptyUser, t)
      }, n) : (0, i.jsx)(l.qEK, {
        tabIndex: 0,
        src: p.getAvatarURL(f, (0, l.dcp)(o)),
        size: o,
        "aria-label": p.username,
        className: s()(t, d.cursorPointer, u.avatarSize),
        onClick: e => null != a ? a(e, p, this._ref) : null
      }, p.id)
    })
  }
}
f(_, "defaultProps", {
  max: 10,
  renderMoreUsers: p,
  size: Chunk481060.EFr.SIZE_24
});
let m = _
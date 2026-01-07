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
  Chunk959246 = require("./959246.js"),
  Chunk518800 = require("./518800.js");

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
    } = this.props, i = [], a = e.length === t ? e.length : t - 1, o = 0;
    for (; o < a && o < e.length;) {
      let t = o === e.length - 1;
      i.push(n(e[o] || null, t ? null : u.avatarMasked, "user-".concat(o), t)), o++
    }
    if (o < e.length) {
      let t = Math.min(e.length - o, 99);
      i.push(r("+".concat(t), u.moreUsers, "more-users", t))
    }
    return i
  }
  renderIcon() {
    return this.props.icon ? (0, i.jsx)("div", {
      className: u.iconContainer,
      children: (0, i.jsx)(l.gj8, {
        size: "xs",
        color: "currentColor",
        colorClass: u.foreground,
        className: u.icon
      })
    }) : null
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, i.jsxs)("div", {
      className: s()(e, u.container),
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
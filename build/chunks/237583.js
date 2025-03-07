/** Chunk was on 30806 **/
n.d(t, {
  Z: () => f
}), n(653041), n(47120);
var i, r = n(200651),
  l = n(192379),
  o = n(120356),
  s = n.n(o),
  a = n(481060),
  u = n(598077),
  d = n(132111),
  c = n(744356);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class p extends(i = l.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      renderMoreUsers: i
    } = this.props, r = [], l = e.length === t ? e.length : t - 1, o = 0;
    for (; o < l && o < e.length;) {
      let t = o === e.length - 1;
      r.push(n(e[o] || null, t ? null : d.avatarMasked, "user-".concat(o), t)), o++
    }
    if (o < e.length) {
      let t = Math.min(e.length - o, 99);
      r.push(i("+".concat(t), d.moreUsers, "more-users", t))
    }
    return r
  }
  renderIcon() {
    return this.props.icon ? (0, r.jsx)("div", {
      className: d.iconContainer,
      children: (0, r.jsx)(a.gj8, {
        size: "xs",
        color: "currentColor",
        colorClass: d.foreground,
        className: d.icon
      })
    }) : null
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, r.jsxs)("div", {
      className: s()(e, d.container),
      ref: e => this._ref = e,
      children: [this.renderIcon(), this.renderUsers()]
    })
  }
  constructor(...e) {
    super(...e), h(this, "_ref", void 0), h(this, "defaultRenderUser", (e, t, n, i) => {
      let {
        onClick: l,
        size: o,
        guildId: h
      } = this.props, p = e instanceof u.Z ? e : null != e ? e.user : null;
      return null == p ? (0, r.jsx)("div", {
        className: s()(d.emptyUser, t)
      }, n) : (0, r.jsx)(a.qEK, {
        tabIndex: 0,
        src: p.getAvatarURL(h, (0, a.pxk)(o)),
        size: o,
        "aria-label": p.username,
        className: s()(t, c.cursorPointer, d.avatarSize),
        onClick: e => null != l ? l(e, p, this._ref) : null
      }, p.id)
    })
  }
}
h(p, "defaultProps", {
  max: 10,
  renderMoreUsers: function(e, t, n) {
    return (0, r.jsx)("div", {
      className: t,
      children: e
    }, n)
  },
  size: a.EFr.SIZE_24
});
let f = p
/** Chunk was on web.js **/
/** chunk id: 884338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => C,
  ag: () => O,
  u8: () => b
}), require("./539854.js"), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk426563 = require("./426563.js"),
  Chunk472840 = require("./472840.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = {
    SIZE_16: 16,
    SIZE_24: 24,
    SIZE_32: 32,
    SIZE_56: 56
  },
  y = {
    SIZE_10: 10,
    SIZE_15: 15,
    SIZE_20: 20,
    SIZE_35: 35
  },
  O = "user-icon";

function v(e, t) {
  if (e === O) return "user-icon-".concat(t);
  let n = e instanceof d.Z ? e : null != e ? e.user : null;
  return null != n ? n.id : "user-".concat(t)
}

function I(e) {
  return (0, i.jsx)("div", {
    className: p.moreUsers,
    children: e
  })
}

function T(e) {
  return (0, i.jsx)("div", {
    className: s()(p.moreUsers, p.moreUsersDimmed),
    children: e
  })
}

function S() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : b.SIZE_24;
  switch (module) {
    case b.SIZE_16:
      return Chunk472840.size16;
    case b.SIZE_24:
      return Chunk472840.size24;
    case b.SIZE_32:
      return Chunk472840.size32;
    case b.SIZE_56:
      return Chunk472840.size56;
    default:
      return Chunk472840.size24
  }
}

function A() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : b.SIZE_24;
  switch (module) {
    case b.SIZE_16:
      return y.SIZE_10;
    case b.SIZE_24:
      return y.SIZE_15;
    case b.SIZE_32:
      return y.SIZE_20;
    case b.SIZE_56:
      return y.SIZE_35;
    default:
      return y.SIZE_10
  }
}
class N extends(r = Chunk73800.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      size: r,
      extraDetail: o
    } = this.props, a = [], s = module.length === exports ? module.length : exports - 1, l = this.renderMoreUsers(s), u = 0;
    for (; Chunk670188 < s && Chunk670188 < module.length;) {
      var d;
      let t = null == Chunk481060 && null == Chunk73800 && Chunk670188 === module.length - 1,
        s = require(module[Chunk670188], exports, Chunk670188);
      Chunk120356.push(exports ? (0, Chunk255367.jsx)("div", {
        className: Chunk472840.avatarContainer,
        children: s
      }, v(null != (d = module[Chunk670188]) ? Chunk598077 : null, Chunk670188)) : (0, Chunk255367.jsx)(Chunk686546.ZP, {
        className: Chunk472840.avatarContainerMasked,
        height: r,
        width: r,
        mask: Chunk686546.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
        children: s
      }, v(module[Chunk670188], Chunk670188))), Chunk670188++
    }
    return null != Chunk73800 ? Chunk120356.push(Chunk73800) : null != Chunk481060 && Chunk120356.push(Chunk481060), Chunk120356
  }
  renderMoreUsers(e) {
    let {
      max: t,
      count: n,
      hideMoreUsers: r,
      renderMoreUsers: a,
      users: s,
      dimEmptyUsers: l
    } = this.props, c = Math.min(e, s.length), u = l ? T : a;
    if (!r) {
      if (null != n) {
        if (n >= t) return (0, i.jsx)(o.Fragment, {
          children: u("".concat(t, "+"), t)
        }, "more-users");
        else if (n > s.length) {
          let e = n - s.length;
          return (0, i.jsx)(o.Fragment, {
            children: u("+".concat(e), e)
          }, "more-users")
        }
      } else if (c < s.length) {
        let e = Math.min(s.length - c, 99);
        return (0, i.jsx)(o.Fragment, {
          children: u("+".concat(e), e)
        }, "more-users")
      }
    }
  }
  renderIcon() {
    return this.props.renderIcon ? (0, Chunk255367.jsx)(Chunk481060.gj8, {
      size: "md",
      color: "currentColor",
      colorClass: Chunk472840.__invalid_foreground,
      className: Chunk472840.icon
    }) : null
  }
  render() {
    let {
      className: e,
      size: t,
      users: n,
      guildId: r,
      showUserPopout: o,
      useFallbackUserForPopout: a
    } = this.props, {
      popoutUserId: l
    } = this.state;
    if (null == Chunk481060) return (0, Chunk255367.jsxs)("div", {
      className: s()(module, Chunk472840.container, S(exports)),
      children: [this.renderIcon(), this.renderUsers()]
    });
    let c = require.find(e => e instanceof d.Z && e.id === l),
      _ = Chunk120356 && null == Chunk594174.default.getUser(Chunk481060);
    return (0, Chunk255367.jsx)(Chunk670188.Z, {
      targetElementRef: this._ref,
      userId: Chunk481060,
      user: Chunk426563 && null != Chunk686546 ? Chunk686546 : true,
      guildId: r,
      fixed: true,
      shouldShow: true === Chunk73800 && null != Chunk481060,
      onRequestClose: () => this.setState({
        popoutUserId: null
      }),
      clickTrap: true,
      children: n => (0, i.jsxs)("div", E(m({
        className: s()(e, p.container, S(t)),
        ref: this._ref
      }, n), {
        children: [this.renderIcon(), this.renderUsers()]
      }))
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      popoutUserId: null
    }), h(this, "_ref", o.createRef()), h(this, "defaultRenderUser", (e, t, n) => {
      let r, {
        showUserPopout: o,
        guildId: a,
        size: c,
        dimEmptyUsers: u
      } = this.props;
      if (null == e)
        if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
          className: s()(p.emptyUser, {
            [p.emptyUserDimmed]: u
          })
        });
        else {
          let e = (null != n ? n : 0) % _.Z.DEFAULT_AVATARS.length,
            t = _.Z.DEFAULT_AVATARS[e];
          return (0, i.jsx)("img", {
            src: t,
            alt: "",
            className: p.avatar
          })
        } if (e === O) {
        let e = A(c);
        r = (0, i.jsx)(l.tBG, {
          size: "custom",
          color: "currentColor",
          width: e,
          height: e
        })
      } else r = (0, i.jsx)("img", {
        src: e.getAvatarURL(a, c),
        alt: e.username,
        className: p.avatar
      });
      let d = (0, i.jsx)("div", {
        className: p.avatarWithBackground,
        children: r
      }, v(e, n));
      return o && e !== O ? (0, i.jsx)(l.P3F, {
        className: p.clickableAvatar,
        onClick: () => {
          null != this._ref.current && null != e && this.setState({
            popoutUserId: e.id
          })
        },
        tabIndex: false,
        children: d
      }, v(e, n)) : d
    })
  }
}
h(N, "defaultProps", {
  max: 10,
  renderMoreUsers: I,
  renderIcon: false,
  showDefaultAvatarsForNullUsers: false,
  size: b.SIZE_24
});
let C = N
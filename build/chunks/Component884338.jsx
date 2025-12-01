/** Chunk was on web.js **/
/** chunk id: 884338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => D,
  ag: () => T,
  u8: () => b
}), require("./539854.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk594174 = require("./594174.js"),
  Chunk426563 = require("./426563.js"),
  Chunk245141 = require("./245141.js");

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
  y = 10,
  O = 15,
  v = 20,
  I = 35,
  T = "user-icon";

function S(e, t) {
  if (e === T) return "user-icon-".concat(t);
  let n = e instanceof d.Z ? e : null != e ? e.user : null;
  return null != n ? n.id : "user-".concat(t)
}

function A(e) {
  return (0, i.jsx)("div", {
    className: p.moreUsers,
    children: e
  })
}

function C(e) {
  return (0, i.jsx)("div", {
    className: s()(p.moreUsers, p.moreUsersDimmed),
    children: e
  })
}

function N() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : b.SIZE_24;
  switch (module) {
    case b.SIZE_16:
      return Chunk245141.size16;
    case b.SIZE_24:
      return Chunk245141.size24;
    case b.SIZE_32:
      return Chunk245141.size32;
    case b.SIZE_56:
      return Chunk245141.size56;
    default:
      return Chunk245141.size24
  }
}

function R() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : b.SIZE_24;
  switch (module) {
    case b.SIZE_16:
      return y;
    case b.SIZE_24:
      return O;
    case b.SIZE_32:
      return v;
    case b.SIZE_56:
      return I;
    default:
      return y
  }
}
class P extends(r = Chunk473749.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      size: r,
      extraDetail: a
    } = this.props, o = [], s = module.length === exports ? module.length : exports - 1, l = this.renderMoreUsers(s), u = 0;
    for (; Chunk670188 < s && Chunk670188 < module.length;) {
      var d;
      let t = null == Chunk481060 && null == Chunk473749 && Chunk670188 === module.length - 1,
        s = require(module[Chunk670188], exports, Chunk670188);
      Chunk120356.push(exports ? (0, Chunk54381.jsx)("div", {
        className: Chunk245141.avatarContainer,
        children: s
      }, S(null != (d = module[Chunk670188]) ? Chunk598077 : null, Chunk670188)) : (0, Chunk54381.jsx)(Chunk686546.ZP, {
        className: Chunk245141.avatarContainerMasked,
        height: r,
        width: r,
        mask: Chunk686546.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
        children: s
      }, S(module[Chunk670188], Chunk670188))), Chunk670188++
    }
    return null != Chunk473749 ? Chunk120356.push(Chunk473749) : null != Chunk481060 && Chunk120356.push(Chunk481060), Chunk120356
  }
  renderMoreUsers(e) {
    let {
      max: t,
      count: n,
      hideMoreUsers: r,
      renderMoreUsers: o,
      users: s,
      dimEmptyUsers: l
    } = this.props, c = Math.min(e, s.length), u = l ? C : o;
    if (!r) {
      if (null != n) {
        if (n >= t) return (0, i.jsx)(a.Fragment, {
          children: u("".concat(t, "+"), t)
        }, "more-users");
        else if (n > s.length) {
          let e = n - s.length;
          return (0, i.jsx)(a.Fragment, {
            children: u("+".concat(e), e)
          }, "more-users")
        }
      } else if (c < s.length) {
        let e = Math.min(s.length - c, 99);
        return (0, i.jsx)(a.Fragment, {
          children: u("+".concat(e), e)
        }, "more-users")
      }
    }
  }
  renderIcon() {
    return this.props.renderIcon ? (0, Chunk54381.jsx)(Chunk481060.gj8, {
      size: "md",
      color: "currentColor",
      colorClass: Chunk245141.__invalid_foreground,
      className: Chunk245141.icon
    }) : null
  }
  render() {
    let {
      className: e,
      size: t,
      users: n,
      guildId: r,
      showUserPopout: a,
      useFallbackUserForPopout: o
    } = this.props, {
      popoutUserId: l
    } = this.state;
    if (null == Chunk481060) return (0, Chunk54381.jsxs)("div", {
      className: s()(module, Chunk245141.container, N(exports)),
      children: [this.renderIcon(), this.renderUsers()]
    });
    let c = require.find(e => e instanceof d.Z && e.id === l),
      _ = Chunk120356 && null == Chunk594174.default.getUser(Chunk481060);
    return (0, Chunk54381.jsx)(Chunk670188.Z, {
      targetElementRef: this._ref,
      userId: Chunk481060,
      user: Chunk426563 && null != Chunk686546 ? Chunk686546 : true,
      guildId: r,
      fixed: true,
      shouldShow: true === Chunk473749 && null != Chunk481060,
      onRequestClose: () => this.setState({
        popoutUserId: null
      }),
      clickTrap: true,
      children: n => (0, i.jsxs)("div", E(m({
        className: s()(e, p.container, N(t)),
        ref: this._ref
      }, n), {
        children: [this.renderIcon(), this.renderUsers()]
      }))
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      popoutUserId: null
    }), h(this, "_ref", a.createRef()), h(this, "defaultRenderUser", (e, t, n) => {
      let r, {
        showUserPopout: a,
        guildId: o,
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
        } if (e === T) {
        let e = R(c);
        r = (0, i.jsx)(l.tBG, {
          size: "custom",
          color: "currentColor",
          width: e,
          height: e
        })
      } else r = (0, i.jsx)("img", {
        src: e.getAvatarURL(o, c),
        alt: e.username,
        className: p.avatar
      });
      let d = (0, i.jsx)("div", {
        className: p.avatarWithBackground,
        children: r
      }, S(e, n));
      return a && e !== T ? (0, i.jsx)(l.P3F, {
        className: p.clickableAvatar,
        onClick: () => {
          null != this._ref.current && null != e && this.setState({
            popoutUserId: e.id
          })
        },
        tabIndex: false,
        children: d
      }, S(e, n)) : d
    })
  }
}
h(P, "defaultProps", {
  max: 10,
  renderMoreUsers: A,
  renderIcon: false,
  showDefaultAvatarsForNullUsers: false,
  size: b.SIZE_24
});
let D = P
/** Chunk was on web.js **/
/** chunk id: 104171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => P,
  DN: () => y,
  mt: () => I
}), require("./321073.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk427157 = require("./427157.js"),
  Chunk287809 = require("./287809.js"),
  Chunk820883 = require("./820883.js"),
  Chunk688963 = require("./688963.js");

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
let y = {
    SIZE_16: 16,
    SIZE_24: 24,
    SIZE_32: 32,
    SIZE_56: 56
  },
  b = 10,
  O = 15,
  v = 20,
  A = 35,
  I = "user-icon";

function S(e, t) {
  if (e === I) return "user-icon-".concat(t);
  let n = e instanceof d.A ? e : null != e ? e.user : null;
  return null != n ? n.id : "user-".concat(t)
}

function T(e) {
  return (0, i.jsx)("div", {
    className: _.In,
    children: e
  })
}

function C(e) {
  return (0, i.jsx)("div", {
    className: s()(_.In, _.iq),
    children: e
  })
}

function N() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : y.SIZE_24;
  switch (e) {
    case y.SIZE_16:
      return _.nc;
    case y.SIZE_24:
      return _.q1;
    case y.SIZE_32:
      return _.Hb;
    case y.SIZE_56:
      return _.dl;
    default:
      return _.q1
  }
}

function w() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : y.SIZE_24;
  switch (e) {
    case y.SIZE_16:
      return b;
    case y.SIZE_24:
      return O;
    case y.SIZE_32:
      return v;
    case y.SIZE_56:
      return A;
    default:
      return b
  }
}
class R extends(r = Chunk64700.PureComponent) {
  renderUsers() {
    let {
      users: e,
      max: t,
      renderUser: n = this.defaultRenderUser,
      size: r,
      extraDetail: a
    } = this.props, o = [], s = e.length === t ? e.length : t - 1, l = this.renderMoreUsers(s), u = 0;
    for (; u < s && u < e.length;) {
      var d;
      let t = null == l && null == a && u === e.length - 1,
        s = n(e[u], t, u);
      o.push(t ? (0, i.jsx)("div", {
        className: _.H,
        children: s
      }, S(null != (d = e[u]) ? d : null, u)) : (0, i.jsx)(c.Ay, {
        className: _.aV,
        height: r,
        width: r,
        mask: c.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
        children: s
      }, S(e[u], u))), u++
    }
    return null != a ? o.push(a) : null != l && o.push(l), o
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
    let {
      renderLeadingIcon: e,
      renderIcon: t
    } = this.props;
    return t ? null != e ? e(_.Kk) : (0, i.jsx)(l.HKD, {
      size: "md",
      color: "currentColor",
      colorClass: _.__invalid_foreground,
      className: _.Kk
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
    if (null == l) return (0, i.jsxs)("div", {
      className: s()(e, _.kL, N(t)),
      children: [this.renderIcon(), this.renderUsers()]
    });
    let c = n.find(e => e instanceof d.A && e.id === l),
      p = o && null == f.default.getUser(l);
    return (0, i.jsx)(u.A, {
      targetElementRef: this._ref,
      userId: l,
      user: p && null != c ? c : true,
      guildId: r,
      fixed: true,
      shouldShow: true === a && null != l,
      onRequestClose: () => this.setState({
        popoutUserId: null
      }),
      clickTrap: true,
      children: n => (0, i.jsxs)("div", E(m({
        className: s()(e, _.kL, N(t)),
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
          className: s()(_.F2, {
            [_.F_]: u
          })
        });
        else {
          let e = (null != n ? n : 0) % p.A.DEFAULT_AVATARS.length,
            t = p.A.DEFAULT_AVATARS[e];
          return (0, i.jsx)("img", {
            src: t,
            alt: "",
            className: _.my
          })
        } if (e === I) {
        let e = w(c);
        r = (0, i.jsx)(l.nys, {
          size: "custom",
          color: "currentColor",
          width: e,
          height: e
        })
      } else r = (0, i.jsx)("img", {
        src: e.getAvatarURL(o, c),
        alt: e.username,
        className: _.my
      });
      let d = (0, i.jsx)("div", {
        className: _.WK,
        children: r
      }, S(e, n));
      return a && e !== I ? (0, i.jsx)(l.DUT, {
        className: _.UC,
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
h(R, "defaultProps", {
  max: 10,
  renderMoreUsers: T,
  renderIcon: false,
  showDefaultAvatarsForNullUsers: false,
  size: y.SIZE_24
});
let P = R
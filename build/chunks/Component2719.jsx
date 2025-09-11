/** Chunk was on web.js **/
/** chunk id: 2719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ei
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk279837 = require("./279837.jsx"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk952306 = require("./952306.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk821795 = require("./821795.js"),
  Chunk295474 = require("./295474.js"),
  Chunk144114 = require("./144114.js"),
  Chunk918505 = require("./918505.js"),
  Chunk332473 = require("./332473.js"),
  Chunk921801 = require("./921801.js"),
  Chunk485341 = require("./485341.js"),
  Chunk687158 = require("./687158.js"),
  Chunk518950 = require("./518950.js"),
  Chunk184325 = require("./184325.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk695346 = require("./695346.js"),
  Chunk461877 = require("./461877.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk801461 = require("./801461.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk538271 = require("./538271.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let q = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function X(e) {
  var t, a;
  let {
    className: s,
    user: l
  } = e, c = i.useRef(null), d = (0, T.o9)(), _ = (0, S.b)(), p = (0, v.gS)(), h = null != (a = null == p || null == (t = p.nick) ? true : t[0]) ? a : null, [m, g] = i.useState(false);
  i.useEffect(() => {
    g(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [l.username]);
  let E = !l.isClaimed(),
    b = d && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone() || E,
    y = b ? V.intl.string(V.t["7Ngnys"]) : true;
  return (0, r.jsxs)("div", {
    className: o()(H.field, s),
    children: [(0, r.jsx)("div", {
      className: H.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: H.usernameRow,
        children: [(0, r.jsx)(f.vwX, {
          className: H.fieldTitle,
          children: V.intl.string(V.t.qqhR3N)
        }), (0, r.jsxs)("div", {
          className: H.usernameInnerRow,
          ref: c,
          children: [(0, r.jsx)(f.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: l.username
          }), !l.hasUniqueUsername() && (0, r.jsxs)(f.Text, {
            tag: "span",
            color: "header-secondary",
            variant: "text-md/normal",
            children: ["#", l.discriminator]
          })]
        })]
      })
    }), _ && (0, r.jsx)("div", {
      className: H.pomeloWarning,
      children: (0, r.jsx)(f.ua7, {
        text: V.intl.string(V.t.HHC5Z2),
        children: e => (0, r.jsx)(f.Mgn, z(W({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: u.Z.colors.STATUS_WARNING.css
        }))
      })
    }), null != h && (0, r.jsx)("div", {
      className: H.pomeloWarning,
      children: (0, r.jsx)(f.ua7, {
        text: h,
        "aria-label": false,
        children: e => (0, r.jsx)(f.Mgn, z(W({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: u.Z.colors.STATUS_WARNING.css
        }))
      })
    }), (0, r.jsx)(f.ua7, {
      text: y,
      children: e => (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: H.fieldButton,
        children: (0, r.jsx)(f.zxk, z(W({
          variant: "secondary",
          size: "sm",
          text: m ? V.intl.string(V.t["16kTw8"]) : V.intl.string(V.t.bt75u7)
        }, e), {
          disabled: b,
          "aria-label": V.intl.string(V.t["JECa9/"]),
          onClick: () => (0, f.ZDy)(async () => {
            if (_) {
              let {
                default: e
              } = await n.e("85342").then(n.bind(n, 193049));
              return t => (0, r.jsx)(e, W({
                source: F.Kq.USER_SETTINGS_EDIT
              }, t))
            } {
              let {
                default: e
              } = await Promise.all([n.e("84956"), n.e("42758")]).then(n.bind(n, 2702));
              return t => (0, r.jsx)(e, W({}, t))
            }
          })
        }))
      })
    })]
  })
}

function Q(e) {
  var t, n;
  let {
    user: a,
    className: s
  } = e, l = (0, v.gS)(), c = null != (n = null == l || null == (t = l.nick) ? true : t[0]) ? n : null, d = j.ZP.getGlobalName(a), _ = i.useRef(null), [p, h] = i.useState(false);
  return i.useEffect(() => {
    h(null != _.current && _.current.scrollWidth > _.current.clientWidth)
  }, [d]), (0, r.jsxs)("div", {
    className: o()(H.field, s),
    children: [(0, r.jsx)("div", {
      className: H.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: H.usernameRow,
        children: [(0, r.jsx)(f.vwX, {
          className: H.fieldTitle,
          children: V.intl.string(V.t["9AjdkJ"])
        }), (0, r.jsx)("div", {
          className: H.usernameInnerRow,
          ref: _,
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == d ? V.intl.string(V.t.ep5kjI) : d
          })
        })]
      })
    }), null != c && (0, r.jsx)("div", {
      className: H.pomeloWarning,
      children: (0, r.jsx)(f.ua7, {
        text: c,
        "aria-label": false,
        children: e => (0, r.jsx)(f.Mgn, z(W({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: u.Z.colors.STATUS_WARNING.css
        }))
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: H.fieldButton,
      children: (0, r.jsx)(f.zxk, {
        variant: "secondary",
        size: "sm",
        text: p ? V.intl.string(V.t["16kTw8"]) : V.intl.string(V.t.bt75u7),
        "aria-label": V.intl.string(V.t.YXeWYG),
        onClick: en
      })
    })]
  })
}

function J(e) {
  let {
    text: t,
    censor: n,
    revealLabel: a,
    hideLabel: o
  } = e, [s, l] = i.useState(false), c = s ? t : n(t);
  return (0, r.jsxs)(r.Fragment, {
    children: [c, (0, r.jsx)(d.zx, {
      look: d.zx.Looks.LINK,
      size: d.zx.Sizes.MIN,
      color: d.zx.Colors.LINK,
      "aria-label": s ? o : a,
      onClick: () => l(!s),
      children: s ? V.intl.string(V.t.fgq1go) : V.intl.string(V.t.dcztdX)
    })]
  })
}

function $(e) {
  let t, {
    className: i,
    user: a
  } = e;
  if (a.isClaimed())
    if (null == a.email) t = {
      buttonText: V.intl.string(V.t.OYkgVl),
      buttonAriaLabel: V.intl.string(V.t["pvBD+f"]),
      buttonColor: d.zx.Colors.PRIMARY,
      valueMessage: V.intl.string(V.t["8SfTNz"]),
      handleClick: () => (0, f.ZDy)(async () => {
        let {
          default: e
        } = await n.e("9343").then(n.bind(n, 642298));
        return t => (0, r.jsx)(e, W({}, t))
      })
    };
    else {
      let {
        email: e
      } = a;
      t = {
        buttonText: V.intl.string(V.t.bt75u7),
        buttonAriaLabel: V.intl.string(V.t["8peUT0"]),
        buttonColor: d.zx.Colors.PRIMARY,
        valueMessage: (0, r.jsx)(J, {
          text: e,
          censor: U.E,
          revealLabel: V.intl.string(V.t["Zvx+yc"]),
          hideLabel: V.intl.string(V.t.nqTD4e)
        }),
        handleClick: () => (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("9343").then(n.bind(n, 642298));
          return t => (0, r.jsx)(e, W({}, t))
        })
      }
    }
  else t = {
    buttonText: V.intl.string(V.t.BleMPD),
    buttonAriaLabel: V.intl.string(V.t.BleMPD),
    buttonColor: d.zx.Colors.BRAND,
    valueMessage: V.intl.string(V.t.qxk9zs),
    handleClick: () => b.Z.openClaimAccountModal()
  };
  return (0, r.jsxs)("div", {
    className: o()(H.field, i),
    children: [(0, r.jsx)("div", {
      className: H.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.vwX, {
          className: H.fieldTitle,
          children: V.intl.string(V.t.tlZllJ)
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t.valueMessage
          })
        })]
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: H.fieldButton,
      children: (0, r.jsx)(f.zxk, {
        variant: "secondary",
        size: "sm",
        text: t.buttonText,
        "aria-label": t.buttonAriaLabel,
        onClick: t.handleClick
      })
    })]
  })
}

function ee(e) {
  let t, {
    className: i,
    user: a
  } = e;
  if (!a.isClaimed()) return null;
  let {
    phone: s,
    email: l
  } = a, c = null != s, u = null != l;

  function _() {
    (0, f.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 607018));
      return t => (0, r.jsx)(e, W({
        reason: I.L.USER_SETTINGS_UPDATE
      }, t))
    }, {
      modalKey: Z.M
    })
  }

  function p() {
    (0, f.h7j)(e => (0, r.jsx)(h.Z, z(W({}, e), {
      title: V.intl.string(V.t["3CTiKi"]),
      children: a.hasFlag(B.xW$.MFA_SMS) ? V.intl.string(V.t.jrhJys) : true,
      actionText: V.intl.string(V.t.N86XcH),
      handleSubmit: e => I.Z.removePhone(e, I.L.USER_SETTINGS_UPDATE)
    })))
  }
  return t = c ? (0, r.jsx)(J, {
    text: s,
    censor: U.n,
    revealLabel: V.intl.string(V.t.eY3xlZ),
    hideLabel: V.intl.string(V.t.jllbv7)
  }) : V.intl.string(V.t.I5kDqq), (0, r.jsxs)("div", {
    className: o()(H.field, i),
    children: [(0, r.jsx)("div", {
      className: H.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.vwX, {
          className: H.fieldTitle,
          children: V.intl.string(V.t.kerONj)
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: H.fieldButtonList,
      children: [c && u ? (0, r.jsx)(d.zx, {
        className: o()(H.fieldButton, H.removeButton),
        size: d.zx.Sizes.SMALL,
        look: d.zx.Looks.LINK,
        color: d.zx.Colors.PRIMARY,
        "aria-label": V.intl.string(V.t.Rpn4Aw),
        onClick: p,
        children: V.intl.string(V.t.N86XcH)
      }) : null, (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: H.fieldButton,
        children: (0, r.jsx)(f.zxk, {
          variant: "secondary",
          size: "sm",
          text: c ? V.intl.string(V.t.bt75u7) : V.intl.string(V.t.OYkgVl),
          "aria-label": c ? V.intl.string(V.t.YDabSU) : V.intl.string(V.t.SfUuEx),
          onClick: _
        })
      })]
    })]
  })
}

function et(e) {
  let {
    user: t
  } = e, n = (0, y.Z)({
    id: t.id,
    label: V.intl.string(V.t["/AXYnJ"])
  }), a = k.Sb.useSetting(), o = i.useRef(null);
  return a && L.wS ? (0, r.jsx)(f.yRy, {
    targetElementRef: o,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(f.v2r, {
        onClose: t,
        onSelect: true,
        navId: "copy-id",
        "aria-label": V.intl.string(V.t.RANhlJ),
        children: n
      })
    },
    children: e => (0, r.jsx)(f.P3F, z(W({}, e), {
      innerRef: o,
      className: H.overflowMenuButton,
      "aria-label": V.intl.string(V.t.DEoVWV),
      children: (0, r.jsx)(f.xhG, {
        size: "md",
        color: "currentColor",
        className: H.overflowMenuIcon
      })
    }))
  }) : null
}

function en() {
  Chunk230711.Z.setSection(Chunk981631.oAB.PROFILE_CUSTOMIZATION)
}

function er(e) {
  let {
    className: t
  } = e, n = (0, E.l6)(), a = (0, E.Jm)(), s = !n || a, l = i.useMemo(() => n ? a ? V.intl.string(V.t.sK0dmJ) : V.intl.string(V.t.XxRj7e) : V.intl.string(V.t.UX0OdX), [n, a]);
  return (0, r.jsxs)("div", {
    className: o()(H.field, t),
    children: [(0, r.jsx)("div", {
      className: H.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.vwX, {
          className: H.fieldTitle,
          children: V.intl.string(V.t["/52UY2"])
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: l
          })
        })]
      })
    }), s && (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: H.fieldButton,
      children: (0, r.jsx)(f.zxk, {
        variant: "secondary",
        size: "sm",
        text: a ? V.intl.string(V.t.KPGVWl) : V.intl.string(V.t.yNGjyM),
        "aria-label": a ? V.intl.string(V.t.KPGVWl) : V.intl.string(V.t.yNGjyM),
        onClick: () => m.Z.showAgeVerificationGetStartedModal({
          entryPoint: g.cU.ACCOUNT_AGE_GROUP
        })
      })
    })]
  })
}

function ei() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return l()(null != module, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), module
    }),
    n = (0, Chunk687158.ZP)(exports.id),
    i = (0, Chunk485341.Z)(require),
    a = Chunk695346.co.useSetting(),
    o = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.getErrors()),
    s = null == o || null == (e = o.avatar) ? true : module[0],
    {
      avatarSrc: u,
      avatarDecorationSrc: d
    } = (0, Chunk518950.Z)({
      userId: null == exports ? true : exports.id,
      size: Chunk481060.EFr.SIZE_80
    });
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk538271.accountProfileCard,
    children: [(0, Chunk951288.jsx)(Chunk867176.b, {
      user: exports,
      displayProfile: require,
      avatarSize: Chunk481060.EFr.SIZE_80,
      avatarOffsetX: 16,
      avatarOffsetY: false,
      bannerWidth: 660,
      bannerHeight: 100,
      themePadding: 0
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk538271.userInfo,
      children: [(0, Chunk951288.jsx)(q, {
        className: Chunk538271.avatar,
        src: Chunk692547,
        avatarDecoration: Chunk755721,
        status: Chunk120356,
        size: Chunk481060.EFr.SIZE_80,
        "aria-label": exports.username
      }), (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk538271.profileCardUsernameRow,
          children: [(0, Chunk951288.jsx)(Chunk129861.Z, {
            user: exports,
            className: Chunk538271.userTag,
            discriminatorClass: Chunk538271.discriminator,
            displayNameStylesType: Chunk821795.F.STATIC
          }), (0, Chunk951288.jsx)(et, {
            user: exports
          })]
        }), (0, Chunk951288.jsx)(Chunk184325.Z, {
          badges: Chunk647438,
          className: Chunk538271.badgeList,
          badgeClassName: Chunk538271.badge
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t["2p2aY2"]),
        onClick: en
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk538271.background,
      children: [null != Chunk512722 ? (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk538271.avatarError,
        variant: "text-xs/normal",
        color: "text-danger",
        children: Chunk512722
      }) : null, (0, Chunk951288.jsxs)("div", {
        className: Chunk538271.fieldList,
        children: [(0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_DISPLAY_NAME,
          children: (0, Chunk951288.jsx)(Q, {
            className: Chunk538271.fieldSpacerBottom,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_USERNAME,
          children: (0, Chunk951288.jsx)(X, {
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_EMAIL,
          children: (0, Chunk951288.jsx)($, {
            className: Chunk538271.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_PHONE_NUMBER,
          children: (0, Chunk951288.jsx)(ee, {
            className: Chunk538271.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_AGE_GROUP,
          children: (0, Chunk951288.jsx)(er, {
            className: Chunk538271.fieldSpacer
          })
        })]
      })]
    })]
  })
}
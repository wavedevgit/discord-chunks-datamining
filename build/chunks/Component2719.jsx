/** Chunk was on web.js **/
/** chunk id: 2719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ea
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
  Chunk313789 = require("./313789.js"),
  Chunk461877 = require("./461877.js"),
  Chunk947889 = require("./947889.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk801461 = require("./801461.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk378846 = require("./378846.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let X = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function Q() {
  let e = (0, Chunk947889.Z)();
  return () => {
    module(Chunk313789.n.PROFILE_PANEL, {
      section: Chunk981631.oAB.PROFILE_CUSTOMIZATION
    })
  }
}

function J(e) {
  var t, a;
  let {
    className: s,
    user: l
  } = e, c = i.useRef(null), d = (0, I.o9)(), _ = (0, T.b)(), p = (0, O.gS)(), h = null != (a = null == p || null == (t = p.nick) ? true : t[0]) ? a : null, [m, g] = i.useState(false);
  i.useEffect(() => {
    g(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [l.username]);
  let E = !l.isClaimed(),
    b = d && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone() || E,
    y = b ? H.intl.string(H.t["7Ngnys"]) : true;
  return (0, r.jsxs)("div", {
    className: o()(Y.field, s),
    children: [(0, r.jsx)("div", {
      className: Y.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: Y.usernameRow,
        children: [(0, r.jsx)(f.vwX, {
          className: Y.fieldTitle,
          children: H.intl.string(H.t.qqhR3N)
        }), (0, r.jsxs)("div", {
          className: Y.usernameInnerRow,
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
      className: Y.pomeloWarning,
      children: (0, r.jsx)(f.ua7, {
        text: H.intl.string(H.t.HHC5Z2),
        children: e => (0, r.jsx)(f.Mgn, q(K({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: u.Z.colors.STATUS_WARNING.css
        }))
      })
    }), null != h && (0, r.jsx)("div", {
      className: Y.pomeloWarning,
      children: (0, r.jsx)(f.ua7, {
        text: h,
        "aria-label": false,
        children: e => (0, r.jsx)(f.Mgn, q(K({
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
        className: Y.fieldButton,
        children: (0, r.jsx)(f.zxk, q(K({
          variant: "secondary",
          size: "sm",
          text: m ? H.intl.string(H.t["16kTw8"]) : H.intl.string(H.t.bt75u7)
        }, e), {
          disabled: b,
          "aria-label": H.intl.string(H.t["JECa9/"]),
          onClick: () => (0, f.ZDy)(async () => {
            if (_) {
              let {
                default: e
              } = await n.e("85342").then(n.bind(n, 193049));
              return t => (0, r.jsx)(e, K({
                source: V.Kq.USER_SETTINGS_EDIT
              }, t))
            } {
              let {
                default: e
              } = await n.e("42758").then(n.bind(n, 2702));
              return t => (0, r.jsx)(e, K({}, t))
            }
          })
        }))
      })
    })]
  })
}

function $(e) {
  var t, n;
  let {
    user: a,
    className: s
  } = e, l = (0, O.gS)(), c = null != (n = null == l || null == (t = l.nick) ? true : t[0]) ? n : null, d = L.ZP.getGlobalName(a), _ = i.useRef(null), [p, h] = i.useState(false);
  i.useEffect(() => {
    h(null != _.current && _.current.scrollWidth > _.current.clientWidth)
  }, [d]);
  let m = Q();
  return (0, r.jsxs)("div", {
    className: o()(Y.field, s),
    children: [(0, r.jsx)("div", {
      className: Y.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: Y.usernameRow,
        children: [(0, r.jsx)(f.vwX, {
          className: Y.fieldTitle,
          children: H.intl.string(H.t["9AjdkJ"])
        }), (0, r.jsx)("div", {
          className: Y.usernameInnerRow,
          ref: _,
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == d ? H.intl.string(H.t.ep5kjI) : d
          })
        })]
      })
    }), null != c && (0, r.jsx)("div", {
      className: Y.pomeloWarning,
      children: (0, r.jsx)(f.ua7, {
        text: c,
        "aria-label": false,
        children: e => (0, r.jsx)(f.Mgn, q(K({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: u.Z.colors.STATUS_WARNING.css
        }))
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: Y.fieldButton,
      children: (0, r.jsx)(f.zxk, {
        variant: "secondary",
        size: "sm",
        text: p ? H.intl.string(H.t["16kTw8"]) : H.intl.string(H.t.bt75u7),
        "aria-label": H.intl.string(H.t.YXeWYG),
        onClick: m
      })
    })]
  })
}

function ee(e) {
  let {
    text: t,
    censor: n,
    revealLabel: a,
    hideLabel: o
  } = e, [s, l] = i.useState(false), c = s ? t : n(t);
  return (0, r.jsxs)("div", {
    className: Y.textRevealer,
    children: [c, (0, r.jsx)(f.Avr, {
      variant: "primary",
      textVariant: "text-sm/medium",
      "aria-label": s ? o : a,
      onClick: () => l(!s),
      text: s ? H.intl.string(H.t.fgq1go) : H.intl.string(H.t.dcztdX)
    })]
  })
}

function et(e) {
  let t, {
    className: i,
    user: a
  } = e;
  if (a.isClaimed())
    if (null == a.email) t = {
      buttonText: H.intl.string(H.t.OYkgVl),
      buttonAriaLabel: H.intl.string(H.t["pvBD+f"]),
      buttonColor: d.zx.Colors.PRIMARY,
      valueMessage: H.intl.string(H.t["8SfTNz"]),
      handleClick: () => (0, f.ZDy)(async () => {
        let {
          default: e
        } = await n.e("9343").then(n.bind(n, 642298));
        return t => (0, r.jsx)(e, K({}, t))
      })
    };
    else {
      let {
        email: e
      } = a;
      t = {
        buttonText: H.intl.string(H.t.bt75u7),
        buttonAriaLabel: H.intl.string(H.t["8peUT0"]),
        buttonColor: d.zx.Colors.PRIMARY,
        valueMessage: (0, r.jsx)(ee, {
          text: e,
          censor: U.E,
          revealLabel: H.intl.string(H.t["Zvx+yc"]),
          hideLabel: H.intl.string(H.t.nqTD4e)
        }),
        handleClick: () => (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("9343").then(n.bind(n, 642298));
          return t => (0, r.jsx)(e, K({}, t))
        })
      }
    }
  else t = {
    buttonText: H.intl.string(H.t.BleMPD),
    buttonAriaLabel: H.intl.string(H.t.BleMPD),
    buttonColor: d.zx.Colors.BRAND,
    valueMessage: H.intl.string(H.t.qxk9zs),
    handleClick: () => E.Z.openClaimAccountModal()
  };
  return (0, r.jsxs)("div", {
    className: o()(Y.field, i),
    children: [(0, r.jsx)("div", {
      className: Y.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.vwX, {
          className: Y.fieldTitle,
          children: H.intl.string(H.t.tlZllJ)
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
      className: Y.fieldButton,
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

function en(e) {
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
      return t => (0, r.jsx)(e, K({
        reason: v.L.USER_SETTINGS_UPDATE
      }, t))
    }, {
      modalKey: F.M
    })
  }

  function h() {
    (0, f.h7j)(e => (0, r.jsx)(p.Z, q(K({}, e), {
      title: H.intl.string(H.t["3CTiKi"]),
      children: a.hasFlag(Z.xW$.MFA_SMS) ? H.intl.string(H.t.jrhJys) : true,
      actionText: H.intl.string(H.t.N86XcH),
      handleSubmit: e => v.Z.removePhone(e, v.L.USER_SETTINGS_UPDATE)
    })))
  }
  return t = c ? (0, r.jsx)(ee, {
    text: s,
    censor: U.n,
    revealLabel: H.intl.string(H.t.eY3xlZ),
    hideLabel: H.intl.string(H.t.jllbv7)
  }) : H.intl.string(H.t.I5kDqq), (0, r.jsxs)("div", {
    className: o()(Y.field, i),
    children: [(0, r.jsx)("div", {
      className: Y.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.vwX, {
          className: Y.fieldTitle,
          children: H.intl.string(H.t.kerONj)
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
      className: Y.fieldButtonList,
      children: [c && u ? (0, r.jsx)(d.zx, {
        className: o()(Y.fieldButton, Y.removeButton),
        size: d.zx.Sizes.SMALL,
        look: d.zx.Looks.LINK,
        color: d.zx.Colors.PRIMARY,
        "aria-label": H.intl.string(H.t.Rpn4Aw),
        onClick: h,
        children: H.intl.string(H.t.N86XcH)
      }) : null, (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Y.fieldButton,
        children: (0, r.jsx)(f.zxk, {
          variant: "secondary",
          size: "sm",
          text: c ? H.intl.string(H.t.bt75u7) : H.intl.string(H.t.OYkgVl),
          "aria-label": c ? H.intl.string(H.t.YDabSU) : H.intl.string(H.t.SfUuEx),
          onClick: _
        })
      })]
    })]
  })
}

function er(e) {
  let {
    user: t
  } = e, n = (0, b.Z)({
    id: t.id,
    label: H.intl.string(H.t["/AXYnJ"])
  }), a = M.Sb.useSetting(), o = i.useRef(null);
  return a && x.wS ? (0, r.jsx)(f.yRy, {
    targetElementRef: o,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(f.v2r, {
        onClose: t,
        onSelect: true,
        navId: "copy-id",
        "aria-label": H.intl.string(H.t.RANhlJ),
        children: n
      })
    },
    children: e => (0, r.jsx)(f.P3F, q(K({}, e), {
      innerRef: o,
      className: Y.overflowMenuButton,
      "aria-label": H.intl.string(H.t.DEoVWV),
      children: (0, r.jsx)(f.xhG, {
        size: "md",
        color: "currentColor",
        className: Y.overflowMenuIcon
      })
    }))
  }) : null
}

function ei(e) {
  let {
    className: t
  } = e, n = (0, g.l6)(), a = (0, g.Jm)(), s = !n || a, l = i.useMemo(() => n ? a ? H.intl.string(H.t.sK0dmJ) : H.intl.string(H.t.XxRj7e) : H.intl.string(H.t.UX0OdX), [n, a]);
  return (0, r.jsxs)("div", {
    className: o()(Y.field, t),
    children: [(0, r.jsx)("div", {
      className: Y.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.vwX, {
          className: Y.fieldTitle,
          children: H.intl.string(H.t["/52UY2"])
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
      className: Y.fieldButton,
      children: (0, r.jsx)(f.zxk, {
        variant: "secondary",
        size: "sm",
        text: a ? H.intl.string(H.t.KPGVWl) : H.intl.string(H.t.yNGjyM),
        "aria-label": a ? H.intl.string(H.t.KPGVWl) : H.intl.string(H.t.yNGjyM),
        onClick: () => h.Z.showAgeVerificationGetStartedModal({
          entryPoint: m.cU.ACCOUNT_AGE_GROUP
        })
      })
    })]
  })
}

function ea() {
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
    }),
    p = Q();
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk378846.accountProfileCard,
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
      className: Chunk378846.userInfo,
      children: [(0, Chunk951288.jsx)(X, {
        className: Chunk378846.avatar,
        src: Chunk692547,
        avatarDecoration: Chunk755721,
        status: Chunk120356,
        size: Chunk481060.EFr.SIZE_80,
        "aria-label": exports.username
      }), (0, Chunk951288.jsxs)("div", {
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk378846.profileCardUsernameRow,
          children: [(0, Chunk951288.jsx)(Chunk129861.Z, {
            user: exports,
            className: Chunk378846.userTag,
            discriminatorClass: Chunk378846.discriminator,
            displayNameStylesType: Chunk821795.F.STATIC
          }), (0, Chunk951288.jsx)(er, {
            user: exports
          })]
        }), (0, Chunk951288.jsx)(Chunk184325.Z, {
          badges: Chunk647438,
          className: Chunk378846.badgeList,
          badgeClassName: Chunk378846.badge
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t["2p2aY2"]),
        onClick: Chunk279837
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk378846.background,
      children: [null != Chunk512722 ? (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk378846.avatarError,
        variant: "text-xs/normal",
        color: "text-danger",
        children: Chunk512722
      }) : null, (0, Chunk951288.jsxs)("div", {
        className: Chunk378846.fieldList,
        children: [(0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_DISPLAY_NAME,
          children: (0, Chunk951288.jsx)($, {
            className: Chunk378846.fieldSpacerBottom,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_USERNAME,
          children: (0, Chunk951288.jsx)(J, {
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_EMAIL,
          children: (0, Chunk951288.jsx)(et, {
            className: Chunk378846.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_PHONE_NUMBER,
          children: (0, Chunk951288.jsx)(en, {
            className: Chunk378846.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_AGE_GROUP,
          children: (0, Chunk951288.jsx)(ei, {
            className: Chunk378846.fieldSpacer
          })
        })]
      })]
    })]
  })
}
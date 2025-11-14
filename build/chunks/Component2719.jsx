/** Chunk was on web.js **/
/** chunk id: 2719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eo
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
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
  Chunk438976 = require("./438976.js"),
  Chunk485341 = require("./485341.js"),
  Chunk687158 = require("./687158.js"),
  Chunk518950 = require("./518950.js"),
  Chunk184325 = require("./184325.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk355497 = require("./355497.jsx"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk572004 = require("./572004.js"),
  Chunk51144 = require("./51144.js"),
  Chunk998502 = require("./998502.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk461877 = require("./461877.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk801461 = require("./801461.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk378846 = require("./378846.js");

function K(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      K(e, t, n[t])
    })
  }
  return e
}

function q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function X(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function J() {
  (0, Chunk518596.openUserSettings)(Chunk313789.n.PROFILE_PANEL, {
    section: Chunk981631.oAB.PROFILE_CUSTOMIZATION
  })
}

function $(e) {
  var t, a;
  let {
    className: s,
    user: l
  } = e, c = i.useRef(null), _ = (0, v.o9)(), p = (0, I.b)(), h = (0, y.gS)(), m = null != (a = null == h || null == (t = h.nick) ? true : t[0]) ? a : null, [g, E] = i.useState(false);
  i.useEffect(() => {
    E(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [l.username]);
  let b = !l.isClaimed(),
    O = _ && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone() || b,
    T = O ? Y.intl.string(Y.t["7Ngnyr"]) : true;
  return (0, r.jsxs)("div", {
    className: o()(W.field, s),
    children: [(0, r.jsx)("div", {
      className: W.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: W.usernameRow,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: W.fieldTitle,
          children: Y.intl.string(Y.t.qqhR3L)
        }), (0, r.jsxs)("div", {
          className: W.usernameInnerRow,
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
    }), p && (0, r.jsx)("div", {
      className: W.pomeloWarning,
      children: (0, r.jsx)(d.u, {
        text: Y.intl.string(Y.t.HHC5Z4),
        children: (0, r.jsx)(f.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.Z.colors.STATUS_WARNING.css
        })
      })
    }), null != m && (0, r.jsx)("div", {
      className: W.pomeloWarning,
      children: (0, r.jsx)(d.u, {
        __unsupportedReactNodeAsText: m,
        "aria-label": false,
        children: (0, r.jsx)(f.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.Z.colors.STATUS_WARNING.css
        })
      })
    }), (0, r.jsx)(d.u, {
      text: T,
      children: (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: W.fieldButton,
        children: (0, r.jsx)(f.Button, {
          variant: "secondary",
          size: "sm",
          text: g ? Y.intl.string(Y.t["16kTw/"]) : Y.intl.string(Y.t.bt75uw),
          disabled: O,
          "aria-label": Y.intl.string(Y.t.JECa91),
          onClick: () => (0, f.ZDy)(async () => {
            if (p) {
              let {
                default: e
              } = await n.e("85342").then(n.bind(n, 193049));
              return t => (0, r.jsx)(e, z({
                source: H.Kq.USER_SETTINGS_EDIT
              }, t))
            } {
              let {
                default: e
              } = await n.e("42758").then(n.bind(n, 2702));
              return t => (0, r.jsx)(e, z({}, t))
            }
          })
        })
      })
    })]
  })
}

function ee(e) {
  var t, n;
  let {
    user: a,
    className: s
  } = e, l = (0, y.gS)(), c = null != (n = null == l || null == (t = l.nick) ? true : t[0]) ? n : null, _ = M.ZP.getGlobalName(a), p = i.useRef(null), [h, m] = i.useState(false);
  return i.useEffect(() => {
    m(null != p.current && p.current.scrollWidth > p.current.clientWidth)
  }, [_]), (0, r.jsxs)("div", {
    className: o()(W.field, s),
    children: [(0, r.jsx)("div", {
      className: W.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: W.usernameRow,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: W.fieldTitle,
          children: Y.intl.string(Y.t["9AjdkD"])
        }), (0, r.jsx)("div", {
          className: W.usernameInnerRow,
          ref: p,
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == _ ? Y.intl.string(Y.t.ep5kjK) : _
          })
        })]
      })
    }), null != c && (0, r.jsx)("div", {
      className: W.pomeloWarning,
      children: (0, r.jsx)(d.u, {
        __unsupportedReactNodeAsText: c,
        "aria-label": false,
        children: (0, r.jsx)(f.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.Z.colors.STATUS_WARNING.css
        })
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: W.fieldButton,
      children: (0, r.jsx)(f.Button, {
        variant: "secondary",
        size: "sm",
        text: h ? Y.intl.string(Y.t["16kTw/"]) : Y.intl.string(Y.t.bt75uw),
        "aria-label": Y.intl.string(Y.t.YXeWYM),
        onClick: J
      })
    })]
  })
}

function et(e) {
  let {
    text: t,
    censor: n,
    revealLabel: a,
    hideLabel: o
  } = e, [s, l] = i.useState(false), c = s ? t : n(t);
  return (0, r.jsxs)("div", {
    className: W.textRevealer,
    children: [c, (0, r.jsx)(f.Avr, {
      variant: "primary",
      textVariant: "text-sm/medium",
      "aria-label": s ? o : a,
      onClick: () => l(!s),
      text: s ? Y.intl.string(Y.t.fgq1gs) : Y.intl.string(Y.t.dcztdU)
    })]
  })
}

function en(e) {
  let t, {
    className: i,
    user: a
  } = e;
  if (a.isClaimed())
    if (null == a.email) t = {
      buttonText: Y.intl.string(Y.t.OYkgVk),
      buttonAriaLabel: Y.intl.string(Y.t["pvBD+W"]),
      valueMessage: Y.intl.string(Y.t["8SfTN/"]),
      handleClick: () => (0, f.ZDy)(async () => {
        let {
          default: e
        } = await n.e("9343").then(n.bind(n, 642298));
        return t => (0, r.jsx)(e, z({}, t))
      })
    };
    else {
      let {
        email: e
      } = a;
      t = {
        buttonText: Y.intl.string(Y.t.bt75uw),
        buttonAriaLabel: Y.intl.string(Y.t["8peUT0"]),
        valueMessage: (0, r.jsx)(et, {
          text: e,
          censor: G.E,
          revealLabel: Y.intl.string(Y.t["Zvx+yV"]),
          hideLabel: Y.intl.string(Y.t.nqTD4d)
        }),
        handleClick: () => (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("9343").then(n.bind(n, 642298));
          return t => (0, r.jsx)(e, z({}, t))
        })
      }
    }
  else t = {
    buttonText: Y.intl.string(Y.t.BleMPB),
    buttonAriaLabel: Y.intl.string(Y.t.BleMPB),
    valueMessage: Y.intl.string(Y.t.qxk9zo),
    handleClick: () => g.Z.openClaimAccountModal()
  };
  return (0, r.jsxs)("div", {
    className: o()(W.field, i),
    children: [(0, r.jsx)("div", {
      className: W.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: W.fieldTitle,
          children: Y.intl.string(Y.t.tlZllC)
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
      className: W.fieldButton,
      children: (0, r.jsx)(f.Button, {
        variant: "secondary",
        size: "sm",
        text: t.buttonText,
        "aria-label": t.buttonAriaLabel,
        onClick: t.handleClick
      })
    })]
  })
}

function er(e) {
  let t, {
    className: i,
    user: a
  } = e;
  if (!a.isClaimed()) return null;
  let {
    phone: s,
    email: l
  } = a, c = null != s, u = null != l;

  function d() {
    (0, f.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 607018));
      return t => (0, r.jsx)(e, z({
        reason: O.L.USER_SETTINGS_UPDATE
      }, t))
    }, {
      modalKey: V.M
    })
  }

  function _() {
    (0, f.h7j)(e => (0, r.jsx)(D.Z, X(z({}, e), {
      title: Y.intl.string(Y.t["3CTiKi"]),
      children: a.hasFlag(F.xW$.MFA_SMS) ? Y.intl.string(Y.t.jrhJyo) : true,
      actionText: Y.intl.string(Y.t.N86XcP),
      handleSubmit: e => O.Z.removePhone(e, O.L.USER_SETTINGS_UPDATE)
    })))
  }
  return t = c ? (0, r.jsx)(et, {
    text: s,
    censor: G.n,
    revealLabel: Y.intl.string(Y.t.eY3xlT),
    hideLabel: Y.intl.string(Y.t["jllbv+"])
  }) : Y.intl.string(Y.t.I5kDqj), (0, r.jsxs)("div", {
    className: o()(W.field, i),
    children: [(0, r.jsx)("div", {
      className: W.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: W.fieldTitle,
          children: Y.intl.string(Y.t.kerONq)
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
      className: W.fieldButtonList,
      children: [c && u ? (0, r.jsx)("div", {
        className: o()(W.fieldButton, W.removeButton),
        children: (0, r.jsx)(f.Avr, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: Y.intl.string(Y.t.N86XcP),
          "aria-label": Y.intl.string(Y.t.Rpn4A3),
          onClick: _
        })
      }) : null, (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: W.fieldButton,
        children: (0, r.jsx)(f.Button, {
          variant: "secondary",
          size: "sm",
          text: c ? Y.intl.string(Y.t.bt75uw) : Y.intl.string(Y.t.OYkgVk),
          "aria-label": c ? Y.intl.string(Y.t.YDabSe) : Y.intl.string(Y.t["SfUuE+"]),
          onClick: d
        })
      })]
    })]
  })
}

function ei(e) {
  let {
    user: t
  } = e, n = (0, E.Z)({
    id: t.id,
    label: Y.intl.string(Y.t["/AXYnE"])
  }), a = j.Sb.useSetting(), o = i.useRef(null);
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
        "aria-label": Y.intl.string(Y.t.RANhlE),
        children: n
      })
    },
    children: e => (0, r.jsx)(f.P3F, X(z({}, e), {
      innerRef: o,
      className: W.overflowMenuButton,
      "aria-label": Y.intl.string(Y.t.DEoVWZ),
      children: (0, r.jsx)(f.xhG, {
        size: "md",
        color: "currentColor",
        className: W.overflowMenuIcon
      })
    }))
  }) : null
}

function ea(e) {
  let {
    className: t
  } = e, n = (0, m.l6)(), a = (0, m.Jm)(), s = !n || a, l = i.useMemo(() => n ? a ? Y.intl.string(Y.t.sK0dmH) : Y.intl.string(Y.t.XxRj7f) : Y.intl.string(Y.t.UX0Ode), [n, a]);
  return (0, r.jsxs)("div", {
    className: o()(W.field, t),
    children: [(0, r.jsx)("div", {
      className: W.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: W.fieldTitle,
          children: Y.intl.string(Y.t["/52UYy"])
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
      className: W.fieldButton,
      children: (0, r.jsx)(f.Button, {
        variant: "secondary",
        size: "sm",
        text: a ? Y.intl.string(Y.t.KPGVWl) : Y.intl.string(Y.t.yNGjyK),
        "aria-label": a ? Y.intl.string(Y.t.KPGVWl) : Y.intl.string(Y.t.yNGjyK),
        onClick: () => p.Z.showAgeVerificationGetStartedModal({
          entryPoint: h.cU.ACCOUNT_AGE_GROUP
        })
      })
    })]
  })
}

function eo() {
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
    p = (0, Chunk438976.Z)();
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk378846.accountProfileCard,
    children: [(0, Chunk951288.jsx)(Chunk867176.b, {
      user: exports,
      displayProfile: require,
      avatarSize: Chunk481060.EFr.SIZE_80,
      avatarOffsetX: 16,
      avatarOffsetY: false,
      bannerWidth: Chunk168107 ? 696 : 660,
      bannerHeight: 100,
      themePadding: 0
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk378846.userInfo,
      children: [(0, Chunk951288.jsx)(Q, {
        className: Chunk378846.avatar,
        src: Chunk692547,
        avatarDecoration: Chunk28664,
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
          }), (0, Chunk951288.jsx)(ei, {
            user: exports
          })]
        }), (0, Chunk951288.jsx)(Chunk184325.Z, {
          badges: Chunk647438,
          className: Chunk378846.badgeList,
          badgeClassName: Chunk378846.badge
        })]
      }), (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t["2p2aYz"]),
        onClick: J
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
          children: (0, Chunk951288.jsx)(ee, {
            className: Chunk378846.fieldSpacerBottom,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_USERNAME,
          children: (0, Chunk951288.jsx)($, {
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_EMAIL,
          children: (0, Chunk951288.jsx)(en, {
            className: Chunk378846.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_PHONE_NUMBER,
          children: (0, Chunk951288.jsx)(er, {
            className: Chunk378846.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_AGE_GROUP,
          children: (0, Chunk951288.jsx)(ea, {
            className: Chunk378846.fieldSpacer
          })
        })]
      })]
    })]
  })
}
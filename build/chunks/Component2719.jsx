/** Chunk was on web.js **/
/** chunk id: 2719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => el
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk921801 = require("./921801.jsx"),
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
  Chunk128064 = require("./128064.js"),
  Chunk312870 = require("./312870.js"),
  Chunk695346 = require("./695346.js"),
  Chunk313789 = require("./313789.js"),
  Chunk461877 = require("./461877.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk801461 = require("./801461.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54497 = require("./54497.js");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function X(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let $ = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function ee() {
  (0, B.openUserSettings)(Z.n.PROFILE_PANEL, {
    section: H.oAB.PROFILE_CUSTOMIZATION
  })
}

function et(e) {
  var t, a;
  let {
    className: s,
    user: l
  } = e, c = i.useRef(null), p = (0, v.o9)(), _ = (0, S.b)(), m = (0, y.gS)(), h = null != (a = null == m || null == (t = m.nick) ? true : t[0]) ? a : null, [g, E] = i.useState(false);
  i.useEffect(() => {
    E(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [l.username]);
  let b = !l.isClaimed(),
    O = p && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone() || b,
    I = O ? K.intl.string(K.t["7Ngnyr"]) : true;
  return (0, r.jsxs)("div", {
    className: o()(z.field, s),
    children: [(0, r.jsx)("div", {
      className: z.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: z.usernameRow,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: z.fieldTitle,
          children: K.intl.string(K.t.qqhR3L)
        }), (0, r.jsxs)("div", {
          className: z.usernameInnerRow,
          ref: c,
          children: [(0, r.jsx)(f.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: l.username
          }), !l.hasUniqueUsername() && (0, r.jsxs)(f.Text, {
            tag: "span",
            color: "text-default",
            variant: "text-md/normal",
            children: ["#", l.discriminator]
          })]
        })]
      })
    }), _ && (0, r.jsx)("div", {
      className: z.pomeloWarning,
      children: (0, r.jsx)(d.u, {
        text: K.intl.string(K.t.HHC5Z4),
        children: (0, r.jsx)(f.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.Z.colors.STATUS_WARNING.css
        })
      })
    }), null != h && (0, r.jsx)("div", {
      className: z.pomeloWarning,
      children: (0, r.jsx)(d.u, {
        __unsupportedReactNodeAsText: h,
        "aria-label": false,
        children: (0, r.jsx)(f.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.Z.colors.STATUS_WARNING.css
        })
      })
    }), (0, r.jsx)(d.u, {
      text: I,
      children: (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: z.fieldButton,
        children: (0, r.jsx)(f.Button, {
          variant: "secondary",
          size: "sm",
          text: g ? K.intl.string(K.t["16kTw/"]) : K.intl.string(K.t.bt75uw),
          disabled: O,
          "aria-label": K.intl.string(K.t.JECa91),
          onClick: () => (0, f.ZDy)(async () => {
            if (_) {
              let {
                default: e
              } = await n.e("85342").then(n.bind(n, 193049));
              return t => (0, r.jsx)(e, Q({
                source: W.Kq.USER_SETTINGS_EDIT
              }, t))
            } {
              let {
                default: e
              } = await n.e("42758").then(n.bind(n, 2702));
              return t => (0, r.jsx)(e, Q({}, t))
            }
          })
        })
      })
    })]
  })
}

function en(e) {
  var t, n;
  let {
    user: a,
    className: s
  } = e, l = (0, y.gS)(), c = null != (n = null == l || null == (t = l.nick) ? true : t[0]) ? n : null, p = j.ZP.getGlobalName(a), _ = i.useRef(null), [m, h] = i.useState(false);
  return i.useEffect(() => {
    h(null != _.current && _.current.scrollWidth > _.current.clientWidth)
  }, [p]), (0, r.jsxs)("div", {
    className: o()(z.field, s),
    children: [(0, r.jsx)("div", {
      className: z.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: z.usernameRow,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: z.fieldTitle,
          children: K.intl.string(K.t["9AjdkD"])
        }), (0, r.jsx)("div", {
          className: z.usernameInnerRow,
          ref: _,
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: null == p ? K.intl.string(K.t.ep5kjK) : p
          })
        })]
      })
    }), null != c && (0, r.jsx)("div", {
      className: z.pomeloWarning,
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
      className: z.fieldButton,
      children: (0, r.jsx)(f.Button, {
        variant: "secondary",
        size: "sm",
        text: m ? K.intl.string(K.t["16kTw/"]) : K.intl.string(K.t.bt75uw),
        "aria-label": K.intl.string(K.t.YXeWYM),
        onClick: ee
      })
    })]
  })
}

function er(e) {
  let {
    text: t,
    censor: n,
    revealLabel: a,
    hideLabel: o
  } = e, [s, l] = i.useState(false), c = s ? t : n(t);
  return (0, r.jsxs)("div", {
    className: z.textRevealer,
    children: [c, (0, r.jsx)(f.Avr, {
      variant: "primary",
      textVariant: "text-sm/medium",
      "aria-label": s ? o : a,
      onClick: () => l(!s),
      text: s ? K.intl.string(K.t.fgq1gs) : K.intl.string(K.t.dcztdU)
    })]
  })
}

function ei(e) {
  let t, {
    className: i,
    user: a
  } = e;
  if (a.isClaimed())
    if (null == a.email) t = {
      buttonText: K.intl.string(K.t.OYkgVk),
      buttonAriaLabel: K.intl.string(K.t["pvBD+W"]),
      valueMessage: K.intl.string(K.t["8SfTN/"]),
      handleClick: () => (0, f.ZDy)(async () => {
        let {
          default: e
        } = await n.e("9343").then(n.bind(n, 642298));
        return t => (0, r.jsx)(e, Q({}, t))
      })
    };
    else {
      let {
        email: e
      } = a;
      t = {
        buttonText: K.intl.string(K.t.bt75uw),
        buttonAriaLabel: K.intl.string(K.t["8peUT0"]),
        valueMessage: (0, r.jsx)(er, {
          text: e,
          censor: F.E,
          revealLabel: K.intl.string(K.t["Zvx+yV"]),
          hideLabel: K.intl.string(K.t.nqTD4d)
        }),
        handleClick: () => (0, f.ZDy)(async () => {
          let {
            default: e
          } = await n.e("9343").then(n.bind(n, 642298));
          return t => (0, r.jsx)(e, Q({}, t))
        })
      }
    }
  else t = {
    buttonText: K.intl.string(K.t.BleMPB),
    buttonAriaLabel: K.intl.string(K.t.BleMPB),
    valueMessage: K.intl.string(K.t.qxk9zo),
    handleClick: () => g.Z.openClaimAccountModal()
  };
  return (0, r.jsxs)("div", {
    className: o()(z.field, i),
    children: [(0, r.jsx)("div", {
      className: z.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: z.fieldTitle,
          children: K.intl.string(K.t.tlZllC)
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: t.valueMessage
          })
        })]
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: z.fieldButton,
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

function ea(e) {
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
      return t => (0, r.jsx)(e, Q({
        reason: O.L.USER_SETTINGS_UPDATE
      }, t))
    }, {
      modalKey: Y.M
    })
  }

  function p() {
    (0, f.h7j)(e => (0, r.jsx)(w.default, J(Q({}, e), {
      title: K.intl.string(K.t["3CTiKi"]),
      children: a.hasFlag(H.xW$.MFA_SMS) ? K.intl.string(K.t.jrhJyo) : true,
      actionText: K.intl.string(K.t.N86XcP),
      handleSubmit: e => O.Z.removePhone(e, O.L.USER_SETTINGS_UPDATE)
    })))
  }
  return t = c ? (0, r.jsx)(er, {
    text: s,
    censor: F.n,
    revealLabel: K.intl.string(K.t.eY3xlT),
    hideLabel: K.intl.string(K.t["jllbv+"])
  }) : K.intl.string(K.t.I5kDqj), (0, r.jsxs)("div", {
    className: o()(z.field, i),
    children: [(0, r.jsx)("div", {
      className: z.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: z.fieldTitle,
          children: K.intl.string(K.t.kerONq)
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: t
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: z.fieldButtonList,
      children: [c && u ? (0, r.jsx)("div", {
        className: o()(z.fieldButton, z.removeButton),
        children: (0, r.jsx)(f.Avr, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: K.intl.string(K.t.N86XcP),
          "aria-label": K.intl.string(K.t.Rpn4A3),
          onClick: p
        })
      }) : null, (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: z.fieldButton,
        children: (0, r.jsx)(f.Button, {
          variant: "secondary",
          size: "sm",
          text: c ? K.intl.string(K.t.bt75uw) : K.intl.string(K.t.OYkgVk),
          "aria-label": c ? K.intl.string(K.t.YDabSe) : K.intl.string(K.t["SfUuE+"]),
          onClick: d
        })
      })]
    })]
  })
}

function eo(e) {
  let {
    user: t
  } = e, n = (0, E.Z)({
    id: t.id,
    label: K.intl.string(K.t["/AXYnE"])
  }), a = G.Sb.useSetting(), o = i.useRef(null);
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
        "aria-label": K.intl.string(K.t.RANhlE),
        children: n
      })
    },
    children: e => (0, r.jsx)(f.P3F, J(Q({}, e), {
      innerRef: o,
      className: z.overflowMenuButton,
      "aria-label": K.intl.string(K.t.DEoVWZ),
      children: (0, r.jsx)(f.xhG, {
        size: "md",
        color: "currentColor",
        className: z.overflowMenuIcon
      })
    }))
  }) : null
}

function es(e) {
  let {
    className: t
  } = e, n = (0, h.l6)(), a = (0, h.Jm)(), s = !n || a, l = i.useMemo(() => n ? a ? K.intl.string(K.t.sK0dmH) : K.intl.string(K.t.XxRj7f) : K.intl.string(K.t.UX0Ode), [n, a]);
  return (0, r.jsxs)("div", {
    className: o()(z.field, t),
    children: [(0, r.jsx)("div", {
      className: z.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: z.fieldTitle,
          children: K.intl.string(K.t["/52UYy"])
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: l
          })
        })]
      })
    }), s && (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: z.fieldButton,
      children: (0, r.jsx)(f.Button, {
        variant: "secondary",
        size: "sm",
        text: a ? K.intl.string(K.t.KPGVWl) : K.intl.string(K.t.yNGjyK),
        "aria-label": a ? K.intl.string(K.t.KPGVWl) : K.intl.string(K.t.yNGjyK),
        onClick: () => _.Z.showAgeVerificationGetStartedModal({
          entryPoint: m.cU.ACCOUNT_AGE_GROUP
        })
      })
    })]
  })
}

function el() {
  var e;
  let t = (0, c.e7)([x.default], () => {
      let e = x.default.getCurrentUser();
      return l()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e
    }),
    n = (0, A.ZP)(t.id),
    i = (0, C.Z)(n),
    a = G.co.useSetting(),
    o = (0, c.e7)([D.Z], () => D.Z.getErrors()),
    s = null == o || null == (e = o.avatar) ? true : e[0],
    {
      avatarSrc: u,
      avatarDecorationSrc: d
    } = (0, N.Z)({
      userId: null == t ? true : t.id,
      size: f.EFr.SIZE_80
    }),
    _ = (0, T.Z)(),
    m = (0, k.pY)("UserSettingsAccountProfileCard"),
    h = (0, U.s)("UserSettingsAccountProfileCard"),
    g = m || h;
  return (0, r.jsxs)("div", {
    className: z.accountProfileCard,
    children: [(0, r.jsx)(R.b, {
      user: t,
      displayProfile: n,
      avatarSize: f.EFr.SIZE_80,
      avatarOffsetX: 16,
      avatarOffsetY: false,
      bannerWidth: _ ? 696 : 660,
      bannerHeight: 100,
      themePadding: 0
    }), (0, r.jsxs)("div", {
      className: z.userInfo,
      children: [(0, r.jsx)($, {
        className: z.avatar,
        src: u,
        avatarDecoration: d,
        status: a,
        size: f.EFr.SIZE_80,
        "aria-label": t.username
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: z.profileCardUsernameRow,
          children: [(0, r.jsx)(p.Z, {
            user: t,
            className: z.userTag,
            discriminatorClass: z.discriminator,
            displayNameStylesType: b.F.STATIC
          }), (0, r.jsx)(eo, {
            user: t
          })]
        }), (0, r.jsx)(P.Z, {
          badges: i,
          className: z.badgeList,
          badgeClassName: z.badge
        })]
      }), (0, r.jsx)(f.Button, {
        variant: "primary",
        size: "sm",
        text: K.intl.string(K.t["2p2aYz"]),
        onClick: ee
      })]
    }), (0, r.jsxs)("div", {
      className: z.background,
      children: [null != s ? (0, r.jsx)(f.Text, {
        className: z.avatarError,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: s
      }) : null, (0, r.jsxs)("div", {
        className: z.fieldList,
        children: [(0, r.jsx)(I.F, {
          setting: V.s6.ACCOUNT_DISPLAY_NAME,
          children: (0, r.jsx)(en, {
            className: z.fieldSpacerBottom,
            user: t
          })
        }), (0, r.jsx)(I.F, {
          setting: V.s6.ACCOUNT_USERNAME,
          children: (0, r.jsx)(et, {
            user: t
          })
        }), (0, r.jsx)(I.F, {
          setting: V.s6.ACCOUNT_EMAIL,
          children: (0, r.jsx)(ei, {
            className: z.fieldSpacer,
            user: t
          })
        }), (0, r.jsx)(I.F, {
          setting: V.s6.ACCOUNT_PHONE_NUMBER,
          children: (0, r.jsx)(ea, {
            className: z.fieldSpacer,
            user: t
          })
        }), g && (0, r.jsx)(I.F, {
          setting: V.s6.ACCOUNT_AGE_GROUP,
          children: (0, r.jsx)(es, {
            className: z.fieldSpacer
          })
        })]
      })]
    })]
  })
}
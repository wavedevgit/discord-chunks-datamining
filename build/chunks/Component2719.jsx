/** Chunk was on web.js **/
/** chunk id: 2719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => es
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
  Chunk438976 = require("./438976.js"),
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

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
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

function Q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : X(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let J = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function $() {
  let e = (0, Chunk947889.Z)();
  return () => {
    module(Chunk313789.n.PROFILE_PANEL, {
      section: Chunk981631.oAB.PROFILE_CUSTOMIZATION
    })
  }
}

function ee(e) {
  var t, a;
  let {
    className: s,
    user: l
  } = e, c = i.useRef(null), f = (0, T.o9)(), p = (0, S.b)(), h = (0, v.gS)(), m = null != (a = null == h || null == (t = h.nick) ? true : t[0]) ? a : null, [g, E] = i.useState(false);
  i.useEffect(() => {
    E(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [l.username]);
  let b = !l.isClaimed(),
    y = f && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone() || b,
    O = y ? W.intl.string(W.t["7Ngnys"]) : true;
  return (0, r.jsxs)("div", {
    className: o()(K.field, s),
    children: [(0, r.jsx)("div", {
      className: K.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: K.usernameRow,
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: K.fieldTitle,
          children: W.intl.string(W.t.qqhR3N)
        }), (0, r.jsxs)("div", {
          className: K.usernameInnerRow,
          ref: c,
          children: [(0, r.jsx)(_.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: l.username
          }), !l.hasUniqueUsername() && (0, r.jsxs)(_.Text, {
            tag: "span",
            color: "header-secondary",
            variant: "text-md/normal",
            children: ["#", l.discriminator]
          })]
        })]
      })
    }), p && (0, r.jsx)("div", {
      className: K.pomeloWarning,
      children: (0, r.jsx)(d.u, {
        text: W.intl.string(W.t.HHC5Z2),
        children: (0, r.jsx)(_.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.Z.colors.STATUS_WARNING.css
        })
      })
    }), null != m && (0, r.jsx)("div", {
      className: K.pomeloWarning,
      children: (0, r.jsx)(d.u, {
        __unsupportedReactNodeAsText: m,
        "aria-label": false,
        children: (0, r.jsx)(_.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.Z.colors.STATUS_WARNING.css
        })
      })
    }), (0, r.jsx)(d.u, {
      text: O,
      children: (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: K.fieldButton,
        children: (0, r.jsx)(_.Button, {
          variant: "secondary",
          size: "sm",
          text: g ? W.intl.string(W.t["16kTw8"]) : W.intl.string(W.t.bt75u7),
          disabled: y,
          "aria-label": W.intl.string(W.t["JECa9/"]),
          onClick: () => (0, _.ZDy)(async () => {
            if (p) {
              let {
                default: e
              } = await n.e("85342").then(n.bind(n, 193049));
              return t => (0, r.jsx)(e, q({
                source: Y.Kq.USER_SETTINGS_EDIT
              }, t))
            } {
              let {
                default: e
              } = await n.e("42758").then(n.bind(n, 2702));
              return t => (0, r.jsx)(e, q({}, t))
            }
          })
        })
      })
    })]
  })
}

function et(e) {
  var t, n;
  let {
    user: a,
    className: s
  } = e, l = (0, v.gS)(), c = null != (n = null == l || null == (t = l.nick) ? true : t[0]) ? n : null, f = j.ZP.getGlobalName(a), p = i.useRef(null), [h, m] = i.useState(false);
  i.useEffect(() => {
    m(null != p.current && p.current.scrollWidth > p.current.clientWidth)
  }, [f]);
  let g = $();
  return (0, r.jsxs)("div", {
    className: o()(K.field, s),
    children: [(0, r.jsx)("div", {
      className: K.constrainedRow,
      children: (0, r.jsxs)("div", {
        className: K.usernameRow,
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: K.fieldTitle,
          children: W.intl.string(W.t["9AjdkJ"])
        }), (0, r.jsx)("div", {
          className: K.usernameInnerRow,
          ref: p,
          children: (0, r.jsx)(_.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == f ? W.intl.string(W.t.ep5kjI) : f
          })
        })]
      })
    }), null != c && (0, r.jsx)("div", {
      className: K.pomeloWarning,
      children: (0, r.jsx)(d.u, {
        __unsupportedReactNodeAsText: c,
        "aria-label": false,
        children: (0, r.jsx)(_.Mgn, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.Z.colors.STATUS_WARNING.css
        })
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: K.fieldButton,
      children: (0, r.jsx)(_.Button, {
        variant: "secondary",
        size: "sm",
        text: h ? W.intl.string(W.t["16kTw8"]) : W.intl.string(W.t.bt75u7),
        "aria-label": W.intl.string(W.t.YXeWYG),
        onClick: g
      })
    })]
  })
}

function en(e) {
  let {
    text: t,
    censor: n,
    revealLabel: a,
    hideLabel: o
  } = e, [s, l] = i.useState(false), c = s ? t : n(t);
  return (0, r.jsxs)("div", {
    className: K.textRevealer,
    children: [c, (0, r.jsx)(_.Avr, {
      variant: "primary",
      textVariant: "text-sm/medium",
      "aria-label": s ? o : a,
      onClick: () => l(!s),
      text: s ? W.intl.string(W.t.fgq1go) : W.intl.string(W.t.dcztdX)
    })]
  })
}

function er(e) {
  let t, {
    className: i,
    user: a
  } = e;
  if (a.isClaimed())
    if (null == a.email) t = {
      buttonText: W.intl.string(W.t.OYkgVl),
      buttonAriaLabel: W.intl.string(W.t["pvBD+f"]),
      buttonColor: f.zx.Colors.PRIMARY,
      valueMessage: W.intl.string(W.t["8SfTNz"]),
      handleClick: () => (0, _.ZDy)(async () => {
        let {
          default: e
        } = await n.e("9343").then(n.bind(n, 642298));
        return t => (0, r.jsx)(e, q({}, t))
      })
    };
    else {
      let {
        email: e
      } = a;
      t = {
        buttonText: W.intl.string(W.t.bt75u7),
        buttonAriaLabel: W.intl.string(W.t["8peUT0"]),
        buttonColor: f.zx.Colors.PRIMARY,
        valueMessage: (0, r.jsx)(en, {
          text: e,
          censor: B.E,
          revealLabel: W.intl.string(W.t["Zvx+yc"]),
          hideLabel: W.intl.string(W.t.nqTD4e)
        }),
        handleClick: () => (0, _.ZDy)(async () => {
          let {
            default: e
          } = await n.e("9343").then(n.bind(n, 642298));
          return t => (0, r.jsx)(e, q({}, t))
        })
      }
    }
  else t = {
    buttonText: W.intl.string(W.t.BleMPD),
    buttonAriaLabel: W.intl.string(W.t.BleMPD),
    buttonColor: f.zx.Colors.BRAND,
    valueMessage: W.intl.string(W.t.qxk9zs),
    handleClick: () => b.Z.openClaimAccountModal()
  };
  return (0, r.jsxs)("div", {
    className: o()(K.field, i),
    children: [(0, r.jsx)("div", {
      className: K.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: K.fieldTitle,
          children: W.intl.string(W.t.tlZllJ)
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(_.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t.valueMessage
          })
        })]
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: K.fieldButton,
      children: (0, r.jsx)(_.Button, {
        variant: "secondary",
        size: "sm",
        text: t.buttonText,
        "aria-label": t.buttonAriaLabel,
        onClick: t.handleClick
      })
    })]
  })
}

function ei(e) {
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
    (0, _.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 607018));
      return t => (0, r.jsx)(e, q({
        reason: I.L.USER_SETTINGS_UPDATE
      }, t))
    }, {
      modalKey: H.M
    })
  }

  function p() {
    (0, _.h7j)(e => (0, r.jsx)(h.Z, Q(q({}, e), {
      title: W.intl.string(W.t["3CTiKi"]),
      children: a.hasFlag(V.xW$.MFA_SMS) ? W.intl.string(W.t.jrhJys) : true,
      actionText: W.intl.string(W.t.N86XcH),
      handleSubmit: e => I.Z.removePhone(e, I.L.USER_SETTINGS_UPDATE)
    })))
  }
  return t = c ? (0, r.jsx)(en, {
    text: s,
    censor: B.n,
    revealLabel: W.intl.string(W.t.eY3xlZ),
    hideLabel: W.intl.string(W.t.jllbv7)
  }) : W.intl.string(W.t.I5kDqq), (0, r.jsxs)("div", {
    className: o()(K.field, i),
    children: [(0, r.jsx)("div", {
      className: K.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: K.fieldTitle,
          children: W.intl.string(W.t.kerONj)
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(_.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: K.fieldButtonList,
      children: [c && u ? (0, r.jsx)(f.zx, {
        className: o()(K.fieldButton, K.removeButton),
        size: f.zx.Sizes.SMALL,
        look: f.zx.Looks.LINK,
        color: f.zx.Colors.PRIMARY,
        "aria-label": W.intl.string(W.t.Rpn4Aw),
        onClick: p,
        children: W.intl.string(W.t.N86XcH)
      }) : null, (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: K.fieldButton,
        children: (0, r.jsx)(_.Button, {
          variant: "secondary",
          size: "sm",
          text: c ? W.intl.string(W.t.bt75u7) : W.intl.string(W.t.OYkgVl),
          "aria-label": c ? W.intl.string(W.t.YDabSU) : W.intl.string(W.t.SfUuEx),
          onClick: d
        })
      })]
    })]
  })
}

function ea(e) {
  let {
    user: t
  } = e, n = (0, y.Z)({
    id: t.id,
    label: W.intl.string(W.t["/AXYnJ"])
  }), a = U.Sb.useSetting(), o = i.useRef(null);
  return a && M.wS ? (0, r.jsx)(_.yRy, {
    targetElementRef: o,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(_.v2r, {
        onClose: t,
        onSelect: true,
        navId: "copy-id",
        "aria-label": W.intl.string(W.t.RANhlJ),
        children: n
      })
    },
    children: e => (0, r.jsx)(_.P3F, Q(q({}, e), {
      innerRef: o,
      className: K.overflowMenuButton,
      "aria-label": W.intl.string(W.t.DEoVWV),
      children: (0, r.jsx)(_.xhG, {
        size: "md",
        color: "currentColor",
        className: K.overflowMenuIcon
      })
    }))
  }) : null
}

function eo(e) {
  let {
    className: t
  } = e, n = (0, E.l6)(), a = (0, E.Jm)(), s = !n || a, l = i.useMemo(() => n ? a ? W.intl.string(W.t.sK0dmJ) : W.intl.string(W.t.XxRj7e) : W.intl.string(W.t.UX0OdX), [n, a]);
  return (0, r.jsxs)("div", {
    className: o()(K.field, t),
    children: [(0, r.jsx)("div", {
      className: K.constrainedRow,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: K.fieldTitle,
          children: W.intl.string(W.t["/52UY2"])
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(_.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: l
          })
        })]
      })
    }), s && (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: K.fieldButton,
      children: (0, r.jsx)(_.Button, {
        variant: "secondary",
        size: "sm",
        text: a ? W.intl.string(W.t.KPGVWl) : W.intl.string(W.t.yNGjyM),
        "aria-label": a ? W.intl.string(W.t.KPGVWl) : W.intl.string(W.t.yNGjyM),
        onClick: () => m.Z.showAgeVerificationGetStartedModal({
          entryPoint: g.cU.ACCOUNT_AGE_GROUP
        })
      })
    })]
  })
}

function es() {
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
    f = $(),
    h = (0, Chunk438976.Z)();
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk378846.accountProfileCard,
    children: [(0, Chunk951288.jsx)(Chunk867176.b, {
      user: exports,
      displayProfile: require,
      avatarSize: Chunk481060.EFr.SIZE_80,
      avatarOffsetX: 16,
      avatarOffsetY: false,
      bannerWidth: Chunk279837 ? 696 : 660,
      bannerHeight: 100,
      themePadding: 0
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk378846.userInfo,
      children: [(0, Chunk951288.jsx)(J, {
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
          }), (0, Chunk951288.jsx)(ea, {
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
        text: Chunk388032.intl.string(Chunk388032.t["2p2aY2"]),
        onClick: Chunk755721
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
          children: (0, Chunk951288.jsx)(et, {
            className: Chunk378846.fieldSpacerBottom,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_USERNAME,
          children: (0, Chunk951288.jsx)(ee, {
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_EMAIL,
          children: (0, Chunk951288.jsx)(er, {
            className: Chunk378846.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_PHONE_NUMBER,
          children: (0, Chunk951288.jsx)(ei, {
            className: Chunk378846.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_AGE_GROUP,
          children: (0, Chunk951288.jsx)(eo, {
            className: Chunk378846.fieldSpacer
          })
        })]
      })]
    })]
  })
}
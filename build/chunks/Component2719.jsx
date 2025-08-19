/** Chunk was on 66181 **/
/** chunk id: 2719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => en
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk378846 = require("./378846.js");

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function K(e) {
  var t, s;
  let {
    className: l,
    user: o
  } = e, c = r.useRef(null), u = (0, v.o9)(), p = (0, S.b)(), g = (0, C.gS)(), h = null != (s = null == g || null == (t = g.nick) ? true : t[0]) ? s : null, [f, b] = r.useState(false);
  r.useEffect(() => {
    b(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [o.username]);
  let x = !o.isClaimed(),
    _ = u && !o.hasUniqueUsername() && !o.hasVerifiedEmailOrPhone() || x,
    j = _ ? F.intl.string(F.t["7Ngnys"]) : true;
  return (0, i.jsxs)("div", {
    className: a()(H.field, l),
    children: [(0, i.jsx)("div", {
      className: H.constrainedRow,
      children: (0, i.jsxs)("div", {
        className: H.usernameRow,
        children: [(0, i.jsx)(m.vwX, {
          className: H.fieldTitle,
          children: F.intl.string(F.t.qqhR3N)
        }), (0, i.jsxs)("div", {
          className: H.usernameInnerRow,
          ref: c,
          children: [(0, i.jsx)(m.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: o.username
          }), !o.hasUniqueUsername() && (0, i.jsxs)(m.Text, {
            tag: "span",
            color: "header-secondary",
            variant: "text-md/normal",
            children: ["#", o.discriminator]
          })]
        })]
      })
    }), p && (0, i.jsx)("div", {
      className: H.pomeloWarning,
      children: (0, i.jsx)(m.ua7, {
        text: F.intl.string(F.t.HHC5Z2),
        children: e => (0, i.jsx)(m.Mgn, W(z({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: d.Z.colors.STATUS_WARNING.css
        }))
      })
    }), null != h && (0, i.jsx)("div", {
      className: H.pomeloWarning,
      children: (0, i.jsx)(m.ua7, {
        text: h,
        "aria-label": false,
        children: e => (0, i.jsx)(m.Mgn, W(z({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: d.Z.colors.STATUS_WARNING.css
        }))
      })
    }), (0, i.jsx)(m.ua7, {
      text: j,
      children: e => (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: H.fieldButton,
        children: (0, i.jsx)(m.zxk, W(z({
          variant: "secondary",
          size: "sm",
          text: f ? F.intl.string(F.t["16kTw8"]) : F.intl.string(F.t.bt75u7)
        }, e), {
          disabled: _,
          "aria-label": F.intl.string(F.t["JECa9/"]),
          onClick: () => (0, m.ZDy)(async () => {
            if (p) {
              let {
                default: e
              } = await n.e("85342").then(n.bind(n, 193049));
              return t => (0, i.jsx)(e, z({
                source: G.Kq.USER_SETTINGS_EDIT
              }, t))
            } {
              let {
                default: e
              } = await Promise.all([n.e("84956"), n.e("42758")]).then(n.bind(n, 2702));
              return t => (0, i.jsx)(e, z({}, t))
            }
          })
        }))
      })
    })]
  })
}

function q(e) {
  var t, n;
  let {
    user: s,
    className: l
  } = e, o = (0, C.gS)(), c = null != (n = null == o || null == (t = o.nick) ? true : t[0]) ? n : null, u = w.ZP.getGlobalName(s), p = r.useRef(null), [g, h] = r.useState(false);
  return r.useEffect(() => {
    h(null != p.current && p.current.scrollWidth > p.current.clientWidth)
  }, [u]), (0, i.jsxs)("div", {
    className: a()(H.field, l),
    children: [(0, i.jsx)("div", {
      className: H.constrainedRow,
      children: (0, i.jsxs)("div", {
        className: H.usernameRow,
        children: [(0, i.jsx)(m.vwX, {
          className: H.fieldTitle,
          children: F.intl.string(F.t["9AjdkJ"])
        }), (0, i.jsx)("div", {
          className: H.usernameInnerRow,
          ref: p,
          children: (0, i.jsx)(m.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: null == u ? F.intl.string(F.t.ep5kjI) : u
          })
        })]
      })
    }), null != c && (0, i.jsx)("div", {
      className: H.pomeloWarning,
      children: (0, i.jsx)(m.ua7, {
        text: c,
        "aria-label": false,
        children: e => (0, i.jsx)(m.Mgn, W(z({
          size: "custom",
          width: 20,
          height: 20
        }, e), {
          color: d.Z.colors.STATUS_WARNING.css
        }))
      })
    }), (0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: H.fieldButton,
      children: (0, i.jsx)(m.zxk, {
        variant: "secondary",
        size: "sm",
        text: g ? F.intl.string(F.t["16kTw8"]) : F.intl.string(F.t.bt75u7),
        "aria-label": F.intl.string(F.t.YXeWYG),
        onClick: ee
      })
    })]
  })
}

function X(e) {
  let {
    text: t,
    censor: n,
    revealLabel: s,
    hideLabel: a
  } = e, [l, o] = r.useState(false), c = l ? t : n(t);
  return (0, i.jsxs)(i.Fragment, {
    children: [c, (0, i.jsx)(u.zx, {
      look: u.zx.Looks.LINK,
      size: u.zx.Sizes.MIN,
      color: u.zx.Colors.LINK,
      "aria-label": l ? a : s,
      onClick: () => o(!l),
      children: l ? F.intl.string(F.t.fgq1go) : F.intl.string(F.t.dcztdX)
    })]
  })
}

function J(e) {
  let t, {
    className: r,
    user: s
  } = e;
  if (s.isClaimed())
    if (null == s.email) t = {
      buttonText: F.intl.string(F.t.OYkgVl),
      buttonAriaLabel: F.intl.string(F.t["pvBD+f"]),
      buttonColor: u.zx.Colors.PRIMARY,
      valueMessage: F.intl.string(F.t["8SfTNz"]),
      handleClick: () => (0, m.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("9343"), n.e("28175")]).then(n.bind(n, 642298));
        return t => (0, i.jsx)(e, z({}, t))
      })
    };
    else {
      let {
        email: e
      } = s;
      t = {
        buttonText: F.intl.string(F.t.bt75u7),
        buttonAriaLabel: F.intl.string(F.t["8peUT0"]),
        buttonColor: u.zx.Colors.PRIMARY,
        valueMessage: (0, i.jsx)(X, {
          text: e,
          censor: B.E,
          revealLabel: F.intl.string(F.t["Zvx+yc"]),
          hideLabel: F.intl.string(F.t.nqTD4e)
        }),
        handleClick: () => (0, m.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("9343"), n.e("28175")]).then(n.bind(n, 642298));
          return t => (0, i.jsx)(e, z({}, t))
        })
      }
    }
  else t = {
    buttonText: F.intl.string(F.t.BleMPD),
    buttonAriaLabel: F.intl.string(F.t.BleMPD),
    buttonColor: u.zx.Colors.BRAND,
    valueMessage: F.intl.string(F.t.qxk9zs),
    handleClick: () => _.Z.openClaimAccountModal()
  };
  return (0, i.jsxs)("div", {
    className: a()(H.field, r),
    children: [(0, i.jsx)("div", {
      className: H.constrainedRow,
      children: (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.vwX, {
          className: H.fieldTitle,
          children: F.intl.string(F.t.tlZllJ)
        }), (0, i.jsx)("div", {
          children: (0, i.jsx)(m.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t.valueMessage
          })
        })]
      })
    }), (0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: H.fieldButton,
      children: (0, i.jsx)(m.zxk, {
        variant: "secondary",
        size: "sm",
        text: t.buttonText,
        "aria-label": t.buttonAriaLabel,
        onClick: t.handleClick
      })
    })]
  })
}

function Q(e) {
  let t, {
    className: r,
    user: s
  } = e;
  if (!s.isClaimed()) return null;
  let {
    phone: l,
    email: o
  } = s, c = null != l;
  return t = c ? (0, i.jsx)(X, {
    text: l,
    censor: B.n,
    revealLabel: F.intl.string(F.t.eY3xlZ),
    hideLabel: F.intl.string(F.t.jllbv7)
  }) : F.intl.string(F.t.I5kDqq), (0, i.jsxs)("div", {
    className: a()(H.field, r),
    children: [(0, i.jsx)("div", {
      className: H.constrainedRow,
      children: (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.vwX, {
          className: H.fieldTitle,
          children: F.intl.string(F.t.kerONj)
        }), (0, i.jsx)("div", {
          children: (0, i.jsx)(m.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: t
          })
        })]
      })
    }), (0, i.jsxs)("div", {
      className: H.fieldButtonList,
      children: [c && null != o ? (0, i.jsx)(u.zx, {
        className: a()(H.fieldButton, H.removeButton),
        size: u.zx.Sizes.SMALL,
        look: u.zx.Looks.LINK,
        color: u.zx.Colors.PRIMARY,
        "aria-label": F.intl.string(F.t.Rpn4Aw),
        onClick: function() {
          (0, m.h7j)(e => (0, i.jsx)(h.Z, W(z({}, e), {
            title: F.intl.string(F.t["3CTiKi"]),
            children: s.hasFlag(U.xW$.MFA_SMS) ? F.intl.string(F.t.jrhJys) : true,
            actionText: F.intl.string(F.t.N86XcH),
            handleSubmit: e => O.Z.removePhone(e, O.L.USER_SETTINGS_UPDATE)
          })))
        },
        children: F.intl.string(F.t.N86XcH)
      }) : null, (0, i.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: H.fieldButton,
        children: (0, i.jsx)(m.zxk, {
          variant: "secondary",
          size: "sm",
          text: c ? F.intl.string(F.t.bt75u7) : F.intl.string(F.t.OYkgVl),
          "aria-label": c ? F.intl.string(F.t.YDabSU) : F.intl.string(F.t.SfUuEx),
          onClick: function() {
            (0, m.ZDy)(async () => {
              let {
                default: e
              } = await Promise.resolve().then(n.bind(n, 607018));
              return t => (0, i.jsx)(e, z({
                reason: O.L.USER_SETTINGS_UPDATE
              }, t))
            }, {
              modalKey: V.M
            })
          }
        })
      })]
    })]
  })
}

function $(e) {
  let {
    user: t
  } = e, n = (0, j.Z)({
    id: t.id,
    label: F.intl.string(F.t["/AXYnJ"])
  }), s = L.Sb.useSetting(), a = r.useRef(null);
  return s && Z.wS ? (0, i.jsx)(m.yRy, {
    targetElementRef: a,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(m.v2r, {
        onClose: t,
        onSelect: true,
        navId: "copy-id",
        "aria-label": F.intl.string(F.t.RANhlJ),
        children: n
      })
    },
    children: e => (0, i.jsx)(m.P3F, W(z({}, e), {
      innerRef: a,
      className: H.overflowMenuButton,
      "aria-label": F.intl.string(F.t.DEoVWV),
      children: (0, i.jsx)(m.xhG, {
        size: "md",
        color: "currentColor",
        className: H.overflowMenuIcon
      })
    }))
  }) : null
}

function ee() {
  Chunk230711.Z.setSection(Chunk981631.oAB.PROFILE_CUSTOMIZATION)
}

function et(e) {
  let {
    className: t
  } = e, n = (0, x.l6)(), s = (0, x.Jm)(), l = !n || s, o = r.useMemo(() => n ? s ? F.intl.string(F.t.sK0dmJ) : F.intl.string(F.t.XxRj7e) : F.intl.string(F.t.UX0OdX), [n, s]);
  return (0, i.jsxs)("div", {
    className: a()(H.field, t),
    children: [(0, i.jsx)("div", {
      className: H.constrainedRow,
      children: (0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.vwX, {
          className: H.fieldTitle,
          children: F.intl.string(F.t["/52UY2"])
        }), (0, i.jsx)("div", {
          children: (0, i.jsx)(m.Text, {
            tag: "span",
            color: "header-primary",
            variant: "text-md/normal",
            children: o
          })
        })]
      })
    }), l && (0, i.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: H.fieldButton,
      children: (0, i.jsx)(m.zxk, {
        variant: "secondary",
        size: "sm",
        text: s ? F.intl.string(F.t.KPGVWl) : F.intl.string(F.t.yNGjyM),
        "aria-label": s ? F.intl.string(F.t.KPGVWl) : F.intl.string(F.t.yNGjyM),
        onClick: () => f.Z.showAgeVerificationGetStartedModal(b.cU.ACCOUNT_AGE_GROUP)
      })
    })]
  })
}

function en() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk594174.default], () => {
      let e = Chunk594174.default.getCurrentUser();
      return o()(null != module, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), module
    }),
    n = (0, Chunk687158.ZP)(exports.id),
    r = (0, Chunk485341.Z)(require),
    s = Chunk695346.co.useSetting(),
    a = (0, Chunk442837.e7)([Chunk25990.Z], () => Chunk25990.Z.getErrors()),
    l = null == a || null == (e = a.avatar) ? true : module[0],
    {
      avatarSrc: d,
      avatarDecorationSrc: u
    } = (0, Chunk518950.Z)({
      userId: null == exports ? true : exports.id,
      size: Chunk481060.EFr.SIZE_80
    });
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
      children: [(0, Chunk951288.jsx)(Y, {
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
          }), (0, Chunk951288.jsx)($, {
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
        onClick: ee
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
          children: (0, Chunk951288.jsx)(q, {
            className: Chunk378846.fieldSpacerBottom,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_USERNAME,
          children: (0, Chunk951288.jsx)(K, {
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_EMAIL,
          children: (0, Chunk951288.jsx)(J, {
            className: Chunk378846.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_PHONE_NUMBER,
          children: (0, Chunk951288.jsx)(Q, {
            className: Chunk378846.fieldSpacer,
            user: exports
          })
        }), (0, Chunk951288.jsx)(Chunk921801.F, {
          setting: Chunk726985.s6.ACCOUNT_AGE_GROUP,
          children: (0, Chunk951288.jsx)(et, {
            className: Chunk378846.fieldSpacer
          })
        })]
      })]
    })]
  })
}
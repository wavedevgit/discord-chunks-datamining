/** Chunk was on web.js **/
/** chunk id: 980172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ec
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk870383 = require("./870383.js"),
  Chunk36149 = require("./36149.js"),
  Chunk521933 = require("./521933.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk922301 = require("./922301.js"),
  Chunk81400 = require("./81400.js"),
  Chunk557722 = require("./557722.js"),
  Chunk951122 = require("./951122.js"),
  Chunk772786 = require("./772786.js"),
  Chunk207560 = require("./207560.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk790114 = require("./790114.js"),
  Chunk262 = require("./262.js"),
  Chunk950191 = require("./950191.js"),
  Chunk854627 = require("./854627.js"),
  Chunk542535 = require("./542535.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk662758 = require("./662758.jsx"),
  Chunk752319 = require("./752319.js"),
  Chunk287809 = require("./287809.js"),
  Chunk957565 = require("./957565.js"),
  Chunk427262 = require("./427262.js"),
  Chunk837921 = require("./837921.js"),
  Chunk64313 = require("./64313.js"),
  Chunk253932 = require("./253932.js"),
  Chunk780964 = require("./780964.js"),
  Chunk192501 = require("./192501.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk53516 = require("./53516.js"),
  Chunk789622 = require("./789622.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk240342 = require("./240342.js");

function Z(e, t, n) {
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
      Z(e, t, n[t])
    })
  }
  return e
}

function $(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ee = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function et() {
  (0, H.openUserSettings)(F.X.PROFILE_PANEL, {
    section: W.nc_.PROFILE_CUSTOMIZATION
  })
}

function en(e) {
  var t, a;
  let {
    className: o,
    user: l
  } = e, c = i.useRef(null), p = (0, v.Jz)(), _ = (0, S.g)(), h = (0, O.EC)(), m = null != (t = null == h || null == (a = h.nick) ? true : a[0]) ? t : null, [g, E] = i.useState(false);
  i.useEffect(() => {
    E(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [l.username]);
  let b = !l.isClaimed(),
    y = p && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone() || b,
    A = y ? q.intl.string(q.t["7Ngnyr"]) : true;
  return (0, r.jsxs)("div", {
    className: s()(X.ZZ, o),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        className: X.Fj,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: q.intl.string(q.t.qqhR3L)
        }), (0, r.jsxs)("div", {
          className: X.HR,
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
      className: X.d6,
      children: (0, r.jsx)(d.m, {
        text: q.intl.string(q.t.HHC5Z4),
        children: (0, r.jsx)(f.EpV, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.A.colors.STATUS_WARNING.css
        })
      })
    }), null != m && (0, r.jsx)("div", {
      className: X.d6,
      children: (0, r.jsx)(d.m, {
        __unsupportedReactNodeAsText: m,
        "aria-label": false,
        children: (0, r.jsx)(f.EpV, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.A.colors.STATUS_WARNING.css
        })
      })
    }), (0, r.jsx)(d.m, {
      text: A,
      children: (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: X.pr,
        children: (0, r.jsx)(f.Button, {
          variant: "secondary",
          size: "sm",
          text: g ? q.intl.string(q.t["16kTw/"]) : q.intl.string(q.t.bt75uw),
          disabled: y,
          "aria-label": q.intl.string(q.t.JECa91),
          onClick: () => (0, f.mMO)(async () => {
            if (_) {
              let {
                default: e
              } = await n.e("54160").then(n.bind(n, 914131));
              return t => (0, r.jsx)(e, Q({
                source: z.gg.USER_SETTINGS_EDIT
              }, t))
            } {
              let {
                default: e
              } = await n.e("27533").then(n.bind(n, 993468));
              return t => (0, r.jsx)(e, Q({}, t))
            }
          })
        })
      })
    })]
  })
}

function er(e) {
  var t, n;
  let {
    user: a,
    className: o
  } = e, l = (0, O.EC)(), c = null != (t = null == l || null == (n = l.nick) ? true : n[0]) ? t : null, p = k.Ay.getGlobalName(a), _ = i.useRef(null), [h, m] = i.useState(false);
  return i.useEffect(() => {
    m(null != _.current && _.current.scrollWidth > _.current.clientWidth)
  }, [p]), (0, r.jsxs)("div", {
    className: s()(X.ZZ, o),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        className: X.Fj,
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: q.intl.string(q.t["9AjdkD"])
        }), (0, r.jsx)("div", {
          className: X.HR,
          ref: _,
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: null == p ? q.intl.string(q.t.ep5kjK) : p
          })
        })]
      })
    }), null != c && (0, r.jsx)("div", {
      className: X.d6,
      children: (0, r.jsx)(d.m, {
        __unsupportedReactNodeAsText: c,
        "aria-label": false,
        children: (0, r.jsx)(f.EpV, {
          size: "custom",
          width: 20,
          height: 20,
          color: u.A.colors.STATUS_WARNING.css
        })
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: X.pr,
      children: (0, r.jsx)(f.Button, {
        variant: "secondary",
        size: "sm",
        text: h ? q.intl.string(q.t["16kTw/"]) : q.intl.string(q.t.bt75uw),
        "aria-label": q.intl.string(q.t.YXeWYM),
        onClick: et
      })
    })]
  })
}

function ei(e) {
  let {
    text: t,
    censor: n,
    revealLabel: a,
    hideLabel: s
  } = e, [o, l] = i.useState(false), c = o ? t : n(t);
  return (0, r.jsxs)("div", {
    className: X.c1,
    children: [c, (0, r.jsx)(f.QWc, {
      variant: "primary",
      textVariant: "text-sm/medium",
      "aria-label": o ? s : a,
      onClick: () => l(!o),
      text: o ? q.intl.string(q.t.fgq1gs) : q.intl.string(q.t.dcztdU)
    })]
  })
}

function ea(e) {
  let t, {
    className: i,
    user: a
  } = e;
  if (a.isClaimed())
    if (null == a.email) t = {
      buttonText: q.intl.string(q.t.OYkgVk),
      buttonAriaLabel: q.intl.string(q.t["pvBD+W"]),
      valueMessage: q.intl.string(q.t["8SfTN/"]),
      handleClick: () => (0, f.mMO)(async () => {
        let {
          default: e
        } = await n.e("83269").then(n.bind(n, 350116));
        return t => (0, r.jsx)(e, Q({}, t))
      })
    };
    else {
      let {
        email: e
      } = a;
      t = {
        buttonText: q.intl.string(q.t.bt75uw),
        buttonAriaLabel: q.intl.string(q.t["8peUT0"]),
        valueMessage: (0, r.jsx)(ei, {
          text: e,
          censor: B.B,
          revealLabel: q.intl.string(q.t["Zvx+yV"]),
          hideLabel: q.intl.string(q.t.nqTD4d)
        }),
        handleClick: () => (0, f.mMO)(async () => {
          let {
            default: e
          } = await n.e("83269").then(n.bind(n, 350116));
          return t => (0, r.jsx)(e, Q({}, t))
        })
      }
    }
  else t = {
    buttonText: q.intl.string(q.t.BleMPB),
    buttonAriaLabel: q.intl.string(q.t.BleMPB),
    valueMessage: q.intl.string(q.t.qxk9zo),
    handleClick: () => E.A.openClaimAccountModal()
  };
  return (0, r.jsxs)("div", {
    className: s()(X.ZZ, i),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: q.intl.string(q.t.tlZllC)
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
      className: X.pr,
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

function es(e) {
  let t, {
    className: i,
    user: a
  } = e;
  if (!a.isClaimed()) return null;
  let {
    phone: o,
    email: l
  } = a, c = null != o, u = null != l;

  function d() {
    (0, f.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 615715));
      return t => (0, r.jsx)(e, Q({
        reason: A.d.USER_SETTINGS_UPDATE
      }, t))
    }, {
      modalKey: K.V
    })
  }

  function p() {
    (0, f.qfG)(e => (0, r.jsx)(x.default, J(Q({}, e), {
      title: q.intl.string(q.t["3CTiKi"]),
      children: a.hasFlag(W.nhx.MFA_SMS) ? q.intl.string(q.t.jrhJyo) : true,
      actionText: q.intl.string(q.t.N86XcP),
      handleSubmit: e => A.A.removePhone(e, A.d.USER_SETTINGS_UPDATE)
    })))
  }
  return t = c ? (0, r.jsx)(ei, {
    text: o,
    censor: B.D,
    revealLabel: q.intl.string(q.t.eY3xlT),
    hideLabel: q.intl.string(q.t["jllbv+"])
  }) : q.intl.string(q.t.I5kDqj), (0, r.jsxs)("div", {
    className: s()(X.ZZ, i),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: q.intl.string(q.t.kerONq)
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
      className: X.PU,
      children: [c && u ? (0, r.jsx)("div", {
        className: s()(X.pr, X.DT),
        children: (0, r.jsx)(f.QWc, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: q.intl.string(q.t.N86XcP),
          "aria-label": q.intl.string(q.t.Rpn4A3),
          onClick: p
        })
      }) : null, (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: X.pr,
        children: (0, r.jsx)(f.Button, {
          variant: "secondary",
          size: "sm",
          text: c ? q.intl.string(q.t.bt75uw) : q.intl.string(q.t.OYkgVk),
          "aria-label": c ? q.intl.string(q.t.YDabSe) : q.intl.string(q.t["SfUuE+"]),
          onClick: d
        })
      })]
    })]
  })
}

function eo(e) {
  let {
    user: t
  } = e, n = (0, b.A)({
    id: t.id,
    label: q.intl.string(q.t["/AXYnE"])
  }), a = V.Q_.useSetting(), s = i.useRef(null);
  return a && M.p5 ? (0, r.jsx)(f.YNO, {
    targetElementRef: s,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(f.W1t, {
        onClose: t,
        onSelect: true,
        navId: "copy-id",
        "aria-label": q.intl.string(q.t.RANhlE),
        children: n
      })
    },
    children: e => (0, r.jsx)(f.DUT, J(Q({}, e), {
      innerRef: s,
      className: X.SI,
      "aria-label": q.intl.string(q.t.DEoVWZ),
      children: (0, r.jsx)(f.jNK, {
        size: "md",
        color: "currentColor",
        className: X.D$
      })
    }))
  }) : null
}

function el(e) {
  let {
    className: t
  } = e, n = (0, g.b8)(), a = (0, g.yM)(), o = !n || a, l = (0, m.W)(q.intl.string(q.t.KPGVWl), q.intl.string(q.t["9KiIz6"])), c = (0, m.W)(q.intl.string(q.t.yNGjyK), q.intl.string(q.t.DVywUB)), u = (0, m.W)(q.intl.string(q.t.UX0Ode), q.intl.string(q.t.lKDPGA)), d = i.useMemo(() => n ? a ? q.intl.string(q.t.sK0dmH) : q.intl.string(q.t.XxRj7f) : u, [n, a, u]);
  return (0, r.jsxs)("div", {
    className: s()(X.ZZ, t),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(f.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: q.intl.string(q.t["/52UYy"])
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(f.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: d
          })
        })]
      })
    }), o && (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: X.pr,
      children: (0, r.jsx)(f.Button, {
        variant: "secondary",
        size: "sm",
        text: a ? l : c,
        "aria-label": a ? l : c,
        onClick: () => _.A.showAgeVerificationGetStartedModal({
          entryPoint: h.q1.ACCOUNT_AGE_GROUP
        })
      })
    })]
  })
}

function ec() {
  var e;
  let t = (0, c.bG)([j.default], () => {
      let e = j.default.getCurrentUser();
      return l()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e
    }),
    n = (0, R.Ay)(t.id),
    i = (0, N.A)(n),
    a = V.jP.useSetting(),
    s = (0, c.bG)([L.A], () => L.A.getErrors()),
    o = null == s || null == (e = s.avatar) ? true : e[0],
    {
      avatarSrc: u,
      avatarDecorationSrc: d
    } = (0, w.A)({
      userId: null == t ? true : t.id,
      size: f._3J.SIZE_80
    }),
    _ = (0, C.A)(),
    h = (0, I.fk)(),
    m = (0, G.j)("UserSettingsAccountProfileCard"),
    g = h || m;
  return (0, r.jsxs)("div", {
    className: X.DM,
    children: [(0, r.jsx)(D.o, {
      user: t,
      displayProfile: n,
      avatarSize: f._3J.SIZE_80,
      avatarOffsetX: 16,
      avatarOffsetY: false,
      bannerWidth: _ ? 696 : 660,
      bannerHeight: 100,
      themePadding: 0
    }), (0, r.jsxs)("div", {
      className: X.eF,
      children: [(0, r.jsx)(ee, {
        className: X.my,
        src: u,
        avatarDecoration: d,
        status: a,
        size: f._3J.SIZE_80,
        "aria-label": t.username
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: X.Ib,
          children: [(0, r.jsx)(p.A, {
            user: t,
            className: X.a1,
            discriminatorClass: X.D2,
            displayNameStylesType: y.G.STATIC
          }), (0, r.jsx)(eo, {
            user: t
          })]
        }), (0, r.jsx)(P.A, {
          badges: i,
          className: X.C_,
          badgeClassName: X.qS
        })]
      }), (0, r.jsx)(f.Button, {
        variant: "primary",
        size: "sm",
        text: q.intl.string(q.t["2p2aYz"]),
        onClick: et
      })]
    }), (0, r.jsxs)("div", {
      className: X.Tp,
      children: [null != o ? (0, r.jsx)(f.Text, {
        className: X.mx,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: o
      }) : null, (0, r.jsxs)("div", {
        className: X.FL,
        children: [(0, r.jsx)(T.x, {
          setting: Y.H.ACCOUNT_DISPLAY_NAME,
          children: (0, r.jsx)(er, {
            className: X.mS,
            user: t
          })
        }), (0, r.jsx)(T.x, {
          setting: Y.H.ACCOUNT_USERNAME,
          children: (0, r.jsx)(en, {
            user: t
          })
        }), (0, r.jsx)(T.x, {
          setting: Y.H.ACCOUNT_EMAIL,
          children: (0, r.jsx)(ea, {
            className: X.Zr,
            user: t
          })
        }), (0, r.jsx)(T.x, {
          setting: Y.H.ACCOUNT_PHONE_NUMBER,
          children: (0, r.jsx)(es, {
            className: X.Zr,
            user: t
          })
        }), g && (0, r.jsx)(T.x, {
          setting: Y.H.ACCOUNT_AGE_GROUP,
          children: (0, r.jsx)(el, {
            className: X.Zr
          })
        })]
      })]
    })]
  })
}
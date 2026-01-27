/** Chunk was on 60667 **/
/** chunk id: 980172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => ea
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function $() {
  (0, F.openUserSettings)(H.X.PROFILE_PANEL, {
    section: W.nc_.PROFILE_CUSTOMIZATION
  })
}

function ee(e) {
  var t, l;
  let {
    className: a,
    user: o
  } = e, c = i.useRef(null), p = (0, C.Jz)(), m = (0, I.g)(), g = (0, x.EC)(), A = null != (t = null == g || null == (l = g.nick) ? true : l[0]) ? t : null, [f, h] = i.useState(false);
  i.useEffect(() => {
    h(null != c.current && c.current.scrollWidth > c.current.clientWidth)
  }, [o.username]);
  let b = !o.isClaimed(),
    E = p && !o.hasUniqueUsername() && !o.hasVerifiedEmailOrPhone() || b,
    O = E ? Z.intl.string(Z.t["7Ngnyr"]) : true;
  return (0, r.jsxs)("div", {
    className: s()(X.ZZ, a),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        className: X.Fj,
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: Z.intl.string(Z.t.qqhR3L)
        }), (0, r.jsxs)("div", {
          className: X.HR,
          ref: c,
          children: [(0, r.jsx)(_.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: o.username
          }), !o.hasUniqueUsername() && (0, r.jsxs)(_.Text, {
            tag: "span",
            color: "text-default",
            variant: "text-md/normal",
            children: ["#", o.discriminator]
          })]
        })]
      })
    }), m && (0, r.jsx)("div", {
      className: X.d6,
      children: (0, r.jsx)(u.m, {
        text: Z.intl.string(Z.t.HHC5Z4),
        children: (0, r.jsx)(_.EpV, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.A.colors.STATUS_WARNING.css
        })
      })
    }), null != A && (0, r.jsx)("div", {
      className: X.d6,
      children: (0, r.jsx)(u.m, {
        __unsupportedReactNodeAsText: A,
        "aria-label": false,
        children: (0, r.jsx)(_.EpV, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.A.colors.STATUS_WARNING.css
        })
      })
    }), (0, r.jsx)(u.m, {
      text: O,
      children: (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: X.pr,
        children: (0, r.jsx)(_.Button, {
          variant: "secondary",
          size: "sm",
          text: f ? Z.intl.string(Z.t["16kTw/"]) : Z.intl.string(Z.t.bt75uw),
          disabled: E,
          "aria-label": Z.intl.string(Z.t.JECa91),
          onClick: () => (0, _.mMO)(async () => {
            if (m) {
              let {
                default: e
              } = await n.e("54160").then(n.bind(n, 914131));
              return t => (0, r.jsx)(e, q({
                source: K.gg.USER_SETTINGS_EDIT
              }, t))
            } {
              let {
                default: e
              } = await n.e("27533").then(n.bind(n, 993468));
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
    user: l,
    className: a
  } = e, o = (0, x.EC)(), c = null != (t = null == o || null == (n = o.nick) ? true : n[0]) ? t : null, p = U.Ay.getGlobalName(l), m = i.useRef(null), [g, A] = i.useState(false);
  return i.useEffect(() => {
    A(null != m.current && m.current.scrollWidth > m.current.clientWidth)
  }, [p]), (0, r.jsxs)("div", {
    className: s()(X.ZZ, a),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        className: X.Fj,
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: Z.intl.string(Z.t["9AjdkD"])
        }), (0, r.jsx)("div", {
          className: X.HR,
          ref: m,
          children: (0, r.jsx)(_.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: null == p ? Z.intl.string(Z.t.ep5kjK) : p
          })
        })]
      })
    }), null != c && (0, r.jsx)("div", {
      className: X.d6,
      children: (0, r.jsx)(u.m, {
        __unsupportedReactNodeAsText: c,
        "aria-label": false,
        children: (0, r.jsx)(_.EpV, {
          size: "custom",
          width: 20,
          height: 20,
          color: d.A.colors.STATUS_WARNING.css
        })
      })
    }), (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: X.pr,
      children: (0, r.jsx)(_.Button, {
        variant: "secondary",
        size: "sm",
        text: g ? Z.intl.string(Z.t["16kTw/"]) : Z.intl.string(Z.t.bt75uw),
        "aria-label": Z.intl.string(Z.t.YXeWYM),
        onClick: $
      })
    })]
  })
}

function en(e) {
  let {
    text: t,
    censor: n,
    revealLabel: l,
    hideLabel: s
  } = e, [a, o] = i.useState(false), c = a ? t : n(t);
  return (0, r.jsxs)("div", {
    className: X.c1,
    children: [c, (0, r.jsx)(_.QWc, {
      variant: "primary",
      textVariant: "text-sm/medium",
      "aria-label": a ? s : l,
      onClick: () => o(!a),
      text: a ? Z.intl.string(Z.t.fgq1gs) : Z.intl.string(Z.t.dcztdU)
    })]
  })
}

function er(e) {
  let t, {
    className: i,
    user: l
  } = e;
  if (l.isClaimed())
    if (null == l.email) t = {
      buttonText: Z.intl.string(Z.t.OYkgVk),
      buttonAriaLabel: Z.intl.string(Z.t["pvBD+W"]),
      valueMessage: Z.intl.string(Z.t["8SfTN/"]),
      handleClick: () => (0, _.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
        return t => (0, r.jsx)(e, q({}, t))
      })
    };
    else {
      let {
        email: e
      } = l;
      t = {
        buttonText: Z.intl.string(Z.t.bt75uw),
        buttonAriaLabel: Z.intl.string(Z.t["8peUT0"]),
        valueMessage: (0, r.jsx)(en, {
          text: e,
          censor: B.B,
          revealLabel: Z.intl.string(Z.t["Zvx+yV"]),
          hideLabel: Z.intl.string(Z.t.nqTD4d)
        }),
        handleClick: () => (0, _.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
          return t => (0, r.jsx)(e, q({}, t))
        })
      }
    }
  else t = {
    buttonText: Z.intl.string(Z.t.BleMPB),
    buttonAriaLabel: Z.intl.string(Z.t.BleMPB),
    valueMessage: Z.intl.string(Z.t.qxk9zo),
    handleClick: () => h.A.openClaimAccountModal()
  };
  return (0, r.jsxs)("div", {
    className: s()(X.ZZ, i),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: Z.intl.string(Z.t.tlZllC)
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(_.Text, {
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
    user: l
  } = e;
  if (!l.isClaimed()) return null;
  let {
    phone: a,
    email: o
  } = l, c = null != a;
  return t = c ? (0, r.jsx)(en, {
    text: a,
    censor: B.D,
    revealLabel: Z.intl.string(Z.t.eY3xlT),
    hideLabel: Z.intl.string(Z.t["jllbv+"])
  }) : Z.intl.string(Z.t.I5kDqj), (0, r.jsxs)("div", {
    className: s()(X.ZZ, i),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: Z.intl.string(Z.t.kerONq)
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(_.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: t
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: X.PU,
      children: [c && null != o ? (0, r.jsx)("div", {
        className: s()(X.pr, X.DT),
        children: (0, r.jsx)(_.QWc, {
          textVariant: "text-sm/medium",
          variant: "secondary",
          text: Z.intl.string(Z.t.N86XcP),
          "aria-label": Z.intl.string(Z.t.Rpn4A3),
          onClick: function() {
            (0, _.qfG)(e => (0, r.jsx)(D.default, J(q({}, e), {
              title: Z.intl.string(Z.t["3CTiKi"]),
              children: l.hasFlag(W.nhx.MFA_SMS) ? Z.intl.string(Z.t.jrhJyo) : true,
              actionText: Z.intl.string(Z.t.N86XcP),
              handleSubmit: e => O.A.removePhone(e, O.d.USER_SETTINGS_UPDATE)
            })))
          }
        })
      }) : null, (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: X.pr,
        children: (0, r.jsx)(_.Button, {
          variant: "secondary",
          size: "sm",
          text: c ? Z.intl.string(Z.t.bt75uw) : Z.intl.string(Z.t.OYkgVk),
          "aria-label": c ? Z.intl.string(Z.t.YDabSe) : Z.intl.string(Z.t["SfUuE+"]),
          onClick: function() {
            (0, _.mMO)(async () => {
              let {
                default: e
              } = await Promise.resolve().then(n.bind(n, 615715));
              return t => (0, r.jsx)(e, q({
                reason: O.d.USER_SETTINGS_UPDATE
              }, t))
            }, {
              modalKey: z.V
            })
          }
        })
      })]
    })]
  })
}

function el(e) {
  let {
    user: t
  } = e, n = (0, b.A)({
    id: t.id,
    label: Z.intl.string(Z.t["/AXYnE"])
  }), l = V.Q_.useSetting(), s = i.useRef(null);
  return l && M.p5 ? (0, r.jsx)(_.YNO, {
    targetElementRef: s,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(_.W1t, {
        "data-menu-migrated": true,
        onClose: t,
        onSelect: true,
        navId: "copy-id",
        "aria-label": Z.intl.string(Z.t.RANhlE),
        children: n
      })
    },
    children: e => (0, r.jsx)(_.DUT, J(q({}, e), {
      innerRef: s,
      className: X.SI,
      "aria-label": Z.intl.string(Z.t.DEoVWZ),
      children: (0, r.jsx)(_.jNK, {
        size: "md",
        color: "currentColor",
        className: X.D$
      })
    }))
  }) : null
}

function es(e) {
  let {
    className: t
  } = e, n = (0, f.b8)(), l = (0, f.yM)(), a = !n || l, o = (0, A.W)(Z.intl.string(Z.t.KPGVWl), Z.intl.string(Z.t["9KiIz6"])), c = (0, A.W)(Z.intl.string(Z.t.yNGjyK), Z.intl.string(Z.t.DVywUB)), d = (0, A.W)(Z.intl.string(Z.t.UX0Ode), Z.intl.string(Z.t.lKDPGA)), u = i.useMemo(() => n ? l ? Z.intl.string(Z.t.sK0dmH) : Z.intl.string(Z.t.XxRj7f) : d, [n, l, d]);
  return (0, r.jsxs)("div", {
    className: s()(X.ZZ, t),
    children: [(0, r.jsx)("div", {
      className: X.NQ,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(_.Text, {
          variant: "text-md/medium",
          className: X.p9,
          children: Z.intl.string(Z.t["/52UYy"])
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(_.Text, {
            tag: "span",
            color: "text-strong",
            variant: "text-md/normal",
            children: u
          })
        })]
      })
    }), a && (0, r.jsx)("div", {
      "data-button-hoisted-classname-wrapper": true,
      className: X.pr,
      children: (0, r.jsx)(_.Button, {
        variant: "secondary",
        size: "sm",
        text: l ? o : c,
        "aria-label": l ? o : c,
        onClick: () => m.A.showAgeVerificationGetStartedModal({
          entryPoint: g.q1.ACCOUNT_AGE_GROUP
        })
      })
    })]
  })
}

function ea() {
  var e;
  let t = (0, c.bG)([L.default], () => {
      let e = L.default.getCurrentUser();
      return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e
    }),
    n = (0, N.Ay)(t.id),
    i = (0, v.A)(n),
    l = V.jP.useSetting(),
    s = (0, c.bG)([w.A], () => w.A.getErrors()),
    a = null == s || null == (e = s.avatar) ? true : e[0],
    {
      avatarSrc: d,
      avatarDecorationSrc: u
    } = (0, y.A)({
      userId: null == t ? true : t.id,
      size: _._3J.SIZE_80
    }),
    m = (0, j.A)(),
    g = (0, T.fk)(),
    A = (0, k.j)("UserSettingsAccountProfileCard");
  return (0, r.jsxs)("div", {
    className: X.DM,
    children: [(0, r.jsx)(R.o, {
      user: t,
      displayProfile: n,
      avatarSize: _._3J.SIZE_80,
      avatarOffsetX: 16,
      avatarOffsetY: false,
      bannerWidth: m ? 696 : 660,
      bannerHeight: 100,
      themePadding: 0
    }), (0, r.jsxs)("div", {
      className: X.eF,
      children: [(0, r.jsx)(Q, {
        className: X.my,
        src: d,
        avatarDecoration: u,
        status: l,
        size: _._3J.SIZE_80,
        "aria-label": t.username
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsxs)("div", {
          className: X.Ib,
          children: [(0, r.jsx)(p.A, {
            user: t,
            className: X.a1,
            discriminatorClass: X.D2,
            displayNameStylesType: E.G.STATIC
          }), (0, r.jsx)(el, {
            user: t
          })]
        }), (0, r.jsx)(P.A, {
          badges: i,
          className: X.C_,
          badgeClassName: X.qS
        })]
      }), (0, r.jsx)(_.Button, {
        variant: "primary",
        size: "sm",
        text: Z.intl.string(Z.t["2p2aYz"]),
        onClick: $
      })]
    }), (0, r.jsxs)("div", {
      className: X.Tp,
      children: [null != a ? (0, r.jsx)(_.Text, {
        className: X.mx,
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: a
      }) : null, (0, r.jsxs)("div", {
        className: X.FL,
        children: [(0, r.jsx)(S.x, {
          setting: Y.H.ACCOUNT_DISPLAY_NAME,
          children: (0, r.jsx)(et, {
            className: X.mS,
            user: t
          })
        }), (0, r.jsx)(S.x, {
          setting: Y.H.ACCOUNT_USERNAME,
          children: (0, r.jsx)(ee, {
            user: t
          })
        }), (0, r.jsx)(S.x, {
          setting: Y.H.ACCOUNT_EMAIL,
          children: (0, r.jsx)(er, {
            className: X.Zr,
            user: t
          })
        }), (0, r.jsx)(S.x, {
          setting: Y.H.ACCOUNT_PHONE_NUMBER,
          children: (0, r.jsx)(ei, {
            className: X.Zr,
            user: t
          })
        }), (g || A) && (0, r.jsx)(S.x, {
          setting: Y.H.ACCOUNT_AGE_GROUP,
          children: (0, r.jsx)(es, {
            className: X.Zr
          })
        })]
      })]
    })]
  })
}
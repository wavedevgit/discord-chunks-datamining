/** Chunk was on 44667 **/
/** chunk id: 359990, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => N,
  RegisterWebAuthnCredentialModal: () => E
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk754333 = require("./754333.js"),
  Chunk915089 = require("./915089.js"),
  Chunk46054 = require("./46054.js"),
  Chunk780964 = require("./780964.js"),
  Chunk179690 = require("./179690.jsx"),
  Chunk840065 = require("./840065.jsx"),
  Chunk464477 = require("./464477.js"),
  Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk837921 = require("./837921.js"),
  Chunk917136 = require("./917136.js"),
  Chunk976910 = require("./976910.js"),
  Chunk293731 = require("./293731.js"),
  Chunk31758 = require("./31758.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk754388 = require("./754388.js");

function w(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = n[e], e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = r
    })
  }
  return t
}

function P(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      n.push.apply(n, r)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function E(t) {
  let {
    transitionState: e,
    onClose: s,
    ticket: c,
    challenge: o,
    showAccountSettingsButton: g = false,
    initialSlide: y = x.C.INIT
  } = t, w = (0, l.GV)(), [P, E] = i.useState(v.intl.string(v.t["I/sJtJ"])), [A, N] = i.useState(false), [T, I] = i.useState(y), [D, _] = i.useState(""), [k, R] = i.useState(null), U = async () => {
    let t;
    I(x.C.REGISTER);
    let e = f.isPlatformEmbedded && h.Ay.supportsFeature(S.BYE.WEBAUTHN) ? h.Ay.webAuthnRegister(o) : (0, m.v)(o);
    try {
      t = await e
    } catch (t) {
      j.A.captureException(t), R(v.intl.string(v.t.xSCvBf)), I(x.C.INIT);
      return
    }
    _(t), I(x.C.NAME)
  };
  return (0, r.jsxs)(a.EOs, {
    transitionState: e,
    "aria-labelledby": w,
    parentComponent: "UserSettingsWebAuthn",
    children: [(0, r.jsxs)(a.rQ0, {
      className: C.wx,
      separator: false,
      children: [(0, r.jsxs)(a.Heading, {
        id: w,
        variant: "heading-lg/semibold",
        children: [T === x.C.INIT && v.intl.string(v.t.vrOCCk), T === x.C.REGISTER && v.intl.string(v.t.wePEBF), T === x.C.NAME && v.intl.string(v.t["cY/IOu"]), T === x.C.SUCCESS && u.A.parse(v.intl.string(v.t.FXC7ZC))]
      }), (0, r.jsx)(a.s_y, {
        onClick: s,
        className: C.iT
      })]
    }), (0, r.jsxs)(a.tN_, {
      activeSlide: T,
      width: 440,
      children: [(0, r.jsxs)(a.q7S, {
        id: x.C.INIT,
        children: [(0, r.jsxs)(a.$mQ, {
          className: C.Qs,
          children: [(0, r.jsx)("div", {
            className: C.Kk,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(142668)
            })
          }), (0, r.jsx)("div", {
            children: null != k && (0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-feedback-critical",
              children: k
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              children: v.intl.string(v.t.Lh5vTW)
            })
          })]
        }), (0, r.jsx)(a.jlY, {
          children: (0, r.jsx)(a.Button, {
            variant: "primary",
            text: v.intl.string(v.t.oibaQa),
            onClick: U
          })
        })]
      }), (0, r.jsxs)(a.q7S, {
        id: x.C.REGISTER,
        children: [(0, r.jsxs)(a.$mQ, {
          className: C.Qs,
          children: [(0, r.jsx)("div", {
            className: C.Kk,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(142668)
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              children: v.intl.string(v.t.aVMiX3)
            })
          })]
        }), (0, r.jsx)(a.jlY, {
          children: (0, r.jsx)(a.Button, {
            variant: "primary",
            text: "",
            loading: true
          })
        })]
      }), (0, r.jsx)(a.q7S, {
        id: x.C.NAME,
        children: (0, r.jsxs)("form", {
          onSubmit: t => {
            t.preventDefault(), O.AF(P, c, D).then(async () => {
              g ? I(x.C.SUCCESS) : (await (0, p.sy)(false), s())
            }).catch(() => {
              R(v.intl.string(v.t.fEptJP)), I(x.C.INIT)
            })
          },
          children: [(0, r.jsxs)(a.$mQ, {
            className: C.Qs,
            children: [(0, r.jsx)("div", {
              className: C.Kk,
              children: (0, r.jsx)("img", {
                alt: "",
                src: n(179644)
              })
            }), (0, r.jsxs)(a.BJc, {
              gap: 8,
              children: [(0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                children: v.intl.string(v.t["Jzd+z/"])
              }), (0, r.jsx)(a.ksK, {
                value: P,
                onChange: t => {
                  E(t), N(0 === t.length)
                },
                autoFocus: true,
                minLength: 1
              })]
            })]
          }), (0, r.jsx)(a.jlY, {
            className: C.qr,
            children: (0, r.jsxs)(a.ButtonGroup, {
              direction: "horizontal-reverse",
              children: [(0, r.jsx)(a.Button, {
                variant: "primary",
                text: v.intl.string(v.t["5dyZ1S"]),
                type: "submit",
                disabled: A
              }), (0, r.jsx)(a.Button, {
                variant: "secondary",
                text: v.intl.string(v.t["13/7kX"]),
                onClick: () => {
                  I(x.C.INIT)
                }
              })]
            })
          })]
        })
      }), (0, r.jsxs)(a.q7S, {
        id: x.C.SUCCESS,
        children: [(0, r.jsxs)(a.$mQ, {
          className: C.Qs,
          children: [(0, r.jsx)("div", {
            className: C.Kk,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(179644)
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              children: v.intl.string(v.t.e1qv6i)
            })
          })]
        }), (0, r.jsx)(a.jlY, {
          className: C.qr,
          children: (0, r.jsxs)(a.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, r.jsx)(a.Button, {
              variant: "primary",
              text: v.intl.string(v.t.MubYG8),
              onClick: () => {
                s(), (0, b.openUserSettings)(d.X.ACCOUNT_PANEL, {
                  section: S.nc_.ACCOUNT
                })
              }
            }), (0, r.jsx)(a.Button, {
              variant: "secondary",
              text: v.intl.string(v.t.i4jeWR),
              onClick: s
            })]
          })
        })]
      })]
    })]
  })
}

function A(t) {
  let {
    onSelect: e,
    credential: i
  } = t;
  return (0, r.jsxs)(a.W1t, {
    "data-menu-migrated": true,
    navId: "webauthn-credential-actions",
    onClose: c.Z_,
    "aria-label": v.intl.string(v.t["+nrTbK"]),
    onSelect: e,
    children: [(0, r.jsx)(a.Drp, {
      id: "webauthn-edit-credential-".concat(i.id),
      label: v.intl.string(v.t.bt75uw),
      action: () => {
        (0, a.mMO)(async () => {
          let {
            default: t
          } = await n.e("50267").then(n.bind(n, 428726));
          return e => (0, r.jsx)(t, w({
            credential: i
          }, e))
        })
      }
    }), (0, r.jsx)(a.Drp, {
      id: "webauthn-delete-credential-".concat(i.id),
      label: v.intl.string(v.t["+xgS+L"]),
      color: "danger",
      action: () => {
        O.fR(i)
      }
    })]
  })
}

function N() {
  let {
    credentials: t,
    hasFetchedCredentials: e,
    hasPendingRegisterTrigger: n
  } = (0, s.cf)([y.A], () => ({
    hasFetchedCredentials: y.A.hasFetchedCredentials(),
    credentials: y.A.getCredentials(),
    hasPendingRegisterTrigger: y.A.hasPendingRegisterTrigger()
  }));
  i.useEffect(() => {
    e || O.JQ()
  }, [e]), i.useEffect(() => () => {
    y.A.hasPendingRegisterTrigger() && O.XW()
  }, []);
  let [c, o] = i.useState(false), l = i.useCallback(() => {
    o(true), O.startRegisterWebAuthnCredential().then(t => {
      let {
        ticket: e,
        challenge: n
      } = t;
      (0, a.qfG)(t => (0, r.jsx)(E, P(w({}, t), {
        ticket: e,
        challenge: n
      })))
    }).catch(t => {
      t.message !== v.intl.string(v.t.N2yb9a) && j.A.captureException(t)
    }).finally(() => {
      o(false)
    })
  }, []);
  return i.useEffect(() => {
    n && !c && (O.XW(), l())
  }, [n, c, l]), (0, r.jsxs)(a.D0$, {
    label: v.intl.string(v.t.y7SXYX),
    description: v.intl.string(v.t.TMukAN),
    children: [t.length > 0 && (0, r.jsx)("div", {
      className: C.KY,
      children: t.map(T)
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(a.Button, {
        variant: "primary",
        size: "sm",
        text: v.intl.string(v.t.vrOCCk),
        onClick: l,
        loading: c,
        disabled: !g.d4
      })
    })]
  })
}

function T(t) {
  return (0, r.jsxs)("div", {
    className: C.De,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-md/semibold",
      children: t.name
    }), function(t) {
      if (null !== t.last_used) return (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: v.intl.format(v.t["7JgxF5"], {
          lastUsed: (0, o.Y)(t.last_used)
        })
      })
    }(t), (0, r.jsx)(a.K0, {
      icon: {
        type: "icon",
        asset: a.FHP
      },
      onClick: e => {
        (0, c.jA)(e, e => (0, r.jsx)(A, P(w({}, e), {
          credential: t
        })))
      },
      "aria-label": v.intl.string(v.t["+nrTbK"]),
      size: "sm",
      variant: "icon-only"
    })]
  }, t.id)
}
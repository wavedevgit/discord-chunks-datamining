/** Chunk was on web.js **/
/** chunk id: 778764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RegisterWebAuthnCredentialModal: () => P,
  Z: () => w
}), require("./388685.js"), require("./49124.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk849055 = require("./849055.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk136097 = require("./136097.js"),
  Chunk313201 = require("./313201.js"),
  Chunk454585 = require("./454585.js"),
  Chunk313789 = require("./313789.js"),
  Chunk202858 = require("./202858.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk287880 = require("./287880.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998502 = require("./998502.js"),
  Chunk365007 = require("./365007.js"),
  Chunk15980 = require("./15980.js"),
  Chunk755733 = require("./755733.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk689471 = require("./689471.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e) {
  let {
    transitionState: t,
    onClose: o,
    ticket: l,
    challenge: c,
    showAccountSettingsButton: m = false,
    initialSlide: y = O.x.INIT
  } = e, T = (0, u.Dt)(), [C, A] = i.useState(S.intl.string(S.t["I/sJtJ"])), [N, P] = i.useState(false), [R, w] = i.useState(y), [D, x] = i.useState(""), [L, j] = i.useState(null), M = async () => {
    let e;
    w(O.x.REGISTER);
    let t = h.isPlatformEmbedded && E.ZP.supportsFeature(v.eRX.WEBAUTHN) ? E.ZP.webAuthnRegister(c) : a.Ue(JSON.parse(c)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      g.Z.captureException(e), j(S.intl.string(S.t.xSCvBf)), w(O.x.INIT);
      return
    }
    x(e), w(O.x.NAME)
  };
  return (0, r.jsxs)(s.Y0X, {
    transitionState: t,
    "aria-labelledby": T,
    parentComponent: "UserSettingsWebAuthn",
    children: [(0, r.jsxs)(s.xBx, {
      className: I.header,
      separator: false,
      children: [(0, r.jsxs)(s.Heading, {
        id: T,
        variant: "heading-lg/semibold",
        children: [R === O.x.INIT && S.intl.string(S.t.vrOCCk), R === O.x.REGISTER && S.intl.string(S.t.wePEBF), R === O.x.NAME && S.intl.string(S.t["cY/IOu"]), R === O.x.SUCCESS && d.Z.parse(S.intl.string(S.t.FXC7ZC))]
      }), (0, r.jsx)(s.olH, {
        onClick: o,
        className: I.modalCloseButton
      })]
    }), (0, r.jsxs)(s.MyZ, {
      activeSlide: R,
      width: 440,
      children: [(0, r.jsxs)(s.Mi4, {
        id: O.x.INIT,
        children: [(0, r.jsxs)(s.hzk, {
          className: I.content,
          children: [(0, r.jsx)("div", {
            className: I.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(773072)
            })
          }), (0, r.jsx)("div", {
            children: null != L && (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: L
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: S.intl.string(S.t.Lh5vTW)
            })
          })]
        }), (0, r.jsx)(s.mzw, {
          children: (0, r.jsx)(s.Button, {
            variant: "primary",
            text: S.intl.string(S.t.oibaQa),
            onClick: M
          })
        })]
      }), (0, r.jsxs)(s.Mi4, {
        id: O.x.REGISTER,
        children: [(0, r.jsxs)(s.hzk, {
          className: I.content,
          children: [(0, r.jsx)("div", {
            className: I.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(773072)
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: S.intl.string(S.t.aVMiX3)
            })
          })]
        }), (0, r.jsx)(s.mzw, {
          children: (0, r.jsx)(s.Button, {
            variant: "primary",
            text: "",
            loading: true
          })
        })]
      }), (0, r.jsx)(s.Mi4, {
        id: O.x.NAME,
        children: (0, r.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), b.Sr(C, l, D).then(async () => {
              m ? w(O.x.SUCCESS) : (await (0, p.Yn)(false), o())
            }).catch(() => {
              j(S.intl.string(S.t.fEptJP)), w(O.x.INIT)
            })
          },
          children: [(0, r.jsxs)(s.hzk, {
            className: I.content,
            children: [(0, r.jsx)("div", {
              className: I.icon,
              children: (0, r.jsx)("img", {
                alt: "",
                src: n(637163)
              })
            }), (0, r.jsxs)(s.Kqy, {
              gap: 8,
              children: [(0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: S.intl.string(S.t["Jzd+z/"])
              }), (0, r.jsx)(s.oil, {
                value: C,
                onChange: e => {
                  A(e), P(0 === e.length)
                },
                autoFocus: true,
                minLength: 1
              })]
            })]
          }), (0, r.jsx)(s.mzw, {
            className: I.footer,
            children: (0, r.jsxs)(s.ButtonGroup, {
              direction: "horizontal-reverse",
              children: [(0, r.jsx)(s.Button, {
                variant: "primary",
                text: S.intl.string(S.t["5dyZ1S"]),
                type: "submit",
                disabled: N
              }), (0, r.jsx)(s.Button, {
                variant: "secondary",
                text: S.intl.string(S.t["13/7kX"]),
                onClick: () => {
                  w(O.x.INIT)
                }
              })]
            })
          })]
        })
      }), (0, r.jsxs)(s.Mi4, {
        id: O.x.SUCCESS,
        children: [(0, r.jsxs)(s.hzk, {
          className: I.content,
          children: [(0, r.jsx)("div", {
            className: I.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(637163)
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: S.intl.string(S.t.e1qv6i)
            })
          })]
        }), (0, r.jsx)(s.mzw, {
          className: I.footer,
          children: (0, r.jsxs)(s.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, r.jsx)(s.Button, {
              variant: "primary",
              text: S.intl.string(S.t.MubYG8),
              onClick: () => {
                o(), (0, _.openUserSettings)(f.n.ACCOUNT_PANEL, {
                  section: v.oAB.ACCOUNT
                })
              }
            }), (0, r.jsx)(s.Button, {
              variant: "secondary",
              text: S.intl.string(S.t.i4jeWR),
              onClick: o
            })]
          })
        })]
      })]
    })]
  })
}

function R(e) {
  let {
    onSelect: t,
    credential: i
  } = e;
  return (0, r.jsxs)(s.v2r, {
    navId: "webauthn-credential-actions",
    onClose: l.Zy,
    "aria-label": S.intl.string(S.t["+nrTbK"]),
    onSelect: t,
    children: [(0, r.jsx)(s.sNh, {
      id: "webauthn-edit-credential-".concat(i.id),
      label: S.intl.string(S.t.bt75uw),
      action: () => {
        (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("804").then(n.bind(n, 89616));
          return t => (0, r.jsx)(e, C({
            credential: i
          }, t))
        })
      }
    }), (0, r.jsx)(s.sNh, {
      id: "webauthn-delete-credential-".concat(i.id),
      label: S.intl.string(S.t["+xgS+L"]),
      color: "danger",
      action: () => {
        b.cT(i)
      }
    })]
  })
}

function w() {
  let {
    credentials: e,
    hasFetchedCredentials: t,
    hasPendingRegisterTrigger: n
  } = (0, Chunk442837.cj)([Chunk15980.Z], () => ({
    hasFetchedCredentials: Chunk15980.Z.hasFetchedCredentials(),
    credentials: Chunk15980.Z.getCredentials(),
    hasPendingRegisterTrigger: Chunk15980.Z.hasPendingRegisterTrigger()
  }));
  Chunk473749.useEffect(() => {
    exports || Chunk365007.hL()
  }, [exports]), Chunk473749.useEffect(() => () => {
    Chunk15980.Z.hasPendingRegisterTrigger() && Chunk365007.vg()
  }, []);
  let [a, l] = Chunk473749.useState(false), c = Chunk473749.useCallback(() => {
    Chunk239091(true), Chunk365007.startRegisterWebAuthnCredential().then(e => {
      let {
        ticket: t,
        challenge: n
      } = e;
      (0, s.h7j)(e => (0, r.jsx)(P, N(C({}, e), {
        ticket: t,
        challenge: n
      })))
    }).catch(e => {
      e.message !== S.intl.string(S.t.N2yb9a) && g.Z.captureException(e)
    }).finally(() => {
      Chunk239091(false)
    })
  }, []);
  return Chunk473749.useEffect(() => {
    require && !Chunk849055 && (Chunk365007.vg(), Chunk136097())
  }, [require, Chunk849055, Chunk136097]), (0, Chunk54381.jsxs)(Chunk481060.gNt, {
    label: Chunk388032.intl.string(Chunk388032.t.y7SXYX),
    description: Chunk388032.intl.string(Chunk388032.t.TMukAN),
    children: [module.length > 0 && (0, Chunk54381.jsx)("div", {
      className: Chunk689471.credentialList,
      children: module.map(x)
    }), (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.vrOCCk),
        onClick: Chunk136097,
        loading: Chunk849055,
        disabled: !Chunk287880.Ae
      })
    })]
  })
}

function D(e) {
  if (null !== e.last_used) return (0, r.jsx)(s.Text, {
    variant: "text-sm/normal",
    children: S.intl.format(S.t["7JgxF5"], {
      lastUsed: (0, c.p)(e.last_used)
    })
  })
}

function x(e) {
  return (0, r.jsxs)("div", {
    className: I.credentialItem,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-md/semibold",
      children: e.name
    }), D(e), (0, r.jsx)(s.hU, {
      icon: {
        type: "icon",
        asset: s.Huf
      },
      onClick: t => {
        (0, l.vq)(t, t => (0, r.jsx)(R, N(C({}, t), {
          credential: e
        })))
      },
      "aria-label": S.intl.string(S.t["+nrTbK"]),
      size: "sm",
      variant: "icon-only"
    })]
  }, e.id)
}
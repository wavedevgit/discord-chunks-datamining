/** Chunk was on web.js **/
/** chunk id: 778764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RegisterWebAuthnCredentialModal: () => R,
  Z: () => w
}), require("./388685.js"), require("./49124.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk849055 = require("./849055.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
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
  Chunk421156 = require("./421156.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
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

function C(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e) {
  let {
    transitionState: t,
    onClose: o,
    ticket: s,
    challenge: c,
    showAccountSettingsButton: h = false,
    initialSlide: y = O.x.INIT
  } = e, T = (0, u.Dt)(), [A, C] = i.useState(I.intl.string(I.t["I/sJtJ"])), [N, R] = i.useState(false), [P, w] = i.useState(y), [D, L] = i.useState(""), [x, M] = i.useState(null), k = async () => {
    let e;
    w(O.x.REGISTER);
    let t = m.isPlatformEmbedded && E.ZP.supportsFeature(v.eRX.WEBAUTHN) ? E.ZP.webAuthnRegister(c) : a.Ue(JSON.parse(c)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      g.Z.captureException(e), M(I.intl.string(I.t.xSCvBf)), w(O.x.INIT);
      return
    }
    L(e), w(O.x.NAME)
  };
  return (0, r.jsxs)(l.Y0X, {
    transitionState: t,
    "aria-labelledby": T,
    parentComponent: "UserSettingsWebAuthn",
    children: [(0, r.jsxs)(l.xBx, {
      className: S.header,
      separator: false,
      children: [(0, r.jsxs)(l.Heading, {
        id: T,
        variant: "heading-lg/semibold",
        children: [P === O.x.INIT && I.intl.string(I.t.vrOCCk), P === O.x.REGISTER && I.intl.string(I.t.wePEBF), P === O.x.NAME && I.intl.string(I.t["cY/IOu"]), P === O.x.SUCCESS && d.Z.parse(I.intl.string(I.t.FXC7ZC))]
      }), (0, r.jsx)(l.olH, {
        onClick: o,
        className: S.modalCloseButton
      })]
    }), (0, r.jsxs)(l.MyZ, {
      activeSlide: P,
      width: 440,
      children: [(0, r.jsxs)(l.Mi4, {
        id: O.x.INIT,
        children: [(0, r.jsxs)(l.hzk, {
          className: S.content,
          children: [(0, r.jsx)("div", {
            className: S.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(773072)
            })
          }), (0, r.jsx)("div", {
            children: null != x && (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: x
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              children: I.intl.string(I.t.Lh5vTW)
            })
          })]
        }), (0, r.jsx)(l.mzw, {
          children: (0, r.jsx)(l.Button, {
            variant: "primary",
            text: I.intl.string(I.t.oibaQa),
            onClick: k
          })
        })]
      }), (0, r.jsxs)(l.Mi4, {
        id: O.x.REGISTER,
        children: [(0, r.jsxs)(l.hzk, {
          className: S.content,
          children: [(0, r.jsx)("div", {
            className: S.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(773072)
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              children: I.intl.string(I.t.aVMiX3)
            })
          })]
        }), (0, r.jsx)(l.mzw, {
          children: (0, r.jsx)(l.Button, {
            variant: "primary",
            text: "",
            loading: true
          })
        })]
      }), (0, r.jsx)(l.Mi4, {
        id: O.x.NAME,
        children: (0, r.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), b.Sr(A, s, D).then(async () => {
              h ? w(O.x.SUCCESS) : (await (0, _.Yn)(false), o())
            }).catch(() => {
              M(I.intl.string(I.t.fEptJP)), w(O.x.INIT)
            })
          },
          children: [(0, r.jsxs)(l.hzk, {
            className: S.content,
            children: [(0, r.jsx)("div", {
              className: S.icon,
              children: (0, r.jsx)("img", {
                alt: "",
                src: n(637163)
              })
            }), (0, r.jsxs)(l.Kqy, {
              gap: 8,
              children: [(0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                children: I.intl.string(I.t["Jzd+z/"])
              }), (0, r.jsx)(l.oil, {
                value: A,
                onChange: e => {
                  C(e), R(0 === e.length)
                },
                autoFocus: true,
                minLength: 1
              })]
            })]
          }), (0, r.jsx)(l.mzw, {
            className: S.footer,
            children: (0, r.jsxs)(l.ButtonGroup, {
              direction: "horizontal-reverse",
              children: [(0, r.jsx)(l.Button, {
                variant: "primary",
                text: I.intl.string(I.t["5dyZ1S"]),
                type: "submit",
                disabled: N
              }), (0, r.jsx)(l.Button, {
                variant: "secondary",
                text: I.intl.string(I.t["13/7kX"]),
                onClick: () => {
                  w(O.x.INIT)
                }
              })]
            })
          })]
        })
      }), (0, r.jsxs)(l.Mi4, {
        id: O.x.SUCCESS,
        children: [(0, r.jsxs)(l.hzk, {
          className: S.content,
          children: [(0, r.jsx)("div", {
            className: S.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(637163)
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              children: I.intl.string(I.t.e1qv6i)
            })
          })]
        }), (0, r.jsx)(l.mzw, {
          className: S.footer,
          children: (0, r.jsxs)(l.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [(0, r.jsx)(l.Button, {
              variant: "primary",
              text: I.intl.string(I.t.MubYG8),
              onClick: () => {
                o(), (0, p.openUserSettings)(f.n.ACCOUNT_PANEL, {
                  section: v.oAB.ACCOUNT
                })
              }
            }), (0, r.jsx)(l.Button, {
              variant: "secondary",
              text: I.intl.string(I.t.i4jeWR),
              onClick: o
            })]
          })
        })]
      })]
    })]
  })
}

function P(e) {
  let {
    onSelect: t,
    credential: i
  } = e;
  return (0, r.jsxs)(l.v2r, {
    navId: "webauthn-credential-actions",
    onClose: c.Zy,
    "aria-label": I.intl.string(I.t["+nrTbK"]),
    onSelect: t,
    children: [(0, r.jsx)(l.sNh, {
      id: "webauthn-edit-credential-".concat(i.id),
      label: I.intl.string(I.t.bt75uw),
      action: () => {
        (0, l.ZDy)(async () => {
          let {
            default: e
          } = await n.e("804").then(n.bind(n, 89616));
          return t => (0, r.jsx)(e, A({
            credential: i
          }, t))
        })
      }
    }), (0, r.jsx)(l.sNh, {
      id: "webauthn-delete-credential-".concat(i.id),
      label: I.intl.string(I.t["+xgS+L"]),
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
  Chunk647438.useEffect(() => {
    exports || Chunk365007.hL()
  }, [exports]), Chunk647438.useEffect(() => () => {
    Chunk15980.Z.hasPendingRegisterTrigger() && Chunk365007.vg()
  }, []);
  let [a, u] = Chunk647438.useState(false), d = Chunk647438.useCallback(() => {
    Chunk313201(true), Chunk365007.startRegisterWebAuthnCredential().then(e => {
      let {
        ticket: t,
        challenge: n
      } = e;
      (0, l.h7j)(e => (0, r.jsx)(R, N(A({}, e), {
        ticket: t,
        challenge: n
      })))
    }).catch(e => {
      e.message !== I.intl.string(I.t.N2yb9a) && g.Z.captureException(e)
    }).finally(() => {
      Chunk313201(false)
    })
  }, []);
  return Chunk647438.useEffect(() => {
    require && !Chunk849055 && (Chunk365007.vg(), Chunk454585())
  }, [require, Chunk849055, Chunk454585]), (0, Chunk951288.jsxs)(Chunk481060.gNt, {
    label: Chunk388032.intl.string(Chunk388032.t.y7SXYX),
    description: Chunk388032.intl.string(Chunk388032.t.TMukAN),
    children: [module.length > 0 && (0, Chunk951288.jsx)("div", {
      className: Chunk421156.credentialList,
      children: module.map(e => (0, r.jsxs)("div", {
        className: S.credentialItem,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: e.name
        }), (0, r.jsx)(s.zx, {
          look: s.zx.Looks.BLANK,
          color: s.zx.Colors.TRANSPARENT,
          size: s.zx.Sizes.ICON,
          onClick: t => {
            (0, c.vq)(t, t => (0, r.jsx)(P, N(A({}, t), {
              credential: e
            })))
          },
          "aria-label": I.intl.string(I.t["+nrTbK"]),
          innerClassName: S.credentialOptions,
          children: (0, r.jsx)(l.Huf, {
            size: "md",
            className: S.__invalid_overflowIcon,
            colorClass: S.__invalid_overflowIconFg,
            "aria-hidden": true
          })
        })]
      }, e.id))
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.vrOCCk),
        onClick: Chunk454585,
        loading: Chunk849055,
        disabled: !Chunk287880.Ae
      })
    })]
  })
}
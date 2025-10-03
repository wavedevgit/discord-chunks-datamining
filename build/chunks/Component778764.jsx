/** Chunk was on web.js **/
/** chunk id: 778764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./49124.js"), require("./457542.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk849055 = require("./849055.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk313201 = require("./313201.js"),
  Chunk202858 = require("./202858.jsx"),
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    transitionState: t,
    onClose: o,
    ticket: s,
    challenge: c
  } = e, f = (0, u.Dt)(), [g, v] = i.useState(""), [I, T] = i.useState(true), [S, A] = i.useState(E.x.INIT), [C, N] = i.useState(""), [R, P] = i.useState(null), w = async () => {
    let e;
    A(E.x.REGISTER);
    let t = _.isPlatformEmbedded && h.ZP.supportsFeature(b.eRX.WEBAUTHN) ? h.ZP.webAuthnRegister(c) : a.Ue(JSON.parse(c)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      p.Z.captureException(e), P(y.intl.string(y.t.xSCvBQ)), A(E.x.INIT);
      return
    }
    N(e), A(E.x.NAME)
  };
  return (0, r.jsxs)(l.Y0X, {
    transitionState: t,
    "aria-labelledby": f,
    parentComponent: "UserSettingsWebAuthn",
    children: [(0, r.jsxs)(l.xBx, {
      className: O.header,
      separator: false,
      children: [(0, r.jsxs)(l.X6q, {
        id: f,
        variant: "heading-lg/semibold",
        children: [S === E.x.INIT && y.intl.string(y.t.vrOCCg), S === E.x.REGISTER && y.intl.string(y.t.wePEBA), S === E.x.NAME && y.intl.string(y.t["cY/IOj"])]
      }), (0, r.jsx)(l.olH, {
        onClick: o,
        className: O.modalCloseButton
      })]
    }), (0, r.jsxs)(l.MyZ, {
      activeSlide: S,
      width: 440,
      children: [(0, r.jsxs)(l.Mi4, {
        id: E.x.INIT,
        children: [(0, r.jsxs)(l.hzk, {
          className: O.content,
          children: [(0, r.jsx)("div", {
            className: O.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(773072)
            })
          }), (0, r.jsx)("div", {
            children: null != R && (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: R
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              children: y.intl.string(y.t.Lh5vTU)
            })
          })]
        }), (0, r.jsx)(l.mzw, {
          children: (0, r.jsx)(l.zxk, {
            variant: "primary",
            text: y.intl.string(y.t.oibaQU),
            onClick: w
          })
        })]
      }), (0, r.jsxs)(l.Mi4, {
        id: E.x.REGISTER,
        children: [(0, r.jsxs)(l.hzk, {
          className: O.content,
          children: [(0, r.jsx)("div", {
            className: O.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(773072)
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(l.Text, {
              variant: "text-md/normal",
              children: y.intl.string(y.t.aVMiX1)
            })
          })]
        }), (0, r.jsx)(l.mzw, {
          children: (0, r.jsx)(l.zxk, {
            variant: "primary",
            text: "",
            loading: true
          })
        })]
      }), (0, r.jsx)(l.Mi4, {
        id: E.x.NAME,
        children: (0, r.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), m.Sr(g, s, C).then(async () => {
              await (0, d.Yn)(false)
            }).then(() => o()).catch(() => {
              P(y.intl.string(y.t.fEptJC)), A(E.x.INIT)
            })
          },
          children: [(0, r.jsxs)(l.hzk, {
            className: O.content,
            children: [(0, r.jsx)("div", {
              className: O.icon,
              children: (0, r.jsx)("img", {
                alt: "",
                src: n(637163)
              })
            }), (0, r.jsxs)(l.Kqy, {
              gap: 8,
              children: [(0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                children: y.intl.string(y.t["Jzd+z8"])
              }), (0, r.jsx)(l.oil, {
                value: g,
                onChange: e => {
                  v(e), T(0 === e.length)
                },
                autoFocus: true,
                minLength: 1
              })]
            })]
          }), (0, r.jsx)(l.mzw, {
            className: O.footer,
            children: (0, r.jsxs)(l.hE2, {
              direction: "horizontal-reverse",
              children: [(0, r.jsx)(l.zxk, {
                variant: "primary",
                text: y.intl.string(y.t["5dyZ1d"]),
                type: "submit",
                disabled: I
              }), (0, r.jsx)(l.zxk, {
                variant: "secondary",
                text: y.intl.string(y.t["13/7kZ"]),
                onClick: () => {
                  A(E.x.INIT)
                }
              })]
            })
          })]
        })
      })]
    })]
  })
}

function C(e) {
  let {
    onSelect: t,
    credential: i
  } = e;
  return (0, r.jsxs)(l.v2r, {
    navId: "webauthn-credential-actions",
    onClose: c.Zy,
    "aria-label": y.intl.string(y.t["+nrTbG"]),
    onSelect: t,
    children: [(0, r.jsx)(l.sNh, {
      id: "webauthn-edit-credential-".concat(i.id),
      label: y.intl.string(y.t.bt75u7),
      action: () => {
        (0, l.ZDy)(async () => {
          let {
            default: e
          } = await n.e("804").then(n.bind(n, 89616));
          return t => (0, r.jsx)(e, I({
            credential: i
          }, t))
        })
      }
    }), (0, r.jsx)(l.sNh, {
      id: "webauthn-delete-credential-".concat(i.id),
      label: y.intl.string(y.t["+xgS+P"]),
      color: "danger",
      action: () => {
        m.cT(i)
      }
    })]
  })
}

function N() {
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
    Chunk313201(true), Chunk365007.L$().then(e => {
      let {
        ticket: t,
        challenge: n
      } = e;
      (0, l.h7j)(e => (0, r.jsx)(A, S(I({}, e), {
        ticket: t,
        challenge: n
      })))
    }).catch(e => {
      e.message !== y.intl.string(y.t.N2yb9f) && p.Z.captureException(e)
    }).finally(() => {
      Chunk313201(false)
    })
  }, []);
  return Chunk647438.useEffect(() => {
    require && !Chunk849055 && (Chunk365007.vg(), Chunk202858())
  }, [require, Chunk849055, Chunk202858]), (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    title: Chunk388032.intl.string(Chunk388032.t.y7SXYW),
    className: Chunk421156.settings,
    children: [(0, Chunk951288.jsx)(Chunk481060.R94, {
      type: Chunk481060.R94.Types.DESCRIPTION,
      className: Chunk421156.description,
      children: Chunk388032.intl.string(Chunk388032.t.TMukAA)
    }), module.length > 0 && (0, Chunk951288.jsx)("div", {
      className: Chunk421156.credentialList,
      children: module.map(e => (0, r.jsxs)("div", {
        className: O.credentialItem,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: e.name
        }), (0, r.jsx)(s.zx, {
          look: s.zx.Looks.BLANK,
          color: s.zx.Colors.TRANSPARENT,
          size: s.zx.Sizes.ICON,
          onClick: t => {
            (0, c.vq)(t, t => (0, r.jsx)(C, S(I({}, t), {
              credential: e
            })))
          },
          "aria-label": y.intl.string(y.t["+nrTbG"]),
          innerClassName: O.credentialOptions,
          children: (0, r.jsx)(l.Huf, {
            size: "md",
            className: O.__invalid_overflowIcon,
            colorClass: O.__invalid_overflowIconFg,
            "aria-hidden": true
          })
        })]
      }, e.id))
    }), (0, Chunk951288.jsx)("div", {
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.vrOCCg),
        onClick: Chunk202858,
        loading: Chunk849055,
        disabled: !Chunk287880.Ae
      })
    })]
  })
}
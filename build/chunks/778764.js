/** Chunk was on 20447 **/
n.d(t, {
  Z: () => S
}), n(47120), n(26686), n(266796), n(773603);
var r = n(200651),
  i = n(192379),
  s = n(849055),
  a = n(442837),
  o = n(481060),
  l = n(239091),
  c = n(313201),
  d = n(202858),
  u = n(287880),
  m = n(358085),
  g = n(960048),
  p = n(998502),
  h = n(365007),
  f = n(15980),
  N = n(755733),
  b = n(981631),
  x = n(388032),
  _ = n(902255);

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function j(e, t) {
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

function O(e) {
  let {
    transitionState: t,
    onClose: a,
    ticket: l,
    challenge: u
  } = e, f = (0, c.Dt)(), [E, j] = i.useState(""), [O, C] = i.useState(!0), [S, v] = i.useState(N.x.INIT), [T, I] = i.useState(""), [y, A] = i.useState(null), P = async () => {
    let e;
    v(N.x.REGISTER);
    let t = m.isPlatformEmbedded && p.ZP.supportsFeature(b.eRX.WEBAUTHN) ? p.ZP.webAuthnRegister(u) : s.Ue(JSON.parse(u)).then(e => JSON.stringify(e));
    try {
      e = await t
    } catch (e) {
      g.Z.captureException(e), A(x.NW.string(x.t.xSCvBQ)), v(N.x.INIT);
      return
    }
    I(e), v(N.x.NAME)
  };
  return (0, r.jsxs)(o.Y0X, {
    transitionState: t,
    "aria-labelledby": f,
    children: [(0, r.jsxs)(o.xBx, {
      className: _.header,
      separator: !1,
      children: [(0, r.jsxs)(o.X6q, {
        id: f,
        variant: "heading-lg/semibold",
        children: [S === N.x.INIT && x.NW.string(x.t.vrOCCg), S === N.x.REGISTER && x.NW.string(x.t.wePEBA), S === N.x.NAME && x.NW.string(x.t["cY/IOj"])]
      }), (0, r.jsx)(o.olH, {
        onClick: a,
        className: _.modalCloseButton
      })]
    }), (0, r.jsxs)(o.MyZ, {
      activeSlide: S,
      width: 440,
      children: [(0, r.jsxs)(o.Mi4, {
        id: N.x.INIT,
        children: [(0, r.jsxs)(o.hzk, {
          className: _.content,
          children: [(0, r.jsx)("div", {
            className: _.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(773072)
            })
          }), (0, r.jsx)("div", {
            children: null != y && (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "status-danger",
              children: y
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: x.NW.string(x.t.Lh5vTU)
            })
          })]
        }), (0, r.jsx)(o.mzw, {
          children: (0, r.jsx)(o.zxk, {
            onClick: P,
            children: x.NW.string(x.t.oibaQU)
          })
        })]
      }), (0, r.jsxs)(o.Mi4, {
        id: N.x.REGISTER,
        children: [(0, r.jsxs)(o.hzk, {
          className: _.content,
          children: [(0, r.jsx)("div", {
            className: _.icon,
            children: (0, r.jsx)("img", {
              alt: "",
              src: n(773072)
            })
          }), (0, r.jsx)("div", {
            children: (0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              children: x.NW.string(x.t.aVMiX1)
            })
          })]
        }), (0, r.jsx)(o.mzw, {
          children: (0, r.jsx)(o.zxk, {
            submitting: !0
          })
        })]
      }), (0, r.jsx)(o.Mi4, {
        id: N.x.NAME,
        children: (0, r.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault(), (0, h.Sr)(E, l, T).then(async () => {
              await (0, d.Yn)(!1)
            }).then(() => a()).catch(() => {
              A(x.NW.string(x.t.fEptJC)), v(N.x.INIT)
            })
          },
          children: [(0, r.jsxs)(o.hzk, {
            className: _.content,
            children: [(0, r.jsx)("div", {
              className: _.icon,
              children: (0, r.jsx)("img", {
                alt: "",
                src: n(637163)
              })
            }), (0, r.jsxs)("div", {
              children: [(0, r.jsx)(o.Text, {
                variant: "text-md/normal",
                children: x.NW.string(x.t["Jzd+z8"])
              }), (0, r.jsx)(o.oil, {
                className: _.input,
                value: E,
                onChange: e => {
                  j(e), C(0 === e.length)
                },
                autoFocus: !0,
                minLength: 1
              })]
            })]
          }), (0, r.jsxs)(o.mzw, {
            className: _.footer,
            children: [(0, r.jsx)(o.zxk, {
              type: "submit",
              disabled: O,
              children: x.NW.string(x.t["5dyZ1d"])
            }), (0, r.jsx)(o.zxk, {
              look: o.zxk.Looks.LINK,
              color: o.zxk.Colors.PRIMARY,
              onClick: () => {
                v(N.x.INIT)
              },
              children: x.NW.string(x.t["13/7kZ"])
            })]
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
  return (0, r.jsxs)(o.v2r, {
    navId: "webauthn-credential-actions",
    onClose: l.Zy,
    "aria-label": x.NW.string(x.t["+nrTbG"]),
    onSelect: t,
    children: [(0, r.jsx)(o.sNh, {
      id: "webauthn-edit-credential-".concat(i.id),
      label: x.NW.string(x.t.bt75u7),
      action: () => {
        (0, o.ZDy)(async () => {
          let {
            default: e
          } = await n.e("804").then(n.bind(n, 89616));
          return t => (0, r.jsx)(e, E({
            credential: i
          }, t))
        })
      }
    }), (0, r.jsx)(o.sNh, {
      id: "webauthn-delete-credential-".concat(i.id),
      label: x.NW.string(x.t["+xgS+P"]),
      color: "danger",
      action: () => {
        (0, h.cT)(i)
      }
    })]
  })
}

function S() {
  let {
    credentials: e,
    hasFetchedCredentials: t
  } = (0, a.cj)([f.Z], () => ({
    hasFetchedCredentials: f.Z.hasFetchedCredentials(),
    credentials: f.Z.getCredentials()
  }));
  i.useEffect(() => {
    t || (0, h.hL)()
  }, [t]);
  let [n, s] = i.useState(!1);
  return (0, r.jsxs)(o.hjN, {
    title: x.NW.string(x.t.y7SXYW),
    className: _.settings,
    children: [(0, r.jsx)(o.R94, {
      type: o.R94.Types.DESCRIPTION,
      className: _.description,
      children: x.NW.string(x.t.TMukAA)
    }), e.length > 0 && (0, r.jsx)("div", {
      className: _.credentialList,
      children: e.map(e => (0, r.jsxs)("div", {
        className: _.credentialItem,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/semibold",
          children: e.name
        }), (0, r.jsx)(o.zxk, {
          look: o.zxk.Looks.BLANK,
          color: o.zxk.Colors.TRANSPARENT,
          size: o.zxk.Sizes.ICON,
          onClick: t => {
            (0, l.vq)(t, t => (0, r.jsx)(C, j(E({}, t), {
              credential: e
            })))
          },
          "aria-label": x.NW.string(x.t["+nrTbG"]),
          innerClassName: _.credentialOptions,
          children: (0, r.jsx)(o.Huf, {
            size: "md",
            className: _.__invalid_overflowIcon,
            colorClass: _.__invalid_overflowIconFg,
            "aria-hidden": !0
          })
        })]
      }, e.id))
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(o.zxk, {
        onClick: () => {
          s(!0), (0, h.L$)().then(e => {
            let {
              ticket: t,
              challenge: n
            } = e;
            (0, o.h7j)(e => (0, r.jsx)(O, j(E({}, e), {
              ticket: t,
              challenge: n
            })))
          }).catch(e => {
            e.message !== x.NW.string(x.t.N2yb9f) && g.Z.captureException(e)
          }).finally(() => {
            s(!1)
          })
        },
        submitting: n,
        disabled: !u.Ae,
        size: o.zxk.Sizes.SMALL,
        children: x.NW.string(x.t.vrOCCg)
      })
    })]
  })
}
/** Chunk was on 94805 **/
n.d(t, {
  Z: () => W
}), n(47120), n(773603);
var r = n(200651),
  a = n(192379),
  i = n(442837),
  o = n(481060),
  l = n(893776),
  s = n(809206),
  c = n(607070),
  d = n(220082),
  u = n(44272),
  m = n(576306),
  _ = n(65361),
  f = n(910200),
  b = n(166184),
  x = n(314897),
  g = n(650774),
  p = n(271383),
  v = n(594174),
  h = n(626135),
  C = n(768581),
  I = n(944163),
  N = n(246364),
  j = n(983736),
  y = n(187565),
  O = n(990488),
  S = n(592286),
  E = n(981631),
  P = n(388032),
  k = n(389853),
  w = n(419851),
  F = n(246403);
let T = e => {
    let {
      headerId: t,
      email: n,
      password: a,
      setEmail: i,
      setPassword: l,
      emailError: s,
      passwordError: c
    } = e;
    return (0, r.jsxs)("div", {
      className: k.content,
      children: [(0, r.jsx)("div", {
        className: k.applicationIconContainer,
        children: (0, r.jsx)("img", {
          alt: P.NW.string(P.t.ewGfjo),
          src: w,
          className: k.applicationIcon
        })
      }), (0, r.jsx)(o.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: k.header,
        children: P.NW.string(P.t.MhcDLy)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.NW.string(P.t.SPlaR0)
      }), (0, r.jsx)("hr", {
        className: k.divider
      }), (0, r.jsx)(o.xJW, {
        title: P.NW.string(P.t.dI4d4e),
        className: k.formItem,
        children: (0, r.jsx)(o.oil, {
          value: n,
          error: s,
          onChange: i,
          autoFocus: !0
        })
      }), (0, r.jsx)(o.xJW, {
        title: P.NW.string(P.t["CIGa+/"]),
        className: k.formItem,
        children: (0, r.jsx)(o.oil, {
          type: "password",
          value: a,
          error: c,
          onChange: l
        })
      })]
    })
  },
  R = e => {
    let {
      headerId: t,
      email: n
    } = e;
    return (0, r.jsxs)("div", {
      className: k.content,
      children: [(0, r.jsx)("img", {
        alt: P.NW.string(P.t.wNAbl5),
        src: F,
        className: k.applicationIcon
      }), (0, r.jsx)(o.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: k.header,
        children: P.NW.format(P.t.v01XgI, {
          email: n
        })
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.NW.string(P.t["/Hw5aW"])
      }), (0, r.jsx)(o.zxk, {
        className: k.resendButton,
        size: o.zxk.Sizes.NONE,
        look: o.zxk.Looks.LINK,
        onClick: () => l.Z.verifyResend(),
        children: P.NW.string(P.t["MLk/mJ"])
      })]
    })
  },
  B = e => {
    var t;
    let {
      guildId: n,
      formState: a,
      updateFormState: o,
      isPreview: l = !1,
      disableVerification: s = !1
    } = e, c = (0, i.e7)([I.Z], () => I.Z.get(n));
    if (null == c) return null;
    let d = null !== (t = null != a ? a : null == c ? void 0 : c.formFields) && void 0 !== t ? t : [],
      u = l ? O.W : O.r;
    return (0, r.jsx)(u, {
      guildId: n,
      formFields: d,
      updateFormFields: o,
      disableVerification: s
    })
  },
  M = e => {
    let {
      guildId: t,
      headerId: n,
      formState: a,
      updateFormState: i,
      guildName: l,
      hasManualFormFields: s,
      disableVerification: c,
      isPreview: d = !1
    } = e;
    return (0, r.jsxs)("div", {
      className: k.content,
      children: [(0, r.jsx)(o.X6q, {
        id: n,
        variant: "heading-xxl/normal",
        className: k.header,
        children: s ? P.NW.format(P.t.cgX47e, {
          guildName: l
        }) : P.NW.string(P.t.DrEECw)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: s ? P.NW.string(P.t["3smSPD"]) : P.NW.string(P.t["7D3C5u"])
      }), (0, r.jsx)(B, {
        guildId: t,
        formState: a,
        updateFormState: i,
        isPreview: d,
        disableVerification: c
      })]
    })
  },
  W = e => {
    var t, n, l, O;
    let {
      verificationForm: w,
      headerId: F,
      guildId: B,
      onClose: W,
      onComplete: A,
      isPreview: q = !1
    } = e, L = (0, y.N0)(B, null == w ? void 0 : w.guild, q), {
      guildProfile: G,
      fetchGuildProfile: D
    } = (0, _.u)(B), z = (0, m.h)(), Z = (0, i.e7)([p.ZP, x.default], () => p.ZP.isMember(B, x.default.getId())), [J, K] = a.useState(!1);
    a.useEffect(() => {
      z && Z && !J && null == G && D().finally(() => K(!0))
    }, [D, G, J, Z, z]);
    let V = null == w ? void 0 : w.formFields.some(e => e.field_type !== N.QJ.TERMS),
      [H, U] = a.useState(null !== (l = null == w ? void 0 : w.formFields) && void 0 !== l ? l : []),
      [X, Q] = a.useState(!1),
      [Y, $] = a.useState(null),
      [ee, et] = a.useState(""),
      [en, er] = a.useState(""),
      [ea, ei] = a.useState(null),
      [eo, el] = a.useState(null),
      {
        storeMemberCount: es,
        storeOnlineCount: ec
      } = (0, i.cj)([g.Z], () => ({
        storeMemberCount: g.Z.getMemberCount(B),
        storeOnlineCount: g.Z.getOnlineCount(B)
      })),
      ed = null != ec ? ec : null == w ? void 0 : null === (t = w.guild) || void 0 === t ? void 0 : t.approximate_presence_count,
      eu = null != es ? es : null == w ? void 0 : null === (n = w.guild) || void 0 === n ? void 0 : n.approximate_member_count,
      em = null != V && V;
    a.useEffect(() => {
      null != w && U(w.formFields)
    }, [w]), a.useEffect(() => {
      null != B && h.default.track(E.rMx.OPEN_MODAL, {
        type: S.N4,
        guild_id: B
      })
    }, [B]);
    let e_ = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
      {
        currentStep: ef,
        setCurrentStep: eb
      } = (0, y.k3)(e_, em);
    (0, y.lk)(H);
    let ex = null == e_ ? void 0 : e_.verified,
      eg = null == e_ ? void 0 : e_.isPhoneVerified(),
      {
        invalidFormFields: ep,
        hasInvalidTermsFormField: ev
      } = a.useMemo(() => ({
        invalidFormFields: H.some(e => !(0, j.OA)(e)),
        hasInvalidTermsFormField: H.some(e => e.field_type === N.QJ.TERMS && !(0, j.OA)(e))
      }), [H]),
      eh = a.useMemo(() => {
        if (null == A || ep) return !0;
        if (em || (null == e_ ? void 0 : e_.isStaff())) return !1;
        switch (null == L ? void 0 : L.verificationLevel) {
          case E.sFg.VERY_HIGH:
            return !eg;
          case E.sFg.LOW:
          case E.sFg.MEDIUM:
          case E.sFg.HIGH:
            return !ex && !eg;
          case E.sFg.NONE:
          default:
            return !1
        }
      }, [A, ep, em, e_, null == L ? void 0 : L.verificationLevel, eg, ex]),
      eC = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
      eI = a.useRef(null),
      eN = function(e) {
        let t = null != e ? C.ZP.getGuildIconURL({
            id: null == e ? void 0 : e.id,
            icon: null == e ? void 0 : e.icon,
            size: 40
          }) : void 0,
          n = (0, o.dQu)(o.TVs.colors.BG_BASE_SECONDARY).hex(),
          r = (0, o.dQu)(o.TVs.colors.BG_BASE_TERTIARY).hex(),
          [a, i, l] = (0, d.Cf)(t, n, !1);
        return "linear-gradient(-45deg, ".concat(a, ", ").concat(null != l ? l : r, ")")
      }(L),
      ej = function(e) {
        let t = (0, o.dQu)(o.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
        return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")")
      }(null !== (O = null == G ? void 0 : G.brandColorPrimary) && void 0 !== O ? O : "");
    if (null == L) return null;
    let ey = async () => {
      Q(!0), ei(null), el(null);
      try {
        await (0, s.S2)({
          email: ee,
          password: en
        }), Q(!1), eb(y.KJ.EMAIL_CONFIRMATION)
      } catch (n) {
        var e, t;
        ei(null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.email), el(null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.password)
      } finally {
        Q(!1)
      }
    }, eO = async () => {
      var e, t, n, r;
      Q(!0), $(null);
      let a = null != e_ ? p.ZP.getMember(B, e_.id) : null;
      if (null != a && !a.isPending) {
        null == W || W(!0);
        return
      }
      try {
        await (null == A ? void 0 : A((e = function(e) {
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
        }({}, null != w ? w : I.t), t = {
          formFields: H
        }, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))), null == W || W(!0)
      } catch (t) {
        let e = null == t ? void 0 : t.body;
        (null == e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n.version) != null || (null == e ? void 0 : null === (r = e.errors) || void 0 === r ? void 0 : r.form_fields) != null ? $(P.NW.string(P.t.PD09Sk)) : $(null == e ? void 0 : e.message)
      } finally {
        Q(!1)
      }
    }, eS = z && null != G;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: k.guildSidebar,
        children: (0, r.jsxs)("div", {
          className: k.sidebarCard,
          children: [(0, r.jsx)("div", {
            style: {
              background: eS ? ej : eN
            },
            className: k.sidebarGradientOverlay
          }), eS ? (0, r.jsx)(f.Z, {
            profile: G,
            className: k.guildProfile,
            disableCTA: !0
          }) : (0, r.jsx)(b.Z, {
            className: k.guildProfile,
            guild: L,
            presenceCount: ed,
            memberCount: eu
          })]
        })
      }), (0, r.jsx)("div", {
        className: k.modal,
        children: (0, r.jsxs)("div", {
          className: k.mainContentWrapper,
          ref: eI,
          children: [(0, r.jsx)(u.Z, {
            className: k.modalContent,
            containerRef: eI,
            faderSize: 180,
            faderEdgeThreshold: 48,
            children: (0, r.jsx)(o.qBt, {
              className: k.sequencer,
              steps: [y.KJ.CLAIM_ACCOUNT, y.KJ.EMAIL_CONFIRMATION, y.KJ.VERIFICATION_FORM],
              step: ef,
              children: (() => {
                switch (ef) {
                  case y.KJ.CLAIM_ACCOUNT:
                    return (0, r.jsx)(T, {
                      headerId: F,
                      email: ee,
                      password: en,
                      setEmail: et,
                      setPassword: er,
                      emailError: ea,
                      passwordError: eo
                    });
                  case y.KJ.EMAIL_CONFIRMATION:
                    return (0, r.jsx)(R, {
                      headerId: F,
                      email: ee
                    });
                  case y.KJ.VERIFICATION_FORM:
                    return (0, r.jsx)(M, {
                      headerId: F,
                      guildId: B,
                      guildName: L.name,
                      formState: H,
                      updateFormState: U,
                      isPreview: q,
                      useReducedMotion: eC,
                      hasManualFormFields: V,
                      disableVerification: em
                    })
                }
              })()
            })
          }), (() => {
            switch (ef) {
              case y.KJ.CLAIM_ACCOUNT:
                return (0, r.jsxs)("div", {
                  className: k.footer,
                  children: [(0, r.jsx)(o.zxk, {
                    className: k.submitButton,
                    type: "submit",
                    submitting: X,
                    onClick: ey,
                    disabled: 0 === ee.length || 0 === en.length,
                    children: P.NW.string(P.t.PDTjLC)
                  }), (0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: P.NW.string(P.t["9GPiR0"])
                  })]
                });
              case y.KJ.EMAIL_CONFIRMATION:
                return null;
              case y.KJ.VERIFICATION_FORM:
                return (0, r.jsxs)("div", {
                  className: k.footer,
                  children: [(0, r.jsx)(o.DY3, {
                    color: o.FGA.NESTED,
                    shouldShow: eh && ep && V,
                    text: ev ? P.NW.string(P.t.PLNbh4) : P.NW.string(P.t.brWmV1),
                    children: (0, r.jsx)(o.zxk, {
                      className: k.submitButton,
                      type: "submit",
                      submitting: X,
                      onClick: eO,
                      color: o.zxk.Colors.GREEN,
                      disabled: eh,
                      children: P.NW.string(P.t.geKm7u)
                    })
                  }), null != Y && (0, r.jsx)(o.Text, {
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: Y
                  }), null == Y && V && (0, r.jsxs)("div", {
                    className: k.disclaimerFooter,
                    children: [(0, r.jsx)(o.Text, {
                      color: "header-secondary",
                      variant: "text-xs/normal",
                      children: P.NW.string(P.t["+fPCTU"])
                    }), (0, r.jsx)(o.Text, {
                      color: "header-secondary",
                      variant: "text-xs/normal",
                      children: P.NW.string(P.t.VjgH0d)
                    })]
                  })]
                })
            }
          })()]
        })
      })]
    })
  }
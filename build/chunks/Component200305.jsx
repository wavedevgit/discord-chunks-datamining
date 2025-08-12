/** Chunk was on 70971 **/
/** chunk id: 200305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk809206 = require("./809206.js"),
  Chunk607070 = require("./607070.js"),
  Chunk220082 = require("./220082.js"),
  Chunk65361 = require("./65361.js"),
  Chunk798476 = require("./798476.jsx"),
  Chunk166184 = require("./166184.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk650774 = require("./650774.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk944163 = require("./944163.js"),
  Chunk246364 = require("./246364.js"),
  Chunk983736 = require("./983736.js"),
  Chunk187565 = require("./187565.js"),
  Chunk451893 = require("./451893.jsx"),
  Chunk990488 = require("./990488.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk736178 = require("./736178.js"),
  Chunk419851 = require("./419851.js"),
  Chunk246403 = require("./246403.js");
let R = e => {
    let {
      headerId: t,
      email: n,
      password: i,
      setEmail: l,
      setPassword: a,
      emailError: o,
      passwordError: c,
      hasManualFormFields: u,
      isMember: d
    } = e;
    return (0, r.jsxs)("div", {
      className: S.content,
      children: [(0, r.jsx)("div", {
        className: S.applicationIconContainer,
        children: (0, r.jsx)("img", {
          alt: P.intl.string(P.t.ewGfjo),
          src: T,
          className: S.applicationIcon
        })
      }), (0, r.jsx)(s.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: S.header,
        children: u && !d ? P.intl.string(P.t["qQYF6+"]) : P.intl.string(P.t.MhcDLy)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.intl.string(P.t.SPlaR0)
      }), (0, r.jsx)("hr", {
        className: S.divider
      }), (0, r.jsx)(s.xJW, {
        title: P.intl.string(P.t.dI4d4e),
        className: S.formItem,
        children: (0, r.jsx)(s.oil, {
          value: n,
          error: o,
          onChange: l,
          autoFocus: true
        })
      }), (0, r.jsx)(s.xJW, {
        title: P.intl.string(P.t["CIGa+/"]),
        className: S.formItem,
        children: (0, r.jsx)(s.oil, {
          type: "password",
          value: i,
          error: c,
          onChange: a
        })
      })]
    })
  },
  w = e => {
    let {
      headerId: t,
      email: n
    } = e;
    return (0, r.jsxs)("div", {
      className: S.content,
      children: [(0, r.jsx)("img", {
        alt: P.intl.string(P.t.wNAbl5),
        src: E,
        className: S.applicationIcon
      }), (0, r.jsx)(s.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: S.header,
        children: P.intl.format(P.t.v01XgI, {
          email: n
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.intl.string(P.t["/Hw5aW"])
      }), (0, r.jsx)("div", {
        className: S.resendButtonContainer,
        children: (0, r.jsx)(s.Avr, {
          onClick: () => a.Z.verifyResend(),
          text: P.intl.string(P.t["MLk/mJ"])
        })
      })]
    })
  },
  M = e => {
    var t;
    let {
      guildId: n,
      formState: i,
      updateFormState: s,
      isPreview: a = false,
      disableVerification: o = false
    } = e, c = (0, l.e7)([j.Z], () => j.Z.get(n));
    if (null == c) return null;
    let u = null != (t = null != i ? i : null == c ? true : c.formFields) ? t : [],
      d = a ? N.W : N.r;
    return (0, r.jsx)(d, {
      guildId: n,
      formFields: u,
      updateFormFields: s,
      disableVerification: o
    })
  },
  k = e => {
    let {
      guildId: t,
      headerId: n,
      formState: i,
      updateFormState: l,
      guildName: a,
      hasManualFormFields: o,
      disableVerification: c,
      isPreview: u = false
    } = e;
    return (0, r.jsxs)("div", {
      className: S.content,
      children: [(0, r.jsx)(s.X6q, {
        id: n,
        variant: "heading-xxl/normal",
        className: S.header,
        children: o ? P.intl.format(P.t.cgX47e, {
          guildName: a
        }) : P.intl.string(P.t.DrEECw)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o ? P.intl.string(P.t["3smSPD"]) : P.intl.string(P.t["7D3C5u"])
      }), (0, r.jsx)(M, {
        guildId: t,
        formState: i,
        updateFormState: l,
        isPreview: u,
        disableVerification: c
      })]
    })
  },
  A = e => {
    var t, n, a, N;
    let {
      verificationForm: T,
      headerId: E,
      guildId: M,
      onClose: A,
      onComplete: q,
      isPreview: Z = false
    } = e, L = (0, O.N0)(M, null == T ? true : T.guild, Z), {
      guildProfile: B,
      fetchGuildProfile: D
    } = (0, d.u)(M), z = (0, l.e7)([p.ZP, h.default], () => p.ZP.isMember(M, h.default.getId())), [G, U] = i.useState(false);
    i.useEffect(() => {
      z && !G && null == B && D().finally(() => U(true))
    }, [D, B, G, z]);
    let J = null == T ? true : T.formFields.some(e => e.field_type !== C.QJ.TERMS),
      [K, H] = i.useState(null != (a = null == T ? true : T.formFields) ? a : []),
      [V, W] = i.useState(false),
      [Q, X] = i.useState(null),
      [Y, $] = i.useState(""),
      [ee, et] = i.useState(""),
      [en, er] = i.useState(null),
      [ei, el] = i.useState(null),
      {
        storeMemberCount: es,
        storeOnlineCount: ea
      } = (0, l.cj)([x.Z], () => ({
        storeMemberCount: x.Z.getMemberCount(M),
        storeOnlineCount: x.Z.getOnlineCount(M)
      })),
      eo = null != ea ? ea : null == T || null == (t = T.guild) ? true : t.approximate_presence_count,
      ec = null != es ? es : null == T || null == (n = T.guild) ? true : n.approximate_member_count,
      eu = null != J && J;
    i.useEffect(() => {
      null != T && H(T.formFields)
    }, [T]), i.useEffect(() => {
      null != M && b.default.track(F.rMx.OPEN_MODAL, {
        type: I.N4,
        guild_id: M
      })
    }, [M]);
    let ed = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
      {
        currentStep: em,
        setCurrentStep: ef
      } = (0, O.k3)(ed);
    (0, O.lk)(K);
    let eh = null == ed ? true : ed.verified,
      ex = null == ed ? true : ed.isPhoneVerified(),
      {
        invalidFormFields: ep,
        hasInvalidTermsFormField: eg
      } = i.useMemo(() => ({
        invalidFormFields: K.some(e => !(0, _.OA)(e)),
        hasInvalidTermsFormField: K.some(e => e.field_type === C.QJ.TERMS && !(0, _.OA)(e))
      }), [K]),
      eb = i.useMemo(() => {
        if (null == q || ep) returntrue;
        if (eu || (null == ed ? true : ed.isStaff())) returnfalse;
        switch (null == L ? true : L.verificationLevel) {
          case F.sFg.VERY_HIGH:
            return !ex;
          case F.sFg.LOW:
          case F.sFg.MEDIUM:
          case F.sFg.HIGH:
            return !eh && !ex;
          case F.sFg.NONE:
          default:
            returnfalse
        }
      }, [q, ep, eu, ed, null == L ? true : L.verificationLevel, ex, eh]),
      ev = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
      ej = i.useRef(null),
      eC = function(e) {
        let t = null != e ? v.ZP.getGuildIconURL({
            id: null == e ? true : e.id,
            icon: null == e ? true : e.icon,
            size: 40
          }) : true,
          n = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
          r = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWEST).hex(),
          [i, l, a] = (0, u.Cf)(t, n, false);
        return "linear-gradient(-45deg, ".concat(i, ", ").concat(null != a ? a : r, ")")
      }(L),
      e_ = function(e) {
        let t = (0, s.dQu)(s.TVs.colors.BORDER_SUBTLE).hex();
        return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")")
      }(null != (N = null == B ? true : B.brandColorPrimary) ? N : "");
    if (null == L) return (0, r.jsx)(s.$jN, {});
    let eO = async () => {
      W(true), er(null), el(null);
      try {
        await (0, o.S2)({
          email: Y,
          password: ee
        }), W(false), ef(O.KJ.EMAIL_CONFIRMATION)
      } catch (n) {
        var e, t;
        er(null == n || null == (e = n.body) ? true : e.email), el(null == n || null == (t = n.body) ? true : t.password)
      } finally {
        W(false)
      }
    }, ey = async () => {
      var e, t, n, r;
      W(true), X(null);
      let i = null != ed ? p.ZP.getMember(M, ed.id) : null;
      if (null != i && !i.isPending) {
        null == A || A(true);
        return
      }
      try {
        await (null == q ? true : q((e = function(e) {
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
        }({}, null != T ? T : j.t), t = {
          formFields: K
        }, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))), null == A || A(true)
      } catch (t) {
        let e = null == t ? true : t.body;
        (null == e || null == (n = e.errors) ? true : n.version) != null || (null == e || null == (r = e.errors) ? true : r.form_fields) != null ? X(P.intl.string(P.t.PD09Sk)) : X(null == e ? true : e.message)
      } finally {
        W(false)
      }
    }, eN = null != B;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: S.guildSidebar,
        children: [(0, r.jsx)("div", {
          style: {
            background: eN ? e_ : eC
          },
          className: S.sidebarGradientOverlay
        }), eN ? (0, r.jsx)(m.ZP, {
          profile: B,
          className: S.guildProfile,
          disableCTA: true,
          disableGuildNameClick: true
        }) : (0, r.jsx)(f.Z, {
          className: S.guildProfile,
          guild: L,
          presenceCount: eo,
          memberCount: ec
        })]
      }), (0, r.jsx)("div", {
        className: S.modal,
        children: (0, r.jsxs)("div", {
          className: S.mainContentWrapper,
          ref: ej,
          children: [(0, r.jsx)(y.Z, {
            className: S.modalContent,
            containerRef: ej,
            faderSize: 180,
            faderEdgeThreshold: 48,
            children: (0, r.jsx)(s.qBt, {
              className: S.sequencer,
              steps: [O.KJ.CLAIM_ACCOUNT, O.KJ.EMAIL_CONFIRMATION, O.KJ.VERIFICATION_FORM],
              step: em,
              children: (() => {
                switch (em) {
                  case O.KJ.CLAIM_ACCOUNT:
                    return (0, r.jsx)(R, {
                      headerId: E,
                      email: Y,
                      password: ee,
                      setEmail: $,
                      setPassword: et,
                      emailError: en,
                      passwordError: ei,
                      hasManualFormFields: J,
                      isMember: z
                    });
                  case O.KJ.EMAIL_CONFIRMATION:
                    return (0, r.jsx)(w, {
                      headerId: E,
                      email: Y
                    });
                  case O.KJ.VERIFICATION_FORM:
                    return (0, r.jsx)(k, {
                      headerId: E,
                      guildId: M,
                      guildName: L.name,
                      formState: K,
                      updateFormState: H,
                      isPreview: Z,
                      useReducedMotion: ev,
                      hasManualFormFields: J,
                      disableVerification: eu
                    })
                }
              })()
            })
          }), (() => {
            switch (em) {
              case O.KJ.CLAIM_ACCOUNT:
                return (0, r.jsxs)("div", {
                  className: S.footer,
                  children: [(0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": true,
                    className: S.submitButton,
                    children: (0, r.jsx)(s.zxk, {
                      variant: "primary",
                      text: P.intl.string(P.t.PDTjLC),
                      type: "submit",
                      loading: V,
                      onClick: eO,
                      disabled: 0 === Y.length || 0 === ee.length
                    })
                  }), (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: P.intl.string(P.t["9GPiR0"])
                  })]
                });
              case O.KJ.EMAIL_CONFIRMATION:
                return null;
              case O.KJ.VERIFICATION_FORM:
                return (0, r.jsxs)("div", {
                  className: S.footer,
                  children: [(0, r.jsx)(s.DY3, {
                    shouldShow: eb && ep && J,
                    text: eg ? P.intl.string(P.t.PLNbh4) : P.intl.string(P.t.brWmV1),
                    children: (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": true,
                      className: S.submitButton,
                      children: (0, r.jsx)(s.zxk, {
                        variant: "active",
                        text: P.intl.string(P.t.geKm7u),
                        type: "submit",
                        loading: V,
                        onClick: ey,
                        disabled: eb
                      })
                    })
                  }), null != Q && (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: Q
                  }), null == Q && J && (0, r.jsxs)("div", {
                    className: S.disclaimerFooter,
                    children: [(0, r.jsx)(s.Text, {
                      color: "header-secondary",
                      variant: "text-xs/normal",
                      children: P.intl.string(P.t["+fPCTU"])
                    }), (0, r.jsx)(s.Text, {
                      color: "header-secondary",
                      variant: "text-xs/normal",
                      children: P.intl.string(P.t.VjgH0d)
                    })]
                  })]
                })
            }
          })()]
        })
      })]
    })
  }
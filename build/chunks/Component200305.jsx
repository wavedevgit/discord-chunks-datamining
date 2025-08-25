/** Chunk was on 36605 **/
/** chunk id: 200305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk445609 = require("./445609.js"),
  Chunk419851 = require("./419851.js"),
  Chunk246403 = require("./246403.js");
let S = e => {
    let {
      headerId: t,
      email: n,
      password: l,
      setEmail: i,
      setPassword: a,
      emailError: o,
      passwordError: c,
      hasManualFormFields: u,
      isMember: d
    } = e;
    return (0, r.jsxs)("div", {
      className: P.content,
      children: [(0, r.jsx)("div", {
        className: P.applicationIconContainer,
        children: (0, r.jsx)("img", {
          alt: T.intl.string(T.t.ewGfjo),
          src: E,
          className: P.applicationIcon
        })
      }), (0, r.jsx)(s.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: P.header,
        children: u && !d ? T.intl.string(T.t["qQYF6+"]) : T.intl.string(T.t.MhcDLy)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: T.intl.string(T.t.SPlaR0)
      }), (0, r.jsx)("hr", {
        className: P.divider
      }), (0, r.jsx)(s.xJW, {
        title: T.intl.string(T.t.dI4d4e),
        className: P.formItem,
        children: (0, r.jsx)(s.oil, {
          value: n,
          error: o,
          onChange: i,
          autoFocus: true
        })
      }), (0, r.jsx)(s.xJW, {
        title: T.intl.string(T.t["CIGa+/"]),
        className: P.formItem,
        children: (0, r.jsx)(s.oil, {
          type: "password",
          value: l,
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
      className: P.content,
      children: [(0, r.jsx)("img", {
        alt: T.intl.string(T.t.wNAbl5),
        src: R,
        className: P.applicationIcon
      }), (0, r.jsx)(s.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: P.header,
        children: T.intl.format(T.t.v01XgI, {
          email: n
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: T.intl.string(T.t["/Hw5aW"])
      }), (0, r.jsx)("div", {
        className: P.resendButtonContainer,
        children: (0, r.jsx)(s.Avr, {
          onClick: () => a.Z.verifyResend(),
          text: T.intl.string(T.t["MLk/mJ"])
        })
      })]
    })
  },
  M = e => {
    var t;
    let {
      guildId: n,
      formState: l,
      updateFormState: s,
      isPreview: a = false,
      disableVerification: o = false
    } = e, c = (0, i.e7)([j.Z], () => j.Z.get(n));
    if (null == c) return null;
    let u = null != (t = null != l ? l : null == c ? true : c.formFields) ? t : [],
      d = a ? O.W : O.r;
    return (0, r.jsx)(d, {
      guildId: n,
      formFields: u,
      updateFormFields: s,
      disableVerification: o
    })
  },
  q = e => {
    let {
      guildId: t,
      headerId: n,
      formState: l,
      updateFormState: i,
      guildName: a,
      hasManualFormFields: o,
      disableVerification: c,
      isPreview: u = false
    } = e;
    return (0, r.jsxs)("div", {
      className: P.content,
      children: [(0, r.jsx)(s.X6q, {
        id: n,
        variant: "heading-xxl/normal",
        className: P.header,
        children: o ? T.intl.format(T.t.cgX47e, {
          guildName: a
        }) : T.intl.string(T.t.DrEECw)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o ? T.intl.string(T.t["3smSPD"]) : T.intl.string(T.t["7D3C5u"])
      }), (0, r.jsx)(M, {
        guildId: t,
        formState: l,
        updateFormState: i,
        isPreview: u,
        disableVerification: c
      })]
    })
  },
  A = e => {
    var t, n, a, O;
    let {
      verificationForm: E,
      headerId: R,
      guildId: M,
      onClose: A,
      onComplete: k,
      isPreview: Z = false
    } = e, D = (0, I.N0)(M, null == E ? true : E.guild, Z), {
      guildProfile: L,
      fetchGuildProfile: B
    } = (0, d.u)(M), U = (0, i.e7)([p.ZP, h.default], () => p.ZP.isMember(M, h.default.getId())), [G, J] = l.useState(false);
    l.useEffect(() => {
      U && !G && null == L && B().finally(() => J(true))
    }, [B, L, G, U]);
    let K = null == E ? true : E.formFields.some(e => e.field_type !== C.QJ.TERMS),
      [z, V] = l.useState(null != (a = null == E ? true : E.formFields) ? a : []),
      [H, W] = l.useState(false),
      [Q, X] = l.useState(null),
      [Y, $] = l.useState(""),
      [ee, et] = l.useState(""),
      [en, er] = l.useState(null),
      [el, ei] = l.useState(null),
      {
        storeMemberCount: es,
        storeOnlineCount: ea
      } = (0, i.cj)([x.Z], () => ({
        storeMemberCount: x.Z.getMemberCount(M),
        storeOnlineCount: x.Z.getOnlineCount(M)
      })),
      eo = null != ea ? ea : null == E || null == (t = E.guild) ? true : t.approximate_presence_count,
      ec = null != es ? es : null == E || null == (n = E.guild) ? true : n.approximate_member_count,
      eu = null != K && K;
    l.useEffect(() => {
      null != E && V(E.formFields)
    }, [E]), l.useEffect(() => {
      null != M && v.default.track(F.rMx.OPEN_MODAL, {
        type: N.N4,
        guild_id: M
      })
    }, [M]);
    let ed = (0, i.e7)([g.default], () => g.default.getCurrentUser()),
      {
        currentStep: em,
        setCurrentStep: ef
      } = (0, I.k3)(ed);
    (0, I.lk)(z);
    let eh = null == ed ? true : ed.verified,
      ex = null == ed ? true : ed.isPhoneVerified(),
      {
        invalidFormFields: ep,
        hasInvalidTermsFormField: eg
      } = l.useMemo(() => ({
        invalidFormFields: z.some(e => !(0, _.OA)(e)),
        hasInvalidTermsFormField: z.some(e => e.field_type === C.QJ.TERMS && !(0, _.OA)(e))
      }), [z]),
      ev = l.useMemo(() => {
        if (null == k || ep) returntrue;
        if (eu || (null == ed ? true : ed.isStaff())) returnfalse;
        switch (null == D ? true : D.verificationLevel) {
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
      }, [k, ep, eu, ed, null == D ? true : D.verificationLevel, ex, eh]),
      eb = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
      ej = l.useRef(null),
      eC = function(e) {
        let t = null != e ? b.ZP.getGuildIconURL({
            id: null == e ? true : e.id,
            icon: null == e ? true : e.icon,
            size: 40
          }) : true,
          n = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
          r = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWEST).hex(),
          [l, i, a] = (0, u.Cf)(t, n, false);
        return "linear-gradient(-45deg, ".concat(l, ", ").concat(null != a ? a : r, ")")
      }(D),
      e_ = function(e) {
        let t = (0, s.dQu)(s.TVs.colors.BORDER_SUBTLE).hex();
        return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")")
      }(null != (O = null == L ? true : L.brandColorPrimary) ? O : "");
    if (null == D) return (0, r.jsx)(s.$jN, {});
    let eI = async () => {
      W(true), er(null), ei(null);
      try {
        await (0, o.S2)({
          email: Y,
          password: ee
        }), W(false), ef(I.KJ.EMAIL_CONFIRMATION)
      } catch (n) {
        var e, t;
        er(null == n || null == (e = n.body) ? true : e.email), ei(null == n || null == (t = n.body) ? true : t.password)
      } finally {
        W(false)
      }
    }, ey = async () => {
      var e, t, n, r;
      W(true), X(null);
      let l = null != ed ? p.ZP.getMember(M, ed.id) : null;
      if (null != l && !l.isPending) {
        null == A || A(true);
        return
      }
      try {
        await (null == k ? true : k((e = function(e) {
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
        }({}, null != E ? E : j.t), t = {
          formFields: z
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
        (null == e || null == (n = e.errors) ? true : n.version) != null || (null == e || null == (r = e.errors) ? true : r.form_fields) != null ? X(T.intl.string(T.t.PD09Sk)) : X(null == e ? true : e.message)
      } finally {
        W(false)
      }
    }, eO = null != L;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: P.guildSidebar,
        children: [(0, r.jsx)("div", {
          style: {
            background: eO ? e_ : eC
          },
          className: P.sidebarGradientOverlay
        }), eO ? (0, r.jsx)(m.ZP, {
          profile: L,
          className: P.guildProfile,
          disableCTA: true,
          disableGuildNameClick: true
        }) : (0, r.jsx)(f.Z, {
          className: P.guildProfile,
          guild: D,
          presenceCount: eo,
          memberCount: ec
        })]
      }), (0, r.jsx)("div", {
        className: P.modal,
        children: (0, r.jsxs)("div", {
          className: P.mainContentWrapper,
          ref: ej,
          children: [(0, r.jsx)(y.Z, {
            className: P.modalContent,
            containerRef: ej,
            faderSize: 180,
            faderEdgeThreshold: 48,
            children: (0, r.jsx)(s.qBt, {
              className: P.sequencer,
              steps: [I.KJ.CLAIM_ACCOUNT, I.KJ.EMAIL_CONFIRMATION, I.KJ.VERIFICATION_FORM],
              step: em,
              children: (() => {
                switch (em) {
                  case I.KJ.CLAIM_ACCOUNT:
                    return (0, r.jsx)(S, {
                      headerId: R,
                      email: Y,
                      password: ee,
                      setEmail: $,
                      setPassword: et,
                      emailError: en,
                      passwordError: el,
                      hasManualFormFields: K,
                      isMember: U
                    });
                  case I.KJ.EMAIL_CONFIRMATION:
                    return (0, r.jsx)(w, {
                      headerId: R,
                      email: Y
                    });
                  case I.KJ.VERIFICATION_FORM:
                    return (0, r.jsx)(q, {
                      headerId: R,
                      guildId: M,
                      guildName: D.name,
                      formState: z,
                      updateFormState: V,
                      isPreview: Z,
                      useReducedMotion: eb,
                      hasManualFormFields: K,
                      disableVerification: eu
                    })
                }
              })()
            })
          }), (() => {
            switch (em) {
              case I.KJ.CLAIM_ACCOUNT:
                return (0, r.jsxs)("div", {
                  className: P.footer,
                  children: [(0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": true,
                    className: P.submitButton,
                    children: (0, r.jsx)(s.zxk, {
                      variant: "primary",
                      text: T.intl.string(T.t.PDTjLC),
                      type: "submit",
                      loading: H,
                      onClick: eI,
                      disabled: 0 === Y.length || 0 === ee.length
                    })
                  }), (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: T.intl.string(T.t["9GPiR0"])
                  })]
                });
              case I.KJ.EMAIL_CONFIRMATION:
                return null;
              case I.KJ.VERIFICATION_FORM:
                return (0, r.jsxs)("div", {
                  className: P.footer,
                  children: [(0, r.jsx)(s.DY3, {
                    shouldShow: ev && ep && K,
                    text: eg ? T.intl.string(T.t.PLNbh4) : T.intl.string(T.t.brWmV1),
                    children: (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": true,
                      className: P.submitButton,
                      children: (0, r.jsx)(s.zxk, {
                        variant: "active",
                        text: T.intl.string(T.t.geKm7u),
                        type: "submit",
                        loading: H,
                        onClick: ey,
                        disabled: ev
                      })
                    })
                  }), null != Q && (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: Q
                  }), null == Q && K && (0, r.jsxs)("div", {
                    className: P.disclaimerFooter,
                    children: [(0, r.jsx)(s.Text, {
                      color: "header-secondary",
                      variant: "text-xs/normal",
                      children: T.intl.string(T.t["+fPCTU"])
                    }), (0, r.jsx)(s.Text, {
                      color: "header-secondary",
                      variant: "text-xs/normal",
                      children: T.intl.string(T.t.VjgH0d)
                    })]
                  })]
                })
            }
          })()]
        })
      })]
    })
  }
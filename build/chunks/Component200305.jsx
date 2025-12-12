/** Chunk was on 93671 **/
/** chunk id: 200305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk809206 = require("./809206.js"),
  Chunk607070 = require("./607070.js"),
  Chunk220082 = require("./220082.js"),
  Chunk65361 = require("./65361.js"),
  Chunk798476 = require("./798476.jsx"),
  Chunk983858 = require("./983858.jsx"),
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
  Chunk161752 = require("./161752.js"),
  Chunk419851 = require("./419851.js"),
  Chunk246403 = require("./246403.js");
let M = e => {
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
      className: R.content,
      children: [(0, r.jsx)("div", {
        className: R.applicationIconContainer,
        children: (0, r.jsx)("img", {
          alt: E.intl.string(E.t.ewGfjv),
          src: S,
          className: R.applicationIcon
        })
      }), (0, r.jsx)(s.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: R.header,
        children: u && !d ? E.intl.string(E.t.qQYF6z) : E.intl.string(E.t.MhcDLz)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: E.intl.string(E.t["SPlaR/"])
      }), (0, r.jsx)("hr", {
        className: R.divider
      }), (0, r.jsx)("div", {
        className: R.formItem,
        children: (0, r.jsx)(s.oil, {
          label: E.intl.string(E.t.dI4d4S),
          value: n,
          error: o,
          onChange: i,
          autoFocus: true
        })
      }), (0, r.jsx)("div", {
        className: R.formItem,
        children: (0, r.jsx)(s.oil, {
          label: E.intl.string(E.t["CIGa+7"]),
          type: "password",
          value: l,
          error: c,
          onChange: a
        })
      })]
    })
  },
  _ = e => {
    let {
      headerId: t,
      email: n
    } = e;
    return (0, r.jsxs)("div", {
      className: R.content,
      children: [(0, r.jsx)("img", {
        alt: E.intl.string(E.t.wNAblz),
        src: w,
        className: R.applicationIcon
      }), (0, r.jsx)(s.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: R.header,
        children: E.intl.format(E.t.v01XgL, {
          email: n
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: E.intl.string(E.t["/Hw5ad"])
      }), (0, r.jsx)("div", {
        className: R.resendButtonContainer,
        children: (0, r.jsx)(s.Avr, {
          onClick: () => o.Z.verifyResend(),
          text: E.intl.string(E.t["MLk/mK"])
        })
      })]
    })
  },
  A = e => {
    var t;
    let {
      guildId: n,
      formState: l,
      updateFormState: a,
      isPreview: s = false,
      disableVerification: o = false
    } = e, c = (0, i.e7)([C.Z], () => C.Z.get(n));
    if (null == c) return null;
    let u = null != (t = null != l ? l : null == c ? true : c.formFields) ? t : [],
      d = s ? F.W : F.r;
    return (0, r.jsx)(d, {
      guildId: n,
      formFields: u,
      updateFormFields: a,
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
      className: R.content,
      children: [(0, r.jsx)(s.Heading, {
        id: n,
        variant: "heading-xxl/normal",
        className: R.header,
        children: o ? E.intl.format(E.t.cgX47Z, {
          guildName: a
        }) : E.intl.string(E.t.DrEEC8)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: o ? E.intl.string(E.t["3smSPP"]) : E.intl.string(E.t["7D3C5p"])
      }), (0, r.jsx)(A, {
        guildId: t,
        formState: l,
        updateFormState: i,
        isPreview: u,
        disableVerification: c
      })]
    })
  },
  Z = e => {
    var t, n, o, F;
    let {
      verificationForm: S,
      headerId: w,
      guildId: A,
      onClose: Z,
      onComplete: k,
      isPreview: L = false
    } = e, B = (0, N.N0)(A, null == S ? true : S.guild, L), {
      guildProfile: D,
      fetchGuildProfile: G
    } = (0, m.u)(A), U = (0, i.e7)([g.ZP, x.default], () => g.ZP.isMember(A, x.default.getId())), [H, J] = l.useState(false);
    l.useEffect(() => {
      U && !H && null == D && G().finally(() => J(true))
    }, [G, D, H, U]);
    let K = null == S ? true : S.formFields.some(e => e.field_type !== O.QJ.TERMS),
      [V, Q] = l.useState(null != (o = null == S ? true : S.formFields) ? o : []),
      [z, W] = l.useState(false),
      [Y, X] = l.useState(null),
      [$, ee] = l.useState(""),
      [et, en] = l.useState(""),
      [er, el] = l.useState(null),
      [ei, ea] = l.useState(null),
      {
        storeMemberCount: es,
        storeOnlineCount: eo
      } = (0, i.cj)([h.Z], () => ({
        storeMemberCount: h.Z.getMemberCount(A),
        storeOnlineCount: h.Z.getOnlineCount(A)
      })),
      ec = null != eo ? eo : null == S || null == (t = S.guild) ? true : t.approximate_presence_count,
      eu = null != es ? es : null == S || null == (n = S.guild) ? true : n.approximate_member_count,
      ed = null != K && K;
    l.useEffect(() => {
      null != S && Q(S.formFields)
    }, [S]), l.useEffect(() => {
      null != A && v.default.track(T.rMx.OPEN_MODAL, {
        type: P.N4,
        guild_id: A
      })
    }, [A]);
    let em = (0, i.e7)([p.default], () => p.default.getCurrentUser()),
      {
        currentStep: ef,
        setCurrentStep: eb
      } = (0, N.k3)(em);
    (0, N.lk)(V);
    let ex = null == em ? true : em.verified,
      eh = null == em ? true : em.isPhoneVerified(),
      {
        invalidFormFields: eg,
        hasInvalidTermsFormField: ep
      } = l.useMemo(() => ({
        invalidFormFields: V.some(e => !(0, I.OA)(e)),
        hasInvalidTermsFormField: V.some(e => e.field_type === O.QJ.TERMS && !(0, I.OA)(e))
      }), [V]),
      ev = l.useMemo(() => {
        if (null == k || eg) returntrue;
        if (ed || (null == em ? true : em.isStaff())) returnfalse;
        switch (null == B ? true : B.verificationLevel) {
          case T.sFg.VERY_HIGH:
            return !eh;
          case T.sFg.LOW:
          case T.sFg.MEDIUM:
          case T.sFg.HIGH:
            return !ex && !eh;
          case T.sFg.NONE:
          default:
            returnfalse
        }
      }, [k, eg, ed, em, null == B ? true : B.verificationLevel, eh, ex]),
      ej = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
      eC = l.useRef(null),
      eO = function(e) {
        let t = null != e ? j.ZP.getGuildIconURL({
            id: null == e ? true : e.id,
            icon: null == e ? true : e.icon,
            size: 40
          }) : true,
          n = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
          r = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWEST).hex(),
          [l, i, a] = (0, d.Cf)(t, n, false);
        return "linear-gradient(-45deg, ".concat(l, ", ").concat(null != a ? a : r, ")")
      }(B),
      eI = function(e) {
        let t = (0, s.dQu)(s.TVs.colors.BORDER_SUBTLE).hex();
        return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")")
      }(null != (F = null == D ? true : D.brandColorPrimary) ? F : "");
    if (null == B) return (0, r.jsx)(s.$jN, {});
    let eN = async () => {
      W(true), el(null), ea(null);
      try {
        await (0, c.S2)({
          email: $,
          password: et
        }), W(false), eb(N.KJ.EMAIL_CONFIRMATION)
      } catch (n) {
        var e, t;
        el(null == n || null == (e = n.body) ? true : e.email), ea(null == n || null == (t = n.body) ? true : t.password)
      } finally {
        W(false)
      }
    }, ey = async () => {
      var e, t, n, r;
      W(true), X(null);
      let l = null != em ? g.ZP.getMember(A, em.id) : null;
      if (null != l && !l.isPending) {
        null == Z || Z(true);
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
        }({}, null != S ? S : C.t), t = {
          formFields: V
        }, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))), null == Z || Z(true)
      } catch (t) {
        let e = null == t ? true : t.body;
        (null == e || null == (n = e.errors) ? true : n.version) != null || (null == e || null == (r = e.errors) ? true : r.form_fields) != null ? X(E.intl.string(E.t.PD09Sl)) : X(null == e ? true : e.message)
      } finally {
        W(false)
      }
    }, eF = null != D;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: R.guildSidebar,
        children: [(0, r.jsx)("div", {
          style: {
            background: eF ? eI : eO
          },
          className: R.sidebarGradientOverlay
        }), eF ? (0, r.jsx)(f.ZP, {
          profile: D,
          className: R.guildProfile,
          disableCTA: true,
          disableGuildNameClick: true
        }) : (0, r.jsx)(b.Z, {
          className: R.guildProfile,
          guild: B,
          presenceCount: ec,
          memberCount: eu
        })]
      }), (0, r.jsx)("div", {
        className: R.modal,
        children: (0, r.jsxs)("div", {
          className: R.mainContentWrapper,
          ref: eC,
          children: [(0, r.jsx)(y.Z, {
            className: R.modalContent,
            containerRef: eC,
            faderSize: 180,
            faderEdgeThreshold: 48,
            children: (0, r.jsx)(s.qBt, {
              className: R.sequencer,
              steps: [N.KJ.CLAIM_ACCOUNT, N.KJ.EMAIL_CONFIRMATION, N.KJ.VERIFICATION_FORM],
              step: ef,
              children: (() => {
                switch (ef) {
                  case N.KJ.CLAIM_ACCOUNT:
                    return (0, r.jsx)(M, {
                      headerId: w,
                      email: $,
                      password: et,
                      setEmail: ee,
                      setPassword: en,
                      emailError: er,
                      passwordError: ei,
                      hasManualFormFields: K,
                      isMember: U
                    });
                  case N.KJ.EMAIL_CONFIRMATION:
                    return (0, r.jsx)(_, {
                      headerId: w,
                      email: $
                    });
                  case N.KJ.VERIFICATION_FORM:
                    return (0, r.jsx)(q, {
                      headerId: w,
                      guildId: A,
                      guildName: B.name,
                      formState: V,
                      updateFormState: Q,
                      isPreview: L,
                      useReducedMotion: ej,
                      hasManualFormFields: K,
                      disableVerification: ed
                    })
                }
              })()
            })
          }), (() => {
            switch (ef) {
              case N.KJ.CLAIM_ACCOUNT:
                return (0, r.jsxs)("div", {
                  className: R.footer,
                  children: [(0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": true,
                    className: R.submitButton,
                    children: (0, r.jsx)(s.Button, {
                      variant: "primary",
                      text: E.intl.string(E.t.PDTjLN),
                      type: "submit",
                      loading: z,
                      onClick: eN,
                      disabled: 0 === $.length || 0 === et.length
                    })
                  }), (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: E.intl.string(E.t["9GPiR6"])
                  })]
                });
              case N.KJ.EMAIL_CONFIRMATION:
                return null;
              case N.KJ.VERIFICATION_FORM:
                return (0, r.jsxs)("div", {
                  className: R.footer,
                  children: [(0, r.jsx)(a.u, {
                    asContainer: true,
                    shouldShow: ev && eg && K,
                    text: ep ? E.intl.string(E.t.PLNbh3) : E.intl.string(E.t.brWmV2),
                    children: (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": true,
                      className: R.submitButton,
                      children: (0, r.jsx)(s.Button, {
                        variant: "active",
                        text: E.intl.string(E.t.geKm7t),
                        type: "submit",
                        loading: z,
                        onClick: ey,
                        disabled: ev
                      })
                    })
                  }), null != Y && (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: Y
                  }), null == Y && K && (0, r.jsxs)("div", {
                    className: R.disclaimerFooter,
                    children: [(0, r.jsx)(s.Text, {
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: E.intl.string(E.t["+fPCTZ"])
                    }), (0, r.jsx)(s.Text, {
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: E.intl.string(E.t.VjgH0c)
                    })]
                  })]
                })
            }
          })()]
        })
      })]
    })
  }
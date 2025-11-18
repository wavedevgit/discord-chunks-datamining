/** Chunk was on 11324 **/
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
  Chunk184326 = require("./184326.js"),
  Chunk419851 = require("./419851.js"),
  Chunk246403 = require("./246403.js");
let w = e => {
    let {
      headerId: t,
      email: n,
      password: l,
      setEmail: i,
      setPassword: s,
      emailError: o,
      passwordError: c,
      hasManualFormFields: u,
      isMember: d
    } = e;
    return (0, r.jsxs)("div", {
      className: E.content,
      children: [(0, r.jsx)("div", {
        className: E.applicationIconContainer,
        children: (0, r.jsx)("img", {
          alt: T.intl.string(T.t.ewGfjv),
          src: R,
          className: E.applicationIcon
        })
      }), (0, r.jsx)(a.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: E.header,
        children: u && !d ? T.intl.string(T.t.qQYF6z) : T.intl.string(T.t.MhcDLz)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: T.intl.string(T.t["SPlaR/"])
      }), (0, r.jsx)("hr", {
        className: E.divider
      }), (0, r.jsx)("div", {
        className: E.formItem,
        children: (0, r.jsx)(a.oil, {
          label: T.intl.string(T.t.dI4d4S),
          value: n,
          error: o,
          onChange: i,
          autoFocus: true
        })
      }), (0, r.jsx)("div", {
        className: E.formItem,
        children: (0, r.jsx)(a.oil, {
          label: T.intl.string(T.t["CIGa+7"]),
          type: "password",
          value: l,
          error: c,
          onChange: s
        })
      })]
    })
  },
  M = e => {
    let {
      headerId: t,
      email: n
    } = e;
    return (0, r.jsxs)("div", {
      className: E.content,
      children: [(0, r.jsx)("img", {
        alt: T.intl.string(T.t.wNAblz),
        src: S,
        className: E.applicationIcon
      }), (0, r.jsx)(a.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: E.header,
        children: T.intl.format(T.t.v01XgL, {
          email: n
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: T.intl.string(T.t["/Hw5ad"])
      }), (0, r.jsx)("div", {
        className: E.resendButtonContainer,
        children: (0, r.jsx)(a.Avr, {
          onClick: () => o.Z.verifyResend(),
          text: T.intl.string(T.t["MLk/mK"])
        })
      })]
    })
  },
  A = e => {
    var t;
    let {
      guildId: n,
      formState: l,
      updateFormState: s,
      isPreview: a = false,
      disableVerification: o = false
    } = e, c = (0, i.e7)([C.Z], () => C.Z.get(n));
    if (null == c) return null;
    let u = null != (t = null != l ? l : null == c ? true : c.formFields) ? t : [],
      d = a ? N.W : N.r;
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
      guildName: s,
      hasManualFormFields: o,
      disableVerification: c,
      isPreview: u = false
    } = e;
    return (0, r.jsxs)("div", {
      className: E.content,
      children: [(0, r.jsx)(a.Heading, {
        id: n,
        variant: "heading-xxl/normal",
        className: E.header,
        children: o ? T.intl.format(T.t.cgX47Z, {
          guildName: s
        }) : T.intl.string(T.t.DrEEC8)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o ? T.intl.string(T.t["3smSPP"]) : T.intl.string(T.t["7D3C5p"])
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
    var t, n, o, N;
    let {
      verificationForm: R,
      headerId: S,
      guildId: A,
      onClose: Z,
      onComplete: k,
      isPreview: L = false
    } = e, B = (0, y.N0)(A, null == R ? true : R.guild, L), {
      guildProfile: D,
      fetchGuildProfile: G
    } = (0, m.u)(A), U = (0, i.e7)([p.ZP, x.default], () => p.ZP.isMember(A, x.default.getId())), [H, J] = l.useState(false);
    l.useEffect(() => {
      U && !H && null == D && G().finally(() => J(true))
    }, [G, D, H, U]);
    let K = null == R ? true : R.formFields.some(e => e.field_type !== _.QJ.TERMS),
      [V, Q] = l.useState(null != (o = null == R ? true : R.formFields) ? o : []),
      [z, W] = l.useState(false),
      [Y, X] = l.useState(null),
      [$, ee] = l.useState(""),
      [et, en] = l.useState(""),
      [er, el] = l.useState(null),
      [ei, es] = l.useState(null),
      {
        storeMemberCount: ea,
        storeOnlineCount: eo
      } = (0, i.cj)([g.Z], () => ({
        storeMemberCount: g.Z.getMemberCount(A),
        storeOnlineCount: g.Z.getOnlineCount(A)
      })),
      ec = null != eo ? eo : null == R || null == (t = R.guild) ? true : t.approximate_presence_count,
      eu = null != ea ? ea : null == R || null == (n = R.guild) ? true : n.approximate_member_count,
      ed = null != K && K;
    l.useEffect(() => {
      null != R && Q(R.formFields)
    }, [R]), l.useEffect(() => {
      null != A && b.default.track(P.rMx.OPEN_MODAL, {
        type: F.N4,
        guild_id: A
      })
    }, [A]);
    let em = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
      {
        currentStep: ef,
        setCurrentStep: eh
      } = (0, y.k3)(em);
    (0, y.lk)(V);
    let ex = null == em ? true : em.verified,
      eg = null == em ? true : em.isPhoneVerified(),
      {
        invalidFormFields: ep,
        hasInvalidTermsFormField: ev
      } = l.useMemo(() => ({
        invalidFormFields: V.some(e => !(0, O.OA)(e)),
        hasInvalidTermsFormField: V.some(e => e.field_type === _.QJ.TERMS && !(0, O.OA)(e))
      }), [V]),
      eb = l.useMemo(() => {
        if (null == k || ep) returntrue;
        if (ed || (null == em ? true : em.isStaff())) returnfalse;
        switch (null == B ? true : B.verificationLevel) {
          case P.sFg.VERY_HIGH:
            return !eg;
          case P.sFg.LOW:
          case P.sFg.MEDIUM:
          case P.sFg.HIGH:
            return !ex && !eg;
          case P.sFg.NONE:
          default:
            returnfalse
        }
      }, [k, ep, ed, em, null == B ? true : B.verificationLevel, eg, ex]),
      ej = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
      eC = l.useRef(null),
      e_ = function(e) {
        let t = null != e ? j.ZP.getGuildIconURL({
            id: null == e ? true : e.id,
            icon: null == e ? true : e.icon,
            size: 40
          }) : true,
          n = (0, a.dQu)(a.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
          r = (0, a.dQu)(a.TVs.colors.BACKGROUND_BASE_LOWEST).hex(),
          [l, i, s] = (0, d.Cf)(t, n, false);
        return "linear-gradient(-45deg, ".concat(l, ", ").concat(null != s ? s : r, ")")
      }(B),
      eO = function(e) {
        let t = (0, a.dQu)(a.TVs.colors.BORDER_SUBTLE).hex();
        return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")")
      }(null != (N = null == D ? true : D.brandColorPrimary) ? N : "");
    if (null == B) return (0, r.jsx)(a.$jN, {});
    let ey = async () => {
      W(true), el(null), es(null);
      try {
        await (0, c.S2)({
          email: $,
          password: et
        }), W(false), eh(y.KJ.EMAIL_CONFIRMATION)
      } catch (n) {
        var e, t;
        el(null == n || null == (e = n.body) ? true : e.email), es(null == n || null == (t = n.body) ? true : t.password)
      } finally {
        W(false)
      }
    }, eI = async () => {
      var e, t, n, r;
      W(true), X(null);
      let l = null != em ? p.ZP.getMember(A, em.id) : null;
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
        }({}, null != R ? R : C.t), t = {
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
        (null == e || null == (n = e.errors) ? true : n.version) != null || (null == e || null == (r = e.errors) ? true : r.form_fields) != null ? X(T.intl.string(T.t.PD09Sl)) : X(null == e ? true : e.message)
      } finally {
        W(false)
      }
    }, eN = null != D;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: E.guildSidebar,
        children: [(0, r.jsx)("div", {
          style: {
            background: eN ? eO : e_
          },
          className: E.sidebarGradientOverlay
        }), eN ? (0, r.jsx)(f.ZP, {
          profile: D,
          className: E.guildProfile,
          disableCTA: true,
          disableGuildNameClick: true
        }) : (0, r.jsx)(h.Z, {
          className: E.guildProfile,
          guild: B,
          presenceCount: ec,
          memberCount: eu
        })]
      }), (0, r.jsx)("div", {
        className: E.modal,
        children: (0, r.jsxs)("div", {
          className: E.mainContentWrapper,
          ref: eC,
          children: [(0, r.jsx)(I.Z, {
            className: E.modalContent,
            containerRef: eC,
            faderSize: 180,
            faderEdgeThreshold: 48,
            children: (0, r.jsx)(a.qBt, {
              className: E.sequencer,
              steps: [y.KJ.CLAIM_ACCOUNT, y.KJ.EMAIL_CONFIRMATION, y.KJ.VERIFICATION_FORM],
              step: ef,
              children: (() => {
                switch (ef) {
                  case y.KJ.CLAIM_ACCOUNT:
                    return (0, r.jsx)(w, {
                      headerId: S,
                      email: $,
                      password: et,
                      setEmail: ee,
                      setPassword: en,
                      emailError: er,
                      passwordError: ei,
                      hasManualFormFields: K,
                      isMember: U
                    });
                  case y.KJ.EMAIL_CONFIRMATION:
                    return (0, r.jsx)(M, {
                      headerId: S,
                      email: $
                    });
                  case y.KJ.VERIFICATION_FORM:
                    return (0, r.jsx)(q, {
                      headerId: S,
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
              case y.KJ.CLAIM_ACCOUNT:
                return (0, r.jsxs)("div", {
                  className: E.footer,
                  children: [(0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": true,
                    className: E.submitButton,
                    children: (0, r.jsx)(a.Button, {
                      variant: "primary",
                      text: T.intl.string(T.t.PDTjLN),
                      type: "submit",
                      loading: z,
                      onClick: ey,
                      disabled: 0 === $.length || 0 === et.length
                    })
                  }), (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: T.intl.string(T.t["9GPiR6"])
                  })]
                });
              case y.KJ.EMAIL_CONFIRMATION:
                return null;
              case y.KJ.VERIFICATION_FORM:
                return (0, r.jsxs)("div", {
                  className: E.footer,
                  children: [(0, r.jsx)(s.u, {
                    asContainer: true,
                    shouldShow: eb && ep && K,
                    text: ev ? T.intl.string(T.t.PLNbh3) : T.intl.string(T.t.brWmV2),
                    children: (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": true,
                      className: E.submitButton,
                      children: (0, r.jsx)(a.Button, {
                        variant: "active",
                        text: T.intl.string(T.t.geKm7t),
                        type: "submit",
                        loading: z,
                        onClick: eI,
                        disabled: eb
                      })
                    })
                  }), null != Y && (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: Y
                  }), null == Y && K && (0, r.jsxs)("div", {
                    className: E.disclaimerFooter,
                    children: [(0, r.jsx)(a.Text, {
                      color: "header-secondary",
                      variant: "text-xs/normal",
                      children: T.intl.string(T.t["+fPCTZ"])
                    }), (0, r.jsx)(a.Text, {
                      color: "header-secondary",
                      variant: "text-xs/normal",
                      children: T.intl.string(T.t.VjgH0c)
                    })]
                  })]
                })
            }
          })()]
        })
      })]
    })
  }
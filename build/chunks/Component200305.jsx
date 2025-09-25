/** Chunk was on 11324 **/
/** chunk id: 200305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
          alt: P.intl.string(P.t.ewGfjo),
          src: R,
          className: E.applicationIcon
        })
      }), (0, r.jsx)(a.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: E.header,
        children: u && !d ? P.intl.string(P.t["qQYF6+"]) : P.intl.string(P.t.MhcDLy)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.intl.string(P.t.SPlaR0)
      }), (0, r.jsx)("hr", {
        className: E.divider
      }), (0, r.jsx)("div", {
        className: E.formItem,
        children: (0, r.jsx)(a.oil, {
          label: P.intl.string(P.t.dI4d4e),
          value: n,
          error: o,
          onChange: i,
          autoFocus: true
        })
      }), (0, r.jsx)("div", {
        className: E.formItem,
        children: (0, r.jsx)(a.oil, {
          label: P.intl.string(P.t["CIGa+/"]),
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
        alt: P.intl.string(P.t.wNAbl5),
        src: S,
        className: E.applicationIcon
      }), (0, r.jsx)(a.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: E.header,
        children: P.intl.format(P.t.v01XgI, {
          email: n
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.intl.string(P.t["/Hw5aW"])
      }), (0, r.jsx)("div", {
        className: E.resendButtonContainer,
        children: (0, r.jsx)(a.Avr, {
          onClick: () => o.Z.verifyResend(),
          text: P.intl.string(P.t["MLk/mJ"])
        })
      })]
    })
  },
  q = e => {
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
  A = e => {
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
      children: [(0, r.jsx)(a.X6q, {
        id: n,
        variant: "heading-xxl/normal",
        className: E.header,
        children: o ? P.intl.format(P.t.cgX47e, {
          guildName: s
        }) : P.intl.string(P.t.DrEECw)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o ? P.intl.string(P.t["3smSPD"]) : P.intl.string(P.t["7D3C5u"])
      }), (0, r.jsx)(q, {
        guildId: t,
        formState: l,
        updateFormState: i,
        isPreview: u,
        disableVerification: c
      })]
    })
  },
  k = e => {
    var t, n, o, N;
    let {
      verificationForm: R,
      headerId: S,
      guildId: q,
      onClose: k,
      onComplete: Z,
      isPreview: L = false
    } = e, D = (0, y.N0)(q, null == R ? true : R.guild, L), {
      guildProfile: B,
      fetchGuildProfile: U
    } = (0, m.u)(q), G = (0, i.e7)([g.ZP, x.default], () => g.ZP.isMember(q, x.default.getId())), [K, J] = l.useState(false);
    l.useEffect(() => {
      G && !K && null == B && U().finally(() => J(true))
    }, [U, B, K, G]);
    let z = null == R ? true : R.formFields.some(e => e.field_type !== _.QJ.TERMS),
      [V, H] = l.useState(null != (o = null == R ? true : R.formFields) ? o : []),
      [Q, W] = l.useState(false),
      [X, Y] = l.useState(null),
      [$, ee] = l.useState(""),
      [et, en] = l.useState(""),
      [er, el] = l.useState(null),
      [ei, es] = l.useState(null),
      {
        storeMemberCount: ea,
        storeOnlineCount: eo
      } = (0, i.cj)([p.Z], () => ({
        storeMemberCount: p.Z.getMemberCount(q),
        storeOnlineCount: p.Z.getOnlineCount(q)
      })),
      ec = null != eo ? eo : null == R || null == (t = R.guild) ? true : t.approximate_presence_count,
      eu = null != ea ? ea : null == R || null == (n = R.guild) ? true : n.approximate_member_count,
      ed = null != z && z;
    l.useEffect(() => {
      null != R && H(R.formFields)
    }, [R]), l.useEffect(() => {
      null != q && b.default.track(T.rMx.OPEN_MODAL, {
        type: F.N4,
        guild_id: q
      })
    }, [q]);
    let em = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
      {
        currentStep: ef,
        setCurrentStep: eh
      } = (0, y.k3)(em);
    (0, y.lk)(V);
    let ex = null == em ? true : em.verified,
      ep = null == em ? true : em.isPhoneVerified(),
      {
        invalidFormFields: eg,
        hasInvalidTermsFormField: ev
      } = l.useMemo(() => ({
        invalidFormFields: V.some(e => !(0, I.OA)(e)),
        hasInvalidTermsFormField: V.some(e => e.field_type === _.QJ.TERMS && !(0, I.OA)(e))
      }), [V]),
      eb = l.useMemo(() => {
        if (null == Z || eg) returntrue;
        if (ed || (null == em ? true : em.isStaff())) returnfalse;
        switch (null == D ? true : D.verificationLevel) {
          case T.sFg.VERY_HIGH:
            return !ep;
          case T.sFg.LOW:
          case T.sFg.MEDIUM:
          case T.sFg.HIGH:
            return !ex && !ep;
          case T.sFg.NONE:
          default:
            returnfalse
        }
      }, [Z, eg, ed, em, null == D ? true : D.verificationLevel, ep, ex]),
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
      }(D),
      eI = function(e) {
        let t = (0, a.dQu)(a.TVs.colors.BORDER_SUBTLE).hex();
        return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")")
      }(null != (N = null == B ? true : B.brandColorPrimary) ? N : "");
    if (null == D) return (0, r.jsx)(a.$jN, {});
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
    }, eO = async () => {
      var e, t, n, r;
      W(true), Y(null);
      let l = null != em ? g.ZP.getMember(q, em.id) : null;
      if (null != l && !l.isPending) {
        null == k || k(true);
        return
      }
      try {
        await (null == Z ? true : Z((e = function(e) {
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
        }), e))), null == k || k(true)
      } catch (t) {
        let e = null == t ? true : t.body;
        (null == e || null == (n = e.errors) ? true : n.version) != null || (null == e || null == (r = e.errors) ? true : r.form_fields) != null ? Y(P.intl.string(P.t.PD09Sk)) : Y(null == e ? true : e.message)
      } finally {
        W(false)
      }
    }, eN = null != B;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: E.guildSidebar,
        children: [(0, r.jsx)("div", {
          style: {
            background: eN ? eI : e_
          },
          className: E.sidebarGradientOverlay
        }), eN ? (0, r.jsx)(f.ZP, {
          profile: B,
          className: E.guildProfile,
          disableCTA: true,
          disableGuildNameClick: true
        }) : (0, r.jsx)(h.Z, {
          className: E.guildProfile,
          guild: D,
          presenceCount: ec,
          memberCount: eu
        })]
      }), (0, r.jsx)("div", {
        className: E.modal,
        children: (0, r.jsxs)("div", {
          className: E.mainContentWrapper,
          ref: eC,
          children: [(0, r.jsx)(O.Z, {
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
                      hasManualFormFields: z,
                      isMember: G
                    });
                  case y.KJ.EMAIL_CONFIRMATION:
                    return (0, r.jsx)(M, {
                      headerId: S,
                      email: $
                    });
                  case y.KJ.VERIFICATION_FORM:
                    return (0, r.jsx)(A, {
                      headerId: S,
                      guildId: q,
                      guildName: D.name,
                      formState: V,
                      updateFormState: H,
                      isPreview: L,
                      useReducedMotion: ej,
                      hasManualFormFields: z,
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
                    children: (0, r.jsx)(a.zxk, {
                      variant: "primary",
                      text: P.intl.string(P.t.PDTjLC),
                      type: "submit",
                      loading: Q,
                      onClick: ey,
                      disabled: 0 === $.length || 0 === et.length
                    })
                  }), (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "header-secondary",
                    children: P.intl.string(P.t["9GPiR0"])
                  })]
                });
              case y.KJ.EMAIL_CONFIRMATION:
                return null;
              case y.KJ.VERIFICATION_FORM:
                return (0, r.jsxs)("div", {
                  className: E.footer,
                  children: [(0, r.jsx)(s.u, {
                    asContainer: true,
                    shouldShow: eb && eg && z,
                    text: ev ? P.intl.string(P.t.PLNbh4) : P.intl.string(P.t.brWmV1),
                    children: (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": true,
                      className: E.submitButton,
                      children: (0, r.jsx)(a.zxk, {
                        variant: "active",
                        text: P.intl.string(P.t.geKm7u),
                        type: "submit",
                        loading: Q,
                        onClick: eO,
                        disabled: eb
                      })
                    })
                  }), null != X && (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: X
                  }), null == X && z && (0, r.jsxs)("div", {
                    className: E.disclaimerFooter,
                    children: [(0, r.jsx)(a.Text, {
                      color: "header-secondary",
                      variant: "text-xs/normal",
                      children: P.intl.string(P.t["+fPCTU"])
                    }), (0, r.jsx)(a.Text, {
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
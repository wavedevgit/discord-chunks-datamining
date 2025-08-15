/** Chunk was on 36605 **/
/** chunk id: 200305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
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
let T = e => {
    let {
      headerId: t,
      email: n,
      password: i,
      setEmail: l,
      setPassword: o,
      emailError: a,
      passwordError: c,
      hasManualFormFields: u,
      isMember: d
    } = e;
    return (0, r.jsxs)("div", {
      className: F.content,
      children: [(0, r.jsx)("div", {
        className: F.applicationIconContainer,
        children: (0, r.jsx)("img", {
          alt: P.intl.string(P.t.ewGfjo),
          src: R,
          className: F.applicationIcon
        })
      }), (0, r.jsx)(s.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: F.header,
        children: u && !d ? P.intl.string(P.t["qQYF6+"]) : P.intl.string(P.t.MhcDLy)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.intl.string(P.t.SPlaR0)
      }), (0, r.jsx)("hr", {
        className: F.divider
      }), (0, r.jsx)(s.xJW, {
        title: P.intl.string(P.t.dI4d4e),
        className: F.formItem,
        children: (0, r.jsx)(s.oil, {
          value: n,
          error: a,
          onChange: l,
          autoFocus: true
        })
      }), (0, r.jsx)(s.xJW, {
        title: P.intl.string(P.t["CIGa+/"]),
        className: F.formItem,
        children: (0, r.jsx)(s.oil, {
          type: "password",
          value: i,
          error: c,
          onChange: o
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
      className: F.content,
      children: [(0, r.jsx)("img", {
        alt: P.intl.string(P.t.wNAbl5),
        src: S,
        className: F.applicationIcon
      }), (0, r.jsx)(s.X6q, {
        id: t,
        variant: "heading-xl/semibold",
        className: F.header,
        children: P.intl.format(P.t.v01XgI, {
          email: n
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: P.intl.string(P.t["/Hw5aW"])
      }), (0, r.jsx)("div", {
        className: F.resendButtonContainer,
        children: (0, r.jsx)(s.Avr, {
          onClick: () => o.Z.verifyResend(),
          text: P.intl.string(P.t["MLk/mJ"])
        })
      })]
    })
  },
  w = e => {
    var t;
    let {
      guildId: n,
      formState: i,
      updateFormState: s,
      isPreview: o = false,
      disableVerification: a = false
    } = e, c = (0, l.e7)([_.Z], () => _.Z.get(n));
    if (null == c) return null;
    let u = null != (t = null != i ? i : null == c ? true : c.formFields) ? t : [],
      d = o ? y.W : y.r;
    return (0, r.jsx)(d, {
      guildId: n,
      formFields: u,
      updateFormFields: s,
      disableVerification: a
    })
  },
  A = e => {
    let {
      guildId: t,
      headerId: n,
      formState: i,
      updateFormState: l,
      guildName: o,
      hasManualFormFields: a,
      disableVerification: c,
      isPreview: u = false
    } = e;
    return (0, r.jsxs)("div", {
      className: F.content,
      children: [(0, r.jsx)(s.X6q, {
        id: n,
        variant: "heading-xxl/normal",
        className: F.header,
        children: a ? P.intl.format(P.t.cgX47e, {
          guildName: o
        }) : P.intl.string(P.t.DrEECw)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: a ? P.intl.string(P.t["3smSPD"]) : P.intl.string(P.t["7D3C5u"])
      }), (0, r.jsx)(w, {
        guildId: t,
        formState: i,
        updateFormState: l,
        isPreview: u,
        disableVerification: c
      })]
    })
  },
  k = e => {
    var t, n, o, y;
    let {
      verificationForm: R,
      headerId: S,
      guildId: w,
      onClose: k,
      onComplete: D,
      isPreview: q = false
    } = e, Z = (0, O.N0)(w, null == R ? true : R.guild, q), {
      guildProfile: L,
      fetchGuildProfile: B
    } = (0, d.u)(w), U = (0, l.e7)([x.ZP, h.default], () => x.ZP.isMember(w, h.default.getId())), [H, z] = i.useState(false);
    i.useEffect(() => {
      U && !H && null == L && B().finally(() => z(true))
    }, [B, L, H, U]);
    let G = null == R ? true : R.formFields.some(e => e.field_type !== j.QJ.TERMS),
      [W, V] = i.useState(null != (o = null == R ? true : R.formFields) ? o : []),
      [J, K] = i.useState(false),
      [Q, Y] = i.useState(null),
      [X, $] = i.useState(""),
      [ee, et] = i.useState(""),
      [en, er] = i.useState(null),
      [ei, el] = i.useState(null),
      {
        storeMemberCount: es,
        storeOnlineCount: eo
      } = (0, l.cj)([p.Z], () => ({
        storeMemberCount: p.Z.getMemberCount(w),
        storeOnlineCount: p.Z.getOnlineCount(w)
      })),
      ea = null != eo ? eo : null == R || null == (t = R.guild) ? true : t.approximate_presence_count,
      ec = null != es ? es : null == R || null == (n = R.guild) ? true : n.approximate_member_count,
      eu = null != G && G;
    i.useEffect(() => {
      null != R && V(R.formFields)
    }, [R]), i.useEffect(() => {
      null != w && b.default.track(I.rMx.OPEN_MODAL, {
        type: E.N4,
        guild_id: w
      })
    }, [w]);
    let ed = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
      {
        currentStep: em,
        setCurrentStep: ef
      } = (0, O.k3)(ed);
    (0, O.lk)(W);
    let eh = null == ed ? true : ed.verified,
      ep = null == ed ? true : ed.isPhoneVerified(),
      {
        invalidFormFields: ex,
        hasInvalidTermsFormField: eg
      } = i.useMemo(() => ({
        invalidFormFields: W.some(e => !(0, C.OA)(e)),
        hasInvalidTermsFormField: W.some(e => e.field_type === j.QJ.TERMS && !(0, C.OA)(e))
      }), [W]),
      eb = i.useMemo(() => {
        if (null == D || ex) returntrue;
        if (eu || (null == ed ? true : ed.isStaff())) returnfalse;
        switch (null == Z ? true : Z.verificationLevel) {
          case I.sFg.VERY_HIGH:
            return !ep;
          case I.sFg.LOW:
          case I.sFg.MEDIUM:
          case I.sFg.HIGH:
            return !eh && !ep;
          case I.sFg.NONE:
          default:
            returnfalse
        }
      }, [D, ex, eu, ed, null == Z ? true : Z.verificationLevel, ep, eh]),
      ev = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
      e_ = i.useRef(null),
      ej = function(e) {
        let t = null != e ? v.ZP.getGuildIconURL({
            id: null == e ? true : e.id,
            icon: null == e ? true : e.icon,
            size: 40
          }) : true,
          n = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
          r = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWEST).hex(),
          [i, l, o] = (0, u.Cf)(t, n, false);
        return "linear-gradient(-45deg, ".concat(i, ", ").concat(null != o ? o : r, ")")
      }(Z),
      eC = function(e) {
        let t = (0, s.dQu)(s.TVs.colors.BORDER_SUBTLE).hex();
        return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")")
      }(null != (y = null == L ? true : L.brandColorPrimary) ? y : "");
    if (null == Z) return (0, r.jsx)(s.$jN, {});
    let eO = async () => {
      K(true), er(null), el(null);
      try {
        await (0, a.S2)({
          email: X,
          password: ee
        }), K(false), ef(O.KJ.EMAIL_CONFIRMATION)
      } catch (n) {
        var e, t;
        er(null == n || null == (e = n.body) ? true : e.email), el(null == n || null == (t = n.body) ? true : t.password)
      } finally {
        K(false)
      }
    }, eN = async () => {
      var e, t, n, r;
      K(true), Y(null);
      let i = null != ed ? x.ZP.getMember(w, ed.id) : null;
      if (null != i && !i.isPending) {
        null == k || k(true);
        return
      }
      try {
        await (null == D ? true : D((e = function(e) {
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
        }({}, null != R ? R : _.t), t = {
          formFields: W
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
        K(false)
      }
    }, ey = null != L;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: F.guildSidebar,
        children: [(0, r.jsx)("div", {
          style: {
            background: ey ? eC : ej
          },
          className: F.sidebarGradientOverlay
        }), ey ? (0, r.jsx)(m.ZP, {
          profile: L,
          className: F.guildProfile,
          disableCTA: true,
          disableGuildNameClick: true
        }) : (0, r.jsx)(f.Z, {
          className: F.guildProfile,
          guild: Z,
          presenceCount: ea,
          memberCount: ec
        })]
      }), (0, r.jsx)("div", {
        className: F.modal,
        children: (0, r.jsxs)("div", {
          className: F.mainContentWrapper,
          ref: e_,
          children: [(0, r.jsx)(N.Z, {
            className: F.modalContent,
            containerRef: e_,
            faderSize: 180,
            faderEdgeThreshold: 48,
            children: (0, r.jsx)(s.qBt, {
              className: F.sequencer,
              steps: [O.KJ.CLAIM_ACCOUNT, O.KJ.EMAIL_CONFIRMATION, O.KJ.VERIFICATION_FORM],
              step: em,
              children: (() => {
                switch (em) {
                  case O.KJ.CLAIM_ACCOUNT:
                    return (0, r.jsx)(T, {
                      headerId: S,
                      email: X,
                      password: ee,
                      setEmail: $,
                      setPassword: et,
                      emailError: en,
                      passwordError: ei,
                      hasManualFormFields: G,
                      isMember: U
                    });
                  case O.KJ.EMAIL_CONFIRMATION:
                    return (0, r.jsx)(M, {
                      headerId: S,
                      email: X
                    });
                  case O.KJ.VERIFICATION_FORM:
                    return (0, r.jsx)(A, {
                      headerId: S,
                      guildId: w,
                      guildName: Z.name,
                      formState: W,
                      updateFormState: V,
                      isPreview: q,
                      useReducedMotion: ev,
                      hasManualFormFields: G,
                      disableVerification: eu
                    })
                }
              })()
            })
          }), (() => {
            switch (em) {
              case O.KJ.CLAIM_ACCOUNT:
                return (0, r.jsxs)("div", {
                  className: F.footer,
                  children: [(0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": true,
                    className: F.submitButton,
                    children: (0, r.jsx)(s.zxk, {
                      variant: "primary",
                      text: P.intl.string(P.t.PDTjLC),
                      type: "submit",
                      loading: J,
                      onClick: eO,
                      disabled: 0 === X.length || 0 === ee.length
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
                  className: F.footer,
                  children: [(0, r.jsx)(s.DY3, {
                    shouldShow: eb && ex && G,
                    text: eg ? P.intl.string(P.t.PLNbh4) : P.intl.string(P.t.brWmV1),
                    children: (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": true,
                      className: F.submitButton,
                      children: (0, r.jsx)(s.zxk, {
                        variant: "active",
                        text: P.intl.string(P.t.geKm7u),
                        type: "submit",
                        loading: J,
                        onClick: eN,
                        disabled: eb
                      })
                    })
                  }), null != Q && (0, r.jsx)(s.Text, {
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: Q
                  }), null == Q && G && (0, r.jsxs)("div", {
                    className: F.disclaimerFooter,
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
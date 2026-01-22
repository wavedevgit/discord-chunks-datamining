/** Chunk was on 20601 **/
/** chunk id: 29697, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => D
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk631670 = require("./631670.js"),
  Chunk775602 = require("./775602.js"),
  Chunk654107 = require("./654107.js"),
  Chunk90084 = require("./90084.js"),
  Chunk42780 = require("./42780.jsx"),
  Chunk764548 = require("./764548.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk498642 = require("./498642.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk60175 = require("./60175.js"),
  Chunk513461 = require("./513461.js"),
  Chunk709977 = require("./709977.js"),
  Chunk338724 = require("./338724.js"),
  Chunk18366 = require("./18366.jsx"),
  Chunk624094 = require("./624094.jsx"),
  Chunk260197 = require("./260197.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk70645 = require("./70645.js"),
  Chunk596831 = require("./596831.js"),
  Chunk764293 = require("./764293.js");
let T = e => {
    let {
      headerId: t,
      email: l,
      password: r,
      setEmail: s,
      setPassword: i,
      emailError: o,
      passwordError: c,
      hasManualFormFields: d,
      isMember: u
    } = e;
    return (0, n.jsxs)("div", {
      className: P.Qs,
      children: [(0, n.jsx)("div", {
        className: P.DS,
        children: (0, n.jsx)("img", {
          alt: F.intl.string(F.t.ewGfjv),
          src: S,
          className: P.In
        })
      }), (0, n.jsx)(a.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: P.wx,
        children: d && !u ? F.intl.string(F.t.qQYF6z) : F.intl.string(F.t.MhcDLz)
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: F.intl.string(F.t["SPlaR/"])
      }), (0, n.jsx)("hr", {
        className: P.yF
      }), (0, n.jsx)("div", {
        className: P.kz,
        children: (0, n.jsx)(a.ksK, {
          label: F.intl.string(F.t.dI4d4S),
          value: l,
          error: o,
          onChange: s,
          autoFocus: true
        })
      }), (0, n.jsx)("div", {
        className: P.kz,
        children: (0, n.jsx)(a.ksK, {
          label: F.intl.string(F.t["CIGa+7"]),
          type: "password",
          value: r,
          error: c,
          onChange: i
        })
      })]
    })
  },
  M = e => {
    let {
      headerId: t,
      email: l
    } = e;
    return (0, n.jsxs)("div", {
      className: P.Qs,
      children: [(0, n.jsx)("img", {
        alt: F.intl.string(F.t.wNAblz),
        src: R,
        className: P.In
      }), (0, n.jsx)(a.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: P.wx,
        children: F.intl.format(F.t.v01XgL, {
          email: l
        })
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: F.intl.string(F.t["/Hw5ad"])
      }), (0, n.jsx)("div", {
        className: P.rb,
        children: (0, n.jsx)(a.QWc, {
          onClick: () => o.A.verifyResend(),
          text: F.intl.string(F.t["MLk/mK"])
        })
      })]
    })
  },
  w = e => {
    var t;
    let {
      guildId: l,
      formState: r,
      updateFormState: i,
      isPreview: a = false,
      disableVerification: o = false
    } = e, c = (0, s.bG)([C.A], () => C.A.get(l));
    if (null == c) return null;
    let d = null != (t = null != r ? r : null == c ? true : c.formFields) ? t : [],
      u = a ? A.E : A.k;
    return (0, n.jsx)(u, {
      guildId: l,
      formFields: d,
      updateFormFields: i,
      disableVerification: o
    })
  },
  k = e => {
    let {
      guildId: t,
      headerId: l,
      formState: r,
      updateFormState: s,
      guildName: i,
      hasManualFormFields: o,
      disableVerification: c,
      isPreview: d = false
    } = e;
    return (0, n.jsxs)("div", {
      className: P.Qs,
      children: [(0, n.jsx)(a.Heading, {
        id: l,
        variant: "heading-xxl/normal",
        className: P.wx,
        children: o ? F.intl.format(F.t.cgX47Z, {
          guildName: i
        }) : F.intl.string(F.t.DrEEC8)
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: o ? F.intl.string(F.t["3smSPP"]) : F.intl.string(F.t["7D3C5p"])
      }), (0, n.jsx)(w, {
        guildId: t,
        formState: r,
        updateFormState: s,
        isPreview: d,
        disableVerification: c
      })]
    })
  },
  D = e => {
    var t, l, o, A, S;
    let R, {
        verificationForm: w,
        headerId: D,
        guildId: G,
        onClose: L,
        onComplete: U,
        isPreview: H = false
      } = e,
      Q = (0, N.x$)(G, null == w ? true : w.guild, H),
      {
        guildProfile: V,
        fetchGuildProfile: z
      } = (0, f.u)(G),
      Y = (0, s.bG)([v.Ay, b.default], () => v.Ay.isMember(G, b.default.getId())),
      [B, X] = r.useState(false);
    r.useEffect(() => {
      Y && !B && null == V && z().finally(() => X(true))
    }, [z, V, B, Y]);
    let q = null == w ? true : w.formFields.some(e => e.field_type !== O.rX.TERMS),
      [K, W] = r.useState(null != (t = null == w ? true : w.formFields) ? t : []),
      [J, Z] = r.useState(false),
      [$, ee] = r.useState(null),
      [et, el] = r.useState(""),
      [en, er] = r.useState(""),
      [es, ei] = r.useState(null),
      [ea, eo] = r.useState(null),
      {
        storeMemberCount: ec,
        storeOnlineCount: ed
      } = (0, s.cf)([h.A], () => ({
        storeMemberCount: h.A.getMemberCount(G),
        storeOnlineCount: h.A.getOnlineCount(G)
      })),
      eu = null != ed ? ed : null == w || null == (o = w.guild) ? true : o.approximate_presence_count,
      ef = null != ec ? ec : null == w || null == (A = w.guild) ? true : A.approximate_member_count,
      em = null != q && q;
    r.useEffect(() => {
      null != w && W(w.formFields)
    }, [w]), r.useEffect(() => {
      null != G && j.default.track(E.HAw.OPEN_MODAL, {
        type: I.mk,
        guild_id: G
      })
    }, [G]);
    let ex = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
      {
        currentStep: eb,
        setCurrentStep: eh
      } = (0, N.dy)(ex);
    (0, N.he)(K);
    let ev = null == ex ? true : ex.verified,
      eg = null == ex ? true : ex.isPhoneVerified(),
      {
        invalidFormFields: ej,
        hasInvalidTermsFormField: ep
      } = r.useMemo(() => ({
        invalidFormFields: K.some(e => !(0, y.Ge)(e)),
        hasInvalidTermsFormField: K.some(e => e.field_type === O.rX.TERMS && !(0, y.Ge)(e))
      }), [K]),
      eC = r.useMemo(() => {
        if (null == U || ej) returntrue;
        if (em || (null == ex ? true : ex.isStaff())) returnfalse;
        switch (null == Q ? true : Q.verificationLevel) {
          case E.PvD.VERY_HIGH:
            return !eg;
          case E.PvD.LOW:
          case E.PvD.MEDIUM:
          case E.PvD.HIGH:
            return !ev && !eg;
          case E.PvD.NONE:
          default:
            returnfalse
        }
      }, [U, ej, em, ex, null == Q ? true : Q.verificationLevel, eg, ev]),
      eO = (0, s.bG)([d.A], () => d.A.useReducedMotion),
      ey = r.useRef(null),
      eN = function(e) {
        let t = null != e ? p.Ay.getGuildIconURL({
            id: null == e ? true : e.id,
            icon: null == e ? true : e.icon,
            size: 40
          }) : true,
          l = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
          n = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWEST).hex(),
          [r, s, i] = (0, u.rh)(t, l, false);
        return "linear-gradient(-45deg, ".concat(r, ", ").concat(null != i ? i : n, ")")
      }(Q),
      e_ = (S = null != (l = null == V ? true : V.brandColorPrimary) ? l : "", R = (0, a.rdh)(a.LU0.colors.BORDER_SUBTLE).hex(), "linear-gradient(-45deg, ".concat(R, ", ").concat(S, ")"));
    if (null == Q) return (0, n.jsx)(a.y$y, {});
    let eA = async () => {
      Z(true), ei(null), eo(null);
      try {
        await (0, c.gt)({
          email: et,
          password: en
        }), Z(false), eh(N.Qg.EMAIL_CONFIRMATION)
      } catch (l) {
        var e, t;
        ei(null == l || null == (e = l.body) ? true : e.email), eo(null == l || null == (t = l.body) ? true : t.password)
      } finally {
        Z(false)
      }
    }, eI = async () => {
      var e, t, l, n;
      Z(true), ee(null);
      let r = null != ex ? v.Ay.getMember(G, ex.id) : null;
      if (null != r && !r.isPending) {
        null == L || L(true);
        return
      }
      try {
        await (null == U ? true : U((e = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var l = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(l);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
              return Object.getOwnPropertyDescriptor(l, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = l[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({}, null != w ? w : C.U), t = {
          formFields: K
        }, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var l = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            l.push.apply(l, n)
          }
          return l
        })(Object(t)).forEach(function(l) {
          Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
        }), e))), null == L || L(true)
      } catch (t) {
        let e = null == t ? true : t.body;
        (null == e || null == (l = e.errors) ? true : l.version) != null || (null == e || null == (n = e.errors) ? true : n.form_fields) != null ? ee(F.intl.string(F.t.PD09Sl)) : ee(null == e ? true : e.message)
      } finally {
        Z(false)
      }
    }, eE = null != V;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)("div", {
        className: P.uC,
        children: [(0, n.jsx)("div", {
          style: {
            background: eE ? e_ : eN
          },
          className: P.nL
        }), eE ? (0, n.jsx)(m.Ay, {
          profile: V,
          className: P.P5,
          disableCTA: true,
          disableGuildNameClick: true
        }) : (0, n.jsx)(x.A, {
          className: P.P5,
          guild: Q,
          presenceCount: eu,
          memberCount: ef
        })]
      }), (0, n.jsx)("div", {
        className: P.yl,
        children: (0, n.jsxs)("div", {
          className: P.Ok,
          ref: ey,
          children: [(0, n.jsx)(_.A, {
            className: P.jE,
            containerRef: ey,
            faderSize: 180,
            faderEdgeThreshold: 48,
            children: (0, n.jsx)(a.YC2, {
              className: P.C9,
              steps: [N.Qg.CLAIM_ACCOUNT, N.Qg.EMAIL_CONFIRMATION, N.Qg.VERIFICATION_FORM],
              step: eb,
              children: (() => {
                switch (eb) {
                  case N.Qg.CLAIM_ACCOUNT:
                    return (0, n.jsx)(T, {
                      headerId: D,
                      email: et,
                      password: en,
                      setEmail: el,
                      setPassword: er,
                      emailError: es,
                      passwordError: ea,
                      hasManualFormFields: q,
                      isMember: Y
                    });
                  case N.Qg.EMAIL_CONFIRMATION:
                    return (0, n.jsx)(M, {
                      headerId: D,
                      email: et
                    });
                  case N.Qg.VERIFICATION_FORM:
                    return (0, n.jsx)(k, {
                      headerId: D,
                      guildId: G,
                      guildName: Q.name,
                      formState: K,
                      updateFormState: W,
                      isPreview: H,
                      useReducedMotion: eO,
                      hasManualFormFields: q,
                      disableVerification: em
                    })
                }
              })()
            })
          }), (() => {
            switch (eb) {
              case N.Qg.CLAIM_ACCOUNT:
                return (0, n.jsxs)("div", {
                  className: P.qr,
                  children: [(0, n.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": true,
                    className: P.RC,
                    children: (0, n.jsx)(a.Button, {
                      variant: "primary",
                      text: F.intl.string(F.t.PDTjLN),
                      type: "submit",
                      loading: J,
                      onClick: eA,
                      disabled: 0 === et.length || 0 === en.length
                    })
                  }), (0, n.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: F.intl.string(F.t["9GPiR6"])
                  })]
                });
              case N.Qg.EMAIL_CONFIRMATION:
                return null;
              case N.Qg.VERIFICATION_FORM:
                return (0, n.jsxs)("div", {
                  className: P.qr,
                  children: [(0, n.jsx)(i.m, {
                    asContainer: true,
                    shouldShow: eC && ej && q,
                    text: ep ? F.intl.string(F.t.PLNbh3) : F.intl.string(F.t.brWmV2),
                    children: (0, n.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": true,
                      className: P.RC,
                      children: (0, n.jsx)(a.Button, {
                        variant: "active",
                        text: F.intl.string(F.t.geKm7t),
                        type: "submit",
                        loading: J,
                        onClick: eI,
                        disabled: eC
                      })
                    })
                  }), null != $ && (0, n.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: $
                  }), null == $ && q && (0, n.jsxs)("div", {
                    className: P.BU,
                    children: [(0, n.jsx)(a.Text, {
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: F.intl.string(F.t["+fPCTZ"])
                    }), (0, n.jsx)(a.Text, {
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: F.intl.string(F.t.VjgH0c)
                    })]
                  })]
                })
            }
          })()]
        })
      })]
    })
  }
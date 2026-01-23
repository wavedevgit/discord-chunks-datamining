/** Chunk was on 20601 **/
/** chunk id: 29697, original params: e,t,n (module,exports,require) **/
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
      email: n,
      password: r,
      setEmail: i,
      setPassword: s,
      emailError: o,
      passwordError: c,
      hasManualFormFields: u,
      isMember: d
    } = e;
    return (0, l.jsxs)("div", {
      className: E.Qs,
      children: [(0, l.jsx)("div", {
        className: E.DS,
        children: (0, l.jsx)("img", {
          alt: P.intl.string(P.t.ewGfjv),
          src: S,
          className: E.In
        })
      }), (0, l.jsx)(a.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: E.wx,
        children: u && !d ? P.intl.string(P.t.qQYF6z) : P.intl.string(P.t.MhcDLz)
      }), (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: P.intl.string(P.t["SPlaR/"])
      }), (0, l.jsx)("hr", {
        className: E.yF
      }), (0, l.jsx)("div", {
        className: E.kz,
        children: (0, l.jsx)(a.ksK, {
          label: P.intl.string(P.t.dI4d4S),
          value: n,
          error: o,
          onChange: i,
          autoFocus: true
        })
      }), (0, l.jsx)("div", {
        className: E.kz,
        children: (0, l.jsx)(a.ksK, {
          label: P.intl.string(P.t["CIGa+7"]),
          type: "password",
          value: r,
          error: c,
          onChange: s
        })
      })]
    })
  },
  w = e => {
    let {
      headerId: t,
      email: n
    } = e;
    return (0, l.jsxs)("div", {
      className: E.Qs,
      children: [(0, l.jsx)("img", {
        alt: P.intl.string(P.t.wNAblz),
        src: R,
        className: E.In
      }), (0, l.jsx)(a.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: E.wx,
        children: P.intl.format(P.t.v01XgL, {
          email: n
        })
      }), (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: P.intl.string(P.t["/Hw5ad"])
      }), (0, l.jsx)("div", {
        className: E.rb,
        children: (0, l.jsx)(a.QWc, {
          onClick: () => o.A.verifyResend(),
          text: P.intl.string(P.t["MLk/mK"])
        })
      })]
    })
  },
  M = e => {
    var t;
    let {
      guildId: n,
      formState: r,
      updateFormState: s,
      isPreview: a = false,
      disableVerification: o = false
    } = e, c = (0, i.bG)([_.A], () => _.A.get(n));
    if (null == c) return null;
    let u = null != (t = null != r ? r : null == c ? true : c.formFields) ? t : [],
      d = a ? I.E : I.k;
    return (0, l.jsx)(d, {
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
      formState: r,
      updateFormState: i,
      guildName: s,
      hasManualFormFields: o,
      disableVerification: c,
      isPreview: u = false
    } = e;
    return (0, l.jsxs)("div", {
      className: E.Qs,
      children: [(0, l.jsx)(a.Heading, {
        id: n,
        variant: "heading-xxl/normal",
        className: E.wx,
        children: o ? P.intl.format(P.t.cgX47Z, {
          guildName: s
        }) : P.intl.string(P.t.DrEEC8)
      }), (0, l.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: o ? P.intl.string(P.t["3smSPP"]) : P.intl.string(P.t["7D3C5p"])
      }), (0, l.jsx)(M, {
        guildId: t,
        formState: r,
        updateFormState: i,
        isPreview: u,
        disableVerification: c
      })]
    })
  },
  D = e => {
    var t, n, o, I, S;
    let R, {
        verificationForm: M,
        headerId: D,
        guildId: G,
        onClose: L,
        onComplete: H,
        isPreview: U = false
      } = e,
      Q = (0, O.x$)(G, null == M ? true : M.guild, U),
      {
        guildProfile: q,
        fetchGuildProfile: B
      } = (0, m.u)(G),
      V = (0, i.bG)([v.Ay, h.default], () => v.Ay.isMember(G, h.default.getId())),
      [z, Y] = r.useState(false);
    r.useEffect(() => {
      V && !z && null == q && B().finally(() => Y(true))
    }, [B, q, z, V]);
    let X = null == M ? true : M.formFields.some(e => e.field_type !== C.rX.TERMS),
      [K, W] = r.useState(null != (t = null == M ? true : M.formFields) ? t : []),
      [J, Z] = r.useState(false),
      [$, ee] = r.useState(null),
      [et, en] = r.useState(""),
      [el, er] = r.useState(""),
      [ei, es] = r.useState(null),
      [ea, eo] = r.useState(null),
      {
        storeMemberCount: ec,
        storeOnlineCount: eu
      } = (0, i.cf)([g.A], () => ({
        storeMemberCount: g.A.getMemberCount(G),
        storeOnlineCount: g.A.getOnlineCount(G)
      })),
      ed = null != eu ? eu : null == M || null == (o = M.guild) ? true : o.approximate_presence_count,
      em = null != ec ? ec : null == M || null == (I = M.guild) ? true : I.approximate_member_count,
      ef = null != X && X;
    r.useEffect(() => {
      null != M && W(M.formFields)
    }, [M]), r.useEffect(() => {
      null != G && b.default.track(F.HAw.OPEN_MODAL, {
        type: A.mk,
        guild_id: G
      })
    }, [G]);
    let ex = (0, i.bG)([j.default], () => j.default.getCurrentUser()),
      {
        currentStep: eh,
        setCurrentStep: eg
      } = (0, O.dy)(ex);
    (0, O.he)(K);
    let ev = null == ex ? true : ex.verified,
      ej = null == ex ? true : ex.isPhoneVerified(),
      {
        invalidFormFields: eb,
        hasInvalidTermsFormField: ep
      } = r.useMemo(() => ({
        invalidFormFields: K.some(e => !(0, y.Ge)(e)),
        hasInvalidTermsFormField: K.some(e => e.field_type === C.rX.TERMS && !(0, y.Ge)(e))
      }), [K]),
      e_ = r.useMemo(() => {
        if (null == H || eb) returntrue;
        if (ef || (null == ex ? true : ex.isStaff())) returnfalse;
        switch (null == Q ? true : Q.verificationLevel) {
          case F.PvD.VERY_HIGH:
            return !ej;
          case F.PvD.LOW:
          case F.PvD.MEDIUM:
          case F.PvD.HIGH:
            return !ev && !ej;
          case F.PvD.NONE:
          default:
            returnfalse
        }
      }, [H, eb, ef, ex, null == Q ? true : Q.verificationLevel, ej, ev]),
      eC = (0, i.bG)([u.A], () => u.A.useReducedMotion),
      ey = r.useRef(null),
      eO = function(e) {
        let t = null != e ? p.Ay.getGuildIconURL({
            id: null == e ? true : e.id,
            icon: null == e ? true : e.icon,
            size: 40
          }) : true,
          n = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
          l = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWEST).hex(),
          [r, i, s] = (0, d.rh)(t, n, false);
        return "linear-gradient(-45deg, ".concat(r, ", ").concat(null != s ? s : l, ")")
      }(Q),
      eN = (S = null != (n = null == q ? true : q.brandColorPrimary) ? n : "", R = (0, a.rdh)(a.LU0.colors.BORDER_SUBTLE).hex(), "linear-gradient(-45deg, ".concat(R, ", ").concat(S, ")"));
    if (null == Q) return (0, l.jsx)(a.y$y, {});
    let eI = async () => {
      Z(true), es(null), eo(null);
      try {
        await (0, c.gt)({
          email: et,
          password: el
        }), Z(false), eg(O.Qg.EMAIL_CONFIRMATION)
      } catch (n) {
        var e, t;
        es(null == n || null == (e = n.body) ? true : e.email), eo(null == n || null == (t = n.body) ? true : t.password)
      } finally {
        Z(false)
      }
    }, eA = async () => {
      var e, t, n, l;
      Z(true), ee(null);
      let r = null != ex ? v.Ay.getMember(G, ex.id) : null;
      if (null != r && !r.isPending) {
        null == L || L(true);
        return
      }
      try {
        await (null == H ? true : H((e = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              l = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), l.forEach(function(t) {
              var l;
              l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = l
            })
          }
          return e
        }({}, null != M ? M : _.U), t = {
          formFields: K
        }, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))), null == L || L(true)
      } catch (t) {
        let e = null == t ? true : t.body;
        (null == e || null == (n = e.errors) ? true : n.version) != null || (null == e || null == (l = e.errors) ? true : l.form_fields) != null ? ee(P.intl.string(P.t.PD09Sl)) : ee(null == e ? true : e.message)
      } finally {
        Z(false)
      }
    }, eF = null != q;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)("div", {
        className: E.uC,
        children: [(0, l.jsx)("div", {
          style: {
            background: eF ? eN : eO
          },
          className: E.nL
        }), eF ? (0, l.jsx)(f.Ay, {
          profile: q,
          className: E.P5,
          disableCTA: true,
          disableGuildNameClick: true
        }) : (0, l.jsx)(x.A, {
          className: E.P5,
          guild: Q,
          presenceCount: ed,
          memberCount: em
        })]
      }), (0, l.jsx)("div", {
        className: E.yl,
        children: (0, l.jsxs)("div", {
          className: E.Ok,
          ref: ey,
          children: [(0, l.jsx)(N.A, {
            className: E.jE,
            containerRef: ey,
            faderSize: 180,
            faderEdgeThreshold: 48,
            children: (0, l.jsx)(a.YC2, {
              className: E.C9,
              steps: [O.Qg.CLAIM_ACCOUNT, O.Qg.EMAIL_CONFIRMATION, O.Qg.VERIFICATION_FORM],
              step: eh,
              children: (() => {
                switch (eh) {
                  case O.Qg.CLAIM_ACCOUNT:
                    return (0, l.jsx)(T, {
                      headerId: D,
                      email: et,
                      password: el,
                      setEmail: en,
                      setPassword: er,
                      emailError: ei,
                      passwordError: ea,
                      hasManualFormFields: X,
                      isMember: V
                    });
                  case O.Qg.EMAIL_CONFIRMATION:
                    return (0, l.jsx)(w, {
                      headerId: D,
                      email: et
                    });
                  case O.Qg.VERIFICATION_FORM:
                    return (0, l.jsx)(k, {
                      headerId: D,
                      guildId: G,
                      guildName: Q.name,
                      formState: K,
                      updateFormState: W,
                      isPreview: U,
                      useReducedMotion: eC,
                      hasManualFormFields: X,
                      disableVerification: ef
                    })
                }
              })()
            })
          }), (() => {
            switch (eh) {
              case O.Qg.CLAIM_ACCOUNT:
                return (0, l.jsxs)("div", {
                  className: E.qr,
                  children: [(0, l.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": true,
                    className: E.RC,
                    children: (0, l.jsx)(a.Button, {
                      variant: "primary",
                      text: P.intl.string(P.t.PDTjLN),
                      type: "submit",
                      loading: J,
                      onClick: eI,
                      disabled: 0 === et.length || 0 === el.length
                    })
                  }), (0, l.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: P.intl.string(P.t["9GPiR6"])
                  })]
                });
              case O.Qg.EMAIL_CONFIRMATION:
                return null;
              case O.Qg.VERIFICATION_FORM:
                return (0, l.jsxs)("div", {
                  className: E.qr,
                  children: [(0, l.jsx)(s.m, {
                    asContainer: true,
                    shouldShow: e_ && eb && X,
                    text: ep ? P.intl.string(P.t.PLNbh3) : P.intl.string(P.t.brWmV2),
                    children: (0, l.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": true,
                      className: E.RC,
                      children: (0, l.jsx)(a.Button, {
                        variant: "active",
                        text: P.intl.string(P.t.geKm7t),
                        type: "submit",
                        loading: J,
                        onClick: eA,
                        disabled: e_
                      })
                    })
                  }), null != $ && (0, l.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: $
                  }), null == $ && X && (0, l.jsxs)("div", {
                    className: E.BU,
                    children: [(0, l.jsx)(a.Text, {
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: P.intl.string(P.t["+fPCTZ"])
                    }), (0, l.jsx)(a.Text, {
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: P.intl.string(P.t.VjgH0c)
                    })]
                  })]
                })
            }
          })()]
        })
      })]
    })
  }
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
      password: l,
      setEmail: i,
      setPassword: s,
      emailError: o,
      passwordError: c,
      hasManualFormFields: u,
      isMember: d
    } = e;
    return (0, r.jsxs)("div", {
      className: R.Qs,
      children: [(0, r.jsx)("div", {
        className: R.DS,
        children: (0, r.jsx)("img", {
          alt: A.intl.string(A.t.ewGfjv),
          src: F,
          className: R.In
        })
      }), (0, r.jsx)(a.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: R.wx,
        children: u && !d ? A.intl.string(A.t.qQYF6z) : A.intl.string(A.t.MhcDLz)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: A.intl.string(A.t["SPlaR/"])
      }), (0, r.jsx)("hr", {
        className: R.yF
      }), (0, r.jsx)("div", {
        className: R.kz,
        children: (0, r.jsx)(a.ksK, {
          label: A.intl.string(A.t.dI4d4S),
          value: n,
          error: o,
          onChange: i,
          autoFocus: true
        })
      }), (0, r.jsx)("div", {
        className: R.kz,
        children: (0, r.jsx)(a.ksK, {
          label: A.intl.string(A.t["CIGa+7"]),
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
      className: R.Qs,
      children: [(0, r.jsx)("img", {
        alt: A.intl.string(A.t.wNAblz),
        src: S,
        className: R.In
      }), (0, r.jsx)(a.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: R.wx,
        children: A.intl.format(A.t.v01XgL, {
          email: n
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: A.intl.string(A.t["/Hw5ad"])
      }), (0, r.jsx)("div", {
        className: R.rb,
        children: (0, r.jsx)(a.QWc, {
          onClick: () => o.A.verifyResend(),
          text: A.intl.string(A.t["MLk/mK"])
        })
      })]
    })
  },
  w = e => {
    var t;
    let {
      guildId: n,
      formState: l,
      updateFormState: s,
      isPreview: a = false,
      disableVerification: o = false
    } = e, c = (0, i.bG)([_.A], () => _.A.get(n));
    if (null == c) return null;
    let u = null != (t = null != l ? l : null == c ? true : c.formFields) ? t : [],
      d = a ? y.E : y.k;
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
      formState: l,
      updateFormState: i,
      guildName: s,
      hasManualFormFields: o,
      disableVerification: c,
      isPreview: u = false
    } = e;
    return (0, r.jsxs)("div", {
      className: R.Qs,
      children: [(0, r.jsx)(a.Heading, {
        id: n,
        variant: "heading-xxl/normal",
        className: R.wx,
        children: o ? A.intl.format(A.t.cgX47Z, {
          guildName: s
        }) : A.intl.string(A.t.DrEEC8)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: o ? A.intl.string(A.t["3smSPP"]) : A.intl.string(A.t["7D3C5p"])
      }), (0, r.jsx)(w, {
        guildId: t,
        formState: l,
        updateFormState: i,
        isPreview: u,
        disableVerification: c
      })]
    })
  },
  D = e => {
    var t, n, o, y, F;
    let S, {
        verificationForm: w,
        headerId: D,
        guildId: L,
        onClose: G,
        onComplete: H,
        isPreview: U = false
      } = e,
      B = (0, N.x$)(L, null == w ? true : w.guild, U),
      {
        guildProfile: V,
        fetchGuildProfile: Y
      } = (0, m.u)(L),
      z = (0, i.bG)([v.Ay, x.default], () => v.Ay.isMember(L, x.default.getId())),
      [Q, W] = l.useState(false);
    l.useEffect(() => {
      z && !Q && null == V && Y().finally(() => W(true))
    }, [Y, V, Q, z]);
    let q = null == w ? true : w.formFields.some(e => e.field_type !== E.rX.TERMS),
      [X, K] = l.useState(null != (t = null == w ? true : w.formFields) ? t : []),
      [$, J] = l.useState(false),
      [Z, ee] = l.useState(null),
      [et, en] = l.useState(""),
      [er, el] = l.useState(""),
      [ei, es] = l.useState(null),
      [ea, eo] = l.useState(null),
      {
        storeMemberCount: ec,
        storeOnlineCount: eu
      } = (0, i.cf)([g.A], () => ({
        storeMemberCount: g.A.getMemberCount(L),
        storeOnlineCount: g.A.getOnlineCount(L)
      })),
      ed = null != eu ? eu : null == w || null == (o = w.guild) ? true : o.approximate_presence_count,
      em = null != ec ? ec : null == w || null == (y = w.guild) ? true : y.approximate_member_count,
      ef = null != q && q;
    l.useEffect(() => {
      null != w && K(w.formFields)
    }, [w]), l.useEffect(() => {
      null != L && j.default.track(I.HAw.OPEN_MODAL, {
        type: P.mk,
        guild_id: L
      })
    }, [L]);
    let eh = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
      {
        currentStep: ex,
        setCurrentStep: eg
      } = (0, N.dy)(eh);
    (0, N.he)(X);
    let ev = null == eh ? true : eh.verified,
      ep = null == eh ? true : eh.isPhoneVerified(),
      {
        invalidFormFields: ej,
        hasInvalidTermsFormField: eb
      } = l.useMemo(() => ({
        invalidFormFields: X.some(e => !(0, C.Ge)(e)),
        hasInvalidTermsFormField: X.some(e => e.field_type === E.rX.TERMS && !(0, C.Ge)(e))
      }), [X]),
      e_ = l.useMemo(() => {
        if (null == H || ej) returntrue;
        if (ef || (null == eh ? true : eh.isStaff())) returnfalse;
        switch (null == B ? true : B.verificationLevel) {
          case I.PvD.VERY_HIGH:
            return !ep;
          case I.PvD.LOW:
          case I.PvD.MEDIUM:
          case I.PvD.HIGH:
            return !ev && !ep;
          case I.PvD.NONE:
          default:
            returnfalse
        }
      }, [H, ej, ef, eh, null == B ? true : B.verificationLevel, ep, ev]),
      eE = (0, i.bG)([u.A], () => u.A.useReducedMotion),
      eC = l.useRef(null),
      eN = function(e) {
        let t = null != e ? b.Ay.getGuildIconURL({
            id: null == e ? true : e.id,
            icon: null == e ? true : e.icon,
            size: 40
          }) : true,
          n = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
          r = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWEST).hex(),
          [l, i, s] = (0, d.rh)(t, n, false);
        return "linear-gradient(-45deg, ".concat(l, ", ").concat(null != s ? s : r, ")")
      }(B),
      eO = (F = null != (n = null == V ? true : V.brandColorPrimary) ? n : "", S = (0, a.rdh)(a.LU0.colors.BORDER_SUBTLE).hex(), "linear-gradient(-45deg, ".concat(S, ", ").concat(F, ")"));
    if (null == B) return (0, r.jsx)(a.y$y, {});
    let ey = async () => {
      J(true), es(null), eo(null);
      try {
        await (0, c.gt)({
          email: et,
          password: er
        }), J(false), eg(N.Qg.EMAIL_CONFIRMATION)
      } catch (n) {
        var e, t;
        es(null == n || null == (e = n.body) ? true : e.email), eo(null == n || null == (t = n.body) ? true : t.password)
      } finally {
        J(false)
      }
    }, eP = async () => {
      var e, t, n, r;
      J(true), ee(null);
      let l = null != eh ? v.Ay.getMember(L, eh.id) : null;
      if (null != l && !l.isPending) {
        null == G || G(true);
        return
      }
      try {
        await (null == H ? true : H((e = function(e) {
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
        }({}, null != w ? w : _.U), t = {
          formFields: X
        }, t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))), null == G || G(true)
      } catch (t) {
        let e = null == t ? true : t.body;
        (null == e || null == (n = e.errors) ? true : n.version) != null || (null == e || null == (r = e.errors) ? true : r.form_fields) != null ? ee(A.intl.string(A.t.PD09Sl)) : ee(null == e ? true : e.message)
      } finally {
        J(false)
      }
    }, eI = null != V;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: R.uC,
        children: [(0, r.jsx)("div", {
          style: {
            background: eI ? eO : eN
          },
          className: R.nL
        }), eI ? (0, r.jsx)(f.Ay, {
          profile: V,
          className: R.P5,
          disableCTA: true,
          disableGuildNameClick: true
        }) : (0, r.jsx)(h.A, {
          className: R.P5,
          guild: B,
          presenceCount: ed,
          memberCount: em
        })]
      }), (0, r.jsx)("div", {
        className: R.yl,
        children: (0, r.jsxs)("div", {
          className: R.Ok,
          ref: eC,
          children: [(0, r.jsx)(O.A, {
            className: R.jE,
            containerRef: eC,
            faderSize: 180,
            faderEdgeThreshold: 48,
            children: (0, r.jsx)(a.YC2, {
              className: R.C9,
              steps: [N.Qg.CLAIM_ACCOUNT, N.Qg.EMAIL_CONFIRMATION, N.Qg.VERIFICATION_FORM],
              step: ex,
              children: (() => {
                switch (ex) {
                  case N.Qg.CLAIM_ACCOUNT:
                    return (0, r.jsx)(T, {
                      headerId: D,
                      email: et,
                      password: er,
                      setEmail: en,
                      setPassword: el,
                      emailError: ei,
                      passwordError: ea,
                      hasManualFormFields: q,
                      isMember: z
                    });
                  case N.Qg.EMAIL_CONFIRMATION:
                    return (0, r.jsx)(M, {
                      headerId: D,
                      email: et
                    });
                  case N.Qg.VERIFICATION_FORM:
                    return (0, r.jsx)(k, {
                      headerId: D,
                      guildId: L,
                      guildName: B.name,
                      formState: X,
                      updateFormState: K,
                      isPreview: U,
                      useReducedMotion: eE,
                      hasManualFormFields: q,
                      disableVerification: ef
                    })
                }
              })()
            })
          }), (() => {
            switch (ex) {
              case N.Qg.CLAIM_ACCOUNT:
                return (0, r.jsxs)("div", {
                  className: R.qr,
                  children: [(0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": true,
                    className: R.RC,
                    children: (0, r.jsx)(a.Button, {
                      variant: "primary",
                      text: A.intl.string(A.t.PDTjLN),
                      type: "submit",
                      loading: $,
                      onClick: ey,
                      disabled: 0 === et.length || 0 === er.length
                    })
                  }), (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-default",
                    children: A.intl.string(A.t["9GPiR6"])
                  })]
                });
              case N.Qg.EMAIL_CONFIRMATION:
                return null;
              case N.Qg.VERIFICATION_FORM:
                return (0, r.jsxs)("div", {
                  className: R.qr,
                  children: [(0, r.jsx)(s.m, {
                    asContainer: true,
                    shouldShow: e_ && ej && q,
                    text: eb ? A.intl.string(A.t.PLNbh3) : A.intl.string(A.t.brWmV2),
                    children: (0, r.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": true,
                      className: R.RC,
                      children: (0, r.jsx)(a.Button, {
                        variant: "active",
                        text: A.intl.string(A.t.geKm7t),
                        type: "submit",
                        loading: $,
                        onClick: eP,
                        disabled: e_
                      })
                    })
                  }), null != Z && (0, r.jsx)(a.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: Z
                  }), null == Z && q && (0, r.jsxs)("div", {
                    className: R.BU,
                    children: [(0, r.jsx)(a.Text, {
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: A.intl.string(A.t["+fPCTZ"])
                    }), (0, r.jsx)(a.Text, {
                      color: "text-default",
                      variant: "text-xs/normal",
                      children: A.intl.string(A.t.VjgH0c)
                    })]
                  })]
                })
            }
          })()]
        })
      })]
    })
  }
/** Chunk was on 14021 **/
/** chunk id: 910673, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk782568 = require("./782568.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk880257 = require("./880257.js"),
  Chunk63063 = require("./63063.js"),
  Chunk247206 = require("./247206.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk618386 = require("./618386.js"),
  Chunk444812 = require("./444812.js");
let h = t => {
  let {
    channelId: e,
    messageId: h,
    transitionState: x,
    onClose: R
  } = t, L = (0, _.Z)(), b = (0, d.Jm)(), g = (0, I.m8)(), y = a.useMemo(() => b && g, [b, g]), M = a.useCallback(t => {
    (0, I.aP)({
      action: t,
      channelId: e,
      messageId: h
    })
  }, [e, h]), p = a.useCallback(() => {
    R(), M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, l.ZDy)(async () => {
      let {
        default: t
      } = await n(788679);
      return n => (0, r.jsx)(t, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), r.forEach(function(e) {
            var r;
            r = n[e], e in t ? Object.defineProperty(t, e, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = r
          })
        }
        return t
      }({
        channelId: e,
        messageId: h
      }, n))
    })
  }, [e, h, R, M]);
  a.useEffect(() => {
    (0, I.aP)({
      action: I.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId: e,
      messageId: h
    })
  }, [e, h]);
  let N = a.useCallback(() => y ? C.intl.format(C.t["TGqx+v"], {
    handleOnHelpUrlHook: () => {
      s.Z.openUrl(E.Z.getArticleURL(u.BhN.TIGGER_PAWTECT_LEARN_MORE)), M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE)
    }
  }) : g ? null : C.intl.format(C.t.Ge0HUl, {
    handleFalsePositiveHook: () => {
      p(), M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE)
    }
  }), [y, g, p, M]);
  return (0, r.jsxs)(l.Y0X, {
    transitionState: x,
    "aria-label": C.intl.string(C.t.xdm3XF),
    parentComponent: "ExplicitMediaLearnMoreModal",
    children: [(0, r.jsx)(l.xBx, {
      separator: false,
      className: m.modalHeader,
      children: (0, r.jsx)("img", {
        src: A,
        alt: C.intl.string(C.t.id3fND),
        className: m.headerImg
      })
    }), (0, r.jsxs)(l.hzk, {
      className: m.modalBody,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-lg/bold",
        className: m.modalInteriorHeader,
        children: C.intl.string(C.t.sGW77u)
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: function() {
          if (y) return C.intl.string(C.t.f3ARDQ);
          let t = C.intl.string(C.t.RUw0ZG),
            e = C.intl.string(C.t["E/oQYG"]);
          return L ? t : e
        }()
      }), (0, r.jsxs)("div", {
        className: m.buttonContainer,
        children: [y ? (0, r.jsx)(l.zxk, {
          variant: "primary",
          text: C.intl.string(C.t.KPGVWl),
          onClick: function() {
            R(), M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(c.cU.SENSITIVE_MEDIA_LEARN_MORE)
          },
          fullWidth: true
        }) : L ? (0, r.jsx)(l.zxk, {
          variant: "primary",
          text: C.intl.string(C.t["9D+zGR"]),
          onClick: function() {
            M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), i.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, {
              scrollPosition: f.FY.EXPLICIT_MEDIA_REDACTION_V2
            }), R()
          },
          fullWidth: true
        }) : (0, r.jsx)(l.zxk, {
          variant: "primary",
          text: C.intl.string(C.t.hvVgAQ),
          onClick: () => {
            (0, o.Z)(E.Z.getArticleURL(u.BhN.EXPLICIT_MEDIA_REDACTION))
          },
          fullWidth: true
        }), (0, r.jsx)(l.zxk, {
          variant: "secondary",
          text: C.intl.string(C.t.bmbHPD),
          onClick: function() {
            R(), M(I.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
          },
          fullWidth: true
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: N()
        })]
      })]
    })]
  })
}
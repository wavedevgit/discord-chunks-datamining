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
  Chunk326898 = require("./326898.js"),
  Chunk444812 = require("./444812.js");
let h = t => {
  let {
    channelId: e,
    messageId: h,
    transitionState: A,
    onClose: v
  } = t, R = (0, u.Z)(), L = (0, c.Jm)(), x = (0, _.m8)(), p = l.useMemo(() => L && x, [L, x]), b = l.useCallback(t => {
    (0, _.aP)({
      action: t,
      channelId: e,
      messageId: h
    })
  }, [e, h]), y = l.useCallback(() => {
    v(), b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE), (0, a.ZDy)(async () => {
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
  }, [e, h, v, b]);
  l.useEffect(() => {
    (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_LEARN_MORE_VIEWED,
      channelId: e,
      messageId: h
    })
  }, [e, h]);
  let T = l.useCallback(() => p ? m.intl.format(m.t["TGqx+v"], {
    handleOnHelpUrlHook: () => {
      s.Z.openUrl(E.Z.getArticleURL(I.BhN.TIGGER_PAWTECT_LEARN_MORE)), b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE)
    }
  }) : x ? null : m.intl.format(m.t.Ge0HUl, {
    handleFalsePositiveHook: () => {
      y(), b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE)
    }
  }), [p, x, y, b]);
  return (0, r.jsxs)(a.Y0X, {
    transitionState: A,
    "aria-label": m.intl.string(m.t.xdm3XF),
    parentComponent: "ExplicitMediaLearnMoreModal",
    children: [(0, r.jsx)(a.xBx, {
      separator: false,
      className: C.modalHeader,
      children: (0, r.jsx)("img", {
        src: g,
        alt: m.intl.string(m.t.id3fND),
        className: C.headerImg
      })
    }), (0, r.jsxs)(a.hzk, {
      className: C.modalBody,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-lg/bold",
        className: C.modalInteriorHeader,
        children: m.intl.string(m.t.sGW77u)
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: function() {
          if (p) return m.intl.string(m.t.f3ARDQ);
          let t = m.intl.string(m.t.RUw0ZG),
            e = m.intl.string(m.t["E/oQYG"]);
          return R ? t : e
        }()
      }), (0, r.jsxs)("div", {
        className: C.buttonContainer,
        children: [p ? (0, r.jsx)(a.zxk, {
          variant: "primary",
          text: m.intl.string(m.t.KPGVWl),
          onClick: function() {
            v(), b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY), s.Z.showAgeVerificationGetStartedModal(d.cU.SENSITIVE_MEDIA_LEARN_MORE)
          },
          fullWidth: true
        }) : R ? (0, r.jsx)(a.zxk, {
          variant: "primary",
          text: m.intl.string(m.t["9D+zGR"]),
          onClick: function() {
            b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS), i.Z.open(I.oAB.CONTENT_AND_SOCIAL, null, {
              scrollPosition: f.FY.EXPLICIT_MEDIA_REDACTION_V2
            }), v()
          },
          fullWidth: true
        }) : (0, r.jsx)(a.zxk, {
          variant: "primary",
          text: m.intl.string(m.t.hvVgAQ),
          onClick: () => {
            (0, o.Z)(E.Z.getArticleURL(I.BhN.EXPLICIT_MEDIA_REDACTION))
          },
          fullWidth: true
        }), (0, r.jsx)(a.zxk, {
          variant: "secondary",
          text: m.intl.string(m.t.bmbHPD),
          onClick: function() {
            v(), b(_.Yy.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS)
          },
          fullWidth: true
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: T()
        })]
      })]
    })]
  })
}
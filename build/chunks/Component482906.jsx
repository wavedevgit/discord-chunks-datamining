/** Chunk was on 98215 **/
/** chunk id: 482906, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk773669 = require("./773669.js"),
  Chunk486020 = require("./486020.js"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js"),
  Chunk598380 = require("./598380.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk113684 = require("./113684.js");
let N = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : b.default.locale;
  return "https://".concat(h.XlF, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
};

function A(e) {
  let {
    guild: t,
    toUser: b,
    fromUser: A,
    onClose: x,
    transitionState: I
  } = e, [R, g] = a.useState(false), v = t.features.has(h.GuildFeatures.VERIFIED) || t.features.has(h.GuildFeatures.PARTNERED), w = v ? j.intl.format(j.t.A37vwK, {
    ticketUrl: N()
  }) : null, S = t.features.has(h.GuildFeatures.CREATOR_MONETIZABLE) || t.features.has(h.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
  async function T(e) {
    await m.A.transferOwnership(t.id, b.id, y.F.EMAIL, e)
  }
  async function P() {
    await m.A.sendTransferOwnershipPincode(t.id, true)
  }
  async function F(e) {
    e.preventDefault(), x();
    try {
      A.mfaEnabled || null == A.email ? (await m.A.transferOwnership(t.id, b.id, A.mfaEnabled ? y.F.MFA : null), (0, o.jH)()) : (await m.A.sendTransferOwnershipPincode(t.id), (0, l.mMO)(async () => {
        let {
          default: e
        } = await n.e("19840").then(n.bind(n, 79779));
        return t => {
          var n, a;
          return (0, r.jsx)(e, (n = function(e) {
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
          }({}, t), a = {
            onFormSubmit: T,
            onResend: P,
            onSuccess: o.jH,
            headerText: j.intl.string(j.t.Z5s7PM),
            confirmButtonText: j.intl.string(j.t.Z5s7PM),
            confirmButtonVariant: "critical-primary",
            impression: {
              impressionName: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
            }
          }, a = null != a ? a : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
          }), n))
        }
      }))
    } catch (e) {
      e.body.code === h.t02.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, i.A)({
        title: j.intl.string(j.t["m+nQlm"]),
        subtitle: j.intl.format(j.t.wG747U, {
          server_subscription_owner_transfer_article: h.Oi0
        }),
        confirmText: j.intl.string(j.t["NX+WJN"])
      })
    }
  }(0, u.A)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
  });
  let C = _.Ay.getNickname(t.id, true, b),
    k = b.hasAvatarForGuild(t.id),
    L = () => (0, r.jsxs)("span", {
      className: E.v_,
      children: [null != t.icon ? (0, r.jsx)(l.euF, {
        src: p.Ay.getGuildIconURL({
          id: t.id,
          icon: t.icon,
          size: 16
        }),
        size: l._3J.SIZE_16,
        className: E.sD,
        "aria-hidden": true
      }) : null, (0, r.jsx)(l.Text, {
        className: E.J5,
        variant: "text-sm/bold",
        children: t.name
      })]
    });
  return (0, r.jsx)("form", {
    onSubmit: F,
    children: (0, r.jsxs)(c.aFV, {
      title: j.intl.string(j.t.Z5s7PM),
      actions: [{
        text: j.intl.string(j.t["ETE/oC"]),
        onClick: x,
        variant: "secondary"
      }, {
        text: j.intl.string(j.t.Z5s7PM),
        variant: "critical-primary",
        type: "submit",
        disabled: !R
      }],
      onClose: x,
      transitionState: I,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: E.uI,
        children: null != C || k ? j.intl.format(j.t.E90vgp, {
          GuildHook: L,
          user: (0, O.QV)(b),
          AKAHook: function() {
            return (0, r.jsxs)("span", {
              className: E.Dy,
              children: [(0, r.jsx)(l.LpS, {
                text: j.intl.string(j.t.l1QVfj),
                disableColor: true,
                className: E.RV
              }), k ? (0, r.jsx)(l.euF, {
                src: b.getAvatarURL(t.id, 16, true),
                size: l._3J.SIZE_16,
                className: E.H,
                "aria-hidden": true
              }) : null, (0, r.jsx)(l.Text, {
                className: E.$R,
                variant: "text-sm/normal",
                children: null != C ? C : O.Ay.getName(b)
              })]
            })
          }
        }) : j.intl.format(j.t["2XLnG0"], {
          GuildHook: L,
          user: (0, O.QV)(b)
        })
      }), (0, r.jsxs)(f.A, {
        className: E.nS,
        justify: f.A.Justify.CENTER,
        children: [(0, r.jsx)("div", {
          className: E.HT,
          children: (0, r.jsx)(d.A, {
            user: A,
            size: l._3J.SIZE_80
          })
        }), (0, r.jsx)("div", {
          className: E.to,
          children: (0, r.jsx)(d.A, {
            user: b,
            size: l._3J.SIZE_80
          })
        })]
      }), S && (0, r.jsx)(l.po8, {
        messageType: l.YCn.INFO,
        className: E.rk,
        children: j.intl.format(j.t.LAlucb, {
          server_subscription_owner_transfer_article: h.Oi0
        })
      }), (0, r.jsx)(l.Checkbox, {
        label: j.intl.format(j.t.xm6ACJ, {
          username: (0, O.QV)(b)
        }),
        disabled: v,
        checked: R,
        onChange: function(e) {
          g(e)
        }
      }), v && (0, r.jsx)(l.po8, {
        messageType: l.YCn.WARNING,
        children: w
      })]
    })
  })
}
/** Chunk was on 8653 **/
/** chunk id: 928090, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk706454 = require("./706454.js"),
  Chunk768581 = require("./768581.js"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk72766 = require("./72766.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk68976 = require("./68976.js");

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let O = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk706454.default.locale;
  return "https://".concat(Chunk981631.xr4, "/hc/").concat(module.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
};

function g(e) {
  let {
    guild: t,
    toUser: f,
    fromUser: g,
    onClose: y,
    transitionState: I
  } = e, [R, v] = i.useState(false), w = t.features.has(h.oNc.VERIFIED) || t.features.has(h.oNc.PARTNERED), S = w ? E.intl.string(E.t.wDkfrK) : null, P = w ? E.intl.format(E.t.A37vwM, {
    ticketUrl: O()
  }) : null, A = t.features.has(h.oNc.CREATOR_MONETIZABLE) || t.features.has(h.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
  async function k(e) {
    await m.Z.transferOwnership(t.id, f.id, b.X.EMAIL, e)
  }
  async function Z() {
    await m.Z.sendTransferOwnershipPincode(t.id, true)
  }
  async function D(e) {
    e.preventDefault(), y();
    try {
      g.mfaEnabled || null == g.email ? (await m.Z.transferOwnership(t.id, f.id, g.mfaEnabled ? b.X.MFA : null), (0, c.xf)()) : (await m.Z.sendTransferOwnershipPincode(t.id), (0, o.ZDy)(async () => {
        let {
          default: e
        } = await r.e("94566").then(r.bind(r, 965072));
        return t => (0, n.jsx)(e, T(N({}, t), {
          onFormSubmit: k,
          onResend: Z,
          onSuccess: c.xf,
          headerText: E.intl.string(E.t.Z5s7PD),
          confirmButtonText: E.intl.string(E.t.Z5s7PD),
          confirmButtonVariant: "critical-primary",
          impression: {
            impressionName: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
          }
        }))
      }))
    } catch (e) {
      e.body.code === h.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, o.h7j)(e => (0, n.jsx)(o.ConfirmModal, T(N({}, e), {
        header: E.intl.string(E.t["m+nQlp"]),
        confirmText: E.intl.string(E.t["NX+WJC"]),
        confirmButtonColor: a.zx.Colors.BRAND,
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: E.intl.format(E.t.wG747e, {
            server_subscription_owner_transfer_article: h.T23
          })
        })
      })))
    }
  }(0, d.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
  });
  let C = _.ZP.getNickname(t.id, true, f),
    L = f.hasAvatarForGuild(t.id),
    F = () => (0, n.jsxs)("span", {
      className: j.guildTransfer,
      children: [null != t.icon ? (0, n.jsx)(o.qEK, {
        src: p.ZP.getGuildIconURL({
          id: t.id,
          icon: t.icon,
          size: 16
        }),
        size: o.EFr.SIZE_16,
        className: j.miniGuildIcon,
        "aria-hidden": true
      }) : null, (0, n.jsx)(o.Text, {
        className: j.guildName,
        variant: "text-sm/bold",
        children: t.name
      })]
    });
  return (0, n.jsx)(o.Y0X, {
    transitionState: I,
    parentComponent: "TransferOwnership",
    children: (0, n.jsxs)("form", {
      onSubmit: D,
      children: [(0, n.jsx)(o.xBx, {
        separator: false,
        children: (0, n.jsx)(o.X6q, {
          variant: "heading-lg/semibold",
          className: j.header,
          children: E.intl.string(E.t.Z5s7PD)
        })
      }), (0, n.jsxs)(o.hzk, {
        children: [(0, n.jsx)(o.R94, {
          type: o.R94.Types.DESCRIPTION,
          className: j.subHeader,
          children: null != C || L ? E.intl.format(E.t.E90vgo, {
            GuildHook: F,
            user: (0, x.W5)(f),
            AKAHook: function() {
              return (0, n.jsxs)("span", {
                className: j.akaTransfer,
                children: [(0, n.jsx)(o.IGR, {
                  text: E.intl.string(E.t.l1QVfn),
                  disableColor: true,
                  className: j.akaBadge
                }), L ? (0, n.jsx)(o.qEK, {
                  src: f.getAvatarURL(t.id, 16, true),
                  size: o.EFr.SIZE_16,
                  className: j.miniAvatar,
                  "aria-hidden": true
                }) : null, (0, n.jsx)(o.Text, {
                  className: j.nickname,
                  variant: "text-sm/normal",
                  children: null != C ? C : x.ZP.getName(f)
                })]
              })
            }
          }) : E.intl.format(E.t["2XLnGx"], {
            GuildHook: F,
            user: (0, x.W5)(f)
          })
        }), (0, n.jsxs)(u.Z, {
          className: j.fromToWrapper,
          justify: u.Z.Justify.CENTER,
          children: [(0, n.jsx)("div", {
            className: j.from,
            children: (0, n.jsx)(l.Z, {
              user: g,
              size: o.EFr.SIZE_80
            })
          }), (0, n.jsx)("div", {
            className: j.to,
            children: (0, n.jsx)(l.Z, {
              user: f,
              size: o.EFr.SIZE_80
            })
          })]
        }), A && (0, n.jsx)(o.R94, {
          type: o.R94.Types.DESCRIPTION,
          className: j.roleSubscriptionText,
          children: E.intl.format(E.t.LAlucX, {
            server_subscription_owner_transfer_article: h.T23
          })
        }), (0, n.jsx)(o.j7V, {
          disabled: w,
          tooltipNote: S,
          hideBorder: true,
          value: R,
          onChange: function(e) {
            v(e)
          },
          children: (0, n.jsx)(o.R94, {
            type: o.R94.Types.DESCRIPTION,
            children: E.intl.format(E.t.xm6ACA, {
              username: (0, x.W5)(f)
            })
          })
        }), (0, n.jsx)(o.R94, {
          className: j.protectedText,
          type: o.R94.Types.DEFAULT,
          children: P
        })]
      }), (0, n.jsx)(o.mzw, {
        children: (0, n.jsxs)(o.hE2, {
          direction: "horizontal-reverse",
          children: [(0, n.jsx)(o.zxk, {
            variant: "critical-primary",
            text: E.intl.string(E.t.Z5s7PD),
            type: "submit",
            disabled: !R
          }), (0, n.jsx)(o.zxk, {
            variant: "secondary",
            text: E.intl.string(E.t["ETE/oK"]),
            onClick: y
          })]
        })
      })]
    })
  })
}
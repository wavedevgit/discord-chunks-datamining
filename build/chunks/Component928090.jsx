/** Chunk was on 8653 **/
/** chunk id: 928090, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk568073 = require("./568073.js");

function T(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(r) {
      var n;
      n = t[r], r in e ? Object.defineProperty(e, r, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = n
    })
  }
  return e
}

function b(e, r) {
  return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e
}
let O = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk706454.default.locale;
  return "https://".concat(Chunk981631.xr4, "/hc/").concat(module.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
};

function y(e) {
  let {
    guild: r,
    toUser: f,
    fromUser: y,
    onClose: g,
    transitionState: I
  } = e, [R, v] = i.useState(false), w = r.features.has(x.oNc.VERIFIED) || r.features.has(x.oNc.PARTNERED), S = w ? j.intl.string(j.t.wDkfrK) : null, P = w ? j.intl.format(j.t.A37vwM, {
    ticketUrl: O()
  }) : null, A = r.features.has(x.oNc.CREATOR_MONETIZABLE) || r.features.has(x.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
  async function k(e) {
    await m.Z.transferOwnership(r.id, f.id, E.X.EMAIL, e)
  }
  async function Z() {
    await m.Z.sendTransferOwnershipPincode(r.id, true)
  }
  async function D(e) {
    e.preventDefault(), g();
    try {
      y.mfaEnabled || null == y.email ? (await m.Z.transferOwnership(r.id, f.id, y.mfaEnabled ? E.X.MFA : null), (0, c.xf)()) : (await m.Z.sendTransferOwnershipPincode(r.id), (0, o.ZDy)(async () => {
        let {
          default: e
        } = await t.e("94566").then(t.bind(t, 965072));
        return r => (0, n.jsx)(e, b(T({}, r), {
          onFormSubmit: k,
          onResend: Z,
          onSuccess: c.xf,
          headerText: j.intl.string(j.t.Z5s7PD),
          confirmButtonText: j.intl.string(j.t.Z5s7PD),
          confirmButtonVariant: "critical-primary",
          impression: {
            impressionName: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
          }
        }))
      }))
    } catch (e) {
      e.body.code === x.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, o.h7j)(e => (0, n.jsx)(o.ConfirmModal, b(T({}, e), {
        header: j.intl.string(j.t["m+nQlp"]),
        confirmText: j.intl.string(j.t["NX+WJC"]),
        confirmButtonColor: s.zx.Colors.BRAND,
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: j.intl.format(j.t.wG747e, {
            server_subscription_owner_transfer_article: x.T23
          })
        })
      })))
    }
  }(0, d.Z)({
    type: a.ImpressionTypes.MODAL,
    name: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
  });
  let C = _.ZP.getNickname(r.id, true, f),
    L = f.hasAvatarForGuild(r.id),
    F = () => (0, n.jsxs)("span", {
      className: N.guildTransfer,
      children: [null != r.icon ? (0, n.jsx)(o.qEK, {
        src: p.ZP.getGuildIconURL({
          id: r.id,
          icon: r.icon,
          size: 16
        }),
        size: o.EFr.SIZE_16,
        className: N.miniGuildIcon,
        "aria-hidden": true
      }) : null, (0, n.jsx)(o.Text, {
        className: N.guildName,
        variant: "text-sm/bold",
        children: r.name
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
          className: N.header,
          children: j.intl.string(j.t.Z5s7PD)
        })
      }), (0, n.jsxs)(o.hzk, {
        children: [(0, n.jsx)(o.R94, {
          type: o.R94.Types.DESCRIPTION,
          className: N.subHeader,
          children: null != C || L ? j.intl.format(j.t.E90vgo, {
            GuildHook: F,
            user: (0, h.W5)(f),
            AKAHook: function() {
              return (0, n.jsxs)("span", {
                className: N.akaTransfer,
                children: [(0, n.jsx)(o.IGR, {
                  text: j.intl.string(j.t.l1QVfn),
                  disableColor: true,
                  className: N.akaBadge
                }), L ? (0, n.jsx)(o.qEK, {
                  src: f.getAvatarURL(r.id, 16, true),
                  size: o.EFr.SIZE_16,
                  className: N.miniAvatar,
                  "aria-hidden": true
                }) : null, (0, n.jsx)(o.Text, {
                  className: N.nickname,
                  variant: "text-sm/normal",
                  children: null != C ? C : h.ZP.getName(f)
                })]
              })
            }
          }) : j.intl.format(j.t["2XLnGx"], {
            GuildHook: F,
            user: (0, h.W5)(f)
          })
        }), (0, n.jsxs)(u.Z, {
          className: N.fromToWrapper,
          justify: u.Z.Justify.CENTER,
          children: [(0, n.jsx)("div", {
            className: N.from,
            children: (0, n.jsx)(l.Z, {
              user: y,
              size: o.EFr.SIZE_80
            })
          }), (0, n.jsx)("div", {
            className: N.to,
            children: (0, n.jsx)(l.Z, {
              user: f,
              size: o.EFr.SIZE_80
            })
          })]
        }), A && (0, n.jsx)(o.R94, {
          type: o.R94.Types.DESCRIPTION,
          className: N.roleSubscriptionText,
          children: j.intl.format(j.t.LAlucX, {
            server_subscription_owner_transfer_article: x.T23
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
            children: j.intl.format(j.t.xm6ACA, {
              username: (0, h.W5)(f)
            })
          })
        }), (0, n.jsx)(o.R94, {
          className: N.protectedText,
          type: o.R94.Types.DEFAULT,
          children: P
        })]
      }), (0, n.jsx)(o.mzw, {
        children: (0, n.jsxs)(o.hE2, {
          direction: "horizontal-reverse",
          children: [(0, n.jsx)(o.zxk, {
            variant: "critical-primary",
            text: j.intl.string(j.t.Z5s7PD),
            type: "submit",
            disabled: !R
          }), (0, n.jsx)(o.zxk, {
            variant: "secondary",
            text: j.intl.string(j.t["ETE/oK"]),
            onClick: g
          })]
        })
      })]
    })
  })
}
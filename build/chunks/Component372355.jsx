/** Chunk was on 95055 **/
/** chunk id: 372355, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => T
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
  Chunk179839 = require("./179839.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk518086 = require("./518086.js");

function g(e) {
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

function O(e, r) {
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
let N = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk706454.default.locale;
  return "https://".concat(Chunk981631.xr4, "/hc/").concat(module.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
};

function T(e) {
  let {
    guild: r,
    toUser: f,
    fromUser: T,
    onClose: y,
    transitionState: I
  } = e, [v, w] = i.useState(false), R = r.features.has(x.GuildFeatures.VERIFIED) || r.features.has(x.GuildFeatures.PARTNERED), A = R ? j.intl.format(j.t.A37vwK, {
    ticketUrl: N()
  }) : null, S = r.features.has(x.GuildFeatures.CREATOR_MONETIZABLE) || r.features.has(x.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
  async function k(e) {
    await m.Z.transferOwnership(r.id, f.id, b.X.EMAIL, e)
  }
  async function P() {
    await m.Z.sendTransferOwnershipPincode(r.id, true)
  }
  async function Z(e) {
    e.preventDefault(), y();
    try {
      T.mfaEnabled || null == T.email ? (await m.Z.transferOwnership(r.id, f.id, T.mfaEnabled ? b.X.MFA : null), (0, o.xf)()) : (await m.Z.sendTransferOwnershipPincode(r.id), (0, c.ZDy)(async () => {
        let {
          default: e
        } = await t.e("56499").then(t.bind(t, 433570));
        return r => (0, n.jsx)(e, O(g({}, r), {
          onFormSubmit: k,
          onResend: P,
          onSuccess: o.xf,
          headerText: j.intl.string(j.t.Z5s7PM),
          confirmButtonText: j.intl.string(j.t.Z5s7PM),
          confirmButtonVariant: "critical-primary",
          impression: {
            impressionName: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
          }
        }))
      }))
    } catch (e) {
      e.body.code === x.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, c.h7j)(e => (0, n.jsx)(c.ConfirmModal, O(g({}, e), {
        header: j.intl.string(j.t["m+nQlm"]),
        confirmText: j.intl.string(j.t["NX+WJN"]),
        confirmButtonColor: s.zx.Colors.BRAND,
        children: (0, n.jsx)(c.Text, {
          variant: "text-md/normal",
          children: j.intl.format(j.t.wG747U, {
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
    G = f.hasAvatarForGuild(r.id),
    F = () => (0, n.jsxs)("span", {
      className: E.guildTransfer,
      children: [null != r.icon ? (0, n.jsx)(c.qEK, {
        src: p.ZP.getGuildIconURL({
          id: r.id,
          icon: r.icon,
          size: 16
        }),
        size: c.EFr.SIZE_16,
        className: E.miniGuildIcon,
        "aria-hidden": true
      }) : null, (0, n.jsx)(c.Text, {
        className: E.guildName,
        variant: "text-sm/bold",
        children: r.name
      })]
    });
  return (0, n.jsx)(c.Y0X, {
    transitionState: I,
    parentComponent: "TransferOwnership",
    children: (0, n.jsxs)("form", {
      onSubmit: Z,
      children: [(0, n.jsx)(c.xBx, {
        separator: false,
        children: (0, n.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: E.header,
          children: j.intl.string(j.t.Z5s7PM)
        })
      }), (0, n.jsxs)(c.hzk, {
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: E.subHeader,
          children: null != C || G ? j.intl.format(j.t.E90vgp, {
            GuildHook: F,
            user: (0, h.W5)(f),
            AKAHook: function() {
              return (0, n.jsxs)("span", {
                className: E.akaTransfer,
                children: [(0, n.jsx)(c.IGR, {
                  text: j.intl.string(j.t.l1QVfj),
                  disableColor: true,
                  className: E.akaBadge
                }), G ? (0, n.jsx)(c.qEK, {
                  src: f.getAvatarURL(r.id, 16, true),
                  size: c.EFr.SIZE_16,
                  className: E.miniAvatar,
                  "aria-hidden": true
                }) : null, (0, n.jsx)(c.Text, {
                  className: E.nickname,
                  variant: "text-sm/normal",
                  children: null != C ? C : h.ZP.getName(f)
                })]
              })
            }
          }) : j.intl.format(j.t["2XLnG0"], {
            GuildHook: F,
            user: (0, h.W5)(f)
          })
        }), (0, n.jsxs)(u.Z, {
          className: E.fromToWrapper,
          justify: u.Z.Justify.CENTER,
          children: [(0, n.jsx)("div", {
            className: E.from,
            children: (0, n.jsx)(l.Z, {
              user: T,
              size: c.EFr.SIZE_80
            })
          }), (0, n.jsx)("div", {
            className: E.to,
            children: (0, n.jsx)(l.Z, {
              user: f,
              size: c.EFr.SIZE_80
            })
          })]
        }), S && (0, n.jsx)(c.Wn, {
          messageType: c.QYI.INFO,
          className: E.roleSubscriptionText,
          children: j.intl.format(j.t.LAlucb, {
            server_subscription_owner_transfer_article: x.T23
          })
        }), (0, n.jsx)(c.Checkbox, {
          label: j.intl.format(j.t.xm6ACJ, {
            username: (0, h.W5)(f)
          }),
          disabled: R,
          checked: v,
          onChange: function(e) {
            w(e)
          }
        }), R && (0, n.jsx)(c.Wn, {
          messageType: c.QYI.WARNING,
          children: A
        })]
      }), (0, n.jsx)(c.mzw, {
        children: (0, n.jsxs)(c.ButtonGroup, {
          direction: "horizontal-reverse",
          children: [(0, n.jsx)(c.Button, {
            variant: "critical-primary",
            text: j.intl.string(j.t.Z5s7PM),
            type: "submit",
            disabled: !v
          }), (0, n.jsx)(c.Button, {
            variant: "secondary",
            text: j.intl.string(j.t["ETE/oC"]),
            onClick: y
          })]
        })
      })]
    })
  })
}
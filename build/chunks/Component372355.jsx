/** Chunk was on 95055 **/
/** chunk id: 372355, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk885387 = require("./885387.jsx"),
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
  Chunk883287 = require("./883287.js");
let j = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk706454.default.locale;
  return "https://".concat(Chunk981631.xr4, "/hc/").concat(module.toLowerCase(), "/requests/new?ticket_form_id=360000168511")
};

function O(e) {
  let {
    guild: t,
    toUser: f,
    fromUser: O,
    onClose: N,
    transitionState: T
  } = e, [y, I] = i.useState(false), v = t.features.has(x.GuildFeatures.VERIFIED) || t.features.has(x.GuildFeatures.PARTNERED), w = v ? E.intl.format(E.t.A37vwK, {
    ticketUrl: j()
  }) : null, R = t.features.has(x.GuildFeatures.CREATOR_MONETIZABLE) || t.features.has(x.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
  async function S(e) {
    await m.Z.transferOwnership(t.id, f.id, b.X.EMAIL, e)
  }
  async function k() {
    await m.Z.sendTransferOwnershipPincode(t.id, true)
  }
  async function A(e) {
    e.preventDefault(), N();
    try {
      O.mfaEnabled || null == O.email ? (await m.Z.transferOwnership(t.id, f.id, O.mfaEnabled ? b.X.MFA : null), (0, o.xf)()) : (await m.Z.sendTransferOwnershipPincode(t.id), (0, c.ZDy)(async () => {
        let {
          default: e
        } = await r.e("56499").then(r.bind(r, 433570));
        return t => {
          var r, i;
          return (0, n.jsx)(e, (r = function(e) {
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
          }({}, t), i = {
            onFormSubmit: S,
            onResend: k,
            onSuccess: o.xf,
            headerText: E.intl.string(E.t.Z5s7PM),
            confirmButtonText: E.intl.string(E.t.Z5s7PM),
            confirmButtonVariant: "critical-primary",
            impression: {
              impressionName: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
            }
          }, i = null != i ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
          }), r))
        }
      }))
    } catch (e) {
      e.body.code === x.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, s.Z)({
        title: E.intl.string(E.t["m+nQlm"]),
        subtitle: E.intl.format(E.t.wG747U, {
          server_subscription_owner_transfer_article: x.T23
        }),
        confirmText: E.intl.string(E.t["NX+WJN"])
      })
    }
  }(0, u.Z)({
    type: a.ImpressionTypes.MODAL,
    name: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
  });
  let P = _.ZP.getNickname(t.id, true, f),
    Z = f.hasAvatarForGuild(t.id),
    G = () => (0, n.jsxs)("span", {
      className: g.guildTransfer,
      children: [null != t.icon ? (0, n.jsx)(c.qEK, {
        src: p.ZP.getGuildIconURL({
          id: t.id,
          icon: t.icon,
          size: 16
        }),
        size: c.EFr.SIZE_16,
        className: g.miniGuildIcon,
        "aria-hidden": true
      }) : null, (0, n.jsx)(c.Text, {
        className: g.guildName,
        variant: "text-sm/bold",
        children: t.name
      })]
    });
  return (0, n.jsx)(c.Y0X, {
    transitionState: T,
    parentComponent: "TransferOwnership",
    children: (0, n.jsxs)("form", {
      onSubmit: A,
      children: [(0, n.jsx)(c.xBx, {
        separator: false,
        children: (0, n.jsx)(c.Heading, {
          variant: "heading-lg/semibold",
          className: g.header,
          children: E.intl.string(E.t.Z5s7PM)
        })
      }), (0, n.jsxs)(c.hzk, {
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          className: g.subHeader,
          children: null != P || Z ? E.intl.format(E.t.E90vgp, {
            GuildHook: G,
            user: (0, h.W5)(f),
            AKAHook: function() {
              return (0, n.jsxs)("span", {
                className: g.akaTransfer,
                children: [(0, n.jsx)(c.IGR, {
                  text: E.intl.string(E.t.l1QVfj),
                  disableColor: true,
                  className: g.akaBadge
                }), Z ? (0, n.jsx)(c.qEK, {
                  src: f.getAvatarURL(t.id, 16, true),
                  size: c.EFr.SIZE_16,
                  className: g.miniAvatar,
                  "aria-hidden": true
                }) : null, (0, n.jsx)(c.Text, {
                  className: g.nickname,
                  variant: "text-sm/normal",
                  children: null != P ? P : h.ZP.getName(f)
                })]
              })
            }
          }) : E.intl.format(E.t["2XLnG0"], {
            GuildHook: G,
            user: (0, h.W5)(f)
          })
        }), (0, n.jsxs)(d.Z, {
          className: g.fromToWrapper,
          justify: d.Z.Justify.CENTER,
          children: [(0, n.jsx)("div", {
            className: g.from,
            children: (0, n.jsx)(l.Z, {
              user: O,
              size: c.EFr.SIZE_80
            })
          }), (0, n.jsx)("div", {
            className: g.to,
            children: (0, n.jsx)(l.Z, {
              user: f,
              size: c.EFr.SIZE_80
            })
          })]
        }), R && (0, n.jsx)(c.Wn, {
          messageType: c.QYI.INFO,
          className: g.roleSubscriptionText,
          children: E.intl.format(E.t.LAlucb, {
            server_subscription_owner_transfer_article: x.T23
          })
        }), (0, n.jsx)(c.Checkbox, {
          label: E.intl.format(E.t.xm6ACJ, {
            username: (0, h.W5)(f)
          }),
          disabled: v,
          checked: y,
          onChange: function(e) {
            I(e)
          }
        }), v && (0, n.jsx)(c.Wn, {
          messageType: c.QYI.WARNING,
          children: w
        })]
      }), (0, n.jsx)(c.mzw, {
        children: (0, n.jsxs)(c.ButtonGroup, {
          direction: "horizontal-reverse",
          children: [(0, n.jsx)(c.Button, {
            variant: "critical-primary",
            text: E.intl.string(E.t.Z5s7PM),
            type: "submit",
            disabled: !y
          }), (0, n.jsx)(c.Button, {
            variant: "secondary",
            text: E.intl.string(E.t["ETE/oC"]),
            onClick: N
          })]
        })
      })]
    })
  })
}
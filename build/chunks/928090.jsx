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
        return t => <e{...T(N({}, t), {
          onFormSubmit: k,
          onResend: Z,
          onSuccess: c.xf,
          headerText: E.intl.string(E.t.Z5s7PD),
          confirmButtonText: E.intl.string(E.t.Z5s7PD),
          confirmButtonVariant: "critical-primary",
          impression: {
            impressionName: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
          }
        })} />
      }))
    } catch (e) {
      e.body.code === h.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION && (0, o.h7j)(e => <o.ConfirmModal{...T(N({}, e), {
        header: E.intl.string(E.t["m+nQlp"]),
        confirmText: E.intl.string(E.t["NX+WJC"]),
        confirmButtonColor: a.zx.Colors.BRAND,
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: E.intl.format(E.t.wG747e, {
            server_subscription_owner_transfer_article: h.T23
          })
        })
      })} />)
    }
  }(0, d.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
  });
  let C = _.ZP.getNickname(t.id, true, f),
    L = f.hasAvatarForGuild(t.id),
    F = () => <span className={j.guildTransfer}>{null != t.icon ? <o.qEK src={p.ZP.getGuildIconURL({
          id: t.id,
          icon: t.icon,
          size: 16
        })} size={o.EFr.SIZE_16} className={j.miniGuildIcon} aria-hidden={true} /> : null}{<o.Text className={j.guildName} variant={"text-sm/bold"}>{t.name}</o.Text>}</span>;
  return <o.Y0X transitionState={I} parentComponent={"TransferOwnership"}><form onSubmit={D}>{<o.xBx separator={false}><o.X6q variant={"heading-lg/semibold"} className={j.header}>{E.intl.string(E.t.Z5s7PD)}</o.X6q></o.xBx>}{<o.hzk>{<o.R94 type={o.R94.Types.DESCRIPTION} className={j.subHeader}>{null != C || L ? E.intl.format(E.t.E90vgo, {
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
          })}</o.R94>}{<u.Z className={j.fromToWrapper} justify={u.Z.Justify.CENTER}>{<div className={j.from}><l.Z user={g} size={o.EFr.SIZE_80} /></div>}{<div className={j.to}><l.Z user={f} size={o.EFr.SIZE_80} /></div>}</u.Z>}{A && <o.R94 type={o.R94.Types.DESCRIPTION} className={j.roleSubscriptionText}>{E.intl.format(E.t.LAlucX, {
            server_subscription_owner_transfer_article: h.T23
          })}</o.R94>}{<o.j7V disabled={w} tooltipNote={S} hideBorder={true} value={R} onChange={function(e) {
            v(e)
          }}><o.R94 type={o.R94.Types.DESCRIPTION}>{E.intl.format(E.t.xm6ACA, {
              username: (0, x.W5)(f)
            })}</o.R94></o.j7V>}{<o.R94 className={j.protectedText} type={o.R94.Types.DEFAULT}>{P}</o.R94>}</o.hzk>}{<o.mzw><o.hE2 direction={"horizontal-reverse"}>{<o.zxk variant={"critical-primary"} text={E.intl.string(E.t.Z5s7PD)} type={"submit"} disabled={!R} />}{<o.zxk variant={"secondary"} text={E.intl.string(E.t["ETE/oK"])} onClick={y} />}</o.hE2></o.mzw>}</form></o.Y0X>
}
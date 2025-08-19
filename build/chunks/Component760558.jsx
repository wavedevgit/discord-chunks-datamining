/** Chunk was on 30419 **/
/** chunk id: 760558, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk179360 = require("./179360.js"),
  Chunk899667 = require("./899667.js"),
  Chunk430824 = require("./430824.js"),
  Chunk314884 = require("./314884.js"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk395199 = require("./395199.jsx"),
  Chunk719228 = require("./719228.jsx"),
  Chunk4434 = require("./4434.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk252633 = require("./252633.js");
let y = e => {
  let {
    guildBoostSlots: t,
    selectedGuild: l,
    locationSection: i,
    transitionState: y,
    onClose: b
  } = e, E = (0, h.vx)(x.Z.boostSlots);
  s()(null != t || null != l, "Must either provide slots or an initial selected guild"), s()(!(null == t ? true : t.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let O = [null == t ? "UNUSED_QUANTITY_SELECT" : null, null == l ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [N, P] = (0, a.Wu)([u.Z], () => [u.Z.isModifyingAppliedBoost, u.Z.applyBoostError]),
    [T, w] = r.useState(O[0]),
    [Z, G] = r.useState(false),
    [I, L] = r.useState(l),
    [D, M] = r.useState(null != t ? t : E.slice(0, 1)),
    U = r.useMemo(() => null == D ? [] : D.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return m.Z.getGuild(null == t ? true : t.guildId)
    }).filter(e => null != e), [D]),
    k = r.useMemo(() => {
      var e;
      return (null == D || null == (e = D[0]) ? true : e.premiumGuildSubscription) != null
    }, [D]),
    F = () => (b("SUCCESS" === T), g.default.track(p.rMx.MODAL_DISMISSED, {
      type: p.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: i
    }), Promise.resolve());
  r.useEffect(() => {
    g.default.track(p.rMx.OPEN_MODAL, {
      type: p.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: i
    })
  }, [i]);
  let R = {
    UNUSED_QUANTITY_SELECT: () => (s()(null != t || 0 !== E.length, "Cannot provide no slots if there are no other available slots"), (0, n.jsx)(o.Modal, {
      transitionState: y,
      onClose: F,
      size: "md",
      title: v.intl.string(v.t["9FFrra"]),
      actions: [{
        variant: "secondary",
        text: v.intl.string(v.t["1BPTsL"]),
        onClick: F
      }, {
        variant: "primary",
        text: v.intl.string(v.t["/uwYdX"]),
        onClick: () => w("CONFIRM")
      }],
      children: (0, n.jsxs)("div", {
        className: S.quantitySelectorBody,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-md/normal",
          className: S.quantitySelectorDescription,
          children: v.intl.string(v.t.x5qw5e)
        }), (0, n.jsxs)("div", {
          className: S.quantitySelectorWrapper,
          children: [(0, n.jsx)(c.FiK, {
            value: D.length,
            onChange: e => M(E.slice(0, e)),
            minValue: 1,
            maxValue: E.length
          }), (0, n.jsx)(c.Text, {
            className: S.quantitySelectorLabel,
            variant: "text-md/normal",
            children: v.intl.string(v.t.Vl8TCw)
          })]
        })]
      })
    })),
    GUILD_SELECT: () => (0, n.jsx)(C.default, {
      onClose: F,
      onSelectGuild: e => {
        L(e), w("CONFIRM")
      },
      transitionState: y,
      isTransfer: k,
      selectedSlotGuilds: U
    }),
    CONFIRM() {
      if (null == I) return null;
      let e = D.filter(e => (0, h.tl)(e)).length,
        t = D.length,
        l = U.length,
        r = "CONFIRM" === O[0] ? F : () => w(O[O.indexOf(T) - 1]),
        i = async () => {
          if (null != I && (null == D ? true : D.length) !== 0) {
            s()(!D.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
            try {
              await Promise.all(D.map(e => {
                let {
                  premiumGuildSubscription: t
                } = e;
                return null != t ? (0, d.dG)(t.guildId, t.id) : Promise.resolve()
              })), await (0, d.W3)(I.id, D.map(e => {
                let {
                  id: t
                } = e;
                return t
              })), w("SUCCESS")
            } catch (e) {
              G(true)
            }
          }
        }, a = k ? v.intl.string(v.t["PR0n//"]) : v.intl.string(v.t["7KP/fH"]);
      return (0, n.jsx)(o.Modal, {
        transitionState: y,
        onClose: F,
        size: "md",
        title: a,
        actions: [{
          variant: "secondary",
          text: v.intl.string(v.t["ETE/oK"]),
          onClick: r
        }, {
          variant: "primary",
          text: k ? v.intl.formatToPlainString(v.t.Oh6mxc, {
            slotCount: t
          }) : v.intl.formatToPlainString(v.t["ZU5x5+"], {
            slotCount: t
          }),
          onClick: i,
          loading: N,
          disabled: N
        }],
        children: k ? (0, n.jsx)(f.Z.TransferBody, {
          fromGuilds: U,
          toGuild: I,
          blurb: v.intl.formatToPlainString(v.t.SSA2lp, {
            slotCount: t,
            guildCount: l
          }),
          imageClass: S.transferConfirmImage,
          error: Z ? P : null,
          onDismissError: () => G(false),
          slotCount: t,
          canceledCount: e
        }) : (0, n.jsx)(f.Z.ApplyBody, {
          guild: I,
          blurb: v.intl.string(v.t.yTlZV1),
          warning: v.intl.formatToPlainString(v.t.KPnDlp, {
            days: p.o3l,
            slotCount: t
          }),
          imageClass: S.confirmImage,
          error: Z ? P : null,
          onDismissError: () => G(false),
          slotCount: t,
          canceledCount: e
        })
      })
    },
    SUCCESS() {
      let e = k ? v.intl.string(v.t["PR0n//"]) : v.intl.string(v.t["7KP/fH"]);
      return (0, n.jsx)(o.Modal, {
        transitionState: y,
        onClose: F,
        size: "md",
        title: e,
        actions: [],
        children: (0, n.jsx)(j.R7, {
          guild: I,
          isTransfer: k,
          guildBoostQuantity: D.length,
          onClose: F,
          didPurchaseOnFractionalPremium: false
        })
      })
    }
  } [T];
  return null == R ? null : R()
}
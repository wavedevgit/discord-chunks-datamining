/** Chunk was on web.js **/
/** chunk id: 760558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk179360 = require("./179360.js"),
  Chunk899667 = require("./899667.js"),
  Chunk430824 = require("./430824.js"),
  Chunk314884 = require("./314884.js"),
  Chunk626135 = require("./626135.js"),
  Chunk267642 = require("./267642.js"),
  Chunk395199 = require("./395199.jsx"),
  Chunk719228 = require("./719228.jsx"),
  Chunk343649 = require("./343649.jsx"),
  Chunk4434 = require("./4434.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk396849 = require("./396849.js");
let I = e => {
  let {
    guildBoostSlots: t,
    selectedGuild: n,
    locationSection: a,
    intent: I,
    transitionState: T,
    onClose: S
  } = e, A = (0, h.vx)(_.Z.boostSlots);
  o()(null != t || null != n, "Must either provide slots or an initial selected guild"), o()(!(null == t ? true : t.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let C = [null == t ? "UNUSED_QUANTITY_SELECT" : null, null == n ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [N, R] = (0, l.Wu)([d.Z], () => [d.Z.isModifyingAppliedBoost, d.Z.applyBoostError]),
    [P, D] = i.useState(C[0]),
    [w, L] = i.useState(false),
    [x, M] = i.useState(n),
    [k, j] = i.useState(null != t ? t : A.slice(0, 1)),
    U = i.useMemo(() => null == k ? [] : k.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return f.Z.getGuild(null == t ? true : t.guildId)
    }).filter(e => null != e), [k]),
    G = i.useMemo(() => {
      var e;
      return (null == k || null == (e = k[0]) ? true : e.premiumGuildSubscription) != null
    }, [k]),
    B = () => (S("SUCCESS" === P), p.default.track(y.rMx.MODAL_DISMISSED, {
      type: y.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: a
    }), Promise.resolve()),
    Z = {
      UNUSED_QUANTITY_SELECT: () => (o()(null != t || 0 !== A.length, "Cannot provide no slots if there are no other available slots"), (0, r.jsx)(s.Modal, {
        transitionState: T,
        onClose: B,
        size: "md",
        title: O.intl.string(O.t["9FFrrT"]),
        actions: [{
          variant: "secondary",
          text: O.intl.string(O.t["1BPTsK"]),
          onClick: B
        }, {
          variant: "primary",
          text: O.intl.string(O.t["/uwYda"]),
          onClick: () => D("CONFIRM")
        }],
        children: (0, r.jsxs)("div", {
          className: v.quantitySelectorBody,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            className: v.quantitySelectorDescription,
            children: O.intl.string(O.t.x5qw5U)
          }), (0, r.jsxs)("div", {
            className: v.quantitySelectorWrapper,
            children: [(0, r.jsx)(c.FiK, {
              value: k.length,
              onChange: e => j(A.slice(0, e)),
              minValue: 1,
              maxValue: A.length
            }), (0, r.jsx)(c.Text, {
              className: v.quantitySelectorLabel,
              variant: "text-md/normal",
              children: O.intl.string(O.t["Vl8TC+"])
            })]
          })]
        })
      })),
      GUILD_SELECT: () => (0, r.jsx)(g.default, {
        onClose: B,
        onSelectGuild: e => {
          M(e), D("CONFIRM")
        },
        transitionState: T,
        isTransfer: G,
        selectedSlotGuilds: U
      }),
      CONFIRM() {
        if (null == x) return null;
        let e = k.filter(e => (0, h.tl)(e)).length,
          t = k.length,
          n = U.length,
          i = "CONFIRM" === C[0] ? B : () => D(C[C.indexOf(P) - 1]),
          a = async () => {
            if (L(false), null != x && (null == k ? true : k.length) !== 0) {
              o()(!k.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
              try {
                await Promise.all(k.map(e => {
                  let {
                    premiumGuildSubscription: t
                  } = e;
                  return null != t ? (0, u.dG)(t.guildId, t.id) : Promise.resolve()
                })), await (0, u.W3)(x.id, k.map(e => {
                  let {
                    id: t
                  } = e;
                  return t
                }), I === E.P.PERK), D("SUCCESS")
              } catch (e) {
                L(true)
              }
            }
          }, l = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
        return (0, r.jsx)(s.Modal, {
          transitionState: T,
          onClose: B,
          size: "md",
          title: l,
          actions: [{
            variant: "secondary",
            text: O.intl.string(O.t["ETE/oC"]),
            onClick: i
          }, {
            variant: "primary",
            text: G ? O.intl.formatToPlainString(O.t.Oh6mxU, {
              slotCount: t
            }) : O.intl.formatToPlainString(O.t.ZU5x5w, {
              slotCount: t
            }),
            onClick: a,
            loading: N,
            disabled: N
          }],
          children: G ? (0, r.jsx)(m.Z.TransferBody, {
            fromGuilds: U,
            toGuild: x,
            blurb: O.intl.formatToPlainString(O.t.SSA2lu, {
              slotCount: t,
              guildCount: n
            }),
            imageClass: v.transferConfirmImage,
            error: w ? R : null,
            slotCount: t,
            canceledCount: e
          }) : (0, r.jsx)(m.Z.ApplyBody, {
            guild: x,
            blurb: O.intl.string(O.t.yTlZV0),
            warning: O.intl.formatToPlainString(O.t.KPnDlu, {
              days: y.o3l,
              slotCount: t
            }),
            imageClass: v.confirmImage,
            error: w ? R : null,
            slotCount: t,
            canceledCount: e
          })
        })
      },
      SUCCESS() {
        let e = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
        return (0, r.jsx)(s.Modal, {
          transitionState: T,
          onClose: B,
          size: "md",
          title: e,
          actions: [],
          children: (0, r.jsx)(b.R7, {
            guild: x,
            isTransfer: G,
            guildBoostQuantity: k.length,
            onClose: B,
            didPurchaseOnFractionalPremium: false
          })
        })
      }
    };
  i.useEffect(() => {
    p.default.track(y.rMx.OPEN_MODAL, {
      type: y.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: a
    })
  }, [a]);
  let F = Z[P];
  return null == F ? null : F()
}
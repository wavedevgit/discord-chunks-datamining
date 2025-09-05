/** Chunk was on web.js **/
/** chunk id: 760558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk396849 = require("./396849.js");
let v = e => {
  let {
    guildBoostSlots: t,
    selectedGuild: n,
    locationSection: a,
    transitionState: v,
    onClose: I
  } = e, T = (0, h.vx)(_.Z.boostSlots);
  o()(null != t || null != n, "Must either provide slots or an initial selected guild"), o()(!(null == t ? true : t.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let S = [null == t ? "UNUSED_QUANTITY_SELECT" : null, null == n ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [A, C] = (0, s.Wu)([d.Z], () => [d.Z.isModifyingAppliedBoost, d.Z.applyBoostError]),
    [N, R] = i.useState(S[0]),
    [P, w] = i.useState(false),
    [D, x] = i.useState(n),
    [L, j] = i.useState(null != t ? t : T.slice(0, 1)),
    k = i.useMemo(() => null == L ? [] : L.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return f.Z.getGuild(null == t ? true : t.guildId)
    }).filter(e => null != e), [L]),
    M = i.useMemo(() => {
      var e;
      return (null == L || null == (e = L[0]) ? true : e.premiumGuildSubscription) != null
    }, [L]),
    U = () => (I("SUCCESS" === N), p.default.track(b.rMx.MODAL_DISMISSED, {
      type: b.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: a
    }), Promise.resolve()),
    G = {
      UNUSED_QUANTITY_SELECT: () => (o()(null != t || 0 !== T.length, "Cannot provide no slots if there are no other available slots"), (0, r.jsx)(l.Modal, {
        transitionState: v,
        onClose: U,
        size: "md",
        title: y.intl.string(y.t["9FFrra"]),
        actions: [{
          variant: "secondary",
          text: y.intl.string(y.t["1BPTsL"]),
          onClick: U
        }, {
          variant: "primary",
          text: y.intl.string(y.t["/uwYdX"]),
          onClick: () => R("CONFIRM")
        }],
        children: (0, r.jsxs)("div", {
          className: O.quantitySelectorBody,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            className: O.quantitySelectorDescription,
            children: y.intl.string(y.t.x5qw5e)
          }), (0, r.jsxs)("div", {
            className: O.quantitySelectorWrapper,
            children: [(0, r.jsx)(c.FiK, {
              value: L.length,
              onChange: e => j(T.slice(0, e)),
              minValue: 1,
              maxValue: T.length
            }), (0, r.jsx)(c.Text, {
              className: O.quantitySelectorLabel,
              variant: "text-md/normal",
              children: y.intl.string(y.t.Vl8TCw)
            })]
          })]
        })
      })),
      GUILD_SELECT: () => (0, r.jsx)(g.default, {
        onClose: U,
        onSelectGuild: e => {
          x(e), R("CONFIRM")
        },
        transitionState: v,
        isTransfer: M,
        selectedSlotGuilds: k
      }),
      CONFIRM() {
        if (null == D) return null;
        let e = L.filter(e => (0, h.tl)(e)).length,
          t = L.length,
          n = k.length,
          i = "CONFIRM" === S[0] ? U : () => R(S[S.indexOf(N) - 1]),
          a = async () => {
            if (null != D && (null == L ? true : L.length) !== 0) {
              o()(!L.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
              try {
                await Promise.all(L.map(e => {
                  let {
                    premiumGuildSubscription: t
                  } = e;
                  return null != t ? (0, u.dG)(t.guildId, t.id) : Promise.resolve()
                })), await (0, u.W3)(D.id, L.map(e => {
                  let {
                    id: t
                  } = e;
                  return t
                })), R("SUCCESS")
              } catch (e) {
                w(true)
              }
            }
          }, s = M ? y.intl.string(y.t["PR0n//"]) : y.intl.string(y.t["7KP/fH"]);
        return (0, r.jsx)(l.Modal, {
          transitionState: v,
          onClose: U,
          size: "md",
          title: s,
          actions: [{
            variant: "secondary",
            text: y.intl.string(y.t["ETE/oK"]),
            onClick: i
          }, {
            variant: "primary",
            text: M ? y.intl.formatToPlainString(y.t.Oh6mxc, {
              slotCount: t
            }) : y.intl.formatToPlainString(y.t["ZU5x5+"], {
              slotCount: t
            }),
            onClick: a,
            loading: A,
            disabled: A
          }],
          children: M ? (0, r.jsx)(m.Z.TransferBody, {
            fromGuilds: k,
            toGuild: D,
            blurb: y.intl.formatToPlainString(y.t.SSA2lp, {
              slotCount: t,
              guildCount: n
            }),
            imageClass: O.transferConfirmImage,
            error: P ? C : null,
            onDismissError: () => w(false),
            slotCount: t,
            canceledCount: e
          }) : (0, r.jsx)(m.Z.ApplyBody, {
            guild: D,
            blurb: y.intl.string(y.t.yTlZV1),
            warning: y.intl.formatToPlainString(y.t.KPnDlp, {
              days: b.o3l,
              slotCount: t
            }),
            imageClass: O.confirmImage,
            error: P ? C : null,
            onDismissError: () => w(false),
            slotCount: t,
            canceledCount: e
          })
        })
      },
      SUCCESS() {
        let e = M ? y.intl.string(y.t["PR0n//"]) : y.intl.string(y.t["7KP/fH"]);
        return (0, r.jsx)(l.Modal, {
          transitionState: v,
          onClose: U,
          size: "md",
          title: e,
          actions: [],
          children: (0, r.jsx)(E.R7, {
            guild: D,
            isTransfer: M,
            guildBoostQuantity: L.length,
            onClose: U,
            didPurchaseOnFractionalPremium: false
          })
        })
      }
    };
  i.useEffect(() => {
    p.default.track(b.rMx.OPEN_MODAL, {
      type: b.jXE.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: a
    })
  }, [a]);
  let B = G[N];
  return null == B ? null : B()
}
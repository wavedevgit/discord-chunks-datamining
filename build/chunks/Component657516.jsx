/** Chunk was on web.js **/
/** chunk id: 657516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk923408 = require("./923408.js"),
  Chunk859241 = require("./859241.js"),
  Chunk71393 = require("./71393.js"),
  Chunk178368 = require("./178368.js"),
  Chunk954571 = require("./954571.js"),
  Chunk473145 = require("./473145.js"),
  Chunk976200 = require("./976200.jsx"),
  Chunk770101 = require("./770101.jsx"),
  Chunk879100 = require("./879100.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk568065 = require("./568065.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk449838 = require("./449838.js");
let A = e => {
  let {
    guildBoostSlots: t,
    selectedGuild: n,
    locationSection: a,
    intent: A,
    transitionState: I,
    onClose: S
  } = e, T = (0, h.D$)(p.A.boostSlots);
  s()(null != t || null != n, "Must either provide slots or an initial selected guild"), s()(!(null == t ? true : t.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
  let C = [null == t ? "UNUSED_QUANTITY_SELECT" : null, null == n ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
    [N, R] = (0, l.yK)([d.A], () => [d.A.isModifyingAppliedBoost, d.A.applyBoostError]),
    [w, P] = i.useState(C[0]),
    [D, x] = i.useState(false),
    [L, j] = i.useState(n),
    [M, k] = i.useState(null != t ? t : T.slice(0, 1)),
    U = i.useMemo(() => null == M ? [] : M.map(e => {
      let {
        premiumGuildSubscription: t
      } = e;
      return f.A.getGuild(null == t ? true : t.guildId)
    }).filter(e => null != e), [M]),
    G = i.useMemo(() => {
      var e;
      return (null == M || null == (e = M[0]) ? true : e.premiumGuildSubscription) != null
    }, [M]),
    V = () => (S("SUCCESS" === w), _.default.track(y.HAw.MODAL_DISMISSED, {
      type: y.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: a
    }), Promise.resolve()),
    F = {
      UNUSED_QUANTITY_SELECT: () => (s()(null != t || 0 !== T.length, "Cannot provide no slots if there are no other available slots"), (0, r.jsx)(o.Modal, {
        transitionState: I,
        onClose: V,
        size: "md",
        title: O.intl.string(O.t["9FFrrT"]),
        actions: [{
          variant: "secondary",
          text: O.intl.string(O.t["1BPTsK"]),
          onClick: V
        }, {
          variant: "primary",
          text: O.intl.string(O.t["/uwYda"]),
          onClick: () => P("CONFIRM")
        }],
        children: (0, r.jsxs)("div", {
          className: v.pS,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            className: v.TH,
            children: O.intl.string(O.t.x5qw5U)
          }), (0, r.jsxs)("div", {
            className: v.g9,
            children: [(0, r.jsx)(c.lw3, {
              value: M.length,
              onChange: e => k(T.slice(0, e)),
              minValue: 1,
              maxValue: T.length
            }), (0, r.jsx)(c.Text, {
              className: v.v$,
              variant: "text-md/normal",
              children: O.intl.string(O.t["Vl8TC+"])
            })]
          })]
        })
      })),
      GUILD_SELECT: () => (0, r.jsx)(g.default, {
        onClose: V,
        onSelectGuild: e => {
          j(e), P("CONFIRM")
        },
        transitionState: I,
        isTransfer: G,
        selectedSlotGuilds: U
      }),
      CONFIRM() {
        if (null == L) return null;
        let e = M.filter(e => (0, h.I5)(e)).length,
          t = M.length,
          n = U.length,
          i = "CONFIRM" === C[0] ? V : () => P(C[C.indexOf(w) - 1]),
          a = async () => {
            if (x(false), null != L && (null == M ? true : M.length) !== 0) {
              s()(!M.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
              try {
                await Promise.all(M.map(e => {
                  let {
                    premiumGuildSubscription: t
                  } = e;
                  return null != t ? (0, u.jZ)(t.guildId, t.id) : Promise.resolve()
                })), await (0, u.VA)(L.id, M.map(e => {
                  let {
                    id: t
                  } = e;
                  return t
                }), A === b.Pn.PERK), P("SUCCESS")
              } catch (e) {
                x(true)
              }
            }
          }, l = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
        return (0, r.jsx)(o.Modal, {
          transitionState: I,
          onClose: V,
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
          children: G ? (0, r.jsx)(m.A.TransferBody, {
            fromGuilds: U,
            toGuild: L,
            blurb: O.intl.formatToPlainString(O.t.SSA2lu, {
              slotCount: t,
              guildCount: n
            }),
            imageClass: v.LA,
            error: D ? R : null,
            slotCount: t,
            canceledCount: e
          }) : (0, r.jsx)(m.A.ApplyBody, {
            guild: L,
            blurb: O.intl.string(O.t.yTlZV0),
            warning: O.intl.formatToPlainString(O.t.KPnDlu, {
              days: y.FI6,
              slotCount: t
            }),
            imageClass: v.MP,
            error: D ? R : null,
            slotCount: t,
            canceledCount: e
          })
        })
      },
      SUCCESS() {
        let e = G ? O.intl.string(O.t["PR0n//"]) : O.intl.string(O.t["7KP/fI"]);
        return (0, r.jsx)(o.Modal, {
          transitionState: I,
          onClose: V,
          size: "md",
          title: e,
          actions: [],
          children: (0, r.jsx)(E.WE, {
            guild: L,
            isTransfer: G,
            guildBoostQuantity: M.length,
            onClose: V,
            didPurchaseOnFractionalPremium: false
          })
        })
      }
    };
  i.useEffect(() => {
    _.default.track(y.HAw.OPEN_MODAL, {
      type: y.JJy.PREMIUM_GUILD_SUBSCRIBE_MODAL,
      location_section: a
    })
  }, [a]);
  let B = F[w];
  return null == B ? null : B()
}
/** Chunk was on 75708 **/
/** chunk id: 615603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk975298 = require("./975298.js"),
  Chunk125529 = require("./125529.jsx"),
  Chunk760558 = require("./760558.js"),
  Chunk401786 = require("./401786.jsx"),
  Chunk450468 = require("./450468.jsx"),
  Chunk98278 = require("./98278.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk267642 = require("./267642.js"),
  Chunk74538 = require("./74538.js"),
  Chunk283029 = require("./283029.jsx"),
  Chunk357956 = require("./357956.jsx"),
  Chunk275909 = require("./275909.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk504185 = require("./504185.js");

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  let {
    guildBoostSlot: t,
    isCancellable: n,
    onCancel: s,
    onUncancel: a,
    premiumSubscription: l,
    useReducedMotion: d,
    fractionalState: u
  } = e, p = r.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), g = (0, _.tl)(t), h = (null == l ? true : l.isPaused) === true && u === S.a$.NONE, f = T.intl.string(T.t.mOWsFx);
  return <li className={I.unappliedGuildBoostSlot}>{<div className={I.unappliedGuildBoostSlotContentPrimary}>{<O.Z className={I.unappliedGuildBoostSlotIcon} hasCooldown={t.isOnCooldown()} isCanceled={g} useReducedMotion={d} />}{g && null != l ? <c.Text color={"text-muted"} variant={"text-sm/medium"}>{T.intl.format(T.t.Z4ULRE, {
          date: l.currentPeriodEnd
        })}</c.Text> : t.isOnCooldown() && null != p ? <C.Z cooldown={p.getTime()} /> : <c.Text className={I.__invalid_unappliedGuildBoostSlotDescription} color={"text-muted"} variant={"text-sm/medium"}>{T.intl.string(T.t["2mcaf3"])}</c.Text>}</div>}{<div className={I.unappliedGuildBoostSlotContentSecondary}>{n && !g && <m.Z shouldShow={h} text={f} aria-label={f.toString()}>{e => (0, i.jsx)(o.zx, y(N({}, e), {
          className: I.unappliedGuildBoostSlotCta,
          color: o.zx.Colors.PRIMARY,
          look: o.zx.Looks.LINK,
          onClick: () => s(t),
          size: o.zx.Sizes.NONE,
          disabled: h,
          children: T.intl.string(T.t.twFU3d)
        }))}</m.Z>}{g && <m.Z shouldShow={h} text={f} aria-label={f.toString()}>{e => (0, i.jsx)(o.zx, y(N({}, e), {
          className: I.unappliedGuildBoostSlotCta,
          color: o.zx.Colors.PRIMARY,
          look: o.zx.Looks.LINK,
          onClick: () => a(t),
          size: o.zx.Sizes.NONE,
          disabled: h,
          children: T.intl.string(T.t["2glQNj"])
        }))}</m.Z>}</div>}</li>
}

function P(e) {
  (0, c.ZDy)(async () => t => <g.default{...y(N({}, t), {
    guildBoostSlot: e
  })} />)
}

function R(e) {
  (0, c.ZDy)(async () => t => <h.default{...y(N({}, t), {
    guildBoostSlotId: e.id
  })} />)
}
let D = function(e) {
  let t, n, s, {
      guildBoostSlots: o
    } = e,
    g = (0, l.e7)([x.Z], () => x.Z.getPremiumTypeSubscription()),
    h = (null == g ? true : g.isPausedOrPausePending) === true,
    {
      fractionalState: C
    } = (0, u.Z)(),
    O = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
    D = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
    Z = C === S.a$.FP_SUB_PAUSED,
    w = h && !Z,
    {
      appliedGuildBoostSlots: k,
      unappliedGuildBoostSlots: L,
      numActiveGuildBoostSlots: M,
      hasCooldownBoosts: B,
      allGuildBoostsAreOnCooldown: U
    } = r.useMemo(() => {
      let e = [],
        t = [],
        n = 0,
        i = false,
        r = true;
      return o.forEach(s => {
        !(0, _.tl)(s) && n++, s.isOnCooldown() ? i = true : r = false, null != s.premiumGuildSubscription ? e.push(s) : t.push(s)
      }), {
        appliedGuildBoostSlots: e,
        unappliedGuildBoostSlots: t,
        numActiveGuildBoostSlots: n,
        hasCooldownBoosts: i,
        allGuildBoostsAreOnCooldown: r
      }
    }, [o]),
    V = null != g ? j.ZP.getNumIncludedPremiumGuildSubscriptionSlots(g.planId) : 0,
    G = Math.max(0, V - k.length),
    F = M > V,
    H = V === o.length,
    z = H ? G : 1,
    W = r.useMemo(() => {
      let e = [];
      for (let t = 0; t < z; t++) e.push(<E.Z className={I.headerBoostGem} useReducedMotion={O} />);
      return e
    }, [z, O]),
    Y = r.useMemo(() => L.find(e => e.isAvailable()), [L]);
  if (0 === L.length) return null;
  let K = L.length;
  if (t = H ? T.intl.formatToPlainString(U ? T.t["3DW6DQ"] : T.t["/u15QU"], {
      numUnappliedGuildBoostSlots: K
    }) : T.intl.formatToPlainString(U ? T.t["3DW6DQ"] : T.t.BPadnJ, {
      numUnappliedGuildBoostSlots: K
    }), j.ZP.isPremium(D)) {
    let e = (e, t) => <c.P3F className={I.headerLearnMoreLink} tag={"span"} onClick={() => {
        (0, f.z)()
      }}>{e}</c.P3F>;
    n = U ? T.intl.format(T.t.omcpSE, {
      learnMoreHook: e
    }) : T.intl.format(T.t["5mAkVl"], {
      numUnappliedGuildBoostSlots: K,
      learnMoreHook: e
    })
  } else n = U ? T.intl.string(T.t["8pcUZm"]) : T.intl.formatToPlainString(T.t.Kaw82t, {
    numUnappliedGuildBoostSlots: K
  });
  return s = h && C === S.a$.NONE ? T.intl.string(T.t.mOWsFx) : T.intl.string(T.t.xr4m5O), <div className={I.wrapper}><div className={a()(I.content, [I.headerWithoutSpecialHeader])}>{<div className={I.header}>{<div className={I.headerContentPrimary}>{<div className={I.headerBoostGems}>{W}</div>}{<div className={I.__invalid_headerCopy}>{<c.X6q className={I.headerHeading} variant={"heading-lg/bold"}>{t}</c.X6q>}{<c.Text className={I.__invalid_headerSubheading} color={"text-primary"} variant={"text-sm/normal"}>{n}</c.Text>}</div>}</div>}{<div className={I.headerContentSecondary}><m.Z shouldShow={null == Y || w} text={s} aria-label={s.toString()}>{e => (0, i.jsx)(c.zxk, y(N({
              variant: "primary",
              text: T.intl.string(T.t.BMx1i4)
            }, e), {
              disabled: null == Y || w,
              onClick: null != Y ? () => {
                (0, c.ZDy)(async () => e => (0, i.jsx)(p.default, y(N({}, e), {
                  guildBoostSlots: [Y],
                  locationSection: v.jXE.SETTINGS_PREMIUM
                })))
              } : true
            }))}</m.Z></div>}</div>}{(!H || B) && <ul className={I.unappliedBoostSlots}>{L.map(e => (0, i.jsx)(A, {
          guildBoostSlot: e,
          isCancellable: F,
          onCancel: P,
          onUncancel: R,
          premiumSubscription: g,
          useReducedMotion: O,
          fractionalState: C
        }, e.id))}</ul>}</div></div>
}
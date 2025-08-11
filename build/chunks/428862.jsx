/** Chunk was on 22988 **/
/** chunk id: 428862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./953529.js");
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk205641 = require("./205641.jsx"),
  Chunk119331 = require("./119331.js"),
  Chunk902807 = require("./902807.js"),
  Chunk430824 = require("./430824.js"),
  Chunk402766 = require("./402766.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk560161 = require("./560161.js");
let v = {
    tension: 200,
    friction: 20
  },
  _ = (r = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, v), i = i = {
    clamp: true
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
  }), r);

function O(e) {
  let [t, n] = a.useState(0), {
    numUnlocked: r,
    numRequired: i
  } = e, s = () => {
    n(1)
  }, d = () => {
    n(2)
  }, g = 2 === t, p = 1 === t;
  if (!(!(r >= i) && r / i >= .8) || g) return null;
  let h = p || g ? j.hidden : null,
    f = p ? m.Z.Stages.FLYING : m.Z.Stages.HOVERING;
  return <u.AMe from={{
      opacity: 0
    }} to={{
      opacity: 1
    }} config={_} shouldAnimate={"animate-always"}>{e => (0, l.jsxs)(c.animated.div, {
      className: j.tierClose,
      style: e,
      children: [(0, l.jsx)(m.Z, {
        className: j.tierCloseMechaWumpus,
        stage: f,
        onFlyingComplete: d
      }), (0, l.jsx)("div", {
        className: o()(j.tierCloseHint, h),
        children: x.intl.format(x.t.qV3Erq, {
          numLeft: i - r
        })
      }), (0, l.jsx)(u.P3F, {
        onClick: s,
        className: o()(j.tierCloseClose, h),
        children: (0, l.jsx)(u.k$p, {
          size: "md",
          color: "currentColor",
          className: j.tierCloseCloseIcon
        })
      })]
    })}</u.AMe>
}

function y(e) {
  let {
    withCardBody: t,
    isAnimatedTo: n,
    hasAnimatedUnlocked: r,
    onSetRef: i,
    tier: s,
    showHeaderLockStatus: c,
    headerButton: d = null,
    subscriptionsRequired: m,
    subscriptionCount: g,
    className: p
  } = e, h = e => {
    null == i || i(e)
  }, [b, x] = a.useState(0);
  return a.useLayoutEffect(() => {
    n && x(1)
  }, [n]), <u.AMe from={{
      unlockedTranslateY: 50
    }} to={{
      unlockedTranslateY: 50 * (0 === b)
    }} config={v}>{e => (0, l.jsx)("div", {
      className: o()({
        [j.tierHeaderWithoutCardBody]: !t,
        [j.tierHeaderUnlocked]: r,
        [j.tierHeaderLocked]: !r
      }, p),
      ref: h,
      children: (0, l.jsxs)("div", {
        className: j.tierHeaderContent,
        children: [(0, l.jsx)(f.Z, {
          tier: s.tier,
          color: "currentColor",
          className: o()(j.tierIcon, {
            [j.tierIconLocked]: !r
          })
        }), (0, l.jsx)("div", {
          className: o()(j.tierTitle, {
            [j.tierTitleActive]: r
          }),
          children: s.title
        }), c ? (0, l.jsx)(N, {
          transform: null == e ? true : e.unlockedTranslateY.to(e => "translate3d(0, ".concat(e, "px, 0)")),
          headerButton: d,
          subscriptionsRequired: m,
          hasAnimatedUnlocked: r
        }) : null, (0, l.jsx)(O, {
          numUnlocked: g,
          numRequired: m
        })]
      })
    })}</u.AMe>
}

function C(e) {
  let {
    children: t,
    subscriptionCount: n,
    onSetRef: r,
    tier: i,
    isAnimatedTo: a,
    hasBottomMargin: s,
    headerButton: c = null,
    withCardBody: m = true,
    guildId: f,
    showHeaderLockStatus: v = true
  } = e, _ = (0, d.e7)([h.Z], () => {
    var e, t;
    return null != (t = null == (e = h.Z.getGuild(f)) ? true : e.premiumTier) ? t : b.Eu4.NONE
  }), O = b.oCV[i.tier], C = a && i.tier <= _, N = i.tier !== b.Eu4.NONE && i.tier !== b.Eu4.TIER_1, I = (e, t) => {
    var n;
    let {
      Icon: r,
      className: i
    } = (0, g.t)(e.icon, t);
    return <div className={j.perk}>{<p.Z name={String(e.icon)} icon={r} className={j.perkIcon} iconClassName={i} />}{<div className={j.perkText}>{<div className={j.perkTitle}>{e.title}{e.isNew ? <u.IGR className={j.newBadge} text={x.intl.string(x.t.y2b7CA)} /> : null}</div>}{<div className={j.perkDescription}>{e.description}</div>}</div>}</div>
  };
  return <div className={o()(j.tier, {
      [j.tierBottomMargin]: s
    })}>{<y subscriptionCount={n} tier={i} headerButton={c} showHeaderLockStatus={v} onSetRef={e => {
        null != r && r(e, i)
      }} withCardBody={m} guildId={f} hasBottomMargin={s} subscriptionsRequired={O} hasAnimatedUnlocked={C} isAnimatedTo={a} />}{<div className={o()({
        [j.tierBody]: m
      })}>{null != t ? t : (0, l.jsxs)(l.Fragment, {
        children: [N ? (0, l.jsx)("div", {
          className: j.previousPerks,
          children: x.intl.string(x.t.oKzyRU)
        }) : null, null != i.perks && (0, l.jsx)("div", {
          className: j.perks,
          children: i.perks.map(e => I(e, C))
        })]
      })}</div>}</div>
}
let N = e => {
    let {
      transform: t,
      hasAnimatedUnlocked: n,
      headerButton: r,
      subscriptionsRequired: i
    } = e;
    return null !== r ? r : n ? <I transform={t} /> : <E subscriptionsRequired={i} />
  },
  I = e => {
    let {
      transform: t
    } = e;
    return <c.animated.div style={{
        transform: t
      }} className={j.tierUnlocked}>{x.intl.string(x.t.dNGM0t)}</c.animated.div>
  },
  E = e => {
    let {
      subscriptionsRequired: t
    } = e;
    return <l.Fragment>{<u.Text variant={"text-md/normal"}>{x.intl.format(x.t.t2Wbo6, {
          required: t,
          decorator: ""
        })}</u.Text>}{<u.mBM size={"md"} color={"currentColor"} className={j.tierLock} />}</l.Fragment>
  }
/** Chunk was on 64982 **/
/** chunk id: 428862, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./953529.js");
var r, i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk358458 = require("./358458.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk205641 = require("./205641.jsx"),
  Chunk119331 = require("./119331.js"),
  Chunk902807 = require("./902807.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk402766 = require("./402766.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk744834 = require("./744834.js");
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
  }, m = 2 === t, p = 1 === t;
  if (!(!(r >= i) && r / i >= .8) || m) return null;
  let f = p || m ? j.hidden : null,
    h = p ? g.Z.Stages.FLYING : g.Z.Stages.HOVERING;
  return (0, l.jsx)(u.AMe, {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: _,
    shouldAnimate: "animate-always",
    children: e => (0, l.jsxs)(c.animated.div, {
      className: j.tierClose,
      style: e,
      children: [(0, l.jsx)(g.Z, {
        className: j.tierCloseMechaWumpus,
        stage: h,
        onFlyingComplete: d
      }), (0, l.jsx)("div", {
        className: o()(j.tierCloseHint, f),
        children: x.intl.format(x.t.qV3Erl, {
          numLeft: i - r
        })
      }), (0, l.jsx)(u.P3F, {
        onClick: s,
        className: o()(j.tierCloseClose, f),
        children: (0, l.jsx)(u.k$p, {
          size: "md",
          color: "currentColor",
          className: j.tierCloseCloseIcon
        })
      })]
    })
  })
}

function C(e) {
  let {
    withCardBody: t,
    isAnimatedTo: n,
    hasAnimatedUnlocked: r,
    onSetRef: i,
    tier: s,
    showHeaderLockStatus: c,
    headerButton: d = null,
    subscriptionsRequired: g,
    subscriptionCount: m,
    className: p
  } = e, f = e => {
    null == i || i(e)
  }, [b, x] = a.useState(0);
  return a.useLayoutEffect(() => {
    n && x(1)
  }, [n]), (0, l.jsx)(u.AMe, {
    from: {
      unlockedTranslateY: 50
    },
    to: {
      unlockedTranslateY: 50 * (0 === b)
    },
    config: v,
    children: e => (0, l.jsx)("div", {
      className: o()({
        [j.tierHeaderWithoutCardBody]: !t,
        [j.tierHeaderUnlocked]: r,
        [j.tierHeaderLocked]: !r
      }, p),
      ref: f,
      children: (0, l.jsxs)("div", {
        className: j.tierHeaderContent,
        children: [(0, l.jsx)(h.Z, {
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
          subscriptionsRequired: g,
          hasAnimatedUnlocked: r
        }) : null, (0, l.jsx)(O, {
          numUnlocked: m,
          numRequired: g
        })]
      })
    })
  })
}

function y(e) {
  let {
    children: t,
    subscriptionCount: n,
    onSetRef: r,
    tier: i,
    isAnimatedTo: a,
    hasBottomMargin: s,
    headerButton: c = null,
    withCardBody: g = true,
    guildId: h,
    showHeaderLockStatus: v = true
  } = e, _ = (0, d.e7)([f.Z], () => {
    var e, t;
    return null != (t = null == (e = f.Z.getGuild(h)) ? true : e.premiumTier) ? t : b.Eu4.NONE
  }), O = b.oCV[i.tier], y = a && i.tier <= _, N = i.tier !== b.Eu4.NONE && i.tier !== b.Eu4.TIER_1;
  return (0, l.jsxs)("div", {
    className: o()(j.tier, {
      [j.tierBottomMargin]: s
    }),
    children: [(0, l.jsx)(C, {
      subscriptionCount: n,
      tier: i,
      headerButton: c,
      showHeaderLockStatus: v,
      onSetRef: e => {
        null != r && r(e, i)
      },
      withCardBody: g,
      guildId: h,
      hasBottomMargin: s,
      subscriptionsRequired: O,
      hasAnimatedUnlocked: y,
      isAnimatedTo: a
    }), (0, l.jsx)("div", {
      className: o()({
        [j.tierBody]: g
      }),
      children: null != t ? t : (0, l.jsxs)(l.Fragment, {
        children: [N ? (0, l.jsx)("div", {
          className: j.previousPerks,
          children: x.intl.string(x.t.oKzyRQ)
        }) : null, null != i.perks && (0, l.jsx)("div", {
          className: j.perks,
          children: i.perks.map(e => ((e, t) => {
            var n;
            let {
              Icon: r,
              className: i
            } = (0, m.t)(e.icon, t);
            return (0, l.jsxs)("div", {
              className: j.perk,
              children: [(0, l.jsx)(p.Z, {
                name: String(e.icon),
                icon: r,
                className: j.perkIcon,
                iconClassName: i
              }), (0, l.jsxs)("div", {
                className: j.perkText,
                children: [(0, l.jsxs)("div", {
                  className: j.perkTitle,
                  children: [e.title, e.isNew ? (0, l.jsx)(u.IGR, {
                    className: j.newBadge,
                    text: x.intl.string(x.t.y2b7CA)
                  }) : null]
                }), (0, l.jsx)("div", {
                  className: j.perkDescription,
                  children: e.description
                })]
              })]
            }, null == (n = e.title) ? true : n.toString())
          })(e, y))
        })]
      })
    })]
  }, i.tier)
}
let N = e => {
    let {
      transform: t,
      hasAnimatedUnlocked: n,
      headerButton: r,
      subscriptionsRequired: i
    } = e;
    return null !== r ? r : n ? (0, l.jsx)(E, {
      transform: t
    }) : (0, l.jsx)(I, {
      subscriptionsRequired: i
    })
  },
  E = e => {
    let {
      transform: t
    } = e;
    return (0, l.jsx)(c.animated.div, {
      style: {
        transform: t
      },
      className: j.tierUnlocked,
      children: x.intl.string(x.t.dNGM0v)
    })
  },
  I = e => {
    let {
      subscriptionsRequired: t
    } = e;
    return (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(u.Text, {
        variant: "text-md/normal",
        children: x.intl.format(x.t.t2Wbo1, {
          required: t,
          decorator: ""
        })
      }), (0, l.jsx)(u.mBM, {
        size: "md",
        color: "currentColor",
        className: j.tierLock
      })]
    })
  }
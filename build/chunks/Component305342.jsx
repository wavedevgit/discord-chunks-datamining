/** Chunk was on web.js **/
/** chunk id: 305342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V,
  c: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk131388 = require("./131388.js"),
  Chunk313201 = require("./313201.js"),
  Chunk160404 = require("./160404.js"),
  Chunk351402 = require("./351402.js"),
  Chunk768581 = require("./768581.js"),
  Chunk817460 = require("./817460.js"),
  Chunk584825 = require("./584825.js"),
  Chunk290348 = require("./290348.js"),
  Chunk934826 = require("./934826.js"),
  Chunk768318 = require("./768318.js"),
  Chunk570533 = require("./570533.js"),
  Chunk971792 = require("./971792.js"),
  Chunk629262 = require("./629262.js"),
  Chunk761966 = require("./761966.jsx"),
  Chunk893729 = require("./893729.jsx"),
  Chunk845970 = require("./845970.jsx"),
  Chunk882101 = require("./882101.jsx"),
  Chunk11705 = require("./11705.jsx"),
  Chunk81273 = require("./81273.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk546810 = require("./546810.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = 24,
  U = 5,
  G = e => {
    let {
      benefits: t,
      header: n,
      guildId: a
    } = e, [o, s] = i.useState(false), l = o ? t : t.slice(0, U), u = t.length > U, f = t.length - U, _ = w.intl.formatToPlainString(w.t["XSdy7+"], {
      numTruncated: f
    }), p = () => s(e => !e), m = (0, d.Dt)();
    return 0 === t.length ? null : (0, r.jsxs)("div", {
      className: D.benefitsSection,
      children: [(0, r.jsx)(c.X6q, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: D.sectionHeader,
        id: m,
        children: n
      }), (0, r.jsx)(c.LZC, {
        size: 12
      }), (0, r.jsx)("ul", {
        className: D.benefitsList,
        "aria-labelledby": m,
        children: l.map((e, t) => (0, r.jsx)("li", {
          children: (0, r.jsx)(S.Z, {
            guildId: a,
            benefit: e
          }, (0, h.ab)(e))
        }, t))
      }), u && (0, r.jsx)(F, {
        isViewAll: o,
        onToggle: p,
        showMoreText: _
      })]
    })
  },
  B = e => {
    let {
      guildId: t,
      listingId: n
    } = e, i = (0, y.Z)(t), [a] = g.XZ(n, t), o = i.filter(e => a.has(e.id));

    function s(e) {
      return p.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: M
      })
    }
    return 0 === o.length ? null : (0, r.jsxs)("div", {
      className: D.benefitsSection,
      children: [(0, r.jsx)(c.X6q, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: D.sectionHeader,
        children: w.intl.format(w.t.NAnXEh, {
          count: o.length
        })
      }), (0, r.jsx)(c.LZC, {
        size: 12
      }), (0, r.jsx)("div", {
        className: D.emojiList,
        children: o.map((e, t) => {
          var n;
          return (0, r.jsx)(c.ua7, {
            text: e.name,
            "aria-label": false,
            children: t => (0, r.jsx)("img", k(L({}, t), {
              className: D.emojiListEmoji,
              src: s(e),
              width: M,
              height: M,
              alt: e.name
            }))
          }, null != (n = e.id) ? n : t)
        })
      })]
    })
  },
  Z = e => {
    let {
      listingId: t,
      guildId: n,
      className: i
    } = e, a = (0, O.Z)(n, t), [s] = g.UE(t), l = (0, v.Z)(s), [u] = g.R7(t), d = g.qs(t, n), [f] = g.XZ(t, n);
    return null == a && 0 === l.length && 0 === u.length && 0 === f.size ? null : (0, r.jsxs)("div", {
      className: o()(D.subscriptionPerks, i),
      children: [null != a && (0, r.jsxs)(c.y5t, {
        component: (0, r.jsx)(c.X6q, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: D.sectionHeader,
          children: w.intl.string(w.t.FJZmY2)
        }),
        children: [(0, r.jsx)(c.LZC, {
          size: 8
        }), (0, r.jsx)(T.Z, {
          role: d,
          guildId: n,
          className: D.roleMessagePreview
        })]
      }), (0, r.jsx)(G, {
        header: w.intl.string(w.t.LtfhAg),
        benefits: l,
        guildId: n
      }), (0, r.jsx)(G, {
        header: w.intl.string(w.t["8oxWpK"]),
        benefits: u,
        guildId: n
      }), (0, r.jsx)(B, {
        guildId: n,
        listingId: t
      })]
    })
  },
  F = e => {
    let t, {
      onToggle: n,
      isViewAll: i,
      showMoreText: a
    } = e;
    return t = i ? (0, r.jsxs)(r.Fragment, {
      children: [w.intl.string(w.t["r/xxPT"]), (0, r.jsx)(c.u04, {
        size: "md",
        color: "currentColor",
        className: D.toggleTruncationButtonIcon
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [a, (0, r.jsx)(c.CJ0, {
        size: "md",
        color: "currentColor",
        className: D.toggleTruncationButtonIcon
      })]
    }), (0, r.jsx)(l.zx, {
      look: l.zx.Looks.BLANK,
      size: l.zx.Sizes.NONE,
      className: D.toggleTruncationButton,
      innerClassName: D.toggleTruncationButtonInner,
      onClick: n,
      children: t
    })
  },
  V = e => {
    var t;
    let {
      listingId: n,
      guildId: a,
      groupListingId: d,
      analyticsLocation: p
    } = e, y = (0, m.jO)(n), {
      openModal: O,
      canOpenModal: v,
      cannotOpenReason: T,
      isCheckingTrialEligibility: S
    } = (0, N.Z)(y, a, d, p), x = (0, s.e7)([_.Z], () => _.Z.isSyncing), {
      activeSubscription: j,
      activeSubscriptionListing: M
    } = (0, E.Z)(d), U = (null == M ? true : M.id) === n, G = (null == j ? true : j.status) === P.O0b.CANCELED, [B, V] = i.useState(false), [H, Y] = i.useState(false), W = i.useCallback(e => {
      let t = false;
      null != e && (t = e.scrollHeight - e.clientHeight > 1), Y(t)
    }, []), [K] = g._T(n), [z] = g.PK(n), [q] = g.TT(n), [X] = g.F2(n), Q = (0, b.Z)(a, n), J = null != q && null == j && Q, $ = () => V(e => !e), ee = (0, u.Z)(R.iP), [et, en] = i.useState(false), er = et || !ee, ei = () => en(e => !e), ea = (0, s.e7)([f.Z], () => f.Z.isViewingServerShop(a)), eo = (null == y ? true : y.published) === true, es = (null == y ? true : y.soft_deleted) === true, el = w.intl.string(w.t.KzmEAw);
    return (eo || ea) && !es ? (0, r.jsxs)("article", {
      className: D.container,
      "aria-label": K,
      children: [J && (0, r.jsxs)("div", {
        className: o()(D.tierTrialIndicator, D.tierTopIndicator),
        children: [w.intl.format(w.t.L2ouio, {
          trialPeriodDuration: (0, h.iG)({
            interval: q.interval,
            interval_count: q.interval_count
          })
        }), (0, r.jsx)(c.ua7, {
          clickableOnMobile: true,
          text: w.intl.formatToPlainString(w.t.FYyR4u, {
            activeTrialUserLimit: null != X ? X : 0
          }),
          children: e => (0, r.jsx)(c.d3s, L({
            size: "xs",
            color: "currentColor",
            className: D.tierTrialIndicatorIcon
          }, e))
        })]
      }), (0, r.jsxs)("div", {
        className: J ? true : D.cardContainerWithoutTopIndicator,
        children: [(0, r.jsxs)("div", {
          className: D.tierInfoContainer,
          children: [ee ? (0, r.jsx)(C.e, {
            listingId: n,
            isListingPublished: eo,
            expanded: er,
            onToggleExpanded: ei
          }) : (0, r.jsx)(A.xv, {
            listingId: n,
            isListingPublished: eo
          }), er && (0, r.jsxs)(r.Fragment, {
            children: [ee && (0, r.jsx)("div", {
              className: D.divider
            }), U ? (0, r.jsx)(l.zx, {
              fullWidth: true,
              look: l.zx.Looks.OUTLINED,
              color: l.zx.Colors.PRIMARY,
              disabled: true,
              children: G ? w.intl.string(w.t.iKHmu7) : w.intl.string(w.t.XvAuMj)
            }) : (0, r.jsx)(c.ua7, {
              text: v ? null : T,
              "aria-label": null != (t = v && T) && t,
              children: e => (0, r.jsx)(I.Z, k(L({}, e), {
                fullWidth: true,
                disabled: !v || x,
                submitting: S,
                onClick: O,
                onlyShineOnHover: true,
                children: w.intl.string(w.t.fM5Zsb)
              }))
            }), (0, r.jsx)(c.LZC, {
              size: 16
            }), (0, r.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              className: o()((!H || !B) && D.tierDescriptionTruncate),
              children: (0, r.jsx)("div", {
                ref: W,
                children: z
              })
            }), H && (0, r.jsx)(F, {
              isViewAll: B,
              onToggle: $,
              showMoreText: el
            })]
          })]
        }), er && (0, r.jsx)(c.y5t, {
          children: (0, r.jsx)(Z, {
            listingId: n,
            guildId: a
          })
        })]
      })]
    }) : null
  }
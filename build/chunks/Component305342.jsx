/** Chunk was on 25548 **/
/** chunk id: 305342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D,
  c: () => M
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk492077 = require("./492077.js");

function L(e) {
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

function k(e, t) {
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
let z = e => {
    let {
      benefits: t,
      header: n,
      guildId: l
    } = e, [a, s] = r.useState(false), o = a ? t : t.slice(0, 5), d = t.length > 5, m = t.length - 5, f = E.intl.formatToPlainString(E.t["XSdy7+"], {
      numTruncated: m
    }), h = (0, u.Dt)();
    return 0 === t.length ? null : (0, i.jsxs)("div", {
      className: w.benefitsSection,
      children: [(0, i.jsx)(c.X6q, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: w.sectionHeader,
        id: h,
        children: n
      }), (0, i.jsx)(c.LZC, {
        size: 12
      }), (0, i.jsx)("ul", {
        className: w.benefitsList,
        "aria-labelledby": h,
        children: o.map((e, t) => (0, i.jsx)("li", {
          children: (0, i.jsx)(O.Z, {
            guildId: l,
            benefit: e
          }, (0, g.ab)(e))
        }, t))
      }), d && (0, i.jsx)(R, {
        isViewAll: a,
        onToggle: () => s(e => !e),
        showMoreText: f
      })]
    })
  },
  A = e => {
    let {
      guildId: t,
      listingId: n
    } = e, r = (0, x.Z)(t), [l] = p.XZ(n, t), a = r.filter(e => l.has(e.id));
    return 0 === a.length ? null : (0, i.jsxs)("div", {
      className: w.benefitsSection,
      children: [(0, i.jsx)(c.X6q, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: w.sectionHeader,
        children: E.intl.format(E.t.NAnXEh, {
          count: a.length
        })
      }), (0, i.jsx)(c.LZC, {
        size: 12
      }), (0, i.jsx)("div", {
        className: w.emojiList,
        children: a.map((e, t) => {
          var n;
          return (0, i.jsx)(c.ua7, {
            text: e.name,
            "aria-label": false,
            children: t => (0, i.jsx)("img", k(L({}, t), {
              className: w.emojiListEmoji,
              src: h.ZP.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: 24
              }),
              width: 24,
              height: 24,
              alt: e.name
            }))
          }, null != (n = e.id) ? n : t)
        })
      })]
    })
  },
  M = e => {
    let {
      listingId: t,
      guildId: n,
      className: r
    } = e, l = (0, _.Z)(n, t), [s] = p.UE(t), o = (0, y.Z)(s), [d] = p.R7(t), u = p.qs(t, n), [m] = p.XZ(t, n);
    return null == l && 0 === o.length && 0 === d.length && 0 === m.size ? null : (0, i.jsxs)("div", {
      className: a()(w.subscriptionPerks, r),
      children: [null != l && (0, i.jsxs)(c.y5t, {
        component: (0, i.jsx)(c.X6q, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: w.sectionHeader,
          children: E.intl.string(E.t.FJZmY2)
        }),
        children: [(0, i.jsx)(c.LZC, {
          size: 8
        }), (0, i.jsx)(Z.Z, {
          role: u,
          guildId: n,
          className: w.roleMessagePreview
        })]
      }), (0, i.jsx)(z, {
        header: E.intl.string(E.t.LtfhAg),
        benefits: o,
        guildId: n
      }), (0, i.jsx)(z, {
        header: E.intl.string(E.t["8oxWpK"]),
        benefits: d,
        guildId: n
      }), (0, i.jsx)(A, {
        guildId: n,
        listingId: t
      })]
    })
  },
  R = e => {
    let t, {
      onToggle: n,
      isViewAll: r,
      showMoreText: l
    } = e;
    return t = r ? (0, i.jsxs)(i.Fragment, {
      children: [E.intl.string(E.t["r/xxPT"]), (0, i.jsx)(c.u04, {
        size: "md",
        color: "currentColor",
        className: w.toggleTruncationButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [l, (0, i.jsx)(c.CJ0, {
        size: "md",
        color: "currentColor",
        className: w.toggleTruncationButtonIcon
      })]
    }), (0, i.jsx)(o.zx, {
      look: o.zx.Looks.BLANK,
      size: o.zx.Sizes.NONE,
      className: w.toggleTruncationButton,
      innerClassName: w.toggleTruncationButtonInner,
      onClick: n,
      children: t
    })
  },
  D = e => {
    var t;
    let {
      listingId: n,
      guildId: l,
      groupListingId: u,
      analyticsLocation: h
    } = e, x = (0, v.jO)(n), {
      openModal: _,
      canOpenModal: y,
      cannotOpenReason: Z,
      isCheckingTrialEligibility: O
    } = (0, T.Z)(x, l, u, h), z = (0, s.e7)([f.Z], () => f.Z.isSyncing), {
      activeSubscription: A,
      activeSubscriptionListing: D
    } = (0, j.Z)(u), B = (null == D ? true : D.id) === n, F = (null == A ? true : A.status) === S.O0b.CANCELED, [G, U] = r.useState(false), [H, W] = r.useState(false), Y = r.useCallback(e => {
      let t = false;
      null != e && (t = e.scrollHeight - e.clientHeight > 1), W(t)
    }, []), [K] = p._T(n), [V] = p.PK(n), [X] = p.TT(n), [q] = p.F2(n), J = (0, b.Z)(l, n), Q = null != X && null == A && J, $ = (0, d.Z)(P.iP), [ee, et] = r.useState(false), en = ee || !$, ei = (0, s.e7)([m.Z], () => m.Z.isViewingServerShop(l)), er = (null == x ? true : x.published) === true, el = (null == x ? true : x.soft_deleted) === true, ea = E.intl.string(E.t.KzmEAw);
    return (er || ei) && !el ? (0, i.jsxs)("article", {
      className: w.container,
      "aria-label": K,
      children: [Q && (0, i.jsxs)("div", {
        className: a()(w.tierTrialIndicator, w.tierTopIndicator),
        children: [E.intl.format(E.t.L2ouio, {
          trialPeriodDuration: (0, g.iG)({
            interval: X.interval,
            interval_count: X.interval_count
          })
        }), (0, i.jsx)(c.ua7, {
          clickableOnMobile: true,
          text: E.intl.formatToPlainString(E.t.FYyR4u, {
            activeTrialUserLimit: null != q ? q : 0
          }),
          children: e => (0, i.jsx)(c.d3s, L({
            size: "xs",
            color: "currentColor",
            className: w.tierTrialIndicatorIcon
          }, e))
        })]
      }), (0, i.jsxs)("div", {
        className: Q ? true : w.cardContainerWithoutTopIndicator,
        children: [(0, i.jsxs)("div", {
          className: w.tierInfoContainer,
          children: [$ ? (0, i.jsx)(C.e, {
            listingId: n,
            isListingPublished: er,
            expanded: en,
            onToggleExpanded: () => et(e => !e)
          }) : (0, i.jsx)(I.xv, {
            listingId: n,
            isListingPublished: er
          }), en && (0, i.jsxs)(i.Fragment, {
            children: [$ && (0, i.jsx)("div", {
              className: w.divider
            }), B ? (0, i.jsx)(o.zx, {
              fullWidth: true,
              look: o.zx.Looks.OUTLINED,
              color: o.zx.Colors.PRIMARY,
              disabled: true,
              children: F ? E.intl.string(E.t.iKHmu7) : E.intl.string(E.t.XvAuMj)
            }) : (0, i.jsx)(c.ua7, {
              text: y ? null : Z,
              "aria-label": null != (t = y && Z) && t,
              children: e => (0, i.jsx)(N.Z, k(L({}, e), {
                fullWidth: true,
                disabled: !y || z,
                submitting: O,
                onClick: _,
                onlyShineOnHover: true,
                children: E.intl.string(E.t.fM5Zsb)
              }))
            }), (0, i.jsx)(c.LZC, {
              size: 16
            }), (0, i.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              className: a()((!H || !G) && w.tierDescriptionTruncate),
              children: (0, i.jsx)("div", {
                ref: Y,
                children: V
              })
            }), H && (0, i.jsx)(R, {
              isViewAll: G,
              onToggle: () => U(e => !e),
              showMoreText: ea
            })]
          })]
        }), en && (0, i.jsx)(c.y5t, {
          children: (0, i.jsx)(M, {
            listingId: n,
            guildId: l
          })
        })]
      })]
    }) : null
  }
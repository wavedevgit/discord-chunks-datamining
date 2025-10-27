/** Chunk was on web.js **/
/** chunk id: 305342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G,
  c: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
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
  Chunk893729 = require("./893729.jsx"),
  Chunk549631 = require("./549631.jsx"),
  Chunk845970 = require("./845970.jsx"),
  Chunk882101 = require("./882101.jsx"),
  Chunk11705 = require("./11705.jsx"),
  Chunk81273 = require("./81273.jsx"),
  Chunk293810 = require("./293810.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk126683 = require("./126683.js");
let L = 24,
  x = 5,
  M = e => {
    let {
      benefits: t,
      header: n,
      guildId: a
    } = e, [o, s] = i.useState(false), l = o ? t : t.slice(0, x), u = t.length > x, f = t.length - x, _ = D.intl.formatToPlainString(D.t.XSdy72, {
      numTruncated: f
    }), p = () => s(e => !e), m = (0, d.Dt)();
    return 0 === t.length ? null : (0, r.jsxs)("div", {
      className: w.benefitsSection,
      children: [(0, r.jsx)(c.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: w.sectionHeader,
        id: m,
        children: n
      }), (0, r.jsx)(c.LZC, {
        size: 12
      }), (0, r.jsx)("ul", {
        className: w.benefitsList,
        "aria-labelledby": m,
        children: l.map((e, t) => (0, r.jsx)("li", {
          children: (0, r.jsx)(S.Z, {
            guildId: a,
            benefit: e
          }, (0, h.ab)(e))
        }, t))
      }), u && (0, r.jsx)(U, {
        isViewAll: o,
        onToggle: p,
        showMoreText: _
      })]
    })
  },
  k = e => {
    let {
      guildId: t,
      listingId: n
    } = e, i = (0, y.Z)(t), [a] = g.XZ(n, t), o = i.filter(e => a.has(e.id));

    function s(e) {
      return p.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: L
      })
    }
    return 0 === o.length ? null : (0, r.jsxs)("div", {
      className: w.benefitsSection,
      children: [(0, r.jsx)(c.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: w.sectionHeader,
        children: D.intl.format(D.t.NAnXEo, {
          count: o.length
        })
      }), (0, r.jsx)(c.LZC, {
        size: 12
      }), (0, r.jsx)("div", {
        className: w.emojiList,
        children: o.map((e, t) => {
          var n;
          return (0, r.jsx)(l.u, {
            text: e.name,
            "aria-label": false,
            children: (0, r.jsx)("img", {
              className: w.emojiListEmoji,
              src: s(e),
              width: L,
              height: L,
              alt: e.name
            })
          }, null != (n = e.id) ? n : t)
        })
      })]
    })
  },
  j = e => {
    let {
      listingId: t,
      guildId: n,
      className: i
    } = e, a = (0, O.Z)(n, t), [s] = g.UE(t), l = (0, v.Z)(s), [u] = g.R7(t), d = g.qs(t, n), [f] = g.XZ(t, n);
    return null == a && 0 === l.length && 0 === u.length && 0 === f.size ? null : (0, r.jsxs)("div", {
      className: o()(w.subscriptionPerks, i),
      children: [null != a && (0, r.jsxs)(c.y5t, {
        component: (0, r.jsx)(c.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: w.sectionHeader,
          children: D.intl.string(D.t.FJZmYx)
        }),
        children: [(0, r.jsx)(c.LZC, {
          size: 8
        }), (0, r.jsx)(I.Z, {
          role: d,
          guildId: n,
          className: w.roleMessagePreview
        })]
      }), (0, r.jsx)(M, {
        header: D.intl.string(D.t.LtfhAj),
        benefits: l,
        guildId: n
      }), (0, r.jsx)(M, {
        header: D.intl.string(D.t["8oxWpO"]),
        benefits: u,
        guildId: n
      }), (0, r.jsx)(k, {
        guildId: n,
        listingId: t
      })]
    })
  },
  U = e => {
    let {
      onToggle: t,
      isViewAll: n,
      showMoreText: i
    } = e, a = n ? D.intl.string(D.t["r/xxPU"]) : i;
    return (0, r.jsx)(c.Avr, {
      text: a,
      onClick: t,
      textVariant: "text-xs/medium",
      variant: "secondary"
    })
  },
  G = e => {
    let {
      listingId: t,
      guildId: n,
      groupListingId: a,
      analyticsLocation: d
    } = e, p = (0, m.jO)(t), {
      openModal: y,
      canOpenModal: O,
      cannotOpenReason: v,
      isCheckingTrialEligibility: I
    } = (0, N.Z)(p, n, a, d), S = (0, s.e7)([_.Z], () => _.Z.isSyncing), {
      activeSubscription: L,
      activeSubscriptionListing: x
    } = (0, E.Z)(a), M = (null == x ? true : x.id) === t, k = (null == L ? true : L.status) === P.O0b.CANCELED, [G, B] = i.useState(false), [Z, F] = i.useState(false), V = i.useCallback(e => {
      let t = false;
      null != e && (t = e.scrollHeight - e.clientHeight > 1), F(t)
    }, []), [H] = g._T(t), [Y] = g.PK(t), [W] = g.TT(t), [K] = g.F2(t), z = (0, b.Z)(n, t), q = null != W && null == L && z, X = () => B(e => !e), Q = (0, u.Z)(R.iP), [J, $] = i.useState(false), ee = J || !Q, et = () => $(e => !e), en = (0, s.e7)([f.Z], () => f.Z.isViewingServerShop(n)), er = (null == p ? true : p.published) === true, ei = (null == p ? true : p.soft_deleted) === true, ea = D.intl.string(D.t.KzmEA9);
    return (er || en) && !ei ? (0, r.jsxs)("article", {
      className: w.container,
      "aria-label": H,
      children: [q && (0, r.jsxs)("div", {
        className: o()(w.tierTrialIndicator, w.tierTopIndicator),
        children: [D.intl.format(D.t.L2ouip, {
          trialPeriodDuration: (0, h.iG)({
            interval: W.interval,
            interval_count: W.interval_count
          })
        }), (0, r.jsx)(l.u, {
          text: D.intl.formatToPlainString(D.t.FYyR4o, {
            activeTrialUserLimit: null != K ? K : 0
          }),
          children: (0, r.jsx)(c.d3s, {
            size: "xs",
            color: "currentColor",
            className: w.tierTrialIndicatorIcon
          })
        })]
      }), (0, r.jsxs)("div", {
        className: q ? true : w.cardContainerWithoutTopIndicator,
        children: [(0, r.jsxs)("div", {
          className: w.tierInfoContainer,
          children: [Q ? (0, r.jsx)(C.e, {
            listingId: t,
            isListingPublished: er,
            expanded: ee,
            onToggleExpanded: et
          }) : (0, r.jsx)(A.xv, {
            listingId: t,
            isListingPublished: er
          }), ee && (0, r.jsxs)(c.Kqy, {
            gap: 16,
            children: [Q && (0, r.jsx)("div", {
              className: w.divider
            }), M ? (0, r.jsx)(c.Button, {
              disabled: true,
              fullWidth: true,
              variant: k ? "secondary" : "primary",
              text: k ? D.intl.string(D.t.iKHmu0) : D.intl.string(D.t.XvAuMo)
            }) : (0, r.jsxs)(r.Fragment, {
              children: [O ? null : (0, r.jsx)(c.Wn, {
                className: w.helpMessage,
                messageType: c.QYI.INFO,
                children: v
              }), (0, r.jsx)(c.Button, {
                fullWidth: true,
                text: D.intl.string(D.t.fM5ZsX),
                disabled: !O || S,
                loading: I,
                onClick: y,
                icon: T.Z,
                variant: "primary"
              })]
            }), (0, r.jsxs)(c.Kqy, {
              gap: 8,
              align: "center",
              children: [(0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: o()((!Z || !G) && w.tierDescriptionTruncate),
                children: (0, r.jsx)("div", {
                  ref: V,
                  children: Y
                })
              }), Z && (0, r.jsx)(U, {
                isViewAll: G,
                onToggle: X,
                showMoreText: ea
              })]
            })]
          })]
        }), ee && (0, r.jsx)(c.y5t, {
          children: (0, r.jsx)(j, {
            listingId: t,
            guildId: n
          })
        })]
      })]
    }) : null
  }
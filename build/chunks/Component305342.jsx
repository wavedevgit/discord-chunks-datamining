/** Chunk was on web.js **/
/** chunk id: 305342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G,
  c: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let x = 24,
  L = 5,
  j = e => {
    let {
      benefits: t,
      header: n,
      guildId: a
    } = e, [o, s] = i.useState(false), l = o ? t : t.slice(0, L), u = t.length > L, f = t.length - L, p = w.intl.formatToPlainString(w.t.XSdy72, {
      numTruncated: f
    }), _ = () => s(e => !e), h = (0, d.Dt)();
    return 0 === t.length ? null : (0, r.jsxs)("div", {
      className: D.benefitsSection,
      children: [(0, r.jsx)(c.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: D.sectionHeader,
        id: h,
        children: n
      }), (0, r.jsx)(c.LZC, {
        size: 12
      }), (0, r.jsx)("ul", {
        className: D.benefitsList,
        "aria-labelledby": h,
        children: l.map((e, t) => (0, r.jsx)("li", {
          children: (0, r.jsx)(T.Z, {
            guildId: a,
            benefit: e
          }, (0, m.ab)(e))
        }, t))
      }), u && (0, r.jsx)(U, {
        isViewAll: o,
        onToggle: _,
        showMoreText: p
      })]
    })
  },
  M = e => {
    let {
      guildId: t,
      listingId: n
    } = e, i = (0, y.Z)(t), [a] = g.XZ(n, t), o = i.filter(e => a.has(e.id));

    function s(e) {
      return _.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: x
      })
    }
    return 0 === o.length ? null : (0, r.jsxs)("div", {
      className: D.benefitsSection,
      children: [(0, r.jsx)(c.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: D.sectionHeader,
        children: w.intl.format(w.t.NAnXEo, {
          count: o.length
        })
      }), (0, r.jsx)(c.LZC, {
        size: 12
      }), (0, r.jsx)("div", {
        className: D.emojiList,
        children: o.map((e, t) => {
          var n;
          return (0, r.jsx)(l.u, {
            text: e.name,
            "aria-label": false,
            children: (0, r.jsx)("img", {
              className: D.emojiListEmoji,
              src: s(e),
              width: x,
              height: x,
              alt: e.name
            })
          }, null != (n = e.id) ? n : t)
        })
      })]
    })
  },
  k = e => {
    let {
      listingId: t,
      guildId: n,
      className: i
    } = e, a = (0, O.Z)(n, t), [s] = g.UE(t), l = (0, v.Z)(s), [u] = g.R7(t), d = g.qs(t, n), [f] = g.XZ(t, n);
    return null == a && 0 === l.length && 0 === u.length && 0 === f.size ? null : (0, r.jsxs)("div", {
      className: o()(D.subscriptionPerks, i),
      children: [null != a && (0, r.jsxs)(c.y5t, {
        component: (0, r.jsx)(c.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: D.sectionHeader,
          children: w.intl.string(w.t.FJZmYx)
        }),
        children: [(0, r.jsx)(c.LZC, {
          size: 8
        }), (0, r.jsx)(S.Z, {
          role: d,
          guildId: n,
          className: D.roleMessagePreview
        })]
      }), (0, r.jsx)(j, {
        header: w.intl.string(w.t.LtfhAj),
        benefits: l,
        guildId: n
      }), (0, r.jsx)(j, {
        header: w.intl.string(w.t["8oxWpO"]),
        benefits: u,
        guildId: n
      }), (0, r.jsx)(M, {
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
    } = e, a = n ? w.intl.string(w.t["r/xxPU"]) : i;
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
    } = e, _ = (0, h.jO)(t), {
      openModal: y,
      canOpenModal: O,
      cannotOpenReason: v,
      isCheckingTrialEligibility: S
    } = (0, N.Z)(_, n, a, d), T = (0, s.e7)([p.Z], () => p.Z.isSyncing), {
      activeSubscription: x,
      activeSubscriptionListing: L
    } = (0, E.Z)(a), j = (null == L ? true : L.id) === t, M = (null == x ? true : x.status) === R.O0b.CANCELED, [G, Z] = i.useState(false), [B, F] = i.useState(false), V = i.useCallback(e => {
      let t = false;
      null != e && (t = e.scrollHeight - e.clientHeight > 1), F(t)
    }, []), [H] = g._T(t), [Y] = g.PK(t), [W] = g.TT(t), [K] = g.F2(t), z = (0, b.Z)(n, t), q = null != W && null == x && z, Q = () => Z(e => !e), X = (0, u.Z)(P.iP), [J, $] = i.useState(false), ee = J || !X, et = () => $(e => !e), en = (0, s.e7)([f.Z], () => f.Z.isViewingServerShop(n)), er = (null == _ ? true : _.published) === true, ei = (null == _ ? true : _.soft_deleted) === true, ea = w.intl.string(w.t.KzmEA9);
    return (er || en) && !ei ? (0, r.jsxs)("article", {
      className: D.container,
      "aria-label": H,
      children: [q && (0, r.jsxs)("div", {
        className: o()(D.tierTrialIndicator, D.tierTopIndicator),
        children: [w.intl.format(w.t.L2ouip, {
          trialPeriodDuration: (0, m.iG)({
            interval: W.interval,
            interval_count: W.interval_count
          })
        }), (0, r.jsx)(l.u, {
          text: w.intl.formatToPlainString(w.t.FYyR4o, {
            activeTrialUserLimit: null != K ? K : 0
          }),
          children: (0, r.jsx)(c.d3s, {
            size: "xs",
            color: "currentColor",
            className: D.tierTrialIndicatorIcon
          })
        })]
      }), (0, r.jsxs)("div", {
        className: q ? true : D.cardContainerWithoutTopIndicator,
        children: [(0, r.jsxs)("div", {
          className: D.tierInfoContainer,
          children: [X ? (0, r.jsx)(C.e, {
            listingId: t,
            isListingPublished: er,
            expanded: ee,
            onToggleExpanded: et
          }) : (0, r.jsx)(A.xv, {
            listingId: t,
            isListingPublished: er
          }), ee && (0, r.jsxs)(c.Kqy, {
            gap: 16,
            children: [X && (0, r.jsx)("div", {
              className: D.divider
            }), j ? (0, r.jsx)(c.Button, {
              disabled: true,
              fullWidth: true,
              variant: M ? "secondary" : "primary",
              text: M ? w.intl.string(w.t.iKHmu0) : w.intl.string(w.t.XvAuMo)
            }) : (0, r.jsxs)(r.Fragment, {
              children: [O ? null : (0, r.jsx)(c.Wn, {
                className: D.helpMessage,
                messageType: c.QYI.INFO,
                children: v
              }), (0, r.jsx)(c.Button, {
                fullWidth: true,
                text: w.intl.string(w.t.fM5ZsX),
                disabled: !O || T,
                loading: S,
                onClick: y,
                icon: I.Z,
                variant: "primary"
              })]
            }), (0, r.jsxs)(c.Kqy, {
              gap: 8,
              align: "center",
              children: [(0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                className: o()((!B || !G) && D.tierDescriptionTruncate),
                children: (0, r.jsx)("div", {
                  ref: V,
                  children: Y
                })
              }), B && (0, r.jsx)(U, {
                isViewAll: G,
                onToggle: Q,
                showMoreText: ea
              })]
            })]
          })]
        }), ee && (0, r.jsx)(c.y5t, {
          children: (0, r.jsx)(k, {
            listingId: t,
            guildId: n
          })
        })]
      })]
    }) : null
  }
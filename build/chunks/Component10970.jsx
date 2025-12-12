/** Chunk was on web.js **/
/** chunk id: 10970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk601911 = require("./601911.js"),
  Chunk887818 = require("./887818.jsx"),
  Chunk824856 = require("./824856.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk55563 = require("./55563.js"),
  Chunk171246 = require("./171246.js"),
  Chunk263519 = require("./263519.js"),
  Chunk63487 = require("./63487.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk875210 = require("./875210.js");

function b(e) {
  var t;
  let {
    app: n,
    currentSubscription: o,
    currentListing: _,
    alternativeListings: h,
    navigateToHome: b,
    subscriptionGroup: O,
    renewalSkuId: v
  } = e, S = (0, s.y)(n, 100), I = (0, p.KK)(O.flags), T = I ? a.QTo : a.tBG, C = I ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA), A = null == (t = o.metadata) ? true : t.application_subscription_guild_id, N = (0, i.e7)([d.Z], () => I && null != A ? d.Z.getGuild(A) : true, [A, I]), P = (0, i.e7)([f.Z], () => {
    if (null != v) return f.Z.get(v)
  }, [v]), R = (0, m.p)(o.currentPeriodEnd);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: E.header,
      children: [null != S && (0, r.jsx)(a.Eep, {
        src: S.href,
        imageClassName: E.appIcon,
        width: 48,
        height: 48
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: n.name
        }), (0, r.jsxs)("div", {
          className: E.subInfo,
          children: [(0, r.jsxs)(a.Heading, {
            variant: "heading-md/normal",
            className: E.subInfoType,
            children: [(0, r.jsx)(T, {
              size: "xs",
              color: "currentColor"
            }), " ", C]
          }), null != N && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              children: "•"
            }), (0, r.jsxs)("span", {
              className: E.guildSubscription,
              children: [(0, r.jsx)(u.Z, {
                guild: N,
                size: u.Z.Sizes.SMOL
              }), (0, r.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: g.intl.format(g.t["7ZD8p1"], {
                  guildName: N.name
                })
              })]
            })]
          })]
        })]
      })]
    }), (0, r.jsx)(l.Z, {
      children: e => (0, r.jsxs)("div", {
        className: E.planNotice,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          children: g.intl.string(g.t["goe+hk"])
        }), e && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: g.intl.format(g.t["Q8qJ+5"], {})
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            children: g.intl.format(g.t.sqowYz, {})
          })]
        }), (0, r.jsx)(l.Z.Toggle, {
          text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY)
        })]
      })
    }), (0, r.jsxs)("div", {
      className: E.subscriptions,
      children: [(0, r.jsx)(c.Z, {
        storeListing: _,
        className: E.activeSubscriptionCard,
        cta: (0, r.jsxs)("div", {
          className: E.activeSubscriptionCTA,
          children: [(0, r.jsx)(a.Text, {
            variant: "eyebrow",
            color: "text-brand",
            children: g.intl.string(g.t.fHIpOY)
          }), null != P && (0, r.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: g.intl.format(g.t["OQk+jr"], {
              endDate: R
            })
          })]
        })
      }), h.map(e => e.skuId === v ? (0, r.jsx)(c.Z, {
        storeListing: e,
        cta: (0, r.jsx)(a.Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: g.intl.format(g.t.nn88hB, {
            startDate: R
          })
        })
      }, e.id) : (0, r.jsx)(y, {
        storeListing: e,
        guildId: A,
        navigateToHome: b
      }, e.id))]
    })]
  })
}

function y(e) {
  let {
    storeListing: t,
    guildId: n,
    navigateToHome: i
  } = e, {
    openModal: a
  } = (0, _.Z)({
    analyticsLocation: h.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
    skuId: t.skuId,
    initialSubscribeForGuild: n,
    disableGuildSelector: true,
    onComplete: i
  });
  return (0, r.jsx)(c.Z, {
    storeListing: t,
    cta: (0, r.jsx)(o.zxk, {
      variant: "primary",
      size: "sm",
      text: g.intl.string(g.t["+KwmBt"]),
      onClick: a
    })
  })
}
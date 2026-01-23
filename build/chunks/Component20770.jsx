/** Chunk was on web.js **/
/** chunk id: 20770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./938796.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk943775 = require("./943775.js"),
  Chunk147441 = require("./147441.jsx"),
  Chunk511968 = require("./511968.jsx"),
  Chunk263063 = require("./263063.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk67480 = require("./67480.js"),
  Chunk163437 = require("./163437.js"),
  Chunk185438 = require("./185438.js"),
  Chunk572566 = require("./572566.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk551934 = require("./551934.js");

function y(e) {
  var t;
  let {
    app: n,
    currentSubscription: a,
    currentListing: _,
    alternativeListings: m,
    navigateToHome: y,
    subscriptionGroup: O,
    renewalSkuId: v
  } = e, A = (0, o.A)(n, 100), I = (0, p.PJ)(O.flags), S = I ? s.RR9 : s.nys, T = I ? g.intl.string(g.t["46YF2D"]) : g.intl.string(g.t.fFyGiA), C = null == (t = a.metadata) ? true : t.application_subscription_guild_id, N = (0, i.bG)([d.A], () => I && null != C ? d.A.getGuild(C) : true, [C, I]), w = (0, i.bG)([f.A], () => {
    if (null != v) return f.A.get(v)
  }, [v]), R = (0, h.Y)(a.currentPeriodEnd);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: E.wx,
      children: [null != A && (0, r.jsx)(s._V3, {
        src: A.href,
        imageClassName: E.Z2,
        width: 48,
        height: 48
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: n.name
        }), (0, r.jsxs)("div", {
          className: E.p4,
          children: [(0, r.jsxs)(s.Heading, {
            variant: "heading-md/normal",
            className: E.N4,
            children: [(0, r.jsx)(S, {
              size: "xs",
              color: "currentColor"
            }), " ", T]
          }), null != N && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: "•"
            }), (0, r.jsxs)("span", {
              className: E.vP,
              children: [(0, r.jsx)(u.A, {
                guild: N,
                size: u.A.Sizes.SMOL
              }), (0, r.jsx)(s.Heading, {
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
    }), (0, r.jsx)(l.A, {
      children: e => (0, r.jsxs)("div", {
        className: E._B,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          children: g.intl.string(g.t["goe+hk"])
        }), e && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            children: g.intl.format(g.t["Q8qJ+5"], {})
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            children: g.intl.format(g.t.sqowYz, {})
          })]
        }), (0, r.jsx)(l.A.Toggle, {
          text: e ? g.intl.string(g.t["1Rkq/E"]) : g.intl.string(g.t.WsTHkY)
        })]
      })
    }), (0, r.jsxs)("div", {
      className: E.x0,
      children: [(0, r.jsx)(c.A, {
        storeListing: _,
        className: E.o3,
        cta: (0, r.jsxs)("div", {
          className: E.cJ,
          children: [(0, r.jsx)(s.Text, {
            variant: "eyebrow",
            color: "text-brand",
            children: g.intl.string(g.t.fHIpOY)
          }), null != w && (0, r.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: g.intl.format(g.t["OQk+jr"], {
              endDate: R
            })
          })]
        })
      }), m.map(e => e.skuId === v ? (0, r.jsx)(c.A, {
        storeListing: e,
        cta: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: g.intl.format(g.t.nn88hB, {
            startDate: R
          })
        })
      }, e.id) : (0, r.jsx)(b, {
        storeListing: e,
        guildId: C,
        navigateToHome: y
      }, e.id))]
    })]
  })
}

function b(e) {
  let {
    storeListing: t,
    guildId: n,
    navigateToHome: i
  } = e, {
    openModal: s
  } = (0, _.A)({
    analyticsLocation: m.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
    skuId: t.skuId,
    initialSubscribeForGuild: n,
    disableGuildSelector: true,
    onComplete: i
  });
  return (0, r.jsx)(c.A, {
    storeListing: t,
    cta: (0, r.jsx)(a.$nd, {
      variant: "primary",
      size: "sm",
      text: g.intl.string(g.t["+KwmBt"]),
      onClick: s
    })
  })
}
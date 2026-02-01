/** Chunk was on 9207 **/
/** chunk id: 20770, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  var t;
  let {
    app: n,
    currentSubscription: l,
    currentListing: m,
    alternativeListings: A,
    navigateToHome: h,
    subscriptionGroup: O,
    renewalSkuId: x
  } = e, C = (0, a.A)(n, 100), S = (0, p.PJ)(O.flags), T = S ? s.RR9 : s.nys, I = S ? f.intl.string(f.t["46YF2D"]) : f.intl.string(f.t.fFyGiA), N = null == (t = l.metadata) ? true : t.application_subscription_guild_id, y = (0, i.bG)([u.A], () => S && null != N ? u.A.getGuild(N) : true, [N, S]), j = (0, i.bG)([_.A], () => {
    if (null != x) return _.A.get(x)
  }, [x]), v = (0, g.Y)(l.currentPeriodEnd);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: b.wx,
      children: [null != C && (0, r.jsx)(s._V3, {
        src: C.href,
        imageClassName: b.Z2,
        width: 48,
        height: 48
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: n.name
        }), (0, r.jsxs)("div", {
          className: b.p4,
          children: [(0, r.jsxs)(s.Heading, {
            variant: "heading-md/normal",
            className: b.N4,
            children: [(0, r.jsx)(T, {
              size: "xs",
              color: "currentColor"
            }), " ", I]
          }), null != y && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: "•"
            }), (0, r.jsxs)("span", {
              className: b.vP,
              children: [(0, r.jsx)(d.A, {
                guild: y,
                size: d.A.Sizes.SMOL
              }), (0, r.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: f.intl.format(f.t["7ZD8p1"], {
                  guildName: y.name
                })
              })]
            })]
          })]
        })]
      })]
    }), (0, r.jsx)(o.A, {
      children: e => (0, r.jsxs)("div", {
        className: b._B,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          children: f.intl.string(f.t["goe+hk"])
        }), e && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            children: f.intl.format(f.t["Q8qJ+5"], {})
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            children: f.intl.format(f.t.sqowYz, {})
          })]
        }), (0, r.jsx)(o.A.Toggle, {
          text: e ? f.intl.string(f.t["1Rkq/E"]) : f.intl.string(f.t.WsTHkY)
        })]
      })
    }), (0, r.jsxs)("div", {
      className: b.x0,
      children: [(0, r.jsx)(c.A, {
        storeListing: m,
        className: b.o3,
        cta: (0, r.jsxs)("div", {
          className: b.cJ,
          children: [(0, r.jsx)(s.Text, {
            variant: "eyebrow",
            color: "text-brand",
            children: f.intl.string(f.t.fHIpOY)
          }), null != j && (0, r.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: f.intl.format(f.t["OQk+jr"], {
              endDate: v
            })
          })]
        })
      }), A.map(e => e.skuId === x ? (0, r.jsx)(c.A, {
        storeListing: e,
        cta: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: f.intl.format(f.t.nn88hB, {
            startDate: v
          })
        })
      }, e.id) : (0, r.jsx)(E, {
        storeListing: e,
        guildId: N,
        navigateToHome: h
      }, e.id))]
    })]
  })
}

function E(e) {
  let {
    storeListing: t,
    guildId: n,
    navigateToHome: i
  } = e, {
    openModal: s
  } = (0, m.A)({
    analyticsLocation: A.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
    skuId: t.skuId,
    initialSubscribeForGuild: n,
    disableGuildSelector: true,
    onComplete: i
  });
  return (0, r.jsx)(c.A, {
    storeListing: t,
    cta: (0, r.jsx)(l.$nd, {
      variant: "primary",
      size: "sm",
      text: f.intl.string(f.t["+KwmBt"]),
      onClick: s
    })
  })
}
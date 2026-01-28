/** Chunk was on 5606 **/
/** chunk id: 20770, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  var t;
  let {
    app: n,
    currentSubscription: l,
    currentListing: m,
    alternativeListings: f,
    navigateToHome: A,
    subscriptionGroup: x,
    renewalSkuId: O
  } = e, C = (0, a.A)(n, 100), y = (0, _.PJ)(x.flags), j = y ? s.RR9 : s.nys, T = y ? b.intl.string(b.t["46YF2D"]) : b.intl.string(b.t.fFyGiA), v = null == (t = l.metadata) ? true : t.application_subscription_guild_id, S = (0, i.bG)([u.A], () => y && null != v ? u.A.getGuild(v) : true, [v, y]), I = (0, i.bG)([p.A], () => {
    if (null != O) return p.A.get(O)
  }, [O]), N = (0, g.Y)(l.currentPeriodEnd);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: h.wx,
      children: [null != C && (0, r.jsx)(s._V3, {
        src: C.href,
        imageClassName: h.Z2,
        width: 48,
        height: 48
      }), (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: n.name
        }), (0, r.jsxs)("div", {
          className: h.p4,
          children: [(0, r.jsxs)(s.Heading, {
            variant: "heading-md/normal",
            className: h.N4,
            children: [(0, r.jsx)(j, {
              size: "xs",
              color: "currentColor"
            }), " ", T]
          }), null != S && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              children: "•"
            }), (0, r.jsxs)("span", {
              className: h.vP,
              children: [(0, r.jsx)(d.A, {
                guild: S,
                size: d.A.Sizes.SMOL
              }), (0, r.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: b.intl.format(b.t["7ZD8p1"], {
                  guildName: S.name
                })
              })]
            })]
          })]
        })]
      })]
    }), (0, r.jsx)(o.A, {
      children: e => (0, r.jsxs)("div", {
        className: h._B,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/normal",
          children: b.intl.string(b.t["goe+hk"])
        }), e && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            children: b.intl.format(b.t["Q8qJ+5"], {})
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/normal",
            children: b.intl.format(b.t.sqowYz, {})
          })]
        }), (0, r.jsx)(o.A.Toggle, {
          text: e ? b.intl.string(b.t["1Rkq/E"]) : b.intl.string(b.t.WsTHkY)
        })]
      })
    }), (0, r.jsxs)("div", {
      className: h.x0,
      children: [(0, r.jsx)(c.A, {
        storeListing: m,
        className: h.o3,
        cta: (0, r.jsxs)("div", {
          className: h.cJ,
          children: [(0, r.jsx)(s.Text, {
            variant: "eyebrow",
            color: "text-brand",
            children: b.intl.string(b.t.fHIpOY)
          }), null != I && (0, r.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: b.intl.format(b.t["OQk+jr"], {
              endDate: N
            })
          })]
        })
      }), f.map(e => e.skuId === O ? (0, r.jsx)(c.A, {
        storeListing: e,
        cta: (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-subtle",
          children: b.intl.format(b.t.nn88hB, {
            startDate: N
          })
        })
      }, e.id) : (0, r.jsx)(E, {
        storeListing: e,
        guildId: v,
        navigateToHome: A
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
    analyticsLocation: f.ThZ.APP_SUBSCRIPTIONS_MANAGEMENT,
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
      text: b.intl.string(b.t["+KwmBt"]),
      onClick: s
    })
  })
}
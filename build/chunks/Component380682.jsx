/** Chunk was on 47841 **/
/** chunk id: 380682, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => M
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk44892 = require("./44892.jsx"),
  Chunk833448 = require("./833448.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk529942 = require("./529942.js"),
  Chunk209700 = require("./209700.js"),
  Chunk976860 = require("./976860.js"),
  Chunk130771 = require("./130771.js"),
  Chunk260509 = require("./260509.js"),
  Chunk317525 = require("./317525.js"),
  Chunk287809 = require("./287809.js"),
  Chunk403362 = require("./403362.js"),
  Chunk300233 = require("./300233.jsx"),
  Chunk599941 = require("./599941.js"),
  Chunk11351 = require("./11351.js"),
  Chunk739455 = require("./739455.js"),
  Chunk535876 = require("./535876.js"),
  Chunk299824 = require("./299824.jsx"),
  Chunk859016 = require("./859016.jsx"),
  Chunk623529 = require("./623529.jsx"),
  Chunk328031 = require("./328031.jsx"),
  Chunk646296 = require("./646296.jsx"),
  Chunk700458 = require("./700458.jsx"),
  Chunk159719 = require("./159719.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk269927 = require("./269927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk782356 = require("./782356.js");

function L(e) {
  let {
    application: t,
    guild: n
  } = e, l = (0, _.Tq)(n.id), s = (0, _.uP)(n.id), a = s.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), o = (0, i.yK)([b.A], () => s.map(e => b.A.getRole(n.id, e.role_id)), [n.id, s]).some(e => null != e && 0 !== e.color), c = s.some(e => e.role_benefits.benefits.length > 0), d = null != t && n.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED), u = [{
    title: D.intl.string(D.t.p2Rsdl),
    items: [{
      description: D.intl.string(D.t.zbO7fU),
      completed: d
    }]
  }, {
    title: D.intl.string(D.t["/CfKoD"]),
    items: [{
      description: D.intl.string(D.t.zvuI3S),
      completed: true
    }, {
      description: D.intl.string(D.t.cVcEYK),
      completed: (null == l ? true : l.description) != null && "" !== l.description
    }, {
      description: D.intl.string(D.t["88XnXE"]),
      completed: (null == l ? true : l.cover_image_asset) != null
    }]
  }, {
    title: D.intl.string(D.t.pXbGYc),
    items: [{
      description: D.intl.string(D.t.pCxWKL),
      completed: a
    }, {
      description: D.intl.string(D.t["+amv5Z"]),
      completed: o
    }, {
      description: D.intl.string(D.t["/P03C6"]),
      completed: c
    }]
  }];
  return (0, r.jsx)(S.A, {
    children: u
  })
}

function k(e) {
  let {
    application: t
  } = e, {
    teams: n
  } = (0, p.A)({
    refreshOnDepChange: false
  }), i = n.find(e => {
    var n;
    return e.id === (null == t || null == (n = t.team) ? true : n.id)
  }), l = [R.y.ACTION_REQUIRED, R.y.BLOCKED, R.y.SUSPENDED];
  return (null == i ? true : i.payout_account_status) != null && l.includes(null == i ? true : i.payout_account_status) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.hKd, {
      size: 16
    }), (0, r.jsx)(s.wx6, {
      type: "warning",
      children: D.intl.format(D.t.Yo0ZB2, {
        url: P.X7G.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id)
      })
    }), (0, r.jsx)(s.hKd, {
      size: 16
    })]
  }) : null
}

function M(e) {
  let t, {
      guild: n,
      application: l
    } = e,
    s = (0, i.bG)([d.A], () => d.A.getProps().subsection),
    a = null != l && n.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED);
  return (0, o.T)(n), t = a ? s === P.nd0.ROLE_SUBSCRIPTION_EMOJI ? T.Oi.EMOJIS : T.Oi.TIERS : T.Oi.PAYMENT, (0, r.jsx)(j.H, {
    guildId: n.id,
    refetchOnMount: true,
    children: (0, r.jsx)(O.p6, {
      guildId: n.id,
      children: (0, r.jsx)(T.ZM, {
        initialTab: t,
        children: (0, r.jsx)(U, {
          guild: n,
          application: l
        })
      })
    })
  })
}

function U(e) {
  let t, {
      guild: n,
      application: o
    } = e,
    d = null != o && n.features.has(P.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED),
    {
      currentTab: p,
      setCurrentTab: _
    } = (0, T.Tj)(),
    O = (0, j.X)(),
    S = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
    R = (0, y.A)(n.id),
    M = null != n && (0, f.bM)(n, S);
  if (!O) return (0, r.jsx)(s.y$y, {});
  switch (p) {
    case T.Oi.BASIC_INFO:
      t = (0, r.jsx)(N.A, {
        guild: n
      });
      break;
    case T.Oi.TIERS:
      t = (0, r.jsx)(I.A, {
        guildId: n.id
      });
      break;
    case T.Oi.PAYMENT:
      t = (0, r.jsx)(E.A, {
        guild: n
      });
      break;
    case T.Oi.EMOJIS:
      t = (0, r.jsx)(C.A, {
        guild: n
      });
      break;
    default:
      (0, x.xb)(p)
  }
  return (0, r.jsxs)("div", {
    className: G.kL,
    children: [(0, r.jsxs)("div", {
      className: G.rb,
      children: [(0, r.jsxs)(s.BJc, {
        gap: 8,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          children: D.intl.string(D.t["KzCF/6"])
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: D.intl.string(D.t.KyGv0k)
        })]
      }), (0, r.jsx)(A.A, {
        guild: n
      }), d && (0, r.jsx)(k, {
        application: o
      }), (0, r.jsxs)("div", {
        className: G.Mv,
        children: [(0, r.jsxs)(s.VQ0, {
          className: G.$H,
          "aria-label": D.intl.string(D.t["+1H47t"]),
          selectedItem: p,
          type: "top",
          look: "brand",
          onItemSelect: _,
          children: [(0, r.jsx)(a.A, {
            id: T.Oi.BASIC_INFO,
            disabledTooltip: D.intl.string(D.t.NVDuUX),
            disabled: !d,
            children: D.intl.string(D.t["/CfKoD"])
          }), (0, r.jsx)(a.A, {
            id: T.Oi.TIERS,
            disabledTooltip: D.intl.string(D.t.NVDuUX),
            disabled: !d,
            children: D.intl.string(D.t.pXbGYc)
          }), (0, r.jsx)(a.A, {
            id: T.Oi.EMOJIS,
            disabledTooltip: D.intl.string(D.t.NVDuUX),
            disabled: !d,
            children: D.intl.string(D.t.XBkDoA)
          }), M ? (0, r.jsx)(s.VQ0.Item, {
            className: G.__invalid_tabBarItem,
            id: T.Oi.PAYMENT,
            children: D.intl.string(D.t.p2Rsdl)
          }) : null]
        }), d && (0, r.jsx)("div", {
          className: G.jc,
          children: (0, r.jsx)(l.m, {
            text: D.intl.string(D.t["1wCH4M"]),
            children: (0, r.jsx)(s.Button, {
              disabled: R,
              onClick: () => {
                let e = b.A.getEveryoneRole(n);
                c.A.close();
                let t = {
                  [e.id]: e
                };
                (0, u.Tk)(n.id, {
                  type: g._.SERVER_SHOP,
                  roles: t,
                  initialTab: "role_subscriptions",
                  returnToSection: P.BEX.ROLE_SUBSCRIPTIONS
                }), (0, v.SY)(n.id), (0, m.pX)(P.BVt.CHANNEL(n.id, w.VV.ROLE_SUBSCRIPTIONS))
              },
              text: D.intl.string(D.t.vM81yY),
              size: "sm",
              variant: "secondary"
            })
          })
        })]
      }), t]
    }), (0, r.jsx)(L, {
      application: o,
      guild: n
    })]
  })
}
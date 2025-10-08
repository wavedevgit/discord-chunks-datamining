/** Chunk was on 29679 **/
/** chunk id: 618748, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk204875 = require("./204875.jsx"),
  Chunk715796 = require("./715796.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk962086 = require("./962086.js"),
  Chunk225675 = require("./225675.js"),
  Chunk703656 = require("./703656.js"),
  Chunk577275 = require("./577275.js"),
  Chunk601964 = require("./601964.js"),
  Chunk485386 = require("./485386.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk730647 = require("./730647.jsx"),
  Chunk584825 = require("./584825.js"),
  Chunk723047 = require("./723047.js"),
  Chunk303737 = require("./303737.js"),
  Chunk568074 = require("./568074.js"),
  Chunk411667 = require("./411667.jsx"),
  Chunk903773 = require("./903773.jsx"),
  Chunk822531 = require("./822531.jsx"),
  Chunk909656 = require("./909656.jsx"),
  Chunk210591 = require("./210591.jsx"),
  Chunk927731 = require("./927731.jsx"),
  Chunk798680 = require("./798680.jsx"),
  Chunk509026 = require("./509026.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990108 = require("./990108.js");

function k(e) {
  let {
    application: t,
    guild: n
  } = e, l = (0, _.YB)(n.id), s = (0, _.qi)(n.id), a = s.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), o = (0, i.Wu)([h.Z], () => s.map(e => h.Z.getRole(n.id, e.role_id)), [n.id, s]).some(e => null != e && 0 !== e.color), c = s.some(e => e.role_benefits.benefits.length > 0), d = null != t && n.features.has(Z.oNc.ROLE_SUBSCRIPTIONS_ENABLED), u = [{
    title: A.intl.string(A.t.p2Rsdn),
    items: [{
      description: A.intl.string(A.t.zbO7fX),
      completed: d
    }]
  }, {
    title: A.intl.string(A.t["/CfKoK"]),
    items: [{
      description: A.intl.string(A.t.zvuI3d),
      completed: true
    }, {
      description: A.intl.string(A.t.cVcEYG),
      completed: (null == l ? true : l.description) != null && "" !== l.description
    }, {
      description: A.intl.string(A.t["88XnXF"]),
      completed: (null == l ? true : l.cover_image_asset) != null
    }]
  }, {
    title: A.intl.string(A.t.pXbGYW),
    items: [{
      description: A.intl.string(A.t.pCxWKC),
      completed: a
    }, {
      description: A.intl.string(A.t["+amv5e"]),
      completed: o
    }, {
      description: A.intl.string(A.t["/P03Cw"]),
      completed: c
    }]
  }];
  return (0, r.jsx)(S.Z, {
    children: u
  })
}

function G(e) {
  let {
    application: t
  } = e, {
    teams: n
  } = (0, p.Z)({
    refreshOnDepChange: false
  }), i = n.find(e => {
    var n;
    return e.id === (null == t || null == (n = t.team) ? true : n.id)
  }), l = [D.C.ACTION_REQUIRED, D.C.BLOCKED, D.C.SUSPENDED];
  return (null == i ? true : i.payout_account_status) != null && l.includes(null == i ? true : i.payout_account_status) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.LZC, {
      size: 16
    }), (0, r.jsx)(N.Z, {
      children: A.intl.format(A.t.Yo0ZBw, {
        url: Z.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id)
      })
    }), (0, r.jsx)(s.LZC, {
      size: 16
    })]
  }) : null
}

function M(e) {
  let t, {
      guild: n,
      application: l
    } = e,
    s = (0, i.e7)([d.Z], () => d.Z.getProps().subsection),
    a = null != l && n.features.has(Z.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
  return (0, o.P)(n), t = a ? s === Z.KsC.ROLE_SUBSCRIPTION_EMOJI ? P.ue.EMOJIS : P.ue.TIERS : P.ue.PAYMENT, (0, r.jsx)(j.l, {
    guildId: n.id,
    refetchOnMount: true,
    children: (0, r.jsx)(v.in, {
      guildId: n.id,
      children: (0, r.jsx)(P.M7, {
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
    d = null != o && n.features.has(Z.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
    {
      currentTab: p,
      setCurrentTab: _
    } = (0, P.dw)(),
    v = (0, j.f)(),
    N = (0, i.e7)([x.default], () => x.default.getCurrentUser()),
    S = (0, O.Z)(n.id),
    D = null != n && (0, f.eM)(n, N);
  if (!v) return (0, r.jsx)(s.$jN, {});
  switch (p) {
    case P.ue.BASIC_INFO:
      t = (0, r.jsx)(I.Z, {
        guild: n
      });
      break;
    case P.ue.TIERS:
      t = (0, r.jsx)(T.Z, {
        guildId: n.id
      });
      break;
    case P.ue.PAYMENT:
      t = (0, r.jsx)(E.Z, {
        guild: n
      });
      break;
    case P.ue.EMOJIS:
      t = (0, r.jsx)(w.Z, {
        guild: n
      });
      break;
    default:
      (0, b.vE)(p)
  }
  return (0, r.jsxs)("div", {
    className: L.container,
    children: [(0, r.jsxs)("div", {
      className: L.mainContent,
      children: [(0, r.jsx)(s.vwX, {
        tag: "h1",
        children: A.intl.string(A.t["KzCF//"])
      }), (0, r.jsx)(s.R94, {
        type: s.R94.Types.DESCRIPTION,
        children: A.intl.string(A.t.KyGv0t)
      }), (0, r.jsx)(y.Z, {
        guild: n
      }), d && (0, r.jsx)(G, {
        application: o
      }), (0, r.jsxs)("div", {
        className: L.tabBarContainer,
        children: [(0, r.jsxs)(s.njP, {
          className: L.tabBar,
          "aria-label": A.intl.string(A.t["+1H47u"]),
          selectedItem: p,
          type: "top",
          look: "brand",
          onItemSelect: _,
          children: [(0, r.jsx)(a.Z, {
            id: P.ue.BASIC_INFO,
            disabledTooltip: A.intl.string(A.t.NVDuUV),
            disabled: !d,
            children: A.intl.string(A.t["/CfKoK"])
          }), (0, r.jsx)(a.Z, {
            id: P.ue.TIERS,
            disabledTooltip: A.intl.string(A.t.NVDuUV),
            disabled: !d,
            children: A.intl.string(A.t.pXbGYW)
          }), (0, r.jsx)(a.Z, {
            id: P.ue.EMOJIS,
            disabledTooltip: A.intl.string(A.t.NVDuUV),
            disabled: !d,
            children: A.intl.string(A.t.XBkDoK)
          }), D ? (0, r.jsx)(s.njP.Item, {
            className: L.__invalid_tabBarItem,
            id: P.ue.PAYMENT,
            children: A.intl.string(A.t.p2Rsdn)
          }) : null]
        }), d && (0, r.jsx)("div", {
          className: L.previewButton,
          children: (0, r.jsx)(l.u, {
            text: A.intl.string(A.t["1wCH4O"]),
            children: (0, r.jsx)(s.zxk, {
              disabled: S,
              onClick: () => {
                let e = h.Z.getEveryoneRole(n);
                c.Z.close();
                let t = {
                  [e.id]: e
                };
                (0, u.iD)(n.id, {
                  type: g.z.SERVER_SHOP,
                  roles: t,
                  initialTab: "role_subscriptions",
                  returnToSection: Z.pNK.ROLE_SUBSCRIPTIONS
                }), (0, C.be)(n.id), (0, m.uL)(Z.Z5c.CHANNEL(n.id, R.oC.ROLE_SUBSCRIPTIONS))
              },
              text: A.intl.string(A.t.vM81yc),
              size: "sm",
              variant: "secondary"
            })
          })
        })]
      }), t]
    }), (0, r.jsx)(k, {
      application: o,
      guild: n
    })]
  })
}
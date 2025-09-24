/** Chunk was on 21376 **/
/** chunk id: 618748, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
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
  Chunk459560 = require("./459560.js");

function L(e) {
  let {
    application: t,
    guild: n
  } = e, l = (0, j.YB)(n.id), s = (0, j.qi)(n.id), a = s.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), o = (0, i.Wu)([f.Z], () => s.map(e => f.Z.getRole(n.id, e.role_id)), [n.id, s]).some(e => null != e && 0 !== e.color), c = s.some(e => e.role_benefits.benefits.length > 0), d = null != t && n.features.has(w.oNc.ROLE_SUBSCRIPTIONS_ENABLED), u = [{
    title: Z.intl.string(Z.t.p2Rsdn),
    items: [{
      description: Z.intl.string(Z.t.zbO7fX),
      completed: d
    }]
  }, {
    title: Z.intl.string(Z.t["/CfKoK"]),
    items: [{
      description: Z.intl.string(Z.t.zvuI3d),
      completed: true
    }, {
      description: Z.intl.string(Z.t.cVcEYG),
      completed: (null == l ? true : l.description) != null && "" !== l.description
    }, {
      description: Z.intl.string(Z.t["88XnXF"]),
      completed: (null == l ? true : l.cover_image_asset) != null
    }]
  }, {
    title: Z.intl.string(Z.t.pXbGYW),
    items: [{
      description: Z.intl.string(Z.t.pCxWKC),
      completed: a
    }, {
      description: Z.intl.string(Z.t["+amv5e"]),
      completed: o
    }, {
      description: Z.intl.string(Z.t["/P03Cw"]),
      completed: c
    }]
  }];
  return (0, r.jsx)(I.Z, {
    children: u
  })
}

function k(e) {
  let {
    application: t
  } = e, {
    teams: n
  } = (0, g.Z)({
    refreshOnDepChange: false
  }), i = n.find(e => {
    var n;
    return e.id === (null == t || null == (n = t.team) ? true : n.id)
  }), s = [D.C.ACTION_REQUIRED, D.C.BLOCKED, D.C.SUSPENDED];
  return (null == i ? true : i.payout_account_status) != null && s.includes(null == i ? true : i.payout_account_status) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.LZC, {
      size: 16
    }), (0, r.jsx)(C.Z, {
      children: Z.intl.format(Z.t.Yo0ZBw, {
        url: w.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i.id)
      })
    }), (0, r.jsx)(l.LZC, {
      size: 16
    })]
  }) : null
}

function G(e) {
  let t, {
      guild: n,
      application: l
    } = e,
    s = (0, i.e7)([c.Z], () => c.Z.getProps().subsection),
    o = null != l && n.features.has(w.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
  return (0, a.P)(n), t = o ? s === w.KsC.ROLE_SUBSCRIPTION_EMOJI ? T.ue.EMOJIS : T.ue.TIERS : T.ue.PAYMENT, (0, r.jsx)(x.l, {
    guildId: n.id,
    refetchOnMount: true,
    children: (0, r.jsx)(v.in, {
      guildId: n.id,
      children: (0, r.jsx)(T.M7, {
        initialTab: t,
        children: (0, r.jsx)(M, {
          guild: n,
          application: l
        })
      })
    })
  })
}

function M(e) {
  let t, {
      guild: n,
      application: a
    } = e,
    c = null != a && n.features.has(w.oNc.ROLE_SUBSCRIPTIONS_ENABLED),
    {
      currentTab: g,
      setCurrentTab: j
    } = (0, T.dw)(),
    v = (0, x.f)(),
    C = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
    I = (0, O.Z)(n.id),
    D = null != n && (0, p.eM)(n, C),
    G = () => {
      let e = f.Z.getEveryoneRole(n);
      o.Z.close();
      let t = {
        [e.id]: e
      };
      (0, d.iD)(n.id, {
        type: u.z.SERVER_SHOP,
        roles: t,
        initialTab: "role_subscriptions",
        returnToSection: w.pNK.ROLE_SUBSCRIPTIONS
      }), (0, _.be)(n.id), (0, m.uL)(w.Z5c.CHANNEL(n.id, R.oC.ROLE_SUBSCRIPTIONS))
    };
  if (!v) return (0, r.jsx)(l.$jN, {});
  switch (g) {
    case T.ue.BASIC_INFO:
      t = (0, r.jsx)(E.Z, {
        guild: n
      });
      break;
    case T.ue.TIERS:
      t = (0, r.jsx)(S.Z, {
        guildId: n.id
      });
      break;
    case T.ue.PAYMENT:
      t = (0, r.jsx)(N.Z, {
        guild: n
      });
      break;
    case T.ue.EMOJIS:
      t = (0, r.jsx)(P.Z, {
        guild: n
      });
      break;
    default:
      (0, b.vE)(g)
  }
  return (0, r.jsxs)("div", {
    className: A.container,
    children: [(0, r.jsxs)("div", {
      className: A.mainContent,
      children: [(0, r.jsx)(l.vwX, {
        tag: "h1",
        children: Z.intl.string(Z.t["KzCF//"])
      }), (0, r.jsx)(l.R94, {
        type: l.R94.Types.DESCRIPTION,
        children: Z.intl.string(Z.t.KyGv0t)
      }), (0, r.jsx)(y.Z, {
        guild: n
      }), c && (0, r.jsx)(k, {
        application: a
      }), (0, r.jsxs)("div", {
        className: A.tabBarContainer,
        children: [(0, r.jsxs)(l.njP, {
          className: A.tabBar,
          "aria-label": Z.intl.string(Z.t["+1H47u"]),
          selectedItem: g,
          type: "top",
          look: "brand",
          onItemSelect: j,
          children: [(0, r.jsx)(s.Z, {
            id: T.ue.BASIC_INFO,
            disabledTooltip: Z.intl.string(Z.t.NVDuUV),
            disabled: !c,
            children: Z.intl.string(Z.t["/CfKoK"])
          }), (0, r.jsx)(s.Z, {
            id: T.ue.TIERS,
            disabledTooltip: Z.intl.string(Z.t.NVDuUV),
            disabled: !c,
            children: Z.intl.string(Z.t.pXbGYW)
          }), (0, r.jsx)(s.Z, {
            id: T.ue.EMOJIS,
            disabledTooltip: Z.intl.string(Z.t.NVDuUV),
            disabled: !c,
            children: Z.intl.string(Z.t.XBkDoK)
          }), D ? (0, r.jsx)(l.njP.Item, {
            className: A.__invalid_tabBarItem,
            id: T.ue.PAYMENT,
            children: Z.intl.string(Z.t.p2Rsdn)
          }) : null]
        }), c && (0, r.jsx)("div", {
          className: A.previewButton,
          children: (0, r.jsx)(l.ua7, {
            text: Z.intl.string(Z.t["1wCH4O"]),
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, r.jsx)(l.zxk, {
                disabled: I,
                onMouseEnter: I ? t : true,
                onMouseLeave: I ? n : true,
                onClick: G,
                text: Z.intl.string(Z.t.vM81yc),
                size: "sm",
                variant: "secondary"
              })
            }
          })
        })]
      }), t]
    }), (0, r.jsx)(L, {
      application: a,
      guild: n
    })]
  })
}
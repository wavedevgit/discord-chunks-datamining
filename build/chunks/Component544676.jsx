/** Chunk was on 54469 **/
/** chunk id: 544676, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk359047 = require("./359047.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk36942 = require("./36942.jsx"),
  Chunk260509 = require("./260509.js"),
  Chunk961350 = require("./961350.js"),
  Chunk287809 = require("./287809.js"),
  Chunk346247 = require("./346247.jsx"),
  Chunk810263 = require("./810263.jsx"),
  Chunk911612 = require("./911612.jsx"),
  Chunk664967 = require("./664967.jsx"),
  Chunk834265 = require("./834265.jsx"),
  Chunk507238 = require("./507238.jsx"),
  Chunk881136 = require("./881136.jsx"),
  Chunk813597 = require("./813597.jsx"),
  Chunk21605 = require("./21605.jsx"),
  Chunk684509 = require("./684509.jsx"),
  Chunk153594 = require("./153594.jsx"),
  Chunk531335 = require("./531335.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function P(e) {
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

function M(e, t) {
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

function w(e) {
  let {
    guild: t,
    onSelect: r,
    hideSettings: c
  } = e, u = t.id, w = (0, l.bG)([h.default], () => {
    let e = h.default.getCurrentUser();
    return s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, b.bM)(t, e)
  }, [t]), I = (0, G.A)({
    guild: t,
    source: x.PE1.GUILD_CONTEXT_MENU,
    channel: null
  }), T = (0, L.A)(u), R = (0, _.A)(t), k = (0, j.A)(t), U = (0, m.A)(t), C = (0, y.A)({
    guildId: t.id,
    userId: A.default.getId(),
    analyticsLocation: {
      page: x.liQ.GUILD_CHANNEL,
      section: x.JJy.CHAT_USERNAME,
      object: x.ZSU.CONTEXT_MENU_ITEM
    }
  }), V = (0, f.A)(t), B = (0, d.A)(t.id), X = (0, O.A)(t), Y = (0, S.A)(t, {
    section: x.JJy.GUILD_LIST
  }), H = (0, p.A)(t.id), F = (0, N.A)(t.id), W = (0, E.A)(t), J = (0, g.os)("GuildContextMenu"), Q = (0, v.c)(t);

  function Z() {
    (0, a.mMO)(async () => {
      let {
        default: e
      } = await n.e("53485").then(n.bind(n, 20508));
      return n => (0, i.jsx)(e, M(P({}, n), {
        guild: t
      }))
    })
  }
  return t.features.has(x.GuildFeatures.HUB) ? (0, i.jsxs)(a.W1t, {
    "data-menu-needs-migration": true,
    navId: "guild-context",
    onClose: o.Z_,
    "aria-label": D.intl.string(D.t.HpQykc),
    onSelect: r,
    children: [(0, i.jsxs)(a.rXV, {
      children: [I, (0, i.jsx)(a.Drp, {
        id: "privacy",
        label: D.intl.string(D.t.IlFwwR),
        action: () => (0, a.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("54809"), n.e("38939"), n.e("94700"), n.e("62175"), n.e("97283"), n.e("2292"), n.e("45586"), n.e("62733"), n.e("83518"), n.e("22726"), n.e("6500"), n.e("52199"), n.e("34749"), n.e("44667"), n.e("7803"), n.e("84704"), n.e("67646"), n.e("5606"), n.e("72450"), n.e("23367"), n.e("60449"), n.e("54146")]).then(n.bind(n, 585265));
          return n => (0, i.jsx)(e, M(P({}, n), {
            guild: t
          }))
        })
      }), C]
    }), w ? null : (0, i.jsx)(a.rXV, {
      children: (0, i.jsx)(a.Drp, {
        id: "leave-guild",
        label: D.intl.string(D.t.Dv8gFT),
        action: Z,
        color: "danger"
      })
    }), (0, i.jsx)(a.rXV, {
      children: X
    })]
  }) : (0, i.jsxs)(a.W1t, {
    "data-menu-needs-migration": true,
    navId: "guild-context",
    onClose: o.Z_,
    "aria-label": D.intl.string(D.t.HpQykc),
    onSelect: r,
    children: [(0, i.jsx)(a.rXV, {
      children: Y
    }), (0, i.jsx)(a.rXV, {
      children: I
    }), (0, i.jsxs)(a.rXV, {
      children: [R, J || __OVERLAY__ ? null : k, J && !__OVERLAY__ ? F : null, T, H]
    }), (0, i.jsxs)(a.rXV, {
      children: [c ? null : U, __OVERLAY__ ? null : (0, i.jsx)(a.Drp, {
        id: "privacy",
        label: D.intl.string(D.t.BayiAo),
        action: () => (0, a.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("54809"), n.e("38939"), n.e("94700"), n.e("62175"), n.e("97283"), n.e("2292"), n.e("45586"), n.e("62733"), n.e("83518"), n.e("22726"), n.e("6500"), n.e("52199"), n.e("34749"), n.e("44667"), n.e("7803"), n.e("84704"), n.e("67646"), n.e("5606"), n.e("72450"), n.e("23367"), n.e("60449"), n.e("54146")]).then(n.bind(n, 585265));
          return n => (0, i.jsx)(e, M(P({}, n), {
            guild: t
          }))
        })
      }), C]
    }), (0, i.jsxs)(a.rXV, {
      children: [V, B]
    }), (0, i.jsxs)(a.rXV, {
      children: [W, !w && (0, i.jsx)(a.Drp, {
        id: "leave-guild",
        label: D.intl.string(D.t.J2TBi3),
        action: Z,
        color: "danger"
      })]
    }), (0, i.jsx)(a.rXV, {
      children: Q
    }), (0, i.jsx)(a.rXV, {
      children: X
    })]
  })
}

function I(e) {
  let {
    analyticsLocations: t
  } = (0, u.Ay)(c.A.CONTEXT_MENU);
  return (0, i.jsx)(u.f5, {
    value: t,
    children: (0, i.jsx)(w, P({}, e))
  })
}
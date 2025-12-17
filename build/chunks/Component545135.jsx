/** Chunk was on 33213 **/
/** chunk id: 545135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk894059 = require("./894059.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk837949 = require("./837949.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk314897 = require("./314897.js"),
  Chunk594174 = require("./594174.js"),
  Chunk976192 = require("./976192.jsx"),
  Chunk518858 = require("./518858.jsx"),
  Chunk904483 = require("./904483.jsx"),
  Chunk429824 = require("./429824.jsx"),
  Chunk919815 = require("./919815.jsx"),
  Chunk858822 = require("./858822.jsx"),
  Chunk993356 = require("./993356.jsx"),
  Chunk58338 = require("./58338.jsx"),
  Chunk930538 = require("./930538.jsx"),
  Chunk422525 = require("./422525.jsx"),
  Chunk522762 = require("./522762.jsx"),
  Chunk466330 = require("./466330.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function k(e) {
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

function G(e, t) {
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

function M(e) {
  let {
    guild: t,
    onSelect: r,
    hideSettings: o
  } = e, u = t.id, M = (0, l.e7)([h.default], () => {
    let e = h.default.getCurrentUser();
    return s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, p.eM)(t, e)
  }, [t]), D = (0, Z.Z)({
    guild: t,
    source: m.t4x.GUILD_CONTEXT_MENU,
    channel: null
  }), w = (0, A.Z)(u), I = (0, _.Z)(t), R = (0, N.Z)(t), U = (0, v.Z)(t), T = (0, f.Z)({
    guildId: t.id,
    userId: S.default.getId(),
    analyticsLocation: {
      page: m.ZY5.GUILD_CHANNEL,
      section: m.jXE.CHAT_USERNAME,
      object: m.qAy.CONTEXT_MENU_ITEM
    }
  }), C = (0, O.Z)(t), B = (0, d.Z)(t.id), Q = (0, E.Z)(t), Y = (0, j.Z)(t, {
    section: m.jXE.GUILD_LIST
  }), H = (0, b.Z)(t.id), V = (0, P.Z)(t.id), F = (0, y.Z)(t), q = (0, g.Mn)("GuildContextMenu"), J = (0, L.p)(t);

  function W() {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("53961").then(n.bind(n, 402979));
      return n => (0, i.jsx)(e, G(k({}, n), {
        guild: t
      }))
    })
  }
  return t.features.has(m.GuildFeatures.HUB) ? (0, i.jsxs)(a.v2r, {
    navId: "guild-context",
    onClose: c.Zy,
    "aria-label": x.intl.string(x.t.HpQykc),
    onSelect: r,
    children: [(0, i.jsxs)(a.kSQ, {
      children: [D, (0, i.jsx)(a.sNh, {
        id: "privacy",
        label: x.intl.string(x.t.IlFwwR),
        action: () => (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("86722").then(n.bind(n, 264333));
          return n => (0, i.jsx)(e, G(k({}, n), {
            guild: t
          }))
        })
      }), T]
    }), M ? null : (0, i.jsx)(a.kSQ, {
      children: (0, i.jsx)(a.sNh, {
        id: "leave-guild",
        label: x.intl.string(x.t.Dv8gFT),
        action: W,
        color: "danger"
      })
    }), (0, i.jsx)(a.kSQ, {
      children: Q
    })]
  }) : (0, i.jsxs)(a.v2r, {
    navId: "guild-context",
    onClose: c.Zy,
    "aria-label": x.intl.string(x.t.HpQykc),
    onSelect: r,
    children: [(0, i.jsx)(a.kSQ, {
      children: Y
    }), (0, i.jsx)(a.kSQ, {
      children: D
    }), (0, i.jsxs)(a.kSQ, {
      children: [I, q || __OVERLAY__ ? null : R, q && !__OVERLAY__ ? V : null, w, H]
    }), (0, i.jsxs)(a.kSQ, {
      children: [o ? null : U, __OVERLAY__ ? null : (0, i.jsx)(a.sNh, {
        id: "privacy",
        label: x.intl.string(x.t.BayiAo),
        action: () => (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("86722").then(n.bind(n, 264333));
          return n => (0, i.jsx)(e, G(k({}, n), {
            guild: t
          }))
        })
      }), T]
    }), (0, i.jsxs)(a.kSQ, {
      children: [C, B]
    }), (0, i.jsxs)(a.kSQ, {
      children: [F, !M && (0, i.jsx)(a.sNh, {
        id: "leave-guild",
        label: x.intl.string(x.t.J2TBi3),
        action: W,
        color: "danger"
      })]
    }), (0, i.jsx)(a.kSQ, {
      children: J
    }), (0, i.jsx)(a.kSQ, {
      children: Q
    })]
  })
}

function D(e) {
  let {
    analyticsLocations: t
  } = (0, u.ZP)(o.Z.CONTEXT_MENU);
  return (0, i.jsx)(u.Gt, {
    value: t,
    children: (0, i.jsx)(M, k({}, e))
  })
}
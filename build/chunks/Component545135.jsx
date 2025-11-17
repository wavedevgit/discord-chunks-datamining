/** Chunk was on 33213 **/
/** chunk id: 545135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk894059 = require("./894059.jsx"),
  Chunk340541 = require("./340541.js"),
  Chunk423589 = require("./423589.js"),
  Chunk837949 = require("./837949.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk314897 = require("./314897.js"),
  Chunk984933 = require("./984933.js"),
  Chunk594174 = require("./594174.js"),
  Chunk976192 = require("./976192.jsx"),
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

function D(e, t) {
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
    hideSettings: o
  } = e, u = t.id, w = E.ZP.getDefaultChannel(u), I = (0, b._k)({
    location: "guild_context_menu"
  }), R = (0, l.e7)([O.default], () => {
    let e = O.default.getCurrentUser();
    return s()(null != e, "GuildContextMenu: user cannot be undefined"), (0, h.eM)(t, e)
  }, [t]), T = (0, x.Z)({
    guild: t,
    source: M.t4x.GUILD_CONTEXT_MENU,
    channel: I.isGuildEntrypointEnabled ? null : w
  }), U = (0, m.Z)(u), C = (0, P.Z)(t), B = (0, L.Z)(t), Q = (0, Z.Z)(t), Y = (0, y.Z)({
    guildId: t.id,
    userId: f.default.getId(),
    analyticsLocation: {
      page: M.ZY5.GUILD_CHANNEL,
      section: M.jXE.CHAT_USERNAME,
      object: M.qAy.CONTEXT_MENU_ITEM
    }
  }), H = (0, j.Z)(t), V = (0, g.Z)(t.id), F = (0, d.Z)({
    id: t.id,
    label: G.intl.string(G.t["94lLD7"])
  }), q = (0, N.Z)(t, {
    section: M.jXE.GUILD_LIST
  }), W = (0, S.Z)(t.id), X = (0, v.Z)(t.id), J = (0, _.Z)(t), z = (0, p.Mn)("GuildContextMenu"), K = (0, A.p)(t);

  function $() {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("53961").then(n.bind(n, 402979));
      return n => (0, i.jsx)(e, D(k({}, n), {
        guild: t
      }))
    })
  }
  return t.features.has(M.GuildFeatures.HUB) ? (0, i.jsxs)(a.v2r, {
    navId: "guild-context",
    onClose: c.Zy,
    "aria-label": G.intl.string(G.t.HpQykc),
    onSelect: r,
    children: [(0, i.jsxs)(a.kSQ, {
      children: [T, (0, i.jsx)(a.sNh, {
        id: "privacy",
        label: G.intl.string(G.t.IlFwwR),
        action: () => (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("86722").then(n.bind(n, 264333));
          return n => (0, i.jsx)(e, D(k({}, n), {
            guild: t
          }))
        })
      }), Y]
    }), R ? null : (0, i.jsx)(a.kSQ, {
      children: (0, i.jsx)(a.sNh, {
        id: "leave-guild",
        label: G.intl.string(G.t.Dv8gFT),
        action: $,
        color: "danger"
      })
    }), (0, i.jsx)(a.kSQ, {
      children: F
    })]
  }) : (0, i.jsxs)(a.v2r, {
    navId: "guild-context",
    onClose: c.Zy,
    "aria-label": G.intl.string(G.t.HpQykc),
    onSelect: r,
    children: [(0, i.jsx)(a.kSQ, {
      children: q
    }), (0, i.jsx)(a.kSQ, {
      children: T
    }), (0, i.jsxs)(a.kSQ, {
      children: [C, z || __OVERLAY__ ? null : B, z && !__OVERLAY__ ? X : null, U, W]
    }), (0, i.jsxs)(a.kSQ, {
      children: [o ? null : Q, __OVERLAY__ ? null : (0, i.jsx)(a.sNh, {
        id: "privacy",
        label: G.intl.string(G.t.BayiAo),
        action: () => (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("86722").then(n.bind(n, 264333));
          return n => (0, i.jsx)(e, D(k({}, n), {
            guild: t
          }))
        })
      }), Y]
    }), (0, i.jsxs)(a.kSQ, {
      children: [H, V]
    }), (0, i.jsxs)(a.kSQ, {
      children: [J, !R && (0, i.jsx)(a.sNh, {
        id: "leave-guild",
        label: G.intl.string(G.t.J2TBi3),
        action: $,
        color: "danger"
      })]
    }), (0, i.jsx)(a.kSQ, {
      children: K
    }), (0, i.jsx)(a.kSQ, {
      children: F
    })]
  })
}

function I(e) {
  let {
    analyticsLocations: t
  } = (0, u.ZP)(o.Z.CONTEXT_MENU);
  return (0, i.jsx)(u.Gt, {
    value: t,
    children: (0, i.jsx)(w, k({}, e))
  })
}
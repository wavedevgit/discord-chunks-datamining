/** Chunk was on 33213 **/
/** chunk id: 545135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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
  Chunk122074 = require("./122074.jsx"),
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

function T(e) {
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

function k(e, t) {
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

function G(e) {
  let {
    guild: t,
    onSelect: r,
    hideSettings: c
  } = e, u = t.id, G = h.ZP.getDefaultChannel(u), {
    entrypoints: w
  } = (0, b._k)({
    location: "guild_context_menu"
  }), U = (0, s.e7)([y.default], () => {
    let e = y.default.getCurrentUser();
    return l()(null != e, "GuildContextMenu: user cannot be undefined"), (0, O.eM)(t, e)
  }, [t]), C = (0, Z.Z)({
    guild: t,
    source: D.t4x.GUILD_CONTEXT_MENU,
    channel: w ? null : G
  }), R = (0, I.Z)(u), B = (0, v.Z)(t), Y = (0, m.Z)(t), Q = (0, L.Z)(t), F = (0, j.Z)({
    guildId: t.id,
    userId: E.default.getId(),
    analyticsLocation: {
      page: D.ZY5.GUILD_CHANNEL,
      section: D.jXE.CHAT_USERNAME,
      object: D.qAy.CONTEXT_MENU_ITEM
    }
  }), H = (0, _.Z)(t), V = (0, g.Z)(t.id), q = (0, d.Z)({
    id: t.id,
    label: M.intl.string(M.t["94lLDw"])
  }), W = (0, P.Z)(t, {
    section: D.jXE.GUILD_LIST
  }), X = (0, f.Z)(t.id), K = (0, x.Z)(t.id), z = (0, S.ng)(t.id, false), J = (0, N.Z)(t), $ = (0, p.Mn)("GuildContextMenu"), ee = (0, A.p)(t);

  function et() {
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("53961").then(n.bind(n, 402979));
      return n => (0, i.jsx)(e, k(T({}, n), {
        guild: t
      }))
    })
  }
  return t.features.has(D.oNc.HUB) ? (0, i.jsxs)(o.v2r, {
    navId: "guild-context",
    onClose: a.Zy,
    "aria-label": M.intl.string(M.t.HpQykZ),
    onSelect: r,
    children: [(0, i.jsxs)(o.kSQ, {
      children: [C, (0, i.jsx)(o.sNh, {
        id: "privacy",
        label: M.intl.string(M.t.IlFwwc),
        action: () => (0, o.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("8895"), n.e("84605"), n.e("8016"), n.e("49508"), n.e("17938"), n.e("25548"), n.e("76540"), n.e("22646"), n.e("25183"), n.e("3940"), n.e("27458"), n.e("56184"), n.e("88712"), n.e("30419"), n.e("66317"), n.e("89001"), n.e("18824"), n.e("20501"), n.e("5458"), n.e("99319")]).then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, k(T({}, n), {
            guild: t
          }))
        })
      }), F]
    }), U ? null : (0, i.jsx)(o.kSQ, {
      children: (0, i.jsx)(o.sNh, {
        id: "leave-guild",
        label: M.intl.string(M.t.Dv8gFR),
        action: et,
        color: "danger"
      })
    }), (0, i.jsx)(o.kSQ, {
      children: q
    })]
  }) : (0, i.jsxs)(o.v2r, {
    navId: "guild-context",
    onClose: a.Zy,
    "aria-label": M.intl.string(M.t.HpQykZ),
    onSelect: r,
    children: [(0, i.jsx)(o.kSQ, {
      children: W
    }), (0, i.jsx)(o.kSQ, {
      children: C
    }), (0, i.jsxs)(o.kSQ, {
      children: [B, $ || __OVERLAY__ ? null : Y, $ && !__OVERLAY__ ? K : null, z, R, X]
    }), (0, i.jsxs)(o.kSQ, {
      children: [c ? null : Q, __OVERLAY__ ? null : (0, i.jsx)(o.sNh, {
        id: "privacy",
        label: M.intl.string(M.t.BayiAg),
        action: () => (0, o.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("8895"), n.e("84605"), n.e("8016"), n.e("49508"), n.e("17938"), n.e("25548"), n.e("76540"), n.e("22646"), n.e("25183"), n.e("3940"), n.e("27458"), n.e("56184"), n.e("88712"), n.e("30419"), n.e("66317"), n.e("89001"), n.e("18824"), n.e("20501"), n.e("5458"), n.e("99319")]).then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, k(T({}, n), {
            guild: t
          }))
        })
      }), F]
    }), (0, i.jsxs)(o.kSQ, {
      children: [H, V]
    }), (0, i.jsxs)(o.kSQ, {
      children: [J, !U && (0, i.jsx)(o.sNh, {
        id: "leave-guild",
        label: M.intl.string(M.t.J2TBi4),
        action: et,
        color: "danger"
      })]
    }), (0, i.jsx)(o.kSQ, {
      children: ee
    }), (0, i.jsx)(o.kSQ, {
      children: q
    })]
  })
}

function w(e) {
  let {
    analyticsLocations: t
  } = (0, u.ZP)(c.Z.CONTEXT_MENU);
  return (0, i.jsx)(u.Gt, {
    value: t,
    children: (0, i.jsx)(G, T({}, e))
  })
}
/** Chunk was on web.js **/
/** chunk id: 734386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk911969 = require("./911969.js"),
  Chunk933557 = require("./933557.js"),
  Chunk185413 = require("./185413.jsx"),
  Chunk42311 = require("./42311.jsx"),
  Chunk626786 = require("./626786.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk454585 = require("./454585.js"),
  Chunk345162 = require("./345162.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk51144 = require("./51144.js"),
  Chunk396769 = require("./396769.jsx"),
  Chunk967128 = require("./967128.jsx"),
  Chunk318374 = require("./318374.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk279078 = require("./279078.js"),
  Chunk73433 = require("./73433.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = 5;

function G(e) {
  let {
    channel: t
  } = e, [n, o] = i.useState(false), s = (0, p.ZP)(t, true), x = t.guild_id, k = (0, u.e7)([O.Z], () => null != x ? O.Z.getSortedRoles(x) : true), G = (0, u.e7)([T.default, v.Z], () => {
    var e;
    return T.default.getUser(null == (e = v.Z.getGuild(x)) ? true : e.ownerId)
  }), B = i.useMemo(() => null != k ? k.filter(e => !(0, y.fI)(e)) : [], [k]), Z = i.useMemo(() => l()(B).filter(e => {
    if (null == x) returnfalse;
    let n = S.I0({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return c.Db(n, c.$e(P.Plq.ADMINISTRATOR, P.Plq.VIEW_CHANNEL))
  }).value(), [t, x, B]), F = (0, u.Wu)([T.default], () => {
    let e = {};
    for (let n of (null != G && (e[G.id] = G), Object.values(t.permissionOverwrites))) {
      if (n.type !== _.BN.MEMBER || null != e[n.id]) continue;
      let t = T.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return l()(e).filter(e => {
      var n;
      let r = S.BT({
          permission: P.Plq.ADMINISTRATOR,
          user: e,
          context: t
        }),
        i = null != (n = t.permissionOverwrites[e.id]) ? n : S.Hn,
        o = c.e$(i.allow, P.Plq.VIEW_CHANNEL);
      return r || o
    }).value()
  }, [t, G]), V = I.Z.can(P.Plq.MANAGE_CHANNELS, t) || I.Z.can(P.Plq.MANAGE_ROLES, t);

  function H() {
    if (1 !== F.length || Z.length > 0) return (0, r.jsx)(R.Z, {
      guildId: t.guild_id,
      className: D.avatars,
      maxUsers: U,
      users: F
    });
    let e = F[0],
      n = A.ZP.getName(e);
    return (0, r.jsxs)("div", {
      className: D.avatars,
      children: [(0, r.jsx)(d.qEK, {
        src: e.getAvatarURL(t.guild_id, 24),
        "aria-label": n,
        size: d.EFr.SIZE_24
      }), (0, r.jsx)(d.Text, {
        tag: "span",
        className: D.singleUserName,
        variant: "text-md/normal",
        children: n
      }), "\xa0", (0, r.jsx)(d.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "text-muted",
        children: w.intl.string(w.t.rt0ERU)
      })]
    })
  }

  function Y() {
    return Z.map((e, n) => {
      var i, o;
      let s = null != (o = e.colorString) ? o : P.Pbq,
        l = (null == (i = e.tags) ? true : i.guild_connections) !== true;
      return V ? (0, r.jsx)(m.Z, {
        className: a()(D.role, {
          [D.last]: n === Z.length - 1
        }),
        roleName: e.name,
        roleColor: s,
        disabled: !V,
        verified: l,
        onClick: () => {
          E.Z.open(t.guild_id, P.pNK.MEMBERS), E.Z.selectRole(e.id)
        }
      }, e.id) : (0, r.jsx)(g.Z, {
        className: a()(D.role, {
          [D.last]: n === Z.length - 1
        }),
        roleName: e.name,
        roleColor: s,
        verified: l
      }, e.id)
    })
  }

  function W() {
    f.ZP.open(t.id)
  }

  function K() {
    return V ? (0, r.jsxs)("div", {
      className: D.channelSettingButtons,
      children: [(0, r.jsx)(N.Z, {
        label: w.intl.string(w.t.dMJ3Y2),
        onClick: () => o(true),
        icon: (0, r.jsx)(d.BFJ, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, r.jsx)(N.Z, {
        label: w.intl.string(w.t["3gUsJS"]),
        onClick: W,
        icon: (0, r.jsx)(d.vdY, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }) : null
  }
  let z = i.useCallback(() => o(false), []);

  function q() {
    return n ? (0, r.jsx)(d.u_l, {
      renderModal: e => (0, r.jsx)(h.default, j(M({}, e), {
        onClose: () => (z(), e.onClose()),
        channelId: t.id
      })),
      onCloseRequest: () => o(false)
    }) : null
  }
  return (0, r.jsxs)(C.ZP, {
    channelId: t.id,
    children: [(0, r.jsx)(C.Kq, {
      locked: true,
      channelType: t.type
    }), (0, r.jsx)(C.Ot, {
      children: w.intl.format(w.t.I3R7Vl, {
        channelName: s
      })
    }), (0, r.jsx)(C.jz, {
      className: L.markup,
      children: w.intl.format(w.t.QuwqjI, {
        channelName: s,
        topicHook: () => b.Z.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), K(), (0, r.jsxs)("div", {
      className: D.members,
      children: [H(), Y()]
    }), q()]
  })
}
/** Chunk was on 86357 **/
/** chunk id: 734386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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
  Chunk338518 = require("./338518.js"),
  Chunk430864 = require("./430864.js");

function R(e) {
  let {
    channel: t
  } = e, [n, l] = i.useState(false), o = (0, f.ZP)(t, true), R = t.guild_id, M = (0, u.e7)([x.Z], () => null != R ? x.Z.getSortedRoles(R) : true), k = (0, u.e7)([O.default, v.Z], () => {
    var e;
    return O.default.getUser(null == (e = v.Z.getGuild(R)) ? true : e.ownerId)
  }), D = i.useMemo(() => null != M ? M.filter(e => !(0, C.fI)(e)) : [], [M]), L = i.useMemo(() => s()(D).filter(e => {
    if (null == R) returnfalse;
    let n = E.I0({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return c.Db(n, c.$e(T.Plq.ADMINISTRATOR, T.Plq.VIEW_CHANNEL))
  }).value(), [t, R, D]), U = (0, u.Wu)([O.default], () => {
    let e = {};
    for (let n of (null != k && (e[k.id] = k), Object.values(t.permissionOverwrites))) {
      if (n.type !== h.BN.MEMBER || null != e[n.id]) continue;
      let t = O.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return s()(e).filter(e => {
      var n;
      let r = E.BT({
          permission: T.Plq.ADMINISTRATOR,
          user: e,
          context: t
        }),
        i = null != (n = t.permissionOverwrites[e.id]) ? n : E.Hn,
        l = c.e$(i.allow, T.Plq.VIEW_CHANNEL);
      return r || l
    }).value()
  }, [t, k]), B = j.Z.can(T.Plq.MANAGE_CHANNELS, t) || j.Z.can(T.Plq.MANAGE_ROLES, t), F = i.useCallback(() => l(false), []);
  return (0, r.jsxs)(I.ZP, {
    channelId: t.id,
    children: [(0, r.jsx)(I.Kq, {
      locked: true,
      channelType: t.type
    }), (0, r.jsx)(I.Ot, {
      children: N.intl.format(N.t.I3R7Vl, {
        channelName: o
      })
    }), (0, r.jsx)(I.jz, {
      className: w.markup,
      children: N.intl.format(N.t.QuwqjI, {
        channelName: o,
        topicHook: () => _.Z.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), B ? (0, r.jsxs)("div", {
      className: A.channelSettingButtons,
      children: [(0, r.jsx)(P.Z, {
        label: N.intl.string(N.t.dMJ3Y2),
        onClick: () => l(true),
        icon: (0, r.jsx)(d.BFJ, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, r.jsx)(P.Z, {
        label: N.intl.string(N.t["3gUsJS"]),
        onClick: function() {
          p.ZP.open(t.id)
        },
        icon: (0, r.jsx)(d.vdY, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }) : null, (0, r.jsxs)("div", {
      className: A.members,
      children: [function() {
        if (1 !== U.length || L.length > 0) return (0, r.jsx)(Z.Z, {
          guildId: t.guild_id,
          className: A.avatars,
          maxUsers: 5,
          users: U
        });
        let e = U[0],
          n = S.ZP.getName(e);
        return (0, r.jsxs)("div", {
          className: A.avatars,
          children: [(0, r.jsx)(d.qEK, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: d.EFr.SIZE_24
          }), (0, r.jsx)(d.Text, {
            tag: "span",
            className: A.singleUserName,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, r.jsx)(d.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.string(N.t.rt0ERU)
          })]
        })
      }(), L.map((e, n) => {
        var i, l;
        let o = null != (l = e.colorString) ? l : T.Pbq,
          s = (null == (i = e.tags) ? true : i.guild_connections) !== true;
        return B ? (0, r.jsx)(g.Z, {
          className: a()(A.role, {
            [A.last]: n === L.length - 1
          }),
          roleName: e.name,
          roleColor: o,
          disabled: !B,
          verified: s,
          onClick: () => {
            y.Z.open(t.guild_id, T.pNK.MEMBERS), y.Z.selectRole(e.id)
          }
        }, e.id) : (0, r.jsx)(b.Z, {
          className: a()(A.role, {
            [A.last]: n === L.length - 1
          }),
          roleName: e.name,
          roleColor: o,
          verified: s
        }, e.id)
      })]
    }), n ? (0, r.jsx)(d.u_l, {
      renderModal: e => {
        var n, i;
        return (0, r.jsx)(m.default, (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, e), i = i = {
          onClose: () => (F(), e.onClose()),
          channelId: t.id
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      },
      onCloseRequest: () => l(false)
    }) : null]
  })
}
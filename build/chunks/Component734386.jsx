/** Chunk was on 47840 **/
/** chunk id: 734386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk149765 = require("./149765.js"),
  Chunk442837 = require("./442837.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk911969 = require("./911969.js"),
  Chunk933557 = require("./933557.js"),
  Chunk185413 = require("./185413.jsx"),
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
  Chunk786721 = require("./786721.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk338518 = require("./338518.js"),
  Chunk430864 = require("./430864.js");

function M(e) {
  let {
    channel: t
  } = e, [n, l] = r.useState(false), o = (0, m.ZP)(t, true), M = t.guild_id, R = (0, u.e7)([v.Z], () => null != M ? v.Z.getSortedRoles(M) : true), L = (0, u.e7)([j.default, x.Z], () => {
    var e;
    return j.default.getUser(null == (e = x.Z.getGuild(M)) ? true : e.ownerId)
  }), D = r.useMemo(() => null != R ? R.filter(e => !(0, _.fI)(e)) : [], [R]), k = r.useMemo(() => s()(D).filter(e => {
    if (null == M) returnfalse;
    let n = E.I0({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return c.Db(n, c.$e(T.Plq.ADMINISTRATOR, T.Plq.VIEW_CHANNEL))
  }).value(), [t, M, D]), U = (0, u.Wu)([j.default], () => {
    let e = {};
    for (let n of (null != L && (e[L.id] = L), Object.values(t.permissionOverwrites))) {
      if (n.type !== f.BN.MEMBER || null != e[n.id]) continue;
      let t = j.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return s()(e).filter(e => {
      var n;
      let i = E.BT({
          permission: T.Plq.ADMINISTRATOR,
          user: e,
          context: t
        }),
        r = null != (n = t.permissionOverwrites[e.id]) ? n : E.Hn,
        l = c.e$(r.allow, T.Plq.VIEW_CHANNEL);
      return i || l
    }).value()
  }, [t, L]), B = O.Z.can(T.Plq.MANAGE_CHANNELS, t) || O.Z.can(T.Plq.MANAGE_ROLES, t), H = r.useCallback(() => l(false), []);
  return (0, i.jsxs)(I.ZP, {
    channelId: t.id,
    children: [(0, i.jsx)(I.Kq, {
      locked: true,
      channelType: t.type
    }), (0, i.jsx)(I.Ot, {
      children: N.intl.format(N.t.I3R7Vn, {
        channelName: o
      })
    }), (0, i.jsx)(I.jz, {
      className: w.markup,
      children: N.intl.format(N.t.QuwqjG, {
        channelName: o,
        topicHook: () => y.Z.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), B ? (0, i.jsxs)("div", {
      className: A.channelSettingButtons,
      children: [(0, i.jsx)(P.Z, {
        label: N.intl.string(N.t.dMJ3Y6),
        onClick: () => l(true),
        icon: (0, i.jsx)(p.BFJ, {
          size: "xs",
          color: "currentColor"
        })
      }), (0, i.jsx)(P.Z, {
        label: N.intl.string(N.t["3gUsJb"]),
        onClick: function() {
          h.ZP.open(t.id)
        },
        icon: (0, i.jsx)(p.vdY, {
          size: "xs",
          color: "currentColor"
        })
      })]
    }) : null, (0, i.jsxs)("div", {
      className: A.members,
      children: [function() {
        if (1 !== U.length || k.length > 0) return (0, i.jsx)(d.Z, {
          guildId: t.guild_id,
          className: A.avatars,
          maxUsers: 5,
          users: U
        });
        let e = U[0],
          n = S.ZP.getName(e);
        return (0, i.jsxs)("div", {
          className: A.avatars,
          children: [(0, i.jsx)(p.qEK, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: p.EFr.SIZE_24
          }), (0, i.jsx)(p.Text, {
            tag: "span",
            className: A.singleUserName,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, i.jsx)(p.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: N.intl.string(N.t.rt0ERW)
          })]
        })
      }(), k.map((e, n) => {
        var r, l;
        let o = null != (l = e.colorString) ? l : T.Pbq,
          s = (null == (r = e.tags) ? true : r.guild_connections) !== true;
        return B ? (0, i.jsx)(Z.Z, {
          className: a()(A.role, {
            [A.last]: n === k.length - 1
          }),
          roleName: e.name,
          roleColor: o,
          disabled: !B,
          verified: s,
          onClick: () => {
            C.Z.open(t.guild_id, T.pNK.MEMBERS), C.Z.selectRole(e.id)
          }
        }, e.id) : (0, i.jsx)(b.Z, {
          className: a()(A.role, {
            [A.last]: n === k.length - 1
          }),
          roleName: e.name,
          roleColor: o,
          verified: s
        }, e.id)
      })]
    }), n ? (0, i.jsx)(p.u_l, {
      renderModal: e => {
        var n, r;
        return (0, i.jsx)(g.default, (n = function(e) {
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
        }({}, e), r = r = {
          onClose: () => (H(), e.onClose()),
          channelId: t.id
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      },
      onCloseRequest: () => l(false)
    }) : null]
  })
}
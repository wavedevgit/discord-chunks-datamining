/** Chunk was on 34740 **/
/** chunk id: 734386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk967128 = require("./967128.jsx"),
  Chunk786721 = require("./786721.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk338518 = require("./338518.js"),
  Chunk430864 = require("./430864.js");

function w(e) {
  let {
    channel: t
  } = e, [n, l] = r.useState(false), o = (0, m.ZP)(t, true), w = t.guild_id, M = (0, u.e7)([_.Z], () => null != w ? _.Z.getSortedRoles(w) : true), R = (0, u.e7)([E.default, O.Z], () => {
    var e;
    return E.default.getUser(null == (e = O.Z.getGuild(w)) ? true : e.ownerId)
  }), L = r.useMemo(() => null != M ? M.filter(e => !(0, v.fI)(e)) : [], [M]), k = r.useMemo(() => s()(L).filter(e => {
    if (null == w) returnfalse;
    let n = j.I0({
      forceRoles: {
        [e.id]: e
      },
      context: t
    });
    return c.Db(n, c.$e(Z.Plq.ADMINISTRATOR, Z.Plq.VIEW_CHANNEL))
  }).value(), [t, w, L]), D = (0, u.Wu)([E.default], () => {
    let e = {};
    for (let n of (null != R && (e[R.id] = R), Object.values(t.permissionOverwrites))) {
      if (n.type !== f.BN.MEMBER || null != e[n.id]) continue;
      let t = E.default.getUser(n.id);
      null != t && (e[t.id] = t)
    }
    return s()(e).filter(e => {
      var n;
      let i = j.BT({
          permission: Z.Plq.ADMINISTRATOR,
          user: e,
          context: t
        }),
        r = null != (n = t.permissionOverwrites[e.id]) ? n : j.Hn,
        l = c.e$(r.allow, Z.Plq.VIEW_CHANNEL);
      return i || l
    }).value()
  }, [t, R]), U = x.Z.can(Z.Plq.MANAGE_CHANNELS, t) || x.Z.can(Z.Plq.MANAGE_ROLES, t), V = r.useCallback(() => l(false), []);
  return (0, i.jsxs)(P.ZP, {
    channelId: t.id,
    children: [(0, i.jsx)(P.Kq, {
      locked: true,
      channelType: t.type
    }), (0, i.jsx)(P.Ot, {
      children: T.intl.format(T.t.I3R7Vn, {
        channelName: o
      })
    }), (0, i.jsx)(P.jz, {
      className: A.markup,
      children: T.intl.format(T.t.QuwqjG, {
        channelName: o,
        topicHook: () => y.Z.parseTopic(t.topic, true, {
          channelId: t.id
        })
      })
    }), U ? (0, i.jsxs)("div", {
      className: N.channelSettingButtons,
      children: [(0, i.jsx)(p.Button, {
        size: "sm",
        variant: "secondary",
        text: T.intl.string(T.t.dMJ3Y6),
        onClick: () => l(true),
        icon: p.BFJ
      }), (0, i.jsx)(p.Button, {
        size: "sm",
        variant: "secondary",
        text: T.intl.string(T.t["3gUsJb"]),
        onClick: function() {
          h.ZP.open(t.id)
        },
        icon: p.vdY
      })]
    }) : null, (0, i.jsxs)("div", {
      className: N.members,
      children: [function() {
        if (1 !== D.length || k.length > 0) return (0, i.jsx)(d.Z, {
          guildId: t.guild_id,
          className: N.avatars,
          maxUsers: 5,
          users: D
        });
        let e = D[0],
          n = S.ZP.getName(e);
        return (0, i.jsxs)("div", {
          className: N.avatars,
          children: [(0, i.jsx)(p.qEK, {
            src: e.getAvatarURL(t.guild_id, 24),
            "aria-label": n,
            size: p.EFr.SIZE_24
          }), (0, i.jsx)(p.Text, {
            tag: "span",
            className: N.singleUserName,
            variant: "text-md/normal",
            children: n
          }), "\xa0", (0, i.jsx)(p.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "text-muted",
            children: T.intl.string(T.t.rt0ERW)
          })]
        })
      }(), k.map((e, n) => {
        var r, l;
        let o = null != (l = e.colorString) ? l : Z.Pbq,
          s = (null == (r = e.tags) ? true : r.guild_connections) !== true;
        return U ? (0, i.jsx)(I.Z, {
          className: a()(N.role, {
            [N.last]: n === k.length - 1
          }),
          roleName: e.name,
          roleColor: o,
          disabled: !U,
          verified: s,
          onClick: () => {
            C.Z.open(t.guild_id, Z.pNK.MEMBERS), C.Z.selectRole(e.id)
          }
        }, e.id) : (0, i.jsx)(b.Z, {
          className: a()(N.role, {
            [N.last]: n === k.length - 1
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
          onClose: () => (V(), e.onClose()),
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
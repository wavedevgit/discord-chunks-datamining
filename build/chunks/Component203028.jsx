/** Chunk was on 1272 **/
/** chunk id: 203028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk841784 = require("./841784.js"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk386725 = require("./386725.js"),
  Chunk7284 = require("./7284.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk707409 = require("./707409.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk761282 = require("./761282.jsx"),
  Chunk358924 = require("./358924.jsx"),
  Chunk817915 = require("./817915.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  var t, i;
  let {
    party: O,
    onUserContextMenu: I
  } = e, {
    priorityMembers: v,
    partiedMembers: y,
    guildContext: C
  } = O, S = v[0], T = function(e) {
    let {
      priorityMembers: t,
      partiedMembers: n
    } = e, r = new Set(t.map(e => {
      let {
        user: t
      } = e;
      return t.id
    })), i = n.filter(e => !r.has(e.id)), l = g.ZP.getName(t[0].user), a = null != t[1] ? g.ZP.getName(t[1].user) : null != i[0] ? g.ZP.getName(i[0]) : null;
    switch (n.length) {
      case 1:
        return l;
      case 2:
        return _.intl.format(_.t.t1DyC1, {
          user1: l,
          user2: a
        });
      default:
        return _.intl.format(_.t["5CSEcJ"], {
          user1: l,
          user2: a,
          extras: n.length - 2
        })
    }
  }(O), {
    subtitle: N,
    icon: j
  } = function(e) {
    var t;
    let {
      priorityMembers: i,
      partiedMembers: c,
      voiceChannels: u,
      currentActivities: d
    } = e, p = i.length, g = c.length - p, O = d[0], I = null == O ? true : O.activity, v = null == O ? true : O.startedPlayingTime, y = {
      name: null != (t = null == I ? true : I.name) ? t : ""
    };
    if ((0, a.Z)(I) && null != I) return {
      subtitle: (0, r.jsx)(f.ZP, {
        start: v,
        location: f.ZP.Locations.ACTIVITY_FEED_NEW,
        messageProps: y
      }),
      icon: null
    };
    if (p + g === 1 && null != O) {
      let {
        game: e
      } = O;
      if (null == I) return {
        subtitle: null,
        icon: null
      };
      let t = h.dc(I);
      if (null != t) return t;
      switch (I.type) {
        case E.IIU.PLAYING:
          if ((0, s.Z)(I)) return {
            subtitle: _.intl.string(_.t.tO8wOx),
            icon: (0, r.jsx)(m.Z.Header.Icon, {
              src: m.Z.Header.Icon.Src.XBOX
            })
          };
          return {
            subtitle: (0, r.jsx)(f.ZP, {
              start: v,
              location: f.ZP.Locations.ACTIVITY_FEED_NEW,
              messageProps: y
            }), icon: null != e ? (0, r.jsx)(m.Z.Header.Icon, {
              src: null != e.getIconURL(b.Z) ? e.getIconURL(b.Z) : n(211827)
            }) : null
          };
        case E.IIU.STREAMING:
          return {
            subtitle: _.intl.string(_.t.HyGHj7), icon: null != e && null != e.getIconURL(b.Z) ? (0, r.jsx)(m.Z.Header.Icon, {
              src: e.getIconURL(b.Z)
            }) : null
          };
        case E.IIU.LISTENING:
          let i;
          return i = (0, o.Z)(I) ? (0, r.jsx)(m.Z.Header.Icon, {
            src: m.Z.Header.Icon.Src.SPOTIFY
          }) : null != e.getIconURL(b.Z) ? (0, r.jsx)(m.Z.Header.Icon, {
            src: e.getIconURL(b.Z)
          }) : (0, r.jsx)(m.Z.Header.Icon, {
            src: n(211827)
          }), {
            subtitle: _.intl.formatToPlainString(_.t.NF5xop, {
              name: I.name
            }),
            icon: i
          };
        case E.IIU.WATCHING:
          return {
            subtitle: _.intl.formatToPlainString(_.t.pW3Ip3, {
              name: I.name
            }), icon: null != e && null != e.getIconURL(b.Z) ? (0, r.jsx)(m.Z.Header.Icon, {
              src: e.getIconURL(b.Z)
            }) : null
          };
        default:
          return {
            subtitle: _.intl.string(_.t.grGyaf), icon: null
          }
      }
    }
    if (0 === d.length) {
      if (u.length > 0) return {
        subtitle: _.intl.string(_.t.grGyaf),
        icon: null
      };
      let e = d[0];
      if (null != e) {
        let {
          activity: t
        } = e;
        if (null != t) {
          let e = h.dc(t);
          if (null != e) return e
        }
        if (null != t && t.type === E.IIU.LISTENING) return {
          subtitle: _.intl.string(_.t.rmnkz4),
          icon: (0, r.jsx)(m.Z.Header.Icon, {
            src: m.Z.Header.Icon.Src.SPOTIFY
          })
        }
      }
    } else if (1 === d.length) {
      let e = d.find(e => null != e.activity);
      if (null == e) return {
        subtitle: null,
        icon: null
      };
      let {
        activity: t,
        game: n,
        startedPlayingTime: i
      } = e;
      return l()(null != t, "Activity was null somehow"), {
        subtitle: (0, r.jsx)(f.ZP, {
          start: i,
          location: f.ZP.Locations.ACTIVITY_FEED_NEW,
          messageProps: y
        }),
        icon: null != n && null != n.getIconURL(b.Z) ? (0, r.jsx)(m.Z.Header.Icon, {
          src: n.getIconURL(b.Z)
        }) : null
      }
    }
    return {
      subtitle: _.intl.string(_.t.sau5tt),
      icon: (0, r.jsx)(m.Z.Header.Icon, {
        src: m.Z.Header.Icon.Src.MULTIPLE
      })
    }
  }(O), x = (0, p.Z)({
    applicationId: null == (i = O.currentActivities[0]) || null == (t = i.activity) ? true : t.application_id,
    location: "FriendsActivityFeed",
    source: d.m1.FriendsActivityFeed
  }), P = (0, c.Z)({
    userId: S.user.id,
    guildId: null == C ? true : C.id
  }), A = (0, u.j)({
    displayNameStyles: P
  });
  return (0, r.jsx)(m.Z.Header, {
    priorityUser: S,
    guildId: null == C ? true : C.id,
    title: T,
    subtitle: N,
    icon: j,
    onSubtitleClick: x,
    onIconClick: x,
    onContextMenu: e => I(e, S.user),
    displayNameFont: 1 === y.length ? A : true
  })
}
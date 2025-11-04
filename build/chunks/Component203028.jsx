/** Chunk was on 1272 **/
/** chunk id: 203028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk841784 = require("./841784.js"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk707409 = require("./707409.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk761282 = require("./761282.jsx"),
  Chunk358924 = require("./358924.jsx"),
  Chunk817915 = require("./817915.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  var t, i;
  let {
    party: b,
    onUserContextMenu: E
  } = e, {
    priorityMembers: O,
    guildContext: y
  } = b, v = O[0], I = function(e) {
    let {
      priorityMembers: t,
      partiedMembers: n
    } = e, r = new Set(t.map(e => {
      let {
        user: t
      } = e;
      return t.id
    })), i = n.filter(e => !r.has(e.id)), l = p.ZP.getName(t[0].user), a = null != t[1] ? p.ZP.getName(t[1].user) : null != i[0] ? p.ZP.getName(i[0]) : null;
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
  }(b), {
    subtitle: C,
    icon: S
  } = function(e) {
    var t;
    let {
      priorityMembers: i,
      partiedMembers: c,
      voiceChannels: u,
      currentActivities: p
    } = e, b = i.length, E = c.length - b, O = p[0], y = null == O ? true : O.activity, v = null == O ? true : O.startedPlayingTime, I = {
      name: null != (t = null == y ? true : y.name) ? t : ""
    };
    if ((0, a.Z)(y) && null != y) return {
      subtitle: (0, r.jsx)(d.ZP, {
        start: v,
        location: d.ZP.Locations.ACTIVITY_FEED_NEW,
        messageProps: I
      }),
      icon: null
    };
    if (b + E === 1 && null != O) {
      let {
        game: e
      } = O;
      if (null == y) return {
        subtitle: null,
        icon: null
      };
      let t = f.dc(y);
      if (null != t) return t;
      switch (y.type) {
        case m.IIU.PLAYING:
          if ((0, s.Z)(y)) return {
            subtitle: _.intl.string(_.t.tO8wOx),
            icon: (0, r.jsx)(h.Z.Header.Icon, {
              src: h.Z.Header.Icon.Src.XBOX
            })
          };
          return {
            subtitle: (0, r.jsx)(d.ZP, {
              start: v,
              location: d.ZP.Locations.ACTIVITY_FEED_NEW,
              messageProps: I
            }), icon: null != e ? (0, r.jsx)(h.Z.Header.Icon, {
              src: null != e.getIconURL(g.Z) ? e.getIconURL(g.Z) : n(211827)
            }) : null
          };
        case m.IIU.STREAMING:
          return {
            subtitle: _.intl.string(_.t.HyGHj7), icon: null != e && null != e.getIconURL(g.Z) ? (0, r.jsx)(h.Z.Header.Icon, {
              src: e.getIconURL(g.Z)
            }) : null
          };
        case m.IIU.LISTENING:
          let i;
          return i = (0, o.Z)(y) ? (0, r.jsx)(h.Z.Header.Icon, {
            src: h.Z.Header.Icon.Src.SPOTIFY
          }) : null != e.getIconURL(g.Z) ? (0, r.jsx)(h.Z.Header.Icon, {
            src: e.getIconURL(g.Z)
          }) : (0, r.jsx)(h.Z.Header.Icon, {
            src: n(211827)
          }), {
            subtitle: _.intl.formatToPlainString(_.t.NF5xop, {
              name: y.name
            }),
            icon: i
          };
        case m.IIU.WATCHING:
          return {
            subtitle: _.intl.formatToPlainString(_.t.pW3Ip3, {
              name: y.name
            }), icon: null != e && null != e.getIconURL(g.Z) ? (0, r.jsx)(h.Z.Header.Icon, {
              src: e.getIconURL(g.Z)
            }) : null
          };
        default:
          return {
            subtitle: _.intl.string(_.t.grGyaf), icon: null
          }
      }
    }
    if (0 === p.length) {
      if (u.length > 0) return {
        subtitle: _.intl.string(_.t.grGyaf),
        icon: null
      };
      let e = p[0];
      if (null != e) {
        let {
          activity: t
        } = e;
        if (null != t) {
          let e = f.dc(t);
          if (null != e) return e
        }
        if (null != t && t.type === m.IIU.LISTENING) return {
          subtitle: _.intl.string(_.t.rmnkz4),
          icon: (0, r.jsx)(h.Z.Header.Icon, {
            src: h.Z.Header.Icon.Src.SPOTIFY
          })
        }
      }
    } else if (1 === p.length) {
      let e = p.find(e => null != e.activity);
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
        subtitle: (0, r.jsx)(d.ZP, {
          start: i,
          location: d.ZP.Locations.ACTIVITY_FEED_NEW,
          messageProps: I
        }),
        icon: null != n && null != n.getIconURL(g.Z) ? (0, r.jsx)(h.Z.Header.Icon, {
          src: n.getIconURL(g.Z)
        }) : null
      }
    }
    return {
      subtitle: _.intl.string(_.t.sau5tt),
      icon: (0, r.jsx)(h.Z.Header.Icon, {
        src: h.Z.Header.Icon.Src.MULTIPLE
      })
    }
  }(b), T = (0, u.Z)({
    applicationId: null == (i = b.currentActivities[0]) || null == (t = i.activity) ? true : t.application_id,
    location: "FriendsActivityFeed",
    source: c.m1.FriendsActivityFeed
  });
  return (0, r.jsx)(h.Z.Header, {
    priorityUser: v,
    guildId: null == y ? true : y.id,
    title: I,
    subtitle: C,
    icon: S,
    onSubtitleClick: T,
    onIconClick: T,
    onContextMenu: e => E(e, v.user)
  })
}
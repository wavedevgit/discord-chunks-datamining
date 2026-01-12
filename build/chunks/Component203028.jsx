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
    onUserContextMenu: v
  } = e, {
    priorityMembers: y,
    partiedMembers: I,
    guildContext: C
  } = O, S = y[0], T = function(e) {
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
        return E.intl.format(E.t.t1DyC1, {
          user1: l,
          user2: a
        });
      default:
        return E.intl.format(E.t["5CSEcJ"], {
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
    } = e, p = i.length, g = c.length - p, O = d[0], v = null == O ? true : O.activity, y = null == O ? true : O.startedPlayingTime, I = {
      name: null != (t = null == v ? true : v.name) ? t : ""
    };
    if ((0, a.Z)(v) && null != v) return {
      subtitle: (0, r.jsx)(f.ZP, {
        start: y,
        location: f.ZP.Locations.ACTIVITY_FEED_NEW,
        messageProps: I
      }),
      icon: null
    };
    if (p + g === 1 && null != O) {
      let {
        game: e
      } = O;
      if (null == v) return {
        subtitle: null,
        icon: null
      };
      let t = h.dc(v);
      if (null != t) return t;
      switch (v.type) {
        case _.IIU.PLAYING:
          if ((0, s.Z)(v)) return {
            subtitle: E.intl.string(E.t.tO8wOx),
            icon: (0, r.jsx)(m.Z.Header.Icon, {
              src: m.Z.Header.Icon.Src.XBOX
            })
          };
          return {
            subtitle: (0, r.jsx)(f.ZP, {
              start: y,
              location: f.ZP.Locations.ACTIVITY_FEED_NEW,
              messageProps: I
            }), icon: null != e ? (0, r.jsx)(m.Z.Header.Icon, {
              src: null != e.getIconURL(b.Z) ? e.getIconURL(b.Z) : n(211827)
            }) : null
          };
        case _.IIU.STREAMING:
          return {
            subtitle: E.intl.string(E.t.HyGHj7), icon: null != e && null != e.getIconURL(b.Z) ? (0, r.jsx)(m.Z.Header.Icon, {
              src: e.getIconURL(b.Z)
            }) : null
          };
        case _.IIU.LISTENING:
          let i;
          return i = (0, o.Z)(v) ? (0, r.jsx)(m.Z.Header.Icon, {
            src: m.Z.Header.Icon.Src.SPOTIFY
          }) : null != e.getIconURL(b.Z) ? (0, r.jsx)(m.Z.Header.Icon, {
            src: e.getIconURL(b.Z)
          }) : (0, r.jsx)(m.Z.Header.Icon, {
            src: n(211827)
          }), {
            subtitle: E.intl.formatToPlainString(E.t.NF5xop, {
              name: v.name
            }),
            icon: i
          };
        case _.IIU.WATCHING:
          return {
            subtitle: E.intl.formatToPlainString(E.t.pW3Ip3, {
              name: v.name
            }), icon: null != e && null != e.getIconURL(b.Z) ? (0, r.jsx)(m.Z.Header.Icon, {
              src: e.getIconURL(b.Z)
            }) : null
          };
        default:
          return {
            subtitle: E.intl.string(E.t.grGyaf), icon: null
          }
      }
    }
    if (0 === d.length) {
      if (u.length > 0) return {
        subtitle: E.intl.string(E.t.grGyaf),
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
        if (null != t && t.type === _.IIU.LISTENING) return {
          subtitle: E.intl.string(E.t.rmnkz4),
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
          messageProps: I
        }),
        icon: null != n && null != n.getIconURL(b.Z) ? (0, r.jsx)(m.Z.Header.Icon, {
          src: n.getIconURL(b.Z)
        }) : null
      }
    }
    return {
      subtitle: E.intl.string(E.t.sau5tt),
      icon: (0, r.jsx)(m.Z.Header.Icon, {
        src: m.Z.Header.Icon.Src.MULTIPLE
      })
    }
  }(O), P = (0, p.Z)({
    applicationId: null == (i = O.currentActivities[0]) || null == (t = i.activity) ? true : t.application_id,
    location: "FriendsActivityFeed",
    source: d.m1.FriendsActivityFeed
  }), x = (0, c.Z)({
    userId: S.user.id,
    guildId: null == C ? true : C.id
  }), Z = (0, u.j)({
    displayNameStyles: x
  });
  return (0, r.jsx)(m.Z.Header, {
    priorityUser: S,
    guildId: null == C ? true : C.id,
    title: T,
    subtitle: N,
    icon: j,
    onSubtitleClick: P,
    onIconClick: P,
    onContextMenu: e => v(e, S.user),
    displayNameFont: 1 === I.length ? Z : true
  })
}
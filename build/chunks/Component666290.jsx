/** Chunk was on 21738 **/
/** chunk id: 666290, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk765379 = require("./765379.js"),
  Chunk90644 = require("./90644.js"),
  Chunk61330 = require("./61330.js"),
  Chunk609425 = require("./609425.js"),
  Chunk73392 = require("./73392.js"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk290987 = require("./290987.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk516085 = require("./516085.jsx"),
  Chunk928636 = require("./928636.jsx");
require("./595.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  var t, i;
  let {
    party: b,
    onUserContextMenu: E
  } = e, {
    priorityMembers: O,
    partiedMembers: y,
    guildContext: I
  } = b, v = O[0], S = function(e) {
    let {
      priorityMembers: t,
      partiedMembers: n
    } = e, r = new Set(t.map(e => {
      let {
        user: t
      } = e;
      return t.id
    })), i = n.filter(e => !r.has(e.id)), l = g.Ay.getName(t[0].user), a = null != t[1] ? g.Ay.getName(t[1].user) : null != i[0] ? g.Ay.getName(i[0]) : null;
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
    icon: N
  } = function(e) {
    var t;
    let {
      priorityMembers: i,
      partiedMembers: c,
      voiceChannels: u,
      currentActivities: d
    } = e, p = i.length, g = c.length - p, b = d[0], E = null == b ? true : b.activity, O = null == b ? true : b.startedPlayingTime, y = {
      name: null != (t = null == E ? true : E.name) ? t : ""
    };
    if ((0, a.A)(E) && null != E) return {
      subtitle: (0, r.jsx)(h.Ay, {
        start: O,
        location: h.Ay.Locations.ACTIVITY_FEED_NEW,
        messageProps: y
      }),
      icon: null
    };
    if (p + g === 1 && null != b) {
      let {
        game: e
      } = b;
      if (null == E) return {
        subtitle: null,
        icon: null
      };
      let t = m.Ij(E);
      if (null != t) return t;
      switch (E.type) {
        case A.$pd.PLAYING:
          if ((0, o.A)(E)) return {
            subtitle: _.intl.string(_.t.tO8wOx),
            icon: (0, r.jsx)(f.A.Header.Icon, {
              src: f.A.Header.Icon.Src.XBOX
            })
          };
          return {
            subtitle: (0, r.jsx)(h.Ay, {
              start: O,
              location: h.Ay.Locations.ACTIVITY_FEED_NEW,
              messageProps: y
            }), icon: null != e ? (0, r.jsx)(f.A.Header.Icon, {
              src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648)
            }) : null
          };
        case A.$pd.STREAMING:
          return {
            subtitle: _.intl.string(_.t.HyGHj7), icon: null != e && null != e.getIconURL(64) ? (0, r.jsx)(f.A.Header.Icon, {
              src: e.getIconURL(64)
            }) : null
          };
        case A.$pd.LISTENING:
          let i;
          return i = (0, s.A)(E) ? (0, r.jsx)(f.A.Header.Icon, {
            src: f.A.Header.Icon.Src.SPOTIFY
          }) : null != e.getIconURL(64) ? (0, r.jsx)(f.A.Header.Icon, {
            src: e.getIconURL(64)
          }) : (0, r.jsx)(f.A.Header.Icon, {
            src: n(960648)
          }), {
            subtitle: _.intl.formatToPlainString(_.t.NF5xop, {
              name: E.name
            }),
            icon: i
          };
        case A.$pd.WATCHING:
          return {
            subtitle: _.intl.formatToPlainString(_.t.pW3Ip3, {
              name: E.name
            }), icon: null != e && null != e.getIconURL(64) ? (0, r.jsx)(f.A.Header.Icon, {
              src: e.getIconURL(64)
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
          let e = m.Ij(t);
          if (null != e) return e
        }
        if (null != t && t.type === A.$pd.LISTENING) return {
          subtitle: _.intl.string(_.t.rmnkz4),
          icon: (0, r.jsx)(f.A.Header.Icon, {
            src: f.A.Header.Icon.Src.SPOTIFY
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
        subtitle: (0, r.jsx)(h.Ay, {
          start: i,
          location: h.Ay.Locations.ACTIVITY_FEED_NEW,
          messageProps: y
        }),
        icon: null != n && null != n.getIconURL(64) ? (0, r.jsx)(f.A.Header.Icon, {
          src: n.getIconURL(64)
        }) : null
      }
    }
    return {
      subtitle: _.intl.string(_.t.sau5tt),
      icon: (0, r.jsx)(f.A.Header.Icon, {
        src: f.A.Header.Icon.Src.MULTIPLE
      })
    }
  }(b), T = (0, p.A)({
    applicationId: null == (i = b.currentActivities[0]) || null == (t = i.activity) ? true : t.application_id,
    location: "FriendsActivityFeed",
    source: d.Ob.FriendsActivityFeed
  }), j = (0, c.A)({
    userId: v.user.id,
    guildId: null == I ? true : I.id
  }), x = (0, u.a)({
    displayNameStyles: j
  });
  return (0, r.jsx)(f.A.Header, {
    priorityUser: v,
    guildId: null == I ? true : I.id,
    title: S,
    subtitle: C,
    icon: N,
    onSubtitleClick: T,
    onIconClick: T,
    onContextMenu: e => E(e, v.user),
    displayNameFont: 1 === y.length ? x : true
  })
}
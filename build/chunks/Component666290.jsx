/** Chunk was on 21738 **/
/** chunk id: 666290, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  var t, i;
  let {
    party: _,
    onUserContextMenu: E
  } = e, {
    priorityMembers: O,
    partiedMembers: y,
    guildContext: I
  } = _, v = O[0], S = function(e) {
    let {
      priorityMembers: t,
      partiedMembers: n
    } = e, r = new Set(t.map(e => {
      let {
        user: t
      } = e;
      return t.id
    })), i = n.filter(e => !r.has(e.id)), l = h.Ay.getName(t[0].user), a = null != t[1] ? h.Ay.getName(t[1].user) : null != i[0] ? h.Ay.getName(i[0]) : null;
    switch (n.length) {
      case 1:
        return l;
      case 2:
        return b.intl.format(b.t.t1DyC1, {
          user1: l,
          user2: a
        });
      default:
        return b.intl.format(b.t["5CSEcJ"], {
          user1: l,
          user2: a,
          extras: n.length - 2
        })
    }
  }(_), {
    subtitle: C,
    icon: N
  } = function(e) {
    var t;
    let {
      priorityMembers: i,
      partiedMembers: c,
      voiceChannels: u,
      currentActivities: d
    } = e, p = i.length, h = c.length - p, _ = d[0], E = null == _ ? true : _.activity, O = null == _ ? true : _.startedPlayingTime, y = {
      name: null != (t = null == E ? true : E.name) ? t : ""
    };
    if ((0, a.A)(E) && null != E) return {
      subtitle: (0, r.jsx)(f.Ay, {
        start: O,
        location: f.Ay.Locations.ACTIVITY_FEED_NEW,
        messageProps: y
      }),
      icon: null
    };
    if (p + h === 1 && null != _) {
      let {
        game: e
      } = _;
      if (null == E) return {
        subtitle: null,
        icon: null
      };
      let t = A.Ij(E);
      if (null != t) return t;
      switch (E.type) {
        case m.$pd.PLAYING:
          if ((0, o.A)(E)) return {
            subtitle: b.intl.string(b.t.tO8wOx),
            icon: (0, r.jsx)(g.A.Header.Icon, {
              src: g.A.Header.Icon.Src.XBOX
            })
          };
          return {
            subtitle: (0, r.jsx)(f.Ay, {
              start: O,
              location: f.Ay.Locations.ACTIVITY_FEED_NEW,
              messageProps: y
            }), icon: null != e ? (0, r.jsx)(g.A.Header.Icon, {
              src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648)
            }) : null
          };
        case m.$pd.STREAMING:
          return {
            subtitle: b.intl.string(b.t.HyGHj7), icon: null != e && null != e.getIconURL(64) ? (0, r.jsx)(g.A.Header.Icon, {
              src: e.getIconURL(64)
            }) : null
          };
        case m.$pd.LISTENING:
          let i;
          return i = (0, s.A)(E) ? (0, r.jsx)(g.A.Header.Icon, {
            src: g.A.Header.Icon.Src.SPOTIFY
          }) : null != e.getIconURL(64) ? (0, r.jsx)(g.A.Header.Icon, {
            src: e.getIconURL(64)
          }) : (0, r.jsx)(g.A.Header.Icon, {
            src: n(960648)
          }), {
            subtitle: b.intl.formatToPlainString(b.t.NF5xop, {
              name: E.name
            }),
            icon: i
          };
        case m.$pd.WATCHING:
          return {
            subtitle: b.intl.formatToPlainString(b.t.pW3Ip3, {
              name: E.name
            }), icon: null != e && null != e.getIconURL(64) ? (0, r.jsx)(g.A.Header.Icon, {
              src: e.getIconURL(64)
            }) : null
          };
        default:
          return {
            subtitle: b.intl.string(b.t.grGyaf), icon: null
          }
      }
    }
    if (0 === d.length) {
      if (u.length > 0) return {
        subtitle: b.intl.string(b.t.grGyaf),
        icon: null
      };
      let e = d[0];
      if (null != e) {
        let {
          activity: t
        } = e;
        if (null != t) {
          let e = A.Ij(t);
          if (null != e) return e
        }
        if (null != t && t.type === m.$pd.LISTENING) return {
          subtitle: b.intl.string(b.t.rmnkz4),
          icon: (0, r.jsx)(g.A.Header.Icon, {
            src: g.A.Header.Icon.Src.SPOTIFY
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
        subtitle: (0, r.jsx)(f.Ay, {
          start: i,
          location: f.Ay.Locations.ACTIVITY_FEED_NEW,
          messageProps: y
        }),
        icon: null != n && null != n.getIconURL(64) ? (0, r.jsx)(g.A.Header.Icon, {
          src: n.getIconURL(64)
        }) : null
      }
    }
    return {
      subtitle: b.intl.string(b.t.sau5tt),
      icon: (0, r.jsx)(g.A.Header.Icon, {
        src: g.A.Header.Icon.Src.MULTIPLE
      })
    }
  }(_), T = (0, p.A)({
    applicationId: null == (i = _.currentActivities[0]) || null == (t = i.activity) ? true : t.application_id,
    location: "FriendsActivityFeed",
    source: d.Ob.FriendsActivityFeed
  }), j = (0, c.A)({
    userId: v.user.id,
    guildId: null == I ? true : I.id
  }), x = (0, u.a)({
    displayNameStyles: j
  });
  return (0, r.jsx)(g.A.Header, {
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
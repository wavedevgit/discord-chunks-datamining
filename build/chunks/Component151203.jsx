/** Chunk was on 42048 **/
/** chunk id: 151203, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  u = require.n(Chunk735438),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk110574 = require("./110574.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk542986 = require("./542986.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk275167 = require("./275167.js");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function w(e) {
  let {
    guildId: t,
    guildOwnerId: s,
    member: u
  } = e, l = g.default.getUser(u.userId), o = i.useRef(null);
  return (0, n.jsx)(p.A, {
    targetElementRef: o,
    userId: u.userId,
    guildId: t,
    spacing: 14,
    clickTrap: true,
    children: (e, i) => {
      let {
        isShown: c
      } = i;
      return (0, n.jsx)(a.A, j({
        ref: o,
        className: y.Dc,
        selected: c,
        colorString: u.colorString,
        colorStrings: u.colorStrings,
        user: l,
        isOwner: u.userId === s,
        nick: u.nick,
        premiumSince: null == u.premiumSince ? null : new Date(u.premiumSince),
        guildId: t,
        onContextMenu: e => {
          (0, d.L3)(e, async () => {
            let {
              default: e
            } = await Promise.all([r.e("97262"), r.e("91042"), r.e("55109")]).then(r.bind(r, 365689));
            return r => {
              var i, s;
              return (0, n.jsx)(e, (i = j({}, r), s = s = {
                user: l,
                guildId: t,
                showMediaItems: true
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  r.push.apply(r, n)
                }
                return r
              })(Object(s)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
              }), i))
            }
          })
        }
      }, e), u.userId)
    }
  }, l.id)
}

function I(e) {
  let {
    guild: t,
    transitionState: r,
    onClose: s
  } = e, d = i.useMemo(() => f.A.getFriendIDs(), []);
  i.useEffect(() => {
    m.A.fetchFriendMembersIfNotFetched(t.id, d)
  }, [t.id, d]);
  let a = (0, o.bG)([b.Ay], () => b.Ay.getMembers(t.id)),
    p = i.useMemo(() => u()(a).filter(e => !!d.includes(e.userId) && null != g.default.getUser(e.userId)).sortBy(e => {
      var t;
      let r = g.default.getUser(e.userId);
      return (null != r ? null != (t = e.nick) ? t : r.username : "").toLocaleLowerCase()
    }).map(e => (0, n.jsx)(w, {
      guildId: t.id,
      guildOwnerId: t.ownerId,
      member: e
    }, e.userId)).value(), [d, t.id, t.ownerId, a]),
    y = m.A.isFetchingFriendsForGuild(t.id);
  return (0, n.jsxs)(l.Modal, {
    title: O.intl.string(O.t.kYxEcH),
    subtitle: O.intl.format(y ? O.t.EtQnZi : O.t.OgMdNS, {
      guildName: t.name,
      numFriends: p.length
    }),
    actions: true,
    transitionState: r,
    onClose: s,
    children: [y && (0, n.jsx)(c.y$y, {}), p]
  })
}
/** Chunk was on 62635 **/
/** chunk id: 564232, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk276264 = require("./276264.jsx"),
  Chunk456077 = require("./456077.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk432496 = require("./432496.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk146807 = require("./146807.js");

function y(e) {
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
  } = e, l = p.default.getUser(u.userId), o = i.useRef(null);
  return (0, n.jsx)(f.Z, {
    targetElementRef: o,
    userId: u.userId,
    guildId: t,
    spacing: 14,
    clickTrap: true,
    children: (e, i) => {
      let {
        isShown: c
      } = i;
      return (0, n.jsx)(a.Z, y({
        ref: o,
        className: j.member,
        selected: c,
        colorString: u.colorString,
        colorStrings: u.colorStrings,
        user: l,
        isOwner: u.userId === s,
        nick: u.nick,
        premiumSince: null == u.premiumSince ? null : new Date(u.premiumSince),
        guildId: t,
        onContextMenu: e => {
          (0, d.jW)(e, async () => {
            let {
              default: e
            } = await Promise.all([r.e("79695"), r.e("26976"), r.e("34138")]).then(r.bind(r, 415118));
            return r => {
              var i, s;
              return (0, n.jsx)(e, (i = y({}, r), s = s = {
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
  } = e, d = i.useMemo(() => b.Z.getFriendIDs(), []);
  i.useEffect(() => {
    g.Z.fetchFriendMembersIfNotFetched(t.id, d)
  }, [t.id, d]);
  let a = (0, o.e7)([m.ZP], () => m.ZP.getMembers(t.id)),
    f = i.useMemo(() => u()(a).filter(e => !!d.includes(e.userId) && null != p.default.getUser(e.userId)).sortBy(e => {
      var t;
      let r = p.default.getUser(e.userId);
      return (null != r ? null != (t = e.nick) ? t : r.username : "").toLocaleLowerCase()
    }).map(e => (0, n.jsx)(w, {
      guildId: t.id,
      guildOwnerId: t.ownerId,
      member: e
    }, e.userId)).value(), [d, t.id, t.ownerId, a]),
    j = g.Z.isFetchingFriendsForGuild(t.id);
  return (0, n.jsxs)(l.Modal, {
    title: O.intl.string(O.t.kYxEcH),
    subtitle: O.intl.format(j ? O.t.EtQnZi : O.t.OgMdNS, {
      guildName: t.name,
      numFriends: f.length
    }),
    actions: true,
    transitionState: r,
    onClose: s,
    children: [j && (0, n.jsx)(c.$jN, {}), f]
  })
}
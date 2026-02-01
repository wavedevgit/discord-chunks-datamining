/** Chunk was on 77927 **/
/** chunk id: 708653, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $X: () => p,
  As: () => j,
  Ay: () => S
}), require("./65821.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk996439 = require("./996439.js"),
  Chunk810412 = require("./810412.js"),
  Chunk914853 = require("./914853.js"),
  Chunk509295 = require("./509295.js"),
  Chunk406595 = require("./406595.js"),
  Chunk652215 = require("./652215.js"),
  Chunk895867 = require("./895867.js"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  return e ? v.intl.string(v.t.Bou7lT) : v.intl.string(v.t["4wcdE/"])
}

function O(e) {
  return e ? v.intl.string(g.default.Xr8XHk) : v.intl.string(g.default.w1MU8Y)
}

function h(e, t, n) {
  let g = "CHANNEL" === t.kind ? t.channel.id : t.userId,
    v = function(e, t) {
      let [n] = (0, i.bG)([b.A], () => b.A.isFavorite(e, t), [e, t], d.D);
      return n
    }(e, g);
  if (!(0, i.bG)([o.A, c.A, u.default], () => {
      switch (t.kind) {
        case "CHANNEL": {
          let {
            channel: n
          } = t, r = n.isDM() || n.isMultiUserDM() || n.isPrivate();
          switch (true) {
            case e === f.x.MESSAGES && r:
              returntrue;
            case e === f.x.MESSAGES && (0, a.ke)(n.type):
              return o.A.can(y.xBc.READ_MESSAGE_HISTORY, n);
            case e === f.x.VOICE && (0, a.ay)(n.type):
              return (0, a.ay)(n.type) && o.A.can(y.xBc.VIEW_CHANNEL, n);
            case e === f.x.FRIENDS:
            default:
              returnfalse
          }
        }
        case "USER": {
          if (e !== f.x.FRIENDS) returnfalse;
          let {
            userId: n
          } = t;
          return u.default.getId() !== n && c.A.isFriend(n)
        }
        default:
          throw Error("Unhandled overlay favorite target: ".concat(String(t)))
      }
    })) return {
    isFavorite: v,
    toggleFavoriteItem: null,
    addFavoriteItem: null,
    removeFavoriteItem: null
  };
  let h = "CHANNEL" === t.kind ? E : O,
    p = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
    j = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
    S = (0, r.jsx)(l.Drp, {
      id: p,
      label: h(false),
      action: () => {
        (0, A.k)({
          tab: e,
          targetId: g,
          isFavorite: true
        }), (0, s.YX)(n, {
          type: s.Z5.FAVORITE,
          value: s.IP.ADDED_TO_FAVORITES,
          secondaryValue: e,
          userId: e === f.x.FRIENDS ? g : true
        })
      }
    }),
    I = (0, r.jsx)(l.Drp, {
      id: j,
      label: h(true),
      color: "danger",
      action: () => {
        (0, A.k)({
          tab: e,
          targetId: g,
          isFavorite: false
        }), (0, s.YX)(n, {
          type: s.Z5.FAVORITE,
          value: s.IP.REMOVED_FROM_FAVORITES,
          secondaryValue: e,
          userId: e === f.x.FRIENDS ? g : true
        })
      }
    });
  return {
    isFavorite: v,
    toggleFavoriteItem: v ? I : S,
    addFavoriteItem: S,
    removeFavoriteItem: I
  }
}

function p(e, t, n) {
  return h(e, {
    kind: "CHANNEL",
    channel: t
  }, n)
}

function j(e, t) {
  return h(f.x.FRIENDS, {
    kind: "USER",
    userId: e
  }, t)
}

function S(e, t, n) {
  return p(e, t, n)
}
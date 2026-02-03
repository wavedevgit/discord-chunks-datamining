/** Chunk was on 77927 **/
/** chunk id: 708653, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $X: () => j,
  As: () => S,
  Ay: () => I
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
  Chunk589051 = require("./589051.js"),
  Chunk509295 = require("./509295.js"),
  Chunk406595 = require("./406595.js"),
  Chunk652215 = require("./652215.js"),
  Chunk895867 = require("./895867.js"),
  Chunk985018 = require("./985018.jsx");

function O(e) {
  return e ? E.intl.string(E.t.Bou7lT) : E.intl.string(E.t["4wcdE/"])
}

function h(e) {
  return e ? E.intl.string(v.default.Xr8XHk) : E.intl.string(v.default.w1MU8Y)
}

function p(e, t, n) {
  let {
    hasFriendList: v
  } = (0, A.M8)("useOverlayFavoritesToggleMenuItems"), E = "CHANNEL" === t.kind ? t.channel.id : t.userId, p = function(e, t) {
    let [n] = (0, i.bG)([g.A], () => g.A.isFavorite(e, t), [e, t], s.D);
    return n
  }(e, E), j = (0, i.bG)([o.A, c.A, u.default], () => {
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
  });
  if (!v || !j) return {
    isFavorite: p,
    toggleFavoriteItem: null,
    addFavoriteItem: null,
    removeFavoriteItem: null
  };
  let S = "CHANNEL" === t.kind ? O : h,
    I = "CHANNEL" === t.kind ? "overlay-favorite-channel" : "overlay-favorite-user",
    N = "CHANNEL" === t.kind ? "overlay-unfavorite-channel" : "overlay-unfavorite-user",
    m = (0, r.jsx)(l.Drp, {
      id: I,
      label: S(false),
      action: () => {
        (0, b.k)({
          tab: e,
          targetId: E,
          isFavorite: true
        }), (0, d.YX)(n, {
          type: d.Z5.FAVORITE,
          value: d.IP.ADDED_TO_FAVORITES,
          secondaryValue: e,
          userId: e === f.x.FRIENDS ? E : true
        })
      }
    }),
    M = (0, r.jsx)(l.Drp, {
      id: N,
      label: S(true),
      color: "danger",
      action: () => {
        (0, b.k)({
          tab: e,
          targetId: E,
          isFavorite: false
        }), (0, d.YX)(n, {
          type: d.Z5.FAVORITE,
          value: d.IP.REMOVED_FROM_FAVORITES,
          secondaryValue: e,
          userId: e === f.x.FRIENDS ? E : true
        })
      }
    });
  return {
    isFavorite: p,
    toggleFavoriteItem: p ? M : m,
    addFavoriteItem: m,
    removeFavoriteItem: M
  }
}

function j(e, t, n) {
  return p(e, {
    kind: "CHANNEL",
    channel: t
  }, n)
}

function S(e, t) {
  return p(f.x.FRIENDS, {
    kind: "USER",
    userId: e
  }, t)
}

function I(e, t, n) {
  return j(e, t, n)
}
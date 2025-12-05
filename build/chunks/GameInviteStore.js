/** Chunk was on 83037 **/
/** chunk id: 317632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let u = [],
  d = {},
  f = null,
  h = 0;

function p(e) {
  let t = null;
  try {
    t = JSON.parse(e.launch_parameters)
  } catch (e) {
    return null
  }
  if (e.platform_type === a.ABu.XBOX) {
    var n, r;
    let i = null == t ? true : t.titleId,
      l = null == t ? true : t.inviteToken;
    return null == i || null == l ? null : (n = c({}, e), r = r = {
      parsed_launch_parameters: {
        titleId: i,
        inviteToken: l
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n)
  }
  return null
}
class g extends(r = Chunk442837.ZP.Store) {
  getInvites() {
    return u
  }
  getInviteStatuses() {
    return d
  }
  isInviteGameInstalled(e) {
    var t;
    return null == (t = d[e.invite_id]) ? true : t.installed
  }
  isInviteJoinable(e) {
    var t;
    return null == (t = d[e.invite_id]) ? true : t.joinable
  }
  getLastUnseenInvite() {
    return f
  }
  getUnseenInviteCount() {
    return h
  }
}
s(g, "displayName", "GameInviteStore");
let m = new g(Chunk570140.Z, {
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      gameInvites: t
    } = e;
    u = t.map(p).filter(o.lm)
  },
  GAME_INVITE_CREATE: function(e) {
    let {
      gameInvite: t
    } = e, n = p(t);
    null != n && (u = [n, ...u], f = t, h += 1)
  },
  GAME_INVITE_DELETE: function(e) {
    let {
      inviteId: t
    } = e;
    u = u.filter(e => e.invite_id !== t)
  },
  GAME_INVITE_DELETE_MANY: function(e) {
    let {
      inviteIds: t
    } = e;
    u = u.filter(e => !t.includes(e.invite_id))
  },
  GAME_INVITE_UPDATE_STATUS: function(e) {
    (d = c({}, d))[e.inviteId] = {
      installed: e.installed,
      joinable: e.joinable
    }
  },
  GAME_INVITE_CLEAR_UNSEEN: function(e) {
    f = null, h = 0
  }
})
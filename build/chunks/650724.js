/** Chunk was on web.js **/
/** chunk id: 650724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => v
});
var Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk717125 = require("./717125.js"),
  Chunk376943 = require("./376943.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk36491 = require("./36491.js"),
  Chunk219444 = require("./219444.js"),
  Chunk752755 = require("./752755.js"),
  Chunk461715 = require("./461715.js"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  let n = (0, _.$k)(),
    E = (0, m.CI)(e),
    b = (0, i.bG)([c.Ay, o.default], () => {
      let e = o.default.getId();
      return c.Ay.isMember(null == E ? true : E.guildId, e)
    }, [E]),
    v = (0, i.bG)([a.A], () => null != E && (null == E ? true : E.channelId) != null && a.A.isChannelGated(E.guildId, E.channelId), [E]),
    A = t.hasFlag(g.pr7.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: I,
      guild: S,
      parentChannel: T,
      user: C,
      selectedGuildId: N,
      canAccess: R
    } = (0, i.cf)([h.A, u.A, l.A, f.default, d.A], () => {
      var e;
      let t = null == (e = h.A.getMediaPostEmbed(null == E ? true : E.threadId)) ? true : e.media,
        n = u.A.getGuild(null == E ? true : E.guildId),
        r = l.A.getChannel(null == E ? true : E.channelId),
        i = f.default.getUser(null == t ? true : t.author_id),
        a = d.A.getGuildId(),
        o = null != r && (0, s.nc)(r);
      return {
        rawMediaPostEmbedData: t,
        guild: n,
        parentChannel: r,
        user: i,
        selectedGuildId: a,
        canAccess: o
      }
    }, [E]),
    w = r.useMemo(() => {
      let e = (0, m.tU)({
        mediaPostEmbedData: I,
        guild: S,
        parentChannel: T,
        user: C,
        selectedGuildId: N,
        canAccess: R
      });
      return null == e ? null : O(y({}, e), {
        user: C
      })
    }, [I, S, T, C, N, R]);
  return r.useEffect(() => {
    if ((null == E ? true : E.threadId) != null) {
      let e = h.A.getEmbedFetchState(E.threadId);
      true !== n || e !== h.e.NOT_FETCHED || b && false === v || !b && A || (0, p.O0)(null == E ? true : E.threadId)
    }
  }, [E, n, b, v, A]), w
}
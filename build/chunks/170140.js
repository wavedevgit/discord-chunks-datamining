/** Chunk was on web.js **/
/** chunk id: 170140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => v
});
var Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk430198 = require("./430198.js"),
  Chunk754688 = require("./754688.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk158222 = require("./158222.js"),
  Chunk312146 = require("./312146.js"),
  Chunk487554 = require("./487554.js"),
  Chunk874748 = require("./874748.js"),
  Chunk981631 = require("./981631.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
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

function y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  let n = (0, _.p$)(),
    E = (0, h.LR)(e),
    y = (0, i.e7)([c.ZP, s.default], () => {
      let e = s.default.getId();
      return c.ZP.isMember(null == E ? true : E.guildId, e)
    }, [E]),
    v = (0, i.e7)([o.Z], () => null != E && (null == E ? true : E.channelId) != null && o.Z.isChannelGated(E.guildId, E.channelId), [E]),
    S = t.hasFlag(g.iLy.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: I,
      guild: T,
      parentChannel: C,
      user: A,
      selectedGuildId: N,
      canAccess: P
    } = (0, i.cj)([m.Z, u.Z, l.Z, f.default, d.Z], () => {
      var e;
      let t = null == (e = m.Z.getMediaPostEmbed(null == E ? true : E.threadId)) ? true : e.media,
        n = u.Z.getGuild(null == E ? true : E.guildId),
        r = l.Z.getChannel(null == E ? true : E.channelId),
        i = f.default.getUser(null == t ? true : t.author_id),
        o = d.Z.getGuildId(),
        s = null != r && (0, a.YO)(r);
      return {
        rawMediaPostEmbedData: t,
        guild: n,
        parentChannel: r,
        user: i,
        selectedGuildId: o,
        canAccess: s
      }
    }, [E]),
    R = r.useMemo(() => {
      let e = (0, h.ku)({
        mediaPostEmbedData: I,
        guild: T,
        parentChannel: C,
        user: A,
        selectedGuildId: N,
        canAccess: P
      });
      return null == e ? null : O(b({}, e), {
        user: A
      })
    }, [I, T, C, A, N, P]);
  return r.useEffect(() => {
    if ((null == E ? true : E.threadId) != null) {
      let e = m.Z.getEmbedFetchState(E.threadId);
      true !== n || e !== m.M.NOT_FETCHED || y && false === v || !y && S || (0, p.xP)(null == E ? true : E.threadId)
    }
  }, [E, n, y, v, S]), R
}
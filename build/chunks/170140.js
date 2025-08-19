/** Chunk was on 91173 **/
/** chunk id: 170140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => b
});
var Chunk647438 = require("./647438.js"),
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

function b(e, t) {
  let n = (0, f.p$)(),
    b = (0, _.LR)(e),
    E = (0, i.e7)([c.ZP, o.default], () => {
      let e = o.default.getId();
      return c.ZP.isMember(null == b ? true : b.guildId, e)
    }, [b]),
    C = (0, i.e7)([l.Z], () => null != b && (null == b ? true : b.channelId) != null && l.Z.isChannelGated(b.guildId, b.channelId), [b]),
    v = t.hasFlag(h.iLy.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: O,
      guild: y,
      parentChannel: x,
      user: j,
      selectedGuildId: I,
      canAccess: S
    } = (0, i.cj)([g.Z, u.Z, s.Z, p.default, d.Z], () => {
      var e;
      let t = null == (e = g.Z.getMediaPostEmbed(null == b ? true : b.threadId)) ? true : e.media,
        n = u.Z.getGuild(null == b ? true : b.guildId),
        r = s.Z.getChannel(null == b ? true : b.channelId),
        i = p.default.getUser(null == t ? true : t.author_id),
        l = d.Z.getGuildId(),
        o = null != r && (0, a.YO)(r);
      return {
        rawMediaPostEmbedData: t,
        guild: n,
        parentChannel: r,
        user: i,
        selectedGuildId: l,
        canAccess: o
      }
    }, [b]),
    T = r.useMemo(() => {
      var e, t;
      let n = (0, _.ku)({
        mediaPostEmbedData: O,
        guild: y,
        parentChannel: x,
        user: j,
        selectedGuildId: I,
        canAccess: S
      });
      return null == n ? null : (e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, n), t = t = {
        user: j
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e)
    }, [O, y, x, j, I, S]);
  return r.useEffect(() => {
    if ((null == b ? true : b.threadId) != null) {
      let e = g.Z.getEmbedFetchState(b.threadId);
      true !== n || e !== g.M.NOT_FETCHED || E && false === C || !E && v || (0, m.xP)(null == b ? true : b.threadId)
    }
  }, [b, n, E, C, v]), T
}
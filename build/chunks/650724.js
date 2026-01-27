/** Chunk was on 92917 **/
/** chunk id: 650724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => b
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

function b(e, t) {
  let n = (0, f.$k)(),
    b = (0, h.CI)(e),
    A = (0, i.bG)([c.Ay, s.default], () => {
      let e = s.default.getId();
      return c.Ay.isMember(null == b ? true : b.guildId, e)
    }, [b]),
    y = (0, i.bG)([l.A], () => null != b && (null == b ? true : b.channelId) != null && l.A.isChannelGated(b.guildId, b.channelId), [b]),
    v = t.hasFlag(_.pr7.IS_CROSSPOST),
    {
      rawMediaPostEmbedData: x,
      guild: O,
      parentChannel: E,
      user: j,
      selectedGuildId: C,
      canAccess: I
    } = (0, i.cf)([g.A, u.A, o.A, p.default, d.A], () => {
      var e;
      let t = null == (e = g.A.getMediaPostEmbed(null == b ? true : b.threadId)) ? true : e.media,
        n = u.A.getGuild(null == b ? true : b.guildId),
        r = o.A.getChannel(null == b ? true : b.channelId),
        i = p.default.getUser(null == t ? true : t.author_id),
        l = d.A.getGuildId(),
        s = null != r && (0, a.nc)(r);
      return {
        rawMediaPostEmbedData: t,
        guild: n,
        parentChannel: r,
        user: i,
        selectedGuildId: l,
        canAccess: s
      }
    }, [b]),
    S = r.useMemo(() => {
      var e, t;
      let n = (0, h.tU)({
        mediaPostEmbedData: x,
        guild: O,
        parentChannel: E,
        user: j,
        selectedGuildId: C,
        canAccess: I
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
    }, [x, O, E, j, C, I]);
  return r.useEffect(() => {
    if ((null == b ? true : b.threadId) != null) {
      let e = g.A.getEmbedFetchState(b.threadId);
      true !== n || e !== g.e.NOT_FETCHED || A && false === y || !A && v || (0, m.O0)(null == b ? true : b.threadId)
    }
  }, [b, n, A, y, v]), S
}
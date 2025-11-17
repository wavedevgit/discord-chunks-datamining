/** Chunk was on 91315 **/
/** chunk id: 235449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FO: () => Z,
  nA: () => w,
  qQ: () => y,
  r7: () => b
}), require("./388685.js"), require("./642613.js"), require("./583741.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk883429 = require("./883429.js"),
  Chunk869382 = require("./869382.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk344185 = require("./344185.js"),
  Chunk920303 = require("./920303.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk91159 = require("./91159.js"),
  Chunk231338 = require("./231338.js");

function b() {
  Chunk473749.useEffect(() => {
    (0, Chunk91159.A_)()
  }, [])
}

function Z(e) {
  let t = function(e) {
      let t = (0, s.Wu)([d.Z, m.Z, c.Z], () => a()(m.Z.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
        let {
          id: t
        } = e;
        return c.Z.getChannel(t)
      }).filter(h.lm).filter(e => d.Z.can(p.Pl.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
      return r.useMemo(() => a()(t).sort((e, t) => g.default.compare(u.ZP.lastMessageId(e), u.ZP.lastMessageId(t))).reverse().value(), [t])
    }(e),
    [n, l] = (0, s.e7)([j.Z], () => a().partition(t, e => j.Z.hasJoined(e)), [t], s.pF);
  return {
    joinedThreadIds: n,
    unjoinedThreadIds: l
  }
}

function w(e) {
  let t = (0, s.Wu)([d.Z, m.Z, c.Z], () => a()(m.Z.getThreadsForGuild(e)).values().map(e => a().values(e)).flatten().map(e => {
    let {
      id: t
    } = e;
    return c.Z.getChannel(t)
  }).filter(h.lm).filter(e => d.Z.can(p.Pl.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
  return r.useMemo(() => a()(t).sort((e, t) => g.default.compare(u.ZP.lastMessageId(e), u.ZP.lastMessageId(t))).reverse().value(), [t])
}

function y(e, t, n, l) {
  let u = e.isModeratorReportChannel(),
    {
      showResolvedFlags: h
    } = (0, i.N)(e.id),
    {
      canLoadMore: g,
      loading: m,
      nextOffset: j,
      isInitialLoad: x
    } = (0, s.cj)([f.Z], () => ({
      loading: f.Z.isLoading(e.id, t, n, l),
      isInitialLoad: f.Z.isInitialLoad,
      canLoadMore: f.Z.canLoadMore,
      nextOffset: f.Z.nextOffset
    })),
    b = r.useCallback(() => {
      d.Z.can(p.Pl.READ_MESSAGE_HISTORY, e) && (!u || h) && v.Z.loadArchivedThreads({
        guildId: e.guild_id,
        channelId: e.id,
        sortOrder: t,
        tagFilter: n,
        tagSetting: l,
        offset: j
      })
    }, [e, t, n, l, j, h, u]),
    Z = r.useRef(b);
  return r.useEffect(() => {
    Z.current = b
  }), r.useEffect(() => {
    x && Z.current()
  }, [e.id, t, n, x, h]), r.useEffect(() => {
    o.Z.resort(e.id)
  }, [e.id, h]), {
    threadIds: (0, s.Wu)([f.Z, c.Z, d.Z], () => a()(f.Z.getThreads(e.id, t, n, l)).filter(e => {
      if (u && !h) returnfalse;
      let t = c.Z.getChannel(e);
      return null != t && d.Z.can(p.Pl.VIEW_CHANNEL, t)
    }).value()),
    canLoadMore: g,
    loading: (m || x) && h,
    loadMore: b
  }
}
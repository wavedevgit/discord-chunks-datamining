/** Chunk was on 34160 **/
/** chunk id: 424798, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fr: () => w,
  Kk: () => A,
  Mu: () => y,
  jO: () => p
}), require("./896048.js"), require("./638769.js"), require("./264879.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk919577 = require("./919577.js"),
  Chunk212007 = require("./212007.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk970278 = require("./970278.js"),
  Chunk45494 = require("./45494.js"),
  Chunk152007 = require("./152007.js"),
  Chunk867455 = require("./867455.js"),
  Chunk707539 = require("./707539.js"),
  Chunk818348 = require("./818348.js");

function A() {
  r.useEffect(() => {
    (0, v.ju)()
  }, [])
}

function p(e) {
  let t, n = (t = (0, s.yK)([u.A, m.A, c.A], () => a()(m.A.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
      let {
        id: t
      } = e;
      return c.A.getChannel(t)
    }).filter(h.Vq).filter(e => u.A.can(b.xB.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]), r.useMemo(() => a()(t).sort((e, t) => g.default.compare(d.Ay.lastMessageId(e), d.Ay.lastMessageId(t))).reverse().value(), [t])),
    [l, o] = (0, s.bG)([j.A], () => a().partition(n, e => j.A.hasJoined(e)), [n], s.My);
  return {
    joinedThreadIds: l,
    unjoinedThreadIds: o
  }
}

function y(e) {
  let t = (0, s.yK)([u.A, m.A, c.A], () => a()(m.A.getThreadsForGuild(e)).values().map(e => a().values(e)).flatten().map(e => {
    let {
      id: t
    } = e;
    return c.A.getChannel(t)
  }).filter(h.Vq).filter(e => u.A.can(b.xB.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
  return r.useMemo(() => a()(t).sort((e, t) => g.default.compare(d.Ay.lastMessageId(e), d.Ay.lastMessageId(t))).reverse().value(), [t])
}

function w(e, t, n, l) {
  let d = e.isModeratorReportChannel(),
    {
      showResolvedFlags: h
    } = (0, i.T)(e.id),
    {
      canLoadMore: g,
      loading: m,
      nextOffset: j,
      isInitialLoad: v
    } = (0, s.cf)([f.A], () => ({
      loading: f.A.isLoading(e.id, t, n, l),
      isInitialLoad: f.A.isInitialLoad,
      canLoadMore: f.A.canLoadMore,
      nextOffset: f.A.nextOffset
    })),
    A = r.useCallback(() => {
      u.A.can(b.xB.READ_MESSAGE_HISTORY, e) && (!d || h) && x.A.loadArchivedThreads({
        guildId: e.guild_id,
        channelId: e.id,
        sortOrder: t,
        tagFilter: n,
        tagSetting: l,
        offset: j
      })
    }, [e, t, n, l, j, h, d]),
    p = r.useRef(A);
  return r.useEffect(() => {
    p.current = A
  }), r.useEffect(() => {
    v && p.current()
  }, [e.id, t, n, v, h]), r.useEffect(() => {
    o.A.resort(e.id)
  }, [e.id, h]), {
    threadIds: (0, s.yK)([f.A, c.A, u.A], () => a()(f.A.getThreads(e.id, t, n, l)).filter(e => {
      if (d && !h) returnfalse;
      let t = c.A.getChannel(e);
      return null != t && u.A.can(b.xB.VIEW_CHANNEL, t)
    }).value()),
    canLoadMore: g,
    loading: (m || v) && h,
    loadMore: A
  }
}
/** Chunk was on 46989 **/
n.d(t, {
  II: () => m,
  Ow: () => O,
  P2: () => R,
  mw: () => A,
  z0: () => p
}), n(49124), n(388685);
var r, l = n(73800),
  i = n(94171),
  s = n(362383),
  a = n(731965),
  o = n(570140),
  u = n(110924),
  c = n(840877),
  d = n(952537),
  E = n(981631);

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
let m = -1;
var A = ((r = {}).MESSAGES = "messages", r.LINKS = "links", r.MEDIA = "media", r.ALL_COUNTS = "all_counts", r);

function g(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    i = JSON.stringify(r);
  return l ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i) : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i)
}
let f = {
    searchFetcher: null,
    searchTabFetcher: null,
    result: null,
    messageCount: m,
    lastMessage: null
  },
  T = (0, s.F)(() => new Map),
  I = (e, t) => {
    (0, a.j)(() => {
      T.setState(n => {
        let r = n.get(e);
        return null == r ? n.set(e, _({}, f, t)) : n.set(e, _({}, r, t)), n
      })
    })
  },
  h = e => T(t => t.get(e), i.X);

function O(e, t, n) {
  let r = null != n ? n : {};
  switch (t) {
    case "links":
      return _({
        author_id: e,
        has: ["link"]
      }, r);
    case "media":
      return _({
        author_id: e,
        attachment_extension: ["png", "jpg", "webp", "mov", "mp4", "gif", "mp3", "wav", "flac", "ogg", "opus"]
      }, r);
    case "all_counts":
      return _({
        author_id: [e],
        limit: 1,
        cursor: null
      }, r);
    default:
      return _({
        author_id: e
      }, r)
  }
}

function p(e, t, n) {
  return function(e, t, n, r) {
    let {
      addtionalQuery: i,
      shouldDispatch: s = !1
    } = r, a = l.useMemo(() => g(e, t, n, i), [e, t, n, i]), _ = h(a), A = (0, u.Z)(a), [T, p] = l.useState({});
    return l.useEffect(() => {
      if (A !== a) {
        let r = O(e, n, i),
          l = new c.ZP(t, E.aib.GUILD, r);
        I(a, {
          searchFetcher: l,
          messageCount: m,
          lastMessage: null
        }), setTimeout(() => {
          l.fetch(e => {
            let n = e.body,
              r = n.messages[0];
            if (I(a, {
                searchFetcher: l,
                result: n,
                messageCount: n.total_results,
                lastMessage: r
              }), p({}), s) {
              var i, u;
              o.Z.dispatch({
                type: "MOD_VIEW_SEARCH_FINISH",
                searchId: t,
                guildId: t,
                analyticsId: n.analytics_id,
                totalResults: n.total_results,
                channels: n.channels,
                messages: n.messages,
                threads: null != (i = n.threads) ? i : [],
                members: (null != (u = n.members) ? u : []).map(e => (0, d.Z)(e)),
                hasError: !1,
                doingHistoricalIndex: n.doing_deep_historical_index,
                documentsIndexed: n.documents_indexed
              })
            }
          }, e => {}, e => {
            I(a, {
              messageCount: 0,
              lastMessage: null
            }), p({})
          })
        })
      }
      return () => {}
    }, [e, t, _, a, n, i, A, s]), null != _ ? _ : f
  }(e, t, "messages", n)
}

function N(e, t, n, r) {
  let i = l.useMemo(() => g(e, t, n, r, !0), [e, t, n, r]),
    s = h(i),
    a = (0, u.Z)(i);
  return {
    key: i,
    previousKey: a,
    state: s
  }
}

function R(e, t, n) {
  var r, i, s;
  let {
    key: a,
    state: o
  } = N(e, t, "messages", n), {
    key: u,
    state: d
  } = N(e, t, "links", n), {
    key: _,
    state: A
  } = N(e, t, "media", n), g = l.useMemo(() => O(e, "all_counts", n), [e, n]), f = l.useMemo(() => ({
    tabs: {
      messages: O(e, "messages", g),
      links: O(e, "links", g),
      media: O(e, "media", g)
    },
    track_exact_total_hits: !0,
    include_nsfw: !0
  }), [e, g]), T = l.useCallback(e => {
    let t = e.messages,
      n = e.links,
      r = e.media;
    I(a, t), I(u, n), I(_, r)
  }, [u, _, a]), h = l.useCallback(e => {
    T({
      messages: e,
      links: e,
      media: e
    })
  }, [T]);
  l.useEffect(() => {
    let e = new c.tJ(t, E.aib.GUILD, g, f);
    h({
      searchTabFetcher: e,
      messageCount: m,
      lastMessage: null
    });
    let n = setTimeout(async () => {
      let t = null;
      try {
        let n = await e.makeRequest();
        t = null == n ? void 0 : n.body
      } catch (e) {
        t = null
      }
      if (null == t) h({
        messageCount: 0,
        lastMessage: null
      });
      else {
        var n, r, l, i, s, a;
        let e = t.tabs.messages,
          o = t.tabs.links,
          u = t.tabs.media;
        T({
          messages: {
            messageCount: null != (n = null == e ? void 0 : e.total_results) ? n : 0,
            lastMessage: null != (r = null == e ? void 0 : e.messages[0]) ? r : null
          },
          links: {
            messageCount: null != (l = null == o ? void 0 : o.total_results) ? l : 0,
            lastMessage: null != (i = null == o ? void 0 : o.messages[0]) ? i : null
          },
          media: {
            messageCount: null != (s = null == u ? void 0 : u.total_results) ? s : 0,
            lastMessage: null != (a = null == u ? void 0 : u.messages[0]) ? a : null
          }
        })
      }
      R({})
    });
    return () => {
      e.cancel(), clearTimeout(n)
    }
  }, [e, t, g, f, h, T]);
  let [p, R] = l.useState({});
  return {
    messagesCount: null != (r = null == o ? void 0 : o.messageCount) ? r : m,
    linksCount: null != (i = null == d ? void 0 : d.messageCount) ? i : m,
    mediaCount: null != (s = null == A ? void 0 : A.messageCount) ? s : m
  }
}
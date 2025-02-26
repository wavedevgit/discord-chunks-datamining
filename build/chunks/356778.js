/** Chunk was on 88119 **/
n.d(t, {
  II: () => f,
  Ow: () => y,
  P2: () => O,
  mw: () => m,
  z0: () => x
}), n(26686), n(47120);
var r, i = n(192379),
  l = n(232713),
  o = n(65400),
  a = n(731965),
  s = n(570140),
  c = n(110924),
  u = n(840877),
  d = n(952537),
  p = n(981631);

function h(e) {
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
let f = -1;
var m = ((r = {}).MESSAGES = "messages", r.LINKS = "links", r.MEDIA = "media", r.ALL_COUNTS = "all_counts", r);

function g(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
    i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
    l = JSON.stringify(r);
  return i ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(l) : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(l)
}
let b = {
    searchFetcher: null,
    searchTabFetcher: null,
    result: null,
    messageCount: f,
    lastMessage: null
  },
  _ = (0, o.F)(() => new Map),
  C = (e, t) => {
    (0, a.j)(() => {
      _.setState(n => {
        let r = n.get(e);
        return null == r ? n.set(e, h({}, b, t)) : n.set(e, h({}, r, t)), n
      })
    })
  },
  v = e => _(t => t.get(e), l.X);

function y(e, t, n) {
  let r = null != n ? n : {};
  switch (t) {
    case "links":
      return h({
        author_id: e,
        has: ["link"]
      }, r);
    case "media":
      return h({
        author_id: e,
        attachment_extension: ["png", "jpg", "webp", "mov", "mp4", "gif", "mp3", "wav", "flac", "ogg", "opus"]
      }, r);
    case "all_counts":
      return h({
        author_id: [e],
        limit: 1,
        cursor: null
      }, r);
    default:
      return h({
        author_id: e
      }, r)
  }
}

function x(e, t, n) {
  return function(e, t, n, r) {
    let {
      addtionalQuery: l,
      shouldDispatch: o = !1
    } = r, a = i.useMemo(() => g(e, t, n, l), [e, t, n, l]), h = v(a), m = (0, c.Z)(a), [_, x] = i.useState({});
    return i.useEffect(() => {
      if (m !== a) {
        let r = y(e, n, l),
          i = new u.ZP(t, p.aib.GUILD, r);
        C(a, {
          searchFetcher: i,
          messageCount: f,
          lastMessage: null
        }), setTimeout(() => {
          i.fetch(e => {
            let n = e.body,
              r = n.messages[0];
            if (C(a, {
                searchFetcher: i,
                result: n,
                messageCount: n.total_results,
                lastMessage: r
              }), x({}), o) {
              var l, c;
              s.Z.dispatch({
                type: "MOD_VIEW_SEARCH_FINISH",
                searchId: t,
                guildId: t,
                analyticsId: n.analytics_id,
                totalResults: n.total_results,
                channels: n.channels,
                messages: n.messages,
                threads: null !== (l = n.threads) && void 0 !== l ? l : [],
                members: (null !== (c = n.members) && void 0 !== c ? c : []).map(e => (0, d.Z)(e)),
                hasError: !1,
                doingHistoricalIndex: n.doing_deep_historical_index,
                documentsIndexed: n.documents_indexed
              })
            }
          }, e => {}, e => {
            C(a, {
              messageCount: 0,
              lastMessage: null
            }), x({})
          })
        })
      }
      return () => {}
    }, [e, t, h, a, n, l, m, o]), null != h ? h : b
  }(e, t, "messages", n)
}

function j(e, t, n, r) {
  let l = i.useMemo(() => g(e, t, n, r, !0), [e, t, n, r]),
    o = v(l),
    a = (0, c.Z)(l);
  return {
    key: l,
    previousKey: a,
    state: o
  }
}

function O(e, t, n) {
  var r, l, o;
  let {
    key: a,
    state: s
  } = j(e, t, "messages", n), {
    key: c,
    state: d
  } = j(e, t, "links", n), {
    key: h,
    state: m
  } = j(e, t, "media", n), g = i.useMemo(() => y(e, "all_counts", n), [e, n]), b = i.useMemo(() => ({
    tabs: {
      messages: y(e, "messages", g),
      links: y(e, "links", g),
      media: y(e, "media", g)
    },
    track_exact_total_hits: !0
  }), [e, g]), _ = i.useCallback(e => {
    let t = e.messages,
      n = e.links,
      r = e.media;
    C(a, t), C(c, n), C(h, r)
  }, [c, h, a]), v = i.useCallback(e => {
    _({
      messages: e,
      links: e,
      media: e
    })
  }, [_]);
  i.useEffect(() => {
    let e = new u.tJ(t, p.aib.GUILD, g, b);
    v({
      searchTabFetcher: e,
      messageCount: f,
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
      if (null == t) v({
        messageCount: 0,
        lastMessage: null
      });
      else {
        var n, r, i, l, o, a;
        let e = t.tabs.messages,
          s = t.tabs.links,
          c = t.tabs.media;
        _({
          messages: {
            messageCount: null !== (n = null == e ? void 0 : e.total_results) && void 0 !== n ? n : 0,
            lastMessage: null !== (r = null == e ? void 0 : e.messages[0]) && void 0 !== r ? r : null
          },
          links: {
            messageCount: null !== (i = null == s ? void 0 : s.total_results) && void 0 !== i ? i : 0,
            lastMessage: null !== (l = null == s ? void 0 : s.messages[0]) && void 0 !== l ? l : null
          },
          media: {
            messageCount: null !== (o = null == c ? void 0 : c.total_results) && void 0 !== o ? o : 0,
            lastMessage: null !== (a = null == c ? void 0 : c.messages[0]) && void 0 !== a ? a : null
          }
        })
      }
      O({})
    });
    return () => {
      e.cancel(), clearTimeout(n)
    }
  }, [e, t, g, b, v, _]);
  let [x, O] = i.useState({});
  return {
    messagesCount: null !== (r = null == s ? void 0 : s.messageCount) && void 0 !== r ? r : f,
    linksCount: null !== (l = null == d ? void 0 : d.messageCount) && void 0 !== l ? l : f,
    mediaCount: null !== (o = null == m ? void 0 : m.messageCount) && void 0 !== o ? o : f
  }
}
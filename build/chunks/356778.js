/** Chunk was on 7318 **/
/** chunk id: 356778, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  II: () => h,
  Ow: () => D,
  P2: () => I,
  mw: () => u,
  z0: () => M
}), require("./49124.js"), require("./388685.js");
var n, Chunk647438 = require("./647438.js"),
  Chunk524825 = require("./524825.js"),
  Chunk131193 = require("./131193.js"),
  Chunk731965 = require("./731965.js"),
  Chunk570140 = require("./570140.js"),
  Chunk110924 = require("./110924.js"),
  Chunk558706 = require("./558706.js"),
  Chunk952537 = require("./952537.js"),
  Chunk981631 = require("./981631.js");

function v(A) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(A) {
      return Object.getOwnPropertyDescriptor(t, A).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = t[e], e in A ? Object.defineProperty(A, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : A[e] = n
    })
  }
  return A
}
let h = false;
var u = ((n = {}).MESSAGES = "messages", n.LINKS = "links", n.MEDIA = "media", n.ALL_COUNTS = "all_counts", n);

function d(A, e, t) {
  let n = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
    r = arguments.length > 4 && true !== arguments[4] && arguments[4],
    l = JSON.stringify(n);
  return r ? "guild_".concat(e, "_search_tab_").concat(t, "_for_").concat(A, "_with_additonal_").concat(l) : "guild_".concat(e, "_search_").concat(t, "_for_").concat(A, "_with_additonal_").concat(l)
}
let E = {
    searchFetcher: null,
    searchTabFetcher: null,
    result: null,
    messageCount: h,
    lastMessage: null
  },
  C = (0, Chunk131193.F)(() => new Map),
  B = (A, e) => {
    (0, s.j)(() => {
      C.setState(t => {
        let n = t.get(A);
        return null == n ? t.set(A, v({}, E, e)) : t.set(A, v({}, n, e)), t
      })
    })
  },
  w = A => C(e => e.get(A), l.X);

function D(A, e, t) {
  let n = null != t ? t : {};
  switch (e) {
    case "links":
      return v({
        author_id: A,
        has: ["link"]
      }, n);
    case "media":
      return v({
        author_id: A,
        attachment_extension: ["png", "jpg", "webp", "mov", "mp4", "gif", "mp3", "wav", "flac", "ogg", "opus"]
      }, n);
    case "all_counts":
      return v({
        author_id: [A],
        limit: 1,
        cursor: null
      }, n);
    default:
      return v({
        author_id: A
      }, n)
  }
}

function M(A, e, t) {
  return function(A, e, t, n) {
    let {
      addtionalQuery: l,
      shouldDispatch: i = false
    } = n, s = r.useMemo(() => d(A, e, t, l), [A, e, t, l]), v = w(s), u = (0, o.Z)(s), [C, M] = r.useState({});
    return r.useEffect(() => {
      if (u !== s) {
        let n = D(A, t, l),
          r = new g.Yn(e, f.aib.GUILD, n);
        B(s, {
          searchFetcher: r,
          messageCount: h,
          lastMessage: null
        }), setTimeout(() => {
          r.fetch(A => {
            let t = A.body,
              n = t.messages[0];
            if (B(s, {
                searchFetcher: r,
                result: t,
                messageCount: t.total_results,
                lastMessage: n
              }), M({}), i) {
              var l, o, g;
              a.Z.dispatch({
                type: "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
                guildId: e,
                data: [{
                  id: e,
                  analyticsId: t.analytics_id,
                  totalResults: t.total_results,
                  channels: null != (l = t.channels) ? l : [],
                  messages: t.messages,
                  threads: null != (o = t.threads) ? o : [],
                  members: (null != (g = t.members) ? g : []).map(A => (0, c.Z)(A)),
                  doingHistoricalIndex: t.doing_deep_historical_index,
                  documentsIndexed: t.documents_indexed,
                  cursor: null
                }]
              })
            }
          }, A => {}, A => {
            B(s, {
              messageCount: 0,
              lastMessage: null
            }), M({})
          })
        })
      }
      return () => {}
    }, [A, e, v, s, t, l, u, i]), null != v ? v : E
  }(A, e, "messages", t)
}

function p(A, e, t, n) {
  let l = r.useMemo(() => d(A, e, t, n, true), [A, e, t, n]),
    i = w(l),
    s = (0, o.Z)(l);
  return {
    key: l,
    previousKey: s,
    state: i
  }
}

function I(A, e, t) {
  var n, l, i;
  let {
    key: s,
    state: a
  } = p(A, e, "messages", t), {
    key: o,
    state: c
  } = p(A, e, "links", t), {
    key: v,
    state: u
  } = p(A, e, "media", t), d = r.useMemo(() => D(A, "all_counts", t), [A, t]), E = r.useMemo(() => ({
    tabs: {
      messages: D(A, "messages", d),
      links: D(A, "links", d),
      media: D(A, "media", d)
    },
    track_exact_total_hits: true,
    include_nsfw: true
  }), [A, d]), C = r.useCallback(A => {
    let e = A.messages,
      t = A.links,
      n = A.media;
    B(s, e), B(o, t), B(v, n)
  }, [o, v, s]), w = r.useCallback(A => {
    C({
      messages: A,
      links: A,
      media: A
    })
  }, [C]);
  r.useEffect(() => {
    let A = new g.tJ(e, f.aib.GUILD, d, E);
    w({
      searchTabFetcher: A,
      messageCount: h,
      lastMessage: null
    });
    let t = setTimeout(async () => {
      let e = null;
      try {
        let t = await A.makeRequest({
          rejectWithError: false
        });
        e = null == t ? true : t.body
      } catch (A) {
        e = null
      }
      if (null == e) w({
        messageCount: 0,
        lastMessage: null
      });
      else {
        var t, n, r, l, i, s;
        let A = e.tabs.messages,
          a = e.tabs.links,
          o = e.tabs.media;
        C({
          messages: {
            messageCount: null != (t = null == A ? true : A.total_results) ? t : 0,
            lastMessage: null != (n = null == A ? true : A.messages[0]) ? n : null
          },
          links: {
            messageCount: null != (r = null == a ? true : a.total_results) ? r : 0,
            lastMessage: null != (l = null == a ? true : a.messages[0]) ? l : null
          },
          media: {
            messageCount: null != (i = null == o ? true : o.total_results) ? i : 0,
            lastMessage: null != (s = null == o ? true : o.messages[0]) ? s : null
          }
        })
      }
      I({})
    });
    return () => {
      A.cancel(), clearTimeout(t)
    }
  }, [A, e, d, E, w, C]);
  let [M, I] = r.useState({});
  return {
    messagesCount: null != (n = null == a ? true : a.messageCount) ? n : h,
    linksCount: null != (l = null == c ? true : c.messageCount) ? l : h,
    mediaCount: null != (i = null == u ? true : u.messageCount) ? i : h
  }
}
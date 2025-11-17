/** Chunk was on 66201 **/
/** chunk id: 356778, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  II: () => A,
  Ow: () => O,
  P2: () => S,
  mw: () => T,
  z0: () => f
}), require("./49124.js"), require("./388685.js");
var r, Chunk473749 = require("./473749.js"),
  Chunk55160 = require("./55160.js"),
  Chunk748521 = require("./748521.js"),
  Chunk731965 = require("./731965.js"),
  Chunk570140 = require("./570140.js"),
  Chunk110924 = require("./110924.js"),
  Chunk558706 = require("./558706.js"),
  Chunk952537 = require("./952537.js"),
  Chunk981631 = require("./981631.js");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let A = false;
var T = ((r = {}).MESSAGES = "messages", r.LINKS = "links", r.MEDIA = "media", r.ALL_COUNTS = "all_counts", r);

function I(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
    l = arguments.length > 4 && true !== arguments[4] && arguments[4],
    i = JSON.stringify(r);
  return l ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i) : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(i)
}
let m = {
    searchFetcher: null,
    searchTabFetcher: null,
    result: null,
    messageCount: A,
    lastMessage: null
  },
  g = (0, Chunk748521.F)(() => new Map),
  N = (e, t) => {
    (0, a.j)(() => {
      g.setState(n => {
        let r = n.get(e);
        return null == r ? n.set(e, _({}, m, t)) : n.set(e, _({}, r, t)), n
      })
    })
  },
  h = e => g(t => t.get(e), i.X);

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

function f(e, t, n) {
  return function(e, t, n, r) {
    let {
      addtionalQuery: i,
      shouldDispatch: s = false
    } = r, a = l.useMemo(() => I(e, t, n, i), [e, t, n, i]), _ = h(a), T = (0, u.Z)(a), [g, f] = l.useState({});
    return l.useEffect(() => {
      if (T !== a) {
        let r = O(e, n, i),
          l = new c.Yn(t, d.aib.GUILD, r);
        N(a, {
          searchFetcher: l,
          messageCount: A,
          lastMessage: null
        }), setTimeout(() => {
          l.fetch(e => {
            let n = e.body,
              r = n.messages[0];
            if (N(a, {
                searchFetcher: l,
                result: n,
                messageCount: n.total_results,
                lastMessage: r
              }), f({}), s) {
              var i, u, c;
              o.Z.dispatch({
                type: "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
                guildId: t,
                data: [{
                  id: t,
                  analyticsId: n.analytics_id,
                  totalResults: n.total_results,
                  channels: null != (i = n.channels) ? i : [],
                  messages: n.messages,
                  threads: null != (u = n.threads) ? u : [],
                  members: (null != (c = n.members) ? c : []).map(e => (0, E.Z)(e)),
                  doingHistoricalIndex: n.doing_deep_historical_index,
                  documentsIndexed: n.documents_indexed,
                  cursor: null
                }]
              })
            }
          }, e => {}, e => {
            N(a, {
              messageCount: 0,
              lastMessage: null
            }), f({})
          })
        })
      }
      return () => {}
    }, [e, t, _, a, n, i, T, s]), null != _ ? _ : m
  }(e, t, "messages", n)
}

function R(e, t, n, r) {
  let i = l.useMemo(() => I(e, t, n, r, true), [e, t, n, r]),
    s = h(i),
    a = (0, u.Z)(i);
  return {
    key: i,
    previousKey: a,
    state: s
  }
}

function S(e, t, n) {
  var r, i, s;
  let {
    key: a,
    state: o
  } = R(e, t, "messages", n), {
    key: u,
    state: E
  } = R(e, t, "links", n), {
    key: _,
    state: T
  } = R(e, t, "media", n), I = l.useMemo(() => O(e, "all_counts", n), [e, n]), m = l.useMemo(() => ({
    tabs: {
      messages: O(e, "messages", I),
      links: O(e, "links", I),
      media: O(e, "media", I)
    },
    track_exact_total_hits: true,
    include_nsfw: true
  }), [e, I]), g = l.useCallback(e => {
    let t = e.messages,
      n = e.links,
      r = e.media;
    N(a, t), N(u, n), N(_, r)
  }, [u, _, a]), h = l.useCallback(e => {
    g({
      messages: e,
      links: e,
      media: e
    })
  }, [g]);
  l.useEffect(() => {
    let e = new c.tJ(t, d.aib.GUILD, I, m);
    h({
      searchTabFetcher: e,
      messageCount: A,
      lastMessage: null
    });
    let n = setTimeout(async () => {
      let t = null;
      try {
        let n = await e.makeRequest({
          rejectWithError: false
        });
        t = null == n ? true : n.body
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
        g({
          messages: {
            messageCount: null != (n = null == e ? true : e.total_results) ? n : 0,
            lastMessage: null != (r = null == e ? true : e.messages[0]) ? r : null
          },
          links: {
            messageCount: null != (l = null == o ? true : o.total_results) ? l : 0,
            lastMessage: null != (i = null == o ? true : o.messages[0]) ? i : null
          },
          media: {
            messageCount: null != (s = null == u ? true : u.total_results) ? s : 0,
            lastMessage: null != (a = null == u ? true : u.messages[0]) ? a : null
          }
        })
      }
      S({})
    });
    return () => {
      e.cancel(), clearTimeout(n)
    }
  }, [e, t, I, m, h, g]);
  let [f, S] = l.useState({});
  return {
    messagesCount: null != (r = null == o ? true : o.messageCount) ? r : A,
    linksCount: null != (i = null == E ? true : E.messageCount) ? i : A,
    mediaCount: null != (s = null == T ? true : T.messageCount) ? s : A
  }
}
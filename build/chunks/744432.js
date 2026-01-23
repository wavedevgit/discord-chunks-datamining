/** Chunk was on 38985 **/
/** chunk id: 744432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  KR: () => f,
  SA: () => A,
  ry: () => N,
  u5: () => S,
  zu: () => g
}), require("./457529.js"), require("./896048.js");
var l, Chunk64700 = require("./64700.js"),
  Chunk942381 = require("./942381.js"),
  Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk73153 = require("./73153.js"),
  Chunk475743 = require("./475743.js"),
  Chunk177068 = require("./177068.js"),
  Chunk736130 = require("./736130.js"),
  Chunk652215 = require("./652215.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}
let g = false;
var A = ((l = {}).MESSAGES = "messages", l.LINKS = "links", l.MEDIA = "media", l.ALL_COUNTS = "all_counts", l);

function T(e, t, n) {
  let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {},
    r = arguments.length > 4 && true !== arguments[4] && arguments[4],
    a = JSON.stringify(l);
  return r ? "guild_".concat(t, "_search_tab_").concat(n, "_for_").concat(e, "_with_additonal_").concat(a) : "guild_".concat(t, "_search_").concat(n, "_for_").concat(e, "_with_additonal_").concat(a)
}
let h = {
    searchFetcher: null,
    searchTabFetcher: null,
    result: null,
    messageCount: g,
    lastMessage: null
  },
  I = (0, Chunk265690.h)(() => new Map),
  O = (e, t) => {
    (0, s.r)(() => {
      I.setState(n => {
        let l = n.get(e);
        return null == l ? n.set(e, _({}, h, t)) : n.set(e, _({}, l, t)), n
      })
    })
  },
  m = e => I(t => t.get(e), a.x);

function N(e, t, n) {
  let l = null != n ? n : {};
  switch (t) {
    case "links":
      return _({
        author_id: e,
        has: ["link"]
      }, l);
    case "media":
      return _({
        author_id: e,
        attachment_extension: ["png", "jpg", "webp", "mov", "mp4", "qt", "gif", "mp3", "wav", "flac", "ogg", "opus"]
      }, l);
    case "all_counts":
      return _({
        author_id: [e],
        limit: 1,
        cursor: null
      }, l);
    default:
      return _({
        author_id: e
      }, l)
  }
}

function f(e, t, n) {
  return function(e, t, n, l) {
    let {
      addtionalQuery: a,
      shouldDispatch: i = false
    } = l, s = r.useMemo(() => T(e, t, n, a), [e, t, n, a]), _ = m(s), A = (0, u.A)(s), [I, f] = r.useState({});
    return r.useEffect(() => {
      if (A !== s) {
        let l = N(e, n, a),
          r = new c.MS(t, d.I4_.GUILD, l);
        O(s, {
          searchFetcher: r,
          messageCount: g,
          lastMessage: null
        }), setTimeout(() => {
          r.fetch(e => {
            let n = e.body,
              l = n.messages[0];
            if (O(s, {
                searchFetcher: r,
                result: n,
                messageCount: n.total_results,
                lastMessage: l
              }), f({}), i) {
              var a, u, c;
              o.h.dispatch({
                type: "MOD_VIEW_SEARCH_MESSAGES_SUCCESS",
                guildId: t,
                data: [{
                  id: t,
                  analyticsId: n.analytics_id,
                  totalResults: n.total_results,
                  channels: null != (a = n.channels) ? a : [],
                  messages: n.messages,
                  threads: null != (u = n.threads) ? u : [],
                  members: (null != (c = n.members) ? c : []).map(e => (0, E.A)(e)),
                  doingHistoricalIndex: n.doing_deep_historical_index,
                  documentsIndexed: n.documents_indexed,
                  cursor: null
                }]
              })
            }
          }, e => {}, e => {
            O(s, {
              messageCount: 0,
              lastMessage: null
            }), f({})
          })
        })
      }
      return () => {}
    }, [e, t, _, s, n, a, A, i]), null != _ ? _ : h
  }(e, t, "messages", n)
}

function p(e, t, n, l) {
  let a = r.useMemo(() => T(e, t, n, l, true), [e, t, n, l]),
    i = m(a),
    s = (0, u.A)(a);
  return {
    key: a,
    previousKey: s,
    state: i
  }
}

function S(e, t, n) {
  var l, a, i;
  let {
    key: s,
    state: o
  } = p(e, t, "messages", n), {
    key: u,
    state: E
  } = p(e, t, "links", n), {
    key: _,
    state: A
  } = p(e, t, "media", n), T = r.useMemo(() => N(e, "all_counts", n), [e, n]), h = r.useMemo(() => ({
    tabs: {
      messages: N(e, "messages", T),
      links: N(e, "links", T),
      media: N(e, "media", T)
    },
    track_exact_total_hits: true,
    include_nsfw: true
  }), [e, T]), I = r.useCallback(e => {
    let t = e.messages,
      n = e.links,
      l = e.media;
    O(s, t), O(u, n), O(_, l)
  }, [u, _, s]), m = r.useCallback(e => {
    I({
      messages: e,
      links: e,
      media: e
    })
  }, [I]);
  r.useEffect(() => {
    let e = new c.DX(t, d.I4_.GUILD, T, h);
    m({
      searchTabFetcher: e,
      messageCount: g,
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
      if (null == t) m({
        messageCount: 0,
        lastMessage: null
      });
      else {
        var n, l, r, a, i, s;
        let e = t.tabs.messages,
          o = t.tabs.links,
          u = t.tabs.media;
        I({
          messages: {
            messageCount: null != (n = null == e ? true : e.total_results) ? n : 0,
            lastMessage: null != (l = null == e ? true : e.messages[0]) ? l : null
          },
          links: {
            messageCount: null != (r = null == o ? true : o.total_results) ? r : 0,
            lastMessage: null != (a = null == o ? true : o.messages[0]) ? a : null
          },
          media: {
            messageCount: null != (i = null == u ? true : u.total_results) ? i : 0,
            lastMessage: null != (s = null == u ? true : u.messages[0]) ? s : null
          }
        })
      }
      S({})
    });
    return () => {
      e.cancel(), clearTimeout(n)
    }
  }, [e, t, T, h, m, I]);
  let [f, S] = r.useState({});
  return {
    messagesCount: null != (l = null == o ? true : o.messageCount) ? l : g,
    linksCount: null != (a = null == E ? true : E.messageCount) ? a : g,
    mediaCount: null != (i = null == A ? true : A.messageCount) ? i : g
  }
}
/** Chunk was on 52199 **/
/** chunk id: 145331, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  H9: () => f,
  J$: () => R,
  L6: () => S,
  TJ: () => P,
  Tf: () => x,
  _k: () => w,
  fd: () => b,
  gp: () => m,
  i4: () => g,
  iK: () => A,
  kc: () => L,
  kq: () => E,
  oK: () => y,
  oR: () => j,
  pY: () => _,
  rE: () => N,
  uZ: () => v,
  vy: () => C,
  wU: () => O
}), require("./733351.js"), require("./896048.js");
var n, Chunk58149 = require("./58149.js"),
  Chunk626584 = require("./626584.js"),
  Chunk954571 = require("./954571.js"),
  Chunk517381 = require("./517381.js"),
  Chunk822382 = require("./822382.js"),
  Chunk408730 = require("./408730.js"),
  Chunk652215 = require("./652215.js");

function d(e) {
  var t, r;
  return null != (t = null == e || null == (r = e.trim()) ? true : r.length) ? t : 0
}

function h(e) {
  var t, r, n;
  return null != (t = null == (n = (0, o.dX)(e)) || null == (r = n.trim()) ? true : r.length) ? t : 0
}

function p(e) {
  let t = (0, o.bS)(e);
  return i.A.getAnalyticsId(t)
}

function f(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    prevSearchRequestAnalyticsId: n,
    isError: s,
    limit: a,
    offset: i,
    page: o,
    totalResults: p,
    pageResults: f,
    isIndexing: g,
    pageNumMessages: S,
    pageNumLinks: E,
    pageNumEmbeds: y,
    pageNumAttachments: _,
    searchQueryString: m,
    searchQuery: A
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_VIEWED, {
    search_type: t.type,
    search_id: r,
    prev_search_id: n,
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t),
    is_error: s,
    limit: a,
    offset: i,
    page: o,
    total_results: p,
    page_results: f,
    is_indexing: g,
    page_num_messages: S,
    page_num_links: E,
    page_num_embeds: y,
    page_num_attach: _,
    search_query_length: d(m),
    search_query_content_length: h(A)
  })
}

function g(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    messageId: n,
    guildId: l,
    channelId: s,
    pageResults: i,
    totalResults: o,
    page: p,
    limit: f,
    offset: g,
    index: S,
    searchQueryString: E,
    searchQuery: y
  } = e;
  a.default.track(u.HAw.SEARCH_RESULT_SELECTED, {
    search_type: t.type,
    search_id: r,
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t),
    message_id: n,
    guild_id: l,
    channel_id: s,
    page_results: i,
    total_results: o,
    page: p,
    limit: f,
    offset: g,
    index_num: S,
    search_query_length: d(E),
    search_query_content_length: h(y)
  })
}

function S(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    mode: n
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_SORT_CHANGED, {
    search_id: r,
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t),
    search_type: t.type,
    new_sort_type: n
  })
}

function E(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    newPageIndex: n
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_PAGE_CHANGED, {
    search_id: r,
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t),
    search_type: t.type,
    new_page_index: n
  })
}

function y(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    searchQueryString: n,
    searchQuery: s
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_RESULT_EMPTY, {
    search_id: r,
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t),
    search_type: t.type,
    search_query_length: d(n),
    search_query_content_length: h(s)
  })
}

function _(e) {
  let {
    searchContext: t
  } = e;
  c.A.initialize(t), l.Ay.trackWithMetadata(u.HAw.SEARCH_OPENED, {
    search_id: p(t),
    search_session_id: c.A.getSessionId(t),
    search_type: t.type
  })
}

function m(e) {
  let {
    searchContext: t
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_CLOSED, {
    search_id: p(t),
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t),
    search_type: t.type
  }), c.A.terminate(t)
}

function A(e) {
  let {
    searchContext: t
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_INPUT_CLEARED, {
    search_id: p(t),
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t),
    search_type: t.type
  })
}

function b(e) {
  let {
    searchContext: t,
    query: r,
    queryString: n,
    searchQuerySource: s
  } = e, a = Object.keys(r), i = a.reduce((e, t) => {
    let n = r[t];
    return e[t] = Array.isArray(n) ? n.length : 1, e
  }, {}), f = null != n ? (0, o._o)(n) : [], g = 0, S = 0, E = 0, y = 0, _ = 0, m = 0, A = 0, b = 0, O = 0;
  f.forEach(e => {
    e.type === u.LWr.ANSWER_IN ? g++ : e.type === u.LWr.ANSWER_USERNAME_FROM ? S++ : e.type === u.LWr.ANSWER_USERNAME_MENTIONS ? E++ : e.type === u.LWr.ANSWER_HAS ? y++ : e.type === u.LWr.ANSWER_BEFORE ? _++ : e.type === u.LWr.ANSWER_ON ? m++ : e.type === u.LWr.ANSWER_AFTER ? A++ : e.type === u.LWr.ANSWER_PINNED ? b++ : e.type === u.LWr.ANSWER_AUTHOR_TYPE && O++
  });
  let R = c.A.getQueryId(t);
  l.Ay.trackWithMetadata(u.HAw.MESSAGES_SEARCH_STARTED, {
    search_id: p(t),
    search_session_id: c.A.getSessionId(t),
    search_query_id: R,
    search_type: t.type,
    search_query_length: d(n),
    search_query_content_length: h(r),
    sort_type: (0, o.XC)(r),
    filter_in_count: g,
    filter_from_count: S,
    filter_mentions_count: E,
    filter_has_count: y,
    filter_before_count: _,
    filter_during_count: m,
    filter_after_count: A,
    filter_pinned_count: b,
    filter_author_type_count: O,
    search_query_source: s
  }), l.Ay.trackWithMetadata(u.HAw.SEARCH_STARTED, {
    search_id: p(t),
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t),
    search_type: t.type,
    num_modifiers: a.length,
    modifiers: i
  })
}

function O(e) {
  let {
    rating: t,
    searchContext: r
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
    rating: t,
    search_id: p(r),
    search_type: r.type,
    search_session_id: c.A.getSessionId(r),
    search_query_id: c.A.getQueryId(r)
  })
}

function R(e) {
  let {
    searchContext: t
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
    search_id: p(t),
    search_type: t.type,
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t)
  })
}

function v(e) {
  let {
    rating: t,
    searchContext: r,
    unsatisfiedQuestionOption: n,
    unsatisfiedQuestionText: s,
    describeSearchQuestionOption: a,
    describeSearchQuestionText: i
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
    search_id: p(r),
    search_type: r.type,
    search_session_id: c.A.getSessionId(r),
    search_query_id: c.A.getQueryId(r),
    rating: t,
    unsatisfied_question_option: n,
    unsatisfied_question_text: s,
    describe_search_question_option: a,
    describe_search_question_text: i
  })
}

function x(e) {
  let {
    searchContext: t
  } = e;
  c.A.enqueueEvent(t, () => {
    l.Ay.trackWithMetadata(u.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
      search_type: t.type,
      search_id: p(t),
      search_session_id: c.A.getSessionId(t)
    })
  })
}
new Chunk626584.A("SearchTracking");
let T = new Map([
    [Chunk652215.LWr.ANSWER_IN, "in"],
    [Chunk652215.LWr.FILTER_IN, "in"],
    [Chunk652215.LWr.ANSWER_USERNAME_FROM, "from"],
    [Chunk652215.LWr.FILTER_FROM, "from"],
    [Chunk652215.LWr.ANSWER_USERNAME_MENTIONS, "mentions"],
    [Chunk652215.LWr.FILTER_MENTIONS, "mentions"],
    [Chunk652215.LWr.ANSWER_HAS, "has"],
    [Chunk652215.LWr.FILTER_HAS, "has"],
    [Chunk652215.LWr.ANSWER_BEFORE, "before"],
    [Chunk652215.LWr.FILTER_BEFORE, "before"],
    [Chunk652215.LWr.ANSWER_ON, "during"],
    [Chunk652215.LWr.FILTER_ON, "during"],
    [Chunk652215.LWr.ANSWER_AFTER, "after"],
    [Chunk652215.LWr.FILTER_AFTER, "after"],
    [Chunk652215.LWr.ANSWER_PINNED, "pinned"],
    [Chunk652215.LWr.FILTER_PINNED, "pinned"]
  ]),
  I = new Map([
    [Chunk652215.x2k.HISTORY, "history"],
    [Chunk652215.x2k.DATES, "dates"],
    [Chunk652215.x2k.SEARCH_OPTIONS, "search_options"]
  ]);

function j(e) {
  let {
    searchContext: t,
    searchHistoryIndex: r,
    searchHistoryTotalResults: n
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_HISTORY_CLICKED, {
    search_id: p(t),
    search_type: t.type,
    search_session_id: c.A.getSessionId(t),
    search_history_index: r,
    search_history_total_results: n
  })
}

function L(e) {
  var t;
  let {
    searchContext: r,
    searchQuery: n,
    searchQueryString: s,
    searchAutocompleteResultIndex: a,
    searchAutocompleteTotalResults: i,
    searchTokenType: o,
    searchAutocompleteGroup: f,
    isSearchFilterPrefix: g,
    isSearchFilterAnswer: S,
    isSearchFilterComplete: E,
    isInFilterForSelectedChannel: y,
    searchAutocompleteSelectAction: _
  } = e;
  u.x2k.HISTORY;
  let m = null != (t = T.get(f)) ? t : I.get(f),
    A = null != o ? T.get(o) : null;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
    search_id: p(r),
    search_type: r.type,
    search_session_id: c.A.getSessionId(r),
    search_query_id: c.A.getQueryId(r),
    search_query_length: d(s),
    search_query_content_length: h(n),
    search_autocomplete_result_index: a,
    search_autocomplete_total_results: i,
    search_autocomplete_group: m,
    search_autocomplete_filter_type: A,
    is_search_filter_prefix: g,
    is_search_filter_answer: S,
    is_search_filter_complete: E,
    is_in_filter_for_selected_channel: y,
    search_autocomplete_select_action: _
  })
}

function N(e) {
  let {
    searchContext: t,
    searchAutocompleteSelectAction: r
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
    search_id: p(t),
    search_type: t.type,
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t),
    search_autocomplete_select_action: r
  })
}
var C = ((n = {}).SEARCH_HEADER = "search_header", n.USER_SETTINGS = "user_settings", n);

function w(e) {
  let {
    searchContext: t,
    prevIsCrossDMSettingEnabled: r,
    isCrossDMSettingEnabled: n,
    location: s
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
    search_id: null != t ? p(t) : null,
    search_type: null == t ? true : t.type,
    search_session_id: null != t ? c.A.getSessionId(t) : null,
    search_query_id: null != t ? c.A.getQueryId(t) : null,
    prev_is_cross_dm_setting_enabled: r,
    is_cross_dm_setting_enabled: n,
    setting_location: s
  })
}

function P(e) {
  let {
    searchContext: t
  } = e;
  l.Ay.trackWithMetadata(u.HAw.SEARCH_FILTERS_MODAL_OPENED, {
    search_id: p(t),
    search_type: t.type,
    search_session_id: c.A.getSessionId(t),
    search_query_id: c.A.getQueryId(t)
  })
}
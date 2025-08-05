/** Chunk was on 93239 **/
r.d(t, {
  $z: () => I,
  I1: () => E,
  IZ: () => g,
  PJ: () => x,
  Qb: () => b,
  Yc: () => j,
  bh: () => Z,
  bo: () => R,
  cy: () => O,
  hM: () => h,
  sL: () => y,
  t6: () => S,
  tA: () => A,
  tI: () => m,
  z4: () => P,
  zW: () => f
}), r(781311), r(388685);
var n = r(367907),
  i = r(710845),
  s = r(626135),
  a = r(171900),
  c = r(607802),
  l = r(971128),
  o = r(723642),
  u = r(981631);

function d(e) {
  var t, r;
  return null != (r = null == e || null == (t = e.trim()) ? void 0 : t.length) ? r : 0
}

function _(e) {
  var t, r, n;
  return null != (n = null == e || null == (r = e.content) || null == (t = r.trim()) ? void 0 : t.length) ? n : 0
}

function p(e) {
  let t = (0, c.WJ)(e);
  return a.Z.getAnalyticsId(t)
}

function h(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    prevSearchRequestAnalyticsId: i,
    isError: s,
    limit: a,
    offset: c,
    page: o,
    totalResults: p,
    pageResults: h,
    isIndexing: y,
    pageNumMessages: f,
    pageNumLinks: S,
    pageNumEmbeds: b,
    pageNumAttachments: E,
    searchQueryString: g,
    searchQuery: O
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_VIEWED, {
    search_type: t.type,
    search_id: r,
    prev_search_id: i,
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t),
    is_error: s,
    limit: a,
    offset: c,
    page: o,
    total_results: p,
    page_results: h,
    is_indexing: y,
    page_num_messages: f,
    page_num_links: S,
    page_num_embeds: b,
    page_num_attach: E,
    search_query_length: d(g),
    search_query_content_length: _(O)
  })
}

function y(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    messageId: n,
    guildId: i,
    channelId: a,
    pageResults: c,
    totalResults: o,
    page: p,
    limit: h,
    offset: y,
    index: f,
    searchQueryString: S,
    searchQuery: b
  } = e;
  s.default.track(u.rMx.SEARCH_RESULT_SELECTED, {
    search_type: t.type,
    search_id: r,
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t),
    message_id: n,
    guild_id: i,
    channel_id: a,
    page_results: c,
    total_results: o,
    page: p,
    limit: h,
    offset: y,
    index_num: f,
    search_query_length: d(S),
    search_query_content_length: _(b)
  })
}

function f(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    mode: i
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_SORT_CHANGED, {
    search_id: r,
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t),
    search_type: t.type,
    new_sort_type: i
  })
}

function S(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    newPageIndex: i
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_PAGE_CHANGED, {
    search_id: r,
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t),
    search_type: t.type,
    new_page_index: i
  })
}

function b(e) {
  let {
    searchContext: t,
    searchRequestAnalyticsId: r,
    searchQueryString: i,
    searchQuery: s
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_RESULT_EMPTY, {
    search_id: r,
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t),
    search_type: t.type,
    search_query_length: d(i),
    search_query_content_length: _(s)
  })
}

function E(e) {
  let {
    searchContext: t
  } = e;
  l.Z.initialize({
    searchContext: t,
    initialTab: o.sR.MESSAGES
  }), n.ZP.trackWithMetadata(u.rMx.SEARCH_OPENED, {
    search_id: p(t),
    search_session_id: l.Z.getSessionId(t),
    search_type: t.type
  })
}

function g(e) {
  let {
    searchContext: t
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_CLOSED, {
    search_id: p(t),
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t),
    search_type: t.type
  }), l.Z.terminate(t)
}

function O(e) {
  let {
    searchContext: t
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_INPUT_CLEARED, {
    search_id: p(t),
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t),
    search_type: t.type
  })
}

function m(e) {
  let {
    searchContext: t,
    query: r,
    queryString: i
  } = e, s = Object.keys(r), a = s.reduce((e, t) => {
    let n = r[t];
    return e[t] = Array.isArray(n) ? n.length : 1, e
  }, {}), o = null != i ? (0, c.kG)(i) : [], h = 0, y = 0, f = 0, S = 0, b = 0, E = 0, g = 0, O = 0;
  o.forEach(e => {
    e.type === u.dCx.ANSWER_IN ? h++ : e.type === u.dCx.ANSWER_USERNAME_FROM ? y++ : e.type === u.dCx.ANSWER_USERNAME_MENTIONS ? f++ : e.type === u.dCx.ANSWER_HAS ? S++ : e.type === u.dCx.ANSWER_BEFORE ? b++ : e.type === u.dCx.ANSWER_ON ? E++ : e.type === u.dCx.ANSWER_AFTER ? g++ : e.type === u.dCx.ANSWER_PINNED && O++
  });
  let m = l.Z.getQueryId(t);
  n.ZP.trackWithMetadata(u.rMx.MESSAGES_SEARCH_STARTED, {
    search_id: p(t),
    search_session_id: l.Z.getSessionId(t),
    search_query_id: m,
    search_type: t.type,
    search_query_length: d(i),
    search_query_content_length: _(r),
    sort_type: (0, c.Vj)(r),
    filter_in_count: h,
    filter_from_count: y,
    filter_mentions_count: f,
    filter_has_count: S,
    filter_before_count: b,
    filter_during_count: E,
    filter_after_count: g,
    filter_pinned_count: O
  }), n.ZP.trackWithMetadata(u.rMx.SEARCH_STARTED, {
    search_id: p(t),
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t),
    search_type: t.type,
    num_modifiers: s.length,
    modifiers: a
  })
}

function j(e) {
  let {
    rating: t,
    searchContext: r
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
    rating: t,
    search_id: p(r),
    search_type: r.type,
    search_session_id: l.Z.getSessionId(r),
    search_query_id: l.Z.getQueryId(r)
  })
}

function R(e) {
  let {
    searchContext: t
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
    search_id: p(t),
    search_type: t.type,
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t)
  })
}

function P(e) {
  let {
    rating: t,
    searchContext: r,
    unsatisfiedQuestionOption: i,
    unsatisfiedQuestionText: s,
    describeSearchQuestionOption: a,
    describeSearchQuestionText: c
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
    search_id: p(r),
    search_type: r.type,
    search_session_id: l.Z.getSessionId(r),
    search_query_id: l.Z.getQueryId(r),
    rating: t,
    unsatisfied_question_option: i,
    unsatisfied_question_text: s,
    describe_search_question_option: a,
    describe_search_question_text: c
  })
}

function x(e) {
  let {
    searchContext: t
  } = e;
  l.Z.initialize({
    searchContext: t,
    initialTab: o.sR.MESSAGES
  }), n.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
    search_type: t.type,
    search_id: p(t),
    search_session_id: l.Z.getSessionId(t)
  })
}
new i.Z("SearchTracking");
let v = new Map([
    [u.dCx.ANSWER_IN, "in"],
    [u.dCx.FILTER_IN, "in"],
    [u.dCx.ANSWER_USERNAME_FROM, "from"],
    [u.dCx.FILTER_FROM, "from"],
    [u.dCx.ANSWER_USERNAME_MENTIONS, "mentions"],
    [u.dCx.FILTER_MENTIONS, "mentions"],
    [u.dCx.ANSWER_HAS, "has"],
    [u.dCx.FILTER_HAS, "has"],
    [u.dCx.ANSWER_BEFORE, "before"],
    [u.dCx.FILTER_BEFORE, "before"],
    [u.dCx.ANSWER_ON, "during"],
    [u.dCx.FILTER_ON, "during"],
    [u.dCx.ANSWER_AFTER, "after"],
    [u.dCx.FILTER_AFTER, "after"],
    [u.dCx.ANSWER_PINNED, "pinned"],
    [u.dCx.FILTER_PINNED, "pinned"]
  ]),
  C = new Map([
    [u.rtL.HISTORY, "history"],
    [u.rtL.DATES, "dates"],
    [u.rtL.SEARCH_OPTIONS, "search_options"]
  ]);

function I(e) {
  let {
    searchContext: t,
    searchHistoryIndex: r,
    searchHistoryTotalResults: i
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_HISTORY_CLICKED, {
    search_id: p(t),
    search_type: t.type,
    search_session_id: l.Z.getSessionId(t),
    search_history_index: r,
    search_history_total_results: i
  })
}

function Z(e) {
  var t;
  let {
    searchContext: r,
    searchQuery: i,
    searchQueryString: s,
    searchAutocompleteResultIndex: a,
    searchAutocompleteTotalResults: c,
    searchTokenType: o,
    searchAutocompleteGroup: h,
    isSearchFilterPrefix: y,
    isSearchFilterAnswer: f,
    isSearchFilterComplete: S,
    isInFilterForSelectedChannel: b,
    searchAutocompleteSelectAction: E
  } = e;
  u.rtL.HISTORY;
  let g = null != (t = v.get(h)) ? t : C.get(h),
    O = null != o ? v.get(o) : null;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
    search_id: p(r),
    search_type: r.type,
    search_session_id: l.Z.getSessionId(r),
    search_query_id: l.Z.getQueryId(r),
    search_query_length: d(s),
    search_query_content_length: _(i),
    search_autocomplete_result_index: a,
    search_autocomplete_total_results: c,
    search_autocomplete_group: g,
    search_autocomplete_filter_type: O,
    is_search_filter_prefix: y,
    is_search_filter_answer: f,
    is_search_filter_complete: S,
    is_in_filter_for_selected_channel: b,
    search_autocomplete_select_action: E
  })
}

function A(e) {
  let {
    searchContext: t,
    searchAutocompleteSelectAction: r
  } = e;
  n.ZP.trackWithMetadata(u.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
    search_id: p(t),
    search_type: t.type,
    search_session_id: l.Z.getSessionId(t),
    search_query_id: l.Z.getQueryId(t),
    search_autocomplete_select_action: r
  })
}
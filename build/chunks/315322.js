/** Chunk was on 50874 **/
r.d(t, {
  $z: () => T,
  I1: () => P,
  IZ: () => x,
  LQ: () => f,
  PJ: () => A,
  Qb: () => j,
  Yc: () => N,
  bh: () => D,
  bo: () => C,
  cy: () => v,
  hM: () => O,
  sL: () => E,
  t6: () => m,
  tA: () => w,
  tI: () => R,
  z4: () => I,
  zW: () => S
}), r(781311), r(388685);
var n = r(367907),
  i = r(710845),
  a = r(626135),
  s = r(171900),
  l = r(607802),
  c = r(861262),
  o = r(971128),
  u = r(723642),
  d = r(981631);

function _(e, t) {
  let r = function(e) {
    let t = null != e ? (0, c.g)(e) : null;
    return t === d.aib.DMS ? {
      type: d.aib.DMS
    } : t === d.aib.FAVORITES ? {
      type: d.aib.FAVORITES
    } : t === d.aib.GUILD ? {
      type: d.aib.GUILD,
      guildId: e
    } : t === d.aib.CHANNEL ? {
      type: d.aib.CHANNEL,
      channelId: e
    } : null
  }(e);
  return null != r ? t(r) : null
}

function h(e) {
  return _(e, e => o.Z.getSessionId(e))
}

function f(e) {
  _(e, e => o.Z.refreshSearchQueryAnalyticsId(e))
}

function p(e) {
  return _(e, e => o.Z.getQueryId(e))
}

function b(e) {
  var t, r;
  return null != (r = null == e || null == (t = e.trim()) ? void 0 : t.length) ? r : 0
}

function y(e) {
  var t, r, n;
  return null != (n = null == e || null == (r = e.content) || null == (t = r.trim()) ? void 0 : t.length) ? n : 0
}

function g(e) {
  return null == e ? null : s.Z.getAnalyticsId(e)
}

function O(e) {
  let {
    searchType: t,
    searchId: r,
    searchAnalyticsId: i,
    prevSearchAnalyticsId: a,
    isError: s,
    limit: l,
    offset: c,
    page: o,
    totalResults: u,
    pageResults: _,
    isIndexing: f,
    pageNumMessages: g,
    pageNumLinks: O,
    pageNumEmbeds: E,
    pageNumAttachments: S,
    searchQueryString: m,
    searchQuery: j
  } = e;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_VIEWED, {
    search_type: t,
    search_id: i,
    prev_search_id: a,
    search_session_id: h(r),
    search_query_id: p(r),
    is_error: s,
    limit: l,
    offset: c,
    page: o,
    total_results: u,
    page_results: _,
    is_indexing: f,
    page_num_messages: g,
    page_num_links: O,
    page_num_embeds: E,
    page_num_attach: S,
    search_query_length: b(m),
    search_query_content_length: y(j)
  })
}

function E(e) {
  let {
    searchType: t,
    searchId: r,
    searchAnalyticsId: n,
    messageId: i,
    guildId: s,
    channelId: l,
    pageResults: c,
    totalResults: o,
    page: u,
    limit: _,
    offset: f,
    index: g,
    searchQueryString: O,
    searchQuery: E
  } = e;
  a.default.track(d.rMx.SEARCH_RESULT_SELECTED, {
    search_type: t,
    search_id: n,
    search_session_id: h(r),
    search_query_id: p(r),
    message_id: i,
    guild_id: s,
    channel_id: l,
    page_results: c,
    total_results: o,
    page: u,
    limit: _,
    offset: f,
    index_num: g,
    search_query_length: b(O),
    search_query_content_length: y(E)
  })
}

function S(e) {
  let {
    searchType: t,
    searchId: r,
    searchAnalyticsId: i,
    mode: a
  } = e;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_SORT_CHANGED, {
    search_id: i,
    search_session_id: h(r),
    search_query_id: p(r),
    search_type: t,
    new_sort_type: a
  })
}

function m(e) {
  let {
    searchType: t,
    searchId: r,
    searchAnalyticsId: i,
    newPageIndex: a
  } = e;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_PAGE_CHANGED, {
    search_id: i,
    search_session_id: h(r),
    search_query_id: p(r),
    search_type: t,
    new_page_index: a
  })
}

function j(e) {
  let {
    searchType: t,
    searchId: r,
    searchAnalyticsId: i,
    searchQueryString: a,
    searchQuery: s
  } = e;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_RESULT_EMPTY, {
    search_id: i,
    search_session_id: h(r),
    search_query_id: p(r),
    search_type: t,
    search_query_length: b(a),
    search_query_content_length: y(s)
  })
}

function P(e) {
  let {
    searchType: t,
    searchId: r
  } = e;
  _(r, e => {
    o.Z.initialize({
      searchContext: e,
      initialTab: u.sR.MESSAGES
    })
  }), n.ZP.trackWithMetadata(d.rMx.SEARCH_OPENED, {
    search_id: g(r),
    search_session_id: h(r),
    search_type: t
  })
}

function x(e) {
  let {
    searchId: t,
    searchType: r
  } = e;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_CLOSED, {
    search_id: g(t),
    search_session_id: h(t),
    search_query_id: p(t),
    search_type: r
  }), _(t, e => {
    o.Z.terminate(e)
  })
}

function v(e) {
  let {
    searchType: t,
    searchId: r
  } = e;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_INPUT_CLEARED, {
    search_id: g(r),
    search_session_id: h(r),
    search_query_id: p(r),
    search_type: t
  })
}

function R(e) {
  let {
    searchType: t,
    searchId: r,
    query: i,
    queryString: a
  } = e, s = Object.keys(i), c = s.reduce((e, t) => {
    let r = i[t];
    return e[t] = Array.isArray(r) ? r.length : 1, e
  }, {}), o = null != a ? (0, l.kG)(a) : [], u = 0, _ = 0, f = 0, O = 0, E = 0, S = 0, m = 0, j = 0;
  o.forEach(e => {
    e.type === d.dCx.ANSWER_IN ? u++ : e.type === d.dCx.ANSWER_USERNAME_FROM ? _++ : e.type === d.dCx.ANSWER_USERNAME_MENTIONS ? f++ : e.type === d.dCx.ANSWER_HAS ? O++ : e.type === d.dCx.ANSWER_BEFORE ? E++ : e.type === d.dCx.ANSWER_ON ? S++ : e.type === d.dCx.ANSWER_AFTER ? m++ : e.type === d.dCx.ANSWER_PINNED && j++
  });
  let P = p(r);
  n.ZP.trackWithMetadata(d.rMx.MESSAGES_SEARCH_STARTED, {
    search_id: g(r),
    search_session_id: h(r),
    search_query_id: P,
    search_type: t,
    search_query_length: b(a),
    search_query_content_length: y(i),
    sort_type: (0, l.Vj)(i),
    filter_in_count: u,
    filter_from_count: _,
    filter_mentions_count: f,
    filter_has_count: O,
    filter_before_count: E,
    filter_during_count: S,
    filter_after_count: m,
    filter_pinned_count: j
  }), n.ZP.trackWithMetadata(d.rMx.SEARCH_STARTED, {
    search_id: g(r),
    search_session_id: h(r),
    search_query_id: p(r),
    search_type: t,
    num_modifiers: s.length,
    modifiers: c
  })
}

function N(e) {
  let {
    rating: t,
    searchId: r,
    searchType: i
  } = e;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
    rating: t,
    search_id: g(r),
    search_type: i,
    search_session_id: h(r),
    search_query_id: p(r)
  })
}

function C(e) {
  let {
    searchId: t,
    searchType: r
  } = e;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
    search_id: g(t),
    search_type: r,
    search_session_id: h(t),
    search_query_id: p(t)
  })
}

function I(e) {
  let {
    rating: t,
    searchId: r,
    searchType: i,
    unsatisfiedQuestionOption: a,
    unsatisfiedQuestionText: s,
    describeSearchQuestionOption: l,
    describeSearchQuestionText: c
  } = e;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
    search_id: g(r),
    search_type: i,
    search_session_id: h(r),
    search_query_id: p(r),
    rating: t,
    unsatisfied_question_option: a,
    unsatisfied_question_text: s,
    describe_search_question_option: l,
    describe_search_question_text: c
  })
}

function A(e) {
  let {
    searchType: t,
    searchId: r
  } = e;
  _(r, e => {
    o.Z.initialize({
      searchContext: e,
      initialTab: u.sR.MESSAGES
    })
  }), n.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_CHANNEL_PREFILL, {
    search_type: t,
    search_id: g(r),
    search_session_id: h(r)
  })
}
new i.Z("SearchTracking");
let M = new Map([
    [d.dCx.ANSWER_IN, "in"],
    [d.dCx.FILTER_IN, "in"],
    [d.dCx.ANSWER_USERNAME_FROM, "from"],
    [d.dCx.FILTER_FROM, "from"],
    [d.dCx.ANSWER_USERNAME_MENTIONS, "mentions"],
    [d.dCx.FILTER_MENTIONS, "mentions"],
    [d.dCx.ANSWER_HAS, "has"],
    [d.dCx.FILTER_HAS, "has"],
    [d.dCx.ANSWER_BEFORE, "before"],
    [d.dCx.FILTER_BEFORE, "before"],
    [d.dCx.ANSWER_ON, "during"],
    [d.dCx.FILTER_ON, "during"],
    [d.dCx.ANSWER_AFTER, "after"],
    [d.dCx.FILTER_AFTER, "after"],
    [d.dCx.ANSWER_PINNED, "pinned"],
    [d.dCx.FILTER_PINNED, "pinned"]
  ]),
  Z = new Map([
    [d.rtL.HISTORY, "history"],
    [d.rtL.DATES, "dates"],
    [d.rtL.SEARCH_OPTIONS, "search_options"]
  ]);

function T(e) {
  let {
    searchId: t,
    searchHistoryIndex: r,
    searchHistoryTotalResults: i
  } = e, a = (0, c.g)(t);
  n.ZP.trackWithMetadata(d.rMx.SEARCH_HISTORY_CLICKED, {
    search_id: g(t),
    search_type: a,
    search_session_id: h(t),
    search_history_index: r,
    search_history_total_results: i
  })
}

function D(e) {
  var t;
  let {
    searchId: r,
    searchQuery: i,
    searchQueryString: a,
    searchAutocompleteResultIndex: s,
    searchAutocompleteTotalResults: l,
    searchTokenType: o,
    searchAutocompleteGroup: u,
    isSearchFilterPrefix: _,
    isSearchFilterAnswer: f,
    isSearchFilterComplete: O,
    isInFilterForSelectedChannel: E,
    searchAutocompleteSelectAction: S
  } = e, m = (0, c.g)(r);
  d.rtL.HISTORY;
  let j = null != (t = M.get(u)) ? t : Z.get(u),
    P = null != o ? M.get(o) : null;
  n.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
    search_id: g(r),
    search_type: m,
    search_session_id: h(r),
    search_query_id: p(r),
    search_query_length: b(a),
    search_query_content_length: y(i),
    search_autocomplete_result_index: s,
    search_autocomplete_total_results: l,
    search_autocomplete_group: j,
    search_autocomplete_filter_type: P,
    is_search_filter_prefix: _,
    is_search_filter_answer: f,
    is_search_filter_complete: O,
    is_in_filter_for_selected_channel: E,
    search_autocomplete_select_action: S
  })
}

function w(e) {
  let {
    searchId: t,
    searchAutocompleteSelectAction: r
  } = e, i = (0, c.g)(t);
  n.ZP.trackWithMetadata(d.rMx.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
    search_id: g(t),
    search_type: i,
    search_session_id: h(t),
    search_query_id: p(t),
    search_autocomplete_select_action: r
  })
}
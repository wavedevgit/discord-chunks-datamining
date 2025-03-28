/** Chunk was on 49522 **/
n.d(t, {
  $Z: () => j,
  Cp: () => Z,
  F_: () => y,
  Se: () => x,
  tF: () => U,
  yC: () => D
}), n(474991), n(398202), n(301563), n(757143), n(47120);
var l = n(570140),
  r = n(493683),
  i = n(475179),
  o = n(925549),
  a = n(287734),
  s = n(230711),
  c = n(212819),
  u = n(815372),
  d = n(336197),
  E = n(359110),
  f = n(769654),
  p = n(722589),
  h = n(131704),
  C = n(592125),
  _ = n(283595),
  O = n(944486),
  g = n(914010),
  S = n(626135),
  I = n(777754),
  T = n(823385),
  N = n(981631),
  b = n(176505);

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = l
    })
  }
  return e
}
let m = () => Promise.resolve();
m = n(346329).playApplication;
let A = Object.freeze({
    [c.xQ.USER]: c.h8.USER,
    [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
    [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
    [c.xQ.GUILD]: c.h8.GUILD,
    [c.xQ.APPLICATION]: c.h8.APPLICATION
  }),
  P = new RegExp("^".concat(c.xQ.USER, "|").concat(c.xQ.TEXT_CHANNEL, "|").concat(c.xQ.VOICE_CHANNEL, "|\\").concat(c.xQ.GUILD, "|\\").concat(c.xQ.APPLICATION));

function y(e) {
  var t;
  let n;
  let [l, r] = (n = null !== (t = A[e.charAt(0)]) && void 0 !== t ? t : null, [e.replace(P, ""), n]);
  return {
    query: l,
    queryMode: r
  }
}

function L(e, t) {
  let {
    results: n,
    queryMode: l,
    query: r,
    maxQueryLength: i
  } = T.Z.getProps(), o = g.Z.getGuildId(), a = O.Z.getChannelId(o), s = n[(0, c.gJ)(c.a8.DOWN, -1, n)], u = I.Z.isEmail(r), d = I.Z.isPhoneNumber(r), E = I.Z.isUserTagLike(r), f = null != a && (0, b.AB)(a), p = e => null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type, _ = {
    current_channel_id: f ? void 0 : a,
    current_channel_static_route: f ? a : void 0,
    current_guild_id: o,
    query_mode: null != l ? l : "GENERAL",
    query_length: r.length,
    max_query_length: i,
    is_email_like: u,
    is_phone_like: d,
    is_username_like: E,
    query: u || d || E ? null : r,
    top_result_type: p(s),
    top_result_score: null != s ? s.score : null,
    num_results_total: T.Z.getResultTotals(),
    num_results_users: T.Z.getResultTotals(c.h8.USER),
    num_results_text_channels: T.Z.getResultTotals(c.h8.TEXT_CHANNEL),
    num_results_voice_channels: T.Z.getResultTotals(c.h8.VOICE_CHANNEL),
    num_results_guilds: T.Z.getResultTotals(c.h8.GUILD),
    num_results_group_dms: T.Z.getResultTotals(c.h8.GROUP_DM)
  };
  if (null != a) {
    let e = C.Z.getChannel(a);
    _.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: l,
      record: r
    } = t;
    switch (_.selected_type = p(t), _.selected_score = l, _.selected_index = n.indexOf(t), e) {
      case c.h8.GUILD:
        _.selected_guild_id = r.id;
        break;
      case c.h8.TEXT_CHANNEL:
      case c.h8.VOICE_CHANNEL:
        r instanceof h.Sf && (_.selected_guild_id = null != r.guild_id ? r.guild_id : null), _.selected_channel_id = r.id;
        break;
      case c.h8.GROUP_DM:
        _.selected_channel_id = r.id;
        break;
      case c.h8.USER:
        _.selected_user_id = r.id
    }
  }
  S.default.track(e, _)
}

function R() {
  l.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function j() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (T.Z.isOpen()) return;
    let n = g.Z.getGuildId(),
      l = O.Z.getChannelId(n);
    if (null != l) {
      let e = C.Z.getChannel(l);
      t = null != e ? e.type : null
    }
    S.default.track(N.rMx.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: n,
      current_channel_id: l,
      current_channel_type: t
    })
  }(e), l.Z.dispatch(v({
    type: "QUICKSWITCHER_SHOW"
  }, y(t)))
}

function Z() {
  L(N.rMx.QUICKSWITCHER_CLOSED), R()
}

function D(e) {
  l.Z.dispatch(v({
    type: "QUICKSWITCHER_SEARCH"
  }, y(e)))
}

function U(e) {
  l.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function x(e) {
  let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  R(), L(N.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: h,
    record: O
  } = e, g = {
    page: N.ZY5.QUICK_SWITCHER
  };
  switch (h) {
    case c.h8.GUILD:
      (0, f.X)(O.id, {
        navigationReplace: !0
      });
      break;
    case c.h8.TEXT_CHANNEL:
      null != (t = C.Z.getChannel(O.id)) && (0, E.Kh)(t.id, {
        state: {
          analyticsSource: g
        },
        navigationReplace: !0
      });
      break;
    case c.h8.VOICE_CHANNEL:
      null != (t = C.Z.getChannel(O.id)) && (n ? i.Z.updateChatOpen(O.id, !0) : a.default.selectVoiceChannel(O.id), (0, E.Kh)(t.id, {
        state: {
          analyticsSource: g
        },
        navigationReplace: !0
      }));
      break;
    case c.h8.USER:
      r.Z.openPrivateChannel([O.id], !1, !1, "Quickswitcher"), o.Z.channelListScrollTo(N.ME, C.Z.getDMFromUserId(O.id));
      break;
    case c.h8.GROUP_DM:
      (0, E.Kh)(O.id, {
        navigationReplace: !0
      }), o.Z.channelListScrollTo(N.ME, O.id);
      break;
    case c.h8.APPLICATION:
      let S = _.Z.getActiveLibraryApplication(O.id);
      m(O.id, S, {
        analyticsParams: {
          source: N.Sbl.QUICK_SWITCHER,
          location: N.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case c.h8.LINK:
      (0, d.Z)(O.path, {
        navigationReplace: !0
      });
      break;
    case c.h8.IN_APP_NAVIGATION:
      if (e.record.type === u.Ky.SETTINGS) {
        let t = (0, p.default)(e.record.path);
        null != t && s.Z.open(t.section, t.subsection, {
          openWithoutBackstack: !1,
          impressionSource: t.source
        })
      } else(0, d.Z)(O.path, {
        navigationReplace: !0
      })
  }
  l.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}
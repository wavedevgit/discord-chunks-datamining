/** Chunk was on 91081 **/
n.d(t, {
  $Z: () => k,
  Cp: () => H,
  F_: () => Z,
  Se: () => B,
  tF: () => D,
  yC: () => v
}), n(413496), n(433524), n(35282), n(704826), n(388685);
var l = n(481060),
  i = n(570140),
  c = n(493683),
  a = n(475179),
  r = n(925549),
  o = n(287734),
  s = n(230711),
  _ = n(212819),
  u = n(815372),
  d = n(336197),
  h = n(359110),
  p = n(769654),
  C = n(722589),
  E = n(131704),
  f = n(592125),
  I = n(283595),
  T = n(944486),
  g = n(914010),
  A = n(626135),
  S = n(777754),
  m = n(823385),
  N = n(981631),
  x = n(176505);

function R(e) {
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
let y = () => Promise.resolve();
y = n(346329).playApplication;
let b = Object.freeze({
    [_.xQ.USER]: _.h8.USER,
    [_.xQ.TEXT_CHANNEL]: _.h8.TEXT_CHANNEL,
    [_.xQ.VOICE_CHANNEL]: _.h8.VOICE_CHANNEL,
    [_.xQ.GUILD]: _.h8.GUILD,
    [_.xQ.APPLICATION]: _.h8.APPLICATION
  }),
  O = new RegExp("^".concat(_.xQ.USER, "|").concat(_.xQ.TEXT_CHANNEL, "|").concat(_.xQ.VOICE_CHANNEL, "|\\").concat(_.xQ.GUILD, "|\\").concat(_.xQ.APPLICATION));

function Z(e) {
  var t;
  let n, [l, i] = (n = null != (t = b[e.charAt(0)]) ? t : null, [e.replace(O, ""), n]);
  return {
    query: l,
    queryMode: i
  }
}

function L(e, t) {
  let {
    results: n,
    queryMode: l,
    query: i,
    maxQueryLength: c
  } = m.Z.getProps(), a = g.Z.getGuildId(), r = T.Z.getChannelId(a), o = n[(0, _.gJ)(_.a8.DOWN, -1, n)], s = S.Z.isEmail(i), u = S.Z.isPhoneNumber(i), d = S.Z.isUserTagLike(i), h = null != r && (0, x.AB)(r), p = e => null == e ? null : e.type === _.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type, C = {
    current_channel_id: h ? void 0 : r,
    current_channel_static_route: h ? r : void 0,
    current_guild_id: a,
    query_mode: null != l ? l : "GENERAL",
    query_length: i.length,
    max_query_length: c,
    is_email_like: s,
    is_phone_like: u,
    is_username_like: d,
    query: s || u || d ? null : i,
    top_result_type: p(o),
    top_result_score: null != o ? o.score : null,
    num_results_total: m.Z.getResultTotals(),
    num_results_users: m.Z.getResultTotals(_.h8.USER),
    num_results_text_channels: m.Z.getResultTotals(_.h8.TEXT_CHANNEL),
    num_results_voice_channels: m.Z.getResultTotals(_.h8.VOICE_CHANNEL),
    num_results_guilds: m.Z.getResultTotals(_.h8.GUILD),
    num_results_group_dms: m.Z.getResultTotals(_.h8.GROUP_DM)
  };
  if (null != r) {
    let e = f.Z.getChannel(r);
    C.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: l,
      record: i
    } = t;
    switch (C.selected_type = p(t), C.selected_score = l, C.selected_index = n.indexOf(t), e) {
      case _.h8.GUILD:
        C.selected_guild_id = i.id;
        break;
      case _.h8.TEXT_CHANNEL:
      case _.h8.VOICE_CHANNEL:
        i instanceof E.Sf && (C.selected_guild_id = null != i.guild_id ? i.guild_id : null), C.selected_channel_id = i.id;
        break;
      case _.h8.GROUP_DM:
        C.selected_channel_id = i.id;
        break;
      case _.h8.USER:
        C.selected_user_id = i.id
    }
  }
  A.default.track(e, C)
}

function U() {
  i.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function k() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (m.Z.isOpen()) return;
    let n = g.Z.getGuildId(),
      l = T.Z.getChannelId(n);
    if (null != l) {
      let e = f.Z.getChannel(l);
      t = null != e ? e.type : null
    }
    A.default.track(N.rMx.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: n,
      current_channel_id: l,
      current_channel_type: t
    })
  }(e), i.Z.dispatch(R({
    type: "QUICKSWITCHER_SHOW"
  }, Z(t)))
}

function H() {
  L(N.rMx.QUICKSWITCHER_CLOSED), U()
}

function v(e) {
  i.Z.dispatch(R({
    type: "QUICKSWITCHER_SEARCH"
  }, Z(e)))
}

function D(e) {
  i.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function B(e) {
  let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  U(), (0, l.pTH)(), L(N.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: E,
    record: T
  } = e, g = {
    page: N.ZY5.QUICK_SWITCHER
  };
  switch (E) {
    case _.h8.GUILD:
      (0, p.X)(T.id, {
        navigationReplace: !0
      });
      break;
    case _.h8.TEXT_CHANNEL:
      null != (t = f.Z.getChannel(T.id)) && (0, h.Kh)(t.id, {
        state: {
          analyticsSource: g
        },
        navigationReplace: !0
      });
      break;
    case _.h8.VOICE_CHANNEL:
      null != (t = f.Z.getChannel(T.id)) && (n ? a.Z.updateChatOpen(T.id, !0) : o.default.selectVoiceChannel(T.id), (0, h.Kh)(t.id, {
        state: {
          analyticsSource: g
        },
        navigationReplace: !0
      }));
      break;
    case _.h8.USER:
      c.Z.openPrivateChannel({
        recipientIds: [T.id],
        location: "Quickswitcher"
      }), r.Z.channelListScrollTo(N.ME, f.Z.getDMFromUserId(T.id));
      break;
    case _.h8.GROUP_DM:
      (0, h.Kh)(T.id, {
        navigationReplace: !0
      }), r.Z.channelListScrollTo(N.ME, T.id);
      break;
    case _.h8.APPLICATION:
      let A = I.Z.getActiveLibraryApplication(T.id);
      y(T.id, A, {
        analyticsParams: {
          source: N.Sbl.QUICK_SWITCHER,
          location: N.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case _.h8.LINK:
      (0, d.Z)(T.path, {
        navigationReplace: !0
      });
      break;
    case _.h8.IN_APP_NAVIGATION:
      if (e.record.type === u.Ky.SETTINGS) {
        let t = (0, C.default)(e.record.path);
        null != t && s.Z.open(t.section, t.subsection, {
          openWithoutBackstack: !1,
          impressionSource: t.source
        })
      } else(0, d.Z)(T.path, {
        navigationReplace: !0
      })
  }
  i.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}
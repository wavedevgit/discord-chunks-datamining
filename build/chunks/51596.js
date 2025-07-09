/** Chunk was on 91081 **/
n.d(e, {
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
  m = n(626135),
  A = n(777754),
  S = n(823385),
  N = n(981631),
  x = n(176505);

function y(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), l.forEach(function(e) {
      var l;
      l = n[e], e in t ? Object.defineProperty(t, e, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = l
    })
  }
  return t
}
let R = () => Promise.resolve();
R = n(346329).playApplication;
let b = Object.freeze({
    [_.xQ.USER]: _.h8.USER,
    [_.xQ.TEXT_CHANNEL]: _.h8.TEXT_CHANNEL,
    [_.xQ.VOICE_CHANNEL]: _.h8.VOICE_CHANNEL,
    [_.xQ.GUILD]: _.h8.GUILD,
    [_.xQ.APPLICATION]: _.h8.APPLICATION
  }),
  O = new RegExp("^".concat(_.xQ.USER, "|").concat(_.xQ.TEXT_CHANNEL, "|").concat(_.xQ.VOICE_CHANNEL, "|\\").concat(_.xQ.GUILD, "|\\").concat(_.xQ.APPLICATION));

function Z(t) {
  var e;
  let n, [l, i] = (n = null != (e = b[t.charAt(0)]) ? e : null, [t.replace(O, ""), n]);
  return {
    query: l,
    queryMode: i
  }
}

function L(t, e) {
  let {
    results: n,
    queryMode: l,
    query: i,
    maxQueryLength: c
  } = S.Z.getProps(), a = g.Z.getGuildId(), r = T.Z.getChannelId(a), o = n[(0, _.gJ)(_.a8.DOWN, -1, n)], s = A.Z.isEmail(i), u = A.Z.isPhoneNumber(i), d = A.Z.isUserTagLike(i), h = null != r && (0, x.AB)(r), p = t => null == t ? null : t.type === _.h8.IN_APP_NAVIGATION ? t.type + "_" + t.record.type : t.type, C = {
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
    num_results_total: S.Z.getResultTotals(),
    num_results_users: S.Z.getResultTotals(_.h8.USER),
    num_results_text_channels: S.Z.getResultTotals(_.h8.TEXT_CHANNEL),
    num_results_voice_channels: S.Z.getResultTotals(_.h8.VOICE_CHANNEL),
    num_results_guilds: S.Z.getResultTotals(_.h8.GUILD),
    num_results_group_dms: S.Z.getResultTotals(_.h8.GROUP_DM)
  };
  if (null != r) {
    let t = f.Z.getChannel(r);
    C.current_channel_type = null != t ? t.type : null
  }
  if (null != e) {
    let {
      type: t,
      score: l,
      record: i
    } = e;
    switch (C.selected_type = p(e), C.selected_score = l, C.selected_index = n.indexOf(e), t) {
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
  m.default.track(t, C)
}

function U() {
  i.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function k() {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  ! function(t) {
    let e;
    if (S.Z.isOpen()) return;
    let n = g.Z.getGuildId(),
      l = T.Z.getChannelId(n);
    if (null != l) {
      let t = f.Z.getChannel(l);
      e = null != t ? t.type : null
    }
    m.default.track(N.rMx.QUICKSWITCHER_OPENED, {
      source: t,
      current_guild_id: n,
      current_channel_id: l,
      current_channel_type: e
    })
  }(t), i.Z.dispatch(y({
    type: "QUICKSWITCHER_SHOW"
  }, Z(e)))
}

function H() {
  L(N.rMx.QUICKSWITCHER_CLOSED), U()
}

function v(t) {
  i.Z.dispatch(y({
    type: "QUICKSWITCHER_SEARCH"
  }, Z(t)))
}

function D(t) {
  i.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: t
  })
}

function B(t) {
  let e, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  U(), (0, l.pTH)(), L(N.rMx.QUICKSWITCHER_RESULT_SELECTED, t);
  let {
    type: E,
    record: T
  } = t, g = {
    page: N.ZY5.QUICK_SWITCHER
  };
  switch (E) {
    case _.h8.GUILD:
      (0, p.X)(T.id, {
        navigationReplace: !0
      });
      break;
    case _.h8.TEXT_CHANNEL:
      null != (e = f.Z.getChannel(T.id)) && (0, h.Kh)(e.id, {
        state: {
          analyticsSource: g
        },
        navigationReplace: !0
      });
      break;
    case _.h8.VOICE_CHANNEL:
      null != (e = f.Z.getChannel(T.id)) && (n ? a.Z.updateChatOpen(T.id, !0) : o.default.selectVoiceChannel(T.id), (0, h.Kh)(e.id, {
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
      let m = I.Z.getActiveLibraryApplication(T.id);
      R(T.id, m, {
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
      if (t.record.type === u.Ky.SETTINGS) {
        let e = (0, C.default)(t.record.path);
        null != e && s.Z.open(e.section, e.subsection, {
          openWithoutBackstack: !1,
          impressionSource: e.source
        })
      } else(0, d.Z)(T.path, {
        navigationReplace: !0
      })
  }
  i.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: t
  })
}
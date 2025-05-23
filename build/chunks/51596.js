/** Chunk was on 39871 **/
n.d(t, {
  $Z: () => j,
  Cp: () => Z,
  F_: () => L,
  Se: () => R,
  tF: () => D,
  yC: () => w
}), n(413496), n(433524), n(35282), n(704826), n(388685);
var l = n(570140),
  r = n(493683),
  i = n(475179),
  a = n(925549),
  s = n(287734),
  o = n(230711),
  c = n(212819),
  u = n(815372),
  d = n(336197),
  f = n(359110),
  h = n(769654),
  _ = n(722589),
  g = n(131704),
  m = n(592125),
  p = n(283595),
  E = n(944486),
  b = n(914010),
  y = n(626135),
  I = n(777754),
  S = n(823385),
  O = n(981631),
  A = n(176505);

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
let C = () => Promise.resolve();
C = n(346329).playApplication;
let x = Object.freeze({
    [c.xQ.USER]: c.h8.USER,
    [c.xQ.TEXT_CHANNEL]: c.h8.TEXT_CHANNEL,
    [c.xQ.VOICE_CHANNEL]: c.h8.VOICE_CHANNEL,
    [c.xQ.GUILD]: c.h8.GUILD,
    [c.xQ.APPLICATION]: c.h8.APPLICATION
  }),
  P = new RegExp("^".concat(c.xQ.USER, "|").concat(c.xQ.TEXT_CHANNEL, "|").concat(c.xQ.VOICE_CHANNEL, "|\\").concat(c.xQ.GUILD, "|\\").concat(c.xQ.APPLICATION));

function L(e) {
  var t;
  let n, [l, r] = (n = null != (t = x[e.charAt(0)]) ? t : null, [e.replace(P, ""), n]);
  return {
    query: l,
    queryMode: r
  }
}

function T(e, t) {
  let {
    results: n,
    queryMode: l,
    query: r,
    maxQueryLength: i
  } = S.Z.getProps(), a = b.Z.getGuildId(), s = E.Z.getChannelId(a), o = n[(0, c.gJ)(c.a8.DOWN, -1, n)], u = I.Z.isEmail(r), d = I.Z.isPhoneNumber(r), f = I.Z.isUserTagLike(r), h = null != s && (0, A.AB)(s), _ = e => null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type, p = {
    current_channel_id: h ? void 0 : s,
    current_channel_static_route: h ? s : void 0,
    current_guild_id: a,
    query_mode: null != l ? l : "GENERAL",
    query_length: r.length,
    max_query_length: i,
    is_email_like: u,
    is_phone_like: d,
    is_username_like: f,
    query: u || d || f ? null : r,
    top_result_type: _(o),
    top_result_score: null != o ? o.score : null,
    num_results_total: S.Z.getResultTotals(),
    num_results_users: S.Z.getResultTotals(c.h8.USER),
    num_results_text_channels: S.Z.getResultTotals(c.h8.TEXT_CHANNEL),
    num_results_voice_channels: S.Z.getResultTotals(c.h8.VOICE_CHANNEL),
    num_results_guilds: S.Z.getResultTotals(c.h8.GUILD),
    num_results_group_dms: S.Z.getResultTotals(c.h8.GROUP_DM)
  };
  if (null != s) {
    let e = m.Z.getChannel(s);
    p.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: l,
      record: r
    } = t;
    switch (p.selected_type = _(t), p.selected_score = l, p.selected_index = n.indexOf(t), e) {
      case c.h8.GUILD:
        p.selected_guild_id = r.id;
        break;
      case c.h8.TEXT_CHANNEL:
      case c.h8.VOICE_CHANNEL:
        r instanceof g.Sf && (p.selected_guild_id = null != r.guild_id ? r.guild_id : null), p.selected_channel_id = r.id;
        break;
      case c.h8.GROUP_DM:
        p.selected_channel_id = r.id;
        break;
      case c.h8.USER:
        p.selected_user_id = r.id
    }
  }
  y.default.track(e, p)
}

function N() {
  l.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function j() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (S.Z.isOpen()) return;
    let n = b.Z.getGuildId(),
      l = E.Z.getChannelId(n);
    if (null != l) {
      let e = m.Z.getChannel(l);
      t = null != e ? e.type : null
    }
    y.default.track(O.rMx.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: n,
      current_channel_id: l,
      current_channel_type: t
    })
  }(e), l.Z.dispatch(v({
    type: "QUICKSWITCHER_SHOW"
  }, L(t)))
}

function Z() {
  T(O.rMx.QUICKSWITCHER_CLOSED), N()
}

function w(e) {
  l.Z.dispatch(v({
    type: "QUICKSWITCHER_SEARCH"
  }, L(e)))
}

function D(e) {
  l.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function R(e) {
  let t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  N(), T(O.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: g,
    record: E
  } = e, b = {
    page: O.ZY5.QUICK_SWITCHER
  };
  switch (g) {
    case c.h8.GUILD:
      (0, h.X)(E.id, {
        navigationReplace: !0
      });
      break;
    case c.h8.TEXT_CHANNEL:
      null != (t = m.Z.getChannel(E.id)) && (0, f.Kh)(t.id, {
        state: {
          analyticsSource: b
        },
        navigationReplace: !0
      });
      break;
    case c.h8.VOICE_CHANNEL:
      null != (t = m.Z.getChannel(E.id)) && (n ? i.Z.updateChatOpen(E.id, !0) : s.default.selectVoiceChannel(E.id), (0, f.Kh)(t.id, {
        state: {
          analyticsSource: b
        },
        navigationReplace: !0
      }));
      break;
    case c.h8.USER:
      r.Z.openPrivateChannel({
        recipientIds: [E.id],
        location: "Quickswitcher"
      }), a.Z.channelListScrollTo(O.ME, m.Z.getDMFromUserId(E.id));
      break;
    case c.h8.GROUP_DM:
      (0, f.Kh)(E.id, {
        navigationReplace: !0
      }), a.Z.channelListScrollTo(O.ME, E.id);
      break;
    case c.h8.APPLICATION:
      let y = p.Z.getActiveLibraryApplication(E.id);
      C(E.id, y, {
        analyticsParams: {
          source: O.Sbl.QUICK_SWITCHER,
          location: O.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case c.h8.LINK:
      (0, d.Z)(E.path, {
        navigationReplace: !0
      });
      break;
    case c.h8.IN_APP_NAVIGATION:
      if (e.record.type === u.Ky.SETTINGS) {
        let t = (0, _.default)(e.record.path);
        null != t && o.Z.open(t.section, t.subsection, {
          openWithoutBackstack: !1,
          impressionSource: t.source
        })
      } else(0, d.Z)(E.path, {
        navigationReplace: !0
      })
  }
  l.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}
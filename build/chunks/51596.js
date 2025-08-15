/** Chunk was on 62634 **/
/** chunk id: 51596, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $Z: () => k,
  Cp: () => v,
  F_: () => Z,
  Se: () => K,
  ZN: () => H,
  tF: () => B,
  yC: () => D
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js"), require("./388685.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk925549 = require("./925549.js"),
  Chunk287734 = require("./287734.js"),
  Chunk230711 = require("./230711.js"),
  Chunk212819 = require("./212819.js"),
  Chunk815372 = require("./815372.js"),
  Chunk336197 = require("./336197.js"),
  Chunk359110 = require("./359110.js"),
  Chunk769654 = require("./769654.js"),
  Chunk722589 = require("./722589.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk283595 = require("./283595.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk777754 = require("./777754.js"),
  Chunk823385 = require("./823385.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

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
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = l
    })
  }
  return t
}
let R = () => Promise.resolve();
R = require("./346329.js").playApplication;
let b = Object.freeze({
    [Chunk212819.xQ.USER]: Chunk212819.h8.USER,
    [Chunk212819.xQ.TEXT_CHANNEL]: Chunk212819.h8.TEXT_CHANNEL,
    [Chunk212819.xQ.VOICE_CHANNEL]: Chunk212819.h8.VOICE_CHANNEL,
    [Chunk212819.xQ.GUILD]: Chunk212819.h8.GUILD,
    [Chunk212819.xQ.APPLICATION]: Chunk212819.h8.APPLICATION
  }),
  O = new RegExp("^".concat(Chunk212819.xQ.USER, "|").concat(Chunk212819.xQ.TEXT_CHANNEL, "|").concat(Chunk212819.xQ.VOICE_CHANNEL, "|\\").concat(Chunk212819.xQ.GUILD, "|\\").concat(Chunk212819.xQ.APPLICATION));

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
  } = N.Z.getProps(), a = g.Z.getGuildId(), r = T.Z.getChannelId(a), o = n[(0, _.gJ)(_.a8.DOWN, false, n)], s = A.Z.isEmail(i), u = A.Z.isPhoneNumber(i), d = A.Z.isUserTagLike(i), h = null != r && (0, x.AB)(r), p = t => null == t ? null : t.type === _.h8.IN_APP_NAVIGATION ? t.type + "_" + t.record.type : t.type, E = {
    current_channel_id: h ? true : r,
    current_channel_static_route: h ? r : true,
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
    num_results_total: N.Z.getResultTotals(),
    num_results_users: N.Z.getResultTotals(_.h8.USER),
    num_results_text_channels: N.Z.getResultTotals(_.h8.TEXT_CHANNEL),
    num_results_voice_channels: N.Z.getResultTotals(_.h8.VOICE_CHANNEL),
    num_results_guilds: N.Z.getResultTotals(_.h8.GUILD),
    num_results_group_dms: N.Z.getResultTotals(_.h8.GROUP_DM)
  };
  if (null != r) {
    let t = f.Z.getChannel(r);
    E.current_channel_type = null != t ? t.type : null
  }
  if (null != e) {
    let {
      type: t,
      score: l,
      record: i
    } = e;
    switch (E.selected_type = p(e), E.selected_score = l, E.selected_index = n.indexOf(e), t) {
      case _.h8.GUILD:
        E.selected_guild_id = i.id;
        break;
      case _.h8.TEXT_CHANNEL:
      case _.h8.VOICE_CHANNEL:
        i instanceof C.Sf && (E.selected_guild_id = null != i.guild_id ? i.guild_id : null), E.selected_channel_id = i.id;
        break;
      case _.h8.GROUP_DM:
        E.selected_channel_id = i.id;
        break;
      case _.h8.USER:
        E.selected_user_id = i.id
    }
  }
  m.default.track(t, E)
}

function U() {
  Chunk570140.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function k() {
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND",
    e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "";
  ! function(t) {
    let e;
    if (N.Z.isOpen()) return;
    let n = g.Z.getGuildId(),
      l = T.Z.getChannelId(n);
    if (null != l) {
      let t = f.Z.getChannel(l);
      e = null != t ? t.type : null
    }
    m.default.track(S.rMx.QUICKSWITCHER_OPENED, {
      source: t,
      current_guild_id: n,
      current_channel_id: l,
      current_channel_type: e
    })
  }(module), Chunk570140.Z.dispatch(y({
    type: "QUICKSWITCHER_SHOW"
  }, Z(exports)))
}

function v() {
  L(Chunk981631.rMx.QUICKSWITCHER_CLOSED), U()
}

function H() {
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND";
  Chunk823385.Z.isOpen() ? v() : k(module)
}

function D(t) {
  i.Z.dispatch(y({
    type: "QUICKSWITCHER_SEARCH"
  }, Z(t)))
}

function B(t) {
  i.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: t
  })
}

function K(t) {
  let e, n = arguments.length > 1 && true !== arguments[1] && arguments[1];
  U(), (0, l.pTH)(), L(S.rMx.QUICKSWITCHER_RESULT_SELECTED, t);
  let {
    type: C,
    record: T
  } = t, g = {
    page: S.ZY5.QUICK_SWITCHER
  };
  switch (C) {
    case _.h8.GUILD:
      (0, p.X)(T.id, {
        navigationReplace: true
      });
      break;
    case _.h8.TEXT_CHANNEL:
      null != (e = f.Z.getChannel(T.id)) && (0, h.Kh)(e.id, {
        state: {
          analyticsSource: g
        },
        navigationReplace: true
      });
      break;
    case _.h8.VOICE_CHANNEL:
      null != (e = f.Z.getChannel(T.id)) && (n ? a.Z.updateChatOpen(T.id, true) : o.default.selectVoiceChannel(T.id), (0, h.Kh)(e.id, {
        state: {
          analyticsSource: g
        },
        navigationReplace: true
      }));
      break;
    case _.h8.USER:
      c.Z.openPrivateChannel({
        recipientIds: [T.id],
        location: "Quickswitcher"
      }), r.Z.channelListScrollTo(S.ME, f.Z.getDMFromUserId(T.id));
      break;
    case _.h8.GROUP_DM:
      (0, h.Kh)(T.id, {
        navigationReplace: true
      }), r.Z.channelListScrollTo(S.ME, T.id);
      break;
    case _.h8.APPLICATION:
      let m = I.Z.getActiveLibraryApplication(T.id);
      R(T.id, m, {
        analyticsParams: {
          source: S.Sbl.QUICK_SWITCHER,
          location: S.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case _.h8.LINK:
      (0, d.Z)(T.path, {
        navigationReplace: true
      });
      break;
    case _.h8.IN_APP_NAVIGATION:
      if (t.record.type === u.Ky.SETTINGS) {
        let e = (0, E.default)(t.record.path);
        null != e && s.Z.open(e.section, e.subsection, {
          openWithoutBackstack: false,
          impressionSource: e.source
        })
      } else(0, d.Z)(T.path, {
        navigationReplace: true
      })
  }
  i.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: t
  })
}
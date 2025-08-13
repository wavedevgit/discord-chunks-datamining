/** Chunk was on 73872 **/
/** chunk id: 51596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $Z: () => v,
  Cp: () => H,
  F_: () => Z,
  Se: () => P,
  ZN: () => k,
  tF: () => K,
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

function O(e) {
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
let b = () => Promise.resolve();
b = require("./346329.js").playApplication;
let y = Object.freeze({
    [Chunk212819.xQ.USER]: Chunk212819.h8.USER,
    [Chunk212819.xQ.TEXT_CHANNEL]: Chunk212819.h8.TEXT_CHANNEL,
    [Chunk212819.xQ.VOICE_CHANNEL]: Chunk212819.h8.VOICE_CHANNEL,
    [Chunk212819.xQ.GUILD]: Chunk212819.h8.GUILD,
    [Chunk212819.xQ.APPLICATION]: Chunk212819.h8.APPLICATION
  }),
  A = new RegExp("^".concat(Chunk212819.xQ.USER, "|").concat(Chunk212819.xQ.TEXT_CHANNEL, "|").concat(Chunk212819.xQ.VOICE_CHANNEL, "|\\").concat(Chunk212819.xQ.GUILD, "|\\").concat(Chunk212819.xQ.APPLICATION));

function Z(e) {
  var t;
  let n, [l, i] = (n = null != (t = y[e.charAt(0)]) ? t : null, [e.replace(A, ""), n]);
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
    maxQueryLength: a
  } = m.Z.getProps(), c = f.Z.getGuildId(), r = g.Z.getChannelId(c), s = n[(0, u.gJ)(u.a8.DOWN, false, n)], o = S.Z.isEmail(i), d = S.Z.isPhoneNumber(i), _ = S.Z.isUserTagLike(i), h = null != r && (0, R.AB)(r), p = e => null == e ? null : e.type === u.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type, E = {
    current_channel_id: h ? true : r,
    current_channel_static_route: h ? r : true,
    current_guild_id: c,
    query_mode: null != l ? l : "GENERAL",
    query_length: i.length,
    max_query_length: a,
    is_email_like: o,
    is_phone_like: d,
    is_username_like: _,
    query: o || d || _ ? null : i,
    top_result_type: p(s),
    top_result_score: null != s ? s.score : null,
    num_results_total: m.Z.getResultTotals(),
    num_results_users: m.Z.getResultTotals(u.h8.USER),
    num_results_text_channels: m.Z.getResultTotals(u.h8.TEXT_CHANNEL),
    num_results_voice_channels: m.Z.getResultTotals(u.h8.VOICE_CHANNEL),
    num_results_guilds: m.Z.getResultTotals(u.h8.GUILD),
    num_results_group_dms: m.Z.getResultTotals(u.h8.GROUP_DM)
  };
  if (null != r) {
    let e = I.Z.getChannel(r);
    E.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: l,
      record: i
    } = t;
    switch (E.selected_type = p(t), E.selected_score = l, E.selected_index = n.indexOf(t), e) {
      case u.h8.GUILD:
        E.selected_guild_id = i.id;
        break;
      case u.h8.TEXT_CHANNEL:
      case u.h8.VOICE_CHANNEL:
        i instanceof C.Sf && (E.selected_guild_id = null != i.guild_id ? i.guild_id : null), E.selected_channel_id = i.id;
        break;
      case u.h8.GROUP_DM:
        E.selected_channel_id = i.id;
        break;
      case u.h8.USER:
        E.selected_user_id = i.id
    }
  }
  N.default.track(e, E)
}

function U() {
  Chunk570140.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function v() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (m.Z.isOpen()) return;
    let n = f.Z.getGuildId(),
      l = g.Z.getChannelId(n);
    if (null != l) {
      let e = I.Z.getChannel(l);
      t = null != e ? e.type : null
    }
    N.default.track(x.rMx.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: n,
      current_channel_id: l,
      current_channel_type: t
    })
  }(module), Chunk570140.Z.dispatch(O({
    type: "QUICKSWITCHER_SHOW"
  }, Z(exports)))
}

function H() {
  L(Chunk981631.rMx.QUICKSWITCHER_CLOSED), U()
}

function k() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND";
  Chunk823385.Z.isOpen() ? H() : v(module)
}

function D(e) {
  i.Z.dispatch(O({
    type: "QUICKSWITCHER_SEARCH"
  }, Z(e)))
}

function K(e) {
  i.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function P(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] && arguments[1];
  U(), (0, l.pTH)(), L(x.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: C,
    record: g
  } = e, f = {
    page: x.ZY5.QUICK_SWITCHER
  };
  switch (C) {
    case u.h8.GUILD:
      (0, p.X)(g.id, {
        navigationReplace: true
      });
      break;
    case u.h8.TEXT_CHANNEL:
      null != (t = I.Z.getChannel(g.id)) && (0, h.Kh)(t.id, {
        state: {
          analyticsSource: f
        },
        navigationReplace: true
      });
      break;
    case u.h8.VOICE_CHANNEL:
      null != (t = I.Z.getChannel(g.id)) && (n ? c.Z.updateChatOpen(g.id, true) : s.default.selectVoiceChannel(g.id), (0, h.Kh)(t.id, {
        state: {
          analyticsSource: f
        },
        navigationReplace: true
      }));
      break;
    case u.h8.USER:
      a.Z.openPrivateChannel({
        recipientIds: [g.id],
        location: "Quickswitcher"
      }), r.Z.channelListScrollTo(x.ME, I.Z.getDMFromUserId(g.id));
      break;
    case u.h8.GROUP_DM:
      (0, h.Kh)(g.id, {
        navigationReplace: true
      }), r.Z.channelListScrollTo(x.ME, g.id);
      break;
    case u.h8.APPLICATION:
      let N = T.Z.getActiveLibraryApplication(g.id);
      b(g.id, N, {
        analyticsParams: {
          source: x.Sbl.QUICK_SWITCHER,
          location: x.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case u.h8.LINK:
      (0, _.Z)(g.path, {
        navigationReplace: true
      });
      break;
    case u.h8.IN_APP_NAVIGATION:
      if (e.record.type === d.Ky.SETTINGS) {
        let t = (0, E.default)(e.record.path);
        null != t && o.Z.open(t.section, t.subsection, {
          openWithoutBackstack: false,
          impressionSource: t.source
        })
      } else(0, _.Z)(g.path, {
        navigationReplace: true
      })
  }
  i.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}
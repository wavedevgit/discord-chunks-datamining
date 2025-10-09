/** Chunk was on web.js **/
/** chunk id: 51596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Z: () => M,
  Cp: () => k,
  F_: () => w,
  Se: () => B,
  ZN: () => j,
  tF: () => G,
  yC: () => U
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js"), require("./388685.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk925549 = require("./925549.js"),
  Chunk287734 = require("./287734.js"),
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

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}
let C = () => Promise.resolve();
C = require("./346329.js").playApplication;
let N = Object.freeze({
    [Chunk212819.xQ.USER]: Chunk212819.h8.USER,
    [Chunk212819.xQ.TEXT_CHANNEL]: Chunk212819.h8.TEXT_CHANNEL,
    [Chunk212819.xQ.VOICE_CHANNEL]: Chunk212819.h8.VOICE_CHANNEL,
    [Chunk212819.xQ.GUILD]: Chunk212819.h8.GUILD,
    [Chunk212819.xQ.APPLICATION]: Chunk212819.h8.APPLICATION
  }),
  R = new RegExp("^".concat(Chunk212819.xQ.USER, "|").concat(Chunk212819.xQ.TEXT_CHANNEL, "|").concat(Chunk212819.xQ.VOICE_CHANNEL, "|\\").concat(Chunk212819.xQ.GUILD, "|\\").concat(Chunk212819.xQ.APPLICATION));

function P(e) {
  var t;
  let n = null != (t = N[e.charAt(0)]) ? t : null;
  return [e.replace(R, ""), n]
}

function w(e) {
  let [t, n] = P(e);
  return {
    query: t,
    queryMode: n
  }
}

function D(e) {
  let t;
  if (v.Z.isOpen()) return;
  let n = b.Z.getGuildId(),
    r = E.Z.getChannelId(n);
  if (null != r) {
    let e = m.Z.getChannel(r);
    t = null != e ? e.type : null
  }
  y.default.track(I.rMx.QUICKSWITCHER_OPENED, {
    source: e,
    current_guild_id: n,
    current_channel_id: r,
    current_channel_type: t
  })
}

function L(e, t) {
  let {
    results: n,
    queryMode: r,
    query: i,
    maxQueryLength: a
  } = v.Z.getProps(), o = b.Z.getGuildId(), s = E.Z.getChannelId(o), l = n[(0, c.gJ)(c.a8.DOWN, false, n)], u = O.Z.isEmail(i), d = O.Z.isPhoneNumber(i), f = O.Z.isUserTagLike(i), _ = null != s && (0, T.AB)(s), p = e => null == e ? null : e.type === c.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type, g = {
    current_channel_id: _ ? true : s,
    current_channel_static_route: _ ? s : true,
    current_guild_id: o,
    query_mode: null != r ? r : "GENERAL",
    query_length: i.length,
    max_query_length: a,
    is_email_like: u,
    is_phone_like: d,
    is_username_like: f,
    query: u || d || f ? null : i,
    top_result_type: p(l),
    top_result_score: null != l ? l.score : null,
    num_results_total: v.Z.getResultTotals(),
    num_results_users: v.Z.getResultTotals(c.h8.USER),
    num_results_text_channels: v.Z.getResultTotals(c.h8.TEXT_CHANNEL),
    num_results_voice_channels: v.Z.getResultTotals(c.h8.VOICE_CHANNEL),
    num_results_guilds: v.Z.getResultTotals(c.h8.GUILD),
    num_results_group_dms: v.Z.getResultTotals(c.h8.GROUP_DM)
  };
  if (null != s) {
    let e = m.Z.getChannel(s);
    g.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: r,
      record: i
    } = t;
    switch (g.selected_type = p(t), g.selected_score = r, g.selected_index = n.indexOf(t), e) {
      case c.h8.GUILD:
        g.selected_guild_id = i.id;
        break;
      case c.h8.TEXT_CHANNEL:
      case c.h8.VOICE_CHANNEL:
        i instanceof h.Sf && (g.selected_guild_id = null != i.guild_id ? i.guild_id : null), g.selected_channel_id = i.id;
        break;
      case c.h8.GROUP_DM:
        g.selected_channel_id = i.id;
        break;
      case c.h8.USER:
        g.selected_user_id = i.id
    }
  }
  y.default.track(e, g)
}

function x() {
  Chunk570140.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function M() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "";
  D(module), Chunk570140.Z.dispatch(A({
    type: "QUICKSWITCHER_SHOW"
  }, w(exports)))
}

function k() {
  L(Chunk981631.rMx.QUICKSWITCHER_CLOSED), x()
}

function j() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND";
  Chunk823385.Z.isOpen() ? k() : M(module)
}

function U(e) {
  i.Z.dispatch(A({
    type: "QUICKSWITCHER_SEARCH"
  }, w(e)))
}

function G(e) {
  i.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function B(e) {
  let t, h = arguments.length > 1 && true !== arguments[1] && arguments[1];
  x(), (0, r.pTH)(), L(I.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: E,
    record: b
  } = e, y = {
    page: I.ZY5.QUICK_SWITCHER
  };
  switch (E) {
    case c.h8.GUILD:
      (0, _.X)(b.id, {
        navigationReplace: true
      });
      break;
    case c.h8.TEXT_CHANNEL:
      null != (t = m.Z.getChannel(b.id)) && (0, f.Kh)(t.id, {
        state: {
          analyticsSource: y
        },
        navigationReplace: true
      });
      break;
    case c.h8.VOICE_CHANNEL:
      null != (t = m.Z.getChannel(b.id)) && (h ? o.Z.updateChatOpen(b.id, true) : l.default.selectVoiceChannel(b.id), (0, f.Kh)(t.id, {
        state: {
          analyticsSource: y
        },
        navigationReplace: true
      }));
      break;
    case c.h8.USER:
      a.Z.openPrivateChannel({
        recipientIds: [b.id],
        location: "Quickswitcher"
      }), s.Z.channelListScrollTo(I.ME, m.Z.getDMFromUserId(b.id));
      break;
    case c.h8.GROUP_DM:
      (0, f.Kh)(b.id, {
        navigationReplace: true
      }), s.Z.channelListScrollTo(I.ME, b.id);
      break;
    case c.h8.APPLICATION:
      let O = g.Z.getActiveLibraryApplication(b.id);
      C(b.id, O, {
        analyticsParams: {
          source: I.Sbl.QUICK_SWITCHER,
          location: I.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case c.h8.LINK:
      (0, d.Z)(b.path, {
        navigationReplace: true
      });
      break;
    case c.h8.IN_APP_NAVIGATION:
      if (e.record.type === u.Ky.SETTINGS) {
        let t = (0, p.default)(e.record.path);
        if (null != t) {
          let {
            openUserSettingsFromParsedUrl: e
          } = n(518596);
          e({
            match: t,
            urlOrigin: "quickswitcher"
          })
        }
      } else(0, d.Z)(b.path, {
        navigationReplace: true
      })
  }
  i.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}
/** Chunk was on web.js **/
/** chunk id: 51596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Z: () => j,
  Cp: () => U,
  F_: () => L,
  Se: () => F,
  ZN: () => G,
  tF: () => Z,
  yC: () => B
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js"), require("./388685.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk925549 = require("./925549.js"),
  Chunk37234 = require("./37234.js"),
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
  Chunk51144 = require("./51144.js"),
  Chunk777754 = require("./777754.js"),
  Chunk823385 = require("./823385.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}
let R = () => Promise.resolve();
R = require("./346329.js").playApplication;
let P = Object.freeze({
    [Chunk212819.xQ.USER]: Chunk212819.h8.USER,
    [Chunk212819.xQ.TEXT_CHANNEL]: Chunk212819.h8.TEXT_CHANNEL,
    [Chunk212819.xQ.VOICE_CHANNEL]: Chunk212819.h8.VOICE_CHANNEL,
    [Chunk212819.xQ.GUILD]: Chunk212819.h8.GUILD,
    [Chunk212819.xQ.APPLICATION]: Chunk212819.h8.APPLICATION
  }),
  w = new RegExp("^".concat(Chunk212819.xQ.USER, "|").concat(Chunk212819.xQ.TEXT_CHANNEL, "|").concat(Chunk212819.xQ.VOICE_CHANNEL, "|\\").concat(Chunk212819.xQ.GUILD, "|\\").concat(Chunk212819.xQ.APPLICATION));

function D(e) {
  var t;
  let n = null != (t = P[e.charAt(0)]) ? t : null;
  return [e.replace(w, ""), n]
}

function L(e) {
  let [t, n] = D(e);
  return {
    query: t,
    queryMode: n
  }
}

function x(e) {
  let t;
  if (T.Z.isOpen()) return;
  let n = y.Z.getGuildId(),
    r = b.Z.getChannelId(n);
  if (null != r) {
    let e = g.Z.getChannel(r);
    t = null != e ? e.type : null
  }
  O.default.track(S.rMx.QUICKSWITCHER_OPENED, {
    source: e,
    current_guild_id: n,
    current_channel_id: r,
    current_channel_type: t
  })
}

function M(e, t) {
  let {
    results: n,
    queryMode: r,
    query: i,
    maxQueryLength: a
  } = T.Z.getProps(), o = y.Z.getGuildId(), s = b.Z.getChannelId(o), l = n[(0, u.gJ)(u.a8.DOWN, false, n)], c = I.Z.isEmail(i), d = I.Z.isPhoneNumber(i), f = I.Z.isUserTagLike(i), _ = null != s && (0, A.AB)(s), p = e => null == e ? null : e.type === u.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type, h = {
    current_channel_id: _ ? true : s,
    current_channel_static_route: _ ? s : true,
    current_guild_id: o,
    query_mode: null != r ? r : "GENERAL",
    query_length: i.length,
    max_query_length: a,
    is_email_like: c,
    is_phone_like: d,
    is_username_like: f,
    query: c || d || f ? null : i,
    top_result_type: p(l),
    top_result_score: null != l ? l.score : null,
    num_results_total: T.Z.getResultTotals(),
    num_results_users: T.Z.getResultTotals(u.h8.USER),
    num_results_text_channels: T.Z.getResultTotals(u.h8.TEXT_CHANNEL),
    num_results_voice_channels: T.Z.getResultTotals(u.h8.VOICE_CHANNEL),
    num_results_guilds: T.Z.getResultTotals(u.h8.GUILD),
    num_results_group_dms: T.Z.getResultTotals(u.h8.GROUP_DM)
  };
  if (null != s) {
    let e = g.Z.getChannel(s);
    h.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: r,
      record: i
    } = t;
    switch (h.selected_type = p(t), h.selected_score = r, h.selected_index = n.indexOf(t), e) {
      case u.h8.GUILD:
        h.selected_guild_id = i.id;
        break;
      case u.h8.TEXT_CHANNEL:
      case u.h8.VOICE_CHANNEL:
        i instanceof m.Sf && (h.selected_guild_id = null != i.guild_id ? i.guild_id : null), h.selected_channel_id = i.id;
        break;
      case u.h8.GROUP_DM:
        h.selected_channel_id = i.id;
        break;
      case u.h8.USER:
        h.selected_user_id = i.id
    }
  }
  O.default.track(e, h)
}

function k() {
  Chunk570140.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function j() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "";
  x(module), Chunk570140.Z.dispatch(N({
    type: "QUICKSWITCHER_SHOW"
  }, L(exports)))
}

function U() {
  M(Chunk981631.rMx.QUICKSWITCHER_CLOSED), k()
}

function G() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND";
  Chunk823385.Z.isOpen() ? U() : j(module)
}

function B(e) {
  i.Z.dispatch(N({
    type: "QUICKSWITCHER_SEARCH"
  }, L(e)))
}

function Z(e) {
  i.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function F(e) {
  let t, m = arguments.length > 1 && true !== arguments[1] && arguments[1];
  k(), (0, r.pTH)(), M(S.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: b,
    record: y
  } = e, O = {
    page: S.ZY5.QUICK_SWITCHER
  };
  switch (b) {
    case u.h8.GUILD:
      (0, p.X)(y.id, {
        navigationReplace: true
      });
      break;
    case u.h8.TEXT_CHANNEL:
      null != (t = g.Z.getChannel(y.id)) && (0, _.Kh)(t.id, {
        state: {
          analyticsSource: O
        },
        navigationReplace: true
      });
      break;
    case u.h8.VOICE_CHANNEL:
      null != (t = g.Z.getChannel(y.id)) && (m ? o.Z.updateChatOpen(y.id, true) : c.default.selectVoiceChannel(y.id), (0, _.Kh)(t.id, {
        state: {
          analyticsSource: O
        },
        navigationReplace: true
      }));
      break;
    case u.h8.USER:
      a.Z.openPrivateChannel({
        recipientIds: [y.id],
        location: "Quickswitcher"
      }), s.Z.channelListScrollTo(S.ME, g.Z.getDMFromUserId(y.id));
      break;
    case u.h8.GROUP_DM:
      (0, _.Kh)(y.id, {
        navigationReplace: true
      }), s.Z.channelListScrollTo(S.ME, y.id);
      break;
    case u.h8.APPLICATION:
      let I = E.Z.getActiveLibraryApplication(y.id);
      R(y.id, I, {
        analyticsParams: {
          source: S.Sbl.QUICK_SWITCHER,
          location: S.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case u.h8.LINK:
      (0, f.Z)(y.path, {
        navigationReplace: true
      });
      break;
    case u.h8.IN_APP_NAVIGATION:
      if (e.record.type === d.Ky.SETTINGS) {
        let t = (0, h.default)(e.record.path);
        if (null != t) {
          let {
            openUserSettingsFromParsedUrl: e
          } = n(518596);
          e({
            match: t,
            urlOrigin: "quickswitcher"
          })
        }
      } else if (e.record.type === d.Ky.REVENUE_PLAYGROUND) {
        if (!(0, v.vP)()) return;
        (0, l.jN)(S.S9g.REVENUE_PLAYGROUND)
      } else(0, f.Z)(y.path, {
        navigationReplace: true
      })
  }
  i.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}
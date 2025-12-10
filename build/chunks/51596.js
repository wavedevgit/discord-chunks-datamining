/** Chunk was on web.js **/
/** chunk id: 51596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Z: () => Z,
  Cp: () => B,
  F_: () => M,
  Se: () => Y,
  ZN: () => F,
  tF: () => H,
  yC: () => V
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./704826.js"), require("./388685.js");
var Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475179 = require("./475179.js"),
  Chunk925549 = require("./925549.js"),
  Chunk37234 = require("./37234.js"),
  Chunk287734 = require("./287734.js"),
  Chunk100527 = require("./100527.js"),
  Chunk212819 = require("./212819.js"),
  Chunk815372 = require("./815372.js"),
  Chunk335131 = require("./335131.js"),
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
  Chunk176505 = require("./176505.js"),
  Chunk215023 = require("./215023.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      R(e, t, n[t])
    })
  }
  return e
}
let w = () => Promise.resolve();
w = require("./346329.js").playApplication;
let x = Object.freeze({
    [Chunk212819.xQ.USER]: Chunk212819.h8.USER,
    [Chunk212819.xQ.TEXT_CHANNEL]: Chunk212819.h8.TEXT_CHANNEL,
    [Chunk212819.xQ.VOICE_CHANNEL]: Chunk212819.h8.VOICE_CHANNEL,
    [Chunk212819.xQ.GUILD]: Chunk212819.h8.GUILD,
    [Chunk212819.xQ.APPLICATION]: Chunk212819.h8.APPLICATION
  }),
  L = new RegExp("^".concat(Chunk212819.xQ.USER, "|").concat(Chunk212819.xQ.TEXT_CHANNEL, "|").concat(Chunk212819.xQ.VOICE_CHANNEL, "|\\").concat(Chunk212819.xQ.GUILD, "|\\").concat(Chunk212819.xQ.APPLICATION));

function j(e) {
  var t;
  let n = null != (t = x[e.charAt(0)]) ? t : null;
  return [e.replace(L, ""), n]
}

function M(e) {
  let [t, n] = j(e);
  return {
    query: t,
    queryMode: n
  }
}

function k(e) {
  let t;
  if (C.Z.isOpen()) return;
  let n = v.Z.getGuildId(),
    r = O.Z.getChannelId(n);
  if (null != r) {
    let e = b.Z.getChannel(r);
    t = null != e ? e.type : null
  }
  S.default.track(A.rMx.QUICKSWITCHER_OPENED, {
    source: e,
    current_guild_id: n,
    current_channel_id: r,
    current_channel_type: t
  })
}

function U(e, t) {
  let {
    results: n,
    queryMode: r,
    query: i,
    maxQueryLength: a
  } = C.Z.getProps(), o = v.Z.getGuildId(), s = O.Z.getChannelId(o), l = n[(0, d.gJ)(d.a8.DOWN, false, n)], c = T.Z.isEmail(i), u = T.Z.isPhoneNumber(i), f = T.Z.isUserTagLike(i), p = null != s && (0, N.AB)(s), _ = e => null == e ? null : e.type === d.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type, m = {
    current_channel_id: p ? true : s,
    current_channel_static_route: p ? s : true,
    current_guild_id: o,
    query_mode: null != r ? r : "GENERAL",
    query_length: i.length,
    max_query_length: a,
    is_email_like: c,
    is_phone_like: u,
    is_username_like: f,
    query: c || u || f ? null : i,
    top_result_type: _(l),
    top_result_score: null != l ? l.score : null,
    num_results_total: C.Z.getResultTotals(),
    num_results_users: C.Z.getResultTotals(d.h8.USER),
    num_results_text_channels: C.Z.getResultTotals(d.h8.TEXT_CHANNEL),
    num_results_voice_channels: C.Z.getResultTotals(d.h8.VOICE_CHANNEL),
    num_results_guilds: C.Z.getResultTotals(d.h8.GUILD),
    num_results_group_dms: C.Z.getResultTotals(d.h8.GROUP_DM)
  };
  if (null != s) {
    let e = b.Z.getChannel(s);
    m.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: r,
      record: i
    } = t;
    switch (m.selected_type = _(t), m.selected_score = r, m.selected_index = n.indexOf(t), e) {
      case d.h8.GUILD:
        m.selected_guild_id = i.id;
        break;
      case d.h8.TEXT_CHANNEL:
      case d.h8.VOICE_CHANNEL:
        i instanceof E.Sf && (m.selected_guild_id = null != i.guild_id ? i.guild_id : null), m.selected_channel_id = i.id;
        break;
      case d.h8.GROUP_DM:
        m.selected_channel_id = i.id;
        break;
      case d.h8.USER:
        m.selected_user_id = i.id
    }
  }
  S.default.track(e, m)
}

function G() {
  Chunk570140.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function Z() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "";
  k(module), Chunk570140.Z.dispatch(D({
    type: "QUICKSWITCHER_SHOW"
  }, M(exports)))
}

function B() {
  U(Chunk981631.rMx.QUICKSWITCHER_CLOSED), G()
}

function F() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND";
  Chunk823385.Z.isOpen() ? B() : Z(module)
}

function V(e) {
  i.Z.dispatch(D({
    type: "QUICKSWITCHER_SEARCH"
  }, M(e)))
}

function H(e) {
  i.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function Y(e) {
  let t, E = arguments.length > 1 && true !== arguments[1] && arguments[1];
  G(), (0, r.pTH)(), U(A.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: O,
    record: v
  } = e, S = {
    page: A.ZY5.QUICK_SWITCHER
  };
  switch (O) {
    case d.h8.GUILD:
      (0, h.X)(v.id, {
        navigationReplace: true
      });
      break;
    case d.h8.TEXT_CHANNEL:
      null != (t = b.Z.getChannel(v.id)) && (0, m.Kh)(t.id, {
        state: {
          analyticsSource: S
        },
        navigationReplace: true
      });
      break;
    case d.h8.VOICE_CHANNEL:
      null != (t = b.Z.getChannel(v.id)) && (E ? o.Z.updateChatOpen(v.id, true) : c.default.selectVoiceChannel(v.id), (0, m.Kh)(t.id, {
        state: {
          analyticsSource: S
        },
        navigationReplace: true
      }));
      break;
    case d.h8.USER:
      a.Z.openPrivateChannel({
        recipientIds: [v.id],
        location: "Quickswitcher"
      }), s.Z.channelListScrollTo(A.ME, b.Z.getDMFromUserId(v.id));
      break;
    case d.h8.GROUP_DM:
      (0, m.Kh)(v.id, {
        navigationReplace: true
      }), s.Z.channelListScrollTo(A.ME, v.id);
      break;
    case d.h8.APPLICATION:
      let T = y.Z.getActiveLibraryApplication(v.id);
      w(v.id, T, {
        analyticsParams: {
          source: A.Sbl.QUICK_SWITCHER,
          location: A.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case d.h8.LINK:
      (0, _.Z)(v.path, {
        navigationReplace: true
      });
      break;
    case d.h8.IN_APP_NAVIGATION:
      if (e.record.type === f.Ky.SETTINGS) {
        let t = (0, g.default)(e.record.path);
        if (null != t) {
          let {
            openUserSettingsFromParsedUrl: e
          } = n(518596);
          e({
            match: t,
            urlOrigin: "quickswitcher"
          })
        }
      } else if (e.record.type === f.Ky.PLAYGROUND) {
        if (!(0, I.vP)()) return;
        {
          var C;
          let {
            PlaygroundStore: t
          } = n(156142), r = null != (C = e.record.collectionId) ? C : null;
          t.setState({
            selectedCollection: r,
            selectedStory: null
          }), (0, l.jN)(A.S9g.COMPONENT_PLAYGROUND)
        }
      } else e.record.type === f.Ky.SHOP_ORBS_TAB ? (0, p.mK)({
        tab: P.AW.ORBS,
        analyticsLocations: [u.Z.QUICK_SWITCHER],
        analyticsSource: u.Z.QUICK_SWITCHER
      }) : (0, _.Z)(v.path, {
        navigationReplace: true
      })
  }
  i.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}
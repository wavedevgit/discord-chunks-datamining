/** Chunk was on web.js **/
/** chunk id: 793322, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $P: () => H,
  F6: () => W,
  L$: () => B,
  LV: () => M,
  WU: () => V,
  jD: () => F,
  wf: () => Y
}), require("./591487.js"), require("./727858.js"), require("./747238.js"), require("./812715.js"), require("./896048.js");
var Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk308528 = require("./308528.js"),
  Chunk367513 = require("./367513.js"),
  Chunk951001 = require("./951001.js"),
  Chunk398590 = require("./398590.js"),
  Chunk956793 = require("./956793.js"),
  Chunk793574 = require("./793574.js"),
  Chunk629357 = require("./629357.js"),
  Chunk329308 = require("./329308.js"),
  Chunk979286 = require("./979286.js"),
  Chunk22007 = require("./22007.js"),
  Chunk378570 = require("./378570.js"),
  Chunk345942 = require("./345942.js"),
  Chunk849823 = require("./849823.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk189081 = require("./189081.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk988102 = require("./988102.js"),
  Chunk174768 = require("./174768.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk758836 = require("./758836.js");

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
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
let D = () => Promise.resolve();
D = require("./715671.js").playApplication;
let x = Object.freeze({
    [Chunk629357.AT.USER]: Chunk629357.rD.USER,
    [Chunk629357.AT.TEXT_CHANNEL]: Chunk629357.rD.TEXT_CHANNEL,
    [Chunk629357.AT.VOICE_CHANNEL]: Chunk629357.rD.VOICE_CHANNEL,
    [Chunk629357.AT.GUILD]: Chunk629357.rD.GUILD,
    [Chunk629357.AT.APPLICATION]: Chunk629357.rD.APPLICATION
  }),
  L = new RegExp("^".concat(Chunk629357.AT.USER, "|").concat(Chunk629357.AT.TEXT_CHANNEL, "|").concat(Chunk629357.AT.VOICE_CHANNEL, "|\\").concat(Chunk629357.AT.GUILD, "|\\").concat(Chunk629357.AT.APPLICATION));

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
  if (T.A.isOpen()) return;
  let n = v.A.getGuildId(),
    r = O.A.getChannelId(n);
  if (null != r) {
    let e = y.A.getChannel(r);
    t = null != e ? e.type : null
  }
  A.default.track(C.HAw.QUICKSWITCHER_OPENED, {
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
  } = T.A.getProps(), s = v.A.getGuildId(), o = O.A.getChannelId(s), l = n[(0, d.Vv)(d.vB.DOWN, false, n)], c = S.A.isEmail(i), u = S.A.isPhoneNumber(i), f = S.A.isUserTagLike(i), p = null != o && (0, N.jq)(o), _ = e => null == e ? null : e.type === d.rD.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type, h = {
    current_channel_id: p ? true : o,
    current_channel_static_route: p ? o : true,
    current_guild_id: s,
    query_mode: null != r ? r : "GENERAL",
    query_length: i.length,
    max_query_length: a,
    is_email_like: c,
    is_phone_like: u,
    is_username_like: f,
    query: c || u || f ? null : i,
    top_result_type: _(l),
    top_result_score: null != l ? l.score : null,
    num_results_total: T.A.getResultTotals(),
    num_results_users: T.A.getResultTotals(d.rD.USER),
    num_results_text_channels: T.A.getResultTotals(d.rD.TEXT_CHANNEL),
    num_results_voice_channels: T.A.getResultTotals(d.rD.VOICE_CHANNEL),
    num_results_guilds: T.A.getResultTotals(d.rD.GUILD),
    num_results_group_dms: T.A.getResultTotals(d.rD.GROUP_DM)
  };
  if (null != o) {
    let e = y.A.getChannel(o);
    h.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: r,
      record: i
    } = t;
    switch (h.selected_type = _(t), h.selected_score = r, h.selected_index = n.indexOf(t), e) {
      case d.rD.GUILD:
        h.selected_guild_id = i.id;
        break;
      case d.rD.TEXT_CHANNEL:
      case d.rD.VOICE_CHANNEL:
        i instanceof E.YB && (h.selected_guild_id = null != i.guild_id ? i.guild_id : null), h.selected_channel_id = i.id;
        break;
      case d.rD.GROUP_DM:
        h.selected_channel_id = i.id;
        break;
      case d.rD.USER:
        h.selected_user_id = i.id
    }
  }
  A.default.track(e, h)
}

function G() {
  i.h.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function V() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "";
  k(e), i.h.dispatch(P({
    type: "QUICKSWITCHER_SHOW"
  }, M(t)))
}

function F() {
  U(C.HAw.QUICKSWITCHER_CLOSED), G()
}

function B() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND";
  T.A.isOpen() ? F() : V(e)
}

function H(e) {
  i.h.dispatch(P({
    type: "QUICKSWITCHER_SEARCH"
  }, M(e)))
}

function Y(e) {
  i.h.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function W(e) {
  let t, E = arguments.length > 1 && true !== arguments[1] && arguments[1];
  G(), (0, r.s7G)(), U(C.HAw.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: O,
    record: v
  } = e, A = {
    page: C.liQ.QUICK_SWITCHER
  };
  switch (O) {
    case d.rD.GUILD:
      (0, m.u)(v.id, {
        navigationReplace: true
      });
      break;
    case d.rD.TEXT_CHANNEL:
      null != (t = y.A.getChannel(v.id)) && (0, h.iN)(t.id, {
        state: {
          analyticsSource: A
        },
        navigationReplace: true
      });
      break;
    case d.rD.VOICE_CHANNEL:
      null != (t = y.A.getChannel(v.id)) && (E ? s.A.updateChatOpen(v.id, true) : c.default.selectVoiceChannel(v.id), (0, h.iN)(t.id, {
        state: {
          analyticsSource: A
        },
        navigationReplace: true
      }));
      break;
    case d.rD.USER:
      a.A.openPrivateChannel({
        recipientIds: [v.id],
        location: "Quickswitcher"
      }), o.A.channelListScrollTo(C.ME, y.A.getDMFromUserId(v.id));
      break;
    case d.rD.GROUP_DM:
      (0, h.iN)(v.id, {
        navigationReplace: true
      }), o.A.channelListScrollTo(C.ME, v.id);
      break;
    case d.rD.APPLICATION:
      let S = b.A.getActiveLibraryApplication(v.id);
      D(v.id, S, {
        analyticsParams: {
          source: C.ThZ.QUICK_SWITCHER,
          location: C.ThZ.QUICK_SWITCHER
        }
      });
      break;
    case d.rD.LINK:
      (0, _.A)(v.path, {
        navigationReplace: true
      });
      break;
    case d.rD.IN_APP_NAVIGATION:
      if (e.record.type === f.t1.SETTINGS) {
        let t = (0, g.default)(e.record.path);
        if (null != t) {
          let {
            openUserSettingsFromParsedUrl: e
          } = n(840065);
          e({
            match: t,
            urlOrigin: "quickswitcher"
          })
        }
      } else if (e.record.type === f.t1.PLAYGROUND) {
        if (!(0, I.Gn)()) return;
        {
          var T;
          let {
            PlaygroundStore: t
          } = n(3258), r = null != (T = e.record.collectionId) ? T : null;
          t.setState({
            selectedCollection: r,
            selectedStory: null
          }), (0, l.id)(C.zgK.COMPONENT_PLAYGROUND)
        }
      } else e.record.type === f.t1.SHOP_ORBS_TAB ? (0, p.Cz)({
        tab: w.G2.ORBS,
        analyticsLocations: [u.A.QUICK_SWITCHER],
        analyticsSource: u.A.QUICK_SWITCHER
      }) : (0, _.A)(v.path, {
        navigationReplace: true
      })
  }
  i.h.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}
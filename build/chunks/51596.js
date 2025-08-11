/** Chunk was on 75708 **/
/** chunk id: 51596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $Z: () => D,
  Cp: () => Z,
  F_: () => A,
  Se: () => L,
  tF: () => k,
  yC: () => w
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

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}
let I = () => Promise.resolve();
I = require("./346329.js").playApplication;
let N = Object.freeze({
    [Chunk212819.xQ.USER]: Chunk212819.h8.USER,
    [Chunk212819.xQ.TEXT_CHANNEL]: Chunk212819.h8.TEXT_CHANNEL,
    [Chunk212819.xQ.VOICE_CHANNEL]: Chunk212819.h8.VOICE_CHANNEL,
    [Chunk212819.xQ.GUILD]: Chunk212819.h8.GUILD,
    [Chunk212819.xQ.APPLICATION]: Chunk212819.h8.APPLICATION
  }),
  y = new RegExp("^".concat(Chunk212819.xQ.USER, "|").concat(Chunk212819.xQ.TEXT_CHANNEL, "|").concat(Chunk212819.xQ.VOICE_CHANNEL, "|\\").concat(Chunk212819.xQ.GUILD, "|\\").concat(Chunk212819.xQ.APPLICATION));

function A(e) {
  var t;
  let n, [i, r] = (n = null != (t = N[e.charAt(0)]) ? t : null, [e.replace(y, ""), n]);
  return {
    query: i,
    queryMode: r
  }
}

function P(e, t) {
  let {
    results: n,
    queryMode: i,
    query: r,
    maxQueryLength: s
  } = O.Z.getProps(), a = j.Z.getGuildId(), l = _.Z.getChannelId(a), o = n[(0, d.gJ)(d.a8.DOWN, false, n)], c = C.Z.isEmail(r), u = C.Z.isPhoneNumber(r), m = C.Z.isUserTagLike(r), p = null != l && (0, S.AB)(l), g = e => null == e ? null : e.type === d.h8.IN_APP_NAVIGATION ? e.type + "_" + e.record.type : e.type, h = {
    current_channel_id: p ? true : l,
    current_channel_static_route: p ? l : true,
    current_guild_id: a,
    query_mode: null != i ? i : "GENERAL",
    query_length: r.length,
    max_query_length: s,
    is_email_like: c,
    is_phone_like: u,
    is_username_like: m,
    query: c || u || m ? null : r,
    top_result_type: g(o),
    top_result_score: null != o ? o.score : null,
    num_results_total: O.Z.getResultTotals(),
    num_results_users: O.Z.getResultTotals(d.h8.USER),
    num_results_text_channels: O.Z.getResultTotals(d.h8.TEXT_CHANNEL),
    num_results_voice_channels: O.Z.getResultTotals(d.h8.VOICE_CHANNEL),
    num_results_guilds: O.Z.getResultTotals(d.h8.GUILD),
    num_results_group_dms: O.Z.getResultTotals(d.h8.GROUP_DM)
  };
  if (null != l) {
    let e = b.Z.getChannel(l);
    h.current_channel_type = null != e ? e.type : null
  }
  if (null != t) {
    let {
      type: e,
      score: i,
      record: r
    } = t;
    switch (h.selected_type = g(t), h.selected_score = i, h.selected_index = n.indexOf(t), e) {
      case d.h8.GUILD:
        h.selected_guild_id = r.id;
        break;
      case d.h8.TEXT_CHANNEL:
      case d.h8.VOICE_CHANNEL:
        r instanceof f.Sf && (h.selected_guild_id = null != r.guild_id ? r.guild_id : null), h.selected_channel_id = r.id;
        break;
      case d.h8.GROUP_DM:
        h.selected_channel_id = r.id;
        break;
      case d.h8.USER:
        h.selected_user_id = r.id
    }
  }
  E.default.track(e, h)
}

function R() {
  Chunk570140.Z.dispatch({
    type: "QUICKSWITCHER_HIDE"
  })
}

function D() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "KEYBIND",
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "";
  ! function(e) {
    let t;
    if (O.Z.isOpen()) return;
    let n = j.Z.getGuildId(),
      i = _.Z.getChannelId(n);
    if (null != i) {
      let e = b.Z.getChannel(i);
      t = null != e ? e.type : null
    }
    E.default.track(v.rMx.QUICKSWITCHER_OPENED, {
      source: e,
      current_guild_id: n,
      current_channel_id: i,
      current_channel_type: t
    })
  }(module), Chunk570140.Z.dispatch(T({
    type: "QUICKSWITCHER_SHOW"
  }, A(exports)))
}

function Z() {
  P(Chunk981631.rMx.QUICKSWITCHER_CLOSED), R()
}

function w(e) {
  r.Z.dispatch(T({
    type: "QUICKSWITCHER_SEARCH"
  }, A(e)))
}

function k(e) {
  r.Z.dispatch({
    type: "QUICKSWITCHER_SELECT",
    selectedIndex: e
  })
}

function L(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] && arguments[1];
  R(), (0, i.pTH)(), P(v.rMx.QUICKSWITCHER_RESULT_SELECTED, e);
  let {
    type: f,
    record: _
  } = e, j = {
    page: v.ZY5.QUICK_SWITCHER
  };
  switch (f) {
    case d.h8.GUILD:
      (0, g.X)(_.id, {
        navigationReplace: true
      });
      break;
    case d.h8.TEXT_CHANNEL:
      null != (t = b.Z.getChannel(_.id)) && (0, p.Kh)(t.id, {
        state: {
          analyticsSource: j
        },
        navigationReplace: true
      });
      break;
    case d.h8.VOICE_CHANNEL:
      null != (t = b.Z.getChannel(_.id)) && (n ? a.Z.updateChatOpen(_.id, true) : o.default.selectVoiceChannel(_.id), (0, p.Kh)(t.id, {
        state: {
          analyticsSource: j
        },
        navigationReplace: true
      }));
      break;
    case d.h8.USER:
      s.Z.openPrivateChannel({
        recipientIds: [_.id],
        location: "Quickswitcher"
      }), l.Z.channelListScrollTo(v.ME, b.Z.getDMFromUserId(_.id));
      break;
    case d.h8.GROUP_DM:
      (0, p.Kh)(_.id, {
        navigationReplace: true
      }), l.Z.channelListScrollTo(v.ME, _.id);
      break;
    case d.h8.APPLICATION:
      let E = x.Z.getActiveLibraryApplication(_.id);
      I(_.id, E, {
        analyticsParams: {
          source: v.Sbl.QUICK_SWITCHER,
          location: v.Sbl.QUICK_SWITCHER
        }
      });
      break;
    case d.h8.LINK:
      (0, m.Z)(_.path, {
        navigationReplace: true
      });
      break;
    case d.h8.IN_APP_NAVIGATION:
      if (e.record.type === u.Ky.SETTINGS) {
        let t = (0, h.default)(e.record.path);
        null != t && c.Z.open(t.section, t.subsection, {
          openWithoutBackstack: false,
          impressionSource: t.source
        })
      } else(0, m.Z)(_.path, {
        navigationReplace: true
      })
  }
  r.Z.dispatch({
    type: "QUICKSWITCHER_SWITCH_TO",
    result: e
  })
}
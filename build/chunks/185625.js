/** Chunk was on web.js **/
/** chunk id: 185625, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B0: () => O,
  Jj: () => P,
  Lo: () => y,
  M4: () => Z,
  Nt: () => b,
  RV: () => N,
  VP: () => G,
  X: () => U,
  ZD: () => S,
  fw: () => C,
  hs: () => R,
  i_: () => F,
  k8: () => k,
  ox: () => v,
  yL: () => A
}), require("./415506.js"), require("./467055.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk741086 = require("./741086.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk367907 = require("./367907.js"),
  Chunk432877 = require("./432877.js"),
  Chunk681678 = require("./681678.js"),
  Chunk82554 = require("./82554.js"),
  Chunk981631 = require("./981631.js"),
  Chunk484710 = require("./484710.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function b(e, t) {
  var n;
  let r = D(e),
    i = await s.tn.get({
      url: p.ANM.GET_REPORT_MENU(r),
      query: (null == t ? true : t.variant) != null ? {
        variant: t.variant
      } : true,
      rejectWithError: false
    });
  return null != (n = i.body) ? n : JSON.parse(i.text)
}
async function y(e, t) {
  var n;
  let r = x(e),
    i = await s.tn.get({
      url: p.ANM.GET_REPORT_MENU(r),
      query: (null == t ? true : t.variant) != null ? {
        variant: t.variant
      } : true,
      rejectWithError: false
    });
  return null != (n = i.body) ? n : JSON.parse(i.text)
}
async function O(e, t) {
  var n;
  let r = w(e),
    i = await s.tn.get({
      url: p.ANM.GET_UNAUTHENTICATED_REPORT_MENU(r),
      query: (null == t ? true : t.variant) != null ? {
        variant: t.variant
      } : true,
      rejectWithError: false
    });
  return null != (n = i.body) ? n : JSON.parse(i.text)
}
async function v(e, t) {
  let n = D(e),
    r = await b(e, t);
  await s.tn.post({
    url: p.ANM.SUBMIT_REPORT_MENU(n),
    body: M(r, e, [{
      nodeRef: r.root_node_id,
      destination: ["", r.success_node_id]
    }]),
    rejectWithError: false
  })
}

function S(e, t, n) {
  return u.ZP.get("iar_skip_api_report_submit") ? Promise.resolve() : o.s.REPORT_TO_MOD.has(t.name) ? T(e, t, n) : I(e, t, n)
}

function I(e, t, n) {
  return s.tn.post({
    url: p.ANM.SUBMIT_REPORT_MENU(D(t)),
    body: M(e, t, n),
    rejectWithError: false
  })
}

function T(e, t, n) {
  let r = j(e, t, n);
  return s.tn.post({
    url: L(t),
    body: r,
    rejectWithError: false
  }).then(e => (d.Z.showSuccessToast(_.wQ.REPORT_TO_MOD_SUCCESS), (null == r ? true : r.channel_id) != null && (null == r ? true : r.message_id) != null && l.Z.dispatch({
    type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS",
    channelId: r.channel_id,
    messageId: r.message_id
  }), e))
}

function C(e, t, n, r) {
  if (u.ZP.get("iar_skip_api_report_submit")) return Promise.resolve();
  let i = w(t);
  return s.tn.post({
    url: p.ANM.SUBMIT_UNAUTHENTICATED_REPORT_MENU(i),
    body: M(e, t, n, r),
    rejectWithError: false
  })
}

function A(e, t) {
  return s.tn.post({
    url: p.ANM.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
    body: {
      name: e,
      email: t
    },
    rejectWithError: false
  })
}
async function N(e, t, n) {
  return (await s.tn.post({
    url: p.ANM.VERIFY_UNAUTHENTICATED_REPORT(e),
    body: {
      name: e,
      email: t,
      code: n
    },
    rejectWithError: false
  })).body
}
async function P() {
  return await Chunk544891.tn.get({
    url: Chunk981631.ANM.DSA_CAPABILITIES,
    rejectWithError: false
  })
}
async function R(e) {
  return (await s.tn.post({
    url: p.ANM.SUBMIT_REPORT_SECOND_LOOK,
    body: {
      token: e
    },
    rejectWithError: false
  })).body
}

function w(e) {
  let t = e.name;
  return a()(Object.values(f.BM).includes(t), "Invalid report type ".concat(e.name)), t
}

function D(e) {
  let t = e.name;
  return a()(Object.values(f.b).includes(t), "Invalid report type ".concat(e.name)), t
}

function x(e) {
  let t = e.name;
  return a()(Object.values(f.xw).includes(t), "Invalid report type ".concat(e.name)), t
}

function L(e) {
  if (a()(o.s.REPORT_TO_MOD.has(e.name), "Invalid report type ".concat(e.name)), e.name === f.xw.MESSAGE) return p.ANM.SUBMIT_MODERATOR_MESSAGE_REPORT(e.record.channel_id, e.record.id);
  throw Error("Invalid report type ".concat(e.name))
}
let j = (e, t, n) => {
    let {
      version: r,
      variant: i,
      language: a
    } = e, o = {
      channel_id: true,
      message_id: true,
      guild_id: true
    }, s = {
      version: r,
      variant: i,
      language: null != a ? a : "en",
      breadcrumbs: n.map(e => e.nodeRef),
      elements: n.reduce((e, t) => {
        let {
          multiSelect: n,
          textInput: r
        } = t;
        return h({}, e, null != n && {
          [n.name]: Object.keys(n.state)
        }, Object.fromEntries(Object.entries(null != r ? r : {}).map(e => {
          let [t, {
            value: n
          }] = e;
          return [t, n]
        })))
      }, {})
    };
    if (t.name === f.xw.MESSAGE) {
      let {
        channel_id: e,
        id: n
      } = t.record;
      return E(h({}, s, o), {
        name: t.name,
        channel_id: e,
        message_id: n
      })
    }
    return null
  },
  M = (e, t, n, r) => {
    let {
      version: i,
      variant: a,
      language: o
    } = e, s = {
      channel_id: true,
      message_id: true,
      stage_instance_id: true,
      guild_id: true,
      guild_scheduled_event_id: true,
      user_id: true,
      email_token: true,
      application_id: true,
      entrypoint: true,
      widget_id: true
    }, l = {
      version: i,
      variant: a,
      language: null != o ? o : "en",
      breadcrumbs: n.map(e => e.nodeRef),
      elements: n.reduce((e, t) => {
        let {
          multiSelect: n,
          textInput: r
        } = t;
        return h({}, e, null != n && {
          [n.name]: Object.keys(n.state)
        }, Object.fromEntries(Object.entries(null != r ? r : {}).map(e => {
          let [t, {
            value: n
          }] = e;
          return [t, n]
        })))
      }, {})
    };
    if (t.name === f.b.MESSAGE || t.name === f.b.FIRST_DM) {
      let {
        channel_id: e,
        id: n
      } = t.record;
      return E(h({}, l, s), {
        name: t.name,
        channel_id: e,
        message_id: n
      })
    }
    if (t.name === f.b.GUILD || t.name === f.b.GUILD_DISCOVERY) {
      let {
        id: e
      } = t.record;
      return E(h({}, l, s), {
        name: t.name,
        guild_id: e
      })
    }
    if (t.name === f.b.GUILD_DIRECTORY_ENTRY) {
      let {
        guildId: e,
        channelId: n
      } = t.record;
      return E(h({}, l, s), {
        name: t.name,
        channel_id: n,
        guild_id: e
      })
    }
    if (t.name === f.b.STAGE_CHANNEL) {
      let {
        id: e,
        guild_id: n,
        channel_id: r
      } = t.record;
      return E(h({}, l, s), {
        name: t.name,
        channel_id: r,
        guild_id: n,
        stage_instance_id: e
      })
    }
    if (t.name === f.b.GUILD_SCHEDULED_EVENT) {
      let {
        id: e,
        guild_id: n
      } = t.record;
      return E(h({}, l, s), {
        name: t.name,
        guild_id: n,
        guild_scheduled_event_id: e
      })
    } else if (t.name === f.b.USER) return E(h({}, l, s), {
      name: t.name,
      user_id: t.record.id,
      guild_id: t.contextualGuildId
    });
    else if (t.name === f.BM.USER) return E(h({}, l, s), {
      name: t.name,
      user_id: t.record.id,
      guild_id: t.contextualGuildId,
      email_token: r
    });
    else if (t.name === f.BM.MESSAGE) return E(h({}, l, s), {
      name: t.name,
      message_id: t.record.id,
      email_token: r
    });
    else if (t.name === f.BM.GUILD) return E(h({}, l, s), {
      name: t.name,
      guild_id: t.record.id,
      email_token: r
    });
    else if (t.name === f.b.APPLICATION) return E(h({}, l, s), {
      name: t.name,
      application_id: t.record.id,
      guild_id: t.contextualGuildId,
      channel_id: t.contextualChannelId,
      entrypoint: t.entrypoint
    });
    else if (t.name === f.b.WIDGET) return E(h({}, l, s), {
      name: t.name,
      user_id: t.user_id,
      widget_id: t.widget_id
    });
    return null
  };

function k(e, t, n) {
  c.ZP.trackWithMetadata(p.rMx.IAR_MODAL_CLOSE, {
    report_type: e.name,
    report_id: n,
    navigation_history: t,
    message_id: e.name === f.b.MESSAGE || e.name === f.b.FIRST_DM ? e.record.id : true,
    stage_instance_id: e.name === f.b.STAGE_CHANNEL ? e.record.id : true,
    guild_scheduled_event_id: e.name === f.b.GUILD_SCHEDULED_EVENT ? e.record.id : true,
    guild_id: e.name === f.b.GUILD || e.name === f.b.GUILD_DISCOVERY ? e.record.id : e.name === f.b.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === f.b.GUILD_SCHEDULED_EVENT ? e.record.guild_id : true,
    channel_id: e.name === f.b.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === f.b.GUILD_DIRECTORY_ENTRY ? e.record.channelId : true,
    application_id: e.name === f.b.APPLICATION ? e.record.id : true
  })
}

function U(e, t) {
  l.Z.dispatch({
    type: "IN_APP_REPORTS_SHOW_FEEDBACK",
    reportId: t,
    reportType: e.name
  })
}

function G(e, t) {
  var n;
  let {
    freeTextElements: r,
    dropdownElements: i,
    multiSelectElement: a,
    contentUrlInputElement: o
  } = e, {
    textInput: s,
    multiSelect: l
  } = t;
  return r.some(e => {
    var t;
    returntrue === e.should_submit_data && ((null == s ? true : s[e.name]) == null || (null == s ? true : s[e.name].value) === "" || !(null == s || null == (t = s[e.name]) ? true : t.isValid))
  }) || i.some(e => true === e.should_submit_data && ((null == s ? true : s[e.name]) == null || (null == s ? true : s[e.name].value) === "")) || (null == a ? true : a.should_submit_data) === true && (null == l || 0 === Object.keys(l).length) || (null == o ? true : o.should_submit_data) === true && ((null == s ? true : s[o.name]) == null || (null == s ? true : s[o.name].value) === "" || !(null == s || null == (n = s[o.name]) ? true : n.isValid))
}
var Z = function(e) {
  return e.SETTINGS_UPSELLS_VIEWED = "SETTINGS_UPSELLS_VIEWED", e.SETTINGS_UPSELLS_APPLY_CLICKED = "SETTINGS_UPSELLS_APPLY_CLICKED", e.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED", e
}({});

function F(e, t, n) {
  return r.useCallback(r => i => {
    c.ZP.trackWithMetadata(p.rMx.IAR_SETTINGS_UPSELLS_ACTION, {
      report_id: n,
      report_type: e.name,
      report_subtype: t,
      settings_upsells_type: r,
      action: i
    })
  }, [n, e, t])
}
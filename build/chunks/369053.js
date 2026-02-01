/** Chunk was on web.js **/
/** chunk id: 369053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G_: () => N,
  Hl: () => k,
  IM: () => O,
  Mw: () => F,
  OY: () => w,
  Op: () => b,
  TP: () => C,
  Zv: () => U,
  bo: () => T,
  gP: () => v,
  ks: () => G,
  lJ: () => V,
  m9: () => y,
  q: () => R,
  zC: () => A
}), require("./65821.js"), require("./446912.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk2110 = require("./2110.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk58149 = require("./58149.js"),
  Chunk865116 = require("./865116.js"),
  Chunk662502 = require("./662502.js"),
  Chunk17372 = require("./17372.js"),
  Chunk652215 = require("./652215.js"),
  Chunk835002 = require("./835002.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
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
async function y(e, t) {
  var n;
  let r = D(e),
    i = await s.Bo.get({
      url: p.Rsh.GET_REPORT_MENU(r),
      query: (null == t ? true : t.variant) != null ? {
        variant: t.variant
      } : true,
      rejectWithError: false
    });
  return null != (n = i.body) ? n : JSON.parse(i.text)
}
async function b(e, t) {
  var n;
  let r = L(e),
    i = await s.Bo.get({
      url: p.Rsh.GET_REPORT_MENU(r),
      query: (null == t ? true : t.variant) != null ? {
        variant: t.variant
      } : true,
      rejectWithError: false
    });
  return null != (n = i.body) ? n : JSON.parse(i.text)
}
async function O(e, t) {
  var n;
  let r = P(e),
    i = await s.Bo.get({
      url: p.Rsh.GET_UNAUTHENTICATED_REPORT_MENU(r),
      query: (null == t ? true : t.variant) != null ? {
        variant: t.variant
      } : true,
      rejectWithError: false
    });
  return null != (n = i.body) ? n : JSON.parse(i.text)
}
async function v(e, t) {
  let n = D(e),
    r = await y(e, t);
  await s.Bo.post({
    url: p.Rsh.SUBMIT_REPORT_MENU(n),
    body: j(r, e, [{
      nodeRef: r.root_node_id,
      destination: ["", r.success_node_id]
    }]),
    rejectWithError: false
  })
}

function A(e, t, n) {
  return u.Ay.get("iar_skip_api_report_submit") ? Promise.resolve() : o.x.REPORT_TO_MOD.has(t.name) ? S(e, t, n) : I(e, t, n)
}

function I(e, t, n) {
  return s.Bo.post({
    url: p.Rsh.SUBMIT_REPORT_MENU(D(t)),
    body: j(e, t, n),
    rejectWithError: false
  })
}

function S(e, t, n) {
  let r = M(e, t, n);
  return s.Bo.post({
    url: x(t),
    body: r,
    rejectWithError: false
  }).then(e => (d.A.showSuccessToast(_.OB.REPORT_TO_MOD_SUCCESS), (null == r ? true : r.channel_id) != null && (null == r ? true : r.message_id) != null && l.h.dispatch({
    type: "REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS",
    channelId: r.channel_id,
    messageId: r.message_id
  }), e))
}

function T(e, t, n, r) {
  if (u.Ay.get("iar_skip_api_report_submit")) return Promise.resolve();
  let i = P(t);
  return s.Bo.post({
    url: p.Rsh.SUBMIT_UNAUTHENTICATED_REPORT_MENU(i),
    body: j(e, t, n, r),
    rejectWithError: false
  })
}

function C(e, t) {
  return s.Bo.post({
    url: p.Rsh.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
    body: {
      name: e,
      email: t
    },
    rejectWithError: false
  })
}
async function N(e, t, n) {
  return (await s.Bo.post({
    url: p.Rsh.VERIFY_UNAUTHENTICATED_REPORT(e),
    body: {
      name: e,
      email: t,
      code: n
    },
    rejectWithError: false
  })).body
}
async function w() {
  return await s.Bo.get({
    url: p.Rsh.DSA_CAPABILITIES,
    rejectWithError: false
  })
}
async function R(e) {
  return (await s.Bo.post({
    url: p.Rsh.SUBMIT_REPORT_SECOND_LOOK,
    body: {
      token: e
    },
    rejectWithError: false
  })).body
}

function P(e) {
  let t = e.name;
  return a()(Object.values(f.tY).includes(t), "Invalid report type ".concat(e.name)), t
}

function D(e) {
  let t = e.name;
  return a()(Object.values(f.t0).includes(t), "Invalid report type ".concat(e.name)), t
}

function L(e) {
  let t = e.name;
  return a()(Object.values(f.Yw).includes(t), "Invalid report type ".concat(e.name)), t
}

function x(e) {
  if (a()(o.x.REPORT_TO_MOD.has(e.name), "Invalid report type ".concat(e.name)), e.name === f.Yw.MESSAGE) return p.Rsh.SUBMIT_MODERATOR_MESSAGE_REPORT(e.record.channel_id, e.record.id);
  throw Error("Invalid report type ".concat(e.name))
}
let M = (e, t, n) => {
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
        return m({}, e, null != n && {
          [n.name]: Object.keys(n.state)
        }, Object.fromEntries(Object.entries(null != r ? r : {}).map(e => {
          let [t, {
            value: n
          }] = e;
          return [t, n]
        })))
      }, {})
    };
    if (t.name === f.Yw.MESSAGE) {
      let {
        channel_id: e,
        id: n
      } = t.record;
      return E(m({}, s, o), {
        name: t.name,
        channel_id: e,
        message_id: n
      })
    }
    return null
  },
  j = (e, t, n, r) => {
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
        return m({}, e, null != n && {
          [n.name]: Object.keys(n.state)
        }, Object.fromEntries(Object.entries(null != r ? r : {}).map(e => {
          let [t, {
            value: n
          }] = e;
          return [t, n]
        })))
      }, {})
    };
    if (t.name === f.t0.MESSAGE || t.name === f.t0.FIRST_DM) {
      let {
        channel_id: e,
        id: n
      } = t.record;
      return E(m({}, l, s), {
        name: t.name,
        channel_id: e,
        message_id: n
      })
    }
    if (t.name === f.t0.GUILD || t.name === f.t0.GUILD_DISCOVERY) {
      let {
        id: e
      } = t.record;
      return E(m({}, l, s), {
        name: t.name,
        guild_id: e
      })
    }
    if (t.name === f.t0.GUILD_DIRECTORY_ENTRY) {
      let {
        guildId: e,
        channelId: n
      } = t.record;
      return E(m({}, l, s), {
        name: t.name,
        channel_id: n,
        guild_id: e
      })
    }
    if (t.name === f.t0.STAGE_CHANNEL) {
      let {
        id: e,
        guild_id: n,
        channel_id: r
      } = t.record;
      return E(m({}, l, s), {
        name: t.name,
        channel_id: r,
        guild_id: n,
        stage_instance_id: e
      })
    }
    if (t.name === f.t0.GUILD_SCHEDULED_EVENT) {
      let {
        id: e,
        guild_id: n
      } = t.record;
      return E(m({}, l, s), {
        name: t.name,
        guild_id: n,
        guild_scheduled_event_id: e
      })
    } else if (t.name === f.t0.USER) return E(m({}, l, s), {
      name: t.name,
      user_id: t.record.id,
      guild_id: t.contextualGuildId
    });
    else if (t.name === f.tY.USER) return E(m({}, l, s), {
      name: t.name,
      user_id: t.record.id,
      guild_id: t.contextualGuildId,
      email_token: r
    });
    else if (t.name === f.tY.MESSAGE) return E(m({}, l, s), {
      name: t.name,
      message_id: t.record.id,
      email_token: r
    });
    else if (t.name === f.tY.GUILD) return E(m({}, l, s), {
      name: t.name,
      guild_id: t.record.id,
      email_token: r
    });
    else if (t.name === f.t0.APPLICATION) return E(m({}, l, s), {
      name: t.name,
      application_id: t.record.id,
      guild_id: t.contextualGuildId,
      channel_id: t.contextualChannelId,
      entrypoint: t.entrypoint
    });
    else if (t.name === f.t0.WIDGET) return E(m({}, l, s), {
      name: t.name,
      user_id: t.user_id,
      widget_id: t.widget_id
    });
    return null
  };

function k(e, t, n) {
  c.Ay.trackWithMetadata(p.HAw.IAR_MODAL_CLOSE, {
    report_type: e.name,
    report_id: n,
    navigation_history: t,
    message_id: e.name === f.t0.MESSAGE || e.name === f.t0.FIRST_DM ? e.record.id : true,
    stage_instance_id: e.name === f.t0.STAGE_CHANNEL ? e.record.id : true,
    guild_scheduled_event_id: e.name === f.t0.GUILD_SCHEDULED_EVENT ? e.record.id : true,
    guild_id: e.name === f.t0.GUILD || e.name === f.t0.GUILD_DISCOVERY ? e.record.id : e.name === f.t0.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === f.t0.GUILD_SCHEDULED_EVENT ? e.record.guild_id : true,
    channel_id: e.name === f.t0.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === f.t0.GUILD_DIRECTORY_ENTRY ? e.record.channelId : true,
    application_id: e.name === f.t0.APPLICATION ? e.record.id : true
  })
}

function U(e, t) {
  l.h.dispatch({
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
var V = function(e) {
  return e.SETTINGS_UPSELLS_VIEWED = "SETTINGS_UPSELLS_VIEWED", e.SETTINGS_UPSELLS_APPLY_CLICKED = "SETTINGS_UPSELLS_APPLY_CLICKED", e.SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED = "SETTINGS_UPSELLS_GO_TO_SETTINGS_LINK_CLICKED", e
}({});

function F(e, t, n) {
  return r.useCallback(r => i => {
    c.Ay.trackWithMetadata(p.HAw.IAR_SETTINGS_UPSELLS_ACTION, {
      report_id: n,
      report_type: e.name,
      report_subtype: t,
      settings_upsells_type: r,
      action: i
    })
  }, [n, e, t])
}
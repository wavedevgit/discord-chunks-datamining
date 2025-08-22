/** Chunk was on web.js **/
/** chunk id: 293979, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X9: () => R,
  b8: () => P,
  hz: () => C
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk211266 = require("./211266.js"),
  Chunk81897 = require("./81897.js"),
  Chunk155268 = require("./155268.js"),
  Chunk603721 = require("./603721.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk914010 = require("./914010.js"),
  Chunk768581 = require("./768581.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk471073 = require("./471073.js"),
  Chunk892902 = require("./892902.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let A = e => {
  let t = true;
  return e.forEach(e => {
    e() || (t = false)
  }), t
};

function C(e) {
  var t;
  let n = (0, O.CJ)(),
    r = null == n || null == (t = n.modal) ? true : t.components[0];
  return (null == r ? true : r.type) === c.re.ACTION_ROW && r.components[0].id === e
}

function N(e) {
  return r.useMemo(() => {
    let t = g.Z.getGuildId(),
      n = null != t && null != e.bot ? m.ZP.getMember(t, e.bot.id) : true,
      r = E.ZP.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: true,
        bot: null != n ? e.bot : true
      });
    return {
      applicationIconURL: r,
      applicationName: null != n && null != e.bot ? e.bot.username : e.name,
      applicationBaseUrl: (0, f.ZP)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function R(e, t) {
  let {
    application: n,
    customId: i,
    components: a
  } = e, s = (0, d.Z)(), [c, f] = r.useState(null), [_, p] = r.useState(null), [h, m] = r.useState({}), g = (0, o.e7)([v.Z], () => v.Z.getModalState(_), [_]), E = (0, u.Z)(() => new Set), b = r.useCallback(() => {
    f(null), p(null), A(E) && p(D(e, s))
  }, [s, e, E]);
  r.useEffect(() => {
    g === v.i.SUCCEEDED && (l.Z.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      customId: i
    }), t()), g === v.i.ERRORED && f(S.intl.string(S.t.uJgdEh))
  }, [_, g, t, i]);
  let {
    applicationIconURL: y,
    applicationName: O
  } = N(n);
  return {
    components: a,
    applicationIconURL: y,
    applicationName: O,
    submissionState: g,
    error: c,
    validators: E,
    validationErrors: h,
    setValidationErrors: m,
    onSubmit: b
  }
}

function P(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: r,
    applicationName: i,
    applicationBaseUrl: o
  } = N(t), s = h.Z.getChannel(e.channelId);
  a()(null != s, "channel should not be null");
  let l = {
    instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    custom_id: n,
    channel_id: e.channelId
  };
  null != s.guild_id && "" !== s.guild_id && (l.guild_id = s.guild_id);
  let c = new URL(null != o ? o : "");
  return c.pathname = e.iframePath, {
    applicationIconURL: r,
    applicationName: i,
    applicationBaseUrl: o,
    queryParams: l,
    iframeUrl: c.toString()
  }
}
let w = (e, t) => t.map(t => {
  switch (t.type) {
    case c.re.ACTION_ROW:
      return {
        type: t.type, components: w(e, t.components)
      };
    case c.re.TEXT_INPUT: {
      let n = I.Z.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case c.re.STRING_SELECT: {
      let n = I.Z.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.values : null
      }
    }
    case c.re.USER_SELECT:
    case c.re.ROLE_SELECT:
    case c.re.MENTIONABLE_SELECT:
    case c.re.CHANNEL_SELECT: {
      let n = I.Z.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.selectedOptions.map(e => e.value) : null
      }
    }
    case c.re.TEXT_DISPLAY:
      return {
        type: t.type
      };
    case c.re.LABEL:
      return {
        type: t.type, component: w(e, [t.component])[0]
      };
    default:
      a()(false, "unreachable")
  }
});

function D(e, t) {
  let n = y.default.fromTimestamp(Date.now()),
    r = e.channelId,
    i = h.Z.getChannel(r);
  a()(null != i, "expected channel");
  let o = w(e.customId, e.components);
  (0, _.kz)(n, {
    data: {
      interactionType: c.B8.MODAL_SUBMIT,
      applicationId: e.application.id
    }
  });
  let l = () => {
    null != t && t.aborted || s.tn.post({
      url: T.ANM.INTERACTIONS,
      body: {
        type: c.B8.MODAL_SUBMIT,
        application_id: e.application.id,
        channel_id: i.id,
        guild_id: i.guild_id,
        data: {
          id: e.id,
          custom_id: e.customId,
          components: o
        },
        session_id: p.default.getSessionId(),
        nonce: n
      },
      signal: t,
      rejectWithError: false
    }).catch(e => {
      429 === e.status ? setTimeout(l, e.body.retry_after * b.Z.Millis.SECOND) : (0, _.yr)(n)
    })
  };
  return l(), n
}
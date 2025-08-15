/** Chunk was on 8739 **/
/** chunk id: 293979, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X9: () => A,
  b8: () => L,
  hz: () => b
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
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

function b(e) {
  var t;
  let n = (0, _.CJ)(),
    l = null == n || null == (t = n.modal) ? true : t.components[0];
  return (null == l ? true : l.type) === c.re.ACTION_ROW && l.components[0].id === e
}

function y(e) {
  return l.useMemo(() => {
    let t = m.Z.getGuildId(),
      n = null != t && null != e.bot ? f.ZP.getMember(t, e.bot.id) : true,
      l = S.ZP.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: true,
        bot: null != n ? e.bot : true
      });
    return {
      applicationIconURL: l,
      applicationName: null != n && null != e.bot ? e.bot.username : e.name,
      applicationBaseUrl: (0, E.ZP)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function A(e, t) {
  let {
    application: n,
    customId: i,
    components: E
  } = e, f = (0, s.Z)(), [m, S] = l.useState(null), [_, h] = l.useState(null), [b, A] = l.useState({}), L = (0, u.e7)([O.Z], () => O.Z.getModalState(_), [_]), R = (0, d.Z)(() => new Set), M = l.useCallback(() => {
    let t;
    S(null), h(null), t = true, R.forEach(e => {
      e() || (t = false)
    }), t && h(function(e, t) {
      let n = C.default.fromTimestamp(Date.now()),
        l = e.channelId,
        i = T.Z.getChannel(l);
      r()(null != i, "expected channel");
      let u = Z(e.customId, e.components);
      (0, p.kz)(n, {
        data: {
          interactionType: c.B8.MODAL_SUBMIT,
          applicationId: e.application.id
        }
      });
      let o = () => {
        null != t && t.aborted || a.tn.post({
          url: N.ANM.INTERACTIONS,
          body: {
            type: c.B8.MODAL_SUBMIT,
            application_id: e.application.id,
            channel_id: i.id,
            guild_id: i.guild_id,
            data: {
              id: e.id,
              custom_id: e.customId,
              components: u
            },
            session_id: I.default.getSessionId(),
            nonce: n
          },
          signal: t,
          rejectWithError: false
        }).catch(e => {
          429 === e.status ? setTimeout(o, e.body.retry_after * g.Z.Millis.SECOND) : (0, p.yr)(n)
        })
      };
      return o(), n
    }(e, f))
  }, [f, e, R]);
  l.useEffect(() => {
    L === O.i.SUCCEEDED && (o.Z.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      customId: i
    }), t()), L === O.i.ERRORED && S(v.intl.string(v.t.uJgdEh))
  }, [_, L, t, i]);
  let {
    applicationIconURL: P,
    applicationName: D
  } = y(n);
  return {
    components: E,
    applicationIconURL: P,
    applicationName: D,
    submissionState: L,
    error: m,
    validators: R,
    validationErrors: b,
    setValidationErrors: A,
    onSubmit: M
  }
}

function L(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: l,
    applicationName: i,
    applicationBaseUrl: u
  } = y(t), a = T.Z.getChannel(e.channelId);
  r()(null != a, "channel should not be null");
  let o = {
    instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    custom_id: n,
    channel_id: e.channelId
  };
  null != a.guild_id && "" !== a.guild_id && (o.guild_id = a.guild_id);
  let c = new URL(null != u ? u : "");
  return c.pathname = e.iframePath, {
    applicationIconURL: l,
    applicationName: i,
    applicationBaseUrl: u,
    queryParams: o,
    iframeUrl: c.toString()
  }
}
let Z = (e, t) => t.map(t => {
  switch (t.type) {
    case c.re.ACTION_ROW:
      return {
        type: t.type, components: Z(e, t.components)
      };
    case c.re.TEXT_INPUT: {
      let n = h.Z.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case c.re.STRING_SELECT: {
      let n = h.Z.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.values : null
      }
    }
    case c.re.LABEL:
      return {
        type: t.type, component: Z(e, [t.component])[0]
      };
    default:
      r()(false, "unreachable")
  }
})
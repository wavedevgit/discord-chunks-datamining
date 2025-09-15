/** Chunk was on web.js **/
/** chunk id: 293979, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X9: () => L,
  b8: () => j,
  hz: () => D
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk166459 = require("./166459.js"),
  Chunk911969 = require("./911969.js"),
  Chunk211266 = require("./211266.js"),
  Chunk81897 = require("./81897.js"),
  Chunk155268 = require("./155268.js"),
  Chunk603721 = require("./603721.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk271383 = require("./271383.js"),
  Chunk914010 = require("./914010.js"),
  Chunk117530 = require("./117530.js"),
  Chunk768581 = require("./768581.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk861990 = require("./861990.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk292419 = require("./292419.js"),
  Chunk471073 = require("./471073.js"),
  Chunk892902 = require("./892902.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let w = e => {
  let t = true;
  return e.forEach(e => {
    e() || (t = false)
  }), t
};

function D(e) {
  var t;
  let n = (0, S.CJ)(),
    r = null == n || null == (t = n.modal) ? true : t.components[0];
  return (null == r ? true : r.type) === u.re.ACTION_ROW && r.components[0].id === e
}

function x(e) {
  return r.useMemo(() => {
    let t = b.Z.getGuildId(),
      n = null != t && null != e.bot ? E.ZP.getMember(t, e.bot.id) : true,
      r = O.ZP.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: true,
        bot: null != n ? e.bot : true
      });
    return {
      applicationIconURL: r,
      applicationName: null != n && null != e.bot ? e.bot.username : e.name,
      applicationBaseUrl: (0, _.ZP)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function L(e, t) {
  let {
    application: n,
    customId: i,
    components: a
  } = e, s = (0, f.Z)(), [u, _] = r.useState(null), [p, h] = r.useState(null), [m, E] = r.useState({}), b = (0, o.e7)([C.Z], () => C.Z.getModalState(p), [p]), y = (0, d.Z)(() => new Set), O = r.useCallback(() => {
    _(null), h(null), w(y) && h(U(e, s))
  }, [s, e, y]);
  r.useEffect(() => {
    b === C.i.SUCCEEDED && (l.Z.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      customId: i
    }), c.Z.removeFiles(e.channelId, k(e.channelId, i).map(e => e.id), g.d.InteractionModal), t()), b === C.i.ERRORED && _(P.intl.string(P.t.uJgdEh))
  }, [p, b, t, i, e.channelId]);
  let {
    applicationIconURL: v,
    applicationName: I
  } = x(n);
  return {
    components: a,
    applicationIconURL: v,
    applicationName: I,
    submissionState: b,
    error: u,
    validators: y,
    validationErrors: m,
    setValidationErrors: E,
    onSubmit: O
  }
}

function j(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: r,
    applicationName: i,
    applicationBaseUrl: o
  } = x(t), s = m.Z.getChannel(e.channelId);
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
let M = (e, t, n) => t.map(t => {
  switch (t.type) {
    case u.re.ACTION_ROW:
      return {
        type: t.type, components: M(e, t.components, n)
      };
    case u.re.TEXT_INPUT: {
      let n = N.Z.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case u.re.FILE_UPLOAD: {
      var r;
      let i = N.Z.getInteractionComponentState(e, t.id),
        a = (null == i ? true : i.type) === t.type ? i.uploadIds : null;
      return {
        type: t.type,
        custom_id: t.customId,
        values: null != (r = null == a ? true : a.map(e => n.uploads.findIndex(t => t.id === e))) ? r : null
      }
    }
    case u.re.STRING_SELECT: {
      let n = N.Z.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.values : null
      }
    }
    case u.re.USER_SELECT:
    case u.re.ROLE_SELECT:
    case u.re.MENTIONABLE_SELECT:
    case u.re.CHANNEL_SELECT: {
      let n = N.Z.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.selectedOptions.map(e => e.value) : null
      }
    }
    case u.re.TEXT_DISPLAY:
      return {
        type: t.type
      };
    case u.re.LABEL:
      return {
        type: t.type, component: M(e, [t.component], n)[0]
      };
    default:
      a()(false, "unreachable")
  }
});

function k(e, t) {
  return y.Z.getUploads(e, g.d.InteractionModal).filter(e => {
    var n;
    return (null == (n = (0, A.yw)(e.id)) ? true : n.containerId) === t
  })
}

function U(e, t) {
  let n = I.default.fromTimestamp(Date.now()),
    r = e.channelId,
    i = m.Z.getChannel(r);
  a()(null != i, "expected channel");
  let o = k(r, e.customId),
    l = o.map((e, t) => (0, T.B)(e, t)),
    c = M(e.customId, e.components, {
      uploads: o
    });
  (0, p.kz)(n, {
    data: {
      interactionType: u.B8.MODAL_SUBMIT,
      applicationId: e.application.id
    }
  });
  let d = () => {
    null != t && t.aborted || s.tn.post({
      url: R.ANM.INTERACTIONS,
      body: {
        type: u.B8.MODAL_SUBMIT,
        application_id: e.application.id,
        channel_id: i.id,
        guild_id: i.guild_id,
        data: {
          id: e.id,
          custom_id: e.customId,
          components: c,
          attachments: l.length > 0 ? l : true
        },
        session_id: h.default.getSessionId(),
        nonce: n
      },
      signal: t,
      rejectWithError: false
    }).catch(e => {
      429 === e.status ? setTimeout(d, e.body.retry_after * v.Z.Millis.SECOND) : (0, p.yr)(n)
    })
  };
  return d(), n
}
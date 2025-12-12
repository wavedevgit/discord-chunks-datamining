/** Chunk was on web.js **/
/** chunk id: 293979, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X9: () => j,
  b8: () => M,
  hz: () => x
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk166459 = require("./166459.js"),
  Chunk911969 = require("./911969.js"),
  Chunk211266 = require("./211266.js"),
  Chunk81897 = require("./81897.js"),
  Chunk237992 = require("./237992.js"),
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
let D = e => {
  let t = true;
  return e.forEach(e => {
    e() || (t = false)
  }), t
};

function x(e) {
  var t;
  let n = (0, C.CJ)(),
    r = null == n || null == (t = n.modal) ? true : t.components[0];
  return (null == r ? true : r.type) === u.re.ACTION_ROW && r.components[0].id === e
}

function L(e) {
  return r.useMemo(() => {
    let t = y.Z.getGuildId(),
      n = null != t && null != e.bot ? b.ZP.getMember(t, e.bot.id) : true,
      r = v.ZP.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: true,
        bot: null != n ? e.bot : true,
        guildMember: n
      });
    return {
      applicationIconURL: r,
      applicationName: (null == n ? true : n.nick) != null ? n.nick : null != e.bot ? e.bot.username : e.name,
      applicationBaseUrl: (0, _.ZP)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function j(e, t) {
  let {
    application: n,
    customId: i,
    components: o
  } = e, s = (0, f.Z)(), [u, p] = r.useState(null), [_, m] = r.useState(null), [h, g] = r.useState({}), b = (0, a.e7)([N.Z], () => N.Z.getModalState(_), [_]), y = (0, d.Z)(() => new Set), O = r.useCallback(async () => {
    if (p(null), m(null), D(y)) {
      let t = I.default.fromTimestamp(Date.now());
      m(t), await G(e, s, t)
    }
  }, [s, e, y]);
  r.useEffect(() => {
    b === N.i.SUCCEEDED && (l.Z.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      customId: i
    }), c.Z.removeFiles(e.channelId, U(e.channelId, i).map(e => e.id), E.d.InteractionModal), t()), b === N.i.ERRORED && p(w.intl.string(w.t.uJgdEu))
  }, [_, b, t, i, e.channelId]);
  let {
    applicationIconURL: v,
    applicationName: S
  } = L(n);
  return {
    components: o,
    applicationIconURL: v,
    applicationName: S,
    submissionState: b,
    error: u,
    validators: y,
    validationErrors: h,
    setValidationErrors: g,
    onSubmit: O
  }
}

function M(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: r,
    applicationName: i,
    applicationBaseUrl: a
  } = L(t), s = g.Z.getChannel(e.channelId);
  o()(null != s, "channel should not be null");
  let l = {
    instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    custom_id: n,
    channel_id: e.channelId
  };
  null != s.guild_id && "" !== s.guild_id && (l.guild_id = s.guild_id);
  let c = new URL(null != a ? a : "");
  return c.pathname = e.iframePath, {
    applicationIconURL: r,
    applicationName: i,
    applicationBaseUrl: a,
    queryParams: l,
    iframeUrl: c.toString()
  }
}
let k = (e, t, n) => t.map(t => {
  switch (t.type) {
    case u.re.ACTION_ROW:
      return {
        type: t.type, components: k(e, t.components, n)
      };
    case u.re.TEXT_INPUT: {
      let n = P.Z.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case u.re.FILE_UPLOAD: {
      var r;
      let i = P.Z.getInteractionComponentState(e, t.id),
        o = (null == i ? true : i.type) === t.type ? i.uploadIds : null;
      return {
        type: t.type,
        custom_id: t.customId,
        values: null != (r = null == o ? true : o.map(e => n.uploads.findIndex(t => t.id === e))) ? r : null
      }
    }
    case u.re.STRING_SELECT: {
      let n = P.Z.getInteractionComponentState(e, t.id);
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
      let n = P.Z.getInteractionComponentState(e, t.id);
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
        type: t.type, component: k(e, [t.component], n)[0]
      };
    default:
      o()(false, "unreachable")
  }
});

function U(e, t) {
  return O.Z.getUploads(e, E.d.InteractionModal).filter(e => {
    var n;
    return (null == (n = (0, A.yw)(e.id)) ? true : n.containerId) === t
  })
}
async function G(e, t, n) {
  let r = e.channelId,
    i = g.Z.getChannel(r);
  o()(null != i, "expected channel");
  let a = U(r, e.customId),
    l = a.length > 0 ? (0, p.Z)(a) : true;
  (0, m.kz)(n, {
    data: {
      interactionType: u.B8.MODAL_SUBMIT,
      applicationId: e.application.id
    },
    preflight: l
  }), await l;
  let c = a.map((e, t) => (0, T.B)(e, t)),
    d = k(e.customId, e.components, {
      uploads: a
    }),
    f = () => {
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
            components: d,
            attachments: c.length > 0 ? c : true
          },
          session_id: h.default.getSessionId(),
          nonce: n
        },
        signal: t,
        rejectWithError: false
      }).catch(e => {
        429 === e.status ? setTimeout(f, e.body.retry_after * S.Z.Millis.SECOND) : (0, m.yr)(n)
      })
    };
  f()
}
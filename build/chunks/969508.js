/** Chunk was on web.js **/
/** chunk id: 969508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FG: () => x,
  aV: () => M,
  uD: () => j
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk608299 = require("./608299.js"),
  Chunk155718 = require("./155718.js"),
  Chunk444927 = require("./444927.js"),
  Chunk163126 = require("./163126.js"),
  Chunk358579 = require("./358579.js"),
  Chunk956518 = require("./956518.js"),
  Chunk706727 = require("./706727.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk696451 = require("./696451.js"),
  Chunk967198 = require("./967198.js"),
  Chunk522602 = require("./522602.js"),
  Chunk486020 = require("./486020.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk292348 = require("./292348.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk814890 = require("./814890.js"),
  Chunk750128 = require("./750128.js"),
  Chunk322980 = require("./322980.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let D = e => {
  let t = true;
  return e.forEach(e => {
    e() || (t = false)
  }), t
};

function x(e) {
  var t;
  let n = (0, T.jc)(),
    r = null == n || null == (t = n.modal) ? true : t.components[0];
  return (null == r ? true : r.type) === u.I5.ACTION_ROW && r.components[0].id === e
}

function L(e) {
  return r.useMemo(() => {
    let t = b.A.getGuildId(),
      n = null != t && null != e.bot ? y.Ay.getMember(t, e.bot.id) : true,
      r = v.Ay.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: true,
        bot: null != n ? e.bot : true,
        guildMember: n
      });
    return {
      applicationIconURL: r,
      applicationName: (null == n ? true : n.nick) != null ? n.nick : null != e.bot ? e.bot.username : e.name,
      applicationBaseUrl: (0, _.Ay)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function j(e, t) {
  let {
    application: n,
    customId: i,
    components: a
  } = e, o = (0, f.A)(), [u, p] = r.useState(null), [_, h] = r.useState(null), [m, g] = r.useState({}), y = (0, s.bG)([N.A], () => N.A.getModalState(_), [_]), b = (0, d.A)(() => new Set), O = r.useCallback(async () => {
    if (p(null), h(null), D(b)) {
      let t = I.default.fromTimestamp(Date.now());
      h(t), await G(e, o, t)
    }
  }, [o, e, b]);
  r.useEffect(() => {
    y === N.Z.SUCCEEDED && (l.h.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      customId: i
    }), c.A.removeFiles(e.channelId, U(e.channelId, i).map(e => e.id), E.C.InteractionModal), t()), y === N.Z.ERRORED && p(P.intl.string(P.t.uJgdEu))
  }, [_, y, t, i, e.channelId]);
  let {
    applicationIconURL: v,
    applicationName: A
  } = L(n);
  return {
    components: a,
    applicationIconURL: v,
    applicationName: A,
    submissionState: y,
    error: u,
    validators: b,
    validationErrors: m,
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
    applicationBaseUrl: s
  } = L(t), o = g.A.getChannel(e.channelId);
  a()(null != o, "channel should not be null");
  let l = {
    instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    custom_id: n,
    channel_id: e.channelId
  };
  null != o.guild_id && "" !== o.guild_id && (l.guild_id = o.guild_id);
  let c = new URL(null != s ? s : "");
  return c.pathname = e.iframePath, {
    applicationIconURL: r,
    applicationName: i,
    applicationBaseUrl: s,
    queryParams: l,
    iframeUrl: c.toString()
  }
}
let k = (e, t, n) => t.map(t => {
  switch (t.type) {
    case u.I5.ACTION_ROW:
      return {
        type: t.type, components: k(e, t.components, n)
      };
    case u.I5.TEXT_INPUT: {
      let n = R.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case u.I5.FILE_UPLOAD: {
      var r;
      let i = R.A.getInteractionComponentState(e, t.id),
        a = (null == i ? true : i.type) === t.type ? i.uploadIds : null;
      return {
        type: t.type,
        custom_id: t.customId,
        values: null != (r = null == a ? true : a.map(e => n.uploads.findIndex(t => t.id === e))) ? r : null
      }
    }
    case u.I5.STRING_SELECT: {
      let n = R.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.values : null
      }
    }
    case u.I5.USER_SELECT:
    case u.I5.ROLE_SELECT:
    case u.I5.MENTIONABLE_SELECT:
    case u.I5.CHANNEL_SELECT: {
      let n = R.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.selectedOptions.map(e => e.value) : null
      }
    }
    case u.I5.TEXT_DISPLAY:
      return {
        type: t.type
      };
    case u.I5.LABEL:
      return {
        type: t.type, component: k(e, [t.component], n)[0]
      };
    case u.I5.RADIO_GROUP: {
      let n = R.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case u.I5.CHECKBOX_GROUP: {
      let n = R.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.values : null
      }
    }
    case u.I5.CHECKBOX: {
      let n = R.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type && n.value
      }
    }
    default:
      a()(false, "unreachable")
  }
});

function U(e, t) {
  return O.A.getUploads(e, E.C.InteractionModal).filter(e => {
    var n;
    return (null == (n = (0, C.j2)(e.id)) ? true : n.containerId) === t
  })
}
async function G(e, t, n) {
  let r = e.channelId,
    i = g.A.getChannel(r);
  a()(null != i, "expected channel");
  let s = U(r, e.customId),
    l = s.length > 0 ? (0, p.A)(s) : true;
  (0, h.tU)(n, {
    data: {
      interactionType: u.G4.MODAL_SUBMIT,
      applicationId: e.application.id
    },
    preflight: l
  }), await l;
  let c = s.map((e, t) => (0, S.OW)(e, t)),
    d = k(e.customId, e.components, {
      uploads: s
    }),
    f = () => {
      null != t && t.aborted || o.Bo.post({
        url: w.Rsh.INTERACTIONS,
        body: {
          type: u.G4.MODAL_SUBMIT,
          application_id: e.application.id,
          channel_id: i.id,
          guild_id: i.guild_id,
          data: {
            id: e.id,
            custom_id: e.customId,
            components: d,
            attachments: c.length > 0 ? c : true
          },
          session_id: m.default.getSessionId(),
          nonce: n
        },
        signal: t,
        rejectWithError: false
      }).catch(e => {
        429 === e.status ? setTimeout(f, e.body.retry_after * A.A.Millis.SECOND) : (0, h.C1)(n)
      })
    };
  f()
}
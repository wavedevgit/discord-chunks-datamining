/** Chunk was on 20941 **/
/** chunk id: 969508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FG: () => T,
  aV: () => D,
  uD: () => L
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

function T(e) {
  var t;
  let n = (0, E.jc)(),
    r = null == n || null == (t = n.modal) ? true : t.components[0];
  return (null == r ? true : r.type) === u.I5.ACTION_ROW && r.components[0].id === e
}

function R(e) {
  return r.useMemo(() => {
    let t = v.A.getGuildId(),
      n = null != t && null != e.bot ? y.Ay.getMember(t, e.bot.id) : true,
      r = C.Ay.getApplicationIconURL({
        id: e.id,
        icon: e.icon,
        botIconFirst: true,
        bot: null != n ? e.bot : true,
        guildMember: n
      });
    return {
      applicationIconURL: r,
      applicationName: (null == n ? true : n.nick) != null ? n.nick : null != e.bot ? e.bot.username : e.name,
      applicationBaseUrl: (0, p.Ay)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function L(e, t) {
  let {
    application: n,
    customId: l,
    components: a
  } = e, s = (0, m.A)(), [u, f] = r.useState(null), [p, h] = r.useState(null), [b, g] = r.useState({}), y = (0, i.bG)([N.A], () => N.A.getModalState(p), [p]), v = (0, d.A)(() => new Set), j = r.useCallback(async () => {
    let t;
    if (f(null), h(null), t = true, v.forEach(e => {
        e() || (t = false)
      }), t) {
      let t = A.default.fromTimestamp(Date.now());
      h(t), await H(e, s, t)
    }
  }, [s, e, v]);
  r.useEffect(() => {
    y === N.Z.SUCCEEDED && (o.h.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      customId: l
    }), c.A.removeFiles(e.channelId, M(e.channelId, l).map(e => e.id), x.C.InteractionModal), t()), y === N.Z.ERRORED && f(w.intl.string(w.t.uJgdEu))
  }, [p, y, t, l, e.channelId]);
  let {
    applicationIconURL: C,
    applicationName: _
  } = R(n);
  return {
    components: a,
    applicationIconURL: C,
    applicationName: _,
    submissionState: y,
    error: u,
    validators: v,
    validationErrors: b,
    setValidationErrors: g,
    onSubmit: j
  }
}

function D(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: r,
    applicationName: l,
    applicationBaseUrl: i
  } = R(t), s = g.A.getChannel(e.channelId);
  a()(null != s, "channel should not be null");
  let o = {
    instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    custom_id: n,
    channel_id: e.channelId
  };
  null != s.guild_id && "" !== s.guild_id && (o.guild_id = s.guild_id);
  let c = new URL(null != i ? i : "");
  return c.pathname = e.iframePath, {
    applicationIconURL: r,
    applicationName: l,
    applicationBaseUrl: i,
    queryParams: o,
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
      let n = I.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case u.I5.FILE_UPLOAD: {
      var r;
      let l = I.A.getInteractionComponentState(e, t.id),
        a = (null == l ? true : l.type) === t.type ? l.uploadIds : null;
      return {
        type: t.type,
        custom_id: t.customId,
        values: null != (r = null == a ? true : a.map(e => n.uploads.findIndex(t => t.id === e))) ? r : null
      }
    }
    case u.I5.STRING_SELECT: {
      let n = I.A.getInteractionComponentState(e, t.id);
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
      let n = I.A.getInteractionComponentState(e, t.id);
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
      let n = I.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case u.I5.CHECKBOX_GROUP: {
      let n = I.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.values : null
      }
    }
    case u.I5.CHECKBOX: {
      let n = I.A.getInteractionComponentState(e, t.id);
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

function M(e, t) {
  return j.A.getUploads(e, x.C.InteractionModal).filter(e => {
    var n;
    return (null == (n = (0, S.j2)(e.id)) ? true : n.containerId) === t
  })
}
async function H(e, t, n) {
  let r = e.channelId,
    l = g.A.getChannel(r);
  a()(null != l, "expected channel");
  let i = M(r, e.customId),
    o = i.length > 0 ? (0, f.A)(i) : true;
  (0, h.tU)(n, {
    data: {
      interactionType: u.G4.MODAL_SUBMIT,
      applicationId: e.application.id
    },
    preflight: o
  }), await o;
  let c = i.map((e, t) => (0, O.OW)(e, t)),
    d = k(e.customId, e.components, {
      uploads: i
    }),
    m = () => {
      null != t && t.aborted || s.Bo.post({
        url: P.Rsh.INTERACTIONS,
        body: {
          type: u.G4.MODAL_SUBMIT,
          application_id: e.application.id,
          channel_id: l.id,
          guild_id: l.guild_id,
          data: {
            id: e.id,
            custom_id: e.customId,
            components: d,
            attachments: c.length > 0 ? c : true
          },
          session_id: b.default.getSessionId(),
          nonce: n
        },
        signal: t,
        rejectWithError: false
      }).catch(e => {
        429 === e.status ? setTimeout(m, e.body.retry_after * _.A.Millis.SECOND) : (0, h.C1)(n)
      })
    };
  m()
}
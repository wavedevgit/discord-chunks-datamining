/** Chunk was on 49559 **/
/** chunk id: 969508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FG: () => R,
  aV: () => L,
  uD: () => D
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

function R(e) {
  var t;
  let n = (0, N.jc)(),
    r = null == n || null == (t = n.modal) ? true : t.components[0];
  return (null == r ? true : r.type) === u.I5.ACTION_ROW && r.components[0].id === e
}

function w(e) {
  return r.useMemo(() => {
    let t = g.A.getGuildId(),
      n = null != t && null != e.bot ? j.Ay.getMember(t, e.bot.id) : true,
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
      applicationBaseUrl: (0, f.Ay)(e.id)
    }
  }, [e.id, e.icon, e.name, e.bot])
}

function D(e, t) {
  let {
    application: n,
    customId: l,
    components: a
  } = e, o = (0, p.A)(), [u, m] = r.useState(null), [f, O] = r.useState(null), [b, y] = r.useState({}), j = (0, i.bG)([P.A], () => P.A.getModalState(f), [f]), g = (0, d.A)(() => new Set), A = r.useCallback(async () => {
    let t;
    if (m(null), O(null), t = true, g.forEach(e => {
        e() || (t = false)
      }), t) {
      let t = C.default.fromTimestamp(Date.now());
      O(t), await M(e, o, t)
    }
  }, [o, e, g]);
  r.useEffect(() => {
    j === P.Z.SUCCEEDED && (s.h.dispatch({
      type: "CLEAR_INTERACTION_MODAL_STATE",
      customId: l
    }), c.A.removeFiles(e.channelId, U(e.channelId, l).map(e => e.id), h.C.InteractionModal), t()), j === P.Z.ERRORED && m(T.intl.string(T.t.uJgdEu))
  }, [f, j, t, l, e.channelId]);
  let {
    applicationIconURL: v,
    applicationName: E
  } = w(n);
  return {
    components: a,
    applicationIconURL: v,
    applicationName: E,
    submissionState: j,
    error: u,
    validators: g,
    validationErrors: b,
    setValidationErrors: y,
    onSubmit: A
  }
}

function L(e) {
  let {
    application: t,
    customId: n
  } = e, {
    applicationIconURL: r,
    applicationName: l,
    applicationBaseUrl: i
  } = w(t), o = y.A.getChannel(e.channelId);
  a()(null != o, "channel should not be null");
  let s = {
    instance_id: "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
    custom_id: n,
    channel_id: e.channelId
  };
  null != o.guild_id && "" !== o.guild_id && (s.guild_id = o.guild_id);
  let c = new URL(null != i ? i : "");
  return c.pathname = e.iframePath, {
    applicationIconURL: r,
    applicationName: l,
    applicationBaseUrl: i,
    queryParams: s,
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
      let n = S.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case u.I5.FILE_UPLOAD: {
      var r;
      let l = S.A.getInteractionComponentState(e, t.id),
        a = (null == l ? true : l.type) === t.type ? l.uploadIds : null;
      return {
        type: t.type,
        custom_id: t.customId,
        values: null != (r = null == a ? true : a.map(e => n.uploads.findIndex(t => t.id === e))) ? r : null
      }
    }
    case u.I5.STRING_SELECT: {
      let n = S.A.getInteractionComponentState(e, t.id);
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
      let n = S.A.getInteractionComponentState(e, t.id);
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
      let n = S.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        value: (null == n ? true : n.type) === t.type ? n.value : null
      }
    }
    case u.I5.CHECKBOX_GROUP: {
      let n = S.A.getInteractionComponentState(e, t.id);
      return {
        type: t.type,
        custom_id: t.customId,
        values: (null == n ? true : n.type) === t.type ? n.values : null
      }
    }
    case u.I5.CHECKBOX: {
      let n = S.A.getInteractionComponentState(e, t.id);
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
  return A.A.getUploads(e, h.C.InteractionModal).filter(e => {
    var n;
    return (null == (n = (0, I.j2)(e.id)) ? true : n.containerId) === t
  })
}
async function M(e, t, n) {
  let r = e.channelId,
    l = y.A.getChannel(r);
  a()(null != l, "expected channel");
  let i = U(r, e.customId),
    s = i.length > 0 ? (0, m.A)(i) : true;
  (0, O.tU)(n, {
    data: {
      interactionType: u.G4.MODAL_SUBMIT,
      applicationId: e.application.id
    },
    preflight: s
  }), await s;
  let c = i.map((e, t) => (0, x.OW)(e, t)),
    d = k(e.customId, e.components, {
      uploads: i
    }),
    p = () => {
      null != t && t.aborted || o.Bo.post({
        url: _.Rsh.INTERACTIONS,
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
        429 === e.status ? setTimeout(p, e.body.retry_after * E.A.Millis.SECOND) : (0, O.C1)(n)
      })
    };
  p()
}
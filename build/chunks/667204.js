/** Chunk was on web.js **/
/** chunk id: 667204, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => F,
  d: () => H
}), require("./781311.js"), require("./539854.js"), require("./415506.js"), require("./388685.js"), require("./361932.js"), require("./187205.js"), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk166459 = require("./166459.js"),
  Chunk232567 = require("./232567.js"),
  Chunk911969 = require("./911969.js"),
  Chunk673750 = require("./673750.js"),
  Chunk237992 = require("./237992.js"),
  Chunk367907 = require("./367907.js"),
  Chunk465343 = require("./465343.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk603721 = require("./603721.js"),
  Chunk188597 = require("./188597.js"),
  Chunk3148 = require("./3148.js"),
  Chunk48854 = require("./48854.js"),
  Chunk346479 = require("./346479.js"),
  Chunk706454 = require("./706454.js"),
  Chunk430824 = require("./430824.js"),
  Chunk117530 = require("./117530.js"),
  Chunk594174 = require("./594174.js"),
  Chunk403182 = require("./403182.js"),
  Chunk823379 = require("./823379.js"),
  Chunk861990 = require("./861990.js"),
  Chunk555573 = require("./555573.js"),
  Chunk160062 = require("./160062.js"),
  Chunk456007 = require("./456007.js"),
  Chunk10718 = require("./10718.js"),
  Chunk998698 = require("./998698.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function F(e) {
  var t, n, r, o, l, u, d, _, m, h, g, E, b, v, I, T, C;
  let {
    command: A,
    optionValues: D,
    context: M,
    commandTargetId: k,
    maxSizeCallback: U,
    commandOrigin: G = x.bB.CHAT,
    sectionName: Z,
    interactionLifecycleOptionsFactory: B = K,
    source: F
  } = e;
  if (null == M.channel) return;
  let H = null != (r = w.Z.getSource(M.channel.id)) ? r : F,
    W = null != (o = w.Z.getCommandOrigin(M.channel.id)) ? o : G;
  null == M.autocomplete && a.Z.dispatch({
    type: "APPLICATION_COMMAND_USED",
    context: M,
    command: A,
    commandOrigin: W
  }), await y.Z.unarchiveThreadIfNecessary(M.channel.id);
  let q = [],
    Q = [],
    X = (0, L.D7)(W);
  if (null != A.options)
    for (let e of A.options) {
      let t;
      if (e.type === c.jw.SUB_COMMAND || e.type === c.jw.SUB_COMMAND_GROUP || !(e.name in D)) continue;
      let n = (null == (l = M.autocomplete) ? true : l.name) === e.name || true;
      if (e.type === c.jw.STRING) {
        let r = null != (d = null == (u = R.li(D, e.name)) ? true : u.trim()) ? d : "";
        if (null != e.choices ? t = (0, P.cT)(e.choices, r) : e.autocomplete && (t = null != M.autocomplete && n ? M.autocomplete.query : (0, P.Wv)(M.channel.id, e.name, r)), null == t && (t = r), "" === t && null != M.autocomplete && !n) continue;
        i()(null != M.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')), q.push({
          type: e.type,
          name: e.name,
          value: t,
          focused: n
        });
        continue
      }
      if (e.type === c.jw.ATTACHMENT) {
        if (null != M.autocomplete) continue;
        let t = S.Z.getUpload(M.channel.id, e.name, X);
        if (null == t) continue;
        let r = Q.length;
        Q.push(t), q.push({
          type: e.type,
          name: e.name,
          value: r,
          focused: n
        });
        continue
      }
      let r = R.OU(D[e.name]);
      if (i()(null != M.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !n) continue;
      let a = null != (_ = r[0]) ? _ : {
        type: "text",
        text: ""
      };
      switch (e.type) {
        case c.jw.CHANNEL:
          if ("channelMention" === a.type) t = a.channelId;
          else if ("text" === a.type)
            if ((0, L.BH)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.K)(a.text, null == (m = M.guild) ? true : m.id, M.channel.id);
              i()((null == e ? true : e.type) === "channelMention", "Failed to resolve ".concat(a.text)), t = e.channelId
            } break;
        case c.jw.ROLE:
          if ("roleMention" === a.type) t = a.roleId;
          else if ("text" === a.type)
            if ((0, L.BH)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.K)(a.text, null == (h = M.guild) ? true : h.id, M.channel.id, {
                allowUsers: false
              });
              i()((null == e ? true : e.type) === "roleMention", "Failed to resolve ".concat(a.text)), t = e.roleId
            }
          else "textMention" === a.type && "@everyone" === a.text && (t = null == (g = M.guild) ? true : g.id);
          break;
        case c.jw.USER:
          if ("userMention" === a.type) t = a.userId;
          else if ("text" === a.type)
            if ((0, L.BH)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.K)(a.text, null == (E = M.guild) ? true : E.id, M.channel.id, {
                allowRoles: false
              });
              i()((null == e ? true : e.type) === "userMention", "Failed to resolve ".concat(a.text)), t = e.userId
            } break;
        case c.jw.MENTIONABLE:
          if ("userMention" === a.type) t = a.userId;
          else if ("roleMention" === a.type) t = a.roleId;
          else if ("textMention" === a.type && "@everyone" === a.text) t = null == (b = M.guild) ? true : b.id;
          else if ("text" === a.type)
            if ((0, L.BH)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.K)(a.text, null == (v = M.guild) ? true : v.id, M.channel.id);
              (null == e ? true : e.type) === "userMention" ? t = e.userId: (null == e ? true : e.type) === "roleMention" ? t = e.roleId : (null == e ? true : e.type) === "textMention" && "@everyone" === e.text ? t = null == (I = M.guild) ? true : I.id : i()(false, "Failed to resolve ".concat(a.text))
            } break;
        case c.jw.BOOLEAN:
          "text" === a.type && (t = (0, P.Kl)(a.text.trim()));
          break;
        case c.jw.INTEGER:
          if ("text" === a.type) {
            let r = a.text.trim();
            null != e.choices ? t = (0, P.l1)(e.choices, r) : e.autocomplete && (t = null != M.autocomplete && n ? M.autocomplete.query : (0, P.xg)(M.channel.id, e.name, r)), null == t && (t = Number(R.AS(O.default.locale, r)))
          }
          break;
        case c.jw.NUMBER:
          if ("text" === a.type) {
            let r = a.text.trim();
            null != e.choices ? t = (0, P.l1)(e.choices, r) : e.autocomplete && (t = null != M.autocomplete && n ? M.autocomplete.query : (0, P.xg)(M.channel.id, e.name, r)), null == t && (t = Number(R.AS(O.default.locale, r)))
          }
          break;
        default:
          throw Error("Unsupported option type: ".concat(e.type))
      }("" !== t || null == M.autocomplete || n) && (i()(null != M.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')), null != t && q.push({
        type: e.type,
        name: e.name,
        value: t,
        focused: n
      }))
    }
  if (null != A.subCommandPath)
    for (let e = A.subCommandPath.length - 1; e >= 0; e -= 1) {
      let {
        name: t,
        type: n
      } = A.subCommandPath[e];
      q = [{
        type: n,
        name: t,
        options: q
      }]
    }
  if (null != A.execute) return f.ZP.trackWithMetadata(j.rMx.APPLICATION_COMMAND_USED, {
    command_id: A.id,
    application_id: A.applicationId,
    command_type: A.type,
    location: z(W),
    source: H
  }), A.execute(q, M);
  if (A.inputType === x.iw.BUILT_IN || A.inputType === x.iw.BUILT_IN_TEXT || A.inputType === x.iw.BUILT_IN_INTEGRATION) return;
  let J = {
      version: A.version,
      id: null != (T = null == (t = A.rootCommand) ? true : t.id) ? T : A.id,
      guild_id: A.guildId,
      name: null != (C = null == (n = A.rootCommand) ? true : n.name) ? C : A.untranslatedName,
      type: A.type,
      options: q,
      application_command: A.rootCommand
    },
    $ = () => {
      V(D)
    };
  null != k && (J.target_id = k), null != M.autocomplete ? (0, N.GV)(A, M, J) : (s.Z.clearAll(M.channel.id, X), Y({
    applicationId: A.applicationId,
    data: J,
    context: M,
    attachments: Q,
    maxSizeCallback: U,
    onMessageSuccess: $,
    analytics_location: z(W),
    sectionName: Z,
    source: H,
    interactionLifecycleOptions: await B(A, M, J)
  }))
}
let V = e => {
    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? new m.dy({
      names: [e.name.replaceAll(":", "")],
      surrogates: "",
      unicodeVersion: 6
    }) : "customEmoji" === e.type ? _.ZP.getCustomEmojiById(e.emojiId) : null).filter(C.lm));
    t.length > 0 && a.Z.dispatch({
      type: "EMOJI_TRACK_USAGE",
      emojiUsed: t
    })
  },
  H = async (e, t, n) => {
    if (e.isCommandType() && null != e.interactionData && null != n.command) {
      let r = {
        channel: t,
        guild: null != t.guild_id ? v.Z.getGuild(t.guild_id) : null
      };
      Y({
        applicationId: n.command.applicationId,
        data: e.interactionData,
        context: r,
        interactionLifecycleOptions: await K(n.command, r, e.interactionData)
      })
    }
  }, Y = e => {
    var t;
    let {
      applicationId: n,
      data: r,
      context: i,
      attachments: a,
      maxSizeCallback: o,
      onMessageSuccess: s,
      analytics_location: l,
      sectionName: u,
      source: d,
      interactionLifecycleOptions: f
    } = e;
    if (null == i.channel) return;
    let {
      channel: p,
      guild: _
    } = i, m = p.id, g = null == _ ? true : _.id, E = {
      applicationId: n,
      channelId: m,
      guildId: g,
      data: r,
      nonce: null != (t = f.nonce) ? t : (0, b.r)(),
      attachments: a,
      maxSizeCallback: o,
      analytics_location: l,
      sectionName: u,
      source: d
    };
    h.kz(E.nonce, {
      messageId: f.messageId,
      onCreate: f.onCreate,
      onSuccess: f.onSuccess,
      onFailure: f.onFailure,
      data: {
        interactionType: c.B8.APPLICATION_COMMAND,
        applicationId: n,
        channelId: m
      }
    }), null != a && a.length > 0 ? Q(a, E.nonce, g, o).then(e => {
      e && W(E, s)
    }) : W(E, s)
  };

function W(e, t) {
  u.ZP.enqueue({
    type: u.$V.COMMAND,
    message: e
  }, n => {
    var r;
    (0, g.Sg)(e.nonce, n, e.applicationId, e.channelId, null != (r = e.guildId) ? r : null), n.ok && null != t && t()
  })
}
async function K(e, t, n) {
  var r;
  if (null == t.channel) return {};
  let i = D.Nk({
    channel: t.channel,
    type: "channel"
  }, n.type, e.applicationId);
  if (null == i) return {};
  let s = null == (r = i.application) ? true : r.bot;
  if (null == s && null != i.botId) try {
    await l.PR(i.botId)
  } catch (e) {}
  let u = B(G({}, (0, E.ZP)({
    channelId: t.channel.id,
    content: "",
    type: n.type === c.yU.CHAT ? j.uaV.CHAT_INPUT_COMMAND : j.uaV.CONTEXT_MENU_COMMAND,
    author: null != s ? s : {
      id: i.id,
      username: i.name,
      discriminator: j.fo$,
      avatar: null,
      bot: true
    }
  })), {
    application: i.application,
    interaction: {
      id: n.id,
      name: n.name,
      name_localized: e.displayName,
      type: c.B8.APPLICATION_COMMAND,
      user: (0, E.pe)(I.default.getCurrentUser())
    },
    interaction_data: n
  });
  return o.Z.receiveMessage(t.channel.id, u, true, {
    applicationId: e.applicationId,
    command: e
  }), {
    get messageId() {
      return u.id
    },
    get nonce() {
      return u.id
    },
    onCreate: e => {
      null != u.interaction && (u.interaction.id = e)
    },
    onSuccess: () => {},
    onFailure: (n, r, i, s) => {
      if (null == t.channel) return;
      null == r && null != n && o.Z.sendClydeError(t.channel.id, n);
      let l = r;
      null == l && null != s && (l = (0, g.A0)(s, e.applicationId)), a.Z.dispatch({
        type: "MESSAGE_SEND_FAILED",
        messageId: u.id,
        channelId: t.channel.id,
        reason: l
      })
    }
  }
}

function z(e) {
  switch (e) {
    case x.bB.APPLICATION_LAUNCHER:
      return x.Vh.APP_LAUNCHER;
    case x.bB.APP_LAUNCHER_APPLICATION_VIEW:
      return x.Vh.APP_LAUNCHER_APPLICATION_VIEW;
    case x.bB.IMAGE_RECS_MENU:
      return x.Vh.IMAGE_RECS_MENU;
    case x.bB.IMAGE_RECS_SUBMENU:
      return x.Vh.IMAGE_RECS_SUBMENU;
    case x.bB.ACTIVITY_INSTANCE_EMBED:
      return x.Vh.ACTIVITY_INSTANCE_EMBED;
    case x.bB.ACTIVITY_BOOKMARK_EMBED:
      return x.Vh.ACTIVITY_BOOKMARK_EMBED;
    case x.bB.MINI_SHELF:
      return x.Vh.ACTIVITIES_MINI_SHELF;
    case x.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
      return x.Vh.VC_TILE_ACTIVITY_SUGGESTION;
    case x.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
      return x.Vh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
    default:
      return x.Vh.SLASH_UI
  }
}
async function q(e, t) {
  let n = 0,
    r = 0;
  for (let a of e) {
    var i;
    let e = t ? null != (i = a.currentSize) ? i : 0 : await a.getSize();
    e > r && (r = e), n += e
  }
  return {
    totalSize: n,
    largestUploadedFileSize: r
  }
}
async function Q(e, t, n, r) {
  let i = (0, T.dg)(n),
    a = e => {
      null == r || r(i, e), h.yr(t, j.evJ.ENTITY_TOO_LARGE, k.intl.formatToPlainString(k.t.fxEKdS, {
        maxSize: (0, T.Ng)(i)
      }))
    },
    {
      totalSize: o,
      largestUploadedFileSize: s
    } = await q(e, false);
  if (s > Math.max(i, M.Y1) || o > A.zz) return a(s), false;
  try {
    await (0, d.Z)(e)
  } catch (n) {
    h.yr(t, true, k.intl.formatToPlainString(k.t["9h1/1p"], {
      count: e.length
    }))
  }
  return {
    totalSize: o,
    largestUploadedFileSize: s
  } = await q(e, true), !e.some(e => e.error === j.evJ.ENTITY_TOO_LARGE) && !(o > A.zz) || (a(s), false)
}
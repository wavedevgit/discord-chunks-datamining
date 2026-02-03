/** Chunk was on web.js **/
/** chunk id: 545152, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => B,
  x: () => Y
}), require("./733351.js"), require("./321073.js"), require("./65821.js"), require("./896048.js"), require("./114821.js"), require("./339614.js"), require("./747238.js"), require("./812715.js"), require("./866193.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk73153 = require("./73153.js"),
  Chunk843472 = require("./843472.js"),
  Chunk608299 = require("./608299.js"),
  Chunk803306 = require("./803306.js"),
  Chunk155718 = require("./155718.js"),
  Chunk884384 = require("./884384.js"),
  Chunk358579 = require("./358579.js"),
  Chunk58149 = require("./58149.js"),
  Chunk224868 = require("./224868.js"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk706727 = require("./706727.js"),
  Chunk296043 = require("./296043.js"),
  Chunk963852 = require("./963852.js"),
  Chunk195880 = require("./195880.js"),
  Chunk867455 = require("./867455.js"),
  Chunk773669 = require("./773669.js"),
  Chunk71393 = require("./71393.js"),
  Chunk522602 = require("./522602.js"),
  Chunk287809 = require("./287809.js"),
  Chunk453771 = require("./453771.js"),
  Chunk403362 = require("./403362.js"),
  Chunk292348 = require("./292348.js"),
  Chunk721768 = require("./721768.js"),
  Chunk360161 = require("./360161.js"),
  Chunk258363 = require("./258363.js"),
  Chunk842209 = require("./842209.js"),
  Chunk861382 = require("./861382.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx");

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

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function B(e) {
  var t, n, r, o, l, u, d, _, h, m, g, E, y, v, I, S, T;
  let {
    command: C,
    optionValues: P,
    context: j,
    commandTargetId: k,
    maxSizeCallback: U,
    commandOrigin: G = L.iw.CHAT,
    sectionName: F,
    interactionLifecycleOptionsFactory: V = z,
    source: B
  } = e;
  if (null == j.channel) return;
  let Y = null != (t = D.A.getSource(j.channel.id)) ? t : B,
    K = null != (n = D.A.getCommandOrigin(j.channel.id)) ? n : G;
  null == j.autocomplete && a.h.dispatch({
    type: "APPLICATION_COMMAND_USED",
    context: j,
    command: C,
    commandOrigin: K
  }), await b.A.unarchiveThreadIfNecessary(j.channel.id);
  let Z = [],
    Q = [],
    X = (0, x.Qr)(K);
  if (null != C.options)
    for (let e of C.options) {
      let t;
      if (e.type === c.n4.SUB_COMMAND || e.type === c.n4.SUB_COMMAND_GROUP || !(e.name in P)) continue;
      let n = (null == (_ = j.autocomplete) ? true : _.name) === e.name || true;
      if (e.type === c.n4.STRING) {
        let r = null != (h = null == (m = R.Eq(P, e.name)) ? true : m.trim()) ? h : "";
        if (null != e.choices ? t = (0, w.$7)(e.choices, r) : e.autocomplete && (t = null != j.autocomplete && n ? j.autocomplete.query : (0, w.Xf)(j.channel.id, e.name, r)), null == t && (t = r), "" === t && null != j.autocomplete && !n) continue;
        i()(null != j.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')), Z.push({
          type: e.type,
          name: e.name,
          value: t,
          focused: n
        });
        continue
      }
      if (e.type === c.n4.ATTACHMENT) {
        if (null != j.autocomplete) continue;
        let t = A.A.getUpload(j.channel.id, e.name, X);
        if (null == t) continue;
        let r = Q.length;
        Q.push(t), Z.push({
          type: e.type,
          name: e.name,
          value: r,
          focused: n
        });
        continue
      }
      let r = R.Gk(P[e.name]);
      if (i()(null != j.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !n) continue;
      let a = null != (d = r[0]) ? d : {
        type: "text",
        text: ""
      };
      switch (e.type) {
        case c.n4.CHANNEL:
          if ("channelMention" === a.type) t = a.channelId;
          else if ("text" === a.type)
            if ((0, x.hT)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.f)(a.text, null == (g = j.guild) ? true : g.id, j.channel.id);
              i()((null == e ? true : e.type) === "channelMention", "Failed to resolve ".concat(a.text)), t = e.channelId
            } break;
        case c.n4.ROLE:
          if ("roleMention" === a.type) t = a.roleId;
          else if ("text" === a.type)
            if ((0, x.hT)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.f)(a.text, null == (E = j.guild) ? true : E.id, j.channel.id, {
                allowUsers: false
              });
              i()((null == e ? true : e.type) === "roleMention", "Failed to resolve ".concat(a.text)), t = e.roleId
            }
          else "textMention" === a.type && "@everyone" === a.text && (t = null == (y = j.guild) ? true : y.id);
          break;
        case c.n4.USER:
          if ("userMention" === a.type) t = a.userId;
          else if ("text" === a.type)
            if ((0, x.hT)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.f)(a.text, null == (v = j.guild) ? true : v.id, j.channel.id, {
                allowRoles: false
              });
              i()((null == e ? true : e.type) === "userMention", "Failed to resolve ".concat(a.text)), t = e.userId
            } break;
        case c.n4.MENTIONABLE:
          if ("userMention" === a.type) t = a.userId;
          else if ("roleMention" === a.type) t = a.roleId;
          else if ("textMention" === a.type && "@everyone" === a.text) t = null == (I = j.guild) ? true : I.id;
          else if ("text" === a.type)
            if ((0, x.hT)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.f)(a.text, null == (S = j.guild) ? true : S.id, j.channel.id);
              (null == e ? true : e.type) === "userMention" ? t = e.userId: (null == e ? true : e.type) === "roleMention" ? t = e.roleId : (null == e ? true : e.type) === "textMention" && "@everyone" === e.text ? t = null == (T = j.guild) ? true : T.id : i()(false, "Failed to resolve ".concat(a.text))
            } break;
        case c.n4.BOOLEAN:
          "text" === a.type && (t = (0, w.a5)(a.text.trim()));
          break;
        case c.n4.INTEGER:
          if ("text" === a.type) {
            let r = a.text.trim();
            null != e.choices ? t = (0, w.Bk)(e.choices, r) : e.autocomplete && (t = null != j.autocomplete && n ? j.autocomplete.query : (0, w.lM)(j.channel.id, e.name, r)), null == t && (t = Number(R.ib(O.default.locale, r)))
          }
          break;
        case c.n4.NUMBER:
          if ("text" === a.type) {
            let r = a.text.trim();
            null != e.choices ? t = (0, w.Bk)(e.choices, r) : e.autocomplete && (t = null != j.autocomplete && n ? j.autocomplete.query : (0, w.lM)(j.channel.id, e.name, r)), null == t && (t = Number(R.ib(O.default.locale, r)))
          }
          break;
        default:
          throw Error("Unsupported option type: ".concat(e.type))
      }("" !== t || null == j.autocomplete || n) && (i()(null != j.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')), null != t && Z.push({
        type: e.type,
        name: e.name,
        value: t,
        focused: n
      }))
    }
  if (null != C.subCommandPath)
    for (let e = C.subCommandPath.length - 1; e >= 0; e -= 1) {
      let {
        name: t,
        type: n
      } = C.subCommandPath[e];
      Z = [{
        type: n,
        name: t,
        options: Z
      }]
    }
  if (null != C.execute) return f.Ay.trackWithMetadata(M.HAw.APPLICATION_COMMAND_USED, {
    command_id: C.id,
    application_id: C.applicationId,
    command_type: C.type,
    location: q(K),
    source: Y
  }), C.execute(Z, j);
  if (C.inputType === L.y$.BUILT_IN || C.inputType === L.y$.BUILT_IN_TEXT || C.inputType === L.y$.BUILT_IN_INTEGRATION) return;
  let J = {
      version: C.version,
      id: null != (r = null == (l = C.rootCommand) ? true : l.id) ? r : C.id,
      guild_id: C.guildId,
      name: null != (o = null == (u = C.rootCommand) ? true : u.name) ? o : C.untranslatedName,
      type: C.type,
      options: Z,
      application_command: C.rootCommand
    },
    $ = () => {
      H(P)
    };
  null != k && (J.target_id = k), null != j.autocomplete ? (0, N.WL)(C, j, J) : (s.A.clearAll(j.channel.id, X), W({
    applicationId: C.applicationId,
    data: J,
    context: j,
    attachments: Q,
    maxSizeCallback: U,
    onMessageSuccess: $,
    analytics_location: q(K),
    sectionName: F,
    source: Y,
    interactionLifecycleOptions: await V(C, j, J)
  }))
}
let H = e => {
    let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? new h.zT({
      names: [e.name.replaceAll(":", "")],
      surrogates: "",
      unicodeVersion: 6
    }) : "customEmoji" === e.type ? _.Ay.getCustomEmojiById(e.emojiId) : null).filter(T.Vq));
    t.length > 0 && a.h.dispatch({
      type: "EMOJI_TRACK_USAGE",
      emojiUsed: t
    })
  },
  Y = async (e, t, n) => {
    if (e.isCommandType() && null != e.interactionData && null != n.command) {
      let r = {
        channel: t,
        guild: null != t.guild_id ? v.A.getGuild(t.guild_id) : null
      };
      W({
        applicationId: n.command.applicationId,
        data: e.interactionData,
        context: r,
        interactionLifecycleOptions: await z(n.command, r, e.interactionData)
      })
    }
  }, W = e => {
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
    } = i, h = p.id, g = null == _ ? true : _.id, E = {
      applicationId: n,
      channelId: h,
      guildId: g,
      data: r,
      nonce: null != (t = f.nonce) ? t : (0, y.m)(),
      attachments: a,
      maxSizeCallback: o,
      analytics_location: l,
      sectionName: u,
      source: d
    };
    m.tU(E.nonce, {
      messageId: f.messageId,
      onCreate: f.onCreate,
      onSuccess: f.onSuccess,
      onFailure: f.onFailure,
      data: {
        interactionType: c.G4.APPLICATION_COMMAND,
        applicationId: n,
        channelId: h
      }
    }), null != a && a.length > 0 ? Q(a, E.nonce, g, o).then(e => {
      e && K(E, s)
    }) : K(E, s)
  };

function K(e, t) {
  u.Ay.enqueue({
    type: u.AZ.COMMAND,
    message: e
  }, n => {
    var r;
    (0, g.wy)(e.nonce, n, e.applicationId, e.channelId, null != (r = e.guildId) ? r : null), n.ok && null != t && t()
  })
}
async function z(e, t, n) {
  var r;
  if (null == t.channel) return {};
  let i = P.s$({
    channel: t.channel,
    type: "channel"
  }, n.type, e.applicationId);
  if (null == i) return {};
  let s = null == (r = i.application) ? true : r.bot;
  if (null == s && null != i.botId) try {
    await l.wz(i.botId)
  } catch (e) {}
  let u = V(G({}, (0, E.Ay)({
    channelId: t.channel.id,
    content: "",
    type: n.type === c.kc.CHAT ? M.lAJ.CHAT_INPUT_COMMAND : M.lAJ.CONTEXT_MENU_COMMAND,
    author: null != s ? s : {
      id: i.id,
      username: i.name,
      discriminator: M.h3J,
      avatar: null,
      bot: true
    }
  })), {
    application: i.application,
    interaction: {
      id: n.id,
      name: n.name,
      name_localized: e.displayName,
      type: c.G4.APPLICATION_COMMAND,
      user: (0, E.Vi)(I.default.getCurrentUser())
    },
    interaction_data: n
  });
  return o.A.receiveMessage(t.channel.id, u, true, {
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
      null == r && null != n && o.A.sendClydeError(t.channel.id, n);
      let l = r;
      null == l && null != s && (l = (0, g.sW)(s, e.applicationId)), a.h.dispatch({
        type: "MESSAGE_SEND_FAILED",
        messageId: u.id,
        channelId: t.channel.id,
        reason: l
      })
    }
  }
}

function q(e) {
  switch (e) {
    case L.iw.APPLICATION_LAUNCHER:
      return L.Oh.APP_LAUNCHER;
    case L.iw.APP_LAUNCHER_APPLICATION_VIEW:
      return L.Oh.APP_LAUNCHER_APPLICATION_VIEW;
    case L.iw.IMAGE_RECS_MENU:
      return L.Oh.IMAGE_RECS_MENU;
    case L.iw.IMAGE_RECS_SUBMENU:
      return L.Oh.IMAGE_RECS_SUBMENU;
    case L.iw.ACTIVITY_INSTANCE_EMBED:
      return L.Oh.ACTIVITY_INSTANCE_EMBED;
    case L.iw.ACTIVITY_BOOKMARK_EMBED:
      return L.Oh.ACTIVITY_BOOKMARK_EMBED;
    case L.iw.MINI_SHELF:
      return L.Oh.ACTIVITIES_MINI_SHELF;
    case L.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
      return L.Oh.VC_TILE_ACTIVITY_SUGGESTION;
    case L.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
      return L.Oh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
    default:
      return L.Oh.SLASH_UI
  }
}
async function Z(e, t) {
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
  let i = (0, S.o2)(n),
    a = e => {
      null == r || r(i, e), m.C1(t, M.t02.ENTITY_TOO_LARGE, k.intl.formatToPlainString(k.t.fxEKdS, {
        maxSize: (0, S.Hb)(i)
      }))
    },
    {
      totalSize: o,
      largestUploadedFileSize: s
    } = await Z(e, false);
  if (s > Math.max(i, j.VP) || o > C.eM) return a(s), false;
  try {
    await (0, d.A)(e)
  } catch (n) {
    m.C1(t, true, k.intl.formatToPlainString(k.t["9h1/1p"], {
      count: e.length
    }))
  }
  return {
    totalSize: o,
    largestUploadedFileSize: s
  } = await Z(e, true), !e.some(e => e.error === M.t02.ENTITY_TOO_LARGE) && !(o > C.eM) || (a(s), false)
}
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

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function B(e) {
  var t, n, r, s, l, u, d, _, h, m, g, E, y, v, I, S, T;
  let {
    command: C,
    optionValues: P,
    context: M,
    commandTargetId: k,
    maxSizeCallback: U,
    commandOrigin: G = x.iw.CHAT,
    sectionName: V,
    interactionLifecycleOptionsFactory: F = z,
    source: B
  } = e;
  if (null == M.channel) return;
  let Y = null != (t = D.A.getSource(M.channel.id)) ? t : B,
    K = null != (n = D.A.getCommandOrigin(M.channel.id)) ? n : G;
  null == M.autocomplete && a.h.dispatch({
    type: "APPLICATION_COMMAND_USED",
    context: M,
    command: C,
    commandOrigin: K
  }), await b.A.unarchiveThreadIfNecessary(M.channel.id);
  let X = [],
    Z = [],
    Q = (0, L.Qr)(K);
  if (null != C.options)
    for (let e of C.options) {
      let t;
      if (e.type === c.n4.SUB_COMMAND || e.type === c.n4.SUB_COMMAND_GROUP || !(e.name in P)) continue;
      let n = (null == (_ = M.autocomplete) ? true : _.name) === e.name || true;
      if (e.type === c.n4.STRING) {
        let r = null != (h = null == (m = w.Eq(P, e.name)) ? true : m.trim()) ? h : "";
        if (null != e.choices ? t = (0, R.$7)(e.choices, r) : e.autocomplete && (t = null != M.autocomplete && n ? M.autocomplete.query : (0, R.Xf)(M.channel.id, e.name, r)), null == t && (t = r), "" === t && null != M.autocomplete && !n) continue;
        i()(null != M.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')), X.push({
          type: e.type,
          name: e.name,
          value: t,
          focused: n
        });
        continue
      }
      if (e.type === c.n4.ATTACHMENT) {
        if (null != M.autocomplete) continue;
        let t = A.A.getUpload(M.channel.id, e.name, Q);
        if (null == t) continue;
        let r = Z.length;
        Z.push(t), X.push({
          type: e.type,
          name: e.name,
          value: r,
          focused: n
        });
        continue
      }
      let r = w.Gk(P[e.name]);
      if (i()(null != M.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !n) continue;
      let a = null != (d = r[0]) ? d : {
        type: "text",
        text: ""
      };
      switch (e.type) {
        case c.n4.CHANNEL:
          if ("channelMention" === a.type) t = a.channelId;
          else if ("text" === a.type)
            if ((0, L.hT)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.f)(a.text, null == (g = M.guild) ? true : g.id, M.channel.id);
              i()((null == e ? true : e.type) === "channelMention", "Failed to resolve ".concat(a.text)), t = e.channelId
            } break;
        case c.n4.ROLE:
          if ("roleMention" === a.type) t = a.roleId;
          else if ("text" === a.type)
            if ((0, L.hT)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.f)(a.text, null == (E = M.guild) ? true : E.id, M.channel.id, {
                allowUsers: false
              });
              i()((null == e ? true : e.type) === "roleMention", "Failed to resolve ".concat(a.text)), t = e.roleId
            }
          else "textMention" === a.type && "@everyone" === a.text && (t = null == (y = M.guild) ? true : y.id);
          break;
        case c.n4.USER:
          if ("userMention" === a.type) t = a.userId;
          else if ("text" === a.type)
            if ((0, L.hT)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.f)(a.text, null == (v = M.guild) ? true : v.id, M.channel.id, {
                allowRoles: false
              });
              i()((null == e ? true : e.type) === "userMention", "Failed to resolve ".concat(a.text)), t = e.userId
            } break;
        case c.n4.MENTIONABLE:
          if ("userMention" === a.type) t = a.userId;
          else if ("roleMention" === a.type) t = a.roleId;
          else if ("textMention" === a.type && "@everyone" === a.text) t = null == (I = M.guild) ? true : I.id;
          else if ("text" === a.type)
            if ((0, L.hT)(a.text)) t = a.text.trim();
            else {
              let e = (0, p.f)(a.text, null == (S = M.guild) ? true : S.id, M.channel.id);
              (null == e ? true : e.type) === "userMention" ? t = e.userId: (null == e ? true : e.type) === "roleMention" ? t = e.roleId : (null == e ? true : e.type) === "textMention" && "@everyone" === e.text ? t = null == (T = M.guild) ? true : T.id : i()(false, "Failed to resolve ".concat(a.text))
            } break;
        case c.n4.BOOLEAN:
          "text" === a.type && (t = (0, R.a5)(a.text.trim()));
          break;
        case c.n4.INTEGER:
          if ("text" === a.type) {
            let r = a.text.trim();
            null != e.choices ? t = (0, R.Bk)(e.choices, r) : e.autocomplete && (t = null != M.autocomplete && n ? M.autocomplete.query : (0, R.lM)(M.channel.id, e.name, r)), null == t && (t = Number(w.ib(O.default.locale, r)))
          }
          break;
        case c.n4.NUMBER:
          if ("text" === a.type) {
            let r = a.text.trim();
            null != e.choices ? t = (0, R.Bk)(e.choices, r) : e.autocomplete && (t = null != M.autocomplete && n ? M.autocomplete.query : (0, R.lM)(M.channel.id, e.name, r)), null == t && (t = Number(w.ib(O.default.locale, r)))
          }
          break;
        default:
          throw Error("Unsupported option type: ".concat(e.type))
      }("" !== t || null == M.autocomplete || n) && (i()(null != M.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')), null != t && X.push({
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
      X = [{
        type: n,
        name: t,
        options: X
      }]
    }
  if (null != C.execute) return f.Ay.trackWithMetadata(j.HAw.APPLICATION_COMMAND_USED, {
    command_id: C.id,
    application_id: C.applicationId,
    command_type: C.type,
    location: q(K),
    source: Y
  }), C.execute(X, M);
  if (C.inputType === x.y$.BUILT_IN || C.inputType === x.y$.BUILT_IN_TEXT || C.inputType === x.y$.BUILT_IN_INTEGRATION) return;
  let $ = {
      version: C.version,
      id: null != (r = null == (l = C.rootCommand) ? true : l.id) ? r : C.id,
      guild_id: C.guildId,
      name: null != (s = null == (u = C.rootCommand) ? true : u.name) ? s : C.untranslatedName,
      type: C.type,
      options: X,
      application_command: C.rootCommand
    },
    J = () => {
      H(P)
    };
  null != k && ($.target_id = k), null != M.autocomplete ? (0, N.WL)(C, M, $) : (o.A.clearAll(M.channel.id, Q), W({
    applicationId: C.applicationId,
    data: $,
    context: M,
    attachments: Z,
    maxSizeCallback: U,
    onMessageSuccess: J,
    analytics_location: q(K),
    sectionName: V,
    source: Y,
    interactionLifecycleOptions: await F(C, M, $)
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
      maxSizeCallback: s,
      onMessageSuccess: o,
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
      maxSizeCallback: s,
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
    }), null != a && a.length > 0 ? Z(a, E.nonce, g, s).then(e => {
      e && K(E, o)
    }) : K(E, o)
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
  let o = null == (r = i.application) ? true : r.bot;
  if (null == o && null != i.botId) try {
    await l.wz(i.botId)
  } catch (e) {}
  let u = F(G({}, (0, E.Ay)({
    channelId: t.channel.id,
    content: "",
    type: n.type === c.kc.CHAT ? j.lAJ.CHAT_INPUT_COMMAND : j.lAJ.CONTEXT_MENU_COMMAND,
    author: null != o ? o : {
      id: i.id,
      username: i.name,
      discriminator: j.h3J,
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
  return s.A.receiveMessage(t.channel.id, u, true, {
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
    onFailure: (n, r, i, o) => {
      if (null == t.channel) return;
      null == r && null != n && s.A.sendClydeError(t.channel.id, n);
      let l = r;
      null == l && null != o && (l = (0, g.sW)(o, e.applicationId)), a.h.dispatch({
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
    case x.iw.APPLICATION_LAUNCHER:
      return x.Oh.APP_LAUNCHER;
    case x.iw.APP_LAUNCHER_APPLICATION_VIEW:
      return x.Oh.APP_LAUNCHER_APPLICATION_VIEW;
    case x.iw.IMAGE_RECS_MENU:
      return x.Oh.IMAGE_RECS_MENU;
    case x.iw.IMAGE_RECS_SUBMENU:
      return x.Oh.IMAGE_RECS_SUBMENU;
    case x.iw.ACTIVITY_INSTANCE_EMBED:
      return x.Oh.ACTIVITY_INSTANCE_EMBED;
    case x.iw.ACTIVITY_BOOKMARK_EMBED:
      return x.Oh.ACTIVITY_BOOKMARK_EMBED;
    case x.iw.MINI_SHELF:
      return x.Oh.ACTIVITIES_MINI_SHELF;
    case x.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
      return x.Oh.VC_TILE_ACTIVITY_SUGGESTION;
    case x.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
      return x.Oh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
    default:
      return x.Oh.SLASH_UI
  }
}
async function X(e, t) {
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
async function Z(e, t, n, r) {
  let i = (0, S.o2)(n),
    a = e => {
      null == r || r(i, e), m.C1(t, j.t02.ENTITY_TOO_LARGE, k.intl.formatToPlainString(k.t.fxEKdS, {
        maxSize: (0, S.Hb)(i)
      }))
    },
    {
      totalSize: s,
      largestUploadedFileSize: o
    } = await X(e, false);
  if (o > Math.max(i, M.VP) || s > C.eM) return a(o), false;
  try {
    await (0, d.A)(e)
  } catch (n) {
    m.C1(t, true, k.intl.formatToPlainString(k.t["9h1/1p"], {
      count: e.length
    }))
  }
  return {
    totalSize: s,
    largestUploadedFileSize: o
  } = await X(e, true), !e.some(e => e.error === j.t02.ENTITY_TOO_LARGE) && !(s > C.eM) || (a(o), false)
}
/** Chunk was on web.js **/
/** chunk id: 928477, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JA: () => j,
  Jw: () => w,
  Od: () => k,
  Wj: () => G,
  gK: () => U,
  oD: () => x,
  vH: () => L
}), require("./35282.js"), require("./704826.js"), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk430742 = require("./430742.js"),
  Chunk904245 = require("./904245.js"),
  Chunk166459 = require("./166459.js"),
  Chunk238349 = require("./238349.js"),
  Chunk577347 = require("./577347.jsx"),
  Chunk228392 = require("./228392.js"),
  Chunk58873 = require("./58873.js"),
  Chunk957730 = require("./957730.js"),
  Chunk48854 = require("./48854.js"),
  Chunk467798 = require("./467798.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk375954 = require("./375954.js"),
  Chunk300429 = require("./300429.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  Chunk861990 = require("./861990.js"),
  Chunk968437 = require("./968437.js"),
  Chunk665906 = require("./665906.js"),
  Chunk456077 = require("./456077.js"),
  Chunk124368 = require("./124368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  w = function(e) {
    return e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled", e[e.PrivateOnly = 3] = "PrivateOnly", e
  }({});

function L(e) {
  let t = (0, A.NE)(e);
  return (0, A.Xu)(e) ? t ? 2 : 3 : 1
}

function x(e, t) {
  var n;
  return 3 === t || null != (n = e.isPrivate) && n
}

function M(e, t) {
  return e.length > t ? e.substring(0, t) + "..." : e
}

function k(e, t) {
  var n, r, i, a, o, s, l;
  let c = null == t ? null : y.Z.getMessage(e.id, t),
    u = null != (o = null == c || null == (r = c.embeds) || null == (n = r[0]) ? true : n.rawTitle) ? o : "",
    d = null != (s = null == c || null == (a = c.poll) || null == (i = a.question) ? true : i.text) ? s : "";
  if ("" !== u) return M(u, 40);
  {
    if ("" !== d) return M(d, 80);
    let t = h.ZP.unparse(null != (l = null == c ? true : c.content) ? l : "", e.id, true),
      n = (0, C.Z)(t.split("\n")[0], true);
    n = n.replace(/^[ #-]+/, "");
    let r = [];
    for (;;) {
      let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
      if (null == e || null == e.index) {
        r.push(n);
        break
      }
      r.push(n.substring(0, e.index)), r.push(e[0]), n = n.substring(e.index + e[0].length)
    }
    let i = r[0];
    for (let e = 1; e < r.length; e++) {
      let t = i + r[e];
      if (t.length > 40) break;
      i = t
    }
    return M(i, 40)
  }
}

function j(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: i,
    privateThreadMode: o,
    location: s,
    onThreadCreated: c,
    useDefaultThreadName: d,
    uploadHandler: f
  } = e;
  return r.useCallback(async (e, r, _) => {
    var p;
    let h = null == n,
      m = x(i, o),
      g = null != (p = i.name) ? p : "";
    if ("" === g && d) {
      let e = k(t, n);
      g = "" !== e ? e : D.intl.string(D.t["7Xm5QI"])
    }
    let y = (0, S.WD)(t),
      O = E.Z.getChannel(I.default.castMessageIdAsChannelId(n)),
      v = await Z(t, [], true, () => {
        let e = null != n ? R.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : R.ANM.CHANNEL_THREADS(t.id);
        return a.tn.post({
          url: e,
          body: {
            name: g,
            type: m ? R.d4z.PRIVATE_THREAD : t.type === R.d4z.GUILD_ANNOUNCEMENT ? R.d4z.ANNOUNCEMENT_THREAD : R.d4z.PUBLIC_THREAD,
            auto_archive_duration: y,
            location: s
          },
          rejectWithError: false
        })
      });
    v !== O && (l.Z.clearDraft(t.id, b.d.ThreadSettings), l.Z.clearDraft(t.id, b.d.FirstThreadMessage), null == c || c(v), (h || e.length > 0 || null != r && r.length > 0 || null != _ && _.length > 0) && B(v, e, r, _, f)), u.Z.clearAll(t.id, b.d.FirstThreadMessage)
  }, [t, n, i, c, o, s, d, f])
}

function U(e, t, n, r, i) {
  return Z(e, [], true, () => a.tn.post({
    url: R.ANM.CHANNEL_THREADS(e.id),
    body: {
      name: t,
      type: n,
      auto_archive_duration: r,
      location: i
    },
    rejectWithError: false
  }))
}

function G(e) {
  let {
    parentChannel: t,
    name: n,
    appliedTags: o,
    analyticsLocations: s,
    onThreadCreated: c,
    upload: d
  } = e;
  return r.useCallback(async (e, r, f) => {
    let h, m = 0,
      [E, y] = (0, g.Z)(e);
    E && (e = y, m = (0, i.pj)(m, R.iLy.SUPPRESS_NOTIFICATIONS));
    let O = (0, S.WD)(t, null),
      v = R.ANM.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
      I = {
        name: n,
        auto_archive_duration: O,
        applied_tags: o,
        message: {
          content: e,
          sticker_ids: r,
          flags: 0 !== m ? m : true
        }
      };
    if (null != f && f.length > 0) try {
      let e = await d(f);
      h = e.uploaderFile, I.message.attachments = e.files.map((e, t) => (0, T.B)(e, t))
    } catch (i) {
      let {
        file: e,
        code: n,
        reason: r
      } = i;
      throw (0, p.A)({
        file: e,
        guildId: t.getGuildId(),
        analyticsLocations: null != s ? s : [],
        code: n,
        reason: r
      }), i
    }
    let A = await Z(t, s, h, () => a.tn.post({
      url: v,
      body: I,
      rejectWithError: false
    }));
    return l.Z.clearDraft(t.id, b.d.ThreadSettings), l.Z.clearDraft(t.id, b.d.FirstThreadMessage), u.Z.clearAll(t.id, b.d.FirstThreadMessage), (0, _.Je)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: A.id
    }), null == c || c(A), A
  }, [t, n, o, c, s, d])
}

function B(e, t, n, r, i) {
  if (null != i && null != r && r.length > 0) i(e, r, t, n);
  else if (null != n && n.length > 0) return c.Z.sendStickers(e.id, n, t, {
    location: P.dy.THREAD_CREATION
  });
  else return c.Z.sendMessage(e.id, h.ZP.parse(e, t), true, {
    location: P.dy.THREAD_CREATION
  })
}
async function Z(e, t, n, r) {
  let i, a = e.isForumLikeChannel();
  try {
    i = await r(), null == i.body ? s.Z.show({
      title: D.intl.string(D.t.j2d6Km),
      body: D.intl.string(D.t.fEptJP)
    }) : (o.Z.dispatch({
      type: "SLOWMODE_RESET_COOLDOWN",
      slowmodeType: O.S.CreateThread,
      channelId: e.id
    }), o.Z.dispatch({
      type: "THREAD_CREATE_LOCAL",
      channelId: i.body.id
    }))
  } catch (r) {
    var l, u, _, h, g, b, y, I, T;
    if ((null == (l = r.body) ? true : l.code) === R.evJ.TOO_MANY_THREADS) s.Z.show({
      title: a ? D.intl.string(D.t.vWNFkx) : D.intl.string(D.t["1KEdvB"]),
      body: a ? D.intl.string(D.t.KGaiEK) : D.intl.string(D.t.P0wT5S)
    });
    else if ((null == (u = r.body) ? true : u.code) === R.evJ.TOO_MANY_ANNOUNCEMENT_THREADS) s.Z.show({
      title: D.intl.string(D.t["1KEdvB"]),
      body: D.intl.string(D.t.jDMxz2)
    });
    else if ((null == (_ = r.body) ? true : _.code) === R.evJ.SLOWMODE_RATE_LIMITED) {
      let t = null != (b = r.body.retry_after) ? b : 0;
      t > 0 && o.Z.dispatch({
        type: "SLOWMODE_SET_COOLDOWN",
        channelId: e.id,
        slowmodeType: O.S.CreateThread,
        cooldownMs: t * v.Z.Millis.SECOND
      })
    } else if (429 === r.status) s.Z.show({
      title: a ? D.intl.string(D.t.vWNFkx) : D.intl.string(D.t["1KEdvB"]),
      body: D.intl.string(D.t.Whhv4w)
    });
    else if (N.fZ.has(null == (h = r.body) ? true : h.code)) throw r;
    else if (N.RN.has(null == (g = r.body) ? true : g.code)) {
      if (null != n)
        if ((null == (y = r.body) ? true : y.code) === R.evJ.EXPLICIT_CONTENT) {
          let t = (0, m.r)();
          null != r.body.attachments && r.body.attachments.length > 0 && (o.Z.dispatch({
            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
            messageId: t,
            channelId: e.id,
            attachments: r.body.attachments
          }), (0, f.Z)(e.id, t))
        } else(0, p.A)({
          file: n,
          guildId: e.getGuildId(),
          analyticsLocations: null != t ? t : [],
          code: null == (I = r.body) ? true : I.code,
          reason: null == (T = r.body) ? true : T.reason
        });
      return new Promise((e, t) => {
        null == r.body && t(), d.Z.addConditionalChangeListener(() => {
          let n = d.Z.getAndDeleteMostRecentUserCreatedThreadId();
          if (null != n) {
            let r = E.Z.getChannel(n);
            return o.Z.wait(() => {
              null == r ? t() : e(r)
            }), false
          }
        })
      })
    } else s.Z.show({
      title: D.intl.string(D.t.j2d6Km),
      body: D.intl.string(D.t.fEptJP)
    })
  }
  let S = await new Promise((e, t) => {
    null == i.body && t(), E.Z.addConditionalChangeListener(() => {
      let t = E.Z.getChannel(i.body.id);
      if (null != t) return o.Z.wait(() => {
        e(t)
      }), false
    })
  });
  try {
    await c.Z.fetchMessages({
      channelId: S.id,
      limit: R.AQB
    })
  } catch (e) {}
  return S
}
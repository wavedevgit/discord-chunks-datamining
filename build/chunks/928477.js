/** Chunk was on web.js **/
/** chunk id: 928477, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JA: () => k,
  Jw: () => D,
  Od: () => j,
  Wj: () => G,
  gK: () => U,
  oD: () => L,
  vH: () => x
}), require("./35282.js"), require("./704826.js"), require("./539854.js"), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js"),
  Chunk861990 = require("./861990.js"),
  Chunk968437 = require("./968437.js"),
  Chunk665906 = require("./665906.js"),
  Chunk456077 = require("./456077.js"),
  Chunk124368 = require("./124368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  D = function(e) {
    return e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled", e[e.PrivateOnly = 3] = "PrivateOnly", e
  }({});

function x(e) {
  let t = (0, A.NE)(e);
  return (0, A.Xu)(e) ? t ? 2 : 3 : 1
}

function L(e, t) {
  var n;
  return 3 === t || null != (n = e.isPrivate) && n
}

function M(e, t) {
  return e.length > t ? e.substring(0, t) + "..." : e
}

function j(e, t) {
  var n, r, i, a, o, s, l;
  let c = null == t ? null : b.Z.getMessage(e.id, t),
    u = null != (o = null == c || null == (r = c.embeds) || null == (n = r[0]) ? true : n.rawTitle) ? o : "",
    d = null != (s = null == c || null == (a = c.poll) || null == (i = a.question) ? true : i.text) ? s : "";
  if ("" !== u) return M(u, 40);
  {
    if ("" !== d) return M(d, 80);
    let t = p.ZP.unparse(null != (l = null == c ? true : c.content) ? l : "", e.id, true),
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

function k(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: a,
    privateThreadMode: o,
    location: l,
    onThreadCreated: u,
    useDefaultThreadName: d,
    uploadHandler: f
  } = e;
  return r.useCallback(async (e, r, _) => {
    var p;
    let h = null == n,
      m = L(a, o),
      b = null != (p = a.name) ? p : "";
    if ("" === b && d) {
      let e = j(t, n);
      b = "" !== e ? e : w.intl.string(w.t["7Xm5QI"])
    }
    let y = (0, S.WD)(t),
      O = g.Z.getChannel(I.default.castMessageIdAsChannelId(n)),
      v = await Z(t, [], true, () => {
        let e = null != n ? R.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : R.ANM.CHANNEL_THREADS(t.id);
        return i.tn.post({
          url: e,
          body: {
            name: b,
            type: m ? R.d4z.PRIVATE_THREAD : t.type === R.d4z.GUILD_ANNOUNCEMENT ? R.d4z.ANNOUNCEMENT_THREAD : R.d4z.PUBLIC_THREAD,
            auto_archive_duration: y,
            location: l
          },
          rejectWithError: false
        })
      });
    v !== O && (s.Z.clearDraft(t.id, E.d.ThreadSettings), s.Z.clearDraft(t.id, E.d.FirstThreadMessage), null == u || u(v), (h || e.length > 0 || null != r && r.length > 0 || null != _ && _.length > 0) && B(v, e, r, _, f)), c.Z.clearAll(t.id, E.d.FirstThreadMessage)
  }, [t, n, a, u, o, l, d, f])
}

function U(e, t, n, r, a) {
  return Z(e, [], true, () => i.tn.post({
    url: R.ANM.CHANNEL_THREADS(e.id),
    body: {
      name: t,
      type: n,
      auto_archive_duration: r,
      location: a
    },
    rejectWithError: false
  }))
}

function G(e) {
  let {
    parentChannel: t,
    name: n,
    appliedTags: a,
    analyticsLocations: o,
    onThreadCreated: l,
    upload: u
  } = e;
  return r.useCallback(async (e, r, d) => {
    let p, h = 0,
      [g, b] = (0, m.Z)(e);
    g && (e = b, h = (0, v.pj)(h, R.iLy.SUPPRESS_NOTIFICATIONS));
    let y = (0, S.WD)(t, null),
      O = R.ANM.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
      I = {
        name: n,
        auto_archive_duration: y,
        applied_tags: a,
        message: {
          content: e,
          sticker_ids: r,
          flags: 0 !== h ? h : true
        }
      };
    if (null != d && d.length > 0) try {
      let e = await u(d);
      p = e.uploaderFile, I.message.attachments = e.files.map((e, t) => (0, T.B)(e, t))
    } catch (i) {
      let {
        file: e,
        code: n,
        reason: r
      } = i;
      throw (0, _.A)({
        file: e,
        guildId: t.getGuildId(),
        analyticsLocations: null != o ? o : [],
        code: n,
        reason: r
      }), i
    }
    let A = await Z(t, o, p, () => i.tn.post({
      url: O,
      body: I,
      rejectWithError: false
    }));
    return s.Z.clearDraft(t.id, E.d.ThreadSettings), s.Z.clearDraft(t.id, E.d.FirstThreadMessage), c.Z.clearAll(t.id, E.d.FirstThreadMessage), (0, f.Je)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: A.id
    }), null == l || l(A), A
  }, [t, n, a, l, o, u])
}

function B(e, t, n, r, i) {
  if (null != i && null != r && r.length > 0) i(e, r, t, n);
  else if (null != n && n.length > 0) return l.Z.sendStickers(e.id, n, t, {
    location: P.dy.THREAD_CREATION
  });
  else return l.Z.sendMessage(e.id, p.ZP.parse(e, t), true, {
    location: P.dy.THREAD_CREATION
  })
}
async function Z(e, t, n, r) {
  let i, s = e.isForumLikeChannel();
  try {
    i = await r(), null == i.body ? o.Z.show({
      title: w.intl.string(w.t.j2d6Km),
      body: w.intl.string(w.t.fEptJP)
    }) : (a.Z.dispatch({
      type: "SLOWMODE_RESET_COOLDOWN",
      slowmodeType: y.S.CreateThread,
      channelId: e.id
    }), a.Z.dispatch({
      type: "THREAD_CREATE_LOCAL",
      channelId: i.body.id
    }))
  } catch (r) {
    var c, f, p, m, E, b, v, I, T;
    if ((null == (c = r.body) ? true : c.code) === R.evJ.TOO_MANY_THREADS) o.Z.show({
      title: s ? w.intl.string(w.t.vWNFkx) : w.intl.string(w.t["1KEdvB"]),
      body: s ? w.intl.string(w.t.KGaiEK) : w.intl.string(w.t.P0wT5S)
    });
    else if ((null == (f = r.body) ? true : f.code) === R.evJ.TOO_MANY_ANNOUNCEMENT_THREADS) o.Z.show({
      title: w.intl.string(w.t["1KEdvB"]),
      body: w.intl.string(w.t.jDMxz2)
    });
    else if ((null == (p = r.body) ? true : p.code) === R.evJ.SLOWMODE_RATE_LIMITED) {
      let t = null != (b = r.body.retry_after) ? b : 0;
      t > 0 && a.Z.dispatch({
        type: "SLOWMODE_SET_COOLDOWN",
        channelId: e.id,
        slowmodeType: y.S.CreateThread,
        cooldownMs: t * O.Z.Millis.SECOND
      })
    } else if (429 === r.status) o.Z.show({
      title: s ? w.intl.string(w.t.vWNFkx) : w.intl.string(w.t["1KEdvB"]),
      body: w.intl.string(w.t.Whhv4w)
    });
    else if (N.fZ.has(null == (m = r.body) ? true : m.code)) throw r;
    else if (N.RN.has(null == (E = r.body) ? true : E.code)) {
      if (null != n)
        if ((null == (v = r.body) ? true : v.code) === R.evJ.EXPLICIT_CONTENT) {
          let t = (0, h.r)();
          null != r.body.attachments && r.body.attachments.length > 0 && (a.Z.dispatch({
            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
            messageId: t,
            channelId: e.id,
            attachments: r.body.attachments
          }), (0, d.Z)(e.id, t))
        } else(0, _.A)({
          file: n,
          guildId: e.getGuildId(),
          analyticsLocations: null != t ? t : [],
          code: null == (I = r.body) ? true : I.code,
          reason: null == (T = r.body) ? true : T.reason
        });
      return new Promise((e, t) => {
        null == r.body && t(), u.Z.addConditionalChangeListener(() => {
          let n = u.Z.getAndDeleteMostRecentUserCreatedThreadId();
          if (null != n) {
            let r = g.Z.getChannel(n);
            return a.Z.wait(() => {
              null == r ? t() : e(r)
            }), false
          }
        })
      })
    } else o.Z.show({
      title: w.intl.string(w.t.j2d6Km),
      body: w.intl.string(w.t.fEptJP)
    })
  }
  let S = await new Promise((e, t) => {
    null == i.body && t(), g.Z.addConditionalChangeListener(() => {
      let t = g.Z.getChannel(i.body.id);
      if (null != t) return a.Z.wait(() => {
        e(t)
      }), false
    })
  });
  try {
    await l.Z.fetchMessages({
      channelId: S.id,
      limit: R.AQB
    })
  } catch (e) {}
  return S
}
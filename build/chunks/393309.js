/** Chunk was on web.js **/
/** chunk id: 393309, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EN: () => L,
  Iy: () => x,
  Nw: () => U,
  jk: () => D,
  l1: () => j,
  r$: () => k,
  w0: () => G
}), require("./747238.js"), require("./812715.js"), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk465532 = require("./465532.js"),
  Chunk843472 = require("./843472.js"),
  Chunk608299 = require("./608299.js"),
  Chunk207777 = require("./207777.js"),
  Chunk496040 = require("./496040.jsx"),
  Chunk853742 = require("./853742.js"),
  Chunk301169 = require("./301169.js"),
  Chunk451909 = require("./451909.js"),
  Chunk195880 = require("./195880.js"),
  Chunk677413 = require("./677413.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk320501 = require("./320501.js"),
  Chunk101392 = require("./101392.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  Chunk292348 = require("./292348.js"),
  Chunk268761 = require("./268761.js"),
  Chunk406704 = require("./406704.js"),
  Chunk474078 = require("./474078.js"),
  Chunk37411 = require("./37411.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  D = function(e) {
    return e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled", e[e.PrivateOnly = 3] = "PrivateOnly", e
  }({});

function L(e) {
  let t = (0, T.n)(e);
  return (0, T.Tb)(e) ? t ? 2 : 3 : 1
}

function x(e, t) {
  var n;
  return 3 === t || null != (n = e.isPrivate) && n
}

function M(e, t) {
  return e.length > t ? e.substring(0, t) + "..." : e
}

function j(e, t) {
  var n, r, i, a, o, s, l;
  let c = null == t ? null : b.A.getMessage(e.id, t),
    u = null != (n = null == c || null == (a = c.embeds) || null == (i = a[0]) ? true : i.rawTitle) ? n : "",
    d = null != (r = null == c || null == (s = c.poll) || null == (o = s.question) ? true : o.text) ? r : "";
  if ("" !== u) return M(u, 40);
  {
    if ("" !== d) return M(d, 80);
    let t = h.Ay.unparse(null != (l = null == c ? true : c.content) ? l : "", e.id, true),
      n = (0, C.A)(t.split("\n")[0], true);
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
    threadSettings: i,
    privateThreadMode: o,
    location: s,
    onThreadCreated: c,
    useDefaultThreadName: d,
    uploadHandler: f
  } = e;
  return r.useCallback(async (e, r, p) => {
    var _;
    let h = null == n,
      m = x(i, o),
      g = null != (_ = i.name) ? _ : "";
    if ("" === g && d) {
      let e = j(t, n);
      g = "" !== e ? e : P.intl.string(P.t["7Xm5QI"])
    }
    let b = (0, S.Gl)(t),
      O = E.A.getChannel(A.default.castMessageIdAsChannelId(n)),
      v = await F(t, [], true, () => {
        let e = null != n ? w.Rsh.CHANNEL_MESSAGE_THREADS(t.id, n) : w.Rsh.CHANNEL_THREADS(t.id);
        return a.Bo.post({
          url: e,
          body: {
            name: g,
            type: m ? w.rbe.PRIVATE_THREAD : t.type === w.rbe.GUILD_ANNOUNCEMENT ? w.rbe.ANNOUNCEMENT_THREAD : w.rbe.PUBLIC_THREAD,
            auto_archive_duration: b,
            location: s
          },
          rejectWithError: false
        })
      });
    v !== O && (l.A.clearDraft(t.id, y.C.ThreadSettings), l.A.clearDraft(t.id, y.C.FirstThreadMessage), null == c || c(v), (h || e.length > 0 || null != r && r.length > 0 || null != p && p.length > 0) && V(v, e, r, p, f)), u.A.clearAll(t.id, y.C.FirstThreadMessage)
  }, [t, n, i, c, o, s, d, f])
}

function U(e, t, n, r, i) {
  return F(e, [], true, () => a.Bo.post({
    url: w.Rsh.CHANNEL_THREADS(e.id),
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
      [E, b] = (0, g.A)(e);
    E && (e = b, m = (0, i.UI)(m, w.pr7.SUPPRESS_NOTIFICATIONS));
    let O = (0, S.Gl)(t, null),
      v = w.Rsh.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
      A = {
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
      h = e.uploaderFile, A.message.attachments = e.files.map((e, t) => (0, I.OW)(e, t))
    } catch (i) {
      let {
        file: e,
        code: n,
        reason: r
      } = i;
      throw (0, _.k)({
        file: e,
        guildId: t.getGuildId(),
        analyticsLocations: null != s ? s : [],
        code: n,
        reason: r
      }), i
    }
    let T = await F(t, s, h, () => a.Bo.post({
      url: v,
      body: A,
      rejectWithError: false
    }));
    return l.A.clearDraft(t.id, y.C.ThreadSettings), l.A.clearDraft(t.id, y.C.FirstThreadMessage), u.A.clearAll(t.id, y.C.FirstThreadMessage), (0, p.Lj)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: T.id
    }), null == c || c(T), T
  }, [t, n, o, c, s, d])
}

function V(e, t, n, r, i) {
  if (null != i && null != r && r.length > 0) i(e, r, t, n);
  else if (null != n && n.length > 0) return c.A.sendStickers(e.id, n, t, {
    location: R.Hx.THREAD_CREATION
  });
  else return c.A.sendMessage(e.id, h.Ay.parse(e, t), true, {
    location: R.Hx.THREAD_CREATION
  })
}
async function F(e, t, n, r) {
  let i, a = e.isForumLikeChannel();
  try {
    i = await r(), null == i.body ? s.A.show({
      title: P.intl.string(P.t.j2d6Km),
      body: P.intl.string(P.t.fEptJP)
    }) : (o.h.dispatch({
      type: "SLOWMODE_RESET_COOLDOWN",
      slowmodeType: O.R.CreateThread,
      channelId: e.id
    }), o.h.dispatch({
      type: "THREAD_CREATE_LOCAL",
      channelId: i.body.id
    }))
  } catch (r) {
    var l, u, p, h, g, y, b, A, I;
    if ((null == (l = r.body) ? true : l.code) === w.t02.TOO_MANY_THREADS) s.A.show({
      title: a ? P.intl.string(P.t.vWNFkx) : P.intl.string(P.t["1KEdvB"]),
      body: a ? P.intl.string(P.t.KGaiEK) : P.intl.string(P.t.P0wT5S)
    });
    else if ((null == (u = r.body) ? true : u.code) === w.t02.TOO_MANY_ANNOUNCEMENT_THREADS) s.A.show({
      title: P.intl.string(P.t["1KEdvB"]),
      body: P.intl.string(P.t.jDMxz2)
    });
    else if ((null == (p = r.body) ? true : p.code) === w.t02.SLOWMODE_RATE_LIMITED) {
      let t = null != (y = r.body.retry_after) ? y : 0;
      t > 0 && o.h.dispatch({
        type: "SLOWMODE_SET_COOLDOWN",
        channelId: e.id,
        slowmodeType: O.R.CreateThread,
        cooldownMs: t * v.A.Millis.SECOND
      })
    } else if (429 === r.status) s.A.show({
      title: a ? P.intl.string(P.t.vWNFkx) : P.intl.string(P.t["1KEdvB"]),
      body: P.intl.string(P.t.Whhv4w)
    });
    else if (N.$j.has(null == (h = r.body) ? true : h.code)) throw r;
    else if (N.F4.has(null == (g = r.body) ? true : g.code)) {
      if (null != n)
        if ((null == (b = r.body) ? true : b.code) === w.t02.EXPLICIT_CONTENT) {
          let t = (0, m.m)();
          null != r.body.attachments && r.body.attachments.length > 0 && (o.h.dispatch({
            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
            messageId: t,
            channelId: e.id,
            attachments: r.body.attachments
          }), (0, f.A)(e.id, t))
        } else(0, _.k)({
          file: n,
          guildId: e.getGuildId(),
          analyticsLocations: null != t ? t : [],
          code: null == (A = r.body) ? true : A.code,
          reason: null == (I = r.body) ? true : I.reason
        });
      return new Promise((e, t) => {
        null == r.body && t(), d.A.addConditionalChangeListener(() => {
          let n = d.A.getAndDeleteMostRecentUserCreatedThreadId();
          if (null != n) {
            let r = E.A.getChannel(n);
            return o.h.wait(() => {
              null == r ? t() : e(r)
            }), false
          }
        })
      })
    } else s.A.show({
      title: P.intl.string(P.t.j2d6Km),
      body: P.intl.string(P.t.fEptJP)
    })
  }
  let S = await new Promise((e, t) => {
    null == i.body && t(), E.A.addConditionalChangeListener(() => {
      let t = E.A.getChannel(i.body.id);
      if (null != t) return o.h.wait(() => {
        e(t)
      }), false
    })
  });
  try {
    await c.A.fetchMessages({
      channelId: S.id,
      limit: w.EMb
    })
  } catch (e) {}
  return S
}
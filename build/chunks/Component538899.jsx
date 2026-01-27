/** Chunk was on 39289 **/
/** chunk id: 538899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk732955 = require("./732955.js"),
  Chunk843472 = require("./843472.js"),
  Chunk608299 = require("./608299.js"),
  Chunk425059 = require("./425059.js"),
  Chunk390248 = require("./390248.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk453771 = require("./453771.js"),
  Chunk661191 = require("./661191.js"),
  Chunk292348 = require("./292348.js"),
  Chunk518960 = require("./518960.js"),
  Chunk382287 = require("./382287.js"),
  Chunk853742 = require("./853742.js"),
  Chunk835369 = require("./835369.jsx"),
  Chunk218152 = require("./218152.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk304439 = require("./304439.js");
async function k(e) {
  var t, n, a;
  let o, {
      thread: i,
      attachments: r,
      setIsUploading: l,
      guild: d,
      onClose: f
    } = e,
    h = x.default.castChannelIdAsMessageId(i.id),
    v = new b.A;
  v.on("progress", e => {
    let t = (0, g.o2)(d.id);
    e.currentSize > t && (v.cancel(), l(false), f(), (0, j.V)(i, (0, C.LJ)(r)))
  });
  let T = m.A.getMessage(i.id, h),
    w = null != T ? T.attachments : [];
  l(true);
  try {
    o = await v.uploadFiles(r)
  } catch (e) {
    l(false);
    return
  }
  let A = [...w, ...null != (t = o.map((e, t) => (0, y.OW)(e, t))) ? t : []];
  try {
    await c.Bo.patch({
      url: E.Rsh.MESSAGE(i.id, h),
      body: {
        attachments: A
      },
      rejectWithError: false
    }), f(), _.A.clearAll(i.id, p.C.ChannelMessage)
  } catch (e) {
    l(false), (null == (n = e.body) ? true : n.code) === E.t02.EXPLICIT_CONTENT && (f(), s.A.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? true : a.attachments, u.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), _.A.clearAll(i.id, p.C.ChannelMessage))
  }
}

function O(e) {
  var t;
  let {
    threadId: n,
    attachments: c,
    sendMessage: s,
    transitionState: _,
    onClose: b
  } = e, u = (0, r.bG)([f.A], () => f.A.getChannel(n), [n]), p = (0, r.bG)([h.A], () => h.A.getGuild(null == u ? true : u.getGuildId()), [u]), m = (0, r.bG)([f.A], () => f.A.getChannel(null == u ? true : u.parent_id), [u]), g = null == (t = c[0]) ? true : t.item, [x, y] = o.useState(null);
  o.useEffect(() => {
    null != g && (0, d.JF)(g.file, (e, t) => y(e), A.tE)
  }, [g]);
  let j = null != g && null != x ? {
      src: x,
      width: T.T5,
      height: T.Co,
      spoiler: c[0].spoiler,
      alt: c[0].description
    } : null,
    [C, E] = o.useState(false),
    O = o.useCallback(() => {
      (0, v.jh)({
        added: false
      }), s(), b()
    }, [s, b]),
    M = o.useCallback(() => {
      null != u && null != p && ((0, v.jh)({
        added: true
      }), k({
        thread: u,
        attachments: c,
        setIsUploading: E,
        guild: p,
        onClose: b
      }))
    }, [u, c, E, p, b]);
  return null == m ? null : (0, a.jsx)(i.Modal, {
    title: I.intl.string(I.t["+SZF6S"]),
    subtitle: I.intl.string(I.t["0Ycgw5"]),
    transitionState: _,
    onClose: b,
    actionBarInput: (0, a.jsx)(l.QWc, {
      variant: "secondary",
      disabled: C,
      onClick: b,
      text: I.intl.string(I.t["ETE/oC"])
    }),
    actions: [{
      variant: "secondary",
      text: I.intl.string(I.t["8rKVHL"]),
      disabled: C,
      onClick: O
    }, {
      variant: "primary",
      text: I.intl.string(I.t.d611xH),
      loading: C,
      onClick: M,
      autoFocus: true
    }],
    children: (0, a.jsx)(w.Cp, {
      channel: m,
      children: (0, a.jsx)(T.Ay, {
        threadId: n,
        goToThread: A.tE,
        overrideMedia: j,
        className: S.u
      })
    })
  })
}
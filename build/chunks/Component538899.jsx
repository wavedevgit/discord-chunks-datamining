/** Chunk was on 91798 **/
/** chunk id: 538899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
async function P(e) {
  var t, n, l;
  let a, {
      thread: c,
      attachments: r,
      setIsUploading: d,
      guild: b,
      onClose: p
    } = e,
    g = y.default.castChannelIdAsMessageId(c.id),
    A = new f.A;
  A.on("progress", e => {
    let t = (0, m.o2)(b.id);
    e.currentSize > t && (A.cancel(), d(false), p(), (0, j.V)(c, (0, v.LJ)(r)))
  });
  let C = _.A.getMessage(c.id, g),
    E = null != C ? C.attachments : [];
  d(true);
  try {
    a = await A.uploadFiles(r)
  } catch (e) {
    d(false);
    return
  }
  let w = [...E, ...null != (t = a.map((e, t) => (0, x.OW)(e, t))) ? t : []];
  try {
    await i.Bo.patch({
      url: O.Rsh.MESSAGE(c.id, g),
      body: {
        attachments: w
      },
      rejectWithError: false
    }), p(), o.A.clearAll(c.id, h.C.ChannelMessage)
  } catch (e) {
    d(false), (null == (n = e.body) ? true : n.code) === O.t02.EXPLICIT_CONTENT && (p(), s.A.sendExplicitMediaClydeError(c.id, null == (l = e.body) ? true : l.attachments, u.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), o.A.clearAll(c.id, h.C.ChannelMessage))
  }
}

function T(e) {
  var t;
  let {
    threadId: n,
    attachments: i,
    sendMessage: s,
    transitionState: o,
    onClose: f
  } = e, u = (0, r.bG)([p.A], () => p.A.getChannel(n), [n]), h = (0, r.bG)([g.A], () => g.A.getGuild(null == u ? true : u.getGuildId()), [u]), _ = (0, r.bG)([p.A], () => p.A.getChannel(null == u ? true : u.parent_id), [u]), m = null == (t = i[0]) ? true : t.item, [y, x] = a.useState(null);
  a.useEffect(() => {
    null != m && (0, b.JF)(m.file, (e, t) => x(e), w.tE)
  }, [m]);
  let j = null != m && null != y ? {
      src: y,
      width: C.T5,
      height: C.Co,
      spoiler: i[0].spoiler,
      alt: i[0].description
    } : null,
    [v, O] = a.useState(false),
    T = a.useCallback(() => {
      (0, A.jh)({
        added: false
      }), s(), f()
    }, [s, f]),
    k = a.useCallback(() => {
      null != u && null != h && ((0, A.jh)({
        added: true
      }), P({
        thread: u,
        attachments: i,
        setIsUploading: O,
        guild: h,
        onClose: f
      }))
    }, [u, i, O, h, f]);
  return null == _ ? null : (0, l.jsx)(c.Modal, {
    title: S.intl.string(S.t["+SZF6S"]),
    subtitle: S.intl.string(S.t["0Ycgw5"]),
    transitionState: o,
    onClose: f,
    actionBarInput: (0, l.jsx)(d.QWc, {
      variant: "secondary",
      disabled: v,
      onClick: f,
      text: S.intl.string(S.t["ETE/oC"])
    }),
    actions: [{
      variant: "secondary",
      text: S.intl.string(S.t["8rKVHL"]),
      disabled: v,
      onClick: T
    }, {
      variant: "primary",
      text: S.intl.string(S.t.d611xH),
      loading: v,
      onClick: k,
      autoFocus: true
    }],
    children: (0, l.jsx)(E.Cp, {
      channel: _,
      children: (0, l.jsx)(C.Ay, {
        threadId: n,
        goToThread: w.tE,
        overrideMedia: j,
        className: M.u
      })
    })
  })
}
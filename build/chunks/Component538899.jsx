/** Chunk was on 91798 **/
/** chunk id: 538899, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => S
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
async function M(e) {
  var t, a, n;
  let l, {
      thread: r,
      attachments: i,
      setIsUploading: s,
      guild: f,
      onClose: p
    } = e,
    g = y.default.castChannelIdAsMessageId(r.id),
    C = new d.A;
  C.on("progress", e => {
    let t = (0, m.o2)(f.id);
    e.currentSize > t && (C.cancel(), s(false), p(), (0, v.V)(r, (0, j.LJ)(i)))
  });
  let w = h.A.getMessage(r.id, g),
    A = null != w ? w.attachments : [];
  s(true);
  try {
    l = await C.uploadFiles(i)
  } catch (e) {
    s(false);
    return
  }
  let O = [...A, ...null != (t = l.map((e, t) => (0, x.OW)(e, t))) ? t : []];
  try {
    await o.Bo.patch({
      url: E.Rsh.MESSAGE(r.id, g),
      body: {
        attachments: O
      },
      rejectWithError: false
    }), p(), u.A.clearAll(r.id, _.C.ChannelMessage)
  } catch (e) {
    s(false), (null == (a = e.body) ? true : a.code) === E.t02.EXPLICIT_CONTENT && (p(), c.A.sendExplicitMediaClydeError(r.id, null == (n = e.body) ? true : n.attachments, b.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.A.clearAll(r.id, _.C.ChannelMessage))
  }
}

function S(e) {
  var t;
  let {
    threadId: a,
    attachments: o,
    sendMessage: c,
    transitionState: u,
    onClose: d
  } = e, b = (0, i.bG)([p.A], () => p.A.getChannel(a), [a]), _ = (0, i.bG)([g.A], () => g.A.getGuild(null == b ? true : b.getGuildId()), [b]), h = (0, i.bG)([p.A], () => p.A.getChannel(null == b ? true : b.parent_id), [b]), m = null == (t = o[0]) ? true : t.item, [y, x] = l.useState(null);
  l.useEffect(() => {
    null != m && (0, f.JF)(m.file, (e, t) => x(e), O.tE)
  }, [m]);
  let v = null != m && null != y ? {
      src: y,
      width: w.T5,
      height: w.Co,
      spoiler: o[0].spoiler,
      alt: o[0].description
    } : null,
    [j, E] = l.useState(false),
    S = l.useCallback(() => {
      (0, C.jh)({
        added: false
      }), c(), d()
    }, [c, d]),
    P = l.useCallback(() => {
      null != b && null != _ && ((0, C.jh)({
        added: true
      }), M({
        thread: b,
        attachments: o,
        setIsUploading: E,
        guild: _,
        onClose: d
      }))
    }, [b, o, E, _, d]);
  return null == h ? null : (0, n.jsx)(r.Modal, {
    title: T.intl.string(T.t["+SZF6S"]),
    subtitle: T.intl.string(T.t["0Ycgw5"]),
    transitionState: u,
    onClose: d,
    actionBarInput: (0, n.jsx)(s.QWc, {
      variant: "secondary",
      disabled: j,
      onClick: d,
      text: T.intl.string(T.t["ETE/oC"])
    }),
    actions: [{
      variant: "secondary",
      text: T.intl.string(T.t["8rKVHL"]),
      disabled: j,
      onClick: S
    }, {
      variant: "primary",
      text: T.intl.string(T.t.d611xH),
      loading: j,
      onClick: P,
      autoFocus: true
    }],
    children: (0, n.jsx)(A.Cp, {
      channel: h,
      children: (0, n.jsx)(w.Ay, {
        threadId: a,
        goToThread: O.tE,
        overrideMedia: v,
        className: I.u
      })
    })
  })
}
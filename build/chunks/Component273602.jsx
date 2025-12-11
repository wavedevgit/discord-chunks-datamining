/** Chunk was on 27381 **/
/** chunk id: 273602, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk159691 = require("./159691.js"),
  Chunk904245 = require("./904245.js"),
  Chunk166459 = require("./166459.js"),
  Chunk680287 = require("./680287.js"),
  Chunk247206 = require("./247206.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk403182 = require("./403182.js"),
  Chunk709054 = require("./709054.js"),
  Chunk861990 = require("./861990.js"),
  Chunk127654 = require("./127654.js"),
  Chunk979956 = require("./979956.js"),
  Chunk228392 = require("./228392.js"),
  Chunk404616 = require("./404616.jsx"),
  Chunk470623 = require("./470623.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407157 = require("./407157.js");
async function P(e) {
  var t, i, n;
  let s, {
      thread: a,
      attachments: o,
      setIsUploading: r,
      guild: g,
      onClose: f
    } = e,
    p = y.default.castChannelIdAsMessageId(a.id),
    w = new h.Z;
  w.on("progress", e => {
    let t = (0, v.dg)(g.id);
    e.currentSize > t && (w.cancel(), r(false), f(), (0, S.G)(a, (0, x.KZ)(o)))
  });
  let T = m.Z.getMessage(a.id, p),
    O = null != T ? T.attachments : [];
  r(true);
  try {
    s = await w.uploadFiles(o)
  } catch (e) {
    r(false);
    return
  }
  let I = [...O, ...null != (t = s.map((e, t) => (0, C.B)(e, t))) ? t : []];
  try {
    await l.tn.patch({
      url: F.ANM.MESSAGE(a.id, p),
      body: {
        attachments: I
      },
      rejectWithError: false
    }), f(), d.Z.clearAll(a.id, b.d.ChannelMessage)
  } catch (e) {
    r(false), (null == (i = e.body) ? true : i.code) === F.evJ.EXPLICIT_CONTENT && (f(), c.Z.sendExplicitMediaClydeError(a.id, null == (n = e.body) ? true : n.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), d.Z.clearAll(a.id, b.d.ChannelMessage))
  }
}

function M(e) {
  var t;
  let {
    threadId: i,
    attachments: l,
    sendMessage: c,
    transitionState: d,
    onClose: h
  } = e, u = (0, o.e7)([f.Z], () => f.Z.getChannel(i), [i]), b = (0, o.e7)([p.Z], () => p.Z.getGuild(null == u ? true : u.getGuildId()), [u]), m = (0, o.e7)([f.Z], () => f.Z.getChannel(null == u ? true : u.parent_id), [u]), v = null == (t = l[0]) ? true : t.item, [y, C] = s.useState(null);
  s.useEffect(() => {
    null != v && (0, g.Fq)(v.file, (e, t) => C(e), I.dG)
  }, [v]);
  let S = null != v && null != y ? {
      src: y,
      width: T.TJ,
      height: T.Lp,
      spoiler: l[0].spoiler,
      alt: l[0].description
    } : null,
    [x, F] = s.useState(false),
    M = s.useCallback(() => {
      (0, w.xI)({
        added: false
      }), c(), h()
    }, [c, h]),
    Z = s.useCallback(() => {
      null != u && null != b && ((0, w.xI)({
        added: true
      }), P({
        thread: u,
        attachments: l,
        setIsUploading: F,
        guild: b,
        onClose: h
      }))
    }, [u, l, F, b, h]);
  return null == m ? null : (0, n.jsx)(a.Modal, {
    title: j.intl.string(j.t["+SZF6S"]),
    subtitle: j.intl.string(j.t["0Ycgw5"]),
    transitionState: d,
    onClose: h,
    actionBarInput: (0, n.jsx)(r.Avr, {
      variant: "secondary",
      disabled: x,
      onClick: h,
      text: j.intl.string(j.t["ETE/oC"])
    }),
    actions: [{
      variant: "secondary",
      text: j.intl.string(j.t["8rKVHL"]),
      disabled: x,
      onClick: M
    }, {
      variant: "primary",
      text: j.intl.string(j.t.d611xH),
      loading: x,
      onClick: Z,
      autoFocus: true
    }],
    children: (0, n.jsx)(O.oL, {
      channel: m,
      children: (0, n.jsx)(T.ZP, {
        threadId: i,
        goToThread: I.dG,
        overrideMedia: S,
        className: E.forumPost
      })
    })
  })
}
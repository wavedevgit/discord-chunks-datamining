/** Chunk was on 48890 **/
/** chunk id: 273602, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk646632 = require("./646632.js");
async function E(e) {
  var t, i, n;
  let s, {
      thread: a,
      attachments: o,
      setIsUploading: r,
      guild: g,
      onClose: p
    } = e,
    f = _.default.castChannelIdAsMessageId(a.id),
    x = new c.Z;
  x.on("progress", e => {
    let t = (0, v.dg)(g.id);
    e.currentSize > t && (x.cancel(), r(false), p(), (0, C.G)(a, (0, S.KZ)(o)))
  });
  let w = m.Z.getMessage(a.id, f),
    T = null != w ? w.attachments : [];
  r(true);
  try {
    s = await x.uploadFiles(o)
  } catch (e) {
    r(false);
    return
  }
  let F = [...T, ...null != (t = s.map((e, t) => (0, y.B)(e, t))) ? t : []];
  try {
    await l.tn.patch({
      url: O.ANM.MESSAGE(a.id, f),
      body: {
        attachments: F
      },
      rejectWithError: false
    }), p(), h.Z.clearAll(a.id, b.d.ChannelMessage)
  } catch (e) {
    r(false), (null == (i = e.body) ? true : i.code) === O.evJ.EXPLICIT_CONTENT && (p(), d.Z.sendExplicitMediaClydeError(a.id, null == (n = e.body) ? true : n.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), h.Z.clearAll(a.id, b.d.ChannelMessage))
  }
}

function P(e) {
  var t;
  let {
    threadId: i,
    attachments: l,
    sendMessage: d,
    transitionState: h,
    onClose: c
  } = e, u = (0, o.e7)([p.Z], () => p.Z.getChannel(i), [i]), b = (0, o.e7)([f.Z], () => f.Z.getGuild(null == u ? true : u.getGuildId()), [u]), m = (0, o.e7)([p.Z], () => p.Z.getChannel(null == u ? true : u.parent_id), [u]), v = null == (t = l[0]) ? true : t.item, [_, y] = s.useState(null);
  s.useEffect(() => {
    null != v && (0, g.Fq)(v.file, (e, t) => y(e), F.dG)
  }, [v]);
  let C = null != v && null != _ ? {
      src: _,
      width: w.TJ,
      height: w.Lp,
      spoiler: l[0].spoiler,
      alt: l[0].description
    } : null,
    [S, O] = s.useState(false),
    P = s.useCallback(() => {
      (0, x.xI)({
        added: false
      }), d(), c()
    }, [d, c]),
    M = s.useCallback(() => {
      null != u && null != b && ((0, x.xI)({
        added: true
      }), E({
        thread: u,
        attachments: l,
        setIsUploading: O,
        guild: b,
        onClose: c
      }))
    }, [u, l, O, b, c]);
  return null == m ? null : (0, n.jsx)(a.Modal, {
    title: I.intl.string(I.t["+SZF6S"]),
    subtitle: I.intl.string(I.t["0Ycgw5"]),
    transitionState: h,
    onClose: c,
    actionBarInput: (0, n.jsx)(r.Avr, {
      variant: "secondary",
      disabled: S,
      onClick: c,
      text: I.intl.string(I.t["ETE/oC"])
    }),
    actions: [{
      variant: "secondary",
      text: I.intl.string(I.t["8rKVHL"]),
      disabled: S,
      onClick: P
    }, {
      variant: "primary",
      text: I.intl.string(I.t.d611xH),
      loading: S,
      onClick: M,
      autoFocus: true
    }],
    children: (0, n.jsx)(T.oL, {
      channel: m,
      children: (0, n.jsx)(w.ZP, {
        threadId: i,
        goToThread: F.dG,
        overrideMedia: C,
        className: j.forumPost
      })
    })
  })
}
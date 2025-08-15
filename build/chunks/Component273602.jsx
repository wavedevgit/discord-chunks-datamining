/** Chunk was on 6410 **/
/** chunk id: 273602, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk179538 = require("./179538.jsx"),
  Chunk82659 = require("./82659.jsx"),
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
async function P(e) {
  var t, n, a;
  let o, {
      thread: i,
      attachments: c,
      setIsUploading: l,
      guild: p,
      onClose: _
    } = e,
    g = T.default.castChannelIdAsMessageId(i.id),
    v = new d.Z;
  v.on("progress", e => {
    let t = (0, h.dg)(p.id);
    e.currentSize > t && (v.cancel(), l(false), _(), (0, C.G)(i, (0, O.KZ)(c)))
  });
  let I = b.Z.getMessage(i.id, g),
    E = null != I ? I.attachments : [];
  l(true);
  try {
    o = await v.uploadFiles(c)
  } catch (e) {
    l(false);
    return
  }
  let S = [...E, ...null != (t = o.map((e, t) => (0, y.B)(e, t))) ? t : []];
  try {
    await r.tn.patch({
      url: x.ANM.MESSAGE(i.id, g),
      body: {
        attachments: S
      },
      rejectWithError: false
    }), _(), u.Z.clearAll(i.id, f.d.ChannelMessage)
  } catch (e) {
    l(false), (null == (n = e.body) ? true : n.code) === x.evJ.EXPLICIT_CONTENT && (_(), s.Z.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? true : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.Z.clearAll(i.id, f.d.ChannelMessage))
  }
}

function M(e) {
  var t;
  let {
    threadId: n,
    attachments: r,
    sendMessage: s,
    transitionState: u,
    onClose: d
  } = e, m = (0, i.e7)([_.Z], () => _.Z.getChannel(n), [n]), f = (0, i.e7)([g.Z], () => g.Z.getGuild(null == m ? true : m.getGuildId()), [m]), b = (0, i.e7)([_.Z], () => _.Z.getChannel(null == m ? true : m.parent_id), [m]), h = null == (t = r[0]) ? true : t.item, [T, y] = o.useState(null);
  o.useEffect(() => {
    null != h && (0, p.Fq)(h.file, (e, t) => y(e), S.dG)
  }, [h]);
  let C = null != h && null != T ? {
      src: T,
      width: I.TJ,
      height: I.Lp,
      spoiler: r[0].spoiler,
      alt: r[0].description
    } : null,
    [O, x] = o.useState(false),
    M = o.useCallback(() => {
      (0, v.xI)({
        added: false
      }), s(), d()
    }, [s, d]),
    A = o.useCallback(() => {
      null != m && null != f && ((0, v.xI)({
        added: true
      }), P({
        thread: m,
        attachments: r,
        setIsUploading: x,
        guild: f,
        onClose: d
      }))
    }, [m, r, x, f, d]);
  return null == b ? null : (0, a.jsx)(l.Modal, {
    title: j.intl.string(j.t["+SZF6e"]),
    subtitle: j.intl.string(j.t["0Ycgw8"]),
    transitionState: u,
    onClose: d,
    actionBarInput: (0, a.jsx)(c.A, {
      variant: "secondary",
      disabled: O,
      onClick: d,
      text: j.intl.string(j.t["ETE/oK"])
    }),
    actions: [{
      variant: "secondary",
      text: j.intl.string(j.t["8rKVHB"]),
      disabled: O,
      onClick: M
    }, {
      variant: "primary",
      text: j.intl.string(j.t.d611xM),
      loading: O,
      onClick: A,
      autoFocus: true
    }],
    children: (0, a.jsx)(E.oL, {
      channel: b,
      children: (0, a.jsx)(I.ZP, {
        threadId: n,
        goToThread: S.dG,
        overrideMedia: C,
        className: w.forumPost
      })
    })
  })
}
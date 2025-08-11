/** Chunk was on 85664 **/
/** chunk id: 273602, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => A
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
  Chunk813197 = require("./813197.js"),
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
  Chunk404616 = require("./404616.js"),
  Chunk470623 = require("./470623.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.js"),
  Chunk994436 = require("./994436.js");
async function Z(t) {
  var e, i, s;
  let n, {
      thread: a,
      attachments: r,
      setIsUploading: l,
      guild: g,
      onClose: p
    } = t,
    m = C.default.castChannelIdAsMessageId(a.id),
    y = new u.Z;
  y.on("progress", t => {
    let e = (0, v.dg)(g.id);
    t.currentSize > e && (y.cancel(), l(false), p(), (0, _.G)(a, (0, T.KZ)(r)))
  });
  let F = b.Z.getMessage(a.id, m),
    w = null != F ? F.attachments : [];
  l(true);
  try {
    n = await y.uploadFiles(r)
  } catch (t) {
    l(false);
    return
  }
  let O = [...w, ...null != (e = n.map((t, e) => (0, S.B)(t, e))) ? e : []];
  try {
    await o.tn.patch({
      url: x.ANM.MESSAGE(a.id, m),
      body: {
        attachments: O
      },
      rejectWithError: false
    }), p(), d.Z.clearAll(a.id, f.d.ChannelMessage)
  } catch (t) {
    l(false), (null == (i = t.body) ? true : i.code) === x.evJ.EXPLICIT_CONTENT && (p(), h.Z.sendExplicitMediaClydeError(a.id, null == (s = t.body) ? true : s.attachments, c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), d.Z.clearAll(a.id, f.d.ChannelMessage))
  }
}

function A(t) {
  var e;
  let {
    threadId: i,
    attachments: o,
    sendMessage: h,
    transitionState: d,
    onClose: u
  } = t, c = (0, a.e7)([p.Z], () => p.Z.getChannel(i), [i]), f = (0, a.e7)([m.Z], () => m.Z.getGuild(null == c ? true : c.getGuildId()), [c]), b = (0, a.e7)([p.Z], () => p.Z.getChannel(null == c ? true : c.parent_id), [c]), v = null == (e = o[0]) ? true : e.item, [C, S] = n.useState(null);
  n.useEffect(() => {
    null != v && (0, g.Fq)(v.file, (t, e) => S(t), O.dG)
  }, [v]);
  let _ = null != v && null != C ? {
      src: C,
      width: F.TJ,
      height: F.Lp,
      spoiler: o[0].spoiler,
      alt: o[0].description
    } : null,
    [T, x] = n.useState(false),
    A = n.useCallback(() => {
      (0, y.xI)({
        added: false
      }), h(), u()
    }, [h, u]),
    M = n.useCallback(() => {
      null != c && null != f && ((0, y.xI)({
        added: true
      }), Z({
        thread: c,
        attachments: o,
        setIsUploading: x,
        guild: f,
        onClose: u
      }))
    }, [c, o, x, f, u]);
  return null == b ? null : <l.Modal title={I.intl.string(I.t["+SZF6e"])} subtitle={I.intl.string(I.t["0Ycgw8"])} transitionState={d} onClose={u} actionBarInput={(0, s.jsx)(r.A, {
      variant: "secondary",
      disabled: T,
      onClick: u,
      text: I.intl.string(I.t["ETE/oK"])
    })} actions={[{
      variant: "secondary",
      text: I.intl.string(I.t["8rKVHB"]),
      disabled: T,
      onClick: A
    }, {
      variant: "primary",
      text: I.intl.string(I.t.d611xM),
      loading: T,
      onClick: M,
      autoFocus: true
    }]}><w.oL channel={b}><F.ZP threadId={i} goToThread={O.dG} overrideMedia={_} className={E.forumPost} /></w.oL></l.Modal>
}
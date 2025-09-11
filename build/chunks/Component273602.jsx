/** Chunk was on 77756 **/
/** chunk id: 273602, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk82659 = require("./82659.jsx"),
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
  Chunk398203 = require("./398203.js");
async function P(e) {
  var t, n, a;
  let o, {
      thread: i,
      attachments: r,
      setIsUploading: s,
      guild: f,
      onClose: g
    } = e,
    _ = y.default.castChannelIdAsMessageId(i.id),
    C = new d.Z;
  C.on("progress", e => {
    let t = (0, m.dg)(f.id);
    e.currentSize > t && (C.cancel(), s(false), g(), (0, v.G)(i, (0, w.KZ)(r)))
  });
  let j = h.Z.getMessage(i.id, _),
    T = null != j ? j.attachments : [];
  s(true);
  try {
    o = await C.uploadFiles(r)
  } catch (e) {
    s(false);
    return
  }
  let O = [...T, ...null != (t = o.map((e, t) => (0, x.B)(e, t))) ? t : []];
  try {
    await l.tn.patch({
      url: I.ANM.MESSAGE(i.id, _),
      body: {
        attachments: O
      },
      rejectWithError: false
    }), g(), u.Z.clearAll(i.id, p.d.ChannelMessage)
  } catch (e) {
    s(false), (null == (n = e.body) ? true : n.code) === I.evJ.EXPLICIT_CONTENT && (g(), c.Z.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? true : a.attachments, b.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.Z.clearAll(i.id, p.d.ChannelMessage))
  }
}

function S(e) {
  var t;
  let {
    threadId: n,
    attachments: l,
    sendMessage: c,
    transitionState: u,
    onClose: d
  } = e, b = (0, i.e7)([g.Z], () => g.Z.getChannel(n), [n]), p = (0, i.e7)([_.Z], () => _.Z.getGuild(null == b ? true : b.getGuildId()), [b]), h = (0, i.e7)([g.Z], () => g.Z.getChannel(null == b ? true : b.parent_id), [b]), m = null == (t = l[0]) ? true : t.item, [y, x] = o.useState(null);
  o.useEffect(() => {
    null != m && (0, f.Fq)(m.file, (e, t) => x(e), O.dG)
  }, [m]);
  let v = null != m && null != y ? {
      src: y,
      width: j.TJ,
      height: j.Lp,
      spoiler: l[0].spoiler,
      alt: l[0].description
    } : null,
    [w, I] = o.useState(false),
    S = o.useCallback(() => {
      (0, C.xI)({
        added: false
      }), c(), d()
    }, [c, d]),
    k = o.useCallback(() => {
      null != b && null != p && ((0, C.xI)({
        added: true
      }), P({
        thread: b,
        attachments: l,
        setIsUploading: I,
        guild: p,
        onClose: d
      }))
    }, [b, l, I, p, d]);
  return null == h ? null : (0, a.jsx)(r.Modal, {
    title: M.intl.string(M.t["+SZF6e"]),
    subtitle: M.intl.string(M.t["0Ycgw8"]),
    transitionState: u,
    onClose: d,
    actionBarInput: (0, a.jsx)(s.Avr, {
      variant: "secondary",
      disabled: w,
      onClick: d,
      text: M.intl.string(M.t["ETE/oK"])
    }),
    actions: [{
      variant: "secondary",
      text: M.intl.string(M.t["8rKVHB"]),
      disabled: w,
      onClick: S
    }, {
      variant: "primary",
      text: M.intl.string(M.t.d611xM),
      loading: w,
      onClick: k,
      autoFocus: true
    }],
    children: (0, a.jsx)(T.oL, {
      channel: h,
      children: (0, a.jsx)(j.ZP, {
        threadId: n,
        goToThread: O.dG,
        overrideMedia: v,
        className: E.forumPost
      })
    })
  })
}
/** Chunk was on 96551 **/
/** chunk id: 273602, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => k
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
async function S(e) {
  var t, a, n;
  let c, {
      thread: l,
      attachments: o,
      setIsUploading: r,
      guild: b,
      onClose: g
    } = e,
    h = x.default.castChannelIdAsMessageId(l.id),
    j = new u.Z;
  j.on("progress", e => {
    let t = (0, y.dg)(b.id);
    e.currentSize > t && (j.cancel(), r(false), g(), (0, w.G)(l, (0, C.KZ)(o)))
  });
  let T = m.Z.getMessage(l.id, h),
    I = null != T ? T.attachments : [];
  r(true);
  try {
    c = await j.uploadFiles(o)
  } catch (e) {
    r(false);
    return
  }
  let M = [...I, ...null != (t = c.map((e, t) => (0, v.B)(e, t))) ? t : []];
  try {
    await i.tn.patch({
      url: O.ANM.MESSAGE(l.id, h),
      body: {
        attachments: M
      },
      rejectWithError: false
    }), g(), d.Z.clearAll(l.id, p.d.ChannelMessage)
  } catch (e) {
    r(false), (null == (a = e.body) ? true : a.code) === O.evJ.EXPLICIT_CONTENT && (g(), s.Z.sendExplicitMediaClydeError(l.id, null == (n = e.body) ? true : n.attachments, f.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), d.Z.clearAll(l.id, p.d.ChannelMessage))
  }
}

function k(e) {
  var t;
  let {
    threadId: a,
    attachments: i,
    sendMessage: s,
    transitionState: d,
    onClose: u
  } = e, f = (0, o.e7)([g.Z], () => g.Z.getChannel(a), [a]), p = (0, o.e7)([h.Z], () => h.Z.getGuild(null == f ? true : f.getGuildId()), [f]), m = (0, o.e7)([g.Z], () => g.Z.getChannel(null == f ? true : f.parent_id), [f]), y = null == (t = i[0]) ? true : t.item, [x, v] = c.useState(null);
  c.useEffect(() => {
    null != y && (0, b.Fq)(y.file, (e, t) => v(e), M.dG)
  }, [y]);
  let w = null != y && null != x ? {
      src: x,
      width: T.TJ,
      height: T.Lp,
      spoiler: i[0].spoiler,
      alt: i[0].description
    } : null,
    [C, O] = c.useState(false),
    k = c.useCallback(() => {
      (0, j.xI)({
        added: false
      }), s(), u()
    }, [s, u]),
    Z = c.useCallback(() => {
      null != f && null != p && ((0, j.xI)({
        added: true
      }), S({
        thread: f,
        attachments: i,
        setIsUploading: O,
        guild: p,
        onClose: u
      }))
    }, [f, i, O, p, u]);
  return null == m ? null : (0, n.jsx)(l.Modal, {
    title: E.intl.string(E.t["+SZF6S"]),
    subtitle: E.intl.string(E.t["0Ycgw5"]),
    transitionState: d,
    onClose: u,
    actionBarInput: (0, n.jsx)(r.Avr, {
      variant: "secondary",
      disabled: C,
      onClick: u,
      text: E.intl.string(E.t["ETE/oC"])
    }),
    actions: [{
      variant: "secondary",
      text: E.intl.string(E.t["8rKVHL"]),
      disabled: C,
      onClick: k
    }, {
      variant: "primary",
      text: E.intl.string(E.t.d611xH),
      loading: C,
      onClick: Z,
      autoFocus: true
    }],
    children: (0, n.jsx)(I.oL, {
      channel: m,
      children: (0, n.jsx)(T.ZP, {
        threadId: a,
        goToThread: M.dG,
        overrideMedia: w,
        className: P.forumPost
      })
    })
  })
}
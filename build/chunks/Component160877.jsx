/** Chunk was on 91173 **/
/** chunk id: 160877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => O,
  s: () => C
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk470167 = require("./470167.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk572691 = require("./572691.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk406432 = require("./406432.js"),
  Chunk584656 = require("./584656.jsx"),
  Chunk247206 = require("./247206.js"),
  Chunk719548 = require("./719548.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk463300 = require("./463300.js");
let h = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: i
    } = t;
    return null == n ? null : (0, r.jsx)(E, {
      url: n,
      description: i
    })
  },
  b = e => {
    var t, n, i;
    let {
      embed: l
    } = e;
    if (!f.n2.has(l.type)) return null;
    let o = true !== l.video && l.type !== a.h.GIFV ? l.video.url : null != (i = null == (t = l.thumbnail) ? true : t.url) ? i : null == (n = l.image) ? true : n.url;
    return null == o ? null : (0, r.jsx)(E, {
      url: o
    })
  },
  E = e => {
    let {
      url: t,
      description: n
    } = e, i = (0, d.cb)(t);
    return (0, r.jsx)("div", {
      className: _.mediaContainer,
      children: i ? (0, r.jsx)(u.Z, {
        className: o()(_.video, _.media),
        controls: true,
        src: t
      }) : (0, r.jsx)("img", {
        className: o()(_.image, _.media),
        src: t,
        alt: n
      })
    })
  };

function C(e) {
  c.Z.pop(), (0, p.t)({
    id: "explicit-media-false-positive-modal",
    text: g.intl.string(g.t.gFsTKi)
  }), e()
}

function O(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: l,
    analyticsContext: o,
    attachmentPreview: a,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: d,
    onClose: p
  } = e, f = i.useCallback(() => {
    (0, m.aP)({
      action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: o
    }), p()
  }, [t, n, o, p]), _ = i.useCallback(() => {
    null == u || u(), (0, m.aP)({
      action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: t,
      messageId: n,
      context: o
    })
  }, [t, n, o, u]);
  return i.useEffect(() => {
    (0, m.aP)({
      action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n,
      context: o
    })
  }, [t, n, o]), (0, r.jsxs)(s.Modal, {
    transitionState: d,
    onClose: p,
    title: g.intl.string(g.t.TPpVkJ),
    subtitle: g.intl.string(g.t["z4du/P"]),
    actions: [{
      text: g.intl.string(g.t["ETE/oK"]),
      onClick: f,
      variant: "secondary",
      disabled: l
    }, {
      text: g.intl.string(g.t["cY+Ooa"]),
      onClick: _,
      loading: l,
      disabled: l
    }],
    children: [null != a && (0, r.jsx)(h, {
      attachment: a
    }), null != c && (0, r.jsx)(b, {
      embed: c
    })]
  })
}
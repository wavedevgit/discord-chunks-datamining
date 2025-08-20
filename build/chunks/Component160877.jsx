/** Chunk was on 57539 **/
/** chunk id: 160877, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $: () => T,
  s: () => C
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
let E = t => {
    let {
      attachment: e
    } = t, {
      url: n,
      description: a
    } = e;
    return null == n ? null : (0, i.jsx)(x, {
      url: n,
      description: a
    })
  },
  p = t => {
    var e, n, a;
    let {
      embed: o
    } = t;
    if (!I.n2.has(o.type)) return null;
    let l = true !== o.video && o.type !== r.h.GIFV ? o.video.url : null != (a = null == (e = o.thumbnail) ? true : e.url) ? a : null == (n = o.image) ? true : n.url;
    return null == l ? null : (0, i.jsx)(x, {
      url: l
    })
  },
  x = t => {
    let {
      url: e,
      description: n
    } = t, a = (0, d.cb)(e);
    return (0, i.jsx)("div", {
      className: v.mediaContainer,
      children: a ? (0, i.jsx)(u.Z, {
        className: l()(v.video, v.media),
        controls: true,
        src: e
      }) : (0, i.jsx)("img", {
        className: l()(v.image, v.media),
        src: e,
        alt: n
      })
    })
  };

function C(t) {
  c.Z.pop(), (0, f.t)({
    id: "explicit-media-false-positive-modal",
    text: _.intl.string(_.t.gFsTKi)
  }), t()
}

function T(t) {
  let {
    channelId: e,
    messageId: n,
    isReportFalsePositiveLoading: o,
    analyticsContext: l,
    attachmentPreview: r,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: d,
    onClose: f
  } = t, I = a.useCallback(() => {
    (0, m.aP)({
      action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: e,
      messageId: n,
      context: l
    }), f()
  }, [e, n, l, f]), v = a.useCallback(() => {
    null == u || u(), (0, m.aP)({
      action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: e,
      messageId: n,
      context: l
    })
  }, [e, n, l, u]);
  return a.useEffect(() => {
    (0, m.aP)({
      action: m.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: e,
      messageId: n,
      context: l
    })
  }, [e, n, l]), (0, i.jsxs)(s.Modal, {
    transitionState: d,
    onClose: f,
    title: _.intl.string(_.t.TPpVkJ),
    subtitle: _.intl.string(_.t["z4du/P"]),
    actions: [{
      text: _.intl.string(_.t["ETE/oK"]),
      onClick: I,
      variant: "secondary",
      disabled: o
    }, {
      text: _.intl.string(_.t["cY+Ooa"]),
      onClick: v,
      loading: o,
      disabled: o
    }],
    children: [null != r && (0, i.jsx)(E, {
      attachment: r
    }), null != c && (0, i.jsx)(p, {
      embed: c
    })]
  })
}
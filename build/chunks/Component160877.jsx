/** Chunk was on web.js **/
/** chunk id: 160877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => O,
  s: () => y
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk470167 = require("./470167.js"),
  Chunk793030 = require("./793030.js"),
  Chunk572691 = require("./572691.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk406432 = require("./406432.js"),
  Chunk584656 = require("./584656.jsx"),
  Chunk247206 = require("./247206.js"),
  Chunk719548 = require("./719548.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk463300 = require("./463300.js");
let g = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: i
    } = t;
    return null == n ? null : (0, r.jsx)(b, {
      url: n,
      description: i
    })
  },
  E = e => {
    var t, n, i;
    let {
      embed: o
    } = e;
    if (!_.n2.has(o.type)) return null;
    let a = true !== o.video && o.type !== s.h.GIFV ? o.video.url : null != (i = null == (t = o.thumbnail) ? true : t.url) ? i : null == (n = o.image) ? true : n.url;
    return null == a ? null : (0, r.jsx)(b, {
      url: a
    })
  },
  b = e => {
    let {
      url: t,
      description: n
    } = e, i = (0, d.cb)(t);
    return (0, r.jsx)("div", {
      className: h.mediaContainer,
      children: i ? (0, r.jsx)(u.Z, {
        className: a()(h.video, h.media),
        controls: true,
        src: t
      }) : (0, r.jsx)("img", {
        className: a()(h.image, h.media),
        src: t,
        alt: n
      })
    })
  };

function y(e) {
  c.Z.pop(), (0, f.t)({
    id: "explicit-media-false-positive-modal",
    text: m.intl.string(m.t.gFsTKu)
  }), e()
}

function O(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: o,
    analyticsContext: a,
    attachmentPreview: s,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: d,
    onClose: f
  } = e, _ = i.useCallback(() => {
    (0, p.aP)({
      action: p.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: a
    }), f()
  }, [t, n, a, f]), h = i.useCallback(() => {
    null == u || u(), (0, p.aP)({
      action: p.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: t,
      messageId: n,
      context: a
    })
  }, [t, n, a, u]);
  return i.useEffect(() => {
    (0, p.aP)({
      action: p.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n,
      context: a
    })
  }, [t, n, a]), (0, r.jsxs)(l.Modal, {
    transitionState: d,
    onClose: f,
    title: m.intl.string(m.t.TPpVkI),
    subtitle: m.intl.string(m.t["z4du/I"]),
    actions: [{
      text: m.intl.string(m.t["ETE/oC"]),
      onClick: _,
      variant: "secondary",
      disabled: o
    }, {
      text: m.intl.string(m.t["cY+Oob"]),
      onClick: h,
      loading: o,
      disabled: o
    }],
    children: [null != s && (0, r.jsx)(g, {
      attachment: s
    }), null != c && (0, r.jsx)(E, {
      embed: c
    })]
  })
}
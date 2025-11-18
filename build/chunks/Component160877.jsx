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
  o = require.n(Chunk120356),
  Chunk470167 = require("./470167.js"),
  Chunk793030 = require("./793030.js"),
  Chunk572691 = require("./572691.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk406432 = require("./406432.js"),
  Chunk584656 = require("./584656.jsx"),
  Chunk247206 = require("./247206.js"),
  Chunk719548 = require("./719548.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk770828 = require("./770828.js");
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
      embed: a
    } = e;
    if (!p.n2.has(a.type)) return null;
    let o = true !== a.video && a.type !== s.h.GIFV ? a.video.url : null != (i = null == (t = a.thumbnail) ? true : t.url) ? i : null == (n = a.image) ? true : n.url;
    return null == o ? null : (0, r.jsx)(b, {
      url: o
    })
  },
  b = e => {
    let {
      url: t,
      description: n
    } = e, i = (0, d.cb)(t);
    return (0, r.jsx)("div", {
      className: m.mediaContainer,
      children: i ? (0, r.jsx)(u.Z, {
        className: o()(m.video, m.media),
        controls: true,
        src: t
      }) : (0, r.jsx)("img", {
        className: o()(m.image, m.media),
        src: t,
        alt: n
      })
    })
  };

function y(e) {
  c.Z.pop(), (0, f.t)({
    id: "explicit-media-false-positive-modal",
    text: h.intl.string(h.t.gFsTKu)
  }), e()
}

function O(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: a,
    analyticsContext: o,
    attachmentPreview: s,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: d,
    onClose: f
  } = e, p = i.useCallback(() => {
    (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: o
    }), f()
  }, [t, n, o, f]), m = i.useCallback(() => {
    null == u || u(), (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: t,
      messageId: n,
      context: o
    })
  }, [t, n, o, u]);
  return i.useEffect(() => {
    (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n,
      context: o
    })
  }, [t, n, o]), (0, r.jsxs)(l.Modal, {
    transitionState: d,
    onClose: f,
    title: h.intl.string(h.t.TPpVkI),
    subtitle: h.intl.string(h.t["z4du/I"]),
    actions: [{
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: p,
      variant: "secondary",
      disabled: a
    }, {
      text: h.intl.string(h.t["cY+Oob"]),
      onClick: m,
      loading: a,
      disabled: a
    }],
    children: [null != s && (0, r.jsx)(g, {
      attachment: s
    }), null != c && (0, r.jsx)(E, {
      embed: c
    })]
  })
}
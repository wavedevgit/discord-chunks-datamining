/** Chunk was on web.js **/
/** chunk id: 961997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => O,
  o: () => b
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk508602 = require("./508602.js"),
  Chunk158954 = require("./158954.js"),
  Chunk630054 = require("./630054.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk77350 = require("./77350.js"),
  Chunk110168 = require("./110168.jsx"),
  Chunk390248 = require("./390248.js"),
  Chunk961440 = require("./961440.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk954141 = require("./954141.js");
let g = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: i
    } = t;
    return null == n ? null : (0, r.jsx)(y, {
      url: n,
      description: i
    })
  },
  E = e => {
    var t, n, i;
    let {
      embed: a
    } = e;
    if (!_.Tj.has(a.type)) return null;
    let s = true !== a.video && a.type !== o.A.GIFV ? a.video.url : null != (t = null == (n = a.thumbnail) ? true : n.url) ? t : null == (i = a.image) ? true : i.url;
    return null == s ? null : (0, r.jsx)(y, {
      url: s
    })
  },
  y = e => {
    let {
      url: t,
      description: n
    } = e, i = (0, d.r1)(t);
    return (0, r.jsx)("div", {
      className: m.il,
      children: i ? (0, r.jsx)(u.A, {
        className: s()(m.Ki, m.$_),
        controls: true,
        src: t
      }) : (0, r.jsx)("img", {
        className: s()(m.Sl, m.$_),
        src: t,
        alt: n
      })
    })
  };

function b(e) {
  c.A.pop(), (0, f.r)({
    id: "explicit-media-false-positive-modal",
    text: h.intl.string(h.t.gFsTKu)
  }), e()
}

function O(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: a,
    analyticsContext: s,
    attachmentPreview: o,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: d,
    onClose: f
  } = e, _ = i.useCallback(() => {
    (0, p.hv)({
      action: p.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: s
    }), f()
  }, [t, n, s, f]), m = i.useCallback(() => {
    null == u || u(), (0, p.hv)({
      action: p.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: t,
      messageId: n,
      context: s
    })
  }, [t, n, s, u]);
  return i.useEffect(() => {
    (0, p.hv)({
      action: p.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n,
      context: s
    })
  }, [t, n, s]), (0, r.jsxs)(l.Modal, {
    transitionState: d,
    onClose: f,
    title: h.intl.string(h.t.TPpVkI),
    subtitle: h.intl.string(h.t["z4du/I"]),
    actions: [{
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: _,
      variant: "secondary",
      disabled: a
    }, {
      text: h.intl.string(h.t["cY+Oob"]),
      onClick: m,
      loading: a,
      disabled: a
    }],
    children: [null != o && (0, r.jsx)(g, {
      attachment: o
    }), null != c && (0, r.jsx)(E, {
      embed: c
    })]
  })
}
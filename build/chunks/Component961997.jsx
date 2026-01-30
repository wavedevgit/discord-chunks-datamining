/** Chunk was on 66009 **/
/** chunk id: 961997, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  k: () => h,
  o: () => T
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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
let p = t => {
    let {
      attachment: e
    } = t, {
      url: n,
      description: l
    } = e;
    return null == n ? null : (0, i.jsx)(x, {
      url: n,
      description: l
    })
  },
  f = t => {
    var e, n, l;
    let {
      embed: a
    } = t;
    if (!v.Tj.has(a.type)) return null;
    let r = true !== a.video && a.type !== o.A.GIFV ? a.video.url : null != (e = null == (n = a.thumbnail) ? true : n.url) ? e : null == (l = a.image) ? true : l.url;
    return null == r ? null : (0, i.jsx)(x, {
      url: r
    })
  },
  x = t => {
    let {
      url: e,
      description: n
    } = t, l = (0, d.r1)(e);
    return (0, i.jsx)("div", {
      className: m.il,
      children: l ? (0, i.jsx)(u.A, {
        className: r()(m.Ki, m.$_),
        controls: true,
        src: e
      }) : (0, i.jsx)("img", {
        className: r()(m.Sl, m.$_),
        src: e,
        alt: n
      })
    })
  };

function T(t) {
  c.A.pop(), (0, _.r)({
    id: "explicit-media-false-positive-modal",
    text: E.intl.string(E.t.gFsTKu)
  }), t()
}

function h(t) {
  let {
    channelId: e,
    messageId: n,
    isReportFalsePositiveLoading: a,
    analyticsContext: r,
    attachmentPreview: o,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: d,
    onClose: _
  } = t, v = l.useCallback(() => {
    (0, I.hv)({
      action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: e,
      messageId: n,
      context: r
    }), _()
  }, [e, n, r, _]), m = l.useCallback(() => {
    null == u || u(), (0, I.hv)({
      action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: e,
      messageId: n,
      context: r
    })
  }, [e, n, r, u]);
  return l.useEffect(() => {
    (0, I.hv)({
      action: I.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: e,
      messageId: n,
      context: r
    })
  }, [e, n, r]), (0, i.jsxs)(s.Modal, {
    transitionState: d,
    onClose: _,
    title: E.intl.string(E.t.TPpVkI),
    subtitle: E.intl.string(E.t["z4du/I"]),
    actions: [{
      text: E.intl.string(E.t["ETE/oC"]),
      onClick: v,
      variant: "secondary",
      disabled: a
    }, {
      text: E.intl.string(E.t["cY+Oob"]),
      onClick: m,
      loading: a,
      disabled: a
    }],
    children: [null != o && (0, i.jsx)(p, {
      attachment: o
    }), null != c && (0, i.jsx)(f, {
      embed: c
    })]
  })
}
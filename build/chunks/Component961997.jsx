/** Chunk was on 92917 **/
/** chunk id: 961997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => v,
  o: () => y
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
let _ = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: i
    } = t;
    return null == n ? null : (0, r.jsx)(A, {
      url: n,
      description: i
    })
  },
  b = e => {
    var t, n, i;
    let {
      embed: l
    } = e;
    if (!f.Tj.has(l.type)) return null;
    let a = true !== l.video && l.type !== s.A.GIFV ? l.video.url : null != (t = null == (n = l.thumbnail) ? true : n.url) ? t : null == (i = l.image) ? true : i.url;
    return null == a ? null : (0, r.jsx)(A, {
      url: a
    })
  },
  A = e => {
    let {
      url: t,
      description: n
    } = e, i = (0, d.r1)(t);
    return (0, r.jsx)("div", {
      className: h.il,
      children: i ? (0, r.jsx)(u.A, {
        className: a()(h.Ki, h.$_),
        controls: true,
        src: t
      }) : (0, r.jsx)("img", {
        className: a()(h.Sl, h.$_),
        src: t,
        alt: n
      })
    })
  };

function y(e) {
  c.A.pop(), (0, p.r)({
    id: "explicit-media-false-positive-modal",
    text: g.intl.string(g.t.gFsTKu)
  }), e()
}

function v(e) {
  let {
    channelId: t,
    messageId: n,
    isReportFalsePositiveLoading: l,
    analyticsContext: a,
    attachmentPreview: s,
    embedPreview: c,
    onConfirmPress: u,
    transitionState: d,
    onClose: p
  } = e, f = i.useCallback(() => {
    (0, m.hv)({
      action: m.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: a
    }), p()
  }, [t, n, a, p]), h = i.useCallback(() => {
    null == u || u(), (0, m.hv)({
      action: m.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: t,
      messageId: n,
      context: a
    })
  }, [t, n, a, u]);
  return i.useEffect(() => {
    (0, m.hv)({
      action: m.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n,
      context: a
    })
  }, [t, n, a]), (0, r.jsxs)(o.Modal, {
    transitionState: d,
    onClose: p,
    title: g.intl.string(g.t.TPpVkI),
    subtitle: g.intl.string(g.t["z4du/I"]),
    actions: [{
      text: g.intl.string(g.t["ETE/oC"]),
      onClick: f,
      variant: "secondary",
      disabled: l
    }, {
      text: g.intl.string(g.t["cY+Oob"]),
      onClick: h,
      loading: l,
      disabled: l
    }],
    children: [null != s && (0, r.jsx)(_, {
      attachment: s
    }), null != c && (0, r.jsx)(b, {
      embed: c
    })]
  })
}
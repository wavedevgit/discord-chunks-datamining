/** Chunk was on web.js **/
/** chunk id: 160877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => O,
  s: () => y
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk470167 = require("./470167.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk572691 = require("./572691.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk406432 = require("./406432.js"),
  Chunk584656 = require("./584656.js"),
  Chunk247206 = require("./247206.js"),
  Chunk719548 = require("./719548.js"),
  Chunk388032 = require("./388032.js"),
  Chunk580297 = require("./580297.js");
let g = e => {
    let {
      attachment: t
    } = e, {
      url: n,
      description: i
    } = t;
    return null == n ? null : <b url={n} description={i} />
  },
  E = e => {
    var t, n, i;
    let {
      embed: o
    } = e;
    if (!p.n2.has(o.type)) return null;
    let a = true !== o.video && o.type !== s.h.GIFV ? o.video.url : null != (i = null == (t = o.thumbnail) ? true : t.url) ? i : null == (n = o.image) ? true : n.url;
    return null == a ? null : <b url={a} />
  },
  b = e => {
    let {
      url: t,
      description: n
    } = e, i = (0, d.cb)(t);
    return <div className={m.mediaContainer}>{i ? (0, r.jsx)(u.Z, {
        className: a()(m.video, m.media),
        controls: true,
        src: t
      }) : (0, r.jsx)("img", {
        className: a()(m.image, m.media),
        src: t,
        alt: n
      })}</div>
  };

function y(e) {
  c.Z.pop(), (0, f.t)({
    id: "explicit-media-false-positive-modal",
    text: h.intl.string(h.t.gFsTKi)
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
  } = e, p = i.useCallback(() => {
    (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL,
      channelId: t,
      messageId: n,
      context: a
    }), f()
  }, [t, n, a, f]), m = i.useCallback(() => {
    null == u || u(), (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM,
      channelId: t,
      messageId: n,
      context: a
    })
  }, [t, n, a, u]);
  return i.useEffect(() => {
    (0, _.aP)({
      action: _.Yy.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED,
      channelId: t,
      messageId: n,
      context: a
    })
  }, [t, n, a]), <l.Modal transitionState={d} onClose={f} title={h.intl.string(h.t.TPpVkJ)} subtitle={h.intl.string(h.t["z4du/P"])} actions={[{
      text: h.intl.string(h.t["ETE/oK"]),
      onClick: p,
      variant: "secondary",
      disabled: o
    }, {
      text: h.intl.string(h.t["cY+Ooa"]),
      onClick: m,
      loading: o,
      disabled: o
    }]}>{null != s && <g attachment={s} />}{null != c && <E embed={c} />}</l.Modal>
}
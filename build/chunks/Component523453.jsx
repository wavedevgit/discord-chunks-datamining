/** Chunk was on web.js **/
/** chunk id: 523453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk435064 = require("./435064.js"),
  Chunk10464 = require("./10464.jsx"),
  Chunk680056 = require("./680056.js"),
  Chunk375954 = require("./375954.js"),
  Chunk591759 = require("./591759.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk582602 = require("./582602.js");

function E(e) {
  let t = "__CLIP_METADATA__",
    n = e.indexOf(t);
  if (false === n) return {};
  let r = n + t.length,
    i = e.substring(r);
  try {
    let e = JSON.parse(i);
    return {
      clipId: e.id,
      remoteTriggerClipId: e.remoteTriggerClipId
    }
  } catch (e) {
    return {}
  }
}

function b(e) {
  let {
    message: t,
    compact: n
  } = e, b = t.channel_id, y = (0, a.e7)([f.Z], () => null != t.messageReference ? f.Z.getMessage(t.messageReference.channel_id, t.messageReference.message_id) : null, [t.messageReference]), {
    clipId: O,
    remoteTriggerClipId: v
  } = i.useMemo(() => null != y ? E(y.content) : {}, [y]), S = (0, a.e7)([c.Z], () => c.Z.getMatchingGroupClip(O, v)), I = (0, a.e7)([c.Z], () => null != S && null != b && c.Z.wasClipSharedInChannel(S.id, b)), {
    onShareClick: T
  } = (0, d.Z)(b), C = i.useCallback(() => {
    var e;
    null != S && null != b && (null == (e = t.messageReference) ? true : e.message_id) != null && T({
      clips: [S],
      messageReference: {
        channel_id: b,
        message_id: t.messageReference.message_id
      }
    })
  }, [S, b, t.messageReference, T]);
  if (null == y || null == O && null == v || null == S || I) return null;
  let A = y.attachments.find(e => {
      var t;
      return (0, o.yE)(null != (t = e.flags) ? t : 0, m.J0y.IS_CLIP)
    }),
    N = null;
  if ((null == A ? true : A.proxy_url) != null) {
    let e = p.Z.toURLSafe(A.proxy_url);
    null != e && (e.searchParams.append("format", "webp"), N = e.toString())
  }
  let P = null != N ? [N, S.thumbnail] : [S.thumbnail];
  return (0, r.jsx)(_.Z, {
    iconNode: (0, r.jsx)(l.AlX, {
      size: "md",
      color: "currentColor"
    }),
    timestamp: t.timestamp,
    compact: n,
    additionalContent: (0, r.jsxs)("div", {
      className: g.previewContainer,
      children: [(0, r.jsx)(u.Z, {
        thumbnails: P,
        variant: "stacked"
      }), (0, r.jsx)(s.zxk, {
        size: "sm",
        onClick: C,
        text: h.intl.string(h.t["5qb8EX"]),
        icon: l.n$P
      })]
    }),
    children: h.intl.string(h.t.ThhsNG)
  })
}
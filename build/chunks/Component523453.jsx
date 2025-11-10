/** Chunk was on web.js **/
/** chunk id: 523453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk435064 = require("./435064.js"),
  Chunk10464 = require("./10464.jsx"),
  Chunk680056 = require("./680056.js"),
  Chunk375954 = require("./375954.js"),
  Chunk630388 = require("./630388.js"),
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
  } = e, b = t.channel_id, y = (0, a.e7)([d.Z], () => null != t.messageReference ? d.Z.getMessage(t.messageReference.channel_id, t.messageReference.message_id) : null, [t.messageReference]), {
    clipId: O,
    remoteTriggerClipId: v
  } = i.useMemo(() => null != y ? E(y.content) : {}, [y]), I = (0, a.e7)([l.Z], () => l.Z.getMatchingGroupClip(O, v)), S = (0, a.e7)([l.Z], () => null != I && null != b && l.Z.wasClipSharedInChannel(I.id, b)), {
    onShareClick: T
  } = (0, u.Z)(b), A = i.useCallback(() => {
    var e;
    null != I && null != b && (null == (e = t.messageReference) ? true : e.message_id) != null && T({
      clips: [I],
      messageReference: {
        channel_id: b,
        message_id: t.messageReference.message_id
      }
    })
  }, [I, b, t.messageReference, T]);
  if (null == y || null == O && null == v || null == I || S) return null;
  let C = y.attachments.find(e => {
      var t;
      return (0, f.yE)(null != (t = e.flags) ? t : 0, h.J0y.IS_CLIP)
    }),
    N = null;
  if ((null == C ? true : C.proxy_url) != null) {
    let e = _.Z.toURLSafe(C.proxy_url);
    null != e && (e.searchParams.append("format", "webp"), N = e.toString())
  }
  let R = null != N ? [N, I.thumbnail] : [I.thumbnail];
  return (0, r.jsx)(p.Z, {
    iconNode: (0, r.jsx)(s.AlX, {
      size: "md",
      color: "currentColor"
    }),
    timestamp: t.timestamp,
    compact: n,
    additionalContent: (0, r.jsxs)("div", {
      className: g.previewContainer,
      children: [(0, r.jsx)(c.Z, {
        thumbnails: R,
        variant: "stacked"
      }), (0, r.jsx)(o.zxk, {
        size: "sm",
        onClick: A,
        text: m.intl.string(m.t["5qb8EX"]),
        icon: s.n$P
      })]
    }),
    children: m.intl.string(m.t.ThhsNG)
  })
}
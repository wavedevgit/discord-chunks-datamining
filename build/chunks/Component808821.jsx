/** Chunk was on web.js **/
/** chunk id: 808821, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk274372 = require("./274372.js"),
  Chunk239450 = require("./239450.jsx"),
  Chunk794905 = require("./794905.js"),
  Chunk320501 = require("./320501.js"),
  Chunk998218 = require("./998218.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk633232 = require("./633232.js");

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

function y(e) {
  let {
    message: t,
    compact: n
  } = e, y = t.channel_id, b = (0, s.bG)([f.A], () => null != t.messageReference ? f.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id) : null, [t.messageReference]), {
    clipId: O,
    remoteTriggerClipId: v
  } = i.useMemo(() => null != b ? E(b.content) : {}, [b]), A = (0, s.bG)([c.A], () => c.A.getMatchingGroupClip(O, v)), I = (0, s.bG)([c.A], () => null != A && null != y && c.A.wasClipSharedInChannel(A.id, y)), {
    onShareClick: S
  } = (0, d.A)(y), T = i.useCallback(() => {
    var e;
    null != A && null != y && (null == (e = t.messageReference) ? true : e.message_id) != null && S({
      clips: [A],
      messageReference: {
        channel_id: y,
        message_id: t.messageReference.message_id
      }
    })
  }, [A, y, t.messageReference, S]);
  if (null == b || null == O && null == v || null == A || I) return null;
  let C = b.attachments.find(e => {
      var t;
      return (0, a.Lt)(null != (t = e.flags) ? t : 0, h.sbO.IS_CLIP)
    }),
    N = null;
  if ((null == C ? true : C.proxy_url) != null) {
    let e = p.A.toURLSafe(C.proxy_url);
    null != e && (e.searchParams.append("format", "webp"), N = e.toString())
  }
  let R = null != N ? [N, A.thumbnail] : [A.thumbnail];
  return (0, r.jsx)(_.A, {
    iconNode: (0, r.jsx)(l.xgA, {
      size: "md",
      color: "currentColor"
    }),
    timestamp: t.timestamp,
    compact: n,
    additionalContent: (0, r.jsxs)("div", {
      className: g.i,
      children: [(0, r.jsx)(u.A, {
        thumbnails: R,
        variant: "stacked"
      }), (0, r.jsx)(o.$nd, {
        size: "sm",
        onClick: T,
        text: m.intl.string(m.t["5qb8EX"]),
        icon: l.W4J
      })]
    }),
    children: m.intl.string(m.t.ThhsNG)
  })
}
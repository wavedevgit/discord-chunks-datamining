/** Chunk was on 64935 **/
/** chunk id: 808821, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  let {
    message: t,
    compact: n
  } = e, b = t.channel_id, A = (0, a.bG)([p.A], () => null != t.messageReference ? p.A.getMessage(t.messageReference.channel_id, t.messageReference.message_id) : null, [t.messageReference]), {
    clipId: y,
    remoteTriggerClipId: v
  } = i.useMemo(() => null != A ? function(e) {
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
  }(A.content) : {}, [A]), x = (0, a.bG)([c.A], () => c.A.getMatchingGroupClip(y, v)), O = (0, a.bG)([c.A], () => null != x && null != b && c.A.wasClipSharedInChannel(x.id, b)), {
    onShareClick: E
  } = (0, d.A)(b), j = i.useCallback(() => {
    var e;
    null != x && null != b && (null == (e = t.messageReference) ? true : e.message_id) != null && E({
      clips: [x],
      messageReference: {
        channel_id: b,
        message_id: t.messageReference.message_id
      }
    })
  }, [x, b, t.messageReference, E]);
  if (null == A || null == y && null == v || null == x || O) return null;
  let C = A.attachments.find(e => {
      var t;
      return (0, l.Lt)(null != (t = e.flags) ? t : 0, g.sbO.IS_CLIP)
    }),
    I = null;
  if ((null == C ? true : C.proxy_url) != null) {
    let e = m.A.toURLSafe(C.proxy_url);
    null != e && (e.searchParams.append("format", "webp"), I = e.toString())
  }
  let S = null != I ? [I, x.thumbnail] : [x.thumbnail];
  return (0, r.jsx)(f.A, {
    iconNode: (0, r.jsx)(o.xgA, {
      size: "md",
      color: "currentColor"
    }),
    timestamp: t.timestamp,
    compact: n,
    additionalContent: (0, r.jsxs)("div", {
      className: h.i,
      children: [(0, r.jsx)(u.A, {
        thumbnails: S,
        variant: "stacked"
      }), (0, r.jsx)(s.$nd, {
        size: "sm",
        onClick: j,
        text: _.intl.string(_.t["5qb8EX"]),
        icon: o.W4J
      })]
    }),
    children: _.intl.string(_.t.ThhsNG)
  })
}
/** Chunk was on web.js **/
/** chunk id: 685396, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  K: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk508675 = require("./508675.js"),
  Chunk7584 = require("./7584.js"),
  Chunk253932 = require("./253932.js"),
  Chunk652215 = require("./652215.js");

function c(e, t) {
  var n;
  let r = null;
  if (null != t) r = {
    id: t.id,
    name: t.name,
    animated: t.animated
  };
  else if (null != e.emojiName && "" !== e.emojiName) {
    let t = s.Ay.getByName(s.Ay.convertSurrogateToName(e.emojiName, false));
    r = null != t ? {
      id: null,
      name: t.surrogates,
      animated: false
    } : null
  }
  let i = Number(e.expiresAtMs),
    a = null == (n = e.label) ? true : n.value;
  return {
    name: "Custom Status",
    type: l.$pd.CUSTOM_STATUS,
    state: e.text.length > 0 ? e.text : true,
    timestamps: i > 0 ? {
      end: i
    } : true,
    emoji: r,
    details: a,
    metadata: {
      label: a
    }
  }
}

function u(e) {
  let {
    emojiId: t
  } = e;
  return c(e, null != t && "0" !== t ? a.Ay.getUsableCustomEmojiById(t) : null)
}

function d() {
  let e = o.G2.useSetting(),
    t = null == e ? true : e.emojiId,
    n = (0, i.bG)([a.Ay], () => null != t && "0" !== t ? a.Ay.getUsableCustomEmojiById(t) : null, [t]);
  return (0, r.useMemo)(() => null != e ? c(e, n) : null, [e, n])
}
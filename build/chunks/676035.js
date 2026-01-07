/** Chunk was on web.js **/
/** chunk id: 676035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => u,
  a: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk339085 = require("./339085.js"),
  Chunk633302 = require("./633302.js"),
  Chunk695346 = require("./695346.js"),
  Chunk981631 = require("./981631.js");

function c(e, t) {
  var n;
  let r = null;
  if (null != t) r = {
    id: t.id,
    name: t.name,
    animated: t.animated
  };
  else if (null != e.emojiName && "" !== e.emojiName) {
    let t = o.ZP.getByName(o.ZP.convertSurrogateToName(e.emojiName, false));
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
    type: l.IIU.CUSTOM_STATUS,
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
  return c(e, null != t && "0" !== t ? a.ZP.getUsableCustomEmojiById(t) : null)
}

function d() {
  let e = s.Ok.useSetting(),
    t = null == e ? true : e.emojiId,
    n = (0, i.e7)([a.ZP], () => null != t && "0" !== t ? a.ZP.getUsableCustomEmojiById(t) : null, [t]);
  return (0, r.useMemo)(() => null != e ? c(e, n) : null, [e, n])
}
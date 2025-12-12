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
    let t = a.ZP.getByName(a.ZP.convertSurrogateToName(e.emojiName, false));
    r = null != t ? {
      id: null,
      name: t.surrogates,
      animated: false
    } : null
  }
  let i = Number(e.expiresAtMs),
    o = null == (n = e.label) ? true : n.value;
  return {
    name: "Custom Status",
    type: l.IIU.CUSTOM_STATUS,
    state: e.text.length > 0 ? e.text : true,
    timestamps: i > 0 ? {
      end: i
    } : true,
    emoji: r,
    details: o,
    metadata: {
      label: o
    }
  }
}

function u(e) {
  let {
    emojiId: t
  } = e;
  return c(e, null != t && "0" !== t ? o.ZP.getUsableCustomEmojiById(t) : null)
}

function d() {
  let e = Chunk695346.Ok.useSetting(),
    t = null == module ? true : module.emojiId,
    n = (0, Chunk442837.e7)([Chunk339085.ZP], () => null != exports && "0" !== exports ? Chunk339085.ZP.getUsableCustomEmojiById(exports) : null, [exports]);
  return (0, Chunk473749.useMemo)(() => null != module ? c(module, require) : null, [module, require])
}
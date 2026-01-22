/** Chunk was on web.js **/
/** chunk id: 709977, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ge: () => o,
  OP: () => l,
  Qd: () => c
}), require("./733351.js");
var Chunk403362 = require("./403362.js"),
  Chunk513461 = require("./513461.js"),
  Chunk260197 = require("./260197.js"),
  Chunk652215 = require("./652215.js");
let o = e => {
  let {
    required: t,
    response: n,
    field_type: a
  } = e;
  if (!t) returntrue;
  if (null == n) returnfalse;
  switch (a) {
    case i.rX.TERMS:
    case i.rX.VERIFICATION:
      return !!n;
    case i.rX.TEXT_INPUT:
    case i.rX.PARAGRAPH:
      return "string" == typeof n && "" !== n.trim();
    case i.rX.MULTIPLE_CHOICE:
      return "number" == typeof n;
    default:
      return (0, r.xb)(a)
  }
};

function l(e) {
  return a.AI.has(null == e ? true : e.field_type)
}

function c(e) {
  return null != e && e.features.has(s.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)
}
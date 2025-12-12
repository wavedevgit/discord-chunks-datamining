/** Chunk was on web.js **/
/** chunk id: 298552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./35282.js");
var Chunk159635 = require("./159635.js"),
  i = require.n(Chunk159635);
let a = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/;

function o(e, t) {
  return {
    type: "attachmentLink",
    content: [{
      type: "text",
      content: e
    }],
    attachmentUrl: t,
    attachmentName: e
  }
}
let s = {
  attachmentLink: {
    order: i().defaultRules.url.order - .5,
    requiredFirstCharacters: ["h"],
    match: e => a.exec(e),
    parse(e, t, n) {
      let r = e[0];
      return o(e[1], r)
    }
  }
}
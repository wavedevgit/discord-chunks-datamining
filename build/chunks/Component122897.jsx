/** Chunk was on web.js **/
/** chunk id: 122897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk63063 = require("./63063.js"),
  Chunk78451 = require("./78451.js"),
  Chunk695346 = require("./695346.js"),
  Chunk580183 = require("./580183.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk918526 = require("./918526.js");

function p() {
  let e = (0, Chunk580183.m)();
  return (0, Chunk951288.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
    children: [(0, Chunk951288.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t.tiCXaH),
      description: Chunk388032.intl.format(Chunk388032.t.RvjRRI, {
        appealLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SAFE_DIRECT_MESSAGING)
      })
    }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
      className: Chunk918526.radioGroup,
      radioItemClassName: Chunk918526.radioGroupItem,
      value: module,
      options: (0, Chunk78451.c7)(),
      onChange: e => {
        let {
          value: t
        } = e;
        return s.Xr.updateSetting(t)
      }
    })]
  })
}
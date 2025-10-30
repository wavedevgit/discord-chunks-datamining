/** Chunk was on web.js **/
/** chunk id: 122897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk524437 = require("./524437.js"),
  Chunk755721 = require("./755721.js"),
  Chunk63063 = require("./63063.js"),
  Chunk78451 = require("./78451.js"),
  Chunk695346 = require("./695346.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk973005 = require("./973005.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk229649 = require("./229649.js");

function h(e, t) {
  var n;
  return e !== i.Xr.DEFAULT_UNSET ? e : null != (n = u.O7.get(t)) ? n : i.Xr.NON_FRIENDS
}

function m() {
  let e = h(Chunk695346.Xr.useSetting(), Chunk695346.UP.useSetting());
  return (0, Chunk951288.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
    children: [(0, Chunk951288.jsx)(Chunk838436.H, {
      header: Chunk388032.intl.string(Chunk388032.t.tiCXaH),
      description: Chunk388032.intl.format(Chunk388032.t.RvjRRI, {
        appealLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SAFE_DIRECT_MESSAGING)
      })
    }), (0, Chunk951288.jsx)(Chunk755721.Gu, {
      className: Chunk229649.radioGroup,
      radioItemClassName: Chunk229649.radioGroupItem,
      value: module,
      options: (0, Chunk78451.c7)(),
      onChange: e => {
        let {
          value: t
        } = e;
        return l.Xr.updateSetting(t)
      }
    })]
  })
}
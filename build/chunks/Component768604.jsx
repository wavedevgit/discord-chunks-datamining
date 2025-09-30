/** Chunk was on web.js **/
/** chunk id: 768604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => g
}), require("./290780.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk247206 = require("./247206.js"),
  Chunk925513 = require("./925513.js"),
  Chunk294602 = require("./294602.js"),
  Chunk915009 = require("./915009.js"),
  Chunk880257 = require("./880257.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk947707 = require("./947707.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
  var e;
  let t = null == (e = (0, Chunk880257.Z)()) || module,
    n = (0, Chunk915009.LN)(),
    {
      goreContentGuilds: g,
      goreContentFriendDm: E,
      goreContentNonFriendDm: b
    } = (0, Chunk294602.K)(),
    y = e => {
      let t = Object.values(e);
      if ((0, l.Ks)() && t.includes(i.Q4.SHOW)) return void o.Z.showAgeVerificationGetStartedModal({
        entryPoint: s.cU.SENSITIVE_MEDIA_FILTER_SETTINGS
      });
      (0, c.Jr)(e)
    },
    O = [{
      value: Chunk524437.Q4.BLUR,
      label: Chunk388032.intl.string(Chunk388032.t.S49UaW)
    }, {
      value: Chunk524437.Q4.BLOCK,
      label: Chunk388032.intl.string(Chunk388032.t["D/157e"])
    }],
    v = [{
      value: Chunk524437.Q4.BLUR,
      label: Chunk388032.intl.string(Chunk388032.t.S49UaW)
    }],
    I = {
      value: Chunk524437.Q4.SHOW,
      label: Chunk388032.intl.string(Chunk388032.t["5k5OFh"])
    };
  return exports && (O.unshift(I), v.unshift(I)), (0, Chunk951288.jsxs)(Chunk838436.U, {
    setting: Chunk726985.s6.GORE_MEDIA_REDACTION,
    children: [(0, Chunk951288.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["+uI23N"]),
      value: E,
      onChange: e => y({
        goreContentFriendDm: e
      }),
      isDisabled: require,
      options: O
    }), (0, Chunk951288.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["Yh+HX1"]),
      value: b,
      onChange: e => y({
        goreContentNonFriendDm: e
      }),
      isDisabled: require,
      options: O
    }), (0, Chunk951288.jsx)(Chunk947707.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["FP+a4+"]),
      value: g,
      onChange: e => y({
        goreContentGuilds: e
      }),
      isDisabled: !exports || require,
      options: v
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t.XgH9en)
    })]
  })
}
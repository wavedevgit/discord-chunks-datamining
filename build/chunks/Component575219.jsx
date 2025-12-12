/** Chunk was on web.js **/
/** chunk id: 575219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => c
}), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk974674 = require("./974674.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk268685 = require("./268685.js");
let c = {
  title: "Avatar",
  stories: [{
    id: "avatar",
    name: "Avatar",
    component: function(e) {
      let {
        size: t = l.EF.SIZE_48,
        status: n
      } = e, {
        user: s
      } = (0, i.cj)([o.default], () => ({
        user: o.default.getCurrentUser()
      })), c = Number(t.split("_")[1]);
      return (0, r.jsx)(a.qE, {
        src: null == s ? true : s.getAvatarURL(true, c),
        size: t,
        "aria-label": "Sample User",
        status: n
      })
    },
    controls: {
      size: {
        type: "select",
        label: "Size",
        defaultValue: Chunk268685.EF.SIZE_48,
        options: Object.keys(Chunk268685.EF).map(e => ({
          label: e,
          value: l.EF[e]
        }))
      },
      status: {
        type: "select",
        label: "Status",
        defaultValue: null,
        options: [{
          label: "None",
          value: null
        }].concat(Object.keys(Chunk231338.Sk).map(e => ({
          label: e,
          value: s.Sk[e]
        })))
      }
    }
  }]
}
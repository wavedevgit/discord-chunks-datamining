/** Chunk was on web.js **/
/** chunk id: 332897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => c
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk97808 = require("./97808.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk778712 = require("./778712.js");
let c = {
  title: "Avatar",
  stories: [{
    id: "avatar",
    name: "Avatar",
    component: function(e) {
      let {
        size: t = l._3.SIZE_48,
        status: n
      } = e, {
        user: s
      } = (0, i.cf)([a.default], () => ({
        user: a.default.getCurrentUser()
      })), c = Number(t.split("_")[1]);
      return (0, r.jsx)(o.eu, {
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
        defaultValue: Chunk778712._3.SIZE_48,
        options: Object.keys(Chunk778712._3).map(e => ({
          label: e,
          value: l._3[e]
        }))
      },
      status: {
        type: "select",
        label: "Status",
        defaultValue: null,
        options: [{
          label: "None",
          value: null
        }].concat(Object.keys(Chunk818348.cl).map(e => ({
          label: e,
          value: s.cl[e]
        })))
      }
    }
  }]
}
/** Chunk was on 66548 **/
/** chunk id: 575219, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  v: () => u
}), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk974674 = require("./974674.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk268685 = require("./268685.js");
let u = {
  title: "Avatar",
  stories: [{
    id: "avatar",
    name: "Avatar",
    component: function(e) {
      let {
        size: l = s.EF.SIZE_48,
        status: t
      } = e, {
        user: r
      } = (0, n.cj)([o.default], () => ({
        user: o.default.getCurrentUser()
      })), u = Number(l.split("_")[1]);
      return (0, a.jsx)(i.qE, {
        src: null == r ? true : r.getAvatarURL(true, u),
        size: l,
        "aria-label": "Sample User",
        status: t
      })
    },
    controls: {
      size: {
        type: "select",
        label: "Size",
        defaultValue: Chunk268685.EF.SIZE_48,
        options: Object.keys(Chunk268685.EF).map(e => ({
          label: e,
          value: s.EF[e]
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
          value: r.Sk[e]
        })))
      }
    }
  }]
}
/** Chunk was on web.js **/
/** chunk id: 295822, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk249996 = require("./249996.jsx"),
  Chunk838436 = require("./838436.jsx"),
  Chunk800651 = require("./800651.js"),
  Chunk915009 = require("./915009.js"),
  Chunk652262 = require("./652262.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk460982 = require("./460982.js");

function _() {
  let e = (0, Chunk652262.M)(),
    t = (0, Chunk915009.T3)();
  if (null == exports || null == module) return null;
  let {
    goreContentFriendDm: n,
    goreContentNonFriendDm: _
  } = exports, p = t => {
    (0, l.Jr)(e, t)
  }, h = [{
    value: Chunk524437.Q4.BLUR,
    label: Chunk388032.intl.string(Chunk388032.t.S49UaW)
  }, {
    value: Chunk524437.Q4.BLOCK,
    label: Chunk388032.intl.string(Chunk388032.t["D/157e"])
  }];
  return (0, Chunk951288.jsxs)(Chunk838436.U, {
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk460982.selectItemRow,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        children: Chunk388032.intl.string(Chunk388032.t["+uI23N"])
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        variant: "text-only",
        className: Chunk460982.select,
        options: h,
        value: require,
        onChange: e => p({
          goreContentFriendDm: e
        }),
        renderOptionValue: e => {
          let [t] = e;
          return (0, r.jsx)(o.Z, {
            option: t
          })
        },
        renderOptionLabel: e => (0, r.jsx)(o.Z, {
          option: e
        })
      })]
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk460982.selectItemRow,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        children: Chunk388032.intl.string(Chunk388032.t["Yh+HX1"])
      }), (0, Chunk951288.jsx)(Chunk481060.q4e, {
        variant: "text-only",
        className: Chunk460982.select,
        options: h,
        value: _,
        onChange: e => p({
          goreContentNonFriendDm: e
        }),
        renderOptionValue: e => {
          let [t] = e;
          return (0, r.jsx)(o.Z, {
            option: t
          })
        },
        renderOptionLabel: e => (0, r.jsx)(o.Z, {
          option: e
        })
      })]
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t.XgH9en)
    })]
  })
}
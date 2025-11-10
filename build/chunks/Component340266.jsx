/** Chunk was on web.js **/
/** chunk id: 340266, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk5192 = require("./5192.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk16535 = require("./16535.js");
let f = 4,
  _ = 1,
  p = 3,
  h = [
    [{
      top: 15,
      left: 15,
      width: 28,
      height: 28
    }],
    [{
      top: 7,
      left: 7,
      width: 20,
      height: 20
    }, {
      top: 25,
      left: 25,
      width: 26,
      height: 26
    }],
    [{
      top: 5,
      left: 10,
      width: 18,
      height: 18
    }, {
      top: 15,
      left: 31,
      width: 22,
      height: 22
    }, {
      top: 29,
      left: 5,
      width: 24,
      height: 24
    }],
    [{
      top: 5,
      left: 5,
      width: 22,
      height: 22
    }, {
      top: 7,
      left: 33,
      width: 18,
      height: 18
    }, {
      top: 33,
      left: 7,
      width: 18,
      height: 18
    }, {
      top: 31,
      left: 31,
      width: 22,
      height: 22
    }]
  ],
  m = [
    [{
      top: 23,
      left: 23,
      width: 52,
      height: 52
    }],
    [{
      top: 13,
      left: 13,
      width: 32,
      height: 32
    }, {
      top: 41,
      left: 41,
      width: 44,
      height: 44
    }],
    [{
      top: 9,
      left: 14,
      width: 31,
      height: 31
    }, {
      top: 27,
      left: 53,
      width: 34,
      height: 34
    }, {
      top: 52,
      left: 11,
      width: 36,
      height: 36
    }],
    [{
      top: 10,
      left: 10,
      width: 36,
      height: 36
    }, {
      top: 10,
      left: 57,
      width: 31,
      height: 31
    }, {
      top: 57,
      left: 10,
      width: 31,
      height: 31
    }, {
      top: 52,
      left: 52,
      width: 36,
      height: 36
    }]
  ];

function g(e) {
  let {
    users: t,
    channel: n
  } = e, {
    themeType: g
  } = (0, c.z)(), E = g === u.l.MODAL_V2 ? m : h, b = t.length > f, y = t.length - f + 1, O = y >= 10 ? p : _;
  return (0, r.jsx)("div", {
    className: d.container,
    children: E[(0, i.clamp)(t.length - 1, 0, E.length - 1)].map((e, i) => {
      let c = t[i];
      return null == c ? null : (0, r.jsx)("div", {
        className: d.circle,
        style: e,
        children: b && i === O ? (0, r.jsx)("div", {
          className: d.overflowCount,
          children: (0, r.jsx)(s.Text, {
            variant: "text-xxs/semibold",
            lineClamp: 1,
            children: (0, r.jsx)(a.Z, {
              children: y > 99 ? ">99" : "+".concat(y)
            })
          })
        }) : (0, r.jsx)(o.u, {
          text: l.ZP.getName(n.guild_id, n.id, c),
          children: (0, r.jsx)("img", {
            className: d.avatar,
            src: c.getAvatarURL(n.guild_id, (0, s.pxk)(s.EFr.SIZE_80)),
            alt: ""
          })
        })
      }, c.id)
    })
  })
}
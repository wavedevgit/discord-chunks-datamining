/** Chunk was on web.js **/
/** chunk id: 42002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk562153 = require("./562153.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk307316 = require("./307316.js");
let f = 4,
  p = 1,
  _ = 3,
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
  } = (0, c.E)(), E = g === u.d.MODAL_V2 ? m : h, b = t.length > f, y = t.length - f + 1, O = y >= 10 ? _ : p;
  return (0, r.jsx)("div", {
    className: d.kL,
    children: E[(0, i.clamp)(t.length - 1, 0, E.length - 1)].map((e, i) => {
      let c = t[i];
      return null == c ? null : (0, r.jsx)("div", {
        className: d.n1,
        style: e,
        children: b && i === O ? (0, r.jsx)("div", {
          className: d.mB,
          children: (0, r.jsx)(o.Text, {
            variant: "text-xxs/semibold",
            lineClamp: 1,
            children: (0, r.jsx)(a.A, {
              children: y > 99 ? ">99" : "+".concat(y)
            })
          })
        }) : (0, r.jsx)(s.m, {
          text: l.Ay.getName(n.guild_id, n.id, c),
          children: (0, r.jsx)("img", {
            className: d.my,
            src: c.getAvatarURL(n.guild_id, (0, o.FT9)(o._3J.SIZE_80)),
            alt: ""
          })
        })
      }, c.id)
    })
  })
}
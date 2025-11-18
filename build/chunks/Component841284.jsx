/** Chunk was on web.js **/
/** chunk id: 841284, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk777207 = require("./777207.jsx"),
  Chunk962293 = require("./962293.jsx"),
  Chunk45251 = require("./45251.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk988530 = require("./988530.js");

function d(e) {
  let {
    pendingScheduledMessage: t
  } = e, {
    channelId: n,
    scheduledTimestamp: i
  } = t;

  function d(e) {
    e.stopPropagation(), (0, l.pO)(n)
  }
  return (0, r.jsx)("div", {
    className: u.clipContainer,
    children: (0, r.jsx)("div", {
      className: u.container,
      children: (0, r.jsxs)("div", {
        className: u.scheduledMessageBar,
        children: [(0, r.jsx)(o.x, {
          color: "header-secondary",
          className: a()(u.text, u.scheduledMessageBarLabel),
          variant: "text-sm/normal",
          children: c.intl.formatToPlainString(c.t["MQcRX/"], {
            timestamp: new Date(i).valueOf()
          })
        }), (0, r.jsx)("div", {
          className: u.actions,
          children: (0, r.jsx)(s.B, {
            onClick: d
          })
        })]
      })
    })
  })
}
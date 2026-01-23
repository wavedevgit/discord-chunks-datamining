/** Chunk was on web.js **/
/** chunk id: 613491, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk849736 = require("./849736.js"),
  Chunk354583 = require("./354583.js"),
  Chunk366098 = require("./366098.js"),
  Chunk418208 = require("./418208.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk496447 = require("./496447.js");

function g(e) {
  if (!e && (0, _.Cf)()) return void o.A.showAgeVerificationGetStartedModal({
    entryPoint: l.q1.STAGE_CHANNEL_RAISE_HAND
  });
  let t = u.A.getVoiceChannelId();
  if (null == t) return;
  let n = c.A.getChannel(t);
  null != n && (0, d.e7)(n, e)
}

function E(e) {
  var t, n;
  let {
    channelId: i
  } = e, s = null != (t = (0, p.D3)(i)) ? t : 0, o = null != (n = (0, p.Xk)(i)) ? n : 0;
  return s > 0 && o > 0 ? (0, r.jsx)("div", {
    className: m.Z5,
    children: (0, r.jsx)("div", {
      className: a()(m.qQ, m.lN),
      children: h.intl.string(h.t.xlJRfv)
    })
  }) : s > 0 ? (0, r.jsx)("div", {
    className: m.Z5,
    children: (0, r.jsx)("div", {
      className: a()(m.qQ, m.lN),
      children: h.intl.string(h.t.WYad9Z)
    })
  }) : o > 0 ? (0, r.jsx)("div", {
    className: m.Z5,
    children: (0, r.jsx)("div", {
      className: a()(m.qQ, m.lN),
      children: h.intl.string(h.t.eHq2OF)
    })
  }) : null
}

function y() {
  let e = (0, f.A)();
  return null == e ? null : (0, r.jsxs)(s.$Td, {
    className: m.kL,
    color: s.Hv$.DEFAULT,
    children: [h.intl.string(h.t.Ul1RJQ), (0, r.jsx)(E, {
      channelId: e.id
    }), (0, r.jsxs)(s.ButtonGroup, {
      size: "sm",
      className: m.GC,
      children: [(0, r.jsx)(s.Button, {
        variant: "overlay-primary",
        text: h.intl.string(h.t.MpO0px),
        onClick: () => g(false)
      }), (0, r.jsx)(s.Button, {
        variant: "secondary",
        onClick: () => g(true),
        text: h.intl.string(h.t["1YDv7a"])
      })]
    })]
  })
}
/** Chunk was on 93140 **/
/** chunk id: 613491, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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

function O(e) {
  if (!e && (0, A.Cf)()) return void a.A.showAgeVerificationGetStartedModal({
    entryPoint: s.q1.STAGE_CHANNEL_RAISE_HAND
  });
  let t = u.A.getVoiceChannelId();
  if (null == t) return;
  let n = c.A.getChannel(t);
  null != n && (0, E.e7)(n, e)
}

function N(e) {
  var t, n;
  let {
    channelId: i
  } = e, o = null != (t = (0, _.D3)(i)) ? t : 0, a = null != (n = (0, _.Xk)(i)) ? n : 0;
  return o > 0 && a > 0 ? (0, r.jsx)("div", {
    className: I.Z5,
    children: (0, r.jsx)("div", {
      className: l()(I.qQ, I.lN),
      children: T.intl.string(T.t.xlJRfv)
    })
  }) : o > 0 ? (0, r.jsx)("div", {
    className: I.Z5,
    children: (0, r.jsx)("div", {
      className: l()(I.qQ, I.lN),
      children: T.intl.string(T.t.WYad9Z)
    })
  }) : a > 0 ? (0, r.jsx)("div", {
    className: I.Z5,
    children: (0, r.jsx)("div", {
      className: l()(I.qQ, I.lN),
      children: T.intl.string(T.t.eHq2OF)
    })
  }) : null
}

function p() {
  let e = (0, d.A)();
  return null == e ? null : (0, r.jsxs)(o.$Td, {
    className: I.kL,
    color: o.Hv$.DEFAULT,
    children: [T.intl.string(T.t.Ul1RJQ), (0, r.jsx)(N, {
      channelId: e.id
    }), (0, r.jsxs)(o.ButtonGroup, {
      size: "sm",
      className: I.GC,
      children: [(0, r.jsx)(o.Button, {
        variant: "overlay-primary",
        text: T.intl.string(T.t.MpO0px),
        onClick: () => O(false)
      }), (0, r.jsx)(o.Button, {
        variant: "secondary",
        onClick: () => O(true),
        text: T.intl.string(T.t["1YDv7a"])
      })]
    })]
  })
}
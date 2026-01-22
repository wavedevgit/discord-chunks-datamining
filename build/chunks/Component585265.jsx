/** Chunk was on 62026 **/
/** chunk id: 585265, original params: i,t,s (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk744479 = require("./744479.jsx"),
  Chunk772538 = require("./772538.jsx"),
  Chunk61610 = require("./61610.jsx"),
  Chunk751461 = require("./751461.jsx"),
  Chunk638324 = require("./638324.jsx"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function R(i) {
  let {
    guildId: t
  } = i;
  return (0, n.jsxs)(l.A, {
    children: [(0, n.jsx)(o.A, {
      ingress: u.bf.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(c.A, {
      ingress: u.bf.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(d.A, {
      ingress: u.bf.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(a.A, {
      ingress: u.bf.SERVER_PRIVACY_MODAL,
      guildId: t
    }), (0, n.jsx)(r.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: A.intl.format(A.t.LNsV04, {
        policyLink: "https://discord.com/safety/360043709612-our-policies"
      })
    })]
  })
}

function x(i) {
  let {
    guild: t,
    transitionState: s,
    onClose: r
  } = i, l = "".concat(A.intl.string(A.t.BayiAo), "—").concat(null != t ? t.name : "??");
  return (0, n.jsx)(e.Modal, {
    transitionState: s,
    size: "sm",
    title: l,
    actions: [{
      onClick: () => r(),
      variant: "primary",
      text: A.intl.string(A.t.i4jeWR)
    }],
    onClose: () => Promise.resolve(r()),
    children: (0, n.jsx)(R, {
      guildId: t.id
    })
  })
}
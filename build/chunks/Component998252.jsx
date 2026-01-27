/** Chunk was on 60667 **/
/** chunk id: 998252, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk521933 = require("./521933.jsx"),
  Chunk452357 = require("./452357.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk139674 = require("./139674.js");

function c(e) {
  let {
    currentUser: t
  } = e;
  return t.isClaimed() ? null == t.email ? null : t.verified ? true : (0, r.jsxs)(i.wx6, {
    type: "warning",
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-md/medium",
      children: a.intl.string(a.t.tuGzBT)
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: o.PA,
      children: a.intl.string(a.t.NAzplE)
    }), (0, r.jsx)(s.A, {
      size: "sm",
      variant: "secondary"
    })]
  }) : (0, r.jsxs)(i.wx6, {
    type: "critical",
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-md/medium",
      children: a.intl.string(a.t["/3qnL/"])
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: o.PA,
      children: a.intl.string(a.t.qKs3vg)
    }), (0, r.jsx)(i.Button, {
      variant: "secondary",
      size: "sm",
      text: a.intl.string(a.t["7psymi"]),
      onClick: () => l.A.openClaimAccountModal()
    })]
  })
}
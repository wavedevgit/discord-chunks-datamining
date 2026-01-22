/** Chunk was on web.js **/
/** chunk id: 332191, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk15285 = require("./15285.js"),
  Chunk942405 = require("./942405.js"),
  Chunk403362 = require("./403362.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk476555 = require("./476555.js");

function _(e) {
  switch (e.state) {
    case "unknown":
      return f.intl.string(f.t["KW+nqT"]);
    case "disabled":
      return f.intl.string(f.t["Q/wAF7"]);
    case "disconnected":
      return f.intl.string(f.t.Xvs9IM);
    case "initializing":
      return f.intl.string(f.t.h4qz8W);
    case "connecting":
      return f.intl.string(f.t.fSu9XF);
    case "handshaking":
      return f.intl.string(f.t["00aYLJ"]);
    case "running":
      return f.intl.string(f.t["54TB7Z"]);
    case "waiting-for-retry":
      return f.intl.string(f.t["0FONwi"]);
    case "failure":
      return f.intl.string(f.t.Ic0nkd);
    default:
      (0, c.xb)(e.state)
  }
}

function h() {
  let e = (0, l.XQ)(),
    [t, n] = i.useState(false),
    [c, h] = i.useState(() => (0, l.TC)()),
    m = (0, a.bG)([o.Ay], () => o.Ay.getSystemServiceStatus("input-service")),
    g = i.useCallback(async () => {
      n(true), c ? await (0, l.z8)("windows-settings") : await (0, l.sL)("windows-settings"), n(false), h((0, l.TC)())
    }, [c]);
  if (!e) return null;
  let E = "running" === m.state;
  return (0, r.jsxs)("div", {
    className: p.q,
    children: [(0, r.jsxs)("div", {
      className: p.L,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: f.intl.string(f.t.roHq80)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: f.intl.format(f.t["8CAL+D"], {
          helpCenterLink: u.A.getArticleURL(d.MVz.SYSTEM_SERVICE)
        })
      }), c ? (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: E ? "text-feedback-positive" : "text-feedback-warning",
        children: E ? f.intl.string(f.t.KHVMkW) : f.intl.format(f.t["5Rlr0b"], {
          status: _(m)
        })
      }) : null]
    }), (0, r.jsx)(s.Button, {
      variant: c ? "critical-secondary" : "primary",
      loading: t,
      onClick: g,
      text: c ? f.intl.string(f.t.pAwbdL) : f.intl.string(f.t["1iI46O"])
    })]
  })
}
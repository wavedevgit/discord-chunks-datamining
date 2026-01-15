/** Chunk was on web.js **/
/** chunk id: 885418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk865066 = require("./865066.js"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk46667 = require("./46667.js");

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
      (0, c.vE)(e.state)
  }
}

function h() {
  let e = (0, l.O9)(),
    [t, n] = i.useState(false),
    [c, h] = i.useState(() => (0, l.aL)()),
    m = (0, a.e7)([s.ZP], () => s.ZP.getSystemServiceStatus("input-service")),
    g = i.useCallback(async () => {
      n(true), c ? await (0, l.OK)("windows-settings") : await (0, l.sU)("windows-settings"), n(false), h((0, l.aL)())
    }, [c]);
  if (!e) return null;
  let E = "running" === m.state;
  return (0, r.jsxs)("div", {
    className: p.systemServiceContainer,
    children: [(0, r.jsxs)("div", {
      className: p.systemServiceTextContainer,
      children: [(0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: f.intl.string(f.t.roHq80)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: f.intl.format(f.t["8CAL+D"], {
          helpCenterLink: u.Z.getArticleURL(d.BhN.SYSTEM_SERVICE)
        })
      }), c ? (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: E ? "text-feedback-positive" : "text-feedback-warning",
        children: E ? f.intl.string(f.t.KHVMkW) : f.intl.format(f.t["5Rlr0b"], {
          status: _(m)
        })
      }) : null]
    }), (0, r.jsx)(o.Button, {
      variant: c ? "critical-secondary" : "primary",
      loading: t,
      onClick: g,
      text: c ? f.intl.string(f.t.pAwbdL) : f.intl.string(f.t["1iI46O"])
    })]
  })
}
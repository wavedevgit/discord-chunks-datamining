/** Chunk was on web.js **/
/** chunk id: 885418, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => m
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

function m() {
  let e = (0, Chunk865066.O9)(),
    [t, n] = Chunk473749.useState(false),
    [c, m] = Chunk473749.useState(() => (0, Chunk865066.aL)()),
    h = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getSystemServiceStatus("input-service")),
    g = Chunk473749.useCallback(async () => {
      require(true), Chunk823379 ? await (0, Chunk865066.OK)("windows-settings") : await (0, Chunk865066.sU)("windows-settings"), require(false), m((0, Chunk865066.aL)())
    }, [Chunk823379]);
  if (!module) return null;
  let E = "running" === h.state;
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk46667.systemServiceContainer,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk46667.systemServiceTextContainer,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: Chunk388032.intl.string(Chunk388032.t.roHq80)
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: Chunk388032.intl.format(Chunk388032.t["8CAL+D"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SYSTEM_SERVICE)
        })
      }), Chunk823379 ? (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: E ? "text-feedback-positive" : "text-feedback-warning",
        children: E ? Chunk388032.intl.string(Chunk388032.t.KHVMkW) : Chunk388032.intl.format(Chunk388032.t["5Rlr0b"], {
          status: _(h)
        })
      }) : null]
    }), (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: Chunk823379 ? "critical-secondary" : "primary",
      loading: exports,
      onClick: g,
      text: Chunk823379 ? Chunk388032.intl.string(Chunk388032.t.pAwbdL) : Chunk388032.intl.string(Chunk388032.t["1iI46O"])
    })]
  })
}
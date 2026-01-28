/** Chunk was on 5606 **/
/** chunk id: 332191, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => m
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

function m() {
  let e = (0, o.XQ)(),
    [t, n] = i.useState(false),
    [m, g] = i.useState(() => (0, o.TC)()),
    f = (0, l.bG)([a.Ay], () => a.Ay.getSystemServiceStatus("input-service")),
    b = i.useCallback(async () => {
      n(true), m ? await (0, o.z8)("windows-settings") : await (0, o.sL)("windows-settings"), n(false), g((0, o.TC)())
    }, [m]);
  if (!e) return null;
  let h = "running" === f.state;
  return (0, r.jsxs)("div", {
    className: _.q,
    children: [(0, r.jsxs)("div", {
      className: _.L,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: p.intl.string(p.t.roHq80)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: p.intl.format(p.t["8CAL+D"], {
          helpCenterLink: d.A.getArticleURL(u.MVz.SYSTEM_SERVICE)
        })
      }), m ? (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: h ? "text-feedback-positive" : "text-feedback-warning",
        children: h ? p.intl.string(p.t.KHVMkW) : p.intl.format(p.t["5Rlr0b"], {
          status: function(e) {
            switch (e.state) {
              case "unknown":
                return p.intl.string(p.t["KW+nqT"]);
              case "disabled":
                return p.intl.string(p.t["Q/wAF7"]);
              case "disconnected":
                return p.intl.string(p.t.Xvs9IM);
              case "initializing":
                return p.intl.string(p.t.h4qz8W);
              case "connecting":
                return p.intl.string(p.t.fSu9XF);
              case "handshaking":
                return p.intl.string(p.t["00aYLJ"]);
              case "running":
                return p.intl.string(p.t["54TB7Z"]);
              case "waiting-for-retry":
                return p.intl.string(p.t["0FONwi"]);
              case "failure":
                return p.intl.string(p.t.Ic0nkd);
              default:
                (0, c.xb)(e.state)
            }
          }(f)
        })
      }) : null]
    }), (0, r.jsx)(s.Button, {
      variant: m ? "critical-secondary" : "primary",
      loading: t,
      onClick: b,
      text: m ? p.intl.string(p.t.pAwbdL) : p.intl.string(p.t["1iI46O"])
    })]
  })
}
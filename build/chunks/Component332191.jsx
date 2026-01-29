/** Chunk was on 2827 **/
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
    A = (0, l.bG)([a.Ay], () => a.Ay.getSystemServiceStatus("input-service")),
    f = i.useCallback(async () => {
      n(true), m ? await (0, o.z8)("windows-settings") : await (0, o.sL)("windows-settings"), n(false), g((0, o.TC)())
    }, [m]);
  if (!e) return null;
  let b = "running" === A.state;
  return (0, r.jsxs)("div", {
    className: p.q,
    children: [(0, r.jsxs)("div", {
      className: p.L,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: _.intl.string(_.t.roHq80)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: _.intl.format(_.t["8CAL+D"], {
          helpCenterLink: d.A.getArticleURL(u.MVz.SYSTEM_SERVICE)
        })
      }), m ? (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: b ? "text-feedback-positive" : "text-feedback-warning",
        children: b ? _.intl.string(_.t.KHVMkW) : _.intl.format(_.t["5Rlr0b"], {
          status: function(e) {
            switch (e.state) {
              case "unknown":
                return _.intl.string(_.t["KW+nqT"]);
              case "disabled":
                return _.intl.string(_.t["Q/wAF7"]);
              case "disconnected":
                return _.intl.string(_.t.Xvs9IM);
              case "initializing":
                return _.intl.string(_.t.h4qz8W);
              case "connecting":
                return _.intl.string(_.t.fSu9XF);
              case "handshaking":
                return _.intl.string(_.t["00aYLJ"]);
              case "running":
                return _.intl.string(_.t["54TB7Z"]);
              case "waiting-for-retry":
                return _.intl.string(_.t["0FONwi"]);
              case "failure":
                return _.intl.string(_.t.Ic0nkd);
              default:
                (0, c.xb)(e.state)
            }
          }(A)
        })
      }) : null]
    }), (0, r.jsx)(s.Button, {
      variant: m ? "critical-secondary" : "primary",
      loading: t,
      onClick: f,
      text: m ? _.intl.string(_.t.pAwbdL) : _.intl.string(_.t["1iI46O"])
    })]
  })
}
/** Chunk was on 86142 **/
/** chunk id: 501187, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk607399 = require("./607399.js"),
  Chunk49485 = require("./49485.js"),
  Chunk80703 = require("./80703.js"),
  Chunk492917 = require("./492917.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk877062 = require("./877062.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk886083 = require("./886083.js"),
  Chunk604880 = require("./604880.js");

function m(e) {
  let {
    token: t,
    hasError: n,
    errorReason: m
  } = e;
  return n ? (0, r.jsxs)("div", {
    className: f.MY,
    children: [(0, r.jsx)("div", {
      className: f.r$,
      children: (0, r.jsx)("img", {
        src: _,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: f.Qs,
      children: [(0, r.jsx)(a.DeQ, {
        alt: ""
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        className: f.ky,
        children: g.intl.string(g.t.RtCSr1)
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: f.G3,
        children: g.intl.string(g.t["S+YjYJ"])
      }), (0, r.jsx)(o.Button, {
        variant: "primary",
        text: g.intl.string(g.t.j3cG2p),
        fullWidth: true,
        onClick: () => {
          d.default.track(p.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, {
            error_reason: m
          }), (0, c.pX)(p.BVt.LOGIN)
        }
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: f.MY,
    children: [(0, r.jsx)("div", {
      className: f.r$,
      children: (0, r.jsx)("img", {
        src: _,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: f.Qs,
      children: [(0, r.jsx)(a.DeQ, {
        alt: ""
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        className: f.ky,
        children: g.intl.string(g.t["9h/0Rl"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: f.G3,
        children: g.intl.string(g.t.Wgm7Om)
      }), (0, r.jsx)(o.Button, {
        variant: "primary",
        text: g.intl.string(g.t.NydsTd),
        fullWidth: true,
        onClick: () => {
          var e;
          let n, r;
          n = function(e) {
            var t;
            let n = null == (t = platform.os) ? true : t.family;
            if ("Android" === n || "iOS" === n) {
              let t = u.default.getFingerprint(),
                n = (0, s.I_)(),
                r = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/login/one-time?token=").concat(e);
              return (0, s.Ay)(r, {
                utmSource: "one-time-login",
                fingerprint: t,
                attemptId: n
              })
            }
            return "discord://"
          }(t), r = (0, s.X7)(n), d.default.track(p.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
            detection_type: "mobile_button_clicked",
            device_type: i.Fr ? "mobile" : "tablet",
            platform: null == (e = d.default.getSuperProperties()) ? true : e.os
          }), null != r && d.default.track(p.HAw.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.v)(r.fingerprint),
            attempt_id: r.attemptId,
            source: r.utmSource
          }), h.A.launch(n, e => {
            e || (0, c.bG)({
              pathname: p.BVt.LOGIN
            })
          })
        }
      })]
    })]
  })
}
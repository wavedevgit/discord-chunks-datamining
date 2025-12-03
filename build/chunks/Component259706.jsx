/** Chunk was on 27978 **/
/** chunk id: 259706, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk873546 = require("./873546.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk970683 = require("./970683.js"),
  Chunk481060 = require("./481060.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk626135 = require("./626135.js"),
  Chunk954824 = require("./954824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk457570 = require("./457570.js"),
  Chunk74830 = require("./74830.js");

function _(e) {
  let {
    token: t,
    hasError: n,
    errorReason: _
  } = e;
  return n ? (0, r.jsxs)("div", {
    className: f.page,
    children: [(0, r.jsx)("div", {
      className: f.logoContainer,
      children: (0, r.jsx)("img", {
        src: m,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: f.content,
      children: [(0, r.jsx)(a.SM, {
        alt: ""
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        className: f.headingText,
        children: p.intl.string(p.t.RtCSr1)
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: f.bodyText,
        children: p.intl.string(p.t["S+YjYJ"])
      }), (0, r.jsx)(o.Button, {
        variant: "primary",
        text: p.intl.string(p.t.j3cG2p),
        fullWidth: true,
        onClick: () => {
          d.default.track(g.rMx.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, {
            error_reason: _
          }), (0, c.uL)(g.Z5c.LOGIN)
        }
      })]
    })]
  }) : (0, r.jsxs)("div", {
    className: f.page,
    children: [(0, r.jsx)("div", {
      className: f.logoContainer,
      children: (0, r.jsx)("img", {
        src: m,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: f.content,
      children: [(0, r.jsx)(a.SM, {
        alt: ""
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        className: f.headingText,
        children: p.intl.string(p.t["9h/0Rl"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/normal",
        className: f.bodyText,
        children: p.intl.string(p.t.Wgm7Om)
      }), (0, r.jsx)(o.Button, {
        variant: "primary",
        text: p.intl.string(p.t.NydsTd),
        fullWidth: true,
        onClick: () => {
          var e;
          let n = function(e) {
              var t;
              let n = null == (t = platform.os) ? true : t.family;
              if ("Android" === n || "iOS" === n) {
                let t = u.default.getFingerprint(),
                  n = (0, s.WS)(),
                  r = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/login/one-time?token=").concat(e);
                return (0, s.ZP)(r, {
                  utmSource: "one-time-login",
                  fingerprint: t,
                  attemptId: n
                })
              }
              return "discord://"
            }(t),
            r = (0, s.zS)(n);
          d.default.track(g.rMx.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
            detection_type: "mobile_button_clicked",
            device_type: i.tq ? "mobile" : "tablet",
            platform: null == (e = d.default.getSuperProperties()) ? true : e.os
          }), null != r && d.default.track(g.rMx.DEEP_LINK_CLICKED, {
            fingerprint: (0, l.K)(r.fingerprint),
            attempt_id: r.attemptId,
            source: r.utmSource
          }), h.Z.launch(n, e => {
            e || (0, c.dL)({
              pathname: g.Z5c.LOGIN
            })
          })
        }
      })]
    })]
  })
}
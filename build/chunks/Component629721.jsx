/** Chunk was on 88615 **/
/** chunk id: 629721, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk371028 = require("./371028.js"),
  Chunk37725 = require("./37725.js");

function u(e) {
  let {
    guildId: t,
    powerupNames: n,
    warnings: u
  } = e, {
    shouldShow: d,
    title: c,
    description: p
  } = (0, s.A)(t, n);
  return d ? (0, r.jsxs)("div", {
    className: a.kL,
    children: [(0, r.jsx)(l.CircleErrorIcon, {
      color: o.A.colors.TEXT_FEEDBACK_WARNING,
      className: a.Kk
    }), (0, r.jsx)(i.EYj, {
      variant: "text-md/semibold",
      color: "text-feedback-warning",
      children: c
    }), (0, r.jsxs)(i.EYj, {
      variant: "text-sm/medium",
      children: [p, null == u ? true : u.map((e, t) => (0, r.jsx)(i.EYj, {
        variant: "text-sm/medium",
        color: "text-feedback-warning",
        className: a.$e,
        children: e
      }, "warning-".concat(t)))]
    })]
  }) : null
}
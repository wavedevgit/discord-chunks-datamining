/** Chunk was on 97492 **/
/** chunk id: 790368, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk711950 = require("./711950.js"),
  Chunk322387 = require("./322387.js"),
  Chunk912309 = require("./912309.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk824426 = require("./824426.js");

function f(e) {
  let {
    closePopout: t
  } = e, n = (0, c.kX)();
  return (0, r.jsx)(i.m, {
    asContainer: true,
    text: p.intl.string(p.t["lMR96+"]),
    children: (0, r.jsxs)(s.DUT, {
      "aria-label": "".concat(p.intl.string(p.t["lMR96+"]), ", ").concat(n),
      className: h.b,
      onClick: () => {
        u.default.track(d.HAw.NOTIFICATION_CENTER_ACTION, {
          action_type: o.e1.FRIEND_REQUESTS_BUTTON_CLICK
        }), a.A.transitionToSection(d.m3P.PENDING, {
          explicit: true
        }), t()
      },
      children: [(0, r.jsx)(s.$yI, {
        size: "xs",
        color: "currentColor"
      }), (0, r.jsx)(s.hVq, {
        count: n,
        color: l.A.colors.BACKGROUND_MOD_STRONG.css
      })]
    })
  })
}
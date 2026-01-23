/** Chunk was on web.js **/
/** chunk id: 510790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => T
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk110259 = require("./110259.js"),
  Chunk239947 = require("./239947.js"),
  Chunk934551 = require("./934551.js"),
  Chunk97808 = require("./97808.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk520117 = require("./520117.js"),
  Chunk793943 = require("./793943.js"),
  Chunk763754 = require("./763754.js"),
  Chunk973654 = require("./973654.js"),
  Chunk954571 = require("./954571.js"),
  Chunk467135 = require("./467135.js"),
  Chunk644235 = require("./644235.js"),
  Chunk153469 = require("./153469.js"),
  Chunk652215 = require("./652215.js"),
  Chunk520650 = require("./520650.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk294456 = require("./294456.js");
let S = e => e.map(e => "#".concat(e)),
  T = e => {
    let {
      message: t
    } = e, {
      sharedClientTheme: n
    } = t, {
      setAll: i
    } = (0, E.ko)();
    return true === n ? null : (0, r.jsxs)("div", {
      className: I.kL,
      children: [(0, r.jsx)(N, {
        message: t
      }), (0, r.jsx)(u.$nd, {
        text: A.intl.string(A.t.SKNnqq),
        fullWidth: true,
        variant: "primary",
        onClick: () => {
          g.default.track(O.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}), (0, _.nf)(_.HP.CUSTOM_THEME, {
            from: _.xv.SHARE_MESSAGE
          }), i({
            colors: S(n.colors),
            chassisMixAmount: n.base_mix,
            gradientAngle: n.gradient_angle
          }), (0, m.GQ)((0, y.PC)(n.base_theme))
        }
      })]
    })
  },
  C = (e, t, n) => e.split(" ").map((e, a) => "__USERNAME__" !== e ? (0, r.jsxs)(i.Fragment, {
    children: [e, " "]
  }, a) : (0, r.jsxs)("span", {
    className: I.H,
    children: [(0, r.jsx)(c.eu, {
      "aria-label": n,
      src: t.getAvatarURL(null, 20),
      size: d._3J.SIZE_20
    }), " ", n, " "]
  }, a)),
  N = e => {
    let {
      message: t
    } = e, {
      sharedClientTheme: n
    } = t, c = (0, h.Ay)(t), u = i.useMemo(() => (0, a.once)(() => {
      (0, f.x)({
        type: s.ImpressionTypes.VIEW,
        name: o.I.CUSTOM_THEME_SHARE,
        properties: {}
      })
    }), []), _ = (0, p.A)({
      onVisible: () => {
        u()
      },
      threshold: 1,
      minTimeVisibleMs: 200
    }), m = i.useMemo(() => {
      var e;
      return true === n ? "" : (0, b.V9)(S(n.colors), null != (e = n.gradient_angle) ? e : 0)
    }, [n]);
    return true === n ? null : (0, r.jsxs)("div", {
      className: I.pS,
      ref: _,
      children: [(0, r.jsx)("div", {
        className: I.sl,
        style: {
          background: "".concat(m)
        }
      }), (0, r.jsxs)("div", {
        className: I.Ix,
        children: [(0, r.jsxs)(d.Heading, {
          variant: "heading-md/semibold",
          className: I.qP,
          children: [A.intl.string(v.default.KSBBpC), " ", (0, r.jsx)(l.NitroWheelIcon, {})]
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          className: I.Tb,
          children: C("".concat(A.intl.format(v.default.fQPSEf, {
            username: "__USERNAME__"
          })), t.author, c.nick)
        })]
      })]
    })
  }
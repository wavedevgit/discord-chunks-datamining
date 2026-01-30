/** Chunk was on 64935 **/
/** chunk id: 510790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => C
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
let j = e => e.map(e => "#".concat(e)),
  C = e => {
    let {
      message: t
    } = e, {
      sharedClientTheme: n
    } = t, {
      setAll: i
    } = (0, b.ko)();
    return true === n ? null : (0, r.jsxs)("div", {
      className: E.kL,
      children: [(0, r.jsx)(I, {
        message: t
      }), (0, r.jsx)(u.$nd, {
        text: O.intl.string(O.t.SKNnqq),
        fullWidth: true,
        variant: "primary",
        onClick: () => {
          h.default.track(v.HAw.CUSTOM_THEME_SHARE_PREVIEWED, {}), (0, f.nf)(f.HP.CUSTOM_THEME, {
            from: f.xv.SHARE_MESSAGE
          }), i({
            colors: j(n.colors),
            chassisMixAmount: n.base_mix,
            gradientAngle: n.gradient_angle
          }), (0, _.GQ)((0, A.PC)(n.base_theme))
        }
      })]
    })
  },
  I = e => {
    let t, n, u, {
        message: f
      } = e,
      {
        sharedClientTheme: _
      } = f,
      h = (0, g.Ay)(f),
      b = i.useMemo(() => (0, l.once)(() => {
        (0, p.x)({
          type: a.ImpressionTypes.VIEW,
          name: s.I.CUSTOM_THEME_SHARE,
          properties: {}
        })
      }), []),
      A = (0, m.A)({
        onVisible: () => {
          b()
        },
        threshold: 1,
        minTimeVisibleMs: 200
      }),
      v = i.useMemo(() => {
        var e;
        return true === _ ? "" : (0, y.V9)(j(_.colors), null != (e = _.gradient_angle) ? e : 0)
      }, [_]);
    return true === _ ? null : (0, r.jsxs)("div", {
      className: E.pS,
      ref: A,
      children: [(0, r.jsx)("div", {
        className: E.sl,
        style: {
          background: "".concat(v)
        }
      }), (0, r.jsxs)("div", {
        className: E.Ix,
        children: [(0, r.jsxs)(d.Heading, {
          variant: "heading-md/semibold",
          className: E.qP,
          children: [O.intl.string(x.default.KSBBpC), " ", (0, r.jsx)(o.NitroWheelIcon, {})]
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "text-subtle",
          className: E.Tb,
          children: (t = "".concat(O.intl.format(x.default.fQPSEf, {
            username: "__USERNAME__"
          })), n = f.author, u = h.nick, t.split(" ").map((e, t) => "__USERNAME__" !== e ? (0, r.jsxs)(i.Fragment, {
            children: [e, " "]
          }, t) : (0, r.jsxs)("span", {
            className: E.H,
            children: [(0, r.jsx)(c.eu, {
              "aria-label": u,
              src: n.getAvatarURL(null, 20),
              size: d._3J.SIZE_20
            }), " ", u, " "]
          }, t)))
        })]
      })]
    })
  }
/** Chunk was on 42340 **/
/** chunk id: 918714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk480916 = require("./480916.js"),
  Chunk17597 = require("./17597.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk845077 = require("./845077.js"),
  Chunk132392 = require("./132392.js"),
  Chunk118589 = require("./118589.js"),
  Chunk210825 = require("./210825.js"),
  Chunk535188 = require("./535188.jsx"),
  Chunk856597 = require("./856597.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk213360 = require("./213360.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk104940 = require("./104940.js");
let Chunk575703 = require("./575703.js");

function _(e) {
  let {
    task: t,
    handleSubmit: n,
    disabled: l
  } = e, [i, o] = r.useState(t), s = r.useMemo(() => ({
    task: i,
    setTask: o
  }), [i, o]);
  return r.useEffect(() => {
    o(t)
  }, [t]), (0, a.jsxs)(u.y.Provider, {
    value: s,
    children: [(0, a.jsx)(x.Z, {}), (0, a.jsx)(h.Z, {
      onSubmit: n,
      disabled: l
    })]
  })
}
let y = function(e) {
  let {
    onClose: t
  } = e, [n, u] = r.useState(null), [h, x] = r.useState(true), [y, C] = r.useState(null), [S, E] = r.useState(false), T = r.useCallback(async () => {
    x(true), C(null);
    try {
      var e;
      let n = await (0, d.PA)();
      if (null == n) return void t();
      !(0, c.Ew)(null == (e = n.ui_component) ? true : e.component.type) && m.VZ.has(n.ui_component.component.type) ? u(n) : u({
        task_id: n.task_id,
        task_type: m.UA.REFRESH_APP,
        assignment_id: n.assignment_id,
        ui_component: {
          component: {
            type: m.NS.REFRESH_APP,
            data: {}
          }
        },
        flow_context: {
          tasks: [],
          flow_id: n.flow_context.flow_id
        }
      })
    } catch (e) {
      C(b.intl.string(f.default["/f++3g"]))
    } finally {
      x(false)
    }
  }, [t]), O = r.useCallback(async e => {
    if (null !== n) {
      E(true);
      try {
        let t = {
          task_id: n.task_id,
          flow_id: n.flow_context.flow_id,
          data: e
        };
        await (0, d.Wl)(t), T()
      } catch (e) {
        C(b.intl.string(f.default["+QRSxc"]))
      } finally {
        E(false)
      }
    }
  }, [n, T]);
  (0, i.ZP)(() => {
    T()
  });
  let N = r.useMemo(() => (null == n ? true : n.task_type) === m.UA.AGE_VERIFICATION, [n]);
  return (0, a.jsxs)("div", {
    className: v.background,
    children: [(0, a.jsx)("img", {
      className: v.artwork,
      src: j,
      alt: ""
    }), N ? (0, a.jsx)(s.default, {
      transitionState: l.Dvm.ENTERED,
      entryPoint: o.cU.SAFETY_FLOWS,
      onClose: g.dG,
      onComplete: async () => {
        await O({
          type: m.rY.Empty
        })
      },
      dismissable: false
    }) : (0, a.jsx)("div", {
      className: v.safetyFlow,
      children: h ? (0, a.jsx)(l.$jN, {
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)("div", {
        className: v.container,
        children: (0, a.jsxs)(l.Kqy, {
          direction: "horizontal",
          justify: "start",
          className: v.body,
          children: [null !== y && (0, a.jsxs)(l.Kqy, {
            direction: "vertical",
            justify: "space-between",
            align: "center",
            className: v.interimBody,
            padding: 16,
            children: [(0, a.jsxs)(l.Kqy, {
              direction: "vertical",
              gap: 4,
              children: [(0, a.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                children: b.intl.string(b.t.c6kn6F)
              }), (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: b.intl.string(b.t.ZUEGFn)
              })]
            }), (0, a.jsxs)(l.Kqy, {
              direction: "horizontal",
              justify: "center",
              align: "center",
              children: [(0, a.jsx)(l.Button, {
                fullWidth: true,
                variant: "secondary",
                text: b.intl.string(b.t["2jxGer"]),
                onClick: () => {
                  (0, p.R)("safety_flows_modal")
                }
              }), (0, a.jsx)(l.Button, {
                fullWidth: true,
                text: b.intl.string(b.t["7NqTJn"]),
                onClick: () => {
                  T()
                }
              })]
            })]
          }), null === y && null != n && (0, a.jsx)(_, {
            task: n,
            handleSubmit: O,
            disabled: S
          })]
        })
      })
    })]
  })
}
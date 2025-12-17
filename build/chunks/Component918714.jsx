/** Chunk was on 6043 **/
/** chunk id: 918714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk764051 = require("./764051.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk693473 = require("./693473.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70263 = require("./70263.js");
let Chunk575703 = require("./575703.js");

function y(e) {
  let {
    task: t,
    handleSubmit: n,
    disabled: l
  } = e, [i, s] = r.useState(t), o = r.useMemo(() => ({
    task: i,
    setTask: s
  }), [i, s]);
  return r.useEffect(() => {
    s(t)
  }, [t]), (0, a.jsxs)(u.y.Provider, {
    value: o,
    children: [(0, a.jsx)(f.Z, {}), (0, a.jsx)(h.Z, {
      onSubmit: n,
      disabled: l
    })]
  })
}
let C = function(e) {
  let {
    onClose: t
  } = e, [n, u] = r.useState(null), [h, f] = r.useState(true), [C, _] = r.useState(null), [S, E] = r.useState(false), T = r.useCallback(async () => {
    f(true), _(null);
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
      _(g.intl.string(b.default["/f++3g"]))
    } finally {
      f(false)
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
        _(g.intl.string(b.default["+QRSxc"]))
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
    }), N ? (0, a.jsx)(o.default, {
      transitionState: l.Dvm.ENTERED,
      entryPoint: s.cU.SAFETY_FLOWS,
      onClose: x.dG,
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
          children: [null !== C && (0, a.jsxs)(l.Kqy, {
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
                children: g.intl.string(g.t.c6kn6F)
              }), (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t.ZUEGFn)
              })]
            }), (0, a.jsxs)(l.Kqy, {
              direction: "horizontal",
              justify: "center",
              align: "center",
              children: [(0, a.jsx)(l.Button, {
                fullWidth: true,
                variant: "secondary",
                text: g.intl.string(g.t["2jxGer"]),
                onClick: () => {
                  (0, p.R)("safety_flows_modal")
                }
              }), (0, a.jsx)(l.Button, {
                fullWidth: true,
                text: g.intl.string(g.t["7NqTJn"]),
                onClick: () => {
                  T()
                }
              })]
            })]
          }), null === C && null != n && (0, a.jsx)(y, {
            task: n,
            handleSubmit: O,
            disabled: S
          })]
        })
      })
    })]
  })
}
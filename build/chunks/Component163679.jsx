/** Chunk was on 87557 **/
/** chunk id: 163679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk847599 = require("./847599.js"),
  Chunk767379 = require("./767379.jsx"),
  Chunk240248 = require("./240248.js"),
  Chunk39537 = require("./39537.js"),
  Chunk278466 = require("./278466.js"),
  Chunk805866 = require("./805866.js"),
  Chunk627575 = require("./627575.js"),
  Chunk870341 = require("./870341.jsx"),
  Chunk686267 = require("./686267.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk646284 = require("./646284.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk36303 = require("./36303.js");
let Chunk843020 = require("./843020.js");

function _(e) {
  let {
    task: t,
    handleSubmit: n,
    disabled: r
  } = e, [i, s] = l.useState(t), o = l.useMemo(() => ({
    task: i,
    setTask: s
  }), [i, s]);
  return l.useEffect(() => {
    s(t)
  }, [t]), (0, a.jsxs)(u.h.Provider, {
    value: o,
    children: [(0, a.jsx)(x.A, {}), (0, a.jsx)(h.A, {
      onSubmit: n,
      disabled: r
    })]
  })
}
let y = function(e) {
  let {
    onClose: t
  } = e, [n, u] = l.useState(null), [h, x] = l.useState(true), [y, A] = l.useState(null), [C, S] = l.useState(false), O = l.useCallback(async () => {
    x(true), A(null);
    try {
      var e;
      let n = await (0, d.$R)();
      if (null == n) return void t();
      !(0, c.uJ)(null == (e = n.ui_component) ? true : e.component.type) && m.Vn.has(n.ui_component.component.type) ? u(n) : u({
        task_id: n.task_id,
        task_type: m.wP.REFRESH_APP,
        assignment_id: n.assignment_id,
        ui_component: {
          component: {
            type: m.Qq.REFRESH_APP,
            data: {}
          }
        },
        flow_context: {
          tasks: [],
          flow_id: n.flow_context.flow_id
        }
      })
    } catch (e) {
      A(b.intl.string(f.default["/f++3g"]))
    } finally {
      x(false)
    }
  }, [t]), T = l.useCallback(async e => {
    if (null !== n) {
      S(true);
      try {
        let t = {
          task_id: n.task_id,
          flow_id: n.flow_context.flow_id,
          data: e
        };
        await (0, d.Rt)(t), O()
      } catch (e) {
        A(b.intl.string(f.default["+QRSxc"]))
      } finally {
        S(false)
      }
    }
  }, [n, O]);
  (0, i.Ay)(() => {
    O()
  });
  let E = l.useMemo(() => (null == n ? true : n.task_type) === m.wP.AGE_VERIFICATION, [n]);
  return (0, a.jsxs)("div", {
    className: v.Tp,
    children: [(0, a.jsx)("img", {
      className: v.xX,
      src: j,
      alt: ""
    }), E ? (0, a.jsx)(o.default, {
      transitionState: r.ip4.ENTERED,
      entryPoint: s.q1.SAFETY_FLOWS,
      onClose: g.tE,
      onComplete: async () => {
        await T({
          type: m.Ij.Empty
        })
      },
      dismissable: false
    }) : (0, a.jsx)("div", {
      className: v.nA,
      children: h ? (0, a.jsx)(r.y$y, {
        type: r.y$y.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)("div", {
        className: v.kL,
        children: (0, a.jsxs)(r.BJc, {
          direction: "horizontal",
          justify: "start",
          className: v.rf,
          children: [null !== y && (0, a.jsxs)(r.BJc, {
            direction: "vertical",
            justify: "space-between",
            align: "center",
            className: v.Nj,
            padding: 16,
            children: [(0, a.jsxs)(r.BJc, {
              direction: "vertical",
              gap: 4,
              children: [(0, a.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                children: b.intl.string(b.t.c6kn6F)
              }), (0, a.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: b.intl.string(b.t.ZUEGFn)
              })]
            }), (0, a.jsxs)(r.BJc, {
              direction: "horizontal",
              justify: "center",
              align: "center",
              children: [(0, a.jsx)(r.Button, {
                fullWidth: true,
                variant: "secondary",
                text: b.intl.string(b.t["2jxGer"]),
                onClick: () => {
                  (0, p.k)("safety_flows_modal")
                }
              }), (0, a.jsx)(r.Button, {
                fullWidth: true,
                text: b.intl.string(b.t["7NqTJn"]),
                onClick: () => {
                  O()
                }
              })]
            })]
          }), null === y && null != n && (0, a.jsx)(_, {
            task: n,
            handleSubmit: T,
            disabled: C
          })]
        })
      })
    })]
  })
}
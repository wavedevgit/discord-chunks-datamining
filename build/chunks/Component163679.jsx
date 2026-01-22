/** Chunk was on 22477 **/
/** chunk id: 163679, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function y(e) {
  let {
    task: t,
    handleSubmit: n,
    disabled: i
  } = e, [r, s] = l.useState(t), o = l.useMemo(() => ({
    task: r,
    setTask: s
  }), [r, s]);
  return l.useEffect(() => {
    s(t)
  }, [t]), (0, a.jsxs)(u.h.Provider, {
    value: o,
    children: [(0, a.jsx)(f.A, {}), (0, a.jsx)(h.A, {
      onSubmit: n,
      disabled: i
    })]
  })
}
let _ = function(e) {
  let {
    onClose: t
  } = e, [n, u] = l.useState(null), [h, f] = l.useState(true), [_, A] = l.useState(null), [C, S] = l.useState(false), O = l.useCallback(async () => {
    f(true), A(null);
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
      A(g.intl.string(b.default["/f++3g"]))
    } finally {
      f(false)
    }
  }, [t]), E = l.useCallback(async e => {
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
        A(g.intl.string(b.default["+QRSxc"]))
      } finally {
        S(false)
      }
    }
  }, [n, O]);
  (0, r.Ay)(() => {
    O()
  });
  let N = l.useMemo(() => (null == n ? true : n.task_type) === m.wP.AGE_VERIFICATION, [n]);
  return (0, a.jsxs)("div", {
    className: v.Tp,
    children: [(0, a.jsx)("img", {
      className: v.xX,
      src: j,
      alt: ""
    }), N ? (0, a.jsx)(o.default, {
      transitionState: i.ip4.ENTERED,
      entryPoint: s.q1.SAFETY_FLOWS,
      onClose: x.tE,
      onComplete: async () => {
        await E({
          type: m.Ij.Empty
        })
      },
      dismissable: false
    }) : (0, a.jsx)("div", {
      className: v.nA,
      children: h ? (0, a.jsx)(i.y$y, {
        type: i.y$y.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)("div", {
        className: v.kL,
        children: (0, a.jsxs)(i.BJc, {
          direction: "horizontal",
          justify: "start",
          className: v.rf,
          children: [null !== _ && (0, a.jsxs)(i.BJc, {
            direction: "vertical",
            justify: "space-between",
            align: "center",
            className: v.Nj,
            padding: 16,
            children: [(0, a.jsxs)(i.BJc, {
              direction: "vertical",
              gap: 4,
              children: [(0, a.jsx)(i.Heading, {
                variant: "heading-xl/semibold",
                children: g.intl.string(g.t.c6kn6F)
              }), (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t.ZUEGFn)
              })]
            }), (0, a.jsxs)(i.BJc, {
              direction: "horizontal",
              justify: "center",
              align: "center",
              children: [(0, a.jsx)(i.Button, {
                fullWidth: true,
                variant: "secondary",
                text: g.intl.string(g.t["2jxGer"]),
                onClick: () => {
                  (0, p.k)("safety_flows_modal")
                }
              }), (0, a.jsx)(i.Button, {
                fullWidth: true,
                text: g.intl.string(g.t["7NqTJn"]),
                onClick: () => {
                  O()
                }
              })]
            })]
          }), null === _ && null != n && (0, a.jsx)(y, {
            task: n,
            handleSubmit: E,
            disabled: C
          })]
        })
      })
    })]
  })
}
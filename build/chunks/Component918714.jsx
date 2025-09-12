/** Chunk was on 72853 **/
/** chunk id: 918714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk480916 = require("./480916.js"),
  Chunk17597 = require("./17597.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk845077 = require("./845077.js"),
  Chunk132392 = require("./132392.js"),
  Chunk118589 = require("./118589.js"),
  Chunk535188 = require("./535188.jsx"),
  Chunk856597 = require("./856597.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk241945 = require("./241945.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk104940 = require("./104940.js");
let Chunk575703 = require("./575703.js");

function x(e) {
  let {
    task: t,
    handleSubmit: n,
    disabled: l
  } = e, [a, o] = i.useState(t), c = i.useMemo(() => ({
    task: a,
    setTask: o
  }), [a, o]);
  return i.useEffect(() => {
    o(t)
  }, [t]), (0, r.jsxs)(d.y.Provider, {
    value: c,
    children: [(0, r.jsx)(h.Z, {}), (0, r.jsx)(p.Z, {
      onSubmit: n,
      disabled: l
    })]
  })
}
let v = function(e) {
  let {
    onClose: t
  } = e, [n, d] = i.useState(null), [p, h] = i.useState(true), [v, j] = i.useState(null), [_, O] = i.useState(false), A = i.useCallback(async () => {
    h(true), j(null);
    try {
      var e;
      let n = await (0, u.PA)();
      if (null == n) return void t();
      !(0, s.Ew)(null == (e = n.ui_component) ? true : e.component.type) && f.VZ.has(n.ui_component.component.type) ? d(n) : d({
        task_id: n.task_id,
        task_type: f.UA.REFRESH_APP,
        assignment_id: n.assignment_id,
        ui_component: {
          component: {
            type: f.NS.REFRESH_APP,
            data: {}
          }
        },
        flow_context: {
          tasks: [],
          flow_id: n.flow_context.flow_id
        }
      })
    } catch (e) {
      j(g.intl.string(y.default["/f++3t"]))
    } finally {
      h(false)
    }
  }, [t]), S = i.useCallback(async e => {
    if (null !== n) {
      O(true);
      try {
        let t = {
          task_id: n.task_id,
          flow_id: n.flow_context.flow_id,
          data: e
        };
        await (0, u.Wl)(t), A()
      } catch (e) {
        j(g.intl.string(y.default["+QRSxc"]))
      } finally {
        O(false)
      }
    }
  }, [n, A]);
  i.useEffect(() => {
    A()
  }, [A]);
  let I = i.useMemo(() => (null == n ? true : n.task_type) === f.UA.AGE_VERIFICATION, [n]);
  return (0, r.jsxs)("div", {
    className: b.background,
    children: [(0, r.jsx)("img", {
      className: b.artwork,
      src: E,
      alt: ""
    }), I ? (0, r.jsx)(c.Z, {
      transitionState: l.Dvm.ENTERED,
      entryPoint: o.cU.SAFETY_FLOWS,
      onClose: m.dG,
      onComplete: async () => {
        await S({
          type: f.rY.Empty
        })
      },
      dismissable: false
    }) : (0, r.jsx)("div", {
      className: b.safetyFlow,
      children: p ? (0, r.jsx)(l.$jN, {
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)("div", {
        className: b.container,
        children: (0, r.jsxs)(l.Kqy, {
          direction: "horizontal",
          justify: "start",
          className: b.body,
          children: [null !== v && (0, r.jsxs)(l.Kqy, {
            direction: "vertical",
            justify: "space-between",
            align: "center",
            className: b.interimBody,
            padding: 16,
            children: [(0, r.jsxs)(l.Kqy, {
              direction: "vertical",
              gap: 4,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-xl/semibold",
                children: g.intl.string(g.t.c6kn6O)
              }), (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: g.intl.string(g.t.ZUEGFh)
              })]
            }), (0, r.jsxs)(l.Kqy, {
              direction: "horizontal",
              justify: "center",
              align: "center",
              children: [(0, r.jsx)(l.zxk, {
                fullWidth: true,
                variant: "secondary",
                text: g.intl.string(g.t["2jxGen"]),
                onClick: () => {
                  a.Z.logout("safety_flows_modal")
                }
              }), (0, r.jsx)(l.zxk, {
                fullWidth: true,
                text: g.intl.string(g.t["7NqTJi"]),
                onClick: () => {
                  A()
                }
              })]
            })]
          }), null === v && null != n && (0, r.jsx)(x, {
            task: n,
            handleSubmit: S,
            disabled: _
          })]
        })
      })
    })]
  })
}
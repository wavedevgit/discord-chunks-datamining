/** Chunk was on 72853 **/
/** chunk id: 918714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk753160 = require("./753160.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk594097 = require("./594097.js");
let Chunk575703 = require("./575703.js");

function E(e) {
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
let x = function(e) {
  let {
    onClose: t
  } = e, [n, d] = i.useState(null), [p, h] = i.useState(true), [x, v] = i.useState(null), [j, _] = i.useState(false), O = i.useCallback(async () => {
    h(true), v(null);
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
      v(y.intl.string(m.default["/f++3t"]))
    } finally {
      h(false)
    }
  }, [t]), A = i.useCallback(async e => {
    if (null !== n) {
      _(true);
      try {
        let t = {
          task_id: n.task_id,
          flow_id: n.flow_context.flow_id,
          data: e
        };
        await (0, u.Wl)(t), O()
      } catch (e) {
        v(y.intl.string(m.default["+QRSxc"]))
      } finally {
        _(false)
      }
    }
  }, [n, O]);
  i.useEffect(() => {
    O()
  }, [O]);
  let S = i.useMemo(() => (null == n ? true : n.task_type) === f.UA.AGE_VERIFICATION, [n]);
  return (0, r.jsxs)("div", {
    className: g.background,
    children: [(0, r.jsx)("img", {
      className: g.artwork,
      src: b,
      alt: ""
    }), S ? (0, r.jsx)(c.Z, {
      transitionState: l.Dvm.ENTERED,
      entryPoint: o.cU.SAFETY_FLOWS,
      onClose: async () => {},
      onComplete: async () => {
        await A({
          type: f.rY.Empty
        })
      }
    }) : (0, r.jsx)("div", {
      className: g.safetyFlow,
      children: p ? (0, r.jsx)(l.$jN, {
        type: l.$jN.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)("div", {
        className: g.container,
        children: (0, r.jsxs)(l.Kqy, {
          direction: "horizontal",
          justify: "start",
          className: g.body,
          children: [null !== x && (0, r.jsxs)(l.Kqy, {
            direction: "vertical",
            justify: "space-between",
            align: "center",
            className: g.interimBody,
            padding: 16,
            children: [(0, r.jsxs)(l.Kqy, {
              direction: "vertical",
              gap: 4,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-xl/semibold",
                children: y.intl.string(y.t.c6kn6O)
              }), (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-muted",
                children: y.intl.string(y.t.ZUEGFh)
              })]
            }), (0, r.jsxs)(l.Kqy, {
              direction: "horizontal",
              justify: "center",
              align: "center",
              children: [(0, r.jsx)(l.zxk, {
                fullWidth: true,
                variant: "secondary",
                text: y.intl.string(y.t["2jxGen"]),
                onClick: () => {
                  a.Z.logout("safety_flows_modal")
                }
              }), (0, r.jsx)(l.zxk, {
                fullWidth: true,
                text: y.intl.string(y.t["7NqTJi"]),
                onClick: () => {
                  O()
                }
              })]
            })]
          }), null === x && null != n && (0, r.jsx)(E, {
            task: n,
            handleSubmit: A,
            disabled: j
          })]
        })
      })
    })]
  })
}
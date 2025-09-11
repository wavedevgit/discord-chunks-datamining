/** Chunk was on 72853 **/
/** chunk id: 918714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk480916 = require("./480916.js"),
  Chunk17597 = require("./17597.jsx"),
  Chunk624138 = require("./624138.js"),
  Chunk845077 = require("./845077.js"),
  Chunk132392 = require("./132392.js"),
  Chunk118589 = require("./118589.js"),
  Chunk535188 = require("./535188.jsx"),
  Chunk856597 = require("./856597.jsx"),
  Chunk241945 = require("./241945.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk104940 = require("./104940.js");
let Chunk575703 = require("./575703.js");

function b(e) {
  let {
    task: t,
    handleSubmit: n,
    disabled: l
  } = e, [o, c] = i.useState(t), s = i.useMemo(() => ({
    task: o,
    setTask: c
  }), [o, c]);
  return i.useEffect(() => {
    c(t)
  }, [t]), (0, r.jsx)(u.y.Provider, {
    value: s,
    children: (0, r.jsxs)(a.Kqy, {
      direction: "horizontal",
      justify: "start",
      className: y.body,
      children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(f.Z, {
        onSubmit: n,
        disabled: l
      })]
    })
  })
}
let E = function(e) {
  let {
    onClose: t
  } = e, [n, u] = i.useState(null), [f, p] = i.useState(true), [E, x] = i.useState(null), [v, j] = i.useState(false), _ = i.useCallback(async () => {
    p(true), x(null);
    try {
      var e;
      let n = await (0, s.PA)();
      if (null == n) return void t();
      !(0, c.Ew)(null == (e = n.ui_component) ? true : e.component.type) && d.VZ.has(n.ui_component.component.type) ? u(n) : u({
        task_id: n.task_id,
        task_type: d.UA.REFRESH_APP,
        assignment_id: n.assignment_id,
        ui_component: {
          component: {
            type: d.NS.REFRESH_APP,
            data: {}
          }
        },
        flow_context: {
          tasks: [],
          flow_id: n.flow_context.flow_id
        }
      })
    } catch (e) {
      x(h.intl.string(m.default["/f++3t"]))
    } finally {
      p(false)
    }
  }, [t]), O = i.useCallback(async e => {
    if (null !== n) {
      j(true);
      try {
        let t = {
          task_id: n.task_id,
          flow_id: n.flow_context.flow_id,
          data: e
        };
        await (0, s.Wl)(t), _()
      } catch (e) {
        x(h.intl.string(m.default["+QRSxc"]))
      } finally {
        j(false)
      }
    }
  }, [n, _]);
  i.useEffect(() => {
    _()
  }, [_]);
  let A = i.useMemo(() => (null == n ? true : n.task_type) === d.UA.AGE_VERIFICATION, [n]);
  return (0, r.jsxs)("div", {
    className: y.background,
    children: [(0, r.jsx)("img", {
      className: y.artwork,
      src: g,
      alt: ""
    }), A ? (0, r.jsx)(o.default, {
      transitionState: a.Dvm.ENTERED,
      entryPoint: l.cU.SAFETY_FLOWS,
      onClose: async () => {},
      onComplete: async () => {
        await O({
          type: d.rY.Empty
        })
      }
    }) : (0, r.jsx)("div", {
      className: y.safetyFlow,
      children: (0, r.jsxs)("div", {
        className: y.container,
        children: [f && (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: h.intl.string(m.default.v0H5Tk)
        }), null !== E && (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: y.error,
          children: E
        }), !f && null === E && null != n && (0, r.jsx)(b, {
          task: n,
          handleSubmit: O,
          disabled: v
        })]
      })
    })]
  })
}
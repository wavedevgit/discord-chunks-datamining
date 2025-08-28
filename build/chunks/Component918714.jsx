/** Chunk was on 72853 **/
/** chunk id: 918714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
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

function h(e) {
  let {
    task: t,
    handleSubmit: n,
    disabled: l
  } = e, [c, s] = i.useState(t), f = i.useMemo(() => ({
    task: c,
    setTask: s
  }), [c, s]);
  return i.useEffect(() => {
    s(t)
  }, [t]), (0, r.jsx)(o.y.Provider, {
    value: f,
    children: (0, r.jsxs)(a.Kqy, {
      direction: "horizontal",
      justify: "start",
      className: m.body,
      children: [(0, r.jsx)(d.Z, {}), (0, r.jsx)(u.Z, {
        onSubmit: n,
        disabled: l
      })]
    })
  })
}
let g = function(e) {
  let {
    onClose: t
  } = e, [n, o] = i.useState(null), [u, d] = i.useState(true), [g, v] = i.useState(null), [b, j] = i.useState(false), x = i.useCallback(async () => {
    d(true), v(null);
    try {
      var e;
      let n = await (0, c.PA)();
      if (null == n) return void t();
      !(0, l.Ew)(null == (e = n.ui_component) ? true : e.component.type) && s.VZ.has(n.ui_component.component.type) ? o(n) : o({
        task_id: n.task_id,
        task_type: s.UA.REFRESH_APP,
        assignment_id: n.assignment_id,
        ui_component: {
          component: {
            type: s.NS.REFRESH_APP,
            data: {}
          }
        },
        flow_context: {
          tasks: [],
          flow_id: n.flow_context.flow_id
        }
      })
    } catch (e) {
      v(p.intl.string(f.default["/f++3t"]))
    } finally {
      d(false)
    }
  }, [t]), E = i.useCallback(async e => {
    if (null !== n) {
      j(true);
      try {
        let t = {
          task_id: n.task_id,
          flow_id: n.flow_context.flow_id,
          data: e
        };
        await (0, c.Wl)(t), x()
      } catch (e) {
        v(p.intl.string(f.default["+QRSxc"]))
      } finally {
        j(false)
      }
    }
  }, [n, x]);
  return i.useEffect(() => {
    x()
  }, [x]), (0, r.jsxs)("div", {
    className: m.background,
    children: [(0, r.jsx)("img", {
      className: m.artwork,
      src: y,
      alt: ""
    }), (0, r.jsx)("div", {
      className: m.safetyFlow,
      children: (0, r.jsxs)("div", {
        className: m.container,
        children: [u && (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: p.intl.string(f.default.v0H5Tk)
        }), null !== g && (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: m.error,
          children: g
        }), !u && null === g && null != n && (0, r.jsx)(h, {
          task: n,
          handleSubmit: E,
          disabled: b
        })]
      })
    })]
  })
}
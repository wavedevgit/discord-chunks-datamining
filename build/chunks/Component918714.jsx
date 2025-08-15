/** Chunk was on 72853 **/
/** chunk id: 918714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
      className: y.body,
      children: [(0, r.jsx)(d.Z, {}), (0, r.jsx)(u.Z, {
        onSubmit: n,
        disabled: l
      })]
    })
  })
}
let g = function() {
  let [e, t] = Chunk73800.useState(null), [n, o] = Chunk73800.useState(true), [u, d] = Chunk73800.useState(null), [g, b] = Chunk73800.useState(false), j = Chunk73800.useCallback(async () => {
    Chunk132392(true), Chunk856597(null);
    try {
      var e;
      let n = await (0, Chunk845077.PA)();
      if (null == require) return;
      !(0, Chunk624138.Ew)(null == (e = require.ui_component) ? true : module.component.type) && Chunk118589.VZ.has(require.ui_component.component.type) ? exports(require) : exports({
        task_id: require.task_id,
        task_type: Chunk118589.UA.REFRESH_APP,
        assignment_id: require.assignment_id,
        ui_component: {
          component: {
            type: Chunk118589.NS.REFRESH_APP,
            data: {}
          }
        },
        flow_context: {
          tasks: [],
          flow_id: require.flow_context.flow_id
        }
      })
    } catch (e) {
      Chunk856597(Chunk388032.intl.string(Chunk241945.default["/f++3t"]))
    } finally {
      Chunk132392(false)
    }
  }, []), v = Chunk73800.useCallback(async t => {
    if (null !== e) {
      b(true);
      try {
        let n = {
          task_id: e.task_id,
          flow_id: e.flow_context.flow_id,
          data: t
        };
        await (0, c.Wl)(n), j()
      } catch (e) {
        d(p.intl.string(f.default["+QRSxc"]))
      } finally {
        b(false)
      }
    }
  }, [module, j]);
  return Chunk73800.useEffect(() => {
    j()
  }, [j]), (0, Chunk255367.jsxs)("div", {
    className: Chunk104940.background,
    children: [(0, Chunk255367.jsx)(Chunk481060.y5t, {
      forceLevel: 6,
      children: (0, Chunk255367.jsx)("img", {
        className: Chunk104940.artwork,
        src: Chunk575703,
        alt: ""
      })
    }), (0, Chunk255367.jsx)("div", {
      className: Chunk104940.safetyFlow,
      children: (0, Chunk255367.jsxs)("div", {
        className: Chunk104940.container,
        children: [require && (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: Chunk388032.intl.string(Chunk241945.default.v0H5Tk)
        }), null !== Chunk535188 && (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-danger",
          className: Chunk104940.error,
          children: Chunk535188
        }), !require && null === Chunk535188 && null != module && (0, Chunk255367.jsx)(h, {
          task: module,
          handleSubmit: v,
          disabled: g
        })]
      })
    })]
  })
}
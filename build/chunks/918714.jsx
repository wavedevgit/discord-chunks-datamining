/** Chunk was on 89744 **/
/** chunk id: 918714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk624138 = require("./624138.js"),
  Chunk845077 = require("./845077.js"),
  Chunk118589 = require("./118589.js"),
  Chunk603700 = require("./603700.jsx"),
  Chunk697498 = require("./697498.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk70421 = require("./70421.js");
let p = () => {
  let [e, t] = Chunk73800.useState(null), [n, p] = Chunk73800.useState(true), [y, m] = Chunk73800.useState(null), [g, h] = Chunk73800.useState(false), b = Chunk73800.useCallback(async () => {
    p(true), m(null);
    try {
      var e;
      let n = await (0, Chunk845077.PA)();
      if (null == require) return;
      !(0, Chunk624138.Ew)(null == (e = require.ui_component) ? true : module.type) && Chunk118589.VZ.has(require.ui_component.type) ? exports(require) : exports({
        task_id: require.task_id,
        task_type: Chunk118589.UA.REFRESH_APP,
        assignment_id: require.assignment_id,
        ui_component: {
          type: Chunk118589.NS.REFRESH_APP,
          data: {}
        },
        flow_context: {
          tasks: [],
          flow_id: require.flow_context.flow_id
        }
      })
    } catch (e) {
      m(Chunk388032.intl.string(Chunk697498.default["/f++3t"]))
    } finally {
      p(false)
    }
  }, []), v = Chunk73800.useCallback(async t => {
    if (null !== e) {
      h(true);
      try {
        var n;
        let r = {
          task_id: e.task_id,
          flow_id: null == (n = e.flow_context) ? true : n.flow_id,
          data: t
        };
        await (0, c.Wl)(r), b()
      } catch (e) {
        m(d.intl.string(u.default["+QRSxc"]))
      } finally {
        h(false)
      }
    }
  }, [module, b]);
  return Chunk73800.useEffect(() => {
    b()
  }, [b]), <div className={Chunk70421.safetyFlow}><div className={Chunk70421.container}>{<Chunk481060.xBx data-migration-pending={true} separator={false} className={Chunk70421.header}><Chunk481060.X6q variant={"heading-xl/bold"}>{Chunk388032.intl.string(Chunk697498.default.gqwhj4)}</Chunk481060.X6q></Chunk481060.xBx>}{<Chunk481060.hzk data-migration-pending={true} className={Chunk70421.body}>{require && <Chunk481060.Text variant={"text-md/normal"} color={"text-muted"}>{Chunk388032.intl.string(Chunk697498.default.v0H5Tk)}</Chunk481060.Text>}{null !== y && <Chunk481060.Text variant={"text-md/normal"} color={"text-danger"} className={Chunk70421.error}>{y}</Chunk481060.Text>}{!require && null === y && null !== module && <Chunk603700.Z task={module} onSubmit={v} disabled={g} />}</Chunk481060.hzk>}</div></div>
}
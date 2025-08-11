/** Chunk was on 93288 **/
/** chunk id: 396410, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./413496.js"), require("./433524.js"), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk388032 = require("./388032.jsx");
let p = RegExp("(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$", "i");

function c(t) {
  let {
    transitionState: e,
    onFormSubmit: n,
    onSuccess: c,
    onClose: d,
    headerText: h,
    confirmButtonText: m,
    confirmButtonVariant: f = "primary"
  } = t, [x, y] = s.useState(false), [A, g] = s.useState(""), [v, E] = s.useState(null), Z = s.useRef(null), k = async t => {
    if (t.preventDefault(), E(null), y(true), false === p.test(A)) {
      E(u.intl.string(u.t.hML7Gx)), y(false);
      return
    }
    try {
      let t = null != n ? await n(A) : true;
      null != c && (null != t ? c({
        response: t,
        email: A
      }) : c(A)), d()
    } catch (t) {
      E(new o.Z(t).getAnyErrorMessage())
    } finally {
      y(false)
    }
  };
  return <form onSubmit={k}><l.Modal transitionState={e} trackingProps={{
        impression: {
          impressionName: r.ImpressionNames.URF_ENTER_EMAIL
        },
        impressionType: r.ImpressionTypes.MODAL
      }} title={h} actions={[{
        text: u.intl.string(u.t["ETE/oK"]),
        onClick: d,
        variant: "secondary",
        disabled: x
      }, {
        text: m,
        variant: f,
        loading: x,
        type: "submit"
      }]} onClose={d}><a.xJW title={u.intl.string(u.t.hvOfmJ)} error={v}><a.oil value={A} onChange={g} inputRef={Z} /></a.xJW></l.Modal></form>
}
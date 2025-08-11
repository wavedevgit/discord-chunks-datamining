/** Chunk was on 7649 **/
/** chunk id: 797464, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let {
    transitionState: n,
    onConfirm: i,
    onClose: o,
    onDismiss: d
  } = t, [c, u] = a.useState(false), [h, p] = a.useState(true), [g, x] = a.useState(true);
  return <s.Modal transitionState={n} onClose={o} title={l.intl.string(l.t["6rP+BQ"])} subtitle={l.intl.string(l.t["1LuCnZ"])} actions={[{
      variant: "secondary",
      text: l.intl.string(l.t["ETE/oK"]),
      onClick: () => {
        d(), o()
      },
      disabled: c
    }, {
      text: l.intl.string(l.t["cY+Ooa"]),
      onClick: () => {
        c || (u(true), i(h, g), u(false), o())
      },
      disabled: c,
      loading: c
    }]} actionBarInput={(0, e.jsx)(r.XZJ, {
      value: g,
      type: r.XZJ.Types.INVERTED,
      onChange: (t, n) => {
        x(n)
      },
      children: (0, e.jsx)(r.Text, {
        tag: "span",
        variant: "text-sm/normal",
        children: l.intl.string(l.t.KX8WJi)
      })
    })}><r.j7V hideBorder={true} onChange={t => {
        p(t)
      }} value={h}>{l.intl.string(l.t["zLb+u7"])}</r.j7V></s.Modal>
}
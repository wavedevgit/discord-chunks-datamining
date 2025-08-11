/** Chunk was on 18367 **/
/** chunk id: 557751, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk701488 = require("./701488.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  var {
    application: n,
    onCancel: e,
    onClose: s,
    onConfirm: c
  } = t, u = function(t, n) {
    if (null == t) return {};
    var e, r, i = function(t, n) {
      if (null == t) return {};
      var e, r, i = {},
        a = Object.keys(t);
      for (r = 0; r < a.length; r++) e = a[r], n.indexOf(e) >= 0 || (i[e] = t[e]);
      return i
    }(t, n);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      for (r = 0; r < a.length; r++) e = a[r], !(n.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e])
    }
    return i
  }(t, ["application", "onCancel", "onClose", "onConfirm"]);
  return <i.Modal transitionState={u.transitionState} onClose={s} title={l.intl.string(l.t["06YebG"])} actions={[{
      text: l.intl.string(l.t["ETE/oK"]),
      onClick: () => {
        e(), s()
      },
      variant: "secondary"
    }, {
      text: l.intl.string(l.t["3PatS0"]),
      onClick: () => {
        c(), s()
      },
      variant: "primary"
    }]}><a.Kqy>{<a.Text variant={"text-sm/normal"}>{l.intl.format(l.t["s+WDGx"], {
          activityName: n.name
        })}{" "}</a.Text>}{<a.Text variant={"text-sm/normal"}><a.eee href={o.OF}>{l.intl.string(l.t.E0gf5u)}</a.eee></a.Text>}</a.Kqy></i.Modal>
}
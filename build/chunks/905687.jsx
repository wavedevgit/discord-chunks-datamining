/** Chunk was on 83884 **/
/** chunk id: 905687, original params: n,l,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(n) {
  let {
    id: l,
    role: i,
    handleDeletePermission: d
  } = n, a = (0, u.Z)({
    id: l,
    label: null == i ? o.intl.string(o.t["/AXYnJ"]) : o.intl.string(o.t.sMsaLi)
  });
  return t.useEffect(() => {
    null == d && null == a && (0, r.Zy)()
  }, [a, d]), <e.v2r navId={null == i ? "member-permissions-menu" : "role-permissions-menu"} aria-label={null == i ? o.intl.string(o.t.pJMip6) : o.intl.string(o.t.ltedOj)} onClose={r.Zy} onSelect={true}>{null != d && <e.kSQ><e.sNh id={"remove-permission"} color={"danger"} label={null == i ? o.intl.string(o.t.hXfRwM) : o.intl.string(o.t["T+3Adn"])} icon={e.XHJ} action={d} /></e.kSQ>}{null != a && <e.kSQ>{a}</e.kSQ>}</e.v2r>
}
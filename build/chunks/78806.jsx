/** Chunk was on 16459 **/
/** chunk id: 78806, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk833062 = require("./833062.js"),
  Chunk388032 = require("./388032.js");

function o(e) {
  let {
    applicationIds: t
  } = e, r = (0, a.Z)(t).filter(e => null != e);
  if (0 === r.length) return null;
  let o = null;
  if (1 === r.length) o = s.intl.format(s.t.wQ6ur6, {
    applicationName: () => <l.Z application={r[0]} />
  });
  else if (2 === r.length) o = s.intl.format(s.t.C98CSE, {
    applicationName: () => <l.Z application={r[0]} />,
    applicationName2: () => <l.Z application={r[1]} />
  });
  else {
    let e = r[r.length - 1],
      t = r.slice(0, false);
    o = s.intl.format(s.t.UxpwAg, {
      applications: () => t.map(e => <l.Z application={e} useComma={true} />),
      applicationNameLast: () => <l.Z application={e} />
    })
  }
  return <i.Text variant={"text-sm/normal"}>{o}</i.Text>
}
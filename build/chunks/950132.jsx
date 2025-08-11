/** Chunk was on 87626 **/
/** chunk id: 950132, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  h: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk764110 = require("./764110.js"),
  Chunk948789 = require("./948789.js"),
  Chunk982905 = require("./982905.js"),
  Chunk66037 = require("./66037.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk82212 = require("./82212.js");
let d = Chunk231338.j_.MAIN_NAVIGATION_MENU;

function u(e) {
  let {
    isOpen: t,
    dropdownLinks: a,
    TrackClick: u,
    avoidRouter: _,
    id: N,
    "aria-label": m
  } = e, p = (0, s.fQ)({
    history: (0, r.k6)()
  }), h = a.map((e, t) => e.divider ? <hr className={c.divider} /> : e.external ? <li className={c.moreListItemInactive}><u className={c.moreListLink} eventName={d} data={{
        linkClicked: e.linkClicked
      }} href={e.route} rel={"me"}><span className={c.moreListLinkCopy}>{e.title}</span></u></li> : <li className={(0, l.l)(c, "moreListItem", p(e.route) ? "Active" : "Inactive")}><i.Z avoidRouter={_} className={c.moreListLink} to={e.route} from={o.j_.MAIN_NAVIGATION_MENU} role={"menuitem"}><u tag={"span"} className={c.moreListLinkCopy} eventName={d} data={{
          linkClicked: e.linkClicked
        }}>{e.title}</u></i.Z></li>);
  return <ul id={N} className={(0, l.l)(c, "moreList", t ? "Open" : "Closed")} aria-label={m}>{h}</ul>
}
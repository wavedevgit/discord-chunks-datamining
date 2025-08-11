/** Chunk was on 11776 **/
/** chunk id: 384816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666520 = require("./666520.js"),
  Chunk246016 = require("./246016.js"),
  Chunk189156 = require("./189156.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk914010 = require("./914010.js"),
  Chunk246946 = require("./246946.js"),
  Chunk785717 = require("./785717.js"),
  Chunk250822 = require("./250822.js"),
  Chunk771362 = require("./771362.js"),
  Chunk280885 = require("./280885.jsx"),
  Chunk819602 = require("./819602.js"),
  Chunk78806 = require("./78806.jsx"),
  Chunk900927 = require("./900927.js"),
  Chunk678738 = require("./678738.js"),
  Chunk179828 = require("./179828.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.js"),
  Chunk349966 = require("./349966.js");

function I(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: I,
    subsection: P,
    onClose: Z
  } = e, {
    trackUserProfileAction: T
  } = (0, f.KZ)(), N = (0, l.e7)([d.Z], () => d.Z.getGuildId()), E = (0, a.Y)({
    userId: t.id
  }), S = (0, l.e7)([u.Z], () => u.Z.hidePersonalInformation), A = (0, l.e7)([s.default], () => s.default.locale), w = (0, p.Z)(t.id), C = (0, m.Z)(t.id);
  return <i.zJl fade={true} className={_.scroller}>{(null == I ? true : I.bio) != null && (null == I ? true : I.bio) !== "" && !S && <g.Z userBio={I.bio} setLineClamp={false} />}{(null == I ? true : I.guildId) != null && <y.Z user={t} currentUser={n} guildId={I.guildId} scrollIntoView={P === v.Tb.ROLES} />}{t.isProvisional && <x.Z heading={O.intl.string(O.t.Iyka0d)} headingIcon={(0, r.jsx)(i.Mgn, {
        size: "xxs",
        color: i.TVs.colors.HEADER_PRIMARY
      })} headingColor={"header-secondary"}><c.n userId={t.id} /></x.Z>}{E.length > 0 && <x.Z heading={O.intl.string(O.t["Uv/eT0"])}><j.Z applicationIds={E} /></x.Z>}{<x.Z heading={O.intl.string(O.t.a6XYDw)}><h.Z userId={t.id} guildId={null == I ? true : I.guildId} tooltipDelay={v.vB} /></x.Z>}{w.length > 0 && <x.Z heading={O.intl.string(O.t["3fe7U1"])} scrollIntoView={P === v.Tb.CONNECTIONS}><b.ZP connectedAccounts={w} className={_.connections} userId={t.id} locale={A} /></x.Z>}{C.length > 0 && <x.Z heading={O.intl.string(O.t.PHjkRE)}>{C.map(e => (0, r.jsx)(b.tH, {
        className: _.appsConnections,
        applicationRoleConnection: e,
        locale: A,
        onApplicationClicked: () => {
          T({
            action: "PRESS_APP_CONNECTION"
          }), Z()
        },
        selectedGuildId: null != N ? N : true
      }, e.application.id))}</x.Z>}{<x.Z heading={O.intl.string(O.t["mQKv+v"])} scrollIntoView={P === v.Tb.NOTE}><o.Z userId={t.id} className={_.note} autoFocus={P === v.Tb.NOTE} onUpdate={() => T({
          action: "SET_NOTE"
        })} /></x.Z>}</i.zJl>
}
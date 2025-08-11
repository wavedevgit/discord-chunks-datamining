/** Chunk was on 49152 **/
/** chunk id: 277117, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk657707 = require("./657707.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk320582 = require("./320582.js"),
  Chunk246016 = require("./246016.js"),
  Chunk189156 = require("./189156.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk5192 = require("./5192.js"),
  Chunk621853 = require("./621853.js"),
  Chunk209698 = require("./209698.js"),
  Chunk172351 = require("./172351.jsx"),
  Chunk648052 = require("./648052.js"),
  Chunk280885 = require("./280885.js"),
  Chunk483424 = require("./483424.js"),
  Chunk681837 = require("./681837.js"),
  Chunk78806 = require("./78806.jsx"),
  Chunk91433 = require("./91433.jsx"),
  Chunk900927 = require("./900927.js"),
  Chunk944043 = require("./944043.js"),
  Chunk678738 = require("./678738.js"),
  Chunk638970 = require("./638970.js"),
  Chunk502762 = require("./502762.js"),
  Chunk530 = require("./530.jsx"),
  Chunk827313 = require("./827313.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk283189 = require("./283189.js");

function w(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: w,
    channel: A,
    isHovering: D,
    onOpenProfile: k
  } = e, {
    relationshipType: L,
    originApplicationId: M
  } = (0, l.cj)([u.Z], () => ({
    relationshipType: u.Z.getRelationshipType(t.id),
    originApplicationId: u.Z.getOriginApplicationId(t.id)
  })), U = (0, s.vh)(t.id), F = (0, o.Y)({
    userId: t.id
  }), H = (0, l.e7)([d.Z], () => d.Z.hidePersonalInformation), G = (0, l.e7)([p.Z], () => {
    var e;
    return null == (e = p.Z.getUserProfile(t.id)) ? true : e.application
  }), B = (0, f.b)({
    location: "UserProfileSidebarBody"
  });
  return <div className={R.body}>{<I.Z user={t} nickname={h.ZP.getName(null, A.id, t)} pronouns={null == w ? true : w.pronouns} onOpenProfile={k} tags={(0, r.jsx)(m.Z, {
        displayProfile: w,
        themeType: P.lY.SIDEBAR
      })} nicknameIcons={(0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(x.Z, {
          userId: t.id
        }), !H && (0, r.jsx)(Z.Z, {
          userId: t.id,
          isHovering: D,
          onOpenProfile: k
        })]
      })} />}{L === T.OGo.PENDING_INCOMING && <S.Z.Overlay><j.Z user={t} channelId={A.id} applicationId={M} /></S.Z.Overlay>}{U.map(e => <S.Z.Overlay><j.Z user={t} isGameRelationship={true} applicationId={e.applicationId} channelId={A.id} /></S.Z.Overlay>)}{<v.Z user={t} className={R.card} />}{t.isProvisional && <S.Z.Overlay className={R.card}><C.Z heading={N.intl.string(N.t.Iyka0d)} headingIcon={(0, r.jsx)(i.Mgn, {
          size: "xxs",
          color: a.Z.colors.HEADER_PRIMARY
        })} headingColor={"header-primary"}><c.n userId={t.id} /></C.Z></S.Z.Overlay>}{B ? <E.Z user={t} currentUser={n} displayProfile={w} onOpenUserProfileModal={k} /> : <y.Z user={t} currentUser={n} displayProfile={w} className={R.card} />}{<S.Z.Overlay className={R.overlay}>{!H && (null == w ? true : w.bio) != null && (null == w ? true : w.bio) !== "" && <C.Z heading={N.intl.string(N.t["61W33d"])} headingColor={"header-primary"}><b.Z userBio={w.bio} animateOnHover={true} isHovering={D} userId={t.id} /></C.Z>}{(null == G ? true : G.popularApplicationCommandIds) != null && <g.Z applicationId={G.id} commandIds={G.popularApplicationCommandIds} channel={A} />}{F.length > 0 && <C.Z heading={N.intl.string(N.t["Uv/eT0"])} headingColor={"header-primary"}><_.Z applicationIds={F} /></C.Z>}{<C.Z heading={t.bot ? N.intl.string(N.t["A//N4u"]) : N.intl.string(N.t.a6XYDw)} headingColor={"header-primary"}><O.Z userId={t.id} /></C.Z>}</S.Z.Overlay>}</div>
}
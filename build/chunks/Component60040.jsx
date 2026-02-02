/** Chunk was on 23628 **/
/** chunk id: 60040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk92246 = require("./92246.js"),
  Chunk793683 = require("./793683.js"),
  Chunk717415 = require("./717415.jsx"),
  Chunk985018 = require("./985018.jsx");

function b() {
  var e, t, n;
  let {
    quest: b,
    sourceQuestContent: E,
    onClose: g
  } = l.useContext(m.VideoQuestModalContext), h = (0, d.LS)(b), y = (0, o.bG)([c.A], () => c.A.useReducedMotion), O = null != (0, p._Z)(b.config), S = (0, f.v)({
    quest: b,
    questContent: u.uF.QUEST_HOME_DESKTOP,
    sourceQuestContent: E,
    onCloseModal: g,
    shouldShowShopIfAlreadyClaimed: true
  }), _ = (null == (e = b.userStatus) ? true : e.claimedAt) != null ? O ? v.intl.string(v.t.WYchde) : v.intl.string(v.t.vTgCWx) : v.intl.string(v.t.cfY4PE), C = (null == (t = b.userStatus) ? true : t.completedAt) == null ? h ? v.intl.string(v.t.NJ6Bnm) : v.intl.string(v.t.USNO1K) : true;
  return (0, r.jsx)(s.m, {
    text: C,
    children: (0, r.jsx)("div", {
      children: (0, r.jsx)(a.Button, {
        variant: "secondary",
        fullWidth: true,
        icon: ((e, t) => {
          var n, r;
          if ((null == (n = e.userStatus) ? true : n.claimedAt) == null) return {
            type: "rive",
            asset: a.Vs8,
            riveProps: {
              withReducedMotion: "play",
              dataBinding: {
                locked: (null == (r = e.userStatus) ? true : r.completedAt) === null,
                fill: i.A.colors.ICON_STRONG,
                reducedMotion: t
              }
            }
          }
        })(b, y),
        onClick: S,
        text: _,
        disabled: (null == (n = b.userStatus) ? true : n.completedAt) == null
      })
    })
  })
}
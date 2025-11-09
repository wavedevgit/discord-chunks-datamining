/** Chunk was on 94709 **/
/** chunk id: 400565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk430824 = require("./430824.js"),
  Chunk865112 = require("./865112.js"),
  Chunk274256 = require("./274256.js");
let d = e => {
    let {
      mask: t
    } = e;
    return null == t ? null : (0, r.jsx)("div", {
      className: u.maskBackground,
      style: {
        backgroundColor: t.color.css
      },
      children: (0, r.jsx)("img", {
        className: u.maskIcon,
        alt: "",
        src: t.icon
      })
    })
  },
  p = Chunk647438.memo(function(e) {
    var t, n;
    let {
      item: i
    } = e, p = null, h = false, f = (0, l.e7)([s.Z], () => s.Z.getGuild(i.guild_id));
    if (null != i.icon_name) p = (0, r.jsx)("img", {
      alt: "",
      src: c.VH[(0, c.RB)(i.icon_name)]
    });
    else if (null != i.other_user) {
      let e = i.other_user instanceof a.Z ? i.other_user : new a.Z(i.other_user),
        n = null != (t = e.globalName) ? t : e.username;
      p = (0, r.jsx)("img", {
        alt: n,
        className: u.image,
        src: e.getAvatarURL(true, 40)
      }), h = true
    } else p = null != i.icon_url ? (0, r.jsx)("img", {
      alt: null != (n = null == f ? true : f.name) ? n : "",
      className: u.image,
      src: i.icon_url
    }) : (0, r.jsx)("img", {
      alt: "",
      src: c.VH[(0, c.q7)(i)]
    });
    let g = (0, c.Vi)(i.type);
    return (0, r.jsxs)("div", {
      className: u.container,
      children: [(0, r.jsx)(o.ZP, {
        mask: null == g ? o.QS.AVATAR_DEFAULT : o.QS.AVATAR_STATUS_ROUND_16,
        width: 40,
        height: 40,
        rightOverhang: 3,
        bottomOverhang: 3,
        className: u.mask,
        children: (0, r.jsx)("div", {
          className: u.imageContainer,
          style: h ? true : {
            backgroundColor: (0, c.Vu)(i)
          },
          children: p
        })
      }), (0, r.jsx)(d, {
        mask: g
      })]
    })
  })
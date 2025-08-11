/** Chunk was on 34779 **/
/** chunk id: 400565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk865112 = require("./865112.js"),
  Chunk926487 = require("./926487.js");
let c = e => {
    let {
      mask: t
    } = e;
    return null == t ? null : (0, r.jsx)("div", {
      className: a.maskBackground,
      style: {
        backgroundColor: t.color.css
      },
      children: (0, r.jsx)("img", {
        className: a.maskIcon,
        alt: "",
        src: t.icon
      })
    })
  },
  u = Chunk73800.memo(function(e) {
    let {
      item: t
    } = e, n = null, i = false;
    if (null != t.icon_name) n = (0, r.jsx)("img", {
      alt: "",
      src: s.VH[(0, s.RB)(t.icon_name)]
    });
    else if (null != t.other_user) {
      let e = t.other_user instanceof o.Z ? t.other_user : new o.Z(t.other_user);
      n = (0, r.jsx)("img", {
        alt: "",
        className: a.image,
        src: e.getAvatarURL(true, 40)
      }), i = true
    } else n = null != t.icon_url ? (0, r.jsx)("img", {
      alt: "",
      className: a.image,
      src: t.icon_url
    }) : (0, r.jsx)("img", {
      alt: "",
      src: s.VH[(0, s.q7)(t)]
    });
    let u = (0, s.Vi)(t.type);
    return (0, r.jsxs)("div", {
      className: a.container,
      children: [(0, r.jsx)(l.ZP, {
        mask: null == u ? l.QS.AVATAR_DEFAULT : l.QS.AVATAR_STATUS_ROUND_16,
        width: 40,
        height: 40,
        rightOverhang: 3,
        bottomOverhang: 3,
        className: a.mask,
        children: (0, r.jsx)("div", {
          className: a.imageContainer,
          style: i ? true : {
            backgroundColor: (0, s.Vu)(t)
          },
          children: n
        })
      }), (0, r.jsx)(c, {
        mask: u
      })]
    })
  })
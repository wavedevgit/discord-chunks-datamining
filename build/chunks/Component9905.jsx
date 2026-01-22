/** Chunk was on 97492 **/
/** chunk id: 9905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  J: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk427157 = require("./427157.js"),
  Chunk71393 = require("./71393.js"),
  Chunk961291 = require("./961291.js"),
  Chunk192849 = require("./192849.js");
let d = e => {
    let {
      mask: t
    } = e;
    return null == t ? null : (0, r.jsx)("div", {
      className: u.tK,
      style: {
        backgroundColor: t.color.css
      },
      children: (0, r.jsx)("img", {
        className: u.QR,
        alt: "",
        src: t.icon
      })
    })
  },
  f = Chunk64700.memo(function(e) {
    var t, n;
    let {
      item: l
    } = e, f = null, p = false, h = (0, i.bG)([o.A], () => o.A.getGuild(l.guild_id));
    if (null != l.icon_name) f = (0, r.jsx)("img", {
      alt: "",
      src: c.rr[(0, c.yI)(l.icon_name)]
    });
    else if (null != l.other_user) {
      let e = l.other_user instanceof s.A ? l.other_user : new s.A(l.other_user),
        n = null != (t = e.globalName) ? t : e.username;
      f = (0, r.jsx)("img", {
        alt: n,
        className: u.Sl,
        src: e.getAvatarURL(true, 40)
      }), p = true
    } else f = null != l.icon_url ? (0, r.jsx)("img", {
      alt: null != (n = null == h ? true : h.name) ? n : "",
      className: u.Sl,
      src: l.icon_url
    }) : (0, r.jsx)("img", {
      alt: "",
      src: c.rr[(0, c.sW)(l)]
    });
    let b = (0, c.rS)(l.type);
    return (0, r.jsxs)("div", {
      className: u.kL,
      children: [(0, r.jsx)(a.Ay, {
        mask: null == b ? a.hW.AVATAR_DEFAULT : a.hW.AVATAR_STATUS_ROUND_16,
        width: 40,
        height: 40,
        rightOverhang: 3,
        bottomOverhang: 3,
        className: u.dK,
        children: (0, r.jsx)("div", {
          className: u.ZS,
          style: p ? true : {
            backgroundColor: (0, c.Pm)(l)
          },
          children: f
        })
      }), (0, r.jsx)(d, {
        mask: b
      })]
    })
  })
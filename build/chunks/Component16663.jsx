/** Chunk was on 41091 **/
/** chunk id: 16663, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk182592 = require("./182592.jsx"),
  Chunk950191 = require("./950191.js"),
  Chunk718019 = require("./718019.jsx"),
  Chunk31432 = require("./31432.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk810396 = require("./810396.jsx"),
  Chunk159218 = require("./159218.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk98167 = require("./98167.js");

function b(t) {
  var e;
  let {
    user: n,
    previewText: b,
    previewEmoji: A,
    previewStatus: T,
    placeHolderText: y,
    transitionState: O
  } = t, S = (0, a.Ay)(n.id), j = null != b && "" !== b || null != A ? g.intl.formatToPlainString(g.t.UpF5Qa, {
    emoji: null != (e = null == A ? true : A.name) ? e : "",
    status: b
  }) : "".concat(g.intl.string(g.t.EVV6uZ), ": ").concat(y);
  return (0, l.jsx)("div", {
    role: "img",
    "aria-label": j,
    children: (0, l.jsxs)(c.A, {
      user: n,
      displayProfile: S,
      themeType: p.d.POPOUT,
      className: h.ti,
      "aria-hidden": "true",
      children: [(0, l.jsxs)("header", {
        children: [(0, l.jsx)(u.A, {
          user: n,
          displayProfile: S,
          themeType: p.d.POPOUT
        }), (0, l.jsx)("div", {
          inert: true,
          children: (0, l.jsx)(o.A, {
            user: n,
            displayProfile: S,
            themeType: p.d.POPOUT,
            previewStatus: T,
            className: h.my
          })
        }), (0, l.jsx)(m.A, {
          user: n,
          themeType: p.d.POPOUT,
          previewText: b,
          previewEmoji: A,
          placeholderText: y,
          hasEntered: O === r.ip4.ENTERED
        })]
      }), (null == S ? true : S.profileEffect) != null && (0, l.jsx)(i.A, {
        skuId: S.profileEffect.skuId
      }), (0, l.jsx)("div", {
        className: h.QV,
        inert: true,
        children: (0, l.jsx)(d.A, {
          user: n,
          nickname: f.Ay.getName(null, null, n),
          pronouns: null == S ? true : S.pronouns,
          tags: (0, l.jsx)(s.A, {
            displayProfile: S,
            themeType: p.d.POPOUT
          })
        })
      })]
    })
  })
}
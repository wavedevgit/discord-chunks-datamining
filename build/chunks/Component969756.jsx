/** Chunk was on 21968 **/
/** chunk id: 969756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk282956 = require("./282956.js"),
  Chunk429913 = require("./429913.js"),
  Chunk713654 = require("./713654.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk887501 = require("./887501.js"),
  Chunk975571 = require("./975571.js"),
  Chunk523352 = require("./523352.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk358330 = require("./358330.js");

function x(e) {
  let {
    applicationId: t,
    channels: n
  } = e, r = (0, c.h)(t);
  return 0 === n.length || null == r ? null : (0, i.jsxs)("div", {
    className: h.kF,
    children: [(0, i.jsxs)("div", {
      className: h.wx,
      children: [(0, i.jsx)(u.A, {
        game: r,
        size: u.M.XSMALL
      }), (0, i.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        children: null == r ? true : r.name
      })]
    }), n.map(e => {
      var t;
      return (0, i.jsx)(g.q, {
        channel: e,
        application: r,
        name: e.name,
        icon: null != (t = (0, d.gU)(e)) ? t : true,
        iconWrapperClassName: h.N3,
        hasNextSection: true,
        trailing: (0, i.jsx)(s.R2l, {
          size: "xs"
        })
      }, e.id)
    })]
  })
}

function j(e) {
  let {
    guild: t
  } = e, n = (0, p.A)(t.id), l = a().groupBy(n, e => {
    var t;
    return null == (t = e.linkedLobby) ? true : t.application_id
  }), c = Object.keys(l);
  return r.useEffect(() => {
    0 === n.length && o.A.setSection(b.wLn.OVERVIEW)
  }, [n]), (0, i.jsxs)("div", {
    children: [(0, i.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: f.intl.format(f.t["9gsSLu"], {
        helpdeskArticle: m.A.getArticleURL(b.MVz.LINKED_LOBBIES)
      })
    }), (0, i.jsx)(s.cGx, {
      className: h.zN
    }), c.map(e => (0, i.jsx)(x, {
      applicationId: e,
      channels: l[e]
    }, e))]
  })
}
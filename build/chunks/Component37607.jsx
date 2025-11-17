/** Chunk was on 86736 **/
/** chunk id: 37607, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk835473 = require("./835473.js"),
  Chunk471445 = require("./471445.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk163400 = require("./163400.js"),
  Chunk63063 = require("./63063.js"),
  Chunk466070 = require("./466070.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk588993 = require("./588993.js");

function x(e) {
  let {
    applicationId: t,
    channels: n
  } = e, r = (0, c.q)(t);
  return 0 === n.length || null == r ? null : (0, i.jsxs)("div", {
    className: h.applicationGroup,
    children: [(0, i.jsxs)("div", {
      className: h.header,
      children: [(0, i.jsx)(u.Z, {
        game: r,
        size: u.A.XSMALL
      }), (0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: null == r ? true : r.name
      })]
    }), n.map(e => {
      var t;
      return (0, i.jsx)(b.t, {
        channel: e,
        application: r,
        name: e.name,
        icon: null != (t = (0, d.KS)(e)) ? t : true,
        iconWrapperClassName: h.iconwrapper,
        hasNextSection: true,
        trailing: (0, i.jsx)(o.vdY, {
          size: "xs"
        })
      }, e.id)
    })]
  })
}

function j(e) {
  let {
    guild: t
  } = e, n = (0, p.F)(t.id), l = a().groupBy(n, e => {
    var t;
    return null == (t = e.linkedLobby) ? true : t.application_id
  }), c = Object.keys(l);
  return r.useEffect(() => {
    0 === n.length && s.Z.setSection(g.b4C.OVERVIEW)
  }, [n]), (0, i.jsxs)("div", {
    children: [(0, i.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: f.intl.format(f.t["9gsSLu"], {
        helpdeskArticle: m.Z.getArticleURL(g.BhN.LINKED_LOBBIES)
      })
    }), (0, i.jsx)(o.izJ, {
      className: h.headerDivider
    }), c.map(e => (0, i.jsx)(x, {
      applicationId: e,
      channels: l[e]
    }, e))]
  })
}
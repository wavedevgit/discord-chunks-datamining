/** Chunk was on 21738 **/
/** chunk id: 939899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  R: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk362490 = require("./362490.js"),
  Chunk429913 = require("./429913.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk622543 = require("./622543.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk413611 = require("./413611.js");

function A(e) {
  let {
    applicationId: t,
    size: n = "default"
  } = e, i = (0, o.bG)([g.A], () => g.A.getApplicationWidgetConfig(t));
  return (0, r.jsxs)("div", {
    className: a()(f.kL, {
      [f.PG]: "small" === n
    }),
    children: [(0, r.jsxs)("div", {
      className: f.Qs,
      children: [(0, r.jsx)("div", {
        className: f.wx
      }), (0, r.jsx)("div", {
        className: f.yF
      }), (0, r.jsxs)("div", {
        className: f.M1,
        children: [(0, r.jsx)("div", {
          className: f.dJ
        }), (0, r.jsx)("div", {
          className: f.dJ
        }), (0, r.jsx)("div", {
          className: f.dJ
        }), (0, r.jsx)("div", {
          className: f.dJ
        }), (0, r.jsx)("div", {
          className: f.dJ
        }), (0, r.jsx)("div", {
          className: f.dJ
        })]
      })]
    }), (0, r.jsx)("div", {
      className: f.ZS,
      children: (null == i ? true : i.miniPreviewImage) != null ? (0, r.jsx)("img", {
        src: i.miniPreviewImage,
        alt: "",
        className: f.oz
      }) : (0, r.jsx)("div", {
        className: f.FQ
      })
    })]
  })
}

function _(e) {
  let {
    applicationId: t,
    size: n = "default"
  } = e, {
    trackUserProfileAction: l
  } = (0, h.NJ)(), a = (0, p.h)(t), {
    hasAlreadyLinked: o,
    canStartAuthorization: g,
    startAuthorization: A,
    fetched: _
  } = (0, d.RD)(a), {
    analyticsLocations: b
  } = (0, u.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET), E = i.useCallback(() => {
    g && (l({
      action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
      applicationId: t
    }), A({
      analyticsLocations: b
    }))
  }, [g, l, t, A, b]);
  return "default" !== n || null == a ? null : (0, r.jsxs)("div", {
    className: f.qr,
    children: [(0, r.jsx)(s.A5T, {
      size: "xs"
    }), (0, r.jsx)(s.EYj, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: _ ? o ? m.intl.format(m.t.wiyuG9, {
        applicationName: a.name
      }) : g ? m.intl.format(m.t.RNWFOQ, {
        onConnect: E
      }) : m.intl.string(m.t["9TX4UT"]) : (0, r.jsx)("div", {
        className: f.bg
      })
    })]
  })
}
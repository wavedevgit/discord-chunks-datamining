/** Chunk was on 20088 **/
/** chunk id: 939899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m,
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

function m(e) {
  let {
    applicationId: t,
    size: n = "default"
  } = e, l = (0, o.bG)([A.A], () => A.A.getApplicationWidgetConfig(t));
  return (0, r.jsxs)("div", {
    className: a()(b.kL, {
      [b.PG]: "small" === n
    }),
    children: [(0, r.jsxs)("div", {
      className: b.Qs,
      children: [(0, r.jsx)("div", {
        className: b.wx
      }), (0, r.jsx)("div", {
        className: b.yF
      }), (0, r.jsxs)("div", {
        className: b.M1,
        children: [(0, r.jsx)("div", {
          className: b.dJ
        }), (0, r.jsx)("div", {
          className: b.dJ
        }), (0, r.jsx)("div", {
          className: b.dJ
        }), (0, r.jsx)("div", {
          className: b.dJ
        }), (0, r.jsx)("div", {
          className: b.dJ
        }), (0, r.jsx)("div", {
          className: b.dJ
        })]
      })]
    }), (0, r.jsx)("div", {
      className: b.ZS,
      children: (null == l ? true : l.miniPreviewImage) != null ? (0, r.jsx)("img", {
        src: l.miniPreviewImage,
        alt: "",
        className: b.oz
      }) : (0, r.jsx)("div", {
        className: b.FQ
      })
    })]
  })
}

function _(e) {
  let {
    applicationId: t,
    size: n = "default"
  } = e, {
    trackUserProfileAction: i
  } = (0, f.NJ)(), a = (0, v.h)(t), {
    hasAlreadyLinked: o,
    canStartAuthorization: A,
    startAuthorization: m,
    fetched: _
  } = (0, c.RD)(a), {
    analyticsLocations: O
  } = (0, d.Ay)(u.A.USER_PROFILE_APPLICATION_WIDGET), E = l.useCallback(() => {
    A && (i({
      action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
      applicationId: t
    }), m({
      analyticsLocations: O
    }))
  }, [A, i, t, m, O]);
  return "default" !== n || null == a ? null : (0, r.jsxs)("div", {
    className: b.qr,
    children: [(0, r.jsx)(s.A5T, {
      size: "xs"
    }), (0, r.jsx)(s.EYj, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: _ ? o ? p.intl.format(p.t.wiyuG9, {
        applicationName: a.name
      }) : A ? p.intl.format(p.t.RNWFOQ, {
        onConnect: E
      }) : p.intl.string(p.t["9TX4UT"]) : (0, r.jsx)("div", {
        className: b.bg
      })
    })]
  })
}
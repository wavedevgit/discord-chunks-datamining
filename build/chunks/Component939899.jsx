/** Chunk was on 42944 **/
/** chunk id: 939899, original params: e,a,n (module,exports,require) **/
require.d(exports, {
  A: () => g,
  R: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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

function g(e) {
  let {
    applicationId: a,
    size: n = "default"
  } = e, l = (0, o.bG)([f.A], () => f.A.getApplicationWidgetConfig(a));
  return (0, t.jsxs)("div", {
    className: r()(x.kL, {
      [x.PG]: "small" === n
    }),
    children: [(0, t.jsxs)("div", {
      className: x.Qs,
      children: [(0, t.jsx)("div", {
        className: x.wx
      }), (0, t.jsx)("div", {
        className: x.yF
      }), (0, t.jsxs)("div", {
        className: x.M1,
        children: [(0, t.jsx)("div", {
          className: x.dJ
        }), (0, t.jsx)("div", {
          className: x.dJ
        }), (0, t.jsx)("div", {
          className: x.dJ
        }), (0, t.jsx)("div", {
          className: x.dJ
        }), (0, t.jsx)("div", {
          className: x.dJ
        }), (0, t.jsx)("div", {
          className: x.dJ
        })]
      })]
    }), (0, t.jsx)("div", {
      className: x.ZS,
      children: (null == l ? true : l.miniPreviewImage) != null ? (0, t.jsx)("img", {
        src: l.miniPreviewImage,
        alt: "",
        className: x.oz
      }) : (0, t.jsx)("div", {
        className: x.FQ
      })
    })]
  })
}

function A(e) {
  let {
    applicationId: a,
    size: n = "default"
  } = e, {
    trackUserProfileAction: i
  } = (0, p.NJ)(), r = (0, m.h)(a), {
    hasAlreadyLinked: o,
    canStartAuthorization: f,
    startAuthorization: g,
    fetched: A
  } = (0, u.RD)(r), {
    analyticsLocations: j
  } = (0, d.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET), h = l.useCallback(() => {
    f && (i({
      action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
      applicationId: a
    }), g({
      analyticsLocations: j
    }))
  }, [f, i, a, g, j]);
  return "default" !== n || null == r ? null : (0, t.jsxs)("div", {
    className: x.qr,
    children: [(0, t.jsx)(s.A5T, {
      size: "xs"
    }), (0, t.jsx)(s.EYj, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: A ? o ? v.intl.format(v.t.wiyuG9, {
        applicationName: r.name
      }) : f ? v.intl.format(v.t.RNWFOQ, {
        onConnect: h
      }) : v.intl.string(v.t["9TX4UT"]) : (0, t.jsx)("div", {
        className: x.bg
      })
    })]
  })
}
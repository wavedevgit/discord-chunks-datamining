/** Chunk was on 20545 **/
/** chunk id: 939899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  R: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
  } = e, l = (0, d.bG)([f.A], () => f.A.getApplicationWidgetConfig(t));
  return (0, i.jsxs)("div", {
    className: s()(x.kL, {
      [x.PG]: "small" === n
    }),
    children: [(0, i.jsxs)("div", {
      className: x.Qs,
      children: [(0, i.jsx)("div", {
        className: x.wx
      }), (0, i.jsx)("div", {
        className: x.yF
      }), (0, i.jsxs)("div", {
        className: x.M1,
        children: [(0, i.jsx)("div", {
          className: x.dJ
        }), (0, i.jsx)("div", {
          className: x.dJ
        }), (0, i.jsx)("div", {
          className: x.dJ
        }), (0, i.jsx)("div", {
          className: x.dJ
        }), (0, i.jsx)("div", {
          className: x.dJ
        }), (0, i.jsx)("div", {
          className: x.dJ
        })]
      })]
    }), (0, i.jsx)("div", {
      className: x.ZS,
      children: (null == l ? true : l.miniPreviewImage) != null ? (0, i.jsx)("img", {
        src: l.miniPreviewImage,
        alt: "",
        className: x.oz
      }) : (0, i.jsx)("div", {
        className: x.FQ
      })
    })]
  })
}

function g(e) {
  let {
    applicationId: t,
    size: n = "default"
  } = e, {
    trackUserProfileAction: r
  } = (0, v.NJ)(), s = (0, m.h)(t), {
    hasAlreadyLinked: d,
    canStartAuthorization: f,
    startAuthorization: A,
    fetched: g
  } = (0, c.RD)(s), {
    analyticsLocations: p
  } = (0, o.Ay)(u.A.USER_PROFILE_APPLICATION_WIDGET), L = l.useCallback(() => {
    f && (r({
      action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
      applicationId: t
    }), A({
      analyticsLocations: p
    }))
  }, [f, r, t, A, p]);
  return "default" !== n || null == s ? null : (0, i.jsxs)("div", {
    className: x.qr,
    children: [(0, i.jsx)(a.A5T, {
      size: "xs"
    }), (0, i.jsx)(a.EYj, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: g ? d ? h.intl.format(h.t.wiyuG9, {
        applicationName: s.name
      }) : f ? h.intl.format(h.t.RNWFOQ, {
        onConnect: L
      }) : h.intl.string(h.t["9TX4UT"]) : (0, i.jsx)("div", {
        className: x.bg
      })
    })]
  })
}
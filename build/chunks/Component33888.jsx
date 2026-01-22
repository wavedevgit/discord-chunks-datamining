/** Chunk was on 47841 **/
/** chunk id: 33888, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk649640 = require("./649640.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk486020 = require("./486020.js"),
  Chunk835517 = require("./835517.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk282435 = require("./282435.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk168938 = require("./168938.js");

function O(e) {
  let {
    profile: t,
    canManageGuild: n,
    handleClick: i,
    hasCustomBanner: l
  } = e, a = (0, d.b2)(), u = (0, d.aG)({
    profile: t,
    defaultColor: a.hex(),
    forceDefaultColor: false
  });
  return (0, r.jsx)(c.m, {
    asContainer: true,
    text: h.intl.string(h.t.W4Nd7Q),
    children: (0, r.jsx)(o.DUT, {
      "aria-disabled": !n,
      tabIndex: n ? 0 : false,
      "aria-label": h.intl.string(h.t.W4Nd7Q),
      onClick: n ? i : true,
      style: {
        background: (0, d.n6)(u)
      },
      className: s()(j.DB, {
        [j.r9]: !n
      }),
      children: (0, r.jsx)("div", {
        className: s()({
          [j.z2]: !l && null == t.brandColorPrimary
        })
      })
    })
  })
}

function y(e) {
  let {
    isDiscoverable: t,
    profile: n,
    onCustomBannerChange: l,
    canManageGuild: a
  } = e, c = null != n.customBanner, d = i.useMemo(() => {
    if (null == n.customBanner) return null;
    let e = n.customBanner;
    return g.aq.test(e) ? e : g.Ay.getGuildDiscoverySplashURL({
      id: n.id,
      splash: n.customBanner,
      size: 300 * (0, b.A)()
    })
  }, [n]);
  if (!t) return null;
  let f = null != d ? (0, r.jsx)("img", {
    className: j.qX,
    src: d,
    alt: "",
    "aria-hidden": true
  }) : (0, r.jsx)(o.kpT, {
    size: "md"
  });
  return (0, r.jsx)("div", {
    className: j.sK,
    children: (0, r.jsx)(o.vN3, {
      within: true,
      children: (0, r.jsx)("div", {
        className: s()(j.K7, {
          [j.e7]: c
        }),
        children: (0, r.jsxs)("div", {
          className: s()(j.vw, {
            [j.r9]: !a
          }),
          children: [f, (0, r.jsx)("div", {
            className: j.Lw
          }), (0, r.jsx)(o.R2l, {
            size: "custom",
            className: j.QY,
            width: 20,
            height: 20,
            color: "white"
          }), (0, r.jsx)(u.Ay, {
            multiple: false,
            tabIndex: 0,
            onChange: l,
            disabled: !a
          })]
        })
      })
    })
  })
}

function v(e) {
  var t;
  let {
    profile: n,
    onCustomBannerChange: l,
    canManageGuild: u
  } = e, g = (0, a.bG)([f.A], () => f.A.getGuild(n.id)), b = null != (t = null == g ? true : g.features.has(p.GuildFeatures.DISCOVERABLE)) && t, v = n.id, A = i.useCallback(e => () => {
    m.A.updateGuildProfile(v, {
      brandColorPrimary: e,
      customBanner: null
    })
  }, [v]), E = i.useCallback(e => (!b || null == n.customBanner) && e === n.brandColorPrimary, [n, b]);
  return (0, r.jsx)(o.D0$, {
    label: h.intl.string(h.t.BSVog8),
    children: (0, r.jsxs)("div", {
      className: j.Vg,
      children: [(0, r.jsx)(O, {
        profile: n,
        canManageGuild: u,
        handleClick: A(null),
        hasCustomBanner: b && null != n.customBanner
      }), x.aA.map(e => {
        let {
          name: t,
          color: n
        } = e;
        return (0, r.jsx)(c.m, {
          asContainer: true,
          __unsupportedReactNodeAsText: t,
          children: (0, r.jsx)(o.DUT, {
            "aria-disabled": !u,
            tabIndex: u ? 0 : false,
            "aria-label": t,
            onClick: u ? A(n) : true,
            style: {
              background: (0, d.n6)(n)
            },
            className: s()(j.DB, {
              [j.r9]: !u
            }),
            children: (0, r.jsx)("div", {
              className: s()({
                [j.z2]: E(n)
              })
            })
          })
        }, t)
      }), (0, r.jsx)(y, {
        canManageGuild: u,
        isDiscoverable: b,
        profile: n,
        onCustomBannerChange: l
      })]
    })
  })
}
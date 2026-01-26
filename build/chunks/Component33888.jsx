/** Chunk was on 39048 **/
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

function _(e) {
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
  return (0, r.jsx)(o.m, {
    asContainer: true,
    text: x.intl.string(x.t.W4Nd7Q),
    children: (0, r.jsx)(c.DUT, {
      "aria-disabled": !n,
      tabIndex: n ? 0 : false,
      "aria-label": x.intl.string(x.t.W4Nd7Q),
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

function O(e) {
  let {
    isDiscoverable: t,
    profile: n,
    onCustomBannerChange: l,
    canManageGuild: a
  } = e, o = null != n.customBanner, d = i.useMemo(() => {
    if (null == n.customBanner) return null;
    let e = n.customBanner;
    return m.aq.test(e) ? e : m.Ay.getGuildDiscoverySplashURL({
      id: n.id,
      splash: n.customBanner,
      size: 300 * (0, p.A)()
    })
  }, [n]);
  if (!t) return null;
  let g = null != d ? (0, r.jsx)("img", {
    className: j.qX,
    src: d,
    alt: "",
    "aria-hidden": true
  }) : (0, r.jsx)(c.kpT, {
    size: "md"
  });
  return (0, r.jsx)("div", {
    className: j.sK,
    children: (0, r.jsx)(c.vN3, {
      within: true,
      children: (0, r.jsx)("div", {
        className: s()(j.K7, {
          [j.e7]: o
        }),
        children: (0, r.jsxs)("div", {
          className: s()(j.vw, {
            [j.r9]: !a
          }),
          children: [g, (0, r.jsx)("div", {
            className: j.Lw
          }), (0, r.jsx)(c.R2l, {
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
  } = e, m = (0, a.bG)([g.A], () => g.A.getGuild(n.id)), p = null != (t = null == m ? true : m.features.has(h.GuildFeatures.DISCOVERABLE)) && t, v = n.id, y = i.useCallback(e => () => {
    f.A.updateGuildProfile(v, {
      brandColorPrimary: e,
      customBanner: null
    })
  }, [v]), A = i.useCallback(e => (!p || null == n.customBanner) && e === n.brandColorPrimary, [n, p]);
  return (0, r.jsx)(c.D0$, {
    label: x.intl.string(x.t.BSVog8),
    children: (0, r.jsxs)("div", {
      className: j.Vg,
      children: [(0, r.jsx)(_, {
        profile: n,
        canManageGuild: u,
        handleClick: y(null),
        hasCustomBanner: p && null != n.customBanner
      }), b.aA.map(e => {
        let {
          name: t,
          color: n
        } = e;
        return (0, r.jsx)(o.m, {
          asContainer: true,
          __unsupportedReactNodeAsText: t,
          children: (0, r.jsx)(c.DUT, {
            "aria-disabled": !u,
            tabIndex: u ? 0 : false,
            "aria-label": t,
            onClick: u ? y(n) : true,
            style: {
              background: (0, d.n6)(n)
            },
            className: s()(j.DB, {
              [j.r9]: !u
            }),
            children: (0, r.jsx)("div", {
              className: s()({
                [j.z2]: A(n)
              })
            })
          })
        }, t)
      }), (0, r.jsx)(O, {
        canManageGuild: u,
        isDiscoverable: p,
        profile: n,
        onCustomBannerChange: l
      })]
    })
  })
}
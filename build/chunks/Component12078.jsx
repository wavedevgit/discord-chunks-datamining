/** Chunk was on 384 **/
/** chunk id: 12078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk220250 = require("./220250.js"),
  Chunk813197 = require("./813197.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk921948 = require("./921948.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk570911 = require("./570911.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk453921 = require("./453921.js");

function _(e) {
  let {
    profile: t,
    canManageGuild: n,
    handleClick: i,
    hasCustomBanner: l
  } = e, s = (0, d.nv)(), u = (0, d.qw)({
    profile: t,
    defaultColor: s.hex(),
    forceDefaultColor: false
  });
  return (0, r.jsx)(o.u, {
    asContainer: true,
    text: x.intl.string(x.t.W4Nd7Q),
    children: (0, r.jsx)(c.P3F, {
      "aria-disabled": !n,
      tabIndex: n ? 0 : false,
      "aria-label": x.intl.string(x.t.W4Nd7Q),
      onClick: n ? i : true,
      style: {
        background: (0, d.dG)(u)
      },
      className: a()(j.itemContainer, {
        [j.disabled]: !n
      }),
      children: (0, r.jsx)("div", {
        className: a()({
          [j.itemSelected]: !l && null == t.brandColorPrimary
        })
      })
    })
  })
}

function v(e) {
  let {
    isDiscoverable: t,
    profile: n,
    onCustomBannerChange: l,
    canManageGuild: s
  } = e, o = null != n.customBanner, d = i.useMemo(() => {
    if (null == n.customBanner) return null;
    let e = n.customBanner;
    return m.ff.test(e) ? e : m.ZP.getGuildDiscoverySplashURL({
      id: n.id,
      splash: n.customBanner,
      size: 300 * (0, p.Z)()
    })
  }, [n]);
  if (!t) return null;
  let g = null != d ? (0, r.jsx)("img", {
    className: j.uploadedImage,
    src: d,
    alt: "",
    "aria-hidden": true
  }) : (0, r.jsx)(c.dZu, {
    size: "md"
  });
  return (0, r.jsx)("div", {
    className: j.uploadItemContainer,
    children: (0, r.jsx)(c.tEY, {
      within: true,
      children: (0, r.jsx)("div", {
        className: a()(j.uploadItemWrapper, {
          [j.uploadItemSelected]: o
        }),
        children: (0, r.jsxs)("div", {
          className: a()(j.uploadItem, {
            [j.disabled]: !s
          }),
          children: [g, (0, r.jsx)("div", {
            className: j.overlay
          }), (0, r.jsx)(c.vdY, {
            size: "custom",
            className: j.overlayIcon,
            width: 20,
            height: 20,
            color: "white"
          }), (0, r.jsx)(u.ZP, {
            multiple: false,
            tabIndex: 0,
            onChange: l,
            disabled: !s
          })]
        })
      })
    })
  })
}

function O(e) {
  var t;
  let {
    profile: n,
    onCustomBannerChange: l,
    canManageGuild: u
  } = e, m = (0, s.e7)([g.Z], () => g.Z.getGuild(n.id)), p = null != (t = null == m ? true : m.features.has(h.GuildFeatures.DISCOVERABLE)) && t, O = n.id, C = i.useCallback(e => () => {
    f.Z.updateGuildProfile(O, {
      brandColorPrimary: e,
      customBanner: null
    })
  }, [O]), y = i.useCallback(e => (!p || null == n.customBanner) && e === n.brandColorPrimary, [n, p]);
  return (0, r.jsx)(c.gNt, {
    label: x.intl.string(x.t.BSVog8),
    children: (0, r.jsxs)("div", {
      className: j.grid,
      children: [(0, r.jsx)(_, {
        profile: n,
        canManageGuild: u,
        handleClick: C(null),
        hasCustomBanner: p && null != n.customBanner
      }), b.cb.map(e => {
        let {
          name: t,
          color: n
        } = e;
        return (0, r.jsx)(o.u, {
          asContainer: true,
          __unsupportedReactNodeAsText: t,
          children: (0, r.jsx)(c.P3F, {
            "aria-disabled": !u,
            tabIndex: u ? 0 : false,
            "aria-label": t,
            onClick: u ? C(n) : true,
            style: {
              background: (0, d.dG)(n)
            },
            className: a()(j.itemContainer, {
              [j.disabled]: !u
            }),
            children: (0, r.jsx)("div", {
              className: a()({
                [j.itemSelected]: y(n)
              })
            })
          })
        }, t)
      }), (0, r.jsx)(v, {
        canManageGuild: u,
        isDiscoverable: p,
        profile: n,
        onCustomBannerChange: l
      })]
    })
  })
}
/** Chunk was on 22325 **/
/** chunk id: 299560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk823379 = require("./823379.js"),
  Chunk804919 = require("./804919.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk86419 = require("./86419.js"),
  Chunk50130 = require("./50130.js"),
  Chunk872269 = require("./872269.js"),
  Chunk248554 = require("./248554.jsx"),
  Chunk70399 = require("./70399.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk229870 = require("./229870.js");
let x = {
  [Chunk296009.l.FAVORITE_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: Chunk804919.L.LEAGUE_OF_LEGENDS
    }),
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.xJtdIi)
  },
  [Chunk296009.l.CURRENT_GAMES]: {
    placeholder: () => ({
      variant: "details",
      applicationId: Chunk804919.L.VALORANT
    }),
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.Ae8tRk)
  },
  [Chunk296009.l.PLAYED_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [Chunk804919.L.PEAK, Chunk804919.L.APEX_LEGENDS, Chunk804919.L.REPO, Chunk804919.L.BALDURS_GATE_3]
    }),
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t["pBR+4u"])
  },
  [Chunk296009.l.WANT_TO_PLAY_GAMES]: {
    placeholder: () => ({
      variant: "grid",
      applicationIds: [Chunk804919.L.MARVEL_RIVALS, Chunk804919.L.WORLD_OF_WARCRAFT, Chunk804919.L.BATTLEFIELD_6, Chunk804919.L.RUST]
    }),
    getAriaLabel: () => Chunk388032.intl.string(Chunk388032.t.NtoBi4)
  },
  [Chunk296009.l.APPLICATION]: {
    placeholder: e => ({
      variant: "application-widget",
      applicationId: e.applicationId
    }),
    icon: e => {
      var t;
      return null == (t = s.Z.getApplication(e.applicationId)) ? true : t.getIconURL(16)
    },
    getAriaLabel: e => {
      var t, n;
      return j.intl.formatToPlainString(j.t.KfGahI, {
        applicationName: null != (n = null == (t = s.Z.getApplication(e.applicationId)) ? true : t.name) ? n : ""
      })
    }
  }
};

function _(e) {
  let t, {
      widgetType: n,
      onAddWidget: a,
      size: s = "default",
      loading: d = false,
      trackUserProfileEditAction: j
    } = e,
    {
      placeholder: _,
      getAriaLabel: I,
      icon: P
    } = x[n],
    w = "small" === s,
    {
      config: S
    } = (0, m.G)(),
    E = i.useMemo(() => {
      switch (n) {
        case o.l.CURRENT_GAMES:
        case o.l.FAVORITE_GAMES:
        case o.l.PLAYED_GAMES:
        case o.l.WANT_TO_PLAY_GAMES:
          return new g.zy({
            type: n,
            games: []
          });
        case o.l.APPLICATION:
          let e = null == S ? true : S.application_id;
          if (null == e) return null;
          return new f.q({
            type: n,
            applicationId: e
          })
      }
    }, [n, null == S ? true : S.application_id]),
    T = i.useCallback(() => {
      d || null == E || ((0, p.qH)(n, E), j({
        action: "WIDGET_ADDED",
        widgetEdited: n
      }), (0, b.L$)(y.qb.WIDGET_ADDED), null == a || a())
    }, [d, n, E, j, a]);
  return (null != E && null != P && (t = P(E)), null == E) ? null : (0, r.jsxs)("div", {
    className: O.addButtonContainer,
    children: [(0, r.jsxs)(c.P3F, {
      className: l()(O.addButtonContent, w && O.sizeSmall, d && O.loading),
      onClick: T,
      "aria-label": I(E),
      "aria-busy": d,
      children: [(() => {
        if (null == E) return null;
        let e = _(E);
        switch (e.variant) {
          case "details":
            return (0, r.jsx)(h.i, {
              className: O.placeholderPadding,
              applicationId: e.applicationId,
              size: s
            });
          case "grid":
            return (0, r.jsx)(h.c, {
              className: O.placeholderPadding,
              applicationIds: e.applicationIds,
              size: s
            });
          case "application-widget":
            return (0, r.jsx)(v.Z, {
              applicationId: e.applicationId,
              size: s
            });
          default:
            return (0, u.vE)(e)
        }
      })(), (0, r.jsxs)("div", {
        className: O.overlay,
        children: [(0, r.jsx)(c.oFk, {
          size: "md",
          color: "currentColor",
          className: O.addButton
        }), (0, r.jsxs)("div", {
          className: O.title,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: (0, p.mR)(E)
          }), null != t ? (0, r.jsx)("img", {
            src: t,
            alt: "",
            width: 16,
            height: 16,
            className: O.icon
          }) : null]
        })]
      })]
    }), (() => {
      if (null == E) return null;
      let e = _(E);
      return "application-widget" === e.variant ? (0, r.jsx)(v.T, {
        applicationId: e.applicationId,
        size: s
      }) : null
    })()]
  })
}
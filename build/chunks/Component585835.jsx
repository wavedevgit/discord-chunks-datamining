/** Chunk was on 47463 **/
/** chunk id: 585835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk243814 = require("./243814.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk213459 = require("./213459.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk488915 = require("./488915.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk598077 = require("./598077.js"),
  Chunk626135 = require("./626135.js"),
  Chunk486199 = require("./486199.jsx"),
  Chunk929507 = require("./929507.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk473059 = require("./473059.js");

function C(e) {
  var t, n, l;
  let {
    name: C,
    icon: N,
    imageSrc: Z,
    iconBackgroundColor: S,
    iconClassName: w,
    iconWrapperClassName: I,
    details: T,
    integration: P,
    buttonText: E,
    buttonDisabled: k,
    hasNextSection: A,
    onButtonClick: D,
    guildId: R,
    isScrolling: L,
    canShowMigrationTooltip: M,
    trailing: B
  } = e, [W, U] = r.useState(false), [H, G] = r.useState(false), z = M && !L && !H && true !== R && null != P, F = r.useRef(null), K = r.useRef(null), q = r.useCallback((e, t, n, r) => null == e || null == r ? null : n ? (0, i.jsxs)(b.Z, {
    align: b.Z.Align.CENTER,
    ref: K,
    children: [(0, i.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: e
    }), n ? (0, i.jsx)(u.Fbu, {
      size: "custom",
      color: "currentColor",
      width: 10,
      height: 10,
      className: _.caret
    }) : null]
  }) : (0, i.jsx)(d.zx, {
    buttonRef: F,
    size: d.zx.Sizes.SMALL,
    look: n ? d.zx.Looks.LINK : d.zx.Looks.FILLED,
    color: n ? d.zx.Colors.PRIMARY : d.zx.Colors.BRAND,
    disabled: t,
    onClick: r,
    children: e
  }), [F, K])(E, k, A, D);
  r.useEffect(() => {
    var e, t;
    z && x.default.track(y.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, (e = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, (0, p.hH)(R)), t = t = {
      application_id: null == P ? true : P.application.id,
      location: "overview"
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e))
  }, [R, null == P ? true : P.application.id, z]);
  let V = z ? (0, i.jsx)(u.yRy, {
      targetElementRef: A ? K : F,
      renderPopout: () => (0, i.jsx)(u.P3F, {
        onClick: e => {
          e.stopPropagation(), G(true), v.Z.dismissOverviewTooltip(R, P.integration)
        },
        children: (0, i.jsx)(f.ZP, {
          content: O.intl.string(O.t.TyMJwM),
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: u.yRy.Animation.TRANSLATE,
      shouldShow: true,
      children: () => q
    }) : q,
    Y = (0, s.Wu)([g.Z], () => {
      var e;
      return null != P && null != R && null != (e = g.Z.getApplicationEntitlementsForGuild(P.application.id, R)) ? e : []
    }),
    $ = (0, m.LD)(R, true),
    J = (null == P ? true : P.application) != null && Object.keys(null != (l = null == (n = $.result) || null == (t = n.sections[P.application.id]) ? true : t.commands) ? l : {}).length > 0,
    X = (0, i.jsxs)(b.Z, {
      children: [(0, i.jsx)(j.Z, {
        name: C,
        icon: N,
        imageSrc: Z,
        iconBackgroundColor: S,
        iconClassName: w,
        iconWrapperClassName: I,
        details: T,
        isPremium: Y.length > 0
      }), (0, i.jsx)(b.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsxs)(b.Z, {
          align: b.Z.Align.CENTER,
          justify: b.Z.Justify.END,
          children: [function(e, t, n) {
            var r, l;
            if (null == e) return null;
            let a = [],
              {
                application: s,
                integration: d,
                webhooks: p
              } = e;
            return null != s.bot && (null == d || null == (r = d.scopes) ? true : r.includes(o.x.BOT)) && a.push((0, i.jsx)(c.u, {
              asContainer: true,
              forceOpen: t,
              text: new h.Z(s.bot).isVerifiedBot() ? O.intl.string(O.t.xxcTGx) : O.intl.string(O.t.AOdOYm),
              children: (0, i.jsx)(u.wGt, {
                size: "md",
                color: "currentColor",
                className: _.featureIcon
              })
            }, "bot")), p.length > 0 && a.push((0, i.jsx)(c.u, {
              asContainer: true,
              forceOpen: t,
              text: O.intl.formatToPlainString(O.t["6HqDfX"], {
                count: p.length
              }),
              children: (0, i.jsx)(u.tYf, {
                size: "md",
                color: "currentColor",
                className: _.featureIcon
              })
            }, "webhooks")), (null == d || null == (l = d.scopes) ? true : l.includes(o.x.APPLICATIONS_COMMANDS)) === true && n && a.push((0, i.jsx)(c.u, {
              asContainer: true,
              forceOpen: t,
              text: O.intl.string(O.t["0hKkS0"]),
              children: (0, i.jsx)(u.SsZ, {
                size: "md",
                color: "currentColor",
                className: _.featureIcon
              })
            }, "commands")), a
          }(P, W, J), V, B]
        })
      })]
    });
  return A ? (0, i.jsx)(u.P3F, {
    onClick: () => {
      M && null != R && null != P && v.Z.dismissOverviewTooltip(R, P.integration), null == D || D()
    },
    onFocus: () => U(true),
    onBlur: () => U(false),
    children: (0, i.jsx)(u.Zbd, {
      editable: true,
      className: a()(_.card, _.clickable),
      children: X
    })
  }) : (0, i.jsx)(u.Zbd, {
    editable: true,
    className: _.card,
    children: X
  })
}
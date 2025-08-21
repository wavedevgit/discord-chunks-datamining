/** Chunk was on 47463 **/
/** chunk id: 585835, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk243814 = require("./243814.js"),
  Chunk442837 = require("./442837.js"),
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

function _(e) {
  var t, n, l;
  let {
    name: _,
    icon: C,
    imageSrc: N,
    iconBackgroundColor: Z,
    iconClassName: S,
    iconWrapperClassName: w,
    details: I,
    integration: T,
    buttonText: P,
    buttonDisabled: E,
    hasNextSection: k,
    onButtonClick: A,
    guildId: D,
    isScrolling: R,
    canShowMigrationTooltip: L,
    trailing: M
  } = e, [B, W] = r.useState(false), [U, H] = r.useState(false), G = L && !R && !U && true !== D && null != T, z = r.useRef(null), F = r.useRef(null), K = r.useCallback((e, t, n, r) => null == e || null == r ? null : n ? (0, i.jsxs)(m.Z, {
    align: m.Z.Align.CENTER,
    ref: F,
    children: [(0, i.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: e
    }), n ? (0, i.jsx)(d.Fbu, {
      size: "custom",
      color: "currentColor",
      width: 10,
      height: 10,
      className: O.caret
    }) : null]
  }) : (0, i.jsx)(c.zx, {
    buttonRef: z,
    size: c.zx.Sizes.SMALL,
    look: n ? c.zx.Looks.LINK : c.zx.Looks.FILLED,
    color: n ? c.zx.Colors.PRIMARY : c.zx.Colors.BRAND,
    disabled: t,
    onClick: r,
    children: e
  }), [z, F])(P, E, k, A);
  r.useEffect(() => {
    var e, t;
    G && h.default.track(v.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, (e = function(e) {
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
    }({}, (0, u.hH)(D)), t = t = {
      application_id: null == T ? true : T.application.id,
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
  }, [D, null == T ? true : T.application.id, G]);
  let V = G ? (0, i.jsx)(d.yRy, {
      targetElementRef: k ? F : z,
      renderPopout: () => (0, i.jsx)(d.P3F, {
        onClick: e => {
          e.stopPropagation(), H(true), j.Z.dismissOverviewTooltip(D, T.integration)
        },
        children: (0, i.jsx)(g.ZP, {
          content: y.intl.string(y.t.TyMJwM),
          onClick: () => {}
        })
      }),
      position: "bottom",
      align: "center",
      animation: d.yRy.Animation.TRANSLATE,
      shouldShow: true,
      children: () => K
    }) : K,
    q = (0, s.Wu)([b.Z], () => {
      var e;
      return null != T && null != D && null != (e = b.Z.getApplicationEntitlementsForGuild(T.application.id, D)) ? e : []
    }),
    Y = (0, p.LD)(D, true),
    $ = (null == T ? true : T.application) != null && Object.keys(null != (l = null == (n = Y.result) || null == (t = n.sections[T.application.id]) ? true : t.commands) ? l : {}).length > 0,
    J = (0, i.jsxs)(m.Z, {
      children: [(0, i.jsx)(x.Z, {
        name: _,
        icon: C,
        imageSrc: N,
        iconBackgroundColor: Z,
        iconClassName: S,
        iconWrapperClassName: w,
        details: I,
        isPremium: q.length > 0
      }), (0, i.jsx)(m.Z.Child, {
        shrink: 0,
        grow: 0,
        children: (0, i.jsxs)(m.Z, {
          align: m.Z.Align.CENTER,
          justify: m.Z.Justify.END,
          children: [function(e, t, n) {
            var r, l;
            if (null == e) return null;
            let a = [],
              {
                application: s,
                integration: c,
                webhooks: u
              } = e;
            return null != s.bot && (null == c || null == (r = c.scopes) ? true : r.includes(o.x.BOT)) && a.push((0, i.jsx)(d.DY3, {
              forceOpen: t,
              text: new f.Z(s.bot).isVerifiedBot() ? y.intl.string(y.t.xxcTGx) : y.intl.string(y.t.AOdOYm),
              className: O.feature,
              children: (0, i.jsx)(d.wGt, {
                size: "md",
                color: "currentColor",
                className: O.featureIcon
              })
            }, "bot")), u.length > 0 && a.push((0, i.jsx)(d.DY3, {
              forceOpen: t,
              text: y.intl.formatToPlainString(y.t["6HqDfX"], {
                count: u.length
              }),
              className: O.feature,
              children: (0, i.jsx)(d.tYf, {
                size: "md",
                color: "currentColor",
                className: O.featureIcon
              })
            }, "webhooks")), (null == c || null == (l = c.scopes) ? true : l.includes(o.x.APPLICATIONS_COMMANDS)) === true && n && a.push((0, i.jsx)(d.DY3, {
              forceOpen: t,
              text: y.intl.string(y.t["0hKkS0"]),
              className: O.feature,
              children: (0, i.jsx)(d.SsZ, {
                size: "md",
                color: "currentColor",
                className: O.featureIcon
              })
            }, "commands")), a
          }(T, B, $), V, M]
        })
      })]
    });
  return k ? (0, i.jsx)(d.P3F, {
    onClick: () => {
      L && null != D && null != T && j.Z.dismissOverviewTooltip(D, T.integration), null == A || A()
    },
    onFocus: () => W(true),
    onBlur: () => W(false),
    children: (0, i.jsx)(d.Zbd, {
      editable: true,
      className: a()(O.card, O.clickable),
      children: J
    })
  }) : (0, i.jsx)(d.Zbd, {
    editable: true,
    className: O.card,
    children: J
  })
}